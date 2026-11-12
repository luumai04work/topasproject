# Cách sử dụng mẫu DH08

Skill có hai mẫu cho cùng màn DH08 · Hồ sơ Tour.

| Mẫu | Định dạng | Dùng để tham chiếu |
|---|---|---|
| [v1.0](../assets/RSD-DH08-Ho-so-Tour-v1.0.docx) | DOCX, 8 mục, 78 ảnh | Độ sâu, văn phong, cách đối chiếu màn, bước và ảnh trong Word |
| [v2.2](../assets/RSD-DH08-Ho-so-Tour-v2.2.zip) | Markdown và 70 PNG, kèm `wireframes-src/` | Bản viết mới từ danh sách màn Level 1, chỉnh qua nhiều vòng phản hồi. **Chuẩn hiện hành** về cấu trúc 6 mục, cách viết bước có ảnh ngay dưới, độ sâu, nguyên tắc một thao tác một chỗ bấm, và luồng thay đổi chương trình |

v1.0 dùng khung 8 mục cũ; chỉ tham chiếu về văn phong và nội dung, không theo cấu trúc mục.

## v2.2 cho thấy gì

- **Cấu trúc:** mục 1 là phạm vi và quyền. Mục 2 gồm header, nút theo trạng thái, vòng đời, trạng thái con và quy ước giao diện dùng chung. Mục 3 là luồng L và ngoại lệ E theo tab; mỗi bước ghi mã W, chỗ bấm, thao tác, phản hồi, ảnh nằm ngay dưới và mỗi ảnh chỉ nhúng một lần. Mục 4 là quy tắc R, có danh sách ưu tiên trạng thái và bảng cấu hình. Mục 5 là dữ liệu và dữ liệu gửi ra ngoài. Mục 6 là AC.
- **Các vòng phản hồi và cách đã sửa:**
  1. **Tổng quan nhiều thông tin:** chỉ giữ khối Việc cần làm và Lịch trình; bỏ khối lặp header.
  2. **Wireframe cần tên:** tên và mục đích viết thành chữ dưới hình; không in lên ảnh.
  3. **Màn có nút trùng:** áp dụng nguyên tắc một thao tác một chỗ bấm, dùng ô chọn tại chỗ, và thanh hàng loạt thay cho nút trên dòng; sau đó rà toàn bộ màn.
  4. **NCC không đáp ứng:** thêm luồng Báo Kinh doanh.
  5. **Thay đổi lịch trình không chỉ do NCC:** dùng một luồng chung cho mọi thay đổi chương trình; Kinh doanh sửa ở màn của Kinh doanh.
  6. **Dịch vụ đã xác nhận bị ảnh hưởng:** chuyển Cần hủy hoặc Cần điều chỉnh, có email soạn sẵn.
  7. **Không thấy màn thông báo:** gom luồng vào mục riêng và chèn ảnh dưới bước.
  8. **Tài liệu dài, nội dung lặp (v2.2):** bỏ mục Wireframe riêng và bảng thao tác; gộp chỗ bấm, thao tác, phản hồi vào bước luồng; mỗi ảnh nhúng một lần; quy tắc R không kể lại luồng. Khoảng 25% số dòng được bớt mà nghiệp vụ không đổi.
- **Giới hạn khi tái dùng:** Tour Code, NCC, Booking, KT01, Pax list, quyền mở lại, tỷ giá là quy tắc riêng của DH08. Chỉ tái dùng cho màn mới khi nguồn hoặc người dùng xác nhận. Xem thêm [mẫu nghiệp vụ lữ hành](mau-nghiep-vu-lu-hanh.md).
- **Màn có nghiệp vụ khác:** giữ cấu trúc và mức độ chi tiết, nhưng dùng đối tượng, trường, quy tắc và hình của màn đó. Không cần Figma, không cần đúng số ảnh của mẫu.
