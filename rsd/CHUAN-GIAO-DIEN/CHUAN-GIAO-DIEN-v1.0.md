# Chuẩn giao diện dùng chung · TOPAS

- **Phiên bản.** 1.0, ngày 12/11/2026.
- **Nguồn.** `docs/QUYET-DINH-PHASE-CODING.md` Vòng 3 (U1–U6) và Vòng 6 (K1–K6); `docs/rsd/BOI-CANH-DU-AN.md` (Nền tảng và định dạng, Quy ước tài liệu và giao diện, Nguyên tắc giao diện dùng chung, Danh sách và dạng xem, Sửa đồng thời Q8, Tệp đính kèm Q19, Mặc định áp sau khi sửa RSD); quy ước đang dùng ở mục 2 của 18 RSD; `.claude/skills/sme-erp-rsd-skill/references/quy-tac-trien-khai.md`.
- **Dùng để làm gì.** Đặc tả bộ component và hành vi giao diện mà mọi màn nội bộ tuân theo; là nguồn viết scenario kiểm thử cho các hành vi giao diện chung (Phụ lục A, mã `CGD-ACnn`, chạy qua trình duyệt).
- **Thứ tự áp dụng.** BOI-CANH > chuẩn này > chữ trong RSD > wireframe, ở các điểm dùng chung. RSD viết trước chuẩn này ghi khác thì theo chuẩn (mục 13). Chuẩn không đổi luồng, trạng thái, quyền, tiền hay hành vi gửi ra ngoài của màn nào.
- **Cách dẫn.** RSD, scenario, ghi chú dẫn theo mã quy tắc, ví dụ “theo CGD K1.13”, “CGD U2.06”. Mã quy tắc và mã AC không đánh lại khi nâng phiên bản; quy tắc bỏ thì giữ mã kèm chữ “Bỏ ở vX.Y”.
- **Bổ sung 12/11/2026 (sau rà chéo với CH01, CH02, CH03, QT01, QT02).** K0.05, mục 1: tên màn QT02 “Vai trò và phân quyền”. K0.06: ngoại lệ không có thanh trên. K0.08, K0.11, K4.09: phiên hết hạn khi còn thay đổi chưa lưu theo RSD CH01 R10. K0.10: nhịp cập nhật số chưa đọc. U1.03, U1.05: cột quyền ghi mã quyền QT02; nhóm Khách hàng tìm thêm theo email, điện thoại (người dùng chốt 12/11/2026). U2.06: ngoại lệ Hoàn tác tất cả hoặc không của QT02. U3.06: liên kết hệ thống tạo ghi tường minh mọi bộ lọc. U4.01: thẻ số 0 theo RSD CH03 R04. U5.05: thu hồi quyền giữa phiên theo RSD QT01 R02, QT02 R07. K6.06: ngoại lệ nút Tải lại trang. Viết lại CGD-AC48, AC54, AC82, AC83, AC131, AC146; thêm CGD-AC147–AC150.
- **Bổ sung 12/11/2026 (vai trò HDV).** Theo người dùng chốt 12/11/2026 (BOI-CANH Nền tảng và “Vai trò HDV”): màn của phòng HDV (HD01 Tour của tôi) thiết kế cho điện thoại. Thêm nhóm quy tắc **K7 · Màn điện thoại** (mục 14, đặt sau mục 13 để không đánh lại số mục) áp cho HD01 và cho CH01 khi mở trên điện thoại. Sửa mục 1 (phạm vi, mã màn), K0 (mở đầu: K0 cho màn máy tính; K0.01 ngoại lệ K7; K0.05 mục Tour của tôi; K0.06, K0.07 trang mặc định theo phòng; K0.09 nút về trang mặc định), U4.01, mục 13 (thêm dòng 24), Phụ lục A (A.12, CGD-AC151–AC163), Phụ lục B.
- **Bổ sung 12/11/2026 (sau rà soát HD01).** K0.11: ngoại lệ đăng xuất khi HD01 còn bản chưa gửi trên máy (RSD HD01 E5.5, R08; RSD CH01 R11, E8.6). K7.06: danh sách RSD ghi tải một lần (RSD HD01 R02) thì không có Xem thêm. K7.11: ngoại lệ bản chưa gửi và Gửi lại của RSD HD01 R08. Viết lại CGD-AC156 (danh sách tải một lần của HD01) và CGD-AC161 (HD01 không có thao tác Hoàn tác, U2.03). Không đổi số quy tắc, số AC.

## Mục lục

1. Phạm vi, ranh giới và thuật ngữ giao diện
2. K0 · Khung ứng dụng
3. U1 · Tìm nhanh Ctrl+K
4. U2 · Xác nhận, Hoàn tác và thông báo ngắn
5. U3 · Nhớ lựa chọn và trạng thái trên URL
6. U4, U5, U6 · Việc của tôi, quyền trên giao diện, tự đơn giản hóa
7. K1 · Chuẩn bảng
8. K2 · Bộ lọc
9. K3 · Dạng xem đã lưu và dạng xem
10. K4 · Màn hồ sơ
11. K5 · Trang, bảng trượt, hộp thoại, sửa tại dòng, tệp đính kèm
12. K6 · Màu trạng thái, công tắc, chữ trên nút
13. Điểm RSD cũ khác chuẩn
14. K7 · Màn điện thoại
- Phụ lục A · Tiêu chí nghiệm thu (CGD-AC)
- Phụ lục B · Truy vết quyết định → quy tắc

---

## 1. Phạm vi, ranh giới và thuật ngữ giao diện

**Phạm vi.** Mọi màn nội bộ của TOPAS (KD, DH, KT, QT, Tour của tôi, Đăng nhập, Thông báo, Việc của tôi). Màn điện thoại (HD01; CH01 khi mở trên điện thoại) theo K7 (mục 14) ở các điểm K7 nêu; điểm K7 không nêu thì theo các quy tắc còn lại. Không áp cho trang công khai của proposal (W33, W36, W37 của RSD KD06): trang này dùng ngôn ngữ và định dạng của proposal theo RSD KD06.

**Ranh giới với RSD.**

| RSD quyết định | Chuẩn này quyết định |
|---|---|
| Màn có những cột, bộ lọc chính, chip, dạng xem nào; giá trị mặc định theo vai trò | Cách mọi bảng, bộ lọc, chip, dạng xem hoạt động |
| Luồng, trạng thái, điều kiện, quyền, tiền, gửi ra ngoài | Cách hỏi xác nhận, Hoàn tác, báo lỗi, chặn rời trang, xử lý xung đột |
| Nút chính theo trạng thái, thao tác nào nằm ở menu ⋯ | Vị trí, số lượng, chữ và kiểu của nút |
| Thao tác nào hỏi xác nhận (theo tiêu chí U2.01) | Mẫu hộp thoại, thông báo ngắn, thời gian |
| Đối tượng nào mở thành trang, bảng trượt hay hộp thoại | Cỡ và hành vi của trang, bảng trượt, hộp thoại |

**Thuật ngữ giao diện.** Dùng kèm bảng Thuật ngữ của BOI-CANH.

| Từ | Nghĩa |
|---|---|
| Thông báo ngắn | Ô chữ hiện tạm ở góc phải dưới sau một thao tác (toast). Khác **Thông báo** (tin trong ứng dụng ở chuông, CH02) |
| Phần đầu | Vùng trên cùng của màn hồ sơ: mã, trạng thái, thông tin chính, nút |
| Thanh công cụ | Hàng trên bảng: ô tìm, nút bộ lọc, Dạng xem đã lưu, Cột, Mật độ, Xóa bộ lọc |
| Hàng chip | Hàng dưới thanh công cụ: chip Của tôi, chip của RSD (dạng xem có sẵn), dòng ghi chú, bộ chuyển dạng xem |
| Thanh hàng loạt | Thanh hiện khi chọn ít nhất một dòng, là nơi thao tác hàng loạt duy nhất |
| Thanh lưu | Thanh dính đáy màn hồ sơ hoặc chân bảng trượt, hiện khi có thay đổi chưa lưu |
| Dòng đang trỏ | Dòng có viền trỏ do phím ↑↓ hoặc do vừa mở; Enter mở dòng này |
| Bảng trượt | Vùng mở từ mép phải, phủ lên một phần màn, danh sách phía sau vẫn thấy |
| Hộp thoại | Khung giữa màn, chặn thao tác phía sau cho tới khi đóng |
| Mặc định của màn | Trạng thái lọc khi người dùng chưa chọn gì: dạng xem đã lưu người dùng đặt mặc định (K3.07), không có thì mặc định của RSD theo vai trò |

Mã màn chưa có RSD dùng trong chuẩn: **CH01** Đăng nhập và Đổi mật khẩu, **CH02** Thông báo, **CH03** Việc của tôi, **QT02** Vai trò và phân quyền, **HD01** Tour của tôi (màn điện thoại của phòng HDV).

---

## 2. K0 · Khung ứng dụng

K0 là khung của màn nội bộ trên máy tính. Màn điện thoại (K7.01) dùng khung thu gọn K7.04 thay K0.05, K0.06; các quy tắc K0 khác vẫn áp.

**K0.01 · Thiết bị và cỡ màn hình.** Web trên máy tính để bàn, trình duyệt Chrome, Edge, Firefox, Safari bản hiện hành. Bố cục thiết kế cho vùng hiển thị từ 1280 × 800 px. Ở 1280 × 800, một màn danh sách hiện cùng lúc thanh trên, tiêu đề màn, thanh công cụ, hàng chip, tiêu đề cột và ít nhất 10 dòng ở mật độ Gọn mà không phải cuộn. Vùng hiển thị hẹp hơn 1280 px thì trang cuộn ngang, bố cục không đổi (riêng Kanban, Lịch theo ngoại lệ màn hẹp của RSD). Không có giao diện điện thoại, trừ các màn theo K7 (HD01; CH01 khi mở trên điện thoại).

**K0.02 · Ngôn ngữ.** Mọi chữ của giao diện là tiếng Việt. Ngôn ngữ phục vụ đoàn, ngôn ngữ mẫu email, ngôn ngữ proposal là dữ liệu, không đổi ngôn ngữ giao diện.

**K0.03 · Ngày, giờ, múi giờ.**
- Ngày hiển thị `dd/mm/yyyy` (05/11/2026); giờ `HH:mm` 24 giờ; ngày giờ `dd/mm/yyyy HH:mm`. Tháng (khi chỉ có tháng) `mm/yyyy`.
- Mọi ngày giờ hiển thị và mọi phép tính “hôm nay”, “tháng này”, “7 ngày tới” theo múi giờ Asia/Ho_Chi_Minh, bất kể múi giờ của máy người dùng.
- Ô nhập ngày nhận gõ `dd/mm/yyyy` (chấp nhận `d/m/yyyy`, tự thêm số 0) hoặc chọn trên lịch; lịch bắt đầu tuần từ Thứ 2. Ngày không có thật (31/02/2026) là lỗi tại trường (K4.11).

**K0.04 · Số, tỷ lệ, tiền.**
- Dấu chấm phân cách nghìn, dấu phẩy thập phân: 1.250.000; 2.100,50; 14,5%. Số âm có dấu trừ “−” phía trước.
- Tiền luôn kèm loại tiền, đặt sau số, cách một khoảng: VND dùng ký hiệu ₫ (210.000.000 ₫), loại tiền khác dùng mã ISO (15.000 EUR, 2.400 USD).
- Số chữ số thập phân theo đơn vị nhỏ nhất của loại tiền (VND, JPY: 0; EUR, USD: 2). Phần lẻ bằng 0 thì không hiện (2.100 EUR); có phần lẻ thì hiện đủ (2.100,50 EUR). Làm tròn hiển thị half-up (Q9).
- Tỷ giá hiện tối đa 6 chữ số thập phân, bỏ số 0 thừa (27.480 ₫; 168,25 ₫). Tỷ lệ % tối đa 2 chữ số thập phân.
- Không cộng lẫn loại tiền ở bất kỳ dòng tổng nào; tổng tách theo từng loại tiền. Số quy đổi tham khảo ghi “≈” và chữ xám (RSD KT01 R04).
- Ô nhập tiền, số nhận dấu phẩy là thập phân; dấu chấm người dùng gõ được bỏ qua; khi rời ô thì định dạng lại theo quy tắc trên.

**K0.05 · Menu trái.**
- Nhóm theo module, theo thứ tự: Việc của tôi (một mục, luôn có, trừ tài khoản chỉ có vai trò thuộc phòng HDV, RSD CH03 R10); Tour của tôi (một mục, HD01, khi có `HD01.xem`; mở bố cục K7); Kinh doanh; Điều hành; Kế toán; Báo cáo; Quản trị. Mỗi mục là một màn:

| Nhóm | Mục (mã màn) |
|---|---|
| Kinh doanh | Yêu cầu Tour (KD05) · Booking (KD07) · Khách hàng (KD03) · Tour mẫu (KD01) |
| Điều hành | Hồ sơ Tour (DH07) · Nhà cung cấp (DH02) · Dịch vụ & bảng giá (DH04) · Nhân sự (DH06) · Mẫu checklist (DH01) |
| Kế toán | Công nợ & thu chi (KT01) |
| Báo cáo | Doanh thu (QT07) · Chuyển đổi yêu cầu (QT08) · P&L theo Tour (QT09) · Công nợ thu, trả (QT10) · Hiệu suất NCC (QT11) · Sự cố & chi phí phát sinh (QT12) |
| Quản trị | Người dùng (QT01) · Vai trò và phân quyền (QT02) · Nhật ký thao tác (QT03) · Mẫu tài liệu (QT04) · Danh mục dùng chung (QT05) |

- Mục của màn người dùng không có quyền xem thì ẩn (không hiện mờ); nhóm không còn mục nào thì ẩn cả nhóm.
- Mục của màn đang mở (kể cả khi đang ở hồ sơ của màn đó, ví dụ KD06 thuộc Yêu cầu Tour) được tô.
- Menu thu gọn được thành cột biểu tượng; trạng thái thu gọn nhớ theo người dùng (U3).
- Bấm mục khi màn hiện tại có thay đổi chưa lưu: hộp thoại K4.09.

**K0.06 · Thanh trên.** Một thanh cố định trên cùng mọi màn nội bộ, gồm từ trái sang phải:
- Tên TOPAS, bấm về trang mặc định (K0.07).
- Ô “Tìm nhanh… Ctrl+K”, bấm mở hộp tìm nhanh (U1).
- Chuông Thông báo: số thông báo chưa đọc; 0 thì không có số; trên 99 thì “99+”. Bấm mở danh sách thông báo theo CH02.
- Menu tài khoản: họ tên và vai trò của người đăng nhập; mục **Đổi mật khẩu** (mở màn Đổi mật khẩu của CH01) và **Đăng xuất**.
- **Ngoại lệ:** màn Đăng nhập (CH01.1) và màn Đổi mật khẩu ở chế độ bắt buộc (RSD CH01 2.1, R06) không có thanh trên và không có menu trái; chế độ bắt buộc chỉ hiện tên người dùng và nút Đăng xuất. Màn Đổi mật khẩu ở chế độ tự đổi có thanh trên như mọi màn.

**K0.07 · Trang mặc định.** Trang mặc định là Tour của tôi (HD01) với tài khoản chỉ có vai trò thuộc phòng HDV, và Việc của tôi (CH03) với mọi tài khoản khác, kể cả tài khoản vừa có vai trò thuộc phòng HDV vừa có vai trò khác (RSD CH01 R18). Sau đăng nhập, hệ thống mở trang mặc định, trừ khi người dùng đăng nhập từ một đường dẫn sâu (K0.08) thì mở đúng đường dẫn đó. Địa chỉ gốc `/` mở trang mặc định.

**K0.08 · Đường dẫn sâu.**
- Mỗi danh sách, hồ sơ, tab của hồ sơ và bảng trượt chi tiết có URL riêng; mở URL là mở thẳng đúng chỗ đó (kể cả bộ lọc, U3.05). Tải lại trang (F5) giữ nguyên chỗ đang xem.
- URL hồ sơ dùng mã đối tượng, ví dụ `/kinh-doanh/yeu-cau/YC-2611-0031/bao-gia`, `/dieu-hanh/ho-so/TP-2611-0042/dat-dich-vu?hang-muc=…`.
- Mọi dòng của bảng, kết quả tìm nhanh, liên kết mã trên màn là liên kết thật: Ctrl+bấm (⌘+bấm trên macOS) hoặc bấm chuột giữa mở ở tab trình duyệt mới.
- Chưa đăng nhập hoặc phiên đã hết: mở trang Đăng nhập; đăng nhập xong mở đúng URL ban đầu. Ngoại lệ: phiên hết hạn khi trang đang có thay đổi chưa lưu thì không chuyển trang, theo K0.11 và RSD CH01 R10.

**K0.09 · Không có quyền, không tìm thấy.** URL tới màn hoặc bản ghi người dùng không có quyền xem: trang “Bạn không có quyền xem trang này”, nêu tên màn, kèm nút về trang mặc định (K0.07): “Về Việc của tôi”, hoặc “Về Tour của tôi” với tài khoản chỉ có vai trò thuộc phòng HDV; không lộ tên, mã hay dữ liệu của bản ghi. URL tới bản ghi không tồn tại (đã xóa, mã sai), hoặc tới hồ sơ Tour ngoài phạm vi phân công ở HD01 (RSD QT02 R16): trang “Không tìm thấy <mã>” kèm cùng nút.

**K0.10 · Tiêu đề tab trình duyệt.** `<mã đối tượng> · <tên màn> · TOPAS` khi ở hồ sơ (ví dụ “YC-2611-0031 · Yêu cầu Tour · TOPAS”); `<tên màn> · TOPAS` khi ở danh sách. Có thông báo chưa đọc thì thêm “(n) ” ở đầu. Số n là số trên chuông và cập nhật cùng nhịp với nó theo RSD CH02 R08 (mỗi 60 giây khi thẻ trình duyệt đang hiện, ngay khi thẻ hiện lại, sau mỗi lần chuyển màn); thẻ trình duyệt đang ẩn thì tiêu đề giữ số của lần lấy cuối.

**K0.11 · Đăng xuất và phiên hết hạn.** Đăng xuất làm ngay, không hỏi xác nhận; nếu màn đang có thay đổi chưa lưu thì hiện hộp thoại K4.09 trước. Ngoại lệ: tài khoản còn bản chưa gửi của HD01 lưu trên máy thì hiện hộp thoại “Còn n mục chưa gửi · đăng xuất sẽ xóa các mục này khỏi máy” (Ở lại, Vẫn đăng xuất) trước khi đăng xuất, ở bất kỳ màn nào (RSD HD01 E5.5, R08; RSD CH01 R11, E8.6). Sau đăng xuất về trang Đăng nhập; lựa chọn đã nhớ (U3) không bị xóa. Phiên hết hạn (Q24) trong lúc đang ở một màn:
- Trang không có thay đổi chưa lưu: thao tác kế tiếp đưa về trang Đăng nhập, đăng nhập xong mở lại đúng URL (RSD CH01 L3.3 bước 2).
- Trang còn thay đổi chưa lưu: **không chuyển trang**; banner đỏ đầu trang báo phiên đã hết hạn, kèm liên kết Đăng nhập ở thẻ mới; dữ liệu đang nhập giữ nguyên; người dùng đăng nhập ở thẻ mới rồi quay lại bấm Lưu (RSD CH01 L3.3 bước 3, R10). Rời trang lúc này vẫn qua hộp thoại K4.09 hoặc hộp thoại rời trang của trình duyệt. Cùng cách khi phiên bị chấm dứt vì Quản trị đặt lại mật khẩu hoặc mật khẩu được đổi ở phiên khác.
- Phiên bị chấm dứt vì tài khoản bị khóa thì chuyển ngay về Đăng nhập, không chặn rời trang (RSD CH01 R10).

---

## 3. U1 · Tìm nhanh Ctrl+K

**U1.01 · Mở và đóng.** Ctrl+K (⌘K trên macOS) hoặc bấm ô Tìm nhanh trên thanh trên mở hộp tìm nhanh ở giữa phía trên màn, con trỏ nằm sẵn trong ô tìm, ô trống. Phím tắt hoạt động ở mọi màn nội bộ, kể cả khi con trỏ đang ở một ô nhập; không mở khi đang có hộp thoại. Esc hoặc bấm ra ngoài hộp đóng hộp tìm, con trỏ trở lại chỗ cũ. Bấm Ctrl+K khi hộp đang mở thì đóng hộp.

**U1.02 · Điều kiện tìm.**
- Tìm khi chuỗi (đã bỏ khoảng trắng đầu, cuối) có từ 2 ký tự, sau 300 ms kể từ phím cuối. Enter khi chưa hết 300 ms thì tìm ngay.
- Không phân biệt hoa thường, không phân biệt dấu (“muller” khớp “Müller”, “nguyen” khớp “Nguyễn”, “d” khớp “đ”); khớp chuỗi con.
- Khi so mã, bỏ qua dấu “-” và khoảng trắng: “bk26110031”, “2611 0031”, “0031” đều khớp BK-2611-0031.
- Email (nhóm Khách hàng, Tài khoản): khớp chuỗi con, không phân biệt hoa thường; “muller-reisen” khớp anna@muller-reisen.de.
- Điện thoại (nhóm Khách hàng): chuỗi gõ có từ 6 chữ số trở lên mới so theo điện thoại; khi so chỉ giữ chữ số ở cả hai phía (bỏ khoảng trắng, “+”, “-”, “.”, ngoặc), khớp chuỗi con; “912 345 678” khớp +84 912.345.678.
- Chỉ hiện kết quả của lần gõ cuối; kết quả của lần gõ trước về muộn bị bỏ.

**U1.03 · Loại bản ghi, trường khớp và đích mở.**

