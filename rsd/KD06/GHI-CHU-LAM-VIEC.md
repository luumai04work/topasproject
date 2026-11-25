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
16. **AI**: không gửi tên, email, điện thoại của khách và giá NCC; thời gian chờ mặc định 60 giây, đổi được bằng `aiGateway.timeoutSeconds` trong tệp cấu hình (tối đa 600); chữ “tối đa … giây” ở W20 và “sau … giây” ở W21 hiện đúng số giây đã cấu hình (R09 “thời gian chờ tối đa 60 giây (tệp cấu hình)”, 19/11/2026); đề xuất hiện trên lưới chưa lưu; dịch vụ chỉ gán NCC khi khớp danh mục đang dùng.
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

## Quyết định rà soát 13/11/2026 · bộ tính giá

- **Quyết định rà soát 13/11/2026 (Q-RS27).** Dòng căn cứ khách, phòng chọn theo số người lớn; dòng căn cứ đoàn, đơn vị dịch vụ (xe, thuyền, HDV, giường) chọn theo tổng khách gồm trẻ em; đi kèm theo căn cứ của dòng đi kèm. Sửa R13 (Số lượng, Dịch vụ đi kèm), AC82; thêm AC101 (ví dụ D của `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`).
- **Quyết định rà soát 13/11/2026 (Q-RS03).** Không có Thứ tự của dòng giá; cùng hạng phòng tối đa một dòng chính khớp. Sửa R13.
- **Quyết định rà soát 13/11/2026 (Q-RS05).** Giá trẻ em là đơn giá, bỏ kiểu %. Sửa R13 (Trẻ em), AC39, AC94 (500.000 ₫ là đơn giá của dòng, số không đổi).
- **Quyết định rà soát 13/11/2026 (Q-RS06, Q-RS07).** Trẻ dưới nhóm tuổi thấp nhất miễn phí; trên nhóm cao nhất, khoảng trống giữa hai nhóm, hoặc hợp đồng không có nhóm tuổi: như người lớn; bỏ số trẻ miễn phí và “trẻ nhỏ nhất miễn trước”. Sửa R13 (Trẻ em, phân bổ khoản theo đoàn, gộp trẻ), R15, AC91 (viết lại theo ví dụ D). **Chờ xác nhận:** trẻ trên nhóm cao nhất ở dòng căn cứ phòng không có giá mỗi người lớn để “tính như người lớn”; người viết ghi là khoản thiếu để nhập tay (R13, R15). Khoảng trống giữa hai nhóm tính như người lớn là cách hiểu của người viết.
- **Quyết định rà soát 13/11/2026 (Q-RS02).** Ô trẻ em trống ở dòng căn cứ đoàn, đơn vị dịch vụ không phải khoản thiếu; khoản chia đều cho người lớn và trẻ em tính phí. Sửa E4.1, R13, R15, AC39; thêm AC102. **Chưa rõ:** ô trẻ em có giá ở dòng căn cứ đoàn, đơn vị dịch vụ dùng thế nào (quyết định chỉ nói ô trống); ví dụ không có trường hợp này.
- **Quyết định rà soát 13/11/2026 (Q-RS04).** Phụ thu Thay thế cùng căn cứ với dòng giá (chặn ở DH03). Sửa R13 (Phụ thu).
- Số của ví dụ A và C không đổi (giá % đổi thành đơn giá bằng số cũ; Sông Sài Gòn Hotel lấy đơn giá bình quân; Vé Đại Nội Huế bỏ suất miễn, mỗi trẻ 20.000 ₫). AC101, AC102 có thể trùng số với AC do nhánh khác thêm cùng ngày; điều phối đánh lại số khi gộp.
- **Quyết định rà soát 13/11/2026 · người dùng trả lời (Q-RS06, Q-RS02).** (1) Trẻ trên nhóm tuổi cao nhất ở dòng căn cứ phòng: giữ khoản thiếu, Kinh doanh nhập tay; bỏ chữ “chờ xác nhận” ở R13, R15. (2) Ô trẻ em ở dòng căn cứ đoàn, đơn vị dịch vụ bị khóa ở DH03 (RSD DH03 E6.15), bộ tính giá không bao giờ nhận giá trẻ em ở dòng như vậy; câu “Chưa rõ” ở mục Q-RS02 trên đã có trả lời. Sửa đầu tài liệu, R13 (Trẻ em, phân bổ khoản theo đoàn), R15, AC39, AC102.

## Quyết định rà soát 13/11/2026 · kinh doanh

- **Quyết định rà soát 13/11/2026 (Q-RS17).** Ghi Chốt là tạo Booking ngay: chọn Chốt mở hộp thoại xác nhận “Chốt vN và tạo Booking?” (CGD U2.01: tạo Booking cấp mã, không hoàn tác), xác nhận thì ghi Chốt, tạo Booking, hồ sơ Tour, thông báo trong một giao dịch; KD08 của Booking mở ở tab lịch thanh toán. Bỏ nút Tạo Booking, chế độ tạo mới của KD08 (W41), đổi phiên bản Chốt (L6.3, W39, AC52; mã không dùng lại). Phiên bản Chốt luôn là phiên bản của Booking Hiệu lực. Tự quyết theo “bỏ trạng thái trung gian”: hủy Booking thì phiên bản của Booking chuyển Không chốt (hệ thống ghi, ghi chú mã Booking), khách đặt lại thì Mở lại yêu cầu rồi ghi Chốt lại (kể cả chính phiên bản đó). Quyền: ghi Chốt theo Ghi kết quả, bỏ quyền Tạo Booking riêng (RSD QT02 Phụ lục A, B). Sửa đầu tài liệu, 1.1–1.5, 2.3–2.6, L6.1, L6.2, L6.4, L6.5, E6.4–E6.7, thêm E6.13, L7.2, R02, R16, R17, R19–R22, 5.1, 5.2; viết lại AC53–AC56, AC76, AC78; thêm AC111, AC113. Wireframe chưa vẽ lại: W40 (còn nút Tạo Booking), W47 (v3 còn Chốt); W39, W41 không còn dùng.
- **Quyết định rà soát 13/11/2026 (Q-RS18).** Sửa thông tin yêu cầu và lưu phiên bản ở chế độ điều chỉnh không đổi Booking; Booking chỉ nhận thời gian, số khách, giá trị khi Chuyển sang Điều hành; trong lúc chờ KD05, KD07, KD08 hiện số của Booking, KD06 hiện số của yêu cầu và dải tím ghi số Booking khi khác. Sửa 1.3, L6.5 bước 4, R27; thêm AC112. Wireframe W50, W51 chưa có dòng “Booking vẫn theo vN” (chưa vẽ lại).
- **Số AC.** AC101–AC110 để trống cho các quyết định rà soát về tính giá (Q-RS02..Q-RS07, Q-RS27) sửa KD06 song song trên nhánh khác, tránh trùng mã khi gộp. Khi gộp (13/11/2026), nhánh tính giá dùng AC101, AC102; AC103–AC110 không dùng.
- **Bổ sung 13/11/2026 (người dùng trả lời Q-RS17, Q-RS24).** Hủy Booking thì phiên bản của Booking **giữ Chốt** (thay cách điều phối đã chọn là chuyển Không chốt), như ghi chú 5 ở trên: phiên bản Chốt là lịch sử của Booking, hiện kèm “Booking … · Đã hủy”. Tự quyết theo đó: phiên bản Chốt của Booking (Hiệu lực hoặc đã hủy) không đổi được sang kết quả khác bằng tay (giữ đúng lịch sử); đặt lại sau khi Mở lại thì phiên bản cũ giữ Chốt, phiên bản của Booking mới cũng Chốt, nên một yêu cầu có thể có nhiều phiên bản Chốt nhưng tối đa một của Booking Hiệu lực. Chuyển một yêu cầu qua hộp thoại W46 có Hoàn tác như chuyển hàng loạt (L7.3, R23, AC114).

## Cách hiểu đã chọn khi làm KD06.2 (ticket 36, 16/11/2026)

