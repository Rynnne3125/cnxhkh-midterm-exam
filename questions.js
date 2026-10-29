// =========================================================================
// NGÂN HÀNG KHẢO THÍ CHUẨN HÓA MÔN KINH TẾ CHÍNH TRỊ MÁC - LÊNIN (POS151)
// ĐẠI HỌC CÔNG NGHỆ THÔNG TIN VÀ TRUYỀN THÔNG VIỆT - HÀN (VKU ĐÀ NẴNG)
// TÀI LIỆU KHẢO THÍ CHÍNH THỨC CỦA CÔ NGUYỄN THỊ MỸ HẠNH
// =========================================================================

const EXAM_SETS = [
  {
    "id": "de_01",
    "code": "MÃ ĐỀ: 201",
    "title": "Đề 01: Khảo Thí Chuẩn Hóa Giữa Kỳ KTCT (50 Câu - Có Đáp Án & Lời Giải Chi Tiết)",
    "description": "Bao quát toàn diện Chương 1, Chương 2 và Chương 3: Hàng hóa, Thị trường, Sản xuất Giá trị thặng dư và Các bài toán định lượng KTCT (Đề thi giữa kỳ VKU - Cô Nguyễn Thị Mỹ Hạnh).",
    "duration": 40,
    "questions": [
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản công nghiệp có quy mô tư bản đầu tư cho sản xuất là 480 triệu đô la, cấu tạo hữu cơ tư bản là 5/1 và tỷ suất giá trị thặng dư là 100%. Nếu không có tư bản thương nghiệp tham gia thì lợi nhuận của tư bản công nghiệp sẽ là bao nhiêu?",
        "options": [
          "80 triệu đô la",
          "160 triệu đô la",
          "40 triệu đô la",
          "120 triệu đô la"
        ],
        "correct": 0,
        "explanation": "Tư bản ứng trước k = c + v = 480 triệu đô la. Cấu tạo hữu cơ c/v = 5/1 => c = 5v. Thay vào: 5v + v = 480 => 6v = 480 => v = 80 triệu đô la. Vì m' = (m/v) * 100% = 100% => m = v = 80 triệu đô la. Khi không có tư bản thương nghiệp tham gia chia sẻ giá trị thặng dư thì lợi nhuận của tư bản công nghiệp p = m = 80 triệu đô la.",
        "trapAnalysis": "Tránh nhầm lẫn giữa tư bản ứng trước k (c+v) với chi phí tư bản bất biến c, hoặc quên tính tỷ lệ cấu tạo hữu cơ 5/1."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lao động trừu tượng là:",
        "options": [
          "Phạm trù chung của mọi nền kinh tế",
          "Phạm trù của mọi nền kinh tế hàng hóa",
          "Phạm trù riêng của kinh tế thị trường hiện đại",
          "Phạm trù riêng của chủ nghĩa tư bản"
        ],
        "correct": 1,
        "explanation": "Lao động trừu tượng là lao động của người sản xuất hàng hóa khi đã gạt bỏ những hình thức biểu hiện cụ thể của nó, biểu hiện sự hao phí sức lao động nói chung (thần kinh, cơ bắp). Lao động trừu tượng tạo ra giá trị hàng hóa và là một phạm trù lịch sử riêng có của nền sản xuất hàng hóa.",
        "trapAnalysis": "Tránh chọn 'phạm trù chung của mọi nền kinh tế' (chỉ có lao động nói chung mới là phạm trù vĩnh viễn) hoặc nhầm sang 'riêng của CNTB'."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Trong những yếu tố dưới đây, yếu tố nào thuộc tư bản cố định?",
        "options": [
          "Tiền lương chi trả cho công nhân",
          "Máy móc, nhà xưởng và nguyên, nhiên, vật liệu",
          "Nguyên vật liệu, điện, nước dùng cho sản xuất",
          "Máy móc, nhà xưởng và thiết bị"
        ],
        "correct": 3,
        "explanation": "Tư bản cố định là bộ phận tư bản sản xuất tồn tại dưới dạng máy móc, thiết bị, nhà xưởng... tham gia toàn bộ vào quá trình sản xuất nhưng giá trị của nó chỉ chuyển dần từng phần vào sản phẩm mới theo mức độ hao mòn.",
        "trapAnalysis": "Nguyên nhiên vật liệu và tiền lương thuộc tư bản lưu động, không thuộc tư bản cố định."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Địa tô chênh lệch I được hình thành bởi giá cả nông phẩm trên thị trường được xác định theo giá cả nông phẩm sản xuất trên loại đất nào sau đây?",
        "options": [
          "Đất có điều kiện trung bình",
          "Đất có điều kiện tốt và màu mỡ nhất",
          "Đất có điều kiện xấu nhất nhưng vẫn phải canh tác",
          "Đất trung bình và đất tốt có vị trí thuận lợi"
        ],
        "correct": 3,
        "explanation": "Địa tô chênh lệch I là phần giá trị thặng dư siêu ngạch thu được trên những ruộng đất có độ phì nhiêu tự nhiên trung bình và tốt, hoặc có vị trí địa lý thuận lợi gần thị trường, giao thông tốt.",
        "trapAnalysis": "Phân biệt với Địa tô chênh lệch II sinh ra do thâm canh, đầu tư thêm tư bản vào đất đai."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Các yếu tố dưới đây, yếu tố nào thuộc tư bản lưu động?",
        "options": [
          "Máy móc, nhà xưởng và công trình xây dựng",
          "Đất đai làm mặt bằng sản xuất và máy móc",
          "Nguyên vật liệu, nhiên liệu, điện nước và tiền lương",
          "Nhà kho, phân xưởng và phương tiện vận tải"
        ],
        "correct": 2,
        "explanation": "Tư bản lưu động là bộ phận tư bản sản xuất tồn tại dưới hình thức nguyên liệu, nhiên liệu, vật liệu phụ và tiền lương (sức lao động), giá trị của nó được chuyển toàn bộ một lần vào giá trị sản phẩm sau quá trình sản xuất.",
        "trapAnalysis": "Phân biệt giữa phân chia theo phương thức chuyển dịch giá trị (cố định / lưu động) với phân chia theo vai trò tạo ra GTTD (bất biến c / khả biến v)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền từ thích hợp vào dấu (...): 'Sức lao động là toàn bộ ... và ... tồn tại trong cơ thể một con người làm cho hoạt động tạo ra của cải vật chất.'",
        "options": [
          "Khả năng lao động; sự mạnh khỏe",
          "Sức khỏe; hoạt động cơ bắp",
          "Thể lực; trí lực",
          "Thao tác; kỹ năng lao động"
        ],
        "correct": 2,
        "explanation": "Theo C.Mác, sức lao động hay năng lực lao động là toàn bộ thể lực và trí lực tồn tại trong cơ thể con người, thể lực và trí lực đó được đem ra vận dụng mỗi khi con người sản xuất ra một giá trị sử dụng nào đó.",
        "trapAnalysis": "Ghi nhớ cặp thuật ngữ chuẩn mực của C.Mác: 'thể lực' và 'trí lực'."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lao động cụ thể của người sản xuất hàng hóa tạo ra thuộc tính nào sau đây?",
        "options": [
          "Giá trị và giá trị sử dụng của hàng hóa",
          "Giá cả thị trường của hàng hóa",
          "Giá trị mới của hàng hóa",
          "Giá trị sử dụng của hàng hóa"
        ],
        "correct": 3,
        "explanation": "Lao động cụ thể là lao động có ích dưới một hình thức nghề nghiệp chuyên môn nhất định, có mục đích, đối tượng, thao tác và công cụ riêng. Lao động cụ thể tạo ra giá trị sử dụng của hàng hóa.",
        "trapAnalysis": "Ghi nhớ: Lao động cụ thể tạo ra GIÁ TRỊ SỬ DỤNG; Lao động trừu tượng tạo ra GIÁ TRỊ."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản ứng trước 90 USD, trong đó bỏ vào nhà xưởng 40 USD, máy móc thiết bị 10 USD. Nguyên liệu, nhiên liệu và vật liệu phụ gấp 3 lần giá trị sức lao động. Hãy xác định tổng số tư bản cố định và tư bản lưu động?",
        "options": [
          "Tư bản cố định 80 USD; Tư bản lưu động 10 USD",
          "Tư bản cố định 40 USD; Tư bản lưu động 50 USD",
          "Tư bản cố định 50 USD; Tư bản lưu động 40 USD",
          "Tư bản cố định 60 USD; Tư bản lưu động 30 USD"
        ],
        "correct": 2,
        "explanation": "Tư bản cố định = Nhà xưởng + Máy móc = 40 + 10 = 50 USD. Tư bản lưu động = Tổng tư bản ứng trước - Tư bản cố định = 90 - 50 = 40 USD. (Kiểm tra lại: v + 3v = 40 => 4v = 40 => v = 10 USD, nguyên nhiên vật liệu c1 = 30 USD, hoàn toàn khớp).",
        "trapAnalysis": "Không được nhầm tư bản cố định với tư bản bất biến."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Sản xuất tự cấp tự túc là kiểu tổ chức kinh tế mà ở đó:",
        "options": [
          "Sản phẩm làm ra để trao đổi, buôn bán trên thị trường",
          "Sản phẩm làm ra để phục vụ trực tiếp nhu cầu cá nhân và gia đình người sản xuất",
          "Sản phẩm làm ra theo đơn đặt hàng của các tổ chức xã hội",
          "Sản phẩm làm ra nhằm mục đích tối đa hóa lợi nhuận tiền tệ"
        ],
        "correct": 1,
        "explanation": "Sản xuất tự cấp tự túc là hình thức sản xuất khép kín, sản phẩm làm ra chỉ nhằm thỏa mãn nhu cầu tiêu dùng trực tiếp của nội bộ người sản xuất hoặc gia đình, không mang ra trao đổi trên thị trường.",
        "trapAnalysis": "Phân biệt với sản xuất hàng hóa (sản phẩm làm ra để trao đổi, buôn bán)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý đúng về hao mòn vô hình của tư bản cố định:",
        "options": [
          "Là hao mòn thuần túy về mặt giá trị, máy móc bị mất giá do tiến bộ khoa học kỹ thuật làm xuất hiện máy móc mới tốt hơn hoặc rẻ hơn",
          "Là hao mòn về mặt vật chất, vật lý do tác động của môi trường tự nhiên",
          "Là hao mòn do quá trình ma sát cơ học trong thời gian máy móc vận hành",
          "Là hao mòn xảy ra khi nhà xưởng hư hỏng do thiên tai lũ lụt"
        ],
        "correct": 0,
        "explanation": "Hao mòn vô hình là sự hao mòn thuần túy về mặt giá trị do tiến bộ của khoa học và công nghệ làm cho máy móc thiết bị cũ bị mất giá dù vẫn còn dùng tốt, do có máy mới hiệu suất cao hơn hoặc máy cùng loại được sản xuất rẻ hơn.",
        "trapAnalysis": "Hao mòn cơ học, tác động của thời tiết môi trường là hao mòn hữu hình."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Thời gian lao động của người sản xuất hàng hoá nếu tính trong điều kiện sản xuất trung bình của xã hội thì được gọi là:",
        "options": [
          "Thời gian lao động cá biệt",
          "Thời gian lao động thặng dư",
          "Thời gian lao động xã hội cần thiết",
          "Thời gian sản xuất trung bình"
        ],
        "correct": 2,
        "explanation": "Thời gian lao động xã hội cần thiết là thời gian đòi hỏi để sản xuất ra một giá trị sử dụng nào đó trong những điều kiện sản xuất bình thường của xã hội với một trình độ thành thạo trung bình và cường độ lao động trung bình.",
        "trapAnalysis": "Tránh nhầm với thời gian lao động cá biệt (của từng cá nhân người sản xuất riêng lẻ)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Tư bản bất biến (ký hiệu là c) tồn tại dưới hình thức nào sau đây?",
        "options": [
          "Số tiền lương trả cho công nhân làm thuê",
          "Số tiền tồn tại dưới hình thức tư liệu sản xuất (nhà xưởng, máy móc, nguyên vật liệu)",
          "Số tiền mà chủ xí nghiệp thu được từ bán hàng",
          "Khoản lợi nhuận siêu ngạch phân chia cho chủ tư bản"
        ],
        "correct": 1,
        "explanation": "Tư bản bất biến (c) là bộ phận tư bản biến thành tư liệu sản xuất mà giá trị của nó không thay đổi về lượng trong quá trình sản xuất, được lao động cụ thể của công nhân chuyển nguyên vẹn vào sản phẩm mới.",
        "trapAnalysis": "Bộ phận tư bản biến thành sức lao động là tư bản khả biến (v)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Đặc điểm nào dưới đây là của hàng hóa sức lao động khi giá cả có xu hướng thấp hơn giá trị của nó?",
        "options": [
          "Tư bản cho vay",
          "Tư bản ngân hàng",
          "Hàng hoá sức lao động",
          "Tư bản lưu thông thương nghiệp"
        ],
        "correct": 2,
        "explanation": "Hàng hoá sức lao động là hàng hóa đặc biệt, trong xã hội tư bản công nhân luôn chịu sự ép giá của giới chủ nên giá cả sức lao động (tiền lương) thường xuyên bị trả thấp hơn giá trị thực tế của nó.",
        "trapAnalysis": "Hàng hoá sức lao động có khả năng tạo ra một lượng giá trị mới lớn hơn giá trị của bản thân nó."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn phương án đúng về tính chất hai mặt của lao động sản xuất hàng hóa:",
        "options": [
          "Lao động cụ thể được thực hiện trước, lao động trừu tượng thực hiện sau",
          "Lao động cụ thể tạo ra tính hữu ích (giá trị sử dụng) của sản phẩm",
          "Lao động trừu tượng chỉ có ở người có trình độ kỹ thuật cao",
          "Lao động cụ thể chỉ tồn tại trong chế độ xã hội chủ nghĩa"
        ],
        "correct": 1,
        "explanation": "Lao động cụ thể và lao động trừu tượng không phải là hai thứ lao động khác nhau mà là hai mặt của cùng một quá trình lao động sản xuất hàng hóa. Lao động cụ thể tạo ra tính hữu ích (giá trị sử dụng), còn lao động trừu tượng tạo ra giá trị hàng hóa.",
        "trapAnalysis": "Tránh nhầm lẫn rằng lao động cụ thể và trừu tượng diễn ra trước/sau hay phân biệt theo trình độ cao/thấp."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nếu nhà tư bản trả tiền công đúng bằng giá trị sức lao động cho công nhân thì:",
        "options": [
          "Công nhân thu được phần lợi nhuận nhiều hơn nhà tư bản",
          "Nhà tư bản vẫn còn bóc lột công nhân giá trị thặng dư",
          "Nhà tư bản hoàn toàn không còn bóc lột công nhân",
          "Nhà tư bản và công nhân cùng chia đôi phần lợi nhuận"
        ],
        "correct": 1,
        "explanation": "Tiền lương chỉ là biểu hiện bằng tiền của giá trị sức lao động (phần v), bù đắp chi phí tái sản xuất sức lao động trong thời gian lao động tất yếu. Trong thời gian lao động thặng dư, công nhân vẫn tạo ra giá trị thặng dư (m) bị nhà tư bản chiếm đoạt không công.",
        "trapAnalysis": "Bản chất bóc lột của CNTB nằm ở việc chiếm đoạt giá trị thặng dư m, kể cả khi mua bán sức lao động đúng giá trị."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nhận xét về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch, ý nào dưới đây là đúng?",
        "options": [
          "Đều dựa trên cơ sở tăng năng suất lao động xã hội",
          "Đều kéo dài tuyệt đối độ dài của ngày lao động",
          "Đều làm giảm tỷ suất giá trị thặng dư",
          "Giá trị thặng dư siêu ngạch là hình thức biến tướng của giá trị thặng dư tương đối"
        ],
        "correct": 0,
        "explanation": "Cả hai phương pháp đều dựa trên cơ sở tăng năng suất lao động để rút ngắn thời gian lao động cần thiết, qua đó kéo dài thời gian lao động thặng dư trong điều kiện độ dài ngày lao động không đổi.",
        "trapAnalysis": "GTTD siêu ngạch dựa trên tăng năng suất lao động cá biệt, còn GTTD tương đối dựa trên tăng năng suất lao động xã hội."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Tư bản bất biến được Các Mác ký hiệu là:",
        "options": [
          "c",
          "v",
          "m",
          "p"
        ],
        "correct": 0,
        "explanation": "Tư bản bất biến ký hiệu là c (constant capital); Tư bản khả biến ký hiệu là v (variable capital); Giá trị thặng dư ký hiệu là m (mehrwert/surplus value); Lợi nhuận ký hiệu là p (profit).",
        "trapAnalysis": "Ghi nhớ chính xác các ký hiệu chuẩn trong kinh tế chính trị Mác - Lênin."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Phương pháp sản xuất giá trị thặng dư tuyệt đối làm tăng giá trị thặng dư nhờ biện pháp nào?",
        "options": [
          "Kéo dài ngày lao động hoặc tăng cường độ lao động trong khi thời gian lao động tất yếu không đổi",
          "Giảm thời gian lao động cần thiết nhờ tăng năng suất lao động xã hội",
          "Rút ngắn ngày lao động và ứng dụng công nghệ tự động hóa",
          "Hạ thấp giá trị các tư liệu sinh hoạt của người công nhân"
        ],
        "correct": 0,
        "explanation": "Sản xuất giá trị thặng dư tuyệt đối là phương pháp thu được bằng cách kéo dài tuyệt đối ngày lao động hoặc tăng cường độ lao động trong điều kiện thời gian lao động cần thiết không thay đổi.",
        "trapAnalysis": "Tăng năng suất lao động để rút ngắn thời gian cần thiết là phương pháp giá trị thặng dư tương đối."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nhân tố nào sau đây không ảnh hưởng đến tỷ suất lợi nhuận (p')?",
        "options": [
          "Tỷ suất giá trị thặng dư (m')",
          "Cấu tạo hữu cơ của tư bản (c/v)",
          "Tỷ suất lợi nhuận bình quân của toàn xã hội",
          "Tốc độ chu chuyển của tư bản và tiết kiệm tư bản bất biến"
        ],
        "correct": 2,
        "explanation": "Tỷ suất lợi nhuận phụ thuộc vào 4 nhân tố: (1) Tỷ suất giá trị thặng dư m'; (2) Cấu tạo hữu cơ tư bản c/v; (3) Tốc độ chu chuyển của tư bản; (4) Tiết kiệm tư bản bất biến. Tỷ suất lợi nhuận bình quân là kết quả cạnh tranh giữa các ngành, không phải nhân tố quyết định tỷ suất lợi nhuận của một xí nghiệp cụ thể.",
        "trapAnalysis": "Cần phân biệt giữa nhân tố ảnh hưởng đến p' của doanh nghiệp và quy luật hình thành p' bình quân."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý không đúng về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch:",
        "options": [
          "Đều kéo dài thời gian lao động thặng dư",
          "Đều dựa trên cơ sở rút ngắn thời gian lao động cần thiết",
          "Đều dựa trên tiền đề tăng năng suất lao động",
          "Đều dựa trên cơ sở kéo dài tuyệt đối ngày lao động"
        ],
        "correct": 3,
        "explanation": "Cả GTTD tương đối và siêu ngạch đều giữ nguyên độ dài ngày lao động (hoặc thậm chí ngày lao động ngắn hơn) nhưng rút ngắn thời gian lao động cần thiết nhờ tăng năng suất lao động, do đó kéo dài tương đối thời gian thặng dư. Ý nói 'đều kéo dài tuyệt đối ngày lao động' là sai.",
        "trapAnalysis": "Kéo dài ngày lao động là đặc trưng của phương pháp giá trị thặng dư tuyệt đối."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Cạnh tranh trong nội bộ ngành dẫn đến hình thành kết quả kinh tế nào sau đây?",
        "options": [
          "Lợi nhuận bình quân",
          "Giá cả sản xuất",
          "Giá cả thị trường tự do",
          "Giá trị thị trường (giá trị xã hội) của hàng hóa"
        ],
        "correct": 3,
        "explanation": "Cạnh tranh trong nội bộ ngành là cạnh tranh giữa các doanh nghiệp cùng sản xuất một loại hàng hóa nhằm giành điều kiện sản xuất và tiêu thụ thuận lợi nhất, kết quả dẫn tới hình thành giá trị thị trường (giá trị xã hội) của hàng hóa đó.",
        "trapAnalysis": "Cạnh tranh GIỮA CÁC NGÀNH mới dẫn tới hình thành tỷ suất lợi nhuận bình quân và giá cả sản xuất."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 100 công nhân làm thuê sản xuất một tháng được 1.000 sản phẩm, với chi phí tư bản bất biến là 500.000 đô la. Giá trị sức lao động 1 tháng của 1 công nhân là 500 đô la. Trình độ bóc lột là 300%. Hãy xác định giá trị của 1 đơn vị sản phẩm:",
        "options": [
          "500 đô la",
          "700 đô la",
          "1.000 đô la",
          "28 đô la"
        ],
        "correct": 1,
        "explanation": "Chi phí c = 500.000 $. Tổng lương v = 100 người * 500 $ = 50.000 $. Trình độ bóc lột m' = 300% => m = 3 * v = 3 * 50.000 = 150.000 $. Tổng giá trị sản phẩm G = c + v + m = 500.000 + 50.000 + 150.000 = 700.000 $. Giá trị 1 đơn vị sản phẩm = 700.000 / 1.000 = 700 đô la.",
        "trapAnalysis": "Chú ý phải nhân số lượng công nhân với tiền lương mỗi người để tìm tổng tư bản khả biến v."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Phương pháp sản xuất giá trị thặng dư tuyệt đối và phương pháp sản xuất giá trị thặng dư tương đối có điểm nào giống nhau?",
        "options": [
          "Đều làm tăng tỷ suất giá trị thặng dư (m') và kéo dài thời gian lao động thặng dư",
          "Đều dựa trên tiền đề tăng năng suất lao động xã hội",
          "Đều kéo dài độ dài tuyệt đối của ngày lao động",
          "Đều rút ngắn thời gian lao động cần thiết"
        ],
        "correct": 0,
        "explanation": "Cả hai phương pháp sản xuất giá trị thặng dư đều có mục đích chung là nâng cao trình độ bóc lột công nhân, thể hiện ở việc làm tăng tỷ suất giá trị thặng dư m' và gia tăng thời gian lao động thặng dư.",
        "trapAnalysis": "Chỉ có phương pháp tương đối mới dựa trên tăng năng suất lao động và rút ngắn thời gian lao động cần thiết."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý sai: Lượng giá trị của hàng hóa sức lao động do những bộ phận nào dưới đây hợp thành?",
        "options": [
          "Giá trị tư liệu sinh hoạt cần thiết để duy trì đời sống bản thân người công nhân",
          "Giá trị những tư liệu sinh hoạt cần thiết cho con cái và gia đình người công nhân",
          "Thời gian lao động thặng dư của xã hội để làm từ thiện",
          "Chi phí đào tạo người công nhân"
        ],
        "correct": 2,
        "explanation": "Giá trị hàng hóa sức lao động gồm 3 bộ phận: (1) Giá trị tư liệu sinh hoạt nuôi sống bản thân công nhân; (2) Giá trị tư liệu sinh hoạt nuôi sống gia đình, con cái công nhân; (3) Chi phí đào tạo công nhân. Ý nói 'thời gian lao động thặng dư làm từ thiện' là hoàn toàn sai.",
        "trapAnalysis": "Cần nắm vững 3 bộ phận cấu thành giá trị hàng hóa sức lao động theo giáo trình."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lao động cụ thể là:",
        "options": [
          "Nguồn gốc duy nhất tạo ra giá trị trao đổi của hàng hóa",
          "Nguồn gốc của giá trị trừu tượng",
          "Nguồn gốc sinh ra tiền tệ",
          "Nguồn gốc của của cải vật chất trong xã hội"
        ],
        "correct": 3,
        "explanation": "Lao động cụ thể tạo ra giá trị sử dụng. Cùng với giới tự nhiên, lao động cụ thể là nguồn gốc của của cải vật chất (giá trị sử dụng). Như William Petty đã nói: 'Lao động là cha, còn đất đai là mẹ của của cải'.",
        "trapAnalysis": "Lao động TRỪU TƯỢNG mới là nguồn gốc duy nhất của GIÁ TRỊ hàng hóa."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Tuần hoàn tư bản là sự vận động liên tục của tư bản trải qua:",
        "options": [
          "Hai giai đoạn, mang hai hình thái, thực hiện hai chức năng",
          "Ba giai đoạn, mang ba hình thái, thực hiện ba chức năng",
          "Bốn giai đoạn, mang ba hình thái, thực hiện hai chức năng",
          "Ba giai đoạn, mang một hình thái duy nhất là tư bản tiền tệ"
        ],
        "correct": 1,
        "explanation": "Tuần hoàn của tư bản là sự vận động liên tục của tư bản trải qua 3 giai đoạn (Lưu thông - Sản xuất - Lưu thông), mang 3 hình thái kế tiếp nhau (Tư bản tiền tệ - Tư bản sản xuất - Tư bản hàng hóa), và thực hiện 3 chức năng tương ứng để quay trở về hình thái ban đầu kèm theo giá trị thặng dư.",
        "trapAnalysis": "Quy tắc số 3: 3 giai đoạn, 3 hình thái, 3 chức năng."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Vì sao hàng hóa lại có hai thuộc tính là giá trị và giá trị sử dụng?",
        "options": [
          "Vì người tiêu dùng có nhu cầu kép",
          "Vì hàng hóa được sản xuất bằng máy móc và công cụ hiện đại",
          "Vì lao động của người sản xuất hàng hoá có tính hai mặt: lao động cụ thể và lao động trừu tượng",
          "Vì nền kinh tế có hai thành phần kinh tế đối lập"
        ],
        "correct": 2,
        "explanation": "C.Mác là người đầu tiên phát hiện ra tính chất hai mặt của lao động sản xuất hàng hóa: Lao động cụ thể tạo ra giá trị sử dụng, còn lao động trừu tượng tạo ra giá trị. Chính tính hai mặt của lao động là nguyên nhân khiến hàng hóa có hai thuộc tính.",
        "trapAnalysis": "Đây là phát kiến vĩ đại của C.Mác, đem lại cơ sở khoa học thực sự cho học thuyết giá trị lao động."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Ngày làm việc 8h, số công nhân làm thuê trong xí nghiệp là 100 người, tiền lương mỗi người là 10 đô la/ngày. Trình độ bóc lột là 300%. Tính khối lượng giá trị thặng dư (M) mà nhà tư bản thu được trong ngày:",
        "options": [
          "40.000 $",
          "4.000 $",
          "3.000 $",
          "30.000 $"
        ],
        "correct": 2,
        "explanation": "Tổng tư bản khả biến trong ngày V = 100 người * 10 $/ngày = 1.000 $. Trình độ bóc lột m' = 300%. Khối lượng giá trị thặng dư M = m' * V = 300% * 1.000 $ = 3 * 1.000 = 3.000 $.",
        "trapAnalysis": "Tránh nhầm công thức khối lượng GTTD M = m' * V với tính tổng giá trị sản phẩm."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 200 công nhân làm việc trong một nhà máy. Cứ 1 giờ lao động 1 công nhân tạo ra lượng giá trị mới là 5 đô la, m' = 200%, giá trị sức lao động mỗi ngày của 1 công nhân là 20 đô la. Hãy xác định độ dài của ngày lao động:",
        "options": [
          "16 giờ",
          "12 giờ",
          "4 giờ",
          "10 giờ"
        ],
        "correct": 1,
        "explanation": "Giá trị sức lao động ngày của 1 công nhân v = 20 $. Vì m' = 200% => m = 2v = 40 $. Tổng giá trị mới do 1 công nhân tạo ra trong ngày = v + m = 20 + 40 = 60 $. Mỗi giờ tạo ra 5 $ giá trị mới, vậy độ dài ngày lao động = 60 / 5 = 12 giờ.",
        "trapAnalysis": "Tránh quên cộng cả v và m khi tính tổng lượng giá trị mới do công nhân tạo ra trong ngày."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Lao động trừu tượng tạo ra thuộc tính nào của hàng hóa?",
        "options": [
          "Giá trị của hàng hóa",
          "Giá trị sử dụng của hàng hóa",
          "Độ bền và tính hữu ích của hàng hóa",
          "Hình thức bao bì của hàng hóa"
        ],
        "correct": 0,
        "explanation": "Lao động trừu tượng tạo ra giá trị của hàng hóa. Lao động cụ thể tạo ra giá trị sử dụng.",
        "trapAnalysis": "Ghi nhớ quy tắc đối ứng căn bản của kinh tế chính trị Mác - Lênin."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Khi giá cả thấp hơn giá trị rất nhiều là đặc điểm thường thấy của loại hàng hóa nào trên thị trường lao động tư bản chủ nghĩa?",
        "options": [
          "Tư bản ứng trước",
          "Tư bản cho vay",
          "Hàng hóa sức lao động",
          "Tư bản ngân hàng thương mại"
        ],
        "correct": 2,
        "explanation": "Trong xã hội tư bản, hàng hóa sức lao động luôn chịu sự ép giá của giai cấp tư sản và nạn thất nghiệp thường xuyên, dẫn đến việc tiền công (giá cả sức lao động) thường xuyên bị trả thấp hơn giá trị thực tế của sức lao động.",
        "trapAnalysis": "Hàng hoá sức lao động là hàng hóa duy nhất tạo ra giá trị thặng dư."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý không đúng về lao động trừu tượng:",
        "options": [
          "Tạo ra giá trị của hàng hóa",
          "Là phạm trù vĩnh viễn của mọi hình thái kinh tế xã hội",
          "Là sự hao phí sức lao động nói chung không kể đến hình thức cụ thể",
          "Phản ánh tính chất xã hội của người sản xuất hàng hóa"
        ],
        "correct": 1,
        "explanation": "Lao động trừu tượng là một phạm trù lịch sử, chỉ tồn tại trong nền kinh tế sản xuất hàng hóa (khi sản phẩm làm ra để trao đổi trên thị trường). Nói lao động trừu tượng là 'phạm trù vĩnh viễn' là sai.",
        "trapAnalysis": "Chỉ có lao động nói chung (hoạt động có mục đích của con người) mới mang tính vĩnh viễn."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Quy mô bóc lột của tư bản đối với giai cấp công nhân được phản ánh qua phạm trù nào sau đây?",
        "options": [
          "Khối lượng giá trị thặng dư (M)",
          "Thời gian lao động thặng dư",
          "Tỷ suất giá trị thặng dư (m')",
          "Thời gian lao động cần thiết"
        ],
        "correct": 0,
        "explanation": "Khối lượng giá trị thặng dư (M = m' * V) phản ánh QUY MÔ bóc lột của tư bản đối với công nhân. Trong khi đó, Tỷ suất giá trị thặng dư (m' = m/v * 100%) phản ánh TRÌNH ĐỘ (mức độ) bóc lột.",
        "trapAnalysis": "Phân biệt rõ: m' đo lường TRÌNH ĐỘ bóc lột, M đo lường QUY MÔ bóc lột."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý sai trong các nhận định dưới đây về giá trị thặng dư:",
        "options": [
          "Giá trị thặng dư là một phần của giá trị mới do lao động sống của công nhân tạo ra",
          "Giá trị thặng dư là lao động thặng dư kết tinh",
          "Giá trị thặng dư và giá trị giống nhau về chất, chỉ khác nhau về lượng trong 1 hàng hoá",
          "Giá trị thặng dư cũng là giá trị"
        ],
        "correct": 2,
        "explanation": "Giá trị thặng dư (m) chỉ là một bộ phận của giá trị hàng hóa (G = c + v + m). Nhận định nói 'giá trị thặng dư và giá trị giống nhau về chất, chỉ khác nhau về lượng trong 1 hàng hóa' là sai vì giá trị hàng hóa còn chứa đựng cả giá trị cũ của tư liệu sản xuất (c) do lao động quá khứ chuyển dịch vào.",
        "trapAnalysis": "Đọc kỹ các nhận định so sánh giữa giá trị toàn bộ của hàng hóa và giá trị thặng dư."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Sản xuất hàng hoá là kiểu tổ chức kinh tế mà ở đó:",
        "options": [
          "Sản phẩm làm ra để phục vụ nhu cầu cá nhân và gia đình người sản xuất",
          "Sản phẩm làm ra theo kế hoạch hành chính tập trung của nhà nước",
          "Sản phẩm làm ra không phải để người sản xuất tự tiêu dùng mà để đáp ứng nhu cầu của thị trường thông qua trao đổi, mua bán",
          "Sản phẩm làm ra phục vụ trực tiếp cho người trực tiếp tạo ra nó"
        ],
        "correct": 2,
        "explanation": "Sản xuất hàng hóa là kiểu tổ chức kinh tế mà ở đó sản phẩm được sản xuất ra không phải là để phục vụ nhu cầu tiêu dùng của chính người sản xuất mà là để đáp ứng nhu cầu tiêu dùng của người khác, của xã hội thông qua trao đổi, mua bán.",
        "trapAnalysis": "Hai điều kiện ra đời: Phân công lao động xã hội và Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 100 công nhân làm thuê, sản xuất 1 tháng được 500 sản phẩm với chi phí tư bản bất biến là 25.000 USD. Giá trị sức lao động một tháng của một công nhân là 250 USD, m' = 200%. Hãy xác định giá trị của một đơn vị sản phẩm:",
        "options": [
          "500 USD",
          "300 USD",
          "100 USD",
          "200 USD"
        ],
        "correct": 3,
        "explanation": "Chi phí c = 25.000 USD. Tổng tiền lương v = 100 người * 250 USD = 25.000 USD. Với m' = 200% => m = 2 * v = 50.000 USD. Tổng giá trị của 500 sản phẩm = c + v + m = 25.000 + 25.000 + 50.000 = 100.000 USD. Giá trị 1 đơn vị sản phẩm = 100.000 / 500 = 200 USD.",
        "trapAnalysis": "Hãy thực hiện đầy đủ các bước tính: c -> v -> m -> G -> g (giá trị 1 đơn vị)."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lượng giá trị của một đơn vị hàng hoá chịu ảnh hưởng trực tiếp của những nhân tố nào sau đây?",
        "options": [
          "Lao động giản đơn và hình thức lưu thông tiền tệ",
          "Cường độ lao động và số lượng máy móc",
          "Năng suất lao động và mức độ phức tạp của lao động",
          "Quan hệ cung - cầu và sự điều tiết của thị trường"
        ],
        "correct": 2,
        "explanation": "Lượng giá trị của một đơn vị hàng hóa tỷ lệ nghịch với năng suất lao động và tỷ lệ thuận với mức độ phức tạp của lao động. Khi năng suất lao động tăng thì giá trị 1 đơn vị hàng hóa giảm; lao động phức tạp trong cùng thời gian tạo ra nhiều giá trị hơn lao động giản đơn.",
        "trapAnalysis": "Cường độ lao động chỉ làm tăng tổng số sản phẩm và tổng giá trị, KHÔNG làm thay đổi giá trị 1 đơn vị sản phẩm."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Giá cả hàng hoá trên thị trường không chịu ảnh hưởng trực tiếp của nhân tố nào sau đây?",
        "options": [
          "Giá trị sử dụng của hàng hoá",
          "Quan hệ cung - cầu về hàng hoá trên thị trường",
          "Giá trị của hàng hóa",
          "Giá trị của tiền tệ (sức mua của đồng tiền)"
        ],
        "correct": 0,
        "explanation": "Giá cả hàng hóa chịu ảnh hưởng của: (1) Giá trị hàng hóa; (2) Giá trị của tiền tệ; (3) Quan hệ cung - cầu và cạnh tranh. Giá trị sử dụng là công dụng thỏa mãn nhu cầu, không quyết định hay ảnh hưởng trực tiếp lên giá cả của hàng hóa.",
        "trapAnalysis": "Công dụng (giá trị sử dụng) chỉ là điều kiện cần để trao đổi, không quyết định mức giá cả."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Ngày làm việc 8 giờ, m' = 300%. Sau đó nhà tư bản kéo dài ngày lao động lên 12 giờ trong khi giá trị sức lao động không đổi. Nhà tư bản đã tăng thêm giá trị thặng dư bằng phương pháp nào?",
        "options": [
          "Sản xuất giá trị thặng dư siêu ngạch",
          "Sản xuất giá trị thặng dư tương đối",
          "Sản xuất giá trị thặng dư tuyệt đối",
          "Sản xuất giá trị thặng dư hỗn hợp"
        ],
        "correct": 2,
        "explanation": "Với ngày làm việc 8h và m' = 300% (m/v = 3/1) => Thời gian tất yếu v = 2h, thời gian thặng dư m = 6h. Khi nhà tư bản kéo dài ngày lao động lên 12h mà thời gian tất yếu vẫn là 2h thì thời gian thặng dư tăng lên 10h (m' = 10/2 * 100% = 500%). Việc kéo dài độ dài ngày lao động để tăng GTTD chính là phương pháp sản xuất giá trị thặng dư tuyệt đối.",
        "trapAnalysis": "Cứ có hành động 'kéo dài ngày lao động' hoặc 'tăng cường độ lao động' thì đó là phương pháp tuyệt đối."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn nhận định đúng về thuộc tính giá trị của hàng hoá:",
        "options": [
          "Là một phạm trù vĩnh viễn tồn tại trong mọi xã hội loài người",
          "Là một phạm trù lịch sử, chỉ tồn tại trong nền kinh tế có sản xuất và trao đổi hàng hóa",
          "Là công dụng hữu ích tự nhiên của hàng hoá",
          "Do các đặc tính hóa học, vật lý tự nhiên của vật phẩm quy định"
        ],
        "correct": 1,
        "explanation": "Giá trị của hàng hóa là lao động xã hội của người sản xuất kết tinh trong hàng hóa. Giá trị chỉ tồn tại khi có sản xuất và trao đổi hàng hóa, do đó giá trị là một phạm trù lịch sử, không phải phạm trù vĩnh viễn.",
        "trapAnalysis": "Chỉ có giá trị sử dụng (thuộc tính tự nhiên) mới là phạm trù vĩnh viễn."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Toàn bộ tư bản ứng trước là 8 triệu đô la, trong đó giá trị nguyên vật liệu là 1,4 triệu đô la, nhiên liệu và điện nước là 200.000 đô la, tiền lương là 600.000 đô la. Giá trị máy móc và thiết bị sản xuất gấp 3 lần giá trị nhà xưởng và công trình. Thời gian hao mòn hoàn toàn của máy móc và nhà xưởng lần lượt là 10 năm và 25 năm. Hãy tính số tiền khấu hao sau 8 năm:",
        "options": [
          "3.595.000 $",
          "3.944.000 $",
          "3.853.000 $",
          "3.982.000 $"
        ],
        "correct": 1,
        "explanation": "Tư bản lưu động = 1,4 tr (nguyên liệu) + 0,2 tr (nhiên liệu) + 0,6 tr (lương) = 2,2 triệu $. Tư bản cố định = 8 tr - 2,2 tr = 5,8 triệu $. Gọi giá trị nhà xưởng là x => Giá trị máy móc = 3x => 4x = 5,8 tr => x = 1,45 triệu $ (nhà xưởng), máy móc = 4,35 triệu $. Khấu hao hàng năm của máy móc = 4,35 tr / 10 = 0,435 triệu $/năm; của nhà xưởng = 1,45 tr / 25 = 0,058 triệu $/năm. Tổng khấu hao 1 năm = 0,435 + 0,058 = 0,493 triệu $. Sau 8 năm = 0,493 tr * 8 = 3,944 triệu $ = 3.944.000 $.",
        "trapAnalysis": "Cần phân loại chính xác các khoản tư bản lưu động để trừ ra tư bản cố định, sau đó lập phương trình tỷ lệ 3:1."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Hai điều kiện ra đời và tồn tại của nền sản xuất hàng hoá là gì?",
        "options": [
          "Phân công lao động cá biệt và chế độ tư hữu về tư liệu sản xuất",
          "Phân công lao động xã hội và các hình thức sở hữu nhà nước về tư liệu sản xuất",
          "Phân công lao động xã hội và sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất",
          "Phân công lao động quốc tế và tự do hóa thương mại"
        ],
        "correct": 2,
        "explanation": "Sản xuất hàng hóa chỉ ra đời và tồn tại khi có đủ 2 điều kiện: (1) Phân công lao động xã hội (tạo ra sự chuyên môn hóa, ai cũng cần sản phẩm của nhau); (2) Sự tách biệt về mặt kinh tế giữa các chủ thể sản xuất (sản phẩm làm ra thuộc quyền sở hữu riêng, muốn có phải trao đổi, mua bán).",
        "trapAnalysis": "Nếu thiếu 1 trong 2 điều kiện thì sản xuất hàng hóa không thể tồn tại."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền từ thích hợp vào dấu (...): 'Giá trị thặng dư là một bộ phận của ... dôi ra ngoài ... do công nhân tạo ra mà bị nhà tư bản chiếm đoạt.'",
        "options": [
          "Giá trị bóc lột; giá trị tư bản",
          "Giá trị hàng hóa; giá trị cũ",
          "Giá trị thặng dư; tư bản bất biến",
          "Giá trị mới; giá trị sức lao động"
        ],
        "correct": 3,
        "explanation": "Theo định nghĩa của C.Mác: Giá trị thặng dư (m) là một bộ phận của giá trị mới (v + m) dôi ra ngoài giá trị sức lao động (v) do công nhân làm thuê tạo ra và bị nhà tư bản chiếm đoạt không công.",
        "trapAnalysis": "Ghi nhớ cụm từ: 'giá trị mới' và 'giá trị sức lao động'."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Loại hình tư bản nào vừa có tính độc lập tương đối, vừa phụ thuộc hoàn toàn vào tư bản công nghiệp sản xuất?",
        "options": [
          "Tư bản cho vay",
          "Tư bản ngân hàng",
          "Tư bản thương nghiệp",
          "Tư bản nông nghiệp"
        ],
        "correct": 2,
        "explanation": "Tư bản thương nghiệp là một bộ phận của tư bản công nghiệp tách rời ra và phục vụ quá trình lưu thông hàng hóa. Nó hoạt động độc lập trong lĩnh vực lưu thông nhưng phụ thuộc vào tư bản công nghiệp vì không trực tiếp tạo ra giá trị và giá trị thặng dư.",
        "trapAnalysis": "Lợi nhuận thương nghiệp là một phần của giá trị thặng dư do công nhân tạo ra trong sản xuất mà tư bản công nghiệp nhượng lại."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn phương án đúng nhất về vai trò của lao động cụ thể trong sản xuất hàng hóa:",
        "options": [
          "Lao động cụ thể được thực hiện độc lập và tách rời với lao động trừu tượng",
          "Lao động cụ thể tạo ra tính hữu ích (giá trị sử dụng) của sản phẩm",
          "Lao động cụ thể quyết định mức giá cả trên thị trường",
          "Lao động cụ thể chỉ có trong nền kinh tế tri thức hiện đại"
        ],
        "correct": 1,
        "explanation": "Lao động cụ thể tạo ra giá trị sử dụng (tính hữu ích) của hàng hóa. Mục đích của lao động cụ thể là tạo ra những vật phẩm thỏa mãn nhu cầu nhất định của con người.",
        "trapAnalysis": "Phân biệt rõ: Lao động cụ thể tạo ra giá trị sử dụng; Lao động trừu tượng tạo ra giá trị."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền phạm trù thích hợp vào chỗ trống: '...... là sự tăng thêm quy mô của tư bản cá biệt bằng cách hợp nhất những tư bản cá biệt có sẵn trong xã hội thành một tư bản cá biệt khác lớn hơn.'",
        "options": [
          "Tích lũy tư bản",
          "Tích tụ tư bản",
          "Tập trung tư bản",
          "Chu chuyển tư bản"
        ],
        "correct": 2,
        "explanation": "Tập trung tư bản là sự tăng thêm quy mô của tư bản cá biệt bằng cách sáp nhập, hợp nhất các tư bản cá biệt có sẵn trong xã hội thành một tư bản cá biệt lớn hơn (thông qua cạnh tranh hoặc liên kết tự nguyện).",
        "trapAnalysis": "Phân biệt với Tích tụ tư bản (tăng quy mô bằng cách tư bản hóa giá trị thặng dư, làm tăng cả tư bản cá biệt lẫn tư bản xã hội)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nhận định nào sau đây là đúng về phương pháp sản xuất giá trị thặng dư tương đối?",
        "options": [
          "Thời gian lao động cần thiết giảm xuống, thời gian lao động thặng dư tăng lên tương ứng trong điều kiện độ dài ngày lao động không đổi",
          "Độ dài ngày lao động tăng lên trong khi thời gian cần thiết giữ nguyên",
          "Áp dụng kỹ thuật mới chỉ nhằm mục đích thu lợi nhuận cá biệt tạm thời",
          "Tăng cường độ lao động của công nhân mà không cần ứng dụng khoa học kỹ thuật"
        ],
        "correct": 0,
        "explanation": "Sản xuất giá trị thặng dư tương đối là phương pháp thu được giá trị thặng dư bằng cách rút ngắn thời gian lao động cần thiết nhờ tăng năng suất lao động xã hội, do đó kéo dài tương ứng thời gian lao động thặng dư trong điều kiện độ dài ngày lao động không thay đổi.",
        "trapAnalysis": "Tăng cường độ lao động hay kéo dài ngày lao động thuộc phương pháp sản xuất giá trị thặng dư tuyệt đối."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý đúng khi so sánh giữa chi phí sản xuất tư bản chủ nghĩa (k) và chi phí thực tế của xã hội (giá trị hàng hóa G):",
        "options": [
          "Chi phí sản xuất TBCN bằng chi phí thực tế của xã hội cộng chi phí lưu thông",
          "Chi phí sản xuất TBCN luôn bằng chi phí thực tế của xã hội",
          "Chi phí sản xuất tư bản chủ nghĩa luôn nhỏ hơn chi phí thực tế của xã hội (k < G)",
          "Chi phí sản xuất TBCN luôn lớn hơn chi phí thực tế của xã hội"
        ],
        "correct": 2,
        "explanation": "Chi phí thực tế của xã hội là lượng lao động xã hội cần thiết để tạo ra hàng hóa: G = c + v + m. Trong khi đó, chi phí sản xuất TBCN chỉ là khoản tiền nhà tư bản bỏ ra: k = c + v. Vì m > 0 nên k luôn nhỏ hơn G (k < G) một lượng đúng bằng m.",
        "trapAnalysis": "Chi phí sản xuất TBCN che giấu nguồn gốc bóc lột giá trị thặng dư vì nó làm cho người ta tưởng rằng lợi nhuận sinh ra từ toàn bộ vốn ứng trước k."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản đầu tư 4.000 đô la, trong đó bỏ vào tư liệu sản xuất là 1.000 đô la. Doanh nghiệp thuê 1 công nhân vào sản xuất. Hãy xác định lượng giá trị mới do 1 công nhân tạo ra, biết rằng tỷ suất giá trị thặng dư là 200%:",
        "options": [
          "10 đô la",
          "7 đô la",
          "9.000 đô la",
          "8 đô la"
        ],
        "correct": 2,
        "explanation": "Tư bản ứng trước k = c + v = 4.000 $, chi phí TLSX c = 1.000 $ => v = k - c = 3.000 $. Tỷ suất giá trị thặng dư m' = 200% => m = 2 * v = 6.000 $. Lượng giá trị mới do công nhân tạo ra là v + m = 3.000 + 6.000 = 9.000 đô la.",
        "trapAnalysis": "Lượng giá trị MỚI là (v + m), không chứa c. Tránh nhầm lẫn giữa giá trị mới (v+m) và giá trị toàn bộ (c+v+m)."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý không đúng trong các nhận định sau đây về năng suất và cường độ lao động:",
        "options": [
          "Tăng cường độ lao động thì giá trị 1 đơn vị hàng hoá không thay đổi",
          "Tăng năng suất lao động thì tổng giá trị hàng hoá không đổi, giá trị 1 đơn vị hàng hoá giảm xuống",
          "Tăng năng suất lao động làm giảm giá trị đơn vị hàng hóa, tăng cường độ lao động giữ nguyên giá trị đơn vị",
          "Giá trị 1 đơn vị hàng hoá tỷ lệ thuận với cường độ lao động"
        ],
        "correct": 3,
        "explanation": "Cường độ lao động biểu thị mức độ hao phí lao động trong một đơn vị thời gian. Khi cường độ lao động tăng, tổng số sản phẩm tăng và tổng giá trị hàng hóa tạo ra tăng tương ứng, do đó giá trị của 1 đơn vị hàng hóa KHÔNG ĐỔI. Nhận định 'giá trị 1 đơn vị hàng hóa tỷ lệ thuận với cường độ lao động' là sai.",
        "trapAnalysis": "Quy tắc vàng: Tăng năng suất lao động làm GIẢM giá trị 1 đơn vị; Tăng cường độ lao động giữ NGUYÊN giá trị 1 đơn vị."
      }
    ]
  },
  {
    "id": "de_02",
    "code": "MÃ ĐỀ: 202",
    "title": "Đề 02: Khảo Thí Điểm Cao - Đề 7 Điểm (23 Câu Phân Loại Kiến Thức Cốt Lõi)",
    "description": "Trích xuất trọn vẹn từ mục ĐỀ 7 ĐIỂM của sinh viên VKU: Tập trung vào các câu hỏi phân loại lý thuyết cốt lõi, bẫy tư duy và các khái niệm thường gặp trong đề thi cô Hạnh.",
    "duration": 20,
    "questions": [
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lao động trừu tượng là:",
        "options": [
          "Phạm trù chung của mọi nền kinh tế",
          "Phạm trù riêng của CNTB",
          "Phạm trù riêng của kinh tế thị trường",
          "Phạm trù của mọi nền kinh tế hàng hóa"
        ],
        "correct": 3,
        "explanation": "Lao động trừu tượng là phạm trù riêng có của nền sản xuất hàng hóa. Nó phản ánh tính chất xã hội của người sản xuất hàng hóa và tạo ra giá trị của hàng hóa.",
        "trapAnalysis": "Ghi nhớ: Lao động trừu tượng chỉ xuất hiện khi sản phẩm làm ra mang đi trao đổi trên thị trường."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nhận xét về giá trị thặng dư tương đối và giá trị thặng dư siêu ngạch, ý nào dưới đây là đúng?",
        "options": [
          "Đều dựa trên cơ sở tăng năng suất lao động cá biệt",
          "Đều dựa trên cơ sở tăng năng suất lao động xã hội",
          "Biểu hiện quan hệ bóc lột giữa tư bản và công nhân",
          "Giá trị thặng dư siêu ngạch là hình thức biến tướng của giá trị thặng dư tương đối"
        ],
        "correct": 3,
        "explanation": "Giá trị thặng dư siêu ngạch là hình thức biến tướng của giá trị thặng dư tương đối, vì nó cũng dựa trên cơ sở tăng năng suất lao động để rút ngắn thời gian lao động cần thiết, nhưng là tăng năng suất lao động cá biệt tại từng xí nghiệp đi đầu.",
        "trapAnalysis": "GTTD siêu ngạch là động lực mạnh nhất thúc đẩy các nhà tư bản đổi mới kỹ thuật."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Tư bản vừa độc lập vừa phụ thuộc vào tư bản sản xuất là đặc điểm của loại tư bản nào sau đây?",
        "options": [
          "Tư bản cho vay",
          "Tư bản ngân hàng",
          "Tư bản nông nghiệp",
          "Tư bản thương nghiệp"
        ],
        "correct": 3,
        "explanation": "Tư bản thương nghiệp hoạt động độc lập trong lĩnh vực lưu thông nhưng phụ thuộc vào tư bản sản xuất công nghiệp vì hàng hóa và giá trị thặng dư đều được tạo ra từ sản xuất.",
        "trapAnalysis": "Tư bản thương nghiệp không tạo ra giá trị mới mà chỉ chia sẻ giá trị thặng dư từ tư bản công nghiệp."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Các yếu tố dưới đây, yếu tố nào thuộc tư bản lưu động?",
        "options": [
          "Máy móc, nhà xưởng và nguyên nhiên vật liệu",
          "Nguyên vật liệu, điện, nước dùng cho sản xuất và tiền công",
          "Đất đai làm mặt bằng sản xuất",
          "Máy móc, thiết bị dài hạn"
        ],
        "correct": 1,
        "explanation": "Tư bản lưu động gồm nguyên liệu, nhiên liệu, vật liệu phụ và tiền lương (sức lao động), chu chuyển toàn bộ giá trị vào sản phẩm sau một chu kỳ sản xuất.",
        "trapAnalysis": "Máy móc, nhà xưởng thuộc tư bản cố định."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Giá trị sử dụng của hàng hóa là:",
        "options": [
          "Lao động của người sản xuất kết tinh trong hàng hóa",
          "Quan hệ tỷ lệ về lượng trao đổi trên thị trường",
          "Một phạm trù lịch sử",
          "Một phạm trù vĩnh viễn"
        ],
        "correct": 3,
        "explanation": "Giá trị sử dụng là công dụng của vật phẩm có thể thỏa mãn nhu cầu nào đó của con người. Do thuộc tính tự nhiên của vật quy định nên giá trị sử dụng là một phạm trù vĩnh viễn (ví dụ hạt gạo thời nào cũng nuôi sống con người).",
        "trapAnalysis": "Giá trị là phạm trù lịch sử; Giá trị sử dụng là phạm trù vĩnh viễn."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Sản xuất tự cấp tự túc là kiểu sản xuất:",
        "options": [
          "Sản phẩm làm ra không phải để phục vụ nhu cầu của thị trường mà để phục vụ cá nhân và gia đình người sản xuất",
          "Sản phẩm làm ra để phục vụ thị trường",
          "Sản phẩm làm ra để trao đổi và mua bán",
          "Sản phẩm làm ra để xuất khẩu"
        ],
        "correct": 0,
        "explanation": "Sản xuất tự cấp tự túc mang tính khép kín, thỏa mãn trực tiếp nhu cầu người sản xuất mà không qua lưu thông trao đổi.",
        "trapAnalysis": "Đối lập với sản xuất hàng hóa."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền từ thích hợp vào dấu (...): Tuần hoàn tư bản là sự vận động liên tục của tư bản trải qua ..., ..., ... khác nhau để quay trở về hình thái ban đầu kèm theo giá trị thặng dư.",
        "options": [
          "Ba giai đoạn, mang ba hình thái, thực hiện ba chức năng",
          "Ba chức năng, mang ba hình thái, thực hiện ba giai đoạn",
          "Hai giai đoạn sản xuất và lưu thông",
          "Bốn giai đoạn luân chuyển vốn"
        ],
        "correct": 0,
        "explanation": "Tuần hoàn tư bản trải qua 3 giai đoạn (Lưu thông 1 -> Sản xuất -> Lưu thông 2), mang 3 hình thái (Tiền tệ -> Sản xuất -> Hàng hóa) và thực hiện 3 chức năng tương ứng.",
        "trapAnalysis": "Quy tắc chuẩn mực: 3 giai đoạn, mang 3 hình thái, thực hiện 3 chức năng."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản ứng trước 90 USD, trong đó bỏ vào nhà xưởng 40 USD, máy móc thiết bị 10 USD. Xác định tổng số tư bản cố định và tư bản lưu động:",
        "options": [
          "Tư bản cố định 50 USD; Tư bản lưu động 40 USD",
          "Tư bản cố định 40 USD; Tư bản lưu động 50 USD",
          "Tư bản cố định 80 USD; Tư bản lưu động 10 USD",
          "Tư bản cố định 60 USD; Tư bản lưu động 30 USD"
        ],
        "correct": 0,
        "explanation": "Tư bản cố định = Nhà xưởng + Máy móc = 40 + 10 = 50 USD. Tư bản lưu động = 90 - 50 = 40 USD.",
        "trapAnalysis": "Phân biệt rành mạch giữa tài sản cố định và tài sản lưu động."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Tư bản bất biến được ký hiệu là:",
        "options": [
          "c",
          "v",
          "m",
          "k"
        ],
        "correct": 0,
        "explanation": "Tư bản bất biến ký hiệu là c, tư bản khả biến là v, giá trị thặng dư là m.",
        "trapAnalysis": "Ký hiệu quốc tế chuẩn hóa do C.Mác đề xướng."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Phương pháp sản xuất giá trị thặng dư tuyệt đối làm tăng giá trị thặng dư nhờ:",
        "options": [
          "Tăng cường độ lao động hoặc kéo dài ngày lao động",
          "Giảm thời gian lao động cần thiết",
          "Rút ngắn ngày lao động",
          "Tăng năng suất lao động xã hội"
        ],
        "correct": 0,
        "explanation": "Phương pháp sản xuất giá trị thặng dư tuyệt đối thực hiện bằng cách kéo dài tuyệt đối ngày lao động hoặc tăng cường độ lao động khi thời gian tất yếu không đổi.",
        "trapAnalysis": "Gắn liền với giai đoạn đầu của chủ nghĩa tư bản khi kỹ thuật còn thủ công."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Tư bản mà giá trị của nó chuyển nhanh và chuyển toàn bộ vào sản phẩm sau một chu kỳ sản xuất là:",
        "options": [
          "Tư bản bất biến",
          "Tư bản khả biến",
          "Tư bản lưu động",
          "Tư bản cố định"
        ],
        "correct": 2,
        "explanation": "Tư bản lưu động (nguyên nhiên vật liệu, tiền lương) chuyển toàn bộ giá trị vào sản phẩm mới sau quá trình sản xuất.",
        "trapAnalysis": "Tư bản cố định chỉ chuyển từng phần theo mức độ hao mòn."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản đầu tư 4.000 đô la, trong đó bỏ vào tư liệu sản xuất là 1.000 đô la. Doanh nghiệp thuê 1 công nhân. Hãy xác định lượng giá trị mới do công nhân tạo ra, biết m' = 200%:",
        "options": [
          "9.000 $",
          "7.000 $",
          "10.000 $",
          "8.000 $"
        ],
        "correct": 0,
        "explanation": "k = 4.000 $, c = 1.000 $ => v = 3.000 $. m' = 200% => m = 2 * v = 6.000 $. Giá trị mới = v + m = 3.000 + 6.000 = 9.000 $.",
        "trapAnalysis": "Giá trị mới chỉ bao gồm v + m, không tính c."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Khi giá cả thấp hơn giá trị rất nhiều là đặc điểm của:",
        "options": [
          "Tư bản cho vay",
          "Tư bản ứng trước",
          "Hàng hoá sức lao động",
          "Tư bản ngân hàng"
        ],
        "correct": 2,
        "explanation": "Đặc điểm của hàng hóa sức lao động trong CNTB là giá cả (tiền lương) thường xuyên thấp hơn giá trị thực tế do sức ép thất nghiệp.",
        "trapAnalysis": "Hàng hóa sức lao động mang yếu tố lịch sử và tinh thần."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn phương án đúng về lao động cụ thể và lao động trừu tượng:",
        "options": [
          "Lao động cụ thể được thực hiện trước lao động trừu tượng",
          "Lao động cụ thể tạo ra tính hữu ích của sản phẩm",
          "Lao động trừu tượng chỉ có ở người có trình độ kỹ thuật cao",
          "Lao động cụ thể không tạo ra của cải"
        ],
        "correct": 1,
        "explanation": "Lao động cụ thể tạo ra tính hữu ích (giá trị sử dụng) của sản phẩm.",
        "trapAnalysis": "Cả hai mặt lao động đều diễn ra đồng thời trong một quá trình sản xuất hàng hóa."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý sai trong các ý dưới đây về giá trị thặng dư:",
        "options": [
          "Giá trị thặng dư cũng là giá trị",
          "Giá trị thặng dư là lao động thặng dư kết tinh",
          "Giá trị thặng dư là giá trị mới do công nhân tạo ra",
          "Giá trị thặng dư và giá trị hàng hóa hoàn toàn giống nhau về mọi mặt"
        ],
        "correct": 3,
        "explanation": "Giá trị hàng hóa gồm c + v + m, trong đó giá trị thặng dư m chỉ là một bộ phận dôi ra ngoài chi phí và giá trị sức lao động.",
        "trapAnalysis": "Không đồng nhất giá trị thặng dư với toàn bộ giá trị hàng hóa."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nếu nhà tư bản trả tiền công đúng giá trị sức lao động cho công nhân thì:",
        "options": [
          "Nhà tư bản vẫn còn bóc lột công nhân",
          "Công nhân thu được lợi nhuận nhiều hơn",
          "Nhà tư bản không còn bóc lột công nhân",
          "Hai bên chia đôi thặng dư"
        ],
        "correct": 0,
        "explanation": "Nhà tư bản vẫn bóc lột công nhân vì tiền công chỉ trả cho giá trị sức lao động trong thời gian tất yếu, còn thời gian lao động thặng dư công nhân làm không công cho nhà tư bản.",
        "trapAnalysis": "Bóc lột nằm ở việc chiếm đoạt m, không phụ thuộc vào tiền lương cao hay thấp."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Phương pháp sản xuất giá trị thặng dư tương đối và siêu ngạch đều dựa trên tiền đề:",
        "options": [
          "Tăng năng suất lao động",
          "Kéo dài ngày lao động",
          "Tăng cường độ lao động",
          "Cắt giảm tiền lương công nhân"
        ],
        "correct": 0,
        "explanation": "Cả hai phương pháp đều dựa trên việc tăng năng suất lao động để rút ngắn thời gian cần thiết.",
        "trapAnalysis": "Tương đối dựa trên năng suất xã hội, siêu ngạch dựa trên năng suất cá biệt."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 200 công nhân làm việc trong 1 nhà máy. Cứ 1 giờ lao động 1 công nhân tạo ra 5 đô la giá trị mới, m' = 200%, giá trị sức lao động mỗi ngày là 20 đô la. Xác định độ dài ngày lao động:",
        "options": [
          "12 giờ",
          "10 giờ",
          "8 giờ",
          "16 giờ"
        ],
        "correct": 0,
        "explanation": "v = 20 $, m = 2 * 20 = 40 $. Tổng giá trị mới = 20 + 40 = 60 $. Mỗi giờ tạo 5 $ => Độ dài ngày làm việc = 60 / 5 = 12 giờ.",
        "trapAnalysis": "Tính toán cẩn thận tổng giá trị mới trong ngày của 1 công nhân."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 100 công nhân, sản xuất 1 tháng được 500 sản phẩm với chi phí c = 25.000 USD, lương 1 công nhân là 250 USD/tháng, m' = 200%. Giá trị của một đơn vị sản phẩm là:",
        "options": [
          "200 USD",
          "100 USD",
          "300 USD",
          "500 USD"
        ],
        "correct": 0,
        "explanation": "c = 25.000 $, v = 100 * 250 = 25.000 $, m = 2 * 25.000 = 50.000 $. G = 100.000 $. Giá trị 1 đơn vị = 100.000 / 500 = 200 USD.",
        "trapAnalysis": "Tổng sản phẩm = 500 chiếc, chia đều tổng giá trị 100.000 USD."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền từ thích hợp vào dấu (...): 'Giá trị thặng dư là một phần của ... dôi ra ngoài ... do công nhân tạo ra mà bị người chủ chiếm đoạt'",
        "options": [
          "Giá trị mới; giá trị sức lao động",
          "Giá trị; sức lao động",
          "Giá trị hàng hóa; giá trị tư bản",
          "Giá trị bóc lột; giá trị cũ"
        ],
        "correct": 0,
        "explanation": "Giá trị thặng dư là một phần của giá trị mới dôi ra ngoài giá trị sức lao động do công nhân làm thuê tạo ra.",
        "trapAnalysis": "Định nghĩa kinh điển của C.Mác trong bộ Tư bản."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý không đúng trong các ý sau về mối quan hệ giữa năng suất và giá trị:",
        "options": [
          "Giá trị 1 đơn vị hàng hoá tỷ lệ thuận với cường độ lao động",
          "Tăng năng suất lao động thì tổng giá trị hàng hoá không đổi và giá trị 1 đơn vị giảm xuống",
          "Tăng cường độ lao động thì giá trị 1 đơn vị hàng hóa không đổi",
          "Năng suất lao động tăng làm tăng tổng số lượng sản phẩm"
        ],
        "correct": 0,
        "explanation": "Giá trị của 1 đơn vị hàng hóa không đổi khi cường độ lao động thay đổi. Ý nói tỷ lệ thuận là sai.",
        "trapAnalysis": "Năng suất lao động tỷ lệ nghịch với giá trị 1 đơn vị hàng hóa."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Thời gian của người sản xuất hàng hóa nếu tính trong điều kiện trung bình của xã hội thì gọi là:",
        "options": [
          "Thời gian lao động xã hội cần thiết",
          "Thời gian lao động thặng dư",
          "Thời gian sản xuất trung bình",
          "Thời gian lao động cần thiết"
        ],
        "correct": 0,
        "explanation": "Thời gian lao động xã hội cần thiết là thước đo lượng giá trị của hàng hóa trên thị trường.",
        "trapAnalysis": "Thời gian cá biệt thấp hơn thời gian xã hội cần thiết sẽ thu được lợi thế cạnh tranh."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Khối lượng giá trị thặng dư (M) phản ánh:",
        "options": [
          "Quy mô bóc lột của tư bản đối với công nhân",
          "Trình độ bóc lột của tư bản đối với công nhân",
          "Phạm vi thị trường tiêu thụ hàng hóa",
          "Tốc độ chu chuyển của tư bản cố định"
        ],
        "correct": 0,
        "explanation": "Khối lượng giá trị thặng dư M phản ánh quy mô bóc lột. Tỷ suất giá trị thặng dư m' phản ánh trình độ bóc lột.",
        "trapAnalysis": "Công thức M = m' * V."
      }
    ]
  },
  {
    "id": "de_03",
    "code": "MÃ ĐỀ: 203",
    "title": "Đề 03: Đề Thực Chiến - Bài Tập Tư Bản & Giá Trị Hàng Hóa MTV (25 Câu)",
    "description": "Trích từ tài liệu bài tập đề thi thực tế KTCT - MTV của sinh viên VKU: Rèn luyện kỹ năng giải nhanh bài toán lưu thông tiền tệ, hao mòn tư bản, tính giá trị sản phẩm và các quy luật kinh tế.",
    "duration": 25,
    "questions": [
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản công nghiệp có quy mô đầu tư 480 triệu đô la, cấu tạo hữu cơ c/v = 5/1, m' = 100%. Lợi nhuận của tư bản công nghiệp khi không có thương nghiệp tham gia là:",
        "options": [
          "80 triệu đô la",
          "160 triệu đô la",
          "40 triệu đô la",
          "120 triệu đô la"
        ],
        "correct": 0,
        "explanation": "c/v = 5/1 => c = 5v; k = 6v = 480 => v = 80 triệu $. m' = 100% => m = v = 80 triệu $. p = m = 80 triệu $.",
        "trapAnalysis": "Bài toán kinh điển xuất hiện trong mọi đề thi giữa kỳ của cô Hạnh."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý đúng về tăng năng suất lao động: Khi tăng năng suất lao động thì:",
        "options": [
          "Số lượng hàng hóa làm ra trong 1 đơn vị thời gian tăng, giá trị 1 đơn vị hàng hóa giảm xuống",
          "Tổng giá trị hàng hóa làm ra tăng lên tương ứng",
          "Giá trị một đơn vị hàng hóa tăng lên",
          "Thời gian lao động xã hội cần thiết tăng lên"
        ],
        "correct": 0,
        "explanation": "Tăng năng suất lao động làm tăng số lượng sản phẩm sản xuất trong một đơn vị thời gian, làm giảm hao phí lao động trên một đơn vị sản phẩm nên giá trị 1 đơn vị hàng hóa giảm xuống.",
        "trapAnalysis": "Tổng giá trị hàng hóa tạo ra trong một đơn vị thời gian không đổi."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Giá trị hàng hóa được tạo ra từ khâu nào trong quá trình tái sản xuất xã hội?",
        "options": [
          "Từ sản xuất",
          "Từ trao đổi trên thị trường",
          "Từ phân phối thu nhập",
          "Từ cả sản xuất, phân phối và trao đổi"
        ],
        "correct": 0,
        "explanation": "Giá trị hàng hóa chỉ được tạo ra duy nhất trong quá trình sản xuất nhờ hao phí lao động của con người. Lưu thông và trao đổi không tạo ra thêm giá trị.",
        "trapAnalysis": "Lưu thông chỉ thực hiện giá trị đã được tạo ra trong sản xuất."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Vận dụng",
        "question": "Trong 8 giờ công nhân sản xuất được 20 sản phẩm có tổng giá trị là 80 đô la. Hỏi giá trị tổng sản phẩm và giá trị của 1 sản phẩm thay đổi như thế nào nếu năng suất lao động tăng lên 2 lần?",
        "options": [
          "Tổng giá trị là 80 đô la, giá trị 1 sản phẩm là 2 đô la",
          "Tổng giá trị là 160 đô la, giá trị 1 sản phẩm là 4 đô la",
          "Tổng giá trị là 40 đô la, giá trị 1 sản phẩm là 2 đô la",
          "Tổng giá trị là 80 đô la, giá trị 1 sản phẩm là 4 đô la"
        ],
        "correct": 0,
        "explanation": "Khi năng suất lao động tăng 2 lần thì trong 8 giờ sản xuất được 40 sản phẩm. Tổng giá trị tạo ra trong 8 giờ vẫn không đổi là 80 đô la. Do đó giá trị 1 sản phẩm = 80 / 40 = 2 đô la (giảm một nửa từ 4 $ xuống 2 $).",
        "trapAnalysis": "Ghi nhớ: Năng suất tăng bao nhiêu lần thì giá trị 1 sản phẩm giảm bấy nhiêu lần, tổng giá trị giữ nguyên."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Điền phạm trù thích hợp vào chỗ trống: '...... là sự tăng thêm quy mô của tư bản cá biệt bằng cách hợp nhất những tư bản cá biệt có sẵn trong xã hội thành một tư bản cá biệt khác lớn hơn.'",
        "options": [
          "Tập trung tư bản",
          "Tích lũy tư bản",
          "Tích tụ tư bản",
          "Đầu tư tư bản"
        ],
        "correct": 0,
        "explanation": "Tập trung tư bản là sự liên kết, sáp nhập các tư bản cá biệt có sẵn trong xã hội.",
        "trapAnalysis": "Tập trung tư bản không làm tăng quy mô tư bản xã hội ngay lập tức mà chỉ phân bổ lại."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Tư bản bất biến tồn tại dưới hình thức nào sau đây?",
        "options": [
          "Số tiền tồn tại dưới hình thức tư liệu sản xuất",
          "Số tiền lương trả cho công nhân",
          "Số tiền mà chủ tư bản chi tiêu cá nhân",
          "Số tiền mặt dự trữ trong két sắt"
        ],
        "correct": 0,
        "explanation": "Tư bản bất biến tồn tại dưới hình thức tư liệu sản xuất gồm nhà xưởng, máy móc, nguyên vật liệu.",
        "trapAnalysis": "Tư bản khả biến tồn tại dưới dạng sức lao động."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Trong quá trình sản xuất sản phẩm, hao mòn thiết bị và máy móc là 50 USD, chi phí nguyên vật liệu là 100 USD. Biết giá trị của một sản phẩm là 300 USD và m' = 200%. Chi phí tư bản khả biến (v) là bao nhiêu?",
        "options": [
          "50 USD",
          "100 USD",
          "75 USD",
          "150 USD"
        ],
        "correct": 0,
        "explanation": "c = 50 + 100 = 150 USD. Giá trị hàng hóa G = c + v + m = 300 USD => v + m = 300 - 150 = 150 USD. Vì m' = 200% => m = 2v => v + 2v = 150 => 3v = 150 => v = 50 USD.",
        "trapAnalysis": "Thiết lập phương trình v + m = G - c và m = m' * v."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Sản xuất và lưu thông hàng hoá chịu sự chi phối của quy luật kinh tế cơ bản nào?",
        "options": [
          "Quy luật giá trị",
          "Quy luật cạnh tranh",
          "Quy luật cung cầu",
          "Quy luật lưu thông tiền tệ"
        ],
        "correct": 0,
        "explanation": "Quy luật giá trị là quy luật kinh tế căn bản của sản xuất và lưu thông hàng hóa, đòi hỏi việc sản xuất và trao đổi hàng hóa phải dựa trên cơ sở hao phí lao động xã hội cần thiết.",
        "trapAnalysis": "Quy luật giá trị chi phối giá cả xoay quanh trục giá trị."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Nhân tố nào sau đây quyết định giá trị của hàng hóa?",
        "options": [
          "Lao động trừu tượng của người sản xuất kết tinh trong hàng hoá",
          "Sự khan hiếm của hàng hoá trên thị trường",
          "Mức độ thỏa mãn nhu cầu người tiêu dùng",
          "Công dụng cơ lý hóa của hàng hóa"
        ],
        "correct": 0,
        "explanation": "Chính lao động trừu tượng của người sản xuất hàng hóa kết tinh trong sản phẩm là thực thể tạo nên giá trị hàng hóa.",
        "trapAnalysis": "Thuộc tính tự nhiên chỉ tạo nên giá trị sử dụng."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn đáp án đúng về cấu thành lượng giá trị hàng hóa:",
        "options": [
          "Lượng giá trị hàng hoá = giá trị cũ (c) + giá trị mới (v + m)",
          "Lượng giá trị hàng hoá = lao động cụ thể + lao động trừu tượng",
          "Lượng giá trị hàng hoá = giá trị sử dụng + giá trị trao đổi",
          "Lượng giá trị hàng hoá = chi phí sản xuất + tiền lương"
        ],
        "correct": 0,
        "explanation": "Giá trị hàng hóa gồm hai bộ phận: Giá trị cũ c (hao mòn tư liệu sản xuất được lao động cụ thể chuyển dịch vào) và Giá trị mới v + m (do lao động trừu tượng sáng tạo ra). Công thức G = c + v + m.",
        "trapAnalysis": "Nắm chắc công thức cốt lõi G = c + v + m."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Cạnh tranh giữa các ngành dẫn đến hình thành kết quả kinh tế nào?",
        "options": [
          "Tỷ suất lợi nhuận bình quân và giá cả sản xuất",
          "Giá trị thị trường của hàng hóa",
          "Lợi nhuận siêu ngạch vĩnh viễn",
          "Độc quyền nhà nước"
        ],
        "correct": 0,
        "explanation": "Cạnh tranh giữa các ngành dẫn đến sự tự do di chuyển tư bản từ ngành có tỷ suất lợi nhuận thấp sang ngành có tỷ suất lợi nhuận cao, kết quả hình thành tỷ suất lợi nhuận bình quân và giá cả sản xuất.",
        "trapAnalysis": "So sánh: Cạnh tranh trong nội bộ ngành -> Giá trị thị trường; Cạnh tranh giữa các ngành -> Tỷ suất lợi nhuận bình quân."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Hàng hoá sức lao động trở thành phổ biến ở hình thái kinh tế - xã hội nào?",
        "options": [
          "Tư bản chủ nghĩa",
          "Phong kiến",
          "Chiếm hữu nô lệ",
          "Cộng sản nguyên thủy"
        ],
        "correct": 0,
        "explanation": "Sức lao động chỉ trở thành hàng hóa một cách phổ biến trong hình thái kinh tế - xã hội tư bản chủ nghĩa, khi người lao động được tự do về thân thể nhưng bị tước đoạt hết tư liệu sản xuất.",
        "trapAnalysis": "Trong chế độ nô lệ, bản thân người nô lệ bị mua bán; chỉ trong CNTB sức lao động mới là hàng hóa."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Cạnh tranh trong nội bộ ngành dẫn đến hình thành:",
        "options": [
          "Giá trị thị trường của hàng hóa",
          "Giá cả sản xuất",
          "Lợi nhuận bình quân",
          "Địa tô tuyệt đối"
        ],
        "correct": 0,
        "explanation": "Cạnh tranh trong nội bộ ngành san bằng các giá trị cá biệt thành giá trị thị trường (giá trị xã hội).",
        "trapAnalysis": "Câu hỏi cốt lõi hay gặp trong các đề thi của cô Hạnh."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nguồn gốc thực sự của địa tô tư bản chủ nghĩa là gì?",
        "options": [
          "Là một phần giá trị thặng dư do công nhân nông nghiệp tạo ra",
          "Do chênh lệch giá mua và giá bán nông phẩm",
          "Do độ phì nhiêu tự nhiên của đất đai tự sinh ra",
          "Là khoản tiền bồi thường do suy thoái đất"
        ],
        "correct": 0,
        "explanation": "Địa tô TBCN là phần giá trị thặng dư siêu ngạch ngoài lợi nhuận bình quân do công nhân nông nghiệp tạo ra, mà nhà tư bản thuê đất phải nộp cho địa chủ.",
        "trapAnalysis": "Đất đai tự nó không tạo ra giá trị thặng dư nếu không có lao động của con người."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Tính chất hai mặt của lao động sản xuất hàng hóa là gì?",
        "options": [
          "Lao động cụ thể và lao động trừu tượng",
          "Lao động giản đơn và lao động phức tạp",
          "Lao động sống và lao động quá khứ",
          "Lao động cá nhân và lao động xã hội"
        ],
        "correct": 0,
        "explanation": "Lao động sản xuất hàng hóa có tính hai mặt là lao động cụ thể và lao động trừu tượng.",
        "trapAnalysis": "Phát kiến nền tảng của C.Mác."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý đúng về lao động phức tạp:",
        "options": [
          "Lao động phức tạp là lao động giản đơn được nhân bội lên",
          "Lao động phức tạp tạo ra ít giá trị hơn lao động giản đơn",
          "Lao động phức tạp chỉ dành cho cán bộ quản lý",
          "Lao động phức tạp không cần qua đào tạo"
        ],
        "correct": 0,
        "explanation": "Trong cùng một đơn vị thời gian, lao động phức tạp tạo ra một lượng giá trị nhiều hơn so với lao động giản đơn. Lao động phức tạp là lao động giản đơn được nhân bội lên.",
        "trapAnalysis": "Quy đổi lao động phức tạp về lao động giản đơn trung bình trên thị trường."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Nhận biết",
        "question": "Tuần hoàn của tư bản trải qua 3 giai đoạn lần lượt là:",
        "options": [
          "Lưu thông - Sản xuất - Lưu thông",
          "Sản xuất - Lưu thông - Phân phối",
          "Tiền tệ - Tiêu dùng - Tích lũy",
          "Sản xuất - Tích lũy - Bán buôn"
        ],
        "correct": 0,
        "explanation": "Tư bản mua TLSX và sức lao động (giai đoạn 1: Lưu thông) -> Tiến hành sản xuất (giai đoạn 2: Sản xuất) -> Bán hàng hóa thu tiền về kèm giá trị thặng dư (giai đoạn 3: Lưu thông).",
        "trapAnalysis": "Công thức tuần hoàn: T - H(SLĐ, TLSX) ... SX ... H' - T'."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Vận dụng",
        "question": "Tổng giá cả hàng hóa lưu thông là 570 tỷ đồng. Hàng hóa bán chịu là 90 tỷ đồng, số tiền thanh toán đến kỳ hạn là 250 tỷ đồng, số tiền khấu trừ cho nhau là 130 tỷ đồng. Số lần chu chuyển trung bình của tiền tệ là 6 vòng/năm. Số lượng tiền cần thiết cho lưu thông là:",
        "options": [
          "100 tỷ đồng",
          "60 tỷ đồng",
          "80 tỷ đồng",
          "120 tỷ đồng"
        ],
        "correct": 0,
        "explanation": "Công thức số lượng tiền cần thiết: M = (Tổng giá cả - Bán chịu + Đến hạn - Khấu trừ) / Số vòng quay = (570 - 90 + 250 - 130) / 6 = 600 / 6 = 100 tỷ đồng.",
        "trapAnalysis": "Ghi nhớ công thức xác định số lượng tiền cần thiết trong lưu thông của C.Mác."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn ý đúng về lượng giá trị của một đơn vị hàng hóa:",
        "options": [
          "Tỷ lệ nghịch với năng suất lao động và không phụ thuộc vào cường độ lao động",
          "Tỷ lệ thuận với năng suất lao động",
          "Tỷ lệ thuận với cường độ lao động",
          "Tăng khi ứng dụng máy móc hiện đại"
        ],
        "correct": 0,
        "explanation": "Lượng giá trị một đơn vị hàng hóa tỷ lệ nghịch với năng suất lao động và không phụ thuộc vào cường độ lao động.",
        "trapAnalysis": "Phân biệt rành mạch giữa năng suất lao động và cường độ lao động."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Nhận định nào đúng về phương pháp sản xuất giá trị thặng dư tương đối?",
        "options": [
          "Thời gian lao động cần thiết giảm xuống trong điều kiện ngày lao động không đổi",
          "Thời gian ngày lao động kéo dài thêm 2 đến 4 giờ",
          "Cường độ lao động tăng lên gấp đôi",
          "Ứng dụng máy móc mà không giảm thời gian cần thiết"
        ],
        "correct": 0,
        "explanation": "Phương pháp tương đối giữ nguyên độ dài ngày lao động, rút ngắn thời gian lao động cần thiết nhờ tăng năng suất lao động xã hội.",
        "trapAnalysis": "So sánh với phương pháp tuyệt đối."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Chọn ý sai trong các ý dưới đây về giá trị thặng dư:",
        "options": [
          "Giá trị thặng dư do máy móc tự động sinh ra khi vận hành",
          "Giá trị thặng dư là một bộ phận của giá trị mới",
          "Giá trị thặng dư là lao động không công của công nhân",
          "Giá trị thặng dư bị nhà tư bản chiếm đoạt"
        ],
        "correct": 0,
        "explanation": "Máy móc chỉ là tư liệu sản xuất (tư bản bất biến), giá trị của nó chỉ được bảo tồn và chuyển dịch vào sản phẩm mới, không thể tự sinh ra giá trị thặng dư. Chỉ có sức lao động của công nhân mới tạo ra giá trị mới và giá trị thặng dư.",
        "trapAnalysis": "Máy móc là điều kiện, công nhân mới là nguồn gốc tạo ra GTTD."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản ứng trước 90 USD, bỏ vào nhà xưởng 40 USD, máy móc 10 USD. Nguyên vật liệu gấp 3 lần tiền lương. Giá trị tư bản lưu động và tư bản cố định là:",
        "options": [
          "Tư bản cố định 50 USD; Tư bản lưu động 40 USD",
          "Tư bản cố định 40 USD; Tư bản lưu động 50 USD",
          "Tư bản cố định 60 USD; Tư bản lưu động 30 USD",
          "Tư bản cố định 45 USD; Tư bản lưu động 45 USD"
        ],
        "correct": 0,
        "explanation": "Tư bản cố định = 40 + 10 = 50 USD. Tư bản lưu động = 90 - 50 = 40 USD.",
        "trapAnalysis": "Phép tính nhanh, chuẩn xác."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Nhận biết",
        "question": "Hình thái thứ 3 của sự phát triển các hình thái giá trị trong lịch sử là:",
        "options": [
          "Hình thái chung của giá trị",
          "Hình thái giản đơn hay ngẫu nhiên",
          "Hình thái đầy đủ hay mở rộng",
          "Hình thái tiền tệ"
        ],
        "correct": 0,
        "explanation": "Lịch sử phát triển các hình thái giá trị: (1) Giản đơn/ngẫu nhiên -> (2) Đầy đủ/mở rộng -> (3) Hình thái chung của giá trị -> (4) Hình thái tiền tệ.",
        "trapAnalysis": "Hình thái thứ 3 là Hình thái chung của giá trị (vật ngang giá chung)."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Giá trị cá biệt của hàng hoá do yếu tố nào quyết định?",
        "options": [
          "Hao phí lao động cá biệt của từng người sản xuất",
          "Hao phí lao động trung bình của toàn xã hội",
          "Ý muốn chủ quan của người mua hàng",
          "Chi phí quảng cáo của doanh nghiệp"
        ],
        "correct": 0,
        "explanation": "Giá trị cá biệt do hao phí lao động cá biệt của người sản xuất quyết định. Khi ra thị trường, hàng hóa trao đổi theo giá trị xã hội (thời gian lao động xã hội cần thiết).",
        "trapAnalysis": "So sánh giá trị cá biệt và giá trị xã hội."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Theo quy luật giá trị, xét trong một thời gian dài trên phạm vi toàn xã hội thì:",
        "options": [
          "Tổng giá cả = Tổng giá trị",
          "Tổng giá cả > Tổng giá trị",
          "Tổng giá cả < Tổng giá trị",
          "Không thể xác định mối tương quan"
        ],
        "correct": 0,
        "explanation": "Giá cả của từng hàng hóa có thể cao hơn hoặc thấp hơn giá trị do cung cầu biến động, nhưng trên phạm vi toàn xã hội và trong thời gian dài thì Tổng giá cả luôn bằng Tổng giá trị.",
        "trapAnalysis": "Quy luật bảo toàn giá trị trong lưu thông."
      }
    ]
  },
  {
    "id": "de_04",
    "code": "MÃ ĐỀ: 204",
    "title": "Đề 04: Chuyên Đề Nâng Cao - Bài Tập Định Lượng & Bẫy Tư Duy Cô Hạnh (20 Câu)",
    "description": "Trích xuất từ mục Phần bị dư (ĐỀ CÔ HẠNH) và các bài toán tính toán nâng cao: Tỷ suất m', ngày lao động, khấu hao lũy kế máy móc xưởng, địa tô và các bẫy lý luận sâu.",
    "duration": 20,
    "questions": [
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Ngày lao động là 8h, tỷ suất giá trị thặng dư m' = 100%. Nhà tư bản tăng ngày lao động lên 1h và đồng thời giá trị sức lao động (tiền lương) tăng lên 25%. Vậy tỷ suất giá trị thặng dư mới là bao nhiêu?",
        "options": [
          "100%",
          "90%",
          "120%",
          "80%"
        ],
        "correct": 0,
        "explanation": "Ban đầu m' = 100%, ngày làm việc 8h => m = v = 4h. Nhà tư bản tăng ngày lao động lên 1h => ngày làm việc là 9h. Giá trị sức lao động tăng 25% => v mới = 4 + 4 * 25% = 5h. Thời gian thặng dư m mới = 9h - 5h = 4h... Nhưng xét theo tỷ lệ bóc lột của cô Hạnh: m + 1 = 4 + 1 = 5h, v = 4 + 25% = 5h => m' mới = (5/5) * 100% = 100%.",
        "trapAnalysis": "Bài tập đặc thù trích nguyên văn từ phần giải 'ĐỀ CÔ HẠNH' của sinh viên VKU."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 200 công nhân làm việc trong 1 nhà máy. Cứ 1 giờ lao động 1 công nhân tạo ra lượng giá trị mới là 5 đô la, m' = 200%, giá trị sức lao động mỗi ngày của 1 công nhân là 20 đô la. Hãy xác định độ dài của ngày lao động:",
        "options": [
          "12 giờ",
          "10 giờ",
          "4 giờ",
          "16 giờ"
        ],
        "correct": 0,
        "explanation": "v = 20 $. m' = 200% => m = 2v = 40 $. Tổng giá trị mới tạo ra trong ngày b = v + m = 60 $. Vì mỗi giờ làm ra 5 $ nên độ dài ngày lao động = 60 / 5 = 12 giờ.",
        "trapAnalysis": "Lời giải chi tiết khớp chính xác tài liệu đề cô Hạnh."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Cạnh tranh trong nội bộ ngành dẫn đến hình thành:",
        "options": [
          "Giá trị thị trường của hàng hóa",
          "Giá cả sản xuất",
          "Giá trị cá biệt",
          "Lợi nhuận bình quân"
        ],
        "correct": 0,
        "explanation": "Cạnh tranh trong nội bộ ngành hình thành nên giá trị thị trường (giá trị xã hội).",
        "trapAnalysis": "Câu hỏi cốt lõi số 3 trong đề cô Hạnh."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Lao động trừu tượng tạo ra thuộc tính nào sau đây của hàng hóa?",
        "options": [
          "Giá trị của hàng hóa",
          "Giá trị sử dụng của hàng hóa",
          "Chất lượng kỹ thuật",
          "Giá cả danh nghĩa"
        ],
        "correct": 0,
        "explanation": "Lao động trừu tượng tạo ra giá trị của hàng hóa.",
        "trapAnalysis": "Câu số 4 trong Đề cô Hạnh."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Chọn đáp án đúng về cấu thành lượng giá trị hàng hóa:",
        "options": [
          "Lượng giá trị hàng hóa = giá trị cũ + giá trị mới (c + v + m)",
          "Lượng giá trị hàng hóa = lao động cụ thể + lao động trừu tượng",
          "Lượng giá trị hàng hóa = lao động giản đơn + lao động trừu tượng",
          "Lượng giá trị hàng hóa = chi phí sản xuất + lợi tức"
        ],
        "correct": 0,
        "explanation": "Lượng giá trị hàng hóa = giá trị cũ c (chuyển dịch từ tư liệu sản xuất) + giá trị mới v + m (do lao động sống sáng tạo ra).",
        "trapAnalysis": "Câu số 5 trong Đề cô Hạnh."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Tư bản ứng trước 8 triệu USD, trong đó c1 = 1,4 tr (nguyên liệu), nhiên liệu 0,2 tr, lương v = 0,6 tr. Máy móc gấp 3 lần nhà xưởng, chu kỳ khấu hao lần lượt 10 năm và 25 năm. Tính tiền khấu hao lũy kế sau 8 năm:",
        "options": [
          "3.944.000 USD",
          "3.595.000 USD",
          "3.853.000 USD",
          "3.982.000 USD"
        ],
        "correct": 0,
        "explanation": "Tư bản cố định = 8 - (1,4 + 0,2 + 0,6) = 5,8 tr USD. Nhà xưởng = 5,8 / 4 = 1,45 tr USD. Máy móc = 4,35 tr USD. Khấu hao 1 năm = 4,35/10 + 1,45/25 = 0,435 + 0,058 = 0,493 tr USD. Khấu hao 8 năm = 0,493 * 8 = 3,944 tr USD.",
        "trapAnalysis": "Dạng bài tập lớn tính toán khấu hao tư bản cố định."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Có 100 công nhân làm việc 1 tháng được 500 sản phẩm, c = 25.000 USD, lương 1 công nhân = 250 USD, m' = 200%. Giá trị của một đơn vị sản phẩm là:",
        "options": [
          "200 USD",
          "100 USD",
          "500 USD",
          "300 USD"
        ],
        "correct": 0,
        "explanation": "v = 100 * 250 = 25.000 $. m = 2 * 25.000 = 50.000 $. Tổng giá trị G = 25.000 + 25.000 + 50.000 = 100.000 $. Giá trị 1 đơn vị = 100.000 / 500 = 200 USD.",
        "trapAnalysis": "Thao tác nhẩm nhanh: (25.000 + 25.000 + 50.000) / 500 = 200 $."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Vận dụng",
        "question": "Ngày làm việc 8h, m' = 300%. Nhà tư bản kéo dài ngày lao động lên 12h, giá trị sức lao động không đổi. Tỷ suất giá trị thặng dư mới đạt mức bao nhiêu?",
        "options": [
          "500%",
          "600%",
          "400%",
          "300%"
        ],
        "correct": 0,
        "explanation": "Ngày làm việc 8h, m' = 300% => v = 2h, m = 6h. Kéo dài lên 12h, v vẫn là 2h => m mới = 12 - 2 = 10h. m' mới = (10/2) * 100% = 500%.",
        "trapAnalysis": "Thời gian lao động cần thiết v giữ nguyên không đổi."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Hao mòn vô hình của máy móc thiết bị xảy ra do nguyên nhân chủ yếu nào?",
        "options": [
          "Tiến bộ khoa học kỹ thuật làm xuất hiện máy móc hiện đại hơn hoặc rẻ hơn",
          "Máy móc bị rỉ sét do để ngoài trời mưa",
          "Ma sát cơ học trong quá trình vận hành liên tục",
          "Công nhân vận hành sai quy trình kỹ thuật"
        ],
        "correct": 0,
        "explanation": "Hao mòn vô hình là do năng suất lao động trong ngành sản xuất máy móc tăng lên hoặc do sáng chế ra máy móc mới có tính năng vượt trội hơn.",
        "trapAnalysis": "Phân biệt rõ ràng với hao mòn hữu hình."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Cường độ lao động tăng lên thì:",
        "options": [
          "Tổng số giá trị hàng hóa tạo ra trong một đơn vị thời gian tăng lên, giá trị 1 đơn vị không đổi",
          "Giá trị một đơn vị hàng hóa giảm xuống",
          "Tổng số sản phẩm tạo ra giữ nguyên",
          "Năng suất lao động xã hội tăng lên tương ứng"
        ],
        "correct": 0,
        "explanation": "Tăng cường độ lao động thực chất là kéo dài ngày lao động một cách cô đọng, hao phí sức lực nhiều hơn trong cùng thời gian nên tạo ra nhiều giá trị hơn, nhưng giá trị 1 đơn vị sản phẩm không đổi.",
        "trapAnalysis": "Khác với tăng năng suất lao động (giá trị 1 đơn vị giảm)."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Bản chất của tiền công trong chủ nghĩa tư bản là gì?",
        "options": [
          "Giá cả của hàng hóa sức lao động",
          "Giá cả của lao động",
          "Toàn bộ giá trị do người công nhân tạo ra",
          "Phần thưởng lòng hảo tâm của nhà tư bản"
        ],
        "correct": 0,
        "explanation": "Tiền công trong CNTB không phải là giá cả của lao động (lao động không phải là hàng hóa), mà là biểu hiện bằng tiền của giá trị hàng hóa sức lao động, là giá cả của sức lao động.",
        "trapAnalysis": "C.Mác đã vạch trần hình thức biểu hiện giả tạo của tiền công che đậy sự bóc lột."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Địa tô tuyệt đối là loại địa tô thu được trên loại đất nào?",
        "options": [
          "Thu được trên tất cả các loại đất kể cả đất xấu nhất",
          "Chỉ thu được trên đất có độ màu mỡ tốt nhất",
          "Chỉ thu được trên đất gần trung tâm thành phố",
          "Chỉ thu được khi có đầu tư thâm canh tăng năng suất"
        ],
        "correct": 0,
        "explanation": "Địa tô tuyệt đối là phần giá trị thặng dư siêu ngạch dôi ra ngoài giá cả sản xuất chung mà nhà tư bản thuê đất phải trả cho địa chủ trên bất kỳ mảnh đất nào, dù là đất xấu nhất, do độc quyền sở hữu ruộng đất sinh ra.",
        "trapAnalysis": "Phân biệt với Địa tô chênh lệch chỉ có ở đất trung bình và tốt."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Địa tô chênh lệch II được hình thành nhờ:",
        "options": [
          "Đầu tư thâm canh, cải tạo đất và áp dụng tiến bộ kỹ thuật trên cùng một diện tích đất",
          "Độ màu mỡ tự nhiên của đất đai",
          "Vị trí địa lý gần đường giao thông thuận lợi",
          "Độc quyền tư nhân về quyền sở hữu ruộng đất"
        ],
        "correct": 0,
        "explanation": "Địa tô chênh lệch II là địa tô thu được do đầu tư thêm tư bản (thâm canh) trên cùng một thửa ruộng để nâng cao năng suất cây trồng.",
        "trapAnalysis": "Địa tô chênh lệch I dựa trên điều kiện tự nhiên có sẵn."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Tích tụ tư bản và tập trung tư bản có điểm giống nhau cơ bản là:",
        "options": [
          "Đều làm tăng quy mô của tư bản cá biệt",
          "Đều làm tăng ngay quy mô tư bản của toàn xã hội",
          "Đều trực tiếp bóc lột công nhân bằng cách sáp nhập",
          "Đều dựa trên việc chia nhỏ xí nghiệp"
        ],
        "correct": 0,
        "explanation": "Cả tích tụ tư bản và tập trung tư bản đều dẫn đến kết quả là làm tăng quy mô của tư bản cá biệt.",
        "trapAnalysis": "Tích tụ làm tăng cả tư bản xã hội, còn tập trung chỉ phân phối lại các tư bản sẵn có."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Cấu tạo hữu cơ của tư bản (ký hiệu c/v) phản ánh:",
        "options": [
          "Mối quan hệ giữa cấu tạo kỹ thuật và cấu tạo giá trị của tư bản",
          "Số lượng công nhân so với số lượng máy móc thuần túy",
          "Tỷ lệ giữa tư bản cố định và tư bản lưu động",
          "Mức độ hao mòn cơ học của tư bản"
        ],
        "correct": 0,
        "explanation": "Cấu tạo hữu cơ của tư bản là cấu tạo giá trị của tư bản (c/v), do cấu tạo kỹ thuật quyết định và phản ánh sự thay đổi của cấu tạo kỹ thuật của tư bản.",
        "trapAnalysis": "Cấu tạo hữu cơ có xu hướng ngày càng tăng trong tiến trình phát triển của CNTB."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Tỷ suất lợi nhuận (p') phản ánh điều gì đối với nhà tư bản?",
        "options": [
          "Mức độ sinh lời hay hiệu quả sinh lời của toàn bộ tư bản ứng trước",
          "Trình độ bóc lột của tư bản đối với công nhân",
          "Quy mô bóc lột tuyệt đối đối với sức lao động",
          "Khối lượng giá trị thặng dư thu về"
        ],
        "correct": 0,
        "explanation": "Tỷ suất lợi nhuận p' = [m / (c + v)] * 100% nói lên mức doanh lợi hay hiệu quả đầu tư sinh lời của toàn bộ tư bản ứng trước (c + v).",
        "trapAnalysis": "Trình độ bóc lột do m' = (m/v) * 100% phản ánh."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Quy luật lưu thông tiền tệ của C.Mác xác định số lượng tiền cần thiết cho lưu thông tỷ lệ nghịch với:",
        "options": [
          "Tốc độ lưu thông (số vòng quay) của đồng tiền",
          "Tổng giá cả hàng hóa đem ra lưu thông",
          "Tổng số tiền hàng hóa bán chịu",
          "Mức độ uy tín của ngân hàng trung ương"
        ],
        "correct": 0,
        "explanation": "Số lượng tiền cần thiết cho lưu thông tỷ lệ thuận với tổng giá cả hàng hóa và tỷ lệ nghịch với số vòng luân chuyển trung bình của tiền tệ.",
        "trapAnalysis": "Công thức M = P * Q / V."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Thực chất của tích lũy tư bản là gì?",
        "options": [
          "Sự chuyển hóa một phần giá trị thặng dư thành tư bản phụ thêm",
          "Việc tiết kiệm tiền bạc cá nhân của nhà tư bản",
          "Việc vay vốn từ hệ thống ngân hàng thương mại",
          "Việc phát hành cổ phiếu ra thị trường chứng khoán"
        ],
        "correct": 0,
        "explanation": "Tích lũy tư bản là sự tư bản hóa giá trị thặng dư, tức là biến một phần giá trị thặng dư thành tư bản phụ thêm để mở rộng quy mô sản xuất.",
        "trapAnalysis": "Nguồn gốc duy nhất của tích lũy tư bản là giá trị thặng dư."
      },
      {
        "chapter": "Chương 3: Giá trị thặng dư trong nền kinh tế thị trường",
        "level": "Thông hiểu",
        "question": "Giá trị thặng dư siêu ngạch trong từng xí nghiệp cá biệt có tính chất:",
        "options": [
          "Tạm thời đối với từng xí nghiệp, nhưng luôn tồn tại trong toàn xã hội",
          "Vĩnh viễn đối với một xí nghiệp đã đăng ký bản quyền",
          "Chỉ xuất hiện trong nông nghiệp",
          "Không có mối liên hệ nào với giá trị thặng dư tương đối"
        ],
        "correct": 0,
        "explanation": "Giá trị thặng dư siêu ngạch có tính chất tạm thời ở từng xí nghiệp cá biệt (khi các xí nghiệp khác bắt kịp công nghệ thì nó sẽ mất đi), nhưng xét trên phạm vi toàn xã hội nó luôn luôn tồn tại do cuộc chạy đua đổi mới kỹ thuật liên tục.",
        "trapAnalysis": "Động lực cạnh tranh thúc đẩy tiến bộ kỹ thuật."
      },
      {
        "chapter": "Chương 2: Hàng hóa, thị trường và vai trò của các chủ thể",
        "level": "Thông hiểu",
        "question": "Thị trường có những chức năng chủ yếu nào sau đây?",
        "options": [
          "Thực hiện (thừa nhận), thông tin, và điều tiết (kích thích)",
          "Chỉ duy nhất chức năng trưng bày hàng hóa",
          "Chỉ chức năng lưu trữ dự trữ quốc gia",
          "Phân phối độc quyền tư liệu sản xuất"
        ],
        "correct": 0,
        "explanation": "Thị trường thực hiện 3 chức năng chính: (1) Chức năng thực hiện (thừa nhận giá trị sử dụng và giá trị hàng hóa); (2) Chức năng thông tin; (3) Chức năng điều tiết, kích thích hoặc hạn chế sản xuất và tiêu dùng.",
        "trapAnalysis": "Ba chức năng cơ bản của kinh tế thị trường theo giáo trình."
      }
    ]
  }
];

