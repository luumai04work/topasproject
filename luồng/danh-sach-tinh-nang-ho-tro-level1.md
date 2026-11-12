# Danh sách tính năng hỗ trợ — Phần mềm cho doanh nghiệp lữ hành Inbound & Tour Customized (V2)

## Nguồn và quy ước

- Nguồn: `luồng/level 1/luonghotro.md` (bản cập nhật mới nhất) gồm 4 luồng hỗ trợ HT01, HT03, HT04, HT05. HT02 (Dịch vụ và Bảng giá) đã gộp vào HT01 — Quản lý Hồ sơ Nhà cung cấp; mã HT02 không còn dùng. Thay thế `danh-sach-tinh-nang-ho-tro-level1-v1.md` (chỉ có HT03–HT05).
- Vai trò lấy từ sơ đồ: **Kinh doanh**, **Điều hành**, **Kế toán**. Không thêm vai trò đăng nhập mới.
- Mã tính năng `CNHTxx.yy` **giữ nguyên theo cột "Tính năng tương ứng"** trong bảng mô tả nguồn. Mã bước giữ nguyên.
- Nút điều kiện và nút liên kết sang nghiệp vụ khác không tạo tính năng hỗ trợ (đúng như nguồn ghi "Điều hướng/điều kiện, không tính thành tính năng riêng"). Nút liên kết được đối chiếu với *tính năng tiếp nhận* trong danh sách hỗ trợ này hoặc danh sách chính `danh-sach-tinh-nang-level1-v2.md` (bảng cuối tài liệu).
- Loại: *Thao tác người dùng* / *Xử lý tự động* / *Kết hợp*. Các tính năng hỗ trợ là cấu hình danh mục/mẫu/bảng giá; phần hệ thống tự áp dụng (tính giá, tự tạo checklist, tự soạn email, xuất tài liệu) thuộc tính năng nghiệp vụ chính.

**Tổng số: 13 tính năng hỗ trợ** (4 luồng: HT01 6, HT03 2, HT04 2, HT05 3), tách riêng với 53 tính năng chính.

---

## HT01 — Quản lý Hồ sơ Nhà cung cấp

Hồ sơ NCC chứa toàn bộ thông tin về NCC: thông tin chung, hợp đồng, chính sách đổi hủy, chính sách trẻ em, thông tin và điều khoản thanh toán, dịch vụ (bao gồm, không bao gồm) và bảng giá. Luồng HT02 cũ đã gộp vào đây.

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| CNHT01.01 | Quản lý danh sách nhà cung cấp | Điều hành | Thao tác người dùng | HT01.01 | Xem, tìm kiếm, lọc (tên, loại dịch vụ, cho phép sử dụng, tình trạng hợp đồng) và mở hồ sơ NCC; danh mục dùng chung cho dịch vụ, đặt dịch vụ và thanh toán. Từ danh sách chọn tạo mới hoặc cập nhật. |
| CNHT01.02 | Tạo và cập nhật thông tin chung nhà cung cấp | Điều hành | Thao tác người dùng | HT01.02 | Khai báo tên, loại dịch vụ cung cấp, địa chỉ, đầu mối liên hệ, email đặt dịch vụ và bật/tắt cho phép sử dụng NCC (không sinh thêm trạng thái, không có bước duyệt NCC). |
| CNHT01.03 | Cập nhật thông tin thanh toán và điều khoản thanh toán | Kế toán | Thao tác người dùng | HT01.04 | Lưu thông tin nhận thanh toán của NCC (thụ hưởng, ngân hàng, tài khoản, thông tin hóa đơn) và điều khoản thanh toán của từng hợp đồng (đặt cọc, các đợt, mốc và số ngày tính hạn, phương thức). Dữ liệu được tham chiếu khi lập lịch trả theo dịch vụ, không tạo khoản phải trả ngay tại hồ sơ NCC. |
| CNHT01.04 | Quản lý hợp đồng và chính sách nhà cung cấp | Điều hành | Thao tác người dùng | HT01.03 | Thêm/cập nhật hợp đồng: số hợp đồng, ngày ký, kỳ hiệu lực, loại tiền, file đính kèm. Trên cùng hợp đồng khai báo mùa giá (tên mùa, một hoặc nhiều khoảng ngày, tách ngày thường/cuối tuần tùy chọn; hệ thống chặn mùa chồng lấn và cảnh báo ngày chưa thuộc mùa nào; mặc định có mùa "Cả kỳ hợp đồng"), chính sách đổi hủy (các mốc ngày trước ngày sử dụng và phí, no-show, điều kiện đổi ngày/đổi tên/giảm số lượng) và chính sách trẻ em (nhóm tuổi, điều kiện chung giường/thêm giường, số trẻ miễn phí). Chính sách khai báo theo từng hợp đồng; hệ thống tính chỉ báo Còn hiệu lực/Sắp hết hạn/Hết hạn, không có bước duyệt. Giảm thao tác: hợp đồng mới được điền sẵn chính sách và điều khoản từ hợp đồng gần nhất; **Gia hạn hợp đồng** sao chép mùa giá (dời ngày sang kỳ mới), chính sách, điều khoản thanh toán và toàn bộ dòng giá sang kỳ mới, có thể áp tỷ lệ điều chỉnh giá. |
| CNHT01.05 | Thiết lập dịch vụ và bảng giá theo hợp đồng | Điều hành | Thao tác người dùng | HT01.05 | Tạo/cập nhật dịch vụ của NCC, đơn vị tính, dịch vụ bao gồm và dịch vụ không bao gồm. Bảng giá gắn với hợp đồng theo: khoảng số khách và căn cứ tính (khách/phòng/đoàn/đơn vị dịch vụ); giá hoặc phụ thu phòng đơn; giá trẻ em theo nhóm tuổi trong chính sách của hợp đồng (giá cố định hoặc tỷ lệ); mùa giá chọn từ danh sách mùa của hợp đồng (không nhập lại ngày; giá ngày thường/cuối tuần nếu mùa có tách); phụ thu lễ Tết; hạng phòng; loại tiền của từng giá và khoản phụ thu. Trong cùng bước khai báo điều kiện áp dụng, quy tắc ưu tiên/thay thế hoặc cộng dồn và giá cơ sở cho phụ thu theo tỷ lệ. Giá danh mục là giá tham chiếu, không xác nhận còn chỗ; sửa bảng giá không tự thay đổi báo giá hoặc Booking đã lưu. Giảm thao tác: nhập ngay trong hồ sơ NCC (bảng trượt, không rời màn); bảng giá nhập trên lưới, dán từ Excel, nhân bản dòng; giá trị mặc định lấy từ hợp đồng; nhân bản dịch vụ kèm bảng giá; bao gồm/không bao gồm chọn từ gợi ý hoặc sao chép từ dịch vụ khác. |
| CNHT01.06 | Tra cứu dịch vụ và bảng giá | Điều hành | Thao tác người dùng | HT01.06 | Xem, tìm kiếm và lọc dịch vụ của mọi NCC theo dịch vụ, NCC, hợp đồng, thời gian áp dụng, khoảng số khách, hạng phòng và loại tiền; Kinh doanh được xem. Khi nhập ngày sử dụng và số khách, hệ thống hiện ngay giá áp dụng kèm tên mùa theo hợp đồng hiệu lực, mùa giá, ngày thường/cuối tuần, khoảng số khách và phụ thu. Chỉ tra cứu, chi tiết mở trong bảng trượt; Điều hành chuyển sang sửa trong hồ sơ NCC bằng một thao tác. |

