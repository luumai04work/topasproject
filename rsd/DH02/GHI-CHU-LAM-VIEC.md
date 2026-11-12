# Ghi chú làm việc · RSD DH02 v1.3

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (11/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | DH02 · Danh sách nhà cung cấp; chưa có RSD nên viết mới; bàn giao MD + PNG trong ZIP như DH07, DH08 | Toàn bộ tài liệu |
| Q1 | Ngừng sử dụng NCC đang được dùng | Cảnh báo (liệt kê nơi đang dùng) rồi cho ngừng; dữ liệu đã có giữ nguyên; NCC chỉ ẩn khi chọn mới | L2.2, L2.4, R04, R05, W07, W11, AC19–AC21 |
| Q2 | Ngưỡng hợp đồng sắp hết hạn | 30 ngày, Quản trị cấu hình | R01, R08, R10, AC05–AC07 |
| Q3 | Nghiệp vụ bổ sung | Nhập NCC từ Excel; bật/tắt hàng loạt; nhắc hợp đồng sắp hết hạn. Không làm xuất Excel | L2.4, L3.1, L4.1, R06–R08 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Hợp đồng kế tiếp xóa cảnh báo.** Hợp đồng sắp hết hạn mà đã có hợp đồng nối tiếp (bắt đầu không muộn hơn ngày kết thúc + 1) thì là Còn hiệu lực, không vào Cần xử lý, không bị nhắc (R01).
2. **Cần xử lý gồm cả Hết hạn.** Nguồn chỉ ghi “sắp hết hạn, chưa có hợp đồng”; bản này hiểu “chưa có hợp đồng còn hiệu lực” (theo mô tả phần đầu DH03), nên gồm cả Hết hạn. Chỉ NCC Đang dùng mới vào Cần xử lý.
3. **Hợp đồng chỉ có kỳ trong tương lai** vẫn tính là Hết hạn (hoặc Chưa có hợp đồng nếu không có hợp đồng cũ), kèm ghi chú “HĐ kế tiếp từ …”, vì hôm nay không có giá áp dụng.
4. **Thông tin thanh toán đủ** = tên thụ hưởng, ngân hàng, số tài khoản. Thông tin xuất hóa đơn không bắt buộc (R02).
5. **Thêm bộ lọc Thanh toán** (Đủ, Thiếu) để Kế toán tìm NCC cần bổ sung; nguồn không có bộ lọc này.
6. **Chip** Đang dùng / Ngừng sử dụng / Tất cả thay cho bộ lọc “cho phép sử dụng”; Cần xử lý là chip riêng sau vạch ngăn. Mặc định Đang dùng.
7. **Tab đích khi mở hồ sơ:** Điều hành vào DH03.2 khi hợp đồng có vấn đề, còn lại DH03.1; Kế toán vào DH03.1 phần thanh toán (R09).
8. **Kinh doanh không có mục DH02** (danh sách màn chỉ ghi Điều hành, Kế toán); tra cứu qua DH04.
9. **Không có thao tác xóa NCC**; NCC không còn hợp tác thì Ngừng sử dụng.
10. **Nơi đang dùng** gồm hồ sơ Tour chưa đóng có hạng mục chưa hủy từ hôm nay trở đi, yêu cầu Tour đang xử lý chưa có Booking, Tour mẫu đang cho phép (R05). Booking đã có hồ sơ được tính qua hồ sơ Tour.
11. **Hạng mục chưa gửi của NCC ngừng sử dụng** được gắn chỉ báo “NCC ngừng sử dụng”, Điều hành phụ trách nhận thông báo; lần đặt đã gửi không bị đổi.
12. **Hoàn tác trong 10 giây** cho bật, tắt tại chỗ và hàng loạt. Bật lại không hỏi; ngừng hàng loạt luôn hỏi.
13. **Dòng vừa đổi giữ tại chỗ** (mờ đi) cho tới khi đổi bộ lọc, trang hoặc tải lại, để Hoàn tác và tránh nhảy dòng.
14. **Nhập Excel chỉ tạo NCC mới**, khóa trùng là tên chuẩn hóa (bỏ dấu, chữ thường, gộp khoảng trắng); không cập nhật NCC đã có; không nhập hợp đồng, dịch vụ, bảng giá, thanh toán. Thiếu email chỉ cảnh báo; trùng email chỉ cảnh báo. Giới hạn `.xlsx`, 5 MB, 1.000 dòng; một giao dịch; lưu tệp 12 tháng.
15. **NCC có thể có nhiều loại dịch vụ** (cột Excel cách nhau bằng `;`, cột trên bảng hiện tối đa hai loại và “+n”). Cần DH03.1 xác nhận.
16. **Nhắc hợp đồng:** 08:00, hai mốc (vào ngưỡng, hết hạn), mỗi hợp đồng mỗi mốc một lần, trên 5 NCC cùng mốc thì gộp; chỉ nhóm Điều hành nhận; bấm mở DH03.2.
17. **Số dịch vụ** là số dịch vụ đang cho phép sử dụng của NCC.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (DH02).** Ghi thêm: nhập NCC từ Excel, bật/tắt hàng loạt, nhắc hợp đồng sắp hết hạn, bộ lọc Thanh toán; ngưỡng sắp hết hạn 30 ngày cấu hình được (bỏ “chờ đặc tả”). Vòng đời Nhà cung cấp: bỏ chữ “(đề xuất)” ở câu NCC đã tắt không hiện khi chọn mới; thêm cảnh báo nơi đang dùng khi tắt.
- **DH03.** Phần đầu dùng cùng R04 (cảnh báo nơi đang dùng, Hoàn tác) và R01 (tình trạng, hợp đồng kế tiếp). Nút Về danh sách nhà cung cấp. DH03.1 xác nhận NCC nhiều loại dịch vụ; kiểm tra trùng tên khi tạo dùng cùng tên chuẩn hóa của R07. Lịch sử cho phép sử dụng hiện ở DH03.
- **DH08.3 (RSD DH08).** Chỉ báo “NCC ngừng sử dụng” trên hạng mục Cần đặt, Cần đặt lại; danh sách chọn NCC ẩn NCC ngừng sử dụng; nhận thông báo khi NCC của hạng mục chưa gửi bị ngừng.
- **KD02.2, KD06.2, DH04.** Ẩn NCC và dịch vụ của NCC ngừng sử dụng khi chọn mới; dữ liệu đã có giữ nguyên.
- **QT05.** Loại dịch vụ dùng làm danh mục kiểm tra khi nhập Excel.
- **Quản trị.** Cấu hình ngưỡng hợp đồng sắp hết hạn và giờ chạy nhắc. Phân quyền QT02 thêm thao tác Bật/tắt cho phép sử dụng NCC và Nhập NCC từ Excel.
- **Trung tâm thông báo.** Hai loại thông báo của R08 và thông báo NCC ngừng sử dụng của R04.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy chưa có Python nên chưa chạy `check-rsd.py`): 36 tham chiếu ảnh, 18 mã W, không cảnh báo. Mọi bước ở mục 3 có mã W; mọi mục con có ngoại lệ.
- Đã xem trực quan W01, W03, W07, W08, W09, W10, W11, W12, W13a, W14, W15, W16. Chưa mở lại W02, W04, W05, W06, W13, W17 sau lần chụp cuối (cùng khung với các ảnh đã xem).
- Đã sửa: nút Bỏ chọn mất chữ trên thanh hàng loạt (W10, W11); chữ xuống dòng trong bảng (thêm nowrap); bảng xem trước nhập Excel bị bóp cột (W14 mở rộng 1.000 px); bỏ nhãn Ngừng sử dụng lặp với cột Cho phép trong chế độ chỉ xem (W16).
- ZIP `rsd/DH02-RSD-v1.0.zip` (RSD và thư mục `wireframes/`, 18 PNG và `index.html`, đường dẫn dùng `/`) đã được giải nén thử và chạy lại `check-rsd`: mọi ảnh mở được.
- `rsd/BOI-CANH-DU-AN.md` đã thêm thuật ngữ, chủ sở hữu dữ liệu NCC và hai nguyên tắc đã chốt; bản cũ sao lưu ở `BOI-CANH-DU-AN.md.bak-20261111-dh02`.
- Số liệu đã đối chiếu: Đang dùng 42 + Ngừng 6 = Tất cả 48; Cần xử lý 7 = 3 Sắp hết hạn + 2 Chưa có hợp đồng + 1 Hết hạn + 1 chỉ thiếu thanh toán (Cơm Niêu vừa chưa có hợp đồng vừa thiếu thanh toán); sau ngừng Bhaya 41/7/48, Cần xử lý 6; bật lại Ninh Bình 43/5/48, Cần xử lý 7; hàng loạt 39/9/48, Cần xử lý 4; nhập Excel 24 = 21 + 3, cảnh báo 3, “… 15 dòng Sẽ nhập khác” = 21 − 6; số ngày còn lại tính từ 11/11/2026.

