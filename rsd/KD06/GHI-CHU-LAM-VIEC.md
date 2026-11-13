# Ghi chú làm việc · RSD KD06 v1.6

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết. Theo Q3 (12/11/2026), mọi mục “cần xác nhận”, “suy ra, chờ xác nhận” ở các phần dưới coi là đã chốt (chấp nhận mặc định, Q3), trừ chỗ đã bị quyết định phase coding thay.

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-KD06-Ho-so-yeu-cau-Tour-v1.6.md` (`git mv` từ v1.5). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md`, `docs/adr/`.

**Thay đổi chính**

- **Q1 phân quyền.** 1.4 viết lại thành bảng quyền mặc định theo vai trò (thao tác × vai trò, cột Điều kiện trạng thái), cấu hình ở QT02. Bỏ chế độ chỉ đọc cho Kinh doanh không phụ trách và dòng “Chỉ xem · do … phụ trách”; chỉ đọc chỉ còn cho người không có quyền (mặc định Quản trị) và theo trạng thái. Điều kiện “người phụ trách” ở L2.2, L3.1, L3.4, L3.9, L4.1, L5.1, L5.2, L6.1, L6.2, L6.5, L7.1–L7.3, E5.8, E5.9, R01, R17–R19, R21–R23, R27 đổi thành “có quyền …”. E2.5 bỏ nhánh “vừa được chuyển cho người khác”; E6.10 bỏ nhánh chuyển người phụ trách Booking. AC16, AC60, AC61 viết lại; thêm AC88 (Quản trị chỉ đọc).
- **Mở lại (R22, L7.2).** Theo BOI-CANH (“có thể chọn người phụ trách mới”): mọi người có quyền Mở lại thấy ô Người phụ trách, điền sẵn người hiện tại nếu còn hoạt động. Trước đây chỉ Quản trị có ô này.
- **C3.** Bỏ lối vào từ ghi nhận chăm sóc “Có nhu cầu Tour mới” (1.2, L1.3) và giá trị điền sẵn Mong muốn từ phản hồi của khách (5.2). Giữ SYS10.09, SYS10.10 ở truy vết vì vẫn là Tạo yêu cầu Tour từ KD04.
- **Q2.** “Thông báo nội bộ” → thông báo in-app (1.2, R23); thông báo ghi cùng giao dịch (Q5).
- **Q3.** Bỏ nhãn “suy ra, chờ xác nhận” ở 2.5, L3.1, R10, R18, R25, R27, AC27. Ngôn ngữ của dịch vụ HDV: chấp nhận mặc định là không thêm trường vào DH03, nên cảnh báo Khác ngôn ngữ phục vụ không hiện.
- **Q7, Q8, Q6.** R03 cho phép thủng số, YYMM theo giờ Asia/Ho_Chi_Minh. E2.1, E3.8, R24, AC15: chỉ Tải lại, bỏ “Lưu bản của tôi đè lên”. Hết hạn của link tính lúc đọc (2.5, R18, 5.1).
- **Tính giá (Q9–Q15).** 1.3, R13: bộ tính giá dùng chung KD02, DH04, KD06, cả ba tính phụ thu. R14: tỷ giá theo ngày bấm Tính giá, chụp vào phiên bản; mọi số tiền làm tròn half-up theo đơn vị nhỏ nhất, bội số chỉ cho giá bán mỗi khách. R13: trẻ em theo nhóm tuổi của hợp đồng từng dòng, trẻ nhỏ nhất miễn trước, giá % trên giá người lớn cùng dòng; phụ thu Thay thế lấy cao nhất rồi cộng Cộng dồn; phòng đơn = giá phòng + phụ thu đã khai, phần vượt nửa phòng đôi chỉ hiển thị. R04: người lớn lẻ tự xếp phòng đơn. R15: phòng 3 người, giường phụ dùng Nhập tay. Thêm AC89–AC91.
- **Proposal (Q21, Q22).** Bỏ “mẫu proposal riêng của công ty, hệ thống dựng sẵn; hình chỉ minh họa”: proposal dùng chính W33, W36, W37; PDF dựng từ trang HTML qua hàng đợi (L5.1, R18, R25, 5.1, 5.3, AC72). Mục mặc định bao gồm, không bao gồm ở tệp cấu hình hoặc dữ liệu khởi tạo (C2).
- **A1, Q5.** AI qua gateway cấu hình ở tệp, không còn “Quản trị cấu hình”; lời gọi đi qua hàng đợi (L3.5, R09, R25, 5.3). Các nút “Thử lại” còn lại (E1.5, E2.2, E3.1, E4.10, E5.4, E6.3, AC30, AC62) là gửi lại một yêu cầu bị lỗi mạng, máy chủ hoặc AI, không phải trạng thái “Tạo lỗi” của tác động chéo; giữ nguyên.
- **U2, K6.** L3.6 Tạo lại hành trình không còn hộp thoại xác nhận (hành trình chỉ thay khi lưu), thay bằng thông báo kèm Hoàn tác; AC31 sửa theo. Thu hồi link vẫn hỏi xác nhận vì không hoàn tác được và tác động ra ngoài. “Cho phép sử dụng”, “ngừng sử dụng” → Đang dùng, Ngừng dùng.

**Tự đơn giản hóa giao diện (U6):** không có thêm ngoài việc bỏ hộp thoại W22 theo U2.