Theo quy tắc “tài liệu chưa rõ hoặc vênh nhau” (người dùng chốt 16/11/2026). Mỗi cách hiểu giữ mọi câu của RSD cùng đúng.

- **Tên cách tính số lượng.** Hành trình của yêu cầu dùng `FIXED`, `BY_GUESTS`, `BY_ROOMS` (đi kèm thêm `BY_EXTRA_BEDS`); Tour mẫu giữ `PER_GUEST`, `PER_ROOM`, `FIXED`. Cùng nghĩa (R07, RSD KD01-KD02 R05); sao chép, ghép ngày đổi tên khi chép. Không đổi tên ở Tour mẫu để API KD02 giữ nguyên.
- **Cố định không ghi số.** Dòng hoặc đi kèm Cố định gửi lên không kèm số lượng thì là 1 (mặc định “Cố định · 1” của L3.4, 5.2).
- **Nguồn của ngày.** Chỉ ngày ghép (L3.2) ghi nguồn “TM-… · Nn” (R08: “Ngày ghép ghi nguồn”); ngày sao chép cả mẫu (L3.1) không ghi nguồn riêng vì nguồn hành trình đã là “Từ Tour mẫu TM-…” (W15 không có nhãn nguồn trên ngày).
- **Ghép Thay ngày vượt cuối (E3.6).** Thay từ ngày đích liên tiếp; ngày nguồn còn thừa chèn sau ngày cuối.
- **Dịch vụ, NCC, đi kèm Ngừng dùng khi lưu.** Lưu được (R10: “Lưu hành trình vẫn được”), dòng có nhãn và được đếm; chỉ Tính giá bị chặn. Danh mục W18 và khung chọn đi kèm không bao giờ đưa ra dịch vụ, đi kèm Ngừng dùng.
- **Một dòng vừa Ngừng dùng dịch vụ vừa Ngừng dùng NCC** đếm 1 việc cần xử lý (R10 đếm “dòng”), mang cả hai lý do.
- **Số dịch vụ đổi của R11** (dải W23, ticket 37 đọc): so từng ngày cùng số thứ tự với bản chụp phiên bản mới nhất; một dòng thay bằng dòng khác tính 1 (lấy số lớn hơn giữa dòng thêm và dòng bỏ của ngày); dòng mới hoặc đổi số lượng, đi kèm có nhãn Đã đổi. Ngày có tiêu đề, nội dung tiếng Việt hoặc dòng khác là ngày bị đổi.
- **Lịch sử khi tạo lại (R07, L3.6).** Hành trình cũ giữ trong lịch sử qua mục QT03 của lần lưu: giá trị trước của mọi ngày, dòng, đi kèm bị thay.

### Bổ sung khi sửa theo rà soát code (16/11/2026)

- **Đổi dịch vụ giữ số lượng (L3.8 bước 2).** “Thay tại chỗ, giữ số lượng và ghi chú”: dòng giữ nguyên cách tính và số cố định, kể cả khi dịch vụ mới có đơn vị khác. Không cần đặt lại vì ô Số lượng của mọi dòng cho chọn cả ba cách (W15: Cố định, Theo số khách, Theo số phòng); người dùng đổi tại chỗ nếu muốn. Đi kèm của dịch vụ cũ vẫn bị bỏ.
- **Giới hạn trường (5.2).** Chỉ giữ giới hạn tài liệu ghi: tên hành trình, tiêu đề ngày ≤ 150 ký tự, nội dung ngày ≤ 4.000 ký tự, số lượng Cố định của dòng và đi kèm là số nguyên ≥ 1 (không có mức trên; mức trên duy nhất là giới hạn kiểu số nguyên của cơ sở dữ liệu). Ghi chú dòng ≤ 200 ký tự như dòng Tour mẫu mà nó được chép từ (RSD KD01-KD02 5.2). Số ngày của hành trình không giới hạn (số ngày 1–60 là của thời gian đi ở KD06.1; E3.5 chỉ cảnh báo khi số ngày hành trình khác yêu cầu).
- **Giá tham chiếu ở W18 và khung chọn đi kèm (L3.4 bước 2, 4; E3.11).** Dùng cùng giá tham chiếu như bảng chọn dịch vụ KD02 (bộ tính giá dùng chung, đơn giá theo cách tính mặc định của đơn vị, loại tiền gốc của dòng giá, kèm mùa hoặc khoảng số khách, hoặc lý do thiếu giá). Ngày: ngày của ngày đang mở (W18) hoặc của dòng (khung đi kèm); yêu cầu chỉ có tháng dự kiến thì ngày đầu tháng, ghi “giá tham chiếu theo 01/04/2027 (tháng dự kiến)”. Khách: người lớn và tuổi trẻ em của yêu cầu (dòng căn cứ đoàn, đơn vị tính cả trẻ em, Q-RS27), hạng phòng của yêu cầu cho dịch vụ chính; đi kèm không lọc hạng phòng (dòng giá đi kèm không có hạng phòng, như DH04 R12). Không ghi gì vào hành trình.
- **Lý do kèm ngày Ngừng dùng (L3.8, W24).** “<NCC> Ngừng dùng từ dd/mm/yyyy”: ngày nghiệp vụ của lần chuyển Ngừng dùng gần nhất, của NCC lấy từ phần Đang dùng của NCC (DH02), của dịch vụ lấy từ lịch sử QT03 của dịch vụ (cùng cách KD02 W21 nêu người tắt). Không biết ngày (lần đổi cuối là bật lại rồi tắt ngoài lịch sử) thì ghi lý do không kèm ngày.
- **Gợi ý giường phụ (E3.14).** Dòng đi kèm tính Theo số giường phụ khi yêu cầu có 0 giường phụ hiện “Nhập số giường phụ ở Thông tin yêu cầu hoặc điều kiện tính”; số lượng hiện 0. Đổi sang Cố định thì gợi ý mất.

## Cách hiểu đã chọn khi làm KD06.3 (ticket 37, 17/11/2026)

Theo quy tắc tài liệu chưa rõ (người dùng chốt 16/11/2026): chọn cách giữ mọi câu cùng đúng; scenario và hợp đồng API ở `scenarios/contracts/sales.md`.

