// =========================================================================
// NGÂN HÀNG 10 ĐỀ THI GIỮA KỲ CHỦ NGHĨA XÃ HỘI KHOA HỌC (30 CÂU - 15 PHÚT)
// Biên soạn chuẩn khảo thí ôn tập giữa kỳ từ Ghi chú bài giảng & Slide (Chương 1 - 4)
// Thiết kế định dạng chuẩn mực như Đề 1, tập trung ôn tập và chọn đáp án đúng nhất
// =========================================================================

const EXAM_SETS = [
  {
    "id": "de_01",
    "code": "MÃ ĐỀ: 101",
    "title": "Đề 01: Tổng Ôn Nhập Môn & Khái Niệm Nền Tảng (Chương 1 - 4)",
    "description": "Bộ đề bao quát kiến thức trọng tâm từ Chương 1 đến Chương 4, bám sát các mốc thời gian, định nghĩa và nguyên lý cơ bản nhất.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Tác phẩm nào đánh dấu sự ra đời của Chủ nghĩa xã hội khoa học và là kim chỉ nam cho phong trào công nhân?",
        "options": [
          "Tư bản luận (1867)",
          "Tuyên ngôn của Đảng Cộng sản (1848)",
          "Chống Đuy-rinh (1878)",
          "Nhà nước và Cách mạng (1917)"
        ],
        "correct": 1,
        "explanation": "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' do C.Mác và Ph.Ăngghen soạn thảo ra đời tháng 2/1848, là văn kiện đánh dấu sự ra đời của CNXHKH và là kim chỉ nam của phong trào.",
        "trapAnalysis": "Ghi nhớ chính xác mốc năm 1848 gắn liền với Tuyên ngôn của Đảng Cộng sản."
      },
      {
        "id": 2,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Ba phát kiến vĩ đại của khoa học tự nhiên làm tiền đề cho sự ra đời của CNXHKH bao gồm:",
        "options": [
          "Thuyết tương đối, Thuyết lượng tử, Thuyết nhật tâm",
          "Thuyết tế bào, Thuyết tiến hóa, Định luật bảo toàn và chuyển hóa năng lượng",
          "Định luật vạn vật hấp dẫn, Hình học phi Ơ-clit, Thuyết nguyên tử",
          "Thuyết di truyền Men-đen, Thuyết Big Bang, Cơ học lượng tử"
        ],
        "correct": 1,
        "explanation": "Ba phát kiến vĩ đại của khoa học tự nhiên thế kỷ XIX là: Thuyết tế bào, Thuyết tiến hóa của Đác-uyn, Định luật bảo toàn và chuyển hóa năng lượng.",
        "trapAnalysis": "Học thuộc bộ ba phát kiến khoa học tự nhiên thế kỷ XIX."
      },
      {
        "id": 3,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Tiền đề lý luận trực tiếp nhất cho sự ra đời của Chủ nghĩa xã hội khoa học là:",
        "options": [
          "Triết học cổ điển Đức",
          "Kinh tế chính trị học cổ điển Anh",
          "Chủ nghĩa xã hội không tưởng - phê phán",
          "Triết học khai sáng Pháp"
        ],
        "correct": 2,
        "explanation": "Chủ nghĩa xã hội không tưởng - phê phán (tiêu biểu là Xanh Ximông, Phuriê, Ôoen) là tiền đề tư tưởng lý luận trực tiếp nhất cho CNXHKH.",
        "trapAnalysis": "Phân biệt: Triết học Đức là tiền đề cho Triết học Mác, KTCT Anh cho KTCT Mác, còn CNXH không tưởng là tiền đề trực tiếp cho CNXHKH."
      },
      {
        "id": 4,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Nội dung cơ bản và quan trọng nhất của CNXHKH giúp vượt qua hạn chế của chủ nghĩa xã hội không tưởng là gì?",
        "options": [
          "Lên án sự bóc lột của giai cấp tư sản",
          "Phát hiện giai cấp công nhân là lực lượng có thể xóa bỏ CNTB, xây dựng CNXH",
          "Mô tả viễn cảnh xã hội tương lai không còn nhà nước",
          "Đề xướng lối sống hòa bình và hợp tác giữa các giai cấp"
        ],
        "correct": 1,
        "explanation": "Nội dung cơ bản, quan trọng nhất đối với CNXHKH là phát hiện giai cấp công nhân là lực lượng xã hội có sứ mệnh xóa bỏ CNTB, xây dựng CNXH.",
        "trapAnalysis": "Điểm khác biệt căn bản của CNXHKH là tìm ra lực lượng xã hội tiên phong - giai cấp công nhân."
      },
      {
        "id": 5,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Theo tiến trình phát triển của hình thái kinh tế - xã hội cộng sản chủ nghĩa, Việt Nam hiện nay đang ở giai đoạn nào?",
        "options": [
          "Đã hoàn thành chủ nghĩa xã hội",
          "Đang trong thời kỳ quá độ lên chủ nghĩa xã hội",
          "Đang ở giai đoạn cao cộng sản chủ nghĩa",
          "Chủ nghĩa tư bản độc quyền nhà nước"
        ],
        "correct": 1,
        "explanation": "Sơ đồ các giai đoạn: CNXH (thấp/thời kỳ quá độ lên CSCN) -> CSCN (cao). Việt Nam đang trong thời kỳ quá độ lên chủ nghĩa xã hội.",
        "trapAnalysis": "Việt Nam đang trong thời kỳ quá độ lên CNXH (bỏ qua chế độ TBCN)."
      },
      {
        "id": 6,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Giai cấp công nhân là con đẻ của nền sản xuất nào?",
        "options": [
          "Nền sản xuất nông nghiệp phong kiến",
          "Nền tiểu thủ công nghiệp phường hội",
          "Nền đại công nghiệp hiện đại",
          "Nền kinh tế tự nhiên nguyên thủy"
        ],
        "correct": 2,
        "explanation": "Giai cấp công nhân là con đẻ của nền công nghiệp hiện đại, gắn liền với quá trình sản xuất vật chất hiện đại.",
        "trapAnalysis": "Từ khóa cốt lõi: 'con đẻ của nền đại công nghiệp'."
      },
      {
        "id": 7,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về mặt kinh tế dưới chế độ tư bản chủ nghĩa, giai cấp công nhân có đặc điểm gì?",
        "options": [
          "Sở hữu một phần tư liệu sản xuất chủ yếu",
          "Không sở hữu tư liệu sản xuất, bị giai cấp tư sản bóc lột giá trị thặng dư",
          "Nắm quyền chi phối toàn bộ các tập đoàn tư bản",
          "Tự do làm chủ các nhà máy công xưởng"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân không sở hữu tư liệu sản xuất chủ yếu, buộc phải bán sức lao động và bị giai cấp tư sản bóc lột giá trị thặng dư.",
        "trapAnalysis": "Đặc trưng kinh tế của vô sản là: không sở hữu TLSX chủ yếu, bị bóc lột GTTD."
      },
      {
        "id": 8,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đặc điểm nổi bật nhất về phương thức lao động quy định vai trò lãnh đạo cách mạng của giai cấp công nhân là:",
        "options": [
          "Lao động thủ công tinh xảo",
          "Lao động bằng phương thức công nghiệp",
          "Lao động đơn lẻ, tản mạn tại gia đình",
          "Lao động thuần túy bằng cơ bắp không cần tổ chức"
        ],
        "correct": 1,
        "explanation": "Lao động bằng phương thức công nghiệp là đặc điểm nổi bật nhất, rèn luyện cho GCCN tính tổ chức, kỷ luật, tinh thần hợp tác.",
        "trapAnalysis": "Đặc điểm nổi bật nhất: lao động bằng phương thức công nghiệp."
      },
      {
        "id": 9,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung tổng quát sứ mệnh lịch sử của giai cấp công nhân là gì?",
        "options": [
          "Xóa bỏ chủ nghĩa tư bản; xây dựng chủ nghĩa xã hội",
          "Kêu gọi xóa bỏ máy móc để trở về thời kỳ thủ công",
          "Duy trì chế độ chiếm hữu tư nhân tư bản chủ nghĩa",
          "Chia đều toàn bộ của cải xã hội cho từng cá nhân"
        ],
        "correct": 0,
        "explanation": "Nội dung sứ mệnh lịch sử của giai cấp công nhân: Xóa bỏ chủ nghĩa tư bản; xây dựng chủ nghĩa xã hội và chủ nghĩa cộng sản.",
        "trapAnalysis": "Hai vế không tách rời: Xóa bỏ CNTB và Xây dựng CNXH."
      },
      {
        "id": 10,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điều kiện KHÁCH QUAN quy định sứ mệnh lịch sử của giai cấp công nhân do yếu tố nào tạo nên?",
        "options": [
          "Do ý chí chủ quan của các lãnh tụ cách mạng",
          "Do địa vị kinh tế và địa vị chính trị - xã hội của giai cấp công nhân quy định",
          "Do sự tài trợ của các nhà tư bản tiến bộ",
          "Do phong trào từ thiện quốc tế ủng hộ"
        ],
        "correct": 1,
        "explanation": "Điều kiện khách quan quy định sứ mệnh lịch sử của GCCN do địa vị kinh tế và địa vị chính trị - xã hội của giai cấp công nhân quy định.",
        "trapAnalysis": "Phân biệt: Địa vị kinh tế & CT-XH là điều kiện khách quan."
      },
      {
        "id": 11,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nhân tố CHỦ QUAN giữ vai trò quan trọng nhất để giai cấp công nhân thực hiện thắng lợi sứ mệnh lịch sử là:",
        "options": [
          "Sự ra đời và lãnh đạo của Đảng Cộng sản",
          "Sự gia tăng tự phát của các cuộc biểu tình",
          "Sự hỗ trợ tài chính từ công đoàn các nước tư bản",
          "Ý thức tự giác của giai cấp nông dân"
        ],
        "correct": 0,
        "explanation": "Điều kiện chủ quan quy định sứ mệnh lịch sử của giai cấp công nhân: nhân tố quan trọng nhất là Đảng Cộng sản (lãnh đạo).",
        "trapAnalysis": "Đảng Cộng sản là nhân tố chủ quan quyết định hàng đầu."
      },
      {
        "id": 12,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Giai cấp công nhân Việt Nam chính thức ra đời vào thời gian nào?",
        "options": [
          "Đầu thế kỷ XIX",
          "Đầu thế kỷ XX",
          "Sau Cách mạng Tháng Tám 1945",
          "Sau năm 1975 khi thống nhất đất nước"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân ở Việt Nam ra đời vào đầu thế kỷ XX trong các cuộc khai thác thuộc địa của thực dân Pháp.",
        "trapAnalysis": "Mốc ra đời của GCCN Việt Nam: Đầu thế kỷ XX."
      },
      {
        "id": 13,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Quy luật chung về sự ra đời của Đảng Cộng sản theo chủ nghĩa Mác - Lênin là sản phẩm của sự kết hợp giữa:",
        "options": [
          "Phong trào công nhân + Chủ nghĩa Mác - Lênin",
          "Phong trào nông dân + Triết học cổ điển Đức",
          "Phong trào yêu nước + Phong trào sinh viên",
          "Chủ nghĩa xã hội không tưởng + Kinh tế chính trị học Anh"
        ],
        "correct": 0,
        "explanation": "Công thức kinh điển: Đảng Cộng sản = Phong trào công nhân + Chủ nghĩa Mác - Lênin.",
        "trapAnalysis": "Công thức chung gồm 2 yếu tố: PTCN + CN Mác-Lênin."
      },
      {
        "id": 14,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung KINH TẾ trong sứ mệnh lịch sử của giai cấp công nhân là:",
        "options": [
          "Lực lượng sản xuất cơ bản, sản xuất của cải cho xã hội xã hội chủ nghĩa",
          "Giành lấy chính quyền nhà nước từ tay giai cấp tư sản",
          "Tiến hành đấu tranh tư tưởng, xây dựng đạo đức mới",
          "Xóa bỏ quyền sở hữu vật phẩm tiêu dùng cá nhân"
        ],
        "correct": 0,
        "explanation": "Slide bài giảng: Nội dung kinh tế của sứ mệnh lịch sử: giai cấp công nhân là lực lượng sản xuất cơ bản, sản xuất của cải cho xã hội xã hội chủ nghĩa.",
        "trapAnalysis": "Nội dung kinh tế gắn liền với: sản xuất của cải vật chất, lực lượng sản xuất cơ bản."
      },
      {
        "id": 15,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung CHÍNH TRỊ - XÃ HỘI trong sứ mệnh lịch sử của giai cấp công nhân là:",
        "options": [
          "Đòi tăng lương giảm giờ làm thuần túy",
          "Dưới sự lãnh đạo của Đảng Cộng sản, đấu tranh giành chính quyền và xây dựng nhà nước mới của nhân dân",
          "Thỏa hiệp với giai cấp tư sản để cùng nắm chính quyền",
          "Tham gia vào các tổ chức tôn giáo để truyền bá đức tin"
        ],
        "correct": 1,
        "explanation": "Slide: Nội dung chính trị - xã hội: dưới sự lãnh đạo của Đảng Cộng sản, giai cấp công nhân đấu tranh giành chính quyền và xây dựng nhà nước mới của nhân dân.",
        "trapAnalysis": "Nội dung chính trị: Giành chính quyền và xây dựng nhà nước mới dưới sự lãnh đạo của ĐCS."
      },
      {
        "id": 16,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung VĂN HÓA, TƯ TƯỞNG trong sứ mệnh lịch sử của giai cấp công nhân lấy hệ tư tưởng nào làm chủ đạo?",
        "options": [
          "Hệ tư tưởng tư sản và tự do cá nhân",
          "Hệ tư tưởng tôn giáo",
          "Hệ tư tưởng của Mác - Lênin",
          "Hệ tư tưởng phong kiến"
        ],
        "correct": 2,
        "explanation": "Slide và ghi chú viết tay ở lề: Nội dung văn hóa, tư tưởng: xây dựng nền văn hóa và con người mới với tư tưởng, đạo đức XHCN; 'hệ tư tưởng của Mác - Lênin'.",
        "trapAnalysis": "Hệ tư tưởng chủ đạo là chủ nghĩa Mác - Lênin."
      },
      {
        "id": 17,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điểm tương đồng căn bản giữa giai cấp công nhân hiện nay với giai cấp công nhân thế kỷ XIX là:",
        "options": [
          "Đều không có trình độ văn hóa",
          "Vẫn là lực lượng sản xuất hàng đầu, vẫn chịu sự bóc lột giá trị thặng dư",
          "Đều bị cấm tham gia vào đời sống chính trị",
          "Đều sống ở nông thôn và làm việc nông nghiệp"
        ],
        "correct": 1,
        "explanation": "Điểm tương đồng với TK XIX: vẫn là LLSX hàng đầu, vẫn chịu sự bóc lột giá trị thặng dư, vẫn tồn tại xung đột lợi ích cơ bản với giai cấp tư sản.",
        "trapAnalysis": "GCCN hiện nay vẫn bị bóc lột giá trị thặng dư và là LLSX hàng đầu."
      },
      {
        "id": 18,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Biến đổi nổi bật của giai cấp công nhân trong kỷ nguyên công nghệ hiện đại là xu hướng gì?",
        "options": [
          "Xu hướng bần cùng hóa tuyệt đối",
          "Xu hướng trí tuệ hóa công nhân (công nhân tri thức)",
          "Xu hướng biến hoàn toàn thành giai cấp tư sản",
          "Xu hướng từ bỏ lao động công nghiệp"
        ],
        "correct": 1,
        "explanation": "Những biến đổi của GCCN hiện nay: xu hướng trí tuệ hóa công nhân (công nhân tri thức); tham gia vào sở hữu (trung lưu hóa); biểu hiện mới của xã hội hóa lao động.",
        "trapAnalysis": "Xu hướng nổi bật: trí tuệ hóa công nhân (công nhân tri thức)."
      },
      {
        "id": 19,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về mặt kinh tế, điều kiện ra đời của Chủ nghĩa xã hội là sự phát triển của mâu thuẫn giữa:",
        "options": [
          "Lực lượng sản xuất với quan hệ sản xuất trong chủ nghĩa tư bản",
          "Giai cấp nông dân với giai cấp địa chủ",
          "Thương nghiệp tư nhân với kinh tế nhà nước",
          "Sản xuất nông nghiệp với sản xuất thủ công nghiệp"
        ],
        "correct": 0,
        "explanation": "Điều kiện ra đời CNXH: Về kinh tế: lực lượng sản xuất mâu thuẫn với quan hệ sản xuất trong chủ nghĩa tư bản. Về chính trị: mâu thuẫn giữa GCCN và GCTS.",
        "trapAnalysis": "Về kinh tế: LLSX mâu thuẫn với QHSX trong CNTB."
      },
      {
        "id": 20,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng bản chất về kinh tế của Chủ nghĩa xã hội là gì?",
        "options": [
          "Nền kinh tế lạc hậu dựa trên tư hữu nhỏ lẻ",
          "Có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu",
          "Chế độ tư hữu tư bản chủ nghĩa hoàn thiện",
          "Kinh tế bao cấp triệt để không có phân phối theo lao động"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Đặc trưng bản chất của CNXH: có nền kinh tế phát triển cao, dựa trên LLSX hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        "trapAnalysis": "Đặc trưng kinh tế bản chất: Công hữu về tư liệu sản xuất chủ yếu."
      },
      {
        "id": 21,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Nhà nước xã hội chủ nghĩa đầu tiên xuất hiện trong thực tiễn lịch sử là:",
        "options": [
          "Nước Pháp sau Công xã Pari 1871",
          "Liên Xô cũ sau Cách mạng Tháng Mười Nga năm 1917",
          "Việt Nam sau Cách mạng Tháng Tám 1945",
          "Trung Quốc sau năm 1949"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Nhà nước chủ nghĩa xã hội đầu tiên xuất hiện trong thực tiễn: Liên Xô cũ sau Cách mạng Tháng Mười Nga năm 1917.",
        "trapAnalysis": "Nhà nước XHCN đầu tiên: Liên Xô sau CM Tháng Mười Nga 1917."
      },
      {
        "id": 22,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cách mạng vô sản là cuộc cách mạng được thực hiện bằng con đường nào?",
        "options": [
          "Thương lượng hòa giải với tư sản",
          "Bạo lực cách mạng",
          "Cầu xin cải cách từ chính phủ tư sản",
          "Chờ đợi CNTB tự tan rã hòa bình"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Cách mạng vô sản là cuộc cách mạng được thực hiện bằng con đường bạo lực cách mạng.",
        "trapAnalysis": "Cách mạng vô sản thực hiện bằng bạo lực cách mạng."
      },
      {
        "id": 23,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Theo V.I.Lênin, thời kỳ quá độ lên chủ nghĩa xã hội được ví là:",
        "options": [
          "'Một kỳ nghỉ dài của giai cấp vô sản'",
          "'Những cơn đau đẻ kéo dài' (cực kỳ khó khăn)",
          "'Con đường bằng phẳng trải đầy hoa hồng'",
          "'Một cuộc cải cách hành chính đơn giản'"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Theo Lênin, thời kỳ quá độ là 'những cơn đau đẻ kéo dài' (CỰC KÌ KHÓ KHĂN).",
        "trapAnalysis": "Lênin ví thời kỳ quá độ là 'những cơn đau đẻ kéo dài'."
      },
      {
        "id": 24,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Có mấy kiểu quá độ lên chủ nghĩa xã hội và Việt Nam thuộc kiểu nào?",
        "options": [
          "Có 1 kiểu quá độ; Việt Nam không cần quá độ",
          "Có 2 kiểu (quá độ trực tiếp và quá độ gián tiếp); Việt Nam thuộc kiểu quá độ gián tiếp",
          "Có 3 kiểu quá độ; Việt Nam thuộc quá độ trực tiếp",
          "Có 4 kiểu quá độ; Việt Nam thuộc kiểu tư bản phát triển"
        ],
        "correct": 1,
        "explanation": "Có hai kiểu quá độ: Quá độ trực tiếp (từ CNTB phát triển - Mác+Ăngghen nêu ra); Quá độ gián tiếp (từ tiền tư bản - Lênin bổ sung, ví dụ Việt Nam).",
        "trapAnalysis": "Hai kiểu quá độ: Trực tiếp & Gián tiếp. Việt Nam là quá độ gián tiếp."
      },
      {
        "id": 25,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc điểm bao trùm của thời kỳ quá độ lên CNXH trên mọi lĩnh vực là gì?",
        "options": [
          "Chỉ có các yếu tố xã hội chủ nghĩa thuần nhất",
          "Các yếu tố của xã hội cũ và xã hội mới đan xen trên mọi lĩnh vực",
          "Xã hội cũ đã bị xóa bỏ hoàn toàn ngay lập tức",
          "Không còn giai cấp và không còn đấu tranh giai cấp"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc điểm thời kỳ quá độ: các yếu tố của xã hội cũ và xã hội mới đan xen trên mọi lĩnh vực: kinh tế nhiều thành phần, chính trị đa dạng phức tạp, tư tưởng tồn tại nhiều quan điểm.",
        "trapAnalysis": "Từ khóa đan xen cũ - mới trên mọi lĩnh vực."
      },
      {
        "id": 26,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Quá độ lên CNXH bỏ qua chế độ tư bản chủ nghĩa ở Việt Nam được hiểu là bỏ qua điều gì?",
        "options": [
          "Bỏ qua toàn bộ thành tựu khoa học công nghệ của CNTB",
          "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "Bỏ qua việc quan hệ ngoại giao với các nước tư bản",
          "Bỏ qua phát triển lực lượng sản xuất hiện đại"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Quá độ lên CNXH bỏ qua chế độ TBCN là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
        "trapAnalysis": "Bỏ qua vị trí thống trị của QHSX và KTTT TBCN."
      },
      {
        "id": 27,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển của Việt Nam, yếu tố nào là 'TRUNG TÂM'?",
        "options": [
          "Xây dựng Đảng",
          "Phát triển kinh tế - xã hội",
          "Phát triển văn hóa, con người",
          "Củng cố quốc phòng, an ninh"
        ],
        "correct": 1,
        "explanation": "Bốn trụ cột phát triển: Phát triển kinh tế - xã hội là TRUNG TÂM; Xây dựng Đảng là THEN CHỐT; Phát triển văn hóa, con người là NỀN TẢNG TINH THẦN; Củng cố quốc phòng, an ninh là NHIỆM VỤ TRỌNG YẾU, THƯỜNG XUYÊN.",
        "trapAnalysis": "Kinh tế - xã hội = TRUNG TÂM."
      },
      {
        "id": 28,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển của Việt Nam, yếu tố nào là 'THEN CHỐT'?",
        "options": [
          "Phát triển kinh tế - xã hội",
          "Xây dựng Đảng",
          "Củng cố quốc phòng, an ninh",
          "Hội nhập quốc tế"
        ],
        "correct": 1,
        "explanation": "Bốn trụ cột phát triển: Xây dựng Đảng là THEN CHỐT.",
        "trapAnalysis": "Xây dựng Đảng = THEN CHỐT."
      },
      {
        "id": 29,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Thuật ngữ 'Dân chủ' được cấu thành từ hai từ Hy Lạp cổ nào và có nghĩa là gì?",
        "options": [
          "Demos (nhân dân) + Kratos (quyền lực) -> Quyền lực thuộc về nhân dân",
          "Polis (thành bang) + Nomos (luật) -> Pháp luật của thành bang",
          "Demos (người giàu) + Archia (cai trị) -> Sự cai trị của người giàu",
          "Kratos (nhà nước) + Civitas (công dân) -> Nhà nước của công dân"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Dân chủ = Demos (nhân dân) + Kratos (quyền lực). Nguồn gốc: dân chủ là quyền lực của nhân dân, thuộc về nhân dân. Ra đời thế kỷ VII - VI TCN.",
        "trapAnalysis": "Demos = Nhân dân; Kratos = Quyền lực."
      },
      {
        "id": 30,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Đặc điểm cốt lõi của cấu trúc quyền lực trong Nhà nước pháp quyền XHCN Việt Nam là:",
        "options": [
          "Tam quyền phân lập độc lập tuyệt đối",
          "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp",
          "Quyền lực tập trung vào một cá nhân tối cao",
          "Không có sự phân công giữa các cơ quan nhà nước"
        ],
        "correct": 1,
        "explanation": "Slide: Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp; do Đảng Cộng sản Việt Nam lãnh đạo; tổ chức theo nguyên tắc tập trung dân chủ.",
        "trapAnalysis": "Quyền lực thống nhất, có phân công, phối hợp và kiểm soát."
      }
    ]
  },
  {
    "id": "de_02",
    "code": "MÃ ĐỀ: 102",
    "title": "Đề 02: Tiền Đề Ra Đời CNXHKH & Phát Hiện Vĩ Đại Của C.Mác",
    "description": "Trọng tâm ôn tập: Ba phát kiến khoa học tự nhiên, ba tiền đề lý luận, tác phẩm Tuyên ngôn Đảng Cộng sản và sứ mệnh GCCN.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Năm ra đời của tác phẩm 'Tuyên ngôn của Đảng Cộng sản' là năm nào?",
        "options": [
          "1845",
          "1848",
          "1867",
          "1871"
        ],
        "correct": 1,
        "explanation": "Tháng 2/1848, tác phẩm Tuyên ngôn của Đảng Cộng sản do C.Mác và Ph.Ăngghen soạn thảo chính thức ra đời.",
        "trapAnalysis": "Nhớ mốc son lịch sử: 1848."
      },
      {
        "id": 2,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' có vai trò gì đối với phong trào công nhân và CNXHKH?",
        "options": [
          "Là văn kiện đánh dấu sự ra đời của CNXHKH, là kim chỉ nam cho phong trào",
          "Chỉ là một bài báo ngắn bình luận sự kiện chính trị",
          "Là hiệp ước quân sự giữa các nước châu Âu",
          "Là sách hướng dẫn kỹ thuật công nghiệp cơ khí"
        ],
        "correct": 0,
        "explanation": "Tuyên ngôn của Đảng Cộng sản là tác phẩm đánh dấu sự ra đời của CNXHKH và là kim chỉ nam của CNXHKH.",
        "trapAnalysis": "Tác phẩm đánh dấu sự ra đời và là kim chỉ nam."
      },
      {
        "id": 3,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Ai là tác giả của tác phẩm 'Tuyên ngôn của Đảng Cộng sản' (1848)?",
        "options": [
          "C.Mác và V.I.Lênin",
          "C.Mác và Ph.Ăngghen",
          "Ph.Ăngghen và V.I.Lênin",
          "C.Mác và Hêghen"
        ],
        "correct": 1,
        "explanation": "C.Mác và Ph.Ăngghen cùng soạn thảo tác phẩm Tuyên ngôn của Đảng Cộng sản theo ủy nhiệm của Liên đoàn những người cộng sản.",
        "trapAnalysis": "Đồng tác giả: C.Mác và Ph.Ăngghen."
      },
      {
        "id": 4,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Tác phẩm 'Tuyên ngôn của Đảng Cộng sản' ra đời trong bối cảnh lịch sử nào?",
        "options": [
          "Giai cấp phong kiến đang lớn mạnh",
          "Chủ nghĩa tư bản hình thành và phong trào công nhân phát triển mạnh mẽ thành lực lượng chính trị độc lập",
          "Thế giới bước vào thời đại công nghệ số",
          "Các nước thuộc địa đã hoàn toàn giành được độc lập"
        ],
        "correct": 1,
        "explanation": "Những năm 40 thế kỷ XIX, đại công nghiệp cơ khí phát triển làm giai cấp vô sản trưởng thành và đấu tranh chống tư sản.",
        "trapAnalysis": "Bối cảnh: Sự phát triển của CNTB và phong trào công nhân thế kỷ XIX."
      },
      {
        "id": 5,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Vì sao nói 'Tuyên ngôn của Đảng Cộng sản' là kim chỉ nam của CNXHKH?",
        "options": [
          "Vì tác phẩm chỉ rõ phương hướng, mục tiêu và con đường giải phóng giai cấp công nhân và nhân dân lao động",
          "Vì tác phẩm là địa lý hướng dẫn giao thông châu Âu",
          "Vì tác phẩm được in nhiều thứ tiếng nhất",
          "Vì tác phẩm do chính phủ Anh ban hành"
        ],
        "correct": 0,
        "explanation": "Là kim chỉ nam vì tác phẩm vạch ra cương lĩnh hành động khoa học cho phong trào công nhân quốc tế.",
        "trapAnalysis": "Kim chỉ nam nghĩa là ngọn cờ dẫn đường, định hướng hành động."
      },
      {
        "id": 6,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Phát kiến khoa học tự nhiên nào chứng minh sự thống nhất về cấu tạo của toàn bộ giới sinh vật?",
        "options": [
          "Định luật bảo toàn năng lượng",
          "Thuyết tế bào",
          "Thuyết tiến hóa",
          "Thuyết tương đối"
        ],
        "correct": 1,
        "explanation": "Thuyết tế bào (Slai-đen và Svan-nơ) chứng minh tính thống nhất về nguồn gốc và cấu tạo của mọi cơ thể sinh vật.",
        "trapAnalysis": "Thuyết tế bào = cấu tạo thống nhất của sinh vật."
      },
      {
        "id": 7,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Phát kiến khoa học tự nhiên nào chứng minh thế giới sinh vật luôn biến đổi và phát triển theo quy luật tự nhiên?",
        "options": [
          "Thuyết tế bào",
          "Thuyết tiến hóa của Đác-uyn",
          "Định luật bảo toàn năng lượng",
          "Định luật quán tính"
        ],
        "correct": 1,
        "explanation": "Thuyết tiến hóa của S.Đác-uyn chứng minh sinh giới không phải bất biến do thượng đế sinh ra mà tiến hóa theo quy luật khách quan.",
        "trapAnalysis": "Thuyết tiến hóa = biến đổi, phát triển của sinh vật."
      },
      {
        "id": 8,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Phát kiến khoa học tự nhiên nào chứng minh vật chất và năng lượng không tự sinh ra và không tự mất đi?",
        "options": [
          "Định luật vạn vật hấp dẫn",
          "Định luật bảo toàn và chuyển hóa năng lượng",
          "Thuyết tế bào",
          "Thuyết tiến hóa"
        ],
        "correct": 1,
        "explanation": "Định luật bảo toàn và chuyển hóa năng lượng chứng minh tính biện chứng và sự bảo toàn chuyển hóa vô tận của vật chất.",
        "trapAnalysis": "Định luật bảo toàn và chuyển hóa năng lượng."
      },
      {
        "id": 9,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Ý nghĩa phương pháp luận lớn nhất của ba phát kiến KHTN đối với CNXHKH là gì?",
        "options": [
          "Tạo ra động cơ hơi nước mới",
          "Cung cấp cơ sở khoa học tự nhiên khẳng định tính biện chứng, duy vật và sự vận động khách quan của thế giới",
          "Xóa bỏ hoàn toàn nghiên cứu triết học xã hội",
          "Giúp giai cấp tư sản phát minh máy dệt"
        ],
        "correct": 1,
        "explanation": "Cung cấp cơ sở khoa học tự nhiên vững chắc chứng minh tính duy vật biện chứng của tự nhiên và xã hội.",
        "trapAnalysis": "Ý nghĩa: Cung cấp cơ sở khoa học khẳng định tính biện chứng khách quan."
      },
      {
        "id": 10,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Nếu thiếu ba phát kiến KHTN thế kỷ XIX, lý luận của chủ nghĩa Mác sẽ thiếu đi điều gì?",
        "options": [
          "Tiền đề khoa học tự nhiên chứng minh cho thế giới quan duy vật biện chứng",
          "Tiền đề về tiền tệ và ngân hàng",
          "Các bản vẽ chế tạo máy móc",
          "Sự đồng tình của giới quý tộc"
        ],
        "correct": 0,
        "explanation": "Ba phát kiến KHTN là tiền đề khoa học tự nhiên trực tiếp cho sự ra đời của chủ nghĩa Mác.",
        "trapAnalysis": "Tiền đề khoa học tự nhiên cho chủ nghĩa duy vật biện chứng."
      },
      {
        "id": 11,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Ba tiền đề tư tưởng - lý luận cho sự ra đời của CNXHKH bao gồm:",
        "options": [
          "Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng phê phán",
          "Triết học Trung Hoa, Triết học Ấn Độ, Triết học Hy Lạp",
          "Kinh tế tư bản Pháp, Văn học cổ điển Nga, Xã hội học Mỹ",
          "Triết học khai sáng Pháp, Thần học tôn giáo, Luật học La Mã"
        ],
        "correct": 0,
        "explanation": "Vở ghi nêu rõ: Tiền đề lý luận gồm: Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, Chủ nghĩa xã hội không tưởng phê phán.",
        "trapAnalysis": "Bộ ba tiền đề: Triết học Đức, Kinh tế Anh, CNXH không tưởng Pháp/Anh."
      },
      {
        "id": 12,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Đại biểu xuất sắc nhất của Triết học cổ điển Đức mà C.Mác đã kế thừa hạt nhân hợp lý là ai?",
        "options": [
          "Platôn và Arixtốt",
          "Hêghen và Phoi-ơ-bắc",
          "Căng-tơ và Đề-cáctơ",
          "A.Smith và Ricardo"
        ],
        "correct": 1,
        "explanation": "Mác kế thừa phép biện chứng của Hêghen và chủ nghĩa duy vật của Phoi-ơ-bắc để sáng lập chủ nghĩa duy vật biện chứng.",
        "trapAnalysis": "Hêghen (biện chứng) và Phoi-ơ-bắc (duy vật)."
      },
      {
        "id": 13,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Các nhà kinh tế học cổ điển Anh nổi tiếng nhất được C.Mác kế thừa là:",
        "options": [
          "A.Smith và D.Ricardo",
          "J.M.Keynes và M.Friedman",
          "Xanh Ximông và Phuriê",
          "Hêghen và Hốp-xơ"
        ],
        "correct": 0,
        "explanation": "A.Smith và D.Ricardo là hai đại biểu lớn của Kinh tế chính trị học cổ điển Anh.",
        "trapAnalysis": "A.Smith và D.Ricardo."
      },
      {
        "id": 14,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Các nhà đại biểu tiêu biểu của Chủ nghĩa xã hội không tưởng - phê phán đầu thế kỷ XIX là:",
        "options": [
          "C.Mác và Ph.Ăngghen",
          "Xanh Ximông, Sáclơ Phuriê và Rôbớt Ôoen",
          "Hêghen và Phoi-ơ-bắc",
          "V.I.Lênin và Xtalanh"
        ],
        "correct": 1,
        "explanation": "Ba nhà không tưởng vĩ đại: Xanh Ximông, Sáclơ Phuriê (Pháp) và Rôbớt Ôoen (Anh).",
        "trapAnalysis": "Xanh Ximông, Sáclơ Phuriê, Rôbớt Ôoen."
      },
      {
        "id": 15,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Vì sao CNXH của Xanh Ximông, Phuriê và Ôoen được gọi là 'không tưởng'?",
        "options": [
          "Vì họ không muốn người nghèo có cuộc sống tốt hơn",
          "Vì họ không phát hiện ra sứ mệnh của giai cấp công nhân và không tìm ra con đường bạo lực cách mạng",
          "Vì họ chỉ vẽ tranh mà không viết sách",
          "Vì họ phản đối việc nghiên cứu kinh tế"
        ],
        "correct": 1,
        "explanation": "Tính chất không tưởng thể hiện ở chỗ: không phát hiện được lực lượng xã hội tiên phong (GCCN) và chủ trương cầu xin lòng tốt của vua chúa, tư bản.",
        "trapAnalysis": "Không tưởng vì thiếu lực lượng tiên phong (GCCN) và con đường cách mạng."
      },
      {
        "id": 16,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Nội dung nào sau đây là phát hiện quan trọng nhất của C.Mác và Ph.Ăngghen đối với CNXHKH?",
        "options": [
          "Phát hiện ra định luật hấp dẫn của xã hội",
          "Phát hiện giai cấp công nhân là lực lượng có thể xóa bỏ CNTB, xây dựng CNXH",
          "Phát hiện ra cách chế tạo máy móc tự động",
          "Phát hiện ra việc in tiền giấy"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Một nội dung cơ bản, quan trọng nhất đối với CNXHKH là phát hiện giai cấp công nhân là lực lượng có thể xóa bỏ CNTB, xây dựng CNXH.",
        "trapAnalysis": "Phát hiện cốt lõi: Sứ mệnh lịch sử của giai cấp công nhân."
      },
      {
        "id": 17,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Trước C.Mác, các học thuyết xã hội chủ nghĩa không tưởng nhìn nhận giai cấp công nhân như thế nào?",
        "options": [
          "Là giai cấp lãnh đạo toàn xã hội",
          "Chỉ là một giai cấp đau khổ, đáng thương cần được cứu giúp, chứ không thấy vai trò tự giải phóng",
          "Là giai cấp thống trị có nhiều tư liệu sản xuất",
          "Là giai cấp không có thật trong xã hội"
        ],
        "correct": 1,
        "explanation": "CNXH không tưởng chỉ thấy công nhân là nạn nhân đau khổ cần thương hại, không thấy được sức mạnh cách mạng tự giải phóng của họ.",
        "trapAnalysis": "Chỉ coi GCCN là nạn nhân đau khổ, không thấy sứ mệnh lịch sử."
      },
      {
        "id": 18,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Sứ mệnh của GCCN theo phát hiện của CNXHKH nhằm mục tiêu giải phóng những ai?",
        "options": [
          "Chỉ giải phóng riêng cho thợ mỏ",
          "Chỉ giải phóng cho người nghèo ở châu Âu",
          "Giải phóng bản thân giai cấp công nhân đồng thời giải phóng toàn thể xã hội khỏi áp bức bóc lột",
          "Giải phóng cho giai cấp tư sản khỏi phá sản"
        ],
        "correct": 2,
        "explanation": "Sứ mệnh của GCCN mang tính nhân văn triệt để: giải phóng giai cấp mình gắn liền với giải phóng toàn thể nhân loại cần lao.",
        "trapAnalysis": "Giải phóng giai cấp mình đồng thời giải phóng toàn xã hội."
      },
      {
        "id": 19,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Chủ nghĩa Mác bao gồm mấy bộ phận lý luận cấu thành?",
        "options": [
          "2 bộ phận",
          "3 bộ phận (Triết học Mác, KTCT Mác, CNXHKH)",
          "4 bộ phận",
          "5 bộ phận"
        ],
        "correct": 1,
        "explanation": "Chủ nghĩa Mác gồm 3 bộ phận cấu thành hữu cơ: Triết học Mác - Lênin, Kinh tế chính trị Mác - Lênin và Chủ nghĩa xã hội khoa học.",
        "trapAnalysis": "3 bộ phận: Triết học, Kinh tế chính trị, CNXHKH."
      },
      {
        "id": 20,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Bộ phận nào trong chủ nghĩa Mác trực tiếp luận chứng về sứ mệnh lịch sử của GCCN và con đường xây dựng xã hội mới?",
        "options": [
          "Triết học Mác",
          "Kinh tế chính trị Mác",
          "Chủ nghĩa xã hội khoa học",
          "Toán học ứng dụng"
        ],
        "correct": 2,
        "explanation": "Chủ nghĩa xã hội khoa học là bộ phận trực tiếp nghiên cứu về sứ mệnh lịch sử của GCCN và quy luật chính trị - xã hội của cách mạng XHCN.",
        "trapAnalysis": "CNXHKH trực tiếp luận chứng sứ mệnh của GCCN."
      },
      {
        "id": 21,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Sơ đồ phân kỳ hình thái kinh tế - xã hội cộng sản chủ nghĩa theo chủ nghĩa Mác - Lênin gồm các giai đoạn nào?",
        "options": [
          "Chủ nghĩa xã hội (giai đoạn thấp/thời kỳ quá độ) -> Cộng sản chủ nghĩa (giai đoạn cao)",
          "Cộng sản nguyên thủy -> Chủ nghĩa xã hội -> Tư bản chủ nghĩa",
          "Chủ nghĩa tư bản -> Cộng sản chủ nghĩa -> Chủ nghĩa xã hội",
          "Thời kỳ quá độ -> Giai cấp phong kiến -> Cộng sản chủ nghĩa"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Sơ đồ các giai đoạn: chủ nghĩa xã hội (giai đoạn thấp/thời kỳ quá độ lên CSCN) -> cộng sản chủ nghĩa (giai đoạn cao).",
        "trapAnalysis": "CNXH (giai đoạn thấp) -> CSCN (giai đoạn cao)."
      },
      {
        "id": 22,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Giữa xã hội tư bản chủ nghĩa và xã hội cộng sản chủ nghĩa là thời kỳ lịch sử nào?",
        "options": [
          "Thời kỳ hòa bình vĩnh cửu",
          "Thời kỳ quá độ chính trị lên chủ nghĩa xã hội",
          "Thời kỳ khôi phục chế độ phong kiến",
          "Thời kỳ giải tán mọi chính phủ"
        ],
        "correct": 1,
        "explanation": "Giữa xã hội TBCN và XH CSCN là một thời kỳ cải biến cách mạng - thời kỳ quá độ lên CNXH.",
        "trapAnalysis": "Thời kỳ quá độ lên CNXH."
      },
      {
        "id": 23,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Giai đoạn cao của hình thái cộng sản chủ nghĩa có đặc trưng nổi bật về phân phối của cải là gì?",
        "options": [
          "Làm theo năng lực, hưởng theo lao động",
          "Làm theo năng lực, hưởng theo nhu cầu",
          "Phân phối bình quân cào bằng",
          "Phân phối theo vốn đóng góp"
        ],
        "correct": 1,
        "explanation": "Giai đoạn thấp (CNXH): Phân phối theo lao động. Giai đoạn cao (CSCN): Phân phối theo nhu cầu ('Làm theo năng lực, hưởng theo nhu cầu').",
        "trapAnalysis": "Giai đoạn cao: Làm theo năng lực, hưởng theo nhu cầu."
      },
      {
        "id": 24,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Nhận biết",
        "question": "Việt Nam hiện nay đang ở giai đoạn lịch sử nào trong tiến trình đi lên CNCS?",
        "options": [
          "Giai đoạn cao của CSCN",
          "Thời kỳ quá độ lên chủ nghĩa xã hội",
          "Chủ nghĩa xã hội phát triển hoàn hảo",
          "Giai đoạn phục hồi chủ nghĩa tư bản"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Việt Nam đang trong thời kỳ quá độ lên chủ nghĩa xã hội (bỏ qua chế độ TBCN).",
        "trapAnalysis": "Việt Nam đang trong thời kỳ quá độ lên CNXH."
      },
      {
        "id": 25,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Vì sao Việt Nam không thể tiến thẳng lên CNXH hoàn chỉnh ngay mà phải trải qua thời kỳ quá độ?",
        "options": [
          "Vì xuất phát điểm của Việt Nam là nước thuộc địa nửa phong kiến, nông nghiệp lạc hậu bỏ qua chế độ TBCN",
          "Vì các nước láng giềng yêu cầu như vậy",
          "Vì không có Đảng lãnh đạo",
          "Vì nhân dân không muốn xây dựng CNXH"
        ],
        "correct": 0,
        "explanation": "Do đi lên từ nền kinh tế tiểu nông lạc hậu, bỏ qua CNTB, Việt Nam bắt buộc phải trải qua thời kỳ quá độ để xây dựng cơ sở vật chất kỹ thuật.",
        "trapAnalysis": "Xuất phát điểm thấp, đi từ nước nông nghiệp lạc hậu."
      },
      {
        "id": 26,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Khái niệm nào sau đây chỉ đúng bản chất của CNXHKH?",
        "options": [
          "Là khoa học về các quy luật chính trị - xã hội của quá trình phát sinh, hình thành và phát triển của hình thái KT-XH cộng sản chủ nghĩa",
          "Là môn học dạy kỹ thuật cơ khí trong nhà máy",
          "Là môn học về thương mại quốc tế",
          "Là triết học tự nhiên thuần túy"
        ],
        "correct": 0,
        "explanation": "CNXHKH là khoa học về quy luật chính trị - xã hội của quá trình chuyển biến từ CNTB lên CNXH và CSCN.",
        "trapAnalysis": "Quy luật chính trị - xã hội của cách mạng XHCN."
      },
      {
        "id": 27,
        "chapter": "Chương 1: Nhập môn CNXHKH",
        "level": "Thông hiểu",
        "question": "Đối tượng nghiên cứu của Chủ nghĩa xã hội khoa học là gì?",
        "options": [
          "Quy luật giá trị thặng dư trong kinh tế",
          "Những quy luật và tính quy luật chính trị - xã hội của quá trình cách mạng XHCN và xây dựng CNXH, CSCN",
          "Quy luật vận động của các thiên thể vũ trụ",
          "Quy luật tâm lý cá nhân của người lao động"
        ],
        "correct": 1,
        "explanation": "Đối tượng của CNXHKH là những quy luật chính trị - xã hội của phong trào công nhân và cách mạng XHCN.",
        "trapAnalysis": "Quy luật chính trị - xã hội của cách mạng XHCN."
      },
      {
        "id": 28,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Giai cấp công nhân được Các Mác và Ăngghen định nghĩa bằng hai phương thức tiếp cận cơ bản nào?",
        "options": [
          "Phương diện kinh tế - xã hội và phương diện chính trị - xã hội",
          "Phương diện tuổi tác và giới tính",
          "Phương diện quốc tịch và tôn giáo",
          "Phương diện nơi ở thành thị hay nông thôn"
        ],
        "correct": 0,
        "explanation": "Hai phương diện cơ bản: (1) Kinh tế - xã hội (quan hệ với TLSX, vị trí trong sản xuất); (2) Chính trị - xã hội (tính tổ chức, kỷ luật, địa vị bị bóc lột).",
        "trapAnalysis": "Phương diện kinh tế - xã hội và chính trị - xã hội."
      },
      {
        "id": 29,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về phương diện kinh tế - xã hội, giai cấp công nhân là những người gắn liền với:",
        "options": [
          "Nền sản xuất tiểu nông gia đình",
          "Nền sản xuất đại công nghiệp hiện đại, lao động bằng phương thức công nghiệp",
          "Nền kinh tế săn bắt hái lượm",
          "Công việc buôn bán tự do ngoài chợ"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân gắn với công nghiệp hiện đại, gắn liền với quá trình sản xuất vật chất hiện đại.",
        "trapAnalysis": "Gắn liền với nền đại công nghiệp hiện đại."
      },
      {
        "id": 30,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân không sở hữu tư liệu sản xuất chủ yếu nên trong CNTB họ phải:",
        "options": [
          "Làm chủ các tập đoàn lớn",
          "Bán sức lao động cho nhà tư bản để nhận tiền công và bị bóc lột giá trị thặng dư",
          "Tự do kinh doanh không cần tiền vốn",
          "Thu thuế từ giai cấp tư sản"
        ],
        "correct": 1,
        "explanation": "Do không có TLSX, công nhân buộc phải bán sức lao động cho giai cấp tư sản và bị bóc lột giá trị thặng dư.",
        "trapAnalysis": "Bán sức lao động và bị bóc lột giá trị thặng dư."
      }
    ]
  },
  {
    "id": "de_03",
    "code": "MÃ ĐỀ: 103",
    "title": "Đề 03: Khái Niệm, Đặc Điểm & Địa Vị Của Giai Cấp Công Nhân",
    "description": "Ôn tập sâu Chương 2: Phương thức lao động công nghiệp, con đẻ của nền đại công nghiệp, địa vị kinh tế và địa vị chính trị - xã hội.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Luận điểm 'Giai cấp công nhân là con đẻ của nền đại công nghiệp' chỉ ra nguồn gốc hình thành của giai cấp này gắn với:",
        "options": [
          "Nông nghiệp truyền thống",
          "Cuộc cách mạng công nghiệp",
          "Thương nghiệp hàng hải thời cổ đại",
          "Làng nghề gốm sứ truyền thống"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân ra đời cùng với sự phát triển của nền đại công nghiệp cơ khí trong cách mạng công nghiệp.",
        "trapAnalysis": "Con đẻ của nền đại công nghiệp."
      },
      {
        "id": 2,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đặc điểm nổi bật nhất về phương thức lao động của giai cấp công nhân là:",
        "options": [
          "Lao động bằng công cụ thô sơ",
          "Lao động bằng phương thức công nghiệp",
          "Lao động hoàn toàn biệt lập tại nhà",
          "Lao động tùy hứng không theo giờ giấc"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Lao động bằng phương thức công nghiệp là đặc điểm nổi bật nhất của giai cấp công nhân.",
        "trapAnalysis": "Đặc điểm nổi bật nhất: lao động bằng phương thức công nghiệp."
      },
      {
        "id": 3,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân là đại biểu cho yếu tố nào trong lực lượng sản xuất hiện đại?",
        "options": [
          "Lực lượng sản xuất tiên tiến nhất",
          "Phương thức sản xuất thủ công nhỏ lẻ",
          "Lực lượng bảo thủ kìm hãm sản xuất",
          "Công cụ sản xuất thời kỳ đồ đá"
        ],
        "correct": 0,
        "explanation": "Giai cấp công nhân là đại biểu cho lực lượng sản xuất tiên tiến, trực tiếp vận hành công nghệ sản xuất hiện đại.",
        "trapAnalysis": "Đại biểu cho lực lượng sản xuất tiên tiến."
      },
      {
        "id": 4,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao giai cấp công nhân lại có tính tổ chức và kỷ luật lao động cao?",
        "options": [
          "Do bẩm sinh khi sinh ra đã có",
          "Do được tôi luyện trong môi trường sản xuất dây chuyền công nghiệp hiện đại",
          "Do bị đe dọa bằng vũ lực",
          "Do các nhà tư bản ban tặng"
        ],
        "correct": 1,
        "explanation": "Dây chuyền đại công nghiệp đòi hỏi tính hiệp tác chặt chẽ, tính kỷ luật nghiêm ngặt và tính tổ chức cao.",
        "trapAnalysis": "Rèn luyện từ môi trường sản xuất đại công nghiệp."
      },
      {
        "id": 5,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Phẩm chất nào sau đây KHÔNG PHẢI là phẩm chất của giai cấp công nhân hiện đại?",
        "options": [
          "Tính tổ chức, kỷ luật cao",
          "Tinh thần hợp tác quốc tế",
          "Tâm lý tự do tản mạn, tùy tiện của tiểu nông",
          "Tác phong công nghiệp khẩn trương"
        ],
        "correct": 2,
        "explanation": "Tâm lý tự do tản mạn, tùy tiện là đặc điểm của người sản xuất nhỏ tiểu nông, hoàn toàn đối lập với tác phong của công nhân.",
        "trapAnalysis": "Tâm lý tùy tiện, tản mạn là của người sản xuất nhỏ."
      },
      {
        "id": 6,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân gắn liền với quá trình sản xuất vật chất hiện đại có nghĩa là gì?",
        "options": [
          "Họ chỉ làm việc trong các văn phòng luật",
          "Họ trực tiếp hoặc gián tiếp vận hành các công cụ sản xuất công nghiệp để tạo ra của cải vật chất",
          "Họ không bao giờ tiếp xúc với máy móc",
          "Họ chỉ tiêu thụ hàng hóa mà không sản xuất"
        ],
        "correct": 1,
        "explanation": "GCCN gắn liền với sản xuất vật chất hiện đại, là người trực tiếp vận hành máy móc và công nghệ.",
        "trapAnalysis": "Gắn liền với sản xuất vật chất hiện đại."
      },
      {
        "id": 7,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tâm lý lao động công nghiệp của giai cấp công nhân được biểu hiện ở điểm nào?",
        "options": [
          "Tác phong nhanh nhẹn, chính xác, tuân thủ quy trình kỹ thuật nghiêm ngặt",
          "Đi làm muộn về sớm theo ý thích",
          "Làm việc theo thời vụ phụ thuộc thời tiết",
          "Không quan tâm đến an toàn lao động"
        ],
        "correct": 0,
        "explanation": "Tâm lý lao động công nghiệp: tôn trọng thời gian, tuân thủ quy trình công nghệ, có tính đồng đội cao.",
        "trapAnalysis": "Tâm lý công nghiệp = tuân thủ quy trình, chính xác, kỷ luật."
      },
      {
        "id": 8,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tinh thần hợp tác của giai cấp công nhân xuất phát từ điều kiện khách quan nào?",
        "options": [
          "Bản chất của nền sản xuất công nghiệp mang tính xã hội hóa cao",
          "Lời kêu gọi của các tổ chức từ thiện",
          "Quy định bắt buộc của tòa án tư sản",
          "Sự nhường nhịn vô điều kiện"
        ],
        "correct": 0,
        "explanation": "Sản xuất dây chuyền hiện đại đòi hỏi sự phối hợp nhịp nhàng giữa nhiều bộ phận, hình thành tinh thần hợp tác tự nhiên.",
        "trapAnalysis": "Xuất phát từ tính chất xã hội hóa của nền sản xuất công nghiệp."
      },
      {
        "id": 9,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tổng hợp các phẩm chất cần thiết giúp giai cấp công nhân có vai trò lãnh đạo cách mạng bao gồm:",
        "options": [
          "Lao động bằng phương thức công nghiệp, đại biểu LLSX tiên tiến, tính tổ chức kỷ luật, tinh thần hợp tác, tâm lý công nghiệp",
          "Sở hữu nhiều ruộng đất, nhiều vàng bạc tích lũy",
          "Có quyền thừa kế ngai vàng phong kiến",
          "Chỉ biết nghe theo sự sai bảo của chủ xưởng"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Tổng phẩm chất cần thiết: lao động bằng phương thức công nghiệp, đại biểu cho LLSX tiên tiến, tính tổ chức, kỷ luật lao động, tinh thần hợp tác và tâm lý lao động công nghiệp.",
        "trapAnalysis": "Học thuộc bộ phẩm chất cách mạng của GCCN."
      },
      {
        "id": 10,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp nào sau đây có lợi ích đối kháng trực tiếp nhất với giai cấp tư sản trong CNTB?",
        "options": [
          "Giai cấp nông dân",
          "Tầng lớp tiểu thương",
          "Giai cấp công nhân",
          "Tầng lớp quý tộc phong kiến"
        ],
        "correct": 2,
        "explanation": "Giai cấp công nhân là giai cấp đối lập trực tiếp về lợi ích căn bản với giai cấp tư sản (bị bóc lột GTTD).",
        "trapAnalysis": "GCCN đối lập trực tiếp về lợi ích với GCTS."
      },
      {
        "id": 11,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về địa vị kinh tế trong chế độ tư bản chủ nghĩa, giai cấp công nhân là giai cấp:",
        "options": [
          "Không có tư liệu sản xuất chủ yếu, phải bán sức lao động để kiếm sống",
          "Làm chủ toàn bộ ngân hàng và nhà máy",
          "Chiếm hữu phần lớn đất đai nông nghiệp",
          "Được chia đều lợi nhuận với nhà tư bản"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Không sở hữu tư liệu sản xuất, bị giai cấp tư sản bóc lột giá trị thặng dư.",
        "trapAnalysis": "Không sở hữu TLSX chủ yếu, phải bán sức lao động."
      },
      {
        "id": 12,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nguồn gốc sinh ra giá trị thặng dư mà nhà tư bản bóc lột của công nhân là từ:",
        "options": [
          "Máy móc tự sinh ra trong đêm",
          "Sức lao động sống của giai cấp công nhân tạo ra vượt quá giá trị sức lao động của họ",
          "Sự may mắn trong kinh doanh trên thị trường",
          "Sự hỗ trợ từ tiền trợ cấp của chính phủ"
        ],
        "correct": 1,
        "explanation": "Giá trị thặng dư là phần giá trị do lao động của công nhân tạo ra ngoài thời gian lao động tất yếu, bị nhà tư bản chiếm đoạt không công.",
        "trapAnalysis": "Do lao động sống của công nhân tạo ra."
      },
      {
        "id": 13,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về địa vị chính trị - xã hội dưới chế độ tư bản, giai cấp công nhân là giai cấp:",
        "options": [
          "Thống trị về mặt chính trị",
          "Bị áp bức, bị tước đoạt quyền lực nhà nước thực sự",
          "Nắm giữ chức vụ tổng thống vĩnh viễn",
          "Có quyền lực tối cao trong xã hội"
        ],
        "correct": 1,
        "explanation": "Dưới CNTB, giai cấp công nhân bị áp bức về chính trị, nhà nước tư sản là công cụ phục vụ giai cấp tư sản.",
        "trapAnalysis": "Bị áp bức về chính trị - xã hội."
      },
      {
        "id": 14,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điều kiện khách quan quy định sứ mệnh lịch sử của GCCN bắt nguồn từ:",
        "options": [
          "Lòng tốt của các nhà lãnh đạo",
          "Địa vị kinh tế và địa vị chính trị - xã hội của giai cấp công nhân trong xã hội TBCN",
          "Lời tiên tri của các nhà tôn giáo",
          "Số tiền tiết kiệm trong tài khoản của họ"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Điều kiện khách quan quy định sứ mệnh lịch sử của giai cấp công nhân: do địa vị kinh tế và địa vị chính trị xã hội của GCCN quy định.",
        "trapAnalysis": "Điều kiện khách quan = Địa vị kinh tế và Địa vị chính trị - xã hội."
      },
      {
        "id": 15,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao người thợ thủ công thời trung cổ không thể có sứ mệnh lịch sử xóa bỏ CNTB?",
        "options": [
          "Vì họ gắn với công cụ thủ công nhỏ lẻ, phân tán, không đại biểu cho lực lượng sản xuất tiến bộ",
          "Vì họ không biết chế tạo gốm sứ",
          "Vì họ có thu nhập quá cao",
          "Vì họ không sống ở thành thị"
        ],
        "correct": 0,
        "explanation": "Thợ thủ công gắn với công cụ thủ công lạc hậu, tính phân tán, tư hữu nhỏ, nên không thể lãnh đạo cách mạng công nghiệp.",
        "trapAnalysis": "Thợ thủ công gắn với sản xuất thủ công nhỏ lẻ."
      },
      {
        "id": 16,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao giai cấp nông dân không thể tự mình đảm đương vai trò lãnh đạo cách mạng XHCN?",
        "options": [
          "Vì nông dân không có tinh thần yêu nước",
          "Vì nông dân gắn với nền sản xuất tiểu nông phân tán, manh mún, mang tư tưởng tư hữu nhỏ",
          "Vì nông dân không muốn chống lại địa chủ",
          "Vì số lượng nông dân quá ít ỏi"
        ],
        "correct": 1,
        "explanation": "Nông dân là đồng minh tin cậy nhưng gắn liền với sản xuất nhỏ, manh mún, không có hệ tư tưởng độc lập nên không thể lãnh đạo.",
        "trapAnalysis": "Nông dân gắn với sản xuất tiểu nông phân tán."
      },
      {
        "id": 17,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tầng lớp trí thức đóng vai trò gì trong mối quan hệ với giai cấp công nhân?",
        "options": [
          "Là giai cấp độc lập lãnh đạo xã hội",
          "Là một tầng lớp xã hội quan trọng, đồng minh của GCCN, kết hợp với GCCN trong liên minh công - nông - trí thức",
          "Là kẻ thù không đội trời chung của GCCN",
          "Là lực lượng sở hữu toàn bộ các nhà máy"
        ],
        "correct": 1,
        "explanation": "Trí thức không phải là giai cấp độc lập mà là tầng lớp xã hội; họ liên minh chặt chẽ với công nhân và nông dân dưới sự lãnh đạo của ĐCS.",
        "trapAnalysis": "Trí thức là tầng lớp xã hội quan trọng, đồng minh của GCCN."
      },
      {
        "id": 18,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mục tiêu cuối cùng trong việc thực hiện sứ mệnh của giai cấp công nhân là gì?",
        "options": [
          "Thay thế sự thống trị của giai cấp tư sản bằng sự áp bức của riêng giai cấp công nhân",
          "Xóa bỏ mọi hình thức người bóc lột người, xây dựng xã hội cộng sản chủ nghĩa văn minh",
          "Chỉ chia ruộng đất cho người nghèo",
          "Xây dựng nền quân chủ tập quyền"
        ],
        "correct": 1,
        "explanation": "Sứ mệnh của GCCN không nhằm thiết lập đặc quyền giai cấp cho mình mà nhằm xóa bỏ mọi chế độ bóc lột giai cấp.",
        "trapAnalysis": "Xóa bỏ mọi bóc lột, xây dựng xã hội không giai cấp."
      },
      {
        "id": 19,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Luận điểm khẳng định: 'Giai cấp công nhân chỉ có thể giải phóng mình khi đồng thời giải phóng toàn thể xã hội' thể hiện tính chất gì?",
        "options": [
          "Tính ích kỷ cục bộ",
          "Tính nhân văn, triệt để cách mạng và tính phổ quát của sứ mệnh lịch sử",
          "Tính ảo tưởng không thực tế",
          "Sự thỏa hiệp vô điều kiện"
        ],
        "correct": 1,
        "explanation": "Công nhân không có tư hữu để bảo vệ, muốn giải phóng mình khỏi bóc lột phải xóa bỏ tận gốc chế độ tư hữu bóc lột của toàn xã hội.",
        "trapAnalysis": "Tính triệt để và nhân văn: giải phóng mình gắn với giải phóng toàn xã hội."
      },
      {
        "id": 20,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân có tinh thần đoàn kết quốc tế xuất phát từ cơ sở nào?",
        "options": [
          "Họ cùng chung địa vị bị giai cấp tư sản toàn cầu áp bức bóc lột và có chung mục tiêu giải phóng",
          "Do các nhà tư bản bắt buộc họ phải ký cam kết",
          "Do công nhân thích học ngoại ngữ",
          "Do họ không có tổ quốc"
        ],
        "correct": 0,
        "explanation": "Khẩu hiệu 'Vô sản tất cả các nước, đoàn kết lại!' xuất phát từ bản chất quốc tế của tư bản và sự liên kết khách quan của đại công nghiệp.",
        "trapAnalysis": "Chung địa vị bị áp bức và chung mục tiêu giải phóng."
      },
      {
        "id": 21,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Thuật ngữ nào sau đây đồng nghĩa với 'giai cấp công nhân hiện đại' trong các tác phẩm của C.Mác?",
        "options": [
          "Giai cấp vô sản",
          "Giai cấp nông dân nghèo",
          "Tầng lớp thị dân",
          "Tầng lớp thợ thủ công"
        ],
        "correct": 0,
        "explanation": "C.Mác và Ăngghen dùng các thuật ngữ: giai cấp vô sản, giai cấp vô sản hiện đại, giai cấp công nhân hiện đại để chỉ cùng một lực lượng xã hội.",
        "trapAnalysis": "Giai cấp vô sản đồng nghĩa với giai cấp công nhân."
      },
      {
        "id": 22,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao giai cấp công nhân là giai cấp kiên quyết nhất trong cuộc đấu tranh chống chủ nghĩa tư bản?",
        "options": [
          "Vì họ không có tài sản tư liệu sản xuất để mất ngoài xiềng xích, họ được cả thế giới",
          "Vì họ có vũ khí tối tân hơn quân đội",
          "Vì họ được trả lương cao nhất",
          "Vì họ không sợ mất ruộng đất"
        ],
        "correct": 0,
        "explanation": "Tuyên ngôn ĐCS: 'Những người vô sản chẳng mất gì hết ngoài xiềng xích của mình. Họ có cả một thế giới để giành lấy'.",
        "trapAnalysis": "Không có TLSX để mất ngoài xiềng xích."
      },
      {
        "id": 23,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Yếu tố nào sau đây quyết định bước chuyển của phong trào công nhân từ 'tự phát' sang 'tự giác'?",
        "options": [
          "Khi có sự truyền bá của chủ nghĩa Mác - Lênin và sự ra đời của Đảng Cộng sản",
          "Khi các cuộc đình công tự phát tăng về số lượng",
          "Khi công nhân được tăng thêm 5% tiền lương",
          "Khi công nhân chuyển từ nhà máy này sang nhà máy khác"
        ],
        "correct": 0,
        "explanation": "Phong trào công nhân chỉ chuyển từ tự phát sang tự giác khi được tiếp thu lý luận Mác - Lênin thông qua sự lãnh đạo của Đảng Cộng sản.",
        "trapAnalysis": "Tiếp thu chủ nghĩa Mác - Lênin và có Đảng Cộng sản lãnh đạo."
      },
      {
        "id": 24,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đấu tranh kinh tế (đòi tăng lương, giảm giờ làm) của công nhân có vai trò như thế nào?",
        "options": [
          "Là mục đích cuối cùng của phong trào công nhân",
          "Là bước chuẩn bị, rèn luyện lực lượng ban đầu, nhưng không thể thay thế cho đấu tranh chính trị",
          "Hoàn toàn vô ích không nên thực hiện",
          "Đủ để xóa bỏ hoàn toàn chủ nghĩa tư bản"
        ],
        "correct": 1,
        "explanation": "Đấu tranh kinh tế là cần thiết nhưng nếu chỉ dừng ở đó thì không thể xóa bỏ được tận gốc quan hệ bóc lột tư bản.",
        "trapAnalysis": "Đấu tranh kinh tế là bước chuẩn bị, cần tiến tới đấu tranh chính trị."
      },
      {
        "id": 25,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Hình thức đấu tranh cao nhất trong phong trào công nhân là hình thức nào?",
        "options": [
          "Đấu tranh kinh tế (bãi công, đình công)",
          "Đấu tranh chính trị (giành chính quyền nhà nước)",
          "Đấu tranh nghị trường xin sửa luật",
          "Đấu tranh từ thiện"
        ],
        "correct": 1,
        "explanation": "Đấu tranh chính trị nhằm lật đổ ách thống trị của giai cấp tư sản và giành lấy chính quyền là hình thức đấu tranh cao nhất.",
        "trapAnalysis": "Đấu tranh chính trị giành chính quyền là đỉnh cao."
      },
      {
        "id": 26,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mối quan hệ giữa phong trào công nhân và phong trào yêu nước ở các nước thuộc địa như Việt Nam là gì?",
        "options": [
          "Tách rời hoàn toàn, không liên quan đến nhau",
          "Gắn bó khăng khít, phong trào công nhân vừa đấu tranh vì giai cấp vừa đứng ở tuyến đầu giải phóng dân tộc",
          "Đối lập và bài trừ lẫn nhau",
          "Phong trào công nhân phản đối phong trào giải phóng dân tộc"
        ],
        "correct": 1,
        "explanation": "Ở các nước thuộc địa, mâu thuẫn dân tộc sâu sắc làm cho phong trào công nhân hòa quyện chặt chẽ với phong trào yêu nước giải phóng dân tộc.",
        "trapAnalysis": "Gắn bó mật thiết, giải phóng giai cấp gắn liền với giải phóng dân tộc."
      },
      {
        "id": 27,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân có khả năng đoàn kết với các tầng lớp lao động khác vì:",
        "options": [
          "Có sự giống nhau về lợi ích cơ bản: cùng bị áp bức bóc lột và mong muốn xã hội công bằng",
          "Có thể mua chuộc các tầng lớp khác bằng tiền",
          "Bắt buộc các tầng lớp khác phải tuân lệnh",
          "Không có việc gì làm nên muốn liên minh"
        ],
        "correct": 0,
        "explanation": "Công nhân, nông dân và người lao động đều có chung kẻ thù là ách bóc lột của tư sản, đế quốc nên có cơ sở liên minh tự nhiên.",
        "trapAnalysis": "Chung lợi ích cơ bản và chung kẻ thù bóc lột."
      },
      {
        "id": 28,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đặc điểm nào của phương thức sản xuất đại công nghiệp trực tiếp rèn luyện tinh thần kỷ luật của công nhân?",
        "options": [
          "Sự phụ thuộc vào dây chuyền máy móc và nhịp độ làm việc liên tục",
          "Thời gian tự do không ai kiểm soát",
          "Việc làm tại nhà theo cảm hứng",
          "Mỗi người làm một kiểu không cần tiêu chuẩn"
        ],
        "correct": 0,
        "explanation": "Quy trình công nghệ tự động và dây chuyền buộc người công nhân phải tuân thủ nghiêm ngặt giờ giấc và kỹ thuật.",
        "trapAnalysis": "Sự phụ thuộc vào dây chuyền công nghiệp hiện đại."
      },
      {
        "id": 29,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Khái niệm nào phản ánh đúng bản chất vị trí của giai cấp công nhân trong hệ thống sản xuất TBCN?",
        "options": [
          "Giai cấp làm thuê, bán sức lao động",
          "Giai cấp sở hữu tư bản tài chính",
          "Giai cấp bóc lột giá trị thặng dư",
          "Giai cấp trung lưu độc lập với mọi quan hệ sản xuất"
        ],
        "correct": 0,
        "explanation": "Vô sản là giai cấp làm thuê hiện đại, do không có TLSX nên phải bán sức lao động để kiếm sống.",
        "trapAnalysis": "Giai cấp làm thuê, bán sức lao động."
      },
      {
        "id": 30,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Sứ mệnh lịch sử của giai cấp công nhân có điểm kết thúc là khi nào?",
        "options": [
          "Khi giành được chính quyền nhà nước",
          "Khi xây dựng thành công chủ nghĩa xã hội và chủ nghĩa cộng sản trên toàn thế giới",
          "Khi hoàn thành cuộc tổng bãi công đầu tiên",
          "Khi các nhà máy tự động hóa hoàn toàn"
        ],
        "correct": 1,
        "explanation": "Sứ mệnh của GCCN chỉ hoàn thành khi đã xóa bỏ hoàn toàn mọi chế độ người bóc lột người, xây dựng thành công xã hội CSCN.",
        "trapAnalysis": "Hoàn thành khi xây dựng thành công CNXH và CSCN."
      }
    ]
  },
  {
    "id": "de_04",
    "code": "MÃ ĐỀ: 104",
    "title": "Đề 04: Nội Dung Sứ Mệnh Lịch Sử GCCN & Vai Trò Đảng Cộng Sản",
    "description": "Ôn tập 3 nội dung sứ mệnh (Kinh tế, Chính trị - XH, Văn hóa - tư tưởng), điều kiện chủ quan và quy luật thành lập Đảng Cộng sản.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Sứ mệnh lịch sử của giai cấp công nhân được thể hiện trên mấy nội dung cơ bản?",
        "options": [
          "1 nội dung duy nhất",
          "2 nội dung",
          "3 nội dung (Kinh tế, Chính trị - xã hội, Văn hóa - tư tưởng)",
          "4 nội dung"
        ],
        "correct": 2,
        "explanation": "Sứ mệnh lịch sử của GCCN thể hiện toàn diện trên 3 nội dung: Nội dung kinh tế, Nội dung chính trị - xã hội và Nội dung văn hóa, tư tưởng.",
        "trapAnalysis": "Ba nội dung: Kinh tế, Chính trị - XH, Văn hóa - tư tưởng."
      },
      {
        "id": 2,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Trong nội dung KINH TẾ, giai cấp công nhân đóng vai trò gì đối với xã hội mới?",
        "options": [
          "Là lực lượng sản xuất cơ bản, sản xuất của cải cho xã hội xã hội chủ nghĩa",
          "Là tầng lớp trung gian chỉ làm dịch vụ phân phối",
          "Là lực lượng chỉ tiêu thụ hàng hóa",
          "Là giai cấp duy trì kinh tế tự cung tự cấp"
        ],
        "correct": 0,
        "explanation": "Slide: Nội dung kinh tế của sứ mệnh lịch sử: giai cấp công nhân là lực lượng sản xuất cơ bản, sản xuất của cải cho xã hội xã hội chủ nghĩa.",
        "trapAnalysis": "Nội dung kinh tế: LLSX cơ bản, sản xuất của cải cho XHCN."
      },
      {
        "id": 3,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mục tiêu kinh tế lâu dài của giai cấp công nhân sau khi giành chính quyền là gì?",
        "options": [
          "Tập trung toàn bộ của cải vào tay các nhà tư bản nước ngoài",
          "Xây dựng quan hệ sản xuất mới dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu và phát triển mạnh mẽ lực lượng sản xuất",
          "Phá hủy toàn bộ các nhà máy hiện đại",
          "Chia đều tư liệu sản xuất cho từng hộ cá thể"
        ],
        "correct": 1,
        "explanation": "Về kinh tế, GCCN lãnh đạo xác lập chế độ công hữu về TLSX chủ yếu, tổ chức sản xuất hiện đại để nâng cao đời sống nhân dân.",
        "trapAnalysis": "Xác lập chế độ công hữu TLSX chủ yếu, phát triển LLSX."
      },
      {
        "id": 4,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung CHÍNH TRỊ - XÃ HỘI trong sứ mệnh của giai cấp công nhân là:",
        "options": [
          "Dưới sự lãnh đạo của Đảng Cộng sản, đấu tranh giành chính quyền và xây dựng nhà nước mới của nhân dân",
          "Thỏa hiệp với chính phủ tư sản để nhận ghế bộ trưởng",
          "Tuyên bố bãi bỏ hoàn toàn pháp luật và nhà nước ngay lập tức",
          "Chỉ tham gia biểu tình ôn hòa không động chạm đến quyền lực nhà nước"
        ],
        "correct": 0,
        "explanation": "Slide: Nội dung chính trị - xã hội: dưới sự lãnh đạo của Đảng Cộng sản, giai cấp công nhân đấu tranh giành chính quyền và xây dựng nhà nước mới của nhân dân.",
        "trapAnalysis": "Nội dung chính trị: Giành chính quyền và xây dựng nhà nước mới dưới sự lãnh đạo của ĐCS."
      },
      {
        "id": 5,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nhà nước mới do giai cấp công nhân và nhân dân lao động xây dựng sau khi giành chính quyền mang bản chất của giai cấp nào?",
        "options": [
          "Mang bản chất giai cấp tư sản",
          "Mang bản chất giai cấp công nhân",
          "Mang bản chất giai cấp địa chủ phong kiến",
          "Không mang bản chất của bất kỳ giai cấp nào"
        ],
        "correct": 1,
        "explanation": "Nhà nước XHCN mang bản chất của giai cấp công nhân, phục vụ lợi ích của đa số nhân dân lao động dưới sự lãnh đạo của Đảng.",
        "trapAnalysis": "Mang bản chất giai cấp công nhân."
      },
      {
        "id": 6,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nội dung VĂN HÓA, TƯ TƯỞNG trong sứ mệnh của giai cấp công nhân bao gồm nhiệm vụ nào?",
        "options": [
          "Bảo tồn nguyên vẹn các hủ tục lạc hậu phong kiến",
          "Xây dựng nền văn hóa và con người mới với tư tưởng, đạo đức xã hội chủ nghĩa",
          "Nhập khẩu toàn bộ lối sống thực dụng phương Tây",
          "Cấm đoán mọi hoạt động sáng tạo nghệ thuật"
        ],
        "correct": 1,
        "explanation": "Slide: Nội dung văn hóa, tư tưởng: xây dựng nền văn hóa và con người mới với tư tưởng, đạo đức xã hội chủ nghĩa.",
        "trapAnalysis": "Xây dựng văn hóa mới và con người mới với tư tưởng, đạo đức XHCN."
      },
      {
        "id": 7,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ghi chú viết tay ở lề tài liệu về nội dung văn hóa, tư tưởng nhấn mạnh nền tảng gì?",
        "options": [
          "Hệ tư tưởng Nho giáo phong kiến",
          "Hệ tư tưởng của Mác - Lênin",
          "Chủ nghĩa tự do cá nhân tư sản",
          "Chủ nghĩa vị kỷ thực dụng"
        ],
        "correct": 1,
        "explanation": "Vở ghi và slide: Ghi chú viết tay ở lề nêu 'hệ tư tưởng của Mác - Lênin'.",
        "trapAnalysis": "Hệ tư tưởng Mác - Lênin là nền tảng."
      },
      {
        "id": 8,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Trong ba nội dung của sứ mệnh lịch sử, nội dung nào giữ vai trò tiền đề quyết định để thực hiện các nội dung khác?",
        "options": [
          "Nội dung kinh tế (sản xuất của cải vật chất)",
          "Nội dung giải trí cuối tuần",
          "Nội dung thời trang may mặc",
          "Nội dung thi cử học vị"
        ],
        "correct": 0,
        "explanation": "Sản xuất vật chất là cơ sở của đời sống xã hội. Không có nền kinh tế phát triển cao thì không thể có điều kiện xây dựng chính trị và văn hóa XHCN vững chắc.",
        "trapAnalysis": "Nội dung kinh tế là cơ sở, nền tảng vật chất."
      },
      {
        "id": 9,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mục tiêu của cuộc cách mạng tư tưởng - văn hóa của giai cấp công nhân là giải phóng con người khỏi điều gì?",
        "options": [
          "Khỏi sự phát triển của công nghệ hiện đại",
          "Khỏi những quan niệm lạc hậu, tư tưởng tư sản và tàn dư đạo đức cũ",
          "Khỏi việc học tập nghiên cứu khoa học",
          "Khỏi lao động sản xuất"
        ],
        "correct": 1,
        "explanation": "Cách mạng tư tưởng văn hóa nhằm xóa bỏ các tư tưởng tư sản, phong kiến hủ bại, xây dựng thế giới quan khoa học và nhân sinh quan cách mạng.",
        "trapAnalysis": "Giải phóng khỏi tư tưởng lạc hậu, hủ tục cũ."
      },
      {
        "id": 10,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mối quan hệ biện chứng giữa 3 nội dung sứ mệnh của GCCN (Kinh tế, Chính trị, Văn hóa) là gì?",
        "options": [
          "Tách rời biệt lập, không tác động đến nhau",
          "Gắn bó mật thiết, tác động qua lại lẫn nhau tạo thành một chỉnh thể thống nhất",
          "Chỉ cần làm tốt kinh tế, bỏ qua chính trị và văn hóa",
          "Chỉ cần làm tốt văn hóa, kinh tế tự khắc phát triển"
        ],
        "correct": 1,
        "explanation": "Ba nội dung tạo thành chỉnh thể hữu cơ: kinh tế là cơ sở, chính trị là công cụ bảo đảm quyền lực, văn hóa là mục tiêu và nền tảng tinh thần.",
        "trapAnalysis": "Chỉnh thể thống nhất, gắn bó mật thiết."
      },
      {
        "id": 11,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điều kiện chủ quan giữ vai trò QUYẾT ĐỊNH NHẤT để GCCN hoàn thành sứ mệnh lịch sử là:",
        "options": [
          "Sự ra đời và vai trò lãnh đạo của Đảng Cộng sản",
          "Sự tăng lên nhanh chóng của dân số tự nhiên",
          "Mức viện trợ vũ khí từ nước ngoài",
          "Sự thông cảm của các tổ chức tôn giáo"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Điều kiện chủ quan quy định sứ mệnh lịch sử của giai cấp công nhân: nhân tố quan trọng nhất: Đảng Cộng Sản (lãnh đạo).",
        "trapAnalysis": "Nhân tố quan trọng nhất: Đảng Cộng sản lãnh đạo."
      },
      {
        "id": 12,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đảng Cộng sản được xác định là tổ chức gì của giai cấp công nhân?",
        "options": [
          "Đội tiên phong chiến đấu, bộ tham mưu chiến đấu",
          "Một câu lạc bộ giao lưu giải trí",
          "Một tổ chức kinh doanh vì lợi nhuận",
          "Một hội đồng trọng tài đứng giữa công nhân và tư sản"
        ],
        "correct": 0,
        "explanation": "Đảng Cộng sản là đội tiên phong, bộ tham mưu chiến đấu cao nhất của giai cấp công nhân và nhân dân lao động.",
        "trapAnalysis": "Đội tiên phong, bộ tham mưu chiến đấu."
      },
      {
        "id": 13,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Quy luật phổ biến về sự hình thành Đảng Cộng sản được V.I.Lênin khái quát là:",
        "options": [
          "Đảng Cộng sản = Phong trào công nhân + Chủ nghĩa Mác - Lênin",
          "Đảng Cộng sản = Phong trào nông dân + Triết học phương Đông",
          "Đảng Cộng sản = Phong trào trí thức + Kinh tế thị trường",
          "Đảng Cộng sản = Tôn giáo + Đạo đức truyền thống"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Đảng Cộng sản = phong trào công nhân + chủ nghĩa Mác Lênin.",
        "trapAnalysis": "Công thức chung: PT công nhân + CN Mác-Lênin."
      },
      {
        "id": 14,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nếu phong trào công nhân KHÔNG có sự kết hợp với chủ nghĩa Mác - Lênin thì phong trào sẽ ra sao?",
        "options": [
          "Tự động chuyển thành cách mạng XHCN thắng lợi",
          "Chỉ dừng lại ở mức đấu tranh tự phát kinh tế đòi quyền lợi trước mắt",
          "Lật đổ được nhà nước tư sản ngay lập tức",
          "Biến thành giai cấp tư sản cầm quyền"
        ],
        "correct": 1,
        "explanation": "Không có lý luận Mác - Lênin dẫn đường, phong trào công nhân chỉ là phong trào tự phát đòi tăng lương cục bộ, không thể đi tới tự giác chính trị.",
        "trapAnalysis": "Chỉ dừng lại ở đấu tranh tự phát kinh tế."
      },
      {
        "id": 15,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ngược lại, nếu chủ nghĩa Mác - Lênin KHÔNG thâm nhập vào phong trào công nhân thì chủ nghĩa Mác sẽ như thế nào?",
        "options": [
          "Sẽ trở thành một học thuyết lý thuyết thuần túy trong sách vở, không có lực lượng vật chất hiện thực",
          "Vẫn tự động giải phóng xã hội",
          "Biến thành tôn giáo mới",
          "Bị các nhà tư bản mua lại bản quyền"
        ],
        "correct": 0,
        "explanation": "V.I.Lênin chỉ rõ: Lý luận không có phong trào quần chúng là lý luận suông; phong trào không có lý luận soi đường là phong trào mù quáng.",
        "trapAnalysis": "Lý luận suông nếu thiếu phong trào hiện thực."
      },
      {
        "id": 16,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mối quan hệ gắn bó máu thịt giữa Đảng Cộng sản và giai cấp công nhân thể hiện ở điểm nào?",
        "options": [
          "Đảng là một tổ chức tư nhân độc lập có cổ phần riêng",
          "GCCN là cơ sở xã hội - giai cấp của Đảng, còn Đảng là đội tiên phong đại biểu trung thành cho lợi ích của GCCN",
          "Đảng đứng trên giai cấp công nhân và thu học phí của công nhân",
          "Đảng không liên quan đến đời sống của công nhân"
        ],
        "correct": 1,
        "explanation": "Đảng Cộng sản không có lợi ích riêng tách rời lợi ích của giai cấp công nhân và nhân dân lao động; GCCN là nền tảng giai cấp của Đảng.",
        "trapAnalysis": "GCCN là cơ sở giai cấp, Đảng là đội tiên phong đại diện."
      },
      {
        "id": 17,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nguyên tắc tổ chức và sinh hoạt cơ bản nhất của Đảng Cộng sản theo chủ nghĩa Mác - Lênin là gì?",
        "options": [
          "Nguyên tắc tập trung dân chủ",
          "Nguyên tắc tự do cá nhân tuyệt đối",
          "Nguyên tắc đa nguyên chính trị",
          "Nguyên tắc cha truyền con nối"
        ],
        "correct": 0,
        "explanation": "Tập trung dân chủ là nguyên tắc tổ chức cơ bản nhất của Đảng Cộng sản, bảo đảm Đảng thống nhất về ý chí và hành động.",
        "trapAnalysis": "Nguyên tắc tập trung dân chủ."
      },
      {
        "id": 18,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tại sao nói Đảng Cộng sản là nhân tố quyết định mọi thắng lợi của cách mạng XHCN?",
        "options": [
          "Vì Đảng đề ra đường lối chiến lược, sách lược đúng đắn và tổ chức lãnh đạo quần chúng hành động",
          "Vì Đảng có nhiều tiền bạc nhất xã hội",
          "Vì Đảng ban phát của cải miễn phí cho mọi người",
          "Vì Đảng không bao giờ phải chịu sự giám sát"
        ],
        "correct": 0,
        "explanation": "Đảng là bộ tham mưu sáng suốt vạch ra đường lối cách mạng đúng đắn, tập hợp và lãnh đạo quần chúng nhân dân làm nên thắng lợi.",
        "trapAnalysis": "Đề ra đường lối đúng đắn và lãnh đạo thực hiện."
      },
      {
        "id": 19,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Khái niệm 'Liên minh công - nông' trong cách mạng XHCN giữ vai trò gì?",
        "options": [
          "Là cơ sở kinh tế - chính trị vững chắc của khối đại đoàn kết toàn dân dưới sự lãnh đạo của Đảng",
          "Là một thỏa thuận buôn bán nông sản",
          "Là hiệp định chia rẽ giữa công nhân và nông dân",
          "Là chính sách bắt buộc nông dân bỏ ruộng"
        ],
        "correct": 0,
        "explanation": "Liên minh công - nông - trí thức là nền tảng chính trị - xã hội của nhà nước XHCN và của khối đại đoàn kết dân tộc do Đảng lãnh đạo.",
        "trapAnalysis": "Nền tảng chính trị - xã hội của khối đại đoàn kết."
      },
      {
        "id": 20,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ai giữ vai trò lãnh đạo trong khối liên minh công - nông - trí thức?",
        "options": [
          "Giai cấp nông dân",
          "Giai cấp công nhân (thông qua Đảng Cộng sản)",
          "Tầng lớp trí thức",
          "Giai cấp tư sản"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân giữ vai trò lãnh đạo khối liên minh thông qua đội tiên phong là Đảng Cộng sản.",
        "trapAnalysis": "Giai cấp công nhân lãnh đạo qua Đảng Cộng sản."
      },
      {
        "id": 21,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ở các nước định hướng xã hội chủ nghĩa hiện nay, giai cấp công nhân giữ vai trò gì?",
        "options": [
          "Là giai cấp bị bóc lột nặng nề nhất",
          "Đã trở thành giai cấp lãnh đạo xã hội thông qua đội tiên phong là Đảng Cộng sản",
          "Không còn tồn tại trong xã hội",
          "Trở thành giai cấp làm thuê thuần túy"
        ],
        "correct": 1,
        "explanation": "Slide: Ở một số nước xã hội chủ nghĩa, giai cấp công nhân đã trở thành giai cấp lãnh đạo thông qua đội tiên phong là Đảng Cộng sản.",
        "trapAnalysis": "Đã trở thành giai cấp lãnh đạo thông qua ĐCS."
      },
      {
        "id": 22,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nhiệm vụ chính trị của giai cấp công nhân ở các nước xã hội chủ nghĩa hiện nay là gì?",
        "options": [
          "Lãnh đạo nhân dân bảo vệ vững chắc tổ quốc và xây dựng thành công chủ nghĩa xã hội",
          "Lật đổ nhà nước của chính mình",
          "Khôi phục lại chế độ tư bản chủ nghĩa",
          "Tuyên bố giải tán tổ chức công đoàn"
        ],
        "correct": 0,
        "explanation": "Slide 2.2.2: Về chính trị, ở các nước định hướng xã hội chủ nghĩa, giai cấp công nhân lãnh đạo nhân dân xây dựng chủ nghĩa xã hội.",
        "trapAnalysis": "Lãnh đạo nhân dân xây dựng CNXH."
      },
      {
        "id": 23,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ở các nước tư bản chủ nghĩa hiện nay, giai cấp công nhân thực hiện sứ mệnh về chính trị như thế nào?",
        "options": [
          "Ủng hộ hoàn toàn các cuộc chiến tranh xâm lược",
          "Đi đầu trong đấu tranh chống áp bức, bất công và các vấn đề xã hội, đòi dân sinh, dân chủ",
          "Từ bỏ mọi cuộc bãi công",
          "Chỉ phục vụ lợi ích của các tỷ phú"
        ],
        "correct": 1,
        "explanation": "Slide 2.2.2: Ở các nước tư bản chủ nghĩa, đi đầu trong đấu tranh chống áp bức, bất công và các vấn đề xã hội.",
        "trapAnalysis": "Đi đầu chống áp bức, bất công, đòi dân sinh dân chủ."
      },
      {
        "id": 24,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về văn hóa - xã hội, giai cấp công nhân trên thế giới hiện nay đóng góp điều gì?",
        "options": [
          "Góp phần xây dựng nền văn hóa tiến bộ vì công bằng, bình đẳng và quyền con người",
          "Bài xích các giá trị tiến bộ của nhân loại",
          "Bắt buộc mọi người phải sống theo khuôn mẫu cứng nhắc",
          "Phá hủy các di sản văn hóa truyền thống"
        ],
        "correct": 0,
        "explanation": "Slide 2.2.2: Về văn hóa - xã hội, góp phần xây dựng nền văn hóa tiến bộ vì công bằng, bình đẳng và quyền con người.",
        "trapAnalysis": "Xây dựng nền văn hóa tiến bộ vì công bằng, bình đẳng, quyền con người."
      },
      {
        "id": 25,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Về kinh tế trên thế giới hiện nay, giai cấp công nhân vẫn giữ vai trò gì?",
        "options": [
          "Vai trò sản xuất vật chất chủ yếu cho xã hội",
          "Chỉ làm nhiệm vụ trung gian thương mại",
          "Không còn tham gia vào chuỗi cung ứng hàng hóa",
          "Chỉ sống dựa vào tiền trợ cấp thất nghiệp"
        ],
        "correct": 0,
        "explanation": "Slide 2.2.2: Về kinh tế, giai cấp công nhân vẫn giữ vai trò sản xuất vật chất chủ yếu.",
        "trapAnalysis": "Vẫn giữ vai trò sản xuất vật chất chủ yếu."
      },
      {
        "id": 26,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mâu thuẫn cơ bản giữa lao động và tư bản trong thế giới hiện đại:",
        "options": [
          "Đã hoàn toàn biến mất vĩnh viễn",
          "Vẫn tiếp tục tồn tại và ngày càng mở rộng, sâu sắc dưới nhiều hình thức mới",
          "Chỉ tồn tại ở các nước châu Phi nghèo đói",
          "Đã được giải quyết ổn thỏa bằng tiền thưởng cuối năm"
        ],
        "correct": 1,
        "explanation": "Bản chất bóc lột của CNTB không đổi, xung đột lợi ích giữa lao động làm thuê và tư bản bóc lột vẫn là mâu thuẫn cơ bản của CNTB hiện đại.",
        "trapAnalysis": "Vẫn tồn tại và phát triển sâu sắc dưới các hình thức mới."
      },
      {
        "id": 27,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Công đoàn là tổ chức có vai trò gì đối với giai cấp công nhân?",
        "options": [
          "Là tổ chức chính trị cao nhất thay thế Đảng Cộng sản",
          "Là tổ chức quần chúng rộng lớn đại diện bảo vệ quyền và lợi ích hợp pháp, chính đáng của người lao động",
          "Là cơ quan thuộc quyền quản lý của ông chủ tư bản",
          "Là cơ quan xét xử các vụ án hình sự"
        ],
        "correct": 1,
        "explanation": "Công đoàn là tổ chức chính trị - xã hội rộng lớn của giai cấp công nhân, là cầu nối giữa Đảng với công nhân, chăm lo bảo vệ quyền lợi người lao động.",
        "trapAnalysis": "Tổ chức quần chúng đại diện, chăm lo bảo vệ quyền lợi công nhân."
      },
      {
        "id": 28,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân hiện nay có biểu hiện mới nào của 'xã hội hóa lao động'?",
        "options": [
          "Sản xuất khép kín trong từng gia đình nhỏ",
          "Phân công lao động mang tính toàn cầu, chuỗi cung ứng quốc tế liên kết xuyên biên giới",
          "Không cần liên hệ giữa các phân xưởng",
          "Cấm buôn bán xuất nhập khẩu hàng hóa"
        ],
        "correct": 1,
        "explanation": "Slide: Biểu hiện mới của xã hội hóa lao động: chuỗi giá trị toàn cầu, dây chuyền sản xuất đa quốc gia, hợp tác kỹ thuật số xuyên lục địa.",
        "trapAnalysis": "Phân công lao động toàn cầu, chuỗi cung ứng quốc tế."
      },
      {
        "id": 29,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao nói Đảng Cộng sản là đội tiên phong của GCCN mà không phải là của giai cấp tư sản?",
        "options": [
          "Vì Đảng được cấu thành từ những người công nhân và chiến đấu vì mục tiêu xóa bỏ bóc lột, giải phóng giai cấp vô sản",
          "Vì nhà nước tư sản cấm tư sản vào Đảng",
          "Vì Đảng không cho người giàu tham gia biểu tình",
          "Vì Đảng chỉ tuyển dụng người biết lái xe buýt"
        ],
        "correct": 0,
        "explanation": "Đảng Cộng sản đại biểu trung thành cho lợi ích của GCCN và nhân dân lao động, lấy chủ nghĩa Mác - Lênin làm nền tảng kim chỉ nam.",
        "trapAnalysis": "Chiến đấu vì mục tiêu xóa bỏ áp bức bóc lột, giải phóng GCCN."
      },
      {
        "id": 30,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Sự lãnh đạo của Đảng Cộng sản đối với nhà nước XHCN được thực hiện theo nguyên tắc nào?",
        "options": [
          "Đảng bao biện, làm thay mọi công việc của các cơ quan nhà nước",
          "Đảng lãnh đạo nhà nước thông qua đường lối, chủ trương, công tác cán bộ và kiểm tra giám sát, hoạt động trong khuôn khổ Hiến pháp và pháp luật",
          "Đảng đứng ngoài pháp luật và không cần tuân thủ hiến pháp",
          "Đảng chỉ đạo bằng các mệnh lệnh miệng bí mật"
        ],
        "correct": 1,
        "explanation": "Đảng lãnh đạo Nhà nước nhưng không làm thay; Nhà nước thể chế hóa đường lối của Đảng thành luật pháp và quản lý xã hội bằng pháp luật.",
        "trapAnalysis": "Đảng lãnh đạo thông qua đường lối, cán bộ và trong khuôn khổ pháp luật."
      }
    ]
  },
  {
    "id": "de_05",
    "code": "MÃ ĐỀ: 105",
    "title": "Đề 05: Giai Cấp Công Nhân Việt Nam & GCCN Trong Thế Giới Hiện Nay",
    "description": "Thời điểm ra đời GCCN Việt Nam, điểm tương đồng với thế kỷ XIX và các biến đổi: trí tuệ hóa, trung lưu hóa, xã hội hóa lao động.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Giai cấp công nhân Việt Nam ra đời trong hoàn cảnh lịch sử nào?",
        "options": [
          "Trong phong trào khởi nghĩa Tây Sơn",
          "Trong cuộc khai thác thuộc địa của thực dân Pháp vào đầu thế kỷ XX",
          "Sau khi đất nước hoàn toàn giải phóng năm 1975",
          "Thời kỳ các vua Hùng dựng nước"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Giai cấp công nhân ở Việt Nam ra đời vào đầu thế kỷ XX trong các đồn điền, hầm mỏ, xí nghiệp của thực dân Pháp.",
        "trapAnalysis": "Ra đời đầu thế kỷ XX trong cuộc khai thác thuộc địa của Pháp."
      },
      {
        "id": 2,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân Việt Nam ra đời TRƯỚC hay SAU giai cấp tư sản dân tộc Việt Nam?",
        "options": [
          "Ra đời sau giai cấp tư sản dân tộc rất lâu",
          "Ra đời trước giai cấp tư sản dân tộc Việt Nam",
          "Ra đời cùng một ngày với giai cấp tư sản",
          "Giai cấp tư sản không bao giờ xuất hiện ở Việt Nam"
        ],
        "correct": 1,
        "explanation": "Do chính sách khai thác thuộc địa của Pháp, giai cấp công nhân Việt Nam ra đời trước cả giai cấp tư sản dân tộc Việt Nam.",
        "trapAnalysis": "Ra đời TRƯỚC giai cấp tư sản dân tộc Việt Nam."
      },
      {
        "id": 3,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nguồn gốc xuất thân chủ yếu của giai cấp công nhân Việt Nam là từ đâu?",
        "options": [
          "Từ tầng lớp địa chủ phong kiến phá sản",
          "Từ giai cấp nông dân bị tước đoạt ruộng đất và bần cùng hóa",
          "Từ tầng lớp quý tộc hoàng gia",
          "Từ thợ thủ công nhập cư nước ngoài"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân Việt Nam phần lớn xuất thân trực tiếp từ nông dân nghèo bị thực dân và phong kiến cướp bóc ruộng đất.",
        "trapAnalysis": "Xuất thân chủ yếu từ giai cấp nông dân."
      },
      {
        "id": 4,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mối quan hệ tự nhiên giữa giai cấp công nhân và giai cấp nông dân ở Việt Nam là gì?",
        "options": [
          "Quan hệ thù địch xung đột quyền lợi",
          "Quan hệ ruột thịt máu thịt, cùng chung nỗi đau mất nước và bị áp bức bóc lột",
          "Quan hệ buôn bán cạnh tranh khốc liệt",
          "Không có bất kỳ mối quan hệ nào"
        ],
        "correct": 1,
        "explanation": "Công nhân và nông dân Việt Nam có mối quan hệ tự nhiên gắn bó máu thịt, tạo điều kiện thuận lợi xây dựng khối liên minh công nông vững chắc.",
        "trapAnalysis": "Quan hệ máu thịt, đồng cảm sâu sắc."
      },
      {
        "id": 5,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân Việt Nam phải chịu tầng tầng lớp lớp ách áp bức bóc lột của những thế lực nào?",
        "options": [
          "Chỉ bị áp bức bởi địa chủ trong làng",
          "Chịu ba tầng áp bức bóc lột: thực dân Pháp, phong kiến tay sai và tư bản",
          "Không bị ai bóc lột",
          "Chỉ bị bóc lột bởi các công ty liên doanh"
        ],
        "correct": 1,
        "explanation": "Công nhân Việt Nam chịu ba tầng áp bức: thực dân, phong kiến và tư sản, nên tinh thần đấu tranh cách mạng vô cùng kiên cường và triệt để.",
        "trapAnalysis": "Ba tầng áp bức: Thực dân, phong kiến và tư bản."
      },
      {
        "id": 6,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Đảng Cộng sản Việt Nam ra đời là sản phẩm của sự kết hợp giữa ba yếu tố nào?",
        "options": [
          "Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước",
          "Chủ nghĩa Mác + Phong trào nông dân + Nho giáo",
          "Kinh tế thị trường + Phong trào sinh viên + Phong trào Phật giáo",
          "Triết học Đức + Phong trào giải phóng phụ nữ + Công đoàn"
        ],
        "correct": 0,
        "explanation": "Chủ tịch Hồ Chí Minh khẳng định: Chủ nghĩa Mác - Lênin kết hợp với phong trào công nhân và phong trào yêu nước đã dẫn tới việc thành lập Đảng CSVN năm 1930.",
        "trapAnalysis": "Việt Nam có thêm yếu tố thứ 3: Phong trào yêu nước."
      },
      {
        "id": 7,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao việc kết hợp thêm 'Phong trào yêu nước' là sáng tạo lý luận lớn của Chủ tịch Hồ Chí Minh?",
        "options": [
          "Vì phong trào yêu nước ở Việt Nam có truyền thống hàng ngàn năm, là động lực to lớn thu hút toàn thể dân tộc đứng lên cứu nước",
          "Vì Việt Nam không có công nhân",
          "Vì chủ nghĩa Mác yêu cầu bắt buộc phải có",
          "Vì phong trào công nhân không muốn đấu tranh"
        ],
        "correct": 0,
        "explanation": "Ở một nước thuộc địa như Việt Nam, lòng yêu nước là ngọn cờ tập hợp sức mạnh to lớn nhất của mọi tầng lớp nhân dân.",
        "trapAnalysis": "Truyền thống yêu nước ngàn năm là động lực cách mạng vĩ đại."
      },
      {
        "id": 8,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Nhận biết",
        "question": "Đảng Cộng sản Việt Nam được chính thức thành lập vào ngày tháng năm nào?",
        "options": [
          "03/02/1930",
          "19/08/1945",
          "02/09/1945",
          "30/04/1975"
        ],
        "correct": 0,
        "explanation": "Đảng Cộng sản Việt Nam ra đời ngày 3/2/1930 tại Hội nghị hợp nhất các tổ chức cộng sản do Nguyễn Ái Quốc chủ trì.",
        "trapAnalysis": "Ngày thành lập Đảng: 03/02/1930."
      },
      {
        "id": 9,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ngay từ khi mới ra đời, giai cấp công nhân Việt Nam đã nắm lấy ngọn cờ lãnh đạo cách mạng là nhờ:",
        "options": [
          "Có số lượng đông đảo chiếm 90% dân số",
          "Sớm tiếp thu chủ nghĩa Mác - Lênin và có đội tiên phong là Đảng Cộng sản Việt Nam dẫn đường",
          "Được chính quyền thực dân Pháp ủng hộ",
          "Có nhiều ruộng đất phong kiến"
        ],
        "correct": 1,
        "explanation": "Dù số lượng ban đầu còn nhỏ bé, nhưng GCCN Việt Nam nhanh chóng nắm quyền lãnh đạo cách mạng nhờ sớm tiếp thu ánh sáng chủ nghĩa Mác - Lênin qua lãnh tụ Nguyễn Ái Quốc.",
        "trapAnalysis": "Sớm tiếp thu CN Mác-Lênin và có Đảng CSVN lãnh đạo."
      },
      {
        "id": 10,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Trong thời kỳ Đổi mới hiện nay, giai cấp công nhân Việt Nam đóng vai trò gì?",
        "options": [
          "Là giai cấp đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa đất nước và hội nhập quốc tế",
          "Thu hẹp dần và không còn cần thiết",
          "Chuyển giao toàn bộ quyền lãnh đạo cho tư nhân",
          "Chỉ làm việc trong khu vực kinh tế nhà nước khép kín"
        ],
        "correct": 0,
        "explanation": "Đảng ta khẳng định: Giai cấp công nhân Việt Nam là giai cấp lãnh đạo cách mạng thông qua đội tiên phong là Đảng CSVN; đi đầu trong sự nghiệp CNH, HĐH đất nước.",
        "trapAnalysis": "Đi đầu trong sự nghiệp công nghiệp hóa, hiện đại hóa."
      },
      {
        "id": 11,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điểm TƯƠNG ĐỒNG cơ bản nhất giữa giai cấp công nhân thế kỷ XXI với giai cấp công nhân thế kỷ XIX là:",
        "options": [
          "Vẫn là lực lượng sản xuất hàng đầu và vẫn bị bóc lột giá trị thặng dư trong các xí nghiệp TBCN",
          "Đều sử dụng động cơ hơi nước thô sơ",
          "Đều không biết sử dụng điện thoại thông minh",
          "Đều chiếm đa số tuyệt đối dân số nông thôn"
        ],
        "correct": 0,
        "explanation": "Slide: Điểm tương đồng với thế kỷ XIX: vẫn là lực lượng sản xuất hàng đầu, vẫn chịu sự bóc lột giá trị thặng dư, vẫn tồn tại xung đột lợi ích cơ bản với giai cấp tư sản.",
        "trapAnalysis": "Vẫn là LLSX hàng đầu và vẫn bị bóc lột giá trị thặng dư."
      },
      {
        "id": 12,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Xung đột lợi ích cơ bản giữa giai cấp công nhân và giai cấp tư sản trong CNTB ngày nay:",
        "options": [
          "Đã biến thành tình bạn thân thiết không còn tranh chấp",
          "Vẫn tồn tại khách quan do bản chất chiếm đoạt giá trị thặng dư của nhà tư bản",
          "Đã được xóa bỏ hoàn toàn bằng công nghệ tự động hóa",
          "Chỉ là hiểu lầm về mặt văn hóa"
        ],
        "correct": 1,
        "explanation": "Dù xã hội hiện đại có nhiều thay đổi về phúc lợi, bản chất xung đột giữa người làm thuê và người chiếm hữu TLSX bóc lột vẫn tồn tại.",
        "trapAnalysis": "Vẫn tồn tại xung đột lợi ích cơ bản khách quan."
      },
      {
        "id": 13,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Biến đổi nào sau đây thể hiện sự nâng cao về mặt CHẤT LƯỢNG lao động của công nhân hiện đại?",
        "options": [
          "Xu hướng trí tuệ hóa công nhân (công nhân tri thức)",
          "Xu hướng giảm thời gian học tập",
          "Xu hướng chỉ lao động tay chân",
          "Xu hướng từ bỏ sử dụng máy vi tính"
        ],
        "correct": 0,
        "explanation": "Slide: Những biến đổi: xu hướng trí tuệ hóa công nhân (công nhân tri thức); tỷ lệ lao động chất xám và kỹ năng công nghệ cao ngày càng chiếm ưu thế.",
        "trapAnalysis": "Xu hướng trí tuệ hóa công nhân (công nhân tri thức)."
      },
      {
        "id": 14,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Hiện tượng 'trung lưu hóa công nhân' (công nhân mua cổ phiếu nhỏ, có xe hơi, có nhà trả góp) biểu hiện biến đổi gì?",
        "options": [
          "Công nhân tham gia vào sở hữu mang tính hình thức ở mức độ vi mô",
          "Công nhân đã trở thành chủ tịch tập đoàn tư bản",
          "Chủ nghĩa tư bản đã biến thành chủ nghĩa cộng sản",
          "Giai cấp tư sản đã tự nguyện phá sản"
        ],
        "correct": 0,
        "explanation": "Slide: Biến đổi tham gia vào sở hữu (trung lưu hóa) - một bộ phận công nhân có sở hữu cổ phiếu nhỏ nhưng không nắm quyền chi phối quá trình sản xuất.",
        "trapAnalysis": "Tham gia vào sở hữu (trung lưu hóa) mang tính hình thức vi mô."
      },
      {
        "id": 15,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Hiện tượng công nhân có cổ phiếu có làm thay đổi bản chất bóc lột giá trị thặng dư của chủ nghĩa tư bản không?",
        "options": [
          "Làm thay đổi hoàn toàn, không còn bóc lột nữa",
          "Không làm thay đổi bản chất bóc lột; giá trị thặng dư phần lớn vẫn rơi vào tay các nhà tư bản nắm cổ phần chi phối",
          "Biến nhà tư bản thành người làm thuê cho công nhân",
          "Làm cho máy móc tự động sinh ra tiền mà không cần lao động"
        ],
        "correct": 1,
        "explanation": "Số cổ phiếu nhỏ lẻ của người lao động không mang lại quyền quyết định; lợi nhuận siêu ngạch và giá trị thặng dư vẫn tập trung vào các tập đoàn tư bản lớn.",
        "trapAnalysis": "Không làm thay đổi bản chất bóc lột giá trị thặng dư."
      },
      {
        "id": 16,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Khái niệm 'Công nhân áo trắng' trong xã hội hiện đại dùng để chỉ lực lượng nào?",
        "options": [
          "Những người thợ sơn quét vôi",
          "Những người lao động kỹ thuật, công nghệ thông tin, điều khiển dây chuyền tự động hóa với trình độ học vấn cao",
          "Những người làm nông nghiệp công nghệ cao",
          "Những nhân viên bán hàng thời trang"
        ],
        "correct": 1,
        "explanation": "'Công nhân áo xanh' chỉ lao động cơ bắp truyền thống; 'Công nhân áo trắng' chỉ công nhân tri thức, kỹ sư vận hành hệ thống công nghệ cao.",
        "trapAnalysis": "Công nhân tri thức, kỹ thuật công nghệ cao."
      },
      {
        "id": 17,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Xã hội hóa lao động trong bối cảnh cách mạng công nghiệp 4.0 có biểu hiện mới nào?",
        "options": [
          "Lao động dựa trên nền tảng kỹ thuật số, làm việc cộng tác từ xa và chuỗi cung ứng toàn cầu",
          "Mỗi quốc gia tự sản xuất mọi thứ không cần giao thương",
          "Quay lại mô hình tự cung tự cấp phong kiến",
          "Xóa bỏ toàn bộ mạng internet"
        ],
        "correct": 0,
        "explanation": "Biểu hiện mới của xã hội hóa lao động: chuỗi giá trị toàn cầu, phân công lao động xuyên lục địa và mạng lưới kết nối số hóa.",
        "trapAnalysis": "Chuỗi giá trị toàn cầu, nền tảng số hóa xuyên biên giới."
      },
      {
        "id": 18,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ở một số nước xã hội chủ nghĩa hiện nay (như Việt Nam, Trung Quốc), giai cấp công nhân đã trở thành:",
        "options": [
          "Giai cấp lãnh đạo xã hội thông qua đội tiên phong là Đảng Cộng sản",
          "Giai cấp bị tước đoạt toàn bộ quyền công dân",
          "Tầng lớp không có đại diện trong quốc hội",
          "Nhóm người làm thuê cho nước ngoài đơn thuần"
        ],
        "correct": 0,
        "explanation": "Slide: Ở một số nước xã hội chủ nghĩa, giai cấp công nhân đã trở thành giai cấp lãnh đạo thông qua đội tiên phong là Đảng Cộng sản.",
        "trapAnalysis": "Đã trở thành giai cấp lãnh đạo xã hội."
      },
      {
        "id": 19,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân hiện nay ở các nước tư bản chủ nghĩa vẫn đi đầu trong phong trào gì?",
        "options": [
          "Đấu tranh chống chủ nghĩa tư bản, chống bất công xã hội, đòi hòa bình và bảo vệ môi trường",
          "Ủng hộ các cuộc chiến tranh xâm lược",
          "Đòi đóng cửa trường học và bệnh viện",
          "Đòi hạ tiền lương của chính mình"
        ],
        "correct": 0,
        "explanation": "Slide: GCCN ở các nước tư bản vẫn là lực lượng đi đầu đấu tranh chống chủ nghĩa tư bản, đòi công bằng xã hội, dân sinh và dân chủ.",
        "trapAnalysis": "Đi đầu chống CNTB, bất công xã hội, đòi dân sinh dân chủ."
      },
      {
        "id": 20,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vì sao nói giai cấp công nhân hiện nay vẫn là lực lượng quyết định sự giàu có của xã hội hiện đại?",
        "options": [
          "Vì họ trực tiếp sáng tạo ra của cải vật chất và dịch vụ cốt lõi duy trì sự sống còn của văn minh nhân loại",
          "Vì họ nắm giữ toàn bộ kho vàng thế giới",
          "Vì họ có quyền phát hành tiền tệ",
          "Vì họ được miễn nộp thuế thu nhập"
        ],
        "correct": 0,
        "explanation": "Dù công nghệ phát triển đến đâu, không có bàn tay và khối óc của người lao động thì máy móc không thể tự vận hành tạo ra của cải xã hội.",
        "trapAnalysis": "Trực tiếp sáng tạo của cải vật chất và dịch vụ nuôi sống xã hội."
      },
      {
        "id": 21,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Nhiệm vụ trọng tâm hàng đầu của giai cấp công nhân Việt Nam trong công cuộc Đổi mới là gì?",
        "options": [
          "Đẩy mạnh công nghiệp hóa, hiện đại hóa đất nước gắn với phát triển kinh tế tri thức",
          "Chuyển toàn bộ nhà máy sang làm nông nghiệp thủ công",
          "Đóng cửa thị trường trong nước",
          "Từ bỏ áp dụng công nghệ số"
        ],
        "correct": 0,
        "explanation": "GCCN Việt Nam phải đi đầu trong công nghiệp hóa, hiện đại hóa đất nước, làm chủ khoa học công nghệ để nâng cao năng suất quốc gia.",
        "trapAnalysis": "Đi đầu trong công nghiệp hóa, hiện đại hóa đất nước."
      },
      {
        "id": 22,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Để đáp ứng yêu cầu của cuộc cách mạng công nghiệp lần thứ tư, giai cấp công nhân Việt Nam cần phải:",
        "options": [
          "Học tập nâng cao trình độ văn hóa, chuyên môn kỹ thuật, kỹ năng nghề nghiệp và tác phong công nghiệp",
          "Chỉ cần rèn luyện sức khỏe cơ bắp",
          "Từ chối học ngoại ngữ và tin học",
          "Chờ đợi sự viện trợ của nước ngoài"
        ],
        "correct": 0,
        "explanation": "Xây dựng giai cấp công nhân Việt Nam hiện đại đòi hỏi nâng cao trình độ học vấn, tay nghề chuyên môn và tác phong làm việc chuyên nghiệp.",
        "trapAnalysis": "Nâng cao trình độ văn hóa, kỹ năng nghề nghiệp, tác phong công nghiệp."
      },
      {
        "id": 23,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vai trò nòng cốt của giai cấp công nhân Việt Nam trong khối đại đoàn kết toàn dân tộc là gì?",
        "options": [
          "Là hạt nhân gắn kết liên minh công nhân - nông dân - đội ngũ trí thức dưới sự lãnh đạo của Đảng",
          "Là tầng lớp đứng ngoài khối đại đoàn kết",
          "Tự tách mình thành một nhóm biệt lập",
          "Cạnh tranh lợi ích với giai cấp nông dân"
        ],
        "correct": 0,
        "explanation": "GCCN giữ vai trò nòng cốt và lãnh đạo liên minh công - nông - trí thức, nền tảng của khối đại đoàn kết dân tộc.",
        "trapAnalysis": "Hạt nhân gắn kết khối liên minh công - nông - trí thức."
      },
      {
        "id": 24,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Giai cấp công nhân Việt Nam thực hiện vai trò lãnh đạo xã hội thông qua tổ chức nào?",
        "options": [
          "Đội tiên phong là Đảng Cộng sản Việt Nam",
          "Các hiệp hội doanh nghiệp tư nhân",
          "Các tổ chức từ thiện quốc tế",
          "Các câu lạc bộ văn hóa nghệ thuật"
        ],
        "correct": 0,
        "explanation": "GCCN Việt Nam lãnh đạo toàn xã hội thông qua đội tiên phong là Đảng Cộng sản Việt Nam.",
        "trapAnalysis": "Thông qua đội tiên phong: Đảng Cộng sản Việt Nam."
      },
      {
        "id": 25,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Bảo vệ nền tảng tư tưởng của Đảng trong giai cấp công nhân Việt Nam hiện nay có nghĩa là gì?",
        "options": [
          "Kiên định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh, kiên quyết đấu tranh phản bác các quan điểm sai trái thù địch",
          "Không cho ai đọc sách lý luận",
          "Bắt buộc mọi người học thuộc sách cổ",
          "Chỉ nghiên cứu kinh tế tư bản"
        ],
        "correct": 0,
        "explanation": "Nền tảng tư tưởng của Đảng ta là chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh; GCCN phải là lực lượng tiên phong bảo vệ nền tảng này.",
        "trapAnalysis": "Kiên định chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh."
      },
      {
        "id": 26,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Mục tiêu xây dựng giai cấp công nhân Việt Nam thời kỳ mới được Đảng ta xác định là:",
        "options": [
          "Phát triển về số lượng, nâng cao về chất lượng, giác ngộ giai cấp và bản lĩnh chính trị vững vàng",
          "Giảm bớt số lượng công nhân nhà máy",
          "Chuyển hết công nhân thành nông dân tự do",
          "Khuyến khích công nhân không cần vào tổ chức công đoàn"
        ],
        "correct": 0,
        "explanation": "Đảng ta chủ trương: Xây dựng giai cấp công nhân lớn mạnh, phát triển cả về số lượng và chất lượng, có bản lĩnh chính trị và trình độ chuyên môn cao.",
        "trapAnalysis": "Lớn mạnh về số lượng, nâng cao về chất lượng và bản lĩnh chính trị."
      },
      {
        "id": 27,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Tổ chức đại diện chăm lo đời sống, bảo vệ quyền lợi hợp pháp của công nhân Việt Nam là:",
        "options": [
          "Tổng Liên đoàn Lao động Việt Nam (Tổ chức Công đoàn)",
          "Hội sinh viên Việt Nam",
          "Phòng thương mại và công nghiệp",
          "Hiệp hội các nhà bán buôn"
        ],
        "correct": 0,
        "explanation": "Công đoàn Việt Nam là tổ chức chính trị - xã hội của GCCN và người lao động, đại diện và bảo vệ quyền lợi hợp pháp của người lao động.",
        "trapAnalysis": "Tổng Liên đoàn Lao động Việt Nam (Tổ chức Công đoàn)."
      },
      {
        "id": 28,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Vấn đề việc làm, nhà ở xã hội, nhà trẻ cho con công nhân ở các khu công nghiệp thể hiện sự quan tâm đến:",
        "options": [
          "Nội dung kinh tế - xã hội nhằm chăm lo đời sống vật chất và tinh thần của giai cấp công nhân",
          "Chính sách của các tập đoàn nước ngoài",
          "Biện pháp xử phạt hành chính",
          "Chính sách tạm thời không cần thiết"
        ],
        "correct": 0,
        "explanation": "Chăm lo đời sống vật chất, tinh thần, nhà ở, trường học cho con em công nhân là nhiệm vụ quan trọng nhằm xây dựng GCCN lớn mạnh.",
        "trapAnalysis": "Chăm lo đời sống vật chất và tinh thần của GCCN."
      },
      {
        "id": 29,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Điểm tựa chính trị - tinh thần của giai cấp công nhân Việt Nam trong sự nghiệp xây dựng CNXH là:",
        "options": [
          "Tư tưởng Hồ Chí Minh và chủ nghĩa Mác - Lênin",
          "Các trào lưu triết học phương Tây cận đại",
          "Tư tưởng tôn giáo trung cổ",
          "Chủ nghĩa dân tộc cực đoan"
        ],
        "correct": 0,
        "explanation": "Chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh là kim chỉ nam, là điểm tựa tinh thần vững chắc của GCCN và nhân dân ta.",
        "trapAnalysis": "Chủ nghĩa Mác - Lênin và tư tưởng Hồ Chí Minh."
      },
      {
        "id": 30,
        "chapter": "Chương 2: Sứ mệnh lịch sử của GCCN",
        "level": "Thông hiểu",
        "question": "Ý chí quyết tâm của giai cấp công nhân Việt Nam hiện nay được kết tinh trong khát vọng gì của dân tộc?",
        "options": [
          "Khát vọng phát triển đất nước phồn vinh, hạnh phúc, phấn đấu đến năm 2045 trở thành nước phát triển, thu nhập cao",
          "Khát vọng mở rộng lãnh thổ ra bên ngoài",
          "Khát vọng cạnh tranh vũ khí hạt nhân",
          "Khát vọng quay về lối sống làng xã cổ truyền"
        ],
        "correct": 0,
        "explanation": "Nghị quyết Đại hội XIII của Đảng nêu rõ: Khát vọng phát triển đất nước phồn vinh, hạnh phúc, đến năm 2045 trở thành nước phát triển theo định hướng XHCN.",
        "trapAnalysis": "Khát vọng phát triển đất nước phồn vinh, hạnh phúc."
      }
    ]
  },
  {
    "id": "de_06",
    "code": "MÃ ĐỀ: 106",
    "title": "Đề 06: Điều Kiện Ra Đời & Đặc Trưng Bản Chất Của Chủ Nghĩa Xã Hội",
    "description": "Ôn tập mâu thuẫn kinh tế - chính trị dẫn đến CNXH, nhà nước XHCN đầu tiên (1917), chế độ công hữu TLSX và cách mạng bạo lực.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Chủ nghĩa xã hội là giai đoạn nào trong hình thái kinh tế - xã hội cộng sản chủ nghĩa?",
        "options": [
          "Giai đoạn cao",
          "Giai đoạn đầu (giai đoạn thấp)",
          "Giai đoạn trung gian phong kiến",
          "Giai đoạn kết thúc lịch sử"
        ],
        "correct": 1,
        "explanation": "Vở ghi: 3.1.1. Chủ nghĩa xã hội, giai đoạn đầu của hình thái kinh tế xã hội cộng sản chủ nghĩa.",
        "trapAnalysis": "Chủ nghĩa xã hội là giai đoạn đầu (giai đoạn thấp)."
      },
      {
        "id": 2,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về mặt kinh tế, điều kiện khách quan dẫn đến sự ra đời tất yếu của CNXH là gì?",
        "options": [
          "Sự giàu có của các lãnh chúa phong kiến",
          "Lực lượng sản xuất mang tính xã hội hóa mâu thuẫn với quan hệ sản xuất chiếm hữu tư nhân TBCN",
          "Sự suy giảm dân số ở các nước tư bản",
          "Sự thiếu hụt lương thực toàn cầu"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Về kinh tế: lực lượng sản xuất mâu thuẫn với quan hệ sản xuất trong chủ nghĩa tư bản.",
        "trapAnalysis": "Kinh tế: LLSX mâu thuẫn với QHSX trong CNTB."
      },
      {
        "id": 3,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về mặt chính trị - xã hội, điều kiện dẫn đến sự ra đời của CNXH là mâu thuẫn giữa:",
        "options": [
          "Giai cấp công nhân và giai cấp tư sản",
          "Giai cấp nông dân và giai cấp địa chủ",
          "Tầng lớp trí thức và thợ thủ công",
          "Thương nhân thành thị và người bán rong"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Về chính trị: Mâu thuẫn GCCN và GCTS.",
        "trapAnalysis": "Chính trị: Mâu thuẫn giữa GCCN và GCTS."
      },
      {
        "id": 4,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mâu thuẫn giữa LLSX xã hội hóa với QHSX tư nhân TBCN biểu hiện về mặt xã hội thành mâu thuẫn nào?",
        "options": [
          "Mâu thuẫn giữa các dòng tu tôn giáo",
          "Mâu thuẫn giữa giai cấp vô sản và giai cấp tư sản",
          "Mâu thuẫn giữa người già và người trẻ",
          "Mâu thuẫn giữa thành thị và vùng biển"
        ],
        "correct": 1,
        "explanation": "Mâu thuẫn kinh tế tất yếu biểu hiện thành mâu thuẫn giai cấp đối kháng gay gắt giữa GCCN và GCTS.",
        "trapAnalysis": "Biểu hiện xã hội: Mâu thuẫn giữa GCCN và GCTS."
      },
      {
        "id": 5,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Quan hệ sản xuất tư nhân TBCN trở thành yếu tố gì đối với lực lượng sản xuất xã hội hóa cao?",
        "options": [
          "Trở thành 'xiềng xích' kìm hãm sự phát triển của lực lượng sản xuất",
          "Trở thành động lực thúc đẩy sản xuất phát triển vô hạn",
          "Không có tác động gì đến sản xuất",
          "Giúp LLSX phát triển bình đẳng"
        ],
        "correct": 0,
        "explanation": "Khi LLSX phát triển vượt quá giới hạn của QHSX tư nhân, QHSX TBCN trở thành xiềng xích kìm hãm LLSX, đòi hỏi phải được thay thế bằng QHSX công hữu XHCN.",
        "trapAnalysis": "Trở thành xiềng xích kìm hãm LLSX."
      },
      {
        "id": 6,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cách mạng xã hội chủ nghĩa nổ ra là kết quả tất yếu của việc giải quyết mâu thuẫn nào?",
        "options": [
          "Mâu thuẫn giữa con người và thiên nhiên",
          "Mâu thuẫn đối kháng giữa giai cấp vô sản và giai cấp tư sản",
          "Mâu thuẫn giữa các bộ tộc phong kiến",
          "Mâu thuẫn giữa các hội họa sĩ"
        ],
        "correct": 1,
        "explanation": "Cách mạng XHCN là đỉnh cao của cuộc đấu tranh giai cấp giữa GCCN và GCTS để thiết lập chính quyền vô sản.",
        "trapAnalysis": "Giải quyết mâu thuẫn giữa GCCN và GCTS."
      },
      {
        "id": 7,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cách mạng vô sản nhằm mục đích căn bản là gì?",
        "options": [
          "Chỉ thay đổi người đứng đầu chính phủ tư sản",
          "Lật đổ chính quyền của giai cấp bóc lột, thiết lập chính quyền của giai cấp công nhân và nhân dân lao động",
          "Tịch thu tiền của người nghèo",
          "Bắt buộc nông dân phải đi làm thợ may"
        ],
        "correct": 1,
        "explanation": "Mục tiêu cốt lõi của cách mạng vô sản là đập tan bộ máy nhà nước tư sản, giành chính quyền về tay nhân dân.",
        "trapAnalysis": "Lật đổ giai cấp bóc lột, thiết lập chính quyền của nhân dân."
      },
      {
        "id": 8,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Cách mạng vô sản được thực hiện bằng con đường nào theo nguyên tắc của chủ nghĩa Mác - Lênin?",
        "options": [
          "Con đường bạo lực cách mạng",
          "Con đường cải lương ôn hòa cầu xin",
          "Chờ đợi sự tự giác từ bỏ quyền lực của giai cấp tư sản",
          "Con đường buôn bán thương mại"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Cách mạng vô sản là cuộc cách mạng được thực hiện bằng con đường bạo lực cách mạng.",
        "trapAnalysis": "Con đường bạo lực cách mạng."
      },
      {
        "id": 9,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao cách mạng vô sản phải sử dụng bạo lực cách mạng?",
        "options": [
          "Vì giai cấp công nhân yêu thích bạo lực",
          "Vì giai cấp tư sản không bao giờ tự nguyện từ bỏ quyền lực và tư liệu sản xuất, luôn dùng bạo lực trấn áp nhân dân",
          "Vì hiến pháp tư sản bắt buộc như vậy",
          "Vì không có cách nào khác để in báo chí"
        ],
        "correct": 1,
        "explanation": "Bạo lực cách mạng là phương tiện tự vệ và tiến công tất yếu vì giai cấp thống trị luôn sẵn sàng dùng quân đội, cảnh sát để đàn áp nhân dân.",
        "trapAnalysis": "Giai cấp thống trị không bao giờ tự nguyện từ bỏ quyền lực."
      },
      {
        "id": 10,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Thắng lợi của cuộc cách mạng nào đã khai sinh ra nhà nước xã hội chủ nghĩa đầu tiên trên thế giới?",
        "options": [
          "Cách mạng tư sản Pháp 1789",
          "Cách mạng Tháng Mười Nga năm 1917",
          "Cách mạng Tân Hợi 1911",
          "Cách mạng Tháng Tám 1945 ở Việt Nam"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Nhà nước chủ nghĩa xã hội đầu tiên xuất hiện trong thực tiễn: Liên Xô cũ sau Cách mạng Tháng Mười Nga năm 1917.",
        "trapAnalysis": "Cách mạng Tháng Mười Nga năm 1917 khai sinh nhà nước XHCN đầu tiên."
      },
      {
        "id": 11,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng bản chất về kinh tế của Chủ nghĩa xã hội là gì?",
        "options": [
          "Kinh tế nghèo nàn, cào bằng của cải",
          "Có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu",
          "Chế độ tư hữu về toàn bộ của cải xã hội",
          "Kinh tế phân tán, tự cung tự cấp phong kiến"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Đặc trưng bản chất của CNXH: có nền kinh tế phát triển cao, dựa trên lực lượng sản xuất hiện đại và chế độ công hữu về tư liệu sản xuất chủ yếu.",
        "trapAnalysis": "Kinh tế phát triển cao, LLSX hiện đại, công hữu TLSX chủ yếu."
      },
      {
        "id": 12,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Chế độ sở hữu nào giữ vai trò chủ đạo về mặt kinh tế trong Chủ nghĩa xã hội?",
        "options": [
          "Chế độ tư hữu tư bản chủ nghĩa",
          "Chế độ công hữu (sở hữu xã hội) về tư liệu sản xuất chủ yếu",
          "Chế độ chiếm hữu nô lệ",
          "Chế độ phong kiến địa tô"
        ],
        "correct": 1,
        "explanation": "CNXH dựa trên chế độ công hữu về TLSX chủ yếu, xóa bỏ tận gốc nguồn gốc của áp bức bóc lột.",
        "trapAnalysis": "Chế độ công hữu về tư liệu sản xuất chủ yếu."
      },
      {
        "id": 13,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cần phân biệt 'tư liệu sản xuất chủ yếu' được công hữu hóa với loại tài sản nào của cá nhân?",
        "options": [
          "Tư liệu sinh hoạt, vật phẩm tiêu dùng cá nhân hợp pháp của công dân",
          "Mọi thứ trên trái đất",
          "Hầm mỏ và đất đai",
          "Nhà máy điện và đường sắt"
        ],
        "correct": 0,
        "explanation": "Chủ nghĩa xã hội công hữu hóa tư liệu sản xuất chủ yếu (nhà máy, hầm mỏ, đất đai), hoàn toàn bảo vệ quyền sở hữu tư liệu sinh hoạt cá nhân hợp pháp.",
        "trapAnalysis": "Phân biệt TLSX chủ yếu với tư liệu sinh hoạt cá nhân."
      },
      {
        "id": 14,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nguyên tắc phân phối chủ đạo trong giai đoạn Chủ nghĩa xã hội là gì?",
        "options": [
          "Phân phối bình quân cào bằng",
          "Phân phối theo lao động ('Làm theo năng lực, hưởng theo lao động')",
          "Phân phối theo nhu cầu sinh hoạt",
          "Phân phối theo gia thế dòng dõi"
        ],
        "correct": 1,
        "explanation": "Trong CNXH, nguyên tắc phân phối chủ đạo là: 'Làm theo năng lực, hưởng theo lao động'. Ai làm nhiều hưởng nhiều, làm ít hưởng ít, không làm không hưởng (trừ người già, trẻ em).",
        "trapAnalysis": "Phân phối theo lao động."
      },
      {
        "id": 15,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mục đích cao nhất của nền sản xuất trong Chủ nghĩa xã hội là gì?",
        "options": [
          "Tối đa hóa lợi nhuận cho giới chủ",
          "Thỏa mãn ngày càng tốt hơn nhu cầu vật chất và tinh thần của toàn thể nhân dân lao động",
          "Tích lũy vàng bạc cho kho bạc nhà nước",
          "Sản xuất vũ khí để xâm chiếm thị trường"
        ],
        "correct": 1,
        "explanation": "Mục đích của sản xuất XHCN không vì lợi nhuận tư bản mà nhằm phục vụ con người, thỏa mãn nhu cầu chính đáng của nhân dân.",
        "trapAnalysis": "Thỏa mãn nhu cầu vật chất và tinh thần của nhân dân."
      },
      {
        "id": 16,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về phương diện chính trị, Chủ nghĩa xã hội là chế độ xã hội mang bản chất của ai?",
        "options": [
          "Giai cấp tư sản",
          "Do nhân dân làm chủ, mang bản chất của giai cấp công nhân",
          "Các tập đoàn quân sự độc quyền",
          "Tầng lớp phong kiến"
        ],
        "correct": 1,
        "explanation": "CNXH là chế độ do nhân dân làm chủ, nhà nước XHCN mang bản chất giai cấp công nhân dưới sự lãnh đạo của Đảng Cộng sản.",
        "trapAnalysis": "Do nhân dân làm chủ, mang bản chất giai cấp công nhân."
      },
      {
        "id": 17,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về phương diện văn hóa - tư tưởng, Chủ nghĩa xã hội lấy hệ tư tưởng nào làm nền tảng?",
        "options": [
          "Chủ nghĩa Mác - Lênin",
          "Chủ nghĩa thực dụng cá nhân",
          "Thần học tôn giáo thời trung cổ",
          "Tư tưởng bảo hoàng phong kiến"
        ],
        "correct": 0,
        "explanation": "Nền văn hóa XHCN lấy hệ tư tưởng chủ nghĩa Mác - Lênin làm kim chỉ nam, kế thừa các giá trị tinh hoa văn hóa dân tộc và nhân loại.",
        "trapAnalysis": "Chủ nghĩa Mác - Lênin là nền tảng tư tưởng."
      },
      {
        "id": 18,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về quan hệ dân tộc trong Chủ nghĩa xã hội, các dân tộc có mối quan hệ như thế nào?",
        "options": [
          "Áp bức và đồng hóa lẫn nhau",
          "Bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
          "Kỳ thị chủng tộc và chia rẽ",
          "Phân chia đẳng cấp thượng đẳng và hạ đẳng"
        ],
        "correct": 1,
        "explanation": "CNXH thực hiện quyền bình đẳng hoàn toàn giữa các dân tộc, đoàn kết, tương trợ giúp đỡ nhau cùng tiến bộ.",
        "trapAnalysis": "Bình đẳng, đoàn kết, giúp nhau cùng phát triển."
      },
      {
        "id": 19,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Con người trong xã hội xã hội chủ nghĩa được định hướng phát triển như thế nào?",
        "options": [
          "Phát triển tự do, ấm no, hạnh phúc và có điều kiện phát triển toàn diện",
          "Bị ràng buộc bởi các giáo lý tôn giáo hà khắc",
          "Chỉ làm việc không có thời gian nghỉ ngơi giải trí",
          "Phải sống khép kín không giao tiếp xã hội"
        ],
        "correct": 0,
        "explanation": "Mục tiêu của CNXH là giải phóng con người khỏi áp bức, tạo mọi điều kiện để con người phát triển toàn diện cả thể chất lẫn tinh thần.",
        "trapAnalysis": "Ấm no, tự do, hạnh phúc, phát triển toàn diện."
      },
      {
        "id": 20,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về chính sách đối ngoại, các nước xã hội chủ nghĩa chủ trương điều gì?",
        "options": [
          "Hòa bình, hữu nghị, hợp tác bình đẳng và cùng có lợi với tất cả các nước trên thế giới",
          "Gây chiến tranh xâm chiếm thuộc địa",
          "Đóng cửa biên giới cô lập với thế giới bên ngoài",
          "Liên minh quân sự để đàn áp các dân tộc nhỏ"
        ],
        "correct": 0,
        "explanation": "Chính sách đối ngoại XHCN: Độc lập, tự chủ, hòa bình, hữu nghị, hợp tác, tôn trọng chủ quyền của nhau trên cơ sở luật pháp quốc tế.",
        "trapAnalysis": "Hòa bình, hữu nghị, hợp tác bình đẳng cùng có lợi."
      },
      {
        "id": 21,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Điểm giống nhau cơ bản giữa Chủ nghĩa xã hội và giai đoạn cao Chủ nghĩa cộng sản là gì?",
        "options": [
          "Đều dựa trên chế độ công hữu về tư liệu sản xuất chủ yếu và không còn bóc lột người",
          "Đều duy trì giai cấp tư sản cầm quyền",
          "Đều phân phối của cải theo cổ phần góp vốn",
          "Đều tồn tại nền kinh tế tiểu nông cá thể"
        ],
        "correct": 0,
        "explanation": "Cả hai giai đoạn đều thuộc cùng một hình thái KT-XH cộng sản chủ nghĩa, đều dựa trên công hữu TLSX và xóa bỏ bóc lột.",
        "trapAnalysis": "Cùng dựa trên chế độ công hữu TLSX chủ yếu, không còn bóc lột."
      },
      {
        "id": 22,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Điểm khác nhau căn bản giữa CNXH (giai đoạn thấp) và CSCN (giai đoạn cao) về phân phối của cải là:",
        "options": [
          "CNXH phân phối theo lao động; CSCN phân phối theo nhu cầu",
          "CNXH phân phối theo nhu cầu; CSCN phân phối theo tiền lương",
          "Cả hai đều phân phối cào bằng bình quân",
          "CNXH không có của cải để phân phối"
        ],
        "correct": 0,
        "explanation": "Giai đoạn thấp phân phối theo lao động ('Làm theo năng lực, hưởng theo lao động'); giai đoạn cao phân phối theo nhu cầu ('Làm theo năng lực, hưởng theo nhu cầu').",
        "trapAnalysis": "CNXH: theo lao động; CSCN: theo nhu cầu."
      },
      {
        "id": 23,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao ở giai đoạn CNXH chưa thể thực hiện phân phối theo nhu cầu?",
        "options": [
          "Vì lực lượng sản xuất chưa đạt đến mức của cải tuôn ra dồi dào dở khóc dở cười và ý thức con người chưa hoàn toàn tự giác tuyệt đối",
          "Vì Đảng không đồng ý phân phối theo nhu cầu",
          "Vì người dân từ chối nhận của cải",
          "Vì nhà nước cấm sản xuất hàng tiêu dùng"
        ],
        "correct": 0,
        "explanation": "Phân phối theo nhu cầu đòi hỏi LLSX phát triển cực cao, của cải dồi dào phong phú và lao động đã trở thành nhu cầu tự giác bậc nhất của con người.",
        "trapAnalysis": "LLSX chưa đủ dồi dào của cải và ý thức con người đang trong quá trình hoàn thiện."
      },
      {
        "id": 24,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong giai đoạn cao của chủ nghĩa cộng sản, nhà nước sẽ có số phận lịch sử như thế nào?",
        "options": [
          "Tự tiêu vong khi không còn giai cấp và chức năng trấn áp giai cấp",
          "Trở nên tàn bạo hơn trước",
          "Mở rộng bộ máy hành chính gấp 10 lần",
          "Được chuyển giao cho các ngân hàng tư nhân"
        ],
        "correct": 0,
        "explanation": "Chủ nghĩa Mác - Lênin khẳng định: Khi xã hội hoàn toàn không còn giai cấp, nhà nước với tư cách công cụ bạo lực giai cấp sẽ tự tiêu vong.",
        "trapAnalysis": "Nhà nước tự tiêu vong khi xã hội không còn giai cấp."
      },
      {
        "id": 25,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong xã hội cộng sản chủ nghĩa tương lai, lao động sẽ trở thành điều gì đối với con người?",
        "options": [
          "Nhu cầu sống đầu tiên của con người",
          "Một gánh nặng cực nhọc bị ép buộc",
          "Hình phạt cho các công dân phạm lỗi",
          "Việc vô nghĩa không ai muốn làm"
        ],
        "correct": 0,
        "explanation": "C.Mác chỉ ra: Trong giai đoạn cao CSCN, lao động không còn là phương tiện kiếm sống đơn thuần mà trở thành nhu cầu sống tự giác đầu tiên của con người.",
        "trapAnalysis": "Lao động trở thành nhu cầu sống đầu tiên."
      },
      {
        "id": 26,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Sự khác biệt về quan hệ giai cấp giữa CNXH và giai đoạn cao CSCN là gì?",
        "options": [
          "CNXH vẫn còn giai cấp và sự khác biệt giai cấp; CSCN là xã hội hoàn toàn không còn giai cấp",
          "Cả hai đều không có giai cấp",
          "CNXH đã xóa bỏ mọi giai cấp",
          "CSCN có thêm nhiều giai cấp mới"
        ],
        "correct": 0,
        "explanation": "Trong CNXH vẫn còn kết cấu xã hội - giai cấp đa dạng (công nhân, nông dân, trí thức); lên CSCN xã hội mới thực sự trở thành xã hội không giai cấp.",
        "trapAnalysis": "CNXH: còn khác biệt giai cấp; CSCN: hoàn toàn không còn giai cấp."
      },
      {
        "id": 27,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Liên Xô cũ sau năm 1917 đã làm được những kỳ tích lịch sử nào chứng minh tính ưu việt của CNXH?",
        "options": [
          "Xóa bỏ mù chữ, công nghiệp hóa thần tốc và đánh tan chủ nghĩa phát xít cứu nhân loại",
          "Mua lại toàn bộ nước Mỹ",
          "Giải tán quân đội ngay trong chiến tranh",
          "Khôi phục lại chế độ Nga hoàng"
        ],
        "correct": 0,
        "explanation": "Liên Xô đã biến một nước nông nghiệp lạc hậu thành cường quốc công nghiệp, đánh bại phát xít Đức, mở đầu kỷ nguyên chinh phục vũ trụ (Gagarin 1961).",
        "trapAnalysis": "Xóa mù chữ, CNH thần tốc, đánh tan chủ nghĩa phát xít."
      },
      {
        "id": 28,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Sự sụp đổ của mô hình CNXH ở Liên Xô và Đông Âu những năm 1989-1991 phản ánh điều gì?",
        "options": [
          "Sự sụp đổ của một mô hình cụ thể chậm đổi mới, quan liêu, giáo điều, chứ không phải sự sụp đổ của lý tưởng CNXH khoa học",
          "Sự thắng lợi vĩnh viễn của chủ nghĩa tư bản",
          "Học thuyết Mác hoàn toàn sai lầm",
          "Nhân loại không còn cần công bằng xã hội"
        ],
        "correct": 0,
        "explanation": "Đảng ta khẳng định: Sự sụp đổ của Liên Xô là sự sụp đổ của một mô hình thực nghiệm duy ý chí, quan liêu bao cấp, chứ bản chất lý tưởng CNXHKH vẫn đúng đắn.",
        "trapAnalysis": "Sụp đổ của một mô hình giáo điều quan liêu cụ thể, không phải bản chất CNXH."
      },
      {
        "id": 29,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Bài học lớn nhất mà Việt Nam rút ra từ sự sụp đổ của mô hình Xô Viết là gì?",
        "options": [
          "Phải kiên định mục tiêu độc lập dân tộc gắn liền với CNXH nhưng phải luôn đổi mới sáng tạo, phù hợp với thực tiễn",
          "Từ bỏ chủ nghĩa Mác - Lênin",
          "Tư nhân hóa hoàn toàn đất đai",
          "Xóa bỏ vai trò lãnh đạo của Đảng Cộng sản"
        ],
        "correct": 0,
        "explanation": "Đổi mới ở Việt Nam là 'Đổi mới nhưng không đổi màu': kiên định mục tiêu độc lập dân tộc và CNXH, vận dụng sáng tạo chủ nghĩa Mác - Lênin vào hoàn cảnh cụ thể.",
        "trapAnalysis": "Kiên định mục tiêu nhưng kiên quyết đổi mới sáng tạo, tránh giáo điều."
      },
      {
        "id": 30,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mô hình phát triển kinh tế của Việt Nam trong thời kỳ quá độ được xác định là:",
        "options": [
          "Kinh tế thị trường định hướng xã hội chủ nghĩa",
          "Kinh tế kế hoạch hóa tập trung quan liêu bao cấp cũ",
          "Kinh tế tư bản thị trường tự do tuyệt đối",
          "Kinh tế phong kiến tự cấp tự túc"
        ],
        "correct": 0,
        "explanation": "Việt Nam đã xác định mô hình kinh tế tổng quát trong thời kỳ quá độ là: Nền kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "trapAnalysis": "Kinh tế thị trường định hướng xã hội chủ nghĩa."
      }
    ]
  },
  {
    "id": "de_07",
    "code": "MÃ ĐỀ: 107",
    "title": "Đề 07: Tính Tất Yếu & Đặc Điểm Cốt Lõi Của Thời Kỳ Quá Độ",
    "description": "Luận điểm 'những cơn đau đẻ kéo dài' của Lênin, 2 kiểu quá độ (trực tiếp vs gián tiếp), sự đan xen các yếu tố cũ - mới trên mọi lĩnh vực.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Thời kỳ quá độ lên chủ nghĩa xã hội là một tất yếu đối với đối tượng nào?",
        "options": [
          "Chỉ các nước nghèo châu Phi",
          "Tất cả các nước xây dựng chủ nghĩa xã hội",
          "Chỉ các nước phương Tây phát triển",
          "Không có nước nào cần thời kỳ quá độ"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Thời kỳ quá độ lên chủ nghĩa xã hội là tất yếu đối với tất cả các nước xây dựng chủ nghĩa xã hội.",
        "trapAnalysis": "Tất yếu đối với TẤT CẢ các nước đi lên CNXH."
      },
      {
        "id": 2,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao thời kỳ quá độ lên CNXH là tất yếu đối với TẤT CẢ các nước?",
        "options": [
          "Vì CNXH không thể tự nảy sinh hoàn chỉnh trong lòng CNTB, cần thời kỳ lịch sử để cải biến xã hội cũ và xây dựng cơ sở vật chất mới",
          "Vì thủ tục Liên Hợp Quốc yêu cầu",
          "Vì các nước tư bản ra lệnh",
          "Vì người dân cần thời gian nghỉ ngơi"
        ],
        "correct": 0,
        "explanation": "Chủ nghĩa xã hội dựa trên công hữu và xóa bỏ bóc lột - đối lập với CNTB, nên không thể tự động hình thành mà phải qua thời kỳ cải tạo và xây dựng gian khổ.",
        "trapAnalysis": "CNXH không thể tự nảy sinh trong lòng CNTB, cần thời kỳ cải tạo và xây dựng."
      },
      {
        "id": 3,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Theo V.I.Lênin, thời kỳ quá độ được ví là 'những cơn đau đẻ kéo dài' nhằm nhấn mạnh điều gì?",
        "options": [
          "Sự sung sướng an nhàn",
          "Tính chất cực kỳ khó khăn, phức tạp, lâu dài và đau đớn của quá trình chuyển biến cách mạng",
          "Sự nhanh chóng dễ dàng chỉ trong vài tuần",
          "Sự thất bại chắc chắn của cuộc cách mạng"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Theo Lênin, thời kỳ quá độ là 'những cơn đau đẻ kéo dài' (CỰC KÌ KHÓ KHĂN). Cái mới ra đời từ lòng cái cũ luôn trải qua những biến động gay gắt.",
        "trapAnalysis": "Nhấn mạnh tính chất cực kỳ khó khăn, phức tạp và lâu dài."
      },
      {
        "id": 4,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Có mấy kiểu quá độ lên chủ nghĩa xã hội theo học thuyết Mác - Lênin?",
        "options": [
          "Chỉ có 1 kiểu duy nhất",
          "Có 2 kiểu: Quá độ trực tiếp và Quá độ gián tiếp",
          "Có 3 kiểu",
          "Có 4 kiểu"
        ],
        "correct": 1,
        "explanation": "Slide 3.2.1: Có hai kiểu quá độ: Quá độ trực tiếp và Quá độ gián tiếp.",
        "trapAnalysis": "Có hai kiểu quá độ: Trực tiếp và Gián tiếp."
      },
      {
        "id": 5,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Quá độ TRỰC TIẾP lên CNXH là kiểu quá độ diễn ra ở những nước nào?",
        "options": [
          "Ở các nước tiền tư bản lạc hậu",
          "Ở những nước tư bản phát triển (C.Mác và Ph.Ăngghen nêu ra)",
          "Ở các nước thuộc địa nửa phong kiến",
          "Ở các quốc gia nguyên thủy"
        ],
        "correct": 1,
        "explanation": "Slide: Quá độ trực tiếp: từ chủ nghĩa tư bản lên chủ nghĩa cộng sản ở những nước tư bản phát triển (ghi chú: Mác + Ăngghen nêu ra).",
        "trapAnalysis": "Quá độ trực tiếp: từ nước TBCN phát triển (Mác - Ăngghen nêu)."
      },
      {
        "id": 6,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Quá độ GIÁN TIẾP lên CNXH là kiểu quá độ diễn ra ở những nước nào?",
        "options": [
          "Ở các nước tiền tư bản hoặc chưa qua chủ nghĩa tư bản phát triển (V.I.Lênin bổ sung)",
          "Ở những nước có nền công nghiệp hiện đại bậc nhất thế giới",
          "Ở các nước tư bản độc quyền nhà nước",
          "Ở các nước đế quốc chủ nghĩa"
        ],
        "correct": 0,
        "explanation": "Slide: Quá độ gián tiếp: từ những nước tiền tư bản hoặc chưa qua chủ nghĩa tư bản phát triển (ghi chú: Lênin bổ sung; ví dụ như Việt Nam).",
        "trapAnalysis": "Quá độ gián tiếp: từ nước tiền tư bản (Lênin bổ sung)."
      },
      {
        "id": 7,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Việt Nam thuộc kiểu quá độ nào lên chủ nghĩa xã hội?",
        "options": [
          "Quá độ trực tiếp từ tư bản phát triển",
          "Quá độ gián tiếp từ một nước thuộc địa nửa phong kiến, nông nghiệp lạc hậu bỏ qua chế độ TBCN",
          "Không thuộc kiểu quá độ nào",
          "Quá độ tư bản chủ nghĩa hoàn chỉnh"
        ],
        "correct": 1,
        "explanation": "Slide ghi rõ ví dụ: Quá độ gián tiếp: từ những nước tiền tư bản... Ví dụ như Việt Nam.",
        "trapAnalysis": "Việt Nam thuộc kiểu quá độ gián tiếp."
      },
      {
        "id": 8,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Điểm khác biệt trong sơ đồ phân kỳ giữa Mác - Ăngghen và V.I.Lênin là gì?",
        "options": [
          "Mác - Ăngghen mô tả giai đoạn thấp là thời kỳ quá độ lên CSCN; Lênin tách rõ: TK quá độ lên CNXH, CNXH và giai đoạn cao CSCN",
          "Lênin phủ nhận hoàn toàn giai đoạn CSCN",
          "Mác không công nhận CNXH",
          "Cả hai sơ đồ hoàn toàn giống hệt nhau từng chữ"
        ],
        "correct": 0,
        "explanation": "Slide: Sơ đồ trên slide: Mác - Ăngghen mô tả giai đoạn thấp là thời kỳ quá độ lên chủ nghĩa cộng sản; V.I. Lênin tách rõ thời kỳ quá độ lên chủ nghĩa xã hội, chủ nghĩa xã hội và giai đoạn cao của chủ nghĩa cộng sản.",
        "trapAnalysis": "Lênin tách rõ: TKQĐ lên CNXH -> CNXH -> CSCN cao."
      },
      {
        "id": 9,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc điểm bao trùm của thời kỳ quá độ lên chủ nghĩa xã hội là gì?",
        "options": [
          "Xã hội thuần nhất không còn mâu thuẫn",
          "Các yếu tố của xã hội cũ và xã hội mới đan xen trên mọi lĩnh vực",
          "Kinh tế chỉ có một thành phần duy nhất",
          "Chính trị không còn phân hóa giai cấp"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc điểm thời kỳ quá độ: các yếu tố của xã hội cũ và xã hội mới đan xen trên mọi lĩnh vực.",
        "trapAnalysis": "Từ khóa bao trùm: Các yếu tố cũ và mới đan xen trên mọi lĩnh vực."
      },
      {
        "id": 10,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về mặt KINH TẾ, sự đan xen giữa xã hội cũ và mới trong thời kỳ quá độ biểu hiện ở điểm nào?",
        "options": [
          "Nền kinh tế hoàn toàn chỉ có hợp tác xã",
          "Nền kinh tế có nhiều thành phần vận động theo định hướng xã hội chủ nghĩa",
          "Nền kinh tế tư nhân chiếm độc quyền 100%",
          "Kinh tế hiện vật không dùng tiền tệ"
        ],
        "correct": 1,
        "explanation": "Slide: Kinh tế có nhiều thành phần vận động theo định hướng xã hội chủ nghĩa (kinh tế nhà nước, kinh tế tập thể, kinh tế tư nhân...).",
        "trapAnalysis": "Kinh tế có nhiều thành phần theo định hướng XHCN."
      },
      {
        "id": 11,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về mặt CHÍNH TRỊ, thời kỳ quá độ có đặc điểm kết cấu xã hội như thế nào?",
        "options": [
          "Kết cấu xã hội thuần nhất chỉ có công nhân",
          "Kết cấu xã hội đa dạng, phức tạp với nhiều giai cấp, tầng lớp khác nhau có lợi ích vừa thống nhất vừa mâu thuẫn",
          "Không còn giai cấp nào tồn tại",
          "Giai cấp tư sản nắm toàn quyền"
        ],
        "correct": 1,
        "explanation": "Slide: Chính trị có kết cấu xã hội đa dạng, phức tạp (công nhân, nông dân, trí thức, tiểu thương, tư nhân...).",
        "trapAnalysis": "Chính trị có kết cấu xã hội đa dạng, phức tạp."
      },
      {
        "id": 12,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Ghi chú viết tay ở phần chính trị trong slide nhấn mạnh nhiệm vụ gì của giai cấp công nhân?",
        "options": [
          "Từ bỏ quân đội và công an",
          "Giai cấp công nhân nắm quyền lực nhà nước trấn áp GCTS, tiến hành xã hội không giai cấp, thiết lập tăng cường chuyên chính vô sản",
          "Giao lại chính quyền cho các tập đoàn tư bản",
          "Giải tán các cơ quan tư pháp"
        ],
        "correct": 1,
        "explanation": "Slide (ghi chú viết tay): giai cấp công nhân nắm quyền lực nhà nước trấn áp GCTS, tiến hành xã hội không giai cấp, thiết lập tăng cường chuyên chính vô sản.",
        "trapAnalysis": "Nắm quyền lực trấn áp GCTS, thiết lập tăng cường chuyên chính vô sản."
      },
      {
        "id": 13,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Về TƯ TƯỞNG VÀ VĂN HÓA, đặc điểm của thời kỳ quá độ là gì?",
        "options": [
          "Chỉ có duy nhất một quan điểm tư tưởng",
          "Tồn tại nhiều quan điểm, giá trị khác nhau; tư tưởng XHCN đấu tranh với tư tưởng tư sản và tàn dư cũ",
          "Mọi người đều có suy nghĩ giống hệt nhau",
          "Không có tôn giáo hay phong tục nào"
        ],
        "correct": 1,
        "explanation": "Slide: Tư tưởng và văn hóa tồn tại nhiều quan điểm, giá trị khác nhau, đan xen giữa tư tưởng tiến bộ và tàn dư lạc hậu cũ.",
        "trapAnalysis": "Tồn tại nhiều quan điểm, giá trị khác nhau."
      },
      {
        "id": 14,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Chuyên chính vô sản trong thời kỳ quá độ có hai chức năng cơ bản nào?",
        "options": [
          "Chức năng bạo lực trấn áp kẻ thù và chức năng tổ chức xây dựng xã hội mới",
          "Chức năng buôn bán và chức năng cho vay tiền",
          "Chức năng tôn giáo và chức năng thể thao",
          "Chức năng du lịch và chức năng lễ hội"
        ],
        "correct": 0,
        "explanation": "Chuyên chính vô sản vừa có chức năng bạo lực trấn áp sự phản kháng của giai cấp bóc lột, vừa có chức năng chủ yếu và cơ bản hơn là tổ chức xây dựng xã hội mới.",
        "trapAnalysis": "Hai chức năng: Trấn áp kẻ thù và Tổ chức xây dựng xã hội mới."
      },
      {
        "id": 15,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong hai chức năng của chuyên chính vô sản, chức năng nào giữ vai trò CƠ BẢN VÀ QUYẾT ĐỊNH NHẤT?",
        "options": [
          "Chức năng bạo lực trấn áp",
          "Chức năng tổ chức và xây dựng xã hội mới",
          "Chức năng đóng cửa biên giới",
          "Chức năng tịch thu tài sản"
        ],
        "correct": 1,
        "explanation": "V.I.Lênin nhấn mạnh: Bản chất sâu xa và chức năng căn bản nhất của chuyên chính vô sản không phải là bạo lực mà là tổ chức xây dựng thành công xã hội mới.",
        "trapAnalysis": "Chức năng tổ chức và xây dựng xã hội mới là cơ bản nhất."
      },
      {
        "id": 16,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Theo C.Mác, xã hội của thời kỳ quá độ có đặc điểm thoát thai như thế nào?",
        "options": [
          "Là xã hội vừa thoát thai từ xã hội tư bản chủ nghĩa, chưa phát triển trên cơ sở của chính nó, còn mang những dấu vết của xã hội cũ để lại",
          "Là xã hội hoàn toàn mới không dính dáng gì đến lịch sử",
          "Là xã hội quay trở lại nguyên thủy",
          "Là xã hội hoàn hảo ngay từ ngày đầu tiên"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Theo C. Mác, xã hội của thời kỳ quá độ là xã hội vừa thoát thai từ xã hội tư bản chủ nghĩa, xã hội chưa phát triển trên cơ sở của chính nó, còn mang những dấu vết của xã hội cũ để lại.",
        "trapAnalysis": "Vừa thoát thai từ CNTB, chưa phát triển trên cơ sở chính nó, còn dấu vết cũ."
      },
      {
        "id": 17,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Những 'dấu vết của xã hội cũ để lại' trong thời kỳ quá độ biểu hiện ở lĩnh vực nào?",
        "options": [
          "Chỉ ở lĩnh vực ăn mặc",
          "Trên mọi phương diện: kinh tế, đạo đức, tinh thần và tập quán lối sống",
          "Chỉ ở lĩnh vực khí hậu thời tiết",
          "Không có dấu vết nào"
        ],
        "correct": 1,
        "explanation": "C.Mác chỉ ra: Những dấu vết cũ tồn tại dai dẳng về mọi phương diện kinh tế, tư tưởng, tâm lý, đạo đức, thói quen.",
        "trapAnalysis": "Dấu vết cũ tồn tại trên mọi phương diện: kinh tế, đạo đức, tinh thần."
      },
      {
        "id": 18,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong nền kinh tế nhiều thành phần thời kỳ quá độ ở Việt Nam, thành phần kinh tế nào giữ VAI TRÒ CHỦ ĐẠO?",
        "options": [
          "Kinh tế tư nhân",
          "Kinh tế nhà nước",
          "Kinh tế có vốn đầu tư nước ngoài",
          "Kinh tế cá thể tiểu chủ"
        ],
        "correct": 1,
        "explanation": "Đảng ta xác định: Kinh tế nhà nước giữ vai trò chủ đạo, là công cụ vật chất quan trọng để nhà nước định hướng và điều tiết nền kinh tế vĩ mô.",
        "trapAnalysis": "Kinh tế nhà nước giữ vai trò chủ đạo."
      },
      {
        "id": 19,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Thành phần kinh tế tư nhân ở Việt Nam hiện nay được xác định có vị trí vai trò là:",
        "options": [
          "Kẻ thù của chủ nghĩa xã hội cần xóa bỏ ngay",
          "Một động lực quan trọng của nền kinh tế thị trường định hướng XHCN",
          "Thành phần kinh tế duy nhất được phép kinh doanh",
          "Thành phần không được pháp luật bảo vệ"
        ],
        "correct": 1,
        "explanation": "Nghị quyết của Đảng nêu rõ: Kinh tế tư nhân là một động lực quan trọng của nền kinh tế quốc dân.",
        "trapAnalysis": "Kinh tế tư nhân là một động lực quan trọng."
      },
      {
        "id": 20,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao trong thời kỳ quá độ ở Việt Nam lại cần phát triển kinh tế nhiều thành phần?",
        "options": [
          "Để phù hợp với trình độ phát triển không đồng đều của lực lượng sản xuất và khơi dậy mọi nguồn lực xã hội",
          "Vì Việt Nam không muốn phát triển công nghiệp",
          "Vì muốn khôi phục hoàn toàn chủ nghĩa tư bản",
          "Vì các nước tư bản ép buộc"
        ],
        "correct": 0,
        "explanation": "Lực lượng sản xuất nước ta còn nhiều tầng nấc, do đó quan hệ sản xuất phải đa dạng hóa các hình thức sở hữu để giải phóng sức sản xuất.",
        "trapAnalysis": "Phù hợp với trình độ không đồng đều của LLSX, giải phóng sức sản xuất."
      },
      {
        "id": 21,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong thời kỳ quá độ lên CNXH, cuộc đấu tranh giai cấp diễn ra trong điều kiện mới nào?",
        "options": [
          "Giai cấp công nhân đã nắm chính quyền nhà nước và trở thành giai cấp cầm quyền",
          "Giai cấp công nhân vẫn là nô lệ làm thuê",
          "Giai cấp tư sản vẫn nắm toàn bộ quân đội",
          "Không còn bất kỳ cuộc đấu tranh nào"
        ],
        "correct": 0,
        "explanation": "Điều kiện mới căn bản: GCCN từ địa vị bị trị đã trở thành giai cấp thống trị, nắm giữ bộ máy nhà nước để cải tạo xã hội.",
        "trapAnalysis": "GCCN đã nắm chính quyền nhà nước."
      },
      {
        "id": 22,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nội dung cốt lõi của cuộc đấu tranh giai cấp trong thời kỳ quá độ ở Việt Nam hiện nay là gì?",
        "options": [
          "Đấu tranh vũ trang đổ máu mỗi ngày",
          "Thực hiện thắng lợi sự nghiệp CNH, HĐH đất nước theo định hướng XHCN, chống lại nghèo nàn lạc hậu và nguy cơ chệch hướng",
          "Tịch thu hết tài sản của nông dân",
          "Cấm buôn bán tự do ngoài chợ"
        ],
        "correct": 1,
        "explanation": "Đấu tranh giai cấp ở nước ta hiện nay diễn ra trong hòa bình: xây dựng kinh tế vững mạnh, giữ vững định hướng XHCN, phòng chống 'diễn biến hòa bình' và tham nhũng lãng phí.",
        "trapAnalysis": "Thực hiện CNH-HĐH theo định hướng XHCN, chống nghèo nàn lạc hậu."
      },
      {
        "id": 23,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Thế lực thù địch thường sử dụng chiến lược nào để chống phá công cuộc xây dựng CNXH ở nước ta?",
        "options": [
          "Chiến lược 'Diễn biến hòa bình', kích động bạo loạn lật đổ",
          "Chiến lược giúp đỡ vốn không hoàn lại",
          "Chiến lược xuất khẩu máy móc miễn phí",
          "Chiến lược khuyến khích người dân học tập"
        ],
        "correct": 0,
        "explanation": "Các thế lực thù địch dùng chiến lược 'diễn biến hòa bình' xuyên tạc lý luận, kích động chia rẽ dân tộc, tôn giáo hòng làm chệch hướng XHCN.",
        "trapAnalysis": "Chiến lược 'Diễn biến hòa bình'."
      },
      {
        "id": 24,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nhiệm vụ bảo vệ Tổ quốc trong thời kỳ quá độ bao gồm những nội dung nào?",
        "options": [
          "Bảo vệ vững chắc độc lập, chủ quyền, thống nhất, toàn vẹn lãnh thổ và bảo vệ chế độ XHCN, bảo vệ Đảng, Nhà nước và Nhân dân",
          "Chỉ bảo vệ đất liền không bảo vệ biển đảo",
          "Chỉ bảo vệ biên giới phía tây",
          "Không cần quân đội chỉ cần cảnh sát"
        ],
        "correct": 0,
        "explanation": "Bảo vệ Tổ quốc Việt Nam XHCN là bảo vệ toàn diện: độc lập chủ quyền lãnh thổ biển đảo, bảo vệ Đảng, Nhà nước, Nhân dân và chế độ XHCN.",
        "trapAnalysis": "Bảo vệ độc lập chủ quyền và bảo vệ chế độ XHCN, Đảng, Nhà nước, Nhân dân."
      },
      {
        "id": 25,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Để giữ vững định hướng XHCN trong kinh tế thị trường, Nhà nước ta sử dụng công cụ gì?",
        "options": [
          "Hệ thống pháp luật, chiến lược quy hoạch phát triển và lực lượng kinh tế nhà nước chủ đạo",
          "Mệnh lệnh hành chính cấm đoán mù quáng",
          "Thả nổi hoàn toàn cho thị trường tự do",
          "Phụ thuộc vào ý kiến của các quỹ tài chính phương Tây"
        ],
        "correct": 0,
        "explanation": "Nhà nước pháp quyền XHCN quản lý nền kinh tế thị trường định hướng XHCN bằng pháp luật, cơ chế chính sách và nguồn lực của kinh tế nhà nước.",
        "trapAnalysis": "Pháp luật, quy hoạch chiến lược và kinh tế nhà nước chủ đạo."
      },
      {
        "id": 26,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mục tiêu kinh tế của thời kỳ quá độ là xây dựng cơ sở vật chất - kỹ thuật của CNXH, đó là:",
        "options": [
          "Nền sản xuất nông nghiệp dùng trâu cày",
          "Nền đại công nghiệp hiện đại có năng suất lao động cao hơn chủ nghĩa tư bản",
          "Nền kinh tế thủ công mỹ nghệ",
          "Nền kinh tế đóng cửa tự cung tự cấp"
        ],
        "correct": 1,
        "explanation": "Cơ sở vật chất - kỹ thuật của CNXH là nền đại công nghiệp hiện đại với trình độ công nghệ tiên tiến, năng suất lao động cao.",
        "trapAnalysis": "Nền đại công nghiệp hiện đại có năng suất lao động cao."
      },
      {
        "id": 27,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nguyên tắc 'phát triển kinh tế đi đôi với tiến bộ và công bằng xã hội' ở Việt Nam thể hiện điều gì?",
        "options": [
          "Không chờ đến khi kinh tế phát triển cao mới thực hiện công bằng, mà thực hiện công bằng xã hội ngay trong từng bước đi và từng chính sách phát triển",
          "Chỉ làm kinh tế trước, 100 năm sau mới làm công bằng",
          "Chia đều của cải dù không làm việc",
          "Ưu tiên làm giàu cho quan chức"
        ],
        "correct": 0,
        "explanation": "Quan điểm nhất quán của Đảng ta: Tiến bộ và công bằng xã hội không chờ đợi kinh tế giàu có mới làm, mà phải thực hiện ngay trong từng bước và từng chính sách phát triển.",
        "trapAnalysis": "Thực hiện tiến bộ và công bằng xã hội ngay trong từng bước và từng chính sách."
      },
      {
        "id": 28,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao thời kỳ quá độ lên CNXH ở Việt Nam diễn ra lâu dài và nhiều thử thách?",
        "options": [
          "Vì xuất phát từ nền kinh tế tiểu nông lạc hậu, chiến tranh tàn phá nặng nề và bối cảnh quốc tế phức tạp",
          "Vì nhân dân không ủng hộ",
          "Vì Việt Nam không có tài nguyên khoáng sản",
          "Vì Đảng không có đường lối"
        ],
        "correct": 0,
        "explanation": "Việt Nam đi lên từ điểm xuất phát thấp (nông nghiệp lạc hậu, hậu quả chiến tranh nặng nề, cơ chế thị trường quốc tế cạnh tranh khốc liệt) nên TKQĐ phải lâu dài.",
        "trapAnalysis": "Xuất phát điểm thấp, hậu quả chiến tranh và bối cảnh quốc tế phức tạp."
      },
      {
        "id": 29,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong thời kỳ quá độ, việc củng cố hệ thống chính trị nhằm mục đích gì?",
        "options": [
          "Xây dựng Đảng trong sạch vững mạnh, Nhà nước pháp quyền hiệu lực hiệu quả và khối đại đoàn kết toàn dân bền vững",
          "Tăng thêm số lượng cán bộ quan liêu",
          "Phục vụ lợi ích riêng cho một nhóm gia đình",
          "Ngăn cản người dân đóng góp ý kiến"
        ],
        "correct": 0,
        "explanation": "Củng cố hệ thống chính trị là điều kiện tiên quyết để giữ vững ổn định chính trị, bảo đảm sự lãnh đạo của Đảng và quyền làm chủ của nhân dân.",
        "trapAnalysis": "Xây dựng Đảng trong sạch vững mạnh, Nhà nước hiệu lực hiệu quả."
      },
      {
        "id": 30,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Thước đo cao nhất cho sự thành công của thời kỳ quá độ lên CNXH là gì?",
        "options": [
          "Đời sống vật chất và tinh thần của nhân dân ngày càng ấm no, tự do, hạnh phúc",
          "Số lượng các cuộc diễu binh hoành tráng",
          "Số lượng biệt thự của các đại gia",
          "Sự thỏa mãn của các nhà tư bản nước ngoài"
        ],
        "correct": 0,
        "explanation": "Chủ tịch Hồ Chí Minh khẳng định: CNXH là làm sao cho nhân dân đủ ăn, đủ mặc, ngày càng sung sướng, ai nấy được đi học, ốm đau có thuốc men.",
        "trapAnalysis": "Nhân dân ngày càng ấm no, tự do, hạnh phúc."
      }
    ]
  },
  {
    "id": "de_08",
    "code": "MÃ ĐỀ: 108",
    "title": "Đề 08: Quá Độ Lên CNXH Ở Việt Nam & Tám Đặc Trưng Bản Chất",
    "description": "Bản chất bỏ qua chế độ TBCN ở Việt Nam, hệ thống 8 đặc trưng xã hội XHCN mà nhân dân ta đang xây dựng theo Cương lĩnh của Đảng.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Bản chất của việc 'bỏ qua chế độ tư bản chủ nghĩa' ở Việt Nam là bỏ qua điều gì?",
        "options": [
          "Bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa",
          "Bỏ qua toàn bộ thành tựu khoa học kỹ thuật nhân loại",
          "Bỏ qua việc phát triển công nghiệp hiện đại",
          "Bỏ qua mở cửa hội nhập kinh tế quốc tế"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Quá độ lên CNXH bỏ qua chế độ TBCN là bỏ qua việc xác lập vị trí thống trị của quan hệ sản xuất và kiến trúc thượng tầng tư bản chủ nghĩa.",
        "trapAnalysis": "Bỏ qua vị trí thống trị của QHSX và KTTT TBCN."
      },
      {
        "id": 2,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong quá trình bỏ qua chế độ TBCN, chúng ta cần phải KẾ THỪA điều gì từ chủ nghĩa tư bản?",
        "options": [
          "Kế thừa tệ nạn thất nghiệp và khủng hoảng kinh tế",
          "Kế thừa các thành tựu mà nhân loại đã đạt được dưới CNTB, đặc biệt là khoa học, công nghệ và phát triển lực lượng sản xuất",
          "Kế thừa sự phân hóa giàu nghèo sâu sắc",
          "Kế thừa chính sách chiến tranh xâm lược"
        ],
        "correct": 1,
        "explanation": "Đảng ta chỉ rõ: Bỏ qua CNTB nhưng phải tiếp thu, kế thừa những thành tựu mà nhân loại đã tạo ra dưới chế độ TBCN, nhất là KH-CN và LLSX tiên tiến.",
        "trapAnalysis": "Kế thừa thành tựu khoa học công nghệ và LLSX tiên tiến."
      },
      {
        "id": 3,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Theo C.Mác, đặc điểm thoát thai của xã hội thời kỳ quá độ được diễn đạt như thế nào?",
        "options": [
          "Vừa thoát thai từ xã hội tư bản chủ nghĩa, chưa phát triển trên cơ sở của chính nó, còn mang những dấu vết của xã hội cũ để lại",
          "Đã hoàn toàn xóa sạch dấu vết quá khứ",
          "Không chịu bất kỳ ảnh hưởng nào của CNTB",
          "Là một xã hội sao chép lại chế độ phong kiến"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Theo C. Mác, xã hội của thời kỳ quá độ là xã hội vừa thoát thai từ xã hội tư bản chủ nghĩa, xã hội chưa phát triển trên cơ sở của chính nó, còn mang những dấu vết của xã hội cũ để lại.",
        "trapAnalysis": "Vừa thoát thai từ XH TBCN, chưa phát triển trên cơ sở chính nó."
      },
      {
        "id": 4,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao không thể xóa bỏ ngay lập tức kinh tế tư nhân trong thời kỳ quá độ ở Việt Nam?",
        "options": [
          "Vì kinh tế tư nhân còn đóng góp phát triển sức sản xuất, tạo việc làm và của cải cho xã hội",
          "Vì nhà nước không có luật quản lý",
          "Vì các nước tư bản cấm xóa bỏ",
          "Vì giai cấp công nhân không muốn làm chủ"
        ],
        "correct": 0,
        "explanation": "Kinh tế tư nhân trong thời kỳ quá độ có vai trò huy động vốn, công nghệ, giải quyết việc làm, là một động lực quan trọng của nền kinh tế.",
        "trapAnalysis": "Kinh tế tư nhân giúp giải phóng sức sản xuất, tạo việc làm và của cải."
      },
      {
        "id": 5,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cương lĩnh xây dựng đất nước trong thời kỳ quá độ lên CNXH (bổ sung, phát triển năm 2011) xác định mô hình CNXH ở nước ta có mấy ĐẶC TRƯNG?",
        "options": [
          "6 đặc trưng",
          "7 đặc trưng",
          "8 đặc trưng",
          "9 đặc trưng"
        ],
        "correct": 2,
        "explanation": "Slide: 3.3.2. Những đặc trưng và phương hướng xây dựng chủ nghĩa xã hội ở Việt Nam hiện nay: 'Tám đặc trưng'.",
        "trapAnalysis": "Có 8 đặc trưng bản chất của xã hội XHCN ở Việt Nam."
      },
      {
        "id": 6,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (1) thể hiện MỤC TIÊU TỔNG QUÁT của CNXH ở Việt Nam là:",
        "options": [
          "Dân giàu, nước mạnh, dân chủ, công bằng, văn minh",
          "Thu nhập bình quân cao nhất thế giới",
          "Xóa bỏ hoàn toàn sở hữu cá nhân",
          "Phát triển quân sự hàng đầu khu vực"
        ],
        "correct": 0,
        "explanation": "Slide: Đặc trưng (1): dân giàu, nước mạnh, dân chủ, công bằng, văn minh. Đây là mục tiêu tổng quát của chế độ xã hội ta.",
        "trapAnalysis": "Đặc trưng 1: Dân giàu, nước mạnh, dân chủ, công bằng, văn minh."
      },
      {
        "id": 7,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (2) thể hiện BẢN CHẤT CHÍNH TRỊ của chế độ ta là:",
        "options": [
          "Do giai cấp tư sản điều hành",
          "Do nhân dân làm chủ",
          "Do các tập đoàn kinh tế chi phối",
          "Do tầng lớp quý tộc lãnh đạo"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (2): do nhân dân làm chủ. Mọi quyền lực trong xã hội đều thuộc về nhân dân.",
        "trapAnalysis": "Đặc trưng 2: Do nhân dân làm chủ."
      },
      {
        "id": 8,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (3) về BẢN CHẤT KINH TẾ của CNXH ở Việt Nam là:",
        "options": [
          "Kinh tế bao cấp tập trung",
          "Có nền kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ phù hợp",
          "Kinh tế tư nhân chiếm vị trí độc quyền tuyệt đối",
          "Kinh tế lạc hậu dựa vào tài nguyên thô"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (3): kinh tế phát triển cao dựa trên lực lượng sản xuất hiện đại và quan hệ sản xuất tiến bộ, phù hợp.",
        "trapAnalysis": "Đặc trưng 3: LLSX hiện đại và QHSX tiến bộ phù hợp."
      },
      {
        "id": 9,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (4) về NỀN VĂN HÓA của xã hội XHCN ở Việt Nam là:",
        "options": [
          "Văn hóa phương Tây hiện đại hoàn toàn",
          "Có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc",
          "Văn hóa phong kiến truyền thống khép kín",
          "Văn hóa giải trí thương mại hóa đơn thuần"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (4): có nền văn hóa tiên tiến, đậm đà bản sắc dân tộc.",
        "trapAnalysis": "Đặc trưng 4: Văn hóa tiên tiến, đậm đà bản sắc dân tộc."
      },
      {
        "id": 10,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (5) về CON NGƯỜI trong xã hội XHCN ở Việt Nam là:",
        "options": [
          "Con người chỉ biết tuân lệnh máy móc",
          "Con người có cuộc sống ấm no, tự do, hạnh phúc, có điều kiện phát triển toàn diện",
          "Con người phải chịu sự kiểm soát nghiêm ngặt suy nghĩ",
          "Con người tự do vô chính phủ"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (5): con người có cuộc sống ấm no, tự do, hạnh phúc và điều kiện phát triển toàn diện.",
        "trapAnalysis": "Đặc trưng 5: Con người ấm no, tự do, hạnh phúc, phát triển toàn diện."
      },
      {
        "id": 11,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (6) về QUAN HỆ DÂN TỘC trong xã hội XHCN ở Việt Nam là:",
        "options": [
          "Đồng hóa các dân tộc thiểu số",
          "Các dân tộc trong cộng đồng Việt Nam bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
          "Ưu tiên đặc quyền cho một dân tộc duy nhất",
          "Chia rẽ các dân tộc theo vùng miền"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (6): các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển.",
        "trapAnalysis": "Đặc trưng 6: Bình đẳng, đoàn kết, tôn trọng, giúp nhau cùng phát triển."
      },
      {
        "id": 12,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (7) về NHÀ NƯỚC trong xã hội XHCN ở Việt Nam là:",
        "options": [
          "Nhà nước quân chủ lập hiến",
          "Có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân do Đảng Cộng sản lãnh đạo",
          "Nhà nước tam quyền phân lập tư sản",
          "Nhà nước tôn giáo thần quyền"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (7): có Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân, do Đảng Cộng sản lãnh đạo.",
        "trapAnalysis": "Đặc trưng 7: Nhà nước pháp quyền XHCN của dân, do dân, vì dân do ĐCS lãnh đạo."
      },
      {
        "id": 13,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng số (8) về QUAN HỆ QUỐC TẾ của xã hội XHCN ở Việt Nam là:",
        "options": [
          "Đối đầu quân sự với các nước láng giềng",
          "Có quan hệ hữu nghị và hợp tác với các nước trên thế giới",
          "Đóng cửa biên giới không giao thương",
          "Chỉ quan hệ với các nước cùng chung ý thức hệ"
        ],
        "correct": 1,
        "explanation": "Slide: Đặc trưng (8): có quan hệ hữu nghị, hợp tác với các nước trên thế giới.",
        "trapAnalysis": "Đặc trưng 8: Quan hệ hữu nghị, hợp tác với các nước trên thế giới."
      },
      {
        "id": 14,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh' thể hiện mối quan hệ gì giữa các mục tiêu?",
        "options": [
          "Mục tiêu mâu thuẫn lẫn nhau không thể cùng thực hiện",
          "Mối quan hệ biện chứng thống nhất, mục tiêu này là tiền đề và điều kiện cho mục tiêu kia",
          "Chỉ cần dân giàu, không cần nước mạnh",
          "Chỉ cần công bằng, không cần dân giàu"
        ],
        "correct": 1,
        "explanation": "Năm yếu tố tạo thành hệ giá trị mục tiêu tổng thể của CNXH ở Việt Nam, gắn bó khăng khít hỗ trợ lẫn nhau.",
        "trapAnalysis": "Mối quan hệ biện chứng thống nhất trong hệ mục tiêu tổng thể."
      },
      {
        "id": 15,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Bản chất 'Do nhân dân làm chủ' trong CNXH ở Việt Nam được thực hiện qua những hình thức dân chủ nào?",
        "options": [
          "Chỉ có dân chủ trực tiếp",
          "Dân chủ đại diện (gián tiếp) và dân chủ trực tiếp",
          "Chỉ có bỏ phiếu kín qua mạng",
          "Chỉ do người đứng đầu chỉ định"
        ],
        "correct": 1,
        "explanation": "Nhân dân thực hiện quyền làm chủ thông qua hai hình thức cơ bản: Dân chủ trực tiếp (tự mình quyết định) và Dân chủ gián tiếp (qua đại biểu Quốc hội, HĐND...).",
        "trapAnalysis": "Dân chủ trực tiếp và dân chủ gián tiếp (đại diện)."
      },
      {
        "id": 16,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khái niệm 'quan hệ sản xuất tiến bộ, phù hợp' trong đặc trưng kinh tế số (3) có nghĩa là gì?",
        "options": [
          "Xóa bỏ tư hữu ngay lập tức bằng mọi giá",
          "QHSX phải phù hợp với trình độ phát triển của LLSX, đa dạng hóa sở hữu nhưng kinh tế nhà nước giữ vai trò chủ đạo",
          "Duy trì mãi mãi quan hệ bao cấp",
          "Để cho tư bản tự do bóc lột"
        ],
        "correct": 1,
        "explanation": "Tiến bộ và phù hợp nghĩa là không nóng vội duy ý chí công hữu hóa khi LLSX chưa cho phép, mà phải thiết lập QHSX tương thích với trình độ LLSX.",
        "trapAnalysis": "QHSX phù hợp với trình độ phát triển của LLSX."
      },
      {
        "id": 17,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nền văn hóa 'tiên tiến' trong đặc trưng số (4) được hiểu là nền văn hóa như thế nào?",
        "options": [
          "Nền văn hóa phương Tây lai căng",
          "Nền văn hóa yêu nước, tiến bộ, có nội dung cốt lõi là lý tưởng độc lập dân tộc và CNXH dưới ánh sáng chủ nghĩa Mác - Lênin",
          "Nền văn hóa chỉ có trong các viện bảo tàng",
          "Nền văn hóa thương mại buôn bán"
        ],
        "correct": 1,
        "explanation": "Tiên tiến là yêu nước, tiến bộ; nội dung cốt lõi là độc lập dân tộc gắn liền với CNXH; nhằm mục tiêu giải phóng con người.",
        "trapAnalysis": "Tiên tiến: yêu nước, tiến bộ, định hướng XHCN."
      },
      {
        "id": 18,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "'Đậm đà bản sắc dân tộc' trong đặc trưng số (4) bao gồm những giá trị gì?",
        "options": [
          "Các hủ tục mê tín dị đoan thời phong kiến",
          "Những giá trị văn hóa truyền thống tốt đẹp: lòng yêu nước, tinh thần đoàn kết, nhân nghĩa, cần cù sáng tạo",
          "Lối sống bảo thủ cục bộ địa phương",
          "Tâm lý ỷ lại bao cấp"
        ],
        "correct": 1,
        "explanation": "Bản sắc dân tộc kết tinh lòng yêu nước nồng nàn, ý chí tự cường, tinh thần đại đoàn kết, đức tính nhân ái, thủy chung của dân tộc Việt Nam.",
        "trapAnalysis": "Giá trị truyền thống tốt đẹp: yêu nước, đoàn kết, nhân nghĩa."
      },
      {
        "id": 19,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Quyền bình đẳng giữa các dân tộc trong đặc trưng số (6) được bảo đảm trên những lĩnh vực nào?",
        "options": [
          "Chỉ bình đẳng trong các lễ hội ca múa nhạc",
          "Bình đẳng toàn diện trên tất cả các lĩnh vực chính trị, kinh tế, văn hóa, xã hội và trước pháp luật",
          "Chỉ bình đẳng về mặt hình thức trong văn bản",
          "Chỉ áp dụng ở đồng bằng"
        ],
        "correct": 1,
        "explanation": "Các dân tộc ở Việt Nam đều bình đẳng về quyền và nghĩa vụ công dân trên mọi mặt chính trị, kinh tế, giáo dục, pháp lý.",
        "trapAnalysis": "Bình đẳng toàn diện trên mọi lĩnh vực và trước pháp luật."
      },
      {
        "id": 20,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mối quan hệ giữa 8 đặc trưng của xã hội XHCN ở Việt Nam là gì?",
        "options": [
          "Mỗi đặc trưng đứng riêng rẽ không liên quan nhau",
          "Tám đặc trưng phản ánh toàn diện bản chất chế độ, tạo thành một hệ thống chỉnh thể thống nhất gắn kết hữu cơ",
          "Chỉ có đặc trưng số 1 là quan trọng",
          "Các đặc trưng loại trừ lẫn nhau"
        ],
        "correct": 1,
        "explanation": "Tám đặc trưng khái quát toàn diện diện mạo xã hội XHCN ở nước ta về mục tiêu, kinh tế, chính trị, văn hóa, con người, dân tộc, nhà nước và đối ngoại.",
        "trapAnalysis": "Tạo thành một chỉnh thể thống nhất, gắn kết hữu cơ."
      },
      {
        "id": 21,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao nói đặc trưng 'Dân giàu, nước mạnh, dân chủ, công bằng, văn minh' thể hiện tính ưu việt của CNXH?",
        "options": [
          "Vì chế độ tư bản không thể giải quyết triệt để vấn đề công bằng xã hội và phân hóa giàu nghèo sâu sắc",
          "Vì chế độ tư bản không muốn có tiền",
          "Vì chế độ phong kiến giàu có hơn",
          "Vì khẩu hiệu này chỉ là hình thức"
        ],
        "correct": 0,
        "explanation": "CNTB dù giàu có nhưng bản chất bóc lột tư nhân tạo ra bất bình đẳng sâu sắc; chỉ có CNXH mới kết hợp hài hòa giữa dân giàu, nước mạnh với công bằng, văn minh.",
        "trapAnalysis": "Kết hợp hài hòa giữa tăng trưởng kinh tế với công bằng và tiến bộ xã hội."
      },
      {
        "id": 22,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng nào trong 8 đặc trưng thể hiện sự bảo đảm bằng pháp lý cho quyền lực của nhân dân?",
        "options": [
          "Đặc trưng số (7): Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân",
          "Đặc trưng số (4): Văn hóa tiên tiến",
          "Đặc trưng số (8): Quan hệ hữu nghị",
          "Đặc trưng số (6): Các dân tộc bình đẳng"
        ],
        "correct": 0,
        "explanation": "Nhà nước pháp quyền XHCN là công cụ pháp lý và thiết chế quyền lực tối cao để thể chế hóa và bảo vệ quyền làm chủ của nhân dân.",
        "trapAnalysis": "Đặc trưng 7: Nhà nước pháp quyền XHCN bảo đảm bằng pháp lý."
      },
      {
        "id": 23,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng 'Có quan hệ hữu nghị và hợp tác với các nước trên thế giới' phản ánh phương châm đối ngoại nào của ta?",
        "options": [
          "Việt Nam sẵn sàng là bạn, là đối tác tin cậy và là thành viên có trách nhiệm của cộng đồng quốc tế",
          "Việt Nam khép kín cửa khẩu không giao lưu",
          "Việt Nam chỉ hợp tác với các nước giàu",
          "Việt Nam can thiệp vào nội bộ nước khác"
        ],
        "correct": 0,
        "explanation": "Phương châm đối ngoại nhất quán: Đa phương hóa, đa dạng hóa, Việt Nam là bạn, là đối tác tin cậy, thành viên có trách nhiệm trong cộng đồng quốc tế.",
        "trapAnalysis": "Việt Nam là bạn, đối tác tin cậy, thành viên có trách nhiệm."
      },
      {
        "id": 24,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Tiêu chuẩn 'Con người có cuộc sống ấm no, tự do, hạnh phúc' đặt con người ở vị trí nào trong chiến lược phát triển?",
        "options": [
          "Là công cụ thuần túy để tăng GDP",
          "Là trung tâm, là chủ thể, là nguồn lực quan trọng nhất và là mục tiêu cao nhất của sự phát triển",
          "Là gánh nặng cho ngân sách nhà nước",
          "Là đối tượng bị điều khiển"
        ],
        "correct": 1,
        "explanation": "Quan điểm của Đảng ta: Con người vừa là mục tiêu, vừa là động lực của sự nghiệp đổi mới và phát triển đất nước.",
        "trapAnalysis": "Con người là trung tâm, chủ thể, nguồn lực và mục tiêu cao nhất."
      },
      {
        "id": 25,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Sự khác biệt căn bản giữa Nhà nước pháp quyền XHCN Việt Nam với Nhà nước pháp quyền tư sản trong đặc trưng số (7) là gì?",
        "options": [
          "Nhà nước ta đặt dưới sự lãnh đạo của Đảng Cộng sản Việt Nam và phục vụ nhân dân lao động",
          "Nhà nước ta không có tòa án",
          "Nhà nước ta không có hiến pháp",
          "Nhà nước ta không có cảnh sát"
        ],
        "correct": 0,
        "explanation": "Nhà nước pháp quyền XHCN VN mang bản chất GCCN, do Đảng CSVN lãnh đạo, quyền lực thuộc về nhân dân; khác với nhà nước tư sản phục vụ thiểu số tư sản.",
        "trapAnalysis": "Đặt dưới sự lãnh đạo của Đảng CSVN và phục vụ đa số nhân dân."
      },
      {
        "id": 26,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Đặc trưng nào thể hiện rõ nét tính chất nhân văn sâu sắc của xã hội xã hội chủ nghĩa đối với đồng bào các dân tộc thiểu số?",
        "options": [
          "Đặc trưng số (6): Các dân tộc bình đẳng, đoàn kết, tôn trọng và giúp nhau cùng phát triển",
          "Đặc trưng số (3): Kinh tế phát triển cao",
          "Đặc trưng số (1): Dân giàu nước mạnh",
          "Đặc trưng số (8): Quan hệ quốc tế"
        ],
        "correct": 0,
        "explanation": "Đặc trưng số 6 thể hiện sự quan tâm sâu sắc của Đảng và Nhà nước đối với đồng bào các dân tộc thiểu số, chính sách ưu tiên phát triển miền núi, vùng sâu vùng xa.",
        "trapAnalysis": "Đặc trưng 6: Các dân tộc bình đẳng, đoàn kết, giúp nhau cùng phát triển."
      },
      {
        "id": 27,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Cơ sở kinh tế để thực hiện đặc trưng 'Dân giàu, nước mạnh' một cách bền vững là gì?",
        "options": [
          "Nền kinh tế phát triển cao dựa trên LLSX hiện đại và quan hệ sản xuất tiến bộ phù hợp",
          "Khai thác cạn kiệt tài nguyên thiên nhiên bán lấy tiền",
          "Đi vay nợ nước ngoài để tiêu dùng",
          "Tăng thuế thật nặng đối với người tiêu dùng"
        ],
        "correct": 0,
        "explanation": "Muốn dân giàu nước mạnh bền vững phải có nền kinh tế phát triển cao, năng suất lao động vượt trội dựa trên công nghệ hiện đại và QHSX tiến bộ.",
        "trapAnalysis": "Kinh tế phát triển cao dựa trên LLSX hiện đại và QHSX phù hợp."
      },
      {
        "id": 28,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Thế nào là 'xã hội do nhân dân làm chủ' trong thực tiễn đời sống?",
        "options": [
          "Nhân dân được biết, được bàn, được làm, được kiểm tra, được giám sát và được thụ hưởng",
          "Nhân dân chỉ được nghe thông báo sau khi mọi việc đã xong",
          "Người giàu làm chủ thay cho người nghèo",
          "Chỉ cán bộ mới có quyền giám sát"
        ],
        "correct": 0,
        "explanation": "Cơ chế dân chủ ở cơ sở: 'Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng'.",
        "trapAnalysis": "Phương châm: Dân biết, dân bàn, dân làm, dân kiểm tra, dân giám sát, dân thụ hưởng."
      },
      {
        "id": 29,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Tám đặc trưng của CNXH ở Việt Nam là mục tiêu hướng tới, để đạt được mục tiêu đó ta phải thông qua điều gì?",
        "options": [
          "Tám phương hướng xây dựng CNXH",
          "Chờ đợi sự may mắn của lịch sử",
          "Ngồi yên không cần hành động",
          "Vay mượn toàn bộ mô hình nước ngoài"
        ],
        "correct": 0,
        "explanation": "Để hiện thực hóa 8 đặc trưng của CNXH, Cương lĩnh của Đảng đã xác định 8 phương hướng cơ bản cần thực hiện.",
        "trapAnalysis": "Thông qua 8 phương hướng xây dựng CNXH."
      },
      {
        "id": 30,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Thành tựu của công cuộc Đổi mới sau gần 40 năm ở Việt Nam đã khẳng định điều gì về con đường đi lên CNXH?",
        "options": [
          "Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay; con đường đi lên CNXH là đúng đắn",
          "Việt Nam đã chọn nhầm đường",
          "Đất nước hoàn toàn bế tắc",
          "Kinh tế thụt lùi so với trước Đổi mới"
        ],
        "correct": 0,
        "explanation": "Tổng Bí thư Nguyễn Phú Trọng khẳng định: 'Đất nước ta chưa bao giờ có được cơ đồ, tiềm lực, vị thế và uy tín quốc tế như ngày nay'. Con đường đi lên CNXH là phù hợp quy luật khách quan.",
        "trapAnalysis": "Cơ đồ, tiềm lực, vị thế và uy tín quốc tế khẳng định con đường đi lên CNXH đúng đắn."
      }
    ]
  },
  {
    "id": "de_09",
    "code": "MÃ ĐỀ: 109",
    "title": "Đề 09: Tám Phương Hướng, Bốn Trụ Cột & Ba Khâu Đột Phá Ở Việt Nam",
    "description": "Nắm vững 8 phương hướng, 4 trụ cột (Trung tâm, Then chốt, Nền tảng tinh thần, Trọng yếu) và 3 khâu đột phá chiến lược (Thể chế, Nhân lực, Hạ tầng).",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Có bao nhiêu phương hướng cơ bản xây dựng CNXH ở Việt Nam được xác định trong Cương lĩnh của Đảng?",
        "options": [
          "6 phương hướng",
          "7 phương hướng",
          "8 phương hướng",
          "10 phương hướng"
        ],
        "correct": 2,
        "explanation": "Slide: 3.3.2. Những đặc trưng và phương hướng: 'Tám phương hướng'.",
        "trapAnalysis": "Có 8 phương hướng cơ bản."
      },
      {
        "id": 2,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (1) về phát triển lực lượng sản xuất ở nước ta là:",
        "options": [
          "Đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức, bảo vệ tài nguyên, môi trường",
          "Tập trung khai thác than đá thô xuất khẩu",
          "Ngừng nhập khẩu công nghệ mới",
          "Chỉ làm nông nghiệp truyền thống"
        ],
        "correct": 0,
        "explanation": "Slide: Phương hướng (1): đẩy mạnh công nghiệp hóa, hiện đại hóa gắn với kinh tế tri thức, bảo vệ tài nguyên, môi trường.",
        "trapAnalysis": "Phương hướng 1: CNH, HĐH gắn với kinh tế tri thức và bảo vệ môi trường."
      },
      {
        "id": 3,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (2) về mô hình kinh tế tổng quát ở nước ta là:",
        "options": [
          "Phát triển kinh tế kế hoạch hóa tập trung bao cấp",
          "Phát triển kinh tế thị trường định hướng xã hội chủ nghĩa",
          "Phát triển kinh tế tư bản tự do hoàn toàn",
          "Phát triển kinh tế phong kiến đóng cửa"
        ],
        "correct": 1,
        "explanation": "Slide: Phương hướng (2): phát triển kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "trapAnalysis": "Phương hướng 2: Kinh tế thị trường định hướng XHCN."
      },
      {
        "id": 4,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (3) về văn hóa và con người là:",
        "options": [
          "Thương mại hóa toàn bộ trường học và bệnh viện",
          "Xây dựng văn hóa, con người, nâng cao đời sống và thực hiện tiến bộ, công bằng xã hội",
          "Chỉ quan tâm tăng trưởng GDP, bỏ qua an sinh xã hội",
          "Nhập khẩu lối sống hưởng thụ thực dụng"
        ],
        "correct": 1,
        "explanation": "Slide: Phương hướng (3): xây dựng văn hóa, con người, nâng cao đời sống và thực hiện tiến bộ, công bằng xã hội.",
        "trapAnalysis": "Phương hướng 3: Xây dựng văn hóa, con người, tiến bộ công bằng xã hội."
      },
      {
        "id": 5,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (4) về quốc phòng và an ninh là:",
        "options": [
          "Bảo đảm quốc phòng, an ninh và trật tự, an toàn xã hội",
          "Giảm biên chế quân đội xuống mức tối thiểu",
          "Nhờ quân đội nước ngoài bảo vệ biên giới",
          "Không cần trang bị vũ khí hiện đại"
        ],
        "correct": 0,
        "explanation": "Slide: Phương hướng (4): bảo đảm quốc phòng, an ninh và trật tự, an toàn xã hội.",
        "trapAnalysis": "Phương hướng 4: Bảo đảm quốc phòng, an ninh và trật tự an toàn xã hội."
      },
      {
        "id": 6,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (5) về đối ngoại và hội nhập quốc tế là:",
        "options": [
          "Đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác, hội nhập quốc tế",
          "Phụ thuộc vào một cường quốc duy nhất",
          "Đóng cửa biên giới cấm người nước ngoài nhập cảnh",
          "Tham gia các liên minh quân sự để khiêu khích nước láng giềng"
        ],
        "correct": 0,
        "explanation": "Slide: Phương hướng (5): đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác, hội nhập quốc tế.",
        "trapAnalysis": "Phương hướng 5: Đối ngoại độc lập, tự chủ, hòa bình, hữu nghị, hợp tác."
      },
      {
        "id": 7,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (6) về dân chủ và đại đoàn kết là:",
        "options": [
          "Xây dựng nền dân chủ xã hội chủ nghĩa, đại đoàn kết toàn dân tộc",
          "Phân chia quyền lợi theo đẳng cấp dòng họ",
          "Hạn chế quyền tự do ngôn luận hợp pháp của người dân",
          "Chia rẽ các tôn giáo trong nước"
        ],
        "correct": 0,
        "explanation": "Slide: Phương hướng (6): xây dựng nền dân chủ xã hội chủ nghĩa, đại đoàn kết toàn dân tộc.",
        "trapAnalysis": "Phương hướng 6: Xây dựng nền dân chủ XHCN, đại đoàn kết toàn dân tộc."
      },
      {
        "id": 8,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (7) về xây dựng bộ máy nhà nước là:",
        "options": [
          "Xây dựng Nhà nước quân chủ lập hiến",
          "Xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân",
          "Xây dựng Nhà nước tam quyền phân lập tư sản",
          "Xây dựng Nhà nước liên bang"
        ],
        "correct": 1,
        "explanation": "Slide: Phương hướng (7): xây dựng Nhà nước pháp quyền xã hội chủ nghĩa của nhân dân, do nhân dân, vì nhân dân.",
        "trapAnalysis": "Phương hướng 7: Xây dựng Nhà nước pháp quyền XHCN của dân, do dân, vì dân."
      },
      {
        "id": 9,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Phương hướng số (8) về công tác xây dựng Đảng là:",
        "options": [
          "Xây dựng Đảng trong sạch, vững mạnh",
          "Chuyển giao quyền lãnh đạo cho các hội nghề nghiệp",
          "Không cần đào tạo bồi dưỡng lý luận cho đảng viên",
          "Để cán bộ tự do làm kinh tế tư nhân bất hợp pháp"
        ],
        "correct": 0,
        "explanation": "Slide: Phương hướng (8): xây dựng Đảng trong sạch, vững mạnh.",
        "trapAnalysis": "Phương hướng 8: Xây dựng Đảng trong sạch, vững mạnh."
      },
      {
        "id": 10,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao trong CNH, HĐH hiện nay Đảng ta nhấn mạnh phải 'gắn với kinh tế tri thức và bảo vệ môi trường'?",
        "options": [
          "Vì tài nguyên thiên nhiên là hữu hạn, biến đổi khí hậu đe dọa sự phát triển bền vững và kinh tế tri thức là xu thế thời đại",
          "Vì các nước tư bản ra lệnh cấm khai thác mỏ",
          "Vì Việt Nam không có rừng và biển",
          "Vì kinh tế tri thức không tốn chi phí"
        ],
        "correct": 0,
        "explanation": "Phát triển bền vững đòi hỏi không đánh đổi môi trường lấy tăng trưởng kinh tế đơn thuần; kinh tế tri thức là chìa khóa nâng cao năng suất và giá trị gia tăng.",
        "trapAnalysis": "Bảo đảm phát triển bền vững, không đánh đổi môi trường lấy tăng trưởng."
      },
      {
        "id": 11,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Hệ thống BỐN TRỤ CỘT phát triển của Việt Nam bao gồm những yếu tố nào?",
        "options": [
          "Kinh tế là trung tâm; Xây dựng Đảng là then chốt; Văn hóa con người là nền tảng tinh thần; Quốc phòng an ninh là trọng yếu, thường xuyên",
          "Xuất khẩu lúa gạo; Nhập khẩu xăng dầu; Mở rộng sân bay; Cắt giảm thuế",
          "Tài chính là trung tâm; Giáo dục là then chốt; Thể thao là nền tảng; Du lịch là trọng yếu",
          "Nông nghiệp là trung tâm; Đóng tàu là then chốt; Điện ảnh là nền tảng; Đua xe là trọng yếu"
        ],
        "correct": 0,
        "explanation": "Slide: Bốn trụ cột phát triển: phát triển kinh tế - xã hội là trung tâm; xây dựng Đảng là then chốt; phát triển văn hóa, con người là nền tảng tinh thần; củng cố quốc phòng, an ninh là nhiệm vụ trọng yếu, thường xuyên.",
        "trapAnalysis": "Học thuộc khẩu quyết 4 trụ cột: Kinh tế = Trung tâm; Đảng = Then chốt; Văn hóa = Nền tảng tinh thần; QPAN = Trọng yếu thường xuyên."
      },
      {
        "id": 12,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển, yếu tố nào giữ vai trò là 'NHIỆM VỤ TRUNG TÂM'?",
        "options": [
          "Phát triển văn hóa, con người",
          "Phát triển kinh tế - xã hội",
          "Xây dựng Đảng",
          "Củng cố quốc phòng, an ninh"
        ],
        "correct": 1,
        "explanation": "Phát triển kinh tế - xã hội là nhiệm vụ trung tâm nhằm tạo ra cơ sở vật chất kỹ thuật dồi dào, nâng cao đời sống nhân dân.",
        "trapAnalysis": "Kinh tế - xã hội = NHIỆM VỤ TRUNG TÂM."
      },
      {
        "id": 13,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển, yếu tố nào giữ vai trò là 'NHIỆM VỤ THEN CHỐT'?",
        "options": [
          "Xây dựng Đảng trong sạch, vững mạnh",
          "Phát triển kết cấu hạ tầng giao thông",
          "Mở rộng thị trường xuất khẩu",
          "Đào tạo vận động viên thể thao"
        ],
        "correct": 0,
        "explanation": "Xây dựng Đảng là then chốt vì Đảng là lực lượng lãnh đạo toàn bộ sự nghiệp cách mạng; Đảng có vững mạnh thì đất nước mới ổn định và phát triển.",
        "trapAnalysis": "Xây dựng Đảng = NHIỆM VỤ THEN CHỐT."
      },
      {
        "id": 14,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển, yếu tố nào đóng vai trò là 'NỀN TẢNG TINH THẦN' của xã hội?",
        "options": [
          "Củng cố quốc phòng, an ninh",
          "Phát triển văn hóa, xây dựng con người",
          "Phát triển kinh tế tư nhân",
          "Hiện đại hóa hệ thống ngân hàng"
        ],
        "correct": 1,
        "explanation": "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực nội sinh của sự phát triển bền vững.",
        "trapAnalysis": "Văn hóa, con người = NỀN TẢNG TINH THẦN."
      },
      {
        "id": 15,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Trong 4 trụ cột phát triển, 'Củng cố quốc phòng, an ninh' được xác định có vị trí vai trò là:",
        "options": [
          "Nhiệm vụ tạm thời chỉ khi có chiến tranh",
          "Nhiệm vụ trọng yếu, thường xuyên",
          "Nhiệm vụ thứ yếu sau văn hóa",
          "Nhiệm vụ chỉ giao riêng cho quân đội không cần sự tham gia của nhân dân"
        ],
        "correct": 1,
        "explanation": "Slide: Củng cố quốc phòng, an ninh là nhiệm vụ trọng yếu, thường xuyên nhằm bảo vệ vững chắc Tổ quốc trong mọi tình huống.",
        "trapAnalysis": "Củng cố QPAN = NHIỆM VỤ TRỌNG YẾU, THƯỜNG XUYÊN."
      },
      {
        "id": 16,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mối quan hệ giữa 'Phát triển kinh tế' (trung tâm) và 'Xây dựng Đảng' (then chốt) là gì?",
        "options": [
          "Tách rời nhau, kinh tế làm riêng, Đảng làm riêng",
          "Kinh tế tạo cơ sở vật chất củng cố niềm tin vào Đảng; sự lãnh đạo đúng đắn của Đảng định hướng và mở đường cho kinh tế phát triển",
          "Xây dựng Đảng làm kìm hãm phát triển kinh tế",
          "Chỉ cần làm kinh tế, không cần quan tâm xây dựng Đảng"
        ],
        "correct": 1,
        "explanation": "Kinh tế là trung tâm tạo thế và lực; Xây dựng Đảng là then chốt giữ vững tay lái và định hướng XHCN cho con tàu phát triển.",
        "trapAnalysis": "Gắn bó hữu cơ: Kinh tế tạo thế và lực, Đảng định hướng tay lái."
      },
      {
        "id": 17,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao nói 'Văn hóa con người là nền tảng tinh thần, mục tiêu và động lực của sự phát triển'?",
        "options": [
          "Vì văn hóa bồi dưỡng nhân cách, tâm hồn, khơi dậy khát vọng cống hiến và sức sáng tạo của con người - chủ thể của mọi thành công",
          "Vì văn hóa giúp kiếm được nhiều ngoại tệ ngay lập tức",
          "Vì văn hóa thay thế hoàn toàn máy móc",
          "Vì văn hóa không cần tiền đầu tư"
        ],
        "correct": 0,
        "explanation": "Con người là vốn quý nhất; văn hóa soi đường cho quốc dân đi, tạo nên sức mạnh nội sinh và động lực phát triển đất nước.",
        "trapAnalysis": "Khơi dậy khát vọng cống hiến, bồi dưỡng nhân cách và sức mạnh nội sinh."
      },
      {
        "id": 18,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Sự gắn kết giữa phát triển kinh tế - xã hội với củng cố quốc phòng - an ninh thể hiện ở phương châm:",
        "options": [
          "Vừa phát triển kinh tế vừa tăng cường tiềm lực quốc phòng an ninh, mỗi bước phát triển kinh tế là một bước củng cố QPAN",
          "Chỉ lo làm kinh tế, giải tán quân đội",
          "Chỉ lo quốc phòng, ngừng toàn bộ sản xuất kinh doanh",
          "Chi 100% ngân sách cho vũ khí"
        ],
        "correct": 0,
        "explanation": "Kết hợp chặt chẽ giữa kinh tế với quốc phòng, an ninh và giữa quốc phòng, an ninh với kinh tế trong từng chiến lược, quy hoạch phát triển.",
        "trapAnalysis": "Mỗi bước phát triển kinh tế là một bước củng cố QPAN và ngược lại."
      },
      {
        "id": 19,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Yếu tố quyết định để giữ vững bản chất của 4 trụ cột phát triển theo định hướng XHCN là:",
        "options": [
          "Sự lãnh đạo của Đảng Cộng sản Việt Nam",
          "Sự tài trợ của các quỹ đầu tư tư nhân",
          "Sự đồng thuận của các tập đoàn nước ngoài",
          "Sự may mắn của thị trường"
        ],
        "correct": 0,
        "explanation": "Sự lãnh đạo của Đảng Cộng sản Việt Nam là nhân tố quyết định hàng đầu bảo đảm đất nước phát triển đúng định hướng XHCN.",
        "trapAnalysis": "Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam."
      },
      {
        "id": 20,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nếu một trong bốn trụ cột bị buông lỏng hoặc suy yếu thì sẽ dẫn tới hậu quả gì?",
        "options": [
          "Không ảnh hưởng gì đến các trụ cột khác",
          "Làm mất cân đối tổng thể, đe dọa sự ổn định chính trị và sự phát triển bền vững của đất nước",
          "Đất nước sẽ phát triển nhanh hơn",
          "Chỉ ảnh hưởng đến một vài địa phương"
        ],
        "correct": 1,
        "explanation": "Bốn trụ cột tạo thành hệ thống cân bằng động vững chắc; suy yếu bất kỳ trụ cột nào đều gây tổn hại đến toàn bộ công cuộc xây dựng đất nước.",
        "trapAnalysis": "Mất cân đối tổng thể, đe dọa sự phát triển bền vững."
      },
      {
        "id": 21,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Nhận biết",
        "question": "Đảng ta xác định có mấy KHÂU ĐỘT PHÁ CHIẾN LƯỢC trong phát triển đất nước?",
        "options": [
          "2 khâu đột phá",
          "3 khâu đột phá chiến lược",
          "4 khâu đột phá",
          "5 khâu đột phá"
        ],
        "correct": 1,
        "explanation": "Slide: 'Ba khâu đột phá': Hoàn thiện thể chế; Phát triển nguồn nhân lực chất lượng cao; Phát triển kết cấu hạ tầng đồng bộ.",
        "trapAnalysis": "Có 3 khâu đột phá chiến lược."
      },
      {
        "id": 22,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khâu đột phá chiến lược thứ NHẤT là:",
        "options": [
          "Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa",
          "Tăng thuế thu nhập doanh nghiệp",
          "Phát hành thêm tiền mặt",
          "Mở rộng kinh doanh xổ số"
        ],
        "correct": 0,
        "explanation": "Slide: Đột phá 1: Hoàn thiện thể chế kinh tế thị trường định hướng xã hội chủ nghĩa.",
        "trapAnalysis": "Đột phá 1: Hoàn thiện thể chế KTTT định hướng XHCN."
      },
      {
        "id": 23,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Nội dung trọng tâm của khâu đột phá 'Hoàn thiện thể chế' là giải quyết vấn đề gì?",
        "options": [
          "Xóa bỏ rào cản, tạo môi trường kinh doanh thông thoáng, minh bạch, bảo vệ quyền tài sản hợp pháp và giải phóng mọi sức sản xuất",
          "Tăng thêm các thủ tục hành chính phức tạp",
          "Cấm các doanh nghiệp tư nhân hoạt động",
          "Chỉ cấp phép cho doanh nghiệp nhà nước"
        ],
        "correct": 0,
        "explanation": "Thể chế phải thông thoáng, minh bạch, giảm chi phí tuân thủ cho người dân và doanh nghiệp, tạo động lực cạnh tranh lành mạnh.",
        "trapAnalysis": "Tạo môi trường thông thoáng, giải phóng sức sản xuất, giảm thủ tục rườm rà."
      },
      {
        "id": 24,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khâu đột phá chiến lược thứ HAI là:",
        "options": [
          "Phát triển nguồn nhân lực chất lượng cao",
          "Nhập khẩu lao động nước ngoài giá rẻ",
          "Giảm số lượng học sinh tốt nghiệp phổ thông",
          "Cắt giảm ngân sách đào tạo đại học"
        ],
        "correct": 0,
        "explanation": "Slide: Đột phá 2: Phát triển nguồn nhân lực chất lượng cao.",
        "trapAnalysis": "Đột phá 2: Phát triển nguồn nhân lực chất lượng cao."
      },
      {
        "id": 25,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khâu đột phá 'Phát triển nguồn nhân lực chất lượng cao' đặc biệt ưu tiên cho đội ngũ nào?",
        "options": [
          "Đội ngũ cán bộ lãnh đạo quản lý, chuyên gia đầu ngành, nhà khoa học và lao động kỹ thuật tay nghề cao",
          "Chỉ đào tạo vận động viên thể thao",
          "Chỉ đào tạo ca sĩ diễn viên",
          "Những người làm công việc giản đơn"
        ],
        "correct": 0,
        "explanation": "Đại hội XIII nhấn mạnh: Ưu tiên phát triển nguồn nhân lực cho công tác lãnh đạo, quản lý và các lĩnh vực then chốt, khoa học công nghệ, chuyển đổi số.",
        "trapAnalysis": "Ưu tiên chuyên gia đầu ngành, nhà khoa học, lao động kỹ thuật cao."
      },
      {
        "id": 26,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khâu đột phá chiến lược thứ BA là:",
        "options": [
          "Phát triển kết cấu hạ tầng đồng bộ, hiện đại",
          "Tự tay làm đường đất thủ công",
          "Chỉ làm đường sắt không làm đường bộ",
          "Dừng xây dựng cầu cống"
        ],
        "correct": 0,
        "explanation": "Slide: Đột phá 3: Phát triển kết cấu hạ tầng đồng bộ.",
        "trapAnalysis": "Đột phá 3: Phát triển kết cấu hạ tầng đồng bộ."
      },
      {
        "id": 27,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Khâu đột phá 'Phát triển kết cấu hạ tầng' hiện nay tập trung trọng điểm vào những lĩnh vực nào?",
        "options": [
          "Hạ tầng giao thông (đường cao tốc, sân bay, cảng biển) và hạ tầng số (viễn thông, dữ liệu, internet)",
          "Hạ tầng buôn bán vỉa hè",
          "Hạ tầng xe ngựa kéo",
          "Chỉ xây dựng trụ sở cơ quan"
        ],
        "correct": 0,
        "explanation": "Tập trung ưu tiên phát triển hạ tầng giao thông kết nối liên vùng (đường cao tốc Bắc - Nam, sân bay Long Thành...) và hạ tầng số phục vụ chuyển đổi số quốc gia.",
        "trapAnalysis": "Hạ tầng giao thông kết nối liên vùng và hạ tầng số hiện đại."
      },
      {
        "id": 28,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Vì sao ba khâu: Thể chế, Nhân lực và Hạ tầng được gọi là 'CÁC KHÂU ĐỘT PHÁ'?",
        "options": [
          "Vì đây là 3 điểm nghẽn lớn nhất cản trở sự phát triển của đất nước; khơi thông được 3 khâu này sẽ tạo ra bước nhảy vọt",
          "Vì 3 khâu này dễ làm nhất",
          "Vì không tốn tiền ngân sách",
          "Vì do nước ngoài gợi ý ngẫu nhiên"
        ],
        "correct": 0,
        "explanation": "Đột phá là tháo gỡ đúng những điểm nghẽn cốt lõi kìm hãm sự phát triển. Thể chế mở đường, nhân lực dẫn dắt, hạ tầng kết nối chắp cánh cho nền kinh tế bứt phá.",
        "trapAnalysis": "Tháo gỡ 3 điểm nghẽn lớn nhất: Thể chế, Nhân lực, Hạ tầng."
      },
      {
        "id": 29,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mối quan hệ qua lại giữa ba khâu đột phá chiến lược được thể hiện như thế nào?",
        "options": [
          "Tác động qua lại hữu cơ: Thể chế tốt thu hút đầu tư hạ tầng và đào tạo nhân lực; Nhân lực giỏi thúc đẩy cải cách thể chế và vận hành hạ tầng; Hạ tầng tốt tạo không gian cho thể chế và nhân lực phát huy tác dụng",
          "Hoàn toàn độc lập, khâu nào biết khâu nấy",
          "Chỉ cần làm hạ tầng, bỏ qua thể chế",
          "Chỉ cần làm thể chế, không cần đào tạo người"
        ],
        "correct": 0,
        "explanation": "Ba khâu đột phá tạo thành thế 'kiềng ba chân' tương hỗ, bổ sung cho nhau trong quá trình thực hiện chiến lược phát triển kinh tế - xã hội.",
        "trapAnalysis": "Thế kiềng 3 chân tương hỗ: Thể chế - Nhân lực - Hạ tầng."
      },
      {
        "id": 30,
        "chapter": "Chương 3: CNXH & Thời kỳ quá độ",
        "level": "Thông hiểu",
        "question": "Mục tiêu đến năm 2030 (kỷ niệm 100 năm thành lập Đảng) và năm 2045 (kỷ niệm 100 năm thành lập nước) của Việt Nam là gì?",
        "options": [
          "Đến năm 2030 là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; đến năm 2045 trở thành nước phát triển, thu nhập cao theo định hướng XHCN",
          "Đến năm 2030 trở thành nước nghèo nhất khu vực",
          "Từ bỏ công nghiệp hóa",
          "Quay lại mô hình bao cấp cũ"
        ],
        "correct": 0,
        "explanation": "Nghị quyết Đại hội XIII xác định mục tiêu lịch sử: 2030 là nước đang phát triển có công nghiệp hiện đại, thu nhập trung bình cao; 2045 trở thành nước phát triển, thu nhập cao.",
        "trapAnalysis": "Mục tiêu lịch sử: 2030 (thu nhập trung bình cao), 2045 (nước phát triển thu nhập cao)."
      }
    ]
  },
  {
    "id": "de_10",
    "code": "MÃ ĐỀ: 110",
    "title": "Đề 10: Nền Dân Chủ XHCN & Nhà Nước Pháp Quyền XHCN Việt Nam",
    "description": "Nguồn gốc ngữ nghĩa dân chủ, 3 phương diện dân chủ, tiến trình biện chứng Lênin, 3 tên gọi Nhà nước XHCN và đặc điểm Nhà nước pháp quyền VN.",
    "duration": 15,
    "questions": [
      {
        "id": 1,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Thuật ngữ 'Dân chủ' xuất hiện lần đầu tiên trong lịch sử nhân loại vào khoảng thời gian nào?",
        "options": [
          "Thế kỷ VII - VI trước Công nguyên",
          "Thế kỷ XV sau Công nguyên",
          "Năm 1789 sau Cách mạng Pháp",
          "Năm 1917 sau Cách mạng Tháng Mười"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Thuật ngữ dân chủ ra đời vào thế kỷ VII–VI trước Công nguyên ở Hy Lạp cổ đại.",
        "trapAnalysis": "Mốc ra đời thuật ngữ dân chủ: Thế kỷ VII - VI trước Công nguyên."
      },
      {
        "id": 2,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Thuật ngữ 'Dân chủ' được ghép từ hai từ tiếng Hy Lạp cổ nào?",
        "options": [
          "Demos (nhân dân) và Kratos (quyền lực)",
          "Polis (nhà nước) và Nomos (luật)",
          "Demos (người nghèo) và Archia (thủ lĩnh)",
          "Civitas (công dân) và Libertas (tự do)"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Dân chủ = demos (nhân dân) + kratos (quyền lực). Nguồn gốc: dân chủ là quyền lực của nhân dân, thuộc về nhân dân.",
        "trapAnalysis": "Demos = Nhân dân; Kratos = Quyền lực."
      },
      {
        "id": 3,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Theo Ph.Ăngghen, hình thức dân chủ sơ khai ban đầu tồn tại ở hình thái xã hội nào?",
        "options": [
          "Chế độ chiếm hữu nô lệ La Mã",
          "Dân chủ quân sự tồn tại ở hình thái nguyên thủy",
          "Chế độ phong kiến châu Âu",
          "Chế độ tư bản cận đại"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Theo Ăngghen: 'Dân chủ quân sự tồn tại ở hình thái nguyên thủy' (khi thị tộc bầu thủ lĩnh và biểu quyết chung).",
        "trapAnalysis": "Ăngghen: Dân chủ quân sự tồn tại ở hình thái nguyên thủy."
      },
      {
        "id": 4,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Trên phương diện TỔ CHỨC VÀ QUẢN LÝ XÃ HỘI, dân chủ được xác định là gì?",
        "options": [
          "Là một nguyên tắc, nguyên tắc dân chủ",
          "Là một hình thức nhà nước có quân đội",
          "Là một khẩu hiệu tuyên truyền",
          "Là một loại hàng hóa trao đổi"
        ],
        "correct": 0,
        "explanation": "Vở ghi: Trên phương diện tổ chức và quản lý xã hội, dân chủ là 1 nguyên tắc, nguyên tắc dân chủ.",
        "trapAnalysis": "Phương diện tổ chức và quản lý: Dân chủ là một nguyên tắc."
      },
      {
        "id": 5,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Trên phương diện QUYỀN LỰC, dân chủ được hiểu là gì?",
        "options": [
          "Quyền lực tập trung vào tay một ông vua",
          "Quyền lực thuộc về nhân dân; nhân dân là chủ nhân của nhà nước",
          "Quyền lực thuộc về các tập đoàn tài phiệt",
          "Quyền lực không thuộc về ai"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Trên phương diện quyền lực, dân chủ là quyền lực thuộc về nhân dân; nhân dân là chủ nhân của nhà nước.",
        "trapAnalysis": "Phương diện quyền lực: Quyền lực thuộc về nhân dân, nhân dân là chủ nhân."
      },
      {
        "id": 6,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Trên phương diện CHẾ ĐỘ XÃ HỘI VÀ TRONG LĨNH VỰC CHÍNH TRỊ, dân chủ là gì?",
        "options": [
          "Một cảm xúc tự do cá nhân",
          "Một hình thức nhà nước (chính thể dân chủ)",
          "Một tôn giáo mới",
          "Một tập tục làng xã"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Trên phương diện chế độ xã hội và trong lĩnh vực chính trị, dân chủ là 1 hình thức nhà nước.",
        "trapAnalysis": "Phương diện chính trị và chế độ xã hội: Dân chủ là một hình thức nhà nước."
      },
      {
        "id": 7,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Quan niệm của chủ nghĩa Mác - Lênin về dân chủ trên phương diện nhà nước khẳng định:",
        "options": [
          "Dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị",
          "Dân chủ là sự tự do tuyệt đối không cần pháp luật",
          "Dân chủ không mang tính giai cấp",
          "Dân chủ chỉ tồn tại ở các nước tư bản"
        ],
        "correct": 0,
        "explanation": "Slide: Quan niệm Mác - Lênin: dân chủ là một hình thức tổ chức nhà nước của giai cấp thống trị.",
        "trapAnalysis": "Dân chủ là hình thức tổ chức nhà nước của giai cấp thống trị."
      },
      {
        "id": 8,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Luận điểm 'Dân chủ là sự thống trị của đa số' là câu nói của ai?",
        "options": [
          "C.Mác",
          "Ph.Ăngghen",
          "V.I.Lênin",
          "Hồ Chí Minh"
        ],
        "correct": 2,
        "explanation": "Slide: Quan niệm Mác - Lênin: theo Lênin, 'dân chủ là sự thống trị của đa số'.",
        "trapAnalysis": "Lênin: Dân chủ là sự thống trị của đa số."
      },
      {
        "id": 9,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Định nghĩa giản dị mà sâu sắc của Chủ tịch Hồ Chí Minh về dân chủ là:",
        "options": [
          "'Dân chủ là muốn làm gì thì làm'",
          "'Dân chủ: dân là chủ, dân làm chủ'",
          "'Dân chủ là chính phủ ban phát quyền cho dân'",
          "'Dân chủ là sự thỏa hiệp giai cấp'"
        ],
        "correct": 1,
        "explanation": "Slide: Hồ Chí Minh: 'Dân chủ: dân là chủ, dân làm chủ'.",
        "trapAnalysis": "Hồ Chí Minh: 'Dân là chủ, dân làm chủ'."
      },
      {
        "id": 10,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Dân chủ có thể được xem xét dưới những góc độ nào sau đây?",
        "options": [
          "Giá trị xã hội, phạm trù chính trị, nguyên tắc hoạt động của tổ chức CT-XH và phạm trù lịch sử",
          "Một loại tài sản cá nhân có thể cầm cố",
          "Một phương thuốc chữa bệnh",
          "Một trò chơi giải trí"
        ],
        "correct": 0,
        "explanation": "Slide: Dân chủ có thể được xem là giá trị xã hội, phạm trù chính trị, nguyên tắc hoạt động của tổ chức chính trị - xã hội và phạm trù lịch sử.",
        "trapAnalysis": "Dân chủ là: Giá trị xã hội, phạm trù chính trị, nguyên tắc hoạt động, phạm trù lịch sử."
      },
      {
        "id": 11,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Theo V.I.Lênin, tiến trình phát triển biện chứng của dân chủ trong lịch sử nhân loại diễn ra theo trật tự nào?",
        "options": [
          "Từ chuyên chế đến dân chủ tư sản, rồi đến dân chủ vô sản và cuối cùng không còn dân chủ nữa",
          "Từ dân chủ vô sản đến chuyên chế phong kiến",
          "Từ dân chủ tư sản đến dân chủ chủ nô",
          "Dân chủ tồn tại vĩnh viễn không bao giờ thay đổi"
        ],
        "correct": 0,
        "explanation": "Slide: Theo Lênin, tiến trình phát triển dân chủ đi từ chuyên chế đến dân chủ tư sản, rồi đến dân chủ vô sản và cuối cùng không còn dân chủ nữa (con đường biện chứng).",
        "trapAnalysis": "Chuyên chế -> Dân chủ tư sản -> Dân chủ vô sản -> Tiêu vong (không còn dân chủ)."
      },
      {
        "id": 12,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Vì sao V.I.Lênin nói đến giai đoạn cao CSCN thì 'không còn dân chủ nữa'?",
        "options": [
          "Vì chế độ độc tài sẽ quay trở lại",
          "Vì khi xã hội không còn giai cấp, nhà nước tự tiêu vong thì dân chủ với tư cách một 'hình thức nhà nước' cũng tự tiêu vong",
          "Vì người dân không muốn đi bầu cử",
          "Vì chính phủ ra lệnh cấm dân chủ"
        ],
        "correct": 1,
        "explanation": "Dân chủ với tư cách hình thức nhà nước (phạm trù lịch sử) sẽ tiêu vong cùng với sự tiêu vong của nhà nước; quyền tự do của con người chuyển hóa thành tập quán tự giác.",
        "trapAnalysis": "Dân chủ với tư cách hình thức nhà nước tiêu vong cùng nhà nước."
      },
      {
        "id": 13,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Sự ra đời của nền dân chủ xã hội chủ nghĩa gồm mấy giai đoạn lịch sử?",
        "options": [
          "1 giai đoạn",
          "2 giai đoạn (GĐ 1: giành lấy dân chủ; GĐ 2: lấy dân chủ tổ chức nhà nước)",
          "3 giai đoạn",
          "4 giai đoạn"
        ],
        "correct": 1,
        "explanation": "Slide: Sự ra đời gồm hai giai đoạn: GĐ 1: giai cấp công nhân làm cách mạng giành lấy dân chủ; GĐ 2: GCCN lấy dân chủ để tổ chức nhà nước của giai cấp công nhân và nhân dân lao động.",
        "trapAnalysis": "Hai giai đoạn: Giành lấy dân chủ -> Lấy dân chủ tổ chức nhà nước."
      },
      {
        "id": 14,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Nền dân chủ xã hội chủ nghĩa chính thức ra đời sau sự kiện lịch sử nào?",
        "options": [
          "Cách mạng tư sản Anh 1640",
          "Cách mạng tư sản Pháp 1789",
          "Thắng lợi của Cách mạng Tháng Mười Nga năm 1917",
          "Chiến thắng Điện Biên Phủ 1954"
        ],
        "correct": 2,
        "explanation": "Slide: Dân chủ xã hội chủ nghĩa ra đời sau thắng lợi của Cách mạng Tháng Mười Nga năm 1917.",
        "trapAnalysis": "Ra đời sau Cách mạng Tháng Mười Nga năm 1917."
      },
      {
        "id": 15,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Bản chất CHÍNH TRỊ của nền dân chủ xã hội chủ nghĩa là gì?",
        "options": [
          "Mang bản chất giai cấp tư sản phục vụ người giàu",
          "Mang bản chất giai cấp công nhân, do Đảng Cộng sản lãnh đạo và thừa nhận nhân dân là chủ thể quyền lực nhà nước",
          "Thuộc về một dòng họ quý tộc duy nhất",
          "Không mang bản chất của giai cấp nào"
        ],
        "correct": 1,
        "explanation": "Slide: Bản chất chính trị: mang bản chất giai cấp công nhân, do Đảng Cộng sản lãnh đạo và thừa nhận nhân dân là chủ thể quyền lực nhà nước.",
        "trapAnalysis": "Bản chất chính trị: Mang bản chất GCCN, ĐCS lãnh đạo, nhân dân là chủ thể quyền lực."
      },
      {
        "id": 16,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Bản chất KINH TẾ của nền dân chủ xã hội chủ nghĩa dựa trên cơ sở nào?",
        "options": [
          "Chế độ sở hữu xã hội (công hữu) đối với tư liệu sản xuất chủ yếu",
          "Chế độ chiếm hữu tư nhân tư bản chủ nghĩa",
          "Chế độ địa tô phong kiến",
          "Chế độ sở hữu nô lệ"
        ],
        "correct": 0,
        "explanation": "Slide: Bản chất kinh tế: sở hữu xã hội đối với tư liệu sản xuất chủ yếu; nhân dân là chủ thể phát triển lực lượng sản xuất và thụ hưởng lợi ích.",
        "trapAnalysis": "Bản chất kinh tế: Sở hữu xã hội (công hữu) về TLSX chủ yếu."
      },
      {
        "id": 17,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Bản chất TƯ TƯỞNG - VĂN HÓA - XÃ HỘI của nền dân chủ xã hội chủ nghĩa lấy hệ tư tưởng nào làm chủ đạo?",
        "options": [
          "Chủ nghĩa Mác - Lênin",
          "Chủ nghĩa tự do tư sản",
          "Tôn giáo thần quyền",
          "Chủ nghĩa dân tộc hẹp hòi"
        ],
        "correct": 0,
        "explanation": "Slide: Bản chất tư tưởng - văn hóa - xã hội: hệ tư tưởng chủ đạo là chủ nghĩa Mác - Lênin, kế thừa các giá trị văn hóa và hướng đến giải phóng, phát triển con người.",
        "trapAnalysis": "Chủ nghĩa Mác - Lênin là hệ tư tưởng chủ đạo."
      },
      {
        "id": 18,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Vì sao nói nền dân chủ xã hội chủ nghĩa là nền dân chủ 'CAO HƠN VỀ CHẤT' so với dân chủ tư sản?",
        "options": [
          "Vì quyền lực thực sự thuộc về nhân dân lao động, dân là chủ và dân làm chủ, dựa trên chế độ công hữu TLSX chủ yếu",
          "Vì nó được in nhiều áp phích hơn",
          "Vì các nước XHCN có nhiều vàng hơn",
          "Vì nó không cần có pháp luật"
        ],
        "correct": 0,
        "explanation": "Slide: Nền dân chủ xã hội chủ nghĩa là nền dân chủ cao hơn về chất so với dân chủ tư sản: quyền lực thuộc về nhân dân, dân là chủ và dân làm chủ; dân chủ gắn với pháp luật và được thực hiện dưới sự lãnh đạo của Đảng Cộng sản.",
        "trapAnalysis": "Cao hơn về chất vì quyền lực thực sự thuộc về đa số nhân dân, dựa trên công hữu TLSX."
      },
      {
        "id": 19,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Ở Việt Nam, dân chủ có vị trí vai trò như thế nào đối với chế độ xã hội chủ nghĩa?",
        "options": [
          "Chỉ là một khẩu hiệu trang trí",
          "Là mục tiêu, bản chất và động lực của chế độ xã hội chủ nghĩa; gắn với kỷ luật, kỷ cương",
          "Là điều thứ yếu sau phát triển bất động sản",
          "Chỉ áp dụng ở các thành phố lớn"
        ],
        "correct": 1,
        "explanation": "Slide: Ở Việt Nam, dân chủ là mục tiêu, bản chất và động lực của chế độ xã hội chủ nghĩa; gắn với kỷ luật, kỷ cương và phải được thực hiện trong đời sống thực tiễn ở mọi cấp, mọi lĩnh vực.",
        "trapAnalysis": "Dân chủ là mục tiêu, bản chất và động lực của chế độ XHCN; gắn với kỷ luật kỷ cương."
      },
      {
        "id": 20,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Mối quan hệ giữa dân chủ và kỷ luật, kỷ cương ở Việt Nam được xác định là:",
        "options": [
          "Dân chủ đối lập và loại trừ kỷ luật, kỷ cương",
          "Dân chủ phải đi đôi với kỷ luật, kỷ cương, được thể chế hóa bằng pháp luật và bảo đảm bằng pháp luật",
          "Chỉ cần kỷ luật nghiêm khắc, không cần dân chủ",
          "Dân chủ là tự do vô chính phủ"
        ],
        "correct": 1,
        "explanation": "Dân chủ không phải là muốn làm gì thì làm; dân chủ chân chính luôn song hành với kỷ luật kỷ cương và tinh thần thượng tôn pháp luật.",
        "trapAnalysis": "Dân chủ đi đôi với kỷ luật, kỷ cương, bảo đảm bằng pháp luật."
      },
      {
        "id": 21,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Nhận biết",
        "question": "Nhà nước xã hội chủ nghĩa có BA TÊN GỌI đặc thù nào sau đây?",
        "options": [
          "Nhà nước toàn trị, nhà nước chuyên chế, nhà nước phong kiến mới",
          "Nhà nước kiểu mới, nhà nước nửa nhà nước, nhà nước không còn nguyên nghĩa",
          "Nhà nước tư bản, nhà nước đế quốc, nhà nước thực dân",
          "Nhà nước quân phiệt, nhà nước liên bang, nhà nước kỹ trị"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Nhà nước xã hội chủ nghĩa có ba kiểu: nhà nước kiểu mới, nhà nước nửa nhà nước, nhà nước không còn nguyên nghĩa (3 tên gọi).",
        "trapAnalysis": "Ba tên gọi: Kiểu mới, nửa nhà nước, không còn nguyên nghĩa."
      },
      {
        "id": 22,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Nội dung chủ yếu và MỤC ĐÍCH CUỐI CÙNG của Nhà nước xã hội chủ nghĩa là gì?",
        "options": [
          "Duy trì vĩnh viễn sự đàn áp bạo lực",
          "Cải tạo xã hội cũ - xây dựng thành công xã hội mới",
          "Tịch thu hết tiền của công dân",
          "Bành trướng quân sự sang nước khác"
        ],
        "correct": 1,
        "explanation": "Vở ghi: Nội dung chủ yếu và mục đích cuối cùng của nhà nước XHCN: cải tạo xã hội cũ - xây dựng thành công xã hội mới.",
        "trapAnalysis": "Mục đích cuối cùng: Cải tạo xã hội cũ - xây dựng thành công xã hội mới."
      },
      {
        "id": 23,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Về mặt KINH TẾ, bản chất của Nhà nước xã hội chủ nghĩa dựa trên chế độ sở hữu nào?",
        "options": [
          "Chế độ tư hữu tư bản chủ nghĩa",
          "Chế độ công hữu (sở hữu xã hội) về tư liệu sản xuất chủ yếu",
          "Chế độ sở hữu phong kiến ruộng đất",
          "Chế độ chiếm hữu nô lệ"
        ],
        "correct": 1,
        "explanation": "Slide và lý luận Mác - Lênin: Bản chất kinh tế của Nhà nước XHCN dựa trên chế độ công hữu về các tư liệu sản xuất chủ yếu (nhân dân làm chủ kinh tế).",
        "trapAnalysis": "Bản chất kinh tế: Chế độ công hữu về tư liệu sản xuất chủ yếu."
      },
      {
        "id": 24,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Về mặt CHÍNH TRỊ, bản chất của Nhà nước xã hội chủ nghĩa là:",
        "options": [
          "Mang bản chất giai cấp công nhân, do Đảng Cộng sản lãnh đạo, nhân dân là chủ thể quyền lực",
          "Mang bản chất của giai cấp tư sản độc quyền",
          "Do các dòng tộc hoàng gia lãnh đạo",
          "Không có sự lãnh đạo của đảng phái nào"
        ],
        "correct": 0,
        "explanation": "Slide: Bản chất chính trị của Nhà nước XHCN: mang bản chất giai cấp công nhân, do Đảng Cộng sản lãnh đạo, nhân dân là chủ thể quyền lực.",
        "trapAnalysis": "Mang bản chất GCCN, ĐCS lãnh đạo, nhân dân là chủ thể quyền lực."
      },
      {
        "id": 25,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam có đặc điểm đầu tiên cốt lõi về bản chất là:",
        "options": [
          "Nhà nước của nhân dân, do nhân dân, vì nhân dân",
          "Nhà nước của giai cấp tư sản, do tư sản, vì người giàu",
          "Nhà nước quân chủ kế vị",
          "Nhà nước tôn giáo thần quyền"
        ],
        "correct": 0,
        "explanation": "Slide 4.3: Đặc điểm: Nhà nước của nhân dân, do nhân dân, vì nhân dân.",
        "trapAnalysis": "Nhà nước của nhân dân, do nhân dân, vì nhân dân."
      },
      {
        "id": 26,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Nguyên tắc thượng tôn nào chi phối toàn bộ tổ chức và hoạt động của Nhà nước pháp quyền XHCN Việt Nam?",
        "options": [
          "Tổ chức và hoạt động theo Hiến pháp và pháp luật",
          "Hoạt động theo lệnh miệng của quan chức",
          "Hoạt động theo phong tục làng xã không cần luật",
          "Hoạt động theo sự chỉ đạo của các công ty nước ngoài"
        ],
        "correct": 0,
        "explanation": "Slide: Tổ chức và hoạt động theo Hiến pháp và pháp luật; pháp luật giữ vị trí tối thượng trong quản lý xã hội.",
        "trapAnalysis": "Tổ chức và hoạt động theo Hiến pháp và pháp luật."
      },
      {
        "id": 27,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Đặc điểm cấu trúc quyền lực trong Nhà nước pháp quyền XHCN Việt Nam được Hiến pháp quy định là:",
        "options": [
          "Quyền lực nhà nước là thống nhất, có sự phân công, phối hợp và kiểm soát giữa các cơ quan nhà nước trong việc thực hiện các quyền lập pháp, hành pháp, tư pháp",
          "Tam quyền phân lập hoàn toàn độc lập và kiềm chế triệt tiêu nhau",
          "Quyền lực hoàn toàn thuộc về tòa án",
          "Không có sự phân công quyền lực"
        ],
        "correct": 0,
        "explanation": "Slide: Quyền lực nhà nước thống nhất, có phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp.",
        "trapAnalysis": "Quyền lực thống nhất, có phân công, phối hợp và kiểm soát."
      },
      {
        "id": 28,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Lực lượng nào giữ vai trò LÃNH ĐẠO Nhà nước pháp quyền xã hội chủ nghĩa Việt Nam?",
        "options": [
          "Đảng Cộng sản Việt Nam",
          "Các hiệp hội doanh nghiệp tư nhân",
          "Các tổ chức phi chính phủ quốc tế",
          "Mặt trận các tôn giáo"
        ],
        "correct": 0,
        "explanation": "Slide: Đặc điểm: do Đảng Cộng sản Việt Nam lãnh đạo (được quy định tại Điều 4 Hiến pháp 2013).",
        "trapAnalysis": "Do Đảng Cộng sản Việt Nam lãnh đạo."
      },
      {
        "id": 29,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Nhà nước pháp quyền XHCN Việt Nam được tổ chức và hoạt động theo NGUYÊN TẮC cơ bản nào?",
        "options": [
          "Nguyên tắc tập trung dân chủ",
          "Nguyên tắc độc đoán chuyên quyền",
          "Nguyên tắc đa nguyên chính trị",
          "Nguyên tắc tự do vô tổ chức"
        ],
        "correct": 0,
        "explanation": "Slide: Đặc điểm: tôn trọng quyền con người; tổ chức theo nguyên tắc tập trung dân chủ.",
        "trapAnalysis": "Tổ chức theo nguyên tắc tập trung dân chủ."
      },
      {
        "id": 30,
        "chapter": "Chương 4: Dân chủ & Nhà nước XHCN",
        "level": "Thông hiểu",
        "question": "Mục tiêu phục vụ cao nhất của Nhà nước pháp quyền XHCN Việt Nam là gì?",
        "options": [
          "Phục vụ lợi ích của nhân dân, tất cả vì hạnh phúc của nhân dân",
          "Phục vụ lợi ích của các đại gia bất động sản",
          "Thu thật nhiều thuế để tích lũy cho ngân sách cá nhân",
          "Xây dựng các cung điện xa hoa"
        ],
        "correct": 0,
        "explanation": "Bản chất cốt tử của Nhà nước pháp quyền XHCN Việt Nam là 'vì nhân dân'; các cơ quan nhà nước hoạt động vì mục tiêu phục vụ nhân dân.",
        "trapAnalysis": "Phục vụ lợi ích của nhân dân, tất cả vì hạnh phúc của nhân dân."
      }
    ]
  }
];

// Hàm rút ngẫu nhiên 30 câu hỏi từ toàn bộ ngân hàng 300 câu hỏi của 10 đề
function generateRandomExam() {
  const allQuestions = [];
  EXAM_SETS.forEach(set => {
    set.questions.forEach(q => {
      allQuestions.push({...q, originalSet: set.code});
    });
  });

  // Xáo trộn Fisher-Yates
  const shuffled = [...allQuestions];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  // Lấy 30 câu ngẫu nhiên
  const selected30 = shuffled.slice(0, 30).map((q, idx) => ({
    ...q,
    id: idx + 1
  }));

  return {
    id: "de_random",
    code: "MÃ ĐỀ: 999",
    title: "Đề Khảo Thí Ngẫu Nhiên (Trích Từ Ngân Hàng 300 Câu Của 10 Đề)",
    description: "Hệ thống tự động rút trích ngẫu nhiên 30 câu hỏi từ ngân hàng 300 câu chuẩn mực của 10 bộ đề thi ôn tập để rèn luyện phản xạ phòng thi.",
    duration: 15,
    questions: selected30
  };
}

// Bảng tóm tắt tri thức cốt lõi (Sổ tay Sinh viên cần nhớ)
const CORE_KNOWLEDGE_SUMMARY = [
  {
    chapter: "Chương 1: Nhập môn CNXHKH",
    points: [
      "Tiến trình: CNXH (thấp/TK quá độ lên CSCN) → CSCN (cao). Việt Nam đang trong thời kỳ quá độ lên CNXH.",
      "Mốc ra đời & Kim chỉ nam: Tuyên ngôn của Đảng Cộng sản (tháng 2/1848, C.Mác & Ph.Ăngghen).",
      "3 Tiền đề KHTN: Thuyết tế bào, Thuyết tiến hóa (Đác-uyn), Định luật bảo toàn và chuyển hóa năng lượng.",
      "3 Tiền đề Lý luận: Triết học cổ điển Đức, Kinh tế chính trị học cổ điển Anh, CNXH không tưởng - phê phán Pháp & Anh.",
      "Phát hiện quan trọng nhất: Sứ mệnh lịch sử toàn thế giới của giai cấp công nhân."
    ]
  },
  {
    chapter: "Chương 2: Sứ mệnh lịch sử của GCCN",
    points: [
      "Đặc điểm cốt tử: Gắn với nền đại công nghiệp hiện đại, phương thức công nghiệp (đặc điểm nổi bật nhất); đại biểu LLSX tiên tiến.",
      "Địa vị kinh tế: Không sở hữu tư liệu sản xuất chủ yếu, bị giai cấp tư sản bóc lột giá trị thặng dư.",
      "Sứ mệnh tổng quát: Xóa bỏ CNTB; xây dựng CNXH và CSCN.",
      "3 Nội dung sứ mệnh: Kinh tế (sản xuất của cải cho XHCN), Chính trị - XH (giành chính quyền, xây dựng nhà nước mới dưới sự lãnh đạo của ĐCS), Văn hóa - tư tưởng (hệ tư tưởng Mác - Lênin, xây dựng con người mới).",
      "Điều kiện khách quan: Địa vị kinh tế và địa vị chính trị - xã hội.",
      "Điều kiện chủ quan: ĐCS là nhân tố quan trọng nhất. Quy luật: Đảng Cộng sản = Phong trào công nhân + Chủ nghĩa Mác - Lênin (ở VN thêm Phong trào yêu nước).",
      "GCCN Việt Nam: Ra đời đầu thế kỷ XX trong cuộc khai thác thuộc địa của Pháp.",
      "GCCN hiện nay: Biến đổi trí tuệ hóa (công nhân tri thức), tham gia sở hữu (trung lưu hóa, mua cổ phiếu nhưng không làm thay đổi bản chất bóc lột), xã hội hóa lao động mang tính toàn cầu."
    ]
  },
  {
    chapter: "Chương 3: CNXH & Thời kỳ quá độ lên CNXH",
    points: [
      "Điều kiện ra đời: Kinh tế (LLSX xã hội hóa mâu thuẫn QHSX tư nhân TBCN); Chính trị (mâu thuẫn GCCN >< GCTS).",
      "Đặc trưng kinh tế bản chất: Nền kinh tế phát triển cao dựa trên LLSX hiện đại và chế độ CÔNG HỮU về tư liệu sản xuất chủ yếu.",
      "Nhà nước XHCN đầu tiên: Liên Xô sau Cách mạng Tháng Mười Nga 1917.",
      "Cách mạng vô sản: Thực hiện bằng con đường bạo lực cách mạng.",
      "Thời kỳ quá độ: Là tất yếu khách quan với mọi nước. Lênin gọi là 'những cơn đau đẻ kéo dài' (cực kỳ khó khăn, phức tạp).",
      "2 kiểu quá độ: Quá độ trực tiếp (từ CNTB phát triển - Mác & Ăngghen); Quá độ gián tiếp (từ tiền tư bản bỏ qua chế độ TBCN - Lênin bổ sung, ví dụ Việt Nam).",
      "Đặc điểm TKQĐ: Đan xen tàn dư xã hội cũ và mầm mống xã hội mới trên mọi lĩnh vực.",
      "Quá độ ở VN: Bỏ qua việc xác lập vị trí thống trị của QHSX và KTTT TBCN.",
      "4 Trụ cột phát triển: Kinh tế - xã hội là TRUNG TÂM; Xây dựng Đảng là THEN CHỐT; Văn hóa con người là NỀN TẢNG TINH THẦN; Quốc phòng an ninh là NHIỆM VỤ TRỌNG YẾU, THƯỜNG XUYÊN.",
      "3 Khâu đột phá chiến lược: Thể chế KTTT định hướng XHCN; Phát triển nguồn nhân lực chất lượng cao; Phát triển kết cấu hạ tầng đồng bộ."
    ]
  },
  {
    chapter: "Chương 4: Dân chủ & Nhà nước XHCN",
    points: [
      "Nguồn gốc: Demos (nhân dân) + Kratos (quyền lực) -> Quyền lực thuộc về nhân dân. Xuất hiện TK VII - VI TCN ở Hy Lạp cổ đại.",
      "Ăngghen: Dân chủ quân sự tồn tại ở hình thái nguyên thủy.",
      "3 phương diện dân chủ: Nguyên tắc (tổ chức & quản lý XH), Quyền lực (thuộc về nhân dân), Hình thức nhà nước (phương diện chính trị).",
      "Quan điểm kinh điển: Lênin: 'Dân chủ là sự thống trị của đa số'; Hồ Chí Minh: 'Dân chủ: dân là chủ, dân làm chủ'.",
      "Tiến trình biện chứng (Lênin): Chuyên chế -> Dân chủ tư sản -> Dân chủ vô sản -> Tiêu vong (không còn dân chủ nữa).",
      "Ra đời DC XHCN: Sau Cách mạng Tháng Mười Nga 1917, qua 2 giai đoạn (giành lấy dân chủ -> dùng dân chủ tổ chức nhà nước).",
      "Bản chất DC XHCN: Chính trị (GCCN, ĐCS lãnh đạo); Kinh tế (công hữu TLSX chủ yếu); Tư tưởng (chủ nghĩa Mác - Lênin). Cao hơn về chất so với DC tư sản.",
      "3 tên gọi Nhà nước XHCN: Nhà nước kiểu mới, nhà nước nửa nhà nước, nhà nước không còn nguyên nghĩa.",
      "Mục đích cuối cùng của Nhà nước XHCN: Cải tạo xã hội cũ - xây dựng thành công xã hội mới.",
      "Nhà nước pháp quyền XHCN VN: Của dân, do dân, vì dân; Hiến pháp và pháp luật giữ vị trí tối thượng; Quyền lực nhà nước là THỐNG NHẤT, có sự phân công, phối hợp và kiểm soát giữa lập pháp, hành pháp, tư pháp; Đảng CSVN lãnh đạo; Nguyên tắc tập trung dân chủ."
    ]
  }
];