| Thứ tự nhóm | Loại | Khớp theo | Dòng kết quả hiện | Mở ở | Cần quyền xem (mã quyền RSD QT02 Phụ lục A) |
|---|---|---|---|---|---|
| 1 | Yêu cầu Tour | Mã YC, tên khách | Mã, khách, thời gian đi, trạng thái | KD06, tab đích theo RSD KD05 R07 | `KD06.xem` |
| 2 | Booking | Mã BK, tên khách | Mã, khách, ngày khởi hành, trạng thái | KD08 | `KD08.xem` |
| 3 | Hồ sơ Tour | Tour Code, mã Booking, tên khách hoặc tên đoàn | Tour Code, khách, thời gian, trạng thái | DH08, tab Tổng quan | `DH08.xem` |
| 4 | Khách hàng | Mã KH, tên, tên giao dịch, tên người liên hệ; email, điện thoại của khách và của người liên hệ (U1.02) | Mã, tên, loại, quốc gia; khớp theo email hoặc điện thoại thì thông tin phụ ghi trường khớp, ví dụ “Email người liên hệ: anna@muller-reisen.de” | KD04 | `KD03.xem` (cả nhóm, gồm tìm theo email, điện thoại; người dùng chốt 12/11/2026). Mở dòng theo `KD04.xem`; không có thì dòng hiện dạng chữ (U5.04) |
| 5 | NCC | Mã NCC, tên | Mã, tên, loại dịch vụ, Đang dùng/Ngừng dùng | DH03 | `DH03.xem` |
| 6 | Dịch vụ NCC | Tên dịch vụ | Tên dịch vụ, NCC | DH04, bảng trượt chi tiết dịch vụ (chỉ xem) | `DH04.xem` |
| 7 | Tour mẫu | Mã TM, tên | Mã, tên, số ngày, Đang dùng/Ngừng dùng | KD02 | `KD01.xem` |
| 8 | Nhân sự | Mã NS, họ tên | Mã, họ tên, nhóm công việc | DH06, bảng trượt nhân sự | `DH06.xem` |
| 9 | Giao dịch | Mã GD | Mã, loại giao dịch, số tiền, ngày, trạng thái | KT01, bảng trượt chứa giao dịch, giao dịch được tô | Theo loại giao dịch: Thu từ khách, Hoàn cho khách → `KT01.xem-phai-thu`; Chi trả NCC, Nhận hoàn từ NCC → `KT01.xem-phai-tra`. Người có một trong hai mã chỉ thấy giao dịch của loại tương ứng |
| 10 | Mẫu tài liệu | Mã mẫu (DV-01…), tên | Mã, tên, loại | QT04, bảng trượt mẫu | `QT04.xem` |
| 11 | Mẫu checklist | Tên mẫu | Tên, loại Tour | DH01, bảng trượt mẫu | `DH01.xem` |
| 12 | Tài khoản | Họ tên, email đăng nhập | Họ tên, vai trò, trạng thái | QT01, bảng trượt tài khoản | `QT01.xem` |
| 13 | Mục nhật ký | Mã TT | Mã, thời điểm, người, thao tác | QT03, bảng trượt mục nhật ký | `QT03.xem` |

Email, điện thoại chỉ tìm ở nhóm Khách hàng (với `KD03.xem`) và email đăng nhập ở nhóm Tài khoản (với `QT01.xem`). Không tìm theo email, điện thoại của NCC, nhân sự; không tìm theo số hộ chiếu, số tài khoản. Giá trị danh mục QT05 tìm bằng ô tìm của QT05.

**U1.04 · Nhóm và sắp kết quả.**
- Kết quả nhóm theo loại, theo thứ tự nhóm ở U1.03; mỗi nhóm có tên nhóm và tối đa 5 dòng.
- Trong nhóm: khớp đúng cả mã trước, rồi bắt đầu bằng chuỗi gõ, rồi chứa chuỗi gõ; cùng mức thì bản ghi cập nhật gần nhất trước. Bản ghi Đã hủy, Ngừng dùng vẫn hiện, nhãn theo K6.
- Nhóm có hơn 5 kết quả có dòng cuối “Xem tất cả n trong <tên danh sách>”: mở màn danh sách của loại đó với ô tìm điền sẵn chuỗi đã gõ (qua URL, U3.06). Loại không có màn danh sách riêng (Dịch vụ NCC, Giao dịch, Mục nhật ký) mở danh sách tương ứng (DH04, KT01, QT03) theo cùng cách.
- Một dòng kết quả mang mã (đậm), tên, một thông tin phụ và nhãn trạng thái; phần khớp tô vàng.

**U1.05 · Quyền.** Máy chủ chỉ trả bản ghi của loại mà người dùng có mã quyền ở cột cuối U1.03 (quyền hiệu lực, hợp các vai trò, RSD QT02 R01). Loại không có quyền thì cả nhóm không có mặt, không hiện số, không hiện “Xem tất cả”. Người không có `KD03.xem` gõ email hoặc số điện thoại của khách thì không có kết quả nào từ các trường đó.

**U1.06 · Bàn phím và chuột.** Khi có kết quả, dòng đầu tiên là dòng đang trỏ. ↑↓ chuyển dòng đang trỏ qua các nhóm (dừng ở dòng đầu, dòng cuối). Enter mở dòng đang trỏ ở tab hiện tại và đóng hộp; Ctrl+Enter (⌘+Enter) mở ở tab trình duyệt mới, hộp vẫn mở. Bấm chuột vào dòng giống Enter. Gõ thêm ký tự thì tìm lại theo U1.02.

**U1.07 · Trạng thái hộp tìm.**
- Chưa đủ 2 ký tự: dòng gợi ý “Gõ ít nhất 2 ký tự để tìm mã hoặc tên”.
- Đang tìm: chỉ báo nhỏ trong ô; kết quả trước giữ nguyên tới khi có kết quả mới.
- Không có kết quả: “Không tìm thấy “<chuỗi>””.
- Lỗi hoặc quá 30 giây: “Không tìm được” kèm nút Thử lại; chuỗi giữ nguyên.

**U1.08 · Mở khi còn thay đổi chưa lưu.** Chọn một kết quả khi màn hiện tại có thay đổi chưa lưu thì hiện hộp thoại K4.09 trước khi rời màn; Ctrl+Enter mở tab mới thì không hỏi.

---

## 4. U2 · Xác nhận, Hoàn tác và thông báo ngắn

**U2.01 · Khi nào hỏi xác nhận.** Hệ thống chỉ hỏi xác nhận (hộp thoại U2.04) khi thao tác thỏa ít nhất một tiêu chí:

| Tiêu chí | Nghĩa | Ví dụ trong RSD |
|---|---|---|
| Không hoàn tác được | Hệ thống không đưa về đúng trạng thái trước chỉ bằng một lần ghi lại: xóa vĩnh viễn; chuyển vòng đời không có đường lùi hoặc chỉ lùi bằng thao tác riêng kèm lý do; cấp mã | Xóa khách hàng, Xóa hợp đồng NCC chưa dùng, Hủy yêu cầu, Hủy Booking, Bắt đầu Tour, Kết thúc Tour, Đóng Tour, Mở lại, Khóa tài khoản |
| Gửi ra ngoài | Dữ liệu tới người ngoài công ty hoặc thay đổi thứ người ngoài đang xem | Gửi email NCC, Publish link proposal, Thu hồi link |
| Chạm tiền | Ghi, hủy, điều chỉnh số tiền trong sổ công nợ hoặc quyết toán | Hủy giao dịch, Dùng tiền thừa, Lưu quyết toán |

- Thao tác đã đi qua một form nhập liệu (Ghi giao dịch, Hủy kèm lý do, Mở lại kèm lý do) thì nút cuối của form chính là bước xác nhận; không thêm hộp thoại thứ hai.
- Danh sách cụ thể thao tác nào hỏi xác nhận ghi ở RSD của màn. BOI-CANH đã chốt riêng một thao tác thì giữ đúng chốt đó (ví dụ Chuyển sang Điều hành ở KD08 không có hộp thoại).

**U2.02 · Khi nào làm ngay kèm Hoàn tác.** Mọi thao tác ghi không thuộc U2.01 và không phải lưu form (U2.03) thì làm ngay khi bấm, không hỏi, rồi hiện thông báo ngắn có nút Hoàn tác. Gồm: bật, tắt công tắc Đang dùng/Ngừng dùng; giao hoặc chuyển người phụ trách (tại chỗ, hàng loạt); đổi giá trị ở ô chọn tại chỗ; xóa mục con chưa dùng mà RSD cho xóa ngay (ngày nghỉ lễ, dạng xem đã lưu, tệp đính kèm); gỡ liên kết; thao tác trên lưới chưa lưu (bỏ dòng, ghép ngày); Hủy thay đổi trên thanh lưu (K4.08).

**U2.03 · Thao tác không có Hoàn tác và không hỏi.** Lưu form hoặc bảng trượt qua thanh lưu (người dùng đã thấy thay đổi trước khi bấm Lưu; sửa lại bằng một lần lưu khác); điều hướng, lọc, sắp xếp, đổi dạng xem; Xuất Excel (tệp tải về máy người dùng, ghi QT03); đăng xuất.

**U2.04 · Mẫu hộp thoại xác nhận.**
- Tiêu đề là câu hỏi nêu thao tác và đối tượng: “Hủy Booking BK-2611-0031?”.
- Nội dung nêu hậu quả cụ thể (trạng thái mới, dữ liệu kèm theo, ai nhận gì); ô nhập lý do nếu RSD yêu cầu (tối đa 3 trường, K5.05).
- Hai nút: nút xác nhận mang đúng động từ của thao tác (Hủy Booking, Xóa khách hàng, Gửi email, Publish) và nút **Quay lại**. Không dùng OK, Đồng ý, Xác nhận, Có/Không. Nút xác nhận dùng kiểu nút chính, không tô đỏ (K6.01).
- Con trỏ mặc định ở nút Quay lại khi thao tác không hoàn tác được; Esc và bấm ra nền đều là Quay lại, không ghi gì.

**U2.05 · Hộp thoại cảnh báo tác động.** Thao tác hoàn tác được nhưng đang chạm dữ liệu khác mà RSD đặt hộp thoại cảnh báo (tắt NCC đang được dùng ở DH02, DH03; tắt giá trị danh mục đang dùng ở QT05; tắt mẫu ở QT04; tắt nhận phân công của người đang được giao ở DH06): hộp thoại liệt kê nơi đang dùng và điều sẽ xảy ra, rồi mới làm. Hộp thoại này cho biết tác động, không tính là hỏi xác nhận thừa (BOI-CANH, Mặc định áp sau khi sửa RSD). Nút: động từ của thao tác (Ngừng dùng) và Quay lại. Sau khi làm, thông báo ngắn vẫn có Hoàn tác như U2.06. Thao tác cùng loại mà không chạm dữ liệu nào (NCC chưa được dùng ở đâu) thì làm ngay, không hộp thoại. RSD không đặt hộp thoại (ví dụ DH01 ngừng dùng mẫu checklist) thì làm ngay và nêu tác động trong thông báo ngắn.

**U2.06 · Hoàn tác.**
- Nút Hoàn tác nằm trong thông báo ngắn (hoặc banner kết quả hàng loạt), dùng được trong **10 giây** kể từ khi thao tác thành công. Hết 10 giây, rời màn hoặc đóng thông báo thì không còn Hoàn tác; muốn đổi lại thì làm thao tác ngược.
- Hoàn tác đưa bản ghi về đúng giá trị trước thao tác và gỡ mọi tác động kèm theo trong cùng một giao dịch: thông báo trong ứng dụng vừa tạo bị gỡ (người nhận không còn thấy, số trên chuông giảm), chỉ báo vừa gắn bị gỡ, số trên chip và tab trở về.
- Hoàn tác là một lần ghi mới: kiểm tra phiên bản và quyền như mọi lần ghi; lịch sử của bản ghi và QT03 có hai mục (thao tác, Hoàn tác).
- Bản ghi đã bị đổi tiếp sau thao tác (phiên bản khác phiên bản vừa ghi): không hoàn tác bản ghi đó; thông báo ngắn nêu “<đối tượng> đã được <người> đổi lúc HH:mm, không hoàn tác được”.
- Hàng loạt: một nút Hoàn tác cho cả lô; bản ghi đã bị đổi tiếp bị bỏ qua, banner ghi số bản ghi không hoàn tác được.
- **Ngoại lệ QT02:** thao tác nhiều ô quyền của một vai trò (ô cấp màn, Khôi phục quyền mặc định) là một thao tác trên một bản ghi vai trò, không phải hàng loạt; Hoàn tác **tất cả hoặc không**: một ô đã bị đổi sau đó thì không đổi ô nào và thông báo nêu ô đó (RSD QT02 R06, E2.6). Lý do: hoàn tác một phần để lại ma trận không ứng với trạng thái nào người dùng đã thấy.
- Hoàn tác trên dữ liệu chưa lưu (lưới, Hủy thay đổi) chỉ khôi phục trên màn, không ghi máy chủ.

**U2.07 · Thông báo ngắn.**
- Vị trí góc phải dưới, nằm trên thanh lưu nếu thanh lưu đang hiện. Tối đa 3 thông báo cùng lúc, mới nhất ở dưới cùng; có thông báo thứ tư thì thông báo cũ nhất đóng.
- Thông báo thành công không có Hoàn tác tự đóng sau **5 giây**; có Hoàn tác thì sau **10 giây**. Thông báo lỗi không tự đóng; có nút Thử lại khi thao tác thử lại được, và nút × để đóng.
- Nội dung nêu kết quả cụ thể (“Đã ngừng dùng NCC-0012 Khách sạn Sông Hàn”), kèm tối đa một liên kết đi tiếp (Xem dòng, Mở <mã>) và Hoàn tác.

**U2.08 · Banner kết quả hàng loạt.** Sau thao tác hàng loạt, banner ở trên hàng chip nêu số bản ghi thành công, số bản ghi bỏ qua kèm lý do theo nhóm, và đúng một nút: Hoàn tác (10 giây, khi thao tác hoàn tác được) hoặc Thử lại phần lỗi (khi có bản ghi lỗi do mạng hoặc máy chủ). Banner ở lại tới khi người dùng đóng, đổi bộ lọc hoặc rời màn.

**U2.09 · Chống bấm lặp.** Nút ghi khóa ngay sau lần bấm đầu và đổi chữ thành “Đang lưu…”, “Đang gửi…” tới khi có kết quả; mỗi lần bấm mang một mã thao tác để máy chủ không ghi hai lần khi người dùng bấm lặp hoặc trình duyệt gửi lại.

---

## 5. U3 · Nhớ lựa chọn và trạng thái trên URL

**U3.01 · Những gì được nhớ.** Theo người dùng và màn (với bảng trong hồ sơ: theo người dùng, màn và tab, không theo từng hồ sơ):
- chip Của tôi; chip của RSD đang chọn; mọi bộ lọc trên thanh công cụ, kể cả bộ lọc thêm qua “+ Bộ lọc”;
- sắp xếp; cột hiện, thứ tự cột, độ rộng cột; mật độ;
- dạng xem đang dùng (Bảng, Kanban, Lịch) cùng mốc, tháng hay tuần, độ rộng dòng thời gian, cột Kanban thu gọn;
- dạng xem đã lưu đang dùng;
- lựa chọn riêng do RSD ghi (nhóm đang xem ở QT05, tab đang mở ở KT01), trạng thái thu gọn của menu trái.

**U3.02 · Nhớ trên máy chủ.** Lựa chọn lưu trên máy chủ theo tài khoản, không theo trình duyệt: đăng xuất rồi đăng nhập lại, hoặc đăng nhập ở máy khác, đều thấy cùng lựa chọn. Mỗi lần người dùng đổi một lựa chọn, hệ thống lưu lên máy chủ; các lần đổi trong cùng 1 giây gộp thành một lần lưu. Lỗi lưu lựa chọn không chặn thao tác và không báo lỗi; lần đổi sau lưu lại.

**U3.03 · Những gì không nhớ qua lần mở từ menu.** Ô tìm, số trang, vị trí cuộn, dòng đang chọn. Mở màn từ menu luôn ở trang 1, ô tìm trống, không có dòng nào được chọn. Ô tìm, trang và vị trí cuộn vẫn được giữ khi quay lại bằng “← Danh sách” hoặc nút quay lại của trình duyệt (K4.03), vì chúng nằm trên URL.

**U3.04 · Lần đầu và mặc định.** Người dùng chưa có lựa chọn nhớ ở một màn thì màn mở theo mặc định của màn (mục 1): dạng xem đã lưu đặt mặc định (K3.07), không có thì mặc định của RSD theo vai trò (ví dụ KD05: Kinh doanh chip Của tôi bật, chip Đang xử lý; Quản trị chip Của tôi tắt). Dạng xem lần đầu là Bảng.

**U3.05 · Trạng thái trên URL.** Ô tìm, chip Của tôi, chip của RSD, mọi bộ lọc, sắp xếp, trang, dạng xem (và mốc, tháng của Lịch), dạng xem đã lưu đang dùng, tab và bảng trượt đang mở đều nằm trên URL dạng tham số đọc được. Mỗi lần đổi, URL cập nhật ngay; đổi lọc, sắp, dạng xem thay mục lịch sử hiện tại của trình duyệt (nút quay lại không đi qua từng lần lọc), mở hồ sơ hoặc bảng trượt thêm mục lịch sử mới. Cột, độ rộng và mật độ không nằm trên URL.

**U3.06 · URL thắng.**
- Mở một URL có tham số lọc (liên kết người khác gửi, thẻ Việc của tôi, thông báo, “Xem tất cả” của tìm nhanh) thì màn áp đúng tham số trên URL; tham số không có trên URL lấy theo mặc định của màn, không lấy lựa chọn đã nhớ.
- Trạng thái mở từ URL không ghi đè lựa chọn đã nhớ. Chỉ khi người dùng tự đổi một lựa chọn trên màn, trạng thái đang hiện mới được nhớ (U3.02).
- Liên kết do hệ thống tạo (thẻ Việc của tôi, thông báo, “Xem tất cả” của tìm nhanh, liên kết lọc sẵn từ màn khác) ghi **tường minh mọi bộ lọc của màn đích** trên URL, kể cả chip Của tôi và bộ lọc ở giá trị Tất cả, để kết quả không phụ thuộc mặc định theo vai trò hay dạng xem mặc định của người mở.
- Mở màn bằng URL không có tham số (menu, tên TOPAS) thì áp lựa chọn đã nhớ rồi ghi trạng thái đó lên URL.
- URL không mở rộng quyền: bộ lọc trên URL chỉ chạy trên bản ghi của màn người dùng có quyền xem.

**U3.07 · Giá trị không còn hợp lệ.**
- Giá trị lọc đã nhớ hoặc trên URL trỏ tới giá trị danh mục đã chuyển Ngừng dùng: vẫn áp dụng, giá trị hiện kèm “(ngừng dùng)”.
- Giá trị không còn tồn tại (đã xóa), cột không còn, tham số sai dạng: bỏ riêng tham số đó, áp mặc định của màn cho phần đó, thông báo ngắn “Đã bỏ qua n bộ lọc không còn dùng được”.
- Cột người dùng mất quyền xem thì ẩn, kể cả khi lựa chọn đã nhớ ghi là hiện.

---

## 6. U4, U5, U6 · Việc của tôi, quyền trên giao diện, tự đơn giản hóa

**U4.01 · Việc của tôi.** Trang mặc định sau đăng nhập của tài khoản có vai trò ngoài phòng HDV (K0.07), theo vai trò, đặc tả ở CH03. Chuẩn chung cho mọi thẻ đếm: bấm thẻ mở màn danh sách đích bằng URL ghi tường minh mọi bộ lọc của thẻ (U3.06), nên lựa chọn đã nhớ ở màn đích không đổi; số trên thẻ bằng số dòng khớp mà danh sách đích hiện ra tại cùng thời điểm. Thẻ có số 0 theo RSD CH03 R04: không hiện ô thẻ, tên thẻ gom vào dòng “✓ Không có: …” cuối nhóm, dòng này không bấm được.

**U5.01 · Không có quyền thì ẩn.** Nút, mục menu ⋯, mục menu trái, ô chọn dòng, thao tác trên thanh hàng loạt, công tắc, ô chọn tại chỗ của thao tác người dùng không có quyền (QT02) đều ẩn hẳn, không hiện mờ, không hiện khóa. Menu ⋯ không còn mục nào thì ẩn cả nút ⋯.

**U5.02 · Có quyền nhưng chưa đủ điều kiện thì khóa kèm lý do.** Nút của thao tác người dùng có quyền nhưng trạng thái hoặc dữ liệu chưa cho phép (Hủy yêu cầu khi đang có Booking Hiệu lực, Xuất Excel khi không có dòng) hiện mờ, lý do ghi ngay cạnh nút hoặc hiện khi rê chuột và khi bấm.

**U5.03 · Trường chỉ đọc hiện dạng chữ.** Trường người dùng không được sửa (không có quyền, hoặc trạng thái không cho sửa) hiện giá trị dạng chữ thường: không khung nhập, không viền nét đứt, không biểu tượng khóa. Giá trị trống hiện “—”. Công tắc chỉ đọc hiện chữ “Đang dùng” hoặc “Ngừng dùng” (K6.05).

**U5.04 · Phần, cột, liên kết không có quyền.** Phần nhạy cảm là thao tác riêng (thông tin thanh toán NCC, tài khoản nhận hoàn của khách) thì ẩn cả khối hoặc cột, không hiện dấu che. Mã của bản ghi thuộc màn người dùng không có quyền xem hiện dạng chữ, không phải liên kết.