- **“Lưu hành trình sau phiên bản mới nhất” (R11).** So theo số phiên bản bản ghi của hành trình: phiên bản báo giá ghi số hành trình đã dùng để tính; hành trình lưu lần sau (số lớn hơn) mới so nội dung với bản chụp. Hai lần lưu có thể cùng thời điểm, nên không so giờ.
- **Điền sẵn W27 (L4.1 bước 2, L4.2).** Số khách, tuổi trẻ, hạng phòng, phòng đơn (số nhập và cờ tự xếp), giường phụ, loại tiền, Markup chung và Markup theo hạng mục lấy từ phiên bản nguồn; ngày khởi hành lấy từ yêu cầu (W27 “Từ yêu cầu”; yêu cầu chỉ có tháng dự kiến thì lấy của phiên bản). Tỷ giá luôn là tỷ giá có hiệu lực của ngày bấm (R14), không lấy của phiên bản; danh sách gồm loại tiền của dòng giá các dịch vụ trong hành trình, loại tiền báo giá và loại tiền ngân sách (R26 so ngân sách qua tỷ giá của lần tính). Bổ sung ticket 38 (17/11/2026, QT05-AC39): W27 hiện tỷ giá của loại tiền trong hành trình, loại tiền ngân sách và loại tiền báo giá đang chọn; đổi loại tiền báo giá thì hiện ngay tỷ giá có hiệu lực của loại tiền mới (chưa có thì ô trống viền đỏ, E4.2), vì mọi khoản quy đổi qua tỷ giá loại tiền báo giá (R14). Nên API điền sẵn gửi tỷ giá của mọi loại tiền đang dùng ở QT05 (`exchangeRates`) cùng danh sách loại tiền luôn hiện (`rateCurrencies`). Giá nhập tay không điền sẵn từ phiên bản nguồn: L4.2 chỉ điền sẵn điều kiện, R14 nói phiên bản mới mang theo Markup, E4.7 “lần tính sau dùng dữ liệu mới” (sửa review 17/11/2026, bỏ cách đọc cũ “Sửa giá mang giá nhập tay của phiên bản cũ”).
- **Ngày khởi hành giả định (E4.8).** Yêu cầu chỉ có tháng dự kiến thì ngày khởi hành nhập ở W27 là giả định: lần tính và phiên bản ghi cờ `assumedDeparture`; W26 (cột điều kiện) và W31 (dòng dưới tiêu đề) ghi “giá theo khởi hành giả định dd/mm/yyyy”. Yêu cầu có ngày đi cố định thì không ghi.
- **Nguồn Markup (R14, 5.1 “Mặc định hoặc Sửa tay”).** Lần tính và phiên bản ghi Mặc định khi Markup chung bằng Markup mặc định của loại Tour, Markup hạng mục bằng Markup mặc định của hạng mục (QT05, lúc tính; hạng mục để trống mà QT05 cũng không có mặc định là Mặc định); khác thì Sửa tay, kể cả số mang từ phiên bản trước mà khác mặc định. W27 vẫn ghi nhãn “Từ vN” cho số điền sẵn từ phiên bản.
- **Kết quả của phiên bản Đã thay thế, Chốt (R17, E6.1).** API từ chối đổi kết quả: Đã thay thế 422 `QUOTE_VERSION_SUPERSEDED`, Chốt (phiên bản của Booking) 422 `VERSION_OF_BOOKING` (ticket 47 điền mã Booking); W31 chỉ hiện nhãn kết quả, không có ô chọn.
- **Khoản tính trong cùng loại tiền báo giá** không cần tỷ giá (quy đổi = tiền gốc). Chỉ khi có khoản khác loại tiền mới cần tỷ giá cả hai loại; thiếu thì 400 `exchangeRates.<ISO>` (E4.2).
- **Cách tính số lượng không khớp đơn vị dịch vụ** (ví dụ Cố định trên dịch vụ theo khách, Theo số khách trên dịch vụ theo đoàn): khoản = đơn giá × số lượng theo R07, chia đều cho khách tính phí như khoản theo đoàn (R13). Tách phòng đôi, phòng đơn, trẻ em chỉ khi dòng tính Theo số phòng và đơn vị căn cứ phòng; giá trẻ từng em chỉ khi dòng Theo số khách và đơn vị căn cứ khách.
- **Đi kèm trên dòng phòng.** Giường phụ (dịch vụ đánh dấu giường phụ) chia đều cho mọi trẻ em của điều kiện tính (R13 phân bổ; sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em; trước đó vào phần phòng đôi); đi kèm khác chia theo căn cứ của chính nó như khoản theo đoàn. Khoản thiếu “Giường phụ · chưa thêm” của đêm (E4.12) nhập tay xong cũng chia đều cho trẻ em, không vào phần phòng đôi nên không làm đổi phụ thu phòng đơn.
- **Nhập tay (R15).** Đơn giá nhập tay thay đơn giá của khoản, cả khoản thiếu lẫn khoản đã có giá (W28: nút Nhập tay trên dòng có giá mở cùng các ô như khoản thiếu, Tính lại gửi đi): khoản theo khách thì người lớn và trẻ của khoản (trừ trẻ miễn phí) theo đơn giá đó; khoản trẻ em là giá mỗi trẻ; phòng đôi, phòng đơn là giá mỗi phòng. Khoản theo khách thiếu giá trẻ em (ô nhóm tuổi trống, R13 “vào người lớn theo giá người lớn, vào từng trẻ theo giá nhóm tuổi”): người lớn và trẻ có giá vẫn ở khoản chính, đã tính giá; trẻ thiếu giá tách thành khoản trẻ em riêng (như dòng theo phòng), là khoản thiếu “Thiếu giá trẻ em”, nhập tay giá mỗi trẻ. “Áp cho đêm, ngày khác của cùng dịch vụ” áp cho mọi khoản cùng dịch vụ, cùng phần (phòng đôi, phòng đơn, trẻ em, đi kèm) trong lần tính.
- **Còn khoản thiếu.** Giá vốn, giá bán, lãi gộp, giá theo đối tượng, Markup bình quân đều “—” (E4.1 “giá vốn, giá bán hiện —”), so ngân sách “chưa so được”.
- **So ngân sách (R26).** Chênh lệch luôn là số dương tới đầu được so (đến khi vượt hoặc trong, từ khi dưới); tỷ lệ một chữ số thập phân. Trong ngân sách cũng ghi tỷ lệ còn cách đầu “đến”.
- **Ô kết quả ở W31.** Hình vẽ nút chọn bốn kết quả; scenario dùng ô chọn (combobox) “Kết quả báo giá”. Ô chọn có Chưa có kết quả, Cần điều chỉnh, Không chốt; Chốt thêm cùng hộp thoại tạo Booking ở ticket 47 (R19, Q-RS17). Ghi chú phản hồi lưu cùng kết quả (nút Lưu ghi chú khi chỉ sửa ghi chú).
- **Phòng đơn trọn gói vào đêm có phụ thu lễ Thay thế** là khoản thiếu ở KD06 (R13, R15), khác giá vốn tham khảo KD02 (BO-TINH-GIA mục 2 ý 18).
- **Hợp đồng, dịch vụ “đã dùng” (DH03 R13).** Hợp đồng áp dụng của mọi khoản có hợp đồng (kể cả khoản đi kèm), dịch vụ của mọi dòng và đi kèm của phiên bản đã lưu; ngày tỷ giá đã dùng (QT05 R14) là ngày lấy tỷ giá của các loại tiền trong phiên bản.

## Cách hiểu đã chọn khi làm proposal (ticket 40, 17/11/2026)

Theo quy tắc tài liệu chưa rõ (người dùng chốt 16/11/2026); hợp đồng API ở `scenarios/contracts/sales.md` mục Proposals.

