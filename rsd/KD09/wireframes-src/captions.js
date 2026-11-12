// Nguồn duy nhất cho tên và mục đích của từng wireframe: [vị trí, tên màn, màn này dùng để làm gì]
module.exports = {
  W01: ['KD09 · Kinh doanh', 'Danh sách chiến dịch chăm sóc', 'Mọi chiến dịch của công ty trên một bảng: loại, đối tượng, kỳ gửi, lần gửi tiếp theo, số đã gửi và lỗi, phản hồi hoặc hủy nhận, người phụ trách, trạng thái.'],
  W02: ['KD09 · Kinh doanh', 'Chiến dịch đang chạy', 'Chip Đang chạy: cột Trạng thái ẩn, sắp theo lần gửi tiếp theo để biết email nào sắp đi ra ngoài.'],
  W03: ['KD09 · Kinh doanh', 'Chọn kỳ gửi', 'Bộ chọn có khoảng chọn nhanh áp dụng ngay và khoảng ngày gửi tùy chọn; tính cả lần đã gửi và lần đã lên lịch.'],
  W04: ['KD09 · Kinh doanh', 'Lọc theo loại và kỳ gửi', 'Gom các chiến dịch Remarketing có lần gửi trong tháng này; số trên chip tính theo bộ lọc.'],
  W05: ['KD09 · Kinh doanh', 'Tìm chiến dịch theo tên', 'Tìm theo mã, tên chiến dịch hoặc tên mẫu; phần khớp được tô vàng.'],
  W06: ['KD09 · Kinh doanh', 'Không có chiến dịch khớp bộ lọc', 'Phân biệt không khớp bộ lọc với chưa có dữ liệu; gợi ý bỏ bớt bộ lọc hoặc tạo chiến dịch.'],
  W07: ['KD09 · Kinh doanh', 'Lỗi tải danh sách', 'Giữ bộ lọc và cho thử lại khi không tải được dữ liệu; số trên chip hiện “–”.'],
  W08: ['KD09 · Kinh doanh', 'Chưa có chiến dịch nào', 'Trạng thái rỗng khi công ty chưa có chiến dịch; giải thích hai loại và chỉ tới nút Tạo chiến dịch.'],
  W09: ['KD09 · Kinh doanh', 'Chọn loại khi tạo chiến dịch', 'Nút Tạo chiến dịch mở danh sách hai loại kèm mô tả ngắn; chọn loại nào thì mở KD10 tạo mới với loại đó.'],
  W10: ['KD10.1 · Đích của Tạo chiến dịch', 'Hồ sơ chiến dịch Survey mới', 'Tạo chiến dịch → Survey mở KD10 ở chế độ tạo mới, loại và người phụ trách điền sẵn. Nội dung đặc tả ở RSD KD10.'],
  W11: ['KD10.2 · Đích khi bấm dòng', 'Hồ sơ chiến dịch mở ở Lịch sử gửi', 'Bấm dòng của chiến dịch đã có lần gửi mở KD10 ở tab Lịch sử gửi. Nội dung đặc tả ở RSD KD10.'],
  W12: ['KD09 · Kinh doanh', 'Quay lại sau khi tạm dừng chiến dịch', 'Bộ lọc và vị trí giữ nguyên; chiến dịch vừa tạm dừng ở KD10 mờ tại chỗ vì không còn khớp chip, thông báo có liên kết xem lại.'],
  W14: ['KD09 · Kinh doanh', 'Chọn chiến dịch để chuyển phụ trách', 'Người phụ trách chọn chiến dịch của mình, chọn người nhận ngay trên thanh hàng loạt; danh sách người nhận có số chiến dịch mỗi người đang phụ trách.'],
  W15: ['KD09 · Kinh doanh', 'Sau khi chuyển phụ trách', 'Banner nêu số chiến dịch đã chuyển và người nhận; dòng ghi người phụ trách mới và nhãn Vừa chuyển; lịch gửi không đổi.'],
  W16: ['KD09 · Quản trị hệ thống', 'Chuyển chiến dịch của người đã nghỉ', 'Quản trị lọc theo người phụ trách đã ngừng hoạt động, chọn mọi chiến dịch rồi chuyển một lần.'],
  W17: ['KD09 · Quản trị hệ thống', 'Kết quả chuyển phụ trách', 'Banner nêu số đã chuyển; dòng đã chuyển mờ tại chỗ vì không còn khớp bộ lọc người phụ trách cũ.'],
};