**U5.05 · Máy chủ từ chối.** Mọi thao tác ghi được máy chủ kiểm tra quyền lúc ghi (RSD QT02 R07, R08). Bị từ chối vì quyền bị thu hồi giữa phiên, theo RSD QT01 R02 và QT02 R07:
- Không ghi gì. Thông báo ngắn lỗi “Quyền của bạn vừa thay đổi” kèm nút **Tải lại trang**; thông báo không tự đóng (U2.07).
- Dữ liệu đang nhập trong form, bảng trượt giữ nguyên trên màn để người dùng chép; thanh lưu vẫn hiện. Ô sửa tại chỗ trên dòng (K1.20) trở về giá trị trước.
- Giao diện (menu, nút, trường chỉ đọc) **không đổi ngay**; đổi theo quyền mới ở lần tải trang kế tiếp: bấm Tải lại trang, chuyển màn hoặc mở lại hồ sơ.
- Bấm Tải lại trang khi form còn thay đổi chưa lưu: hộp thoại rời trang của trình duyệt (K4.09) để người dùng kịp chép.
- Mất quyền Xem của màn đang mở: lần tải kế tiếp hiện trang không có quyền (K0.09).

**U6.01 · Tự đơn giản hóa.** Agent được tự đơn giản hóa giao diện của một màn (bố cục, nhãn, vị trí nút, kiểu thao tác, thông báo lỗi, cách giảm thao tác) khi không đổi luồng, trạng thái, quyền, tiền, hành vi gửi ra ngoài; ghi vào `GHI-CHU-LAM-VIEC.md` của màn đó (BOI-CANH, Mức ủy quyền). Thay đổi chạm năm điều trên phải hỏi người dùng.

**U6.02 · Lệch chuẩn ở một màn.** Màn nào cần làm khác chuẩn này thì ghi lý do và mã quy tắc bị lệch vào `GHI-CHU-LAM-VIEC.md` của màn; mọi CGD-AC vẫn phải đạt trên màn đó, trừ AC của đúng quy tắc đã ghi lệch. Lệch áp cho nhiều màn thì sửa chuẩn này (nâng phiên bản) thay vì ghi lệch từng màn.

---

## 7. K1 · Chuẩn bảng

**K1.01 · Phạm vi.** Áp cho mọi bảng danh sách bản ghi: màn danh sách (KD01, KD03, KD05, KD07, DH01, DH02, DH04, DH06, DH07, KT01, QT01, QT03, QT04, QT05, bảng của QT07–QT12) và bảng danh sách trong tab hồ sơ (ví dụ DH08.3 Đặt dịch vụ, KD04.3 Yêu cầu & Booking). Không áp cho lưới nhập liệu (lưới hành trình KD06, bảng giá ma trận DH03, phân phòng, quyết toán DH08) và bảng tóm tắt trong hộp thoại, bảng trượt (danh sách nơi đang dùng, lịch sử). Bảng trong tab có ít chức năng hơn khi RSD ghi rõ; phân trang chỉ hiện khi có hơn 50 dòng.

**K1.02 · Bố cục.** Từ trên xuống:
1. **Tiêu đề màn**: tên màn; bên phải là nút chính của màn (+ Thêm …) và Xuất Excel.
2. **Thanh công cụ**: ô tìm; các nút bộ lọc (K2); “+ Bộ lọc”; Xóa bộ lọc (khi có); bên phải: Dạng xem đã lưu (K3), Cột, Mật độ.
3. **Hàng chip**: chip Của tôi (K2.06); chip của RSD (K3.01), mỗi chip có số; bên phải là dòng ghi chú “1–50 / 1.284 · Sắp theo Thời gian đi ↑” và bộ chuyển dạng xem (K3.09).
4. **Bảng**: cột ô chọn (khi có, K1.12), cột mã, các cột của RSD, cột ⋯ (khi có, K1.11).
5. **Chân bảng**: phân trang (K1.09).

**K1.03 · Vùng dính.** Khi cuộn dọc, thanh công cụ, hàng chip (hoặc thanh hàng loạt thay chỗ hàng chip) và hàng tiêu đề cột luôn hiện ở trên vùng bảng. Khi cuộn ngang, cột ô chọn và cột mã luôn hiện ở bên trái, cột ⋯ luôn hiện ở bên phải.

**K1.04 · Cột mã ghim.** Cột nhận diện bản ghi (mã đối tượng, hoặc tên khi đối tượng không có mã, theo RSD) ghim trái, đứng ngay sau cột ô chọn, không ẩn được, không đổi chỗ được. Các cột khác không ghim.

**K1.05 · Sắp xếp.**
- Mọi cột có dữ liệu đều sắp được (trừ cột ô chọn, cột ⋯). Mỗi cột có một khóa sắp: giá trị chính của ô, hoặc khóa RSD ghi (ví dụ cột Yêu cầu của KD05 sắp theo ngày tạo).
- Bấm tiêu đề cột: lần 1 tăng dần, lần 2 giảm dần, lần 3 bỏ sắp theo cột đó (về sắp xếp mặc định của RSD cho chip đang chọn).
- Shift+bấm tiêu đề cột khác thêm cột đó làm khóa sắp tiếp theo, tối đa 3 cột. Tiêu đề cột đang sắp có mũi tên ↑ hoặc ↓; khi sắp nhiều cột thì có thêm số thứ tự 1, 2, 3.
- Sắp ở máy chủ, trên toàn bộ kết quả lọc, không chỉ trang đang xem. Chữ sắp theo thứ tự chữ cái tiếng Việt, không phân biệt hoa thường; ô trống luôn ở cuối, ở cả hai chiều.
- Đổi sắp xếp về trang 1; dòng ghi chú ở hàng chip nêu cách sắp hiện tại.

**K1.06 · Ẩn hiện, thứ tự, độ rộng cột.**
- Nút **Cột** mở danh sách mọi cột của bảng, mỗi cột một ô tích (hiện/ẩn) và tay kéo ⋮⋮ để đổi thứ tự; cột mã có ô tích khóa. Danh sách có liên kết “Khôi phục mặc định” đưa cột, thứ tự, độ rộng về mặc định của RSD.
- Kéo tiêu đề cột sang trái, phải trên bảng cũng đổi thứ tự.
- Kéo mép phải tiêu đề cột đổi độ rộng, trong khoảng 60–600 px; nhấp đúp mép tiêu đề thì cột vừa với nội dung dài nhất của trang đang xem (không quá 600 px).
- Cột ẩn sẵn: cột RSD liệt kê là “ẩn mặc định” hoặc cột có trong tệp Excel của RSD mà bảng mặc định không hiện; người dùng bật được ở nút Cột.
- Lựa chọn cột nhớ theo người dùng (U3.01).

**K1.07 · Cột tự ẩn theo ngữ cảnh RSD.** Cột mà RSD ghi “chỉ hiện khi…” để không lặp thông tin (cột Phụ trách khi chip Của tôi bật; cột Trạng thái ở chip của một trạng thái) vẫn tự ẩn trong ngữ cảnh đó, bất kể lựa chọn cột của người dùng. Trong nút Cột, cột đó hiện mờ kèm lý do (“Ẩn khi chip Của tôi bật”). Ra khỏi ngữ cảnh thì cột trở lại theo lựa chọn của người dùng.

**K1.08 · Mật độ.** Hai mức: **Gọn** (mặc định) và **Thoáng**. Gọn: dòng một tầng chữ cao 36 px, dòng có dòng phụ cao 52 px. Thoáng: 44 px và 60 px. Mật độ nhớ theo người dùng và màn.

**K1.09 · Phân trang máy chủ.**
- 50 dòng mỗi trang; người dùng không đổi được cỡ trang. Máy chủ trả đúng trang đang xem cùng tổng số dòng khớp và số trên các chip.
- Chân bảng: ‹ Trước, các số trang (trang đầu, trang cuối và hai trang quanh trang hiện tại, chỗ bỏ qua ghi “…”), Sau ›. Dòng ghi chú ở hàng chip ghi khoảng đang xem: “51–100 / 1.284”.
- Đổi ô tìm, bộ lọc, chip, sắp xếp thì về trang 1. Trang trên URL lớn hơn số trang hiện có (vì dữ liệu đã đổi) thì mở trang cuối.
- Chỉ có một trang thì chân bảng không hiện phân trang.

**K1.10 · Bấm dòng.** Bấm bất kỳ đâu trên dòng (trừ ô chọn, ô sửa tại chỗ, liên kết khác trong ô, nút ⋯) mở hồ sơ hoặc bảng trượt của dòng theo đích RSD. Mã ở cột mã có màu liên kết để báo dòng bấm được; không có nút “Mở”, “Xem” riêng. Ctrl+bấm mở tab mới (K0.08).

**K1.11 · Menu ⋯ trên dòng.** Cột cuối có nút ⋯ khi dòng có ít nhất một thao tác phụ người dùng có quyền (U5.01); dòng không có thì ô trống. Menu chứa thao tác phụ theo RSD, theo thứ tự: thao tác thường; vạch ngăn; Lịch sử (khi RSD có); vạch ngăn; Xóa hoặc Hủy <đối tượng>. Thao tác chính của dòng (mở dòng, công tắc, ô chọn tại chỗ, nút việc cần làm trên dòng của RSD) không lặp trong ⋯. Khi đang chọn dòng (K1.12), nút ⋯, nút và ô sửa tại chỗ trên mọi dòng tạm ẩn.

**K1.12 · Chọn dòng.**
- Cột ô chọn chỉ có khi màn có thao tác hàng loạt mà người dùng có quyền. Dòng không đủ điều kiện cho mọi thao tác hàng loạt của màn có ô chọn mờ, rê chuột hiện lý do.
- Bấm ô chọn chọn hoặc bỏ một dòng; Shift+bấm chọn mọi dòng chọn được từ dòng bấm trước tới dòng này.
- Ô chọn ở tiêu đề bảng chọn mọi dòng chọn được của trang đang xem; bấm lần nữa bỏ chọn tất cả.
- Đổi trang, ô tìm, bộ lọc, chip, sắp xếp, dạng xem thì bỏ mọi lựa chọn. Esc bỏ mọi lựa chọn.

**K1.13 · Chọn tất cả n dòng khớp và thao tác hàng loạt.**
- Khi mọi dòng chọn được của trang đã được chọn và tổng số dòng khớp lớn hơn số dòng của trang, thanh hàng loạt có liên kết “Chọn tất cả n <đối tượng> khớp bộ lọc”. Bấm liên kết thì phạm vi chọn là **bộ lọc** (ô tìm, Của tôi, bộ lọc, chip), không phải danh sách dòng; thanh ghi “Đã chọn tất cả n <đối tượng> khớp bộ lọc” kèm Bỏ chọn.
- Khi chạy thao tác với phạm vi bộ lọc, máy chủ lấy lại mọi bản ghi khớp bộ lọc tại lúc chạy; với phạm vi danh sách dòng, máy chủ dùng đúng các dòng đã chọn.
- Với mỗi bản ghi, máy chủ kiểm tra lại điều kiện, quyền, phiên bản ngay khi ghi; bản ghi không còn đủ điều kiện bị bỏ qua kèm lý do. Mỗi bản ghi là một giao dịch riêng, trừ khi RSD ghi khác.
- Kết quả hiện ở banner U2.08 với số thực tế đã làm, số bỏ qua; số này có thể khác n khi dữ liệu đổi giữa lúc chọn và lúc chạy.
- Thao tác hàng loạt chỉ ở dạng Bảng (K3.09).

**K1.14 · Thanh hàng loạt.** Hiện khi có ít nhất một dòng được chọn, thay chỗ hàng chip và dính như hàng chip. Gồm: số đã chọn (“Đã chọn 3 yêu cầu”), liên kết Chọn tất cả n (K1.13), các thao tác hàng loạt với ô nhập ngay trên thanh (ví dụ ô chọn người nhận), Bỏ chọn. Nút Xuất Excel ở tiêu đề ẩn khi đang chọn dòng; nút + Thêm … vẫn hiện.

**K1.15 · Tìm.**
- Ô tìm đầu thanh công cụ, chữ gợi ý nêu các trường tìm theo RSD (“Tìm mã, khách, người liên hệ…”).
- Áp dụng khi chuỗi (đã bỏ khoảng trắng đầu, cuối) có từ **2 ký tự**, sau **300 ms** kể từ phím cuối; Enter áp ngay. Chuỗi 1 ký tự không lọc và dưới ô hiện “Gõ thêm 1 ký tự”. Xóa hết chuỗi (hoặc bấm × trong ô) bỏ lọc tìm ngay.
- Không phân biệt hoa thường và dấu, khớp chuỗi con; khi so mã bỏ qua “-” và khoảng trắng (như U1.02). Trường tìm theo RSD của màn.
- Phần khớp tô vàng ở các cột đang hiện. Chỉ hiện kết quả của lần gõ cuối.
- Số trên chip tính theo cả chuỗi tìm.

**K1.16 · Trạng thái tải.**
- Lần tải đầu: vùng bảng hiện 10 dòng khung xám; thanh công cụ, hàng chip đã dùng được.
- Tải lại khi đã có dữ liệu (đổi lọc, trang, sắp): dòng cũ giữ chỗ, mờ đi, thanh tiến trình mảnh chạy ở mép trên bảng; số trên chip đổi cùng lúc với dòng mới.
- Số trên chip, tổng số dòng tính ở máy chủ trong cùng lần tải với trang dòng.

**K1.17 · Lỗi tải.** Máy chủ lỗi, mất kết nối, hoặc quá 30 giây: vùng bảng thay bằng “Không tải được danh sách” kèm lý do ngắn và nút **Thử lại**; ô tìm, bộ lọc, chip giữ nguyên và vẫn đổi được; số trên chip ghi “–”; Xuất Excel khóa với lý do “Danh sách chưa tải được”. Không hiện dữ liệu của lần tải trước. Thử lại thành công thì bảng hiện bình thường.

**K1.18 · Trạng thái rỗng.**
- **Chưa có dữ liệu** (màn chưa có bản ghi nào, không tính ô tìm, bộ lọc và chip): “Chưa có <đối tượng>.” kèm một câu chỉ tới nút + Thêm … ở tiêu đề (người có quyền), không lặp nút.
- **Không khớp bộ lọc**: “Không có <đối tượng> khớp bộ lọc” kèm nút **Xóa bộ lọc** ngay trong vùng rỗng (K2.07); trong trạng thái này liên kết Xóa bộ lọc ở thanh công cụ ẩn để mỗi việc một chỗ bấm. Chip có số 0 vẫn hiện.
- Khi chip Của tôi đang bật và khi tắt chip thì có dòng khớp: vùng rỗng thêm câu “Có m <đối tượng> khớp khi tắt Của tôi” kèm nút Tắt Của tôi.
- Rỗng ở cả hai trường hợp: Xuất Excel khóa với lý do “Không có dòng để xuất”.

**K1.19 · Dòng vừa sửa, dòng ra khỏi bộ lọc, dòng mới.**
- Dòng vừa lưu (tại chỗ, hàng loạt, từ bảng trượt) cập nhật tại chỗ và tô nền xanh nhạt 5 giây; số trên chip cập nhật ngay.
- Dòng không còn khớp ô tìm, bộ lọc hoặc chip sau thao tác (kể cả khi quay lại từ hồ sơ) vẫn ở tại chỗ, mờ đi, mang nhãn giá trị mới và nhãn “Không còn khớp bộ lọc”. Thông báo ngắn có liên kết **Xem dòng**: mở chip hoặc bộ lọc chứa dòng đó, cuộn tới dòng và tô sáng 5 giây. Dòng mờ biến mất ở lần tải kế tiếp (đổi lọc, đổi trang, Thử lại, tải lại trang).
- Bản ghi mới tạo nằm đúng vị trí theo sắp xếp, có nhãn Mới và tô nền xanh nhạt 5 giây; nằm ngoài trang đang xem thì thông báo ngắn có liên kết Mở <mã>.

**K1.20 · Sửa tại chỗ trên dòng.** Công tắc và ô chọn tại chỗ (người phụ trách, tiến độ) lưu ngay khi đổi, gửi kèm phiên bản dòng; trong lúc lưu ô đó khóa. Lỗi lưu: ô trở về giá trị cũ, thông báo ngắn lỗi có Thử lại. Bị từ chối vì phiên bản (dòng vừa được đổi ở phiên khác): ô hiện giá trị mới nhất, thông báo ngắn nêu người và thời điểm đổi; không có nút ghi đè (Q8). Thành công: thông báo ngắn kèm Hoàn tác (U2.02).

**K1.21 · Xuất Excel.**
- Nút **Xuất Excel** ở tiêu đề màn, theo quyền Xuất tệp của màn; ẩn khi đang chọn dòng (K1.14).
- Phạm vi: mọi dòng khớp ô tìm, Của tôi, bộ lọc và chip đang chọn, mọi trang; theo sắp xếp đang dùng. Không xuất theo dòng đã chọn. Ở Kanban, Lịch: như Bảng, theo bộ lọc, không giới hạn theo cột hay tháng đang xem.
- Cột: đúng các cột đang hiện của dạng Bảng (kể cả khi đang xem Kanban, Lịch), theo thứ tự và tên tiêu đề đang hiện; không có cột ô chọn, cột ⋯. Ô có dòng phụ (ví dụ mã kèm ngày tạo) xuất thành cột chính và một cột kế bên tên “<tên cột> · <tên dòng phụ>”.
- Dữ liệu RSD cấm có trong tệp (email, điện thoại, ngày sinh… theo RSD của màn) không xuất kể cả khi cột đang hiện; thông báo ngắn ghi “Không xuất cột …”.
- Tệp `.xlsx`, tên `<TenMan>_YYYYMMDD_HHmm.xlsx` (giờ Asia/Ho_Chi_Minh); dòng 1 ghi bộ lọc đã dùng, người xuất, thời điểm; dòng 2 là tiêu đề cột. Ô tiền, số là số (có định dạng hiển thị), ô ngày là ngày `dd/mm/yyyy`; tiền có thêm cột loại tiền khi cột tiền gồm nhiều loại tiền.
- Giới hạn dòng mỗi lần theo RSD của màn; RSD không ghi thì 5.000 dòng. Vượt giới hạn: nút khóa, cạnh nút ghi số dòng và gợi ý thu hẹp bộ lọc.
- Xuất làm ngay, không hỏi (U2.03); thông báo ngắn ghi tên tệp, số dòng. Mỗi lần xuất ghi QT03 (thao tác Xuất tệp, nhạy cảm) với bộ lọc, số dòng, tên tệp; hệ thống không lưu tệp.

**K1.22 · Phím tắt.** Phím tắt của bảng không chạy khi con trỏ đang trong một ô nhập, trừ Esc và Ctrl+S.

| Phím | Hành vi |
|---|---|
| `/` | Đưa con trỏ vào ô tìm của bảng (bảng chính của màn, hoặc bảng của tab đang mở) |
| ↓ / ↑ | Chuyển dòng đang trỏ xuống, lên; chưa có dòng đang trỏ thì ↓ trỏ dòng đầu; bảng tự cuộn để dòng đang trỏ luôn trong khung nhìn; dừng ở dòng đầu, dòng cuối của trang |
| Enter | Mở dòng đang trỏ như bấm dòng (K1.10) |
| Ctrl+S (⌘S) | Lưu form, bảng trượt, dòng đang sửa có thay đổi (như bấm Lưu); không có gì để lưu thì không làm gì. Luôn chặn hộp thoại lưu trang của trình duyệt trong ứng dụng |
| Esc | Đóng lớp trên cùng theo thứ tự: menu đang mở → hộp tìm nhanh → hộp thoại (= Quay lại) → bảng trượt (theo K4.09 nếu có thay đổi) → bỏ chọn dòng → rời ô tìm (giữ chuỗi) |

**K1.23 · Hiển thị ô.** Cột số, tiền canh phải; cột khác canh trái. Chữ dài hơn ô cắt bằng “…” trên một dòng, rê chuột hiện đủ. Ô trống hiện “—”. Người, giá trị danh mục ngừng hoạt động hoặc ngừng dùng hiện kèm “(ngừng hoạt động)”, “(ngừng dùng)” theo BOI-CANH.

**K1.24 · Danh sách là ảnh chụp lúc tải.** Danh sách không tự cập nhật khi người khác sửa; dữ liệu mới hiện ở lần tải kế tiếp (đổi lọc, đổi trang, quay lại từ hồ sơ, tải lại trang). Mọi lần ghi từ danh sách kiểm tra phiên bản theo K1.20.

---

## 8. K2 · Bộ lọc

**K2.01 · Bộ lọc dạng nút, không toán tử.** Mỗi bộ lọc là một nút trên thanh công cụ. Chưa đặt giá trị: nút chỉ ghi tên (“Thời gian đi”). Đã đặt: “Tên: giá trị” (“Thời gian đi: Tháng sau”) kèm × để bỏ giá trị. Bấm nút mở bảng chọn theo kiểu dữ liệu (K2.02). Không bộ lọc nào có ô chọn toán tử (bằng, chứa, lớn hơn…): cách so ngầm định theo kiểu dữ liệu.

**K2.02 · Kiểu dữ liệu.**

| Kiểu | Bảng chọn | Cách khớp | Chữ trên nút |
|---|---|---|---|
| Chữ | Một ô nhập | Chuỗi con, không phân biệt hoa thường, dấu; từ 2 ký tự, chờ 300 ms (như K1.15) | Tên: “chuỗi” |
| Số | Từ – Đến, một đầu được để trống | Gồm cả hai đầu | Tên: 10–20; Tên: từ 10; Tên: đến 20 |
| Tiền | Loại tiền (bắt buộc chọn một) và Từ – Đến | Chỉ dòng có đúng loại tiền đó, số theo loại tiền gốc, gồm cả hai đầu; không quy đổi | Tên: 1.000–2.000 EUR |
| Ngày, khoảng ngày | Danh sách chọn nhanh của RSD (Hôm nay, 7 ngày tới, Tháng này, Tháng sau, 30 ngày qua…) và Khoảng ngày tùy chọn (Từ – Đến, một đầu được để trống) | Theo mốc ngày RSD ghi; gồm cả hai đầu; “hôm nay” theo Asia/Ho_Chi_Minh, tính lúc đọc | Tên: Tháng sau; Tên: 01/12/2026–15/12/2026 |
| Chọn một | Danh sách giá trị, có “Tất cả” ở đầu | Bằng giá trị đã chọn; Tất cả là không lọc | Tên: giá trị |
| Chọn nhiều | Danh sách ô tích; có ô tìm trong danh sách khi hơn 10 giá trị; giá trị Ngừng dùng ở cuối kèm “(ngừng dùng)”; có giá trị “Trống” khi trường không bắt buộc | Bản ghi có bất kỳ giá trị đã chọn | Tên: Pháp, Đức; từ 3 giá trị: Tên: 3 giá trị |
| Người | Như Chọn nhiều, danh sách người dùng hoặc nhân sự theo RSD; người ngừng hoạt động ở cuối kèm “(ngừng hoạt động)”; có “Chưa có người phụ trách” khi trường có thể trống | Như Chọn nhiều | Như Chọn nhiều |
| Có/không | Ba lựa chọn Tất cả · Có · Không | Có hoặc Không theo cờ; Tất cả là không lọc | Tên: Có; Tên: Không |

