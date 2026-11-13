# RSD KD03 · Danh sách khách hàng và KD04 · Hồ sơ khách hàng

**TOPAS · Module Kinh doanh · Phiên bản 1.5 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

- **Nguồn nghiệp vụ.** `docs/flows/danh-sach-man-hinh-level1.md` (KD03, KD04, KD04.1–KD04.3; KD04.4 bỏ theo C3), `docs/flows/danh-sach-tinh-nang-level1.md` (TN02.02, TN02.03, TN02.04, TN10.01, TN10.03), `docs/flows/level 1/sys02.md` (SYS02.03–SYS02.05), `docs/flows/level 1/sys10.md` (SYS10.01–SYS10.10), `docs/flows/level 1/sys09.md` (SYS09.04), `docs/flows/danh-sach-tinh-nang-ho-tro-level1.md` (DX06), RSD DH08 v2.8 (đóng Tour bằng nút ở header, ghi lịch sử khách ở KD04.2; R16 ngày đóng lần đầu, đóng Tour không cần quyết toán), RSD KD05 v1.4 (nhóm trạng thái yêu cầu), RSD KD08 v1.5 (hủy Booking), RSD QT05 v1.2 (mục 1.5 phòng sửa danh mục), `docs/rsd/BOI-CANH-DU-AN.md`, `docs/QUYET-DINH-PHASE-CODING.md` và các quyết định đã chốt với người dùng ngày 11/11/2026 và 12/11/2026.
- **Quyết định 11/11/2026.** Khách hàng có hai loại, Cá nhân và Doanh nghiệp; doanh nghiệp có nhiều người liên hệ. Mọi người Kinh doanh xem chung mọi khách. Chỉ xóa được khách chưa dùng; không có trạng thái ngừng giao dịch. Tạm bỏ hạng khách hàng. Sửa 12/11/2026: sửa khách, chuyển người phụ trách (kể cả hàng loạt), xóa khách theo quyền ở QT02, không còn luật chỉ người phụ trách được sửa (Q1); phần chăm sóc và khảo sát bỏ khỏi phạm vi (C3).
- **Thay đổi ở v1.1.** Sắp xếp lại theo khung 6 mục, không đổi nghiệp vụ: vị trí, kiểu thao tác và phản hồi giao diện (mục 8 cũ) gộp vào từng bước luồng; bỏ mục Wireframe riêng (mục 6 cũ), mỗi hình chỉ nhúng một lần dưới bước hoặc ngoại lệ; nút ở phần đầu, số trên tab và banner gộp vào mục phần đầu hồ sơ (2.4); quy tắc giao diện dùng chung (8.1 cũ) gộp với xử lý dùng chung (4.3 cũ) thành mục 2.7; bỏ bảng Sự kiện tự động, phần chưa có đưa vào R04, R06, R09; dữ liệu gửi ra ngoài chuyển về mục 5.3. Mã L, E, R, W, AC giữ nguyên.
- **Thay đổi ở v1.5 (12/11/2026).** Cập nhật theo quyết định phase coding (`docs/QUYET-DINH-PHASE-CODING.md`). C3: bỏ trọn tab KD04.4 Chăm sóc và phản hồi (mục 3.8, R07, R09, R11, W28–W31 bỏ nhúng), chip và chỉ báo Cần chăm sóc sau Tour (L1.2, W02 bỏ nhúng), cột Chăm sóc gần nhất, trường Nhận email chăm sóc và Ghi chú nguồn đồng ý, lối KD04.4 ↔ KD10; điều kiện xóa khách chỉ còn chưa có yêu cầu Tour. Giữ KD04.2 Lịch sử Tour. Q1: 1.4 thành bảng quyền mặc định theo vai trò, cấu hình ở QT02; bỏ luật chỉ người phụ trách sửa, dòng “🔒 Chỉ xem · do … phụ trách”, ô viền nét đứt; mở KD08, DH08 theo quyền. Q5: lịch sử Tour ghi trong cùng giao dịch đóng Tour; bỏ L6.3, E6.3, banner W23, đối soát hằng đêm. Q8: E3.4 chỉ có Tải lại. Q2: thông báo in-app. Q7: mã khách cho phép thủng số. AC bỏ: AC06–AC08, AC32, AC36–AC42, AC45 (giữ mã). Không dựng lại hình.
- **Thay đổi ở v1.5 (bổ sung 12/11/2026 · sau rà soát HD01).** Mục 5.1 dòng Khách hàng và Người liên hệ: thêm HD01 vào cột màn đọc (điện thoại của người liên hệ của Booking cho HDV được phân công; RSD HD01 R12). Không đổi luồng, quyền, AC.
- **Thay đổi ở v1.4 (12/11/2026).** Theo rà soát mâu thuẫn lần ba. Bảng quyền 1.4: Quản trị hệ thống mở KD08, DH08 chỉ xem và chuyển người phụ trách Booking ở KD08, khớp R03 và RSD KD08 R11. R13: danh mục quốc gia thuộc Kinh doanh, danh mục ngôn ngữ thuộc Điều hành (RSD QT05 mục 1.5; Quản trị sửa được mọi nhóm). 5.2 thêm trường Ghi chú nguồn đồng ý, bắt buộc khi bật lại Nhận email chăm sóc sau khi khách tự hủy nhận (R11). Mở lại Tour ghi “khi hồ sơ được mở lại ở DH08” thay cho “khi Điều hành mở lại Tour”, vì Quản trị hệ thống cũng mở lại được (RSD DH08 R16) (2.6, E6.1, R06; chú thích W22). Cập nhật phiên bản dẫn chiếu ở Nguồn nghiệp vụ, thêm RSD QT05 v1.2. Dựng lại W22 (chỉ đổi chú thích ở index). Tên tệp lên v1.4.
- **Thay đổi ở v1.3 (12/11/2026).** Đồng bộ sau rà soát lần hai, không đổi nghiệp vụ và wireframe: Điều hành đóng Tour bằng nút ở header DH08, không còn ở tab DH08.8 (RSD DH08 R16); bỏ cụm “kể cả khi đóng sau quyết toán” vì đóng Tour không cần quyết toán. Sửa mục 1.2, 1.5, L6.1, R06, AC30. Nguồn nghiệp vụ: DH08 v2.7, KD08 v1.4.
- **Thay đổi ở v1.2 (12/11/2026).** Đồng bộ sau rà soát mâu thuẫn giữa các RSD:
  - Nhóm yêu cầu theo RSD KD05 v1.3: Đã có Booking chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu Đã hủy (mục 2.2, 2.6, R08, AC44 mới). Số liệu minh họa không đổi (mọi Booking trên hình là Hiệu lực).
  - Quản trị hệ thống mở KD08, DH08 từ KD04, chỉ xem (mục 1.4, R03).
  - Điều kiện xóa khách: chưa có yêu cầu Tour và chưa có lần gửi chiến dịch nào, kể cả Gửi lỗi; thêm lý do chặn “đã có lần gửi chiến dịch” (mục 2.5, L5.1, E5.1, E5.2, R05, AC27, AC28; W19, W20).
  - Lịch sử Tour và Tour đã đi không tính hồ sơ kết thúc vì Booking đã hủy; Cần chăm sóc sau Tour, Tour gần nhất dùng ngày đóng lần đầu (mục 2.2, 2.6, L6.1, R06, R07, AC44).
  - Kết quả lần gửi theo RSD KD10: Đang gửi, Đã gửi, Gửi lỗi; Survey thêm Hết hạn chưa phản hồi; chỉ báo Hủy nhận; khách tự hủy nhận ghi chiến dịch và lần gửi nguồn (mục 2.6, R09, R11, AC42, AC45 mới).
  - Lối KD04.4 → KD10 mở tab Lịch sử gửi, ô tìm điền sẵn mã khách (mục 1.2).
  - Tên tab “Chăm sóc và phản hồi” khớp RSD KD10 (mục 2.4, L1.2, L8.1, AC08; dựng lại W08–W26, W28–W31).
  - Tham chiếu RSD DH08 v2.4.
- **Cách đọc.** Mục 3 mô tả luồng theo màn và tab. Mỗi bước ghi mã W, chỗ bấm, thao tác của người dùng và phản hồi của hệ thống; hình wireframe nằm ngay dưới bước. Mục 4 ghi quy tắc (mã R) mà các bước dẫn tới.
- **Wireframe.** Ảnh chụp từ khung HTML desktop, 1280 × 800 px. Chụp lại bằng `node build.js` trong `wireframes-src`.
- **Dữ liệu trên hình.** Tên, mã và số liệu chỉ dùng để minh họa. Hôm nay trên hình là 11/11/2026. Người dùng minh họa: Nguyễn Hoàng Nam và Lê Thu Hà (Kinh doanh), Đỗ Quang Huy (Quản trị hệ thống). Từ v1.5 các hình chưa dựng lại: thanh bên còn mục Chăm sóc khách hàng; hình KD03 còn chip Cần chăm sóc sau Tour và cột Chăm sóc gần nhất; hình KD04 còn tab Chăm sóc và phản hồi và trường Nhận email chăm sóc (bỏ theo C3); trường chỉ đọc còn viền nét đứt (nay hiện dạng chữ, U5).

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác kèm wireframe
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

KD03 là điểm vào của khách hàng; KD04 là nơi duy nhất nhập và sửa thông tin khách hàng, đồng thời gom mọi thứ Kinh doanh cần biết về một khách: Tour đã đi, yêu cầu và Booking. Mục tiêu thiết kế:

- **Không tạo trùng khách.** Tìm theo cả tên, email, điện thoại của người liên hệ doanh nghiệp. Khi lưu, hệ thống cảnh báo hồ sơ có thể trùng và cho mở thẳng hồ sơ đã có; vẫn tạo thì phải ghi lý do.
- **Ít nhập lại.** Ngôn ngữ giao tiếp gợi ý theo quốc gia; người phụ trách là người tạo; lịch sử Tour tự ghi khi Điều hành đóng Tour; Tạo yêu cầu Tour mở hồ sơ yêu cầu với khách, liên hệ chính và ngôn ngữ phục vụ điền sẵn.
- **Xem chung, sửa theo quyền.** Mọi người Kinh doanh thấy đủ thông tin để tiếp khách và sửa theo quyền ở QT02; người phụ trách chỉ là thông tin (chip Khách của tôi, người nhận thông báo; Q1). Khi nhân viên nghỉ, Quản trị chuyển hàng loạt khách sang người khác.

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Menu Kinh doanh → Khách hàng | Mở KD03 với bộ lọc lần trước, nhớ theo người dùng cả sau khi đăng xuất (U3); lần đầu là chip Khách của tôi, tức chip Của tôi bật sẵn (Quản trị: chip Tất cả), sắp theo tên. |
| KD03 → KD04 | Bấm dòng mở hồ sơ; tab đích theo R10. Bấm Tạo khách hàng mở KD04 ở chế độ tạo mới. |
| KD04 → KD03 | Breadcrumb Khách hàng hoặc nút quay lại của trình duyệt trả về KD03 với bộ lọc, trang và vị trí cuộn giữ nguyên. |
| KD06.1 → KD04 | Bấm tên khách trong hồ sơ yêu cầu mở KD04.1 (RSD KD06). Tạo nhanh khách trong KD06.1 dùng cùng R01, R02 của bản này. |
| KD04 → KD06 | Tạo yêu cầu Tour mở KD06 mới với khách hàng điền sẵn (W27). Bấm mã yêu cầu ở KD04.3 mở KD06 của yêu cầu đó. |
| KD04.3 → KD08 | Bấm mã Booking mở KD08, nếu người dùng có quyền xem KD08 (R08). |
| KD04.2 → DH08 | Bấm Tour Code mở DH08 ở chế độ chỉ đọc (RSD DH08 AC01), nếu người dùng có quyền xem DH08. |
| DH08 (nút Đóng Tour ở header) → KD04.2 | Điều hành đóng Tour: hệ thống ghi mục lịch sử Tour cho khách trong cùng giao dịch (R06; Q5). Không có thao tác người dùng ở KD04. |

### 1.3. Ranh giới

- KD03, KD04 **sở hữu**: hồ sơ khách hàng (thông tin, người liên hệ, nguồn khách, ghi chú và sở thích), người phụ trách khách hàng, mục lịch sử Tour của khách, lý do vẫn tạo khi trùng.
- KD04 **không sở hữu** và chỉ đọc: yêu cầu Tour và phiên bản báo giá (KD06), Booking (KD08), hồ sơ Tour và dịch vụ của Tour (DH08). Muốn sửa thì mở màn sở hữu.
- **Hạng khách hàng tạm bỏ** khỏi bản này (quyết định 11/11/2026): không có cột, bộ lọc hạng ở KD03, không có hạng ở phần đầu KD04, không có tính hạng ở KD04.2. Tab KD04.2 đổi tên thành Lịch sử Tour. DX06 giữ ở danh sách việc sau.
- **Chăm sóc khách và khảo sát ngoài phạm vi** (C3): không có tab KD04.4, ghi nhận chăm sóc, trường đồng ý nhận email, chỉ báo cần chăm sóc sau Tour.
- Thông tin khách đoàn (hộ chiếu, visa, phân phòng) thuộc DH08.4 theo từng Tour, không lưu ở hồ sơ khách hàng.
- KD03, KD04 không gửi gì ra ngoài hệ thống.

### 1.4. Quyền mặc định theo vai trò

Bảng dưới là quyền mặc định (màn hoặc phần × thao tác); Quản trị hệ thống cấu hình ở QT02. Không có phạm vi bản ghi: người có quyền một thao tác làm được trên mọi khách (Q1).

| Phần × thao tác | Kinh doanh | Quản trị hệ thống | Điều hành, Kế toán |
|---|---|---|---|
| KD03: xem, tìm, lọc, mở hồ sơ | Mọi khách | Mọi khách | Không có mục KD03 |
| Tạo khách hàng | Có (người tạo là người phụ trách) | Không | — |
| KD04.1: xem | Có | Có, chỉ đọc (W14) | — |
| KD04.1: sửa thông tin, người liên hệ | Có | Không | — |
| Chuyển người phụ trách một khách | Có (W17) | Có | — |
| Chuyển người phụ trách hàng loạt ở KD03 | Không | Có (W06) | — |
| Xóa khách hàng chưa dùng | Có (R05) | Không | — |
| KD04.2, KD04.3: xem | Có | Có | — |
| Mở DH08, KD08 từ KD04 | Theo quyền của DH08, KD08 | Theo quyền của DH08, KD08 (mặc định chỉ xem; chuyển người phụ trách Booking ở KD08, RSD KD08 R11) | — |
| Tạo yêu cầu Tour | Có | Không | — |

- **Ẩn và chỉ đọc (U5).** Không có quyền thì ẩn nút và mục menu; trường chỉ đọc hiện dạng chữ. Người phụ trách chỉ là thông tin: chip Khách của tôi, người nhận thông báo (Q1).
- **Kiểm tra lúc ghi.** Máy chủ kiểm tra quyền theo vai trò và phiên bản hồ sơ ở mọi thao tác ghi.
- **Dữ liệu cá nhân.** Ngày sinh và địa chỉ chỉ hiện trong KD04.1, không hiện ở KD03. Không có xuất tệp danh sách khách. Mọi thao tác tạo, sửa, chuyển, xóa được ghi vào nhật ký QT03.

### 1.5. Truy vết nguồn

| Mã nguồn | Nội dung | Luồng |
|---|---|---|
| TN02.02 · SYS10.01 · KD03 | Danh sách khách; tìm theo tên, email, điện thoại; lọc khách có Tour đã đóng; Tạo mới hoặc mở KD04 | L1.1, L1.3 |
| TN02.02 · SYS02.03, SYS02.04 | Đã có hồ sơ thì chọn hồ sơ đã có, không tạo trùng | E2.3, R02 |
| TN02.03 · SYS02.05 · KD04.1 | Nhập thông tin cá nhân và liên hệ; cảnh báo trùng theo email hoặc điện thoại trước khi lưu; Lưu | L2.1, L2.2, L3.1, R01, R02 |
| KD04 · Lối vào | Mở từ KD03, KD06.1 | 1.2, L1.3 |
| KD04 · Phần đầu | Số Tour đã đi; nút Tạo yêu cầu Tour | 2.4, L7.2 |
| TN10.01 · SYS10.02 · KD04.2 | Xem Tour đã đóng và dịch vụ đã sử dụng; Cập nhật lịch sử; chọn Tour mở DH08 chế độ xem | L6.1, L6.2, L6.3, R06 |
| SYS09.04 · DH08 (Đóng Tour) | Đóng Tour ghi lịch sử Tour cho khách | L6.1, R06 |
| TN02.04 · SYS10.09, SYS10.10 · KD04.3 | Liệt kê yêu cầu và Booking; mở đúng KD06 hoặc KD08; Tạo yêu cầu mới mở KD06 với khách điền sẵn | L7.1, L7.2, R08 |
| TN10.03 · SYS10.05 · KD04.4 | Bỏ theo C3 | — |
| SYS10.03 | Ngoài phạm vi (C3) | 1.3 |
| KD03 lọc theo hạng · KD04 hạng · KD04.2 tính hạng · DX06 | Tạm bỏ (quyết định 11/11/2026) | 1.3 |
| Quyết định 11/11/2026, Q1 | Hai loại khách; xem chung, sửa theo quyền; chuyển phụ trách; xóa khách chưa dùng | L4.1, L4.2, L5.1, R01, R03, R04, R05 |

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. KD03 · Bố cục (W01)

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Tiêu đề | Khách hàng; bên phải là Tạo khách hàng (Kinh doanh). Với Quản trị ghi “Quản trị · chỉ chuyển người phụ trách” | — |
| Thanh lọc | Ô tìm kiếm; bộ chọn Loại, Tour đã đóng, Quốc gia; Phụ trách (chỉ hiện ở chip Tất cả); liên kết Xóa bộ lọc khi có bộ lọc khác mặc định | — |
| Chip | Khách của tôi (chip Của tôi, Q1), Tất cả. Quản trị chỉ có chip Tất cả. Bên phải ghi số dòng và cách sắp xếp | Khách hàng |
| Banner kết quả | Chỉ hiện sau khi chuyển phụ trách hàng loạt | — |
| Thanh hàng loạt | Chỉ Quản trị; hiện khi chọn ít nhất một dòng | — |
| Bảng | Các cột ở mục 2.2; 20 dòng mỗi trang | Khách hàng, KD06, DH08 |

- Khách của tôi là tập con của Tất cả.

### 2.2. KD03 · Cột của bảng

| Cột | Nội dung | Ghi chú |
|---|---|---|
| Ô chọn | Chọn dòng để chuyển phụ trách hàng loạt | Chỉ Quản trị |
| Khách hàng | Tên (đậm, màu liên kết) và nhãn Cá nhân hoặc Doanh nghiệp; dòng dưới là mã và quốc gia | Bấm bất kỳ đâu trên dòng (trừ ô chọn) để mở KD04 |
| Liên hệ chính | Doanh nghiệp: tên liên hệ chính, email ở dòng dưới. Cá nhân: email và điện thoại | KD04.1 |
| Ngôn ngữ | Ngôn ngữ giao tiếp | KD04.1 |
| Phụ trách | Người phụ trách khách | Chỉ hiện ở chip Tất cả và với Quản trị |
| Tour đã đi | Số Tour đã đóng của khách, không tính hồ sơ kết thúc vì Booking đã hủy (R06) | Sắp xếp được |
| Tour gần nhất | Tour Code và ngày đóng lần đầu của Tour đóng gần nhất (R06) | Sắp xếp được |
| Yêu cầu đang xử lý | Số yêu cầu Tour Đang xử lý: chưa hủy (hoặc đã mở lại) và không có Booking Hiệu lực, cùng cách tính với RSD KD05 R02 (R08); không có thì “—” | KD06 |