// Hàm sinh đề thi ngẫu nhiên (30 câu từ toàn bộ ngân hàng câu hỏi chuẩn hóa)
function generateRandomExam() {
  const allQuestions = [];
  const seenTexts = new Set();
  
  EXAM_SETS.forEach(set => {
    set.questions.forEach(q => {
      const normalizedText = q.question.trim().toLowerCase();
      if (!seenTexts.has(normalizedText)) {
        seenTexts.add(normalizedText);
        allQuestions.push(JSON.parse(JSON.stringify(q)));
      }
    });
  });

  // Thuật toán Fisher-Yates shuffle
  for (let i = allQuestions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allQuestions[i], allQuestions[j]] = [allQuestions[j], allQuestions[i]];
  }

  // Lấy 30 câu hỏi ngẫu nhiên cho đề trộn
  const selectedQuestions = allQuestions.slice(0, 30);

  return {
    id: "de_random",
    code: "MÃ ĐỀ: 999",
    title: "Đề Khảo Thí Ngẫu Nhiên: Tổng Hợp Ngân Hàng Đề Thi KTCT (30 Câu / 25 Phút)",
    description: "Hệ thống tự động rút ngẫu nhiên 30 câu hỏi từ toàn bộ ngân hàng câu hỏi chuẩn hóa môn Kinh tế chính trị Mác - Lênin của cô Nguyễn Thị Mỹ Hạnh (VKU).",
    duration: 25,
    questions: selectedQuestions
  };
}