**K2.03 · Áp dụng ngay hay cần Áp dụng.** Chọn một, Có/không, chọn nhanh ngày, mỗi lần tích ở Chọn nhiều và Người áp dụng ngay. Chữ áp dụng theo 300 ms. Số, Tiền, Khoảng ngày tùy chọn áp dụng khi bấm **Áp dụng** hoặc Enter; giá trị sai (Từ lớn hơn Đến, ngày không có thật) thì Áp dụng khóa, lỗi ghi dưới ô. Đóng bảng chọn mà chưa Áp dụng thì bỏ phần đang nhập.

**K2.04 · Thứ tự và “+ Bộ lọc”.**
- Bộ lọc RSD ghi cho màn xếp đầu, theo thứ tự trong RSD, luôn hiện kể cả khi chưa có giá trị.
- Sau đó là nút **+ Bộ lọc**: mở danh sách mọi cột khác của bảng có kiểu dữ liệu lọc được (kể cả cột đang ẩn, trừ cột người dùng không có quyền xem). Chọn một cột thì thêm nút lọc của cột đó ngay sau các bộ lọc RSD và mở bảng chọn. Nút thêm có thêm mục “Gỡ bộ lọc” trong bảng chọn.
- Bộ lọc thêm được nhớ (U3.01), nằm trên URL (U3.05) và có trong dạng xem đã lưu (K3.03).

**K2.05 · Kết hợp và số trên chip.** Các bộ lọc khác nhau, ô tìm và chip Của tôi kết hợp theo VÀ; các giá trị trong một bộ lọc Chọn nhiều, Người theo HOẶC. Số trên mỗi chip của RSD tính theo ô tìm, Của tôi và mọi bộ lọc, không theo chip đang chọn.

**K2.06 · Chip Của tôi.**
- Có ở danh sách mà bản ghi có người phụ trách (KD03, KD05, KD07, KT01.1, DH07 và danh sách khác RSD ghi), đứng đầu hàng chip, hiện với mọi người dùng xem được màn.
- Bật: chỉ bản ghi người dùng phụ trách, theo định nghĩa của RSD (DH07 với Điều hành gồm cả hồ sơ Chưa có người phụ trách).
- Bật sẵn với vai trò phụ trách loại bản ghi đó, tắt sẵn với vai trò khác, theo BOI-CANH (Kinh doanh ở KD03, KD05, KD07, KT01.1; Điều hành ở DH07). Tài khoản nhiều vai trò: bật sẵn nếu có ít nhất một vai trò bật sẵn.
- Tắt, bật được; trạng thái được nhớ (U3).
- Liên động với bộ lọc người phụ trách của RSD: bật Của tôi thì bộ lọc Phụ trách về Tất cả; chọn người ở bộ lọc Phụ trách thì Của tôi tắt. Chọn “Chưa có người phụ trách” ở bộ lọc Phụ trách cũng tắt Của tôi.
- Chip Của tôi không có số.

**K2.07 · Xóa bộ lọc.** Liên kết **Xóa bộ lọc** ở cuối thanh công cụ chỉ hiện khi ô tìm, Của tôi hoặc một bộ lọc khác mặc định của màn. Bấm: ô tìm trống; Của tôi và mọi bộ lọc RSD về mặc định của màn; gỡ bộ lọc thêm không có trong mặc định; giữ nguyên chip của RSD đang chọn, sắp xếp, cột, mật độ, dạng xem. Khi bảng rỗng vì không khớp, nút Xóa bộ lọc nằm trong vùng rỗng (K1.18).

**K2.08 · Giá trị ngừng dùng hoặc đã xóa.** Theo U3.07; danh sách giá trị của bảng chọn chỉ hiện giá trị Ngừng dùng ở cuối, kèm “(ngừng dùng)”.

---

## 9. K3 · Dạng xem đã lưu và dạng xem

**K3.01 · Dạng xem có sẵn.** Mỗi chip trạng thái RSD ghi cho màn (ví dụ KD05 Đang xử lý, Đã có Booking, Đã hủy, Tất cả) là một dạng xem có sẵn: đặt giá trị của chiều trạng thái và sắp xếp mặc định RSD ghi cho chip đó; các bộ lọc khác giữ nguyên. Dạng xem có sẵn có cho mọi người dùng xem được màn, không xóa, không đổi tên, không sửa được; đặt làm mặc định được (K3.07).

**K3.02 · Dạng xem đã lưu riêng từng người.** Người dùng lưu được dạng xem của riêng mình ở từng màn (và từng tab có bảng). Chỉ chính người đó thấy và dùng được; không chia sẻ, Quản trị cũng không thấy dạng xem của người khác.

**K3.03 · Nội dung một dạng xem đã lưu.** Tên; chip Của tôi; chip của RSD đang chọn; mọi bộ lọc (gồm bộ lọc thêm); sắp xếp; cột hiện, thứ tự, độ rộng. Không gồm ô tìm, trang, mật độ, dạng xem Bảng/Kanban/Lịch.

**K3.04 · Lưu dạng xem.**
- Nút **Dạng xem đã lưu** ở thanh công cụ mở danh sách gồm hai phần: Có sẵn (các chip RSD) và Của tôi (dạng xem đã lưu, theo thứ tự tạo). Khi đang dùng một dạng xem của tôi, nút mang tên dạng xem đó.
- Mục cuối danh sách là **Lưu dạng xem**: mở hộp thoại một trường Tên. Tên dài 1–40 ký tự, không trùng (không phân biệt hoa thường, dấu) với dạng xem khác của người đó ở cùng màn hay với tên chip RSD; vi phạm thì lỗi tại trường.
- Lưu xong: dạng xem mới thành dạng xem đang dùng, thông báo ngắn “Đã lưu dạng xem <tên>”.

**K3.05 · Dạng xem đang dùng có thay đổi.** Đang dùng một dạng xem của tôi mà đổi chip, bộ lọc, sắp xếp hoặc cột: tên trên nút có dấu “•”. Danh sách có ba mục: **Cập nhật dạng xem** (ghi đè dạng xem đang dùng bằng trạng thái hiện tại), **Lưu dạng xem** (lưu thành dạng xem mới), **Bỏ thay đổi** (áp lại đúng dạng xem đang dùng).

**K3.06 · Đổi tên, xóa.** Mỗi dạng xem của tôi trong danh sách có ⋯: Đổi tên (hộp thoại một trường, kiểm tra như K3.04), Đặt làm mặc định, Xóa. Xóa làm ngay kèm Hoàn tác 10 giây (U2.02). Xóa dạng xem đang dùng: trạng thái lọc trên màn giữ nguyên, nút trở về chữ “Dạng xem đã lưu”.

**K3.07 · Đặt làm mặc định.** Mỗi người, mỗi màn có tối đa một dạng xem mặc định (có sẵn hoặc của tôi); dạng xem mặc định có dấu ★ trong danh sách. Chưa đặt thì mặc định là mặc định của RSD theo vai trò. Dạng xem mặc định được áp khi: người dùng chưa có lựa chọn nhớ ở màn (U3.04); bấm Xóa bộ lọc (phần bộ lọc, K2.07); giá trị đã nhớ không hợp lệ (U3.07). Xóa dạng xem đang là mặc định thì mặc định về mặc định của RSD.

**K3.08 · Giới hạn và giá trị không hợp lệ.** Tối đa 20 dạng xem của tôi mỗi màn; đủ 20 thì mục Lưu dạng xem khóa với lý do “Đã đủ 20 dạng xem, xóa bớt để lưu mới”. Mở dạng xem có giá trị không còn hợp lệ: áp như U3.07; dạng xem không bị sửa cho tới khi người dùng Cập nhật dạng xem.

**K3.09 · Dạng xem Bảng, Kanban, Lịch.**
- Màn có nhiều dạng xem theo BOI-CANH: KD05 Bảng, Kanban (ba trạng thái yêu cầu), Lịch (thời gian đi); DH07 Bảng, Kanban (trạng thái hồ sơ), Lịch (theo người phụ trách hoặc tháng); KD07 Bảng, Lịch (ngày khởi hành hoặc hạn thanh toán). Màn khác chỉ có Bảng và không hiện bộ chuyển dạng xem.
- Bộ chuyển dạng xem ở cuối hàng chip, chỉ hiện các dạng màn có. Lần đầu là Bảng; dạng xem cuối được nhớ (U3.01).
- Mọi dạng dùng chung ô tìm, Của tôi, bộ lọc, quyền và đích khi bấm; đổi dạng không mất bộ lọc, có bỏ mọi lựa chọn dòng. Ở Kanban các chip trạng thái ẩn (cột thay chip), chip đang chọn được giữ và áp lại khi về Bảng hoặc Lịch; số đếm cột Kanban bằng số trên chip tương ứng.
- Bấm thẻ Kanban hoặc thanh Lịch giống bấm dòng.
- Kanban, Lịch chỉ để xem: không kéo thả, không đổi trạng thái, không ô chọn, không thao tác hàng loạt; thao tác tại chỗ RSD đã có trên dòng mà không đổi trạng thái (ô Phụ trách của DH07) được giữ trên thẻ Kanban. Kéo thẻ hoặc thanh không làm gì.
- Phần riêng (cột, mốc, khay, giới hạn số bản ghi vẽ) theo RSD của màn và mục 12 của `quy-tac-trien-khai.md`.

---

## 10. K4 · Màn hồ sơ

**K4.01 · Phạm vi.** Áp cho mọi trang đối tượng (KD02, KD04, KD06, KD08, DH03, DH08 và trang khác theo K5.02). Bảng trượt có form áp K4.06–K4.11 cho phần form và chân bảng trượt.

**K4.02 · Phần đầu.** Dòng 1 từ trái sang phải: liên kết “← Danh sách”; mã đối tượng (chữ lớn); nhãn trạng thái chính (K6); chỉ báo phụ; bên phải là các nút (K4.04) và ⋯ (K4.05). Dòng 2: thông tin chính theo RSD. Phần đầu và thanh tab dính trên cùng khi cuộn. Thông tin ở phần đầu không lặp lại trong tab.

**K4.03 · “← Danh sách”.**
- Mở hồ sơ từ một danh sách: “← Danh sách” (và nút quay lại của trình duyệt) quay về đúng URL danh sách lúc mở hồ sơ, gồm ô tìm, bộ lọc, chip, sắp xếp, trang, dạng xem; danh sách tải lại trang đó; vị trí cuộn trở về như lúc rời; dòng vừa mở là dòng đang trỏ (K1.22). Dòng đã đổi theo K1.19.
- Mở hồ sơ không qua danh sách của nó (tìm nhanh, thông báo, Việc của tôi, liên kết ở màn khác, URL dán vào): “← Danh sách” mở danh sách của loại đối tượng đó với lựa chọn đã nhớ (U3); nút quay lại của trình duyệt về màn trước đó.
- Còn thay đổi chưa lưu: hộp thoại K4.09 trước khi rời.

**K4.04 · Nút ở phần đầu.** Theo trạng thái, RSD ghi nút nào hiện. Phần đầu có tối đa **một nút chính** (kiểu nút chính) và tối đa hai nút phụ (kiểu viền); mọi thao tác khác của hồ sơ nằm trong ⋯. Mỗi tab có tối đa một nút chính trong tab; nút Lưu của thanh lưu là nút chính của thanh lưu. Không có nút của thao tác người dùng không có quyền (U5.01).

**K4.05 · Menu ⋯ và Lịch sử.** ⋯ ở cuối dòng 1 chứa thao tác phụ của hồ sơ theo thứ tự: thao tác thường; vạch ngăn; **Lịch sử**; vạch ngăn; Xóa hoặc Hủy <đối tượng> (khi RSD đặt ở ⋯). Lịch sử mở bảng trượt 640 px liệt kê mọi thay đổi của hồ sơ, mới nhất trước: thời điểm, người, thao tác, trường trước → sau, lý do. Màn không có lịch sử riêng (BOI-CANH: DH06 nhân sự, KD01-KD02 Tour mẫu, QT05) có mục “Lịch sử thay đổi” mở QT03 lọc theo đối tượng, chỉ hiện với người có quyền xem QT03.

**K4.06 · Form luôn sửa được.** Với người có quyền sửa và khi trạng thái hồ sơ cho sửa, mọi trường sửa được hiện sẵn là ô nhập; không có nút Sửa, không có chế độ xem riêng. Người không có quyền sửa, hoặc trạng thái không cho sửa (Đã đóng, Đã hủy, chỉ xem theo RSD): mọi trường hiện dạng chữ (U5.03), không có thanh lưu; lý do chỉ đọc do trạng thái hiện ở dải của RSD (ví dụ “Hồ sơ chỉ còn xem”).

**K4.07 · Thanh lưu dính đáy.**
- Ẩn khi không có thay đổi. Hiện ngay khi một trường khác giá trị đã lưu; người dùng sửa trường về đúng giá trị đã lưu thì thanh ẩn lại.
- Bên trái: “● n thay đổi chưa lưu” (có lỗi: “n lỗi cần sửa”, K4.11). Bên phải: **Hủy thay đổi** và **Lưu** (nút chính); RSD có thể thay Lưu bằng nút lưu kép (Lưu và lập báo giá) đứng cạnh Lưu.
- Thanh lưu thuộc phạm vi một form; màn có nhiều phần lưu riêng (RSD KD06: thông tin yêu cầu, hành trình) thì mỗi phần một thanh lưu, ghi tên phần.
- Lưu (hoặc Ctrl+S): kiểm tra tại trường (K4.11); hợp lệ thì gửi kèm phiên bản, nút thành “Đang lưu…” (U2.09). Thành công: thanh ẩn, thông báo ngắn “Đã lưu” 5 giây, ở lại đúng tab và vị trí cuộn. Lỗi mạng hoặc máy chủ: thanh vẫn hiện, dữ liệu nhập giữ nguyên, thông báo ngắn lỗi có Thử lại.
- Nút bước tiếp theo của RSD (Lập báo giá, Tính giá →) không nằm trên thanh lưu; nằm ở vị trí nút chính của tab.

**K4.08 · Hủy thay đổi.** Bấm Hủy thay đổi: mọi trường của form về giá trị đã lưu ngay, thanh lưu ẩn, không hỏi; thông báo ngắn “Đã hủy n thay đổi” kèm Hoàn tác 10 giây; Hoàn tác khôi phục đúng các giá trị vừa nhập (chưa lưu) và hiện lại thanh lưu.

**K4.09 · Hộp thoại chặn rời trang.** Một mẫu duy nhất cho mọi lối rời khi form có thay đổi chưa lưu: “← Danh sách”, mục menu trái, chuyển tab của hồ sơ, mở kết quả tìm nhanh, liên kết sang màn khác, đóng bảng trượt (×, Esc), bấm dòng khác khi bảng trượt có thay đổi, đổi nhóm QT05, Đăng xuất.
- Tiêu đề “Còn thay đổi chưa lưu”; nội dung “Có n thay đổi chưa lưu ở <tên phần hoặc đối tượng>.”
- Ba nút: **Ở lại** (con trỏ mặc định; Esc), **Hủy thay đổi** (bỏ thay đổi, rời đi), **Lưu** (nút chính: lưu như K4.07; thành công thì rời đi; lỗi kiểm tra hoặc xung đột thì ở lại và hiện lỗi).
- Bấm **Lưu** khi phiên đã hết hạn (hoặc bị chấm dứt vì đặt lại, đổi mật khẩu ở phiên khác): máy chủ từ chối, không ghi gì; hộp thoại đóng, người dùng ở lại trang với dữ liệu giữ nguyên và banner phiên hết hạn kèm liên kết Đăng nhập ở thẻ mới (K0.11, RSD CH01 L3.3 bước 3, R10); không rời đi.
- Đóng tab trình duyệt, tải lại trang, nhập URL khác: trình duyệt hiện hộp thoại rời trang có sẵn của nó.

**K4.10 · Sửa đồng thời (Q8).**
- Mỗi bản ghi con có phiên bản riêng; lưu gửi kèm phiên bản đã tải. Phiên bản đã đổi ở phiên khác: máy chủ từ chối, không ghi gì.
- Form hiện banner ở đầu form hoặc đầu bảng trượt: “Chưa lưu: <đối tượng> vừa được <người> cập nhật lúc HH:mm dd/mm/yyyy.” với **một nút duy nhất Tải lại**. Không có nút ghi đè, Vẫn lưu hay so sánh để gộp.
- Trước khi bấm Tải lại, thay đổi của người dùng vẫn trên màn để chép lại; thanh lưu khóa Lưu với lý do “Tải lại trước khi lưu”.
- Tải lại: tải dữ liệu mới nhất, bỏ thay đổi chưa lưu (không hỏi lại), thanh lưu ẩn. Trường người dùng đã sửa mà giá trị mới khác giá trị họ đã nhập có chú thích dưới ô “Bạn đã nhập: <giá trị>”, mất khi người dùng sửa ô đó, lưu hoặc rời màn.
- Hồ sơ vừa chuyển sang trạng thái chỉ đọc ở phiên khác (ví dụ Đã đóng): sau Tải lại màn ở chế độ chỉ đọc (K4.06).

**K4.11 · Lỗi kiểm tra tại trường.**
- Trường bắt buộc có dấu * cạnh nhãn.
- Lỗi định dạng kiểm tra khi rời ô; mọi lỗi kiểm tra khi bấm Lưu. Ô lỗi viền đỏ, câu lỗi ngay dưới ô nêu cách sửa (“Nhập ngày dạng dd/mm/yyyy”, “Ngày về phải sau ngày đi”).
- Bấm Lưu khi có lỗi: không gửi; màn cuộn tới và đặt con trỏ vào ô lỗi đầu tiên; thanh lưu ghi “n lỗi cần sửa”. Tab có ô lỗi có chấm đỏ trên tên tab.
- Lỗi máy chủ trả về gắn được với trường thì hiện tại trường như trên; không gắn được thì hiện banner đỏ ở đầu form. Dữ liệu nhập luôn được giữ.
- Ô hết lỗi ngay khi giá trị hợp lệ.

**K4.12 · Tab.** Tab mặc định khi mở hồ sơ theo RSD (tab đích). Tab đang mở nằm trên URL (K0.08). Số trên tab là số việc cần làm theo RSD, màu theo K6. Mỗi tab tải riêng khi mở; tab lỗi tải hiện lỗi như K1.17 trong tab, không chặn tab khác.

**K4.13 · Tạo mới.** Trang hoặc bảng trượt tạo mới: phần đầu ghi “<Đối tượng> mới · Chưa lưu”; tab chưa dùng được khóa kèm câu “Lưu <phần> để mở …” theo RSD; thanh lưu luôn hiện với Lưu (và nút lưu kép của RSD); Hủy thay đổi hiện khi đã nhập ít nhất một trường. Lưu thành công: cấp mã, URL đổi sang URL của mã đó, màn chuyển sang hồ sơ bình thường.

---

## 11. K5 · Trang, bảng trượt, hộp thoại, sửa tại dòng, tệp đính kèm

**K5.01 · Chọn kiểu vùng.**

| Kiểu | Dùng khi | Ví dụ |
|---|---|---|
| Trang (K5.02) | Đối tượng có từ 2 tab hoặc có vòng đời riêng | KD04, KD06, KD08, DH03, DH08, KD02 |
| Bảng trượt (K5.03, K5.04) | Xem hoặc sửa đầy đủ một đối tượng hoặc đối tượng con mà không rời danh sách; xem trước rồi gửi; nhập hơn 3 trường | Hợp đồng NCC, DH05, nhân sự, tài khoản, mẫu QT04, mẫu checklist, chính sách hoàn hủy, Booking ở KT01, hạng mục dịch vụ, Lịch sử |
| Hộp thoại (K5.05) | Xác nhận (U2.04), cảnh báo tác động (U2.05), hoặc nhập tối đa 3 trường | Hủy kèm lý do, Mở lại, Chuyển phụ trách, Lưu dạng xem |
| Sửa tại dòng (K5.06) | Danh mục phẳng QT05 | Giá trị danh mục, tỷ giá, ngày nghỉ lễ |

**K5.02 · Trang.** Trang đối tượng chiếm toàn vùng nội dung, có URL riêng, theo K4.

**K5.03 · Bảng trượt: ba cỡ.**

| Cỡ | Rộng | Dùng khi |
|---|---|---|
| Nhỏ | 640 px | Một cột trường hoặc danh sách đọc: Lịch sử, chi tiết một hạng mục, một giao dịch, ghi kết quả một lần đặt, form nhập hơn 3 trường đơn giản |
| Vừa | 880 px | Form hai cột, hoặc form có bảng con, hoặc có tab: hợp đồng NCC, nhân sự, tài khoản, chính sách hoàn hủy, Booking ở KT01, chọn dịch vụ, xem nhiều email |
| Lớn | 1100 px | Soạn hoặc xem trước tài liệu, bảng nhiều cột, hai vùng cạnh nhau: mẫu QT04, mẫu checklist DH01, DH05 (cả chế độ sửa ở DH03 và chỉ xem ở DH04), xem thay đổi chương trình |