### 2.3. KD03 · Bộ lọc và sắp xếp

| Bộ lọc | Giá trị | Mặc định |
|---|---|---|
| Tìm kiếm | Tên, tên giao dịch, mã khách, email, điện thoại, mã số thuế, và tên, email, điện thoại của người liên hệ; R10 | Trống |
| Loại | Tất cả, Cá nhân, Doanh nghiệp | Tất cả |
| Tour đã đóng | Tất cả, Có Tour đã đóng, Đóng trong 30 ngày, Chưa có Tour đã đóng | Tất cả |
| Quốc gia | Tất cả hoặc chọn nhiều quốc gia | Tất cả |
| Phụ trách | Tất cả hoặc một người dùng Kinh doanh, kể cả người đã ngừng hoạt động | Tất cả (chỉ ở chip Tất cả) |
| Chip | Khách của tôi, Tất cả | Khách của tôi; Quản trị: Tất cả |

- Bộ lọc áp dụng ngay. Số trên chip tính theo tìm kiếm và các bộ lọc còn lại.
- Sắp xếp mặc định theo tên A–Z (bỏ dấu khi so sánh).

### 2.4. KD04 · Phần đầu hồ sơ, nút và số trên tab

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Dòng 1 | Tên khách, nhãn Cá nhân hoặc Doanh nghiệp. Bên phải là các nút theo quyền (đoạn dưới bảng) | KD04.1, R03 |
| Dòng 2 | Mã; Quốc gia (Doanh nghiệp) hoặc Quốc tịch (Cá nhân); Ngôn ngữ; Liên hệ chính (Doanh nghiệp: tên và email) hoặc Liên hệ (Cá nhân: email và điện thoại); Phụ trách; Tour đã đi | KD04.1, R06 |
| Tab | Thông tin khách hàng; Lịch sử Tour; Yêu cầu & Booking | — |

- Khi tạo mới, phần đầu chỉ có “Khách hàng mới”, ô chọn loại Cá nhân / Doanh nghiệp và tab Thông tin khách hàng; các tab còn lại khóa với ghi chú “Lưu thông tin để mở các tab khác” (W08).
- Thông tin ở phần đầu không lặp lại ở nội dung tab KD04.2–KD04.3.

**Nút ở phần đầu theo quyền.** Kinh doanh (quyền mặc định): Tạo yêu cầu Tour (nút chính), Chuyển phụ trách, ⋯ (Xóa khách hàng). Quản trị hệ thống: Chuyển phụ trách. Không có quyền thì ẩn nút (U5). Đang tạo mới: không có nút ở phần đầu; nút Lưu ở thanh dưới.

**Số trên tab.**

| Tab | Số trên tab | Màu |
|---|---|---|
| Thông tin khách hàng | Không có | — |
| Lịch sử Tour | Không có (số Tour đã đi đã ở phần đầu) | — |
| Yêu cầu & Booking | Số yêu cầu đang xử lý (R08); không có thì ẩn | Xám |

**Banner ở đầu tab.** KD04.1: “Chưa lưu: hồ sơ vừa được cập nhật ở phiên khác” khi lưu bị từ chối vì phiên bản cũ (E3.4).

### 2.5. Vòng đời hồ sơ khách hàng

Hồ sơ khách hàng không có trạng thái người dùng chọn. Các sự kiện làm đổi hồ sơ:

| Từ | Đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|---|
| (chưa có) | Đã tạo | Kinh doanh bấm Lưu ở KD04 tạo mới hoặc tạo nhanh ở KD06.1 | Hợp lệ theo R01; trùng thì đã chọn Vẫn tạo kèm lý do (R02) | Cấp mã (R12); người tạo là người phụ trách; mở các tab | Lỗi nhập E2.1; trùng E2.3 |
| Đã tạo | Đã tạo (đổi thông tin) | Người có quyền sửa bấm Lưu ở KD04.1 | Hợp lệ; đúng phiên bản; trùng thì đã ghi lý do | Ghi phiên bản mới; yêu cầu, Booking đã có giữ nguyên dữ liệu đã lưu | E3.1–E3.5 |
| Đã tạo | Đã tạo (đổi người phụ trách) | Người có quyền Chuyển phụ trách chuyển (R04) | Người nhận là Kinh doanh đang hoạt động, khác người hiện tại | Khách vào chip Khách của tôi của người mới; người mới nhận thông báo | E4.1–E4.4 |
| Đã tạo | (đã xóa) | Người có quyền xóa (R05) | Chưa có yêu cầu Tour | Xóa hồ sơ, người liên hệ; ghi nhật ký QT03 | E5.1, E5.2 |

### 2.6. Trạng thái và chỉ báo của đối tượng con

| Đối tượng | Giá trị | Cách có giá trị |
|---|---|---|
| Mục lịch sử Tour | Đã đóng, Đang cập nhật | Đã đóng khi DH08 đóng Tour; Đang cập nhật khi hồ sơ được mở lại ở DH08 (RSD DH08 R16); về Đã đóng khi đóng lại (R06). Hồ sơ kết thúc vì Booking đã hủy không có mục |
| Yêu cầu Tour (chỉ đọc) | Đang xử lý, Đã có Booking, Đã hủy | Theo KD06; Đã có Booking là chỉ báo tính từ dữ liệu, chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu Đã hủy (R08) |
| Booking (chỉ đọc) | Hiệu lực, Đã hủy | Theo KD08 |

### 2.7. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác.**
  - *Trên bảng:* KD03, KD04.2, KD04.3; chip và bộ lọc áp dụng ngay, bấm dòng hoặc mã trên dòng để mở.
  - *Form tại tab:* tạo mới và KD04.1; thanh dưới có Lưu (và Hủy thay đổi khi sửa).
  - *Hộp thoại:* cảnh báo trùng, rời trang khi chưa lưu, chuyển phụ trách, xóa khách.
  - *Menu ⋯:* Xóa khách hàng ở phần đầu.
- **Một thao tác, một chỗ bấm.** Tạo yêu cầu Tour chỉ có ở phần đầu hồ sơ (không lặp ở KD04.3); Xóa khách chỉ ở menu ⋯. Khi Quản trị chọn nhiều dòng, thanh hàng loạt là nơi thao tác duy nhất và có sẵn ô chọn người nhận.
- **Không lặp header.** Tên, mã, quốc gia, ngôn ngữ, liên hệ chính, người phụ trách, số Tour đã đi chỉ ở phần đầu; tab KD04.2–KD04.3 không lặp lại. KD04.1 là nơi sửa các trường này.
- **Nút bị khóa có lý do** ngay cạnh nút hoặc trong menu (W20, E4.1).
- **Điền sẵn** có nhãn nhỏ màu riêng: Gợi ý theo quốc tịch, Người tạo, Từ hồ sơ khách hàng. Trường chỉ đọc hiện dạng chữ (U5).
- **Tải.** KD03 tải theo trang 20 dòng; số trên chip tính ở máy chủ. Mỗi tab của KD04 tải riêng khi mở; lỗi ở một tab không chặn tab khác.
- **Lưu.** KD04.1 lưu cả form và bảng người liên hệ trong một giao dịch. Nút Lưu khóa khi đang lưu và khi chưa có thay đổi.
- **Sau khi lưu** giữ tab, vị trí cuộn, bộ lọc; thông báo ngắn ở góc dưới phải.
- **Đồng thời.** Hồ sơ khách có số phiên bản; mọi thao tác ghi gửi kèm phiên bản đã tải (E3.4, E4.2); bị từ chối thì chỉ có Tải lại, không ghi đè (Q8).
- **Ngày giờ.** Hiển thị dd/mm/yyyy, múi giờ Asia/Ho_Chi_Minh. “Hôm nay”, “trong 30 ngày” tính lúc đọc theo ngày ở múi giờ này (Q6).
- **Lịch sử.** Mọi thao tác tạo, sửa, chuyển, xóa và lý do trùng được ghi vào lịch sử hồ sơ và nhật ký QT03 (người, thời điểm, trước, sau).
- **Dữ liệu cá nhân.** Không lưu hộ chiếu, visa ở hồ sơ khách. Xóa khách xóa dữ liệu cá nhân của khách và người liên hệ; nhật ký QT03 chỉ giữ mã, tên và người xóa.

---

## 3. Luồng thao tác kèm wireframe

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác của người dùng và phản hồi của hệ thống. Hình wireframe nằm ngay dưới bước.

### 3.1. KD03 · Xem, tìm, lọc và mở hồ sơ (TN02.02 · SYS10.01)

**L1.1 Xem và tìm khách.** *Điều kiện:* Kinh doanh hoặc Quản trị.

1. **W01 · Menu Kinh doanh → Khách hàng.** Kinh doanh mở Khách hàng từ menu. Danh sách ở chip Khách của tôi, 20 dòng mỗi trang, sắp theo tên. Mỗi dòng cho biết loại khách, liên hệ chính, ngôn ngữ, số Tour đã đi, Tour gần nhất, số yêu cầu đang xử lý (cột ở mục 2.2).

   ![W01 · Danh sách khách hàng của tôi](wireframes/W01.png)

   > Hình chưa cập nhật: còn chip Cần chăm sóc sau Tour, cột Chăm sóc gần nhất và ngày màu cam ở Tour gần nhất (bỏ theo C3).

2. **W03 · Ô tìm kiếm, bộ chọn ở thanh lọc và chip.** Người dùng gõ tìm kiếm, ví dụ tên người liên hệ “schneider”, chọn bộ lọc nếu cần, rồi chọn chip Tất cả. Bộ lọc áp dụng ngay, số trên chip cập nhật. Danh sách hiện cả khách doanh nghiệp có người liên hệ trùng tên (phần khớp được tô vàng) và khách do người khác phụ trách; cột Phụ trách hiện ra. Liên kết Xóa bộ lọc xuất hiện.

   ![W03 · Tìm khách trong toàn công ty](wireframes/W03.png)

