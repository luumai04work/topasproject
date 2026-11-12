# Mẫu nghiệp vụ lữ hành Inbound và Tour Customized

Các mẫu dưới đây rút từ RSD DH08 v2.0, nay là v2.2 (dự án TOPAS). Chỉ dùng khi `BOI-CANH-DU-AN.md` xác định dự án thuộc lĩnh vực lữ hành. Mẫu chỉ là **gợi ý thiết kế**: chỉ đưa vào RSD khi nguồn hoặc người dùng xác nhận, và ghi phần tự quyết vào nhật ký làm việc. Dự án lữ hành khác có thể dùng thuật ngữ, vai trò, mã màn khác: luôn theo bối cảnh của dự án đó.

Mẫu cho lĩnh vực khác đặt tên `mau-nghiep-vu-<lĩnh-vực>.md`, cùng cấu trúc: các đối tượng chính, vòng đời, luồng đặc thù, quy tắc dữ liệu, các điểm thường phải hỏi.

## Hồ sơ vận hành Tour

- **Vòng đời:** Mới tạo → Đang diễn ra → Đã kết thúc → (dấu mốc Đã quyết toán) → Đã đóng. Có nhánh Mở lại kèm lý do và phiên bản quyết toán mới.
- **Bắt đầu Tour:** mặc định chỉ cảnh báo các mục chưa sẵn sàng, không chặn.
- **Header:** mã Tour, Booking, khách, thời gian, ngôn ngữ phục vụ, người phụ trách, phải thu, phải trả. Thông tin này không lặp lại ở các tab.

## Đặt dịch vụ với NCC

- **Trạng thái hạng mục được tính theo thứ tự ưu tiên:** Đã hủy → Cần hủy → Cần điều chỉnh → Đã xác nhận → Xác nhận một phần → Chờ kết quả → Chờ Kinh doanh → Cần đặt lại → Cần đặt.
- **Email đặt:** mở thẳng ở bước kiểm tra email đã soạn sẵn (người nhận lấy từ hồ sơ NCC, mẫu theo loại dịch vụ). Đặt nhiều hạng mục thì gộp một email cho mỗi NCC; kết quả trả theo từng NCC.
- **Chưa có NCC:** chọn ngay trong bảng trượt từ danh sách gợi ý (giá tham chiếu, tỷ lệ xác nhận); email tự soạn sau khi chọn.
- **Ghi kết quả:**
  - Đã xác nhận: số lượng, mã xác nhận, giá NCC; chuyển sang công nợ phải trả.
  - Xác nhận một phần: đặt tiếp phần còn thiếu.
  - Không đáp ứng: đặt lại với NCC thay thế, có so sánh giá.
- **Không có NCC thay thế hoặc cần sửa lịch trình:** “Báo Kinh doanh” (yêu cầu điền sẵn ngữ cảnh, hạn phản hồi). Kinh doanh sửa lịch trình ở màn của Kinh doanh rồi gửi Điều hành.
- **Hủy:** email hủy soạn sẵn. Sau khi gửi, giữ nhãn hiện tại kèm chỉ báo Yêu cầu hủy đang chờ. Ghi kết quả gồm chấp nhận hoặc từ chối và phí hủy; phí hủy chuyển sang công nợ.
- **Booking bị hủy:** banner, chặn đặt mới, email hủy hàng loạt soạn sẵn theo NCC; hạng mục chưa gửi thì chuyển Đã hủy.
- **Chống gửi trùng:** mỗi lần gửi có mã gửi. Khi chưa rõ kết quả, tra lại trước khi cho gửi lại.

## Thay đổi chương trình sau khi đã tạo hồ sơ

Theo mẫu luồng ở `quy-tac-trien-khai.md` mục 6:

1. Kinh doanh sửa lịch trình rồi bấm Gửi Điều hành.
2. Hồ sơ hiện banner “Chương trình có thay đổi”.
3. Xem thay đổi: so sánh bản cũ với bản mới.
4. Áp dụng thay đổi cả phiên bản.
5. Dịch vụ chưa gửi được cập nhật trực tiếp. Dịch vụ đã gửi hoặc đã xác nhận chuyển **Cần hủy** hoặc **Cần điều chỉnh**, có email soạn sẵn.

## Khách đoàn Inbound