- Một đối tượng dùng cùng một cỡ ở mọi màn mở nó.
- Vùng hiển thị hẹp: bảng trượt rộng tối đa bằng chiều rộng vùng hiển thị trừ 120 px.

**K5.04 · Bảng trượt: hành vi.**
- Mở từ mép phải, cao hết vùng dưới thanh trên; danh sách phía sau giữ bộ lọc, trang, vị trí cuộn, dòng đang trỏ và vẫn bấm được.
- Đầu bảng trượt: mã hoặc tên đối tượng, nhãn trạng thái, ⋯, nút × đóng. Chân: thanh lưu (K4.07) khi có form; bảng trượt chỉ xem có nút Đóng.
- Đóng bằng ×, Esc hoặc nút Đóng; có thay đổi chưa lưu thì K4.09.
- Bấm một dòng khác của danh sách khi bảng trượt đang mở: không có thay đổi chưa lưu thì bảng trượt chuyển sang dòng đó; có thì K4.09.
- Mỗi lúc chỉ một bảng trượt. Mở đối tượng khác từ trong bảng trượt thì thay nội dung, đầu bảng trượt có “←” quay lại nội dung trước.
- Bảng trượt có URL (K0.08); nút quay lại của trình duyệt đóng bảng trượt.

**K5.05 · Hộp thoại.**
- Chỉ dùng cho xác nhận, cảnh báo tác động hoặc nhập **tối đa 3 trường**; cần nhập hơn 3 trường thì dùng bảng trượt.
- Rộng 480 px; 640 px khi có bảng liệt kê (cảnh báo tác động, danh sách nơi đang dùng).
- Con trỏ nằm ở ô nhập đầu tiên (hoặc theo U2.04 khi chỉ xác nhận). Enter trong ô nhập một dòng bấm nút chính; Esc và bấm ra nền là Quay lại, không ghi gì. Không mở hộp thoại chồng lên hộp thoại.
- Lỗi nhập hiện tại trường (K4.11); lỗi lưu giữ hộp thoại mở, dữ liệu giữ nguyên, có Thử lại.

**K5.06 · Sửa tại dòng (QT05).**
- Bấm một ô của dòng: cả dòng vào chế độ sửa, con trỏ ở ô được bấm; Tab, Shift+Tab chuyển ô trong dòng.
- Dưới dòng có Lưu và Hủy thay đổi kèm gợi ý phím: Enter lưu, Esc hủy thay đổi của dòng.
- Mỗi lúc một dòng ở chế độ sửa. Bấm sang dòng khác khi dòng đang sửa có thay đổi: hệ thống lưu dòng đó trước; lỗi thì giữ dòng lỗi ở chế độ sửa, lỗi hiện tại ô.
- Thêm dòng: dòng mới ở đầu bảng, chế độ sửa; Enter lưu và mở sẵn dòng trống tiếp theo.
- Đổi nhóm hoặc rời màn khi dòng có thay đổi: K4.09.

**K5.07 · Tệp đính kèm: giới hạn (Q19).** Mọi chỗ đính kèm (tệp hợp đồng NCC, chứng từ giao dịch KT01, phản hồi hủy và chứng từ chi phí ở DH08…) dùng một component:
- Tối đa **20 MB** mỗi tệp; tối đa **10 tệp** mỗi chỗ đính kèm; định dạng **PDF, JPG, PNG, XLSX, DOCX**. Hệ thống kiểm tra cả phần mở rộng và nội dung tệp; tệp đổi đuôi mà nội dung không đúng định dạng bị từ chối. Tệp 0 byte bị từ chối.
- Mỗi tệp vi phạm bị từ chối riêng, thẻ tệp đỏ ghi lý do cụ thể: “Quá 20 MB (25,3 MB)”, “Định dạng .zip không được nhận”, “Đã đủ 10 tệp”. Tệp hợp lệ trong cùng lần chọn vẫn được nhận, theo thứ tự chọn, tới khi đủ 10.

**K5.08 · Tệp đính kèm: hành vi.**
- Thêm bằng nút “Thêm tệp” hoặc kéo thả vào vùng đính kèm; chọn được nhiều tệp một lần.
- Mỗi tệp đang tải có thanh tiến độ và nút × hủy tải. Lỗi tải: thẻ tệp đỏ với nút Thử lại.
- Thẻ tệp: tên, cỡ, người và thời điểm tải. Bấm tên: PDF, JPG, PNG mở xem ở tab mới; XLSX, DOCX tải về.
- Hai tệp trùng tên: giữ cả hai, tệp sau thêm “ (2)” trước phần mở rộng.
- Trong form có thanh lưu: thêm, xóa tệp là thay đổi của form, chỉ ghi khi Lưu; Hủy thay đổi bỏ cả thay đổi về tệp. Chỗ đính kèm không nằm trong form: thêm là lưu ngay; Xóa làm ngay kèm Hoàn tác 10 giây (U2.02).
- Chỉ đọc (U5): chỉ xem và tải tệp, không có Thêm tệp, không có Xóa.

---

## 12. K6 · Màu trạng thái, công tắc, chữ trên nút

**K6.01 · Nhóm màu theo ý nghĩa.** Áp cho nhãn trạng thái, chỉ báo, chip, số trên tab, thanh Lịch, viền thẻ Kanban.

| Nhóm | Màu | Nghĩa | Không dùng cho |
|---|---|---|---|
| Trung tính | Xám xanh | Chưa bắt đầu, chưa đến hạn, thông tin không cần làm gì | — |
| Đang làm | Xanh dương | Đang tiến hành, đã gửi đang chờ bên khác | — |
| Cần chú ý | Vàng | Việc cần làm hoặc cảnh báo, chưa trễ: sắp đến hạn, cần điều chỉnh, thiếu thông tin không chặn | Quá hạn, lỗi |
| Phải xử lý | Đỏ | **Chỉ** cho việc phải xử lý ngay: đã quá hạn, lỗi, bị chặn, sự cố đang xảy ra | Đã hủy, Ngừng dùng, Bị khóa, Xóa, Hủy, nút xác nhận |
| Hoàn tất | Xanh lá | Đã đạt, đã xác nhận, còn hiệu lực, Đang dùng | — |
| Đã hủy, ngừng, lưu trữ | Xám | Đã hủy, Không chốt, Đã thay thế, Ngừng dùng, Bị khóa, Hết hạn, Đã thu hồi, Đã đóng | — |

Ngoài trạng thái, chỉ còn ba cách dùng màu (K6.04). Không dùng màu cam.

**K6.02 · Ánh xạ trạng thái.**

| Đối tượng | Trung tính | Đang làm | Cần chú ý | Phải xử lý | Hoàn tất | Xám |
|---|---|---|---|---|---|---|
| Yêu cầu Tour | — | Đang xử lý | — | — | Đã có Booking | Đã hủy |
| Kết quả báo giá | — | Chưa có kết quả | Cần điều chỉnh | — | Chốt | Không chốt, Đã thay thế |
| Link proposal | — | — | — | — | Đang mở | Hết hạn, Đã thu hồi |
| Booking | — | — | — | — | Hiệu lực | Đã hủy |
| Đợt, khoản công nợ | Còn hạn | — | Đến hạn, Chờ điều chỉnh, Cần hoàn, Phải nhận hoàn, Chờ ghi phải trả | Quá hạn | Đã thu đủ, Đã trả đủ, Đã tất toán | Hết hiệu lực |
| Giao dịch | — | — | — | — | Hiệu lực | Đã hủy |
| Hồ sơ Tour | Mới tạo | Đang diễn ra | — | — | Đã kết thúc | Đã đóng |
| Chỉ báo hồ sơ Tour | Chưa quyết toán | Mới | Đã mở lại, Chương trình có thay đổi | Booking đã hủy | Đã quyết toán | — |
| Hạng mục dịch vụ | — | Chờ kết quả, Chờ Kinh doanh | Cần đặt, Cần đặt lại, Xác nhận một phần, Cần điều chỉnh, Cần hủy | — | Đã xác nhận | Đã hủy |
| Chỉ báo hạng mục | — | Yêu cầu hủy đang chờ, Điều chỉnh đang chờ | x ngày chưa phản hồi, Chờ áp dụng thay đổi, NCC ngừng dùng | Gửi lỗi, Quá hạn phản hồi | — | — |
| Lần đặt dịch vụ | — | Đã gửi | Không đáp ứng | — | Đã xác nhận | Đã hủy |
| Công việc checklist | Chưa làm | Đang làm | — | Quá hạn (chỉ báo) | Hoàn tất | — |
| Sự cố | — | — | — | Đang xử lý | Đã xử lý | — |
| Thay đổi chương trình | — | — | Chờ áp dụng | — | Đã áp dụng | Đã thay thế, Không áp dụng |
| Yêu cầu đổi lịch trình | — | Chờ Kinh doanh | — | — | Đã xử lý | Đã rút |
| Chi phí phát sinh | — | — | Chưa ghi công nợ | — | Đã ghi công nợ | — |
| Phiên bản quyết toán | Đang soạn | — | — | — | Hiện hành | — |
| Hợp đồng NCC | Chưa có hợp đồng, Sắp áp dụng | — | Sắp hết hạn | Hết hạn | Còn hiệu lực | — |
| Tài khoản | — | — | Chờ đổi mật khẩu, Tạm khóa đăng nhập | — | Đang hoạt động | Bị khóa |
| Mọi công tắc | — | — | — | — | Đang dùng | Ngừng dùng |

Trạng thái RSD có mà bảng chưa ghi thì xếp theo nghĩa ở K6.01 và ghi vào bảng này khi nâng phiên bản.

**K6.03 · Cách hiện nhãn.** Nhãn trạng thái chính: nền nhạt, chữ đậm cùng màu, luôn có chữ (màu không là cách duy nhất để phân biệt). Chỉ báo phụ nhỏ hơn, đặt sau hoặc dưới nhãn chính, tách khỏi trạng thái chính. Đã hủy: thanh Lịch, thẻ Kanban và dòng giao dịch có chữ gạch ngang; Đã đóng không gạch ngang. Số trên tab, chip mang màu nhóm của việc nó đếm.

**K6.04 · Màu không phải trạng thái.** Tím: chế độ và nguồn đặc biệt (nhãn của RSD KD06: “Chế độ điều chỉnh”, “Điều chỉnh cho BK-…”, “Nhập tay”, “Đề xuất AI”, “Dịch nháp”). Xanh ngọc: nhãn nhỏ của trường điền sẵn (Tự điền, Từ Booking, Gợi ý, Mặc định…). Đỏ cho ô lỗi kiểm tra và banner lỗi (lỗi là việc phải xử lý). Nút xác nhận Xóa, Hủy dùng kiểu nút chính, không đỏ.

**K6.05 · Công tắc Đang dùng / Ngừng dùng.** Mọi công tắc bật tắt trạng thái dùng của dữ liệu (NCC, dịch vụ, giá trị danh mục, mẫu QT04, mẫu checklist, Tour mẫu, chính sách hoàn hủy, nhận phân công) có hai giá trị **Đang dùng** (bật) và **Ngừng dùng** (tắt), chữ hiện ngay cạnh công tắc và ở cột, chip, bộ lọc liên quan. Không dùng Hoạt động, Khóa, Vô hiệu, Ngừng sử dụng, Cho phép sử dụng, Bật, Tắt. Bật lưu ngay; tắt lưu ngay hoặc qua hộp thoại cảnh báo tác động (U2.05); cả hai kèm Hoàn tác. Người không có quyền thấy chữ (U5.03). Bộ lọc có/không trong báo cáo (“Chỉ Tour lỗ”) là bộ lọc K2.02, không phải công tắc. Trạng thái tài khoản (Đang hoạt động, Bị khóa) đổi bằng thao tác Khóa, Mở khóa của QT01, không phải công tắc.

**K6.06 · Chữ trên nút.**

| Việc | Chữ trên nút | Không dùng |
|---|---|---|
| Ghi thay đổi của form, bảng trượt, dòng | **Lưu** (RSD có thể ghép: Lưu và lập báo giá, Lưu giao dịch) | Cập nhật, Ghi, OK, Đồng ý, Xác nhận |
| Bỏ thay đổi chưa lưu | **Hủy thay đổi** | Hủy, Bỏ, Bỏ thay đổi, Đặt lại |
| Đóng hộp thoại xác nhận, cảnh báo mà không làm gì | **Quay lại** | Hủy, Không, Đóng, Giữ đang dùng, Không tắt |
| Ở lại khi bị chặn rời trang | **Ở lại** | Tiếp tục chỉnh sửa |
| Đóng bảng trượt, hộp thoại chỉ xem | **Đóng** | Hủy, Thoát |
| Tạo bản ghi mới từ danh sách hoặc bảng con | **+ Thêm <đối tượng>** (Thêm yêu cầu, Thêm khách hàng, Thêm NCC, Thêm mẫu, Thêm giá trị) | Tạo …, Mới, Tạo mới |
| Thao tác nghiệp vụ sinh đối tượng từ đối tượng khác | Giữ tên của RSD (Tạo Booking, Lập báo giá, Tạo bằng AI, Gia hạn hợp đồng) | — |
| Xóa vĩnh viễn | **Xóa** (trong menu: Xóa <đối tượng>) | Gỡ bỏ, Loại bỏ |
| Chuyển sang trạng thái Đã hủy | **Hủy <đối tượng>** (Hủy yêu cầu, Hủy Booking, Hủy giao dịch) | Hủy đứng một mình |
| Đưa đối tượng đã hủy, đã đóng về làm tiếp | **Mở lại <đối tượng>** (Mở lại yêu cầu, Mở lại Tour) | Khôi phục, Kích hoạt lại |
| Đổi người phụ trách | **Chuyển phụ trách** | Chuyển người phụ trách, Đổi người phụ trách, Giao lại |
| Xuất danh sách | **Xuất Excel** | Tải Excel, Export |
| Lấy dữ liệu mới khi bản ghi đã đổi ở phiên khác | **Tải lại** | Làm mới, Tải bản mới |
| Tải lại cả trang khi quyền vừa thay đổi giữa phiên (U5.05; ngoại lệ của dòng trên) | **Tải lại trang** | Tải lại, Làm mới |
| Thử lại khi tải hoặc lưu lỗi | **Thử lại** | Tải lại |
| Đảo thao tác vừa làm | **Hoàn tác** | Undo |
| Bỏ lọc | **Xóa bộ lọc** | Xóa lọc, Đặt lại bộ lọc |
| Áp bộ lọc khoảng | **Áp dụng** | OK, Lọc |
| Bỏ mọi dòng đang chọn | **Bỏ chọn** | — |
| Lưu dạng xem | **Lưu dạng xem**, **Cập nhật dạng xem** | — |
| Tài khoản | **Đổi mật khẩu**, **Đăng xuất** | — |

**K6.07 · Quy tắc chung về chữ.** Nút là động từ cụ thể nêu việc sẽ xảy ra. Không có nút OK, Đồng ý, Xác nhận, Xử lý, Submit, và không có nút chỉ ghi “Hủy”. Nhãn nút của thao tác người dùng không có quyền không xuất hiện ở đâu (U5.01).

---

## 13. Điểm RSD cũ khác chuẩn

RSD viết trước chuẩn này ghi khác ở các điểm dưới đây; khi code và khi viết scenario, theo chuẩn. AC của RSD lấy số theo cách cũ (ví dụ 20 dòng mỗi trang) thì tính lại theo chuẩn.

| # | RSD, mục | RSD đang ghi | Theo chuẩn |
|---|---|---|---|
| 1 | DH02, DH06, DH07, KD01-KD02, KD03-KD04, KD05, KD07, KT01, QT01 (mục 2) | 20 dòng mỗi trang | 50 dòng mỗi trang (K1.09); KD05 AC25 (27 dòng) dựng lại với hơn 50 dòng |
| 2 | QT05 2.4 | Nhóm trên 200 giá trị tải 50 dòng, cuộn tải thêm | Phân trang 50 dòng (K1.09) |
| 3 | DH02 1.2, 2.3; DH04 1.2, R09; DH06 1.2, 2.2; KD01-KD02 1.2, 2.2; KD05 1.2, AC01 | Nhớ bộ lọc trong phiên | Nhớ theo người dùng trên máy chủ, cả sau đăng xuất; trang, cuộn giữ qua URL (U3) |
| 4 | DH07 2.3 | “Của tôi” là một giá trị của ô lọc Phụ trách | Chip Của tôi (K2.06); ô Phụ trách giữ Tất cả, Chưa có người phụ trách, từng người |
| 5 | KD03-KD04 2.1, 2.3 | Chip tên “Khách của tôi”; Quản trị không có chip | Chip “Của tôi”, hiện với mọi người dùng, tắt sẵn với Quản trị (K2.06) |
| 6 | DH02 E2.8; DH07 E4.8; DH08 (hàng loạt) | “Chọn tất cả” chỉ trong trang đang xem | Thêm liên kết “Chọn tất cả n … khớp bộ lọc”, thao tác chạy trên bộ lọc (K1.13) |
| 7 | DH02 2.6; DH07 2.7 | Xóa bộ lọc chỉ ở thanh lọc, kể cả khi bảng rỗng | Bảng rỗng vì không khớp: nút Xóa bộ lọc trong vùng rỗng (K1.18) |
| 8 | KD05 2.3, R06; DH07 2.3; QT01 2.2 | Chỉ một số cột sắp được, sắp một cột | Mọi cột sắp được; Shift để sắp tối đa 3 cột (K1.05) |
| 9 | DH08 2.4 | Lỗi tải hiện nút Tải lại | Thử lại; Tải lại chỉ dùng cho xung đột (K1.17, K6.06) |
| 10 | DH08 2.4; QT05 2.4; KD06 W09 | Hộp thoại rời trang: “Tiếp tục chỉnh sửa / Bỏ thay đổi”, “Lưu, Bỏ thay đổi, Ở lại” | Ở lại · Hủy thay đổi · Lưu (K4.09) |
| 11 | KD03-KD04 2.7; QT01 2.6 | Nút Lưu luôn hiện, khóa khi chưa có thay đổi | Thanh lưu ẩn khi không có thay đổi (K4.07) |
| 12 | KD06 2.6 | Chân trang luôn hiện “● Chưa lưu” và nút bước tiếp theo | Thanh lưu chỉ khi có thay đổi; nút bước tiếp theo ở vị trí nút chính của tab (K4.07) |
| 13 | DH08 2.4 (600, 760 px); DH06, QT01, KD01-KD02 (760); DH04 (760); DH01 (1010); DH03 DH05 (1.060) | Bảng trượt nhiều cỡ | 600 → 640; 760 → 880; DH04 xem DH05 → 1100 (cùng cỡ DH05 ở DH03); 1010, 1.060 → 1100 (K5.03) |
| 14 | KT01 2.4 | Hộp thoại Ghi giao dịch (hơn 3 trường) | Bảng trượt 640 px (K5.05) |
| 15 | QT05 W12; DH02 W07 | Nút “Tắt sử dụng / Không tắt”, “Giữ đang dùng” | Ngừng dùng / Quay lại (K6.06) |
| 16 | QT07-QT12 2.1 | “Công tắc Chỉ …” để lọc | Bộ lọc Có/không (K2.02); công tắc chỉ cho Đang dùng / Ngừng dùng (K6.05) |
| 17 | KD05, KD03-KD04, DH02, KD01-KD02, QT04, DH01, QT01 (nút tạo) | Tạo yêu cầu, Tạo khách hàng, Tạo nhà cung cấp, Tạo Tour mẫu, + Tạo mẫu, Tạo tài khoản | + Thêm … (K6.06) |
| 18 | KD05 R08; KD06 2.1 | Chuyển người phụ trách | Chuyển phụ trách (K6.06) |
| 19 | QT05 2.4 (dòng sửa); KD06 2.1 (tạo mới) | Nút “Hủy” cạnh Lưu | Hủy thay đổi (K6.06) |
| 20 | KT01 2.4 | “Xóa lọc” | Xóa bộ lọc (K6.06) |
| 21 | DH07 2.6 | Lịch: Mới tạo xám, Đã kết thúc tím, Đã đóng xám nhạt gạch ngang | Mới tạo trung tính, Đã kết thúc xanh lá, Đã đóng xám không gạch; gạch ngang chỉ cho Đã hủy (K6.02, K6.03) |
| 22 | DH02 2.2 | Chữ màu cam (thiếu email đặt dịch vụ, còn n ngày) | Vàng (K6.01) |
| 23 | KD05 R09 | Tệp Excel theo danh sách cột cố định | Cột đang hiện; cột của danh sách R09 mà bảng không có thành cột ẩn sẵn trong nút Cột; email, điện thoại vẫn không xuất (K1.21) |
| 24 | QT01 2.6, QT02 E1.2, CH01 (1.2, L1.1, R09), CH03 1.2 và mọi RSD dẫn K0.09 | Sau đăng nhập luôn mở Việc của tôi; trang không có quyền có nút Về Việc của tôi | Tài khoản chỉ có vai trò thuộc phòng HDV: trang mặc định và nút về là Tour của tôi (K0.07, K0.09) |

---

## 14. K7 · Màn điện thoại

Nguồn: BOI-CANH Nền tảng và định dạng (ngoại lệ điện thoại) và “Vai trò HDV” (người dùng chốt 12/11/2026). Mã K7 đặt sau mục 13 để không đánh lại số mục.