3. **W04 · Bảng khi không có dòng khớp.** Bảng hiện “Không có khách hàng khớp bộ lọc” kèm gợi ý. Người dùng bấm Xóa bộ lọc hoặc Tạo khách hàng ở tiêu đề.

   ![W04 · Không có khách hàng khớp bộ lọc](wireframes/W04.png)

*Kết quả:* người dùng thấy đúng tập khách cần xem.

**L1.2 (Bỏ theo C3.)** Chip Cần chăm sóc sau Tour và luồng mở KD04.4 không còn. Tệp W02.png giữ lại, không nhúng.

**L1.3 Mở hồ sơ và quay lại.**

1. **W01 · Bấm dòng.** Người dùng bấm một dòng (bất kỳ đâu trừ ô chọn). KD04 mở ở tab đích theo R10.
2. **W01 · Breadcrumb Khách hàng hoặc nút quay lại của trình duyệt.** KD03 hiện lại với bộ lọc, trang và vị trí cuộn như trước; dòng vừa mở được tải lại.

**Ngoại lệ**

- **E1.1 Lỗi tải danh sách (W05).** Bảng hiện “Không tải được danh sách khách hàng”, số trên chip là “–”, bộ lọc giữ nguyên. Người dùng bấm Thử lại.

  ![W05 · Lỗi tải danh sách](wireframes/W05.png)

- **E1.2 Chưa có dữ liệu.** Hệ thống chưa có khách nào: bảng ghi “Chưa có khách hàng. Chọn Tạo khách hàng để bắt đầu”. Người dùng chưa phụ trách khách nào: chip Khách của tôi ghi “Bạn chưa phụ trách khách nào. Chọn Tất cả để tìm khách của công ty”. Khác với W04 vì không có bộ lọc nào đang áp dụng.
- **E1.3 Khách đã bị xóa hoặc vừa chuyển phụ trách khi đang xem danh sách.** Bấm dòng của khách đã xóa: thông báo ngắn “Khách hàng này không còn tồn tại”, danh sách tải lại. Khách vừa được chuyển cho người khác vẫn mở và sửa được theo quyền của vai trò (Q1).
- **E1.4 Không có quyền.** Vai trò không được cấp quyền xem KD03 (mặc định Điều hành, Kế toán) không có mục Khách hàng; mở bằng đường dẫn thì hiện trang “Bạn không có quyền xem khách hàng”.

### 3.2. Tạo khách hàng (TN02.03 · SYS02.05)

**L2.1 Tạo khách hàng cá nhân.** *Điều kiện:* Kinh doanh.

1. **W08 · Nút Tạo khách hàng ở tiêu đề KD03 → KD04 tạo mới (form tại tab).** KD04 mở ở chế độ tạo mới, loại Cá nhân được chọn sẵn. Người dùng nhập danh xưng, họ và tên, quốc tịch; ngôn ngữ giao tiếp tự điền theo quốc tịch (nhãn Gợi ý theo quốc tịch, sửa được; R01); nhập email, điện thoại, địa chỉ, nguồn khách, ghi chú và sở thích. Người phụ trách là người tạo (dạng chữ).

   ![W08 · Tạo khách hàng cá nhân](wireframes/W08.png)

   > Hình chưa cập nhật: còn công tắc Nhận email chăm sóc và tab Chăm sóc và phản hồi (bỏ theo C3); Người phụ trách còn vẽ ô viền nét đứt.

2. **W08 · Nút Lưu ở thanh dưới.** Người dùng bấm Lưu. Hệ thống kiểm tra R01, rồi kiểm tra trùng theo R02. Không trùng: lưu ngay.
3. **W12 · Phần đầu và thông báo ngắn.** Hồ sơ được cấp mã KH-00413 (R12). Phần đầu hiện đủ thông tin, các tab được mở, thông báo ngắn “Đã tạo khách hàng”. Màn ở lại tab Thông tin khách hàng; nút Lưu khóa với ghi chú “Chưa có thay đổi”.

   ![W12 · Sau khi tạo khách hàng](wireframes/W12.png)

*Kết quả:* khách mới dùng được ngay khi tạo yêu cầu Tour ở KD06.1.

**L2.2 Tạo khách hàng doanh nghiệp.** *Điều kiện:* Kinh doanh.

1. **W09 · Ô chọn loại ở phần đầu → Doanh nghiệp.** Ở chế độ tạo mới, người dùng chọn Doanh nghiệp. Form đổi sang thông tin doanh nghiệp (tên, tên giao dịch, quốc gia, ngôn ngữ giao tiếp, mã số thuế, website, email chung, điện thoại, địa chỉ) và bảng Người liên hệ. Người dùng thêm người liên hệ, chọn đúng một liên hệ chính (người đầu tiên được chọn sẵn).

   ![W09 · Tạo khách hàng doanh nghiệp](wireframes/W09.png)

2. **W12 · Nút Lưu.** Người dùng bấm Lưu. Xử lý như bước 2–3 của L2.1; phần đầu hiện liên hệ chính.

*Kết quả:* khách doanh nghiệp có ít nhất một người liên hệ.

**L2.3 Lưu và tạo yêu cầu Tour.** *Điều kiện:* như L2.1 hoặc L2.2.

1. **W08 · Nút Lưu và tạo yêu cầu Tour ở thanh dưới.** Người dùng bấm nút này thay cho Lưu. Hệ thống lưu khách như L2.1.
2. **W27 · KD06 tạo mới.** Lưu xong, hệ thống mở KD06 tạo mới với khách hàng, liên hệ chính và ngôn ngữ phục vụ điền sẵn (L7.2).

**Ngoại lệ**

- **E2.1 Lỗi nhập (W10).** Thiếu trường bắt buộc, email sai định dạng, điện thoại sai định dạng, doanh nghiệp chưa có người liên hệ hợp lệ hoặc không có liên hệ chính: không lưu; banner “Còn n lỗi” ở đầu form, ô lỗi tô đỏ và ghi lý do. Dữ liệu đã nhập giữ nguyên.

  ![W10 · Lỗi nhập khi lưu](wireframes/W10.png)

- **E2.2 Đổi loại khi đã nhập.** Đổi từ Cá nhân sang Doanh nghiệp (hoặc ngược lại) khi đã nhập dữ liệu: các trường chung (quốc gia, ngôn ngữ, email, điện thoại, địa chỉ, nguồn khách, ghi chú) được giữ; email và điện thoại của cá nhân chuyển thành người liên hệ đầu tiên khi đổi sang Doanh nghiệp. Sau khi lưu, không đổi được loại (R01).
- **E2.3 Có thể trùng (W11).** Hộp thoại liệt kê các hồ sơ trùng theo R02, mỗi dòng có trường trùng, người phụ trách, số Tour đã đi và nút Mở hồ sơ. Người dùng chọn một trong ba cách:
  - Mở hồ sơ: bỏ phần đang nhập (hỏi xác nhận như W15) và mở KD04 của hồ sơ đã có. Đây là cách không tạo trùng của SYS02.04.
  - Quay lại sửa: đóng hộp thoại, giữ nguyên form.
  - Vẫn tạo khách hàng: chỉ bấm được khi đã nhập lý do; hệ thống lưu khách và lưu lý do vào lịch sử hồ sơ.

  ![W11 · Cảnh báo có thể trùng khách hàng](wireframes/W11.png)

- **E2.4 Hủy tạo.** Bấm Hủy hoặc rời trang khi đã nhập: hỏi xác nhận như W15; chưa nhập gì thì về KD03 ngay. Không có bản nháp.
- **E2.5 Lỗi lưu hoặc mất kết nối.** Thông báo “Chưa lưu được. Thử lại”, form giữ nguyên. Bấm Lưu lặp chỉ tạo một hồ sơ (khóa nút khi đang lưu; máy chủ chống tạo lặp theo mã yêu cầu của lần bấm).
- **E2.6 Danh mục bị tắt.** Quốc gia, ngôn ngữ hoặc nguồn khách bị tắt ở QT05 trong lúc đang nhập: lưu bị chặn ở ô đó với lý do “Giá trị đã ngừng sử dụng, chọn giá trị khác”.

### 3.3. KD04.1 · Cập nhật thông tin khách hàng (TN02.03)

**L3.1 Sửa thông tin.** *Điều kiện:* người có quyền sửa KD04.1 (mặc định Kinh doanh).

1. **W13 · Tab Thông tin khách hàng, form tại tab.** Người dùng mở tab và sửa trực tiếp trên form. Ô vừa sửa ghi giá trị trước; thanh dưới hiện “● n thay đổi chưa lưu” cùng Hủy thay đổi và Lưu.

   ![W13 · Sửa thông tin khách hàng doanh nghiệp](wireframes/W13.png)

2. **W13 · Nút Lưu ở thanh dưới.** Người dùng bấm Lưu (hoặc Hủy thay đổi). Hệ thống kiểm tra R01; kiểm tra trùng theo R02 nếu tên, email, điện thoại, mã số thuế hoặc người liên hệ đổi; lưu form và bảng người liên hệ trong một giao dịch. Lưu xong: thông báo ngắn “Đã lưu”, thanh dưới về “Chưa có thay đổi”, phần đầu cập nhật.

*Kết quả:* thông tin mới dùng cho yêu cầu Tour tạo sau đó. Yêu cầu, Booking và hồ sơ Tour đã có giữ dữ liệu đã lưu của chúng.

**Ngoại lệ**