- **Nội dung proposal (R18 “bản chụp lúc publish”).** Lúc publish hệ thống chụp vào proposal: lịch trình theo ngày của phiên bản (ngày, tiêu đề, nội dung tiếng Việt), số khách, giá theo đối tượng và tổng của phiên bản; bản English lấy tiêu đề, nội dung tiếng Anh của **cùng ngày đó** trong hành trình đang lưu (R12, E5.1) và tên hành trình theo ngôn ngữ. Ngày của hành trình không có mã bền (mỗi lần lưu ghi lại), nên “cùng ngày” là ngày có cùng tiêu đề và nội dung tiếng Việt với ngày của phiên bản, ưu tiên ngày cùng vị trí (sửa review 17/11/2026, bỏ cách ghép theo vị trí: chèn hay đổi chỗ ngày làm một ngày mang tiếng Anh của ngày khác). Ngày của phiên bản không còn ngày nào khớp tính là thiếu tiếng Anh (E5.1 chặn); W35 ghi “Ngày này đã đổi trong hành trình sau phiên bản này” thay cho ô nhập, người dùng tính giá lại hoặc publish Tiếng Việt. Khách, người liên hệ chụp lúc publish. Người phụ trách và email công việc trên trang (W33, W36) là người phụ trách hiện tại của yêu cầu, để khách liên hệ đúng người sau khi chuyển phụ trách.
- **Lưu trú theo đêm (R18).** Mỗi dòng hành trình có dịch vụ thuộc loại dịch vụ có hạng phòng (QT05) là một đêm lưu trú (một định nghĩa dùng chung với hạng mục lưu trú của hồ sơ Tour, DH07 R03): tên khách sạn là tên NCC (5.3 cho phép tên khách sạn), hạng phòng là hạng của dòng giá đã tính, không có thì hạng phòng của điều kiện tính; số giường phụ là tổng số lượng các đi kèm đánh dấu giường phụ trên dòng đó. Không có dòng, giá hay tên dịch vụ của đi kèm.
- **Ngôn ngữ mặc định (5.2).** English trừ khi ngôn ngữ phục vụ có mã ISO `vi`.
- **Thiếu tiếng Anh (E5.1).** Một ngày thiếu khi nội dung tiếng Anh trống, hoặc có tiêu đề tiếng Việt mà tiêu đề tiếng Anh trống; ngày của phiên bản không còn trong hành trình đang lưu (không ngày nào cùng tiêu đề và nội dung tiếng Việt) cũng tính là thiếu. API từ chối `ENGLISH_CONTENT_MISSING { days }`; W35 nhập tại chỗ, lưu vào hành trình (đánh dấu Đã kiểm tra) rồi publish. Ticket 43 thêm nút Dịch nháp tại chỗ (khi có gateway AI): bản dịch AI lưu với nhãn Dịch nháp, người dùng sửa thì thành Đã kiểm tra.
- **Thẻ chưa có tên tiếng Anh (E5.2).** Bản English điền thẻ theo tên tiếng Việt và liệt kê ở `untranslatedTags`; W32 tô thẻ đó, khóa Publish tới khi người dùng sửa tên trên thẻ (chỉ cho proposal này) hoặc bỏ thẻ. Tên tiếng Anh lấy theo thẻ cùng loại dịch vụ của dịch vụ (thẻ QT05 thuộc một loại dịch vụ).
- **Mục mặc định (R18, R25 “Luôn có cho English và Tiếng Việt”, C2).** Ở tệp cấu hình `proposals.defaultItems.EN|VI.inclusions|exclusions`, thêm sau các thẻ của dịch vụ; ngôn ngữ có khai thì phải có ít nhất một mục (tệp cấu hình khai rỗng bị từ chối lúc khởi động); ngôn ngữ không khai dùng mục dựng sẵn trong tệp ngôn ngữ (`proposalPage.defaultItems`), nên proposal luôn có mục mặc định. `config/topas.example.json` và cấu hình test có sẵn mục cho cả hai ngôn ngữ (sửa review 17/11/2026, bỏ cách đọc “mặc định rỗng”).
- **Hết hạn (R18, Q6; E5.3).** Link mở tới hết ngày hạn (giờ Asia/Ho_Chi_Minh); qua ngày hạn là Hết hạn, tính lúc đọc. Hạn trước hôm nay (theo đồng hồ máy chủ đọc cùng phiên) báo lỗi cạnh ô và khóa Publish, Lưu gia hạn ngay trên giao diện, trước khi gửi; API vẫn kiểm lại. Gia hạn link Hết hạn mà phiên bản đã có link Đang mở khác cùng ngôn ngữ thì từ chối `PROPOSAL_ALREADY_OPEN` (giữ “tối đa một link Đang mở mỗi phiên bản, mỗi ngôn ngữ”). Link Đã thu hồi không gia hạn được (`PROPOSAL_NOT_OPEN`).
- **Có bản mới hơn (R18, W37).** Dải chỉ tới link Đang mở cùng ngôn ngữ của phiên bản số lớn nhất lớn hơn phiên bản này.
- **Lần mở (R18 “Mỗi lần mở trang hoặc tải PDF ghi một lần mở”, E5.10).** Mỗi lần đọc trang không kèm phiên TOPAS hợp lệ là một lần mở, kể cả trang Hết hạn, Đã thu hồi (W36) (sửa review 17/11/2026, bỏ cách đọc “trang đã đóng không tính”); tải PDF (200) là một lần; trả 202 “Đang chuẩn bị PDF” và 410 (PDF của link đã đóng, không có tệp nào được tải) không tính. Trang chỉ đọc dữ liệu một lần mỗi lần tải trang.
- **PDF (Q21; R18 “PDF dựng từ trang HTML của proposal, cùng nội dung, cùng ngôn ngữ”).** Job `PROPOSAL_PDF` vào hàng đợi trong giao dịch publish; job mở chính trang `/proposals/:token` bằng Chromium đặt theo ngôn ngữ của proposal (dữ liệu trang đưa thẳng vào, không tính lần mở) và in A4, lưu ở kho tệp kèm dấu vân tay của dữ liệu trang đã dùng. Trang đổi sau publish (gia hạn: hạn mới; chuyển người phụ trách: người phụ trách hiện tại; phiên bản lớn hơn có link: dải bản mới hơn) thì PDF cũ không còn cùng nội dung: Gia hạn đưa job dựng lại vào hàng đợi trong giao dịch gia hạn; lần tải PDF mà dấu vân tay khác trang hiện tại thì đưa job dựng lại và trả 202. Job hết lượt thử (FAILED) không tự chạy lại; lần tải PDF kế tiếp đưa một job mới (mỗi proposal tối đa một job đang chờ hoặc đang chạy), nên khách không chờ “Đang chuẩn bị PDF” mãi (sửa review 17/11/2026, bỏ cách đọc “PDF dựng một lần lúc publish”). Bước lỗi test `proposals.renderPdf` (ADR 0009).
- **Ngày publish trên trang (R18).** Thanh trên của W33 ghi “Quotation vN · issued <ngày publish> · valid until <hạn>” (Tiếng Việt “Báo giá vN · ngày lập … · hiệu lực đến …”); hình W33 chưa có ngày publish, R18 liệt kê trường này. Ngày, số tiền trên trang theo ngôn ngữ của proposal (English: “11 Dec 2026”, 1,020,000; Tiếng Việt: K0.03, K0.04).
- **Sao chép link không được (E5.5).** Cả ngay sau khi publish: hộp thoại đóng, khối link của proposal vừa tạo hiện ra với link được chọn sẵn, kèm thông báo “Chưa sao chép được…”.
- **Xem trước (L5.1 bước 2).** Trang proposal dựng từ dữ liệu đang nhập, hiện phủ cả cửa sổ trên màn KD06; không tạo link, không ghi gì.
- **Chế độ điều chỉnh (R27, E5.8).** Chưa có phiên bản điều chỉnh của Booking trước ticket 67, 68, nên publish kèm `adjustmentForBooking` trả `PUBLISH_NOT_ALLOWED`; `revisedForBooking` luôn trống tới khi đó.

## Cách hiểu đã chọn khi làm ghi Chốt tạo Booking (ticket 47, 17/11/2026)

- **Yêu cầu chỉ đọc sau khi có Booking (R20 “KD06.1, KD06.2, KD06.3 chỉ đọc”, E2.5).** Sửa yêu cầu, lưu hành trình, dựng bản nháp từ Tour mẫu (chép, gộp), tính giá, lưu phiên bản và ghi kết quả cho bất kỳ phiên bản nào của yêu cầu Đã có Booking đều bị từ chối 422 `TOUR_REQUEST_NOT_EDITABLE { status }` (sửa review 17/11/2026 thêm hành trình và Tour mẫu); giao diện ẩn các nút sửa; chế độ điều chỉnh (R27) mở lại các thao tác này ở ticket 67, 68.
- **Thứ tự kiểm khi ghi Chốt (R19, E6.4, E6.5).** Yêu cầu đã có Booking Hiệu lực → `REQUEST_ALREADY_BOOKED` trước mọi kiểm khác (kể cả phiên bản đọc đã cũ), rồi yêu cầu không Đang xử lý, phiên bản Đã thay thế, rồi phiên bản bản ghi (409).
- **Hộp thoại Chốt (W40 chưa vẽ lại).** Nêu khách, thời gian, số khách, hành trình (số ngày, số dịch vụ), giá trị, ngôn ngữ và loại Tour; câu hồ sơ Tour được tạo, Điều hành nhận thông báo; câu chính sách hoàn hủy theo loại Tour (không có thì mặc định). Bị từ chối thì hộp thoại giữ ghi chú, hiện banner; Booking vừa có ở phiên khác: banner đỏ “Yêu cầu đã có Booking …” kèm liên kết “Mở …”, đóng hộp thoại thì KD06 tải lại.

## Cách hiểu đã chọn khi làm hủy, mở lại, chuyển phụ trách (ticket 41, 17/11/2026)

Theo quy tắc tài liệu chưa rõ (người dùng chốt 16/11/2026); hợp đồng API ở `scenarios/contracts/sales.md` mục Tour requests.