**K7.01 · Phạm vi.** Áp cho mọi phần của HD01 Tour của tôi, và cho CH01 (Đăng nhập, Đổi mật khẩu) khi vùng hiển thị hẹp hơn 768 px. Bảng thông báo CH02 và menu mở từ khung thu gọn (K7.04) cũng theo K7. Mọi màn khác giữ K0.01 (máy tính); mở trên điện thoại thì vẫn là bố cục máy tính, cuộn ngang. Điểm K7 không nêu thì giữ quy tắc chung: định dạng ngày, số, tiền (K0.02–K0.04), xác nhận và Hoàn tác (U2), nhớ lựa chọn và URL (U3), quyền trên giao diện (U5), lỗi tại trường và xung đột (K4.10, K4.11), giới hạn tệp (K5.07), màu và chữ trên nút (K6).

**K7.02 · Thiết bị và chiều rộng.** Chrome trên Android và Safari trên iOS bản hiện hành, cầm dọc. Thiết kế cho chiều rộng vùng hiển thị 360–430 px; wireframe dựng ở 390 × 844 px. Ở 360 px không có cuộn ngang, không có chữ hay nút bị cắt. Rộng hơn 430 px (máy tính bảng, hoặc máy tính mở HD01): giữ một cột, nội dung rộng tối đa 600 px, căn giữa. Chữ thân tối thiểu 16 px để trình duyệt không tự phóng to khi chạm ô nhập; không chặn người dùng phóng to.

**K7.03 · Một cột.** Mọi nội dung xếp một cột theo chiều dọc; không có hai vùng cạnh nhau, không có cột phụ. Thông tin phụ của một bản ghi xuống dòng dưới thay vì đứng bên phải.

**K7.04 · Khung ứng dụng thu gọn (thay K0.05, K0.06).**
- **Thanh trên gọn**, cao 56 px, dính đầu màn: bên trái là tên màn (ở trang danh sách) hoặc nút “←” kèm mã hoặc tên ngắn của bản ghi (ở trang con); bên phải là chuông Thông báo (số chưa đọc như K0.06; chạm mở bảng thông báo toàn màn hình, K7.08) và nút menu ☰.
- **Menu** (nút ☰) mở toàn màn hình (K7.08), gồm: họ tên và vai trò; các mục màn người dùng có quyền xem theo K0.05, chỉ hiện mục có quyền (tài khoản chỉ có vai trò thuộc phòng HDV chỉ thấy Tour của tôi); Đổi mật khẩu; Đăng xuất. Mục là màn máy tính thì mở bố cục máy tính (K7.12).
- **Thanh dưới cùng** chỉ dùng khi RSD của màn có từ 2 đến 5 lối cấp một cần chuyển nhanh (ví dụ các phần của một Tour); mỗi lối một biểu tượng kèm chữ, lối đang mở được tô. Màn có một lối thì không có thanh dưới cùng. Khi bàn phím ảo mở, thanh dưới cùng ẩn.
- Không có menu trái, ô Tìm nhanh và phím tắt Ctrl+K (U1), phím tắt của K1.22.
- Tiêu đề tab trình duyệt theo K0.10.

**K7.05 · Vùng chạm.** Mọi phần bấm được (nút, liên kết, thẻ, chip, ô chọn, biểu tượng) có vùng chạm tối thiểu 44 × 44 px, cách vùng chạm kế bên tối thiểu 8 px. Không có thao tác chỉ làm được bằng rê chuột, nhấp đúp, chuột phải, vuốt hay phím tắt; chữ hiện khi rê chuột ở máy tính (lý do nút khóa U5.02, chữ bị cắt) hiện khi chạm.

**K7.06 · Danh sách thẻ thay bảng K1.** Danh sách bản ghi hiện thành thẻ xếp dọc, mỗi bản ghi một thẻ: dòng đầu là mã hoặc tên chính kèm nhãn trạng thái (K6.03); dưới là tối đa 3 dòng thông tin do RSD chọn. Chạm cả thẻ mở bản ghi. Không có các phần của K1: thanh công cụ, cột, sắp theo cột, ẩn hiện cột, mật độ, chọn dòng, thanh hàng loạt, Xuất Excel, menu ⋯ trên dòng. Lọc bằng một hàng chip (cuộn ngang được) theo RSD, có số trên chip; chip đang chọn nhớ theo U3. Tải 20 thẻ mỗi lần, nút Xem thêm ở cuối; không tự tải khi cuộn. Danh sách nào RSD ghi tải một lần (HD01 R02) thì không có Xem thêm: hiện đủ mọi thẻ trong một lần tải. Đang tải, lỗi tải, rỗng theo K1.16–K1.18 (khung xám dạng thẻ; lỗi có Thử lại).

**K7.07 · Form một cột.** Nhãn đặt trên ô; mỗi ô rộng hết cột. Bàn phím ảo theo kiểu dữ liệu: tiền và số dùng bàn phím số có dấu phẩy thập phân (K0.04); ngày dùng bộ chọn ngày của hệ điều hành, hiển thị `dd/mm/yyyy`; giờ dùng bộ chọn giờ 24 giờ; email, điện thoại dùng bàn phím tương ứng. Nút chính của form (Lưu, hoặc động từ RSD đặt) nằm ở thanh đáy dính, rộng hết màn, luôn hiện khi form mở; chưa có thay đổi thì khóa kèm lý do “Chưa có thay đổi” (U5.02). Lỗi khi bấm theo K4.11, màn cuộn tới ô lỗi đầu tiên. Rời form khi còn thay đổi chưa lưu: hộp thoại K4.09 theo K7.08.

**K7.08 · Bảng trượt thành trang toàn màn hình; hộp thoại.** Bảng trượt (K5.03, K5.04) mở thành trang toàn màn hình có URL riêng, thanh trên gọn có “←” và tên; “←”, nút quay lại của trình duyệt hoặc cử chỉ quay lại của hệ điều hành đóng trang đó (qua K4.09 nếu còn thay đổi chưa lưu) và trả về đúng vị trí cuộn trước. Bảng thông báo CH02 và menu K7.04 cũng mở toàn màn hình theo cách này. Hộp thoại (U2.04, U2.05, K4.09, K5.05) giữ nội dung và chữ nút, rộng hết màn trừ lề 16 px, các nút xếp dọc, nút xác nhận ở trên, mỗi nút rộng hết hộp thoại.

**K7.09 · Chụp ảnh chứng từ.** Chỗ đính kèm (K5.07, K5.08) trên điện thoại có hai nút: **Chụp ảnh** (mở camera sau của máy) và **Chọn tệp** (thư viện ảnh hoặc tệp). Ảnh chụp lưu JPG; ảnh chọn từ thư viện dạng HEIC được trình duyệt chuyển sang JPG trước khi tải lên, không chuyển được thì báo lỗi định dạng như K5.07. Giới hạn 20 MB, 10 tệp và định dạng theo Q19 giữ nguyên. Mỗi ảnh đang tải có thanh tiến độ và × hủy tải; mất mạng giữa chừng thì thẻ tệp đỏ có Thử lại (K5.08), các trường khác của form giữ nguyên. Thẻ tệp có ảnh thu nhỏ; chạm ảnh mở xem toàn màn hình.

**K7.10 · Thông báo ngắn và Hoàn tác như U2.** Giữ nguyên U2.01–U2.09: khi nào hỏi xác nhận, Hoàn tác trong 10 giây, tự đóng sau 5 hoặc 10 giây, tối đa 3 thông báo, thông báo lỗi không tự đóng, chống bấm lặp. Chỉ khác vị trí: thông báo ngắn ở đáy màn, ngay trên thanh dưới cùng hoặc thanh đáy của form, rộng hết màn trừ lề 16 px; nút Hoàn tác và × đạt vùng chạm K7.05.

**K7.11 · Mạng chập chờn.** Không có chế độ ngoại tuyến. Lưu khi mất mạng: dữ liệu đã nhập giữ trên màn, thông báo lỗi có Thử lại (U2.07); mỗi lần bấm có mã thao tác nên Thử lại không ghi hai lần (U2.09). Tải lỗi: Thử lại tại chỗ (K1.17). Ngoại lệ: form ghi của HD01 giữ nội dung và ảnh chưa tải lên thành bản chưa gửi trong bộ nhớ trình duyệt, có banner “Chưa lưu” và nút Gửi lại do người dùng bấm, theo RSD HD01 R08, L5.1 (người dùng chốt: giữ nội dung đang ghi để gửi lại).

**K7.12 · Chuyển giữa màn điện thoại và màn máy tính.** Từ menu K7.04, mục là màn máy tính mở bố cục máy tính với khung K0. Từ khung K0, mục Tour của tôi (K0.05) mở HD01 với khung thu gọn K7.04, rộng tối đa 600 px, căn giữa (K7.02); menu ☰ có Việc của tôi khi tài khoản có vai trò ngoài phòng HDV.

**K7.13 · Đăng nhập, Đổi mật khẩu trên điện thoại.** CH01.1: thẻ đăng nhập rộng hết màn trừ lề 16 px; ô Email dùng bàn phím email, không tự viết hoa chữ đầu, không tự sửa chính tả; nút Hiện/Ẩn mật khẩu đạt K7.05; nút Đăng nhập rộng hết thẻ. CH01.2 theo K7.07; chế độ bắt buộc vẫn không có menu, chỉ tên người dùng và Đăng xuất (K0.06). Sau đăng nhập mở trang mặc định (K0.07).

---

## Phụ lục A · Tiêu chí nghiệm thu (CGD-AC)

Mỗi AC là một scenario chạy qua trình duyệt, mã scenario là mã AC. Dữ liệu chuẩn bị tạo qua hệ thống; “danh sách mẫu” là KD05 với Kinh doanh trừ khi ghi khác; “bộ dữ liệu lớn” là 120 yêu cầu Tour Đang xử lý của cùng người phụ trách. Vai trò thử là vai trò tạo ở QT02 chỉ với quyền ghi trong AC. Vùng hiển thị 1280 × 800, trừ AC của A.12 dùng 390 × 844 px khi AC không ghi khác.

### A.1 · K0 Khung ứng dụng

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC01 | K0.05 | Vai trò thử chỉ có quyền xem KD05 đăng nhập | Menu trái chỉ có Việc của tôi và nhóm Kinh doanh với một mục Yêu cầu Tour; nhóm Điều hành, Kế toán, Báo cáo, Quản trị không hiện |
| CGD-AC02 | K0.05 | Mở KD06 của một yêu cầu | Mục Yêu cầu Tour ở menu trái được tô |
| CGD-AC03 | K0.06 | Người dùng có 0, rồi 120 thông báo chưa đọc | 0: chuông không có số; 120: chuông ghi “99+”; bấm chuông mở danh sách thông báo CH02 |
| CGD-AC04 | K0.06 | Mở menu tài khoản | Có họ tên, vai trò, mục Đổi mật khẩu (mở màn Đổi mật khẩu) và Đăng xuất |
| CGD-AC05 | K0.07 | Đăng nhập từ trang Đăng nhập; mở địa chỉ `/` | Cả hai mở Việc của tôi |
| CGD-AC06 | K0.08 | Chưa đăng nhập, mở URL KD06 của YC-2611-0031 tab Báo giá, rồi đăng nhập | Sau đăng nhập mở đúng KD06 của YC-2611-0031 ở tab Báo giá |
| CGD-AC07 | K0.08 | Mở bảng trượt hợp đồng NCC ở DH03, sao chép URL, dán vào tab mới; tải lại trang (F5) | Tab mới và trang tải lại đều mở đúng hồ sơ NCC, đúng tab và đúng bảng trượt hợp đồng |
| CGD-AC08 | K0.08 | Ctrl+bấm một dòng của KD05 | Hồ sơ mở ở tab trình duyệt mới; tab hiện tại giữ nguyên danh sách |
| CGD-AC09 | K0.09 | Vai trò thử không có quyền xem KD08 mở URL của BK-2611-0031; mở URL của YC-2699-9999 (không tồn tại) | Lần 1: trang “Bạn không có quyền xem trang này”, không có mã khách, dữ liệu Booking, có nút Về Việc của tôi. Lần 2: “Không tìm thấy YC-2699-9999” và nút Về Việc của tôi |
| CGD-AC10 | K0.03 | Máy trình duyệt đặt múi giờ UTC; một thao tác được ghi lúc 23:30 ngày 11/11/2026 giờ Việt Nam (16:30 UTC); mở QT03 | Mục nhật ký hiện “11/11/2026 23:30”, không phải 16:30; bộ lọc thời gian “Hôm nay” mở lúc 23:45 cùng tối gồm mục này |
| CGD-AC11 | K0.04 | Hiển thị giá trị 210000000 VND, 15000 EUR, 2100,5 EUR, −1250 USD, tỷ giá 27480 | 210.000.000 ₫; 15.000 EUR; 2.100,50 EUR; −1.250 USD; 27.480 ₫ |
| CGD-AC12 | K0.04 | Một trang có số tiền ở EUR và USD với dòng tổng | Dòng tổng ghi riêng từng loại tiền, không có tổng cộng lẫn |
| CGD-AC13 | K0.10 | Mở KD06 của YC-2611-0031; mở KD05 | Tiêu đề tab “YC-2611-0031 · Yêu cầu Tour · TOPAS”; “Yêu cầu Tour · TOPAS” |
| CGD-AC14 | K0.11 | Đăng xuất khi không có thay đổi chưa lưu | Về trang Đăng nhập ngay, không hộp thoại |
| CGD-AC15 | K0.01 | Mở KD05 bộ dữ liệu lớn ở 1280 × 800, mật độ Gọn | Thấy thanh trên, tiêu đề, thanh công cụ, hàng chip, tiêu đề cột và ít nhất 10 dòng mà không cuộn |
| CGD-AC150 | K0.11, K4.09 | KD04 có 1 thay đổi chưa lưu (Ghi chú “abc”); tiến giờ để phiên hết hạn (RSD CH01 R04); bấm mục Khách hàng ở menu trái, chọn Lưu ở hộp thoại K4.09 | Không chuyển sang trang Đăng nhập; hộp thoại đóng; vẫn ở KD04, Ghi chú vẫn “abc”, thanh lưu vẫn hiện; banner đỏ báo phiên đã hết hạn kèm liên kết Đăng nhập ở thẻ mới; lịch sử KD04 không có mục mới. Đăng nhập ở thẻ mới rồi bấm Lưu ở thẻ cũ thì lưu thành công |

### A.2 · U1 Tìm nhanh

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC16 | U1.01 | Con trỏ đang trong ô Mong muốn ở KD06, nhấn Ctrl+K; rồi nhấn Esc | Hộp tìm nhanh mở, con trỏ trong ô tìm trống; Esc đóng hộp, con trỏ về ô Mong muốn |
| CGD-AC17 | U1.02, U1.07 | Gõ “Y” | Không có yêu cầu tìm gửi đi; hộp ghi “Gõ ít nhất 2 ký tự để tìm mã hoặc tên” |
| CGD-AC18 | U1.02 | Gõ liền “mul”, “mull”, “muller” cách nhau dưới 300 ms | Chỉ một lần tìm, sau 300 ms kể từ phím cuối, với chuỗi “muller” |
| CGD-AC19 | U1.02, U1.04 | Gõ “muller” | Có kết quả Müller Reisen GmbH ở nhóm Khách hàng và các yêu cầu, Booking của khách này; phần khớp tô vàng |
| CGD-AC20 | U1.02, U1.06 | Gõ “bk26110031” rồi Enter | BK-2611-0031 là dòng đầu (đang trỏ); Enter mở KD08 của BK-2611-0031, hộp đóng |
| CGD-AC21 | U1.04 | Có 8 yêu cầu khớp “muller” | Nhóm Yêu cầu Tour có 5 dòng và dòng “Xem tất cả 8 trong Yêu cầu Tour”; bấm thì KD05 mở với ô tìm “muller”, danh sách 8 dòng |
| CGD-AC22 | U1.04 | Gõ một chuỗi khớp yêu cầu, Booking và khách | Nhóm hiện theo thứ tự Yêu cầu Tour, Booking, Hồ sơ Tour, Khách hàng…; mỗi nhóm có tên nhóm |
| CGD-AC23 | U1.05 | Vai trò thử có quyền xem KD06, không có quyền xem DH03; gõ tên một NCC có thật | Không có nhóm NCC; không có số hay “Xem tất cả” cho NCC |
| CGD-AC24 | U1.06 | Có 3 kết quả, nhấn ↓ hai lần rồi Ctrl+Enter | Dòng thứ ba mở ở tab trình duyệt mới; hộp tìm nhanh vẫn mở |
| CGD-AC25 | U1.07 | Gõ “zzqq” | Hộp ghi “Không tìm thấy “zzqq”” |
| CGD-AC26 | U1.07 | Máy chủ tìm nhanh lỗi | Hộp ghi “Không tìm được” và nút Thử lại; chuỗi giữ nguyên; Thử lại khi máy chủ đã chạy lại thì có kết quả |
| CGD-AC27 | U1.08 | KD04 có 1 thay đổi chưa lưu, chọn một kết quả tìm nhanh bằng Enter | Hộp thoại “Còn thay đổi chưa lưu” hiện trước khi rời KD04 |
| CGD-AC147 | U1.02, U1.03 | Khách Müller Reisen GmbH có người liên hệ Anna, email anna@muller-reisen.de, điện thoại +49 30 1234 5678. Kinh doanh (có `KD03.xem`, `KD04.xem`) gõ “anna@muller”; xóa, gõ “30 1234 5678”; xóa, gõ “1234” | Lần 1 và 2: nhóm Khách hàng có Müller Reisen GmbH, thông tin phụ lần lượt “Email người liên hệ: anna@muller-reisen.de”, “Điện thoại người liên hệ: +49 30 1234 5678”, phần khớp tô vàng; Enter mở KD04 của khách. Lần 3 (4 chữ số): không khớp theo điện thoại |
| CGD-AC148 | U1.05 | Vai trò thử có `KD06.xem`, không có `KD03.xem`, gõ “anna@muller-reisen.de” | Không có nhóm Khách hàng, không có “Xem tất cả” của Khách hàng; hộp ghi “Không tìm thấy “anna@muller-reisen.de”” |
| CGD-AC149 | U1.03, U1.05 | Vai trò thử chỉ có `KT01.xem-phai-thu` (không có `KT01.xem-phai-tra`); có GD-2611-0001 Thu từ khách và GD-2611-0002 Chi trả NCC; gõ “GD-2611-000” | Nhóm Giao dịch chỉ có GD-2611-0001; không có GD-2611-0002 |

### A.3 · U2 Xác nhận, Hoàn tác, thông báo ngắn

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC28 | U2.01, U2.04 | Kinh doanh chọn Xóa khách hàng ở ⋯ của một khách chưa có yêu cầu | Hộp thoại tiêu đề “Xóa khách hàng <tên>?”, nêu hậu quả; hai nút Xóa khách hàng và Quay lại; con trỏ ở Quay lại; Esc đóng, khách còn nguyên |
| CGD-AC29 | U2.02, U2.07 | Điều hành tắt công tắc của một NCC không được dùng ở đâu | Không có hộp thoại; NCC thành Ngừng dùng; thông báo ngắn có Hoàn tác, tự đóng sau 10 giây |
| CGD-AC30 | U2.07 | Lưu KD04 thành công | Thông báo ngắn “Đã lưu” không có Hoàn tác, tự đóng sau 5 giây |
| CGD-AC31 | U2.06 | Tắt NCC như AC29, bấm Hoàn tác ở giây thứ 5 | NCC trở lại Đang dùng, số trên chip trở về; QT03 có hai mục: tắt và Hoàn tác |
| CGD-AC32 | U2.05, U2.06 | Điều hành tắt nhận phân công của nhân sự đang phụ trách 2 hồ sơ (qua hộp thoại cảnh báo tác động; thông báo trong ứng dụng đã tạo cho người liên quan theo RSD DH06 R05), rồi Hoàn tác trong 10 giây | Nhận phân công về Đang dùng; người nhận thông báo không còn thấy thông báo đó, số trên chuông của họ giảm; chỉ báo “Không nhận phân công” trên DH07 mất |
| CGD-AC33 | U2.06 | Người A tắt NCC; trong 10 giây người B bật lại NCC đó; A bấm Hoàn tác | Không hoàn tác; thông báo ngắn nêu B và thời điểm đổi; NCC giữ giá trị B đã đặt |
| CGD-AC34 | U2.06 | Không bấm Hoàn tác sau khi tắt NCC; chờ 11 giây | Thông báo ngắn đã đóng; không còn nút Hoàn tác |
| CGD-AC35 | U2.05 | Quản trị tắt một giá trị Loại Tour đang dùng ở 10 bản ghi | Hộp thoại liệt kê nơi đang dùng và điều sẽ xảy ra, nút Ngừng dùng và Quay lại; bấm Ngừng dùng thì thông báo ngắn có Hoàn tác 10 giây |
| CGD-AC36 | U2.06, U2.08 | Điều hành giao người phụ trách hàng loạt cho 3 hồ sơ ở DH07, rồi bấm Hoàn tác trên banner | Banner nêu 3 hồ sơ thành công và một nút Hoàn tác; Hoàn tác đưa cả 3 về người phụ trách cũ |
| CGD-AC37 | U2.07 | Lưu thất bại do mất kết nối | Thông báo ngắn lỗi không tự đóng sau 10 giây, có Thử lại và ×; dữ liệu nhập còn nguyên |
| CGD-AC38 | U2.07 | Tạo liên tiếp 4 thông báo ngắn | Chỉ 3 thông báo hiện, thông báo cũ nhất đã đóng; thông báo mới nhất ở dưới cùng |
| CGD-AC39 | U2.09 | Bấm nhanh hai lần nút Lưu của KD04 | Nút đổi “Đang lưu…” và khóa ngay sau lần đầu; lịch sử hồ sơ chỉ có một lần lưu |

