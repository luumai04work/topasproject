// Nguồn duy nhất cho tên và mục đích của từng wireframe. [Vị trí (màn/tab), Tên màn, Màn này dùng để làm gì]
module.exports = {
  W01: ['DH07 · Điều hành', 'Danh sách hồ sơ Tour đang mở', 'Xem mọi hồ sơ chưa đóng theo ngày khởi hành, việc cần xử lý và người phụ trách; thấy ngay Booking tạo hồ sơ lỗi.'],
  W02: ['DH07 · Trung tâm thông báo', 'Thông báo hồ sơ mới cần giao', 'Điều hành nhận tin hồ sơ được tạo tự động khi Booking được lưu, hoặc sắp khởi hành mà chưa có người phụ trách; bấm để mở DH07 với bộ lọc phù hợp.'],
  W03: ['DH07 · Điều hành', 'Lọc hồ sơ chưa có người phụ trách', 'Gom các hồ sơ cần giao; ô Chọn người viền nét đứt, viền đỏ khi sắp khởi hành.'],
  W04: ['DH07 · Điều hành', 'Giao người phụ trách tại chỗ', 'Chọn người ngay trên dòng; danh sách xếp người khớp ngôn ngữ phục vụ trước, rồi người ít hồ sơ đang mở.'],
  W05: ['DH07 · Điều hành', 'Đã giao người phụ trách', 'Lưu ngay khi chọn; dòng ra khỏi bộ lọc và thông báo có liên kết Xem dòng.'],
  W06: ['DH07 · Điều hành', 'Chọn nhiều hồ sơ để giao hàng loạt', 'Thanh hàng loạt thay cho ô trên dòng; chọn người rồi Áp dụng một lần.'],
  W07: ['DH07 · Điều hành', 'Kết quả giao hàng loạt một phần', 'Báo số hồ sơ đã giao và hồ sơ bị bỏ qua kèm lý do; bộ lọc rỗng thì hiện trạng thái đã xong.'],
  W08: ['DH07 · Bảng trượt Booking chờ', 'Booking chưa có hồ sơ Tour', 'Theo dõi Booking tạo hồ sơ lỗi sau 3 lần tự thử lại; Thử lại ngay trên dòng. Số đã thu chỉ để tham khảo.'],
  W11: ['DH07 · Kế toán', 'Kế toán xem hồ sơ Đã kết thúc', 'Lọc hồ sơ Đã kết thúc để vào quyết toán; bấm dòng mở thẳng DH08.8.'],
  W12: ['DH07 · Kinh doanh', 'Kinh doanh xem hồ sơ của Booking mình', 'Chỉ đọc; chỉ thấy hồ sơ của Booking mình phụ trách, biết đã có người điều hành hay chưa.'],
  W13: ['DH07 · Điều hành', 'Không có hồ sơ khớp tìm kiếm', 'Phân biệt không khớp bộ lọc với chưa có dữ liệu; nhắc kiểm tra mục Booking chờ.'],
  W14: ['DH07 · Điều hành', 'Lỗi tải danh sách', 'Giữ bộ lọc và cho thử lại khi không tải được dữ liệu.'],
  W15: ['DH07 · Điều hành · dạng Kanban', 'Kanban hồ sơ Tour', 'Bốn cột theo trạng thái hồ sơ thay cho hàng chip; Đã đóng thu gọn. Thẻ có Tour Code, khách, thời gian, ngôn ngữ, chỉ báo, Cần xử lý và ô Phụ trách. Không kéo thả; bấm thẻ mở DH08.'],
  W16: ['DH07 · Điều hành · dạng Kanban', 'Giao người phụ trách trên thẻ', 'Ô Chọn người trên thẻ dùng chung quy tắc với ô trên dòng: người khớp ngôn ngữ lên trước, lưu ngay khi chọn.'],
  W17: ['DH07 · Điều hành · dạng Lịch', 'Dòng thời gian theo người phụ trách', 'Mỗi hàng là một người phụ trách, hàng Chưa có người phụ trách ở trên cùng; thấy ngay ai đang nhiều hồ sơ, hồ sơ nào chồng ngày và hồ sơ sắp khởi hành chưa giao.'],
  W18: ['DH07 · Kinh doanh · dạng Lịch', 'Kinh doanh xem lịch tháng', 'Kinh doanh và Kế toán mặc định xem Lịch tháng; mỗi hồ sơ là một thanh từ ngày khởi hành đến ngày kết thúc, màu theo trạng thái. Chỉ xem.'],
};