- **Thứ tự kiểm khi hủy (L7.1, E7.1, E7.3, R24).** Yêu cầu đã hủy → 422 `ALREADY_CANCELLED { cancelledAt }` (E7.3); có Booking Hiệu lực → 422 `ACTIVE_BOOKING` (E7.1); rồi phiên bản bản ghi (409); rồi lý do (400 `errors.reasonId` khi không phải giá trị đang dùng của danh mục hoặc là “Booking đã hủy”; 400 `errors.note` khi Khác thiếu ghi chú).
- **Link bị thu hồi khi hủy (R21 “thu hồi link Đang mở”).** Chỉ link còn Đang mở trong ngày (chưa thu hồi, chưa quá hạn); link đã Hết hạn giữ trạng thái Hết hạn. Mỗi link thu hồi là một dòng thay đổi “Trạng thái proposal · vN · EN” trong mục QT03 của lần hủy.
- **Mở lại yêu cầu không Đã hủy.** Từ chối 422 `TOUR_REQUEST_NOT_EDITABLE { status }` (mã lỗi sẵn có “yêu cầu không ở trạng thái cho thao tác này”), không ghi gì.
- **Phiên bản bản ghi.** Hủy, mở lại, chuyển phụ trách và Hoàn tác chuyển đều tăng phiên bản bản ghi và đặt ngày cập nhật của yêu cầu (cột Cập nhật của KD05). Form KD06.1 đang không có thay đổi tự theo bản mới nhất; đang có thay đổi thì lưu nhận E2.5 (đã hủy) hoặc E2.1 như trước.
- **Lịch sử thay đổi (R24, 5.1).** ⋯ → Lịch sử thay đổi đọc các mục QT03 của yêu cầu (tạo, sửa, hủy, mở lại, chuyển phụ trách, Hoàn tác…), mới nhất trước; mục chuyển hàng loạt chỉ hiện dòng của yêu cầu đó.
- **Hoàn tác chuyển một yêu cầu (R23).** “Đã bị đổi tiếp” gồm: có lần đổi người phụ trách sau (chuyển, chuyển hàng loạt, mở lại với người khác), yêu cầu đã hủy hoặc đã có Booking. Mỗi lần đổi người phụ trách là một dòng của `tour_request_owner_transfers`.
- **Dải E2.5.** Lưu bị từ chối vì yêu cầu vừa hủy: dải đỏ “Yêu cầu vừa được hủy lúc <giờ>. Dữ liệu đang nhập vẫn giữ…” với nút duy nhất Tải lại; Lưu khóa như khi xung đột (K4.10). Giờ hủy đọc lại từ yêu cầu (lỗi 422 chỉ mang `status`). Vừa có Booking: câu tương ứng không có giờ.
- **Nút Mở lại yêu cầu** là nút phụ (W44, W45 vẽ nút phụ), không phải nút chính.

## Cách hiểu đã chọn khi làm AI tạo hành trình, dịch nháp (ticket 43, 17/11/2026)

- **Tiêu chí thêm (W19).** Năm trường, đều không bắt buộc: điểm đến phải có, điểm vào – ra, ưu tiên (chữ tự do, tối đa 500 ký tự; hình vẽ thẻ, làm ô chữ), nhịp độ (chọn một: Thong thả, Vừa phải, Dày; trống là không yêu cầu), ghi chú cho AI (tối đa 2.000 ký tự). “Giữ tiêu chí” (W20 Tạo lại với tiêu chí khác, E3.1): bảng trượt mở lại với tiêu chí của lần tạo đề xuất gần nhất của yêu cầu.
- **Dữ liệu gửi AI (R09).** Mong muốn, ngày đi – về hoặc tháng, số ngày, người lớn, tuổi trẻ em, hạng phòng, ngôn ngữ phục vụ, loại Tour, ngân sách (số, loại tiền, cách tính), tiêu chí thêm; Tour mẫu Đang dùng (mã, tên, loại Tour, tiêu đề ngày, mã dịch vụ của ngày); danh mục dịch vụ Đang dùng của NCC Đang dùng, không có đi kèm (mã, tên, loại, nơi). Không có khách, người liên hệ, người phụ trách, mã yêu cầu, giá.
- **Kết quả (R09).** Dòng chỉ gán NCC khi mã AI trả nằm trong danh mục đã gửi; còn lại là Chưa gán NCC với tên AI đặt (dòng không mã, không tên bị bỏ); cách tính số lượng theo đơn vị tính của dịch vụ. Dải W20 đếm theo kết quả lúc AI trả.
- **Lỗi (E3.1, E3.12).** Quá thời gian → `AI_TIMEOUT`, hết hạn mức → `AI_RATE_LIMITED` kèm `resetsAt` gateway báo, gateway không dùng được → `AI_UNAVAILABLE`, còn lại (gồm kết quả không đọc được) → `AI_FAILED`. Lời gọi lỗi không được hàng đợi thử lại; người dùng bấm Thử lại.
- **Nhật ký lần gọi (R09, “nhật ký gọi AI” của QT03 ở mục thay đổi màn khác).** Là nhật ký kỹ thuật, không phải QT03 (QT03 1.3 không ghi việc chạy nền; E3.1 “không có gì được ghi ngoài nhật ký lần gọi”): `GET /api/system-log?job=AI_GATEWAY` cho Quản trị hệ thống, mỗi lần gọi đã xong một dòng (người, thời điểm, mục đích, mã yêu cầu, tiêu chí hoặc số ngày dịch, kết quả, mã lỗi).
- **Nguồn hành trình trong phản hồi.** `{ kind: 'TEMPLATE', templateCode }`, `{ kind: 'MANUAL' }`, `{ kind: 'AI' }` (hợp đồng `templateCode?`).
- **Tình trạng tiếng Anh (R12, W25).** Dịch nháp đặt Nháp; người dùng gõ, sửa nội dung tiếng Anh thì thành Đã kiểm tra (nhãn bỏ khi người dùng sửa), xóa hết thì Chưa có. Dịch nháp gửi tiêu đề, nội dung tiếng Việt đang trên lưới (kể cả chưa lưu) của đúng ngày đó.
- **Không có gateway AI trong tệp cấu hình (6.x “Ẩn thẻ Bằng AI và nút Dịch nháp”).** `GET …/ai-proposals/defaults` trả `available: false`; màn ẩn thẻ Bằng AI, mục Bằng AI của Tạo lại hành trình và các nút Dịch nháp.


## Cách hiểu đã chọn khi làm chế độ điều chỉnh (ticket 67, 17/11/2026)

