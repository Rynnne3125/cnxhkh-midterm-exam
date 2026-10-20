// =========================================================================
// APP CONTROLLER: HỆ THỐNG THI TRỰC TUYẾN CNXHKH
// Góc nhìn Giảng viên Khoa Lý luận Chính trị
// =========================================================================

// State Management
const state = {
  currentSetIndex: 0, // 0: Đề 1, 1: Đề 2, 2: Đề 3, 'random': Đề ngẫu nhiên
  currentExam: null,
  currentQuestionIndex: 0,
  userAnswers: new Array(30).fill(null),
  flaggedQuestions: new Array(30).fill(false),
  timeRemaining: 15 * 60, // 900 giây (15 phút)
  timerInterval: null,
  isSubmitted: false,
  studyMode: 'exam', // 'exam' (Thi thật) hoặc 'practice' (Luyện tập tức thì)
  viewMode: 'single', // 'single' (Từng câu) hoặc 'list' (Danh sách toàn bộ)
  soundEnabled: true,
  filterReview: 'all', // 'all', 'wrong', 'flagged'
  startTime: null,
  endTime: null
};

// Web Audio API Synthesizer (Không phụ thuộc file mp3 ngoài)
class SoundFX {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      this.ctx = new (window.AudioContext || window.webkitAudioContext)();
    }
  }

  playClick() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sine';
    osc.frequency.setValueAtTime(600, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(300, this.ctx.currentTime + 0.05);
    gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.05);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.05);
  }

  playFlag() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(440, this.ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
    gain.gain.setValueAtTime(0.1, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.08);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.08);
  }

  playWarning() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(800, this.ctx.currentTime);
    gain.gain.setValueAtTime(0.12, this.ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + 0.25);
    osc.connect(gain);
    gain.connect(this.ctx.destination);
    osc.start();
    osc.stop(this.ctx.currentTime + 0.25);
  }

  playFanfare() {
    if (!state.soundEnabled) return;
    this.init();
    if (!this.ctx) return;
    const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
    notes.forEach((freq, idx) => {
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime + idx * 0.12);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime + idx * 0.12);
      gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + idx * 0.12 + 0.3);
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.start(this.ctx.currentTime + idx * 0.12);
      osc.stop(this.ctx.currentTime + idx * 0.12 + 0.3);
    });
  }
}

const sfx = new SoundFX();

// ==========================================
// Khởi tạo ứng dụng
// ==========================================
document.addEventListener("DOMContentLoaded", () => {
  initExam(0);
  setupEventListeners();
  renderCheatSheet();
  updateHistoryBadge();
  lucide.createIcons();
});