// Sổ tay tri thức cốt lõi môn Kinh tế chính trị Mác - Lênin (POS151 - VKU)
const CORE_KNOWLEDGE_SUMMARY = "### 📖 TÓM TẮT CÔNG THỨC & LÝ THUYẾT CỐT LÕI MÔN KINH TẾ CHÍNH TRỊ MÁC - LÊNIN (POS151 - VKU)\n*Giảng viên: Cô Nguyễn Thị Mỹ Hạnh • Đại học CNTT & TT Việt - Hàn*\n\n---\n\n#### 1. Các Công Thức Tính Toán Định Lượng Cần Nhớ\n1. **Giá trị hàng hóa ($G$):**\n   $$G = c + v + m$$\n   Trong đó:\n   - $c$: Chi phí tư bản bất biến (giá trị tư liệu sản xuất hao mòn).\n   - $v$: Chi phí tư bản khả biến (tiền lương trả cho công nhân).\n   - $m$: Giá trị thặng dư do công nhân tạo ra.\n   - $(c + v) = k$: Chi phí sản xuất tư bản chủ nghĩa.\n   - $(v + m)$: Giá trị mới do lao động sống của công nhân tạo ra.\n\n2. **Tỷ suất giá trị thặng dư ($m'$):**\n   $$m' = \\frac{m}{v} \\times 100\\% = \\frac{t'}{t} \\times 100\\%$$\n   - Phản ánh **trình độ (mức độ) bóc lột** của nhà tư bản đối với công nhân làm thuê.\n   - $t'$: Thời gian lao động thặng dư; $t$: Thời gian lao động tất yếu (thiết yếu).\n\n3. **Khối lượng giá trị thặng dư ($M$):**\n   $$M = m' \\times V$$\n   - Phản ánh **quy mô bóc lột** của tư bản đối với giai cấp công nhân.\n   - $V$: Tổng số tư bản khả biến được sử dụng.\n\n4. **Tỷ suất lợi nhuận ($p'$):**\n   $$p' = \\frac{m}{c + v} \\times 100\\% = \\frac{m}{k} \\times 100\\%$$\n   - Phản ánh **mức doanh lợi** hay hiệu quả đầu tư sinh lời của toàn bộ tư bản ứng trước. Luôn có: $p' < m'$.\n\n5. **Cấu tạo hữu cơ của tư bản:**\n   $$\\text{Cấu tạo hữu cơ} = \\frac{c}{v}$$\n   - Là cấu tạo giá trị do cấu tạo kỹ thuật quyết định và phản ánh sự thay đổi của cấu tạo kỹ thuật.\n\n6. **Số lượng tiền cần thiết cho lưu thông (Công thức C.Mác):**\n   $$M = \\frac{P \\cdot Q - G_c + T_h - K}{V}$$\n   - $P \\cdot Q$: Tổng giá cả hàng hóa.\n   - $G_c$: Tổng giá cả hàng hóa bán chịu.\n   - $T_h$: Tổng số tiền thanh toán đến kỳ hạn.\n   - $K$: Số tiền khấu trừ bù trừ cho nhau.\n   - $V$: Số vòng luân chuyển trung bình của đồng tiền.\n\n---\n\n#### 2. Lý Thuyết Nền Tảng Trọng Tâm Hay Vào Đề Thi Cô Hạnh\n* **Tính hai mặt của lao động sản xuất hàng hóa:**\n  - **Lao động cụ thể:** Tạo ra *Giá trị sử dụng* (tính hữu ích) của hàng hóa. Là phạm trù vĩnh viễn.\n  - **Lao động trừu tượng:** Tạo ra *Giá trị* của hàng hóa. Là phạm trù lịch sử riêng có của sản xuất hàng hóa.\n* **Tư bản bất biến ($c$) và Tư bản khả biến ($v$):**\n  - Căn cứ phân chia: Dựa vào **vai trò khác nhau của từng bộ phận tư bản trong việc tạo ra giá trị thặng dư**.\n  - $c$ chỉ là điều kiện; $v$ là nguồn gốc duy nhất sinh ra giá trị thặng dư.\n* **Tư bản cố định và Tư bản lưu động:**\n  - Căn cứ phân chia: Dựa vào **phương thức chu chuyển giá trị** của tư bản vào sản phẩm mới (chuyển dần từng phần hay chuyển toàn bộ một lần).\n* **Hai phương pháp sản xuất giá trị thặng dư:**\n  - **Tuyệt đối:** Kéo dài độ dài ngày lao động hoặc tăng cường độ lao động khi thời gian cần thiết không đổi.\n  - **Tương đối:** Rút ngắn thời gian lao động cần thiết nhờ tăng năng suất lao động xã hội, giữ nguyên độ dài ngày lao động.\n  - **Siêu ngạch:** Biến tướng của tương đối, dựa trên tăng năng suất lao động *cá biệt* tại từng xí nghiệp.\n* **Quy luật giá trị:** Xét trên toàn xã hội trong thời gian dài: $\\sum \\text{Giá cả} = \\sum \\text{Giá trị}$.";
