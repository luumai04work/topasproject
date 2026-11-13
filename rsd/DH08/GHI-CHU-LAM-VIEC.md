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
- Tự xếp phòng tạo n phòng 3 người lớn theo số giường phụ của hạng mục, ghi chú Giường phụ; lệch số chỉ cảnh báo (không kiểm tra sức chứa như đã chốt).
- Đi kèm ngừng dùng ở DH03 với hạng mục chưa gửi: chỉ báo, không khóa, không thông báo riêng.

**Thay đổi cần làm ở màn khác (không thuộc đợt này):**
- RSD DH07 R03 (bóc tách Booking thành hạng mục): đưa đi kèm của dòng dịch vụ vào hạng mục của dịch vụ chính, gộp đêm liền nhau cùng số lượng (DH08 R21).
- RSD KT01 R08 (giá trị phải trả = giá xác nhận × số lượng): đọc giá trị xác nhận của lần đặt gồm phần đi kèm (DH08 R10).

**Hình chưa cập nhật:** W13 (khối Dịch vụ đi kèm), W26, W26b, W27 (dòng đi kèm), W45 (ghi chú Giường phụ). Không thêm mã W.

**Kiểm tra.** `check-rsd.py`: 74 ảnh, 74 mã W, không lỗi.