### A.4 · U3 Nhớ lựa chọn, URL

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC40 | U3.01, U3.02 | Ở KD05: chọn chip Đã hủy, bộ lọc Thời gian đi Tháng sau, sắp theo Số khách giảm, ẩn cột Cập nhật, mật độ Thoáng, dạng Kanban; đăng xuất; đăng nhập ở trình duyệt khác; mở KD05 từ menu | Mọi lựa chọn trên giữ nguyên |
| CGD-AC41 | U3.03 | Ở KD05 gõ “muller”, sang trang 2, rồi mở màn khác và mở lại KD05 từ menu | Ô tìm trống, trang 1; bộ lọc, chip đã nhớ vẫn áp |
| CGD-AC42 | U3.04 | Kinh doanh và Quản trị lần đầu mở KD05 | Kinh doanh: chip Của tôi bật, chip Đang xử lý, dạng Bảng. Quản trị: chip Của tôi tắt |
| CGD-AC43 | U3.05, U3.06 | A lọc KD05 (chip Đã hủy, Thời gian đi Tháng sau, sắp Số khách, trang 2) rồi gửi URL; B (đã nhớ chip Đang xử lý) mở URL; sau đó B mở KD05 từ menu | B thấy đúng chip Đã hủy, Tháng sau, sắp Số khách, trang 2; mở từ menu thì B thấy lại chip Đang xử lý của mình |
| CGD-AC44 | U3.06 | Mở URL KD05 chỉ có tham số chip Đã hủy | Các bộ lọc khác theo mặc định của màn, không theo lựa chọn đã nhớ |
| CGD-AC45 | U3.07 | URL KD05 có bộ lọc Phụ trách là một ID không tồn tại | Bộ lọc đó bị bỏ, phần còn lại áp đúng; thông báo ngắn “Đã bỏ qua 1 bộ lọc không còn dùng được” |
| CGD-AC46 | U3.07 | Đã nhớ bộ lọc Loại Tour = MICE; Quản trị tắt MICE ở QT05; mở lại danh sách | Bộ lọc vẫn áp; nút ghi “Loại Tour: MICE (ngừng dùng)” |
| CGD-AC47 | U3.05 | Lọc 3 lần liên tiếp ở KD05, mở một hồ sơ, rồi bấm quay lại của trình duyệt hai lần | Lần 1 về KD05 với bộ lọc thứ ba; lần 2 về màn trước KD05 (không đi qua từng lần lọc) |

### A.5 · U4, U5

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC48 | U4.01, U3.06 | Kinh doanh A phụ trách đúng 7 yêu cầu Đang xử lý (và 2 yêu cầu Đã hủy); ở KD05 A đã nhớ chip Đã hủy, Của tôi tắt, Thời gian đi Tháng sau. A mở Việc của tôi, bấm thẻ VT-KD-01 “Yêu cầu đang xử lý” (ghi 7, RSD CH03 Phụ lục A); sau đó mở KD05 từ menu | Lần 1: URL của KD05 có tham số Của tôi bật, chip Đang xử lý và mọi bộ lọc khác của KD05 ghi tường minh giá trị Tất cả; bảng có đúng 7 dòng, mọi dòng Phụ trách A, trạng thái Đang xử lý; Thời gian đi hiện Tất cả. Lần 2: KD05 mở với chip Đã hủy, Của tôi tắt, Thời gian đi Tháng sau (lựa chọn đã nhớ không đổi) |
| CGD-AC49 | U5.01 | Vai trò thử có quyền xem KD05, không có Xuất Excel, Thêm yêu cầu, Chuyển phụ trách | Không có nút Xuất Excel, + Thêm yêu cầu, không có cột ô chọn; không có nút nào hiện mờ thay thế |
| CGD-AC50 | U5.02 | Kinh doanh mở KD06 của yêu cầu Đã có Booking | Hủy yêu cầu hiện mờ, lý do “đang có Booking hiệu lực” ở cạnh nút |
| CGD-AC51 | U5.03, K4.06 | Quản trị hệ thống (KD04.1 chỉ đọc theo quyền mặc định) mở KD04 | Mọi trường là chữ, không có khung nhập, viền nét đứt hay biểu tượng khóa; trường trống hiện “—”; không có thanh lưu |
| CGD-AC52 | U5.04 | Kinh doanh (không có quyền Xem thông tin thanh toán NCC) mở DH03 | Khối thông tin thanh toán không có mặt, không có dấu che |
| CGD-AC53 | U5.04 | Vai trò thử xem KD05, không có quyền xem KD08, mở chip Đã có Booking | Mã Booking trên dòng là chữ, không bấm được |
| CGD-AC54 | U5.05, K6.06 | B (chỉ có vai trò Kinh doanh) mở KD04 của một khách, sửa Ghi chú thành “ghi chú thử” (thanh lưu hiện); Quản trị tắt `KD04.sua` của vai trò Kinh doanh ở QT02; B bấm Lưu; sau đó B bấm Tải lại trang và chọn rời trang ở hộp thoại của trình duyệt | Lần Lưu: không ghi gì (lịch sử KD04 và QT03 không có mục mới); thông báo ngắn lỗi “Quyền của bạn vừa thay đổi” có nút Tải lại trang, không tự đóng sau 10 giây; ô Ghi chú vẫn “ghi chú thử”, thanh lưu vẫn hiện, các trường vẫn là ô nhập. Sau Tải lại trang: mọi trường KD04 hiện dạng chữ, không có thanh lưu, Ghi chú là giá trị cũ |

### A.6 · K1 Chuẩn bảng

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC55 | K1.03, K1.04 | KD05 bộ dữ liệu lớn: cuộn xuống cuối trang; cuộn ngang tới cột cuối | Thanh công cụ, hàng chip, tiêu đề cột luôn hiện; khi cuộn ngang, cột ô chọn và cột Yêu cầu luôn hiện bên trái |
| CGD-AC56 | K1.05 | Bấm tiêu đề Số khách ba lần | Lần 1 ↑ tăng dần; lần 2 ↓ giảm dần; lần 3 về sắp xếp mặc định của chip, không còn mũi tên |
| CGD-AC57 | K1.05 | Sắp Thời gian đi tăng, Shift+bấm Số khách | Sắp theo Thời gian đi rồi Số khách; tiêu đề có số 1, 2; trang 2 tiếp đúng thứ tự trang 1; yêu cầu chưa chốt ngày ở cuối ở cả hai chiều |
| CGD-AC58 | K1.05 | Shift+bấm thêm cột thứ tư khi đang sắp 3 cột | Không thêm khóa thứ tư; giữ 3 khóa |
| CGD-AC59 | K1.06 | Ẩn cột Cập nhật, kéo cột Số khách lên ngay sau cột Yêu cầu, kéo rộng cột Khách hàng thành 320 px; tải lại trang | Ba thay đổi còn nguyên; ô tích của cột Yêu cầu khóa; Khôi phục mặc định đưa cả ba về mặc định |
| CGD-AC60 | K1.06 | Kéo mép cột về 20 px | Cột dừng ở 60 px |
| CGD-AC61 | K1.07 | Chip Của tôi bật; mở nút Cột | Cột Phụ trách không hiện trên bảng; trong nút Cột mục Phụ trách mờ kèm “Ẩn khi chip Của tôi bật”; tắt chip thì cột hiện |
| CGD-AC62 | K1.08 | Mở danh sách lần đầu; chọn Thoáng; đăng xuất, đăng nhập lại | Lần đầu mật độ Gọn (dòng một tầng cao 36 px); sau đó Thoáng được giữ (44 px) |
| CGD-AC63 | K1.09 | Bộ dữ liệu lớn 120 dòng | Ba trang 50, 50, 20; ghi chú “1–50 / 120”; sang trang 3 ghi “101–120 / 120”; đổi bộ lọc khi đang ở trang 3 thì về trang 1 |
| CGD-AC64 | K1.10 | Bấm vào ô Khách hàng của một dòng | Mở hồ sơ của dòng; không có nút “Mở” hay “Xem” trên dòng |
| CGD-AC65 | K1.11 | Danh sách có dòng có thao tác phụ và dòng không có; người dùng không có quyền một thao tác phụ | Dòng có thao tác hiện ⋯ chỉ gồm thao tác người dùng có quyền; dòng không có thao tác phụ không có ⋯ |
| CGD-AC66 | K1.12 | Bấm ô chọn dòng 3, Shift+bấm dòng 8 | 6 dòng (3–8) được chọn; thanh hàng loạt ghi “Đã chọn 6 …”; nút ⋯ và ô sửa tại chỗ trên mọi dòng ẩn; Xuất Excel ẩn |
| CGD-AC67 | K1.12 | Đang chọn 6 dòng, sang trang 2 | Lựa chọn bị bỏ, thanh hàng loạt ẩn |
| CGD-AC68 | K1.13, K1.14 | Quản trị ở KD05 bộ dữ liệu lớn, bấm ô chọn tiêu đề | 50 dòng được chọn; thanh có “Chọn tất cả 120 yêu cầu khớp bộ lọc”; bấm thì thanh ghi “Đã chọn tất cả 120 yêu cầu khớp bộ lọc” |
| CGD-AC69 | K1.13 | Tiếp AC68, Chuyển phụ trách sang người B; trước khi bấm, một yêu cầu khớp đã bị hủy ở phiên khác | 119 yêu cầu chuyển, kể cả yêu cầu ở trang 2, 3; banner ghi 1 bỏ qua kèm lý do; yêu cầu đã hủy không đổi |
| CGD-AC70 | K1.15 | Gõ “n” vào ô tìm; gõ thêm “g” | 1 ký tự: không lọc, dưới ô có “Gõ thêm 1 ký tự”; 2 ký tự: lọc sau 300 ms |
| CGD-AC71 | K1.15 | Gõ “nguyen” | Dòng có “Nguyễn” khớp, phần khớp tô vàng; số trên chip đổi theo chuỗi tìm |
| CGD-AC72 | K1.15 | Gõ “yc26110031” | Dòng YC-2611-0031 khớp |
| CGD-AC73 | K1.16 | Đổi bộ lọc khi đã có dữ liệu, máy chủ trả chậm 2 giây | Dòng cũ giữ chỗ và mờ, thanh tiến trình ở mép trên bảng; ô tìm, bộ lọc vẫn dùng được |
| CGD-AC74 | K1.17 | Máy chủ trả lỗi khi tải danh sách; sau đó máy chủ chạy lại, bấm Thử lại | Vùng bảng ghi “Không tải được danh sách” và nút Thử lại; bộ lọc giữ nguyên; chip ghi “–”; Xuất Excel khóa kèm lý do; Thử lại hiện bảng bình thường |
| CGD-AC75 | K1.17 | Máy chủ không trả lời trong 30 giây | Như AC74 |
| CGD-AC76 | K1.18 | Màn chưa có bản ghi nào; lọc ra không dòng nào ở màn có dữ liệu | Lần 1: “Chưa có <đối tượng>.” chỉ tới nút + Thêm …, không có nút Thêm thứ hai. Lần 2: “Không có <đối tượng> khớp bộ lọc” và nút Xóa bộ lọc trong vùng rỗng; liên kết Xóa bộ lọc ở thanh công cụ ẩn; Xuất Excel khóa “Không có dòng để xuất” |
| CGD-AC77 | K1.18 | Kinh doanh bật Của tôi, tìm mã một yêu cầu người khác phụ trách | Vùng rỗng ghi “Có 1 yêu cầu khớp khi tắt Của tôi” và nút Tắt Của tôi; bấm thì dòng đó hiện |
| CGD-AC78 | K1.19 | Ở chip Đang dùng của DH02, tắt một NCC trên dòng | Dòng ở tại chỗ, mờ, nhãn Ngừng dùng và “Không còn khớp bộ lọc”; số chip Đang dùng giảm 1, Ngừng dùng tăng 1; thông báo có Xem dòng; bấm Xem dòng mở chip Ngừng dùng và tô dòng đó 5 giây; tải lại thì dòng mờ biến mất khỏi chip Đang dùng |
| CGD-AC79 | K1.19 | Thêm một khách mới rồi quay lại KD03 | Khách nằm đúng vị trí theo sắp xếp, có nhãn Mới, nền xanh nhạt 5 giây |
| CGD-AC80 | K1.20 | Ô Phụ trách tại chỗ ở DH07: đổi người khi người khác vừa đổi hồ sơ đó | Ô hiện người mới nhất; thông báo ngắn nêu người và thời điểm đổi; không có nút ghi đè |
| CGD-AC81 | K1.21 | Bộ dữ liệu lớn, chip Đang xử lý, ẩn cột Cập nhật, sắp Số khách giảm, Xuất Excel | Tệp `YeuCauTour_YYYYMMDD_HHmm.xlsx` có 120 dòng dữ liệu theo Số khách giảm; cột đúng như đang hiện, đúng thứ tự, không có Cập nhật; dòng 1 ghi bộ lọc, người xuất, thời điểm; không có cột email, điện thoại; QT03 có mục Xuất tệp |
| CGD-AC82 | K1.21 | KD05 bộ dữ liệu lớn; mỗi khách có email và điện thoại, người liên hệ có email và điện thoại (RSD KD05 cấm hai trường này trong tệp); chip Đang xử lý; ở nút Cột bật mọi cột rồi Xuất Excel | Mở tệp: không ô nào chứa email hay số điện thoại của bất kỳ khách, người liên hệ nào trong bộ dữ liệu (so từng chuỗi, điện thoại so theo chữ số); không cột nào có tiêu đề chứa “Email” hoặc “Điện thoại”; số dòng dữ liệu bằng 120 |
| CGD-AC83 | K1.21 | Môi trường thử đặt giới hạn số dòng xuất Excel của KD05 bằng 100 trong tệp cấu hình (RSD KD05, bảng cấu hình); bộ dữ liệu lớn, chip Đang xử lý (120 dòng); sau đó thêm bộ lọc để còn 50 dòng | Lần 1: nút Xuất Excel khóa, cạnh nút ghi “120 dòng, vượt giới hạn 100 dòng” và gợi ý thu hẹp bộ lọc; bấm không tải tệp nào, QT03 không có mục Xuất tệp. Lần 2: nút mở, xuất được tệp 50 dòng |
| CGD-AC84 | K1.21 | Xuất từ dạng Lịch của KD05 đang xem tháng 12/2026 | Tệp gồm mọi dòng khớp bộ lọc, không chỉ tháng 12; cột theo cột đang hiện của Bảng |
| CGD-AC85 | K1.22 | Ở KD05, nhấn `/`; gõ “mu”; nhấn Esc; nhấn ↓ ↓ rồi Enter | `/` đưa con trỏ vào ô tìm (không gõ ký tự “/”); Esc rời ô tìm, chuỗi giữ; ↓ ↓ trỏ dòng 2; Enter mở hồ sơ dòng 2 |
| CGD-AC86 | K1.22 | Đang gõ trong ô Ghi chú của một form, nhấn `/` | Ký tự “/” được gõ vào ô Ghi chú; con trỏ không nhảy sang ô tìm |
| CGD-AC87 | K1.22 | Bảng trượt có thay đổi, nhấn Ctrl+S; nhấn Ctrl+S ở danh sách không có form | Lần 1 lưu như bấm Lưu, trình duyệt không mở hộp thoại lưu trang; lần 2 không có gì xảy ra, trình duyệt cũng không mở hộp thoại lưu trang |
| CGD-AC88 | K1.23 | Ô có chữ dài hơn độ rộng cột | Chữ cắt bằng “…”, rê chuột hiện đủ |

### A.7 · K2 Bộ lọc

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC89 | K2.01, K2.03 | Bấm Thời gian đi, chọn Tháng sau | Nút đổi thành “Thời gian đi: Tháng sau”, áp ngay; không bộ lọc nào trên màn có ô chọn toán tử |
| CGD-AC90 | K2.02, K2.03 | Khoảng ngày tùy chọn Từ 01/12/2026, Đến để trống, bấm Áp dụng; thử Từ 15/12 Đến 01/12 | Lần 1: dòng có ngày từ 01/12/2026 trở đi, kể cả đúng 01/12. Lần 2: Áp dụng khóa, lỗi dưới ô |
| CGD-AC91 | K2.02 | Bộ lọc Số khách Từ 10, Đến trống | Dòng có 10 khách trở lên, kể cả 10 |
| CGD-AC92 | K2.02 | Bộ lọc tiền Giá bán: EUR, 1.000–2.000 | Chỉ dòng EUR có giá trong khoảng, gồm 1.000 và 2.000; dòng USD 1.500 không khớp |
| CGD-AC93 | K2.02, K2.05 | Quốc gia chọn Pháp, Đức; thêm Thời gian đi Tháng sau | Nút “Quốc gia: Pháp, Đức”; dòng khớp là (Pháp hoặc Đức) và đi tháng sau; số trên chip tính theo cả hai bộ lọc |
| CGD-AC94 | K2.02 | Báo cáo QT09, bộ lọc Chỉ Tour lỗ chọn Có | Bộ lọc là ba lựa chọn Tất cả · Có · Không, không phải công tắc; bảng chỉ còn Tour lỗ |
| CGD-AC95 | K2.04 | Bấm + Bộ lọc, chọn cột Ngôn ngữ (không phải bộ lọc RSD), chọn Tiếng Đức; đăng xuất, đăng nhập lại | Nút Ngôn ngữ đứng sau các bộ lọc RSD và lọc đúng; sau đăng nhập lại nút vẫn còn; Gỡ bộ lọc bỏ nút |
| CGD-AC96 | K2.06 | Kinh doanh mở KD07; Kế toán mở KD07; Điều hành mở DH07 | Kinh doanh: Của tôi bật; Kế toán: tắt. Điều hành: Của tôi bật, danh sách gồm hồ sơ mình phụ trách và hồ sơ Chưa có người phụ trách |
| CGD-AC97 | K2.06 | Ở KD05 chọn Phụ trách = người B; sau đó bật Của tôi | Chọn B thì Của tôi tắt; bật Của tôi thì Phụ trách về Tất cả |
| CGD-AC98 | K2.06 | Tài khoản có vai trò Kinh doanh và Quản trị hệ thống mở KD05 lần đầu | Của tôi bật |
| CGD-AC99 | K2.07 | Mặc định của màn: chưa có Xóa bộ lọc; đặt Thời gian đi và chọn chip Đã hủy, sắp Số khách, bấm Xóa bộ lọc | Trước khi lọc không có liên kết Xóa bộ lọc; sau khi bấm, Thời gian đi về mặc định, chip Đã hủy và sắp Số khách giữ nguyên, liên kết biến mất |

### A.8 · K3 Dạng xem đã lưu và dạng xem

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC100 | K3.03, K3.04 | Đặt chip Đã hủy, Thời gian đi Tháng sau, sắp Số khách, ẩn cột Cập nhật; Lưu dạng xem tên “Hủy tháng sau”; chọn chip Đang xử lý rồi chọn lại “Hủy tháng sau” | Dạng xem áp lại đúng chip, bộ lọc, sắp xếp, cột; nút Dạng xem đã lưu mang tên “Hủy tháng sau” |
| CGD-AC101 | K3.02 | Người B cùng vai trò mở KD05 | Danh sách Dạng xem đã lưu của B không có “Hủy tháng sau” |
| CGD-AC102 | K3.01 | Mở danh sách Dạng xem đã lưu | Phần Có sẵn gồm đúng các chip của RSD; không có Đổi tên, Xóa cho các mục này; có Đặt làm mặc định |
| CGD-AC103 | K3.04 | Lưu dạng xem tên “hủy THÁNG sau” khi đã có “Hủy tháng sau”; lưu tên 41 ký tự; lưu tên “Đã hủy” | Ba lần đều lỗi tại trường, không lưu |
| CGD-AC104 | K3.05 | Đang dùng “Hủy tháng sau”, đổi sắp xếp | Tên có “•”; có Cập nhật dạng xem, Lưu dạng xem, Bỏ thay đổi; Bỏ thay đổi áp lại sắp xếp đã lưu |
| CGD-AC105 | K3.06 | Xóa “Hủy tháng sau”, bấm Hoàn tác trong 10 giây | Xóa không hỏi; Hoàn tác đưa dạng xem trở lại danh sách |
| CGD-AC106 | K3.07 | Đặt “Hủy tháng sau” làm mặc định; đổi Thời gian đi thành Tháng này; bấm Xóa bộ lọc | Danh sách có ★ ở “Hủy tháng sau”; Xóa bộ lọc đưa Thời gian đi về Tháng sau |
| CGD-AC107 | K3.08 | Đã có 20 dạng xem của tôi ở KD05 | Mục Lưu dạng xem khóa với lý do “Đã đủ 20 dạng xem…” |
| CGD-AC108 | K3.09 | Mở DH02; mở KD07; mở KD05 | DH02 không có bộ chuyển dạng xem; KD07 có Bảng, Lịch; KD05 có Bảng, Kanban, Lịch |
| CGD-AC109 | K3.09 | Ở Bảng KD05 với bộ lọc, đang chọn 3 dòng, chuyển sang Kanban | Bộ lọc giữ; lựa chọn bị bỏ; chip trạng thái ẩn; số đếm mỗi cột bằng số trên chip tương ứng; thẻ không có ô chọn |
| CGD-AC110 | K3.09 | Kéo một thẻ Kanban sang cột khác | Thẻ trở về chỗ cũ, trạng thái không đổi, không có yêu cầu ghi nào |

