# Ghi chú làm việc · RSD DH08 v2.9

## Cập nhật 12/11/2026 theo quyết định phase coding

**Tệp:** `git mv` v2.8 → `RSD-DH08-Ho-so-Tour-v2.9.md`. Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md` (bản sửa 12/11/2026), ADR 0001–0006. Không đánh số lại L, E, R, W, AC.

**Đã sửa:**
- *Q1 phân quyền:* 1.4 đổi thành “Quyền mặc định theo vai trò”, cấu hình ở QT02; bỏ phạm vi bản ghi (Kinh doanh chỉ xem hồ sơ của Booking mình phụ trách). Mở lại Tour là thao tác riêng, mặc định Điều hành và Quản trị; bỏ luật “chỉ Điều hành phụ trách mở lại, Quản trị chỉ mở khi người phụ trách ngừng hoạt động”. Hộp thoại Mở lại Tour: lý do bắt buộc, Điều hành phụ trách mới tùy chọn (BOI-CANH “có thể chọn”). Sửa 1.3, 1.4, 2.1, 2.2, L8.4, W75, R16, E8.10, 5.2, AC02, AC34, AC73. E3.10: cảnh báo đổi thành “Cần chuyển người phụ trách Booking ở KD08” (người có quyền Chuyển phụ trách chuyển, không riêng Quản trị).
- *C3:* bỏ lối vào KD10.2, Survey, chăm sóc sau Tour, “Cần chăm sóc sau Tour” (nguồn nghiệp vụ, 1.2, 2.2, L8.3, L8.4, R16, 5.1, AC01, AC55). Giữ lịch sử Tour ở KD04.2.
- *Q2:* “email nội bộ”, “thông báo nội bộ” → thông báo (L3.12, R05, R14, R16, R18, L8.1, E8.2). Ngưỡng 48 giờ, ngưỡng hộ chiếu, hạn phản hồi Kinh doanh chuyển sang tệp cấu hình hoặc dữ liệu khởi tạo (R04, R17; C2).
- *Q3:* bỏ mọi nhãn “suy ra, chờ xác nhận” trong thân bài (E1.11, E3.10, E3.21, L8.1, L8.4, E8.2, E8.9, R05, R06, R14, R16). Các câu hỏi mở tương ứng ở mục v2.7, v2.5 bên dưới coi là **chấp nhận mặc định (Q3)**.
- *Q5:* bỏ trường cách tạo (Tự động, Thử lại) ở 5.1; tạo hồ sơ, sinh việc, ghi KT01.2, thông báo, lịch sử Tour ghi trong cùng giao dịch (2.4, R14, R16); email đi qua hàng đợi.
- *G1–G3:* 1.3, R08, R17, 5.1, 5.3: hộp thư Gmail chung, tự CC người thao tác, “Đã gửi” = Gmail đã nhận thư, không theo dõi thư bị trả lại; kết nối bằng lệnh CLI.
- *Q16':* thêm L3.16 Đổi NCC/dịch vụ; R02 (Cần hủy, Đã hủy theo Đổi NCC/dịch vụ), R05 (menu, bỏ “Đổi NCC” tại chỗ), R19 (dòng Đổi dịch vụ / NCC dùng cùng cơ chế), L3.12 bước 5–6, 2.3, 5.1, 5.2, AC39 (viết lại), thêm AC77.
- *Q17:* tập cột Pax list là hợp các cột của mọi loại dịch vụ có trong tài liệu (L4.6, R17, 5.3, AC25).
- *Q13':* Tự xếp đưa người lớn lẻ vào phòng đơn kèm ghi chú (L4.5, 5.1, thêm AC78).
- *Q8:* bỏ “Giữ bản của tôi”, chỉ Tải lại (2.4, AC35). *Q9:* R15 làm tròn half-up. *Q19:* R13, E7.1 20 MB, thêm XLSX, DOCX. *Q23:* R04 48 giờ theo giờ lịch, R18 ngày làm việc theo QT05 Ngày nghỉ lễ (thêm AC79). *Q6:* chỉ báo theo thời gian tính lúc đọc (2.3, R04, E3.11). *K6:* “NCC ngừng sử dụng” → “NCC ngừng dùng”. *U2:* 2.4 thêm nguyên tắc hỏi xác nhận. *U5:* trường chỉ đọc hiện dạng chữ (2.4).

**Tự đơn giản hóa giao diện (U6):**
- Chip “Việc của tôi” ở DH08.2 đổi thành “Của tôi” để không trùng tên trang Việc của tôi (L2.1).
- Nút Thử lại khi lỗi tải đổi thành Tải lại (2.4, E1.1); E1.8 bỏ nút Thử lại, bấm Áp dụng thay đổi lần nữa.
- W76 và W78 dùng chung một hộp thoại; W78 chỉ là trường hợp người phụ trách ngừng hoạt động hoặc chưa giao, có lời nhắc chọn người mới.
- Bảng trượt Đổi NCC/dịch vụ không có wireframe riêng, theo bố cục W13 và W25.

**Hình chưa cập nhật (đã ghi dưới hình):** W07 (lý do “phạm vi phân công”, nút Thử lại), W09 và W39 (đổi dịch vụ tại chỗ), W10 (chip Việc của tôi, cùng nền W11–W15), W45 (chưa nêu phòng đơn tự xếp), W48 (cột theo loại NCC), W61, W62 (10 MB), W74 (chăm sóc sau Tour), W76 (thiếu ô người phụ trách mới, câu Survey), W78 (ô bắt buộc, chỉ Quản trị, câu Survey).

**Câu hỏi cho người dùng:**
- Q16' với hạng mục chưa có lần đặt còn hiệu lực (Cần đặt, Cần đặt lại): RSD cho dòng cũ chuyển **Đã hủy** ngay, vì không có gì để hủy với NCC; BOI-CANH chỉ ghi “dòng cũ sang Cần hủy” cho hạng mục đã đặt. R19 cũng áp cùng cơ chế cho thay đổi chương trình Đổi dịch vụ / NCC (trước đây đổi tại chỗ). Cần xác nhận.
- R08 (chưa rõ đã gửi): với scope chỉ `gmail.send` (G3), hệ thống không tra được hộp thư; “tra theo mã gửi” chỉ còn tra trạng thái việc gửi trong hàng đợi. Khi Gmail API hết thời gian chờ thì không biết Gmail đã nhận thư hay chưa. Giữ nguyên văn bản cũ (Đang kiểm tra, rồi Gửi lại kèm cảnh báo có thể trùng); cần chốt cách xử lý.
- Mã quyết định cũ trong RSD (Q1B, Q2B, Q3 ngày 10/11/2026; “quyết định Q5” của rà soát) trùng ký hiệu với mã phase coding. Đã ghi chú ở mục Thay đổi v2.9, chưa đổi tên; có muốn đổi sang tiền tố khác không.

## Cập nhật v2.7 (12/11/2026) · Rà soát lần hai

**Tệp:** lúc bắt đầu thư mục có v2.5; trong lúc sửa, một phiên khác (P&L dự tính cho QT09) đã nâng lên v2.6, ghi đè tệp v2.6 tôi đang sửa và xóa v2.5. Vì vậy tôi lấy v2.6 của phiên đó làm gốc (giữ nguyên R15 “Lưu P&L dự tính”, 1.2 lối vào QT07–QT12, 5.1, AC67), áp lại toàn bộ sửa của rà soát lần hai, nâng lên v2.7 và xóa v2.6 (đã kiểm tra v2.6 không đổi từ lúc sao chép đến lúc xóa). AC mới đánh từ AC68 vì AC67 đã được phiên kia dùng.

**Người dùng chốt (rà soát lần hai, ghi ở `docs/rsd/BOI-CANH-DU-AN.md`):** (1) luôn một email cho mỗi (NCC, loại việc), không tách theo mẫu hay loại dịch vụ; email nhiều loại dịch vụ dùng mẫu dự phòng Mọi loại dịch vụ; (2) hồ sơ Đã đóng không có người phụ trách hoặc người phụ trách ngừng hoạt động thì Quản trị hệ thống mở lại, kèm lý do và chọn Điều hành phụ trách mới.

**Lý do từng sửa:**
- *Tỷ giá:* QT05 R13 định nghĩa tỷ giá có hiệu lực (ngày gần nhất ≤ ngày cần). DH08 cũ khóa Lưu quyết toán khi thiếu đúng ngày, trái QT05; nay chỉ khóa khi không có ngày nào ≤ ngày cần, và ghi ngày lấy tỷ giá (cột Ngày tỷ giá ở W72). E8.3, R15, AC31, AC66.
- *Phí hủy NCC:* L3.8 và KT01 R09 ghi phí hủy cho lần đặt Đã hủy, nhưng bước 1 chỉ có dòng cho dịch vụ đã xác nhận nên phí hủy bị bỏ sót trong chi phí thực tế. Thêm dòng Phí hủy NCC (phí > 0; đã liên kết KT01 thì theo số KT01, tính một lần). Câu ở 2.2 “mở Quyết toán để ghi phí hủy” sai với L3.8, đã sửa. L8.1, R15, AC68.
- *Mẫu Pax list, Rooming list:* QT04 R07 và BOI-CANH (Tự khớp mẫu) chốt mỗi loại tài liệu một mẫu Đang dùng, DH08 không cho chọn. Bỏ ô chọn ở W47; cũng bỏ liên kết “Đổi mẫu” ở W24 vì cùng nguyên tắc.
- *Gộp email:* khóa cũ (NCC, loại việc, mẫu) có thể tách email cùng NCC cùng việc, trái quyết định (1). R04 viết lại, kèm cách khớp mẫu và ngôn ngữ (Ngôn ngữ giao dịch của NCC ở DH03 v1.3, mặc định Tiếng Việt; mẫu không có bản ngôn ngữ đó thì Tiếng Việt theo QT04 R07).
- *Bản thay đổi chương trình treo:* khi Booking hủy hoặc hồ sơ kết thúc, bản Chờ áp dụng không còn đường đi; thêm trạng thái Không áp dụng (E1.11, R19) và chặn Áp dụng khi Booking Đã hủy (L1.5).
- *Mở lại Tour:* theo quyết định (2). Thêm W78 (W77 đã bỏ ở v2.5, không dùng lại), E8.10, AC73; R16, L8.4, 1.4, 2.1, 2.2.
- *Câu theo trình tự cũ:* 1.1, 1.2 (lối ra KD04.2) sửa theo Đóng Tour là nút ở header, quyết toán độc lập.
- *Chuyển sang Điều hành (theo yêu cầu điều phối):* KD08 v1.4 R09 ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking, không phải phiên bản báo giá mới nhất; sửa 1.3, L1.5, R19. Nguồn nghiệp vụ thêm KD03-KD04 v1.3.
- *Cách tạo:* DH07 v1.6 ghi trường cách tạo do DH08 sở hữu; thêm lại vào 5.1 (v2.5 đã bỏ).
- *Số minh họa (theo yêu cầu điều phối):* đợt 2 BK-2610-0137 26.849 EUR là lỗi gõ; số đúng 26.894 EUR (khớp KT01 AC04, AC05). Khi thu đủ đợt 2 thì Booking tất toán (KT01 AC05), nên bỏ khoản “còn phải thu 45 EUR” cũ. Doanh thu 315.236.100 + 26.894 × 27.480 (739.047.120) = 1.054.283.220 ₫; P&L 1.054.283.220 − 871.230.000 − 2.500.000 = 180.553.220 ₫, biên 17,1%. Phần đầu các ảnh quyết toán ghi Phải thu còn 0 EUR.

**Suy ra, chờ xác nhận (chấp nhận mặc định, Q3):**
- E1.11: Kinh doanh nhận thông báo và KD08 hiện trạng thái Không áp dụng.
- E3.21: yêu cầu đổi lịch trình Chờ Kinh doanh tự Đã rút khi hồ sơ sang Đã kết thúc (tương tự E3.15).
- L8.1: dòng phí hủy chỉ đọc trong bước 1; sửa phí theo R10 ở DH08.3 hoặc KT01.
- L8.4 bước 2: Quản trị mở lại hồ sơ chưa từng có người phụ trách thì điền người thực hiện cho việc Giao người phụ trách như L1.2; thay người ngừng hoạt động thì không đổi người thực hiện.
- W71: dòng phí hủy minh họa 600.000 ₫ (xe tiễn Đà Nẵng, Hoàng Long) nằm trong tổng chi phí dịch vụ 866.848.000 ₫ (giảm tương ứng ở 5 dịch vụ ẩn), để không đổi các số tổng.

**Wireframe:** dựng lại W24, W33, W47, W48, W49 (dòng chỉ đọc “Mẫu đang dùng”), W71 (dòng phí hủy), W71a, W72 (cột Ngày tỷ giá, dòng 21/11 lấy tỷ giá 20/11, số mới), W73, W74, W75, W76; thêm W78 (người dùng Quản trị hệ thống trong `lib.js`). Đã chạy `sync-md.js`, `indent-images.js`; `check-rsd.js --final`: 74 ảnh, 74 mã W; W77 chỉ còn được nhắc trong mục Thay đổi, đúng chủ ý.

**Mâu thuẫn còn lại ngoài phạm vi:** KD08 cần hiện trạng thái Không áp dụng của thay đổi chương trình và thông báo yêu cầu đổi lịch trình đã rút khi hồ sơ kết thúc; QT01 cần biết Quản trị có quyền Mở lại Tour ở DH08 (BOI-CANH đã ghi); DH07 cần hiện hồ sơ Đã đóng có người phụ trách ngừng hoạt động để Quản trị xử lý (nếu muốn có lối vào).

## Cập nhật v2.6 (12/11/2026) · Lưu P&L dự tính cho báo cáo QT09

**Nguồn:** RSD QT06-QT12 v1.1; người dùng đồng ý DH08.8 lưu P&L dự tính VND.

**Đã sửa:** R15 (thêm mục Lưu P&L dự tính), 5.1 (đối tượng Quyết toán thêm giá bán, giá vốn, P&L dự tính VND), 1.2 (đích khoan sâu từ QT07, QT09, QT11, QT12), thêm AC67. Không đổi wireframe. Đổi tên tệp lên v2.6, xóa v2.5.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):** quy VND theo tỷ giá ngày lưu của loại tiền báo giá (cùng khối Tỷ giá quy đổi, Kế toán sửa được); Booking đã hủy để trống P&L dự tính.

## Cập nhật v2.5 (12/11/2026) · Đóng Tour không cần quyết toán; Kế toán không làm chốt chặn

**Người dùng chốt (yêu cầu riêng của doanh nghiệp, ghi ở `docs/rsd/BOI-CANH-DU-AN.md`):** (1) không có luồng duyệt; (2) Kế toán (KT01) không làm chốt chặn hay điều kiện cho Kinh doanh và Điều hành. Hệ quả ở DH08: Đóng Tour chỉ cần hồ sơ Đã kết thúc; quyết toán là việc của Kế toán, lưu được khi Đã kết thúc hoặc Đã đóng, không cần Mở lại Tour. Kèm theo: hồ sơ do DH07 tự tạo ngay khi Booking được lưu, bỏ điều kiện thanh toán và Tạo sớm (RSD DH07 v1.5 R01). Quyết định này thay phần “phải lưu quyết toán mới mới được đóng lại” của Q2 (bảng 10/11/2026 bên dưới); phần lưu nhiều phiên bản và Điều hành phụ trách mở lại kèm lý do giữ nguyên.

**Lý do:** điều kiện “có quyết toán hiện hành” làm Điều hành phải chờ Kế toán mới đóng được hồ sơ, trái quyết định (2). Nút khóa W77 và trạng thái phiên bản “Trước mở lại” chỉ phục vụ điều kiện đó nên bỏ.

**Đã sửa:** giữ tệp `RSD-DH08-Ho-so-Tour-v2.5.md` (lúc nhận việc thư mục chỉ còn tệp v2.5, không có tệp v2.4 để xóa); mục Thay đổi ở v2.5 tách hai nhóm. Nguồn nghiệp vụ lên DH07 v1.5, DH01 v1.3, KD07 v1.2, KD08 v1.3, KT01 v1.3. Mục 1.2 (lối vào DH07 theo tab đích DH07 R10, tự tạo khi Booking được lưu; KT01.3 lọc Tour chưa quyết toán gồm cả Đã đóng), 1.3 (KT01 không là điều kiện cho Điều hành), 1.4 (Kế toán lưu quyết toán khi Đã kết thúc hoặc Đã đóng; ngoại lệ chỉ đọc sau khi đóng), 2.1 (nút Đóng Tour luôn bấm được; chỉ báo Đã quyết toán hoặc Chưa quyết toán), 2.2 (bảng chuyển trạng thái), 2.3 (bỏ “Trước mở lại”; thêm trạng thái chuyển của bước 1), 3.8 (mở đầu, L8.1–L8.4), E8.2 (thay nội dung), E8.3, E8.7, E8.8, E8.9, R14, R16, 5.1 (bỏ trường cách tạo; thêm đối tượng Chi phí thực tế bước 1), 5.2, AC33, AC34, AC53, AC56, thêm AC65, AC66. Giữ nguyên R10, E7.2, E2.1 (ràng buộc toàn vẹn dữ liệu).

**Wireframe:** bỏ W77 (xóa `W77.png`, `html/W77.html`, khóa trong `captions.js` và `screens-b.js`; mã không dùng lại). Hàm `steps` (3 bước) thay bằng `parts` (2 phần). Dựng lại W71, W71a, W72, W73, W74, W75, W76; sửa chú thích W71, W71a, W73–W76. Đã chạy `sync-md.js`, `indent-images.js`; `check-rsd.js --final`: 73 ảnh, 73 mã W; W77 chỉ còn được nhắc trong mục Thay đổi (v2.3, v2.5), đúng chủ ý.

**Tự quyết về bố cục:**
- Tab Quyết toán còn 2 phần: (1) Chi phí thực tế · Điều hành, (2) Đối chiếu và P&L · Kế toán. Đóng Tour là nút ở header của Điều hành khi Đã kết thúc; dòng phần có chú thích nhỏ “Đóng Tour ở header, không phụ thuộc quyết toán” (chỉ hiện với Điều hành khi Đã kết thúc). L8.3 ghi rõ độc lập với L8.2.
- Chỉ báo Chưa quyết toán (vàng) hoặc Đã quyết toán (xanh) đặt ở dòng 1 của header, cạnh nhãn trạng thái.
- W73 đổi sang góc nhìn Kế toán, có bảng phiên bản. W74 dùng nền W71 (chưa quyết toán, bước 1 chưa chuyển) để thể hiện đủ các mục nhắc. W75 là hồ sơ Đã đóng, Chưa quyết toán, bước 1 gắn nhãn Chuyển khi đóng Tour. W76 đổi lý do mở lại sang sửa dữ liệu điều hành (phí chờ của nhà xe, ghi chi phí phát sinh).

**Suy ra, chờ xác nhận (chấp nhận mặc định, Q3):**
- Đóng khi bước 1 chưa chuyển Kế toán: chuyển số đã lưu; ô chưa có số lưu lấy giá gợi ý (giá NCC xác nhận); bước 1 đánh dấu Chuyển khi đóng Tour; Kế toán nhận thông báo nội bộ (E8.2, R16).
- Điều hành sửa chi phí thực tế đến khi đóng Tour, không còn khóa khi Kế toán lưu quyết toán (trước đây khóa, là một dạng phụ thuộc Kế toán). Sửa sau khi đã có phiên bản Hiện hành thì Kế toán nhận thông báo và lưu phiên bản mới nếu cần (L8.1).
- Hộp thoại đóng chỉ hiện mục nhắc nào thực sự xảy ra.

**Ảnh hưởng màn khác (đã đối chiếu, không sửa):** RSD DH07 v1.5 (R10 tab đích, chỉ báo Chưa quyết toán, Chờ đóng Tour) và KT01 v1.3 (chip Chưa quyết toán gồm Đã đóng, E2.9, lưu quyết toán khi Đã đóng không cần mở lại) đã khớp. Các RSD DH01, DH02, DH03, DH06, KD03-KD04, KD06, KD10, QT04 còn dẫn “DH08 v2.x” cũ nhưng không dựa vào điều kiện đóng cũ; không RSD nào khác còn “Trước mở lại” hay W77.

## Cập nhật v2.5 (12/11/2026) · Đặt dịch vụ theo NCC, email chung

**Người dùng hỏi:** dịch vụ cùng NCC được đặt chung một email thì xem thế nào; dịch vụ cùng NCC nhưng khác trạng thái (do thay đổi) thì có nhiều email khác nhau, xem thế nào. **Người dùng chốt:** khác loại việc thì không gộp; cùng NCC, cùng loại việc thì chung email (ghi ở `docs/rsd/BOI-CANH-DU-AN.md`).

**Đã sửa:** tệp mới `RSD-DH08-Ho-so-Tour-v2.5.md`, xóa v2.4. Mục 2.4 (độ rộng bảng trượt), L1.5 bước 3 (nút Soạn email theo NCC trên banner W39), L3.1, L3.5, L3.10; thêm L3.13 (xem theo NCC, soạn email cho một NCC), L3.14 (Email với NCC), L3.15 (ghi kết quả cho cả email), E3.17–E3.20; R04 (khóa gộp NCC, loại việc, mẫu), R05, R09; 5.1 (Email gửi ra ngoài có danh sách hạng mục và lần đặt), 5.2, 5.3; AC60–AC64.

**Wireframe:** thêm W20a, W22a, W26b, W29a. Thanh lọc DH08.3 có nút chuyển Theo dịch vụ / Theo NCC (sửa `bkChips`), nên dựng lại toàn bộ 74 ảnh. Dữ liệu minh họa: xe tiễn Đà Nẵng đổi NCC từ Xe Sơn Trà sang Vận tải Hoàng Long (HL-55822), đặt chung email với xe đón Nội Bài, để có ví dụ một NCC có 2 dịch vụ khác việc. Đã chạy `sync-md.js`, `indent-images.js`; `check-rsd.js --final`: 74 ảnh, 74 mã W, sạch.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):**
- Nút trên dòng chỉ gửi email cho dịch vụ của dòng; muốn gộp thì dùng Soạn email cho NCC (E3.20). Không tự gộp để tránh gửi kèm việc người dùng chưa kiểm tra.
- Loại việc Đặt gồm đặt, đặt lại, đặt phần còn thiếu (cùng một email nếu cùng NCC, cùng mẫu).
- Chế độ Theo NCC: nhóm có việc chờ gửi mở sẵn, xếp trước; nhóm không có việc chờ gửi thu gọn ở cuối; chip lọc chỉ lọc dòng, nút nhóm luôn tính mọi việc chờ gửi của NCC; chế độ xem nhớ theo người dùng.
- Ghi kết quả cho cả email lưu trong một giao dịch: có dòng nhập sai thì không lưu dòng nào.

**Ảnh hưởng màn khác:** QT04.2 cần mẫu email cho nhiều dịch vụ (vòng lặp danh sách dịch vụ) với cả 3 loại việc. Các RSD khác còn dẫn “DH08 v2.4” làm nguồn đồng bộ; nội dung chúng dẫn không đổi nên chưa sửa.

## Cập nhật v2.4 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn giữa 16 RSD

**Theo quyết định người dùng (ghi ở `docs/rsd/BOI-CANH-DU-AN.md`):** Q2 thay đổi chương trình qua KD06 chế độ điều chỉnh rồi Chuyển sang Điều hành ở KD08 (tự ghi Chốt, Booking lên phiên bản mới, phiên bản cũ Đã thay thế); “Gửi Điều hành” bỏ. Q5 loại tiền phải trả theo lần đặt, điền sẵn theo dòng giá DH03, sửa được ở DH08.3. Quyết định phụ: bỏ lọc NCC theo hạng sao.

**Đã sửa:** tệp mới `RSD-DH08-Ho-so-Tour-v2.4.md`, xóa v2.3. Mục 1.2 (lối vào DH07 tự tạo/Tạo sớm, KD08 Chuyển sang Điều hành, KD10.2), 1.3 (luồng thay đổi chương trình; Kinh doanh chỉ ghi ở DH08.4), 1.4 (thêm cột Quản trị hệ thống, chỉ xem), 2.1 (Điều hành phụ trách có thể trống), 2.2, 2.3; L1.2, L1.5, E1.3, E1.6, E1.9, E1.10 (chặn từ Đã kết thúc); L2.2; L3.5, L3.7, L3.8 (phí hủy theo DH03 R08, không có thì trống bắt buộc nhập), L3.9, L3.12; E3.1 (bỏ lưu email vào DH03, thay liên kết DH03.1), E3.10 (thay nội dung), E3.16 mới (hủy Booking khi Đang diễn ra); L4.1, E4.7; L5.2; L8.2–L8.4, E8.8 (KT01 có giao dịch mới), E8.9 mới; R01, R07, R10, R14, R15, R16, R18, R19; 5.1, 5.2; AC01, AC38, AC42, AC45, AC49–AC59 mới.

**Wireframe dựng lại:** W02, W08, W09, W12, W26, W28, W31, W33, W36, W37, W39, W39a, W51, W72, W76. `captions.js` bỏ các khóa trùng (W08, W09, W35, W37) và W38 không có hình. Đã chạy `sync-md.js`, `indent-images.js`; `check-rsd.js --final`: 70 ảnh, 70 mã W, sạch.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):**
- E3.10: người phụ trách Booking ngừng hoạt động thì vẫn gửi được; người nhận yêu cầu đọc theo người phụ trách Booking hiện tại, Quản trị chuyển Booking thì yêu cầu chuyển theo.
- R10: lần đặt đã có khoản phải trả thì loại tiền phí hủy khóa theo khoản (suy từ KT01 R04: giao dịch cùng loại tiền với khoản).
- R14: Booking hủy khi Đang diễn ra thì kết thúc Tour bình thường, không ghi lý do “Booking đã hủy”, nên khi đóng vẫn ghi lịch sử Tour (đoàn đã đi một phần). Dịch vụ “chưa dùng” = ngày sử dụng đầu tiên sau hôm nay.
- R15, E8.9: Booking đã hủy mà KT01 chưa điều chỉnh sau hủy thì khóa Lưu quyết toán.
- R07: thêm, bớt người ở DH08.4 không đổi số khách; số khách so sánh là số khách Booking theo phiên bản đang áp dụng.
- R19: Đổi dịch vụ sinh việc theo dịch vụ mới ngay khi áp dụng (kể cả khi lần đặt cũ còn chờ hủy).
- Quản trị hệ thống xem mọi hồ sơ, chỉ xem (theo KD07; chờ xác nhận). Đã thay bằng Q1, Q25 ở v2.9.

**Mâu thuẫn còn lại ở màn khác (không thuộc phạm vi DH08):**
- RSD KD10 E4.4 ghi “khi Tour đóng lại, ngày đến hạn Survey tính từ ngày đóng mới”, trong khi BOI-CANH ghi Survey dùng ngày đóng lần đầu. DH08 chỉ ghi “mở lại thì Survey chưa gửi bị bỏ” và giữ hai mốc ngày đóng; KD10 cần chốt dùng mốc nào. Không còn áp dụng: KD10 và Survey bỏ theo C3 (v2.9).
- KD08 cần hiện yêu cầu đổi lịch trình từ DH08 (R18) cho người phụ trách Booking.
- Hồ sơ kết thúc vì Booking đã hủy có được đưa vào Survey, Cần chăm sóc sau Tour hay không: DH08 chỉ quy định không ghi lịch sử Tour; KD10, KD03-KD04 cần xác nhận. Không còn áp dụng: bỏ theo C3 (v2.9).

## Cập nhật v2.3 (12/11/2026) · Đồng bộ với RSD KT01

**Người dùng chốt:** quyết toán quy đổi ngoại tệ theo tỷ giá ngày giao dịch (phần đã thu, đã trả theo ngày giao dịch ở KT01; phần còn lại và khoản chưa liên kết theo ngày lưu quyết toán; tỷ giá từ bảng tỷ giá Kế toán, sửa được). Nâng DH08 lên v2.3.

**Đã sửa:** đầu tài liệu, 1.2 (Hủy không phí vào KT01.2), 2.1 (phải thu còn, phải trả còn theo loại tiền gốc), kết quả luồng hủy lần đặt, L8.2, E8.3, R15, 5.2, AC17, AC31, AC32. Wireframe: số mặc định ở phần đầu đổi thành 26.894 EUR · 81.100.000 ₫ (khớp KT01 ngày 12/11); ảnh quyết toán dùng 45 EUR · 38.650.000 ₫ (27/11); W72 thêm khối Tỷ giá quy đổi; W71a, W72, W73, W74, W75, W76, W77 dùng số mới (doanh thu 1.054.285.020 ₫, chi phí 871.230.000 ₫, P&L 180.555.020 ₫, biên 17,1%). Chụp lại toàn bộ ảnh. Xóa tệp v2.2 theo quy ước dự án.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):** tổng chi phí dịch vụ thực tế nâng từ 406.848.000 ₫ lên 866.848.000 ₫ để P&L hợp lý với giá trị Booking 38.420 EUR (thay đổi nằm ở 5 dịch vụ ẩn trong dòng “… 5 dịch vụ khác”); 45 EUR còn phải thu là phí ngân hàng khách chưa chuyển bù (khớp lý do hủy giao dịch ở RSD KT01 W11). Tên NCC trong DH08 (Lotus Hanoi, Ngọc Trai 1.850 USD) vẫn khác ví dụ ở KT01 (Apricot, Paradise Elegance 2.520 USD); chưa đồng bộ vì phải dựng lại phần lớn ảnh DH08.3.

**Thay thế mục 5 ở dưới:** quy tắc tỷ giá cũ (khoản liên kết dùng tỷ giá KT01) không còn dùng.


Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (10/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0a | Hướng làm | Viết mới từ danh sách màn Level 1, không kế thừa RSD DH08 v1.0 trong skill | Toàn bộ tài liệu |
| Q0b | Định dạng | Markdown và ảnh PNG, đóng ZIP | Mục 6, gói bàn giao |
| Q0c | Nghiệp vụ Inbound thêm | HDV theo ngôn ngữ; visa, hộ chiếu, chuyến bay; tổng hợp yêu cầu riêng | DH08.4, DH08.5, R06, R07, R11, R12 |
| Q1 | Booking bị hủy khi đã có lần đặt | B: tự soạn email hủy hàng loạt theo NCC; Điều hành kiểm tra rồi gửi | L3.9, R14, W06, W32, AC18 |
| Q2 | Sửa quyết toán, mở lại Tour | B: lưu nhiều phiên bản trước khi đóng; Điều hành phụ trách mở lại kèm lý do; phải lưu quyết toán mới mới được đóng lại | L8.4, R16, W76, W77, AC34 |
| Q3 | HDV lệch ngôn ngữ, trùng lịch | Trùng lịch thì chặn; lệch ngôn ngữ thì cảnh báo và bắt buộc lý do | E5.1, E5.2, R12, W51, W52, AC26, AC27 |

## Thiết kế do người viết tự quyết, cần xác nhận (chấp nhận mặc định, Q3)

1. **Phạm vi bản ghi.** Điều hành và Kế toán xem mọi hồ sơ; Kinh doanh chỉ xem hồ sơ của Booking mình phụ trách (mục 1.4).
2. **Tách quyền sửa khách.** Kinh doanh sửa thông tin khách; Điều hành không sửa. Đây là đề xuất có sẵn trong nguồn, nay đưa vào làm quy tắc.
3. **Bắt đầu Tour không bị chặn** khi còn mục chưa sẵn sàng; hộp thoại chỉ cảnh báo (W03).
4. **Kết thúc hồ sơ khi Booking đã hủy.** Từ Mới tạo chuyển thẳng sang Đã kết thúc, sau khi đã gửi đủ yêu cầu hủy, để quyết toán phí hủy (R14).
5. **Tỷ giá quyết toán (cần Kế toán xác nhận).** Khoản đã liên kết dùng tỷ giá KT01; khoản chưa liên kết dùng tỷ giá ngày phát sinh từ bảng tỷ giá Kế toán; quyết toán tính bằng VND (R15).
6. **Ngưỡng cảnh báo.** Hộ chiếu: 6 tháng tính từ ngày bắt đầu Tour. Chờ phản hồi: 48 giờ. Cả hai cấu hình được.
7. **Gửi Pax list và Rooming list qua email.** Nguồn chỉ ghi “xuất”; bản này thêm gửi, chọn tập cột theo loại NCC (W48).
8. **Chi phí phát sinh đã ghi công nợ.** Nguồn ghi “chờ đặc tả”; bản này chỉ cho thêm chứng từ và ghi chú, giá trị sửa ở KT01 (E7.2).
9. **Trạng thái Xác nhận một phần** được thêm vào danh sách trạng thái hạng mục của nguồn.
10. **Tự hoàn tất checklist theo sự kiện** (R03).

11. **Báo Kinh doanh đổi lịch trình (yêu cầu 11/11).** Điều hành gửi yêu cầu từ W28/W36. Kinh doanh xử lý bằng cách sửa lịch trình ở màn Kinh doanh rồi gửi Điều hành; không có màn phản hồi trong DH08. Các điểm sau do người viết tự quyết: hạn phản hồi 2 ngày làm việc; quá hạn thì nhắc một lần; yêu cầu tự đóng khi thay đổi chương trình chạm tới hạng mục được áp dụng.
12. **Thay đổi chương trình (đã chốt 11/11).**
    - Luồng: Kinh doanh sửa lịch trình → Gửi Điều hành → hồ sơ hiện banner → Xem thay đổi (so sánh bản cũ với bản mới) → Áp dụng thay đổi → hệ thống cập nhật các mục thay đổi trong hồ sơ.
    - Áp dụng cả phiên bản trong một lần.
    - Dịch vụ đã gửi hoặc đã xác nhận bị ảnh hưởng chuyển Cần hủy hoặc Cần điều chỉnh, kèm email soạn sẵn.
    - Tự quyết thêm: không có thao tác trả lại Kinh doanh trong DH08; phiên bản mới thay thế phiên bản đang chờ; trong lúc chờ, hạng mục bị ảnh hưởng không cho đặt; thay đổi dữ liệu khách sau lần đặt (R07) cũng dùng trạng thái Cần điều chỉnh để thống nhất.

## Thay đổi cần làm ở màn khác

- **DH01.** Thêm thuộc tính “Tự hoàn tất khi” cho từng công việc mẫu.
- **DH06.** Thêm trường Ngôn ngữ (chọn nhiều) cho nhân sự.
- **QT04.2.** Thêm trường tự điền `{yeu_cau_rieng}`, mẫu email hủy và cập nhật, và tập cột Pax list theo loại NCC.
- **Quản trị.** Cấu hình danh mục nhãn yêu cầu riêng, hai ngưỡng cảnh báo và hộp thư chung.
- **Trung tâm thông báo (dùng chung).** Kinh doanh và Điều hành nhận thông báo yêu cầu và phương án đổi lịch trình; liên kết mở DH08.3 kèm bảng trượt yêu cầu.
- **KD08.** Sửa lịch trình, nút Gửi Điều hành, hiển thị trạng thái Chờ áp dụng / Đã áp dụng; nhận thông báo yêu cầu đổi lịch trình từ Điều hành. Ghi nhận chênh lệch giá bán khi phương án đổi lịch trình ảnh hưởng tới khách. Hủy Booking phát sự kiện cho DH08 (R14). Booking cần có trường Ngôn ngữ phục vụ, dùng làm mặc định.
- **KT01.2 và KT01.3.** Nhận danh sách nhiều khoản khi mở từ DH08.7 (W63).

## Kiểm tra đã thực hiện

- Đã chạy `wireframes-src/check-rsd.js --final` (bản Node của `scripts/check-rsd.py`, vì máy không có Python): 57 ảnh, 57 mã W, không lỗi bảng hay đường dẫn; mọi mã W được dẫn chiếu đều có hình.
- Đã xem trực quan khoảng 20/57 ảnh, phần còn lại sinh từ cùng thành phần. Đã sửa tràn chữ ở W01, cột SL ở W20, email CC ở W22 và số liệu P&L ở W72.

## Cập nhật v2.1 (11/11/2026) · đồng bộ RSD DH01 v1.0

- Đổi tên tệp thành `RSD-DH08-Ho-so-Tour-v2.1.md`; bản v2.0 sao lưu ở `docs/rsd/_backup-20261111-truoc-dong-bo-DH01/`.
- L1.2: giao người phụ trách lần đầu điền người thực hiện cho việc có Giao người phụ trách (DH01 R05).
- L2.3, W12, mục 8.3: bảng trượt công việc hiện mẫu, phiên bản, cách tính hạn, hướng dẫn thực hiện chỉ đọc.
- L2.5, R19, mục 8.3: thêm hạng mục sinh việc theo dịch vụ của mẫu hồ sơ đã dùng, phiên bản hiện hành.
- R03: thuộc tính Tự hoàn tất khi đã có ở DH01 R04 (mục “Thay đổi cần làm” → DH01 đã xong).
- R19: hạn tính lại theo mốc của mẫu; hạn sửa tay giữ nguyên.
- Mục 4.1; AC47, AC48 (mới).
- W10, W11, W12: tên và hạn công việc đổi theo mẫu Inbound tiêu chuẩn v4 của DH01 (tổng 12/18 không đổi). Đã chụp lại W10, W11, W12; đã xem W10, W12.
- `check-rsd.js --final`: 79 tham chiếu ảnh, 70 mã W, đạt.

## 12/11/2026 · v2.8 · rà soát lần ba

**Quyết định của người dùng (rà soát lần ba):**
- A. Thời gian và số khách của hồ sơ đổi khi Điều hành bấm Áp dụng. Booking (KD08) nhận giá trị mới ngay khi Chuyển sang Điều hành; hồ sơ giữ giá trị của phiên bản đang áp dụng. Lý do sửa: L1.5 bước 1 ghi “Header đọc Booking nên số khách đã theo phiên bản mới”, R01 và E4.7 so với số khách của Booking, mâu thuẫn với R07 (so theo phiên bản đang áp dụng) và RSD DH07 R11 (thời gian trên dòng đổi sau khi áp dụng). Sửa 1.3, 2.1, L1.5, L4.1, E4.7, R01, R19, 5.1; thêm AC74. Chỉ báo có thay đổi chờ áp dụng dùng banner W08 đã có (banner đã ghi “Booking … đã theo v4 · chưa áp dụng vào hồ sơ”), không thêm chỉ báo mới trên header; không dựng lại W08.
- B. Bỏ danh mục nhãn yêu cầu riêng (nhập tự do) và sức chứa theo hạng phòng (không kiểm tra sức chứa). R17 bỏ hai dòng; R06, L4.1, L4.4, L4.5, E4.4, 5.1, AC12, AC23 viết lại.
- C. Loại tiền khoản phải trả không đổi ở KT01 (Q5): R10 bỏ “và loại tiền”.

**Tự quyết, cần xác nhận (chấp nhận mặc định, Q3):**
- Yêu cầu riêng nhập tự do nhưng vẫn tách hai ô cố định Ăn uống, Phòng (nhóm và loại dịch vụ áp dụng cố định, không cấu hình) để giữ việc chèn đúng câu vào email nhà hàng, khách sạn (R06). Câu tổng hợp gom khách có cùng nội dung (bỏ khoảng trắng thừa, không phân biệt hoa thường), ghi “nội dung (n khách)”; không còn diễn đạt kiểu “2 suất chay” vì nội dung tự do.
- E4.4 giữ lỗi “một khách ở hai phòng trong cùng đợt” (có thể xảy ra sau Sao chép sang đợt khác hoặc khi phiên khác vừa lưu); W46 vẽ lại theo lỗi này, đổi tên “Lỗi xếp một khách vào hai phòng”. Ô phòng hiện “n khách” thay cho “n/sức chứa”.
- Chỉ báo NCC ngừng sử dụng: áp cho Cần đặt, Cần đặt lại, Chờ Kinh doanh (theo cột “chưa gửi NCC” của R19); RSD DH02 R04 chỉ ghi Cần đặt, Cần đặt lại. Chỉ báo chỉ nhắc, không khóa nút; hồ sơ chưa có người phụ trách thì nhóm Điều hành nhận thông báo (suy ra, chờ xác nhận).
- Báo Kinh doanh cho Xác nhận một phần: Đặt phần còn thiếu dùng cùng bảng trượt với Đặt lại (W28), nên nút Báo Kinh doanh ở chân bảng trượt có sẵn; cách ít đổi nhất, không thêm nút trên dòng, không dựng lại W28.
- Mở đặt dịch vụ từ bảng trượt khoản phải trả ở KT01 mở DH08.3 kèm bảng trượt lịch sử (W29) của hạng mục.

**Câu sửa khác:** 1.2 thêm lối KT01 → DH08 (Tour Code, Mở hồ sơ Tour, Mở quyết toán, Mở đặt dịch vụ) và DH08 (Đã đóng) → KT01.3 (Xem công nợ Tour), theo RSD KT01 mục 1.2; AC01 thêm KT01, QT07, QT11, QT12. R12, 5.1 bỏ “DH06 cần thêm trường Ngôn ngữ” (DH06 đã có Ngôn ngữ phục vụ, R02). 2.1 ghi hồ sơ Đã kết thúc giao người phụ trách ở DH07 (header Đã kết thúc không có Thông tin điều hành). Nguồn nghiệp vụ và R04 lên phiên bản theo bảng phiên bản 12/11/2026 (rà soát lần ba). Các dẫn phiên bản cũ trong mục “Thay đổi ở v2.7, v2.5, v2.3, v2.1” là lịch sử, giữ nguyên.

**Wireframe:** dựng lại W41, W44, W45, W45a, W45b, W46; sửa `captions.js` (W41, W46), `screens-b.js`. Đã xem W41, W44, W46.

**Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH08-Ho-so-Tour-v2.8.md --final`: 74 tham chiếu ảnh, 74 mã W, không lỗi (W77 chỉ còn trong lịch sử, mã đã bỏ).

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** L1.2 W02, L2.2, W78, 5.2, AC58: danh sách chọn theo RSD DH06 v1.3 R03 (người phụ trách có vai trò Điều hành; người thực hiện không có tài khoản liên kết Bị khóa); dựng lại W02. R10: khóa loại tiền phí hủy theo khoản bỏ “chờ xác nhận”.