### Ánh xạ mã cũ

| Mã cũ | Mã mới | Ghi chú |
| --- | --- | --- |
| CNHT02.01 (HT02.01) | CNHT01.06 (HT01.06) | Thành màn tra cứu, không còn là nơi tạo mới |
| CNHT02.02 (HT02.02) | CNHT01.05 (HT01.05) | Bổ sung bao gồm/không bao gồm, dòng giá gắn hợp đồng |
| HT01.03 (bước) | HT01.04 (bước) | Bước thanh toán đổi số; mã CNHT01.03 giữ nguyên |
| HT02.03 (liên kết) | HT01.07 (liên kết) | Gộp với liên kết HT01.04 cũ |

## HT03 — Quản lý Danh mục Nhân sự

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| CNHT03.01 | Quản lý danh sách nhân sự | Điều hành | Thao tác người dùng | HT03.01 | Xem, tìm kiếm và lọc nhân sự có thể được phân công phụ trách hồ sơ, thực hiện công việc hoặc phục vụ Tour; từ danh sách chọn tạo mới hoặc cập nhật. |
| CNHT03.02 | Tạo và cập nhật danh mục nhân sự | Điều hành | Thao tác người dùng | HT03.02 | Lưu thông tin nhân sự, liên hệ, nhóm công việc và việc cho phép nhận phân công. Là danh mục nghiệp vụ, không tạo tài khoản/vai trò đăng nhập. |

## HT04 — Quản lý Mẫu Checklist điều hành

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| CNHT04.01 | Quản lý danh sách mẫu checklist | Điều hành | Thao tác người dùng | HT04.01 | Xem, tìm kiếm và chọn mẫu checklist điều hành để cập nhật; từ danh sách chọn tạo mới. |
| CNHT04.02 | Thiết lập mẫu checklist theo dịch vụ | Điều hành | Thao tác người dùng | HT04.02 | Khai báo danh sách công việc, thứ tự và phạm vi áp dụng theo loại dịch vụ/Tour. Mẫu được hệ thống dùng để tự tạo checklist khi tạo hồ sơ điều hành (TN05.02), không tạo tay cho từng Tour. |