- **Mã lỗi khi ghi vào yêu cầu Đã có Booking ngoài chế độ điều chỉnh (R20, E6.9; Q-RS18).** Thống nhất một mã: 422 `TOUR_REQUEST_NOT_EDITABLE { status: 'BOOKED' }` cho sửa yêu cầu (PATCH), lưu hành trình, dựng nháp từ Tour mẫu, tính giá, lưu phiên bản, publish; đúng như hợp đồng `scenarios/contracts/sales.md` (mục TourRequest, “also for pricing and itinerary saves of a booked request outside adjustment mode”) và scenario `kd08/create-booking`, `kd08/program-adjustment` (KD06-AC80). `REQUEST_ALREADY_BOOKED` chỉ là mã của ghi Chốt (tạo Booking) khi yêu cầu đã có Booking (E6.4), kể cả ghi Chốt cho phiên bản điều chỉnh (KD08-AC22). Câu “thiếu thì vẫn 422 `REQUEST_ALREADY_BOOKED`” ở Comments ticket 67 (Q-RS18) không theo.
- **Chế độ điều chỉnh trên máy chủ (R27, E6.10).** Không có trạng thái “đang điều chỉnh” lưu ở máy chủ: mỗi thao tác ghi ở chế độ này mang `adjustmentForBooking` (mã Booking); máy chủ kiểm lại: Booking là Booking Hiệu lực của chính yêu cầu (khác → `TOUR_REQUEST_NOT_EDITABLE`), Booking chưa hủy (`BOOKING_CANCELLED`), hồ sơ Tour chưa Đã kết thúc hoặc Đã đóng (`TOUR_FILE_ENDED`), người dùng có quyền Điều chỉnh chương trình của KD08 (403) ngoài quyền của chính thao tác. Mở chế độ (`POST /api/bookings/:code/adjustment`) cần quyền Điều chỉnh chương trình và quyền Sửa của KD06 (1.4 “quyền Điều chỉnh chương trình ở KD08 và quyền sửa KD06”). Trên web chế độ điều chỉnh là tham số `?adjust=<mã Booking>` giữ qua các tab; mở KD06 bằng lối vào khác không có tham số nên chỉ xem (E6.9).
- **Không AI ở chế độ điều chỉnh.** R27 “Được làm” không có tạo hành trình bằng AI, dịch nháp; thẻ, nút AI ẩn ở chế độ này (API AI vẫn chỉ nhận yêu cầu Đang xử lý).
- **Điều kiện tính giá điền sẵn (R27).** Từ phiên bản điều chỉnh mới nhất của Booking, chưa có thì từ phiên bản của Booking; số khách, tuổi trẻ em, phòng lấy theo thông tin yêu cầu khi yêu cầu được sửa sau lúc lưu phiên bản đó (thời điểm cập nhật của yêu cầu sau thời điểm lưu phiên bản); ngày khởi hành luôn theo yêu cầu (như L4.1). Loại tiền khóa theo Booking: ô Loại tiền báo giá khóa trên màn, API tính giá trả 422 `CURRENCY_LOCKED { currency }` khi khác.
- **Publish ở chế độ điều chỉnh (E5.8).** Chỉ publish được phiên bản điều chỉnh của Booking (nhãn của chính Booking, Chưa có kết quả, số lớn hơn phiên bản hiện hành của Booking); khác → 422 `PUBLISH_NOT_ALLOWED`. Lưu nội dung tiếng Anh trong hộp thoại publish (E5.1) cũng mang `adjustmentForBooking`.
- **Phiên bản báo giá trả về có `total`** (giá bán tổng như dòng của danh sách, null khi còn khoản thiếu giá), thêm vào hợp đồng QuoteVersion để Booking, scenario đọc giá trị phiên bản.

## Giường phụ cho trẻ em (người dùng chốt 18/11/2026)

Sửa tại chỗ `RSD-KD06-Ho-so-yeu-cau-Tour-v1.6.md`, dòng “Thay đổi (18/11/2026 · giường phụ cho trẻ em)”. Thay quyết định 12/11/2026 “giường phụ là chỗ cho người lớn thứ ba trong phòng đôi”. Các ý ở mục “Dịch vụ đi kèm 12/11/2026” trên (phòng đơn tự xếp trừ giường phụ, giường phụ vượt số phòng đôi thì chặn, chia tiền giường phụ cho người lớn ở phòng đôi) và câu “trẻ ‘thêm giường’ có tính là giường phụ không” ở phần còn mở không còn đúng.

- **Phòng (R04).** Người lớn chỉ ở phòng đôi hoặc phòng đơn; số phòng đôi = làm tròn lên ((người lớn − phòng đơn) ÷ 2), sau phòng đơn tự xếp cho người lớn lẻ (AC89 giữ). Giường phụ không đổi số phòng, không làm tính lại phòng đơn tự xếp.
- **Kiểm tra nhập (5.2, E1.1, E4.12).** Giường phụ số nguyên ≥ 0, không quá số trẻ em: lỗi cạnh ô “Giường phụ không quá số trẻ em”, chặn lưu yêu cầu và chặn tính giá. Nhiều hơn số phòng đôi: chỉ cảnh báo vàng như cũ.
- **Tính giá (R13).** Cộng cả hai: trẻ em theo chính sách trẻ em trên dòng giá phòng như cũ, và khoản đi kèm Giường phụ. Tiền khoản giường phụ chia đều cho mọi trẻ em của điều kiện tính; khoản phòng đôi chia đều cho người lớn ở phòng đôi; phụ thu phòng đơn = giá phòng đơn − khoản phòng đôi cùng đêm ÷ người lớn ở phòng đôi, không trừ khoản giường phụ. Ví dụ C (AC93) tính lại bằng `docs/rsd/BO-TINH-GIA/tinh_vi_du.py`: 4 người lớn, 1 trẻ 8 tuổi, 1 giường phụ → giá vốn 5.100.000 ₫, người lớn 1.100.000 ₫, trẻ 1.210.000 ₫, tổng 5.610.000 ₫.
- **Cách hiểu (agent, 18/11/2026): “mọi trẻ em” gồm cả trẻ dưới nhóm tuổi thấp nhất** (miễn phí ở chính sách trẻ em của dòng phòng): quyết định nói chia đều cho mọi trẻ em của điều kiện tính, không loại trẻ nào; trẻ miễn phí chỉ là giá 0 theo chính sách trẻ em, phần giường phụ vẫn cộng.
- **Cách hiểu (agent, 18/11/2026): giường phụ Cố định khi điều kiện không có trẻ em.** E3.14 cho đổi số lượng đi kèm Giường phụ sang Cố định; R04 chỉ giới hạn ô Giường phụ của điều kiện, không giới hạn số Cố định trên dòng. Khi điều kiện có 0 trẻ em mà đêm có khoản giường phụ thì không có trẻ để chia; khoản chia theo căn cứ của chính nó (đơn vị dịch vụ) như khoản theo đoàn, xe, đơn vị của R13 (chia đều khách tính phí), vì đó là quy tắc chung của căn cứ này khi quy tắc riêng của giường phụ không áp được. Chưa có AC cho trường hợp này; cần người dùng xác nhận nếu muốn chặn hẳn.
- **AC.** Viết lại AC92, AC93, AC95, AC100; AC94 giữ số, sửa lý do; AC96–AC99 không dựa trên 5 người lớn + 1 giường phụ nên giữ.
- **Khoản thiếu giường phụ ở R13** ghi “Giường phụ · chưa thêm vào <dịch vụ>, <ngày>” cho khớp E4.12 và AC95 (trước ghi “chưa thêm vào dòng”).

## Ticket 100 · Trang proposal theo mẫu bản chào cũ (19/11/2026)

Người dùng yêu cầu 19/11/2026: trang proposal gửi khách (W33, W36, W37) và file PDF dùng lại giao diện bản chào của CRM cũ (`topas-crm/addons/topas`: trang `/tour/bc/<token>`, mẫu `tour_publish_page`, PDF `report_tour_program_pdf`), bổ sung dữ liệu mà mẫu cũ cần; logo TOPAS lấy từ ảnh thương hiệu của CRM cũ.