## Sửa sau rà chéo 12/11/2026

- **T9 · E1.9.** Thông báo cho Kinh doanh khi thay đổi chương trình chạm ngày đã qua: do tác vụ nhắc hằng ngày tạo, một lần cho mỗi thay đổi chương trình (RSD CH02 TB-DH08-10), không tạo lúc Chuyển sang Điều hành (người chuyển là người nhận nên sẽ bị bỏ, RSD CH02 R01) và vì điều kiện thường thành đúng do ngày trôi qua. Dòng “Không áp dụng được” tính lúc đọc (Q6). E1.9 không phải cảnh báo cho chính người thao tác: Điều hành thấy dòng ở W09, Kinh doanh là người làm tiếp.
- **L1.2.** Người phụ trách cũ cũng nhận thông báo khi đổi người, như RSD DH07 R08 (RSD CH02 TB-DH07-05).
- **T8 · E3.11, R17.** Nhắc quá hạn phản hồi chạy vào giờ chạy nhắc hằng ngày, tham số chung QT05 R17, chung cho mọi loại nhắc định kỳ.
- Ghi nhận, chưa sửa: R04, R17 ghi Ngưỡng chờ phản hồi NCC ở tệp cấu hình, khác RSD QT05 R17 (tham số chung) (câu hỏi cho người dùng).
- **Kiểm tra.** `check-rsd.py`: 74 ảnh, 74 mã W, không lỗi.