## HT05 — Quản lý Mẫu Tài liệu và Email

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| CNHT05.01 | Quản lý danh sách mẫu tài liệu và email | Kinh doanh | Thao tác người dùng | HT05.01 | Xem, tìm kiếm và chọn mẫu báo giá, Pax list, Rooming list, Survey, email remarketing hoặc email đặt dịch vụ theo phạm vi công việc; chọn nhóm mẫu để cấu hình. |
| CNHT05.02 | Thiết lập mẫu báo giá, Survey và email chăm sóc | Kinh doanh | Thao tác người dùng | HT05.03 | Tạo/cập nhật bố cục hoặc nội dung mẫu, các trường dữ liệu tự điền và thiết lập cho phép sử dụng. Là mẫu dùng chung, khác với việc gửi cho từng yêu cầu hay chiến dịch. |
| CNHT05.03 | Thiết lập mẫu hồ sơ Tour và email đặt dịch vụ | Điều hành | Thao tác người dùng | HT05.04 | Tạo/cập nhật mẫu Pax list, Rooming list và email đặt dịch vụ cùng các trường tự điền từ Tour, khách, dịch vụ và NCC. Hệ thống dùng mẫu email để soạn sẵn nội dung đặt dịch vụ ở SYS06. |

---

## Bước không tạo tính năng

| Mã bước | Loại nút | Ghi chú |
| --- | --- | --- |
| HT05.02 | Điều kiện | Chọn nhóm mẫu cần cấu hình: Báo giá, Survey, chăm sóc → HT05.03; Hồ sơ Tour, đặt dịch vụ → HT05.04. |
| HT01.07 | Liên kết | Xem bảng đối chiếu liên kết bên dưới. |
| HT03.03 | Liên kết | Xem bảng đối chiếu liên kết bên dưới. |
| HT04.03 | Liên kết | Xem bảng đối chiếu liên kết bên dưới. |
| HT05.05 | Liên kết | Xem bảng đối chiếu liên kết bên dưới. |

## Đối chiếu liên kết với tính năng tiếp nhận

| Bước liên kết | Dữ liệu hỗ trợ cung cấp | Tính năng tiếp nhận |
| --- | --- | --- |
| HT01.07 | Dịch vụ cho Tour mẫu | TN01.03 (SYS01.05) |
|  | Giá vốn theo hợp đồng hiệu lực, nhóm tuổi trẻ em, phụ thu, quy đổi tiền tệ khi lập báo giá | TN03.06 (SYS03.09) |
|  | Dịch vụ bao gồm/không bao gồm cho báo giá (đề xuất) | TN03.07 (SYS03.10) |
|  | NCC, email đặt dịch vụ, dịch vụ, ngày sử dụng, số khách, yêu cầu phòng để soạn email đặt | TN06.02 (SYS06.03) |
|  | Giá tham chiếu để so với giá NCC xác nhận | TN06.03 (SYS06.04) |
|  | Chính sách đổi hủy của hợp đồng để gợi ý phí hủy | TN06.04 (SYS06.06) |
|  | Thông tin nhận thanh toán và điều khoản thanh toán của hợp đồng khi lập lịch trả NCC | TN06.05 (SYS06.07) |
|  | NCC và hợp đồng cho đối chiếu công nợ | TN09.02 (SYS09.05) |
| HT03.03 | Danh sách chọn người phụ trách hồ sơ, người thực hiện công việc, nhân sự phục vụ Tour | TN05.03 (SYS05.04), TN05.04 (SYS05.05), TN07.03 (SYS07.03) |
| HT04.03 | Mẫu checklist theo dịch vụ để tự tạo công việc | TN05.02 (SYS05.03) |
| HT05.05 | Mẫu báo giá | TN03.07 (SYS03.10) |
|  | Mẫu email đặt dịch vụ | TN06.02 (SYS06.03) |
|  | Mẫu Pax list, Rooming list | TN07.04 (SYS07.04) |
|  | Mẫu Survey, email chăm sóc/remarketing | TN10.02 (SYS10.04), TN10.04 (SYS10.06, SYS10.07) |

## Đối chiếu với đề xuất bổ sung trong danh sách chính

| Đề xuất trong danh sách chính | Kết quả |
| --- | --- |
| DX02 Danh mục nhà cung cấp và dịch vụ, giá vốn NCC | Đã có nguồn: CNHT01.01–CNHT01.06 (hồ sơ NCC gồm hợp đồng, chính sách, dịch vụ và bảng giá) |
| DX03 Mẫu email đặt dịch vụ | Đã có nguồn: CNHT05.03 |
| DX05 Danh mục nhân viên nội bộ và nhân sự phục vụ Tour | Đã có nguồn: CNHT03.01, CNHT03.02 |
| DX07 Mẫu tài liệu xuất: báo giá PDF/Link, Pax list, Rooming list | Đã có nguồn: CNHT05.02 (báo giá), CNHT05.03 (Pax list, Rooming list) |
| DX04 Quy tắc sinh Tour Code và mẫu checklist công việc | Một phần: mẫu checklist có ở CNHT04.02; **quy tắc sinh Tour Code chưa có** |
| DX01 Quản lý danh sách Booking | Chưa có |
| DX06 Cấu hình tiêu chí hạng khách hàng | Chưa có |