### A.9 · K4 Màn hồ sơ

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC111 | K4.03 | Ở KD05 bộ dữ liệu lớn: lọc, sắp Số khách, sang trang 2, cuộn xuống, mở dòng thứ 7; bấm “← Danh sách” | Về trang 2 với cùng bộ lọc, sắp xếp; vị trí cuộn như lúc rời; dòng thứ 7 là dòng đang trỏ |
| CGD-AC112 | K4.03 | Mở KD06 từ tìm nhanh; bấm “← Danh sách” | Mở KD05 với lựa chọn đã nhớ |
| CGD-AC113 | K4.02, K4.04 | Mở DH08 hồ sơ Mới tạo | Dòng 1 có ← Danh sách, Tour Code, nhãn Mới tạo; tối đa một nút chính và hai nút phụ; Lịch sử nằm trong ⋯ |
| CGD-AC114 | K4.05 | Bấm Lịch sử ở ⋯ của KD04 | Bảng trượt 640 px liệt kê thay đổi mới nhất trước, có người, thời điểm, trước → sau |
| CGD-AC115 | K4.06 | Kinh doanh mở KD04 | Các trường là ô nhập ngay; không có nút Sửa |
| CGD-AC116 | K4.07 | Sửa ô Ghi chú ở KD04; sửa về đúng giá trị cũ; sửa lại rồi nhấn Ctrl+S | Lần 1 thanh lưu hiện “● 1 thay đổi chưa lưu”, Hủy thay đổi, Lưu; lần 2 thanh ẩn; lần 3 lưu, thanh ẩn, thông báo “Đã lưu” 5 giây, vẫn ở tab cũ |
| CGD-AC117 | K4.08 | Sửa 2 trường, bấm Hủy thay đổi, rồi Hoàn tác trong 10 giây | Hai trường về giá trị đã lưu, không hỏi; Hoàn tác khôi phục hai giá trị vừa nhập, thanh lưu hiện lại “2 thay đổi chưa lưu” |
| CGD-AC118 | K4.09 | KD04 có thay đổi, bấm “← Danh sách”; lần lượt chọn Ở lại, Hủy thay đổi, Lưu | Hộp thoại “Còn thay đổi chưa lưu” với Ở lại (con trỏ mặc định), Hủy thay đổi, Lưu. Ở lại: vẫn ở KD04, thay đổi còn. Hủy thay đổi: về danh sách, không lưu. Lưu: lưu rồi về danh sách |
| CGD-AC119 | K4.09 | KD04 có thay đổi làm trường bắt buộc trống; bấm mục menu trái rồi chọn Lưu | Không rời màn; lỗi hiện tại trường |
| CGD-AC120 | K4.09 | Có thay đổi: chuyển tab hồ sơ; đóng bảng trượt bằng Esc; Đăng xuất | Mỗi lần đều hiện cùng một hộp thoại K4.09 |
| CGD-AC121 | K4.09 | Có thay đổi, đóng tab trình duyệt | Trình duyệt hiện hộp thoại rời trang của nó |
| CGD-AC122 | K4.10 | A và B mở cùng KD04; B đổi điện thoại và lưu lúc 10:05; A đổi Ghi chú rồi Lưu | A bị từ chối, không ghi gì; banner “Chưa lưu: … vừa được B cập nhật lúc 10:05 …” với đúng một nút Tải lại; không có nút ghi đè; Lưu khóa |
| CGD-AC123 | K4.10 | Tiếp AC122, A bấm Tải lại | Form hiện dữ liệu của B; thanh lưu ẩn; dưới ô Ghi chú có “Bạn đã nhập: <giá trị A>” |
| CGD-AC124 | K4.10 | Điều hành đang sửa DH08, người khác Đóng Tour; Điều hành lưu rồi Tải lại | Lưu bị từ chối; sau Tải lại hồ sơ ở chế độ chỉ đọc |
| CGD-AC125 | K4.11 | Bỏ trống trường bắt buộc ở tab Thông tin, đang ở tab khác bấm Lưu | Không gửi; màn chuyển tới ô lỗi, con trỏ trong ô; ô viền đỏ, lỗi dưới ô; thanh lưu ghi “1 lỗi cần sửa”; tab có chấm đỏ |
| CGD-AC126 | K4.11 | Gõ ngày 31/02/2026 rồi rời ô; sửa thành 28/02/2026 | Lỗi hiện ngay khi rời ô; mất ngay khi hợp lệ |
| CGD-AC127 | K4.13 | Bấm + Thêm khách hàng ở KD03; lưu thành công | Thanh lưu hiện sẵn với Lưu; phần đầu “Khách hàng mới · Chưa lưu”; sau khi lưu URL đổi sang mã KH mới |

### A.10 · K5 Trang, bảng trượt, hộp thoại, sửa tại dòng, tệp

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC128 | K5.03 | Mở Lịch sử của KD04; hợp đồng NCC ở DH03; mẫu ở QT04; chi tiết dịch vụ ở DH04 | Rộng lần lượt 640, 880, 1100, 1100 px |
| CGD-AC129 | K5.04 | Ở DH04 lọc, cuộn tới dòng 30, mở bảng trượt; bấm dòng 31; nhấn Esc | Danh sách phía sau giữ bộ lọc, vị trí; bấm dòng 31 chuyển bảng trượt sang dòng 31, URL đổi; Esc đóng bảng trượt |
| CGD-AC130 | K5.04 | Bảng trượt có thay đổi, bấm một dòng khác | Hộp thoại K4.09 hiện; Ở lại giữ bảng trượt cũ |
| CGD-AC131 | K5.05 | Mở các hộp thoại nhập liệu đại diện: Lưu dạng xem (K3.04); Khóa tài khoản ở QT01; Mở lại Tour ở DH08; Thêm vai trò ở QT02. Đếm ô nhập (ô chữ, ô chọn, ô tích, nút chọn một) trong từng hộp thoại | Lần lượt 1 (Tên), 1 (Lý do khóa), 2 (Lý do, Điều hành phụ trách mới), 3 (Tên, Thuộc phòng, Sao chép quyền từ); không hộp thoại nào quá 3. Hộp thoại nhập liệu mới của màn nào thì scenario của màn đó đếm cùng cách |
| CGD-AC132 | K5.05 | Hộp thoại Hủy yêu cầu: chọn lý do, nhấn Esc; mở lại, bấm ra nền | Hai lần đều đóng, yêu cầu không đổi |
| CGD-AC133 | K5.06 | QT05: bấm ô tên của một giá trị, sửa, nhấn Esc; sửa lại, nhấn Enter | Cả dòng vào chế độ sửa; Esc trả về giá trị cũ; Enter lưu, dòng tô xanh |
| CGD-AC134 | K5.06 | Dòng A đang sửa có thay đổi hợp lệ, bấm ô của dòng B; lần sau dòng A có lỗi | Lần 1: A được lưu, B vào chế độ sửa. Lần 2: A giữ chế độ sửa, lỗi tại ô, B không vào chế độ sửa |
| CGD-AC135 | K5.07 | Chọn cùng lúc: hợp đồng.pdf 5 MB, scan.pdf 25 MB, tailieu.zip, anh.png 0 byte | hợp đồng.pdf được nhận; scan.pdf bị từ chối “Quá 20 MB (25,0 MB)”; tailieu.zip “Định dạng .zip không được nhận”; anh.png bị từ chối |
| CGD-AC136 | K5.07 | Chỗ đính kèm có 9 tệp, chọn thêm 2 tệp hợp lệ | Tệp chọn trước được nhận; tệp còn lại bị từ chối “Đã đủ 10 tệp” |
| CGD-AC137 | K5.07 | Đổi tên một tệp .exe thành .pdf rồi tải lên | Bị từ chối vì định dạng |
| CGD-AC138 | K5.08 | Mất kết nối khi đang tải tệp; có lại kết nối, bấm Thử lại | Thẻ tệp đỏ có Thử lại; Thử lại tải thành công |
| CGD-AC139 | K5.08 | Thêm tệp trong form hợp đồng NCC rồi Hủy thay đổi | Tệp không còn trong hợp đồng sau khi tải lại trang |
| CGD-AC140 | K5.08 | Người chỉ xem mở chỗ đính kèm có tệp | Thấy và tải được tệp; không có Thêm tệp, không có Xóa |

### A.11 · K6 Màu, công tắc, chữ

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC141 | K6.01, K6.02 | Mở yêu cầu Đã hủy, Booking Đã hủy, giao dịch Đã hủy, NCC Ngừng dùng, tài khoản Bị khóa | Mọi nhãn màu xám; không nhãn nào màu đỏ; giao dịch Đã hủy chữ gạch ngang |
| CGD-AC142 | K6.02 | KT01 có đợt Quá hạn, Đến hạn, Còn hạn, Đã thu đủ | Quá hạn đỏ, Đến hạn vàng, Còn hạn xám xanh, Đã thu đủ xanh lá |
| CGD-AC143 | K6.02, K6.03 | Lịch DH07 có hồ sơ Mới tạo, Đang diễn ra, Đã kết thúc, Đã đóng | Xám xanh, xanh dương, xanh lá, xám; Đã đóng không gạch ngang |
| CGD-AC144 | K6.04 | Hộp thoại Xóa khách hàng, Hủy Booking | Nút xác nhận không màu đỏ |
| CGD-AC145 | K6.05 | Xem công tắc ở DH02, DH03 (dịch vụ), DH06, DH01, KD01, QT04, QT05 | Mọi công tắc có chữ Đang dùng hoặc Ngừng dùng; người chỉ xem thấy chữ, không thấy công tắc |
| CGD-AC146 | K6.06, K6.07 | Người có đủ quyền mở lần lượt: tiêu đề KD03, KD05, QT01, QT02; hộp thoại Xóa khách hàng (KD04), Hủy Booking (KD08), Xóa vai trò (QT02); thanh lưu của KD04 khi có thay đổi. Trên mỗi chỗ, đọc chữ của mọi nút | Nút tạo: “+ Thêm khách hàng”, “+ Thêm yêu cầu”, “+ Thêm tài khoản”, “+ Thêm vai trò”. Hộp thoại: đúng hai nút, lần lượt “Xóa khách hàng” và “Quay lại”, “Hủy Booking” và “Quay lại”, “Xóa vai trò” và “Quay lại”. Thanh lưu: “Hủy thay đổi” và “Lưu”. Không nút nào có chữ đúng bằng “OK”, “Đồng ý”, “Xác nhận”, “Xử lý”, “Hủy”. Mọi scenario CGD khác cũng kiểm cùng danh sách chữ cấm trên các nút chúng mở |

### A.12 · K7 Màn điện thoại (kèm K0.07, K0.09 cho phòng HDV)

| Mã | Quy tắc | Tình huống | Kết quả |
|---|---|---|---|
| CGD-AC151 | K7.02, K7.03 | Mở danh sách và một form của HD01 ở 360 × 800 và ở 430 × 932 | Không có cuộn ngang; không chữ, nút nào bị cắt; nội dung một cột |
| CGD-AC152 | K7.02, K7.12 | Tài khoản có Điều hành và HDV, ở 1280 × 800 bấm mục Tour của tôi ở menu trái | HD01 mở với khung thu gọn K7.04, nội dung một cột rộng tối đa 600 px, căn giữa; menu ☰ có Việc của tôi |
| CGD-AC153 | K7.04, K0.07 | Tài khoản chỉ có vai trò HDV đăng nhập ở 390 × 844; chạm ☰; nhấn Ctrl+K trên bàn phím ngoài | Mở Tour của tôi; thanh trên cao 56 px có chuông và ☰; menu có họ tên, vai trò, Tour của tôi, Đổi mật khẩu, Đăng xuất và không có mục nào khác; không có ô Tìm nhanh, Ctrl+K không mở gì |
| CGD-AC154 | K0.05, K0.07, K7.12 | Tài khoản có Điều hành và HDV đăng nhập ở 1280 × 800; xem menu trái; mở Tour của tôi; ở HD01 chạm ☰ → Việc của tôi | Mở Việc của tôi; menu trái có Việc của tôi, Tour của tôi, nhóm Điều hành; Tour của tôi mở bố cục K7; từ ☰ về Việc của tôi ở bố cục máy tính |
| CGD-AC155 | K7.05 | Đo mọi phần bấm được trên danh sách, form của HD01 và trên CH01.1 ở 390 × 844 | Mọi vùng chạm ≥ 44 × 44 px, cách nhau ≥ 8 px; chạm nút khóa thì hiện lý do |
| CGD-AC156 | K7.06 | Tài khoản HDV thử được phân công ở 25 hồ sơ chưa đóng (dữ liệu thử); mở HD01.1 Tour của tôi (RSD HD01 R02: tải một lần) | Hiện đủ 25 thẻ trong một lần tải, không có nút Xem thêm; mỗi thẻ dòng đầu là Tour Code kèm nhãn trạng thái; không có thanh công cụ, cột, ô chọn dòng, Xuất Excel; chạm một thẻ mở hồ sơ đó |
| CGD-AC157 | K7.07 | Mở một form có ô tiền và ô ngày của HD01; chạm ô tiền, ô ngày; để trống một trường bắt buộc, sửa một trường rồi chạm Lưu | Ô tiền mở bàn phím số có dấu phẩy; ô ngày mở bộ chọn ngày, hiện dd/mm/yyyy; trước khi sửa, nút Lưu ở thanh đáy khóa với “Chưa có thay đổi”; chạm Lưu thì cuộn tới ô lỗi, lỗi hiện tại trường, dữ liệu giữ |
| CGD-AC158 | K7.08 | Trên HD01 chạm chuông; chạm “←”; mở lại rồi dùng nút quay lại của trình duyệt | Bảng thông báo mở toàn màn hình có Chưa đọc · Tất cả (CH02); cả hai cách đóng đều về đúng chỗ cũ, giữ vị trí cuộn |
| CGD-AC159 | K7.08 | Mở một hộp thoại xác nhận trên HD01 | Hộp thoại rộng hết màn trừ 16 px; nút xác nhận ở trên, Quay lại ở dưới, mỗi nút rộng hết hộp thoại; chữ nút theo K6.06 |
| CGD-AC160 | K7.09 | Ở chỗ đính kèm của HD01: chạm Chụp ảnh và chụp; chạm Chọn tệp, chọn một ảnh HEIC 4 MB và một tệp 25 MB; tắt mạng khi ảnh đang tải | Có hai nút Chụp ảnh, Chọn tệp; ảnh chụp và ảnh HEIC thành tệp JPG; tệp 25 MB bị từ chối “Quá 20 MB (25 MB)”; mất mạng thì thẻ tệp đỏ có Thử lại, các trường khác giữ nguyên |
| CGD-AC161 | K7.10, U2.03 | HD01 không có thao tác Hoàn tác (RSD HD01 mục 2.5: lưu form theo U2.03, xóa qua hộp thoại). Ở 390 × 844 lưu một nhật ký ở HD01; lần khác xóa nhật ký đó | Lưu: thông báo ngắn “Đã lưu nhật ký” ở đáy màn, ngay trên thanh dưới cùng hoặc thanh đáy, rộng hết màn trừ lề 16 px, không có nút Hoàn tác, tự đóng sau 5 giây. Xóa: hộp thoại xác nhận theo K7.08, không có thông báo ngắn kèm Hoàn tác |
| CGD-AC162 | K7.13, K0.07 | Ở 390 × 844 mở CH01.1, chạm ô Email; đăng nhập bằng tài khoản chỉ có HDV; đăng xuất, đăng nhập bằng tài khoản Kế toán | Thẻ đăng nhập rộng hết màn trừ 16 px; bàn phím email, không tự viết hoa; HDV vào Tour của tôi; Kế toán vào Việc của tôi ở bố cục máy tính |
| CGD-AC163 | K0.09 | Tài khoản chỉ có HDV mở URL của DH07; mở URL HD01 của một Tour Code không được phân công | Lần 1: “Bạn không có quyền xem trang này”, nút Về Tour của tôi. Lần 2: “Không tìm thấy <Tour Code>”, nút Về Tour của tôi; không có dữ liệu hồ sơ |

**Tổng:** 163 AC: K0 16, U1 15, U2 12, U3 8, U4–U5 7, K1 34, K2 11, K3 11, K4 17, K5 13, K6 6, K7 13. CGD-AC147–AC150 thêm ngày 12/11/2026, đặt trong bảng của nhóm quy tắc tương ứng; CGD-AC151–AC163 thêm khi bổ sung vai trò HDV, ở A.12.

---

## Phụ lục B · Truy vết quyết định → quy tắc

| Quyết định | Ý | Quy tắc | AC |
|---|---|---|---|
| U1 | Ctrl+K tìm mọi mã và tên | U1.01–U1.08 | AC16–AC27, AC149 |
| Người dùng chốt 12/11/2026 | Ctrl+K tìm khách theo email, điện thoại cho người có `KD03.xem` | U1.02, U1.03, U1.05 | AC147, AC148 |
| U2 | Chỉ hỏi khi không hoàn tác được, gửi ra ngoài, chạm tiền | U2.01, U2.04, U2.05 | AC28, AC35 |
| U2 | Còn lại làm ngay kèm toast Hoàn tác | U2.02, U2.03, U2.06–U2.09 | AC29–AC34, AC36–AC39 |
| U3 | Nhớ bộ lọc và dạng xem theo người dùng, cả sau đăng xuất | U3.01–U3.04, U3.07 | AC40–AC42, AC45, AC46 |
| Kỹ thuật | Trạng thái lọc lưu trên URL | U3.05, U3.06 | AC43, AC44, AC47 |
| U4 | Việc của tôi, thẻ đếm mở bộ lọc có sẵn | U4.01 | AC48 |
| U5 | Không quyền thì ẩn nút; chỉ đọc dạng chữ | U5.01–U5.05 | AC49–AC54 |
| U6 | Tự đơn giản hóa, ghi GHI-CHU | U6.01, U6.02 | — (quy tắc quy trình) |
| K1 | Thanh công cụ cố định | K1.02, K1.03 | AC55 |
| K1 | Sắp mọi cột, Shift sắp nhiều cột | K1.05 | AC56–AC58 |
| K1 | Ẩn/hiện, đổi thứ tự, đổi rộng cột | K1.06, K1.07 | AC59–AC61 |
| K1 | Ghim cột mã | K1.04 | AC55, AC59 |
| K1 | Lưu theo người dùng | K1.06, U3.01 | AC40, AC59, AC62 |
| K1 | Header và cột đầu dính | K1.03 | AC55 |
| K1 | Mật độ mặc định Gọn | K1.08 | AC62 |
| K1 | Phân trang máy chủ 50 dòng | K1.09 | AC63 |
| K1 | Menu ⋯ trên dòng | K1.11 | AC65 |
| K1 | “Chọn tất cả n dòng khớp” | K1.12–K1.14 | AC66–AC69 |
| K1 | Tìm từ 2 ký tự, chờ 300 ms | K1.15 | AC70–AC72 |
| K1 | Trạng thái rỗng có Xóa bộ lọc | K1.18 | AC76, AC77 |
| K1 | Xuất đúng các cột đang hiện | K1.21 | AC81–AC84 |
| K1 | Phím tắt `/`, ↑↓, Enter, Ctrl+S, Esc | K1.22 | AC85–AC87 |
| K1 | Trạng thái tải, lỗi tải, dòng ra khỏi bộ lọc | K1.16, K1.17, K1.19 | AC73–AC75, AC78, AC79 |
| K2 | Bộ lọc dạng nút theo kiểu dữ liệu, không toán tử | K2.01–K2.03, K2.05 | AC89–AC94 |
| K2 | Bộ lọc RSD xếp đầu, cột khác vẫn lọc được | K2.04 | AC95 |
| K2 | Chip Của tôi bật sẵn theo vai trò | K2.06 | AC96–AC98 |
| K2 | Xóa bộ lọc | K2.07 | AC99 |
| K3 | Dạng xem đã lưu riêng từng người | K3.02–K3.08 | AC100, AC101, AC103–AC107 |
| K3 | Chip của RSD là dạng xem có sẵn | K3.01 | AC102 |
| BOI-CANH | Dạng xem Bảng, Kanban, Lịch; Kanban chỉ xem | K3.09 | AC108–AC110 |
| K4 | “← Danh sách” | K4.03 | AC111, AC112 |
| K4 | Mã + trạng thái, một nút chính, Lịch sử trong ⋯ | K4.02, K4.04, K4.05 | AC113, AC114 |
| K4 | Form luôn sửa được với người có quyền | K4.06 | AC51, AC115 |
| K4 | Thanh lưu dính đáy chỉ hiện khi có thay đổi | K4.07, K4.08, K4.13 | AC116, AC117, AC127 |
| K4 | Một mẫu hộp thoại chặn rời trang | K4.09 | AC118–AC121 |
| Q8 | Sửa đồng thời: chỉ Tải lại | K4.10, K1.20 | AC80, AC122–AC124 |
| K4 | Lỗi kiểm tra tại trường | K4.11 | AC125, AC126 |
| K5 | Trang cho đối tượng nhiều tab | K5.01, K5.02 | — (K4) |
| K5 | Bảng trượt 3 cỡ 640 / 880 / 1100 | K5.03, K5.04 | AC128–AC130 |
| K5 | Hộp thoại cho ≤ 3 trường | K5.05 | AC131, AC132 |
| K5 | QT05 sửa tại dòng | K5.06 | AC133, AC134 |
| Q19 | Tệp đính kèm 20 MB, 10 tệp, PDF/JPG/PNG/XLSX/DOCX | K5.07, K5.08 | AC135–AC140 |
| K6 | Màu theo ý nghĩa; Đã hủy xám; đỏ chỉ cho việc phải xử lý | K6.01–K6.04 | AC141–AC144 |
| K6 | Mọi công tắc “Đang dùng / Ngừng dùng” | K6.05 | AC145 |
| K6 | Thống nhất chữ trên nút | K6.06, K6.07 | AC146 |
| BOI-CANH | Nền tảng và định dạng (1280 × 800, tiếng Việt, ngày, múi giờ, tiền) | K0.01–K0.04 | AC10–AC12, AC15 |
| Nhiệm vụ | Khung ứng dụng (menu, thanh trên, trang mặc định, đường dẫn sâu) | K0.05–K0.11 | AC01–AC09, AC13, AC14 |
| Q24; RSD CH01 R10 | Phiên hết hạn khi còn thay đổi chưa lưu không làm mất dữ liệu | K0.08, K0.11, K4.09 | AC150 |
| Người dùng chốt 12/11/2026 (Vai trò HDV; BOI-CANH Nền tảng) | Màn của phòng HDV thiết kế cho điện thoại; trang mặc định của phòng HDV là Tour của tôi | K7.01–K7.13, K0.05, K0.07, K0.09 | AC151–AC163 |