## Thống nhất 4 RSD DH01–DH04 (11/11/2026)

Sau khi rà chồng chéo giữa bốn RSD, các điểm dưới đã được sửa thẳng trong RSD (không đổi số phiên bản). Bản trước khi sửa và ZIP cũ ở `rsd/_backup-20261111-truoc-thong-nhat-DH01-DH04/`.

| # | Điểm | Chốt | Nơi sửa |
|---|---|---|---|
| 1 | Kỳ hiệu lực chồng lấn | Chặn (theo Q2 của DH03); bỏ câu “chỉ cảnh báo” và cách chọn khi chồng lấn | DH02 R01; DH04 R02 |
| 2 | Hợp đồng hiện hành và hợp đồng mặc định khi xem giá | Giữ định nghĩa **hợp đồng hiện hành** của DH02 R01 (hết hạn thì lấy hợp đồng hết hạn gần nhất). Thêm khái niệm **hợp đồng để xem giá**: chứa hôm nay → bắt đầu sớm nhất sau hôm nay → hợp đồng hiện hành. DH03.3 (ô chọn mặc định, số trên tab) và DH04 (cột Hợp đồng, Giá từ, bộ lọc Loại tiền) dùng chung. Việc 1 ở DH03 R03 đổi điều kiện thành “không có hợp đồng chứa hôm nay”. **Do người viết tự chọn, cần xác nhận** | DH02 R01; DH03 2.2, 2.4, L5.1, R03; DH04 2.2, L3.1, R02, R05, R07 |
| 3 | Nhãn “Hợp đồng hết hạn” ở DH04 khác nghĩa “Hết hạn” của DH02 | Đổi thành **Không còn hợp đồng**, ghi rõ khác biệt | DH04 2.4; W10 |
| 4 | Sắp hết hạn ở DH04 | Theo R01 của DH02: 0 ≤ n ≤ N và chưa có hợp đồng kế tiếp; có hợp đồng kế tiếp thì ghi “HĐ kế tiếp từ dd/mm”. Ví dụ Hải Vân (HVT-2027 nối tiếp) sửa lại | DH04 2.2, 2.4, AC02; W01, W02, W04, W10… (dựng lại 15 ảnh) |
| 5 | DH05 chỉ xem mở từ DH04 đặc tả hai lần | Chỉ DH04 mục 2.5 đặc tả; DH03 L6.1, L7.1, 2.5 dẫn sang | DH03 |
| 6 | Hai công thức Giá từ | Một công thức ở DH03 R14: giá nhỏ nhất của **dòng chính** (căn cứ tính trùng căn cứ mặc định theo đơn vị tính), mọi mùa, mọi loại ngày; DH04 R04, R05 dẫn về | DH03 R14, L5.1; DH04 R04, R05 |
| 7 | Tính theo đêm | Cờ “theo đêm” của đơn vị tính ở QT05 (DH03 R14, R21); DH04 R03 dẫn về | DH03 R14, R21; DH04 R03 |
| 8 | Địa điểm NCC | Chọn từ **danh mục địa điểm (điểm đến, có Toàn quốc)** do Quản trị quản lý, thay chữ tự do. Dùng điểm đến (Hạ Long, Sa Pa, Hội An…) thay cho tỉnh, thành để khớp dữ liệu trên hình. **Cần xác nhận** | DH02 R07, R10; DH03 5.2, R21, W01 (gợi ý ô); DH04 2.3, R11 |
| 9 | Nút hộp thoại ngừng sử dụng NCC | “Giữ đang dùng” ở cả DH02 và DH03 | DH02 L2.2, AC19, mục 3.2 (8.3 trước v1.1); W07, W11 |
| 10 | Chủ sở hữu danh mục Loại dịch vụ (QT05) | Quản trị hệ thống, Điều hành | DH01 R11; DH03 R21; DH04 R11 |
| 11 | Banner Về Tra cứu dịch vụ | Nằm trong bảng trượt DH05 chế độ sửa (khớp W08 của DH04) | DH03 1.2 |
| 12 | Nguồn lịch sử cho phép sử dụng | Thêm hàng loạt, Hoàn tác, nhập NCC từ Excel ở DH02 | DH03 R20 |
| 13 | Sự kiện lưu email ở DH03 | Thiếu email không thuộc Cần xử lý của DH02 | DH03 R03 |
| 14 | Ngưỡng Sắp hết hạn | Khai ở DH02 R10; DH03 R21, DH04 R11 ghi dẫn chiếu | DH03, DH04 |
| 15 | Mã NCC khi nhập Excel | DH02 R07 ghi cấp mã `NCC-NNNN` theo R19 của DH03 | DH02 R07 |