## Bổ sung 12/11/2026 · vai trò HDV (RSD HD01 v1.0, ADR 0007)

**Đã sửa (giữ v2.9, dòng “Thay đổi ở v2.9 (bổ sung 12/11/2026 · vai trò HDV)”):** Nguồn nghiệp vụ; 1.2 (HD01 → DH08.6/7/8, DH08.5 → HD01); 1.3 (ranh giới với HD01); 1.4 (cột HDV, đoạn “Vai trò thuộc phòng HDV”, ngoại lệ ở “Không giới hạn theo bản ghi”, hộ chiếu luôn che với HDV); 2.3 (dòng Nguồn); E1.1; L5.2 bước 3, E5.3; R12 (TB-DH08-11, TB-DH08-12); L6.1, L6.4 mới, E6.2 mới; L7.1 bước 1; L8.1 bước 1; R20 mới; 5.1; AC80–AC86. Không đổi số hiệu cũ.

**Tự quyết (U6):**
- Nguồn theo màn ghi (DH08 là Điều hành, HD01 là HDV); dòng chi phí thực tế lấy nguồn theo lần lưu số gần nhất, Điều hành lưu số khác thì đổi sang nguồn Điều hành; nhật ký, sự cố, chi phí phát sinh giữ nhãn khi Điều hành sửa.
- Điều hành sửa mục Do HDV ghi bằng quyền ghi sẵn có của tab; DH08 trước đây không có sửa nhật ký, nên thêm L6.4 chỉ cho mục Do HDV ghi (W58 mã giữ chỗ, chưa dựng hình). Câu cũ “Không thêm xóa cho Điều hành” bỏ theo quyết định 12/11/2026 (mục dưới).
- TB-DH08-11 gửi cả khi sửa phân công; TB-DH08-12 khi bỏ hoặc đổi sang người khác; đích HD01, người không có `HD01.xem` thì DH08.5. Nhân sự không có tài khoản Đang hoạt động: không ai nhận (E5.3).
- Không dựng lại hình W07, W50, W55, W60, W71; nhãn Do HDV ghi chưa có trên hình.

**Câu hỏi cho người dùng:** câu 1 (khóa mã DH08 với vai trò HDV) và câu 6 (Điều hành xóa mục Do HDV ghi) của `docs/rsd/HD01/GHI-CHU-LAM-VIEC.md` đã chốt theo mặc định Q3 ngày 12/11/2026 (mục dưới).

**Kiểm tra.** `check-rsd.py`: 74 ảnh, 74 mã W, không lỗi.

## Bổ sung 12/11/2026 · HDV chốt thêm (sau khi viết RSD HD01)

Nguồn: BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)” và các mặc định theo Q3 ngay sau đó; RSD HD01 (bổ sung 12/11/2026).

**Đã sửa (giữ v2.9, dòng “Thay đổi ở v2.9 (bổ sung 12/11/2026 · HDV chốt thêm)”):** 1.2 (DH08.1 → HD01 qua TB-DH08-13); 1.4 (bảng: DH08.4 HDV Hiện số, điện thoại khách; DH08.6, DH08.7, DH08.8 Điều hành sửa, xóa mục Do HDV ghi; đoạn “Vai trò thuộc phòng HDV” ghi QT02 khóa; Dữ liệu cá nhân nêu HD01 Hiện số ghi QT03); L1.5 bước 1 (ghi rõ TB-KD08-01) và Kết quả (TB-DH08-13); R12 (TB-DH08-11 khi sửa phân công: đổi vai trò phục vụ, phạm vi, ngày giờ; khớp CH02); R19 Sau khi áp dụng (TB-DH08-13, người nhận, gộp, đích, không báo khi Đóng Tour); L6.4 thêm bước 2 Xóa; E6.2 gồm xóa; thêm E6.3; thêm L7.3 (W64 mã giữ chỗ, chưa dựng hình); L8.1 bước 1 thêm Bỏ số HDV; R20 thêm “Điều hành xóa”, bỏ câu “DH08 không thêm thao tác xóa mục”; thêm AC87–AC90. Không đổi số hiệu cũ.

**Tự quyết (U6):**
- Xóa chỉ áp cho mục Do HDV ghi (quyết định chỉ nói mục do HDV ghi); mục do Điều hành ghi vẫn không có Xóa như trước.
- Ràng buộc xóa giống HDV xóa ở HD01: khoản đã ghi công nợ, sự cố có khoản liên kết đã ghi công nợ không xóa; xóa sự cố kéo theo khoản liên kết Chưa ghi công nợ. Xóa khoản liên kết với sự cố thì sự cố giữ, bỏ liên kết.
- Với chi phí thực tế, “xóa” là **Bỏ số HDV**: dòng về Gợi ý như khi HDV tự xóa số (RSD HD01 L4.3 bước 4).
- Xóa dùng hộp thoại (không hoàn tác, U2); HDV không nhận thông báo khi Điều hành sửa, xóa (quyết định không nêu; tránh thêm loại thông báo).
- TB-DH08-13: người nhận là tài khoản của mọi nhân sự có phân công lúc áp dụng (BOI-CANH “mọi HDV được phân công”; dùng định nghĩa “Tài khoản của nhân sự được phân công” của CH02, bất kể vai trò tài khoản); gộp theo người; người không có `HD01.xem` mở DH08.1 (như TB-DH08-11 mở DH08.5).
- Không dựng hình W58, W64; không chụp lại W08, W09, W55, W60, W71.

**Kiểm tra.** `check-rsd.py`: 74 ảnh, 74 mã W, không lỗi (W58, W64 là mã giữ chỗ không có ảnh, như trước).

## Sửa sau rà soát HD01 12/11/2026 (giữ v2.9)

Ghi tóm tắt ở dòng “Thay đổi ở v2.9 (bổ sung 12/11/2026 · sau rà soát HD01)” đầu RSD.

- **Quyết định A (người dùng chốt):** HDV chỉ thấy nhật ký và sự cố do chính mình ghi. Sửa 1.4 (cột HDV dòng DH08.6), L6.1 (mục Điều hành ghi không hiện ở HD01, nên không cần câu báo “HDV đọc được”), R20 (ý “Phạm vi xem của HDV ở HD01”).
- **T7 · R20:** “Lưu bước 1 chỉ gán nguồn và người ghi cho dòng mà người dùng đổi ô; dòng giữ Gợi ý không có nguồn.” Đã đối chiếu: AC83 (A giữ nhãn Do HDV ghi khi Điều hành không đổi số), RSD HD01 R05 (đã dẫn R20), RSD HD01 AC28 khớp, không phải sửa AC.
- **Nhẹ · R20 Thông báo:** thêm “HDV cập nhật kết quả sự cố → TB-HD01-01”; Kế toán nhận TB-DH08-08 cả khi HDV xóa số và Điều hành bỏ số HDV (khớp RSD CH02 Phụ lục A).
- **Nhẹ · thuật ngữ:** “vai trò phục vụ” ở E5.1, R12 (kiểm tra lệch ngôn ngữ; nội dung TB-DH08-11 dùng tên đoàn theo RSD CH02), AC58.
- **Kiểm tra:** `check-rsd.py` cho RSD DH08: mã thoát 0, 74 ảnh, 74 mã W, không lỗi.

## Dịch vụ đi kèm 12/11/2026

Sửa tại chỗ `RSD-DH08-Ho-so-Tour-v2.9.md`, dòng “Thay đổi ở v2.9 (bổ sung 12/11/2026 · dịch vụ đi kèm)”. Nguồn: BOI-CANH (Dịch vụ đi kèm, Giường phụ), quyết định 4 của người dùng 12/11/2026, RSD DH03 R23, KD06 R07, R13. Thêm E3.22–E3.24, E4.8, R21, AC91–AC99.

**Thay đổi chính:** đi kèm chung hạng mục với dịch vụ chính; đặt, xác nhận, điều chỉnh, hủy cùng lần đặt; email liệt kê đi kèm dưới dịch vụ chính; Đổi NCC/dịch vụ không mang đi kèm cũ, chọn lại đi kèm của dịch vụ mới; thay đổi chương trình thêm, bỏ, đổi số lượng đi kèm của hạng mục đã gửi thì Cần điều chỉnh; phân phòng có ghi chú Giường phụ, Rooming list hiện ghi chú.