- **E3.1 Người không có quyền sửa mở hồ sơ (W14).** Mặc định là Quản trị hệ thống. Mọi trường hiện dạng chữ (U5), không có thanh Lưu; nút ở phần đầu theo quyền (Quản trị: Chuyển phụ trách).

  ![W14 · Hồ sơ ở chế độ chỉ xem](wireframes/W14.png)

  > Hình chưa cập nhật: hình vẽ người Kinh doanh không phụ trách với dòng “🔒 Chỉ xem · do … phụ trách” và ô viền nét đứt; nay Kinh doanh sửa được mọi khách (Q1), người chỉ xem thấy trường dạng chữ.

- **E3.2 Rời hồ sơ hoặc đổi tab khi chưa lưu (W15).** Hộp thoại nêu thay đổi sẽ mất; Ở lại (mặc định) hoặc Bỏ thay đổi và rời đi.

  ![W15 · Rời hồ sơ khi chưa lưu](wireframes/W15.png)

- **E3.3 Lỗi nhập và trùng.** Như E2.1 (W10) và E2.3 (W11). Cặp hồ sơ đã xác nhận không trùng (đã ghi lý do) thì không hỏi lại.
- **E3.4 Hồ sơ đã được sửa ở phiên khác (W16).** Lưu bị từ chối. Banner ở đầu form nêu ai sửa, lúc nào, trường nào; Lưu khóa. Chỉ có nút Tải lại, không có nút ghi đè (Q8): hệ thống nạp bản mới; banner giữ danh sách các ô người dùng đã sửa kèm giá trị đã nhập để người dùng nhập lại nếu cần, rồi Lưu như bước 2.

  ![W16 · Hồ sơ đã được sửa ở phiên khác](wireframes/W16.png)

  > Hình chưa cập nhật: nút “Tải bản mới, giữ thay đổi của tôi”; nay chỉ có Tải lại (Q8).

- **E3.5 (Bỏ theo Q1.)** Chuyển phụ trách không đổi quyền sửa. Hồ sơ vừa đổi ở phiên khác (kể cả đổi người phụ trách) thì xử lý như E3.4.
- **E3.6 Bỏ người liên hệ.** Không bỏ được liên hệ chính khi chưa chọn liên hệ chính khác (biểu tượng xóa không hiện trên dòng liên hệ chính). Bỏ người liên hệ không đổi yêu cầu Tour đã ghi tên người đó.
- **E3.7 Lỗi tải hồ sơ.** Hiện “Không tải được hồ sơ khách hàng” và Thử lại; không hiện form trống.

### 3.4. Chuyển người phụ trách (quyết định 11/11/2026)

**L4.1 Chuyển một khách.** *Điều kiện:* người có quyền Chuyển phụ trách (mặc định Kinh doanh và Quản trị hệ thống).

1. **W17 · Nút Chuyển phụ trách ở phần đầu → hộp thoại.** Hộp thoại hiện người phụ trách hiện tại, ô Người phụ trách mới (chỉ người dùng Kinh doanh đang hoạt động, trừ người hiện tại) và Ghi chú bàn giao. Ghi chú nhỏ nêu yêu cầu Tour, Booking, hồ sơ Tour không đổi người phụ trách. Người dùng chọn người mới, ghi chú nếu cần.

   ![W17 · Chuyển người phụ trách](wireframes/W17.png)

   > Hình chưa cập nhật: ghi chú “Sau khi chuyển, bạn chỉ còn quyền xem và tạo yêu cầu Tour”; nay quyền không đổi (Q1).

2. **W18 · Nút Chuyển phụ trách trong hộp thoại → phần đầu và thông báo ngắn.** Người dùng bấm Chuyển phụ trách. Hệ thống kiểm tra R04, ghi người phụ trách mới, lưu ghi chú vào lịch sử hồ sơ, tạo thông báo in-app cho người mới (kèm ghi chú). Phần đầu đổi người phụ trách, kèm thông báo ngắn; khách rời chip Khách của tôi của người cũ, quyền của người cũ không đổi.

   ![W18 · Sau khi chuyển phụ trách](wireframes/W18.png)

   > Hình chưa cập nhật: phần đầu ghi “🔒 Chỉ xem · do Vũ Đức Minh phụ trách”, form chỉ đọc; nay người cũ vẫn sửa được theo quyền.

*Kết quả:* khách nằm ở chip Khách của tôi của người phụ trách mới; quyền sửa theo vai trò, không đổi.

**L4.2 Chuyển hàng loạt ở KD03.** *Điều kiện:* người có quyền Chuyển phụ trách hàng loạt (mặc định Quản trị hệ thống).

1. **W06 · Bộ lọc Phụ trách, ô chọn đầu bảng và trên dòng → thanh hàng loạt.** Quản trị mở KD03, chọn Phụ trách là người cần bàn giao (ví dụ Lê Thu Hà nghỉ việc), chọn ô đầu bảng để chọn mọi dòng trong trang (hoặc chọn từng dòng). Thanh hàng loạt hiện số khách đã chọn, ô chọn người nhận ngay trên thanh và nút Chuyển phụ trách; nút khóa khi chưa chọn người nhận. Khi kết quả lọc nhiều hơn một trang, thanh có thêm liên kết “Chọn tất cả n khách khớp bộ lọc” (R04).

   ![W06 · Chọn nhiều khách để chuyển phụ trách](wireframes/W06.png)

2. **W07 · Nút Chuyển phụ trách trên thanh hàng loạt → banner kết quả.** Quản trị chọn người nhận rồi bấm Chuyển phụ trách. Hệ thống chuyển từng khách theo R04. Banner nêu số khách đã chuyển và số bỏ qua; dòng bỏ qua ghi lý do. Các dòng giữ tại chỗ (mờ, nhãn Vừa chuyển) đến khi tải lại. Người nhận nhận một thông báo gộp.

   ![W07 · Kết quả chuyển phụ trách hàng loạt](wireframes/W07.png)

**Ngoại lệ**

- **E4.1 Người nhận không hợp lệ.** Chọn chính người hiện tại hoặc người dùng vừa bị khóa ở QT01: nút Chuyển phụ trách khóa, ghi lý do cạnh ô.
- **E4.2 Khách đã đổi ở phiên khác.** Khi chuyển, khách mà người phụ trách đã khác với lúc tải: một khách thì báo “Người phụ trách đã đổi thành … Tải lại để xem”; hàng loạt thì bỏ qua dòng đó và ghi lý do (W07).
- **E4.3 Người phụ trách đã ngừng hoạt động.** Tài khoản bị khóa ở QT01 vẫn hiện là người phụ trách, kèm “(ngừng hoạt động)”; người có quyền Chuyển phụ trách chuyển được các khách này (L4.1, L4.2).
- **E4.4 Lỗi giữa chừng khi chuyển hàng loạt.** Mỗi khách là một giao dịch riêng. Mất kết nối giữa chừng: banner nêu số đã chuyển; các dòng còn lại vẫn được chọn để bấm lại. Bấm lặp không chuyển hai lần.

### 3.5. Xóa khách hàng (quyết định 11/11/2026)

**L5.1 Xóa khách chưa dùng.** *Điều kiện:* người có quyền Xóa khách hàng (mặc định Kinh doanh); khách chưa có yêu cầu Tour (R05).

1. **W19 · Menu ⋯ ở phần đầu → Xóa khách hàng → hộp thoại.** Người dùng bấm ⋯ rồi Xóa khách hàng. Hộp thoại nêu khách chưa được dùng và những gì sẽ bị xóa.

   ![W19 · Xác nhận xóa khách hàng chưa dùng](wireframes/W19.png)

   > Hình chưa cập nhật: hộp thoại còn nhắc “lần gửi chiến dịch” và “ghi nhận chăm sóc” (bỏ theo C3).

2. **W19a · Nút Xóa khách hàng trong hộp thoại → KD03.** Người dùng bấm Xóa khách hàng. Hệ thống kiểm tra lại R05, xóa hồ sơ và người liên hệ, ghi nhật ký QT03, rồi về KD03 với bộ lọc cũ và thông báo ngắn.

   ![W19a · Sau khi xóa khách hàng](wireframes/W19a.png)

**Ngoại lệ**

- **E5.1 Khách đã được dùng (W20).** Mục Xóa khách hàng trong menu ⋯ bị khóa và ghi lý do “khách đã có n yêu cầu Tour”, ví dụ “Không xóa được: khách đã có 6 yêu cầu Tour”.

  ![W20 · Không xóa được khách đã dùng](wireframes/W20.png)

  > Hình chưa cập nhật: lý do còn “và 4 lần gửi chiến dịch” (bỏ theo C3).

- **E5.2 Khách vừa được dùng sau khi mở hộp thoại.** Có người tạo yêu cầu Tour cho khách trong lúc hộp thoại đang mở: xóa bị từ chối, hộp thoại đóng, thông báo “Không xóa được: khách vừa có yêu cầu Tour”; menu chuyển sang W20.

### 3.6. KD04.2 · Lịch sử Tour (TN10.01 · SYS10.02 · SYS09.04)

**L6.1 Ghi lịch sử khi đóng Tour.** *Điều kiện:* Điều hành đóng Tour bằng nút Đóng Tour ở header DH08 (RSD DH08 L8.3, R16); hồ sơ không kết thúc vì Booking đã hủy (R06).

1. **W21 · Không có thao tác ở KD04; dòng mới hiện trong bảng.** Hệ thống tạo đúng một mục lịch sử theo Tour Code cho khách của Booking: Tour Code, Booking, thời gian, số khách, hành trình, dịch vụ đã sử dụng gom theo loại dịch vụ, ngày đóng (R06). Mục ghi trong cùng giao dịch với thao tác Đóng Tour (Q5). Số Tour đã đi ở phần đầu và ở KD03 tăng.

**L6.2 Xem lịch sử Tour.** *Điều kiện:* Kinh doanh hoặc Quản trị.