- **Trang web.** Bố cục mẫu cũ: thanh thương hiệu, ảnh bìa với chip (số ngày đêm, số khách, ngày khởi hành, số điểm đến, giá trọn gói), thanh tab có Tải PDF, thanh ray lộ trình theo ngày cạnh cột đọc (Tổng quan, Hành trình từng ngày kèm nghỉ đêm, Nơi lưu trú, Ẩm thực, Giá tour, Bao gồm & lưu ý, Điều khoản), khối Về chúng tôi, dòng chân trang. Mục không có dữ liệu thì bỏ. Mọi trường R18 vẫn có: khách và người nhận, số phiên bản, ngày lập, hạn hiệu lực (dải thông tin dưới thanh tab), giá theo đối tượng (thẻ “Giá theo khách” dưới tổng), giường phụ trên dòng nghỉ đêm, người phụ trách (khối Về chúng tôi), dải bản mới hơn (W37).
- **PDF.** Không còn in chính trang web: `?print=true` vẽ brochure khổ cố định của mẫu cũ (bìa, tổng quan + mục lục, mỗi ngày một trang, khách sạn, ẩm thực, giá, bao gồm, điều khoản, bìa sau), in tràn lề. Vẫn qua `PdfRenderer` và hàng đợi như cũ.
- **Thông tin công ty và điều khoản** đọc từ tệp cấu hình (`proposals.company`, `proposals.terms.<EN|VI>`: lưu ý, chính sách trẻ em, huỷ đổi, điều khoản & điều kiện). Công ty đọc lúc mở trang (đổi hotline là thấy ngay); điều khoản chép vào nội dung lúc publish như các trường khác của R18.
- **Cách hiểu (agent, 19/11/2026): R18 “cần trường khác thì bổ sung ở RSD này”.** Các trường mới (công ty, điều khoản, khách sạn, điểm đến, bữa ăn, ảnh) là yêu cầu trực tiếp của người dùng; không có cost, Markup, tỷ giá, NCC khác ngoài khách sạn hay dòng dịch vụ đi kèm (5.3 giữ nguyên).
- **Proposal đã publish trước ticket này** đọc các trường mới là rỗng (`withContentDefaults`); khách sạn của chúng chỉ có tên. Dấu vân tay PDF đổi theo trang nên PDF cũ được dựng lại một lần theo mẫu mới.
- **Khách sạn (DH03).** Phần “Thông tin khách sạn trên proposal” của hồ sơ NCC có loại dịch vụ có hạng phòng: hạng sao (1–5, Resort, Homestay, Căn hộ dịch vụ, Khác), giờ nhận/trả phòng, website, link bản đồ (trống thì proposal mở Google Maps theo tên + địa chỉ), tiện nghi, một ảnh. Phần riêng, phiên bản riêng, quyền `DH03.sua-thong-tin-chung`. Địa chỉ là Địa chỉ của NCC. Chép vào nội dung lúc publish.
- **Ngày của hành trình (KD06.2).** Mỗi ngày thêm: bữa ăn trong giá (sáng, trưa, tối), điểm đến (giá trị QT05 `locations`, tối đa 10), ảnh (tối đa 5, ảnh đầu là ảnh chính). Không đổi R11 (“đổi sau báo giá” chỉ xét tiêu đề, nội dung, dịch vụ). Proposal lấy chúng từ ngày tương ứng của hành trình đang lưu, khớp như nội dung tiếng Anh (`matchVersionDays`). Mục Ẩm thực chỉ hiện khi có ít nhất một ngày đánh dấu bữa ăn.
- **Cách hiểu (agent, 19/11/2026): ảnh điểm đến.** Mẫu cũ có ảnh riêng cho điểm đến; ở đây thẻ điểm đến lấy ảnh đầu của ngày đầu tiên đi qua điểm đó, không thêm ảnh vào QT05. Tên điểm đến dùng tên QT05 ở cả proposal tiếng Anh (QT05 `locations` chưa có tên tiếng Anh).
- **Ảnh cho khách** đọc qua `GET /api/public/proposals/:token/photos/:fileId`: chỉ ảnh có trong nội dung của link còn mở; link hết hạn hoặc thu hồi thì 404. Bản PDF nhúng ảnh qua cùng đường đó.
- **Chưa làm:** ngày của Tour mẫu (KD02) chưa có bữa ăn, điểm đến, ảnh; chép Tour mẫu sang hành trình cho các trường này giá trị rỗng. Hoạt động có giờ theo ngày của mẫu cũ không làm (dòng dịch vụ là của NCC, 5.3 không cho hiện NCC ngoài khách sạn).

## Ticket 104 · Dịch vụ bao gồm trên thẻ khách sạn của proposal (20/11/2026)

Người dùng yêu cầu 20/11/2026: mục Nơi lưu trú của trang proposal ghi thêm dịch vụ bao gồm của từng khách sạn.

- **Nguồn.** Thẻ “Dịch vụ bao gồm” (DH03 W27) của các dịch vụ lưu trú của khách sạn đó dùng trong phiên bản (dịch vụ của dòng nghỉ đêm, không gồm dịch vụ đi kèm như giường phụ), gộp theo tên, theo thứ tự chương trình. Không bao gồm của dịch vụ không hiện ở thẻ khách sạn (đã có ở mục Bao gồm & lưu ý).
- **Ngôn ngữ.** Như R18, E5.2: proposal tiếng Anh dùng tên tiếng Anh của thẻ ở QT05; thẻ chưa có tên tiếng Anh giữ tên tiếng Việt (hộp thoại publish đã cảnh báo các thẻ này).
- **Chép vào nội dung lúc publish** như các trường khác của khách sạn; proposal đã publish trước ticket này đọc là rỗng. Thẻ khách sạn ghi nhãn “Dịch vụ bao gồm” (EN “Included services”) với danh sách thẻ; không có thẻ nào thì bỏ khối. Bản PDF ghi cùng danh sách ở thẻ khách sạn.

## Khi code ticket 88 (18/11/2026)

- **E2.7 với CGD K0.09 (CGD-AC09 dùng đúng trường hợp YC-2699-9999):** trang ghi “Không tìm thấy <mã>” (chữ của K0.09) với nút “Về Việc của tôi”, và giữ nút “← Danh sách” của E2.7 bên cạnh. Chữ “Không tìm thấy yêu cầu YC-…” của E2.7 thay bằng chữ chuẩn; scenario `kd06/open-and-update` đổi theo.
- **Mã màn trong nhật ký QT03 (sửa sau review, QT03 R02 “mã màn và tab”):** thao tác trên tab Hành trình (lưu, AI tạo) ghi màn KD06.2; trên tab Báo giá (tạo phiên bản, ghi kết quả, Chốt tạo Booking, publish, gia hạn, thu hồi link proposal) ghi KD06.3; thao tác trên phần đầu và tab Thông tin vẫn ghi KD06. Mở bản ghi ở QT03 mở đúng tab đó.

## Ticket 106 · Dịch tự động nội dung thiếu tiếng Anh (23/11/2026)

Người dùng yêu cầu: tác vụ 10 phút dịch mọi bản ghi đang thiếu bản dịch và ghi thẳng vào bản ghi; thêm nút Dịch để bấm nhanh; áp cho mọi model có nội dung đa ngôn ngữ. Người dùng chọn làm luôn, không duyệt kế hoạch, nên các cách hiểu dưới đây do người làm chọn.