**Tự quyết (U6):**
- **Xác nhận một phần:** số xác nhận xét riêng cho dịch vụ chính và từng đi kèm; đi kèm thiếu (kể cả 0) làm hạng mục Xác nhận một phần, chỉ báo Đi kèm thiếu. Phần thiếu của đi kèm chỉ đặt với cùng NCC. Hạng mục có đi kèm thì Đặt lại, Đặt phần còn thiếu chỉ gửi cùng NCC; đổi NCC phải qua Đổi NCC/dịch vụ (để không còn đi kèm của NCC cũ trên lần đặt gửi NCC mới).
- **Giá xác nhận tách phần đi kèm:** mỗi đi kèm có số lượng và đơn giá xác nhận riêng, cùng loại tiền của lần đặt; giá trị lần đặt là tổng, vẫn một khoản phải trả. Phí hủy một số cho cả lần đặt. Chọn tách vì giá phải trả của DH08/KT01 tính theo giá × số lượng, gộp một giá sẽ sai khi đi kèm có số lượng riêng.
- DH08 không có thao tác thêm, bỏ, sửa riêng đi kèm trên hạng mục đã có; chỉ thêm khi Thêm dịch vụ (L2.5) hoặc Đổi NCC/dịch vụ (L3.16); thay đổi khác đi qua điều chỉnh chương trình.
- Đổi NCC/dịch vụ: đi kèm Giường phụ của dịch vụ mới được tích sẵn với số lượng giường phụ cũ; đi kèm khác không tích sẵn.
- Tự xếp phòng không tạo phòng 3 người lớn; n phòng đầu tiên có trẻ em (n = số giường phụ của hạng mục) được ghi chú Giường phụ; lệch số chỉ cảnh báo (không kiểm tra sức chứa như đã chốt). (Sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em; trước đó tạo n phòng 3 người lớn.)
- Đi kèm ngừng dùng ở DH03 với hạng mục chưa gửi: chỉ báo, không khóa, không thông báo riêng.

**Thay đổi cần làm ở màn khác (không thuộc đợt này):**
- RSD DH07 R03 (bóc tách Booking thành hạng mục): đưa đi kèm của dòng dịch vụ vào hạng mục của dịch vụ chính, gộp đêm liền nhau cùng số lượng (DH08 R21).
- RSD KT01 R08 (giá trị phải trả = giá xác nhận × số lượng): đọc giá trị xác nhận của lần đặt gồm phần đi kèm (DH08 R10).

**Hình chưa cập nhật:** W13 (khối Dịch vụ đi kèm), W26, W26b, W27 (dòng đi kèm), W45 (ghi chú Giường phụ). Không thêm mã W.

**Kiểm tra.** `check-rsd.py`: 74 ảnh, 74 mã W, không lỗi.

## Quyết định rà soát 13/11/2026 · phí hủy gợi ý

- **Quyết định rà soát 13/11/2026 (Q-RS25).** Chính sách đổi hủy của hợp đồng chỉ khai % trên tổng giá lần đặt (RSD DH03 R08). L3.8 (bullet Phí hủy gợi ý): phí gợi ý = tỷ lệ của mốc × tổng giá lần đặt (giá NCC xác nhận, chưa có thì giá tham chiếu; gồm phần đi kèm), theo loại tiền của lần đặt, làm tròn half-up; bỏ “mức × căn cứ (đêm đầu, mỗi khách, mỗi phòng)”; NCC tính theo cách khác thì Điều hành sửa tay. Sửa R10 (câu tổng giá lần đặt gồm đi kèm), AC49. Không thêm AC.

## Quyết định rà soát 13/11/2026 (phần điều hành)

- **Quyết định rà soát 13/11/2026 (Q-RS10).** Hủy lần đặt (L3.8, không do Booking đã hủy, Đổi NCC/dịch vụ hay thay đổi chương trình): hạng mục từng được xác nhận chuyển Đã hủy kèm chỉ báo mới **Chưa thay thế**, tính vào số trên tab Đặt dịch vụ, khối Việc cần làm (R01) và bộ lọc Việc cần xử lý · Đặt dịch vụ của DH07, tới khi Điều hành **Thêm dịch vụ thay thế** (nút chính, chạy L3.16 từ hạng mục Đã hủy) hoặc **Bỏ dịch vụ** (L2.6, được phép dù hạng mục có lần đặt và công nợ; hạng mục giữ Đã hủy và lịch sử). Hạng mục chưa từng được xác nhận về Cần đặt (R02 bước 9). R02 bước 1 viết lại: “mọi lần đặt từng xác nhận đều Đã hủy” chỉ tính khi không còn lần đặt còn hiệu lực. Sửa 2.1, 2.3, L2.6, E2.1, L3.1, L3.8 (đoạn kết quả, không đụng phần phí hủy gợi ý), L3.16, R01, R02, R05, 5.1; thêm AC100, AC101. Tự quyết (U6): tên chỉ báo “Chưa thay thế”, tên nút “Thêm dịch vụ thay thế”.
- **Quyết định rà soát 13/11/2026 (Q-RS11).** Hạng mục Xác nhận một phần mà Điều hành Báo Kinh doanh: giữ nhãn, thêm chỉ báo Chờ Kinh doanh; nút chính thành Xem yêu cầu; máy chủ chặn đặt phần còn thiếu khi có chỉ báo; không tính vào số trên tab (như Chờ Kinh doanh); chip Chờ Kinh doanh gồm cả hạng mục này; rút yêu cầu thì mở lại. Sửa 2.1, 2.3, L3.1, L3.6, L3.12 bước 2, L3.16, E3.14, R02, R05, R18, AC76; thêm AC102.
- **Quyết định rà soát 13/11/2026 (Q-RS28).** Ô Điều hành phụ trách trong bảng trượt Thông tin điều hành chỉ đọc, không bắt buộc; đổi bằng nút **Giao** cạnh tên ở header (quyền `DH07.giao-phu-trach`, hồ sơ chưa đóng, kể cả Đã kết thúc; lưu ngay, có Hoàn tác như DH07). Mở lại Tour: ô Điều hành phụ trách mới chỉ có với người có thêm quyền giao; không có thì hồ sơ giữ người cũ; yêu cầu kèm người mới từ tài khoản không có quyền giao bị từ chối vì quyền. Sửa 1.4, 2.1, 2.2, L1.2 (thêm bước 2), L8.4, E8.10, R16, 5.2, AC34, AC73; thêm AC103. Wireframe chưa vẽ lại: W02 (ô chọn người phụ trách), W76, W78 (ô người phụ trách mới).
- **Quyết định rà soát 13/11/2026 (Q-RS13, Q-RS23).** Danh sách chọn người phụ trách (nút Giao, Mở lại Tour) theo vai trò hệ thống Điều hành, không theo nhóm công việc (RSD DH06 R03). Sửa L1.2, L8.4, 5.2, AC58.
- **Quyết định rà soát 13/11/2026 (Q-RS14).** Người thực hiện công việc checklist không gồm nhân sự có tài khoản liên kết chỉ có vai trò thuộc phòng HDV. Sửa L2.2, 5.2, AC58.
- **Quyết định rà soát 13/11/2026 (Q-RS01).** Vai trò phục vụ HDV chính thay “HDV suốt tuyến”. Sửa R12, AC84, AC87.
- Wireframe chưa vẽ lại cho Q-RS10, Q-RS11: W20, W27, W29, W37 chưa có chỉ báo Chưa thay thế, nút Thêm dịch vụ thay thế, chỉ báo Chờ Kinh doanh trên hạng mục Xác nhận một phần.
- **Quyết định rà soát 13/11/2026 (Q-RS15).** HDV chỉ ghi chi phí phát sinh mới ở HD01 khi hồ sơ Đang diễn ra. Sửa 1.4 (cột HDV, dòng DH08.7), R20 (Quy tắc ghi giữ nguyên).

## Cách hiểu đã chọn khi làm khung hồ sơ (ticket 48, 17/11/2026)

- **Tab (2.1, CGD K4.12).** Thanh tab chỉ có các tab đã có nội dung; mỗi ticket làm một tab (59–83) thêm tab đó vào thanh, đúng thứ tự 2.1. Ticket 48 có Tổng quan với khối Lịch trình (L1.1: mỗi ngày số ngày, ngày và tuyến, theo phiên bản chương trình đang áp dụng); khối Việc cần làm trước khởi hành (R01) có ở ticket 59.
- **Nút theo trạng thái (2.1).** Thông tin điều hành, Bắt đầu, Kết thúc, Đóng, Mở lại Tour và nút Giao (L1.2) có cùng thao tác của chúng (tickets 49, 59, 66); ticket 48 chỉ có ⋯ → Lịch sử (CGD K4.05: nhật ký hồ sơ, gồm tạo hồ sơ, tạo checklist, giao người phụ trách).
- **Lỗi tải (E1.1, W07).** Không tìm thấy: lý do và nút Về danh sách hồ sơ Tour; lỗi tải: thêm nút Thử lại (CGD §13 mục 9). Không có quyền xem DH08 (kể cả tài khoản chỉ có vai trò HDV): trang không có quyền chung của CGD K0.09, không tải dữ liệu.
- **Tên nút ⋯.** Như mọi phần đầu hồ sơ (CGD K4.05, phần đầu dùng chung của ticket 31): chữ “⋯”.
- **Thông tin điều hành và nút Giao (L1.2, ticket 49, 17/11/2026).** Nút Thông tin điều hành ở header khi hồ sơ Mới tạo hoặc Đang diễn ra, với người có `DH08.sua-tong-quan`; bảng trượt có Điều hành phụ trách dạng chữ (“Chưa giao” khi trống, kèm gợi ý đổi bằng nút Giao), Ngôn ngữ phục vụ của đoàn và Ghi chú điều hành (tối đa 1.000 ký tự), lưu bằng Lưu thay đổi; không đổi gì thì không ghi lịch sử. Nút Giao (dạng liên kết) ngay sau tên người phụ trách ở dòng 2, với người có `DH07.giao-phu-trach` khi hồ sơ chưa đóng; danh sách như ô Phụ trách DH07 (W04), chọn là lưu, thông báo ngắn có Hoàn tác (W02a).

## Cách hiểu đã chọn khi làm Tổng quan và checklist (ticket 59, 17/11/2026)

- **Quá hạn của công việc (2.3, DH01 R03, E5.4).** Tính lúc đọc: việc chưa Hoàn tất và hạn trước hôm nay; hoặc việc mà hạn tính ra đã qua lúc sinh (hạn được đặt bằng hôm nay, DH01 E5.4 “hiện Quá hạn”) và chưa ai sửa tay hạn. Như vậy việc có hạn hôm nay theo đúng công thức không Quá hạn, việc bị dời hạn về hôm nay vì sinh muộn thì Quá hạn ngay (DH01 AC24).
- **Thao tác hàng loạt (L2.4, R09, AC08).** Áp cho từng dòng hợp lệ, trả các dòng bị bỏ qua kèm lý do (`TASK_REMOVED` khi việc đã bị bỏ, `STAFF_NOT_ASSIGNABLE` khi người không còn nhận phân công thì mọi dòng bị bỏ qua); khi không dòng nào áp được thì từ chối cả lần (422 `BULK_REFUSED`), không ghi gì. Cách này giữ đúng cả “áp dụng cho từng dòng hợp lệ” (L2.4, R09) lẫn “không dòng nào được áp dụng” (AC08).
- **Bỏ dịch vụ (L2.6, R03).** Hạng mục bỏ được thì bị xóa cùng công việc chỉ gắn với nó (ra khỏi mẫu số); nhật ký hồ sơ giữ tên dịch vụ, ngày, lý do và tên các công việc bị bỏ (“vẫn giữ trong lịch sử”). Kiểm “đã có lần đặt hoặc liên kết công nợ” qua `ServiceItemLinks` mà DH08.3 (ticket 60) và KT01 đăng ký. Hạng mục Đã hủy có chỉ báo Chưa thay thế (`NOT_REPLACED` trong `indicators`): giữ hạng mục, gỡ chỉ báo, bỏ việc chưa Hoàn tất của nó (Q-RS10).
- **Thêm dịch vụ (L2.5, W13).** “Đến ngày” để trống: dịch vụ một ngày, dịch vụ lưu trú một đêm (đến ngày hôm sau); có nhập thì là ngày cuối (lưu trú: ngày trả phòng), trong thời gian Tour. Giá tham chiếu theo bảng giá ngày sử dụng cho số người lớn và tuổi trẻ em của hồ sơ (DH04 R07).
- **Khối Việc cần làm (R01).** Ticket 59 có mục Đặt dịch vụ và Checklist; mục Giấy tờ khách, Phân phòng (ticket 64), HDV (ticket 65) và Yêu cầu đổi lịch trình (ticket 62) thêm vào cùng chỗ khi có dữ liệu của chúng. Nút Đặt dịch vụ hiện khi có tab Đặt dịch vụ (ticket 60).
- **Bắt đầu, Kết thúc Tour (2.2, E1.4, E1.5).** Thời điểm ở tương lai: lỗi cạnh trường (400); kết thúc sớm hơn bắt đầu: 422 `END_BEFORE_START` kèm thời điểm bắt đầu, báo cạnh trường; hồ sơ đã đổi trạng thái ở phiên khác: 409 (phiên bản cũ) hoặc 422 `TOUR_FILE_STATUS_CHANGED`. Tab đích sau khi Kết thúc là Quyết toán (DH07 R10); Đã đóng theo người xem thuộc ticket 66.
- **Người thực hiện (L2.2, DH06 R03, Q-RS14).** Nhân sự Nội bộ, Nhận phân công Đang dùng, chưa có tài khoản liên kết hoặc có tài khoản Đang hoạt động có ít nhất một vai trò không thuộc phòng HDV (vai trò Quản trị không có phòng cũng tính).

## Cách hiểu đã chọn khi làm Đặt dịch vụ qua email (ticket 60, 17/11/2026)

- **Lần đặt và giao dịch gửi (R08, G3).** Bấm Gửi ghi trong một giao dịch: email đã chốt nội dung (mẫu, phiên bản, ngôn ngữ, người nhận, CC gồm người thao tác), danh sách hạng mục cùng số lượng và đi kèm đã đặt, việc trong hàng đợi, một lần dùng của phiên bản mẫu (QT04 R12) và mục QT03. Bước lỗi `serviceBookings.record` nằm ở đây: giao dịch hủy thì không có email, không có việc trong hàng đợi, không thư nào đi. Lần đặt (trạng thái Đã gửi) chỉ được tạo khi Gmail nhận thư, từ danh sách hạng mục đã ghi; Gmail từ chối thì không có lần đặt, email giữ nguyên để Gửi lại.
- **Chưa xác định đã gửi hay chưa (R08, E3.3).** Hộp thư chung chỉ có quyền gửi (`gmail.send`, ADR 0004) nên không tra được thư theo mã gửi. Hết thời gian chờ thì email ở trạng thái Chưa xác định cho tới khi Điều hành bấm Gửi lại sau cảnh báo có thể trùng; lần gửi lại dùng mã gửi mới và ghi liên kết tới mã cũ. Email Gửi lỗi (Gmail trả lỗi rõ ràng) gửi lại với chính mã gửi đó. Cả hai lần gửi lại đều hiện cảnh báo NCC có thể nhận trùng (US 185).
- **Hạng mục đang chờ Gmail trả lời** (email Đang gửi hoặc Chưa xác định chưa gửi lại) không gửi thêm email đặt và không Bỏ dịch vụ được (`ITEM_HAS_BOOKINGS`, L2.6), để không đặt trùng.
- **Gửi khi hạng mục vừa đổi ở phiên khác (E3.8).** Máy chủ loại email đó khỏi lần gửi và trả `status: 'CHANGED'` cho email đó; các email khác vẫn gửi.
- **NCC chọn cho hạng mục chưa có NCC (L3.4).** Chọn NCC chỉ để soạn email (không ghi gì); NCC được gắn vào hạng mục khi gửi. Giá tham chiếu giữ như lúc tạo hồ sơ.
- **QT03 khi gửi (QT03 R02, AC33).** Một lần bấm Gửi là một mục `SEND_EXTERNAL` của hồ sơ Tour; mục ghi người nhận (ô Đến), và với mỗi email: tiêu đề, mã gửi (`sentEmails`); khi chỉ có một email thì tiêu đề và mã gửi ghi thẳng trên mục. Không ghi thân email.
- **Câu yêu cầu riêng (R06).** Mẫu có trường {Yêu cầu riêng} thì câu vào trường đó; mẫu không có thì câu thành một đoạn đặt trước đoạn cuối của nội dung (đoạn cách nhau bằng dòng trống; nội dung chỉ một đoạn thì câu nằm cuối). Khách và hai ô Ăn uống, Phòng thuộc DH08.4 (ticket 64): ticket đó đăng ký vào `SpecialRequestSources` cách đọc yêu cầu của từng khách áp cho các hạng mục, kể cả loại dịch vụ áp dụng cố định (Ăn uống: Nhà hàng, Du thuyền; Phòng: Khách sạn, Du thuyền), vì danh mục Loại dịch vụ ở QT05 chưa có khóa hệ thống để nhận ra ba loại này.
- **Hồ sơ đóng trong lúc email còn trong hàng đợi (1.4, R08, R16; rà soát 17/11/2026).** “Chỉ đọc sau khi đóng” chặn thao tác của người dùng: máy chủ kiểm trạng thái hồ sơ khi người dùng ghi (1.4), nên Gửi và Gửi lại bị từ chối `TOUR_FILE_CLOSED` khi hồ sơ Đã đóng. Việc của hàng đợi ghi câu trả lời của Gmail cho một lần gửi đã được nhận khi hồ sơ còn mở: Gmail nhận thư thì NCC đã có thư, nên lần đặt vẫn được tạo (R08: lần đặt có khi Gmail nhận thư), dù hồ sơ vừa đóng. Hộp thoại Đóng Tour đã nhắc lần đặt chờ kết quả (E8.6).