1. **W21 · Tab Lịch sử Tour; “n dịch vụ” trên dòng.** Người dùng mở tab Lịch sử Tour. Mỗi Tour đã đóng là một dòng, mới nhất ở trên. Bấm “n dịch vụ” để mở rộng dòng: dịch vụ đã sử dụng hiện theo loại ngay dưới dòng (tên dịch vụ, NCC, số đêm hoặc số lượng).

   ![W21 · Lịch sử Tour](wireframes/W21.png)

   > Hình chưa cập nhật: dòng TP-2510-0087 có biểu tượng khóa và “Booking do Lê Thu Hà phụ trách”; nay bấm được khi có quyền xem DH08 (Q1).

2. **W21 · Tour Code trên dòng.** Người dùng bấm Tour Code. DH08 mở ở chế độ chỉ đọc (RSD DH08 AC01). Người không có quyền xem DH08 thấy Tour Code dạng chữ, không bấm được (U5).

**L6.3 (Bỏ theo Q5.)** Lịch sử Tour ghi trong cùng giao dịch với Đóng Tour nên không có Tour đã đóng thiếu mục, không có banner và nút Cập nhật lịch sử. Tệp W23.png giữ lại, không nhúng.

**Ngoại lệ**

- **E6.1 Tour được mở lại (W22).** Khi hồ sơ được mở lại ở DH08 (RSD DH08 R16): cột Tình trạng của mục lịch sử hiện Đang cập nhật kèm ngày mở lại; danh sách dịch vụ giữ theo lần đóng trước và có ghi chú trên phần mở rộng. Đóng lại thì cập nhật cùng mục đó, không tạo mục mới (RSD DH08).

  ![W22 · Tour được mở lại · đang cập nhật](wireframes/W22.png)

- **E6.2 Chưa có Tour đã đóng (W24).** Bảng hiện “Khách chưa có Tour đã đóng” và giải thích lịch sử tự ghi khi nào.

  ![W24 · Chưa có Tour đã đóng](wireframes/W24.png)

- **E6.3 (Bỏ theo Q5.)** Đóng Tour lỗi thì không ghi gì, kể cả mục lịch sử (R06).
- **E6.4 Booking đổi khách sau khi đóng Tour.** Không xảy ra: Booking kế thừa khách của phiên bản báo giá và chỉ đọc (KD08).

### 3.7. KD04.3 · Yêu cầu Tour và Booking (TN02.04 · SYS10.09 · SYS10.10)

**L7.1 Xem và mở yêu cầu, Booking.** *Điều kiện:* Kinh doanh hoặc Quản trị.

1. **W25 · Tab Yêu cầu & Booking; chip trên bảng.** Người dùng mở tab Yêu cầu & Booking. Mỗi yêu cầu Tour của khách là một dòng, mới nhất ở trên: mã và ngày tạo, thời gian đi, số khách, phiên bản báo giá mới nhất và kết quả, Booking và hồ sơ Tour nếu có, người phụ trách yêu cầu, trạng thái. Chip Đang xử lý, Đã có Booking, Đã hủy, Tất cả lọc ngay theo R08.

   ![W25 · Yêu cầu Tour và Booking của khách](wireframes/W25.png)

   > Hình chưa cập nhật: BK-2509-0058 có biểu tượng khóa và “Do Lê Thu Hà phụ trách”; nay bấm được khi có quyền xem KD08 (Q1).

2. **W25 · Mã yêu cầu hoặc mã Booking trên dòng.** Người dùng bấm mã yêu cầu để mở KD06 của yêu cầu, hoặc bấm mã Booking để mở KD08. Người không có quyền xem KD08 thấy mã Booking dạng chữ, không bấm được (U5).

**L7.2 Tạo yêu cầu Tour từ hồ sơ khách.** *Điều kiện:* Kinh doanh.

1. **W25 · Nút chính Tạo yêu cầu Tour ở phần đầu.** Người dùng bấm Tạo yêu cầu Tour ở phần đầu hồ sơ (ở bất kỳ tab nào).
2. **W27 · KD06 tạo mới, tab Thông tin yêu cầu.** KD06 mở ở chế độ tạo mới, tab Thông tin yêu cầu, với khách hàng điền sẵn (nhãn Từ hồ sơ khách hàng), người liên hệ là liên hệ chính (Doanh nghiệp) và ngôn ngữ phục vụ lấy từ ngôn ngữ giao tiếp. Ghi chú và sở thích của khách hiện làm gợi ý. Người dùng nhập nhu cầu Tour và lưu theo RSD KD06.

   ![W27 · Yêu cầu mới với khách hàng điền sẵn](wireframes/W27.png)

*Kết quả:* yêu cầu Tour mới gắn với khách, không phải tìm lại khách (SYS10.09 → SYS10.10). Yêu cầu chỉ được tạo khi lưu ở KD06; hủy ở KD06 thì không có gì được tạo.

**Ngoại lệ**

- **E7.1 Khách chưa có yêu cầu (W26).** Bảng hiện “Khách chưa có yêu cầu Tour” và chỉ tới nút Tạo yêu cầu Tour ở phần đầu.

  ![W26 · Khách chưa có yêu cầu Tour](wireframes/W26.png)

- **E7.2 Chip không có dòng.** Ví dụ chip Đã hủy có 0: bảng ghi “Không có yêu cầu ở nhóm này”.
- **E7.3 Một yêu cầu có nhiều Booking.** Ô Booking liệt kê từng Booking trên một dòng (số Booking tối đa cho một yêu cầu do RSD KD06 quy định).
- **E7.4 Lỗi tải.** Bảng hiện “Không tải được yêu cầu và Booking” và Thử lại; phần đầu và các tab khác không bị ảnh hưởng.

### 3.8. KD04.4 · (Bỏ theo C3)

Tab Chăm sóc và phản hồi không còn. Các mã L8.1–L8.3, E8.1–E8.6 không dùng lại; tệp W28–W31.png giữ lại, không nhúng.

---

## 4. Quy tắc triển khai chi tiết

### R01. Loại khách hàng và dữ liệu bắt buộc (quyết định 11/11/2026)

- Hai loại: **Cá nhân** (một người) và **Doanh nghiệp** (đại lý, công ty, tổ chức; có một hoặc nhiều người liên hệ). Loại chỉ chọn khi tạo; sau khi lưu không đổi được. Tạo nhầm loại thì xóa (nếu chưa dùng, R05) và tạo lại.
- Cá nhân bắt buộc: họ và tên, quốc tịch, ngôn ngữ giao tiếp, và ít nhất một trong email, điện thoại.
- Doanh nghiệp bắt buộc: tên doanh nghiệp, quốc gia, ngôn ngữ giao tiếp, ít nhất một người liên hệ có họ và tên và có email hoặc điện thoại, đúng một liên hệ chính.
- Ngôn ngữ giao tiếp được gợi ý theo cột “Ngôn ngữ mặc định” của danh mục quốc gia (QT05) khi ô đang trống hoặc vẫn là giá trị gợi ý trước đó; người dùng đã tự chọn thì không ghi đè. Quốc gia chưa khai ngôn ngữ mặc định thì để trống.
- Liên hệ chính của doanh nghiệp là người nhận mặc định khi tạo yêu cầu Tour (KD06).

### R02. Chuẩn hóa và kiểm tra trùng (TN02.02, TN02.03)

- **Chuẩn hóa.** Email: bỏ khoảng trắng, chữ thường. Điện thoại: lưu dạng quốc tế `+<mã quốc gia><số>`; người dùng nhập số bắt đầu bằng 0 thì hệ thống bỏ số 0 và thêm mã của quốc gia đang chọn; so sánh theo chuỗi chữ số. Tên doanh nghiệp: bỏ dấu, chữ thường, bỏ ký tự không phải chữ hoặc số, gộp khoảng trắng. Mã số thuế: chữ hoa, bỏ khoảng trắng và dấu gạch.
- **Hồ sơ có thể trùng** với hồ sơ đang lưu khi có ít nhất một điều kiện:
  1. Email trùng với email của khách cá nhân, email chung của doanh nghiệp hoặc email của người liên hệ thuộc khách khác.
  2. Điện thoại trùng tương tự.
  3. Doanh nghiệp: mã số thuế trùng; hoặc tên chuẩn hóa trùng và cùng quốc gia.
- Tên của khách cá nhân không dùng để kiểm tra trùng.
- **Khi kiểm tra.** Khi bấm Lưu lúc tạo; khi sửa mà một trong các trường trên đổi. Máy chủ kiểm tra lại ngay trước khi ghi (hai người cùng tạo một khách thì người lưu sau thấy hộp thoại).
- **Cảnh báo, không chặn.** Hộp thoại W11 liệt kê tối đa 10 hồ sơ, mỗi dòng ghi trường trùng. Vẫn tạo hoặc vẫn lưu cần lý do; hệ thống lưu cặp hồ sơ đã xác nhận không trùng để không hỏi lại.
- Tạo nhanh khách ở KD06.1 dùng cùng quy tắc và cùng hộp thoại.

### R03. Người phụ trách và quyền sửa (quyết định 11/11/2026)

- Mỗi khách có đúng một người phụ trách là người dùng có vai trò Kinh doanh. Khi tạo, người phụ trách là người tạo.
- Người phụ trách chỉ là thông tin: chip Khách của tôi, người nhận thông báo (Q1). Sửa KD04.1, xóa khách, chuyển phụ trách theo quyền ở QT02, không theo người phụ trách; mặc định cấp cho Kinh doanh. Quản trị hệ thống mặc định được chuyển phụ trách (một khách hoặc hàng loạt), không sửa nội dung.
- Mọi người Kinh doanh xem được mọi khách và tạo được yêu cầu Tour cho bất kỳ khách nào; người phụ trách của yêu cầu là người tạo yêu cầu (RSD KD06).
- Quyền mở KD08, DH08 từ KD04 theo quyền của chính các màn đó ở QT02 (Quản trị hệ thống: mặc định mở KD08, DH08 chỉ xem, chuyển người phụ trách Booking theo RSD KD08).

### R04. Chuyển người phụ trách (quyết định 11/11/2026)