Kiểm tra sau khi sửa: DH03 dựng lại từ `wireframes-src/rsd-src.md` bằng `expand-md.js`; dựng lại ảnh DH02 (W07, W11), DH03 (48 ảnh), DH04 (15 ảnh); `check-rsd.js --final` đạt cho cả bốn RSD; đã xem W07 của DH02, W01 và W10 của DH04; đóng lại bốn ZIP và giải nén thử ZIP DH04.

## Cập nhật v1.1 (12/11/2026) · khung 6 mục

- Tệp mới `RSD-DH02-Danh-sach-nha-cung-cap-v1.1.md`, chuyển từ tệp md v1.0 hiện tại (có chỉnh sửa chưa đóng gói vào `DH02-RSD-v1.0.zip`). Giữ tệp md v1.0. Không đổi nghiệp vụ.
- Số mục mới: quy ước dùng chung là mục 2.6 (gộp 8.1 và 4.3 cũ); quy tắc R là mục 4 (mục 7 cũ); dữ liệu là mục 5 (4.1, 4.2 cũ → 5.1, 5.2; 8.7 cũ → 5.3); nghiệm thu là mục 6 (mục 5 cũ). Bỏ mục 6 Wireframe và 8 Đặc tả thao tác cũ; nội dung gộp vào bước luồng.
- `check-rsd.js --final`: 18 ảnh, 18 mã W, đạt; tập ảnh và mã L, E, R, AC khớp bản v1.0.