**Hình chưa cập nhật** (đã ghi dòng “Hình chưa cập nhật” dưới hình): mọi hình còn mục Chăm sóc khách hàng ở thanh bên và ví dụ Müller 2 phòng đơn (ghi một lần ở đầu RSD); W10 (nút ghi đè), W11 (dòng Chỉ xem, người xem là Kinh doanh), W14, W24 (chữ cho phép sử dụng, ngừng sử dụng), W15 (nhãn Khác ngôn ngữ phục vụ), W22 (hộp thoại xác nhận), W28 (số liệu trước Q13', Q14), W32 (ô Mẫu proposal), W45 (chưa có ô Người phụ trách), W46 (câu “Người nhận sẽ được sửa…”). Chú thích W14, W32, W33 trong `wireframes-src/captions.js` còn chữ cũ (cho phép sử dụng, mẫu proposal của công ty, QT04.1); không sửa theo yêu cầu.

**Còn mở, đã báo người dùng:** số liệu ví dụ v3 của Müller (R14, AC36, AC65, AC69, AC73, W28) tính trước Q13', Q14, cần tính lại khi viết test bộ tính giá; hướng làm tròn theo bội số (giữ “làm tròn lên”); người phụ trách yêu cầu khi Kinh doanh khác người phụ trách tạo Booking; cách dùng Nhập tay cho phòng 3 người, giường phụ khi khoản đã có giá; trẻ “thêm giường” có tính là giường phụ không; thời điểm dựng PDF.

## Cập nhật v1.2 (12/11/2026) · Rà soát mâu thuẫn giữa các RSD

Nguồn: 6 quyết định người dùng chốt sau rà soát 16 RSD, đã ghi ở `docs/rsd/BOI-CANH-DU-AN.md`. Tệp mới `RSD-KD06-Ho-so-yeu-cau-Tour-v1.2.md`; tệp v1.1 đã xóa.

| Mã | Quyết định | Sửa ở KD06 |
|---|---|---|
| Q1 (12/11) | Hủy Booking thì yêu cầu tự Đã hủy; khách đặt lại thì Mở lại yêu cầu kèm lý do → Đang xử lý → báo giá, tạo Booking mới. Đã có Booking chỉ khi có Booking Hiệu lực | R02 bỏ “chỉ có Booking đã hủy là Đang xử lý”; R20, R21 thêm nhánh tự hủy (lý do hệ thống “Booking đã hủy”, thu hồi link); R19, R22 tạo Booking mới sau khi mở lại; 2.3, 2.4, L6.4 (viết lại), W47 (vẽ lại: Đã hủy, nút Mở lại), W39 (chữ), AC56, AC76 |
| Q2 (12/11) | Người phụ trách yêu cầu luôn là người phụ trách Booking; chế độ điều chỉnh: sửa hành trình → giá tự tính lại → phiên bản mới Chưa có kết quả, không ghi kết quả; Chuyển sang Điều hành ở KD08 tự ghi Chốt cho phiên bản mới nhất, phiên bản cũ Đã thay thế; không bao giờ hai Chốt | 1.2, 1.3, 1.4, R01, R20, R23 (chuyển theo Booking, không chuyển riêng); R17 thêm Đã thay thế; L6.5, R27, E6.9–E6.12 mới; W42 (chữ dải), W50, W51 mới; AC77–AC81. Không có nhãn “Chốt · chưa chuyển Điều hành” (KD06 chưa từng có) |
| Q4 (12/11) | Quản trị mở lại yêu cầu Đã hủy kèm đổi người phụ trách (không còn giới hạn “khi người phụ trách ngừng hoạt động”) | 1.4, 2.1, L7.2, R22, E7.4, AC60 |
| Phụ (12/11) | DH03 không có ngôn ngữ dịch vụ HDV: bỏ dựa vào trường này, ghi chờ xác nhận; không thêm trường vào DH03 | 2.5, L3.1, R10, R25, AC27. Hình W15, W18 vẫn có nhãn Khác ngôn ngữ phục vụ, chỉ hiện khi DH03 có trường (chưa vẽ lại) |

Sửa không cần hỏi (đồng bộ với RSD khác): R13 tuổi trẻ em tính tại ngày sử dụng đầu tiên của dịch vụ (DH03 R09), dòng giá chọn theo số khách người lớn (DH03 R14, DH04 R04, KD01-KD02 R07), AC82; Tiêu đề ngày không bắt buộc (5.2, E5.1); bỏ Tạo yêu cầu ở KD04.3 (1.2); L1.3 dẫn KD03-KD04 L8.2; L4.2 dẫn L4.1 bước 3–5; “tên chương trình” trên proposal → “tên hành trình” (L5.1, R18, 5.3); 5.1 thêm Thời điểm tạo; thông báo “Bạn được giao yêu cầu” mở KD06 ở tab đích (1.2, R23).

**Thiết kế người viết tự quyết ở v1.2, cần xác nhận (chấp nhận mặc định, Q3; điểm 4 đã thay ở v1.4):**

1. **KD06 mở bình thường khi có Booking Hiệu lực vẫn chỉ xem**; chỉ vào chế độ điều chỉnh từ nút Điều chỉnh chương trình ở KD08 (một chỗ bấm). Phần đầu ở chế độ điều chỉnh có nút chính Về Booking BK-…, không có Hủy yêu cầu.
2. **“Giá tự tính lại”**: chân Hành trình ở chế độ điều chỉnh chỉ có Lưu và tính giá; hệ thống lưu, tự tính với điều kiện của phiên bản mới nhất (số khách, phòng, ngày theo yêu cầu nếu đã sửa) rồi mở bảng trượt kết quả; người dùng vẫn bấm Lưu phiên bản (để xem giá và xử lý khoản thiếu giá trước khi lưu). Loại tiền khóa theo Booking.
3. **Hành trình khi mở chế độ điều chỉnh**: chưa có phiên bản nào mới hơn phiên bản của Booking thì nạp bản chụp của phiên bản của Booking; đã có thì giữ hành trình đang lưu.
4. **Ở chế độ điều chỉnh không publish proposal mới** (giữ quy tắc cũ “Đã có Booking không publish mới”); Kinh doanh tự gửi thay đổi cho khách. Nếu cần gửi khách proposal của phiên bản điều chỉnh thì phải đổi R18, R27.
5. **Sau khi mở lại yêu cầu tự hủy**, phiên bản Chốt của Booking đã hủy vẫn giữ Chốt; Tạo Booking mới dùng được phiên bản đó nếu khách đặt lại đúng phương án, thường thì tính giá phiên bản mới rồi đổi Chốt (L6.3).
6. **Lý do hủy “Booking đã hủy”** là giá trị hệ thống của danh mục QT05, chỉ hệ thống ghi; ghi chú là mã và lý do hủy Booking.
7. **Tên hành trình** (tiếng Việt, tiếng Anh) là trường mới của hành trình, không bắt buộc, điền sẵn tên Tour mẫu hoặc tên AI đề xuất; trống thì proposal ghi loại Tour và số ngày. Thêm để proposal có “tên hành trình”.
8. **Quản trị mở lại** chọn được chính người phụ trách hiện tại nếu còn hoạt động.

**Ảnh:** thêm W50, W51; dựng lại W39, W42, W47 (`node build.js W39 W42 W47 W50 W51`, Edge headless). Đã xem trực quan W42, W47, W50, W51. `indent-images.js`, `sync-md.js`, `check-rsd.js --final`: 51 tham chiếu ảnh, 51 mã W, exit 0, không cảnh báo.

**Thay đổi cần làm ở màn khác (v1.2):** RSD KD05 R02, 2.4 theo Q1 (agent khác đang sửa); RSD KD08 R09–R11 v1.2 phải khớp R17, R20, R21, R23, R27 của KD06 (KD08 ghi dấu hủy yêu cầu, đổi người phụ trách yêu cầu theo Booking, ghi Chốt và Đã thay thế khi Chuyển sang Điều hành); QT05 thêm giá trị hệ thống “Booking đã hủy” cho Lý do hủy yêu cầu Tour.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD06 · Hồ sơ yêu cầu Tour gồm KD06.1, KD06.2, KD06.3; chưa có RSD nên viết mới ở `docs/rsd/KD06/`; bàn giao MD + PNG trong ZIP theo quy ước dự án | Toàn bộ |
| Q1 | Điều kiện hủy và mở lại | Chặn hủy khi có Booking Hiệu lực (Booking đã hủy không chặn); người phụ trách mở lại yêu cầu đã hủy kèm lý do, giữ dữ liệu cũ | R02, R21, R22, L7.1, L7.2, W42–W45, AC57–AC60 |
| Q2 | Nguồn Markup, tỷ giá | Markup % mặc định theo loại Tour (QT05); tỷ giá từ bảng tỷ giá hệ thống theo ngày tính giá; cả hai sửa được cho từng phiên bản, lưu bản chụp | R14, W27, W28, AC35, AC36 |
| Q3 | Gửi báo giá | Proposal do hệ thống tự tạo, publish thành link; hỗ trợ tiếng Anh, tiếng Việt; tải PDF ngay trên proposal. Không gửi email từ hệ thống | R18, L5.1–L5.3, W32–W37 |
| Q4 | Số Booking, số phiên bản Chốt | Tối đa 1 Booking Hiệu lực và 1 phiên bản Chốt mỗi yêu cầu; Booking bị hủy thì tạo được Booking mới [v1.2, Q1 12/11/2026: hủy Booking làm yêu cầu Đã hủy; Mở lại yêu cầu rồi mới tạo Booking mới] | R17, R19, R20, L6.2–L6.4, W39–W42, W47 |
| Q5 | Link khi có phiên bản mới, hạn | Mỗi phiên bản publish một link riêng, nội dung cố định; bản mới hơn thì link cũ hiện dải báo; hạn mặc định 30 ngày, sửa được; thu hồi được; hủy yêu cầu thì link ngừng | R18, W34, W36, W37 |
| Q7 | Bố cục W13 (phản hồi 12/11/2026) | Tạo bằng AI là điểm nổi bật: thẻ đặt bên trái, nút xanh; Từ Tour mẫu, Thủ công dồn sang phải. Nhãn “Nhanh nhất” và viền xanh của thẻ là người viết thêm | W13, L3.1, 1.1 |
| Q8 | Ngân sách của yêu cầu (phản hồi 12/11/2026) | Ngân sách rất quan trọng, phải có thông tin. Người viết thiết kế: trường riêng ở KD06.1 (từ – đến, loại tiền, Mỗi khách hoặc Cả đoàn), hiện ở phần đầu, gửi cho AI, so với giá bán bình quân ở mỗi lần tính giá và mỗi phiên bản; vượt chỉ cảnh báo, không chặn; không hiện trên proposal | R26, R04, R09, 2.1, L1.1, L4.1, W05–W10, W19, W26, W28, W29, W31, W38, AC63–AC68 |
| Q9 | Markup cho từng hạng mục (phản hồi 12/11/2026, làm rõ cùng ngày) | Hạng mục là nhóm dịch vụ: Lưu trú, Di chuyển, HDV, Tham quan… Hai cấp: Markup theo hạng mục (W27, mặc định QT05) → Markup chung theo loại Tour. Không đặt Markup cho từng khoản. Người viết thêm hạng mục Vé máy bay, Ăn uống, Khác. Ví dụ v3: Vé máy bay 5 %, Hướng dẫn viên 20 % → 50.750 EUR, Markup bình quân 14,3 % (số cũ; tính lại 13/11/2026: 51.710 EUR, 14,3 %, xem mục Tính lại ví dụ giá) | R14, 5.1, 5.2, R25, W27, W28, AC36, AC69–AC71 |
| Q10 | Mẫu proposal (phản hồi 12/11/2026) | Công ty đã có mẫu proposal riêng: proposal trộn dữ liệu vào mẫu của công ty khai ở QT04.1; KD06 chỉ định nghĩa trường dữ liệu (R18); W33 chỉ minh họa | R18, 5.3, R25, W32, W33, AC72 |
| Q11 | Bảng tính giá theo dịch vụ (phản hồi 12/11/2026) | Bảng tính giá có thêm cách xem Theo dịch vụ, gom theo hạng mục, mỗi dịch vụ một dòng cho cả hành trình; giữ cách xem Theo ngày. Số liệu theo hạng mục của v3 người viết đặt cho khớp tổng 44.317,40 → 50.659,00 (số cũ; nay tính bằng script, xem mục Tính lại ví dụ giá) | R14, L4.1 bước 4, W28, W49, AC73–AC75 |
| Q6 | Khách thao tác trên proposal | Chỉ xem và tải PDF; hệ thống ghi số lần mở và lần mở gần nhất; kết quả do Kinh doanh ghi | R18, L6.1, W33, W34 |

## Thiết kế do người viết tự quyết, cần xác nhận (chấp nhận mặc định, Q3)

1. **[Đã thay ở v1.2 theo Q1 12/11/2026: hủy Booking thì yêu cầu Đã hủy] Trạng thái khi Booking bị hủy (R02).** Đã có Booking chỉ tính Booking Hiệu lực; yêu cầu chỉ có Booking đã hủy là Đang xử lý kèm dải báo. Suy từ Q1 và Q4, nhưng **khác RSD KD05 R02 và KD03-KD04 R08** (Booking đã hủy giữ nhóm Đã có Booking). Cần xác nhận rồi sửa hai RSD đó.
2. **Booking có khi lưu ở KD08**, không phải khi bấm Tạo Booking ở KD06 (giống mẫu KD04 → KD06). KD08 kiểm tra lại điều kiện khi lưu.
3. **[Đã thay ở v1.2 theo Q2: chế độ điều chỉnh, R27] Sau khi có Booking Hiệu lực, KD06 chỉ đọc**; thay đổi chương trình làm ở KD08 (theo RSD DH08). Vẫn gia hạn, thu hồi link được.
4. **[Đã thay ở v1.2 theo Q4: Quản trị luôn mở lại được, kèm người phụ trách mới] Mở lại khi người phụ trách đã ngừng hoạt động:** Quản trị hệ thống mở lại và chọn người phụ trách mới trong cùng hộp thoại.
5. **Nội dung tiếng Anh** là trường riêng của từng ngày trong hành trình, không bắt buộc; cần đủ khi publish English; có Dịch nháp bằng AI, nhãn cần kiểm tra; không làm hành trình khác báo giá. Proposal English lấy tên tiếng Anh của thẻ bao gồm, không bao gồm từ QT05.
6. **Ngôn ngữ proposal mặc định** English khi ngôn ngữ phục vụ khác Tiếng Việt. Mỗi phiên bản, mỗi ngôn ngữ tối đa một link Đang mở.
7. **Thu hồi là vĩnh viễn**, publish lại tạo link mới; **gia hạn** giữ cùng link. Mở lại yêu cầu không mở lại link.
8. **Lượt mở** gồm mở trang và tải PDF; lượt của người đã đăng nhập TOPAS không tính; không lưu IP đầy đủ.
9. **Công thức phân bổ giá vốn (R13)**: theo khách / theo phòng (phòng đôi chia 2, phụ thu phòng đơn là phần vượt nửa phòng đôi) / theo đoàn chia đều cho khách tính phí. **Làm tròn lên** giá bán mỗi đối tượng theo bội số loại tiền (EUR, USD 10; JPY 1.000; VND 10.000). **Quy đổi qua VND.**
10. **Giá nhập tay** cho khoản thiếu, bắt buộc ghi chú nguồn giá; không ghi ngược DH03. Giá 0 trong bảng giá là hợp lệ.
11. **Việc cần xử lý trước khi tính giá** (số trên tab Hành trình): ngày chưa có nội dung, dịch vụ hoặc NCC ngừng sử dụng, dịch vụ chưa gán NCC. Lưu hành trình vẫn được. HDV khác ngôn ngữ phục vụ chỉ cảnh báo.
12. **Chỉ báo “hành trình khác báo giá mới nhất”** so nội dung với bản chụp của phiên bản mới nhất; nội dung tiếng Anh không tính.
13. **Đổi khách** chỉ khi chưa có phiên bản báo giá. **Ngày đi** phải từ hôm nay khi tạo mới. Thời gian có kiểu **Tháng dự kiến** (tháng + số ngày) cho yêu cầu chưa chốt ngày (khớp giả định của RSD KD05).
14. **Mã yêu cầu `YC-YYMM-NNNN`**, NNNN tăng trong tháng (chốt quy tắc RSD KD05 đã dùng).
15. **Thêm dịch vụ vào nhiều ngày** cùng lúc; **Lưu và lập báo giá**, **Lưu và tính giá**, **Publish và sao chép link** gộp bước.
16. **AI**: không gửi tên, email, điện thoại của khách và giá NCC; thời gian chờ 60 giây; đề xuất hiện trên lưới chưa lưu; dịch vụ chỉ gán NCC khi khớp danh mục đang dùng.
17. **Lý do hủy** là danh mục QT05 mới, có giá trị Khác (ghi chú bắt buộc).
18. **Kết quả báo giá lưu ngay** khi chọn (ô chọn tại chỗ); đổi phiên bản Chốt làm trong một hộp thoại (W39).
19. **Chuyển người phụ trách một yêu cầu** có thêm ở ⋯ của KD06 (RSD KD05 để KD06 quyết định).
20. **Tạo khách nhanh** lưu khách ngay, độc lập với việc lưu yêu cầu.

## Thay đổi cần làm ở màn khác

- **Markup (Q9).** QT05: danh mục hạng mục dịch vụ (Lưu trú, Di chuyển, Vé máy bay, Hướng dẫn viên, Tham quan, Ăn uống, Khác), gán mỗi loại dịch vụ vào một hạng mục, Markup mặc định theo hạng mục (không bắt buộc). Cần xác nhận danh sách hạng mục và việc tách Vé máy bay khỏi Di chuyển. Thuật ngữ: “hạng mục dịch vụ” ở DH08 đang mang nghĩa một dịch vụ cần đặt; đề xuất gọi nhóm này là “hạng mục Markup” hoặc chấp nhận hai nghĩa theo ngữ cảnh.
- [Thay theo Q22 phase coding: proposal dùng chính W33, W36, W37, không cần mẫu của công ty] **Mẫu proposal (Q10).** Cần bản mẫu proposal hiện có của công ty để đối chiếu danh sách trường dữ liệu ở R18 (thiếu trường nào thì bổ sung). QT04.1 phải nhận được mẫu có sẵn (bản web và PDF, mỗi ngôn ngữ một bản).

- **Ngân sách (Q8).** Cần xác nhận các điểm tự quyết: trường không bắt buộc; so theo bình quân mỗi khách gồm cả trẻ em; vượt ngân sách chỉ cảnh báo. RSD KD05: cân nhắc thêm cột hoặc bộ lọc Ngân sách và nhãn vượt ngân sách của báo giá mới nhất. RSD KD03-KD04 W27 (mở KD06 từ hồ sơ khách): form KD06.1 nay có ô Ngân sách. QT08: có thể thống kê tỷ lệ chốt theo trong và vượt ngân sách.

- **RSD KD05.** [Thay bằng Q1 12/11/2026: hủy Booking thì yêu cầu Đã hủy; KD05 v1.3 sửa] R02 và 2.4: Booking đã hủy không giữ nhóm Đã có Booking (nếu điểm 1 được xác nhận). W09: hành trình của YC-2611-0019 ghi TM-014 trong khi KD01-KD02 chỉ có TM-001–TM-012; RSD này dùng TM-005 Xuyên Việt 14N13Đ, nên sửa W09 thành TM-005.
- **RSD KD03-KD04.** R08: như trên; E7.3 “một yêu cầu có nhiều Booking”: nay một yêu cầu có tối đa 1 Booking Hiệu lực, có thể có thêm Booking đã hủy.
- **RSD KD08.** Tạo mới nhận ID phiên bản Chốt; kế thừa chỉ đọc; kiểm tra lại R19 khi lưu; liên kết phiên bản nguồn mở KD06.3; [thay ở v1.2: hủy Booking làm yêu cầu Đã hủy, xem mục Cập nhật v1.2] hủy Booking làm yêu cầu về Đang xử lý.
- **QT05.** Thêm Markup mặc định theo loại Tour; danh mục Lý do hủy yêu cầu Tour; tên tiếng Anh của thẻ bao gồm, không bao gồm.
- [Thay ở v1.3: không cấu hình ở QT04.1] Mẫu proposal English và Tiếng Việt (bố cục trang web và PDF, mục mặc định bao gồm, không bao gồm) do hệ thống dựng sẵn theo mẫu của công ty (người dùng chốt 12/11/2026 khi viết RSD QT04). Nhóm phát triển cần nhận bản mẫu proposal của công ty để dựng.
- **Cấu hình chung.** Bảng tỷ giá theo ngày (Kế toán cập nhật); bội số làm tròn giá bán theo loại tiền; loại tiền báo giá mặc định; hạn mặc định proposal; dịch vụ AI và thời gian chờ.
- **DH03.** [Đã xử lý ở v1.2: không thêm vào DH03; KD06 ghi chờ xác nhận, không cảnh báo khi chưa có trường] Trường ngôn ngữ của dịch vụ Hướng dẫn viên (để cảnh báo lệch ngôn ngữ).
- **QT02, QT03.** Quyền publish, thu hồi link; mở lại yêu cầu (Quản trị trong trường hợp R22); nhật ký publish, thu hồi, gọi AI.
- **QT08.** Đếm yêu cầu mở lại; lý do hủy theo danh mục mới.
- **Danh sách màn.** KD06, KD06.3: bỏ “chờ đặc tả” của điều kiện hủy, mở lại, nguồn Markup, tỷ giá, danh sách kết quả, số Booking; đổi “xuất PDF hoặc tạo Link” thành proposal publish link, PDF tải trên proposal.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (máy chưa có Python nên chưa chạy `check-rsd.py`): 96 tham chiếu ảnh, 48 mã W, không cảnh báo. Đã sửa 2 cảnh báo của lần chạy đầu (bước 4 của L3.1 thiếu W; mục 3.8 không phải luồng nên chuyển thành đoạn trong 3.7).
- `sync-md.js` đã đồng bộ tên hình với `captions.js` (v1.0: ở mục Wireframe riêng; từ v1.1: ngay dưới bước luồng mục 3).
- v1.1 (12/11/2026, chuyển sang khung 6 mục): `indent-images.js`, `sync-md.js`, `check-rsd.js --final` exit 0 (48 tham chiếu ảnh, 48 mã W, mỗi ảnh nhúng một lần); tập ảnh và tập mã L, E, R, AC, W giống hệt v1.0.
- Đã xem trực quan: W03, W05, W10, W11, W13, W14, W15, W16, W20, W25, W27, W28, W29, W32, W33, W34, W38, W40, W42, W44, W47, W48. Đã sửa: ô Mong muốn tách chữ khi có đoạn tô vàng; bỏ ô Người phụ trách lặp với phần đầu; nút tính giá khóa khi còn việc cần xử lý (W15, W17, W20, W24); bỏ Tính giá ở W42; thông báo che nút ở W38; bỏ chỉ báo lặp với dải ở W47; chip Thiếu giá ở W29.
- Chưa xem từng ảnh: W01, W02, W04, W06–W09, W12, W17–W19, W21–W24, W26, W30, W31, W35–W37, W39, W41, W43, W45, W46 (cùng khung với ảnh đã xem).
- Trạng thái chỉ mô tả bằng chữ, không có ảnh riêng: bảng trượt Lịch sử thay đổi (R24), hộp thoại xác nhận Thu hồi link, ô Gia hạn tại chỗ, Đổi dịch vụ (dùng khung W18), danh mục trống (E1.7), không có quyền (E2.6, E1.10), không tìm thấy yêu cầu (E2.7).
- Số liệu đã đối chiếu (số Müller v3 ở dòng này là số cũ, đã thay ở mục Tính lại ví dụ giá 13/11/2026): v3 = 2.040 × 23
 + 1.630 × 2 + 410 × 2 = 51.000 EUR; giá vốn 1.772,80 × 23 + 1.415,30 × 2 + 356,20 × 2 = 44.317,40 = 40.360,15 (1.107.886.000 ₫ ÷ 27.450) + 3.957,25 (4.280 × 25.380 ÷ 27.450); lãi gộp 6.682,60 (13,1 %). v2 = 2.110 × 23 + 1.690 × 2 + 420 × 2 = 52.750; v1 = 54.100 (khớp KD05). Ngày: 10/03/2027 Thứ Tư, 15/03/2027 Thứ Hai. TM-008: 8 ngày 21 dịch vụ (khớp KD01-KD02); ghép 2 ngày TM-010 (6 dịch vụ) → 27. Bianchi 14 NL, 0 phòng đơn → 7 phòng; Müller 23 NL, 2 phòng đơn → 13 phòng. Lê Thu Hà 9, Phạm Thanh Tùng 5, Vũ Đức Minh 0 yêu cầu đang xử lý (khớp KD05).
- `docs/rsd/BOI-CANH-DU-AN.md` đã thêm thuật ngữ và nguyên tắc; bản cũ sao lưu ở `BOI-CANH-DU-AN.md.bak-20261111-kd06`.

## Cập nhật v1.3 (12/11/2026)

- Người dùng chốt khi viết RSD QT04: công ty có mẫu proposal riêng, không cần cấu hình. Đổi tên tệp thành `RSD-KD06-Ho-so-yeu-cau-Tour-v1.3.md`, xóa v1.2 theo quy ước dự án.
- Sửa 1.3 (bỏ mẫu proposal QT04.1), L5.1 bước 2 và bước 4, R18 (mẫu dựng sẵn, mục mặc định cố định trong mẫu, trường bổ sung ở RSD này), bảng cấu hình phụ thuộc. Dựng lại W32: ô Mẫu proposal chỉ đọc, nhãn Theo ngôn ngữ.
- Các RSD khác còn dẫn “KD06 v1.2” (DH01, DH02, KD05, KD07, KD08 và ghi chú): nội dung được dẫn không đổi, cập nhật số phiên bản khi sửa các RSD đó.

## Cập nhật v1.4 (12/11/2026, rà soát lần hai)

- Đổi tên tệp thành `RSD-KD06-Ho-so-yeu-cau-Tour-v1.4.md`, xóa v1.3 theo quy ước dự án.
- **Publish proposal ở chế độ điều chỉnh: cho phép** (người dùng chốt). Lý do: Kinh doanh cần gửi phương án điều chỉnh cho khách xem trước khi Chuyển sang Điều hành; trước đây R27, R18, E5.8, W51, AC78 cấm publish nên Kinh doanh phải tự gửi ngoài hệ thống. Chỉ publish được phiên bản điều chỉnh của Booking; vẫn không ghi kết quả, không tạo Booking. Link của phiên bản của Booking giữ nguyên, gia hạn, thu hồi như R18. Cách ghi “Phương án điều chỉnh cho Booking BK-…” / “Revised proposal for booking BK-…” trên proposal là suy ra, chờ xác nhận. Link của phiên bản điều chỉnh không được chuyển giữ tới khi hết hạn hoặc thu hồi: suy ra, chờ xác nhận.
- **Phiên bản được Chuyển sang Điều hành = phiên bản điều chỉnh mới nhất của chính Booking.** Lý do: E6.7, R19 cho tạo Booking từ phiên bản Chốt cũ hơn (khách chọn lại v2 khi đã có v3 Cần điều chỉnh); quy tắc cũ “phiên bản mới nhất của yêu cầu” làm nút Chuyển sang Điều hành bấm được ngay và ghi Chốt cho v3 khách đã từ chối. Định nghĩa phiên bản điều chỉnh của Booking đặt ở 2.5 và R27, dùng chung với KD08 R09.
- **Hành trình khi vào lại chế độ điều chỉnh:** giữ cách của KD06 (R27, E6.12): chưa có phiên bản điều chỉnh thì nạp từ bản chụp phiên bản của Booking; đã có thì tiếp tục từ hành trình đang lưu, không hỏi. KD08 v1.4 sửa theo (trước đó KD08 E1.8 ghi “KD06 hỏi”). Điều kiện tính điền sẵn từ phiên bản điều chỉnh mới nhất, chưa có thì từ phiên bản của Booking (trước là “phiên bản mới nhất”, có thể là phiên bản khách đã từ chối): suy ra, chờ xác nhận.
- **Tỷ giá:** E4.2, R14, R15, R25, 5.2 theo “tỷ giá có hiệu lực” đã chốt ở BOI-CANH và RSD QT05 R13: ngày chưa nhập dùng ngày gần nhất trước đó, ghi ngày lấy tỷ giá; chỉ “chưa có tỷ giá” khi không có ngày nào trước đó. Chủ sở hữu bảng tỷ giá là QT05 (Kế toán nhập), thay “Kế toán, cấu hình chung”. Thêm AC87.
- **Liên kết từ KD08:** E2.6, R01, 1.2 ghi rõ liên kết sang KD06 chỉ hiện với Kinh doanh phụ trách Booking và Quản trị hệ thống (khớp KD08 v1.4 1.4, R01).
- Dựng lại W51 (bảng trượt v4: Chưa publish, nút Publish proposal) và W50 (dải tím). `check-rsd.js --final`: 51 tham chiếu ảnh, 51 mã W, exit 0. Tên hình không đổi nên không chạy `sync-md.js`.
- **Còn ngoài phạm vi:** các RSD khác còn dẫn “KD06 v1.2/v1.3” (DH01, DH02, KD05, KD07, QT…) cần cập nhật số phiên bản khi sửa; RSD KD05 nếu có mô tả “Chuyển sang Điều hành ghi Chốt cho phiên bản mới nhất” cần đổi thành phiên bản điều chỉnh mới nhất của Booking; QT04 nếu nhắc mẫu proposal cần biết có thêm trường mã Booking được điều chỉnh (R18).

## Cập nhật v1.5 (12/11/2026, rà soát lần ba)

- Đổi tên tệp thành `RSD-KD06-Ho-so-yeu-cau-Tour-v1.5.md`, không còn md v1.4.
- **Thứ tự dòng giá (quyết định E).** R13 đã chọn dòng giá theo hạng phòng của điều kiện tính, không dùng “Thứ tự nhỏ nhất” bất kể hạng phòng, nên không mâu thuẫn. Chỉ thêm câu: trong cùng hạng phòng nhiều dòng chính khớp thì lấy Thứ tự nhỏ nhất, không so Thứ tự giữa các hạng phòng (khớp RSD DH03 v1.4 R14). Còn mở: hạng phòng không bắt buộc ở KD06.1, KD06.3; khi điều kiện tính không có hạng phòng mà dịch vụ có dòng giá nhiều hạng phòng thì chưa có quy tắc chọn, cần người dùng chốt (không tự đặt). **Đã chốt (12/11/2026):** lấy hạng phòng có giá thấp nhất (như DH04), khoản ghi cảnh báo “Chưa chọn hạng phòng · tính theo hạng giá thấp nhất”; thêm vào R13.
- **Loại tiền giá tham chiếu (L3.4 W18).** “Loại tiền gốc của dòng giá” theo RSD DH03 R14, DH04 R07 (loại tiền gắn với dòng giá, không phải hợp đồng). Sửa cả dòng chữ trên W18, dựng lại W18.
- **Truy vết nguồn 1.5.** Hủy yêu cầu “khi không có Booking Hiệu lực” cho khớp R21 (yêu cầu Mở lại có thể có Booking đã hủy).
- **R25 Cấu hình phụ thuộc.** Cột Chủ sở hữu theo RSD QT05 mục 1.2, 1.5: Kinh doanh sửa Loại Tour và Lý do hủy yêu cầu Tour (nhóm Khách & bán hàng); Điều hành sửa Hạng phòng, Thẻ bao gồm/không bao gồm (kể cả tên tiếng Anh), gán loại dịch vụ vào hạng mục (thuộc tính của Loại dịch vụ); chỉ Quản trị sửa Hạng mục dịch vụ & Markup, Markup mặc định của loại Tour, bội số làm tròn, tham số chung (loại tiền báo giá mặc định, hạn proposal).
- **Ngôn ngữ dịch vụ HDV (R10, R25).** RSD DH03 v1.4 có Ngôn ngữ giao dịch của NCC (R22, dùng cho email đặt dịch vụ), không phải ngôn ngữ của dịch vụ HDV; giữ “chờ xác nhận”, sửa câu dẫn.
- **W42.** Chú thích cũ “Nút Mở Booking thay cho Hủy yêu cầu” sai với hình và E7.1, AC54: Hủy yêu cầu vẫn hiện, khóa kèm lý do “đang có Booking hiệu lực”. Sửa `captions.js`, dựng lại W42, chạy `sync-md.js`.
- Cập nhật phiên bản RSD nguồn: KD01-KD02 v1.2, KD03-KD04 v1.4, KD05 v1.4, DH03 v1.4, DH04 v1.3, KD08 v1.5, DH08 v2.8, QT05 v1.2, QT04 v1.3.
- `check-rsd.js --final`: 51 tham chiếu ảnh, 51 mã W, không lỗi.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** E1.7: câu báo danh mục trống hướng thêm ở QT05 theo phòng sở hữu (R25), bỏ “liên hệ Quản trị”.

## Dịch vụ đi kèm 12/11/2026

Sửa tại chỗ `RSD-KD06-Ho-so-yeu-cau-Tour-v1.6.md`, dòng “Thay đổi ở v1.6 (bổ sung 12/11/2026 · dịch vụ đi kèm)”. Nguồn: BOI-CANH (Dịch vụ đi kèm, Giường phụ, Nền tảng “Phòng”), Q13' đổi 12/11/2026, RSD DH03 R23. Thêm E3.13, E3.14, E4.12, AC92–AC100. Bỏ mọi câu “phòng 3 người và giường phụ dùng Nhập tay” (R04, R13, R15); Nhập tay giữ cho khoản thiếu và ghi đè.

**Thay đổi chính:** ô Giường phụ ở KD06.1 và điều kiện tính; số phòng đôi = làm tròn lên ((người lớn − phòng đơn − giường phụ) ÷ 2); thêm đi kèm vào dòng dịch vụ chính (menu ⋯ của dòng, L3.4 bước 4), số lượng Cố định, Theo số khách, Theo số giường phụ; bộ tính giá tính khoản đi kèm theo hợp đồng áp dụng của dịch vụ chính và mùa của ngày dùng; Markup theo hạng mục của loại dịch vụ của chính đi kèm; proposal không có dòng giá đi kèm, lưu trú ghi “+ n giường phụ”.

**Tự quyết (U6):**
- **Markup của đi kèm** theo hạng mục chứa loại dịch vụ của chính dịch vụ đi kèm (QT05), như mọi khoản; không theo hạng mục của dịch vụ chính. Giường phụ có loại của dịch vụ chính (DH03 R23) nên luôn vào Lưu trú.
- Ô Giường phụ thêm cả ở KD06.1 (cạnh phòng đơn) để hành trình hiện số lượng giường phụ và điều kiện tính điền sẵn, như phòng đơn; điều kiện tính sửa được, không ghi ngược về yêu cầu.
- Phòng đơn tự xếp xét (người lớn − phòng đơn người dùng nhập − giường phụ); tính lại khi người lớn, phòng đơn, giường phụ đổi. Giường phụ vượt số phòng đôi thì chặn (mỗi phòng đôi tối đa một giường phụ, suy từ “phòng 3 người = phòng đôi + 1 giường phụ”).
- **Phân bổ tiền phòng khi có giường phụ:** khoản phòng đôi và khoản giường phụ của cùng đêm chia đều cho người lớn ở phòng đôi (gồm người ở giường phụ); không thêm đối tượng giá bán “người ở giường phụ”. Phụ thu phòng đơn hiển thị = phần vượt phần tiền phòng mỗi người lớn ở phòng đôi (bằng nửa giá phòng đôi khi không có giường phụ), để tổng giá bán khớp.
- Điều kiện có giường phụ mà đêm lưu trú chưa có đi kèm Giường phụ: khoản thiếu (thêm đi kèm hoặc nhập tay), để báo giá không thiếu tiền giường phụ.
- Đổi dịch vụ của dòng bỏ đi kèm cũ (theo tinh thần quyết định 4 ở DH08). AI không đề xuất đi kèm; sao chép Tour mẫu không có đi kèm.
- Proposal: không có tên tiếng Anh của đi kèm (DH03 không có), nên giường phụ ghi bằng chữ cố định “+ n giường phụ” / “+ n extra bed(s)”; đi kèm khác không có dòng riêng, thẻ bao gồm của đi kèm vào mục Bao gồm.

**Ví dụ Müller:** không tính lại ở đợt này (không có giường phụ; đã ghi chờ tính lại theo Q13', Q14). Ví dụ có giường phụ ở AC92–AC94.

**Hình chưa cập nhật:** W05, W27 (ô Giường phụ), W15, W17, W18 (đi kèm trên dòng), W28, W29, W49 (khoản đi kèm), W33 (giường phụ trong lưu trú).

**Kiểm tra.** `check-rsd.py`: 51 ảnh, 51 mã W, không lỗi.

## Tính lại ví dụ giá 13/11/2026

Sửa tại chỗ `RSD-KD06-Ho-so-yeu-cau-Tour-v1.6.md`, dòng “Thay đổi ở v1.6 (bổ sung 13/11/2026 · tính lại ví dụ giá)”. Lý do: ví dụ Müller v3 (50.750 EUR) tính trước Q13', Q14 và không còn dữ liệu từng dòng (wireframe chỉ có vài dòng minh họa, còn lệch số với RSD), nên không “tính lại” được. Dựng bộ dữ liệu ví dụ đầy đủ ở `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md` và tính bằng `docs/rsd/BO-TINH-GIA/tinh_vi_du.py` (ví dụ A Müller v3, B TM-008, C giường phụ).

- **Ví dụ A (Müller v3).** Giữ danh tính YC-2611-0019, 15/03–28/03/2027, 23 người lớn + 2 trẻ 8, 10 tuổi, Deluxe, nhập 2 phòng đơn, EUR, tỷ giá ngày 11/11/2026. Hành trình 14 ngày dựng mới (62 dòng, 36 dịch vụ, 88 khoản), giữ các điểm RSD đã nêu: Mường Thanh Holiday Huế Ngày 5–6 thiếu hợp đồng cho 19/03/2027 nên nhập tay (AC37), HDV tiếng Đức 14 ngày (AC74), Set menu có dòng 20–24 và 25–29 khách (AC82), hai chặng bay HAN–HUI (VND) và DAD–SGN (USD).
- **Kết quả:** 3 phòng đơn (1 tự xếp), 10 phòng đôi, 13 phòng; giá vốn 45.222,82 EUR; người lớn 1.990, trẻ em 780, phụ thu phòng đơn 1.460 × 3; tổng 51.710 EUR; lãi gộp 6.487,18 EUR (12,5 %); Markup bình quân 14,3 %; bình quân 2.068,40 EUR/khách (trong ngân sách 2.100). Theo dịch vụ: Lưu trú 31.608,11 → 36.349,33; Vé máy bay 3.418,26 → 3.589,17; Hướng dẫn viên 764,96 → 917,95; tổng 45.222,82 → 51.702,67.
- **Sửa ở RSD:** L3.7 bước 1 (62 dịch vụ), L4.1 bước 3, 4, ghi chú dưới W28, R14 (viết lại ví dụ, bỏ câu cần tính lại, thêm dòng dẫn), AC35, AC36, AC65, AC69, AC73, ghi chú Hình chưa cập nhật. v1 2.164 và v2 2.110 giữ như lịch sử.
- **AC93, AC94** đối chiếu với ví dụ C: khớp (người lớn 920.000 × 1,10 = 1.012.000 → 1.020.000 ₫; tổng 5.100.000 ₫; lãi gộp 500.000 ₫; trẻ 8 tuổi thêm giường 500.000 ₫). Hợp đồng Lotus của ví dụ C dùng đúng số AC93, khác LH-2026/HĐ-12 của RSD DH03 AC70 (giường phụ 630.000 ₫ sau gia hạn +5 %); không sửa DH03 ở đợt này.
- **Cách hiểu đã chọn** khi script phải chọn: mục 2 của tài liệu ví dụ (phụ thu lễ áp cho phòng đơn kiểu phụ thu thêm; phụ thu phòng đơn tỷ lệ tính trên giá mùa; trẻ cùng nhóm gộp dòng lấy bình quân; phân bổ trên số đã quy đổi; giá bán trước làm tròn không làm tròn từng khoản…).
- **Hình chưa cập nhật:** mọi hình có số Müller v3 (W23, W26, W28–W31, W38–W42, W49, W51) còn số cũ; không dựng lại theo yêu cầu.
- **Ngoài phạm vi, cần sửa sau:** RSD KD07 AC17 (đợt 1 15.225 EUR của BK-2611-0158) nay là 15.513 EUR; RSD KT01 AC59 (khoản thu 15.225 EUR cho BK-2611-0158, nên đổi thành 15.513 EUR cho khớp đợt 1); GHI-CHU KD07 dòng số liệu Müller; wireframe KD07, KD08, KT01 còn 50.750 và 15.225 EUR.


## Hai quy tắc tính giá người dùng chốt 13/11/2026

Sửa tại chỗ `RSD-KD06-Ho-so-yeu-cau-Tour-v1.6.md` R13 (hai bullet mới/viết lại) và dòng “Thay đổi ở v1.6 (bổ sung 13/11/2026 · tính lại ví dụ giá)”. Nguồn: BOI-CANH-DU-AN, mục Tính lại ví dụ giá (13/11/2026).

- **Trẻ em cùng nhóm tuổi gộp một dòng giá bán:** giá = bình quân giá vốn các trẻ trong dòng (kể cả khi một trẻ được suất miễn phí), rồi Markup và làm tròn lên theo bội số. Ví dụ A không đổi số (hai trẻ 778,00 và 779,67 trước làm tròn, đều ra 780).
- **Phụ thu lễ theo phòng áp cho mọi phòng, kể cả phòng đơn:** phòng đơn kiểu phụ thu thêm = giá phòng của đêm sau phụ thu lễ + phụ thu phòng đơn; phụ thu phòng đơn dạng tỷ lệ tính trên giá mùa chưa gồm phụ thu lễ.
- Còn chưa có quy tắc: phòng đơn trọn gói trùng đêm có phụ thu lễ (dữ liệu ví dụ không có; script dừng nếu gặp).