- Người nhận: người dùng có vai trò Kinh doanh, đang hoạt động ở QT01, khác người hiện tại.
- Chuyển chỉ đổi người phụ trách khách. Yêu cầu Tour, Booking, hồ sơ Tour đã có giữ nguyên người phụ trách.
- Hàng loạt: theo quyền Chuyển phụ trách hàng loạt (mặc định Quản trị hệ thống), ở KD03. “Chọn tất cả” ở đầu bảng chỉ chọn các dòng trong trang. Khi kết quả lọc nhiều hơn một trang, thanh hàng loạt có liên kết “Chọn tất cả n khách khớp bộ lọc”; chỉ khi bấm liên kết này hệ thống mới áp dụng cho mọi kết quả lọc, và số n được ghi lại trên nút. Mỗi khách là một giao dịch; khách mà người phụ trách đã khác lúc tải thì bỏ qua và ghi lý do.
- Thông báo in-app (Q2): người mới nhận một thông báo (hàng loạt thì gộp, ví dụ “Bạn được giao 11 khách hàng từ Lê Thu Hà”), có ghi chú bàn giao. Người mới bấm thông báo để mở KD04 của khách hoặc KD03 lọc theo mình. Khi người chuyển không phải người cũ, người cũ cũng nhận thông báo nếu tài khoản còn hoạt động.
- Ghi lịch sử hồ sơ và QT03: người cũ, người mới, người thực hiện, ghi chú.

### R05. Xóa khách hàng (quyết định 11/11/2026)

- Người có quyền Xóa khách hàng (mặc định Kinh doanh) xóa được, chỉ khi khách **chưa được dùng**: không có yêu cầu Tour nào (kể cả đã hủy) (C3).
- **Lý do chặn** hiện ở mục Xóa khách hàng trong menu ⋯ (W20): “đã có n yêu cầu Tour”.
- Xóa là xóa hẳn hồ sơ, người liên hệ và lịch sử hồ sơ. Nhật ký QT03 giữ mã, tên, người xóa, thời điểm. Mã khách không được dùng lại.
- Không có trạng thái ngừng giao dịch. Khách không còn giao dịch vẫn giữ để tra cứu.
- Máy chủ kiểm tra lại điều kiện ngay khi xóa (E5.2).

### R06. Lịch sử Tour và Tour đã đi (TN10.01 · RSD DH08)

- **Khi DH08 đóng Tour**, hệ thống tạo đúng một mục lịch sử theo Tour Code cho khách của Booking của hồ sơ Tour. Hồ sơ kết thúc vì Booking đã hủy (lý do kết thúc “Booking đã hủy”, RSD DH08 R14) không ghi lịch sử Tour. Nội dung là bản chụp lúc đóng: Tour Code, mã Booking, ngày đi – ngày về và số ngày đêm, số khách (số thành viên đoàn ở DH08.4; chưa có thì số khách của Booking), hành trình (tuyến điểm đến của Booking), dịch vụ đã sử dụng, ngày đóng lần đầu.
- **Dịch vụ đã sử dụng** là các hạng mục dịch vụ của hồ sơ Tour không ở trạng thái Đã hủy, gom theo loại dịch vụ; mỗi mục ghi tên dịch vụ, NCC và số đêm hoặc số lượng. Không ghi giá, không ghi công nợ.
- **Mở lại và đóng lại.** Khi hồ sơ được mở lại ở DH08 (RSD DH08 R16), mục chuyển Đang cập nhật, nội dung giữ bản chụp cũ. Khi đóng lại, hệ thống cập nhật bản chụp, ngày đóng gần nhất và trạng thái Đã đóng trên cùng mục.
- **Cùng giao dịch (Q5).** Mục lịch sử Tour được tạo hoặc cập nhật trong cùng giao dịch với thao tác đóng, mở lại, đóng lại ở DH08: thành công cả hoặc không gì cả. Không có ghi lỗi, banner thiếu lịch sử, nút Cập nhật lịch sử hay đối soát hằng đêm. Mục khóa theo Tour Code nên không tạo trùng.
- **Tour đã đi** (phần đầu KD04, cột KD03) là số hồ sơ Tour của khách đã từng được đóng, tính từ DH08 (kể cả Tour đang mở lại), không tính hồ sơ kết thúc vì Booking đã hủy. Tour gần nhất là Tour có ngày đóng lần đầu muộn nhất (thuật ngữ Ngày đóng Tour, RSD DH08 R16); mở lại rồi đóng lại không đổi Tour gần nhất.

### R07. (Bỏ theo C3)

### R08. Yêu cầu Tour và Booking trên hồ sơ khách

- KD04.3 liệt kê mọi yêu cầu Tour gắn với khách, mọi trạng thái, mới nhất ở trên. Booking và Tour Code lấy theo yêu cầu.
- Nhóm của yêu cầu, cùng cách tính với RSD KD05 R02 và RSD KD06 R02: **Đã hủy** nếu yêu cầu có dấu hủy chưa được mở lại (người dùng hủy, hoặc hệ thống tự hủy khi Booking Hiệu lực của yêu cầu bị hủy); ngược lại **Đã có Booking** nếu có Booking Hiệu lực; còn lại **Đang xử lý**. Số trên tab KD04.3 và cột Yêu cầu đang xử lý ở KD03 là số yêu cầu Đang xử lý, nên khớp với KD05.
- Booking đã hủy vẫn hiện ở ô Booking của yêu cầu (nhãn Đã hủy), nhưng không làm yêu cầu ở nhóm Đã có Booking.
- Báo giá mới nhất: phiên bản lớn nhất và kết quả đã ghi (Chốt, Cần điều chỉnh, Không chốt theo KD06); chưa ghi kết quả thì “vN · Chưa có kết quả”; chưa có báo giá thì “—”.
- Mã yêu cầu bấm được khi người dùng có quyền xem KD06; mã Booking bấm được khi có quyền xem KD08; không có quyền thì hiện dạng chữ (U5). Không giới hạn theo người phụ trách (Q1).

### R09. (Bỏ theo C3)

### R10. Tìm kiếm, mở đúng tab và giữ ngữ cảnh

- Tìm từ 2 ký tự, áp dụng sau 300 ms ngừng gõ; không phân biệt hoa thường, bỏ dấu; tìm chuỗi con trong tên, tên giao dịch, mã khách, email, mã số thuế, tên và email người liên hệ; điện thoại so theo chuỗi chữ số (gõ “21543310” tìm thấy “+49 89 2154 3310”).
- Tab đích khi mở KD04 luôn là KD04.1 (lối vào KD04.4 bỏ theo C3).
- Bộ lọc, chip, trang và vị trí cuộn của KD03 được giữ trong phiên khi mở KD04 rồi quay lại.
- KD04 giữ tab đang xem khi lưu, chuyển phụ trách, hoặc quay lại từ KD06, KD08, DH08.

### R11. (Bỏ theo C3)

### R12. Mã khách hàng

- Dạng `KH-NNNNN`, tăng dần, cấp khi lưu lần đầu; không đổi, không dùng lại kể cả khi khách bị xóa; cho phép thủng số (Q7).

### R13. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở đâu | Hành vi khi thiếu |
|---|---|---|---|
| Danh mục quốc gia và ngôn ngữ mặc định theo quốc gia | Kinh doanh (QT05; Quản trị hệ thống sửa được mọi nhóm) | Quốc gia, quốc tịch, gợi ý ngôn ngữ (R01) | Không gợi ý ngôn ngữ; người dùng tự chọn |
| Danh mục ngôn ngữ | Điều hành (QT05, dùng chung DH06; Quản trị hệ thống sửa được mọi nhóm) | Ngôn ngữ giao tiếp | Không lưu được khách khi danh mục trống |
| Danh mục nguồn khách | Quản trị hệ thống, Kinh doanh (QT05) | Nguồn khách | Ô Nguồn khách trống, không bắt buộc |
| Quyền theo vai trò | Quản trị hệ thống (QT02) | 1.4, R03, R08 | Như 1.4 |

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa | Dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|---|
| Khách hàng | Mã khách hàng (R12) | Loại, thông tin cá nhân hoặc doanh nghiệp, quốc gia, ngôn ngữ giao tiếp, nguồn khách, ghi chú và sở thích, người phụ trách, phiên bản | KD04 tạo, sửa; KD06.1 tạo nhanh; KD06, KD08 đọc; HD01 đọc tên và điện thoại của khách Cá nhân là người liên hệ của Booking, cho HDV được phân công ở hồ sơ Tour của Booking (RSD HD01 R12) |
| Người liên hệ | Mã khách hàng + mã người liên hệ | Họ và tên, chức vụ, email, điện thoại, là liên hệ chính | Chỉ Doanh nghiệp; KD06 đọc liên hệ chính; HD01 đọc họ tên và điện thoại của người liên hệ được chọn trên Booking, cho HDV được phân công ở hồ sơ Tour của Booking; không đọc email, chức vụ (RSD HD01 R12) |
| Lịch sử hồ sơ | Mã khách hàng + thời điểm | Tạo, sửa (trường, trước, sau), chuyển phụ trách (người cũ, người mới, ghi chú), lý do vẫn tạo khi trùng (hồ sơ trùng, lý do) | Ghi nhật ký QT03 |
| Mục lịch sử Tour | Mã khách hàng + Tour Code | Booking, thời gian, số khách, hành trình, dịch vụ đã sử dụng (bản chụp khi đóng), ngày đóng lần đầu, ngày đóng gần nhất, tình trạng | Ghi trong cùng giao dịch khi DH08 đóng, mở lại Tour (R06; Q5) |
| Yêu cầu Tour, phiên bản báo giá | Mã yêu cầu | Chỉ đọc | KD06 |
| Booking | Mã Booking | Chỉ đọc | KD08 |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| Khách hàng (chung) | Loại | Có | Cá nhân | Chỉ chọn khi tạo (R01) |
| Khách hàng (chung) | Quốc gia hoặc Quốc tịch | Có | — | Danh mục quốc gia (QT05), giá trị đang dùng |
| Khách hàng (chung) | Ngôn ngữ giao tiếp | Có | Gợi ý theo quốc gia (R01) | Danh mục ngôn ngữ (QT05) |
| Khách hàng (chung) | Nguồn khách | Không | — | Danh mục nguồn khách (QT05) |
| Khách hàng (chung) | Ghi chú và sở thích | Không | — | Tối đa 2.000 ký tự |
| Khách hàng (chung) | Người phụ trách | Có | Người tạo | Chỉ đổi bằng Chuyển phụ trách (R04) |
| Cá nhân | Danh xưng | Không | — | Mr, Mrs, Ms, Mx |
| Cá nhân | Họ và tên | Có | — | 2–150 ký tự |
| Cá nhân | Ngày sinh | Không | — | Không sau hôm nay |
| Cá nhân | Email, Điện thoại | Ít nhất một | — | Email đúng định dạng; điện thoại theo R02 |
| Cá nhân | Địa chỉ | Không | — | Tối đa 300 ký tự |
| Doanh nghiệp | Tên doanh nghiệp | Có | — | 2–200 ký tự |
| Doanh nghiệp | Tên giao dịch, Mã số thuế, Website, Email chung, Điện thoại, Địa chỉ | Không | — | Email, điện thoại theo R02; website dạng tên miền |
| Người liên hệ | Họ và tên | Có | — | 2–150 ký tự |
| Người liên hệ | Chức vụ | Không | — | — |
| Người liên hệ | Email, Điện thoại | Ít nhất một | — | Theo R02 |
| Người liên hệ | Liên hệ chính | Có | Người đầu tiên | Đúng một người mỗi doanh nghiệp |
| Cảnh báo trùng | Lý do vẫn tạo | Có khi Vẫn tạo hoặc Vẫn lưu | — | Tối thiểu 10 ký tự |
| Chuyển phụ trách | Người phụ trách mới | Có | — | Kinh doanh đang hoạt động, khác người hiện tại |
| Chuyển phụ trách | Ghi chú bàn giao | Không | — | Tối đa 1.000 ký tự |