## Cách hiểu đã chọn khi làm Nhân sự phục vụ Tour (ticket 65, 17/11/2026)

- **Khoảng của phân công (R12).** Toàn Tour = 00:00 ngày đầu đến 23:59 ngày cuối của hồ sơ, tính lúc đọc nên theo ngày Tour khi chương trình đổi; giờ chuyến bay đến và về sẽ thay hai mốc này khi hồ sơ lưu chuyến bay của đoàn. Theo ngày: ngày không kèm giờ là cả ngày (00:00–23:59), có giờ thì đúng khoảng giờ. Hai khoảng chạm mốc không trùng.
- **Trùng lịch (R12, E5.2).** Chỉ xét phân công chưa bị bỏ của hồ sơ chưa Đã đóng. Trùng hồ sơ khác: 422 `ASSIGNMENT_OVERLAP`; trùng trong cùng hồ sơ: lưu, trả `overlaps` cho banner vàng (bảng trượt cũng báo trước khi lưu từ lịch đã tải). Nút “Đổi sang Theo ngày…” điền đoạn ngày trống liền nhau đầu tiên (một phân công chỉ có một khoảng).
- **Ngôn ngữ (E5.1).** Chỉ kiểm cho HDV chính, HDV điểm; lý do chỉ được lưu khi thật sự lệch (khớp thì bỏ). Danh sách chọn vẫn tính “khớp ngôn ngữ” cho Trưởng đoàn để sắp thứ tự L5.2.
- **Kiểm lại người khi sửa (DH06 R03, E2.2).** Chỉ khi đổi người hoặc đổi vai trò; sửa ngày giờ của người đã tắt Nhận phân công vẫn được (phân công đã có giữ nguyên, R05).
- **Bỏ phân công.** Bản ghi giữ lại với thời điểm bỏ (DH06 R08 tính cả phân công đã bỏ), không hiện ở DH08.5.
- **TB-DH08-11, 12 (R12, CH02 R04, R07).** Bản ghi chính là phân công: TB-DH08-11 chưa đọc của cùng phân công được làm mới tại chỗ khi phân công bị sửa tiếp. Đổi người: người cũ TB-DH08-12, người mới TB-DH08-11 (không ghi “đã đổi”). TB-DH08-11 cũ mở khi đã bị gỡ hoặc hồ sơ Đã đóng: 404 `{ code: NOT_FOUND, target: <Tour Code> }`, chuông ghi “Không tìm thấy <Tour Code>” (E1.14). Người không có `HD01.xem` mở DH08.5 (`?tab=staff`).
- **Mục HDV của Việc cần làm (R01).** Đạt khi có một phân công HDV chính chưa bỏ, người đó có ngôn ngữ phục vụ của đoàn và khoảng phủ trọn khoảng Toàn Tour; nút Phân công mở DH08.5 với bảng trượt W51 (`?tab=staff&filter=ASSIGN`).

**Cách hiểu đã chọn khi code ticket 66 (17/11/2026; tài liệu chưa nói rõ, chọn để mọi câu cùng đúng):**
- **Chỉ báo Đã mở lại (2.1, R16; DH07 2.4 “Hồ sơ đã đóng rồi được mở lại”).** Giữ trên hồ sơ cả sau khi đóng lại: hồ sơ vẫn là hồ sơ “đã đóng rồi được mở lại” (QT09 cũng giữ chỉ báo này).
- **Liên kết chi phí với sự cố (L6.2, L7.1, W61).** Khoản chi phí liên kết sự cố chỉ tạo khi lưu sự cố có chi phí (L6.2); bảng trượt Thêm chi phí phát sinh (W61) không có ô “Liên quan sự cố” vì L7.1 không liệt kê trường này và hợp đồng API không có trường đó. Cột Liên quan ở W60 ghi “Sự cố” cho khoản tạo cùng sự cố.
- **Nhắc “Công nợ còn lại” ở hộp thoại Đóng Tour (E8.7).** Tính từ số còn phải thu của Booking ở KT01.1; số còn phải trả NCC thêm vào khi KT01.2 có khoản phải trả (ticket 81). Không chặn đóng.
- **Dòng của bước 1 (L8.1).** Một dòng cho mỗi hạng mục Đã xác nhận, gợi ý bằng giá trị xác nhận của lần đặt; DH08.3 phần ghi kết quả (ticket 61; ticket 60 chưa có trạng thái Đã xác nhận) cung cấp giá trị này qua `ConfirmedCosts`. Chưa có hạng mục xác nhận thì bước 1 không có dòng; Đóng Tour vẫn chuyển “Chuyển khi đóng Tour”.
- **Ghi lịch sử Tour khi đóng (R16; KD03-KD04 R06).** Số khách của bản chụp là số khách của hồ sơ (người lớn và trẻ em); khi DH08.4 có danh sách khách (ticket 64) thì dùng số thành viên đoàn.

## Cách hiểu đã chọn khi làm Ghi kết quả, hủy lần đặt, điều chỉnh (ticket 61, 17/11/2026)

- **Trạng thái hạng mục (R02).** Tính lúc đọc từ các lần đặt, theo đúng thứ tự R02; lần đặt “còn hiệu lực” là Đã gửi hoặc Đã xác nhận. Xác nhận một phần là lần đặt Đã xác nhận với số xác nhận nhỏ hơn số yêu cầu (kết quả lần đặt vẫn là Đã xác nhận); hạng mục Đã xác nhận khi tổng số xác nhận của các lần đặt còn hiệu lực bằng số lượng của hạng mục. Đặt phần còn thiếu hỏi số lượng của hạng mục − số đã xác nhận − số đang chờ (R02 câu cuối).
- **Email điều chỉnh và email hủy không tạo lần đặt mới (L3.8, L3.11, R04).** Chúng tác động lên các lần đặt còn hiệu lực của hạng mục, cùng mã gửi của email: khi Gmail nhận thư, lần đặt có “Điều chỉnh đang chờ” (cho tới khi ghi kết quả của lần đặt đó) hoặc “Yêu cầu hủy đang chờ” (cho tới khi ghi kết quả hủy). Lịch sử W29 vì vậy chỉ có các lần đặt; email điều chỉnh, email hủy hiện trong W29a và trên lần đặt.
- **Hủy lần đặt (W30; sửa ở rà soát 17/11/2026).** Bấm Hủy lần đặt trong lịch sử (W29) thì email hủy chỉ gồm đúng lần đặt đó (L3.8 “Hủy một lần đặt”). Bấm từ menu ⋯ trên dòng (thao tác của cả hạng mục) thì email hủy gồm mọi lần đặt còn hiệu lực chưa có yêu cầu hủy. Lý do nhập ở bảng trượt vào email ({Lý do hủy}); hạng mục Cần hủy vì Đổi NCC/dịch vụ dùng lý do đã nhập lúc đổi.
- **Ghi kết quả hủy (W31, Q-RS25).** NCC chấp nhận: bắt buộc nhập phí (0 nếu không mất phí; 400 `fee: serviceBookings.errors.feeRequired`), lần đặt Đã hủy; NCC từ chối: bắt buộc lý do, lần đặt giữ kết quả cũ, lý do vào lịch sử. Chỉ ghi được khi lần đặt có yêu cầu hủy đang chờ (422 `CANCELLATION_NOT_REQUESTED`). Phí gợi ý: số ngày trước = ngày dùng đầu tiên − ngày Gmail nhận email hủy (chưa gửi thì hôm nay); hợp đồng áp dụng = hợp đồng của NCC của lần đặt còn hiệu lực vào ngày dùng và có dòng giá của dịch vụ (nhiều thì hợp đồng bắt đầu muộn nhất); tổng giá lần đặt = số lượng × số đêm × giá xác nhận (+ đi kèm), chưa xác nhận thì số yêu cầu × số đêm × giá tham chiếu; làm tròn half-up theo số lẻ của loại tiền ở QT05.
- **Chưa thay thế (Q-RS10).** Ghi trên hạng mục (chỉ báo lưu) khi NCC chấp nhận hủy lần đặt cuối cùng còn hiệu lực của một hạng mục từng được xác nhận và hạng mục chưa bị Đổi NCC/dịch vụ; Thêm dịch vụ thay thế và Bỏ dịch vụ gỡ chỉ báo này.
- **Đổi NCC/dịch vụ (L3.16) làm cùng ticket này** vì Cần hủy và “Thêm dịch vụ thay thế” là trạng thái của R02 mà ticket này tính: `POST …/service-items/:id/swap` tạo hạng mục mới, hạng mục cũ ghi `replacedById`; Cần hủy khi hạng mục cũ còn lần đặt còn hiệu lực chưa gửi yêu cầu hủy, Đã hủy khi không còn. Xem trước đi kèm bị bỏ và chọn đi kèm (W13/L3.16 khối “Dịch vụ đi kèm của dịch vụ mới”) để ticket 62.
- **Phát hiện thay đổi sau lần đặt (R07).** Mỗi lần đặt lưu “dữ liệu đã gửi NCC” (ngày dùng, đến ngày, số lượng, yêu cầu gửi NCC, câu yêu cầu riêng của khách áp cho hạng mục, và chuyến bay khi DH08.4 đăng ký); khác dữ liệu hiện tại thì Cần điều chỉnh. Gửi điều chỉnh hoặc Không cần gửi (kèm lý do) lưu dữ liệu hiện tại làm bản đã gửi. Chuyến bay của khách thuộc DH08.4 (ticket 64): ticket đó đăng ký `BookingFactSources` trả `arrivalFlight` / `departureFlight` (chữ, ví dụ “VN54 · 20/11/2026 08:00 · HAN”, nhiều chuyến nối bằng “; ”) cho hạng mục đón, tiễn sân bay cùng ngày bay, và số khách (`guests`) cho khách sạn, du thuyền. Hạng mục đón, tiễn sân bay (sửa ở rà soát 17/11/2026, không còn đọc theo riêng đơn vị tính hay theo tên) là dịch vụ có loại thuộc hạng mục dịch vụ Di chuyển (khóa khởi tạo `TRANSPORT`, xem mục rà soát cuối tệp), tính theo đơn vị dịch vụ không theo đêm, không phải giường phụ (KD06 R14: “đi kèm Đưa đón sân bay loại Vận chuyển … theo Di chuyển”).
- **x ngày chưa phản hồi, Quá hạn phản hồi (R04, Q23, Q6).** Tính lúc đọc từ lần đặt Đã gửi cũ nhất còn chờ: quá ngưỡng `SUPPLIER_RESPONSE_HOURS` (mặc định 48) giờ lịch, không trừ cuối tuần, thì hạng mục có cả hai chỉ báo `NO_RESPONSE` (kèm `noResponseDays` = số ngày tròn đã chờ) và `RESPONSE_OVERDUE`; R04 nói chỉ báo “n ngày chưa phản hồi” chỉ hiện khi quá 48 giờ. Cột Lần đặt gần nhất ghi “n ngày chưa phản hồi” cùng điều kiện. Bộ lọc DH07 Chờ NCC phản hồi quá hạn theo chỉ báo này.
- **Ghi kết quả cho cả email (W26b, E3.18).** Mặc định khi email còn từ 2 lần đặt chờ kết quả; một dòng sai thì không lưu dòng nào (400 với `rows.<i>.<trường>`); lần đặt đã có kết quả ở phiên khác bị bỏ qua và trả trong `skipped`.
- **Công việc tự Hoàn tất (R03).** Sau mỗi lần ghi kết quả hoặc kết quả hủy, việc theo dịch vụ có “Tự hoàn tất khi hạng mục liên kết Đã xác nhận” chuyển Hoàn tất (lịch sử ghi Hệ thống) khi hạng mục Đã xác nhận, và về Đang làm khi hạng mục về Cần đặt hoặc Cần đặt lại.
- **Giá trị xác nhận cho Quyết toán bước 1 (L8.1; sửa ở rà soát 17/11/2026).** `ConfirmedCosts`: mỗi hạng mục Đã xác nhận có một giá trị cho mỗi loại tiền = Σ giá trị các lần đặt Đã xác nhận cùng loại tiền (số xác nhận × số đêm × giá xác nhận + đi kèm); không lần đặt nào bị bỏ. Bước 1 vì vậy có một dòng cho mỗi hạng mục và loại tiền (hạng mục đặt phần thiếu với NCC khác loại tiền có hai dòng); lưu dòng của hạng mục có nhiều loại tiền phải ghi `currency`.

## Ticket 64 (17/11/2026): Khách đoàn, phân phòng, Pax list và Rooming list — cách hiểu đã chọn

