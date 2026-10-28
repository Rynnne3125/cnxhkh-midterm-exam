// =========================================================================
// NGÂN HÀNG KHẢO THÍ CHUẨN GIỮA KỲ: LỊCH SỬ ĐẢNG CỘNG SẢN VIỆT NAM
// CHƯƠNG 1: ĐẢNG CỘNG SẢN VIỆT NAM RA ĐỜI VÀ LÃNH ĐẠO ĐẤU TRANH GIÀNH CHÍNH QUYỀN (1930 - 1945)
// Quy chuẩn khảo thí VKU Đà Nẵng: 50 Câu Trắc Nghiệm / Đề - Thời Gian 40 Phút
// 6 Bộ Đề Khảo Thí Chuẩn Mực (300 Câu Hỏi Độc Bản - Không Trùng Lặp)
// Đáp án thiết kế cân bằng độ dài, cô đọng súc tích, chống đoán mò
// =========================================================================

const EXAM_SETS = [
  {
    "id": "de_01",
    "code": "MÃ ĐỀ: 101",
    "title": "Đề 01: Tổng Ôn Khảo Thí Toàn Diện Chương 1 (1858 - 1945)",
    "description": "Bộ đề khảo thí chuẩn mực bao quát toàn bộ Chương 1, phân loại học lực sinh viên từ bối cảnh 1858 đến thắng lợi Cách mạng Tháng Tám năm 1945.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Thực dân Pháp nổ súng tấn công vào địa danh nào để mở đầu cuộc xâm lược Việt Nam?",
        "options": [
          "Cửa biển Đà Nẵng",
          "Cửa biển Thuận An",
          "Bán đảo Đồ Sơn",
          "Thành Gia Định"
        ],
        "correct": 0,
        "explanation": "Chiều 31/8 và rạng sáng 1/9/1858, liên quân Pháp - Tây Ban Nha nổ súng tấn công bán đảo Sơn Trà (Đà Nẵng), chính thức mở đầu xâm lược Việt Nam.",
        "trapAnalysis": "Đà Nẵng là nơi Pháp nổ súng đầu tiên, không nhầm lẫn với Gia Định (1859) hay Thuận An (1883)."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Bản hiệp ước nào đánh dấu sự đầu hàng hoàn toàn của triều đình Huế trước thực dân Pháp?",
        "options": [
          "Hiệp ước Nhâm Tuất (1862)",
          "Hiệp ước Giáp Tuất (1874)",
          "Hiệp ước Hác-măng (1883)",
          "Hiệp ước Pa-tơ-nốt (1884)"
        ],
        "correct": 3,
        "explanation": "Hiệp ước Pa-tơ-nốt (6/6/1884) đã chấm dứt hoàn toàn sự tồn tại của nhà nước phong kiến độc lập, biến Việt Nam thành nước thuộc địa nửa phong kiến.",
        "trapAnalysis": "Hiệp ước Hác-măng (1883) là hiệp ước đầu hàng sơ bộ, còn Pa-tơ-nốt (1884) mới là văn bản xác lập sự thống trị toàn diện cuối cùng."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Mâu thuẫn chủ yếu và bao trùm nhất trong xã hội Việt Nam thời thuộc địa nửa phong kiến là gì?",
        "options": [
          "Giữa giai cấp nông dân với địa chủ",
          "Giữa giai cấp công nhân với tư sản",
          "Giữa dân tộc Việt Nam với đế quốc xâm lược",
          "Giữa thợ thuyền tiểu tư sản với tư bản Pháp"
        ],
        "correct": 2,
        "explanation": "Mâu thuẫn cơ bản gồm: Dân tộc VN >< Đế quốc Pháp và Nông dân >< Địa chủ. Trong đó mâu thuẫn giữa toàn thể dân tộc VN với đế quốc xâm lược là mâu thuẫn chủ yếu nhất.",
        "trapAnalysis": "Tránh chọn mâu thuẫn giai cấp (nông dân - địa chủ), vì giải phóng dân tộc là mâu thuẫn hàng đầu đòi hỏi giải quyết cấp bách."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Giai cấp công nhân Việt Nam ra đời trong khoảng thời gian lịch sử nào?",
        "options": [
          "Trước khi thực dân Pháp xâm lược",
          "Trong cuộc khai thác thuộc địa lần thứ nhất",
          "Sau cuộc khai thác thuộc địa lần thứ hai",
          "Trong phong trào Xô viết Nghệ - Tĩnh"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân Việt Nam hình thành trong cuộc khai thác thuộc địa lần thứ nhất của Pháp (1897 - 1914), ra đời trước cả giai cấp tư sản dân tộc.",
        "trapAnalysis": "Công nhân Việt Nam ra đời TRƯỚC tư sản Việt Nam (khai thác lần 1), chứ không phải sau chiến tranh thế giới thứ nhất."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Lực lượng nào chiếm trên 90% dân số và là lực lượng đông đảo nhất của cách mạng Việt Nam?",
        "options": [
          "Giai cấp công nhân",
          "Giai cấp nông dân",
          "Tầng lớp tiểu tư sản",
          "Giai cấp tư sản dân tộc"
        ],
        "correct": 1,
        "explanation": "Giai cấp nông dân chiếm hơn 90% dân số, chịu ách áp bức bóc lột nặng nề nhất, là lực lượng đông đảo và động lực to lớn của cách mạng.",
        "trapAnalysis": "Công nhân là giai cấp lãnh đạo, còn nông dân là lực lượng đông đảo nhất và là quân chủ lực của cách mạng."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Cuộc khởi nghĩa tiêu biểu và kéo dài nhất kết thúc phong trào Cần Vương do ai lãnh đạo?",
        "options": [
          "Nguyễn Thiện Thuật",
          "Phạm Bành và Đinh Công Tráng",
          "Phan Đình Phùng",
          "Hoàng Hoa Thám"
        ],
        "correct": 2,
        "explanation": "Khởi nghĩa Hương Khê (1885 - 1896) do Phan Đình Phùng lãnh đạo là cuộc khởi nghĩa tiêu biểu nhất, khi ông mất thì phong trào Cần Vương cũng kết thúc.",
        "trapAnalysis": "Hoàng Hoa Thám lãnh đạo khởi nghĩa Yên Thế (phong trào nông dân tự vệ), không thuộc biên niên phong trào Cần Vương."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Nhận xét của Nguyễn Ái Quốc về chủ trương cầu viện Nhật Bản của Phan Bội Châu là gì?",
        "options": [
          "Chẳng khác nào xin giặc rủ lòng thương",
          "Chẳng khác nào đưa hổ cửa trước rước beo cửa sau",
          "Hành động mang tính chất manh động ám sát",
          "Không kích thích được lòng yêu nước toàn dân"
        ],
        "correct": 1,
        "explanation": "Nguyễn Ái Quốc nhận xét việc cụ Phan Bội Châu nhờ cậy đế quốc Nhật để đánh đế quốc Pháp chẳng khác gì 'đuổi hổ cửa trước, rước beo cửa sau'.",
        "trapAnalysis": "'Xin giặc rủ lòng thương' là nhận xét của Người về chủ trương dựa vào Pháp để cải cách của Phan Châu Trinh."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Tổ chức Việt Nam Quốc dân Đảng thành lập năm 1927 đại diện cho khuynh hướng chính trị nào?",
        "options": [
          "Khuynh hướng phong kiến",
          "Khuynh hướng vô sản",
          "Dân chủ tư sản",
          "Xã hội dân chủ"
        ],
        "correct": 2,
        "explanation": "Việt Nam Quốc dân Đảng (do Nguyễn Thái Học lãnh đạo) là tổ chức đại diện cho khuynh hướng dân chủ tư sản ở Việt Nam theo chủ nghĩa Tam Dân của Tôn Trung Sơn.",
        "trapAnalysis": "Việt Nam Quốc dân Đảng không đi theo khuynh hướng vô sản mà theo lập trường dân chủ tư sản."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Sự thất bại của cuộc Khởi nghĩa Yên Bái (2/1930) đã khẳng định điều gì?",
        "options": [
          "Sự cáo chung của chế độ phong kiến",
          "Sự phá sản của khuynh hướng dân chủ tư sản",
          "Sự suy yếu của phong trào công nhân",
          "Sự bất lực của giai cấp nông dân"
        ],
        "correct": 1,
        "explanation": "Khởi nghĩa Yên Bái thất bại đánh dấu sự phá sản hoàn toàn của khuynh hướng chính trị dân chủ tư sản trong phong trào giải phóng dân tộc Việt Nam.",
        "trapAnalysis": "Chế độ phong kiến chỉ kết thúc vào tháng 8/1945 khi Bảo Đại thoái vị; Yên Bái đánh dấu sự thất bại của tư sản dân tộc."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Chính sách 'chia để trị' của thực dân Pháp tại Việt Nam chia đất nước thành ba kỳ gồm:",
        "options": [
          "Bắc Kỳ, Trung Kỳ, Nam Kỳ với ba quy chế khác nhau",
          "Đông Kỳ, Tây Kỳ, Nam Kỳ trực thuộc quân sự",
          "Thượng Kỳ, Hạ Kỳ, Trung Kỳ do vua Nguyễn cai quản",
          "Bắc Bộ, Trung Bộ, Nam Bộ thuộc quyền sứ thần Pháp"
        ],
        "correct": 0,
        "explanation": "Pháp chia Việt Nam thành 3 kỳ: Bắc Kỳ (nửa bảo hộ), Trung Kỳ (bảo hộ), Nam Kỳ (thuộc địa) nằm trong Liên bang Đông Dương.",
        "trapAnalysis": "Pháp dùng danh xưng Bắc Kỳ, Trung Kỳ, Nam Kỳ để xóa tên gọi đất nước Việt Nam trên bản đồ thế giới."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Nguyễn Tất Thành ra đi tìm đường cứu nước từ bến cảng Nhà Rồng vào ngày tháng năm nào?",
        "options": [
          "05/06/1911",
          "19/05/1911",
          "06/05/1911",
          "15/06/1911"
        ],
        "correct": 0,
        "explanation": "Ngày 5/6/1911, từ bến cảng Nhà Rồng (Sài Gòn), người thanh niên Nguyễn Tất Thành lên con tàu Đô đốc Latouche-Tréville ra đi tìm đường cứu nước.",
        "trapAnalysis": "Ngày sinh của Bác là 19/5/1890, ngày ra đi tìm đường cứu nước là 5/6/1911."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Sự kiện nào đánh dấu bước ngoặt đưa Nguyễn Ái Quốc từ người yêu nước trở thành chiến sĩ cộng sản?",
        "options": [
          "Gửi Bản Yêu sách của nhân dân An Nam (1919)",
          "Đọc Luận cương của Lênin về vấn đề thuộc địa (7/1920)",
          "Bỏ phiếu tán thành Quốc tế III và lập Đảng CS Pháp (12/1920)",
          "Sáng lập Hội Việt Nam Cách mạng Thanh niên (1925)"
        ],
        "correct": 2,
        "explanation": "Tại Đại hội Tours (tháng 12/1920), Người bỏ phiếu tán thành Quốc tế III và tham gia sáng lập Đảng Cộng sản Pháp, đánh dấu bước ngoặt từ người yêu nước thành người cộng sản.",
        "trapAnalysis": "Đọc Luận cương (7/1920) là tìm thấy con đường, còn Đại hội Tours (12/1920) mới là sự kiện chính thức đánh dấu bước ngoặt trở thành chiến sĩ cộng sản."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Cơ quan ngôn luận do Hội Liên hiệp thuộc địa xuất bản tại Paris năm 1922 do Nguyễn Ái Quốc làm chủ nhiệm kiêm chủ bút là:",
        "options": [
          "Báo L'Humanité",
          "Báo Le Paria",
          "Báo Thanh Niên",
          "Báo Búa Liềm"
        ],
        "correct": 1,
        "explanation": "Báo Le Paria (Người cùng khổ) ra số đầu tiên ngày 1/4/1922, là diễn đàn đấu tranh giải phóng các dân tộc thuộc địa.",
        "trapAnalysis": "L'Humanité là báo của Đảng Xã hội/Cộng sản Pháp, Thanh Niên xuất bản ở Quảng Châu (1925)."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tác phẩm lý luận nào của Nguyễn Ái Quốc xuất bản năm 1927 đóng vai trò chuẩn bị trực tiếp về tư tưởng chính trị cho việc lập Đảng?",
        "options": [
          "Bản án chế độ thực dân Pháp",
          "Đường Kách mệnh",
          "Tự chỉ trích",
          "Chính cương vắn tắt"
        ],
        "correct": 1,
        "explanation": "Tác phẩm 'Đường Kách mệnh' (1927) tập hợp các bài giảng tại Quảng Châu, vạch rõ phương hướng và vai trò tiên phong của Đảng cách mạng.",
        "trapAnalysis": "'Bản án chế độ thực dân Pháp' xuất bản 1925, còn 'Đường Kách mệnh' xuất bản 1927 chuẩn bị lý luận thành lập Đảng."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Hội Việt Nam Cách mạng Thanh niên được Nguyễn Ái Quốc thành lập vào thời gian nào tại Quảng Châu?",
        "options": [
          "Tháng 2/1925",
          "Tháng 6/1925",
          "Tháng 11/1924",
          "Tháng 3/1926"
        ],
        "correct": 1,
        "explanation": "Tháng 6/1925, Nguyễn Ái Quốc thành lập Hội Việt Nam Cách mạng Thanh niên tại Quảng Châu (Trung Quốc), nòng cốt là nhóm Cộng sản đoàn.",
        "trapAnalysis": "Tháng 2/1925 thành lập Cộng sản đoàn; tháng 6/1925 mới chính thức thành lập Hội Việt Nam Cách mạng Thanh niên."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Phong trào 'Vô sản hóa' (1928) của Hội Việt Nam Cách mạng Thanh niên nhằm mục đích cốt lõi gì?",
        "options": [
          "Vận động công nhân quyên góp tiền mua vũ khí",
          "Tổ chức tổng bãi công phá hoại nhà máy Pháp",
          "Rèn luyện lập trường giai cấp và truyền bá chủ nghĩa Mác - Lênin",
          "Đưa cán bộ sang Liên Xô đào tạo lý luận cao cấp"
        ],
        "correct": 2,
        "explanation": "Đưa hội viên vào các hầm mỏ, đồn điền cùng lao động với công nhân để rèn luyện lập trường giai cấp và truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân.",
        "trapAnalysis": "'Vô sản hóa' không nhằm mua vũ khí hay bãi công tức thời, mà là phương thức thâm nhập thực tiễn để giác ngộ công nhân."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Chi bộ cộng sản đầu tiên ở Việt Nam được thành lập vào tháng 3/1929 tại địa chỉ nào?",
        "options": [
          "Số 5D Hàm Long, Hà Nội",
          "Số 312 Khâm Thiên, Hà Nội",
          "Số 90 Thợ Nhuộm, Hà Nội",
          "Bến Nhà Rồng, Sài Gòn"
        ],
        "correct": 0,
        "explanation": "Tháng 3/1929, chi bộ cộng sản đầu tiên gồm 7 đảng viên thành lập tại số 5D phố Hàm Long (Hà Nội) do Trần Văn Cung làm Bí thư.",
        "trapAnalysis": "312 Khâm Thiên là nơi thành lập Đông Dương Cộng sản Đảng (6/1929), còn 5D Hàm Long là nơi lập chi bộ đầu tiên (3/1929)."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức cộng sản nào ra đời vào tháng 6/1929 tại Bắc Kỳ và xuất bản báo Búa Liềm?",
        "options": [
          "An Nam Cộng sản Đảng",
          "Đông Dương Cộng sản Đảng",
          "Đông Dương Cộng sản Liên đoàn",
          "Tân Việt Cách mạng Đảng"
        ],
        "correct": 1,
        "explanation": "Đông Dương Cộng sản Đảng thành lập ngày 17/6/1929 tại 312 Khâm Thiên (Hà Nội), cơ quan ngôn luận là báo Búa Liềm.",
        "trapAnalysis": "An Nam Cộng sản Đảng xuất bản tạp chí Bôn-sê-vích (8/1929 tại Nam Kỳ)."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Sự xuất hiện của 3 tổ chức cộng sản năm 1929 đặt ra yêu cầu lịch sử cấp bách nào?",
        "options": [
          "Hợp nhất thành một chính đảng duy nhất",
          "Phân chia địa bàn hoạt động độc lập",
          "Tập trung mua sắm vũ khí chuẩn bị bạo động",
          "Chờ đợi chỉ thị từ Quốc tế Nông dân"
        ],
        "correct": 0,
        "explanation": "Ba tổ chức cộng sản hoạt động tranh giành ảnh hưởng và công kích lẫn nhau, đòi hỏi phải hợp nhất thành một Đảng Cộng sản duy nhất để thống nhất hành động cách mạng.",
        "trapAnalysis": "Không phải duy trì ba tổ chức để chia vùng lãnh thổ, mà quy luật khách quan đòi hỏi phải hợp nhất."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Hội nghị hợp nhất thành lập Đảng Cộng sản Việt Nam (đầu năm 1930) được tổ chức tại đâu?",
        "options": [
          "Quảng Châu, Trung Quốc",
          "Cửu Long, Hương Cảng, Trung Quốc",
          "Ma Cao, Trung Quốc",
          "Pác Bó, Cao Bằng"
        ],
        "correct": 1,
        "explanation": "Hội nghị hợp nhất diễn ra từ ngày 6/1 đến 7/2/1930 tại Cửu Long (thuộc Hương Cảng, Trung Quốc) dưới sự chủ trì của Nguyễn Ái Quốc.",
        "trapAnalysis": "Ma Cao là nơi họp Đại hội I (1935); Cửu Long (Hương Cảng) mới là nơi tổ chức Hội nghị thành lập Đảng."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Đại biểu của hai tổ chức cộng sản nào đã trực tiếp tham gia Hội nghị hợp nhất đầu năm 1930?",
        "options": [
          "Đông Dương CS Đảng và An Nam CS Đảng",
          "Đông Dương CS Đảng và Đông Dương CS Liên đoàn",
          "An Nam CS Đảng và Tân Việt Cách mạng Đảng",
          "Đông Dương CS Liên đoàn và Việt Nam Quốc dân Đảng"
        ],
        "correct": 0,
        "explanation": "Hội nghị hợp nhất có sự tham gia của đại biểu Đông Dương Cộng sản Đảng và An Nam Cộng sản Đảng; Đông Dương Cộng sản Liên đoàn được kết nạp sau vào ngày 24/2/1930.",
        "trapAnalysis": "Đông Dương CS Liên đoàn không kịp cử đại biểu đến dự Hội nghị thành lập nhưng đã gửi thư xin gia nhập và được chấp thuận."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Các văn kiện được thông qua tại Hội nghị thành lập Đảng hợp thành văn kiện nào?",
        "options": [
          "Luận cương chính trị",
          "Cương lĩnh chính trị đầu tiên",
          "Chương trình hành động",
          "Chỉ thị kháng chiến"
        ],
        "correct": 1,
        "explanation": "Chính cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt và Điều lệ vắn tắt do Nguyễn Ái Quốc soạn thảo hợp thành Cương lĩnh chính trị đầu tiên của Đảng.",
        "trapAnalysis": "Luận cương chính trị do Trần Phú soạn thảo được thông qua vào tháng 10/1930, không phải tháng 2/1930."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Phương hướng chiến lược của cách mạng Việt Nam nêu trong Cương lĩnh chính trị đầu tiên là gì?",
        "options": [
          "Làm tư sản dân quyền và thổ địa cách mạng để đi tới xã hội cộng sản",
          "Tiến hành cách mạng xã hội chủ nghĩa bỏ qua giai đoạn tư bản",
          "Thực hiện cách mạng ruộng đất để lật đổ chế độ phong kiến",
          "Xây dựng chế độ cộng hòa dân chủ theo mô hình phương Tây"
        ],
        "correct": 0,
        "explanation": "Phương hướng chiến lược: 'Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản'.",
        "trapAnalysis": "Cương lĩnh kết hợp chặt chẽ cách mạng tư sản dân quyền và thổ địa cách mạng hướng thẳng tới xã hội cộng sản."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Cương lĩnh tháng 2/1930 xác định lực lượng nòng cốt (gốc cách mạng) là các giai cấp nào?",
        "options": [
          "Công nhân và nông dân",
          "Công nhân và tiểu tư sản",
          "Nông dân và trí thức",
          "Công nhân và tư sản dân tộc"
        ],
        "correct": 0,
        "explanation": "Cương lĩnh khẳng định công nhân và nông dân là lực lượng nòng cốt, là 'gốc cách mạng'; đồng thời chủ trương đoàn kết với tiểu tư sản, trí thức.",
        "trapAnalysis": "Gốc cách mạng luôn là liên minh Công - Nông, công nhân giữ vai trò lãnh đạo."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Ý nghĩa lịch sử vĩ đại nhất của sự kiện thành lập Đảng Cộng sản Việt Nam (1930) là:",
        "options": [
          "Chấm dứt hoàn toàn ách thống trị của thực dân Pháp",
          "Chấm dứt khủng hoảng về đường lối cứu nước và giai cấp lãnh đạo",
          "Xóa bỏ hoàn toàn chế độ tư hữu ruộng đất phong kiến",
          "Đưa nhân dân ta lên vị thế làm chủ hoàn toàn chính quyền"
        ],
        "correct": 1,
        "explanation": "Sự ra đời của Đảng đã chấm dứt thời kỳ khủng hoảng sâu sắc về đường lối cứu nước và tổ chức lãnh đạo phong trào yêu nước Việt Nam.",
        "trapAnalysis": "Năm 1930 chưa xóa bỏ được ách thống trị của Pháp hay đưa nhân dân nắm chính quyền (điều này chỉ đạt được sau Cách mạng Tháng Tám 1945)."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Phong trào cách mạng 1930 - 1931 đạt tới đỉnh cao thắng lợi với sự kiện nào?",
        "options": [
          "Cuộc bãi công của công nhân đồn điền cao su Phú Riềng",
          "Sự thành lập chính quyền Xô viết Nghệ - Tĩnh",
          "Cuộc biểu tình của nông dân Tiền Hải (Thái Bình)",
          "Cuộc bãi công của thợ máy xưởng Ba Son"
        ],
        "correct": 1,
        "explanation": "Đỉnh cao của phong trào 1930 - 1931 là việc thành lập chính quyền Xô viết ở các huyện thuộc Nghệ An và Hà Tĩnh vào tháng 9/1930.",
        "trapAnalysis": "Ba Son là sự kiện năm 1925, Phú Riềng đầu năm 1930; đỉnh cao bao trùm là Xô viết Nghệ - Tĩnh."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Tính chất của chính quyền Xô viết Nghệ - Tĩnh được lịch sử khẳng định là:",
        "options": [
          "Chính quyền liên hiệp tư sản dân tộc",
          "Chính quyền của công nhân và nông dân sơ khai",
          "Chính quyền dân chủ cộng hòa nghị trường",
          "Chính quyền quân quản lâm thời thuộc địa"
        ],
        "correct": 1,
        "explanation": "Xô viết Nghệ - Tĩnh là hình thức chính quyền cách mạng sơ khai của giai cấp công nhân và nông dân dưới sự lãnh đạo của Đảng.",
        "trapAnalysis": "Không phải chính quyền tư sản hay nghị trường, đây là chính quyền công nông phôi thai đầu tiên."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Hội nghị Ban Chấp hành Trung ương Đảng tháng 10/1930 đã bầu ai làm Tổng Bí thư đầu tiên?",
        "options": [
          "Nguyễn Ái Quốc",
          "Trần Phú",
          "Lê Hồng Phong",
          "Hà Huy Tập"
        ],
        "correct": 1,
        "explanation": "Hội nghị TW tháng 10/1930 tại Hương Cảng đã cử đồng chí Trần Phú làm Tổng Bí thư đầu tiên của Đảng.",
        "trapAnalysis": "Nguyễn Ái Quốc chủ trì hội nghị thành lập Đảng nhưng không giữ chức Tổng Bí thư; Trần Phú là Tổng Bí thư đầu tiên."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Hội nghị Trung ương tháng 10/1930 đã quyết định đổi tên Đảng Cộng sản Việt Nam thành tên gì?",
        "options": [
          "Đảng Lao động Việt Nam",
          "Đảng Cộng sản Đông Dương",
          "Đông Dương Cộng sản Liên đoàn",
          "Hội Liên hiệp Lao động Đông Dương"
        ],
        "correct": 1,
        "explanation": "Theo chỉ thị của Quốc tế Cộng sản, Hội nghị TW tháng 10/1930 đã quyết định đổi tên Đảng thành Đảng Cộng sản Đông Dương.",
        "trapAnalysis": "Đảng Lao động Việt Nam là tên gọi đổi tại Đại hội II (1951), còn tháng 10/1930 đổi thành Đảng Cộng sản Đông Dương."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hạn chế chủ yếu trong Luận cương chính trị tháng 10/1930 của Trần Phú là gì?",
        "options": [
          "Chưa nhận thấy vai trò lãnh đạo của giai cấp công nhân",
          "Chưa thấy được quy luật vận động của chủ nghĩa tư bản",
          "Nặng về đấu tranh giai cấp và chưa đặt giải phóng dân tộc lên hàng đầu",
          "Không đề ra khẩu hiệu tịch thu ruộng đất của địa chủ"
        ],
        "correct": 2,
        "explanation": "Luận cương chưa đặt nhiệm vụ giải phóng dân tộc lên hàng đầu mà quá nặng về đấu tranh giai cấp và ruộng đất, đồng thời đánh giá chưa đúng khả năng cách mạng của tiểu tư sản, tư sản dân tộc.",
        "trapAnalysis": "Luận cương vẫn khẳng định công nhân lãnh đạo và vẫn đòi ruộng đất, hạn chế là quá nặng về đấu tranh giai cấp."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Câu nói nổi tiếng nào là lời trăn trối của đồng chí Trần Phú trước khi hy sinh trong tù?",
        "options": [
          "Không thành công thì cũng thành nhân",
          "Hãy giữ vững chí khí chiến đấu",
          "Dù phải đốt cháy cả dãy Trường Sơn",
          "Quyết tử để Tổ quốc quyết sinh"
        ],
        "correct": 1,
        "explanation": "Trước khi hy sinh tại nhà thương Chợ Quán ngày 6/9/1931, Tổng Bí thư Trần Phú đã nhắn nhủ: 'Hãy giữ vững chí khí chiến đấu'.",
        "trapAnalysis": "'Không thành công cũng thành nhân' là của Nguyễn Thái Học; 'Quyết tử để Tổ quốc quyết sinh' xuất hiện năm 1946."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đại hội đại biểu toàn quốc lần thứ I của Đảng (tháng 3/1935) diễn ra ở địa điểm nào?",
        "options": [
          "Hương Cảng, Trung Quốc",
          "Ma Cao, Trung Quốc",
          "Quảng Châu, Trung Quốc",
          "Tân Trào, Tuyên Quang"
        ],
        "correct": 1,
        "explanation": "Đại hội I họp tại Ma Cao (Trung Quốc) từ ngày 27 đến 31/3/1935, đánh dấu sự phục hồi hoàn chỉnh hệ thống tổ chức Đảng.",
        "trapAnalysis": "Hội nghị thành lập Đảng ở Hương Cảng (1930), Đại hội I họp ở Ma Cao (1935)."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Đại hội VII của Quốc tế Cộng sản (tháng 7/1935) xác định kẻ thù nguy hiểm trước mắt của nhân loại là:",
        "options": [
          "Chủ nghĩa đế quốc thực dân",
          "Chủ nghĩa phát xít",
          "Giai cấp phong kiến suy tàn",
          "Chủ nghĩa cơ hội xét lại"
        ],
        "correct": 1,
        "explanation": "Đại hội VII QTCS (do Dimitrov chủ trì) xác định chủ nghĩa phát xít là kẻ thù nguy hiểm trực tiếp của hòa bình và cách mạng thế giới.",
        "trapAnalysis": "Kẻ thù nguy hiểm hàng đầu lúc này là chủ nghĩa phát xít (Đức, Ý, Nhật), không phải toàn bộ chủ nghĩa tư bản nói chung."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Mục tiêu trực tiếp, trước mắt của phong trào dân chủ 1936 - 1939 ở Việt Nam là đòi:",
        "options": [
          "Độc lập dân tộc hoàn toàn và ruộng đất cho dân cày",
          "Tự do, dân chủ, cơm áo, hòa bình",
          "Lật đổ ách phát xít Nhật và lập chính phủ mới",
          "Tổng bãi công trên toàn cõi Đông Dương"
        ],
        "correct": 1,
        "explanation": "Thời kỳ 1936 - 1939, Đảng chủ trương chưa đòi độc lập và ruộng đất ngay mà tập trung đòi các quyền dân sinh dân chủ: tự do, dân chủ, cơm áo, hòa bình.",
        "trapAnalysis": "Giai đoạn 1936-1939 tạm gác khẩu hiệu lật đổ đế quốc và chia ruộng đất, chỉ đòi dân sinh, dân chủ."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Tác phẩm 'Tự chỉ trích' (tháng 7/1939) nhằm uốn nắn các lệch lạc trong Đảng do ai viết?",
        "options": [
          "Lê Hồng Phong",
          "Hà Huy Tập",
          "Nguyễn Văn Cừ",
          "Trường Chinh"
        ],
        "correct": 2,
        "explanation": "Tổng Bí thư Nguyễn Văn Cừ đã viết tác phẩm 'Tự chỉ trích' để làm rõ nguyên tắc tự phê bình và phê bình, thống nhất tư tưởng trong Đảng.",
        "trapAnalysis": "Tác giả 'Tự chỉ trích' là Tổng Bí thư Nguyễn Văn Cừ, xuất bản trước khi Chiến tranh thế giới thứ hai bùng nổ."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hình thức đấu tranh mới nổi bật trong phong trào 1936 - 1939 khác với giai đoạn 1930 - 1931 là:",
        "options": [
          "Khởi nghĩa vũ trang cướp chính quyền",
          "Đấu tranh công khai, hợp pháp và nửa hợp pháp",
          "Ám sát cá nhân bọn trùm thực dân",
          "Bạo động du kích ở vùng rừng núi hiểm trở"
        ],
        "correct": 1,
        "explanation": "Thời kỳ 1936 - 1939 kết hợp khéo léo giữa đấu tranh công khai, hợp pháp, nửa hợp pháp (nghị trường, báo chí) với hoạt động bí mật bất hợp pháp.",
        "trapAnalysis": "Giai đoạn 1930-1931 chỉ có bất hợp pháp và vũ trang bãi công; 1936-1939 mới có đấu tranh công khai hợp pháp."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Hội nghị Trung ương Đảng nào (tháng 11/1939) đã mở đầu sự chuyển hướng chỉ đạo chiến lược cách mạng?",
        "options": [
          "Hội nghị Trung ương 6",
          "Hội nghị Trung ương 7",
          "Hội nghị Trung ương 8",
          "Hội nghị Toàn quốc"
        ],
        "correct": 0,
        "explanation": "Hội nghị TW 6 (11/1939 tại Bà Điểm do Nguyễn Văn Cừ chủ trì) đã mở đầu chuyển hướng bằng việc đặt nhiệm vụ giải phóng dân tộc lên hàng đầu.",
        "trapAnalysis": "HNTW 6 mở đầu, HNTW 7 phát triển, và HNTW 8 hoàn chỉnh sự chuyển hướng chiến lược."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội nghị Trung ương lần thứ 8 (tháng 5/1941) họp tại địa điểm lịch sử nào?",
        "options": [
          "Bà Điểm, Hóc Môn",
          "Đình Bảng, Bắc Ninh",
          "Khuổi Nặm, Pác Bó, Cao Bằng",
          "Tân Trào, Tuyên Quang"
        ],
        "correct": 2,
        "explanation": "Hội nghị TW 8 họp từ ngày 10 đến 19/5/1941 tại lán Khuổi Nặm (Pác Bó, Hà Quảng, Cao Bằng) do đồng chí Nguyễn Ái Quốc chủ trì.",
        "trapAnalysis": "Bà Điểm là nơi họp HNTW 6 (1939); Đình Bảng là HNTW 7 (1940); Khuổi Nặm (Pác Bó) là nơi họp HNTW 8 (1941)."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Nội dung quan trọng nhất được hoàn chỉnh tại Hội nghị Trung ương 8 (5/1941) là gì?",
        "options": [
          "Đặt nhiệm vụ giải phóng dân tộc lên hàng đầu và cấp bách hơn hết",
          "Quyết định phát động ngay khởi nghĩa vũ trang trên cả nước",
          "Đổi tên Đảng thành Đảng Lao động Việt Nam",
          "Thực hiện ngay việc chia toàn bộ ruộng đất cho nông dân"
        ],
        "correct": 0,
        "explanation": "HNTW 8 khẳng định quyền lợi của bộ phận, của giai cấp phải phục tùng quyền lợi giải phóng dân tộc, đặt nhiệm vụ giải phóng dân tộc lên trên hết, trước hết.",
        "trapAnalysis": "Năm 1941 chưa phát động Tổng khởi nghĩa mà chỉ chuẩn bị lực lượng; khẩu hiệu ruộng đất bị tạm gác lại."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Mặt trận Việt Nam Độc lập Đồng minh (Mặt trận Việt Minh) được thành lập vào ngày tháng năm nào?",
        "options": [
          "19/05/1941",
          "28/01/1941",
          "22/12/1944",
          "09/03/1945"
        ],
        "correct": 0,
        "explanation": "Mặt trận Việt Minh được thành lập theo quyết định của Hội nghị Trung ương 8 vào ngày 19/5/1941 (trùng với ngày sinh của Bác Hồ).",
        "trapAnalysis": "28/1/1941 là ngày Bác về nước; 19/5/1941 là ngày thành lập Mặt trận Việt Minh."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Đội Việt Nam Tuyên truyền Giải phóng quân thành lập ngày 22/12/1944 do ai làm đội trưởng chỉ huy?",
        "options": [
          "Hoàng Văn Thái",
          "Võ Nguyên Giáp",
          "Chu Văn Tấn",
          "Trần Đăng Ninh"
        ],
        "correct": 1,
        "explanation": "Đội Việt Nam Tuyên truyền Giải phóng quân thành lập ngày 22/12/1944 tại khu rừng Trần Hưng Đạo gồm 34 chiến sĩ, do đồng chí Võ Nguyên Giáp chỉ huy.",
        "trapAnalysis": "Võ Nguyên Giáp là người chỉ huy trực tiếp theo chỉ thị của Hồ Chí Minh."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Phương châm hoạt động của Đội Việt Nam Tuyên truyền Giải phóng quân khi mới thành lập là gì?",
        "options": [
          "Quân sự trọng hơn chính trị",
          "Chính trị trọng hơn quân sự",
          "Đánh chắc thắng, tiến công đồng loạt",
          "Phòng ngự vững chắc chờ viện binh"
        ],
        "correct": 1,
        "explanation": "Hồ Chí Minh chỉ thị: 'Tên nó là Đội Việt Nam Tuyên truyền Giải phóng quân, nghĩa là chính trị trọng hơn quân sự. Nó là đội tuyên truyền'.",
        "trapAnalysis": "Ghi nhớ chữ 'Tuyên truyền': chính trị trọng hơn quân sự, tác chiến là phương thức tuyên truyền vũ trang."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Bản Chỉ thị lịch sử 'Nhật - Pháp bắn nhau và hành động của chúng ta' được ban hành vào ngày nào?",
        "options": [
          "09/03/1945",
          "12/03/1945",
          "15/04/1945",
          "15/08/1945"
        ],
        "correct": 1,
        "explanation": "Sau khi Nhật đảo chính Pháp đêm 9/3/1945, Ban Thường vụ TW Đảng đã họp và ra bản Chỉ thị lịch sử vào ngày 12/3/1945.",
        "trapAnalysis": "9/3/1945 là ngày Nhật đảo chính, 12/3/1945 là ngày Chỉ thị của Đảng được ban hành."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chỉ thị ngày 12/3/1945 xác định kẻ thù cụ thể trước mắt và duy nhất của nhân dân Đông Dương là:",
        "options": [
          "Thực dân Pháp",
          "Phát xít Nhật",
          "Liên minh thực dân Pháp và phát xít Nhật",
          "Đế quốc Mỹ và Tưởng Giới Thạch"
        ],
        "correct": 1,
        "explanation": "Chỉ thị nhận định sau đảo chính, thực dân Pháp đã mất quyền lực hoàn toàn, kẻ thù cụ thể trước mắt duy nhất chỉ còn là phát xít Nhật.",
        "trapAnalysis": "Sau đêm 9/3, Pháp đã bị Nhật gạt bỏ, khẩu hiệu 'đánh đuổi Pháp - Nhật' được thay bằng 'đánh đuổi phát xít Nhật'."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu đấu tranh hành động thiết thực nhất trong Cao trào kháng Nhật cứu nước (1945) là:",
        "options": [
          "Giảm tô, giảm tức, chia ruộng đất",
          "Phá kho thóc Nhật để giải quyết nạn đói",
          "Đòi quyền tự do báo chí và xuất bản",
          "Đánh đổ chính phủ Trần Trọng Kim"
        ],
        "correct": 1,
        "explanation": "Khẩu hiệu 'Phá kho thóc Nhật, giải quyết nạn đói' đáp ứng đúng nguyện vọng sinh tử của hàng triệu nông dân, thổi bùng ngọn lửa tiền khởi nghĩa.",
        "trapAnalysis": "Khẩu hiệu thực tế, cấp bách nhất cuốn hút hàng triệu quần chúng chính là 'Phá kho thóc Nhật'."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Khu giải phóng Việt Bắc được thành lập tháng 6/1945 gồm bao nhiêu tỉnh?",
        "options": [
          "4 tỉnh",
          "6 tỉnh",
          "8 tỉnh",
          "10 tỉnh"
        ],
        "correct": 1,
        "explanation": "Khu giải phóng Việt Bắc gồm 6 tỉnh: Cao Bằng, Bắc Kạn, Lạng Sơn, Hà Giang, Tuyên Quang, Thái Nguyên (gọi tắt là Cao - Bắc - Lạng - Hà - Tuyên - Thái).",
        "trapAnalysis": "Nhớ công thức 'Cao - Bắc - Lạng - Hà - Tuyên - Thái' gồm đúng 6 tỉnh căn cứ địa."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Ba nguyên tắc chỉ đạo khởi nghĩa được Hội nghị toàn quốc của Đảng (14 - 15/8/1945) xác định là:",
        "options": [
          "Bí mật, bất ngờ, kiên quyết",
          "Tập trung, thống nhất, kịp thời",
          "Đánh nhanh, thắng nhanh, dứt điểm",
          "Tự lực, kiên trì, toàn diện"
        ],
        "correct": 1,
        "explanation": "Hội nghị toàn quốc xác định 3 nguyên tắc bảo đảm thắng lợi cho cuộc khởi nghĩa là: Tập trung, Thống nhất và Kịp thời.",
        "trapAnalysis": "Học thuộc 3 nguyên tắc khởi nghĩa tháng Tám: Tập trung - Thống nhất - Kịp thời."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Bốn tỉnh đầu tiên trong cả nước giành được chính quyền vào ngày 18/8/1945 là:",
        "options": [
          "Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam",
          "Hà Nội, Hải Phòng, Huế, Sài Gòn",
          "Thái Nguyên, Tuyên Quang, Cao Bằng, Bắc Kạn",
          "Quảng Ngãi, Bình Định, Phú Yên, Khánh Hòa"
        ],
        "correct": 0,
        "explanation": "Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam là bốn địa phương nổ súng giành chính quyền cấp tỉnh sớm nhất trong cả nước (ngày 18/8/1945).",
        "trapAnalysis": "Hà Nội giành chính quyền ngày 19/8; 4 tỉnh sớm nhất là Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam (18/8)."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Sự kiện nào đánh dấu chế độ phong kiến Việt Nam hoàn toàn sụp đổ vào tháng 8/1945?",
        "options": [
          "Khởi nghĩa thắng lợi tại Hà Nội (19/8)",
          "Khởi nghĩa thắng lợi tại Sài Gòn (25/8)",
          "Vua Bảo Đại thoái vị tại Huế (30/8)",
          "Chủ tịch Hồ Chí Minh đọc Tuyên ngôn Độc lập (2/9)"
        ],
        "correct": 2,
        "explanation": "Chiều 30/8/1945, tại Ngọ Môn (Huế), vua Bảo Đại tuyên bố thoái vị và trao ấn kiếm cho đại diện chính phủ lâm thời, chấm dứt chế độ phong kiến.",
        "trapAnalysis": "Bảo Đại thoái vị ngày 30/8 chính thức chấm dứt chế độ quân chủ, còn 2/9 là ngày khai sinh chế độ cộng hòa dân chủ."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Tính chất căn bản của Cách mạng Tháng Tám năm 1945 ở Việt Nam là gì?",
        "options": [
          "Cách mạng xã hội chủ nghĩa triệt để",
          "Cách mạng tư sản mang tính chất cải lương",
          "Cách mạng giải phóng dân tộc mang tính chất dân chủ mới",
          "Cách mạng ruộng đất của giai cấp nông dân"
        ],
        "correct": 2,
        "explanation": "Cách mạng Tháng Tám là cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới (điển hình, sâu sắc, triệt để), do Đảng vô sản lãnh đạo.",
        "trapAnalysis": "Không phải cách mạng XHCN (nhiệm vụ giành độc lập là chính), mà là giải phóng dân tộc mang tính dân chủ mới."
      }
    ]
  },
  {
    "id": "de_02",
    "code": "MÃ ĐỀ: 102",
    "title": "Đề 02: Bối Cảnh Lịch Sử & Các Phong Trào Yêu Nước Trước 1930",
    "description": "Bộ đề chuyên sâu về hoàn cảnh thuộc địa nửa phong kiến, chính sách khai thác thuộc địa của Pháp và sự thất bại của các phong trào yêu nước tiền bối.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Cuộc khai thác thuộc địa lần thứ nhất của thực dân Pháp tại Việt Nam diễn ra trong khoảng thời gian nào?",
        "options": [
          "1858 - 1884",
          "1897 - 1914",
          "1914 - 1918",
          "1919 - 1929"
        ],
        "correct": 1,
        "explanation": "Cuộc khai thác thuộc địa lần thứ nhất do Toàn quyền Paul Doumer tiến hành kéo dài từ năm 1897 đến năm 1914 (bắt đầu Chiến tranh thế giới thứ nhất).",
        "trapAnalysis": "1897 - 1914 là khai thác lần thứ nhất; 1919 - 1929 là khai thác lần thứ hai sau Thế chiến thứ nhất."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Mục đích lớn nhất trong chính sách kinh tế của thực dân Pháp tại Việt Nam là gì?",
        "options": [
          "Công nghiệp hóa hiện đại hóa thuộc địa",
          "Vơ vét tài nguyên và bóc lột nhân công giá rẻ",
          "Xây dựng nền kinh tế tự chủ cho Đông Dương",
          "Phát triển kinh tế hàng hóa tư bản độc lập"
        ],
        "correct": 1,
        "explanation": "Mục đích chính của Pháp là vơ vét tối đa nguồn tài nguyên thiên nhiên, bóc lột sức lao động rẻ mạt và biến Việt Nam thành thị trường tiêu thụ hàng hóa của chính quốc.",
        "trapAnalysis": "Pháp không hề có ý định công nghiệp hóa mà kìm hãm công nghiệp nặng để Việt Nam phụ thuộc hoàn toàn vào Pháp."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Giai cấp địa chủ phong kiến Việt Nam bị phân hóa thành hai bộ phận nào dưới thời thuộc địa?",
        "options": [
          "Đại địa chủ và trung, tiểu địa chủ",
          "Địa chủ quan lại và địa chủ trí thức",
          "Địa chủ công thương và địa chủ đồn điền",
          "Địa chủ kháng chiến và địa chủ trung lập"
        ],
        "correct": 0,
        "explanation": "Giai cấp địa chủ phân hóa thành: đại địa chủ (câu kết với đế quốc đàn áp nhân dân) và trung, tiểu địa chủ (ít nhiều có tinh thần dân tộc chống đế quốc).",
        "trapAnalysis": "Sự phân hóa căn bản là đại địa chủ phản động cấu kết với Pháp và trung, tiểu địa chủ có lòng yêu nước."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Đặc điểm nổi bật nhất của giai cấp tư sản Việt Nam thời kỳ thuộc địa là:",
        "options": [
          "Có tiềm lực kinh tế lớn mạnh chi phối thị trường",
          "Phân hóa thành tư sản mại bản và tư sản dân tộc",
          "Đóng vai trò lãnh đạo tuyệt đối phong trào công nhân",
          "Nắm giữ phần lớn tư liệu sản xuất công nghiệp nặng"
        ],
        "correct": 1,
        "explanation": "Giai cấp tư sản Việt Nam số lượng ít, thế lực kinh tế yếu, phân hóa thành tư sản mại bản (ăn cánh với Pháp) và tư sản dân tộc (có khuynh hướng dân tộc nhưng hay thỏa hiệp).",
        "trapAnalysis": "Tư sản Việt Nam không có tiềm lực lớn và không lãnh đạo công nhân, mà bị phân hóa thành hai bộ phận đối lập."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Phong trào Cần Vương (1885 - 1896) chính thức bùng nổ sau khi ai ban bố Chiếu Cần Vương?",
        "options": [
          "Vua Tự Đức",
          "Vua Hàm Nghi",
          "Vua Duy Tân",
          "Vua Đồng Khánh"
        ],
        "correct": 1,
        "explanation": "Sau vụ binh biến kinh thành Huế thất bại, Tôn Thất Thuyết phò tá vua Hàm Nghi ra căn cứ Tân Sở (Quảng Trị) và ban Chiếu Cần Vương kêu gọi phò vua cứu nước ngày 13/7/1885.",
        "trapAnalysis": "Hàm Nghi là vị vua yêu nước ban Chiếu Cần Vương; Tự Đức đã mất năm 1883, Đồng Khánh là vua bù nhìn tay sai."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Điểm khác biệt căn bản giữa Khởi nghĩa Yên Thế với phong trào Cần Vương là gì?",
        "options": [
          "Do trí thức Nho học chỉ huy để khôi phục vương quyền",
          "Là phong trào đấu tranh tự vệ tự phát của nông dân",
          "Được sự viện trợ vũ khí trực tiếp từ phát xít Nhật",
          "Có sự tham gia đông đảo của giai cấp công nhân"
        ],
        "correct": 1,
        "explanation": "Khởi nghĩa Yên Thế (1884 - 1913) do Hoàng Hoa Thám lãnh đạo là phong trào tự vệ của nông dân vùng đất trung du, không chịu sự chi phối của ý thức hệ phong kiến Cần Vương.",
        "trapAnalysis": "Cần Vương là phò vua khôi phục ngai vàng phong kiến, còn Yên Thế là nông dân đấu tranh tự vệ để giữ đất giữ làng."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Hội Duy Tân (1904) do Phan Bội Châu sáng lập chủ trương thiết lập chế độ chính trị nào?",
        "options": [
          "Chế độ quân chủ phong kiến tập quyền",
          "Chế độ quân chủ lập hiến",
          "Chế độ cộng hòa dân chủ",
          "Chế độ Xã hội chủ nghĩa"
        ],
        "correct": 1,
        "explanation": "Ban đầu (1904), Hội Duy Tân của Phan Bội Châu lấy việc đánh đuổi Pháp, khôi phục nước Việt Nam và lập nên chế độ quân chủ lập hiến làm mục đích (tôn Cường Để làm Hội chủ).",
        "trapAnalysis": "Hội Duy Tân (1904) chủ trương 'quân chủ lập hiến'; đến năm 1912 khi lập Việt Nam Quang phục Hội mới chuyển sang 'cộng hòa dân quốc'."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Chủ trương cứu nước nổi bật gắn liền với tên tuổi của cụ Phan Châu Trinh là gì?",
        "options": [
          "Khởi nghĩa vũ trang bạo động đánh đuổi thực dân Pháp",
          "Cải cách văn hóa giáo dục, nâng cao dân trí dân quyền",
          "Cầu viện sự giúp đỡ của chính phủ đế quốc Anh",
          "Tập hợp công nông tiến hành khởi nghĩa từng phần"
        ],
        "correct": 1,
        "explanation": "Phan Châu Trinh theo khuynh hướng cải cách ôn hòa: 'Khai dân trí, chấn dân khí, hậu dân sinh', dựa vào Pháp để đánh đổ phong kiến hủ bại.",
        "trapAnalysis": "Bạo động là xu hướng của Phan Bội Châu; cải cách ôn hòa nâng cao dân trí là xu hướng của Phan Châu Trinh."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Trường Đông Kinh Nghĩa Thục (1907) được thành lập tại Hà Nội do ai đứng đầu làm Thục trưởng?",
        "options": [
          "Lương Văn Can",
          "Nguyễn Quyền",
          "Huỳnh Thúc Kháng",
          "Đào Nguyên Phổ"
        ],
        "correct": 0,
        "explanation": "Đông Kinh Nghĩa Thục thành lập tháng 3/1907 tại Hàng Đào (Hà Nội) do cụ Lương Văn Can làm Thục trưởng, Nguyễn Quyền làm Giám học.",
        "trapAnalysis": "Lương Văn Can là Thục trưởng (Hiệu trưởng), Nguyễn Quyền là Giám học."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Vận dụng",
        "question": "Nguyên nhân sâu xa dẫn đến sự thất bại của các phong trào yêu nước trước năm 1930 là:",
        "options": [
          "Thiếu tinh thần chiến đấu hy sinh của quần chúng",
          "Thực dân Pháp được trang bị vũ khí hiện đại",
          "Khủng hoảng về giai cấp lãnh đạo và đường lối cứu nước",
          "Địa bàn khởi nghĩa bị chia cắt bởi sông ngòi"
        ],
        "correct": 2,
        "explanation": "Các phong trào yêu nước trước năm 1930 thất bại đều bắt nguồn từ nguyên nhân căn bản: khủng hoảng về đường lối cứu nước đúng đắn và thiếu một giai cấp tiên phong lãnh đạo.",
        "trapAnalysis": "Nhân dân ta vô cùng anh dũng, nhưng thiếu đường lối và giai cấp lãnh đạo tiên tiến (hệ tư tưởng vô sản)."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Văn kiện nào của V.I. Lênin đã chỉ ra cho Nguyễn Ái Quốc con đường giành độc lập tự do chân chính?",
        "options": [
          "Tuyên ngôn của Đảng Cộng sản",
          "Nhà nước và Cách mạng",
          "Sơ thảo Luận cương về vấn đề dân tộc và thuộc địa",
          "Hai sách lược của Đảng dân chủ xã hội"
        ],
        "correct": 2,
        "explanation": "Tháng 7/1920, đọc bản 'Sơ thảo lần thứ nhất những luận cương về vấn đề dân tộc và vấn đề thuộc địa' của Lênin, Người đã tìm thấy chân lý giải phóng dân tộc.",
        "trapAnalysis": "Tuyên ngôn của Đảng CS do Mác - Ăngghen viết (1848); Luận cương về vấn đề dân tộc thuộc địa của Lênin mới là văn kiện quyết định hướng đi của Bác."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Khẳng định nào của Nguyễn Ái Quốc rút ra từ thực tiễn sau khi đọc Luận cương của Lênin?",
        "options": [
          "Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản",
          "Chỉ cần nâng cao dân trí là có thể giành lại độc lập từ thực dân",
          "Cách mạng là việc của sĩ phu và quan lại yêu nước",
          "Dựa vào các nước tư bản phát triển để xây dựng đất nước"
        ],
        "correct": 0,
        "explanation": "Nguyễn Ái Quốc rút ra kết luận bất hủ: 'Muốn cứu nước và giải phóng dân tộc không có con đường nào khác con đường cách mạng vô sản'.",
        "trapAnalysis": "Học thuộc luận điểm nền tảng của Chủ tịch Hồ Chí Minh: chỉ có con đường cách mạng vô sản mới giải phóng triệt để dân tộc."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Năm 1919, bản Yêu sách của nhân dân An Nam do Nguyễn Ái Quốc ký tên được gửi tới đâu?",
        "options": [
          "Hội nghị Versailles (Pháp)",
          "Hội nghị Giơ-ne-vơ (Thụy Sĩ)",
          "Hội nghị I-an-ta (Liên Xô)",
          "Đại hội Quốc tế Cộng sản"
        ],
        "correct": 0,
        "explanation": "Tháng 6/1919, thay mặt Hội những người Việt Nam yêu nước tại Pháp, Nguyễn Ái Quốc gửi bản Yêu sách của nhân dân An Nam tới Hội nghị hòa bình Versailles.",
        "trapAnalysis": "Bản Yêu sách gửi tới Hội nghị Versailles (1919), không nhầm với Giơ-ne-vơ (1954) hay I-an-ta (1945)."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Bản Yêu sách của nhân dân An Nam (1919) đã đưa ra các yêu sách căn bản về:",
        "options": [
          "Trao trả độc lập ngay lập tức cho Việt Nam",
          "Các quyền tự do dân chủ tối thiểu và quyền bình đẳng",
          "Rút toàn bộ quân đội viễn chinh Pháp về nước",
          "Tịch thu toàn bộ ruộng đất chia cho nông dân"
        ],
        "correct": 1,
        "explanation": "Bản Yêu sách gồm 8 điểm, tập trung đòi các quyền tự do dân chủ tối thiểu, bãi bỏ các tòa án đặc biệt và thực hiện quyền bình đẳng về pháp lý cho người bản xứ.",
        "trapAnalysis": "Bản Yêu sách năm 1919 chưa nêu khẩu hiệu đánh đổ chế độ thuộc địa đòi độc lập ngay, mà đòi quyền tự do dân chủ tối thiểu."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Cơ quan báo chí nào được Nguyễn Ái Quốc sáng lập ngày 21/6/1925 tại Quảng Châu?",
        "options": [
          "Báo Le Paria",
          "Báo Thanh Niên",
          "Báo Lao Động",
          "Báo Cờ Giải Phóng"
        ],
        "correct": 1,
        "explanation": "Ngày 21/6/1925, báo Thanh Niên (cơ quan ngôn luận của Hội VN Cách mạng Thanh niên) ra số đầu tiên, đánh dấu sự ra đời của nền báo chí cách mạng Việt Nam.",
        "trapAnalysis": "Ngày 21/6 hàng năm được lấy làm Ngày Báo chí Cách mạng Việt Nam chính từ mốc ra đời của báo Thanh Niên."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Trong tác phẩm 'Đường Kách mệnh' (1927), Nguyễn Ái Quốc xác định lực lượng lãnh đạo cách mệnh là ai?",
        "options": [
          "Giai cấp tư sản dân tộc",
          "Giai cấp công nhân thông qua Đảng cách mệnh",
          "Tầng lớp trí thức và học sinh tiến bộ",
          "Tất cả các cá nhân có lòng yêu nước"
        ],
        "correct": 1,
        "explanation": "Người khẳng định: 'Cách mệnh trước hết phải có cái gì? Trước hết phải có Đảng cách mệnh...', và giai cấp công nhân là người lãnh đạo cách mệnh.",
        "trapAnalysis": "Đảng cách mệnh của giai cấp công nhân giữ vai trò lãnh đạo, không giao quyền lãnh đạo cho tư sản hay trí thức."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Phong trào đấu tranh nào của công nhân năm 1925 đánh dấu bước chuyển từ 'tự phát' sang 'tự giác'?",
        "options": [
          "Bãi công của công nhân Ba Son (Sài Gòn)",
          "Bãi công của công nhân mỏ than Hòn Gai",
          "Bãi công của công nhân đồn điền Phú Riềng",
          "Bãi công của công nhân nhà máy sợi Nam Định"
        ],
        "correct": 0,
        "explanation": "Cuộc bãi công của thợ máy xưởng Ba Son do Tôn Đức Thắng lãnh đạo (8/1925) nhằm trì hoãn tàu chiến Pháp sang đàn áp cách mạng Trung Quốc đánh dấu bước chuyển sang tự giác.",
        "trapAnalysis": "Ba Son (8/1925) thể hiện tính quốc tế vô sản và tổ chức chặt chẽ, đánh dấu bước chuyển từ tự phát sang tự giác."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức An Nam Cộng sản Đảng được thành lập vào tháng 8/1929 tại vùng nào?",
        "options": [
          "Bắc Kỳ",
          "Trung Kỳ",
          "Nam Kỳ",
          "Hải ngoại"
        ],
        "correct": 2,
        "explanation": "An Nam Cộng sản Đảng được thành lập vào tháng 8/1929 tại Nam Kỳ (Sài Gòn), cơ quan ngôn luận là tạp chí Bôn-sê-vích.",
        "trapAnalysis": "Đông Dương CS Đảng ra đời ở Bắc Kỳ (6/1929), An Nam CS Đảng ở Nam Kỳ (8/1929), Đông Dương CS Liên đoàn ở Trung Kỳ."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức Đông Dương Cộng sản Liên đoàn được hình thành từ sự phân hóa của chính đảng nào?",
        "options": [
          "Việt Nam Quốc dân Đảng",
          "Tân Việt Cách mạng Đảng",
          "Tâm Tâm xã",
          "Hội Duy Tân"
        ],
        "correct": 1,
        "explanation": "Đông Dương Cộng sản Liên đoàn ra đời từ sự phân hóa của các đảng viên tiên tiến trong Tân Việt Cách mạng Đảng tại Trung Kỳ (tháng 9/1929).",
        "trapAnalysis": "Tân Việt Cách mạng Đảng phân hóa thành Đông Dương CS Liên đoàn; Hội VN Cách mạng Thanh niên phân hóa thành Đông Dương CS Đảng và An Nam CS Đảng."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Nguyễn Ái Quốc triệu tập Hội nghị hợp nhất các tổ chức cộng sản đầu năm 1930 với tư cách gì?",
        "options": [
          "Chủ tịch Hội Việt Nam Cách mạng Thanh niên",
          "Phái viên của Quốc tế Cộng sản",
          "Tổng Bí thư Đảng Cộng sản Pháp",
          "Đại biểu của Đông Dương Cộng sản Đảng"
        ],
        "correct": 1,
        "explanation": "Nguyễn Ái Quốc chủ động triệu tập và chủ trì Hội nghị hợp nhất với tư cách là phái viên được Quốc tế Cộng sản trao đầy đủ thẩm quyền giải quyết vấn đề Đảng ở Đông Dương.",
        "trapAnalysis": "Tư cách chính thức của Người tại Hội nghị là phái viên của Quốc tế Cộng sản."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Hai đại biểu của Đông Dương Cộng sản Đảng tham dự Hội nghị hợp nhất là ai?",
        "options": [
          "Trịnh Đình Cửu và Nguyễn Đức Cảnh",
          "Châu Văn Liêm và Nguyễn Thiệu",
          "Trần Phú và Ngô Gia Tự",
          "Lê Hồng Phong và Hà Huy Tập"
        ],
        "correct": 0,
        "explanation": "Đại biểu của Đông Dương Cộng sản Đảng gồm Trịnh Đình Cửu và Nguyễn Đức Cảnh; đại biểu An Nam Cộng sản Đảng gồm Châu Văn Liêm và Nguyễn Thiệu.",
        "trapAnalysis": "Trịnh Đình Cửu - Nguyễn Đức Cảnh (Đông Dương CS Đảng); Châu Văn Liêm - Nguyễn Thiệu (An Nam CS Đảng)."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tên gọi chính thức của Đảng được quyết định tại Hội nghị hợp nhất (tháng 2/1930) là:",
        "options": [
          "Đảng Cộng sản Đông Dương",
          "Đảng Cộng sản Việt Nam",
          "Đảng Lao động Việt Nam",
          "Đảng Xã hội Việt Nam"
        ],
        "correct": 1,
        "explanation": "Hội nghị thống nhất lấy tên là Đảng Cộng sản Việt Nam theo đúng đề xuất sáng suốt của Nguyễn Ái Quốc.",
        "trapAnalysis": "Hội nghị tháng 2/1930 lấy tên Đảng Cộng sản Việt Nam; đến tháng 10/1930 mới đổi thành Đảng Cộng sản Đông Dương."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Trong Cương lĩnh tháng 2/1930, thái độ của Đảng đối với tầng lớp tiểu tư sản, trí thức là gì?",
        "options": [
          "Coi là đối tượng cần phải tiêu diệt ngay",
          "Lôi kéo họ đi về phe vô sản giai cấp",
          "Cô lập và tịch thu toàn bộ tài sản",
          "Thờ ơ không cần liên kết hay quan tâm"
        ],
        "correct": 1,
        "explanation": "Cương lĩnh chủ trương: Đảng phải thu phục cho được đại bộ phận giai cấp mình, phải làm cho giai cấp mình lãnh đạo được dân chúng, phải lôi kéo tiểu tư sản, trí thức về phe vô sản.",
        "trapAnalysis": "Cương lĩnh khẳng định tiểu tư sản, trí thức là đồng minh quan trọng cần lôi kéo về phía cách mạng."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Đối với tư sản dân tộc và trung, tiểu địa chủ, Cương lĩnh tháng 2/1930 chủ trương sách lược ra sao?",
        "options": [
          "Đánh đổ triệt để cùng với bọn đại địa chủ",
          "Lợi dụng hoặc ít ra làm cho họ đứng trung lập",
          "Giao quyền lãnh đạo cách mạng cho họ",
          "Tịch thu tất cả ruộng đất và nhà xưởng của họ"
        ],
        "correct": 1,
        "explanation": "Cương lĩnh nêu rõ: đối với phú nông, trung, tiểu địa chủ và tư sản An Nam mà chưa rõ mặt phản cách mạng thì phải lợi dụng, ít nhất cũng làm cho họ trung lập.",
        "trapAnalysis": "Chủ trương của Nguyễn Ái Quốc là phân hóa kẻ thù, lôi kéo hoặc trung lập các tầng lớp yêu nước, tránh đẩy họ sang phía thực dân."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Quy luật hình thành Đảng Cộng sản Việt Nam do Chủ tịch Hồ Chí Minh đúc kết gồm những yếu tố nào?",
        "options": [
          "Chủ nghĩa Mác - Lênin kết hợp với phong trào công nhân",
          "Chủ nghĩa Mác - Lênin kết hợp phong trào công nhân và phong trào yêu nước",
          "Phong trào công nhân kết hợp với phong trào nông dân",
          "Chủ nghĩa Mác - Lênin kết hợp phong trào giải phóng dân tộc thế giới"
        ],
        "correct": 1,
        "explanation": "Quy luật chung: Chủ nghĩa Mác + Phong trào công nhân. Riêng ở Việt Nam có nét độc đáo là kết hợp thêm với 'Phong trào yêu nước' nồng nàn của dân tộc.",
        "trapAnalysis": "Điểm sáng tạo của Hồ Chí Minh là bổ sung thêm thành tố thứ 3: 'Phong trào yêu nước'."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Nguyên nhân kinh tế quốc tế trực tiếp thúc đẩy phong trào cách mạng 1930 - 1931 bùng nổ là:",
        "options": [
          "Khủng hoảng năng lượng toàn cầu",
          "Cuộc đại suy thoái kinh tế thế giới 1929 - 1933",
          "Chiến tranh thương mại giữa Pháp và Đức",
          "Hạn hán và mất mùa kéo dài ở châu Á"
        ],
        "correct": 1,
        "explanation": "Cuộc đại khủng hoảng kinh tế thế giới (1929 - 1933) đã giáng đòn nặng nề vào nước Pháp, thực dân Pháp tăng cường trút gánh nặng lên thuộc địa làm đời sống nhân dân khốn cùng.",
        "trapAnalysis": "Cuộc khủng hoảng kinh tế thừa (1929 - 1933) là nguyên nhân kinh tế trực tiếp làm mâu thuẫn xã hội bùng nổ dữ dội."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Ngày kỷ niệm nào lần đầu tiên được giai cấp công nhân và nhân dân Việt Nam kỷ niệm công khai vào năm 1930?",
        "options": [
          "Ngày Quốc tế Phụ nữ 8/3",
          "Ngày Quốc tế Lao động 1/5",
          "Ngày Cách mạng Tháng Mười 7/11",
          "Ngày Quốc khánh Pháp 14/7"
        ],
        "correct": 1,
        "explanation": "Ngày 1/5/1930, lần đầu tiên công nhân và nông dân Việt Nam mít tinh, biểu tình kỷ niệm ngày Quốc tế Lao động, đòi quyền lợi kinh tế và tự do chính trị.",
        "trapAnalysis": "1/5/1930 là mốc bùng nổ phong trào cách mạng 1930-1931 trên phạm vi cả nước."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Chính quyền Xô viết Nghệ - Tĩnh đã thực hiện chính sách kinh tế quan trọng nào cho dân nghèo?",
        "options": [
          "Miễn hoàn toàn các loại thuế chợ, thuế đò và chia ruộng công",
          "Quốc hữu hóa toàn bộ nhà xưởng xí nghiệp tư bản",
          "Phát tiền mặt cứu tế đồng loạt cho mọi người dân",
          "Cho phép tự do giao thương với thương lái Pháp"
        ],
        "correct": 0,
        "explanation": "Về kinh tế, chính quyền Xô viết bãi bỏ thuế thân, thuế chợ, thuế đò; xóa nợ cho người nghèo và lấy ruộng công chia cho dân cày nghèo.",
        "trapAnalysis": "Chính sách kinh tế thực tiễn của Xô viết là xóa bỏ thuế vô lý và chia lại ruộng đất công tích thu được."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hội nghị Ban Chấp hành Trung ương tháng 10/1930 do ai chủ trì?",
        "options": [
          "Nguyễn Ái Quốc",
          "Trần Phú",
          "Hà Huy Tập",
          "Nguyễn Văn Cừ"
        ],
        "correct": 1,
        "explanation": "Đồng chí Trần Phú (vừa từ Liên Xô về nước) được phân công khởi thảo Luận cương và chủ trì Hội nghị Trung ương tháng 10/1930 tại Hương Cảng.",
        "trapAnalysis": "Hội nghị tháng 10/1930 do Trần Phú chủ trì, Nguyễn Ái Quốc lúc này ở vai trò phái viên Quốc tế Cộng sản."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Luận cương chính trị tháng 10/1930 xác định hai mâu thuẫn giai cấp sâu sắc nhất ở Đông Dương là:",
        "options": [
          "Giữa thợ thuyền với chủ xưởng và giữa nông dân với địa chủ",
          "Giữa công nhân, nông dân với địa chủ phong kiến và đế quốc",
          "Giữa tư sản dân tộc với thực dân Pháp xâm lược",
          "Giữa tiểu tư sản trí thức với các tập đoàn tài phiệt"
        ],
        "correct": 1,
        "explanation": "Luận cương xác định một bên là thợ thuyền, dân cày và các phần tử lao khổ; một bên là địa chủ phong kiến và tư bản đế quốc chủ nghĩa.",
        "trapAnalysis": "Luận cương nhấn mạnh hai nhiệm vụ: đánh đổ phong kiến và đánh đổ đế quốc, hai nhiệm vụ này khăng khít với nhau."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Điểm giống nhau cơ bản giữa Cương lĩnh tháng 2/1930 và Luận cương tháng 10/1930 là gì?",
        "options": [
          "Đều đánh giá cao vai trò cách mạng của tư sản dân tộc",
          "Đều khẳng định công nhân là lực lượng lãnh đạo cách mạng",
          "Đều đặt nhiệm vụ giải phóng dân tộc lên hàng đầu",
          "Đều chủ trương thành lập Mặt trận Việt Minh"
        ],
        "correct": 1,
        "explanation": "Cả hai văn kiện đều xác định giai cấp công nhân thông qua đội tiên phong là Đảng Cộng sản giữ vai trò lãnh đạo cách mạng, lấy liên minh công nông làm nền tảng.",
        "trapAnalysis": "Luận cương 10/1930 không đánh giá cao tư sản dân tộc và chưa đặt giải phóng dân tộc lên hàng đầu; điểm chung then chốt là khẳng định vai trò lãnh đạo của công nhân."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Văn kiện nào được Trung ương Đảng công bố vào tháng 6/1932 để định hướng khôi phục phong trào?",
        "options": [
          "Chương trình hành động của Đảng",
          "Lời kêu gọi toàn quốc kháng chiến",
          "Đề cương về Văn hóa Việt Nam",
          "Chính cương vắn tắt của Đảng"
        ],
        "correct": 0,
        "explanation": "Tháng 6/1932, Đảng ban hành bản 'Chương trình hành động của Đảng Cộng sản Đông Dương' nhằm phục hồi các cơ sở Đảng và phong trào cách mạng sau khủng bố.",
        "trapAnalysis": "Bản 'Chương trình hành động' (6/1932) đóng vai trò then chốt trong giai đoạn củng cố và khôi phục phong trào 1932 - 1935."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đại hội đại biểu lần thứ I của Đảng (3/1935) đã bầu đồng chí nào làm Tổng Bí thư?",
        "options": [
          "Nguyễn Ái Quốc",
          "Trần Phú",
          "Lê Hồng Phong",
          "Hà Huy Tập"
        ],
        "correct": 2,
        "explanation": "Đại hội lần thứ I (tháng 3/1935 tại Ma Cao) đã bầu đồng chí Lê Hồng Phong làm Tổng Bí thư Ban Chấp hành Trung ương Đảng.",
        "trapAnalysis": "Trần Phú hy sinh năm 1931; người được bầu làm Tổng Bí thư tại Đại hội I (1935) là Lê Hồng Phong."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Sự kiện quốc tế nào trực tiếp tạo điều kiện thuận lợi cho phong trào dân chủ 1936 - 1939 ở Việt Nam?",
        "options": [
          "Mặt trận Nhân dân Pháp lên nắm quyền và thi hành chính sách nới lỏng",
          "Chiến tranh thế giới thứ hai bùng nổ ở châu Âu",
          "Liên Xô hoàn thành kế hoạch 5 năm lần thứ nhất",
          "Mỹ tuyên bố mở cửa thị trường với khu vực châu Á"
        ],
        "correct": 0,
        "explanation": "Năm 1936, Mặt trận Nhân dân Pháp lên nắm chính quyền, ban bố các chính sách dân chủ cho thuộc địa như thả tù chính trị, cho phép tự do báo chí, lập hội.",
        "trapAnalysis": "Sự thắng lợi của Mặt trận Nhân dân Pháp (1936) là thời cơ khách quan quyết định cho phong trào dân chủ 1936 - 1939 bùng nổ."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Văn kiện 'Chung quanh vấn đề chiến sách mới' (tháng 10/1936) của Ban Thường vụ TW Đảng đã xác định lại:",
        "options": [
          "Vấn đề chống đế quốc và thổ địa cách mạng không nhất thiết phải làm song song",
          "Cách mạng chỉ tập trung tiêu diệt giai cấp tư sản dân tộc",
          "Phải lập tức tịch thu toàn bộ tài sản của tầng lớp tiểu tư sản",
          "Từ bỏ hoàn toàn mục tiêu giải phóng dân tộc trong tương lai"
        ],
        "correct": 0,
        "explanation": "Văn kiện chỉ rõ: Vấn đề chống đế quốc và giải quyết ruộng đất tuy có quan hệ mật thiết, nhưng tùy tình hình cụ thể, có thể làm từng việc một chứ không nhất thiết phải làm song song cùng lúc.",
        "trapAnalysis": "Văn kiện tháng 10/1936 là bước điều chỉnh chiến lược quan trọng uốn nắn những hạn chế của Luận cương tháng 10/1930."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Cuộc mít tinh công khai khổng lồ kỷ niệm ngày Quốc tế Lao động 1/5/1938 diễn ra tại địa điểm nào ở Hà Nội?",
        "options": [
          "Quảng trường Ba Đình",
          "Nhà hát Lớn Hà Nội",
          "Khu Đấu Xảo",
          "Cột cờ Hà Nội"
        ],
        "correct": 2,
        "explanation": "Cuộc mít tinh kỷ niệm ngày 1/5/1938 diễn ra tại Khu Đấu Xảo (nay là Cung Văn hóa Hữu nghị Việt - Xô, Hà Nội) với hơn 2,5 vạn người tham gia.",
        "trapAnalysis": "Khu Đấu Xảo là địa điểm diễn ra cuộc mít tinh lịch sử 1/5/1938."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tình cảnh của nhân dân Việt Nam sau khi phát xít Nhật xâm lược Đông Dương (tháng 9/1940) được ví là:",
        "options": [
          "Nồi da xáo thịt",
          "Một cổ hai tròng",
          "Ngàn cân treo sợi tóc",
          "Cá nằm trên thớt"
        ],
        "correct": 1,
        "explanation": "Thực dân Pháp câu kết với phát xít Nhật để bóc lột, đẩy nhân dân ta vào cảnh khốn cùng chịu áp bức 'một cổ hai tròng'.",
        "trapAnalysis": "'Một cổ hai tròng' phản ánh sự áp bức kép của cả thực dân Pháp và phát xít Nhật từ tháng 9/1940."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Ba cuộc khởi nghĩa và binh biến vũ trang nổ ra mở đầu cho thời kỳ 1939 - 1941 là:",
        "options": [
          "Bắc Sơn, Nam Kỳ, Binh biến Đô Lương",
          "Yên Bái, Ba Tơ, Hương Khê",
          "Hà Nội, Huế, Sài Gòn",
          "Phú Riềng, Ba Son, Can Lộc"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Bắc Sơn (9/1940), Khởi nghĩa Nam Kỳ (11/1940) và Binh biến Đô Lương (1/1941) là những tiếng súng báo hiệu cho cuộc khởi nghĩa toàn quốc.",
        "trapAnalysis": "Bộ ba mở đầu: Khởi nghĩa Bắc Sơn, Khởi nghĩa Nam Kỳ và Binh biến Đô Lương."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Lá cờ đỏ sao vàng năm cánh lần đầu tiên xuất hiện trong phong trào cách mạng nào?",
        "options": [
          "Phong trào Xô viết Nghệ - Tĩnh (1930)",
          "Cuộc Khởi nghĩa Nam Kỳ (tháng 11/1940)",
          "Cuộc Khởi nghĩa Bắc Sơn (tháng 9/1940)",
          "Cuộc Binh biến Đô Lương (tháng 1/1941)"
        ],
        "correct": 1,
        "explanation": "Lá cờ đỏ sao vàng năm cánh lần đầu tiên tung bay trong cuộc Khởi nghĩa Nam Kỳ bùng nổ ngày 23/11/1940.",
        "trapAnalysis": "Lá cờ đỏ sao vàng xuất hiện trong Khởi nghĩa Nam Kỳ (11/1940), sau đó được Hội nghị TW 8 và Quốc dân Đại hội Tân Trào chọn làm Quốc kỳ."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Sau 30 năm bôn ba tìm đường cứu nước, lãnh tụ Nguyễn Ái Quốc về nước trực tiếp lãnh đạo vào thời gian nào?",
        "options": [
          "28/01/1941",
          "19/05/1941",
          "02/09/1945",
          "19/08/1945"
        ],
        "correct": 0,
        "explanation": "Ngày 28/1/1941 (mùng 2 Tết Tân Tỵ), Nguyễn Ái Quốc bí mật vượt mốc 108 biên giới Việt - Trung về đến Pác Bó (Cao Bằng).",
        "trapAnalysis": "28/1/1941 là ngày Bác về nước; 19/5/1941 là ngày thành lập Mặt trận Việt Minh."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Hội nghị Trung ương 8 (5/1941) chủ trương thành lập chính quyền nhà nước tương lai mang hình thức gì?",
        "options": [
          "Chính quyền Xô viết công nông binh",
          "Nước Việt Nam Dân chủ Cộng hòa",
          "Cộng hòa Liên bang Đông Dương",
          "Quân chủ lập hiến dân quốc"
        ],
        "correct": 1,
        "explanation": "HNTW 8 chủ trương sau khi đánh đuổi Nhật - Pháp sẽ thành lập một nước Việt Nam Dân chủ Cộng hòa với chính phủ của toàn thể nhân dân.",
        "trapAnalysis": "Không lập chính quyền Xô viết chỉ của công nông như năm 1930, mà lập nước Việt Nam Dân chủ Cộng hòa của toàn dân tộc."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Văn kiện 'Đề cương về Văn hóa Việt Nam' (năm 1943) do ai khởi thảo?",
        "options": [
          "Nguyễn Ái Quốc",
          "Trường Chinh",
          "Võ Nguyên Giáp",
          "Phạm Văn Đồng"
        ],
        "correct": 1,
        "explanation": "'Đề cương về Văn hóa Việt Nam' được Tổng Bí thư Trường Chinh soạn thảo và thông qua tại Hội nghị Ban Thường vụ Trung ương Đảng đầu năm 1943.",
        "trapAnalysis": "Tác giả của 'Đề cương về Văn hóa Việt Nam' (1943) là đồng chí Trường Chinh."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Ba nguyên tắc vận động của nền văn hóa mới trong Đề cương Văn hóa năm 1943 gồm:",
        "options": [
          "Dân tộc hóa, Đại chúng hóa, Khoa học hóa",
          "Hiện đại hóa, Xã hội hóa, Toàn cầu hóa",
          "Tự do hóa, Dân chủ hóa, Cách mạng hóa",
          "Cách tân hóa, Quần chúng hóa, Tiến bộ hóa"
        ],
        "correct": 0,
        "explanation": "Ba nguyên tắc chỉ đạo cuộc vận động văn hóa mới của Đảng là: Dân tộc hóa, Đại chúng hóa và Khoa học hóa.",
        "trapAnalysis": "Ghi nhớ bộ ba nguyên tắc kinh điển của Đề cương văn hóa: Dân tộc hóa - Đại chúng hóa - Khoa học hóa."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hai chiến thắng đầu tiên của Đội Việt Nam Tuyên truyền Giải phóng quân diễn ra tại đâu?",
        "options": [
          "Phai Khắt và Nà Ngần",
          "Đông Khê và Thất Khê",
          "Bắc Sơn và Đình Cả",
          "Võ Nhai và Chợ Đồn"
        ],
        "correct": 0,
        "explanation": "Ngay sau khi thành lập, Đội đã mưu trí tiêu diệt hai đồn giặc tại Phai Khắt (25/12/1944) và Nà Ngần (26/12/1944) ở Cao Bằng.",
        "trapAnalysis": "Trận thắng mở màn lịch sử của Quân đội nhân dân Việt Nam là Phai Khắt và Nà Ngần."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tại sao Ban Thường vụ TW Đảng nhận định đêm 9/3/1945 chưa phải thời cơ Tổng khởi nghĩa?",
        "options": [
          "Quân Nhật chưa đảo chính xong quân Pháp",
          "Quân Pháp vẫn còn kháng cự dữ dội ở biên giới",
          "Quân Nhật hoang mang nhưng quân đội ta chưa sẵn sàng",
          "Tầng lớp trung gian chưa ngả hẳn về cách mạng và lực lượng chưa đủ mạnh"
        ],
        "correct": 3,
        "explanation": "Lúc này tuy Nhật đảo chính Pháp gây khủng hoảng chính trị, nhưng quân Nhật còn rất mạnh, tầng lớp trung gian còn hoang mang và lực lượng quần chúng chưa được chuẩn bị đầy đủ.",
        "trapAnalysis": "Thời cơ Tổng khởi nghĩa chỉ thực sự chín muồi khi phát xít Nhật đầu hàng Đồng minh vô điều kiện (tháng 8/1945)."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội nghị Quân sự cách mạng Bắc Kỳ (tháng 4/1945) đã quyết định thống nhất các lực lượng vũ trang thành:",
        "options": [
          "Việt Nam Tuyên truyền Giải phóng quân",
          "Cứu quốc quân",
          "Việt Nam Giải phóng quân",
          "Vệ quốc đoàn"
        ],
        "correct": 2,
        "explanation": "Tháng 4/1945, Hội nghị Quân sự Bắc Kỳ quyết định thống nhất Việt Nam Tuyên truyền Giải phóng quân và Cứu quốc quân thành Việt Nam Giải phóng quân (5/1945).",
        "trapAnalysis": "Sau khi thống nhất năm 1945 mang tên Việt Nam Giải phóng quân; đến năm 1946 mới đổi tên thành Vệ quốc đoàn và Quân đội quốc gia Việt Nam."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Quân lệnh số 1 phát động Tổng khởi nghĩa giành chính quyền được ban bố vào thời điểm nào?",
        "options": [
          "23 giờ ngày 13/8/1945",
          "Sáng ngày 14/8/1945",
          "Trưa ngày 15/8/1945",
          "Tối ngày 19/8/1945"
        ],
        "correct": 0,
        "explanation": "Ngay khi nhận được tin Nhật sắp đầu hàng, 23 giờ ngày 13/8/1945, Ủy ban Khởi nghĩa toàn quốc đã ban bố Quân lệnh số 1 phát động Tổng khởi nghĩa.",
        "trapAnalysis": "Quân lệnh số 1 được ban bố vào đêm 13/8/1945 trước khi Hội nghị toàn quốc khai mạc."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Quốc dân Đại hội Tân Trào (16 - 17/8/1945) đã bầu ai làm Chủ tịch Ủy ban Dân tộc Giải phóng Việt Nam?",
        "options": [
          "Trường Chinh",
          "Hồ Chí Minh",
          "Võ Nguyên Giáp",
          "Huỳnh Thúc Kháng"
        ],
        "correct": 1,
        "explanation": "Đại hội đã nhất trí bầu Ủy ban Dân tộc Giải phóng Việt Nam (tức Chính phủ lâm thời) do đồng chí Hồ Chí Minh làm Chủ tịch.",
        "trapAnalysis": "Hồ Chí Minh được bầu làm Chủ tịch Chính phủ lâm thời tại Đại hội Quốc dân Tân Trào."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Khởi nghĩa giành chính quyền thắng lợi ở Hà Nội diễn ra vào ngày nào?",
        "options": [
          "18/08/1945",
          "19/08/1945",
          "23/08/1945",
          "25/08/1945"
        ],
        "correct": 1,
        "explanation": "Ngày 19/8/1945, cuộc mít tinh khổng lồ tại Nhà hát Lớn Hà Nội chuyển thành biểu tình vũ trang cướp chính quyền thắng lợi rực rỡ.",
        "trapAnalysis": "Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8)."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Bài học kinh nghiệm mang tính quyết định hàng đầu của Cách mạng Tháng Tám năm 1945 là:",
        "options": [
          "Giữ vững đường lối giương cao ngọn cờ độc lập dân tộc",
          "Tranh thủ tối đa viện trợ vũ khí của các nước lớn",
          "Đợi quân Đồng minh vào tước khí giới phát xít Nhật",
          "Thỏa hiệp vô điều kiện với chính phủ bù nhìn"
        ],
        "correct": 0,
        "explanation": "Bài học số một là luôn giương cao ngọn cờ giải phóng dân tộc, đặt lợi ích tối cao của Tổ quốc lên trên hết, tập hợp toàn thể nhân dân.",
        "trapAnalysis": "Bài học cốt tử là tự lực cánh sinh giương cao ngọn cờ độc lập dân tộc, không ỷ lại Đồng minh hay thỏa hiệp."
      }
    ]
  },
  {
    "id": "de_03",
    "code": "MÃ ĐỀ: 103",
    "title": "Đề 03: Lãnh Tụ Nguyễn Ái Quốc & Quá Trình Thành Lập Đảng",
    "description": "Khảo sát toàn diện hành trình cứu nước của Nguyễn Ái Quốc, chuẩn bị về tư tưởng chính trị, tổ chức và sự kiện Hội nghị hợp nhất thành lập Đảng đầu năm 1930.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Sau khi đánh chiếm Nam Kỳ, thực dân Pháp đã biến Nam Kỳ thành vùng có chế độ cai trị nào?",
        "options": [
          "Xứ thuộc địa trực trị",
          "Xứ bảo hộ toàn phần",
          "Xứ nửa bảo hộ tự trị",
          "Đặc khu hành chính mở"
        ],
        "correct": 0,
        "explanation": "Trong Liên bang Đông Dương, thực dân Pháp quy định Nam Kỳ là xứ thuộc địa (chế độ cai trị trực trị), đứng đầu là Thống đốc người Pháp.",
        "trapAnalysis": "Nam Kỳ là 'thuộc địa' trực trị của Pháp, khác với Bắc Kỳ (nửa bảo hộ) và Trung Kỳ (bảo hộ)."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Ba thứ thuế độc quyền khét tiếng mang lại nguồn thu khổng lồ cho thực dân Pháp tại Đông Dương là:",
        "options": [
          "Thuế muối, thuế rượu, thuế thuốc phiện",
          "Thuế đất, thuế thân, thuế đò",
          "Thuế lâm sản, thuế chợ, thuế xuất nhập khẩu",
          "Thuế nông nghiệp, thuế thương nghiệp, thuế cầu đường"
        ],
        "correct": 0,
        "explanation": "Chính quyền thực dân độc quyền khai thác và buôn bán muối, rượu và thuốc phiện; đây là 3 thứ thuế độc quyền gây tội ác tày trời đối với giống nòi dân tộc ta.",
        "trapAnalysis": "Ghi nhớ 'Tam độc' trong chính sách thuế bóc lột của Pháp: Muối - Rượu - Thuốc phiện."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Thành phần xuất thân chủ yếu của giai cấp công nhân Việt Nam là từ đâu?",
        "options": [
          "Tiểu tư sản thành thị",
          "Nông dân bị mất ruộng đất",
          "Thợ thủ công truyền thống",
          "Nho sĩ sa sút phá sản"
        ],
        "correct": 1,
        "explanation": "Giai cấp công nhân Việt Nam phần lớn xuất thân từ nông dân bị đế quốc và địa chủ tước đoạt ruộng đất, buộc phải vào hầm mỏ, nhà máy làm thuê.",
        "trapAnalysis": "Đặc điểm lịch sử quan trọng: Công nhân Việt Nam có nguồn gốc trực tiếp từ nông dân nghèo bị bần cùng hóa."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Vì sao giai cấp công nhân Việt Nam sớm trở thành lực lượng lãnh đạo phong trào cách mạng?",
        "options": [
          "Có số lượng đông đảo chiếm đa số dân cư",
          "Đại biểu cho phương thức sản xuất tiên tiến và tiếp thu chủ nghĩa Mác",
          "Sở hữu nhiều hầm mỏ và đồn điền lớn trong nước",
          "Được chính quyền thực dân Pháp bảo trợ về pháp lý"
        ],
        "correct": 1,
        "explanation": "Công nhân là đại biểu cho lực lượng sản xuất tiến bộ, có tính tổ chức kỷ luật cao, gắn với chủ nghĩa Mác - Lênin và có tinh thần cách mạng triệt để nhất.",
        "trapAnalysis": "Công nhân không đông về số lượng (chỉ khoảng 2% dân số thời bấy giờ) nhưng lãnh đạo nhờ bản chất giai cấp tiên tiến."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Cuộc khởi nghĩa Ba Đình trong phong trào Cần Vương gắn liền với tên tuổi của những ai?",
        "options": [
          "Phạm Bành và Đinh Công Tráng",
          "Nguyễn Thiện Thuật và Nguyễn Cao",
          "Phan Đình Phùng và Cao Thắng",
          "Tống Duy Tân và Cao Điển"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Ba Đình (Thanh Hóa, 1886 - 1887) do hai thủ lĩnh Phạm Bành và Đinh Công Tráng chỉ huy, xây dựng công sự kiên cố chặn bước tiến quân Pháp.",
        "trapAnalysis": "Phạm Bành - Đinh Công Tráng (Ba Đình); Nguyễn Thiện Thuật (Bãi Sậy); Phan Đình Phùng (Hương Khê)."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Phong trào Đông Du (1905 - 1908) của cụ Phan Bội Châu đưa thanh niên Việt Nam sang học tập tại đâu?",
        "options": [
          "Nước Pháp",
          "Nước Nga",
          "Nước Nhật Bản",
          "Nước Trung Hoa"
        ],
        "correct": 2,
        "explanation": "Cụ Phan Bội Châu tổ chức đưa khoảng 200 thanh niên yêu nước sang Nhật Bản học tập quân sự và chính trị nhằm mưu đồ khôi phục đất nước.",
        "trapAnalysis": "Đông Du là đưa thanh niên sang phương Đông (cụ thể là Nhật Bản), không nhầm với sang Pháp hay Nga."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu 'Khai dân trí, chấn dân khí, hậu dân sinh' là chủ trương của ai?",
        "options": [
          "Phan Bội Châu",
          "Phan Châu Trinh",
          "Huỳnh Thúc Kháng",
          "Lương Văn Can"
        ],
        "correct": 1,
        "explanation": "Đây là tư tưởng xuyên suốt của cụ Phan Châu Trinh trong phong trào Duy Tân: mở mang dân trí, thức tỉnh ý thức tự cường và cải thiện dân sinh.",
        "trapAnalysis": "Khẩu hiệu khai dân trí gắn liền với nhà cải cách Phan Châu Trinh."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Người lãnh đạo cuộc Khởi nghĩa Yên Bái tháng 2/1930 của Việt Nam Quốc dân Đảng là ai?",
        "options": [
          "Nguyễn Thái Học",
          "Phó Đức Chính",
          "Nguyễn Khắc Nhu",
          "Đoàn Trần Nghiệp"
        ],
        "correct": 0,
        "explanation": "Chủ tịch Việt Nam Quốc dân Đảng là Nguyễn Thái Học, người trực tiếp chỉ huy cuộc Khởi nghĩa Yên Bái đêm 9 rạng sáng 10/2/1930.",
        "trapAnalysis": "Nguyễn Thái Học là thủ lĩnh tối cao của Việt Nam Quốc dân Đảng."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Hạn chế căn bản nhất của tổ chức Việt Nam Quốc dân Đảng (1927 - 1930) là gì?",
        "options": [
          "Không có tổ chức cơ sở bí mật trong quân đội",
          "Thiếu cương lĩnh vững chắc và xa rời quần chúng nhân dân",
          "Không nhận được viện trợ tài chính từ giai cấp phong kiến",
          "Chỉ hoạt động tập trung ở vùng nông thôn Nam Bộ"
        ],
        "correct": 1,
        "explanation": "Tổ chức này thiếu một đường lối chính trị khoa học, nội bộ phân tán, thiên về ám sát bạo động và không gắn bó mật thiết với đông đảo quần chúng công nông.",
        "trapAnalysis": "Việt Nam Quốc dân Đảng thiên về bạo động liều lĩnh, thiếu cơ sở quần chúng vững chắc."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Cuộc bãi công của công nhân đồn điền cao su Phú Riềng (2/1930) diễn ra ở địa bàn nào?",
        "options": [
          "Bình Phước",
          "Đồng Nai",
          "Tây Ninh",
          "Bình Dương"
        ],
        "correct": 0,
        "explanation": "Phú Riềng Đỏ (nay thuộc tỉnh Bình Phước) là nơi bùng nổ cuộc bãi công anh dũng của hơn 5.000 phu cao su dưới sự lãnh đạo của Chi bộ Đông Dương CS Đảng.",
        "trapAnalysis": "Phú Riềng Đỏ thuộc tỉnh Bình Phước (trước đây thuộc tỉnh Thủ Dầu Một / Sông Bé)."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Khi rời Tổ quốc năm 1911 trên tàu Latouche-Tréville, Nguyễn Tất Thành lấy tên là gì?",
        "options": [
          "Nguyễn Ái Quốc",
          "Văn Ba",
          "Thầu Chín",
          "Nguyễn Sinh Cung"
        ],
        "correct": 1,
        "explanation": "Người thanh niên yêu nước xin làm phụ bếp trên tàu và lấy tên là Văn Ba khi bắt đầu cuộc hành trình vạn dặm cứu nước.",
        "trapAnalysis": "Văn Ba là tên gọi năm 1911; Nguyễn Ái Quốc xuất hiện năm 1919; Thầu Chín là bí danh tại Thái Lan (1928)."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Vì sao Nguyễn Ái Quốc quyết định sang phương Tây tìm đường cứu nước thay vì sang phương Đông?",
        "options": [
          "Để tìm hiểu các nước đế quốc làm giàu bằng cách nào",
          "Để xem nước Pháp và các nước làm thế nào rồi về giúp đồng bào",
          "Để tìm kiếm sự hỗ trợ tài chính từ các nhà tư sản châu Âu",
          "Để học tập kỹ thuật đóng tàu chiến hiện đại"
        ],
        "correct": 1,
        "explanation": "Người nói: 'Tôi muốn đi ra ngoài, xem nước Pháp và các nước khác. Sau khi xem xét họ làm như thế nào, tôi sẽ trở về giúp đồng bào chúng ta'.",
        "trapAnalysis": "Người sang phương Tây để tìm hiểu tận gốc rễ những khẩu hiệu 'Tự do - Bình đẳng - Bác ái' của chính quốc."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tên gọi 'Nguyễn Ái Quốc' lần đầu tiên xuất hiện công khai gắn liền với sự kiện nào?",
        "options": [
          "Đại hội Tours của Đảng Xã hội Pháp (1920)",
          "Gửi Yêu sách của nhân dân An Nam tới Hội nghị Versailles (1919)",
          "Thành lập Hội Liên hiệp thuộc địa tại Paris (1921)",
          "Xuất bản tác phẩm Đường Kách mệnh (1927)"
        ],
        "correct": 1,
        "explanation": "Tháng 6/1919, bản 'Yêu sách của nhân dân An Nam' gửi tới Hội nghị Versailles lần đầu tiên ký tên đại diện là Nguyễn Ái Quốc.",
        "trapAnalysis": "Tên gọi Nguyễn Ái Quốc xuất hiện lần đầu năm 1919 tại Pháp."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Luận điểm cốt lõi nào trong Luận cương của Lênin đã thuyết phục trọn vẹn Nguyễn Ái Quốc?",
        "options": [
          "Đoàn kết vô sản chính quốc với các dân tộc thuộc địa bị áp bức",
          "Tiến hành chiến tranh đế quốc để phân chia lại thị trường",
          "Bảo tồn các quan hệ sản xuất tư bản ở các nước chậm tiến",
          "Ủng hộ các phong trào tôn giáo làm động lực giải phóng"
        ],
        "correct": 0,
        "explanation": "Lênin khẳng định giai cấp vô sản ở các nước tư bản chính quốc phải liên minh mật thiết với phong trào giải phóng của các dân tộc thuộc địa bị áp bức.",
        "trapAnalysis": "Điểm mấu chốt của Luận cương Lênin là gắn liền cách mạng vô sản với cách mạng giải phóng dân tộc thuộc địa."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tác phẩm 'Bản án chế độ thực dân Pháp' của Nguyễn Ái Quốc được xuất bản lần đầu năm 1925 tại đâu?",
        "options": [
          "Paris, Pháp",
          "Quảng Châu, Trung Quốc",
          "Mát-xcơ-va, Liên Xô",
          "Luân Đôn, Anh"
        ],
        "correct": 0,
        "explanation": "Tác phẩm 'Le Procès de la colonisation française' (Bản án chế độ thực dân Pháp) được viết bằng tiếng Pháp và xuất bản tại Paris năm 1925.",
        "trapAnalysis": "Bản án chế độ thực dân Pháp xuất bản ở Paris (1925); Đường Kách mệnh xuất bản ở Quảng Châu (1927)."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức tiền thân trực tiếp chuẩn bị về mặt nhân sự và tổ chức cho Đảng Cộng sản Việt Nam là:",
        "options": [
          "Tâm Tâm xã",
          "Hội Việt Nam Cách mạng Thanh niên",
          "Tân Việt Cách mạng Đảng",
          "Hội Phản đế Đồng minh"
        ],
        "correct": 1,
        "explanation": "Hội Việt Nam Cách mạng Thanh niên (thành lập 6/1925) là tổ chức quá độ, tiền thân trực tiếp chuẩn bị đội ngũ cán bộ và tổ chức cho sự ra đời của Đảng.",
        "trapAnalysis": "Tâm Tâm Xã là tổ chức phôi thai sơ khởi, còn Hội VN Cách mạng Thanh niên là tiền thân trực tiếp nhất."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Vụ mưu sát viên Toàn quyền Mélin tại Sa Điện (Quảng Châu, 1924) gắn với người thanh niên yêu nước nào?",
        "options": [
          "Phạm Hồng Thái",
          "Lê Hồng Sơn",
          "Hồ Tùng Mậu",
          "Lê Văn Phan"
        ],
        "correct": 0,
        "explanation": "Ngày 19/6/1924, người chiến sĩ Phạm Hồng Thái (thành viên Tâm Tâm Xã) ném bom mưu sát Toàn quyền Mélin tại Sa Điện rồi gieo mình xuống dòng Châu Giang hy sinh.",
        "trapAnalysis": "Tiếng bom Sa Điện là của liệt sĩ Phạm Hồng Thái, được ví như cánh én báo hiệu mùa xuân cách mạng."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Bí thư của Chi bộ cộng sản đầu tiên tại số 5D Hàm Long (tháng 3/1929) là đồng chí nào?",
        "options": [
          "Trần Văn Cung",
          "Ngô Gia Tự",
          "Nguyễn Đức Cảnh",
          "Trịnh Đình Cửu"
        ],
        "correct": 0,
        "explanation": "Đồng chí Trần Văn Cung (tức Quốc Anh) được cử làm Bí thư Chi bộ cộng sản đầu tiên tại 5D Hàm Long.",
        "trapAnalysis": "Bí thư chi bộ đầu tiên là Trần Văn Cung, các thành viên gồm Ngô Gia Tự, Nguyễn Đức Cảnh, Trịnh Đình Cửu..."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức Đông Dương Cộng sản Liên đoàn chính thức gia nhập Đảng Cộng sản Việt Nam vào ngày nào?",
        "options": [
          "03/02/1930",
          "07/02/1930",
          "24/02/1930",
          "01/05/1930"
        ],
        "correct": 2,
        "explanation": "Ngày 24/2/1930, Ban Chấp hành Trung ương lâm thời của Đảng họp và quyết nghị chấp thuận Đông Dương Cộng sản Liên đoàn gia nhập Đảng CSVN.",
        "trapAnalysis": "Hội nghị thành lập kết thúc ngày 7/2/1930; đến 24/2/1930 Đông Dương CS Liên đoàn mới chính thức được kết nạp hoàn tất sự hợp nhất."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Cương lĩnh chính trị đầu tiên của Đảng (2/1930) xác định nhiệm vụ kinh tế then chốt là:",
        "options": [
          "Tịch thu toàn bộ sản nghiệp của đế quốc và ruộng đất chia cho dân cày nghèo",
          "Mở rộng kinh tế thị trường tự do buôn bán trao đổi",
          "Quốc hữu hóa toàn bộ các xí nghiệp của tư sản bản địa",
          "Duy trì các đồn điền cao su dưới sự quản lý của chính phủ"
        ],
        "correct": 0,
        "explanation": "Về kinh tế: Tịch thu toàn bộ sản nghiệp lớn của tư bản đế quốc Pháp, tịch thu ruộng đất của đế quốc làm của công và chia cho dân cày nghèo, bỏ sưu thuế, mở mang công nghiệp.",
        "trapAnalysis": "Chỉ tịch thu ruộng đất của đế quốc và đại địa chủ phản bội chia cho dân cày nghèo, chưa tịch thu ruộng đất của trung tiểu địa chủ."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Mối quan hệ giữa cách mạng Việt Nam với cách mạng thế giới được Cương lĩnh tháng 2/1930 xác định là:",
        "options": [
          "Cách mạng Việt Nam hoàn toàn độc lập và không liên quan đến thế giới",
          "Cách mạng Việt Nam là một bộ phận của cách mạng vô sản thế giới",
          "Chỉ liên kết với các nước xã hội chủ nghĩa ở châu Âu",
          "Trông chờ sự giải phóng từ các cường quốc tư bản dân chủ"
        ],
        "correct": 1,
        "explanation": "Cương lĩnh khẳng định: Cách mạng Việt Nam là một bộ phận khăng khít của cách mạng vô sản thế giới, phải thực hiện đoàn kết với các dân tộc bị áp bức và vô sản quốc tế.",
        "trapAnalysis": "Tinh thần quốc tế vô sản: Cách mạng Việt Nam là một bộ phận của cách mạng thế giới."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Văn kiện nào KHÔNG nằm trong Cương lĩnh chính trị đầu tiên do Nguyễn Ái Quốc soạn thảo (2/1930)?",
        "options": [
          "Chánh cương vắn tắt",
          "Sách lược vắn tắt",
          "Chương trình tóm tắt",
          "Luận cương chính trị"
        ],
        "correct": 3,
        "explanation": "'Luận cương chính trị' là văn kiện do Trần Phú soạn thảo được thông qua vào tháng 10/1930, không thuộc Cương lĩnh tháng 2/1930.",
        "trapAnalysis": "Cương lĩnh tháng 2/1930 gồm: Chánh cương vắn tắt, Sách lược vắn tắt, Chương trình tóm tắt, Điều lệ vắn tắt."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Yếu tố quyết định bảo đảm thắng lợi của cách mạng Việt Nam theo Cương lĩnh tháng 2/1930 là:",
        "options": [
          "Sự viện trợ vũ khí dồi dào từ các nước lớn",
          "Sự lãnh đạo đúng đắn của Đảng Cộng sản Việt Nam",
          "Số lượng thành viên đông đảo của giai cấp nông dân",
          "Sự suy yếu tự nhiên của các tập đoàn thực dân"
        ],
        "correct": 1,
        "explanation": "Cương lĩnh chỉ rõ: Đảng là đội tiên phong của giai cấp vô sản, phải có năng lực lãnh đạo quần chúng thì cách mạng mới giành được thắng lợi triệt để.",
        "trapAnalysis": "Sự lãnh đạo của Đảng là nhân tố quyết định hàng đầu mọi thắng lợi của cách mạng Việt Nam."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Chữ 'thổ địa cách mạng' trong Cương lĩnh tháng 2/1930 có nghĩa là gì?",
        "options": [
          "Cách mạng về đo đạc địa lý và phân định ranh giới",
          "Cách mạng ruộng đất giải quyết quyền lợi cho nông dân",
          "Khai hoang mở rộng diện tích đất lâm nghiệp",
          "Chuyển đổi đất nông nghiệp sang đất công nghiệp"
        ],
        "correct": 1,
        "explanation": "'Thổ địa cách mạng' chính là cuộc cách mạng ruộng đất, đánh đổ giai cấp địa chủ phong kiến để mang lại ruộng cày cho người nông dân nghèo.",
        "trapAnalysis": "'Thổ địa' ở đây là ruộng đất, tức cách mạng ruộng đất chống phong kiến."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Tính chất sáng tạo nổi bật nhất của Cương lĩnh tháng 2/1930 so với lý luận giáo điều thời kỳ đó là:",
        "options": [
          "Tập hợp rộng rãi mọi lực lượng dân tộc yêu nước thay vì cô lập họ",
          "Từ bỏ đấu tranh bạo lực vũ trang chuyển sang nghị trường",
          "Khẳng định cách mạng vô sản chỉ nổ ra ở các nước công nghiệp",
          "Đặt nhiệm vụ chống phong kiến lên trên nhiệm vụ chống đế quốc"
        ],
        "correct": 0,
        "explanation": "Nguyễn Ái Quốc đã vận dụng sáng tạo chủ nghĩa Mác khi chủ trương tập hợp rộng rãi tiểu tư sản, trí thức, trung tiểu địa chủ và tư sản dân tộc yêu nước, trong khi Quốc tế Cộng sản lúc đó coi họ là thù địch.",
        "trapAnalysis": "Điểm sáng tạo nhất là sách lược đại đoàn kết dân tộc, không rơi vào tả khuynh cô lập lực lượng."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Cuộc biểu tình vũ trang của nông dân huyện Hưng Nguyên (Nghệ An) diễn ra vào ngày lịch sử nào?",
        "options": [
          "01/05/1930",
          "12/09/1930",
          "20/10/1930",
          "01/05/1931"
        ],
        "correct": 1,
        "explanation": "Ngày 12/9/1930, khoảng 8.000 nông dân Hưng Nguyên biểu tình kéo về thành phố Vinh, thực dân Pháp cho máy bay ném bom làm hàng trăm người chết, thổi bùng ngọn lửa Xô viết Nghệ - Tĩnh.",
        "trapAnalysis": "Ngày 12/9 được xem là ngày tưởng niệm Xô viết Nghệ - Tĩnh."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Chính quyền Xô viết Nghệ - Tĩnh đã thực hiện chính sách văn hóa xã hội tiến bộ nào?",
        "options": [
          "Bắt buộc toàn dân học tiếng Pháp để hòa nhập",
          "Mở các lớp dạy chữ Quốc ngữ, xóa bỏ hủ tục mê tín dị đoan",
          "Xây dựng các viện nghiên cứu khoa học hàn lâm",
          "Chỉ đạo in ấn sách báo tôn giáo truyền thống"
        ],
        "correct": 1,
        "explanation": "Chính quyền Xô viết mở rộng dạy chữ Quốc ngữ, bài trừ rượu chè, cờ bạc, hủ tục phong kiến, xây dựng nếp sống văn minh mới.",
        "trapAnalysis": "Tiến bộ văn hóa nổi bật của Xô viết là phổ biến chữ Quốc ngữ và xóa bỏ các tệ nạn mê tín."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Quốc tế Cộng sản chính thức công nhận Đảng Cộng sản Đông Dương là phân bộ độc lập vào thời gian nào?",
        "options": [
          "Tháng 2/1930",
          "Tháng 10/1930",
          "Tháng 4/1931",
          "Tháng 3/1935"
        ],
        "correct": 2,
        "explanation": "Tháng 4/1931, tại Hội nghị lần thứ 11 Ban Chấp hành Quốc tế Cộng sản, Đảng Cộng sản Đông Dương được công nhận là một phân bộ độc lập trực thuộc Quốc tế Cộng sản.",
        "trapAnalysis": "Tháng 4/1931 đánh dấu vị thế chính thức của Đảng ta trong phong trào cộng sản thế giới."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Vì sao phong trào 1930 - 1931 được đánh giá là cuộc diễn tập đầu tiên chuẩn bị cho CMT8?",
        "options": [
          "Đã thành lập được quân đội chính quy hiện đại",
          "Khẳng định vai trò lãnh đạo của Đảng và sức mạnh liên minh công nông",
          "Đã giải phóng hoàn toàn hai tỉnh Nghệ An và Hà Tĩnh",
          "Đã buộc Pháp phải ký hiệp định rút quân khỏi miền Bắc"
        ],
        "correct": 1,
        "explanation": "Phong trào đã rèn luyện đội ngũ cán bộ, tôi luyện quần chúng và khẳng định trên thực tế năng lực lãnh đạo của Đảng cùng sức mạnh của liên minh công nông.",
        "trapAnalysis": "Ý nghĩa là cuộc tập dượt đầu tiên rèn luyện Đảng và quần chúng chuẩn bị cho khởi nghĩa sau này."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Trong Luận cương tháng 10/1930, mối quan hệ giữa hai nhiệm vụ chống đế quốc và phong kiến được nhìn nhận:",
        "options": [
          "Hai nhiệm vụ có quan hệ khăng khít không thể tách rời nhau",
          "Nhiệm vụ chống đế quốc phải đặt lên trước nhiệm vụ ruộng đất",
          "Nhiệm vụ chống phong kiến chỉ cần làm sau khi giải phóng dân tộc",
          "Chỉ coi trọng chống đế quốc, coi nhẹ đấu tranh chống địa chủ"
        ],
        "correct": 0,
        "explanation": "Luận cương cho rằng vấn đề thổ địa là cái cốt của cách mạng tư sản dân quyền, gắn chặt hữu cơ không thể tách rời với nhiệm vụ chống đế quốc.",
        "trapAnalysis": "Luận cương xem hai nhiệm vụ khăng khít, nhưng trên thực tế lại coi thổ địa cách mạng là cái cốt, chưa tách biệt ưu tiên."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Ban Lãnh đạo hải ngoại của Đảng Cộng sản Đông Dương được thành lập năm 1934 do ai đứng đầu?",
        "options": [
          "Lê Hồng Phong",
          "Hà Huy Tập",
          "Phùng Chí Kiên",
          "Nguyễn Ái Quốc"
        ],
        "correct": 0,
        "explanation": "Đồng chí Lê Hồng Phong được cử làm người đứng đầu Ban Lãnh đạo hải ngoại của Đảng (thành lập năm 1934 tại Thượng Hải).",
        "trapAnalysis": "Lê Hồng Phong là người đứng đầu Ban Lãnh đạo hải ngoại chỉ đạo phục hồi các cơ sở Đảng trong nước."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu đấu tranh chủ yếu của Đảng trong phong trào 1936 - 1939 là:",
        "options": [
          "Đánh đuổi phát xít Nhật và bè lũ tay sai",
          "Độc lập dân tộc và ruộng đất cho dân cày",
          "Chống phát xít, chống chiến tranh, đòi tự do cơm áo hòa bình",
          "Thành lập chính quyền Xô viết trên toàn cõi Đông Dương"
        ],
        "correct": 2,
        "explanation": "Khẩu hiệu thời kỳ 1936 - 1939 tập trung vào các yêu sách cấp bách: 'Chống phát xít, chống chiến tranh, chống phản động thuộc địa, đòi tự do, cơm áo, hòa bình'.",
        "trapAnalysis": "Khẩu hiệu đòi tự do, dân chủ, cơm áo, hòa bình là đặc trưng số một của giai đoạn 1936 - 1939."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Phong trào 'Đông Dương Đại hội' năm 1936 được tổ chức nhằm mục đích gì?",
        "options": [
          "Thu thập nguyện vọng dân chúng gửi cho Phái đoàn điều tra Pháp",
          "Bầu ra quốc hội lâm thời cho ba nước Đông Dương",
          "Phát động bãi công vũ trang lật đổ chính quyền thuộc địa",
          "Chuẩn bị đón tiếp các phái đoàn Quốc tế Cộng sản sang thăm"
        ],
        "correct": 0,
        "explanation": "Phong trào Đông Dương Đại hội lập các Ủy ban hành động thu thập 'dân nguyện' (nguyện vọng nhân dân) để trình lên Phái đoàn điều tra của Quốc hội Pháp sang Đông Dương.",
        "trapAnalysis": "Mục đích là thu thập dân nguyện và thức tỉnh quần chúng đòi cải cách dân sinh dân chủ."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Mặt trận thống nhất được Đảng chủ trương thành lập trong phong trào 1936 - 1939 có tên gọi chính thức là:",
        "options": [
          "Mặt trận Phản đế Đồng minh",
          "Mặt trận Dân chủ Đông Dương",
          "Mặt trận Việt Minh",
          "Mặt trận Liên Việt"
        ],
        "correct": 1,
        "explanation": "Ban đầu mang tên Mặt trận Thống nhất Nhân dân Phản đế Đông Dương (1936), sau đó tháng 3/1938 đổi thành Mặt trận Dân chủ Đông Dương.",
        "trapAnalysis": "Mặt trận Dân chủ Đông Dương là tên gọi chính thức của mặt trận thời kỳ 1936 - 1939."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Tờ báo công khai nào của Đảng xuất bản tại Hà Nội trong phong trào Dân chủ 1936 - 1939?",
        "options": [
          "Báo Búa Liềm",
          "Báo Tiền Phong và Dân Chúng",
          "Báo Cứu Quốc",
          "Báo Sự Thật"
        ],
        "correct": 1,
        "explanation": "Đảng xuất bản nhiều tờ báo công khai tiếng Việt và tiếng Pháp như Tiền Phong, Dân Chúng, Lao Động, Tin Tức... để tuyên truyền rộng rãi đường lối của Đảng.",
        "trapAnalysis": "Tiền Phong, Dân Chúng, Tin Tức là báo công khai thời kỳ 1936-1939; Cứu Quốc là báo của Mặt trận Việt Minh sau 1941."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Vận dụng",
        "question": "Ý nghĩa lớn nhất của phong trào dân chủ 1936 - 1939 đối với Cách mạng Tháng Tám năm 1945 là:",
        "options": [
          "Xây dựng được một đội quân chính quy hùng hậu",
          "Tập hợp và giáo dục chính trị cho hàng triệu quần chúng nhân dân",
          "Buộc chính phủ Pháp trao trả quyền tự trị cho Việt Nam",
          "Xóa bỏ hoàn toàn bộ máy chính quyền phong kiến cấp xã"
        ],
        "correct": 1,
        "explanation": "Phong trào đã lôi cuốn hàng triệu người thuộc nhiều tầng lớp tham gia trận tập dượt chính trị to lớn, xây dựng đội quân chính trị hùng hậu cho Tổng khởi nghĩa.",
        "trapAnalysis": "Đây là cuộc tập dượt thứ hai chuẩn bị lực lượng chính trị quần chúng cho Cách mạng Tháng Tám."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Chiến tranh thế giới thứ hai chính thức bùng nổ vào ngày tháng năm nào?",
        "options": [
          "01/09/1939",
          "22/06/1941",
          "07/12/1941",
          "09/03/1945"
        ],
        "correct": 0,
        "explanation": "Chiến tranh thế giới thứ hai bùng nổ ngày 1/9/1939 khi phát xít Đức tấn công Ba Lan, thực dân Pháp lập tức chuyển sang chế độ cai trị thời chiến ở thuộc địa.",
        "trapAnalysis": "Thế chiến 2 bùng nổ ngày 1/9/1939; 22/6/1941 Đức đánh Liên Xô; 7/12/1941 Nhật đánh Trân Châu Cảng."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tại Hội nghị Trung ương 6 (11/1939), khẩu hiệu 'cách mạng ruộng đất' được điều chỉnh như thế nào?",
        "options": [
          "Tiếp tục thực hiện triệt để tịch thu ruộng đất chia đều",
          "Tạm gác lại, chỉ tịch thu ruộng đất của đế quốc và tay sai phản bội",
          "Xóa bỏ hoàn toàn và cam kết không đụng chạm đến ruộng đất",
          "Cho phép nông dân mua lại ruộng đất từ tay chủ đồn điền Pháp"
        ],
        "correct": 1,
        "explanation": "Đảng chủ trương tạm gác khẩu hiệu tịch thu ruộng đất của toàn bộ giai cấp địa chủ, chỉ tịch thu ruộng đất của đế quốc và tay sai phản bội Tổ quốc để tập trung lực lượng chống đế quốc.",
        "trapAnalysis": "Tạm gác khẩu hiệu cách mạng ruộng đất là bước đột phá chiến lược mở đường cho liên minh toàn dân tộc."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cuộc Khởi nghĩa Bắc Sơn (27/9/1940) nổ ra tại tỉnh nào?",
        "options": [
          "Lạng Sơn",
          "Cao Bằng",
          "Thái Nguyên",
          "Tuyên Quang"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Bắc Sơn nổ ra tại châu Bắc Sơn (thuộc tỉnh Lạng Sơn) nhân cơ hội quân Pháp hoang mang tháo chạy trước sự tiến công của quân Nhật.",
        "trapAnalysis": "Bắc Sơn thuộc tỉnh Lạng Sơn; căn cứ Bắc Sơn - Võ Nhai nối liền hai tỉnh Lạng Sơn và Thái Nguyên."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Căn cứ địa cách mạng nào được đồng chí Nguyễn Ái Quốc chọn xây dựng đầu tiên sau khi về nước (1941)?",
        "options": [
          "Căn cứ địa Cao Bằng",
          "Căn cứ địa Bắc Sơn - Võ Nhai",
          "Khu giải phóng Tân Trào",
          "Chiến khu Ba Tơ"
        ],
        "correct": 0,
        "explanation": "Người chọn Cao Bằng vì nơi đây có địa thế 'tiến khả dĩ công, thoái khả dĩ thủ', phong trào quần chúng tốt, thuận lợi nối liền với hậu phương quốc tế.",
        "trapAnalysis": "Cao Bằng là căn cứ địa đầu tiên do Bác trực tiếp chỉ đạo xây dựng từ đầu năm 1941."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tên gọi các đoàn thể quần chúng trong Mặt trận Việt Minh đều gắn với hai chữ gì?",
        "options": [
          "Cứu quốc",
          "Giải phóng",
          "Đồng minh",
          "Tiến bộ"
        ],
        "correct": 0,
        "explanation": "Các đoàn thể quần chúng trong Mặt trận Việt Minh đều mang tên gọi 'Cứu quốc': Hội Nông dân Cứu quốc, Hội Công nhân Cứu quốc, Hội Thanh niên Cứu quốc, Hội Phụ nữ Cứu quốc...",
        "trapAnalysis": "Đặc trưng của Mặt trận Việt Minh là các tổ chức đoàn thể đều mang tên 'Cứu quốc'."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cơ quan ngôn luận chính thức của Tổng bộ Việt Minh xuất bản năm 1942 là tờ báo nào?",
        "options": [
          "Báo Nhân Dân",
          "Báo Cứu Quốc",
          "Báo Cờ Giải Phóng",
          "Báo Quân Đội Nhân Dân"
        ],
        "correct": 1,
        "explanation": "Báo Cứu Quốc là cơ quan tuyên truyền chính thức của Tổng bộ Việt Minh, do Tổng bộ trực tiếp chỉ đạo xuất bản từ năm 1942.",
        "trapAnalysis": "Báo Cứu Quốc là của Mặt trận Việt Minh; Báo Cờ Giải Phóng là cơ quan của Ban Trung ương Đảng Cộng sản Đông Dương."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tác phẩm lịch sử bằng thơ diễn ca do Nguyễn Ái Quốc biên soạn năm 1942 để giáo dục lòng yêu nước là:",
        "options": [
          "Nhật ký trong tù",
          "Lịch sử nước ta",
          "Đường Kách mệnh",
          "Tuyên ngôn Độc lập"
        ],
        "correct": 1,
        "explanation": "Tác phẩm 'Lịch sử nước ta' (1942) mở đầu bằng hai câu thơ bất hủ: 'Dân ta phải biết sử ta / Cho tường gốc tích nước nhà Việt Nam'.",
        "trapAnalysis": "'Lịch sử nước ta' là tác phẩm diễn ca lịch sử; 'Nhật ký trong tù' được viết khi Người bị giam ở Quảng Tây (1942 - 1943)."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Hội nghị Ban Thường vụ TW Đảng ra Chỉ thị 'Nhật - Pháp bắn nhau' (12/3/1945) được tổ chức tại đâu?",
        "options": [
          "Làng Đình Bảng (Từ Sơn, Bắc Ninh)",
          "Lán Khuổi Nặm (Pác Bó, Cao Bằng)",
          "Đình Tân Trào (Sơn Dương, Tuyên Quang)",
          "Hiệp Hòa (Bắc Giang)"
        ],
        "correct": 0,
        "explanation": "Hội nghị họp tại làng Đình Bảng (Từ Sơn, Bắc Ninh) do đồng chí Trường Chinh chủ trì ngay trong những ngày Nhật nổ súng đảo chính Pháp.",
        "trapAnalysis": "Đình Bảng (Từ Sơn, Bắc Ninh) là nơi họp ban hành Chỉ thị lịch sử 12/3/1945."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Hình thái của cuộc khởi nghĩa được Ban Thường vụ TW Đảng vạch ra trong Chỉ thị 12/3/1945 là:",
        "options": [
          "Đi từ khởi nghĩa từng phần, chiến tranh du kích cục bộ tiến lên Tổng khởi nghĩa",
          "Đánh đòn phủ đầu đồng loạt vào các thành phố cảng lớn",
          "Bao vây phong tỏa kinh tế rồi tiến hành thương thuyết hòa bình",
          "Chờ đợi các đợt ném bom của quân đội Đồng minh rồi tiếp quản"
        ],
        "correct": 0,
        "explanation": "Chỉ thị xác định phát động khởi nghĩa từng phần và chiến tranh du kích cục bộ ở những nơi có điều kiện, tạo đà làm tiền đề cho Tổng khởi nghĩa.",
        "trapAnalysis": "Phương châm khởi nghĩa: Đi từ khởi nghĩa từng phần tiến lên Tổng khởi nghĩa."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Địa phương nào được Hồ Chí Minh chọn làm 'Thủ đô Khu giải phóng' vào mùa hè năm 1945?",
        "options": [
          "Pác Bó (Cao Bằng)",
          "Tân Trào (Tuyên Quang)",
          "Định Hóa (Thái Nguyên)",
          "Bắc Sơn (Lạng Sơn)"
        ],
        "correct": 1,
        "explanation": "Tháng 5/1945, Hồ Chí Minh chuyển từ Pác Bó về Tân Trào (Sơn Dương, Tuyên Quang) và chỉ đạo chọn Tân Trào làm thủ đô lâm thời của Khu giải phóng.",
        "trapAnalysis": "Tân Trào là thủ đô Khu giải phóng Việt Bắc thời kỳ tiền khởi nghĩa Tháng Tám."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Thời cơ ngàn năm có một của Cách mạng Tháng Tám năm 1945 xuất hiện trong khoảng thời gian nào?",
        "options": [
          "Từ khi Nhật đảo chính Pháp đến khi phát xít Đức đầu hàng",
          "Từ khi Nhật đầu hàng Đồng minh đến trước khi quân Đồng minh vào Đông Dương",
          "Sau khi quân Đồng minh đã vào giải giáp hoàn tất quân đội Nhật",
          "Khi Chủ tịch Hồ Chí Minh về nước tại Pác Bó Cao Bằng"
        ],
        "correct": 1,
        "explanation": "Thời cơ ngàn vàng xuất hiện từ ngày 15/8/1945 (Nhật đầu hàng) và khép lại khi quân Đồng minh (quân Anh và quân Tưởng) đặt chân vào nước ta.",
        "trapAnalysis": "Thời cơ chỉ tồn tại trong khoảng nửa tháng ngắn ngủi: Sau khi Nhật đầu hàng và trước khi quân Đồng minh vào."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Khởi nghĩa giành chính quyền ở Huế thắng lợi vào ngày nào trong năm 1945?",
        "options": [
          "19/08/1945",
          "23/08/1945",
          "25/08/1945",
          "30/08/1945"
        ],
        "correct": 1,
        "explanation": "Ngày 23/8/1945, nhân dân Thừa Thiên Huế dưới sự lãnh đạo của Ủy ban Khởi nghĩa đã nổi dậy giành chính quyền thắng lợi trọn vẹn.",
        "trapAnalysis": "Khởi nghĩa ở Huế thắng lợi ngày 23/8/1945 (ngày 30/8 là Bảo Đại thoái vị)."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Khởi nghĩa giành chính quyền ở Sài Gòn thắng lợi vào ngày nào trong năm 1945?",
        "options": [
          "19/08/1945",
          "23/08/1945",
          "25/08/1945",
          "28/08/1945"
        ],
        "correct": 2,
        "explanation": "Ngày 25/8/1945, hàng triệu nhân dân Sài Gòn - Chợ Lớn và các tỉnh lân cận đã nhất tề đứng lên giành chính quyền về tay nhân dân.",
        "trapAnalysis": "Ba mốc trọng yếu: Hà Nội 19/8, Huế 23/8, Sài Gòn 25/8."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Nguyên nhân chủ quan quyết định nhất làm nên thắng lợi của Cách mạng Tháng Tám năm 1945 là:",
        "options": [
          "Phát xít Nhật bị quân Đồng minh đánh bại trên chiến trường thế giới",
          "Đảng Cộng sản lãnh đạo đúng đắn với đường lối cách mạng sáng tạo",
          "Sự sụp đổ nhanh chóng của chính phủ bù nhìn Trần Trọng Kim",
          "Viện trợ quân sự của các nước trong khối xã hội chủ nghĩa"
        ],
        "correct": 1,
        "explanation": "Sự lãnh đạo đúng đắn, sáng suốt và tài tình của Đảng Cộng sản Đông Dương đứng đầu là Chủ tịch Hồ Chí Minh là nhân tố chủ quan quyết định nhất.",
        "trapAnalysis": "Nhật đầu hàng là điều kiện khách quan thuận lợi; nhân tố chủ quan quyết định nhất luôn là sự lãnh đạo của Đảng."
      }
    ]
  },
  {
    "id": "de_04",
    "code": "MÃ ĐỀ: 104",
    "title": "Đề 04: Cương Lĩnh 2/1930, Luận Cương 10/1930 & Cao Trào 1930 - 1935",
    "description": "So sánh đối chiếu Cương lĩnh 2/1930 và Luận cương 10/1930, đỉnh cao Xô viết Nghệ - Tĩnh và giai đoạn đấu tranh kiên cường phục hồi hệ thống tổ chức Đảng.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Trước khi thực dân Pháp xâm lược, xã hội phong kiến Việt Nam mang tính chất gì?",
        "options": [
          "Xã hội phong kiến độc lập tự chủ",
          "Xã hội thuộc địa nửa phong kiến",
          "Xã hội tiền tư bản chủ nghĩa phát triển",
          "Xã hội nông nghiệp phụ thuộc phương Tây"
        ],
        "correct": 0,
        "explanation": "Trước năm 1858, Việt Nam là một quốc gia độc lập, có chủ quyền hoàn chỉnh dưới sự thống trị của chế độ phong kiến nhà Nguyễn.",
        "trapAnalysis": "Trước 1858 là xã hội phong kiến độc lập; sau các hiệp ước đầu hàng mới trở thành thuộc địa nửa phong kiến."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Chính sách độc quyền kinh tế của thực dân Pháp đã làm cho nền kinh tế Việt Nam có đặc điểm gì?",
        "options": [
          "Phát triển cân đối giữa nông nghiệp và công nghiệp nặng",
          "Lạc hậu, què quặt và lệ thuộc hoàn toàn vào kinh tế Pháp",
          "Trở thành trung tâm công nghiệp chế biến của Đông Nam Á",
          "Tự cấp tự túc hoàn toàn không giao thương quốc tế"
        ],
        "correct": 1,
        "explanation": "Chính sách của Pháp chỉ tập trung khai thác khoáng sản và đồn điền, kìm hãm công nghiệp nặng, làm kinh tế Việt Nam què quặt, nghèo nàn và lệ thuộc.",
        "trapAnalysis": "Đặc trưng kinh tế Việt Nam thời thuộc địa: lạc hậu, què quặt, phụ thuộc vào mẫu quốc."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Hai giai cấp mới xuất hiện trong xã hội Việt Nam từ các cuộc khai thác thuộc địa của Pháp là:",
        "options": [
          "Công nhân và tư sản",
          "Địa chủ và nông dân",
          "Nông dân và thợ thủ công",
          "Sĩ phu và quan lại"
        ],
        "correct": 0,
        "explanation": "Địa chủ và nông dân là hai giai cấp cũ vốn có; công nhân và tư sản là hai giai cấp mới ra đời gắn liền với phương thức sản xuất tư bản do Pháp du nhập.",
        "trapAnalysis": "Hai giai cấp mới: Công nhân (ra đời khai thác lần 1) và Tư sản (hình thành rõ nét khai thác lần 2)."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Tầng lớp tiểu tư sản Việt Nam (học sinh, sinh viên, trí thức...) có thái độ chính trị ra sao?",
        "options": [
          "Hoàn toàn thỏa hiệp cấu kết với thực dân Pháp",
          "Có tinh thần dân tộc hăng hái, nhạy bén với thời cuộc",
          "Lãnh đạo phong trào giải phóng dân tộc thành công",
          "Không quan tâm tới vận mệnh độc lập của đất nước"
        ],
        "correct": 1,
        "explanation": "Tiểu tư sản bị thực dân bạc đãi, khinh rẻ, có tinh thần yêu nước nồng nàn, tiếp thu nhanh các luồng tư tưởng mới và là lực lượng cách mạng quan trọng.",
        "trapAnalysis": "Tiểu tư sản hăng hái và yêu nước nhưng do địa vị kinh tế bấp bênh nên không thể đóng vai trò giai cấp lãnh đạo."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Vị thủ lĩnh chỉ huy cuộc khởi nghĩa Bãi Sậy trong phong trào Cần Vương là ai?",
        "options": [
          "Nguyễn Thiện Thuật",
          "Phạm Bành",
          "Phan Đình Phùng",
          "Tống Duy Tân"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Bãi Sậy (Hưng Yên, 1883 - 1892) do Nguyễn Thiện Thuật (Tán thuật Nguyễn Thiện Thuật) lãnh đạo dựa vào địa thế đầm lầy lau sậy hiểm trở.",
        "trapAnalysis": "Nguyễn Thiện Thuật gắn với Khởi nghĩa Bãi Sậy ở đồng bằng Bắc Bộ."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Tổ chức Việt Nam Quang phục Hội do Phan Bội Châu thành lập năm 1912 đề ra tôn chỉ mục đích gì?",
        "options": [
          "Khôi phục Việt Nam, thành lập nước Cộng hòa Dân quốc",
          "Thiết lập nền quân chủ lập hiến do Cường Để đứng đầu",
          "Hợp tác với chính quyền thực dân Pháp để khai hóa văn minh",
          "Tiến hành cách mạng vô sản theo mô hình Cách mạng Tháng Mười"
        ],
        "correct": 0,
        "explanation": "Năm 1912, dưới ảnh hưởng của Cách mạng Tân Hợi (Trung Quốc), Phan Bội Châu giải tán Hội Duy Tân để lập Việt Nam Quang phục Hội với tôn chỉ: 'Đánh đuổi giặc Pháp, khôi phục nước Việt Nam, thành lập nước Cộng hòa Dân quốc'.",
        "trapAnalysis": "Năm 1904 chủ trương Quân chủ lập hiến, nhưng đến năm 1912 Việt Nam Quang phục Hội chuyển sang 'Cộng hòa Dân quốc'."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Phong trào chống sưu thuế ở Trung Kỳ nổ ra dữ dội nhất vào năm nào?",
        "options": [
          "Năm 1904",
          "Năm 1908",
          "Năm 1917",
          "Năm 1930"
        ],
        "correct": 1,
        "explanation": "Năm 1908, phong trào cúp tóc, chống đi xâu, giảm sưu thuế bùng nổ mạnh mẽ ở Quảng Nam, sau đó lan rộng khắp các tỉnh Trung Kỳ.",
        "trapAnalysis": "Phong trào chống thuế Trung Kỳ gắn liền với năm 1908 và tinh thần Duy Tân."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Câu nói nổi tiếng 'Không thành công cũng thành nhân' trước khi lên máy chém là của ai?",
        "options": [
          "Nguyễn Thái Học",
          "Phan Bội Châu",
          "Hoàng Hoa Thám",
          "Trần Phú"
        ],
        "correct": 0,
        "explanation": "Đồng chí Nguyễn Thái Học - lãnh tụ Việt Nam Quốc dân Đảng - đã khẳng định khí phách yêu nước trước khi bị thực dân Pháp hành quyết sau Khởi nghĩa Yên Bái.",
        "trapAnalysis": "Nguyễn Thái Học là tác giả câu nói 'Không thành công cũng thành nhân' (1930)."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Thất bại của phong trào Cần Vương (1885 - 1896) đã chứng minh điều gì?",
        "options": [
          "Hệ tư tưởng phong kiến không còn đủ sức lãnh đạo sự nghiệp cứu nước",
          "Nhân dân không còn tha thiết với nền độc lập dân tộc",
          "Khuynh hướng vô sản đã giành được vị trí thống trị tuyệt đối",
          "Giai cấp tư sản Việt Nam đã làm chủ hoàn toàn xã hội"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Hương Khê kết thúc cũng là lúc phong trào Cần Vương chấm dứt, chứng tỏ ngọn cờ phong kiến phò vua đã lỗi thời trước sứ mệnh lịch sử.",
        "trapAnalysis": "Phong trào Cần Vương thất bại đánh dấu sự bất lực của hệ tư tưởng phong kiến trong cuộc chiến chống thực dân."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Chính sách văn hóa giáo dục nô dịch của Pháp nhằm mục đích trực tiếp nào?",
        "options": [
          "Đào tạo đội ngũ trí thức phục vụ bộ máy cai trị và ru ngủ nhân dân",
          "Xóa mù chữ toàn diện cho trẻ em nông thôn Đông Dương",
          "Bảo tồn các di sản văn hóa cổ truyền của dân tộc Việt Nam",
          "Khuyến khích tư tưởng tự do bình đẳng của cuộc Đại cách mạng Pháp"
        ],
        "correct": 0,
        "explanation": "Chính sách giáo dục nô dịch, ngu dân nhằm đào tạo ra một lớp công chức tay sai phục vụ chính quyền thuộc địa và làm tê liệt tinh thần quật khởi của thanh niên.",
        "trapAnalysis": "Mục đích là phục vụ cai trị và ngu dân, tuyệt đối không phổ biến tư tưởng tiến bộ thực thụ của nước Pháp."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tháng 12/1920, Nguyễn Ái Quốc tham dự Đại hội lần thứ XVIII của Đảng Xã hội Pháp tại thành phố nào?",
        "options": [
          "Paris",
          "Tours",
          "Marseille",
          "Lyon"
        ],
        "correct": 1,
        "explanation": "Đại hội lần thứ XVIII của Đảng Xã hội Pháp diễn ra tại thành phố Tours (tháng 12/1920), nơi Người bỏ phiếu gia nhập Quốc tế III.",
        "trapAnalysis": "Đại hội Tours (12/1920) là sự kiện lịch sử quyết định chuyển sang Đảng Cộng sản."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tổ chức 'Hội Liên hiệp thuộc địa' thành lập năm 1921 tại Paris nhằm mục đích gì?",
        "options": [
          "Đoàn kết các dân tộc thuộc địa cùng đấu tranh chống chủ nghĩa thực dân",
          "Quyên góp kiều hối gửi về nước giúp đỡ người nghèo",
          "Vận động quốc hội Pháp nới lỏng chính sách nhập cư",
          "Mở các cửa hàng thương mại cho người Á - Phi tại châu Âu"
        ],
        "correct": 0,
        "explanation": "Hội Liên hiệp thuộc địa là mặt trận tập hợp những người dân thuộc địa các nước tại Pháp để thức tỉnh và đoàn kết chống lại kẻ thù chung là chủ nghĩa thực dân.",
        "trapAnalysis": "Hội Liên hiệp thuộc địa là tổ chức cách mạng đoàn kết nhân dân các thuộc địa Pháp."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Năm 1923, Nguyễn Ái Quốc rời nước Pháp để sang học tập và hoạt động tại quốc gia nào?",
        "options": [
          "Liên Xô",
          "Trung Quốc",
          "Đức",
          "Thái Lan"
        ],
        "correct": 0,
        "explanation": "Tháng 6/1923, Nguyễn Ái Quốc bí mật rời Paris sang Mát-xcơ-va (Liên Xô) để dự Hội nghị Quốc tế Nông dân và Đại hội V Quốc tế Cộng sản.",
        "trapAnalysis": "Năm 1923 Bác sang Liên Xô; cuối năm 1924 mới từ Liên Xô về Quảng Châu (Trung Quốc)."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tại Đại hội V Quốc tế Cộng sản (1924), Nguyễn Ái Quốc đã nhấn mạnh vai trò chiến lược của vấn đề nào?",
        "options": [
          "Cách mạng giải phóng dân tộc ở các nước thuộc địa",
          "Chiến tranh giữa các nước tư bản chủ nghĩa đế quốc",
          "Xây dựng liên minh các nước tư bản dân chủ",
          "Tập trung cách mạng vô sản ở các nước chính quốc trước"
        ],
        "correct": 0,
        "explanation": "Người đã chỉ rõ vị trí chiến lược to lớn của cách mạng thuộc địa và khẳng định cách mạng thuộc địa không thụ động chờ đợi cách mạng ở chính quốc mà có thể chủ động nổ ra và giành thắng lợi trước.",
        "trapAnalysis": "Đóng góp lý luận sáng tạo: Cách mạng thuộc địa có thể giành thắng lợi trước cách mạng ở chính quốc."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức cách mạng phôi thai được thành lập tại Quảng Châu tháng 2/1925 có tên là:",
        "options": [
          "Cộng sản đoàn",
          "Tâm Tâm xã",
          "Hội Cứu quốc",
          "Phản đế liên minh"
        ],
        "correct": 0,
        "explanation": "Tháng 2/1925, Nguyễn Ái Quốc lựa chọn những thanh niên tích cực nhất của Tâm Tâm Xã để lập nhóm nòng cốt bí mật mang tên 'Cộng sản đoàn'.",
        "trapAnalysis": "Tháng 2/1925 lập nhóm nòng cốt Cộng sản đoàn; tháng 6/1925 phát triển thành Hội VN Cách mạng Thanh niên."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Nội dung bài giảng huấn luyện cán bộ của Nguyễn Ái Quốc tại Quảng Châu nhấn mạnh điều gì đầu tiên?",
        "options": [
          "Tư cách của một người cách mệnh",
          "Kỹ thuật sử dụng súng trường và chất nổ",
          "Cách tổ chức các cuộc bãi công biểu tình",
          "Nguyên lý kinh tế chính trị tư bản"
        ],
        "correct": 0,
        "explanation": "Mở đầu cuốn sách 'Đường Kách mệnh', phần đầu tiên Người nêu ra là: 'Tư cách một người cách mệnh' (đạo đức cách mạng, cần kiệm liêm chính, chí công vô tư).",
        "trapAnalysis": "Tác phẩm Đường Kách mệnh đặt việc rèn luyện đạo đức, 'Tư cách người cách mệnh' lên trang đầu tiên."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tổ chức Đông Dương Cộng sản Đảng thành lập ngày 17/6/1929 tại số nhà nào?",
        "options": [
          "Số 312 phố Khâm Thiên, Hà Nội",
          "Số 5D phố Hàm Long, Hà Nội",
          "Số 90 phố Thợ Nhuộm, Hà Nội",
          "Số 48 phố Hàng Ngang, Hà Nội"
        ],
        "correct": 0,
        "explanation": "Ngày 17/6/1929, đại biểu các tổ chức cơ sở cộng sản miền Bắc họp tại số nhà 312 Khâm Thiên (Hà Nội) quyết định thành lập Đông Dương Cộng sản Đảng.",
        "trapAnalysis": "5D Hàm Long lập Chi bộ đầu tiên (3/1929); 312 Khâm Thiên thành lập Đông Dương CS Đảng (6/1929)."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Văn kiện nào do Trần Phú khởi thảo tại số nhà 90 Thợ Nhuộm (Hà Nội) vào mùa thu năm 1930?",
        "options": [
          "Luận cương chính trị tháng 10/1930",
          "Chính cương vắn tắt của Đảng",
          "Chương trình hành động của Đảng",
          "Tác phẩm Tự chỉ trích"
        ],
        "correct": 0,
        "explanation": "Tại căn nhà số 90 Thợ Nhuộm (Hà Nội), đồng chí Trần Phú đã soạn thảo bản dự thảo Luận cương chính trị để trình Hội nghị Trung ương tháng 10/1930.",
        "trapAnalysis": "Số 90 Thợ Nhuộm là nơi Trần Phú thảo Luận cương chính trị tháng 10/1930."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Hội nghị hợp nhất đầu năm 1930 quyết định xuất bản các cơ quan ngôn luận nào của Đảng?",
        "options": [
          "Tạp chí Đỏ và Báo Tranh Đấu",
          "Báo Cứu Quốc và Báo Tiền Phong",
          "Báo Cờ Giải Phóng và Tạp chí Cộng Sản",
          "Báo Nhân Dân và Báo Quân Đội Nhân Dân"
        ],
        "correct": 0,
        "explanation": "Hội nghị thành lập Đảng quyết định xuất bản 'Tạp chí Đỏ' làm cơ quan lý luận và tờ báo 'Tranh Đấu' làm cơ quan tuyên truyền của Đảng.",
        "trapAnalysis": "Hai ấn phẩm đầu tiên của Đảng năm 1930: Tạp chí Đỏ và Báo Tranh Đấu."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Cương lĩnh chính trị đầu tiên (2/1930) xác định mục tiêu cuối cùng của cách mạng Việt Nam là gì?",
        "options": [
          "Đi tới xã hội cộng sản",
          "Xây dựng nhà nước tư sản hiện đại",
          "Trở thành một phân bộ thuộc Khối Liên hiệp Pháp",
          "Phát triển kinh tế hỗn hợp nhiều thành phần"
        ],
        "correct": 0,
        "explanation": "Phương hướng chiến lược khẳng định làm tư sản dân quyền và thổ địa cách mạng để 'đi tới xã hội cộng sản'.",
        "trapAnalysis": "Mục tiêu tối hậu của Cương lĩnh tháng 2/1930 là tiến thẳng tới xã hội cộng sản."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Chủ trương của Cương lĩnh tháng 2/1930 đối với giai cấp tư sản dân tộc thể hiện tư tưởng nào?",
        "options": [
          "Tư tưởng liên minh và trung lập khôn khéo để cô lập kẻ thù chính",
          "Tư tưởng tiêu diệt triệt để tư sản để xác lập chuyên chính vô sản",
          "Tư tưởng chia sẻ hoàn toàn quyền lãnh đạo cách mạng cho tư sản",
          "Tư tưởng tuyệt đối không thỏa hiệp với bất kỳ giai cấp nào"
        ],
        "correct": 0,
        "explanation": "Cương lĩnh chủ trương lợi dụng hoặc làm cho họ trung lập, lôi kéo các phần tử yêu nước, tập trung mũi nhọn vào đế quốc Pháp và tay sai đầu sỏ.",
        "trapAnalysis": "Đây là tư tưởng phân hóa kẻ thù, tập hợp lực lượng đại đoàn kết dân tộc của Nguyễn Ái Quốc."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Ngày 3/2 hàng năm được chính thức công nhận là Ngày kỷ niệm thành lập Đảng tại kỳ Đại hội nào?",
        "options": [
          "Đại hội I (1935)",
          "Đại hội II (1951)",
          "Đại hội III (1960)",
          "Đại hội IV (1976)"
        ],
        "correct": 2,
        "explanation": "Đại hội đại biểu toàn quốc lần thứ III của Đảng (tháng 9/1960) đã ra Nghị quyết quyết định lấy ngày 3/2 dương lịch hàng năm làm ngày kỷ niệm thành lập Đảng.",
        "trapAnalysis": "Đại hội III (1960) đã quyết định lấy ngày 3/2 làm ngày kỷ niệm chính thức thành lập Đảng."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Văn kiện nào do Nguyễn Ái Quốc soạn thảo nêu rõ tôn chỉ 'thu phục đại bộ phận công nông'?",
        "options": [
          "Sách lược vắn tắt của Đảng",
          "Điều lệ vắn tắt của Đảng",
          "Luận cương chính trị",
          "Chương trình hành động"
        ],
        "correct": 0,
        "explanation": "Trong 'Sách lược vắn tắt của Đảng', Người chỉ rõ: Đảng phải thu phục cho được đại bộ phận giai cấp mình, phải làm cho giai cấp mình lãnh đạo được dân chúng.",
        "trapAnalysis": "Đoạn văn 'thu phục đại bộ phận giai cấp mình...' nằm trong bản 'Sách lược vắn tắt'."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Sự ra đời của Đảng Cộng sản Việt Nam chứng minh sự phát triển vượt bậc của phong trào công nhân ở điểm nào?",
        "options": [
          "Phong trào công nhân đã chuyển hẳn từ đấu tranh tự phát sang đấu tranh tự giác",
          "Giai cấp công nhân đã kiểm soát toàn bộ hệ thống đồn điền cao su",
          "Mọi công nhân đều đã được kết nạp vào các nghiệp đoàn công khai",
          "Công nhân không còn phải chịu sự áp bức của tư bản Pháp"
        ],
        "correct": 0,
        "explanation": "Khi Đảng Cộng sản ra đời nắm quyền lãnh đạo, phong trào công nhân Việt Nam đã chính thức bước sang giai đoạn hoàn toàn tự giác với mục tiêu chính trị rõ rệt.",
        "trapAnalysis": "Sự ra đời của Đảng đánh dấu mốc phong trào công nhân hoàn toàn chuyển sang tự giác."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Yếu tố đóng vai trò cầu nối đưa chủ nghĩa Mác - Lênin vào phong trào công nhân Việt Nam là:",
        "options": [
          "Hội Việt Nam Cách mạng Thanh niên",
          "Tân Việt Cách mạng Đảng",
          "Việt Nam Quốc dân Đảng",
          "Đông Kinh Nghĩa Thục"
        ],
        "correct": 0,
        "explanation": "Hội Việt Nam Cách mạng Thanh niên do Nguyễn Ái Quốc sáng lập là 'chiếc cầu nối' truyền bá chủ nghĩa Mác - Lênin vào phong trào công nhân và phong trào yêu nước.",
        "trapAnalysis": "Hội VN Cách mạng Thanh niên chính là tổ chức giữ vai trò cầu nối lịch sử này."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Cuộc đấu tranh mở đầu của công nhân trong phong trào cách mạng 1930 - 1931 diễn ra ở đâu?",
        "options": [
          "Công nhân đồn điền cao su Phú Riềng (2/1930)",
          "Công nhân nhà máy sợi Nam Định (3/1930)",
          "Công nhân khu công nghiệp Bến Thủy (5/1930)",
          "Công nhân mỏ than Cẩm Phả (11/1930)"
        ],
        "correct": 2,
        "explanation": "Ngày 1/5/1930, công nhân xưởng cưa, xưởng diêm Bến Thủy (Vinh) cùng hàng nghìn nông dân biểu tình thị uy, mở đầu cho cao trào cách mạng ở Nghệ - Tĩnh.",
        "trapAnalysis": "Bến Thủy (1/5/1930) là tiếng pháo hiệu bùng nổ cao trào cách mạng 1930 - 1931."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Lực lượng tự vệ bảo vệ chính quyền Xô viết Nghệ - Tĩnh được gọi là gì?",
        "options": [
          "Đội Du kích Bắc Sơn",
          "Đội Tự vệ Đỏ",
          "Đội Cứu quốc quân",
          "Đội Tự vệ Cảm tử"
        ],
        "correct": 1,
        "explanation": "Chính quyền Xô viết đã tổ chức ra các 'Đội Tự vệ Đỏ' làm nòng cốt bảo vệ trật tự trị an và trừng trị bọn phản cách mạng.",
        "trapAnalysis": "Lực lượng vũ trang thời Xô viết 1930 mang tên 'Tự vệ Đỏ' (Xích vệ đội)."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Luận cương chính trị tháng 10/1930 xác định động lực chính của cách mạng là:",
        "options": [
          "Giai cấp công nhân và nông dân",
          "Giai cấp công nhân và tầng lớp trí thức",
          "Giai cấp nông dân và tiểu tư sản thành thị",
          "Toàn thể các giai cấp và tầng lớp dân tộc"
        ],
        "correct": 0,
        "explanation": "Luận cương xác định công nhân và nông dân là hai động lực chính của cách mạng tư sản dân quyền, trong đó công nhân là giai cấp lãnh đạo.",
        "trapAnalysis": "Cả Cương lĩnh và Luận cương đều xem công nhân và nông dân là động lực chính."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Tại sao Luận cương tháng 10/1930 lại không nêu khẩu hiệu lôi kéo tư sản dân tộc và trung tiểu địa chủ?",
        "options": [
          "Vì cho rằng họ có quyền lợi gắn chặt với đế quốc và phong kiến",
          "Vì họ không biết chữ và không hiểu lý luận cách mạng",
          "Vì họ đã di cư hết sang các nước tư bản phương Tây",
          "Vì chính quyền thực dân Pháp đã xóa sổ hoàn toàn các giai cấp này"
        ],
        "correct": 0,
        "explanation": "Do nhận thức giáo điều về vấn đề giai cấp từ Quốc tế Cộng sản thời kỳ đó, Luận cương coi toàn bộ giai cấp tư sản và địa chủ là đối tượng của cách mạng.",
        "trapAnalysis": "Hạn chế mang tính lịch sử: Đồng nhất tư sản dân tộc với tư sản mại bản, chưa thấy tính chất hai mặt của họ."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đồng chí Nguyễn Đức Cảnh - người sáng lập Tổng Công hội Đỏ Bắc Kỳ - bị địch xử chém tại đâu năm 1932?",
        "options": [
          "Hải Phòng",
          "Hà Nội",
          "Côn Đảo",
          "Sài Gòn"
        ],
        "correct": 0,
        "explanation": "Đồng chí Nguyễn Đức Cảnh bị thực dân Pháp bắt và xử chém tại nhà lao Hải Phòng ngày 31/7/1932, nêu tấm gương bất khuất trước máy chém quân thù.",
        "trapAnalysis": "Đồng chí Nguyễn Đức Cảnh hy sinh tại Hải Phòng năm 1932."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Ai là người giữ chức Tổng Bí thư Ban Chấp hành Trung ương Đảng sau Đại hội I (giai đoạn 1936 - 1938)?",
        "options": [
          "Hà Huy Tập",
          "Lê Hồng Phong",
          "Nguyễn Văn Cừ",
          "Trần Phú"
        ],
        "correct": 0,
        "explanation": "Đồng chí Hà Huy Tập giữ chức Tổng Bí thư của Đảng từ tháng 7/1936 đến tháng 3/1938, có công lớn trong việc khôi phục và chỉ đạo phong trào.",
        "trapAnalysis": "Lê Hồng Phong (1935 - 1936), Hà Huy Tập (1936 - 1938), Nguyễn Văn Cừ (1938 - 1940)."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hội nghị Ban Chấp hành Trung ương Đảng họp tại Thượng Hải (tháng 7/1936) do ai chủ trì?",
        "options": [
          "Lê Hồng Phong",
          "Hà Huy Tập",
          "Nguyễn Văn Cừ",
          "Trường Chinh"
        ],
        "correct": 0,
        "explanation": "Hội nghị Trung ương tháng 7/1936 họp tại Thượng Hải (Trung Quốc) do đồng chí Lê Hồng Phong - Ủy viên Ban Chấp hành Quốc tế Cộng sản - chủ trì.",
        "trapAnalysis": "Hội nghị Thượng Hải (7/1936) do đồng chí Lê Hồng Phong chủ trì định ra đường lối mới cho thời kỳ 1936-1939."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hình thức đấu tranh nghị trường trong thời kỳ 1936 - 1939 được Đảng tận dụng như thế nào?",
        "options": [
          "Đưa người của Đảng và Mặt trận ứng cử vào Viện Dân biểu và Hội đồng Quản hạt",
          "Vận động nhân dân tẩy chay hoàn toàn các cuộc bỏ phiếu bầu cử",
          "Thỏa hiệp với chính quyền thuộc địa để nhận ghế quan chức cao cấp",
          "Biến các viện dân biểu thành căn cứ địa quân sự bí mật"
        ],
        "correct": 0,
        "explanation": "Đảng triệt để lợi dụng diễn đàn hợp pháp, đưa các chiến sĩ ưu tú ứng cử vào Viện Dân biểu Bắc Kỳ, Trung Kỳ và Hội đồng Quản hạt Nam Kỳ để vạch trần tội ác thực dân.",
        "trapAnalysis": "Đấu tranh nghị trường là lợi dụng các cơ quan dân cử để nói lên tiếng nói của nhân dân, không phải thỏa hiệp chính trị."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Tổng Bí thư trẻ tuổi nhất trong lịch sử Đảng Cộng sản Việt Nam được bầu vào tháng 3/1938 là ai?",
        "options": [
          "Nguyễn Văn Cừ",
          "Trần Phú",
          "Hà Huy Tập",
          "Trường Chinh"
        ],
        "correct": 0,
        "explanation": "Đồng chí Nguyễn Văn Cừ được bầu làm Tổng Bí thư tại Hội nghị Trung ương tháng 3/1938 khi mới 26 tuổi.",
        "trapAnalysis": "Nguyễn Văn Cừ là Tổng Bí thư trẻ nhất của Đảng (26 tuổi khi nhậm chức năm 1938)."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Mục tiêu trọng tâm của tác phẩm 'Tự chỉ trích' (1939) của Nguyễn Văn Cừ là:",
        "options": [
          "Thành thật vạch khuyết điểm, củng cố kỷ luật và tăng cường đoàn kết nội bộ Đảng",
          "Công kích cá nhân các đồng chí lãnh đạo trong Ban Chấp hành Trung ương",
          "Thừa nhận sự bế tắc của phong trào dân chủ trước sự đàn áp của giặc",
          "Kêu gọi các đảng viên tự rút lui khỏi hoạt động cách mạng bí mật"
        ],
        "correct": 0,
        "explanation": "Tác phẩm nêu rõ: 'Phải thành thực vạch những khuyết điểm và tìm phương pháp sửa chữa... để làm cho Đảng càng ngày càng thống nhất, càng mạnh'.",
        "trapAnalysis": "'Tự chỉ trích' là mẫu mực về tự phê bình và phê bình mang tính xây dựng, đoàn kết Đảng."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Vận dụng",
        "question": "Điểm tiến bộ vượt bậc của Đảng trong phong trào 1936 - 1939 so với giai đoạn 1930 - 1931 là:",
        "options": [
          "Nghệ thuật kết hợp tài tình các hình thức đấu tranh công khai và bí mật",
          "Xây dựng thành công lực lượng không quân và pháo binh cách mạng",
          "Xóa bỏ hoàn toàn tình trạng mù chữ trong toàn thể giai cấp công nhân",
          "Đã tiến hành khởi nghĩa từng phần thắng lợi ở các thành phố lớn"
        ],
        "correct": 0,
        "explanation": "Bước trưởng thành lớn nhất là nghệ thuật sử dụng các hình thức đấu tranh linh hoạt: công khai, nửa công khai, hợp pháp, nửa hợp pháp kết hợp chặt chẽ với bí mật bất hợp pháp.",
        "trapAnalysis": "Nghệ thuật kết hợp các hình thức đấu tranh phong phú là bước tiến vượt bậc của Đảng thời kỳ 1936-1939."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Sau khi Thế chiến II bùng nổ, Toàn quyền Pháp Catroux đã thi hành chính sách gì ở Đông Dương?",
        "options": [
          "Đặt Đảng Cộng sản ra ngoài vòng pháp luật và tổng động viên thời chiến",
          "Nới lỏng các quyền tự do dân chủ để tranh thủ nhân dân",
          "Rút toàn bộ bộ máy cảnh sát mật thám về nước Pháp",
          "Trao trả độc lập ngay cho triều đình nhà Nguyễn"
        ],
        "correct": 0,
        "explanation": "Tháng 9/1939, Pháp thi hành sắc lệnh giải tán các hội hữu ái, đóng cửa báo chí tiến bộ, đặt Đảng CS ra ngoài vòng pháp luật và thi hành chính sách vơ vét kinh tế thời chiến.",
        "trapAnalysis": "Pháp thực hiện chính sách 'kinh tế chỉ huy', thẳng tay khủng bố trắng lực lượng cách mạng."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tên gọi Mặt trận thống nhất được quyết định thành lập tại Hội nghị Trung ương 6 (11/1939) là:",
        "options": [
          "Mặt trận Thống nhất Dân tộc Phản đế Đông Dương",
          "Mặt trận Việt Nam Độc lập Đồng minh",
          "Mặt trận Dân chủ Đông Dương",
          "Mặt trận Thống nhất Công Nông Đông Dương"
        ],
        "correct": 0,
        "explanation": "HNTW 6 quyết định thành lập Mặt trận Thống nhất Dân tộc Phản đế Đông Dương nhằm tập hợp mọi lực lượng chống chiến tranh và ách thống trị đế quốc.",
        "trapAnalysis": "Mặt trận Phản đế Đông Dương gắn với HNTW 6 (11/1939); Mặt trận Việt Minh gắn với HNTW 8 (5/1941)."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội nghị Trung ương lần thứ 7 (tháng 11/1940) đã quyết định duy trì lực lượng vũ trang nào?",
        "options": [
          "Đội du kích Bắc Sơn",
          "Đội Cứu quốc quân II",
          "Việt Nam Giải phóng quân",
          "Tự vệ chiến đấu cứu quốc"
        ],
        "correct": 0,
        "explanation": "HNTW 7 họp tại làng Đình Bảng (Từ Sơn, Bắc Ninh) quyết định duy trì đội du kích Bắc Sơn để làm hạt nhân xây dựng lực lượng vũ trang cách mạng sau này.",
        "trapAnalysis": "HNTW 7 chủ trương duy trì và củng cố đội du kích Bắc Sơn."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Vì sao Hội nghị Trung ương 8 (5/1941) chủ trương thành lập Mặt trận Việt Minh riêng cho Việt Nam?",
        "options": [
          "Để giải quyết vấn đề dân tộc trong khuôn khổ từng nước ở Đông Dương",
          "Vì nhân dân Lào và Campuchia từ chối tham gia cách mạng",
          "Vì thực dân Pháp đã rút hoàn toàn khỏi lãnh thổ Lào và Campuchia",
          "Vì Quốc tế Cộng sản yêu cầu giải tán liên minh ba nước Đông Dương"
        ],
        "correct": 0,
        "explanation": "Chủ trương giải quyết vấn đề dân tộc trong khuôn khổ từng nước nhằm phát huy tối đa tinh thần tự quyết và truyền thống yêu nước của mỗi dân tộc (Việt Nam lập Việt Minh, Lào lập Ai Lao Độc lập Đồng minh, Campuchia lập Cao Miên Độc lập Đồng minh).",
        "trapAnalysis": "Sáng tạo lớn của HNTW 8 là giải quyết vấn đề dân tộc trong khuôn khổ từng quốc gia riêng biệt."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Tại Hội nghị Trung ương 8 (tháng 5/1941), đồng chí nào được bầu làm Tổng Bí thư của Đảng?",
        "options": [
          "Trường Chinh",
          "Hồ Chí Minh",
          "Võ Nguyên Giáp",
          "Hoàng Văn Thụ"
        ],
        "correct": 0,
        "explanation": "Hội nghị TW 8 đã bầu Ban Chấp hành Trung ương chính thức và bầu đồng chí Trường Chinh làm Tổng Bí thư của Đảng.",
        "trapAnalysis": "Đồng chí Trường Chinh được bầu làm Tổng Bí thư tại HNTW 8 (5/1941)."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Bức thư 'Kính cáo đồng bào' (tháng 6/1941) của Nguyễn Ái Quốc kêu gọi điều gì?",
        "options": [
          "Toàn thể đồng bào đoàn kết muôn người như một để cứu nước cứu nhà",
          "Kêu gọi các nhà tư bản đầu tư phát triển công nghiệp đồn điền",
          "Đòi thực dân Pháp tăng lương giảm giờ làm cho thợ thuyền",
          "Khuyên nhân dân bảo toàn tính mạng chờ đợi hòa bình thế giới"
        ],
        "correct": 0,
        "explanation": "Trong bức thư 'Kính cáo đồng bào' ngày 6/6/1941, Người thiết tha kêu gọi: 'Hiện thời muốn cứu nước, không có con đường nào khác hơn là toàn dân đoàn kết một lòng'.",
        "trapAnalysis": "'Kính cáo đồng bào' là lời hịch non sông thức tỉnh khối đại đoàn kết toàn dân tộc đứng lên cứu nước."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội Văn hóa Cứu quốc Việt Nam được thành lập năm 1944 là thành viên của tổ chức nào?",
        "options": [
          "Mặt trận Việt Minh",
          "Đảng Xã hội Việt Nam",
          "Tổng Liên đoàn Lao động",
          "Đoàn Thanh niên Tiền phong"
        ],
        "correct": 0,
        "explanation": "Hội Văn hóa Cứu quốc Việt Nam (thành lập 1944) là một đoàn thể cứu quốc nằm trong Mặt trận Việt Minh, tập hợp giới văn nghệ sĩ, trí thức yêu nước.",
        "trapAnalysis": "Hội Văn hóa Cứu quốc là thành viên trực thuộc Mặt trận Việt Minh."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chỉ thị 12/3/1945 đề ra khẩu hiệu thay thế cho khẩu hiệu 'thành lập chính quyền Xô viết' là gì?",
        "options": [
          "Chính quyền cách mạng của nhân dân hoặc Ủy ban Dân tộc Giải phóng",
          "Nhà nước quân chủ lập hiến dân tộc",
          "Hội đồng ủy trị quốc tế Đông Dương",
          "Chính phủ liên hiệp bảo hộ Pháp - Việt"
        ],
        "correct": 0,
        "explanation": "Chỉ thị xác định thành lập các Ủy ban Dân tộc Giải phóng hoặc chính quyền cách mạng nhân dân ở những vùng đã giải phóng.",
        "trapAnalysis": "Chính quyền nhân dân / Ủy ban Dân tộc Giải phóng là hình thức chính quyền phù hợp với tính chất giải phóng dân tộc."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cuộc Khởi nghĩa Ba Tơ (Quảng Ngãi) nổ ra vào ngày tháng năm nào ngay sau đảo chính Nhật?",
        "options": [
          "11/03/1945",
          "09/03/1945",
          "12/03/1945",
          "15/04/1945"
        ],
        "correct": 0,
        "explanation": "Ngày 11/3/1945, các chiến sĩ cộng sản bị giam ở căng an trí Ba Tơ đã lãnh đạo nhân dân khởi nghĩa cướp đồn địch và thành lập Đội Du kích Ba Tơ anh hùng.",
        "trapAnalysis": "Khởi nghĩa Ba Tơ (Quảng Ngãi) nổ ra ngày 11/3/1945 ngay sau đêm Nhật đảo chính."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Nội dung nào KHÔNG nằm trong Nghị quyết của Hội nghị toàn quốc của Đảng họp tại Tân Trào (14 - 15/8/1945)?",
        "options": [
          "Quyết định phát động Tổng khởi nghĩa giành chính quyền trong cả nước",
          "Đề ra 3 nguyên tắc khởi nghĩa: Tập trung, Thống nhất, Kịp thời",
          "Chủ trương liên minh quân sự với quân đội Tưởng Giới Thạch",
          "Đề ra chính sách đối nội, đối ngoại sẵn sàng tiếp đón Đồng minh"
        ],
        "correct": 2,
        "explanation": "Hội nghị toàn quốc chủ trương triệt để tranh thủ thế chủ động giành chính quyền trước khi quân Đồng minh (kể cả quân Tưởng) vào nước ta, tuyệt đối không liên minh quân sự phụ thuộc vào họ.",
        "trapAnalysis": "Phương châm là giành độc lập trước khi Đồng minh vào, không liên minh ủy thác cho quân Tưởng."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Mười chính sách lớn của Việt Minh được cơ quan quyền lực nào chính thức thông qua vào tháng 8/1945?",
        "options": [
          "Đại hội Quốc dân Tân Trào",
          "Hội nghị Ban Thường vụ TW Đảng",
          "Hội nghị Quân sự cách mạng Bắc Kỳ",
          "Quốc hội khóa I nước Việt Nam DCCH"
        ],
        "correct": 0,
        "explanation": "Quốc dân Đại hội Tân Trào (16 - 17/8/1945) - được ví như Quốc hội lâm thời - đã chính thức thông qua 10 chính sách lớn của Việt Minh.",
        "trapAnalysis": "Đại hội Quốc dân Tân Trào (16-17/8/1945) là nơi thông qua 10 chính sách của Việt Minh."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu nổi tiếng nào được truyền đi trong những ngày sục sôi của Cách mạng Tháng Tám năm 1945?",
        "options": [
          "Đem sức ta mà tự giải phóng cho ta",
          "Vô sản tất cả các nước liên hiệp lại",
          "Tất cả cho tiền tuyến, tất cả để chiến thắng",
          "Không có gì quý hơn độc lập tự do"
        ],
        "correct": 0,
        "explanation": "Chủ tịch Hồ Chí Minh đã ra lời kêu gọi Tổng khởi nghĩa: 'Giờ quyết định cho vận mệnh dân tộc ta đã đến. Toàn quốc đồng bào hãy đứng dậy đem sức ta mà tự giải phóng cho ta!'.",
        "trapAnalysis": "Lời hiệu triệu thiêng liêng: 'Đem sức ta mà tự giải phóng cho ta'."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Bản Tuyên ngôn Độc lập ngày 2/9/1945 được Chủ tịch Hồ Chí Minh soạn thảo tại địa chỉ nào ở Hà Nội?",
        "options": [
          "Số 48 phố Hàng Ngang",
          "Số 5D phố Hàm Long",
          "Số 312 phố Khâm Thiên",
          "Số 90 phố Thợ Nhuộm"
        ],
        "correct": 0,
        "explanation": "Tại tầng 2 căn nhà số 48 phố Hàng Ngang (Hà Nội), Chủ tịch Hồ Chí Minh đã viết bản Tuyên ngôn Độc lập bất hủ lịch sử.",
        "trapAnalysis": "48 Hàng Ngang là nơi Bác soạn Tuyên ngôn Độc lập."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Ý nghĩa quốc tế sâu sắc nhất của Cách mạng Tháng Tám năm 1945 ở Việt Nam là:",
        "options": [
          "Mở đầu kỷ nguyên sụp đổ của hệ thống thuộc địa của chủ nghĩa thực dân cũ",
          "Buộc các nước đế quốc phải bồi thường chiến phí cho các nước thuộc địa",
          "Dẫn tới việc thành lập Khối quân sự Vac-sơ-va ở châu Âu",
          "Chấm dứt hoàn toàn cuộc Chiến tranh Lạnh giữa hai cực Xô - Mỹ"
        ],
        "correct": 0,
        "explanation": "Thắng lợi của CMT8 là phát súng lệnh mở đầu cho sự sụp đổ dây chuyền của chủ nghĩa thực dân kiểu cũ trên phạm vi toàn thế giới, cổ vũ mạnh mẽ phong trào giải phóng dân tộc.",
        "trapAnalysis": "CMT8 chọc thủng khâu yếu nhất trong sợi dây xích của chủ nghĩa thực dân, mở màn sự sụp đổ của hệ thống thuộc địa."
      }
    ]
  },
  {
    "id": "de_05",
    "code": "MÃ ĐỀ: 105",
    "title": "Đề 05: Cao Trào Dân Chủ 1936 - 1939 & Chuyển Hướng Chiến Lược",
    "description": "Bộ đề tập trung vào các hình thức đấu tranh dân chủ 1936 - 1939 và quá trình chuyển hướng chỉ đạo chiến lược qua các Hội nghị Trung ương 6, 7, 8.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Vua Hàm Nghi ban Chiếu Cần Vương lần đầu tiên vào ngày tháng năm nào?",
        "options": [
          "13/07/1885",
          "05/07/1885",
          "19/08/1885",
          "01/09/1885"
        ],
        "correct": 0,
        "explanation": "Ngày 13/7/1885, tại căn cứ Tân Sở (Cam Lộ, Quảng Trị), phụ chính đại thần Tôn Thất Thuyết nhân danh vua Hàm Nghi ban Chiếu Cần Vương.",
        "trapAnalysis": "Ngày 5/7/1885 là vụ biến kinh thành Huế; ngày 13/7/1885 là ngày ban Chiếu Cần Vương."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Tính chất nửa phong kiến của xã hội Việt Nam thời thuộc địa thể hiện rõ nhất ở điểm nào?",
        "options": [
          "Chế độ sở hữu ruộng đất phong kiến và giai cấp địa chủ vẫn được Pháp duy trì dung dưỡng",
          "Vua nhà Nguyễn vẫn nắm toàn bộ quyền lực quân đội và tài chính quốc gia",
          "Tất cả ruộng đất trong cả nước đều thuộc quyền sở hữu của triều đình",
          "Giai cấp nông dân được tự do bầu cử đại biểu địa phương"
        ],
        "correct": 0,
        "explanation": "Thực dân Pháp câu kết với giai cấp địa chủ phong kiến, duy trì phương thức bóc lột địa tô phong kiến để làm chỗ dựa cho bộ máy cai trị thuộc địa.",
        "trapAnalysis": "'Nửa phong kiến' vì Pháp duy trì quan hệ sản xuất phong kiến lỗi thời để phục vụ cai trị."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Nguyên nhân trực tiếp khiến giai cấp nông dân Việt Nam có tinh thần cách mạng quật cường nhất là:",
        "options": [
          "Chịu ba tầng áp bức bóc lột nặng nề của đế quốc, phong kiến và tư sản",
          "Được tiếp thu các tác phẩm lý luận kinh điển của phương Tây",
          "Có tổ chức nghiệp đoàn và công đoàn công khai bảo vệ",
          "Nắm giữ các cơ sở kinh tế hàng hóa lớn ở đô thị"
        ],
        "correct": 0,
        "explanation": "Nông dân bị tước đoạt ruộng đất, bị sưu cao thuế nặng và áp bức tàn tệ nhất, nên họ có lòng căm thù giặc sâu sắc và tinh thần đấu tranh quyết liệt.",
        "trapAnalysis": "Nông dân bị bần cùng hóa và chịu áp bức nặng nề nhất nên là động lực cách mạng to lớn nhất."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Người chế tạo thành công súng trường theo mẫu súng của quân đội Pháp trong khởi nghĩa Hương Khê là ai?",
        "options": [
          "Cao Thắng",
          "Phan Đình Phùng",
          "Đinh Công Tráng",
          "Nguyễn Chanh"
        ],
        "correct": 0,
        "explanation": "Tướng quân Cao Thắng - cánh tay phải của Phan Đình Phùng - đã dày công nghiên cứu tháo lắp và đúc rèn thành công súng trường kiểu 1874 của Pháp.",
        "trapAnalysis": "Cao Thắng là danh tướng chế tạo súng trường trong phong trào Cần Vương."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Tại sao khởi nghĩa Yên Thế (1884 - 1913) có thể duy trì chiến đấu bền bỉ suốt gần 30 năm?",
        "options": [
          "Có sự lãnh đạo tài tình của Hoàng Hoa Thám và cách đánh du kích sáng tạo dựa vào rừng núi",
          "Được quân đội nhà Thanh ở Trung Quốc sang chi viện thường xuyên",
          "Được trang bị tàu chiến và đại bác tầm xa hiện đại",
          "Thực dân Pháp không dám tiến công vào vùng Yên Thế"
        ],
        "correct": 0,
        "explanation": "Nghĩa quân Yên Thế dựa vào núi rừng rậm rạp hiểm trở, lòng dân ủng hộ và tài thao lược du kích xuất sắc của 'Hùm xám Yên Thế' Hoàng Hoa Thám.",
        "trapAnalysis": "Yên Thế trường kỳ chiến đấu nhờ chiến thuật du kích tài tình và dựa vào căn cứ địa rừng núi."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Phong trào Đông Du (1905 - 1908) bị tan rã xuất phát từ nguyên nhân trực tiếp nào?",
        "options": [
          "Chính phủ Nhật Bản câu kết với Pháp trục xuất lưu học sinh Việt Nam",
          "Các du học sinh Việt Nam tốt nghiệp về nước hết",
          "Cụ Phan Bội Châu quyết định giải tán để lập chiến khu",
          "Các nhà tài trợ phong kiến cắt đứt nguồn tài chính"
        ],
        "correct": 0,
        "explanation": "Tháng 9/1908, thực dân Pháp câu kết với chính phủ Nhật (cho Pháp vay tiền để đổi lấy việc trục xuất người Việt), Nhật ra lệnh trục xuất Phan Bội Châu và du học sinh.",
        "trapAnalysis": "Nhật bắt tay với Pháp trục xuất lưu học sinh Việt Nam, làm phong trào Đông Du tan rã."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Điểm hạn chế lớn nhất trong chủ trương cải cách của cụ Phan Châu Trinh là gì?",
        "options": [
          "Ảo tưởng dựa vào lòng nhân từ của chính phủ thực dân Pháp để đánh đổ phong kiến",
          "Kêu gọi nông dân nổi dậy khởi nghĩa vũ trang cướp chính quyền",
          "Chỉ chú trọng phát triển công nghiệp mà bỏ bê giáo dục",
          "Phản đối việc truyền bá chữ Quốc ngữ cho đồng bào"
        ],
        "correct": 0,
        "explanation": "Cụ Phan Châu Trinh chủ trương 'ỷ Pháp cầu tiến bộ', dựa vào chính kẻ đang cướp nước mình để cải cách văn minh là điều ảo tưởng, không tưởng.",
        "trapAnalysis": "Hạn chế của Phan Châu Trinh: Ảo tưởng vào sự giúp đỡ của thực dân Pháp (xin giặc rủ lòng thương)."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Tờ báo tiến bộ nào bằng tiếng Pháp do Nguyễn An Ninh xuất bản tại Sài Gòn năm 1923?",
        "options": [
          "Chuông rè (La Cloche Fêlée)",
          "Người cùng khổ (Le Paria)",
          "Việt Nam hồn",
          "Nhân đạo (L'Humanité)"
        ],
        "correct": 0,
        "explanation": "Nhà yêu nước Nguyễn An Ninh sáng lập tờ báo 'La Cloche Fêlée' (Chuông rè) tại Sài Gòn nhằm thức tỉnh thanh niên và công kích chế độ thực dân.",
        "trapAnalysis": "'La Cloche Fêlée' (Chuông rè) gắn liền với nhà trí thức yêu nước Nguyễn An Ninh."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Phong trào đòi thả tự do cho cụ Phan Bội Châu (1925) và đám tang cụ Phan Châu Trinh (1926) chứng tỏ điều gì?",
        "options": [
          "Ý thức dân tộc và phong trào yêu nước của quần chúng thành thị đang dâng cao",
          "Chính quyền thực dân Pháp đã nhượng bộ trao trả độc lập",
          "Giai cấp công nhân đã hoàn toàn nắm độc quyền lãnh đạo phong trào",
          "Khuynh hướng phong kiến đã phục hồi sức mạnh thống trị"
        ],
        "correct": 0,
        "explanation": "Hai phong trào đấu tranh chính trị sôi sục này chứng tỏ sự thức tỉnh mạnh mẽ của tinh thần dân tộc dân chủ trong tầng lớp trí thức, thanh niên và thị dân.",
        "trapAnalysis": "Đây là đợt sóng dân chủ công khai thức tỉnh tinh thần yêu nước rộng rãi trong nhân dân đô thị."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Công hội bí mật đầu tiên của công nhân Việt Nam do ai thành lập năm 1920 tại Sài Gòn?",
        "options": [
          "Tôn Đức Thắng",
          "Nguyễn Đức Cảnh",
          "Trần Văn Cung",
          "Ngô Gia Tự"
        ],
        "correct": 0,
        "explanation": "Năm 1920, đồng chí Tôn Đức Thắng sau khi trở về từ Pháp đã thành lập Công hội bí mật tại xưởng Ba Son (Sài Gòn).",
        "trapAnalysis": "Công hội Ba Son (1920) gắn liền với đồng chí Tôn Đức Thắng."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Nguyễn Ái Quốc tham gia sáng lập Đảng Cộng sản Pháp tại Đại hội Tours vào thời gian nào?",
        "options": [
          "Tháng 12/1920",
          "Tháng 07/1920",
          "Tháng 06/1919",
          "Tháng 01/1921"
        ],
        "correct": 0,
        "explanation": "Từ ngày 25 đến ngày 30/12/1920, tại Đại hội Tours, Người bỏ phiếu thành lập Đảng Cộng sản Pháp và trở thành người cộng sản Việt Nam đầu tiên.",
        "trapAnalysis": "Tháng 12/1920 là mốc gia nhập Quốc tế Cộng sản và lập Đảng CS Pháp."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Hình ảnh 'hai cánh của một con chim' trong tư tưởng Nguyễn Ái Quốc nói về mối quan hệ giữa:",
        "options": [
          "Cách mạng vô sản ở chính quốc và cách mạng giải phóng dân tộc ở thuộc địa",
          "Giai cấp công nhân và giai cấp nông dân",
          "Lực lượng chính trị và lực lượng quân sự vũ trang",
          "Chủ nghĩa yêu nước truyền thống và tinh thần quốc tế vô sản"
        ],
        "correct": 0,
        "explanation": "Người ví chủ nghĩa đế quốc như con đỉa hai vòi, còn cách mạng vô sản ở chính quốc và cách mạng thuộc địa như hai cánh của một con chim, phải phối hợp nhịp nhàng mới bay lên được.",
        "trapAnalysis": "Hình ảnh 'hai cánh của một con chim' biểu thị mối quan hệ mật thiết bình đẳng giữa cách mạng chính quốc và thuộc địa."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tại Mát-xcơ-va (1923), Nguyễn Ái Quốc được bầu vào Ban Chấp hành của tổ chức quốc tế nào?",
        "options": [
          "Quốc tế Nông dân",
          "Quốc tế Thanh niên",
          "Quốc tế Công hội đỏ",
          "Ủy ban Chống chiến tranh đế quốc"
        ],
        "correct": 0,
        "explanation": "Tháng 10/1923, tại Đại hội lần thứ nhất Quốc tế Nông dân, Người được bầu vào Ban Chấp hành và Đoàn Chủ tịch Quốc tế Nông dân.",
        "trapAnalysis": "Bác được bầu vào Đoàn Chủ tịch Hội đồng Quốc tế Nông dân năm 1923."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Vì sao Hội Việt Nam Cách mạng Thanh niên (6/1925) được xem là tổ chức quá độ phù hợp?",
        "options": [
          "Vì trình độ giác ngộ của quần chúng lúc đó chưa thể tiếp nhận ngay Đảng Cộng sản",
          "Vì chính quyền thực dân Pháp cho phép tổ chức này hoạt động công khai",
          "Vì tổ chức này không mang tính chất cách mạng vô sản",
          "Vì Quốc tế Cộng sản cấm thành lập Đảng Cộng sản ở các xứ thuộc địa"
        ],
        "correct": 0,
        "explanation": "Khi phong trào công nhân và quần chúng còn ở bước chuyển tiếp, thành lập Hội VN Cách mạng Thanh niên là hình thức quá độ sáng tạo để bồi dưỡng giác ngộ cán bộ trước khi thành lập Đảng.",
        "trapAnalysis": "Tổ chức quá độ phù hợp với tâm lý yêu nước và trình độ chính trị thực tế của thanh niên lúc bấy giờ."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Bí danh của Nguyễn Ái Quốc khi hoạt động cách mạng tại Thái Lan (1928 - 1929) là gì?",
        "options": [
          "Thầu Chín",
          "Văn Ba",
          "Lý Thụy",
          "Tống Văn Sơ"
        ],
        "correct": 0,
        "explanation": "Tại Thái Lan, Người mang bí danh Thầu Chín, hòa mình vào kiều bào mở trường học, dịch sách, xây dựng cơ sở yêu nước.",
        "trapAnalysis": "Thầu Chín (Thái Lan); Lý Thụy (Quảng Châu); Tống Văn Sơ (vụ án Hồng Kông 1931)."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Ý nghĩa phương pháp luận to lớn nhất của phong trào 'Vô sản hóa' (1928) là gì?",
        "options": [
          "Gắn liền lý luận cách mạng Mác - Lênin với thực tiễn đấu tranh của giai cấp công nhân",
          "Tập trung mua sắm trang bị máy móc cơ giới cho nông thôn",
          "Tổ chức đưa toàn bộ hội viên sang định cư ở các nước tư bản",
          "Giải tán hoàn toàn các chi bộ thanh niên trí thức ở thành thị"
        ],
        "correct": 0,
        "explanation": "'Vô sản hóa' thực hiện xuất sắc nguyên lý 'học đi đôi với hành', kết hợp chủ nghĩa Mác với phong trào công nhân, biến lý luận thành sức mạnh vật chất.",
        "trapAnalysis": "Ý nghĩa lớn nhất: Kết hợp nhuần nhuyễn lý luận Mác - Lênin với thực tiễn phong trào công nhân."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Đại hội lần thứ nhất của Hội Việt Nam Cách mạng Thanh niên (tháng 5/1929) diễn ra ở đâu?",
        "options": [
          "Hương Cảng, Trung Quốc",
          "Quảng Châu, Trung Quốc",
          "Hà Nội, Việt Nam",
          "Sài Gòn, Việt Nam"
        ],
        "correct": 0,
        "explanation": "Tháng 5/1929, Đại hội toàn quốc của Hội VN Cách mạng Thanh niên họp tại Hương Cảng (Trung Quốc).",
        "trapAnalysis": "Đại hội Hội VN Cách mạng Thanh niên họp tại Hương Cảng tháng 5/1929."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Lý do đoàn đại biểu Kỳ bộ Bắc Kỳ bỏ về nước tại Đại hội tháng 5/1929 là gì?",
        "options": [
          "Đề nghị thành lập Đảng Cộng sản ngay không được đa số đại hội chấp thuận",
          "Bị cảnh sát Anh tại Hương Cảng phát hiện và truy quét",
          "Bất đồng về việc phân chia quỹ tài chính của tổ chức",
          "Phản đối việc kết nạp thêm hội viên từ các trường đại học"
        ],
        "correct": 0,
        "explanation": "Đoàn đại biểu Bắc Kỳ (do Ngô Gia Tự, Trần Văn Cung...) nhận thấy thời cơ lập Đảng đã chín muồi, khi đề xuất lập Đảng CS không được thông qua nên họ rút về nước để tự lập Đảng.",
        "trapAnalysis": "Lý do bỏ về: Đòi lập Đảng Cộng sản ngay lập tức nhưng đại hội chưa đồng ý."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Hai đại biểu của tổ chức An Nam Cộng sản Đảng tham dự Hội nghị thành lập Đảng đầu năm 1930 là ai?",
        "options": [
          "Châu Văn Liêm và Nguyễn Thiệu",
          "Trịnh Đình Cửu và Nguyễn Đức Cảnh",
          "Lê Hồng Phong và Hà Huy Tập",
          "Trần Phú và Ngô Gia Tự"
        ],
        "correct": 0,
        "explanation": "Đại diện của An Nam Cộng sản Đảng tại Hội nghị thành lập Đảng là hai đồng chí Châu Văn Liêm (Việt) và Nguyễn Thiệu (Nghĩa).",
        "trapAnalysis": "Châu Văn Liêm và Nguyễn Thiệu là đại biểu An Nam CS Đảng."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Văn kiện 'Chính cương vắn tắt của Đảng' (2/1930) xác định nhiệm vụ chính trị hàng đầu là gì?",
        "options": [
          "Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam hoàn toàn độc lập",
          "Tập trung phát triển công nghiệp nhẹ và xóa bỏ chế độ độc quyền ngoại thương",
          "Thương lượng với Toàn quyền Đông Dương để thành lập chế độ tự trị",
          "Phân chia toàn bộ của cải địa chủ cho các tầng lớp thị dân nghèo"
        ],
        "correct": 0,
        "explanation": "Về chính trị: 'Đánh đổ đế quốc chủ nghĩa Pháp và bọn phong kiến, làm cho nước Nam được hoàn toàn độc lập, dựng lên chính phủ công nông binh'.",
        "trapAnalysis": "Nhiệm vụ chính trị số một trong Cương lĩnh: Đánh đổ đế quốc Pháp và phong kiến tay sai, giành độc lập hoàn toàn."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Về văn hóa - xã hội, Cương lĩnh chính trị đầu tiên (2/1930) nêu rõ khẩu hiệu tiến bộ nào?",
        "options": [
          "Dân chúng được tự do tổ chức, nam nữ bình quyền, phổ thông giáo dục theo hướng công nông hóa",
          "Bắt buộc mọi người dân phải cải đạo sang tôn giáo mới",
          "Xóa bỏ hoàn toàn chữ Quốc ngữ để học chữ Pháp",
          "Đóng cửa toàn bộ các trường tư thục của tư sản dân tộc"
        ],
        "correct": 0,
        "explanation": "Về xã hội: Dân chúng được tự do tổ chức; nam nữ bình quyền; phổ thông giáo dục theo công nông hóa.",
        "trapAnalysis": "Cương lĩnh mang tư tưởng giải phóng con người tiến bộ: tự do tổ chức, bình đẳng giới tính và phổ cập giáo dục."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Cương lĩnh tháng 2/1930 xác định người lãnh đạo cách mạng là Đảng Cộng sản - đội tiên phong của:",
        "options": [
          "Giai cấp vô sản",
          "Giai cấp nông dân",
          "Tầng lớp trí thức",
          "Khối đại đoàn kết dân tộc"
        ],
        "correct": 0,
        "explanation": "Cương lĩnh nêu rõ: 'Đảng là đội tiên phong của đạo quân vô sản gồm một số lớn giai cấp công nhân và làm cho họ có đủ năng lực lãnh đạo quần chúng'.",
        "trapAnalysis": "Đảng là đội tiên phong của giai cấp vô sản (giai cấp công nhân)."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Thực tiễn lịch sử cách mạng Việt Nam đã chứng minh tính đúng đắn của Cương lĩnh tháng 2/1930 ở điểm nào?",
        "options": [
          "Độc lập dân tộc gắn liền với chủ nghĩa xã hội là con đường duy nhất đúng đắn",
          "Chỉ cần tập trung vào ruộng đất là giành được toàn bộ chính quyền",
          "Cách mạng chỉ có thể thắng lợi khi các nước đế quốc tự sụp đổ",
          "Không cần xây dựng liên minh công nông mà chỉ cần trí thức"
        ],
        "correct": 0,
        "explanation": "Đường lối giương cao ngọn cờ độc lập dân tộc gắn liền với CNXH do Nguyễn Ái Quốc vạch ra từ năm 1930 đã đưa cách mạng Việt Nam đi từ thắng lợi này đến thắng lợi khác.",
        "trapAnalysis": "Chân lý lịch sử: Độc lập dân tộc gắn liền với CNXH là sợi chỉ đỏ xuyên suốt mọi thắng lợi."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Vai trò cá nhân của Nguyễn Ái Quốc tại Hội nghị hợp nhất Đảng (1930) được đánh giá là:",
        "options": [
          "Người sáng lập, linh hồn của hội nghị với uy tín chính trị tuyệt đối quy tụ các tổ chức",
          "Người quan sát viên thụ động ghi chép biên bản nghị quyết",
          "Đại biểu của phong trào vô sản hải ngoại không có quyền biểu quyết",
          "Người bảo vệ lập trường của riêng tổ chức An Nam Cộng sản Đảng"
        ],
        "correct": 0,
        "explanation": "Bằng uy tín lớn lao và năng lực lý luận kiệt xuất, Người đã xóa bỏ bất đồng cục bộ, hợp nhất thành công các tổ chức cộng sản và vạch ra Cương lĩnh sáng suốt.",
        "trapAnalysis": "Nguyễn Ái Quốc là linh hồn, người chủ trì quyết định sự thành công trọn vẹn của Hội nghị thành lập Đảng."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Sau Hội nghị hợp nhất, Ban Chấp hành Trung ương lâm thời của Đảng do ai đứng đầu làm Trưởng ban?",
        "options": [
          "Trịnh Đình Cửu",
          "Nguyễn Đức Cảnh",
          "Trần Phú",
          "Nguyễn Ái Quốc"
        ],
        "correct": 0,
        "explanation": "Đồng chí Trịnh Đình Cửu được Hội nghị cử làm người đứng đầu Ban Chấp hành Trung ương lâm thời của Đảng.",
        "trapAnalysis": "Trịnh Đình Cửu là người đứng đầu Ban Chấp hành Trung ương lâm thời đầu năm 1930."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Huyện nào ở Nghệ An được coi là nơi thành lập chính quyền Xô viết đầu tiên vào tháng 9/1930?",
        "options": [
          "Thanh Chương và Nam Đàn",
          "Quỳnh Lưu và Diễn Châu",
          "Hưng Nguyên và Kỳ Anh",
          "Nghi Lộc và Can Lộc"
        ],
        "correct": 0,
        "explanation": "Chính quyền Xô viết ra đời sớm nhất ở các xã thuộc hai huyện Thanh Chương và Nam Đàn (Nghệ An) sau các cuộc biểu tình thị uy của quần chúng.",
        "trapAnalysis": "Thanh Chương và Nam Đàn là cái nôi ra đời sớm nhất của chính quyền Xô viết."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Chính sách quân sự nổi bật của chính quyền Xô viết Nghệ - Tĩnh là:",
        "options": [
          "Thành lập các đội Tự vệ Đỏ canh gác giữ gìn trật tự và huấn luyện quân sự",
          "Mua sắm pháo binh hạng nặng chuẩn bị đánh chiếm Vinh",
          "Ký hiệp ước tương trợ quân sự với các nước láng giềng",
          "Bắt buộc thanh niên gia nhập quân đội viễn chinh Pháp"
        ],
        "correct": 0,
        "explanation": "Chính quyền Xô viết duy trì lực lượng tự vệ đỏ, huấn luyện quân sự bằng gậy gộc giáo mác, bảo vệ an ninh thôn xóm trước sự khủng bố của địch.",
        "trapAnalysis": "Tổ chức Tự vệ Đỏ là lực lượng vũ trang nòng cốt của chính quyền Xô viết."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Luận cương chính trị tháng 10/1930 xác định điều kiện cốt tử để cách mạng Đông Dương thắng lợi là:",
        "options": [
          "Có một Đảng Cộng sản có đường lối chính trị đúng, có kỷ luật tập trung và liên hệ mật thiết với quần chúng",
          "Quân đội Đồng minh tiến hành can thiệp quân sự lật đổ chính quyền thuộc địa",
          "Toàn bộ giai cấp địa chủ tự nguyện giao lại ruộng đất cho nhà nước",
          "Kinh tế Đông Dương vượt qua được cuộc đại suy thoái toàn cầu"
        ],
        "correct": 0,
        "explanation": "Luận cương chỉ rõ: 'Điều kiện cốt tử cho sự thắng lợi của cách mạng ở Đông Dương là cần phải có một Đảng Cộng sản có một đường lối chính trị đúng đắn, có kỷ luật tập trung...'.",
        "trapAnalysis": "Sự lãnh đạo của Đảng Cộng sản với kỷ luật tập trung là điều kiện tiên quyết trong Luận cương."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Về phương pháp cách mạng, Luận cương tháng 10/1930 chủ trương giành chính quyền bằng cách nào?",
        "options": [
          "Vũ trang bạo động khởi nghĩa theo khuôn phép quân sự",
          "Đấu tranh nghị trường ôn hòa thông qua các cuộc bầu cử",
          "Tiến hành chiến tranh ủy nhiệm giữa các cường quốc",
          "Tập trung đàm phán ngoại giao với chính phủ Pháp"
        ],
        "correct": 0,
        "explanation": "Luận cương khẳng định: 'Võ trang bạo động không phải là một việc tình cờ, muốn làm lúc nào cũng được... phải theo khuôn phép nhà binh' để đánh đổ chính quyền địch.",
        "trapAnalysis": "Vũ trang bạo động cướp chính quyền là con đường duy nhất được Luận cương khẳng định."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đồng chí Tổng Bí thư đầu tiên của Đảng hy sinh tại nhà thương Chợ Quán (Sài Gòn) vào ngày tháng năm nào?",
        "options": [
          "06/09/1931",
          "12/09/1930",
          "31/07/1932",
          "27/03/1935"
        ],
        "correct": 0,
        "explanation": "Ngày 6/9/1931, đồng chí Tổng Bí thư Trần Phú trút hơi thở cuối cùng tại nhà thương Chợ Quán sau những đòn tra tấn dã man của mật thám Pháp.",
        "trapAnalysis": "Ngày hy sinh của Tổng Bí thư Trần Phú: 6/9/1931."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Nội dung trọng tâm trong bản 'Chương trình hành động của Đảng' (6/1932) là:",
        "options": [
          "Đòi các quyền tự do dân chủ, ân xá tù chính trị và củng cố lại các tổ chức Đảng",
          "Phát động ngay cuộc Tổng khởi nghĩa vũ trang trên toàn Đông Dương",
          "Thương lượng với thực dân Pháp để Đảng được hoạt động công khai hợp pháp",
          "Chuyển toàn bộ cơ quan Trung ương sang hoạt động tại châu Âu"
        ],
        "correct": 0,
        "explanation": "Bản Chương trình hành động vạch ra các mục tiêu đấu tranh cụ thể trước mắt: tự do nghiệp đoàn, tự do ngôn luận, ân xá tù chính trị, ngày làm 8 giờ... để tập hợp lại lực lượng.",
        "trapAnalysis": "Chương trình hành động (6/1932) đưa ra các khẩu hiệu thiết thực để củng cố và hồi sinh phong trào."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đại hội đại biểu lần thứ I của Đảng (3/1935) có bao nhiêu đại biểu chính thức tham dự?",
        "options": [
          "13 đại biểu",
          "25 đại biểu",
          "50 đại biểu",
          "100 đại biểu"
        ],
        "correct": 0,
        "explanation": "Đại hội I họp tại Ma Cao gồm 13 đại biểu thay mặt cho khoảng 600 đảng viên của các tổ chức Đảng trong và ngoài nước.",
        "trapAnalysis": "Đại hội I chỉ có 13 đại biểu tham dự trong bối cảnh hoạt động bí mật ngặt nghèo."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Chủ trương thành lập Mặt trận Nhân dân rộng rãi chống phát xít của Đại hội VII Quốc tế Cộng sản (1935) do ai khởi xướng?",
        "options": [
          "G. Đi-mi-trốp (Georgi Dimitrov)",
          "V.I. Lênin",
          "J.Xtalin",
          "M.Goóc-ba-chốp"
        ],
        "correct": 0,
        "explanation": "Tổng Thư ký Quốc tế Cộng sản Georgi Dimitrov đã đọc báo cáo lịch sử đề ra sách lược thành lập Mặt trận Nhân dân rộng rãi chống phát xít.",
        "trapAnalysis": "Dimitrov là nhà lý luận kiệt xuất khởi xướng chiến lược Mặt trận nhân dân chống phát xít."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Vì sao phong trào 1936 - 1939 ở Việt Nam không nêu khẩu hiệu đánh đổ đế quốc Pháp?",
        "options": [
          "Vì Chính phủ Mặt trận Nhân dân Pháp đang nắm quyền có xu hướng tiến bộ cần tranh thủ",
          "Vì thực dân Pháp đã tự nguyện trao trả độc lập cho ba kỳ",
          "Vì giai cấp công nhân không còn ý chí đấu tranh giải phóng dân tộc",
          "Vì phát xít Nhật đã thay thế hoàn toàn vị trí thống trị của Pháp"
        ],
        "correct": 0,
        "explanation": "Ở Pháp, Mặt trận Nhân dân lên cầm quyền có chính sách tiến bộ nới lỏng ở thuộc địa, nên Đảng chủ trương chĩa mũi nhọn vào bọn phản động thuộc địa không chịu thi hành chính sách của Mặt trận Nhân dân.",
        "trapAnalysis": "Chỉ chĩa mũi nhọn vào bọn thực dân phản động thuộc địa, tranh thủ chính phủ Mặt trận Nhân dân tiến bộ ở Pháp."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Tổ chức 'Ủy ban lâm thời trù bị Đông Dương Đại hội' thành lập năm 1936 do ai tham gia lãnh đạo?",
        "options": [
          "Nguyễn An Ninh, Phan Văn Hùm, Tạ Thu Thâu...",
          "Hoàng Hoa Thám và Phan Bội Châu",
          "Nguyễn Thái Học và Phó Đức Chính",
          "Lương Văn Can và Nguyễn Quyền"
        ],
        "correct": 0,
        "explanation": "Ủy ban trù bị Đông Dương Đại hội tại Nam Kỳ có sự tham gia của Nguyễn An Ninh cùng nhiều trí thức và các nhóm chính trị dân chủ.",
        "trapAnalysis": "Ủy ban trù bị Đông Dương Đại hội tập hợp đông đảo nhân sĩ trí thức tiến bộ ở Nam Kỳ."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Bài học lớn nhất về xây dựng khối liên minh của Đảng qua phong trào Dân chủ 1936 - 1939 là:",
        "options": [
          "Xây dựng Mặt trận Dân chủ thống nhất rộng rãi trên cơ sở nòng cốt công nông",
          "Chỉ liên minh với tầng lớp tư sản lớn ở các thành phố cảng",
          "Không cho phép các tầng lớp nhân sĩ trí thức tham gia mặt trận",
          "Giải tán các đoàn thể quần chúng nông dân để tránh bị lộ"
        ],
        "correct": 0,
        "explanation": "Bài học kinh nghiệm là biết tập hợp mọi lực lượng tiến bộ, yêu chuộng hòa bình dân chủ vào Mặt trận Thống nhất rộng rãi dựa trên nền tảng liên minh công nông.",
        "trapAnalysis": "Bài học lớn nhất là nghệ thuật xây dựng Mặt trận thống nhất rộng rãi."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội nghị Trung ương lần thứ 6 của Đảng (tháng 11/1939) họp tại địa điểm nào?",
        "options": [
          "Bà Điểm (Hóc Môn, Gia Định)",
          "Đình Bảng (Từ Sơn, Bắc Ninh)",
          "Pác Bó (Hà Quảng, Cao Bằng)",
          "Tân Trào (Sơn Dương, Tuyên Quang)"
        ],
        "correct": 0,
        "explanation": "Hội nghị TW 6 họp tại Bà Điểm (Hóc Môn, Gia Định) do Tổng Bí thư Nguyễn Văn Cừ chủ trì vào tháng 11/1939.",
        "trapAnalysis": "Bà Điểm (Hóc Môn) là địa danh lịch sử gắn với Hội nghị TW 6 mở đầu chuyển hướng chiến lược."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chủ trương thay đổi tên gọi Mặt trận tại Hội nghị TW 6 (11/1939) nhằm mục đích gì?",
        "options": [
          "Tập trung mọi ngọn lửa đấu tranh vào kẻ thù chính là đế quốc chiến tranh",
          "Lấy lòng chính phủ bảo hộ thực dân Pháp thời chiến",
          "Phân hóa hàng ngũ giai cấp công nhân và thợ thuyền",
          "Chuẩn bị cho việc nhượng bộ một phần lãnh thổ cho Nhật"
        ],
        "correct": 0,
        "explanation": "Đổi thành Mặt trận Phản đế để giương cao mục tiêu chống đế quốc và chiến tranh xâm lược, đặt quyền lợi dân tộc lên trên hết.",
        "trapAnalysis": "Mặt trận Phản đế ra đời nhằm chĩa mũi nhọn vào chủ nghĩa đế quốc phát xít."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cuộc Khởi nghĩa Nam Kỳ bùng nổ vào đêm 22 rạng sáng ngày nào năm 1940?",
        "options": [
          "23/11/1940",
          "27/09/1940",
          "13/01/1941",
          "19/05/1941"
        ],
        "correct": 0,
        "explanation": "Khởi nghĩa Nam Kỳ bùng nổ dữ dội từ đêm 22 rạng sáng ngày 23/11/1940 tại hầu khắp các tỉnh Nam Kỳ (Gia Định, Chợ Lớn, Mỹ Tho...).",
        "trapAnalysis": "Ngày 23/11/1940 là ngày Khởi nghĩa Nam Kỳ bùng nổ (sau này là Ngày Nam Kỳ khởi nghĩa)."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Đồng chí Phan Đăng Lưu đã nhận nhiệm vụ gì từ Hội nghị TW 7 (11/1940) trước khi bị bắt?",
        "options": [
          "Về Nam Kỳ truyền đạt lệnh hoãn cuộc khởi nghĩa vũ trang",
          "Sang Trung Quốc đón đồng chí Nguyễn Ái Quốc về nước",
          "Lãnh đạo cuộc bãi công của thợ xe lửa Trường Thi",
          "Chỉ huy trực tiếp đội du kích Bắc Sơn đánh đồn Mỏ Nhài"
        ],
        "correct": 0,
        "explanation": "Đồng chí Phan Đăng Lưu được TW cử về Nam Kỳ để chỉ đạo hoãn khởi nghĩa, nhưng khi về đến Sài Gòn thì đồng chí bị địch bắt và cuộc khởi nghĩa đã bùng nổ.",
        "trapAnalysis": "Phan Đăng Lưu nhận chỉ thị hoãn Khởi nghĩa Nam Kỳ nhưng lệnh về không kịp."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Khẳng định nào của Hội nghị TW 8 (5/1941) thể hiện tinh thần dân tộc cao nhất?",
        "options": [
          "Trong lúc này nếu không giải quyết được vấn đề dân tộc giải phóng thì quyền lợi giai cấp vạn năm cũng không đòi lại được",
          "Cách mạng vô sản phải phục tùng hoàn toàn các mục tiêu ruộng đất của bần nông",
          "Phải ưu tiên đánh đổ giai cấp địa chủ trước rồi mới đánh đuổi quân phát xít sau",
          "Quyền lợi của dân tộc thuộc địa phải chờ đợi thắng lợi của công nhân Pháp"
        ],
        "correct": 0,
        "explanation": "HNTW 8 chỉ rõ: Quyền lợi của bộ phận, của giai cấp phải đặt dưới quyền lợi sinh tử của toàn thể quốc gia dân tộc.",
        "trapAnalysis": "Luận điểm bất hủ của HNTW 8: Giải phóng dân tộc là trên hết, trước hết."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Đơn vị Cứu quốc quân I được thành lập trên cơ sở lực lượng vũ trang nào?",
        "options": [
          "Đội du kích Bắc Sơn",
          "Đội du kích Ba Tơ",
          "Tự vệ đỏ Nghệ Tĩnh",
          "Việt Nam Giải phóng quân"
        ],
        "correct": 0,
        "explanation": "Ngày 14/2/1941, tại khu rừng Khuổi Nọi (Võ Nhai), Đội du kích Bắc Sơn được thống nhất thành lập đơn vị Cứu quốc quân I.",
        "trapAnalysis": "Cứu quốc quân I phát triển trực tiếp từ Đội du kích Bắc Sơn."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chỉ thị thành lập Đội Việt Nam Tuyên truyền Giải phóng quân (12/1944) do ai trực tiếp viết?",
        "options": [
          "Hồ Chí Minh",
          "Trường Chinh",
          "Võ Nguyên Giáp",
          "Hoàng Văn Thụ"
        ],
        "correct": 0,
        "explanation": "Đồng chí Hồ Chí Minh đã trực tiếp viết bản chỉ thị lịch sử gửi đồng chí Võ Nguyên Giáp nêu rõ phương châm, nguyên tắc và dự báo tương lai của đội quân giải phóng.",
        "trapAnalysis": "Hồ Chí Minh là người ra chỉ thị thành lập Đội VNTTGPQ."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Số lượng chiến sĩ ban đầu của Đội Việt Nam Tuyên truyền Giải phóng quân khi thành lập là:",
        "options": [
          "34 chiến sĩ",
          "50 chiến sĩ",
          "100 chiến sĩ",
          "12 chiến sĩ"
        ],
        "correct": 0,
        "explanation": "Đội được thành lập ngày 22/12/1944 gồm đúng 34 cán bộ chiến sĩ kiên trung, trong đó có 3 chiến sĩ nữ.",
        "trapAnalysis": "34 chiến sĩ là con số lịch sử ngày thành lập Quân đội nhân dân Việt Nam."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Cao trào kháng Nhật cứu nước (3/1945 - 8/1945) được Đảng xác định là giai đoạn có tính chất gì?",
        "options": [
          "Thời kỳ tiền khởi nghĩa làm đòn bẩy trực tiếp dẫn tới Tổng khởi nghĩa",
          "Thời kỳ phòng ngự bảo toàn tuyệt đối lực lượng bí mật",
          "Thời kỳ đàm phán ngoại giao ký kết hiệp ước hòa bình",
          "Thời kỳ thoái trào tạm thời của cách mạng Đông Dương"
        ],
        "correct": 0,
        "explanation": "Cao trào kháng Nhật cứu nước là thời kỳ 'tiền khởi nghĩa', làm cho không khí cách mạng sục sôi, tập dượt cho quần chúng tiến lên khởi nghĩa toàn diện.",
        "trapAnalysis": "Cao trào kháng Nhật cứu nước là thời kỳ tiền khởi nghĩa chuẩn bị trực tiếp cho Tổng khởi nghĩa."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cơ quan chỉ đạo tối cao của cuộc khởi nghĩa toàn quốc được thành lập đêm 13/8/1945 là:",
        "options": [
          "Ủy ban Khởi nghĩa toàn quốc",
          "Ủy ban Dân tộc Giải phóng Việt Nam",
          "Tổng bộ Việt Minh",
          "Ban Thường vụ Trung ương Đảng"
        ],
        "correct": 0,
        "explanation": "Đêm 13/8/1945, Hội nghị liên tịch đã lập ra Ủy ban Khởi nghĩa toàn quốc do đồng chí Trường Chinh trực tiếp phụ trách.",
        "trapAnalysis": "Ủy ban Khởi nghĩa toàn quốc thành lập đêm 13/8 ban bố Quân lệnh số 1."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chính phủ bù nhìn Trần Trọng Kim do phát xít Nhật dựng lên mang tính chất gì?",
        "options": [
          "Chính phủ tay sai bù nhìn hoàn toàn bất lực và hoang mang tột độ",
          "Chính phủ liên hiệp tiến bộ đại diện cho quyền lợi nhân dân",
          "Chính phủ quân sự độc tài trực tiếp cai trị các tỉnh miền Bắc",
          "Chính phủ dân chủ độc lập được cộng đồng quốc tế công nhận"
        ],
        "correct": 0,
        "explanation": "Chính phủ Trần Trọng Kim chỉ là con rối tay sai do Nhật dựng lên sau ngày 9/3/1945, khi Nhật đầu hàng thì chính phủ này hoàn toàn tê liệt tan rã.",
        "trapAnalysis": "Chính phủ Trần Trọng Kim là bù nhìn tay sai của Nhật, không có thực quyền."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hai tỉnh cuối cùng trong cả nước giành được chính quyền trong Cách mạng Tháng Tám năm 1945 là:",
        "options": [
          "Đồng Nai Thượng và Hà Tiên",
          "Cà Mau và Bạc Liêu",
          "Cao Bằng và Lạng Sơn",
          "Lai Châu và Sơn La"
        ],
        "correct": 0,
        "explanation": "Đến ngày 28/8/1945, cuộc khởi nghĩa thắng lợi tại hai tỉnh lỵ cuối cùng là Đồng Nai Thượng và Hà Tiên, hoàn thành thắng lợi trọn vẹn Tổng khởi nghĩa trong cả nước.",
        "trapAnalysis": "Đồng Nai Thượng và Hà Tiên (28/8/1945) là hai địa phương giành chính quyền muộn nhất."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tuyên ngôn Độc lập (2/9/1945) trích dẫn Tuyên ngôn độc lập của Mỹ và Tuyên ngôn nhân quyền của Pháp nhằm:",
        "options": [
          "Khẳng định các quyền dân tộc thiêng liêng trên cơ sở những chân lý được nhân loại thừa nhận",
          "Chứng minh Việt Nam sẵn sàng lệ thuộc vào các cường quốc phương Tây",
          "Kêu gọi các nước đế quốc đưa quân đội vào giúp đỡ Việt Nam",
          "Bắt chước nguyên xi mô hình nhà nước tư sản của phương Tây"
        ],
        "correct": 0,
        "explanation": "Hồ Chí Minh đã dùng chính lý lẽ bất hủ về nhân quyền của phương Tây để suy rộng ra 'quyền dân tộc': mọi dân tộc trên thế giới đều sinh ra bình đẳng, có quyền tự do và quyền mưu cầu hạnh phúc.",
        "trapAnalysis": "Nghệ thuật lập luận: Dùng chân lý của đối phương để khẳng định quyền độc lập thiêng liêng của dân tộc mình."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Nghệ thuật chớp thời cơ trong Cách mạng Tháng Tám năm 1945 để lại bài học gì cho hiện nay?",
        "options": [
          "Chủ động đón đầu xu thế, nhạy bén nắm bắt vận hội và đẩy lùi nguy cơ thách thức",
          "Luôn chờ đợi sự trợ giúp vô điều kiện từ bên ngoài",
          "Chỉ hành động khi tình hình quốc tế hoàn toàn yên tĩnh và ổn định",
          "Tập trung đầu tư dàn trải không cần chọn khâu đột phá"
        ],
        "correct": 0,
        "explanation": "Bài học chớp thời cơ là dự báo chính xác tình hình, chuẩn bị sẵn sàng thực lực, khi thời cơ đến thì kiên quyết hành động thần tốc để giành thắng lợi lớn nhất.",
        "trapAnalysis": "Bài học thời cơ: Nhạy cảm chính trị, chuẩn bị sẵn thực lực để chớp thời cơ, biến nguy cơ thành thời cơ."
      }
    ]
  },
  {
    "id": "de_06",
    "code": "MÃ ĐỀ: 106",
    "title": "Đề 06: Cao Trào Kháng Nhật Cứu Nước & Thắng Lợi CMT8 1945",
    "description": "Bao quát từ Chỉ thị Nhật - Pháp bắn nhau, xây dựng căn cứ địa, lực lượng vũ trang đến nghệ thuật chớp thời cơ Tổng khởi nghĩa giành chính quyền Tháng Tám 1945.",
    "duration": 40,
    "questions": [
      {
        "id": 1,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp tại Việt Nam bắt đầu từ năm nào?",
        "options": [
          "Năm 1914",
          "Năm 1919",
          "Năm 1925",
          "Năm 1930"
        ],
        "correct": 1,
        "explanation": "Cuộc khai thác thuộc địa lần thứ hai của thực dân Pháp diễn ra từ năm 1919 (sau Thế chiến I) đến năm 1929 (bắt đầu cuộc khủng hoảng kinh tế thế giới).",
        "trapAnalysis": "1919 - 1929 là thời gian diễn ra cuộc khai thác thuộc địa lần thứ hai của Pháp ở Đông Dương."
      },
      {
        "id": 2,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Lĩnh vực kinh tế nào được thực dân Pháp đầu tư với số vốn lớn nhất trong cuộc khai thác lần thứ hai?",
        "options": [
          "Nông nghiệp đồn điền cao su và khai mỏ",
          "Công nghiệp nặng chế tạo máy móc",
          "Công nghệ thông tin và viễn thông",
          "Đóng tàu chiến và luyện kim màu"
        ],
        "correct": 0,
        "explanation": "Trong cuộc khai thác lần hai, tư bản Pháp tập trung vốn nhiều nhất vào nông nghiệp (chủ yếu là đồn điền cao su) và công nghiệp khai khoáng (đặc biệt là than đá).",
        "trapAnalysis": "Pháp ưu tiên đồn điền cao su và khai mỏ vì quay vòng vốn nhanh và khả năng thu lợi nhuận siêu ngạch."
      },
      {
        "id": 3,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Ngân hàng nào nắm độc quyền phát hành tiền tệ và chi phối toàn bộ huyết mạch kinh tế Đông Dương?",
        "options": [
          "Ngân hàng Đông Dương (Banque de l'Indochine)",
          "Ngân hàng Thuộc địa Pháp",
          "Ngân hàng Quốc gia An Nam",
          "Ngân hàng Phát triển Viễn Đông"
        ],
        "correct": 0,
        "explanation": "Ngân hàng Đông Dương thành lập năm 1875 là đại diện quyền lực tối cao của tư bản tài chính Pháp, nắm độc quyền phát hành giấy bạc và kiểm soát tài chính.",
        "trapAnalysis": "Ngân hàng Đông Dương là cơ quan đầu não chi phối toàn bộ nền kinh tế Đông Dương."
      },
      {
        "id": 4,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Đặc điểm cơ bản của bộ phận tư sản mại bản ở Việt Nam thời thuộc địa là gì?",
        "options": [
          "Có quyền lợi kinh tế và chính trị gắn chặt với tư bản thực dân Pháp",
          "Tích cực tham gia các phong trào giải phóng dân tộc",
          "Có mâu thuẫn đối kháng sâu sắc với chính quyền thuộc địa",
          "Lãnh đạo các tổ chức nghiệp đoàn thợ thuyền bí mật"
        ],
        "correct": 0,
        "explanation": "Tư sản mại bản là bộ phận tư sản làm đại lý, bao thầu, thu gom nguyên liệu cho Pháp, quyền lợi gắn chặt với đế quốc nên là đối tượng của cách mạng.",
        "trapAnalysis": "Tư sản mại bản là tay sai đắc lực của tư bản Pháp, đối lập với tư sản dân tộc."
      },
      {
        "id": 5,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Vua Duy Tân tham gia cuộc khởi nghĩa vũ trang chống Pháp năm 1916 do ai tổ chức?",
        "options": [
          "Thái Phiên và Trần Cao Vân",
          "Phan Bội Châu và Cường Để",
          "Lương Văn Can và Nguyễn Quyền",
          "Nguyễn Thái Học và Phó Đức Chính"
        ],
        "correct": 0,
        "explanation": "Năm 1916, hai nhà yêu nước Thái Phiên và Trần Cao Vân thuộc Việt Nam Quang phục Hội đã vận động vua Duy Tân tham gia cuộc khởi nghĩa tại Huế.",
        "trapAnalysis": "Thái Phiên và Trần Cao Vân là hai chí sĩ lãnh đạo cuộc khởi nghĩa năm 1916 cùng vua Duy Tân."
      },
      {
        "id": 6,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Vụ đầu độc binh lính Pháp tại Hà Nội (Hà Thành đầu độc) diễn ra vào năm nào?",
        "options": [
          "Năm 1908",
          "Năm 1914",
          "Năm 1917",
          "Năm 1920"
        ],
        "correct": 0,
        "explanation": "Đêm 27/6/1908, vụ đầu độc binh lính Pháp nổ ra tại Hà Nội do binh lính người Việt phối hợp với nghĩa quân Hoàng Hoa Thám ngoài căn cứ thực hiện.",
        "trapAnalysis": "Vụ Hà Thành đầu độc gắn liền với mốc năm 1908."
      },
      {
        "id": 7,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Khởi nghĩa Thái Nguyên (1917) do Đội Cấn và Lương Ngọc Quyến lãnh đạo nổ ra tại đâu?",
        "options": [
          "Trại lính khố xanh và nhà tù Thái Nguyên",
          "Mỏ than Phấn Mễ Thái Nguyên",
          "Khu đồn điền chè Sông Cầu",
          "Vùng rừng núi Tam Đảo"
        ],
        "correct": 0,
        "explanation": "Đêm 30 rạng ngày 31/8/1917, binh lính yêu nước do Trịnh Văn Cấn (Đội Cấn) và chí sĩ Lương Ngọc Quyến lãnh đạo đã khởi nghĩa phá nhà tù Thái Nguyên.",
        "trapAnalysis": "Khởi nghĩa Thái Nguyên (1917) là cuộc nổi dậy tiêu biểu của binh lính người Việt yêu nước."
      },
      {
        "id": 8,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Mục tiêu ban đầu của phong trào 'Chấn hưng nội hóa, bài trừ ngoại hóa' (1919) là:",
        "options": [
          "Tẩy chay hàng hóa của tư sản ngoại kiều và ủng hộ hàng hóa của tư sản Việt Nam",
          "Vũ trang đánh chiếm các kho hàng của thương gia Pháp",
          "Đòi chia lại ruộng đất cho nông dân nghèo ở miền Tây",
          "Thành lập hợp tác xã sản xuất nông sản kiểu mới"
        ],
        "correct": 0,
        "explanation": "Phong trào do tầng lời tư sản và tiểu tư sản dân tộc phát động nhằm bảo vệ quyền lợi buôn bán và sản xuất của giới công thương bản địa.",
        "trapAnalysis": "Phong trào 'Chấn hưng nội hóa' là biểu hiện đấu tranh kinh tế của giai cấp tư sản dân tộc."
      },
      {
        "id": 9,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Nhận biết",
        "question": "Đảng Lập hiến do Bùi Quang Chiêu sáng lập năm 1923 đại diện cho quyền lợi của tầng lớp nào?",
        "options": [
          "Đại địa chủ và tư sản mại bản Nam Kỳ",
          "Giai cấp công nhân thợ thuyền",
          "Giai cấp nông dân nghèo Nam Bộ",
          "Tầng lớp học sinh sinh viên cấp tiến"
        ],
        "correct": 0,
        "explanation": "Đảng Lập hiến là tổ chức chính trị của tầng lớp đại địa chủ và tư sản lớn ở Nam Kỳ, chủ trương thỏa hiệp với thực dân Pháp để chia sẻ quyền lợi.",
        "trapAnalysis": "Đảng Lập hiến (1923) theo khuynh hướng cải lương thỏa hiệp của tư sản mại bản và đại địa chủ."
      },
      {
        "id": 10,
        "chapter": "Phần 1: Bối cảnh & Phong trào yêu nước (1858 - 1929)",
        "level": "Thông hiểu",
        "question": "Tổ chức 'Tâm Tâm xã' (Tân Việt Thanh niên Đoàn) được thành lập năm 1923 tại đâu?",
        "options": [
          "Quảng Châu, Trung Quốc",
          "Hương Cảng, Trung Quốc",
          "Paris, Pháp",
          "Băng Cốc, Thái Lan"
        ],
        "correct": 0,
        "explanation": "Tâm Tâm Xã do các thanh niên yêu nước cấp tiến như Lê Hồng Sơn, Hồ Tùng Mậu, Lê Văn Phan... thành lập năm 1923 tại Quảng Châu (Trung Quốc).",
        "trapAnalysis": "Tâm Tâm Xã thành lập năm 1923 tại Quảng Châu, là mảnh đất ươm mầm để Nguyễn Ái Quốc xây dựng tổ chức sau này."
      },
      {
        "id": 11,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Sau khi kết thúc Thế chiến I năm 1917, Nguyễn Tất Thành từ nước Anh trở lại quốc gia nào?",
        "options": [
          "Nước Pháp",
          "Nước Nga",
          "Nước Mỹ",
          "Nước Trung Hoa"
        ],
        "correct": 0,
        "explanation": "Cuối năm 1917, sau thời gian lao động ở Anh, Người trở lại Paris (Pháp) hòa mình vào phong trào công nhân và cộng đồng Việt kiều yêu nước.",
        "trapAnalysis": "Cuối năm 1917 Bác từ Anh trở lại Pháp, bắt đầu thời kỳ hoạt động chính trị sôi nổi."
      },
      {
        "id": 12,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Trong bản 'Yêu sách của nhân dân An Nam' (1919), điểm nào thể hiện quyền tự do dân chủ quan trọng?",
        "options": [
          "Tự do ngôn luận, tự do báo chí, tự do hội họp và lập hội",
          "Đòi Toàn quyền Đông Dương phải từ chức ngay lập tức",
          "Đòi nhượng lại tuyến đường sắt Bắc - Nam cho người bản xứ",
          "Yêu cầu cấp phát bằng cử nhân đại học cho toàn bộ sĩ phu"
        ],
        "correct": 0,
        "explanation": "Bản Yêu sách nêu rõ yêu cầu thực dân Pháp phải thừa nhận các quyền tự do tối thiểu: tự do đi lại, tự do hội họp, tự do báo chí và bãi bỏ chế độ cai trị bằng sắc lệnh.",
        "trapAnalysis": "Yêu sách 1919 đòi quyền tự do dân chủ cơ bản: ngôn luận, báo chí, lập hội, bình đẳng pháp lý."
      },
      {
        "id": 13,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Tờ báo nào của Đảng Xã hội Pháp đã đăng bản Luận cương của Lênin mà Nguyễn Ái Quốc được đọc vào tháng 7/1920?",
        "options": [
          "Báo L'Humanité (Nhân đạo)",
          "Báo Le Paria",
          "Báo La Vie Ouvrière",
          "Báo Le Populaire"
        ],
        "correct": 0,
        "explanation": "Bản 'Sơ thảo lần thứ nhất những luận cương...' của Lênin được đăng trên báo L'Humanité vào các ngày 16 và 17/7/1920.",
        "trapAnalysis": "Báo L'Humanité (Nhân đạo) là tờ báo đăng Luận cương của Lênin."
      },
      {
        "id": 14,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Câu nói nổi tiếng của Nguyễn Ái Quốc khi đọc xong Luận cương Lênin là gì?",
        "options": [
          "Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!",
          "Không có gì quý hơn độc lập tự do!",
          "Đoàn kết, đoàn kết, đại đoàn kết! Thành công, thành công, đại thành công!",
          "Nước Việt Nam là một, dân tộc Việt Nam là một!"
        ],
        "correct": 0,
        "explanation": "Trong phòng trọ nhỏ ở Paris, Người đã xúc động reo lên: 'Hỡi đồng bào bị đọa đày đau khổ! Đây là cái cần thiết cho chúng ta, đây là con đường giải phóng chúng ta!'.",
        "trapAnalysis": "Lời reo vui bất hủ khi tìm thấy con đường cứu nước của Lãnh tụ Nguyễn Ái Quốc tháng 7/1920."
      },
      {
        "id": 15,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Nguyễn Ái Quốc đến Quảng Châu (Trung Quốc) vào thời gian nào để chuẩn bị thành lập Đảng?",
        "options": [
          "Tháng 11/1924",
          "Tháng 06/1923",
          "Tháng 02/1925",
          "Tháng 06/1925"
        ],
        "correct": 0,
        "explanation": "Ngày 11/11/1924, đồng chí Nguyễn Ái Quốc với bí danh Lý Thụy từ Mát-xcơ-va đến Quảng Châu (Trung Quốc) - cái nôi cách mạng sôi động lúc bấy giờ.",
        "trapAnalysis": "Tháng 11/1924 Bác đến Quảng Châu bắt đầu trực tiếp gầy dựng tổ chức."
      },
      {
        "id": 16,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tác phẩm 'Đường Kách mệnh' (1927) nêu rõ Đảng muốn vững mạnh thì phải có yếu tố cốt lõi nào?",
        "options": [
          "Phải có chủ nghĩa làm cốt, trong Đảng ai ai cũng phải hiểu và theo chủ nghĩa ấy",
          "Phải tích lũy thật nhiều vàng bạc và vũ khí tối tân",
          "Phải ký kết hiệp ước bảo hộ với các nước tư bản hùng mạnh",
          "Phải kết nạp toàn bộ các quan lại phong kiến tiến bộ"
        ],
        "correct": 0,
        "explanation": "Người viết: 'Đảng muốn vững thì phải có chủ nghĩa làm cốt, trong đảng ai ai cũng phải hiểu, ai ai cũng phải theo chủ nghĩa ấy. Đảng mà không có chủ nghĩa cũng như người không có trí khôn'.",
        "trapAnalysis": "Nguyên lý xây dựng Đảng trong Đường Kách mệnh: Đảng phải lấy chủ nghĩa Mác - Lênin làm cốt lõi."
      },
      {
        "id": 17,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Bảy đảng viên đầu tiên của Chi bộ cộng sản 5D Hàm Long (3/1929) xuất thân từ tổ chức nào?",
        "options": [
          "Kỳ bộ Bắc Kỳ của Hội Việt Nam Cách mạng Thanh niên",
          "Đảng Lập hiến Nam Kỳ",
          "Hội Phục Việt Trung Kỳ",
          "Chi bộ hải ngoại tại Thái Lan"
        ],
        "correct": 0,
        "explanation": "Bảy đồng chí sáng lập chi bộ 5D Hàm Long đều là những cán bộ ưu tú thuộc Kỳ bộ Bắc Kỳ của Hội Việt Nam Cách mạng Thanh niên.",
        "trapAnalysis": "Chi bộ 5D Hàm Long được lập bởi các cán bộ cốt cán của Kỳ bộ Bắc Kỳ Hội VN Cách mạng Thanh niên."
      },
      {
        "id": 18,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tại sao sự ra đời của ba tổ chức cộng sản năm 1929 phản ánh xu thế khách quan của lịch sử?",
        "options": [
          "Chứng tỏ chủ nghĩa Mác - Lênin đã thấm sâu vào phong trào công nhân và đòi hỏi phải có Đảng lãnh đạo",
          "Chứng tỏ thực dân Pháp đã hoàn toàn đầu hàng trước phong trào đấu tranh",
          "Chứng tỏ phong trào công nhân Việt Nam muốn duy trì sự chia rẽ lâu dài",
          "Do Quốc tế Cộng sản trực tiếp cử ba phái đoàn về ba kỳ thành lập"
        ],
        "correct": 0,
        "explanation": "Sự xuất hiện đồng thời ba tổ chức cộng sản chứng minh phong trào cách mạng trong nước đã phát triển vượt bậc, việc thành lập chính đảng cộng sản là đòi hỏi tất yếu khách quan.",
        "trapAnalysis": "Ba tổ chức ra đời phản ánh sự phát triển chín muồi của tư tưởng vô sản tại Việt Nam."
      },
      {
        "id": 19,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Hội nghị hợp nhất các tổ chức cộng sản (đầu năm 1930) bắt đầu họp từ ngày nào?",
        "options": [
          "06/01/1930",
          "03/02/1930",
          "07/02/1930",
          "24/02/1930"
        ],
        "correct": 0,
        "explanation": "Hội nghị hợp nhất khai mạc ngày 6/1/1930 và bế mạc ngày 7/2/1930 tại Cửu Long (Hương Cảng).",
        "trapAnalysis": "Hội nghị bắt đầu từ 6/1/1930; ngày 3/2/1930 là ngày kỷ niệm được Đảng chọn."
      },
      {
        "id": 20,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Nội dung nào được Nguyễn Ái Quốc nhấn mạnh trong 'Lời kêu gọi' nhân dịp thành lập Đảng?",
        "options": [
          "Công nông binh bị áp bức hãy đoàn kết lại dưới lá cờ của Đảng Cộng sản Việt Nam",
          "Kêu gọi các nước phương Tây viện trợ tài chính khẩn cấp cho chính phủ cách mạng",
          "Khuyên nhân dân bảo toàn tính mạng và nộp thuế đầy đủ cho chính quyền Pháp",
          "Chỉ đạo tiến hành ám sát cá nhân các quan chức cấp cao của thuộc địa"
        ],
        "correct": 0,
        "explanation": "Trong Lời kêu gọi, Người vạch trần tội ác đế quốc và tha thiết kêu gọi: 'Hỡi công nông binh! Hỡi đồng bào bị áp bức! Hãy gia nhập Đảng Cộng sản Việt Nam!'.",
        "trapAnalysis": "Lời kêu gọi thành lập Đảng tập hợp công nông binh đứng lên làm cách mạng."
      },
      {
        "id": 21,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tính chất cách mạng thể hiện trong Cương lĩnh chính trị đầu tiên (2/1930) là:",
        "options": [
          "Cách mạng giải phóng dân tộc kết hợp chặt chẽ với cách mạng ruộng đất",
          "Cách mạng tư sản cổ điển giành quyền thống trị cho tư sản",
          "Cách mạng tôn giáo nhằm khôi phục trật tự đạo đức Nho giáo",
          "Cách mạng quân quản nhằm thiết lập nền độc tài quân phiệt"
        ],
        "correct": 0,
        "explanation": "Cương lĩnh kết hợp nhuần nhuyễn hai nhiệm vụ giải phóng dân tộc (nhiệm vụ tư sản dân quyền) và cách mạng ruộng đất (thổ địa cách mạng).",
        "trapAnalysis": "Bản chất Cương lĩnh: Kết hợp độc lập dân tộc và thổ địa cách mạng hướng tới CNXH."
      },
      {
        "id": 22,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Văn kiện 'Điều lệ vắn tắt của Đảng' (2/1930) quy định nguyên tắc tổ chức cơ bản nào?",
        "options": [
          "Tập trung dân chủ",
          "Dân chủ đa nguyên",
          "Thủ trưởng độc đoán",
          "Tự do tuyệt đối không kỷ luật"
        ],
        "correct": 0,
        "explanation": "Điều lệ vắn tắt xác lập Đảng Cộng sản Việt Nam tổ chức theo nguyên tắc tập trung dân chủ của đảng kiểu mới kiểu Lênin-nít.",
        "trapAnalysis": "Nguyên tắc tổ chức cơ bản của Đảng là Tập trung dân chủ."
      },
      {
        "id": 23,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Vận dụng",
        "question": "Sự đúng đắn và sáng tạo của Cương lĩnh tháng 2/1930 bắt nguồn từ yếu tố nào?",
        "options": [
          "Nắm vững bản chất chủ nghĩa Mác - Lênin và thấu hiểu sâu sắc thực tiễn xã hội Việt Nam",
          "Sao chép nguyên văn mô hình cách mạng vô sản của nước Nga Xô viết",
          "Thực hiện máy móc các chỉ thị tả khuynh của Quốc tế Cộng sản",
          "Dựa trên các học thuyết chính trị phong kiến Nho gia cổ truyền"
        ],
        "correct": 0,
        "explanation": "Nguyễn Ái Quốc đã không giáo điều sách vở mà xuất phát từ thực tiễn một nước thuộc địa nửa phong kiến, nhận diện chính xác mâu thuẫn chủ yếu là mâu thuẫn dân tộc.",
        "trapAnalysis": "Sáng tạo lớn nhất: Vận dụng chủ nghĩa Mác - Lênin vào hoàn cảnh thực tiễn Việt Nam."
      },
      {
        "id": 24,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Thông hiểu",
        "question": "Tại sao việc thành lập Đảng năm 1930 là bước ngoặt vô cùng quan trọng của lịch sử Việt Nam?",
        "options": [
          "Từ đây cách mạng Việt Nam có ngọn cờ lãnh đạo duy nhất đúng đắn và gắn liền với phong trào thế giới",
          "Chế độ thực dân Pháp đã hoàn toàn sụp đổ ngay trong mùa xuân năm 1930",
          "Nước Việt Nam đã được các nước tư bản công nhận độc lập về mặt ngoại giao",
          "Giai cấp phong kiến đã hoàn toàn từ bỏ quyền sở hữu ruộng đất"
        ],
        "correct": 0,
        "explanation": "Đảng ra đời mở ra thời kỳ cách mạng Việt Nam có đường lối cứu nước đúng đắn, chấm dứt thời kỳ mò mẫm bế tắc, đưa cách mạng hòa vào dòng thác thời đại mới.",
        "trapAnalysis": "Bước ngoặt vĩ đại: Cách mạng có chính đảng tiên phong lãnh đạo với đường lối khoa học."
      },
      {
        "id": 25,
        "chapter": "Phần 2: Nguyễn Ái Quốc & Thành lập Đảng (1920 - 1930)",
        "level": "Nhận biết",
        "question": "Ai là người trực tiếp thảo luận và thống nhất việc hợp nhất ba tổ chức cộng sản cùng Nguyễn Ái Quốc?",
        "options": [
          "Các đại biểu của Đông Dương CS Đảng và An Nam CS Đảng",
          "Đại diện của Quốc dân Đảng và Đảng Lập hiến",
          "Đại diện của chính quyền Quốc Dân Đảng Trung Quốc",
          "Các đại biểu của Đảng Cộng sản Liên Xô tại Hồng Kông"
        ],
        "correct": 0,
        "explanation": "Nguyễn Ái Quốc đã trực tiếp ngồi lại cùng các đại biểu của Đông Dương CS Đảng và An Nam CS Đảng để phân tích và thống nhất thành lập Đảng CSVN.",
        "trapAnalysis": "Hai tổ chức trực tiếp tham gia hội đàm hợp nhất là Đông Dương CS Đảng và An Nam CS Đảng."
      },
      {
        "id": 26,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Tại Hà Tĩnh, chính quyền Xô viết hình thành sớm nhất ở các huyện nào vào cuối năm 1930?",
        "options": [
          "Can Lộc, Thạch Hà, Cẩm Xuyên",
          "Kỳ Anh, Hương Sơn, Đức Thọ",
          "Nghi Xuân, Vũ Quang, Lộc Hà",
          "Hương Khê, Can Lộc, Kỳ Anh"
        ],
        "correct": 0,
        "explanation": "Ở Hà Tĩnh, chính quyền Xô viết ra đời mạnh mẽ tại các huyện Can Lộc, Thạch Hà, Cẩm Xuyên... từ tháng 9/1930.",
        "trapAnalysis": "Can Lộc, Thạch Hà, Cẩm Xuyên là địa bàn tiêu biểu của chính quyền Xô viết Hà Tĩnh."
      },
      {
        "id": 27,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Sự tàn bạo của thực dân Pháp đối với phong trào 1930 - 1931 được thể hiện qua hành động nào?",
        "options": [
          "Dùng máy bay ném bom vào đoàn người biểu tình tay không và khủng bố trắng đẫm máu",
          "Cắt điện nước và cấm họp chợ ở các huyện miền núi",
          "Cho phép các đảng viên cộng sản được tị nạn chính trị sang Pháp",
          "Thương lượng bồi thường đất đai cho nông dân nghèo"
        ],
        "correct": 0,
        "explanation": "Thực dân Pháp đã thẳng tay ném bom tàn sát đoàn biểu tình ở Hưng Nguyên, đốt phá làng xóm, giam cầm và xử bắn hàng ngàn chiến sĩ cách mạng.",
        "trapAnalysis": "Khủng bố trắng tàn bạo bằng bom đạn và máy chém là phản ứng dã man của thực dân Pháp."
      },
      {
        "id": 28,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Vụ án Tống Văn Sơ (Nguyễn Ái Quốc bị bắt tại Hồng Kông) diễn ra vào năm nào?",
        "options": [
          "Năm 1931",
          "Năm 1930",
          "Năm 1935",
          "Năm 1941"
        ],
        "correct": 0,
        "explanation": "Ngày 6/6/1931, Nguyễn Ái Quốc với tên gọi Tống Văn Sơ bị cảnh sát Anh bắt trái phép tại số nhà 186 phố Tam Kung (Cửu Long, Hồng Kông).",
        "trapAnalysis": "Vụ án Tống Văn Sơ tại Hồng Kông bắt đầu từ ngày 6/6/1931."
      },
      {
        "id": 29,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Luật sư tiến bộ người Anh nào đã tận tâm bào chữa cứu thoát Nguyễn Ái Quốc trong vụ án Hồng Kông?",
        "options": [
          "Luật sư F.H. Loseby",
          "Luật sư Paul Doumer",
          "Luật sư Albert Sarraut",
          "Luật sư Georges Bidault"
        ],
        "correct": 0,
        "explanation": "Luật sư Francis Henry Loseby cùng vợ và các đồng nghiệp chí công vô tư đã bào chữa thắng lợi, giúp Nguyễn Ái Quốc thoát khỏi nanh vuốt thực dân Pháp.",
        "trapAnalysis": "Luật sư Loseby là ân nhân đã bảo vệ thành công Nguyễn Ái Quốc trước tòa án thực dân Anh."
      },
      {
        "id": 30,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Mặc dù phong trào 1930 - 1931 bị dìm trong biển máu, Đảng ta đã rút ra được bài học lớn gì?",
        "options": [
          "Bài học về xây dựng khối liên minh công nông và nghệ thuật sử dụng bạo lực cách mạng",
          "Bài học về việc từ bỏ hoàn toàn phương pháp đấu tranh vũ trang bạo động",
          "Bài học về việc giao quyền chỉ huy quân sự cho các tướng lĩnh nước ngoài",
          "Bài học về việc phân tán tổ chức Đảng thành các chi bộ độc lập không liên lạc"
        ],
        "correct": 0,
        "explanation": "Phong trào để lại bài học vô giá về liên minh công nông, về xây dựng chính quyền công nông và chuẩn bị khởi nghĩa vũ trang giành chính quyền.",
        "trapAnalysis": "Bài học lớn nhất của Xô viết Nghệ Tĩnh là khẳng định sức mạnh của khối liên minh công nông."
      },
      {
        "id": 31,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Đồng chí Tổng Bí thư Lê Hồng Phong hy sinh tại nhà tù Côn Đảo vào năm nào?",
        "options": [
          "Năm 1942",
          "Năm 1935",
          "Năm 1939",
          "Năm 1945"
        ],
        "correct": 0,
        "explanation": "Đồng chí Lê Hồng Phong bị địch đày ra Côn Đảo và trút hơi thở cuối cùng vào ngày 6/9/1942 sau những đòn tra tấn dã man trong hầm đá ngục tù.",
        "trapAnalysis": "Đồng chí Lê Hồng Phong hy sinh tại Côn Đảo năm 1942."
      },
      {
        "id": 32,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Thành công lớn nhất của Đại hội lần thứ I của Đảng (3/1935) là gì?",
        "options": [
          "Khôi phục được hệ thống tổ chức của Đảng từ Trung ương đến địa phương sau khủng bố",
          "Phát động ngay phong trào tổng bãi công phá hoại chiến tranh đế quốc",
          "Kêu gọi các nước phương Tây ủng hộ chính quyền Xô viết Đông Dương",
          "Xóa bỏ hoàn toàn tình trạng thất nghiệp trong công nhân thuộc địa"
        ],
        "correct": 0,
        "explanation": "Ý nghĩa lớn nhất của Đại hội I là khẳng định sự phục hồi hoàn toàn hệ thống tổ chức của Đảng và các tổ chức quần chúng sau những năm bị địch khủng bố trắng.",
        "trapAnalysis": "Ý nghĩa sống còn của Đại hội I: Khôi phục hoàn chỉnh hệ thống tổ chức Đảng từ TW đến cơ sở."
      },
      {
        "id": 33,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Hội nghị Trung ương Đảng tháng 3/1938 đã quyết định thành lập tổ chức mặt trận nào?",
        "options": [
          "Mặt trận Dân chủ Đông Dương",
          "Mặt trận Việt Minh",
          "Mặt trận Phản đế Đông Dương",
          "Mặt trận Tổ quốc Việt Nam"
        ],
        "correct": 0,
        "explanation": "Tháng 3/1938, Hội nghị Trung ương do Nguyễn Văn Cừ chủ trì đã quyết định đổi tên Mặt trận Thống nhất Nhân dân Phản đế thành Mặt trận Dân chủ Đông Dương.",
        "trapAnalysis": "Mặt trận Dân chủ Đông Dương được quyết định đổi tên tại HNTW tháng 3/1938."
      },
      {
        "id": 34,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Nhận biết",
        "question": "Cuốn sách 'Vấn đề dân cày' (1938) vạch trần nỗi khốn cùng của nông dân do hai tác giả nào biên soạn?",
        "options": [
          "Qua Ninh và Vân Đình (Trường Chinh và Võ Nguyên Giáp)",
          "Nguyễn Văn Cừ và Hà Huy Tập",
          "Lê Hồng Phong và Nguyễn Thị Minh Khai",
          "Trần Phú và Ngô Gia Tự"
        ],
        "correct": 0,
        "explanation": "Tác phẩm lý luận nổi tiếng 'Vấn đề dân cày' do hai đồng chí Trường Chinh (bút danh Qua Ninh) và Võ Nguyên Giáp (bút danh Vân Đình) biên soạn năm 1938.",
        "trapAnalysis": "Qua Ninh và Vân Đình là bút danh của Trường Chinh và Võ Nguyên Giáp."
      },
      {
        "id": 35,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Thông hiểu",
        "question": "Phong trào 'Đón phái viên Gô-đa (Godart)' đầu năm 1937 được Đảng sử dụng nhằm mục đích gì?",
        "options": [
          "Tập hợp quần chúng biểu tình thị uy đưa yêu sách đòi tự do cơm áo",
          "Tổ chức phục kích tiêu diệt viên thanh tra của chính phủ Pháp",
          "Chứng minh nhân dân Việt Nam hoàn toàn hài lòng với chế độ thuộc địa",
          "Quyên góp kinh phí để phái viên trở về nước Pháp an toàn"
        ],
        "correct": 0,
        "explanation": "Đảng đã biến các cuộc đón tiếp Gô-đa thành những cuộc biểu tình khổng lồ của hàng chục vạn quần chúng, hô vang khẩu hiệu đòi tự do, cơm áo, hòa bình.",
        "trapAnalysis": "Đón Gô-đa là hình thức biểu dương lực lượng và đưa bản dân nguyện của quần chúng lao động."
      },
      {
        "id": 36,
        "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
        "level": "Vận dụng",
        "question": "Ý nghĩa lịch sử quan trọng nhất của phong trào 1936 - 1939 đối với sự nghiệp giải phóng dân tộc là:",
        "options": [
          "Tổ chức và giác ngộ hàng triệu quần chúng thành một đội quân chính trị hùng hậu",
          "Đã giải phóng hoàn toàn vùng đồng bằng sông Hồng khỏi ách thực dân",
          "Thành lập được quân đội chính quy hiện đại sẵn sàng tác chiến",
          "Xóa bỏ hoàn toàn ách thống trị của phát xít Nhật trên toàn cõi Đông Dương"
        ],
        "correct": 0,
        "explanation": "Phong trào dân chủ 1936 - 1939 đã thức tỉnh và tập hợp hàng triệu quần chúng vào trận địa cách mạng, tạo nên đội quân chính trị khổng lồ chuẩn bị cho Tổng khởi nghĩa.",
        "trapAnalysis": "Ý nghĩa nổi bật nhất là xây dựng đội quân chính trị quần chúng rộng lớn cho CMT8."
      },
      {
        "id": 37,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Quân đội phát xít Nhật chính thức kéo vào xâm lược miền Bắc Việt Nam vào tháng năm nào?",
        "options": [
          "Tháng 09/1940",
          "Tháng 06/1940",
          "Tháng 12/1941",
          "Tháng 03/1945"
        ],
        "correct": 0,
        "explanation": "Ngày 22/9/1940, phát xít Nhật tiến công Lạng Sơn và đổ bộ vào Hải Phòng, chính thức đặt chân xâm lược Việt Nam.",
        "trapAnalysis": "Tháng 9/1940 là mốc phát xít Nhật tràn vào Đông Dương."
      },
      {
        "id": 38,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Chính sách 'nhổ lúa trồng đay' của phát xít Nhật và Pháp đã dẫn đến thảm họa khủng khiếp nào đầu năm 1945?",
        "options": [
          "Nạn đói lịch sử làm hơn 2 triệu đồng bào miền Bắc bị chết đói",
          "Dịch bệnh truyền nhiễm bùng phát trên toàn bán đảo Đông Dương",
          "Sự phá sản của toàn bộ các nhà máy dệt ở Nam Định",
          "Tình trạng ngập lụt kéo dài ở lưu vực sông Cửu Long"
        ],
        "correct": 0,
        "explanation": "Chính sách vơ vét thóc gạo và bắt dân ta nhổ lúa trồng đay, thầu dầu của phát xít Nhật đã gây ra nạn đói kinh hoàng làm hơn 2 triệu đồng bào ta thiệt mạng.",
        "trapAnalysis": "Nạn đói Ất Dậu 1945 cướp đi sinh mạng hơn 2 triệu người là hậu quả tàn khốc của tội ác Nhật - Pháp."
      },
      {
        "id": 39,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Cuộc Binh biến Đô Lương (tháng 1/1941) do ai lãnh đạo?",
        "options": [
          "Đội Cung (Nguyễn Văn Cung)",
          "Đội Cấn (Trịnh Văn Cấn)",
          "Lương Ngọc Quyến",
          "Hoàng Hoa Thám"
        ],
        "correct": 0,
        "explanation": "Đêm 13/1/1941, binh lính người Việt do Đội Cung (Nguyễn Văn Cung) chỉ huy đã nổi dậy chiếm đồn Rạng (Đô Lương, Nghệ An) rồi tiến về Vinh.",
        "trapAnalysis": "Đội Cung lãnh đạo Binh biến Đô Lương (1941); Đội Cấn lãnh đạo Khởi nghĩa Thái Nguyên (1917)."
      },
      {
        "id": 40,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Văn kiện nào do Hồ Chí Minh biên soạn năm 1941 hướng dẫn cách thức tổ chức đánh du kích?",
        "options": [
          "Tác phẩm 'Cách đánh du kích'",
          "Chỉ thị 'Kháng chiến kiến quốc'",
          "Tác phẩm 'Đường Kách mệnh'",
          "Chỉ thị 'Nhật - Pháp bắn nhau'"
        ],
        "correct": 0,
        "explanation": "Năm 1941 tại Pác Bó, Hồ Chí Minh đã trực tiếp biên soạn cuốn sách thực tiễn 'Cách đánh du kích' làm tài liệu huấn luyện quân sự cho cán bộ.",
        "trapAnalysis": "'Cách đánh du kích' (1941) là cẩm nang quân sự đầu tiên do Bác Hồ viết tại Pác Bó."
      },
      {
        "id": 41,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Đồng chí Hoàng Văn Thụ - Ủy viên Thường vụ TW Đảng - hy sinh oanh liệt tại trường bắn Tương Mai (Hà Nội) năm nào?",
        "options": [
          "Năm 1944",
          "Năm 1941",
          "Năm 1943",
          "Năm 1945"
        ],
        "correct": 0,
        "explanation": "Ngày 24/5/1944, đồng chí Hoàng Văn Thụ bị thực dân Pháp xử bắn tại trường bắn Tương Mai, ung dung trước họng súng quân thù nêu cao khí tiết cộng sản.",
        "trapAnalysis": "Đồng chí Hoàng Văn Thụ hy sinh ngày 24/5/1944 tại Hà Nội."
      },
      {
        "id": 42,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Tờ báo bí mật nào là cơ quan ngôn luận của Ban Chấp hành TW Đảng thời kỳ 1943 - 1945?",
        "options": [
          "Báo Cờ Giải Phóng",
          "Báo Búa Liềm",
          "Báo Cứu Quốc",
          "Báo Lao Động"
        ],
        "correct": 0,
        "explanation": "Báo 'Cờ Giải Phóng' do Tổng Bí thư Trường Chinh trực tiếp phụ trách, ra số đầu ngày 10/10/1942, là cơ quan tuyên truyền của Trung ương Đảng thời kỳ tiền khởi nghĩa.",
        "trapAnalysis": "Báo Cờ Giải Phóng là cơ quan ngôn luận của Trung ương Đảng Cộng sản Đông Dương."
      },
      {
        "id": 43,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Hội nghị Quân sự cách mạng Bắc Kỳ họp vào tháng 4/1945 tại địa phương nào?",
        "options": [
          "Hiệp Hòa (Bắc Giang)",
          "Đình Bảng (Bắc Ninh)",
          "Tân Trào (Tuyên Quang)",
          "Chợ Chu (Thái Nguyên)"
        ],
        "correct": 0,
        "explanation": "Từ ngày 15 đến 20/4/1945, Hội nghị Quân sự Bắc Kỳ do đồng chí Trường Chinh chủ trì họp tại Hiệp Hòa (Bắc Giang) để thống nhất lực lượng vũ trang.",
        "trapAnalysis": "Hội nghị Quân sự Bắc Kỳ họp tại Hiệp Hòa (Bắc Giang) tháng 4/1945."
      },
      {
        "id": 44,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Khẩu hiệu 'Phá kho thóc Nhật, giải quyết nạn đói' đã có tác dụng thực tiễn to lớn gì?",
        "options": [
          "Biến sự phẫn uất sinh tử của hàng triệu nông dân thành hành động cách mạng cụ thể",
          "Khiến quân đội phát xít Nhật lập tức chấp nhận đầu hàng vô điều kiện",
          "Giúp giải quyết triệt để vấn đề sở hữu ruộng đất cho toàn dân",
          "Đưa nước ta trở thành nước xuất khẩu gạo hàng đầu châu Á"
        ],
        "correct": 0,
        "explanation": "Khẩu hiệu đã đáp ứng trúng nhu cầu sống còn của nhân dân, biến nạn đói thành ngọn lửa cách mạng thiêu cháy quân thù, quy tụ quần chúng về phía Việt Minh.",
        "trapAnalysis": "Tác dụng: Khơi dậy và biến lòng căm thù của hàng triệu nông dân thành sức mạnh tiền khởi nghĩa."
      },
      {
        "id": 45,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Chiếc áo chàm và đôi dép cao su giản dị của Hồ Chí Minh xuất hiện gắn liền với thời kỳ hoạt động ở đâu?",
        "options": [
          "Chiến khu Pác Bó và Tân Trào",
          "Paris, nước Pháp",
          "Quảng Châu, Trung Quốc",
          "Mát-xcơ-va, Liên Xô"
        ],
        "correct": 0,
        "explanation": "Bộ áo chàm giản dị của đồng bào dân tộc thiểu số gắn liền với hình ảnh Bác Hồ những năm tháng sống và lãnh đạo cách mạng tại căn cứ Pác Bó và Tân Trào.",
        "trapAnalysis": "Hình ảnh áo chàm gắn với Bác Hồ ở căn cứ địa Việt Bắc (Pác Bó - Tân Trào)."
      },
      {
        "id": 46,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Vì sao cuộc Tổng khởi nghĩa tháng Tám năm 1945 nổ ra và giành thắng lợi nhanh chóng chỉ trong vòng 15 ngày?",
        "options": [
          "Nhờ sự chuẩn bị chu đáo suốt 15 năm, đường lối sáng suốt và nghệ thuật chớp đúng thời cơ",
          "Do quân đội Đồng minh trực tiếp tham chiến tiêu diệt chính quyền thân Nhật",
          "Do chính quyền tay sai Trần Trọng Kim chủ động trao lại quyền lực",
          "Do phát xít Nhật tự nguyện bàn giao các đồn bốt cho lực lượng cách mạng"
        ],
        "correct": 0,
        "explanation": "Thắng lợi thần tốc trong 15 ngày (từ 14 đến 28/8/1945) là kết tinh của 15 năm chuẩn bị rèn luyện qua các cao trào 1930 - 1931, 1936 - 1939, 1939 - 1945 và chớp thời cơ ngàn vàng.",
        "trapAnalysis": "Thắng lợi 15 ngày là nhờ kết quả của 15 năm rèn luyện, chuẩn bị lực lượng và chớp thời cơ kiệt xuất."
      },
      {
        "id": 47,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Nhận biết",
        "question": "Bài hát 'Tiến quân ca' của nhạc sĩ Văn Cao được chọn làm Quốc ca Việt Nam tại sự kiện nào?",
        "options": [
          "Quốc dân Đại hội Tân Trào (tháng 8/1945)",
          "Đại hội đại biểu toàn quốc lần thứ I (1935)",
          "Hội nghị thành lập Đảng (1930)",
          "Hội nghị Trung ương lần thứ 8 (1941)"
        ],
        "correct": 0,
        "explanation": "Tại Quốc dân Đại hội Tân Trào (16 - 17/8/1945), bài hát 'Tiến quân ca' do nhạc sĩ Văn Cao sáng tác đã chính thức được chọn làm Quốc ca.",
        "trapAnalysis": "Đại hội Quốc dân Tân Trào chọn cờ đỏ sao vàng làm Quốc kỳ và Tiến quân ca làm Quốc ca."
      },
      {
        "id": 48,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Lời thoái vị nổi tiếng của vua Bảo Đại chiều ngày 30/8/1945 tại Ngọ Môn (Huế) là:",
        "options": [
          "Thà làm dân một nước độc lập còn hơn làm vua một nước nô lệ",
          "Trẫm xin nhường lại ngai vàng cho hoàng tộc triều Nguyễn",
          "Xin nhân dân cho trẫm được bảo toàn toàn bộ tài sản hoàng gia",
          "Trẫm xin đi tị nạn sang các nước phương Tây tự do"
        ],
        "correct": 0,
        "explanation": "Khi trao ấn vàng và kiếm ngọc cho phái đoàn chính phủ lâm thời, vua Bảo Đại đã tuyên bố câu nói bất hủ: 'Thà làm dân một nước tự do còn hơn làm vua một nước nô lệ'.",
        "trapAnalysis": "Câu nói lịch sử của Bảo Đại kết thúc vĩnh viễn chế độ quân chủ chuyên chế ở Việt Nam."
      },
      {
        "id": 49,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Thông hiểu",
        "question": "Lời thề thiêng liêng đanh thép kết thúc bản Tuyên ngôn Độc lập ngày 2/9/1945 là gì?",
        "options": [
          "Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy",
          "Quyết tử để cho Tổ quốc quyết sinh",
          "Không có gì quý hơn độc lập tự do",
          "Nước Việt Nam là một, sông có thể cạn núi có thể mòn song chân lý đó không bao giờ thay đổi"
        ],
        "correct": 0,
        "explanation": "Bản Tuyên ngôn Độc lập khép lại bằng lời thề son sắt của toàn thể dân tộc: 'Toàn thể dân tộc Việt Nam quyết đem tất cả tinh thần và lực lượng, tính mạng và của cải để giữ vững quyền tự do, độc lập ấy'.",
        "trapAnalysis": "Lời thề giữ vững độc lập tự do kết thúc bản Tuyên ngôn Độc lập 2/9/1945."
      },
      {
        "id": 50,
        "chapter": "Phần 4: Chuyển hướng chiến lược & CMT8 (1939 - 1945)",
        "level": "Vận dụng",
        "question": "Giá trị thời đại vĩ đại nhất của thắng lợi Cách mạng Tháng Tám năm 1945 là:",
        "options": [
          "Mở ra kỷ nguyên độc lập tự do của dân tộc gắn liền với con đường tiến lên chủ nghĩa xã hội",
          "Đưa Việt Nam trở thành quốc gia có nền kinh tế phát triển nhất khu vực Đông Nam Á",
          "Xóa bỏ hoàn toàn tình trạng nợ công và tranh chấp thương mại quốc tế",
          "Giúp Việt Nam gia nhập ngay các định chế tài chính quốc tế đa phương"
        ],
        "correct": 0,
        "explanation": "Giá trị lịch sử to lớn nhất: Cách mạng Tháng Tám đã mở ra kỷ nguyên mới trong lịch sử dân tộc - kỷ nguyên giải phóng dân tộc gắn liền với giải phóng giai cấp và tiến lên CNXH.",
        "trapAnalysis": "Giá trị cốt lõi: Mở ra kỷ nguyên độc lập tự do gắn liền với CNXH."
      }
    ]
  }
];