## Cập nhật v1.2 (12/11/2026) · sửa sau rà soát mâu thuẫn giữa các RSD

Tệp mới `RSD-DH02-Danh-sach-nha-cung-cap-v1.2.md`, đã xóa bản v1.1. Không thêm mã L, E, R, W, AC.

- **E4.9.** Sửa theo R07: email đặt dịch vụ sai định dạng thì bỏ qua dòng; trống thì nhập kèm cảnh báo (bản cũ ghi “thiếu email … thì bỏ qua” mâu thuẫn với chính câu sau).
- **R07.** Điện thoại 8–15 chữ số, cho phép dấu cách, `+`, `-`, `()`, cùng kiểm tra với DH03 mục 5.2.
- **R04, L2.2, W07, AC21.** Nêu tác động lên yêu cầu Tour đang dở: dòng dịch vụ có nhãn ngừng sử dụng, Tính giá ở KD06 khóa tới khi đổi dịch vụ (RSD KD06 R10). Nơi ẩn khi chọn mới thêm DH08.2 (thêm dịch vụ của hồ sơ Tour).
- **1.2.** DH04 có liên kết Mở danh sách NCC (DH02) ở bảng rỗng (RSD DH04 E1.4); bỏ câu “Không liên kết trực tiếp”.
- **Người nhận thông báo nhóm Điều hành (1.4, E3.6, R08, R10).** Theo RSD DH06 R03: nhân sự nhóm Điều hành, Đang nhận phân công, tài khoản liên kết đang hoạt động.
- **Nhãn hợp đồng kế tiếp (2.2, L3.1, R01, AC06).** “HĐ kế tiếp từ dd/mm”, khớp DH03 R01 và DH04.
- **Nguồn nghiệp vụ.** Dẫn RSD DH03 v1.2, DH04 v1.2, DH06 v1.2, DH07 v1.4, DH08 v2.4, KD06 v1.2.
- **Hình.** Sửa `screens-dh02.js` (nhãn dòng Mekong Eyes Cruise; khung thông tin W07 thêm câu khóa Tính giá YC-2611-0088 và “dịch vụ … của hồ sơ Tour”); chạy `node build.js` dựng lại cả 18 ảnh (nội dung đổi ở W01, W03, W07, W08, W13, W13a, W14, W17); đã xem lại W07. Chạy `sync-md.js`, `indent-images.js`.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH02-Danh-sach-nha-cung-cap-v1.2.md --final`: 18 tham chiếu ảnh, 18 mã W, không lỗi.

## Cập nhật v1.3 (12/11/2026) · rà soát mâu thuẫn lần ba

Tệp mới `RSD-DH02-Danh-sach-nha-cung-cap-v1.3.md`, đã xóa bản v1.2 (đổi tên bằng `mv`). Không thêm mã mới, không dựng lại hình.

- **R04, L2.2 bước 3.** Hạng mục chưa gửi gồm cả Chờ Kinh doanh, khớp bảng áp dụng thay đổi của RSD DH08 (Cần đặt, Cần đặt lại, Chờ Kinh doanh).
- **R01 “hợp đồng kế tiếp”.** Giữ một nghĩa: hợp đồng nối liền (bắt đầu ≤ ngày kết thúc hợp đồng hiện hành + 1). Đây cũng là nghĩa RSD DH03 R01, 2.3 dùng. Trường hợp Hết hạn mà có hợp đồng bắt đầu sau hôm nay thì luôn có khoảng trống (nếu nối liền, hợp đồng đó đã chứa hôm nay), nên đổi nhãn thành **“HĐ mới từ dd/mm”** (người viết tự quyết, cần xác nhận). Không hình nào của DH02 có trường hợp này (Mekong Eyes Cruise là Còn hiệu lực với “HĐ kế tiếp từ 01/12”), nên không dựng lại hình. DH04 cột Hợp đồng đã dùng nhãn riêng “từ dd/mm/yyyy” cho hợp đồng bắt đầu sau hôm nay, không đổi.
- **R07, 5.1.** NCC nhập từ Excel được điền sẵn Ngôn ngữ giao dịch Tiếng Việt (RSD DH03 R22); tệp mẫu không thêm cột.
- **R10.** Chủ sở hữu danh mục Địa điểm, Loại dịch vụ là Điều hành (RSD QT05 mục 1.5).
- **Nguồn nghiệp vụ.** Dẫn DH03 v1.4, DH04 v1.3, DH06 v1.3, DH07 v1.7, DH08 v2.8, KD06 v1.5, QT05 v1.2.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-DH02-Danh-sach-nha-cung-cap-v1.3.md --final`: 18 tham chiếu ảnh, 18 mã W, không lỗi.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** 1.4, E3.6: người nhận nhắc hợp đồng có vai trò Điều hành (RSD DH06 v1.3 R03).