- **Trường bắt buộc:** họ, tên, giới tính, ngày sinh, quốc tịch, số hộ chiếu, ngày hết hạn.
- **Visa:** tình trạng do người dùng chọn (Không cần visa, Cần visa · chưa có, Đã có visa, Visa tại cửa khẩu). Hệ thống không tự suy ra quy định miễn thị thực.
- **Cảnh báo, không chặn:** hộ chiếu còn dưới N tháng (mặc định 6, tính từ ngày nhập cảnh); visa còn thiếu.
- **Chuyến bay:** chuyến chung của đoàn được điền sẵn; gán chuyến cho nhiều khách bằng thanh hàng loạt. Khi đổi chuyến bay, dịch vụ đón hoặc tiễn đã gửi chuyển Cần điều chỉnh.
- **Nhập Excel:** ghép khách theo số hộ chiếu đã chuẩn hóa; xem trước số dòng cập nhật, mới và lỗi; chỉ nhập dòng hợp lệ.
- **Yêu cầu riêng:**
  - Chọn bằng nhãn có nhóm áp dụng: Ăn uống áp dụng cho nhà hàng và du thuyền; Phòng áp dụng cho khách sạn và du thuyền.
  - Hệ thống tự tổng hợp thành một câu, chèn vào email đặt.
  - Khi yêu cầu đổi sau lần đặt, dịch vụ đã gửi chuyển Cần điều chỉnh.
- **Dữ liệu cá nhân:** danh sách che số hộ chiếu. Pax list gửi cho mỗi NCC chỉ gồm tập cột theo loại NCC.
- **Phân phòng:** theo từng đợt lưu trú; tự xếp theo gợi ý; sao chép cách xếp sang đợt khác; chặn khi vượt sức chứa. Rooming list chỉ tạo được khi đã xếp đủ khách.

## Nhân sự phục vụ

- **Ngôn ngữ:** ngôn ngữ phục vụ của đoàn lấy từ Booking. Danh mục nhân sự cần trường Ngôn ngữ.
- **Gợi ý:** sắp nhân sự theo thứ tự khớp ngôn ngữ, rồi còn trống lịch.
- **Kiểm tra:** trùng lịch thì chặn (hai khoảng chỉ chạm mốc thì không tính là trùng). Lệch ngôn ngữ thì cảnh báo và bắt buộc nhập lý do.

## Vận hành, chi phí, quyết toán

- **Nhật ký:** ô nhập ngay ở đầu tab.
- **Sự cố:** ghi kèm chi phí phát sinh trong một lần lưu.
- **Ghi công nợ:** Kế toán chọn nhiều khoản rồi mở màn công nợ với dữ liệu điền sẵn.
- **Quyết toán:**
  1. Điều hành nhập chi phí thực tế; giá NCC đã xác nhận được điền làm gợi ý.
  2. Kế toán đối chiếu AR/AP và ghi điều chỉnh.
  3. Đóng Tour.
- **Quy tắc tài chính:** P&L = doanh thu − chi phí + điều chỉnh ròng. Khoản đã liên kết công nợ chỉ tính một lần. Tỷ giá lấy theo nguồn đã chốt. Công nợ còn dư không chặn đóng Tour.

## Dạng xem gợi ý cho màn danh sách

Rút từ RSD KD05 v1.1 và DH07 v1.2 (TOPAS). Áp dụng theo `quy-tac-trien-khai.md` mục 12; mọi dạng đều không kéo thả trừ khi người dùng chốt khác.

| Danh sách | Kanban | Lịch, Dòng thời gian | Ghi chú |
|---|---|---|---|
| Yêu cầu Tour | Cột theo đúng trạng thái yêu cầu (ví dụ Đang xử lý, Đã có Booking, Đã hủy); cột kết thúc chỉ tải bản ghi cập nhật trong 90 ngày | Lịch tháng theo thời gian đi; yêu cầu chưa chốt ngày ở khay theo tháng dự kiến | Thẻ có báo giá mới nhất kèm kết quả và giá bán |
| Booking | Không, nếu chỉ có Hiệu lực và Đã hủy | Lịch theo ngày khởi hành (Kinh doanh) hoặc hạn thanh toán từng đợt (Kế toán) | — |
| Hồ sơ Tour | Cột theo vòng đời hồ sơ; Đã đóng thu gọn; giữ ô chọn người phụ trách trên thẻ | Dòng thời gian theo người phụ trách cho Điều hành (hàng Chưa có người phụ trách trên cùng); lịch tháng cho Kinh doanh, Kế toán | Thấy đoàn chồng ngày và đoàn sắp đi chưa có người |
| Đặt dịch vụ, hạng mục dịch vụ | Cột theo trạng thái đặt (Cần đặt, Chờ kết quả, Cần đặt lại, Đã xác nhận, Đã hủy) | Lịch theo ngày sử dụng dịch vụ | Hàng loạt (soạn email đặt) chỉ ở Bảng |
| Nhân sự phục vụ | Không | Dòng thời gian theo nhân sự, thanh là Tour được phân công | Cảnh báo trùng lịch |
| Công nợ | Không | Lịch theo hạn thu, hạn trả; màu theo còn hạn, đến hạn, quá hạn, đã tất toán | — |
| Danh mục (NCC, Tour mẫu, khách hàng) | Không | Không | Chỉ Bảng |