// Hàm rút ngẫu nhiên 50 câu hỏi từ toàn bộ ngân hàng 300 câu hỏi chuẩn hóa của 6 đề
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

  // Lấy đúng 50 câu ngẫu nhiên
  const selected50 = shuffled.slice(0, 50).map((q, idx) => ({
    ...q,
    id: idx + 1
  }));

  return {
    id: "de_random",
    code: "MÃ ĐỀ: 999",
    title: "Đề Khảo Thí Ngẫu Nhiên (Trích Từ Ngân Hàng 300 Câu Chuẩn Hóa)",
    description: "Hệ thống tự động rút trích ngẫu nhiên 50 câu hỏi từ ngân hàng 300 câu hỏi chuẩn mực của Chương 1 để rèn luyện phản xạ phòng thi thực tế.",
    duration: 40,
    questions: selected50
  };
}

// Bảng tóm tắt tri thức cốt lõi (Sổ tay Sinh viên VKU cần nhớ - Chương 1)
const CORE_KNOWLEDGE_SUMMARY = [
  {
    "chapter": "Phần 1: Bối cảnh lịch sử & Phong trào yêu nước trước 1930 (1858 - 1929)",
    "points": [
      "Bối cảnh quốc tế: CNTB chuyển sang CNĐQ độc quyền; Thắng lợi CMT10 Nga (1917) mở ra thời đại quá độ lên CNXH; Quốc tế Cộng sản ra đời (3/1919).",
      "Pháp xâm lược (1858): Nổ súng tại Đà Nẵng (1/9/1858); Triều đình nhà Nguyễn lần lượt ký các hiệp ước đầu hàng (1862, 1874, 1883, Pa-tơ-nốt 1884), biến Việt Nam thành nước thuộc địa nửa phong kiến.",
      "Chính sách cai trị của Pháp: Chia để trị (Bắc Kỳ nửa bảo hộ, Trung Kỳ bảo hộ, Nam Kỳ thuộc địa); độc quyền kinh tế (thuế muối, rượu, thuốc phiện; đồn điền cao su và mỏ than); văn hóa ngu dân nô dịch.",
      "Phân hóa giai cấp: Địa chủ (đại địa chủ phản động, trung tiểu địa chủ yêu nước); Nông dân (>90% dân số, bị áp bức nặng nhất, động lực to lớn); Công nhân (ra đời khai thác lần 1, trước tư sản, tiên phong lãnh đạo); Tư sản (mại bản và dân tộc); Tiểu tư sản (trí thức, sinh viên, nhạy bén với cách mạng).",
      "Mâu thuẫn chủ yếu & bao trùm: Toàn thể dân tộc Việt Nam >< Thực dân Pháp xâm lược và tay sai.",
      "Phong trào yêu nước phong kiến: Phong trào Cần Vương (1885 - 1896, kết thúc sau khởi nghĩa Hương Khê của Phan Đình Phùng); Khởi nghĩa Yên Thế (1884 - 1913, phong trào nông dân tự vệ do Hoàng Hoa Thám lãnh đạo kéo dài gần 30 năm).",
      "Khuynh hướng dân chủ tư sản: Phan Bội Châu (bạo động, cầu viện Nhật: Hội Duy Tân, Đông Du, Việt Nam Quang phục Hội); Phan Châu Trinh (cải cách nâng cao dân trí: Khai dân trí, chấn dân khí, hậu dân sinh); Việt Nam Quốc dân Đảng (Nguyễn Thái Học, khởi nghĩa Yên Bái 1930 'Không thành công cũng thành nhân'). Thất bại khẳng định sự bế tắc của khuynh hướng tư sản."
    ]
  },
  {
    "chapter": "Phần 2: Nguyễn Ái Quốc & Sự thành lập Đảng CSVN (1911 - 1930)",
    "points": [
      "Hành trình cứu nước: 5/6/1911 rời bến Nhà Rồng (tàu Latouche-Tréville); 1919 gửi Yêu sách nhân dân An Nam tới Hội nghị Versailles đòi quyền tự do dân chủ; Tháng 7/1920 đọc Sơ thảo Luận cương Lênin tìm ra con đường cứu nước vô sản; Tháng 12/1920 bỏ phiếu tán thành Quốc tế 3 và sáng lập Đảng CS Pháp tại Đại hội Tours (từ người yêu nước thành chiến sĩ cộng sản).",
      "Chuẩn bị tư tưởng & chính trị: Báo Le Paria (1922); Bản án chế độ thực dân Pháp (1925); Đường Kách mệnh (1927 - khẳng định cách mệnh trước hết phải có Đảng cách mệnh vững mạnh lấy chủ nghĩa Mác - Lênin làm cốt).",
      "Chuẩn bị tổ chức: Hội Việt Nam Cách mạng Thanh niên (6/1925 tại Quảng Châu); Báo Thanh Niên (21/6/1925); Phong trào 'Vô sản hóa' (1928) đưa cán bộ vào nhà máy đồn điền rèn luyện lập trường giai cấp.",
      "Ba tổ chức cộng sản năm 1929: Chi bộ 5D Hàm Long (3/1929); Đông Dương CS Đảng (6/1929 tại Bắc Kỳ, báo Búa Liềm); An Nam CS Đảng (8/1929 tại Nam Kỳ, tạp chí Bôn-sê-vích); Đông Dương CS Liên đoàn (9/1929 - 1/1930 tại Trung Kỳ). Nguy cơ chia rẽ đòi hỏi phải thống nhất.",
      "Hội nghị thành lập Đảng (6/1 - 7/2/1930): Nguyễn Ái Quốc chủ trì tại Cửu Long (Hương Cảng) phái viên Quốc tế Cộng sản; hợp nhất thành Đảng Cộng sản Việt Nam; thông qua Cương lĩnh chính trị đầu tiên.",
      "Nội dung Cương lĩnh 2/1930: Làm tư sản dân quyền cách mạng và thổ địa cách mạng để đi tới xã hội cộng sản; Công - Nông là gốc; đoàn kết lôi kéo tiểu tư sản, trí thức, trung tiểu địa chủ, tư sản dân tộc; ĐCS là đội tiên phong; Cách mạng VN là bộ phận của cách mạng vô sản thế giới.",
      "Quy luật ra đời: Đảng CSVN = Chủ nghĩa Mác - Lênin + Phong trào công nhân + Phong trào yêu nước."
    ]
  },
  {
    "chapter": "Phần 3: Cao trào 1930 - 1935 & Phong trào Dân chủ (1936 - 1939)",
    "level": "Tổng hợp",
    "points": [
      "Phong trào 1930 - 1931: Bùng nổ từ 1/5/1930; Đỉnh cao Xô viết Nghệ - Tĩnh (9/1930); chính quyền sơ khai của công nông xóa thuế, chia ruộng công, diệt hủ tục; Cuộc tổng diễn tập đầu tiên cho Cách mạng Tháng Tám. QTCS công nhận ĐCS Đông Dương là phân bộ độc lập (4/1931).",
      "Hội nghị TW tháng 10/1930: Đổi tên thành Đảng Cộng sản Đông Dương; bầu Trần Phú làm Tổng Bí thư đầu tiên; thông qua Luận cương chính trị tháng 10/1930.",
      "Hạn chế Luận cương 10/1930: Quá nặng về đấu tranh giai cấp và thổ địa, chưa đặt giải phóng dân tộc lên hàng đầu; đánh giá chưa đúng khả năng cách mạng của tiểu tư sản, tư sản dân tộc, trung tiểu địa chủ yêu nước.",
      "Khôi phục phong trào (1932 - 1935): Trần Phú hy sinh tại nhà thương Chợ Quán (6/9/1931: 'Hãy giữ vững chí khí chiến đấu'); Ban hành Chương trình hành động (6/1932); Đại hội I tại Ma Cao (3/1935) bầu Lê Hồng Phong làm TBT, khôi phục hệ thống tổ chức Đảng.",
      "Phong trào Dân chủ 1936 - 1939: Bối cảnh Đại hội VII QTCS (7/1935 - Dimitrov) lập Mặt trận chống phát xít; Mặt trận Nhân dân Pháp cầm quyền (1936).",
      "Chủ trương Đảng 1936 - 1939: Mục tiêu trước mắt đòi tự do, dân chủ, cơm áo, hòa bình; lập Mặt trận Dân chủ Đông Dương; kết hợp công khai và bí mật, hợp pháp và bất hợp pháp (Đông Dương Đại hội 1936, đấu tranh nghị trường, báo chí công khai: Tiền Phong, Dân Chúng, Tin Tức...; Mít tinh 1/5/1938 tại Khu Đấu Xảo); Tác phẩm 'Tự chỉ trích' của Nguyễn Văn Cừ (7/1939); Cuộc diễn tập thứ hai cho CMT8."
    ]
  },
  {
    "chapter": "Phần 4: Cao trào giải phóng dân tộc & Thắng lợi Cách mạng Tháng Tám (1939 - 1945)",
    "points": [
      "Bối cảnh CTTG II (9/1939) & Nhật chiếm Đông Dương (9/1940): Nhân dân chịu cảnh 'một cổ hai tròng'; Khởi nghĩa Bắc Sơn (9/1940), Khởi nghĩa Nam Kỳ (11/1940 - cờ đỏ sao vàng xuất hiện), Binh biến Đô Lương (1/1941).",
      "Chuyển hướng chiến lược qua 3 Hội nghị TW: HNTW 6 (11/1939 tại Bà Điểm, Nguyễn Văn Cừ chủ trì mở đầu chuyển hướng); HNTW 7 (11/1940 tại Đình Bảng duy trì du kích Bắc Sơn); HNTW 8 (5/1941 tại Pác Bó do Nguyễn Ái Quốc chủ trì hoàn chỉnh chuyển hướng chiến lược: Đặt giải phóng dân tộc lên hàng đầu và cấp bách nhất; lập Mặt trận Việt Minh 19/5/1941; khởi nghĩa từng phần tiến lên Tổng khởi nghĩa; dự kiến lập nước Việt Nam Dân chủ Cộng hòa).",
      "Chuẩn bị lực lượng: Căn cứ địa Bắc Sơn - Võ Nhai và Cao Bằng; Đội Việt Nam Tuyên truyền Giải phóng quân (22/12/1944 do Võ Nguyên Giáp chỉ huy, 34 chiến sĩ, chính trị trọng hơn quân sự, thắng Phai Khắt - Nà Ngần); Đề cương Văn hóa Việt Nam (1943 - Dân tộc hóa, Đại chúng hóa, Khoa học hóa).",
      "Cao trào kháng Nhật cứu nước: Nhật đảo chính Pháp đêm 9/3/1945; Chỉ thị 'Nhật - Pháp bắn nhau và hành động của chúng ta' (12/3/1945): kẻ thù duy nhất trước mắt là phát xít Nhật; khẩu hiệu 'Phá kho thóc Nhật để giải quyết nạn đói'; Thống nhất thành Việt Nam Giải phóng quân (5/1945); Khu giải phóng Việt Bắc gồm 6 tỉnh (Cao - Bắc - Lạng - Hà - Tuyên - Thái), Tân Trào là thủ đô giải phóng.",
      "Tổng khởi nghĩa Tháng Tám 1945: Nhật đầu hàng Đồng minh (15/8/1945); Thời cơ ngàn năm có một trước khi quân Đồng minh vào; Hội nghị toàn quốc của Đảng tại Tân Trào (14 - 15/8) ra Quân lệnh số 1 (3 nguyên tắc: Tập trung, Thống nhất, Kịp thời); Đại hội Quốc dân Tân Trào (16 - 17/8) cử Ủy ban Dân tộc Giải phóng (Chính phủ lâm thời) do Hồ Chí Minh làm Chủ tịch, chọn Quốc kỳ cờ đỏ sao vàng và Quốc ca Tiến quân ca.",
      "Diễn biến thắng lợi 15 ngày (14 - 28/8/1945): 4 tỉnh đầu tiên giành chính quyền (18/8: Bắc Giang, Hải Dương, Hà Tĩnh, Quảng Nam); Hà Nội (19/8), Huế (23/8), Sài Gòn (25/8); Đồng Nai Thượng và Hà Tiên (28/8); Vua Bảo Đại thoái vị (30/8: 'Thà làm dân một nước tự do còn hơn làm vua một nước nô lệ').",
      "Ngày 2/9/1945: Hồ Chí Minh đọc Tuyên ngôn Độc lập tại Quảng trường Ba Đình khai sinh nước Việt Nam Dân chủ Cộng hòa.",
      "Tính chất & Ý nghĩa: Cuộc cách mạng giải phóng dân tộc mang tính chất dân chủ mới (điển hình, sâu sắc, triệt để); Mở ra kỷ nguyên độc lập tự do gắn liền với CNXH; cổ vũ phong trào giải phóng dân tộc trên thế giới."
    ]
  }
];