- **Ai nhập khách, gán chuyến bay (1.4, L4.3).** Bảng 1.4 và ma trận QT02 cho Kinh doanh `DH08.khach-doan` (thêm, sửa, nhập Excel, gán chuyến bay); Điều hành chỉ xem. Mô tả ticket ghi “Điều hành gán chuyến bay”: theo RSD 1.4, máy chủ đòi `DH08.khach-doan`. Phân phòng, tải và gửi Pax list, Rooming list cần `DH08.phan-phong` (Điều hành).
- **Cặp khách đăng ký chung phòng.** 5.1 không có trường; dùng trường `roomMateOf` của khách (form W41 “Đăng ký chung phòng với”).
- **Tự xếp theo gợi ý (L4.5, Q13'; sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em).** Thứ tự: cặp đã đăng ký; rồi ghép người lớn còn lại hai người một phòng, ưu tiên cùng yêu cầu phòng, rồi cùng họ, rồi cùng giới tính (theo thứ tự danh sách); người lớn lẻ vào phòng đơn ghi “Tự xếp phòng đơn”. Không tạo phòng 3 người lớn. Trẻ em (dưới 12 tuổi ở ngày nhận phòng) vào phòng người lớn cùng họ, không thì để Chưa xếp. Hạng mục có Giường phụ n thì sau khi xếp, n phòng đầu tiên có trẻ em (theo thứ tự phòng) ghi chú “Giường phụ”; ít hơn n phòng có trẻ thì chỉ ghi các phòng đó và cảnh báo lệch số E4.8. Số phòng gợi ý 1, 2, …; hạng phòng gợi ý TWN cho phòng đôi, SGL cho phòng đơn (bỏ TRP; chữ tự do, Điều hành sửa).
- **Đợt lưu trú** là hạng mục có loại dịch vụ có hạng phòng (khách sạn, du thuyền) chưa Đã hủy; mã đợt = mã hạng mục.
- **Yêu cầu riêng áp cho loại dịch vụ (R06; sửa ở rà soát 17/11/2026).** QT05 không có khóa hệ thống cho Nhà hàng, Khách sạn, Du thuyền và hệ thống không so tên: ô Phòng áp cho loại có hạng phòng (khách sạn, du thuyền); ô Ăn uống áp cho loại thuộc hạng mục dịch vụ Ăn uống (khóa khởi tạo `MEALS`, giữ khi đổi tên). Du thuyền nhận cả hai khi loại Du thuyền được xếp vào hạng mục Ăn uống; QT05 không có dữ liệu nào khác phân biệt du thuyền với khách sạn.
- **Chuyến bay và số khách cho R07 (sửa ở rà soát 17/11/2026).** Ticket 64 đăng ký `BookingFactSources`: hạng mục đón, tiễn sân bay (loại thuộc hạng mục Di chuyển, khóa `TRANSPORT`; theo đơn vị dịch vụ, không theo đêm, không giường phụ) nhận các chuyến bay đến và về của khách có ngày bay trùng ngày dùng; hạng mục khách sạn, du thuyền (loại có hạng phòng) nhận số khách của hồ sơ (phiên bản chương trình đang áp dụng; thêm, bớt người ở danh sách khách không đổi số này, E4.7).
- **Cột Pax list (QT04 R08).** Cột # luôn có ở mọi tập, kể cả tập mặc định (QT04-AC27 nay là #, Họ tên, Giới tính, Quốc tịch). Xem trước ở DH08 và QT04, tệp tải thử, tệp tải ở DH08 (Tải Excel, Tải PDF) và tệp “Xem bản đã gửi” đều che số hộ chiếu (4 đầu, 2 cuối); chỉ tệp đính kèm email gửi NCC in đầy đủ (1.4 “số đầy đủ chỉ hiển thị … trong tệp gửi NCC”, QT04 R08; sửa ở rà soát 17/11/2026). Tải tệp ở DH08 và tải lại bản đã gửi mỗi lần ghi một mục QT03 `EXPORT` (nhạy cảm, QT03 R13); tải tệp ở DH08 tính một lần dùng của phiên bản mẫu (QT04 R12); tải thử ở QT04 ghi QT03 nhưng không tính lần dùng.
- **Pax list không chọn NCC** (bảng xem trước W47) dùng hợp các cột của mọi loại dịch vụ trong Tour. **Tệp mẫu QT04 không chọn loại** dùng mọi cột của mẫu.
- **PDF** dựng qua hàng đợi bằng trang in `/print/tour-document` (Chromium, như proposal); khi chưa có tệp, máy chủ trả 202 và màn hình hỏi lại.
- **Gửi Rooming list** cho khách sạn hoặc du thuyền của đợt: `POST …/documents/rooming-list/sends { stayIds }`, mỗi đợt một email, chặn khi đợt còn khách chưa xếp (E4.5).
- **Tên công ty** đầu tài liệu: khóa `companyName` của tệp cấu hình (C2).
- **Đã làm ở rà soát 17/11/2026:** Sao chép phân phòng sang đợt khác (W45a), xem trước email và tệp của từng NCC trong W48, danh sách “Đã gửi NCC trước khi yêu cầu thay đổi” ở W44, số trên tab Khách đoàn (xem mục rà soát cuối tệp).

## Rà soát 17/11/2026 (sửa sau review, tickets 61 và 64): cách hiểu đã chọn

- **Xác nhận một phần “đang chờ n” (R02 bước 5 và câu cuối).** Hạng mục Xác nhận một phần có lần đặt Đã gửi thì có chỉ báo `AWAITING_MORE` “đang chờ n” (n = tổng số yêu cầu của các lần đặt đang chờ, `awaitingQuantity`). Khi phần còn thiếu đã gửi hết (`missingQuantity` = 0), hạng mục chỉ còn chờ như Chờ kết quả: không có việc Đặt (không email số lượng 0; máy chủ loại email đó, E3.8), không tính vào số trên tab Đặt dịch vụ, mục Đặt dịch vụ của Tổng quan và bộ lọc DH07; nút chính là Ghi kết quả. Câu 2.1 “Xác nhận một phần” được hiểu là hạng mục còn phần phải đặt, vì số trên tab “chỉ báo việc cần làm”.
- **Điều chỉnh gửi khi lần đặt còn chờ kết quả (L3.11).** Ghi kết quả của lần đặt Đã gửi cũng trả lời điều chỉnh đang chờ trên lần đặt đó (Điều chỉnh đang chờ mất).
- **NCC không đáp ứng điều chỉnh của lần đặt đã xác nhận (R02 bước 1, 8; L3.15).** Lần đặt thành Không đáp ứng; hạng mục là Cần đặt lại. Bước 1 “Đã hủy” chỉ khi có lần đặt từng xác nhận và mọi lần đặt từng xác nhận đều Đã hủy; lần đặt từng xác nhận nay Không đáp ứng không làm hạng mục Đã hủy.
- **Phí hủy gợi ý khi chưa có giá xác nhận (R10, L3.8).** Tổng giá lần đặt = giá tham chiếu × số yêu cầu × số đêm + mỗi đi kèm đã hỏi cùng lần đặt × giá tham chiếu của đi kèm × số đêm, chỉ phần cùng loại tiền tham chiếu của hạng mục (đi kèm khác loại tiền không có giá tham chiếu theo loại tiền đó, E3.24).
- **Hạng mục dịch vụ có khóa khởi tạo (QT05 R20; R06 không đổi).** Bảy hạng mục dịch vụ khởi tạo (KD06 R14) giữ khóa `seedKey` (ACCOMMODATION, TRANSPORT, FLIGHT, GUIDE, SIGHTSEEING, MEALS, OTHER), giữ nguyên khi đổi tên; chúng vẫn là giá trị thường (đổi tên, tắt, xóa theo R05, R12), trừ Khác là giá trị hệ thống như trước. DH08 R06, R07 nhận ra loại dịch vụ qua khóa này và thuộc tính của loại (hạng phòng, đơn vị tính), không so tên. Hạng mục khởi tạo bị xóa, hoặc loại được xếp vào hạng mục do người dùng tạo, thì không được nhận ra.
- **Số khách cho R07 (ticket 61 “khi số khách … đổi”).** Hạng mục khách sạn, du thuyền lưu số khách của hồ sơ trong dữ liệu đã gửi NCC; số này chỉ đổi khi Điều hành áp dụng thay đổi chương trình có đổi số khách (R19, ticket 68), lúc đó hạng mục đã gửi chuyển Cần điều chỉnh.
- **Checklist tự hoàn tất (R03).** “Đã gửi Pax list”: khi Gmail nhận một email Pax list của hồ sơ. “Đã gửi Rooming list cho mọi khách sạn”: khi mọi đợt lưu trú (hạng mục khách sạn, du thuyền chưa Đã hủy) đã có một Rooming list Gmail nhận. Lịch sử ghi Hệ thống; gửi không hoàn tác được nên không có chiều đảo ngược.
- **Số trên tab Khách đoàn (2.1, R11).** Số khách có cảnh báo giấy tờ hoặc thiếu trường bắt buộc, màu vàng, ẩn khi bằng 0.
- **W44 “Đã gửi NCC trước khi yêu cầu thay đổi”.** Liệt kê mọi hạng mục Cần điều chỉnh (dịch vụ, NCC, ngày gửi lần đặt gần nhất); nút Gửi điều chỉnh mở W35 của hạng mục ở tab Đặt dịch vụ (người có quyền đặt dịch vụ).
- **W45a Sao chép sang đợt khác.** Mặc định chọn mọi đợt khác; mỗi phòng của đợt nguồn giữ hạng phòng, khách và ghi chú, được đánh số lại 1, 2, … ở đợt đích; khách chưa xếp ở đợt nguồn vẫn Chưa xếp ở đợt đích; đợt đích đã có phân phòng thì bị ghi đè (hộp thoại báo trước). Chưa lưu cho tới khi bấm Lưu phân phòng (kiểm E4.4 như mọi lần lưu).
- **W48 xem trước.** Bấm tên NCC hiện email (người nhận, CC, tiêu đề, tên tệp đính kèm, nội dung) và các dòng của tệp như sẽ gửi, số hộ chiếu che; không ghi gì (`GET …/documents/pax-list/send-preview?supplierId=`, `…/rooming-list/send-preview?stayId=`).

## Ticket 68 (17/11/2026): Xem và áp dụng thay đổi chương trình — cách hiểu đã chọn

- **So sánh bản cũ và bản mới (W09, R19 “So sánh”).** Bản cũ là phiên bản chương trình đang áp dụng cho hồ sơ (`programmeVersion`), bản mới là phiên bản được chuyển; cả hai được tách thành hạng mục như khi tạo hồ sơ (DH07 R03: mỗi dịch vụ mỗi ngày một hạng mục, lưu trú liền đêm một hạng mục). Ghép cặp theo thứ tự: cùng dịch vụ cùng ngày (cùng hạng mục; có thể Đổi ngày kết thúc, Đổi số lượng, Đổi yêu cầu, Đổi đi kèm); cùng dịch vụ khác ngày (Đổi ngày); khác dịch vụ cùng ngày, cùng loại dịch vụ (Đổi dịch vụ / NCC); còn lại là Thêm hoặc Bỏ. Số khách khác thì thêm một dòng Đổi số khách (ngày = ngày khởi hành mới). Hạng mục của hồ sơ ứng với một hạng mục bản cũ: hạng mục cùng dịch vụ, cùng ngày chưa bị bỏ; đã bị Đổi NCC/dịch vụ (L3.16) thì là hạng mục thay nó; Điều hành đã bỏ hạng mục (L2.6) thì dòng không tác động hạng mục nào. Hạng mục Điều hành tự thêm (L2.5) không thuộc bản cũ nên không bị đụng.
- **“Chưa gửi NCC” và “Đã gửi hoặc đã xác nhận” (bảng R19)** đọc theo lần đặt còn hiệu lực (Đã gửi hoặc Đã xác nhận) của hạng mục: không có thì cập nhật trực tiếp / Đã hủy; có thì Cần điều chỉnh (qua dữ liệu đã gửi NCC của R07) / Cần hủy. Hạng mục bị Bỏ giữ trong danh sách (`removed_at`), trạng thái tính như hạng mục đã đổi sang hạng mục mới.
- **Đổi đi kèm (R19, R21)** thành Cần điều chỉnh qua R07: dữ liệu đã gửi NCC có thêm khóa “Dịch vụ đi kèm” (tên × số lượng).
- **Ngày đã qua (E1.9)** chỉ xét khi hồ sơ Đang diễn ra: dòng có ngày (sớm hơn của hai bản) trước hôm nay; dòng Đổi số khách không bị chặn.
- **Yêu cầu đổi lịch trình (R18 “có chạm tới hạng mục”)** chỉ những yêu cầu của hạng mục có dòng thay đổi mới chuyển Đã xử lý; hạng mục Chờ Kinh doanh không bị chạm tới có ghi chú “Phiên bản mới chưa xử lý hạng mục này” (E3.13), mất khi một phiên bản sau chạm tới nó.
- **Hạn công việc (R19 “Phần còn lại”, DH01 R03)** chỉ tính lại cho việc chưa Hoàn tất, hạn chưa sửa tay, khi mốc của nó (khởi hành, kết thúc, ngày dùng của hạng mục) đổi; hạn mới đã qua thì là hôm nay (DH01 E5.4).
- **TB-DH08-10 (CH02 R09 “xét theo dữ liệu và ngày lúc chạy”, “chạy bù không bỏ sót”).** Sửa sau rà soát 17/11/2026: tác vụ nhắc xét mọi thay đổi còn Chờ áp dụng lúc chạy, kể cả thay đổi chuyển sau giờ chạy của ngày đó khi lần chạy là lần chạy bù muộn hơn; người vừa chuyển không tự nhận vì người nhận là Kinh doanh phụ trách Booking và không có thông báo lúc Chuyển sang Điều hành (E1.9). Khóa chống nhắc lặp là thời điểm nhắc trên chính thay đổi (`past_days_reminded_at`).
- **TB-KD08-01, TB-DH08-10 Đã xử lý** tính lúc đọc khi thay đổi rời Chờ áp dụng (Đã áp dụng, Đã thay thế, Không áp dụng).
- **Kết thúc Tour, Kết thúc hồ sơ** chuyển thay đổi đang chờ sang Không áp dụng “Hồ sơ đã kết thúc” trong cùng giao dịch. Hủy Booking (ticket 69) gọi `ProgramChanges.markNotApplied(tx, op, actor, tourFileId, 'BOOKING_CANCELLED')`.
- **Khóa đặt khi có thay đổi chờ (R19 “Trước khi áp dụng”).** Hạng mục bị dòng thay đổi chạm tới có chỉ báo Chờ áp dụng thay đổi; nút Đặt dịch vụ, Đặt lại, Đặt phần còn thiếu, Gửi điều chỉnh hiện khóa kèm chú thích, và “Soạn email” của một NCC (W20a) bỏ hạng mục đó khỏi các loại việc bị khóa (không còn việc nào thì nút của NCC hiện khóa kèm chú thích); máy chủ không chặn thêm.
- **Hồ sơ vừa đổi khi đang xem (E1.7, rà soát 17/11/2026).** W09 nhận kèm các dòng một “dấu” (`fingerprint`) và gửi lại khi bấm Áp dụng; máy chủ tính lại ảnh hưởng, khác dấu thì từ chối `422 PROGRAM_CHANGE_CHANGED` kèm các dòng mới, W09 tô các dòng đã đổi và yêu cầu bấm Áp dụng lần nữa. Gọi API không gửi dấu (máy khách không có W09) thì không so.
- **Đợt lưu trú đổi khách sạn (R19, rà soát 17/11/2026).** Hạng mục lưu trú bị Đổi dịch vụ/NCC khi áp dụng: hạng mục mới nhận bản chép các phòng của đợt cũ (số phòng, hạng, khách, ghi chú phòng) trong cùng giao dịch.
- **Hạn công việc theo mốc (rà soát 17/11/2026).** Mốc ngày dùng của hạng mục là ngày trước khi áp dụng (đọc trước khi cập nhật hạng mục), so với ngày sau áp dụng.
- **W39** hiện sau khi áp dụng, ở tab Đặt dịch vụ, cho tới khi rời tab. Không có nút soạn email trên banner (người dùng chốt 19/11/2026: hệ thống đã tự soạn sẵn email cho NCC); Điều hành gửi từ nút trên dòng hoặc “Soạn email” của từng NCC ở chế độ Theo NCC (W20a, W22a). API áp dụng không còn trả số NCC (`suppliers`).

## Đặt dịch vụ theo NCC, không còn nút “Soạn email” (người dùng chốt 20/11/2026)

- **Chọn nhiều ở dòng NCC, không ở dòng dịch vụ.** Chế độ Theo dịch vụ không có ô chọn, không có thanh hàng loạt; đặt từng dòng bằng nút trên dòng như cũ. Chế độ Theo NCC: ô chọn ở dòng NCC (chỉ NCC có việc chờ gửi và không bị thay đổi chờ khóa hết, R19), ô chọn đầu bảng chọn mọi NCC đó đang hiện; đổi chế độ xem thì bỏ chọn.
- **Nút Đặt dịch vụ** thay “Soạn email cho NCC (n email)” ở dòng NCC (giữ số email: “Đặt dịch vụ (n email)”) và “Soạn email đặt (n NCC)” ở thanh hàng loạt (người dùng: chỉ đổi tên, giữ số NCC: “Đặt dịch vụ (n NCC)”). Nút gửi mọi việc chờ gửi của NCC đã chọn (đặt, đặt lại, phần còn thiếu, điều chỉnh, hủy; mỗi NCC, mỗi loại việc một email, R04), không chỉ việc đặt: thanh hàng loạt cũ (W21) chỉ gửi email Đặt, nay gộp với nút của dòng NCC để một chỗ bấm làm một việc.
- **Dòng dịch vụ ở chế độ Theo NCC** không có nút gửi email (Đặt dịch vụ, Đặt lại, Đặt phần còn thiếu, Gửi điều chỉnh, Gửi yêu cầu hủy, kể cả dạng khóa); Ghi kết quả, Ghi kết quả hủy, Xem yêu cầu, Thêm dịch vụ thay thế và menu ⋯ (có Hủy lần đặt) giữ nguyên.
- **Theo dịch vụ nhóm theo hạng mục dịch vụ.** “Hạng mục dịch vụ” ở đây là hạng mục Markup của loại dịch vụ (BOI-CANH: Lưu trú, Di chuyển, Vé máy bay, HDV, Tham quan, Ăn uống, Khác; `serviceCategoryId` của loại dịch vụ ở QT05), không phải “hạng mục” = một dòng dịch vụ của hồ sơ (`ServiceItem`), vì nhóm theo từng dòng thì không còn là nhóm. API trả thêm `service.type.category { id, name, position }` (null khi loại dịch vụ chưa gắn hạng mục). Nhóm xếp theo `position`, nhóm Chưa có hạng mục cuối; dòng nhóm chỉ có tên và số dịch vụ, không có ô chọn hay nút.
- Tiêu đề bảng trượt khi gửi cho một NCC: “Đặt dịch vụ với NCC · {NCC}”; chọn nhiều NCC thì dùng tiêu đề chung. Không đổi API (bản nháp đã tách theo NCC cho mọi loại việc).

## Ticket 62 (17/11/2026): Đổi NCC/dịch vụ, yêu cầu đổi lịch trình, NCC ngừng dùng — cách hiểu đã chọn

- **Người nhận phía Kinh doanh (R18 “đọc theo Booking tại mọi thời điểm”, E3.10; KD08 R11).** Yêu cầu không lưu người nhận: thông báo TB-DH08-01..04 và bảng trượt đọc `bookings.owner_id` lúc gửi, nhắc, rút hoặc lúc chạy nhắc 08:00. Chuyển người phụ trách Booking (rà soát 17/11/2026): trong giao dịch chuyển, người mới nhận TB-DH08-01 của từng yêu cầu đang chờ, TB-DH08-01..03 của người cũ cho các yêu cầu đó thành Đã xử lý; Hoàn tác gỡ cả hai theo mã thao tác (CH02 R05). Người phụ trách ngừng hoạt động: “Gửi cho” ghi “<tên> (ngừng hoạt động)” kèm cảnh báo “Cần chuyển người phụ trách Booking ở KD08” ở W36, W37.
- **Lịch sử Booking (KD08 R13, E1.13; rà soát 17/11/2026).** Lịch sử Booking ghi Nhận yêu cầu (người gửi), Đã xử lý (Hệ thống, khi áp dụng thay đổi chạm hạng mục) và Đã rút (Điều hành kèm lý do gõ; Hệ thống kèm lý do “Hồ sơ đã kết thúc” / “Booking đã hủy”).
- **TB-DH08-03 (CH02 R09).** Chỉ nhắc khi Booking còn Hiệu lực.
- **Banner W21 của KD08 (L1.8, R13).** Mỗi dòng ghi ngày, dịch vụ, NCC và tình trạng hạng mục Cần đặt lại hoặc Xác nhận một phần (hạng mục Cần đặt lại đang hiện Chờ Kinh doanh ở DH08); “Xem ở hồ sơ Tour” mở DH08.3 `?request=<hạng mục>` kèm bảng trượt yêu cầu chỉ xem. Liên kết phụ “Xem ở hồ sơ Tour” của TB-DH08-01..03 mở cùng chỗ (`POST /api/notifications/:id/open { ref: <yêu cầu> }`).
- **Gửi yêu cầu thứ hai (E3.9, AC37).** W36 nhận `422 CHANGE_REQUEST_ALREADY_OPEN` thì mở yêu cầu đang chờ (W37) thay vì báo lỗi.
- **Báo Kinh doanh chỉ từ Cần đặt lại hoặc Xác nhận một phần (L3.12 Điều kiện).** Hạng mục ở trạng thái khác bị từ chối `422 ITEM_NOT_ASKABLE`; đã có yêu cầu Chờ Kinh doanh thì `422 CHANGE_REQUEST_ALREADY_OPEN { request: { id } }` (AC37).
- **Loại đề xuất (W36).** Hình có Đổi ngày, Đổi dịch vụ / hạng, Bỏ dịch vụ, Khác; hợp đồng API có thêm Đổi NCC (`CHANGE_SUPPLIER`, trường hợp “không có NCC tương đương” của L3.12). Màn có đủ năm lựa chọn: `CHANGE_DATE`, `CHANGE_SERVICE`, `CHANGE_SUPPLIER`, `DROP_SERVICE`, `OTHER`.
- **Hạn phản hồi là một ngày (R18, E3.11).** Hình W36 ghi “12/11/2026 17:00”; R18 tính theo ngày làm việc nên hạn là ngày (mặc định hôm nay + `SALES_RESPONSE_BUSINESS_DAYS` ngày làm việc, không sau ngày trước ngày sử dụng). Không được trước hôm nay, không sau ngày trước ngày sử dụng (400 `dueDate`). Quá hạn từ ngày sau ngày hạn (tính lúc đọc). TB-DH08-03 gửi một lần ở lần chạy nhắc hằng ngày đầu tiên sau ngày hạn (khóa chống lặp `overdue_reminded_at`). Rà soát 17/11/2026: ngày sử dụng là hôm nay hoặc đã qua thì không còn ngày hợp lệ nào (“từ hôm nay” và “trước ngày sử dụng ít nhất 1 ngày” không cùng đúng): W36 để trống ô hạn kèm lý do, không điền sẵn ngày máy chủ sẽ từ chối; ngày sử dụng là ngày mai thì hạn mặc định là hôm nay. W36 kiểm trước bằng chính lược đồ và quy tắc hạn của API (ngày “hôm nay” lấy từ máy chủ, `earliestDueDate`).
- **Đã thử (W36).** Mỗi NCC có lần đặt Không đáp ứng hoặc xác nhận thiếu, kèm lý do của lần gần nhất; ô “lý do” điền sẵn là lý do gần nhất.
- **Rút yêu cầu.** `withdrawReason` là mã `OPERATIONS` (Điều hành rút, lý do gõ ở `withdrawNote`, gửi trong TB-DH08-04), `BOOKING_CANCELLED` (E3.15, ticket 69) hoặc `TOUR_FILE_ENDED` (E3.21: Kết thúc Tour và Kết thúc hồ sơ rút yêu cầu đang chờ và gửi TB-DH08-04). Rút hoặc xử lý thì TB-DH08-01..03 của yêu cầu Đã xử lý (CH02 Phụ lục B).
- **Khối Việc cần làm trước khởi hành (R01).** Bảng R01 không có mục Yêu cầu đổi lịch trình nhưng hợp đồng có khóa `CHANGE_REQUESTS`: dòng này chỉ hiện khi còn yêu cầu Chờ Kinh doanh (“n chờ Kinh doanh, k quá hạn phản hồi”, mở DH08.3 chip Chờ Kinh doanh) và không bao giờ nằm trong “Đã xong”. E3.11 “Mục Đặt dịch vụ trên Tổng quan ghi ‘n quá hạn phản hồi’” (rà soát 17/11/2026): dòng Đặt dịch vụ (`SERVICES`) cũng ghi “n quá hạn phản hồi” (`overdue`) nhưng số của dòng vẫn không tính các hạng mục chờ Kinh doanh (AC102, Q-RS11); hai câu cùng đúng.
- **Chặn gửi khi chờ Kinh doanh (R18, Q-RS11).** Gửi email Đặt, Đặt lại, Đặt phần thiếu có hạng mục Chờ Kinh doanh hoặc Xác nhận một phần có chỉ báo Chờ Kinh doanh bị từ chối cả lần gửi (`422 ITEM_AWAITING_SALES { serviceItemIds }`, không gửi gì); soạn email Đặt phần thiếu cho hạng mục đó không ra email.
- **Chỉ báo NCC ngừng dùng, Dịch vụ đi kèm ngừng dùng (R05, E3.23).** Tính lúc đọc cho hạng mục chưa gửi NCC (Cần đặt, Cần đặt lại, Chờ Kinh doanh): `SUPPLIER_INACTIVE` khi NCC hoặc dịch vụ chính của hạng mục Ngừng dùng, `ADD_ON_INACTIVE` khi một đi kèm Ngừng dùng; mất khi bật lại hoặc hạng mục được Đổi NCC/dịch vụ (hạng mục cũ không còn chưa gửi).
- **TB-DH02-01 (DH02 R04, CH02 Phụ lục A).** Trong giao dịch tắt NCC (một dòng, phần đầu DH03 hoặc hàng loạt), không tạo khi Hoàn tác: hạng mục chưa gửi của hồ sơ chưa Đã đóng có NCC vừa tắt; người nhận mỗi hồ sơ là Điều hành phụ trách (tài khoản đang hoạt động, vai trò hệ thống Điều hành), không có thì nhóm Điều hành; mỗi người nhận một thông báo gộp các NCC, hồ sơ, hạng mục. Bản ghi của thông báo là các NCC, nên Hoàn tác một phần của thao tác hàng loạt bỏ đúng NCC đó (CH02 R05). Thông báo mở DH08.3 của hồ sơ đầu tiên; mỗi Tour Code trong câu là liên kết mở DH08.3 của hồ sơ đó (`ref` = Tour Code có trong `tourCodes`).
- **Quyền của “Nơi đang dùng” (rà soát 17/11/2026).** `GET /api/suppliers/:code/usage` cần `DH02.bat-tat-ncc` (quyền đi tới thao tác tắt ở cả DH02 và DH03), không cần Xem của màn nào: người chỉ có quyền DH02 mở được hộp thoại W07.
- **Nơi đang dùng (DH02 R05, W07, W11; DH03 W08).** `GET /api/suppliers/:code/usage`: hồ sơ chưa Đã đóng có hạng mục của NCC chưa Đã hủy và ngày dùng từ hôm nay; yêu cầu Tour Đang xử lý có dịch vụ của NCC trong hành trình; Tour mẫu Đang dùng có dịch vụ của NCC. Không đọc được thì công tắc lưu như khi không dùng ở đâu (cảnh báo, không chặn).
- **Đổi NCC/dịch vụ có đi kèm (L3.16 bước 1, R21).** `GET …/swap-preview` trả các đi kèm cũ không dùng cho dịch vụ mới và các đi kèm Đang dùng của dịch vụ mới, chưa tích; đi kèm có dấu Giường phụ được tích sẵn với tổng số giường phụ cũ.
- **NCC thay thế ở W28 (L3.7, R05; rà soát 17/11/2026).** Thay bằng mục “Đặt lại sang NCC khác” của ticket 101 bên dưới: bảng trượt không còn soạn email cho NCC khác, Đặt phần còn thiếu không còn danh sách NCC.

## Ticket 105 (20/11/2026): Đổi NCC/dịch vụ chọn từ bảng NCC tương đương — cách hiểu đã chọn

Người dùng chốt 20/11/2026: bảng trượt Đổi NCC/dịch vụ (L3.16, cả Thêm dịch vụ thay thế) chọn NCC trong bảng NCC tương đương có giá tham chiếu, rồi chọn dịch vụ của NCC đó; “tương đương” là cùng loại dịch vụ (không so tên dịch vụ, mỗi NCC đặt tên khác nhau); mặc định cùng Địa điểm, có công tắc Mọi địa điểm; sắp theo giá gần giá tham chiếu của hạng mục; NCC hiện tại đứng cuối. Các điểm người làm tự quyết:

- **Dùng chung API của W28** (`GET …/replacement-options`, ticket 101), thêm tham số `anyLocation=1` để bỏ lọc Địa điểm, và trường `location` của câu trả lời (Địa điểm dùng để lọc, `null` khi không lọc: NCC của hạng mục chưa có Địa điểm, hạng mục chưa có NCC, hoặc `anyLocation`). Công tắc Mọi địa điểm chỉ hiện khi danh sách mặc định có lọc (`location` khác `null`); nhãn cột ghi “Cùng loại dịch vụ, cùng địa điểm: <Địa điểm>”.
- **Dịch vụ đủ điều kiện như W28**: Đang dùng, không phải đi kèm, cùng loại, có giá tham chiếu ở ngày dùng (bộ tính giá chung, số khách của hồ sơ). Ô chọn gộp cũ lấy từ tra cứu dịch vụ (`/service-lookup`) không đòi giá; nay dịch vụ không có giá ở ngày dùng không còn chọn được ở Đổi NCC/dịch vụ (người dùng chốt: “cần có giá để tham khảo”). Thao tác `POST …/swap` không đổi, máy chủ vẫn nhận mọi dịch vụ Đang dùng.
- **Sắp xếp ở web, không đổi thứ tự của API** (W28 vẫn theo tên): NCC có giá thấp nhất cùng loại tiền với giá tham chiếu của hạng mục đứng trước, theo |chênh lệch| tăng dần, bằng nhau thì theo tên; NCC khác loại tiền hoặc hạng mục chưa có giá tham chiếu: theo tên, sau nhóm trên; NCC hiện tại cuối cùng.
- **NCC hiện tại** chỉ với các dịch vụ khác dịch vụ của hạng mục; không còn dịch vụ nào thì không hiện. Nhãn “(NCC hiện tại)” thay cho “(gửi lại NCC cũ)” của W28 vì Đổi không gửi lại.
- **Bảng NCC có tiêu đề cột** NCC, Địa điểm, Giá tham chiếu, dùng chung cho W28 (W28 trước đây ghi Địa điểm dưới tên NCC, không có tiêu đề cột).
- **Không chọn sẵn NCC** ở Đổi (W28 chọn sẵn NCC cũ vì gửi lại là mặc định). NCC chỉ có một dịch vụ thì dịch vụ được chọn sẵn khi tick NCC, như W28.

## Ticket 101 (19/11/2026): Đặt lại sang NCC khác — cách hiểu đã chọn

Người dùng chốt 19/11/2026: W28 có hai bước, Chọn NCC thay thế rồi Chọn dịch vụ của NCC đó; giữ NCC và dịch vụ cũ thì gửi email đặt lại như trước; chọn NCC hoặc dịch vụ khác thì không gửi email, tạo hạng mục mới Cần đặt, hạng mục cũ Đã hủy; Đặt phần còn thiếu chỉ cùng NCC và dịch vụ; hạng mục có đi kèm chọn lại đi kèm của dịch vụ mới ngay ở W28. Các điểm người làm tự quyết để mọi câu của L3.7 cùng đúng:

- **Một API cho cả hai danh sách.** `GET /api/tour-files/:code/service-items/:id/replacement-options` (quyền `DH08.xem`) trả `{ suppliers: [{ code, name, location, former, services: [{ id, name, referencePrice }] }] }`, NCC theo tên, NCC cũ cuối.
- **“Có bảng giá còn hiệu lực ở ngày dùng” của NCC = NCC có ít nhất một dịch vụ ở bước Chọn dịch vụ.** Dịch vụ ở bước này: Đang dùng, không phải đi kèm, cùng loại dịch vụ với dịch vụ của hạng mục, có giá tham chiếu ở ngày dùng của hạng mục (bộ tính giá chung, số khách của hồ sơ, như Đổi NCC/dịch vụ). Có giá nghĩa là có hợp đồng áp dụng ngày đó và có dòng giá khớp; NCC có hợp đồng mà không dịch vụ nào có giá thì không có gì để chọn nên không hiện.
- **“Cùng khu vực” = cùng Địa điểm (DH03) với NCC của hạng mục.** NCC của hạng mục chưa khai Địa điểm thì không lọc theo khu vực (không có gì để so; lọc “chỉ NCC chưa có Địa điểm” sẽ bỏ gần hết NCC).
- **NCC cũ** có trong danh sách khi còn Đang dùng (DH02 R04), dù không còn giá: dịch vụ của hạng mục đứng đầu (giá tham chiếu theo ngày dùng, có thể trống), sau đó là các dịch vụ khác của NCC cũ đủ điều kiện. Chọn dịch vụ khác của NCC cũ cũng là “dịch vụ khác” và tạo hạng mục thay thế.
- **Giá tham chiếu của NCC** là giá thấp nhất trong các dịch vụ của NCC đó; chênh lệch chỉ hiện khi cùng loại tiền với giá tham chiếu của hạng mục. Mặc định giữ NCC và dịch vụ của hạng mục (chưa có dữ liệu tỷ lệ xác nhận để chọn “NCC rẻ nhất có tỷ lệ xác nhận cao”); “Không còn NCC tương đương” khi ngoài NCC và dịch vụ cũ không còn lựa chọn nào.
- **Tạo hạng mục thay thế dùng chính thao tác Đổi NCC/dịch vụ** (`POST …/service-items/:id/swap`, quyền `DH08.doi-ncc-dich-vu`, một giao dịch, QT03 như L3.16). Lý do bắt buộc như L3.16, điền sẵn lý do Không đáp ứng của lần đặt gần nhất. Người không có `DH08.doi-ncc-dich-vu` chỉ thấy NCC và dịch vụ cũ (gửi lại).
- **Máy chủ chặn đặt cho NCC khác.** Soạn email Đặt lại, Đặt phần thiếu với `supplierCodes` khác NCC của hạng mục → 400 `{ 'supplierCodes.<id>': 'serviceBookings.errors.supplierFixed' }` như email Đặt (hạng mục có đi kèm giữ 422 `SAME_SUPPLIER_ONLY`, E3.22, AC94); gửi thẳng email Đặt lại, Đặt phần thiếu cho NCC khác → 400 `{ 'emails.<i>.serviceItemIds': 'serviceBookings.errors.otherSupplier' }` như email Đặt, không gửi gì. Hạng mục chưa có NCC (L3.4) vẫn chọn được NCC Đang dùng bất kỳ.

## Ticket 63 (17/11/2026): Dịch vụ đi kèm và giường phụ trong hồ sơ — cách hiểu đã chọn

- **Ngày dùng của từng dòng đi kèm (R21 “ngày dùng từ – đến”).** Mỗi dòng đi kèm của hạng mục lưu ngày từ – đến: đêm liền nhau cùng đi kèm, cùng số lượng gộp một dòng (đến = ngày trả phòng sau đêm cuối, như hạng mục lưu trú); khác số lượng thì dòng mới. Hạng mục một ngày: từ = đến = ngày dùng. Thêm dịch vụ (L2.5) và Đổi NCC/dịch vụ (L3.16): đi kèm dùng đúng ngày của hạng mục. Dòng phụ ở DH08.2, DH08.3: “kèm: Giường phụ × 1 (18/11 – 20/11)”, phần ngày tách riêng để chữ “kèm: Giường phụ × 1” đọc được một mình như AC91.
- **Số yêu cầu của một đi kèm.** Đi kèm có nhiều dòng (khác số lượng theo đêm) tính số lớn nhất (như số giường phụ của đợt ở E4.8) khi so số xác nhận, tính phần thiếu và ghi kết quả.
- **Xác nhận một phần vì đi kèm (R02 bước 4/5, R21).** Số xác nhận của đi kèm = Σ số xác nhận đi kèm của các lần đặt Đã xác nhận còn hiệu lực. Ghi kết quả Đã xác nhận hoặc Xác nhận một phần cho lần đặt có đi kèm phải có một dòng cho từng đi kèm của lần đặt (5.2 “Bắt buộc: Có khi lần đặt có đi kèm”; rà soát 17/11/2026 thay cách hiểu cũ “không gửi dòng đi kèm là xác nhận 0”): thiếu dòng → 400 `VALIDATION_FAILED` trên trường `addOns`; NCC không có đi kèm thì ghi số xác nhận 0 (Đi kèm thiếu). Màn W26, W26b luôn có dòng đi kèm điền sẵn số yêu cầu và đơn giá (giá tham chiếu của đi kèm khi cùng loại tiền lần đặt, trống khi khác, E3.24). Số xác nhận đi kèm 0 … số yêu cầu; đi kèm không thuộc lần đặt hoặc một đi kèm ghi hai dòng bị từ chối (400 theo trường `addOns.<i>.serviceId`).
- **Đặt phần còn thiếu khi chỉ thiếu đi kèm (E3.22, AC94).** Email chỉ hỏi phần thiếu: dịch vụ chính còn thiếu (nếu có) và từng đi kèm còn thiếu (yêu cầu − đã xác nhận − đang chờ). Dịch vụ chính không thiếu thì email không có dòng dịch vụ chính; mỗi đi kèm thiếu thành một dòng đánh số riêng (ngày, tên, số lượng). Lần đặt tạo ra có số yêu cầu dịch vụ chính 0 và các đi kèm thiếu; Ghi kết quả của lần đặt này không có ô số lượng và giá dịch vụ chính.
- **Dòng đi kèm của email điều chỉnh (R19, AC97).** Thay đổi đi kèm ghi mỗi đi kèm một dòng “- Giường phụ: 1 → 2” (đi kèm thêm từ 0, bỏ về 0) thay cho dòng chung “Dịch vụ đi kèm: … → …”.
- **Soạn email điều chỉnh cho hạng mục không có lần đặt còn hiệu lực** (ví dụ hạng mục Cần đặt vừa được thay đổi chương trình cập nhật): không có email (200 `{ emails: [] }`), vì không có gì đã báo NCC để điều chỉnh (AC97).
- **Lần đặt trả `addOns` theo đi kèm đã hỏi** `{ serviceId, name, requestedQuantity, confirmedQuantity, unitPrice }` (null trước khi có kết quả; 0 khi lần đặt đã xác nhận trước ticket 63 mà đi kèm không được ghi).

## Cách hiểu đã chọn khi làm Booking đã hủy (R14; ticket 69, 17/11/2026)

- **Hạng mục của Booking đã hủy (R14, E3.16).** Tính lúc đọc (Q6), như hạng mục bị bỏ: còn lần đặt Đã gửi hoặc Đã xác nhận chưa gửi hủy thì Cần hủy, không còn thì Đã hủy (gồm Cần đặt, Cần đặt lại). “Dịch vụ chưa dùng” khi Booking hủy lúc hồ sơ Đang diễn ra: ngày sử dụng đầu tiên sau ngày hủy (ngày nghiệp vụ của lúc hủy, không phải hôm nay lúc đọc, để trạng thái không đổi theo ngày); dịch vụ khác giữ trạng thái. Hồ sơ chưa bắt đầu khi hủy: mọi hạng mục.
- **Email hủy soạn sẵn.** Bản nháp `kind CANCEL` của hồ sơ có Booking đã hủy chỉ gồm hạng mục Cần hủy (một email mỗi NCC); soạn email Đặt, Đặt lại, Đặt phần thiếu, Điều chỉnh → 422 `BOOKING_CANCELLED`; gửi chỉ nhận email Hủy (và gửi lại email Hủy).
- **DH07 Cần xử lý “Gửi hủy n NCC” (DH07 R07, AC28).** API trả `pendingWork { kind: 'SEND_CANCELLATIONS', suppliers }` = số NCC (của hạng mục) có hạng mục Cần hủy. Web DH07 hiện dòng này ở cột Cần xử lý (rà soát 17/11/2026); ticket 91 làm đủ các dòng khác của R07 (DH07 GHI-CHU), “n việc” dùng chung cách tính R01 với khối Việc cần làm (`TourFileReadiness`).
- **W06 (L3.9, R14; rà soát 17/11/2026).** Banner đỏ ở Tổng quan và DH08.3: “Booking đã bị hủy lúc … · Lý do: …”, thêm số lần đặt còn hiệu lực chưa gửi hủy và số NCC (L3.9 “banner nêu lý do, số lần đặt còn hiệu lực và số NCC”; hình không ghi số). Tổng quan thay Việc cần làm bằng “Việc cần làm để đóng hồ sơ”, ẩn Lịch trình: (1) gửi yêu cầu hủy: n lần đặt = lần đặt Đã gửi/Đã xác nhận của hạng mục Cần hủy chưa gửi hủy, m NCC = NCC của hạng mục Cần hủy; nút “Soạn email hủy (m NCC)” (quyền `DH08.dat-dich-vu`) mở DH08.3 `?filter=CANCEL_ALL`, soạn bản nháp email Hủy của mọi hạng mục Cần hủy, mỗi NCC một email; (2) ghi kết quả hủy a/b: b = yêu cầu hủy đã gửi từ lúc hủy Booking + lần đặt còn phải gửi, a = yêu cầu đã ghi kết quả; (3) Kết thúc hồ sơ (chỉ hồ sơ Mới tạo; hồ sơ Đang diễn ra kết thúc bằng Kết thúc Tour nên không có bước 3). Nút Soạn email hủy là nút chính màu xanh, không đỏ như hình (K6.04: đỏ chỉ cho lỗi; như hộp thoại Hủy Booking ở KD08). Nút Kết thúc hồ sơ ở phần đầu (hộp thoại, API `end-cancelled` đã có) chưa có trên web; ticket làm hộp thoại Kết thúc hồ sơ thêm nút vào header.

## Cách hiểu đã chọn: kết quả ghi lại sau khi đã có khoản phải trả (R10; review ticket 81, 18/11/2026)

- R10 “Kết quả đã liên kết khoản phải trả: DH08 chỉ cho sửa ghi chú và mã” hiểu là không *sửa* kết quả đã liên kết. Câu trả lời của NCC cho lần điều chỉnh đã gửi (L3.11) vẫn ghi ở DH08.3, nhưng loại tiền khóa theo khoản phải trả (máy chủ từ chối 400 `price.currency: serviceBookings.errors.priceCurrencyLocked`, như khóa loại tiền phí hủy); giá, số lượng mới vào KT01.2 thành dòng “Giá xác nhận đổi” để Kế toán điều chỉnh khoản (RSD KT01 E2.13, L2.4). Chi tiết ở `docs/rsd/KT01/GHI-CHU-LAM-VIEC.md`.

## Ticket 75 (18/11/2026): mục Do HDV ghi ở DH08.6 — cách hiểu đã chọn

- **Lịch sử hồ sơ (2.4, R20).** R20 ghi mỗi lần Điều hành sửa, xóa mục Do HDV ghi vào QT03 và lịch sử hồ sơ; RSD HD01 mục 2.5 ghi mọi lần ghi, sửa, xóa của HDV vào lịch sử DH08. Để lịch sử đủ cho cả hai nguồn, mọi lần ghi, sửa, xóa nhật ký hoặc sự cố (Điều hành hay HDV) thêm một dòng lịch sử `LOG_ENTRY_ADDED`, `LOG_ENTRY_UPDATED`, `LOG_ENTRY_DELETED` với người thao tác, mã mục (`entryId`), loại, nguồn, giá trị trước và sau (nội dung, cách xử lý, kết quả); dòng của mục nguồn HDV có thêm “Do HDV ghi”.
- **W58 (L6.4, mã giữ chỗ chưa có hình).** Mục Do HDV ghi có nút Sửa trên dòng thời gian (người có `DH08.nhat-ky-su-co`, hồ sơ chưa Đã đóng), mở bảng trượt: thời điểm, người ghi, người sửa gần nhất chỉ đọc; nội dung (nhật ký) hoặc nội dung, cách xử lý, kết quả (sự cố); chân có Xóa (trái), Quay lại, Lưu thay đổi. Khoản liên kết đã ghi công nợ thì Xóa khóa, ghi “Chi phí đã được Kế toán ghi nhận · không xóa được” (E6.3). Mục đã bị xóa ở phiên khác: “Mục không còn”, bảng đóng, dòng thời gian tải lại (E6.2).
- **Dòng thời gian.** Mục đã được sửa ghi thêm “Sửa bởi <họ tên> · <thời điểm>” (R20 “lịch sử ghi người sửa”, RSD HD01 L3.1).

## Ticket 76, sửa sau review (18/11/2026): nguồn dòng chi phí thực tế, khoản đã ghi công nợ — cách hiểu đã chọn

- **“Đổi ô” ở R20 là ô số tiền.** R20 câu “Lưu bước 1 chỉ gán nguồn và người ghi cho dòng mà người dùng đổi ô” đọc cùng câu sau của chính R20 (“Dòng chi phí thực tế mà Điều hành lưu số khác thì đổi sang nguồn Điều hành”), câu đầu R20 (“lấy nguồn và người ghi theo lần lưu số gần nhất”), L8.1 (“lưu số khác thì dòng đổi sang nguồn Điều hành”), AC83 (“khi Điều hành không đổi số”) và RSD HD01 R04 (“Điều hành lưu số khác”). Vì vậy dòng đã có số mà Điều hành chỉ đổi lý do hoặc chứng từ thì lý do, chứng từ được lưu (QT03 ghi giá trị trước và sau), còn nguồn và người ghi giữ nguyên: dòng Do HDV ghi vẫn của HDV, HDV vẫn sửa được ở HD01 (scenario `hd01/costs-review` DH08-AC83). Dòng chưa có số (đang là Gợi ý) mà Điều hành lưu kèm lý do hoặc chứng từ vẫn thành dòng nguồn Điều hành như trước.
- **Khoản đã ghi công nợ (E7.2, R20 “Quy tắc ghi giữ nguyên”).** “Chỉ cho bổ sung chứng từ và ghi chú”: lần sửa ở DH08.7 hay HD01 (một bước ghi dùng chung) chỉ được thêm chứng từ; đổi ngày, nội dung, số tiền, loại tiền, NCC, Gợi ý thu lại hoặc bỏ chứng từ đã lưu trả 422 `COST_RECORDED`. DH08.7 hiện “Sửa tại KT01” thay nút Sửa trên khoản đã ghi (L7.1) nên chỉ HD01 có form thêm chứng từ; ô ghi chú (chưa có cột ở 5.1) là việc của ticket 82.

## Cách hiểu đã chọn khi code (ticket 82, 18/11/2026)

- **Ghi chú của chi phí phát sinh (E7.2).** Thêm trường Ghi chú (không bắt buộc, tối đa 1.000 ký tự; cột `tour_file_extra_costs.note`) ở bảng trượt W61 và form HD01; hiện dưới nội dung trên dòng DH08.7. Khoản đã ghi công nợ: lần sửa chỉ được thêm chứng từ và sửa ghi chú, trường khác vẫn 422 `COST_RECORDED` (thay câu “ô ghi chú là việc của ticket 82” ở mục ticket 76). DH08.7 giữ “Sửa tại KT01” thay nút Sửa (L7.1, liên kết tới KT01.3 với người xem được KT01.3) và thêm nút chữ “Bổ sung chứng từ, ghi chú” mở bảng trượt chỉ có chứng từ (thêm, không bỏ chứng từ đã lưu) và ghi chú.
- **L7.2 (W63).** Ô chọn và thanh hàng loạt chỉ với người có `KT01.ghi-cong-no-phat-sinh`; “Ghi công nợ (n) tại KT01.3 ↗” mở `/ledger?tab=tours&tour=…&record=…` với bảng trượt W26 của KT01.

## Cách hiểu đã chọn khi code quyết toán (ticket 83, 18/11/2026)

- **Phần quy đổi (R15, W72).** Khối Tỷ giá quy đổi có một dòng cho mỗi giao dịch Hiệu lực trên mỗi khoản (phần đã thu, đã trả theo ngày giao dịch; phiếu hoàn của NCC là số âm), một dòng phần còn lại của mỗi khoản đã liên kết KT01 (ngày lưu) và một dòng cho mỗi khoản chưa liên kết KT01 (ngày lưu). Khoản bằng VND không cần tỷ giá nên không có dòng. Mỗi dòng làm tròn half-up tới 1 ₫; doanh thu, chi phí là tổng các dòng.
- **Khoản liên kết KT01 tính một lần (R15).** Dòng bước 1 của một dịch vụ tính theo từng lần đặt Đã xác nhận (cùng loại tiền): lần đặt đã có khoản phải trả KT01 lấy giá trị khoản đó (phần đã trả theo ngày từng giao dịch, phần còn lại theo ngày lưu); phần chưa liên kết là số bước 1 trừ giá trị xác nhận của các lần đặt đã liên kết (không nhỏ hơn 0), quy theo ngày lưu. Dòng mà mọi lần đặt đều đã liên kết thì chỉ lấy số KT01; chưa lần đặt nào liên kết thì lấy cả số bước 1. Mỗi số được tính một lần (sửa sau review: trước đây dòng liên kết một phần lấy cả số bước 1 theo ngày lưu). Dòng Phí hủy NCC lấy giá trị khoản phải trả khi khoản đó đã áp dụng lần hủy (điều chỉnh theo phí, hoặc khoản ghi thẳng từ phí); lần hủy chưa áp dụng vào khoản phải trả thì lấy phí đã ghi ở DH08.3 (không lấy giá trị cũ của khoản). Chi phí phát sinh đã ghi khoản phải trả lấy giá trị khoản đó, chưa ghi thì lấy số DH08.7.
- **P&L dự tính (R15 v2.6).** Giá bán = tổng của phiên bản báo giá Chốt Booking đang dùng, giá vốn = tổng giá vốn của bảng tính phiên bản đó; quy VND bằng một dòng “Giá bán dự tính (báo giá Chốt)” trong khối Tỷ giá quy đổi (ngày lưu, sửa được như dòng khác, thiếu tỷ giá thì khóa Lưu như E8.3). Booking đã hủy: không có dòng, P&L dự tính trống.
- **Kết quả đối chiếu AR, AP (W72; 5.2 “Có”, mặc định “Từ KT01”; 5.1 phiên bản lưu kết quả đối chiếu).** Mỗi kết quả gồm số KT01 đã đối chiếu (khối AR: phải thu, giá trị Booking, đã thu, còn phải thu; khối AP: bảng theo NCC hoặc người nhận khác, số KT01 và số thực tế) và chữ Kế toán ghi. Màn hình điền sẵn hai ô bằng số KT01 của hai khối (nhãn “Từ KT01”), Kế toán sửa được; ô bỏ trống báo bắt buộc và khóa Lưu. API: `arCheck`, `apCheck` là chữ, không được rỗng; không gửi thì kết quả là số KT01 (không kèm chữ), không bao giờ trống; phiên bản luôn lưu số KT01 của cả hai khối (cột `ar_check`, `ap_check` dạng JSON `{ kt01, text }`). Sửa sau review: trước đây hai ô không bắt buộc, gửi null và không lưu bảng AP.
- **Ghi chú của phiên bản.** Không có dòng RSD nào cho ghi chú riêng của phiên bản quyết toán nên không có trường `note` (bỏ sau review).
- **Điều chỉnh (R15).** Mỗi điều chỉnh là số VND nguyên, có dấu, khác 0, kèm lý do bắt buộc; điều chỉnh ròng là tổng có dấu.
- **Biên.** API trả `marginPercent` 2 chữ số thập phân; màn hình hiện 1 chữ số như RSD (17,1%).
- **“KT01 có giao dịch mới” (E8.8).** Mỗi phiên bản giữ danh sách giao dịch KT01 của Tour (thu, hoàn của Booking; chi trả, nhận hoàn của các khoản phải trả của Tour) và điều chỉnh (lần lưu, sửa điều chỉnh sau hủy Booking; điều chỉnh khoản phải trả) đã tính. Chỉ báo đếm những cái chưa có trong phiên bản Hiện hành, kèm thời điểm mới nhất; lưu phiên bản mới thì hết.
- **E8.4.** Bản nháp trả `basis` (từng phần quy đổi kèm số tiền, loại tiền, ngày; tình trạng điều chỉnh của Booking đã hủy); lần Lưu gửi lại thì máy chủ so và trả 409 `SETTLEMENT_SOURCE_CHANGED` với `changes`: mỗi số đã đổi gọi tên theo dòng của khối Tỷ giá quy đổi, kèm số trước và sau (null khi phần mới có hoặc đã mất). Màn hình hiện banner liệt kê từng số đã thay đổi và nút Tải lại số liệu, giữ số đã nhập; không ghi đè ngầm. Lưu qua API không gửi `basis` (không có bản nháp nào được hiện cho người lưu) thì không có gì để so và lưu số tại lúc lưu: hợp đồng và scenario lưu không qua bản nháp nên `basis` không bắt buộc. Sửa sau review: trước đây banner chỉ hiện số lượng.
- **Ngày tỷ giá (E8.3, AC66).** Cột Ngày tỷ giá ghi ngày đủ (“20/11/2026”, thêm “gần nhất” khi khác ngày cần) theo chữ của E8.3 và AC66 (hình W72 ghi ngày/tháng); nhãn của phần (“Thu đợt 1 · 21/10”) giữ ngày/tháng như W72.
- **Chỉ báo Đã quyết toán (R16).** Có phiên bản Hiện hành thì chỉ báo Đã quyết toán ở header và DH07, kể cả sau khi mở lại (chỉ báo độc lập với trạng thái hồ sơ).
- **Quyền.** Xem tab và các phiên bản: `DH08.xem`. Bản nháp (W72) và Lưu: `DH08.quyet-toan`. Lưu không đổi trạng thái hồ sơ, không qua chốt hồ sơ đã đóng (R16), ghi một mục QT03 (Tạo mới, đối tượng hồ sơ Tour, trường “Phiên bản quyết toán”).
- **TB-DH08-08.** Gửi nhóm Kế toán khi hồ sơ có phiên bản Hiện hành và chi phí thực tế đổi: lần Lưu bước 1 có dòng đổi (số, lý do hoặc chứng từ), HDV ghi hay xóa số ở HD01, Điều hành Bỏ số HDV.
- **Sau khi lưu (W73).** Kế toán thấy nút “Lưu phiên bản mới” trên banner xanh để mở lại W72; bấm “Xem” ở một phiên bản trước để xem số của phiên bản đó.

## Ô chọn ngày của DH08.6 (ticket 87, sửa sau review 18/11/2026)

- **L6.1 “ô chọn ngày lọc ngay”** là bộ lọc ngày của bộ kit (một ngày hoặc một khoảng Từ – Đến, cạnh các chip), lọc theo ngày Tour của mục (thời điểm ghi, giờ Việt Nam). Ô chỉ thu hẹp danh sách mục; số trên chip và số trên tab giữ của cả hồ sơ (2.1). QT12 (L7.1 bước 2) mở tab với `?tab=log&filter=INCIDENTS&from=&to=` là kỳ của báo cáo; API `GET /api/tour-files/:code/log-entries?filter=&from=&to=`.
