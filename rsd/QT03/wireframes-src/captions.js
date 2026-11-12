// Nguồn duy nhất cho tên và mục đích của từng wireframe: [vị trí, tên màn, màn này dùng để làm gì]
module.exports = {
  W01: ['QT03 · Quản trị hệ thống', 'Nhật ký thao tác', 'Mọi thao tác ghi dữ liệu trong 7 ngày qua, mới nhất trước: thời điểm, người, thao tác, đối tượng, màn, tóm tắt thay đổi; thao tác nhạy cảm có cờ.'],
  W02: ['QT03 · Quản trị hệ thống', 'Chọn thời gian', 'Khoảng chọn nhanh áp dụng ngay và khoảng tùy chọn trong thời gian lưu 24 tháng.'],
  W03: ['QT03 · Quản trị hệ thống', 'Lọc theo người dùng và đối tượng', 'Gom các thao tác của một người trên một loại đối tượng; số trên chip tính theo bộ lọc.'],
  W04: ['QT03 · Quản trị hệ thống', 'Thao tác nhạy cảm', 'Chip gom các thao tác cần rà soát: xóa, hủy, mở lại, chuyển phụ trách, xuất tệp, publish link, sửa người dùng và phân quyền.'],
  W05: ['QT03 · Bảng trượt', 'Chi tiết thao tác sửa', 'Giá trị trước và sau của từng trường, lý do người dùng nhập, tác động kèm theo; mở đúng bản ghi hoặc xem mọi thao tác trên bản ghi.'],
  W06: ['QT03 · Bảng trượt', 'Chi tiết có dữ liệu đã che', 'Trường nhạy cảm của khách hiện ở dạng đã che cả trước và sau; trường khác hiện đầy đủ.'],
  W07: ['QT03 · Bảng trượt', 'Chi tiết thao tác xóa', 'Dữ liệu trước khi xóa còn giữ được; giá trị cá nhân đã bỏ; nút Mở bản ghi khóa kèm lý do.'],
  W08: ['QT03 · Quản trị hệ thống', 'Lịch sử một bản ghi', 'Mọi thao tác trên một Booking và các thao tác liên quan (giao dịch thu) trong toàn bộ thời gian lưu.'],
  W09: ['QT03 · Bảng trượt', 'Chi tiết thao tác hàng loạt', 'Một dòng nhật ký cho cả lô; bảng trượt liệt kê từng bản ghi với kết quả Đã chuyển hoặc Bỏ qua kèm lý do.'],
  W10: ['KD08.2 · Đích của Mở bản ghi', 'Booking mở ở tab Lịch thanh toán', 'Mở bản ghi đưa tới đúng hồ sơ và tab của màn đã ghi thao tác, theo quyền của người xem. Nội dung đặc tả ở RSD KD08.'],
  W11: ['QT03 · Quản trị hệ thống', 'Sau khi xuất Excel', 'Tệp gồm mọi thao tác khớp bộ lọc, mỗi trường thay đổi một dòng, giá trị nhạy cảm đã che; thông báo ghi số thao tác và tên tệp.'],
  W12: ['QT03 · Quản trị hệ thống', 'Xuất Excel vượt giới hạn', 'Nút Xuất Excel khóa kèm lý do khi kết quả lọc vượt 20.000 thao tác; gợi ý thu hẹp bộ lọc.'],
  W13: ['QT03 · Quản trị hệ thống', 'Không có thao tác khớp bộ lọc', 'Phân biệt không khớp bộ lọc với lỗi tải; gợi ý mở rộng thời gian hoặc xóa bộ lọc.'],
  W14: ['QT03 · Quản trị hệ thống', 'Lỗi tải nhật ký', 'Giữ bộ lọc, số trên chip hiện “–”, cho thử lại.'],
  W15: ['QT03 · Quản trị hệ thống', 'Khoảng thời gian ngoài thời gian lưu', 'Từ ngày trước mốc 24 tháng: lỗi dưới ô, nút Áp dụng khóa.'],
  W16: ['QT03 · Kinh doanh', 'Không có quyền xem nhật ký', 'Vai trò khác Quản trị mở đường dẫn QT03: trang không có quyền, chỉ cách xem lịch sử trong hồ sơ.'],
};