- **Model được dịch.** Ngày của hành trình yêu cầu (tiêu đề, nội dung), tên hành trình, tên tiếng Anh của thẻ bao gồm, không bao gồm (QT05 L4.2). Không dịch: nội dung mẫu email QT04 (ngôn ngữ của mẫu do người dùng chọn thêm, chỉ tiếng Việt bắt buộc nên không có “ngôn ngữ còn thiếu”; trường trộn `{{…}}` dễ bị dịch sai; mỗi lần ghi tạo phiên bản mẫu), proposal (bản chụp, R18), tour mẫu KD01-KD02 (không có trường tiếng Anh; ngày chép sang hành trình yêu cầu thì được dịch ở đó), các nhóm QT05 khác (cột tên tiếng Anh không màn nào dùng). Ứng dụng chỉ có tiếng Việt và tiếng Anh cho dữ liệu, nên “ngôn ngữ còn thiếu” là tiếng Anh.
- **Chỉ yêu cầu Đang xử lý.** Hành trình của yêu cầu Đã có Booking chỉ đọc (R20) và R27 không cho AI ở chế độ điều chỉnh, Đã hủy là hồ sơ đã đóng; mở lại (R22) thì lần quét sau dịch.
- **Tình trạng Dịch nháp, không bao giờ thay phần đã có.** Ghi đúng phần còn trống (tiêu đề hoặc nội dung), đặt Dịch nháp; bản nháp không chặn publish (W32 chỉ đếm), nên proposal English publish được ngay sau lần quét, người dùng vẫn thấy nhãn cần kiểm tra.
- **Không đổi phiên bản bản ghi, không QT03.** Tác vụ khóa hành trình như lần lưu (cùng khóa tư vấn), đọc lại ngày theo mã, chỉ ghi khi tiếng Việt còn đúng văn bản đã gửi dịch và phần tiếng Anh còn trống. Tăng phiên bản sẽ làm người đang sửa lưới hoặc đang mở W35 bị báo xung đột mỗi 10 phút, nên không tăng; đổi lại, lần lưu dùng quy tắc “giữ bản dịch đang lưu” (R12) để lưới cũ không xóa bản dịch. Hệ quả: xóa hết tiếng Anh của một ngày rồi lưu (không đổi tiếng Việt) không còn làm ngày về Chưa có; điều này khớp yêu cầu “mọi bản ghi thiếu đều được dịch” (dù không giữ thì lần quét sau cũng dịch lại).
- **Gọi AI.** Mục đích `auto-translation` trên gateway; mỗi hành trình một lời gọi (chia nhỏ khi văn bản dài), thẻ gom chung; lần quét gọi tuần tự, tối đa 20 lời gọi (tệp cấu hình), dừng ngay khi gateway báo RATE_LIMITED hoặc UNAVAILABLE; bản ghi dịch lỗi (câu trả lời không đọc được…) bị bỏ qua 60 phút. Tác vụ chạy ngoài hàng đợi việc nền (không chặn Dịch nháp, Tạo đề xuất của người dùng, vì gateway nhận 2 lời gọi song song) trên bộ lập lịch theo chu kỳ phút `IntervalJobs` (ADR 0012). Không ghi “nhật ký lần gọi” `ai_calls` (bảng đó là lần gọi do người bấm, có người yêu cầu); mỗi lần quét có một dòng nhật ký hệ thống `AUTO_TRANSLATION` với số đã dịch và lỗi.
- **Nút Dịch.** W25 “Dịch các ngày còn thiếu” và W35 “Dịch tất cả” dùng chung API Dịch nháp có sẵn (`POST …/itinerary/translations` nhận nhiều ngày), chia mỗi lần tối đa 5 ngày, điền lưới hoặc ô nhập như Dịch nháp từng ngày (chưa lưu; W35 lưu khi Publish). Không thêm nút cho thẻ QT05: tác vụ dịch thẻ mới trong 10 phút, và thẻ thiếu tên tiếng Anh ở W32 vẫn sửa tại chỗ được (E5.2).

## Ticket 107 · Hoạt động trong ngày trên proposal, tải PDF, lề nội dung ngày (23/11/2026)

Người dùng yêu cầu 23/11/2026 (kèm ảnh trang proposal và ảnh mẫu “Hội An” có giờ từng hoạt động): căn lại đoạn nội dung ngày đang bị co, bổ sung hoạt động trong ngày (không có giờ thì không hiện giờ), sửa lỗi không tải được PDF. Người dùng chọn: bảng hoạt động nằm ở phần “Trên proposal” của ngày trong tab Hành trình; đề xuất AI tự điền; không gồm lưu trú, di chuyển, HDV, khách sạn. Người dùng chọn làm luôn, không duyệt kế hoạch, nên các cách hiểu dưới đây do người làm chọn.

- **Thay cho “Chưa làm” của ticket 100.** Ticket 100 không làm “hoạt động có giờ” của mẫu cũ vì dòng dịch vụ là của NCC (5.3). Nay hoạt động là dữ liệu riêng của ngày (bảng `tour_request_itinerary_activities`), không lấy từ dòng dịch vụ, nên không lộ NCC và có tiếng Anh riêng.
- **Trường.** Giờ bắt đầu, giờ kết thúc (`HH:MM`, không bắt buộc; có giờ kết thúc thì phải có giờ bắt đầu và sau giờ bắt đầu), tên (bắt buộc, ≤ 150), mô tả (≤ 500), tên và mô tả tiếng Anh; tối đa 15 mỗi ngày. Hàng để trống hoàn toàn trên lưới không gửi đi.
- **Tiếng Anh.** Bảng đi theo nút chọn ngôn ngữ của ngày (Tiếng Việt, English): ở English, cột tên và mô tả là bản tiếng Anh (tiếng Việt làm chữ gợi ý), giờ dùng chung. Đề xuất AI trả cả hai thứ tiếng. Dịch tự động (ticket 106) dịch tên, mô tả tiếng Anh còn thiếu; không đổi tình trạng tiếng Anh của ngày (tình trạng đó là của tiêu đề, nội dung, E5.1) và không chặn publish. Proposal tiếng Anh dùng bản tiếng Anh, chưa có thì giữ tiếng Việt (như tên điểm đến QT05). Lưu lưới cũ giữ tiếng Anh đã dịch tự động của hoạt động có cùng tên, mô tả tiếng Việt (như R12 với ngày).
- **Không tính thay đổi sau báo giá (R11)** và không vào bản chụp phiên bản; proposal lấy từ ngày tương ứng của hành trình đang lưu lúc publish (khớp như bữa ăn, điểm đến, ảnh). Lưu thay đổi hoạt động ghi QT03 (“Hoạt động Ngày n”, “Hoạt động tiếng Anh Ngày n”). Tải lại từ báo giá ở chế độ điều chỉnh (R27) giữ hoạt động của ngày giữ nguyên.
- **Tour mẫu KD01-KD02 không có hoạt động**; chép tour mẫu sang hành trình thì ngày chép chưa có hoạt động.
- **Trang proposal, PDF.** Mục “Trong ngày” (“During the day”) dưới nội dung ngày; ngày không hoạt động nào có giờ thì không có cột giờ, ngày có giờ thì hoạt động không giờ để trống ô giờ. PDF ghi cùng mục trên trang của ngày; trang PDF của ngày có chiều cao cố định từ ticket 100, ngày quá nhiều chữ vẫn bị cắt như trước.
- **Lề nội dung ngày.** Đoạn nội dung ngày trên trang web bỏ giới hạn 66 ký tự mỗi dòng, rộng bằng ảnh của ngày.
- **Tải PDF.** Trên máy chủ, PDF dựng được (job `PROPOSAL_PDF` xong, `curl` tải được), nhưng nhật ký ingress lúc người dùng bấm có 3 lần tải bị cắt giữa chừng (499 và nội dung thiếu): nút cũ đọc PDF bằng `fetch` của trang rồi lưu blob, một trình quản lý tải (kiểu IDM) chiếm lời gọi đó thì trang không nhận được gì. Nay nút hỏi `GET …/pdf-status` (không tính lần mở; xếp dựng PDF như `/pdf`), sẵn sàng thì cho trình duyệt đi thẳng tới `/pdf` (tệp đính kèm, trang không đổi) để trình duyệt tự tải.

## Ticket 108 · Nhãn “Hạng khách sạn” thay “Hạng phòng” (23/11/2026)

Người dùng yêu cầu 23/11/2026: yêu cầu Tour phải là hạng khách sạn, không phải hạng phòng, ở cả phần cài đặt. Người dùng chọn **chỉ đổi nhãn**, giữ cơ chế và dữ liệu.

- **Chữ trên màn.** Trường Hạng phòng của KD06.1, KD06.3 (bảng trượt Tính giá), dải nhắc ở tab Hành trình, thông tin yêu cầu, bảng so sánh khi xung đột, cột của tệp xuất KD05 và câu “Sửa số khách, thời gian, hạng … không đổi báo giá đã lưu” đọc là **Hạng khách sạn**. Ở RSD này, “hạng phòng” của yêu cầu và của điều kiện tính đọc là hạng khách sạn.
- **Cơ chế không đổi.** Vẫn là danh mục `room-classes` của QT05 (nay mang tên Hạng khách sạn, xem `docs/rsd/QT05/GHI-CHU-LAM-VIEC.md` mục Ticket 108); R13 vẫn chọn dòng giá theo giá trị đó, chưa chọn thì lấy hạng giá thấp nhất. Code, API, DB giữ tên `roomClass`.
- **Ngoài phạm vi (giữ chữ “Hạng phòng”).** Cột hạng phòng của dòng giá DH03/DH05, bộ lọc tra cứu dịch vụ DH04, rooming list DH08.4 và mẫu QT04, nhật ký QT03 (trường “Hạng phòng”), proposal. Đổi các chỗ này khi người dùng yêu cầu.