// Khởi tạo đề thi
function initExam(setIndex) {
  state.currentSetIndex = setIndex;
  if (setIndex === 'random') {
    state.currentExam = generateRandomExam();
  } else {
    // Clone để không ảnh hưởng dữ liệu gốc
    state.currentExam = JSON.parse(JSON.stringify(EXAM_SETS[setIndex]));
  }

  state.currentQuestionIndex = 0;
  state.userAnswers = new Array(30).fill(null);
  state.flaggedQuestions = new Array(30).fill(false);
  state.timeRemaining = 15 * 60; // 15 phút
  state.isSubmitted = false;
  state.startTime = new Date();
  state.endTime = null;

  clearInterval(state.timerInterval);
  startTimer();

  // Cập nhật giao diện
  updateExamHeader();
  renderQuestionPalette();
  renderQuestionContent();
  updateProgressStats();
  
  // Ẩn bảng điểm kết quả và thanh lọc review nếu đang mở
  document.getElementById("results-panel").classList.add("hidden");
  document.getElementById("exam-active-panel").classList.remove("hidden");
  const filterBar = document.getElementById("review-filter-bar");
  if (filterBar) filterBar.classList.add("hidden");

  // Cuộn mượt lên đầu
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Cập nhật Header Đề thi
function updateExamHeader() {
  document.getElementById("exam-code-badge").textContent = state.currentExam.code;
  document.getElementById("exam-title").textContent = state.currentExam.title;
  document.getElementById("exam-description").textContent = state.currentExam.description;
  
  // Nút chọn đề trên thanh navbar
  document.querySelectorAll(".exam-tab-btn").forEach((btn) => {
    const btnSet = btn.getAttribute("data-set");
    if (btnSet == state.currentSetIndex) {
      btn.classList.add("bg-red-700", "text-white", "shadow-sm");
      btn.classList.remove("text-slate-700", "hover:bg-slate-100", "bg-amber-100", "text-amber-900");
    } else {
      btn.classList.remove("bg-red-700", "text-white", "shadow-sm");
      if (btnSet === "random") {
        btn.classList.add("bg-amber-100", "text-amber-900", "hover:bg-amber-200");
      } else {
        btn.classList.add("text-slate-700", "hover:bg-slate-100");
      }
    }
  });

  // Chế độ thi
  const modeBadge = document.getElementById("study-mode-badge");
  const modeLabel = document.getElementById("study-mode-label");
  if (state.studyMode === 'exam') {
    modeBadge.textContent = "Chế độ: Thi Giữa Kỳ (Chuẩn Khảo Thí)";
    modeBadge.className = "px-3 py-0.5 text-xs font-semibold rounded-full bg-red-100 text-red-800 border border-red-200 flex items-center gap-1.5";
    if (modeLabel) modeLabel.textContent = "Thi Thật (15p)";
  } else {
    modeBadge.textContent = "Chế độ: Luyện Tập (Hiện Giải Thích Ngay)";
    modeBadge.className = "px-3 py-0.5 text-xs font-semibold rounded-full bg-emerald-100 text-emerald-800 border border-emerald-200 flex items-center gap-1.5";
    if (modeLabel) modeLabel.textContent = "Luyện Tập Tức Thì";
  }
}

// ==========================================
// Bộ đếm thời gian 15 phút
// ==========================================
function startTimer() {
  updateTimerDisplay();
  state.timerInterval = setInterval(() => {
    state.timeRemaining--;

    updateTimerDisplay();

    // Cảnh báo khi còn 3 phút
    if (state.timeRemaining === 180) {
      showToast("Lưu ý: Thời gian làm bài chỉ còn đúng 3 phút!", "warning");
      sfx.playWarning();
    }

    // Cảnh báo khẩn cấp khi còn 1 phút
    if (state.timeRemaining === 60) {
      showToast("Khẩn cấp: Chỉ còn 1 phút! Hãy kiểm tra lại các câu chưa làm.", "error");
      sfx.playWarning();
    }

    // Hết giờ -> Tự động nộp bài
    if (state.timeRemaining <= 0) {
      clearInterval(state.timerInterval);
      state.timeRemaining = 0;
      updateTimerDisplay();
      showToast("Đã hết 15 phút làm bài! Hệ thống đang tự động thu bài và chấm điểm.", "info");
      submitExam(true);
    }
  }, 1000);
}

function updateTimerDisplay() {
  const minutes = Math.floor(state.timeRemaining / 60);
  const seconds = state.timeRemaining % 60;
  const timeStr = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  
  const timerEl = document.getElementById("timer-display");
  const timerContainer = document.getElementById("timer-container");
  
  timerEl.textContent = timeStr;

  if (state.timeRemaining <= 60) {
    timerContainer.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-red-700 bg-red-100 border border-red-300 timer-urgent";
  } else if (state.timeRemaining <= 180) {
    timerContainer.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-amber-700 bg-amber-50 border border-amber-300";
  } else {
    timerContainer.className = "flex items-center gap-2 px-3 py-1.5 rounded-lg font-mono font-bold text-slate-800 bg-white border border-slate-200 shadow-sm";
  }
}

// ==========================================
// Render Bảng số câu hỏi (Question Palette)
// ==========================================
function renderQuestionPalette() {
  const container = document.getElementById("palette-grid");
  container.innerHTML = "";

  state.currentExam.questions.forEach((q, idx) => {
    const btn = document.createElement("button");
    btn.className = getPaletteBtnClass(idx);
    btn.setAttribute("data-q-idx", idx);
    btn.onclick = () => {
      sfx.playClick();
      goToQuestion(idx);
    };

    const numSpan = document.createElement("span");
    numSpan.textContent = idx + 1;
    btn.appendChild(numSpan);

    if (state.flaggedQuestions[idx]) {
      const flagIcon = document.createElement("span");
      flagIcon.className = "absolute -top-1 -right-1 text-[10px] text-amber-500 font-bold";
      flagIcon.innerHTML = "★";
      btn.appendChild(flagIcon);
    }

    container.appendChild(btn);
  });
}

function getPaletteBtnClass(idx) {
  let base = "palette-btn relative w-9 h-9 rounded-md text-xs font-semibold flex items-center justify-center transition-all smooth-transition border ";
  
  const isCurrent = idx === state.currentQuestionIndex && state.viewMode === 'single';
  const isAnswered = state.userAnswers[idx] !== null;
  const isFlagged = state.flaggedQuestions[idx];

  if (state.isSubmitted) {
    // Sau khi nộp bài: hiển thị đúng/sai
    const isCorrect = state.userAnswers[idx] === state.currentExam.questions[idx].correct;
    if (isCorrect) {
      base += "bg-emerald-600 text-white border-emerald-700 shadow-sm ";
    } else {
      base += "bg-red-600 text-white border-red-700 shadow-sm ";
    }
  } else {
    // Trong khi làm bài
    if (isFlagged) {
      base += "bg-amber-100 text-amber-800 border-amber-400 font-bold ";
    } else if (isAnswered) {
      base += "bg-blue-600 text-white border-blue-700 shadow-sm ";
    } else {
      base += "bg-slate-100 text-slate-700 border-slate-200 hover:bg-slate-200 ";
    }
  }

  if (isCurrent) {
    base += "ring-2 ring-red-600 ring-offset-1 ";
  }

  return base;
}

// Chuyển tới câu hỏi
function goToQuestion(idx) {
  state.currentQuestionIndex = idx;
  if (state.viewMode === 'single') {
    renderQuestionContent();
  } else {
    // Nếu ở chế độ danh sách, cuộn mượt tới vị trí câu đó
    const targetEl = document.getElementById(`question-card-${idx}`);
    if (targetEl) {
      targetEl.scrollIntoView({ behavior: 'smooth', block: 'center' });
      targetEl.classList.add("ring-2", "ring-red-500");
      setTimeout(() => targetEl.classList.remove("ring-2", "ring-red-500"), 1200);
    }
  }
  renderQuestionPalette();
}

// ==========================================
// Render Nội Dung Câu Hỏi
// ==========================================
function renderQuestionContent() {
  const container = document.getElementById("question-display-area");
  container.innerHTML = "";

  if (state.viewMode === 'single') {
    // Focus Mode: Chỉ hiện câu hiện tại
    const q = state.currentExam.questions[state.currentQuestionIndex];
    container.appendChild(createQuestionCard(q, state.currentQuestionIndex));
    renderSingleNavControls();
  } else {
    // List Mode: Hiện toàn bộ 30 câu liên tiếp
    state.currentExam.questions.forEach((q, idx) => {
      container.appendChild(createQuestionCard(q, idx));
    });
  }

  lucide.createIcons();
}

// Tạo Card Câu hỏi
function createQuestionCard(q, idx) {
  const card = document.createElement("div");
  card.id = `question-card-${idx}`;
  card.className = "bg-white rounded-xl p-5 md:p-6 border border-slate-200 shadow-sm mb-5 transition-all smooth-transition";

  // Header của Card: Badge chương, mức độ, nút cắm cờ
  const cardHeader = document.createElement("div");
  cardHeader.className = "flex items-center justify-between pb-3 mb-4 border-b border-slate-100";

  const badgeGroup = document.createElement("div");
  badgeGroup.className = "flex flex-wrap items-center gap-2";

  // Badge Số câu
  const numBadge = document.createElement("span");
  numBadge.className = "px-2.5 py-1 text-xs font-bold rounded-md bg-slate-800 text-white";
  numBadge.textContent = `Câu ${idx + 1} / 30`;

  // Badge Chương
  const chapBadge = document.createElement("span");
  chapBadge.className = "px-2.5 py-1 text-xs font-medium rounded-md bg-red-50 text-red-700 border border-red-100";
  chapBadge.textContent = q.chapter;

  // Badge Mức độ
  const levelBadge = document.createElement("span");
  let levelColor = "bg-slate-100 text-slate-700";
  if (q.level === "Thông hiểu") levelColor = "bg-blue-50 text-blue-700 border border-blue-100";
  if (q.level === "Vận dụng") levelColor = "bg-amber-50 text-amber-700 border border-amber-100";
  if (q.level === "Phân tích") levelColor = "bg-purple-50 text-purple-700 border border-purple-100";
  levelBadge.className = `px-2 py-0.5 text-[11px] font-semibold rounded-md ${levelColor}`;
  levelBadge.textContent = q.level;

  badgeGroup.appendChild(numBadge);
  badgeGroup.appendChild(chapBadge);
  badgeGroup.appendChild(levelBadge);

  // Nút Cắm Cờ (Flag)
  const flagBtn = document.createElement("button");
  flagBtn.className = `flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold smooth-transition border ${
    state.flaggedQuestions[idx]
      ? "bg-amber-100 text-amber-800 border-amber-300"
      : "bg-slate-50 text-slate-600 border-slate-200 hover:bg-amber-50 hover:text-amber-700"
  }`;
  flagBtn.innerHTML = `
    <i data-lucide="flag" class="w-3.5 h-3.5 ${state.flaggedQuestions[idx] ? "fill-amber-600 text-amber-600" : ""}"></i>
    <span>${state.flaggedQuestions[idx] ? "Đã đánh dấu" : "Cắm cờ"}</span>
  `;
  flagBtn.onclick = () => toggleFlag(idx);

  cardHeader.appendChild(badgeGroup);
  cardHeader.appendChild(flagBtn);

  // Nội dung câu hỏi
  const questionTitle = document.createElement("h3");
  questionTitle.className = "text-base md:text-lg font-semibold text-slate-900 leading-relaxed mb-5";
  questionTitle.textContent = q.question;

  // Danh sách các lựa chọn A, B, C, D
  const optionsList = document.createElement("div");
  optionsList.className = "space-y-3";

  const optLabels = ["A", "B", "C", "D"];
  q.options.forEach((optText, optIdx) => {
    const optBtn = document.createElement("button");
    optBtn.className = getOptionBtnClass(idx, optIdx);
    optBtn.disabled = state.isSubmitted && state.studyMode === 'exam';

    optBtn.onclick = () => {
      sfx.playClick();
      selectOption(idx, optIdx);
    };

    const optPrefix = document.createElement("span");
    optPrefix.className = getOptionPrefixClass(idx, optIdx);
    optPrefix.textContent = optLabels[optIdx];

    const optBody = document.createElement("span");
    optBody.className = "text-sm md:text-base text-slate-800 font-normal leading-snug";
    optBody.textContent = optText;

    optBtn.appendChild(optPrefix);
    optBtn.appendChild(optBody);
    optionsList.appendChild(optBtn);
  });

  card.appendChild(cardHeader);
  card.appendChild(questionTitle);
  card.appendChild(optionsList);

  // Nếu ở chế độ Luyện tập hoặc Đã nộp bài: Hiển thị giải thích sư phạm ngay dưới câu
  if ((state.studyMode === 'practice' && state.userAnswers[idx] !== null) || state.isSubmitted) {
    const explanationBox = createPedagogicalCommentaryBox(q, idx);
    card.appendChild(explanationBox);
  }

  return card;
}

// Class cho nút chọn đáp án
function getOptionBtnClass(qIdx, optIdx) {
  let base = "option-btn w-full text-left p-3.5 md:p-4 rounded-xl flex items-start gap-3 smooth-transition ";
  const isSelected = state.userAnswers[qIdx] === optIdx;
  const isCorrect = optIdx === state.currentExam.questions[qIdx].correct;

  if (state.isSubmitted || (state.studyMode === 'practice' && state.userAnswers[qIdx] !== null)) {
    if (isCorrect) {
      base += "is-correct-answer ";
    } else if (isSelected && !isCorrect) {
      base += "is-wrong-answer ";
    } else {
      base += "bg-white opacity-60 border-slate-200 ";
    }
  } else {
    if (isSelected) {
      base += "selected ";
    } else {
      base += "bg-white ";
    }
  }

  return base;
}

// Class cho huy hiệu chữ A, B, C, D
function getOptionPrefixClass(qIdx, optIdx) {
  let base = "w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold shrink-0 smooth-transition ";
  const isSelected = state.userAnswers[qIdx] === optIdx;
  const isCorrect = optIdx === state.currentExam.questions[qIdx].correct;

  if (state.isSubmitted || (state.studyMode === 'practice' && state.userAnswers[qIdx] !== null)) {
    if (isCorrect) {
      base += "bg-emerald-600 text-white ";
    } else if (isSelected && !isCorrect) {
      base += "bg-red-600 text-white ";
    } else {
      base += "bg-slate-100 text-slate-600 ";
    }
  } else {
    if (isSelected) {
      base += "bg-red-700 text-white ";
    } else {
      base += "bg-slate-100 text-slate-700 border border-slate-200 ";
    }
  }

  return base;
}

// Khung "Luận Giải Sư Phạm & Vạch Trần Bẫy Trắc Nghiệm"
function createPedagogicalCommentaryBox(q, qIdx) {
  const box = document.createElement("div");
  box.className = "mt-5 pt-4 border-t border-slate-200/80 bg-slate-50/70 p-4 rounded-xl space-y-3";

  const userChoice = state.userAnswers[qIdx];
  const isCorrect = userChoice === q.correct;

  const header = document.createElement("div");
  header.className = "flex items-center gap-2";
  header.innerHTML = `
    <div class="w-6 h-6 rounded-full flex items-center justify-center ${isCorrect ? 'bg-emerald-100 text-emerald-700' : 'bg-red-100 text-red-700'}">
      <i data-lucide="${isCorrect ? 'check-circle-2' : 'alert-circle'}" class="w-4 h-4"></i>
    </div>
    <span class="text-xs md:text-sm font-bold uppercase tracking-wider ${isCorrect ? 'text-emerald-800' : 'text-red-800'}">
      ${isCorrect ? 'ĐÁP ÁN CHÍNH XÁC' : 'CHƯA CHÍNH XÁC - CẦN LƯU Ý'}
    </span>
  `;

  // Đáp án chuẩn
  const correctInfo = document.createElement("div");
  correctInfo.className = "text-xs md:text-sm text-slate-700";
  correctInfo.innerHTML = `<strong>Đáp án đúng:</strong> <span class="font-semibold text-emerald-800">${["A", "B", "C", "D"][q.correct]}. ${q.options[q.correct]}</span>`;

  // Luận giải chi tiết
  const explanationText = document.createElement("div");
  explanationText.className = "text-xs md:text-sm text-slate-700 bg-white p-3 rounded-lg border border-slate-200/60 leading-relaxed";
  explanationText.innerHTML = `
    <div class="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
      <i data-lucide="book-open" class="w-4 h-4 text-red-700"></i>
      Luận giải của Giảng viên:
    </div>
    <div>${q.explanation}</div>
  `;

  // Vạch trần bẫy trắc nghiệm
  const trapBox = document.createElement("div");
  trapBox.className = "text-xs md:text-sm text-amber-900 bg-amber-50/80 p-3 rounded-lg border border-amber-200/70 leading-relaxed";
  trapBox.innerHTML = `
    <div class="font-semibold text-amber-950 mb-1 flex items-center gap-1.5">
      <i data-lucide="shield-alert" class="w-4 h-4 text-amber-700"></i>
      Nhận diện bẫy tư duy của Giảng viên:
    </div>
    <div>${q.trapAnalysis}</div>
  `;

  box.appendChild(header);
  box.appendChild(correctInfo);
  box.appendChild(explanationText);
  box.appendChild(trapBox);

  return box;
}

// Điều hướng thanh dưới ở Single Focus Mode
function renderSingleNavControls() {
  const container = document.getElementById("single-nav-bar");
  container.className = "flex items-center justify-between mt-6 pt-4 border-t border-slate-200";

  const prevBtn = document.createElement("button");
  prevBtn.className = `flex items-center gap-1.5 px-4 py-2.5 rounded-lg text-sm font-semibold border smooth-transition ${
    state.currentQuestionIndex === 0
      ? "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed"
      : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50"
  }`;
  prevBtn.disabled = state.currentQuestionIndex === 0;
  prevBtn.innerHTML = `<i data-lucide="arrow-left" class="w-4 h-4"></i> <span>Câu trước</span>`;
  prevBtn.onclick = () => {
    if (state.currentQuestionIndex > 0) {
      sfx.playClick();
      goToQuestion(state.currentQuestionIndex - 1);
    }
  };

  const statusLabel = document.createElement("span");
  statusLabel.className = "text-xs md:text-sm text-slate-500 font-medium";
  statusLabel.textContent = `Câu ${state.currentQuestionIndex + 1} / 30`;

  const nextBtn = document.createElement("button");
  nextBtn.className = `flex items-center gap-1.5 px-5 py-2.5 rounded-lg text-sm font-semibold smooth-transition ${
    state.currentQuestionIndex === 29
      ? "bg-slate-800 text-white hover:bg-slate-900"
      : "bg-red-700 text-white hover:bg-red-800 shadow-sm"
  }`;
  nextBtn.innerHTML = state.currentQuestionIndex === 29 
    ? `<span>Kiểm tra lại</span> <i data-lucide="check" class="w-4 h-4"></i>`
    : `<span>Câu tiếp theo</span> <i data-lucide="arrow-right" class="w-4 h-4"></i>`;
  nextBtn.onclick = () => {
    sfx.playClick();
    if (state.currentQuestionIndex < 29) {
      goToQuestion(state.currentQuestionIndex + 1);
    } else {
      // Ở câu cuối cùng, mở hộp thoại nộp bài hoặc nhắc nhở
      promptSubmitModal();
    }
  };

  container.innerHTML = "";
  container.appendChild(prevBtn);
  container.appendChild(statusLabel);
  container.appendChild(nextBtn);
}

// Xử lý chọn đáp án
function selectOption(qIdx, optIdx) {
  if (state.isSubmitted && state.studyMode === 'exam') return;

  state.userAnswers[qIdx] = optIdx;
  updateProgressStats();
  renderQuestionPalette();

  if (state.viewMode === 'single') {
    renderQuestionContent();
  } else {
    // Trong list mode, render lại card câu đó để cập nhật màu sắc và giải thích tức thì nếu ở practice mode
    const card = document.getElementById(`question-card-${qIdx}`);
    if (card) {
      const newCard = createQuestionCard(state.currentExam.questions[qIdx], qIdx);
      card.replaceWith(newCard);
      lucide.createIcons();
    }
  }
}

// Xử lý cắm cờ / bỏ cờ
function toggleFlag(qIdx) {
  state.flaggedQuestions[qIdx] = !state.flaggedQuestions[qIdx];
  sfx.playFlag();
  renderQuestionPalette();
  updateProgressStats();
  
  if (state.viewMode === 'single') {
    renderQuestionContent();
  } else {
    const card = document.getElementById(`question-card-${qIdx}`);
    if (card) {
      const newCard = createQuestionCard(state.currentExam.questions[qIdx], qIdx);
      card.replaceWith(newCard);
      lucide.createIcons();
    }
  }
}

// Cập nhật thống kê tiến độ trên thanh sidebar
function updateProgressStats() {
  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const flaggedCount = state.flaggedQuestions.filter(f => f).length;
  const remainingCount = 30 - answeredCount;

  document.getElementById("stat-answered").textContent = answeredCount;
  document.getElementById("stat-remaining").textContent = remainingCount;
  document.getElementById("stat-flagged").textContent = flaggedCount;

  // Thanh tiến độ %
  const pct = Math.round((answeredCount / 30) * 100);
  document.getElementById("progress-bar-fill").style.width = `${pct}%`;
  document.getElementById("progress-bar-text").textContent = `${pct}% (${answeredCount}/30 câu)`;
}

// ==========================================
// Nộp bài & Đánh giá năng lực của Giảng viên
// ==========================================
function promptSubmitModal() {
  const answeredCount = state.userAnswers.filter(a => a !== null).length;
  const unAnsweredIndices = [];
  state.userAnswers.forEach((ans, idx) => {
    if (ans === null) unAnsweredIndices.push(idx + 1);
  });

  const modal = document.getElementById("confirm-submit-modal");
  const modalText = document.getElementById("confirm-submit-text");

  if (unAnsweredIndices.length > 0) {
    modalText.innerHTML = `
      <div class="p-3 bg-amber-50 border border-amber-200 rounded-lg text-amber-900 text-sm mb-3">
        <strong>Cảnh báo Giảng viên:</strong> Em còn <strong>${unAnsweredIndices.length} câu</strong> chưa chọn đáp án: 
        <span class="font-mono text-red-600 font-bold">${unAnsweredIndices.join(", ")}</span>.
      </div>
      <p class="text-slate-600 text-sm">Thời gian làm bài vẫn còn. Em có chắc chắn muốn nộp bài ngay lúc này không?</p>
    `;
  } else {
    modalText.innerHTML = `
      <p class="text-slate-700 text-sm">Em đã hoàn thành đủ <strong>30/30 câu hỏi</strong>. Hãy bấm "Xác nhận nộp bài" để Giảng viên tiến hành chấm điểm và luận giải năng lực.</p>
    `;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeSubmitModal() {
  const modal = document.getElementById("confirm-submit-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function submitExam(isForced = false) {
  closeSubmitModal();
  clearInterval(state.timerInterval);
  state.isSubmitted = true;
  state.endTime = new Date();

  const totalTimeSpentSeconds = (15 * 60) - state.timeRemaining;
  const minutes = Math.floor(totalTimeSpentSeconds / 60);
  const seconds = totalTimeSpentSeconds % 60;
  const timeFormatted = `${minutes} phút ${seconds} giây`;

  // Chấm điểm
  let correctCount = 0;
  const chapterBreakdown = {
    "Chương 1: Nhập môn CNXHKH": { total: 0, correct: 0 },
    "Chương 2: Sứ mệnh lịch sử của GCCN": { total: 0, correct: 0 },
    "Chương 3: CNXH & Thời kỳ quá độ": { total: 0, correct: 0 },
    "Chương 4: Dân chủ & Nhà nước XHCN": { total: 0, correct: 0 }
  };

  state.currentExam.questions.forEach((q, idx) => {
    // Chuẩn hóa tên chương để nhóm
    let groupChap = "Chương 1: Nhập môn CNXHKH";
    if (q.chapter.includes("Chương 2")) groupChap = "Chương 2: Sứ mệnh lịch sử của GCCN";
    if (q.chapter.includes("Chương 3")) groupChap = "Chương 3: CNXH & Thời kỳ quá độ";
    if (q.chapter.includes("Chương 4")) groupChap = "Chương 4: Dân chủ & Nhà nước XHCN";

    if (!chapterBreakdown[groupChap]) {
      chapterBreakdown[groupChap] = { total: 0, correct: 0 };
    }
    chapterBreakdown[groupChap].total++;

    if (state.userAnswers[idx] === q.correct) {
      correctCount++;
      chapterBreakdown[groupChap].correct++;
    }
  });

  const finalScore = Number(((correctCount / 30) * 10).toFixed(2));

  // Lưu vào lịch sử (LocalStorage)
  saveExamAttempt({
    date: new Date().toLocaleString("vi-VN"),
    examCode: state.currentExam.code,
    examTitle: state.currentExam.title,
    score: finalScore,
    correctCount: correctCount,
    timeSpent: timeFormatted
  });

  // Hiển thị giao diện kết quả
  renderResultsPanel(finalScore, correctCount, timeFormatted, chapterBreakdown);
  renderQuestionPalette();
  renderQuestionContent();

  // Bắn pháo hoa nếu điểm cao >= 8.0
  if (finalScore >= 8.0) {
    sfx.playFanfare();
    triggerConfetti();
  }
}

// Render Bảng Điểm & Báo Cáo Sư Phạm
function renderResultsPanel(score, correctCount, timeFormatted, breakdown) {
  document.getElementById("exam-active-panel").classList.add("hidden");
  const panel = document.getElementById("results-panel");
  panel.classList.remove("hidden");

  document.getElementById("res-score-badge").textContent = `${score} / 10.0`;
  document.getElementById("res-correct-badge").textContent = `${correctCount} / 30 câu đúng`;
  document.getElementById("res-time-badge").textContent = timeFormatted;

  // Xếp loại & Nhận xét của Giảng viên
  const evaluation = getTeacherPedagogicalEvaluation(score, breakdown);
  document.getElementById("res-grade-title").textContent = evaluation.title;
  document.getElementById("res-grade-title").className = `text-lg md:text-xl font-bold ${evaluation.titleColor}`;
  document.getElementById("res-teacher-comment").textContent = evaluation.comment;

  // Lời khuyên trọng tâm
  const adviceList = document.getElementById("res-teacher-advice");
  adviceList.innerHTML = "";
  evaluation.advice.forEach(item => {
    const li = document.createElement("li");
    li.className = "flex items-start gap-2 text-xs md:text-sm text-slate-700";
    li.innerHTML = `<i data-lucide="check" class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"></i> <span>${item}</span>`;
    adviceList.appendChild(li);
  });

  // Phân tích chi tiết 4 chương
  const breakdownContainer = document.getElementById("res-chapter-breakdown");
  breakdownContainer.innerHTML = "";
  Object.keys(breakdown).forEach(chap => {
    const data = breakdown[chap];
    const pct = data.total > 0 ? Math.round((data.correct / data.total) * 100) : 0;

    let barColor = "bg-emerald-600";
    if (pct < 50) barColor = "bg-red-600";
    else if (pct < 75) barColor = "bg-amber-500";

    const item = document.createElement("div");
    item.className = "p-3 bg-slate-50 rounded-lg border border-slate-200/80";
    item.innerHTML = `
      <div class="flex items-center justify-between mb-1.5 text-xs md:text-sm">
        <span class="font-semibold text-slate-800">${chap}</span>
        <span class="font-bold text-slate-700">${data.correct}/${data.total} câu (${pct}%)</span>
      </div>
      <div class="w-full bg-slate-200 h-2 rounded-full overflow-hidden">
        <div class="${barColor} h-2 rounded-full transition-all duration-500" style="width: ${pct}%"></div>
      </div>
    `;
    breakdownContainer.appendChild(item);
  });

  // Kéo màn hình lên đầu
  window.scrollTo({ top: 0, behavior: 'smooth' });
  lucide.createIcons();
}

// Công cụ tạo nhận xét của Giảng viên
function getTeacherPedagogicalEvaluation(score, breakdown) {
  if (score >= 9.0) {
    return {
      title: "XUẤT SẮC - ĐẠT CHUẨN ĐIỂM GIỎI TOÀN DIỆN",
      titleColor: "text-emerald-700",
      comment: "Thầy/Cô đánh giá rất cao tư duy lý luận của em. Em không chỉ ghi nhớ các mốc sự kiện mà còn thấu hiểu sâu sắc bản chất biện chứng, nhìn thấu các phương án bẫy trắc nghiệm tinh vi giữa quan điểm của Mác - Ăngghen và Lênin.",
      advice: [
        "Tiếp tục duy trì phong độ và rèn luyện kỹ năng phân tích mối quan hệ giữa dân chủ và nhà nước.",
        "Sẵn sàng đạt điểm tối đa trong kỳ thi kết thúc học phần chính thức."
      ]
    };
  } else if (score >= 8.0) {
    return {
      title: "LOẠI GIỎI - NẮM CHẮC KIẾN THỨC BẢN CHẤT",
      titleColor: "text-blue-700",
      comment: "Kết quả bài làm rất tốt! Em đã nắm vững các nguyên lý then chốt của CNXHKH. Chỉ còn một vài câu vận dụng cao ở phần đặc trưng thời kỳ quá độ hoặc cơ chế kiểm soát quyền lực nhà nước cần chú ý thêm.",
      advice: [
        "Đọc kỹ lại phần 4 trụ cột phát triển và 3 khâu đột phá ở Việt Nam.",
        "Phân biệt rạch ròi giữa điều kiện khách quan và nhân tố chủ quan quyết định sứ mệnh GCCN."
      ]
    };
  } else if (score >= 6.5) {
    return {
      title: "LOẠI KHÁ - CẦN CẢNH GIÁC TRƯỚC CÁC BẪY CÂU CHỮ",
      titleColor: "text-amber-700",
      comment: "Em đã hiểu được các khái niệm cơ bản nhưng còn dễ bị phân tâm trước các phương án gây nhiễu, đặc biệt là các luận điểm so sánh giữa Dân chủ tư sản và Dân chủ XHCN, hoặc các biến đổi của công nhân hiện đại.",
      advice: [
        "Xem kỹ mục 'Vạch trần bẫy trắc nghiệm' của Giảng viên ở từng câu sai.",
        "Khắc sâu luận điểm: 'Trung lưu hóa công nhân' không làm thay đổi bản chất bóc lột của CNTB."
      ]
    };
  } else if (score >= 5.0) {
    return {
      title: "TRUNG BÌNH - CẦN HỆ THỐNG HÓA LẠI TƯ TƯỞNG",
      titleColor: "text-orange-700",
      comment: "Mức độ hiểu bài mới ở ngưỡng ghi nhớ thuộc lòng, khi gặp các câu hỏi suy luận biện chứng hoặc đảo vế câu hỏi thì em dễ chọn nhầm. Cần dành thời gian ôn lại Chương 2 và Chương 3.",
      advice: [
        "Mở ngay 'Sổ tay tri thức cốt lõi' ở góc phải màn hình để ôn tập tổng quan.",
        "Luyện lại Đề 01 và Đề 02 ở chế độ Luyện tập (Hiện giải thích ngay) để sửa sai lập tức."
      ]
    };
  } else {
    return {
      title: "CHƯA ĐẠT YÊU CẦU - CẦN ÔN TẬP CẤP TỐC",
      titleColor: "text-red-700",
      comment: "Kết quả cho thấy em đang bị hổng nhiều mảng kiến thức trọng tâm hoặc làm bài quá vội vàng. Cần đọc kỹ giáo trình và ghi chép bài giảng trước khi thi giữa kỳ thật.",
      advice: [
        "Đọc lại toàn bộ nội dung 4 chương trong phần Sổ tay tóm tắt.",
        "Thực hiện lại đề thi với tốc độ chậm hơn, chú ý phân tích kỹ từng phương án."
      ]
    };
  }
}

// Bắn pháo hoa Confetti chúc mừng
function triggerConfetti() {
  if (typeof confetti === 'function') {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  }
}

// ==========================================
// Chế độ Xem Lại & Bộ Lọc Câu Hỏi
// ==========================================
function startReviewMode() {
  document.getElementById("results-panel").classList.add("hidden");
  document.getElementById("exam-active-panel").classList.remove("hidden");
  
  // Hiện thanh lọc câu hỏi
  const filterBar = document.getElementById("review-filter-bar");
  if (filterBar) filterBar.classList.remove("hidden");

  // Tự động chuyển sang chế độ danh sách cuộn để dễ rà soát
  state.viewMode = 'list';
  document.getElementById("view-mode-toggle").textContent = "Xem từng câu (Focus)";
  renderQuestionContent();
  renderQuestionPalette();

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Lọc câu hỏi trong chế độ xem lại
function filterReviewQuestions(type) {
  state.filterReview = type;
  document.querySelectorAll(".filter-btn").forEach(btn => {
    if (btn.getAttribute("data-filter") === type) {
      btn.classList.add("bg-red-700", "text-white");
      btn.classList.remove("bg-white", "text-slate-700");
    } else {
      btn.classList.remove("bg-red-700", "text-white");
      btn.classList.add("bg-white", "text-slate-700");
    }
  });

  const cards = document.querySelectorAll("[id^='question-card-']");
  cards.forEach((card) => {
    const idx = parseInt(card.id.replace('question-card-', ''), 10);
    const isCorrect = state.userAnswers[idx] === state.currentExam.questions[idx].correct;
    const isFlagged = state.flaggedQuestions[idx];

    if (type === 'all') {
      card.classList.remove("hidden");
    } else if (type === 'wrong') {
      if (!isCorrect) card.classList.remove("hidden");
      else card.classList.add("hidden");
    } else if (type === 'flagged') {
      if (isFlagged) card.classList.remove("hidden");
      else card.classList.add("hidden");
    }
  });
}

// ==========================================
// Sổ Tay Kiến Thức Cốt Lõi (Mini Cheat-sheet)
// ==========================================
function renderCheatSheet() {
  const container = document.getElementById("cheatsheet-content");
  container.innerHTML = "";

  CORE_KNOWLEDGE_SUMMARY.forEach(item => {
    const block = document.createElement("div");
    block.className = "mb-5 pb-4 border-b border-slate-100 last:border-b-0";

    const title = document.createElement("h4");
    title.className = "text-sm md:text-base font-bold text-red-800 mb-2.5 flex items-center gap-1.5";
    title.innerHTML = `<i data-lucide="bookmark" class="w-4 h-4 text-red-700"></i> ${item.chapter}`;

    const ul = document.createElement("ul");
    ul.className = "space-y-1.5";

    item.points.forEach(pt => {
      const li = document.createElement("li");
      li.className = "text-xs md:text-sm text-slate-700 flex items-start gap-2 leading-relaxed";
      li.innerHTML = `<span class="text-red-600 font-bold">•</span> <span>${pt}</span>`;
      ul.appendChild(li);
    });

    block.appendChild(title);
    block.appendChild(ul);
    container.appendChild(block);
  });
}

function openCheatSheetModal() {
  const modal = document.getElementById("cheatsheet-modal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

function closeCheatSheetModal() {
  const modal = document.getElementById("cheatsheet-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// ==========================================
// Quản lý Lịch Sử Làm Bài (LocalStorage)
// ==========================================
function saveExamAttempt(attempt) {
  try {
    const history = JSON.parse(localStorage.getItem("cnxhkh_exam_history") || "[]");
    history.unshift(attempt);
    // Lưu tối đa 20 lần gần nhất
    if (history.length > 20) history.pop();
    localStorage.setItem("cnxhkh_exam_history", JSON.stringify(history));
    updateHistoryBadge();
  } catch (e) {
    console.error("Lỗi lưu lịch sử", e);
  }
}

function updateHistoryBadge() {
  try {
    const history = JSON.parse(localStorage.getItem("cnxhkh_exam_history") || "[]");
    const countEl = document.getElementById("history-count-badge");
    if (countEl) countEl.textContent = history.length;
  } catch (e) {}
}

function openHistoryModal() {
  const modal = document.getElementById("history-modal");
  const listContainer = document.getElementById("history-list");
  listContainer.innerHTML = "";

  try {
    const history = JSON.parse(localStorage.getItem("cnxhkh_exam_history") || "[]");
    if (history.length === 0) {
      listContainer.innerHTML = `
        <div class="text-center py-8 text-slate-500 text-sm">
          <i data-lucide="inbox" class="w-8 h-8 mx-auto text-slate-300 mb-2"></i>
          Chưa có lần làm bài nào được lưu. Hãy bắt đầu một đề thi ngay!
        </div>
      `;
    } else {
      history.forEach((item, idx) => {
        const div = document.createElement("div");
        div.className = "p-3.5 bg-slate-50 rounded-xl border border-slate-200/80 flex items-center justify-between";
        div.innerHTML = `
          <div>
            <div class="flex items-center gap-2 mb-1">
              <span class="px-2 py-0.5 rounded text-[11px] font-bold bg-red-100 text-red-800">${item.examCode}</span>
              <span class="text-xs text-slate-500">${item.date}</span>
            </div>
            <div class="text-xs md:text-sm font-semibold text-slate-800">${item.examTitle}</div>
            <div class="text-xs text-slate-500 mt-0.5">Thời gian hoàn thành: ${item.timeSpent}</div>
          </div>
          <div class="text-right shrink-0">
            <div class="text-base md:text-lg font-black ${item.score >= 8 ? 'text-emerald-700' : (item.score >= 6.5 ? 'text-blue-700' : 'text-red-700')}">
              ${item.score} <span class="text-xs font-normal text-slate-500">/ 10.0</span>
            </div>
            <div class="text-xs text-slate-500 font-medium">${item.correctCount}/30 câu</div>
          </div>
        `;
        listContainer.appendChild(div);
      });
    }
  } catch (e) {
    listContainer.innerHTML = `<div class="text-red-600 text-sm">Lỗi đọc dữ liệu lịch sử</div>`;
  }

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  lucide.createIcons();
}

function closeHistoryModal() {
  const modal = document.getElementById("history-modal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

function clearExamHistory() {
  if (confirm("Em có chắc chắn muốn xóa toàn bộ lịch sử thi đã lưu không?")) {
    localStorage.removeItem("cnxhkh_exam_history");
    updateHistoryBadge();
    openHistoryModal();
  }
}

// In đề thi & Đáp án
function printExamSheet() {
  window.print();
}

// Hiển thị Thông báo nổi (Toast)
function showToast(message, type = "info") {
  const toastContainer = document.getElementById("toast-container");
  const toast = document.createElement("div");

  let typeClasses = "bg-slate-900 text-white";
  if (type === "warning") typeClasses = "bg-amber-600 text-white";
  if (type === "error") typeClasses = "bg-red-700 text-white";
  if (type === "success") typeClasses = "bg-emerald-700 text-white";

  toast.className = `px-4 py-2.5 rounded-lg text-xs md:text-sm font-medium shadow-lg flex items-center gap-2 smooth-transition transform translate-y-2 opacity-0 ${typeClasses}`;
  toast.innerHTML = `<span>${message}</span>`;

  toastContainer.appendChild(toast);

  // Animation hiện ra
  setTimeout(() => {
    toast.classList.remove("translate-y-2", "opacity-0");
  }, 10);

  // Tự ẩn sau 3.5s
  setTimeout(() => {
    toast.classList.add("opacity-0", "translate-y-2");
    setTimeout(() => toast.remove(), 300);
  }, 3500);
}

// ==========================================
// Đăng ký các sự kiện bàn phím & giao diện
// ==========================================
function setupEventListeners() {
  // Phím tắt bàn phím
  window.addEventListener("keydown", (e) => {
    // Không nhận phím tắt nếu đang mở modal
    if (document.querySelector(".modal-open")) return;

    // Phím A, B, C, D hoặc 1, 2, 3, 4 chọn đáp án
    if (state.viewMode === 'single' && !state.isSubmitted) {
      if (['1', 'a', 'A'].includes(e.key)) selectOption(state.currentQuestionIndex, 0);
      if (['2', 'b', 'B'].includes(e.key)) selectOption(state.currentQuestionIndex, 1);
      if (['3', 'c', 'C'].includes(e.key)) selectOption(state.currentQuestionIndex, 2);
      if (['4', 'd', 'D'].includes(e.key)) selectOption(state.currentQuestionIndex, 3);
      if (['f', 'F'].includes(e.key)) toggleFlag(state.currentQuestionIndex);
      
      // Mũi tên trái/phải chuyển câu
      if (e.key === "ArrowLeft" && state.currentQuestionIndex > 0) {
        goToQuestion(state.currentQuestionIndex - 1);
      }
      if (e.key === "ArrowRight" && state.currentQuestionIndex < 29) {
        goToQuestion(state.currentQuestionIndex + 1);
      }
    }
  });

  // Chuyển đổi View Mode (Từng câu vs Danh sách)
  document.getElementById("view-mode-toggle").addEventListener("click", () => {
    state.viewMode = state.viewMode === 'single' ? 'list' : 'single';
    document.getElementById("view-mode-toggle").textContent = 
      state.viewMode === 'single' ? "Xem toàn bộ (Cuộn)" : "Xem từng câu (Focus)";
    renderQuestionContent();
    renderQuestionPalette();
  });

  // Chuyển đổi Study Mode (Thi thật vs Luyện tập giải thích tức thì)
  document.getElementById("study-mode-toggle").addEventListener("click", () => {
    state.studyMode = state.studyMode === 'exam' ? 'practice' : 'exam';
    updateExamHeader();
    renderQuestionContent();
    showToast(`Đã chuyển sang ${state.studyMode === 'exam' ? 'Chế độ Thi Giữa Kỳ (Chuẩn)' : 'Chế độ Luyện Tập Tức Thì'}`, "info");
  });

  // Bật/tắt âm thanh
  document.getElementById("sound-toggle").addEventListener("click", () => {
    state.soundEnabled = !state.soundEnabled;
    const soundIcon = document.getElementById("sound-icon");
    soundIcon.setAttribute("data-lucide", state.soundEnabled ? "volume-2" : "volume-x");
    lucide.createIcons();
    showToast(state.soundEnabled ? "Đã bật âm thanh phản hồi" : "Đã tắt âm thanh", "info");
  });
}