### 5.3. Dữ liệu gửi ra ngoài

KD03 và KD04 không gửi tài liệu hoặc email nào ra ngoài hệ thống. Thông báo chuyển phụ trách là thông báo in-app (Q2).

---

## 6. Tiêu chí nghiệm thu

| Mã | Điều kiện và thao tác | Kết quả kiểm chứng được |
|---|---|---|
| AC01 | Kinh doanh mở Khách hàng lần đầu trong phiên | KD03 ở chip Khách của tôi, sắp theo tên, đủ cột ở mục 2.2; không có cột Phụ trách (W01) |
| AC02 | Gõ tên người liên hệ của doanh nghiệp vào ô tìm | Doanh nghiệp đó hiện ra, phần khớp được tô; tìm không phân biệt hoa thường và dấu (W03) |
| AC03 | Chọn chip Tất cả | Thấy khách của mọi người phụ trách; cột Phụ trách hiện; tổng chip đúng với số dòng (W03) |
| AC04 | Bộ lọc không có kết quả | Hiện “Không có khách hàng khớp bộ lọc” khác với trạng thái chưa có dữ liệu (W04, E1.2) |
| AC05 | Không tải được danh sách | Hiện lỗi, bộ lọc giữ nguyên, Thử lại tải lại (W05) |
| AC06 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC07 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC08 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC09 | Mở hồ sơ rồi quay lại KD03 | Bộ lọc, trang, vị trí cuộn giữ nguyên (L1.3) |
| AC10 | Tạo khách cá nhân hợp lệ, không trùng | Hồ sơ có mã KH-NNNNN, người phụ trách là người tạo, các tab mở, thông báo đã tạo (W12) |
| AC11 | Chọn quốc tịch Đức khi ô ngôn ngữ đang trống | Ngôn ngữ giao tiếp điền Tiếng Đức, có nhãn Gợi ý; người dùng sửa được (W08) |
| AC12 | Tạo doanh nghiệp không có người liên hệ có email hoặc điện thoại | Không lưu; lỗi ở bảng Người liên hệ (E2.1) |
| AC13 | Thiếu họ và tên; email sai định dạng | Không lưu; banner “Còn 2 lỗi”, lỗi cạnh ô, dữ liệu giữ nguyên (W10) |
| AC14 | Điện thoại “0151 2345 6789” với quốc tịch Đức trùng với “+49 151 2345 6789” của một người liên hệ | Hộp thoại trùng liệt kê doanh nghiệp đó với “Điện thoại của người liên hệ …” (W11, R02) |
| AC15 | Trong hộp thoại trùng, bấm Mở hồ sơ | Hỏi bỏ phần đang nhập; xác nhận thì mở KD04 của hồ sơ đã có; không tạo hồ sơ mới |
| AC16 | Trong hộp thoại trùng, Vẫn tạo khách hàng khi chưa nhập lý do | Nút khóa; nhập lý do đủ 10 ký tự thì bấm được; lý do lưu trong lịch sử hồ sơ |
| AC17 | Sửa lại khách đã xác nhận không trùng với cùng hồ sơ | Không hỏi lại cặp đó (E3.3) |
| AC18 | Bấm Lưu và tạo yêu cầu Tour khi tạo khách | Khách được lưu, KD06 mở với khách, liên hệ chính, ngôn ngữ phục vụ điền sẵn (W27) |
| AC19 | Quản trị hệ thống (không có quyền sửa KD04.1) mở KD04.1 | Trường hiện dạng chữ; không có Lưu, Tạo yêu cầu Tour, ⋯; có Chuyển phụ trách (W14) |
| AC20 | Kinh doanh sửa điện thoại một người liên hệ rồi Lưu | Ô ghi giá trị trước khi chưa lưu; sau Lưu có thông báo, phần đầu cập nhật; yêu cầu Tour đã có không đổi (W13) |
| AC21 | Đổi tab khi còn thay đổi chưa lưu | Hộp thoại W15; Ở lại giữ thay đổi; Bỏ thay đổi thì chuyển tab |
| AC22 | Hai phiên cùng sửa; phiên sau bấm Lưu | Lưu bị từ chối, banner W16; chỉ có nút Tải lại, không có nút ghi đè; sau khi tải, banner liệt kê giá trị người dùng đã nhập (E3.4) |
| AC23 | Người phụ trách chuyển khách cho người Kinh doanh khác | Người mới nhận thông báo in-app; khách rời chip Khách của tôi của người cũ, người cũ vẫn sửa được theo quyền Kinh doanh; yêu cầu, Booking giữ người phụ trách cũ (W17, W18) |
| AC24 | Chọn người nhận là chính người hiện tại | Nút Chuyển phụ trách khóa và ghi lý do (E4.1) |
| AC25 | Quản trị chọn 12 khách và chuyển, trong đó 1 khách vừa được đổi ở phiên khác | Chuyển 11, bỏ qua 1 kèm lý do; người nhận nhận một thông báo gộp (W06, W07) |
| AC26 | Kinh doanh (quyền mặc định, không có Chuyển phụ trách hàng loạt) mở KD03 | Không có ô chọn dòng và thanh hàng loạt |
| AC27 | Kinh doanh xóa khách chưa có yêu cầu Tour | Hộp thoại W19; xác nhận thì hồ sơ bị xóa, về KD03 với thông báo (W19a); nhật ký QT03 có bản ghi |
| AC28 | Mở menu ⋯ của khách đã có yêu cầu Tour | Xóa khách hàng khóa; lý do ghi số yêu cầu Tour (W20, R05) |
| AC29 | Có người tạo yêu cầu cho khách trong lúc hộp thoại xóa đang mở; bấm Xóa | Xóa bị từ chối, menu chuyển W20 (E5.2) |
| AC30 | Điều hành đóng Tour của khách bằng nút Đóng Tour ở header DH08 | KD04.2 có đúng một mục mới theo Tour Code, ghi trong cùng giao dịch với Đóng Tour; Tour đã đi tăng 1 (W21, R06) |
| AC31 | Điều hành mở lại rồi đóng lại Tour đó | Mục hiện Đang cập nhật khi mở lại (W22); đóng lại cập nhật cùng mục, không có mục thứ hai |
| AC32 | Bỏ theo Q5 (lịch sử Tour ghi cùng giao dịch Đóng Tour; không còn banner, Cập nhật lịch sử) | — |
| AC33 | Bấm Tour Code khi có quyền xem DH08 | DH08 mở chỉ đọc; người không có quyền thấy Tour Code dạng chữ, không bấm được (W21) |
| AC34 | Mở KD04.3 của khách có 6 yêu cầu | Chip 1 / 4 / 1 / 6; tab có số 1; bấm mã yêu cầu mở KD06; bấm mã Booking mở KD08 khi có quyền xem KD08, không có quyền thì mã dạng chữ (W25) |
| AC35 | Bấm Tạo yêu cầu Tour ở phần đầu | KD06 mở tạo mới với khách điền sẵn; bấm Hủy ở KD06 không tạo yêu cầu (W27) |
| AC36 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC37 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC38 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC39 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC40 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC41 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC42 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
| AC43 | Điều hành hoặc Kế toán mở đường dẫn KD03, KD04 | Trang không có quyền (E1.4) |
| AC44 | Booking Hiệu lực duy nhất của một yêu cầu bị hủy ở KD08; hồ sơ Tour của Booking kết thúc rồi đóng | Yêu cầu sang chip Đã hủy ở KD04.3, số yêu cầu đang xử lý ở KD03 và trên tab không tăng; không có mục lịch sử Tour; Tour đã đi, Tour gần nhất không đổi (R06, R08) |
| AC45 | Bỏ theo C3 (chăm sóc và khảo sát ngoài phạm vi) | — |
