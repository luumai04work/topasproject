// Nguồn duy nhất cho tên và mục đích của từng wireframe. [Vị trí (màn/tab), Tên màn, Màn này dùng để làm gì]
module.exports = {
  W01: ['DH06 · Điều hành', 'Danh sách nhân sự đang nhận phân công', 'Xem mọi nhân sự đang nhận phân công với nhóm công việc, ngôn ngữ, liên hệ, tài khoản và việc đang được giao; bật/tắt nhận phân công ngay trên dòng.'],
  W02: ['DH06 · Điều hành', 'Lọc hướng dẫn viên tiếng Đức', 'Lọc theo nhóm công việc và ngôn ngữ để tìm người phù hợp; số trên chip tính theo bộ lọc.'],
  W03: ['DH06 · Điều hành', 'Không có nhân sự khớp bộ lọc', 'Phân biệt không khớp bộ lọc với chưa có dữ liệu; gợi ý thêm nhân sự.'],
  W04: ['DH06 · Điều hành', 'Lỗi tải danh sách', 'Giữ bộ lọc và cho thử lại khi không tải được dữ liệu.'],
  W05: ['DH06 · Bảng trượt Thêm nhân sự', 'Thêm nhân sự', 'Nhập thông tin, liên hệ, nhóm công việc, ngôn ngữ; khu vực và nhận phân công có sẵn giá trị mặc định.'],
  W06: ['DH06 · Bảng trượt Thêm nhân sự', 'Lỗi khi lưu nhân sự', 'Báo lỗi cạnh trường (thiếu nhóm công việc, trùng điện thoại) và giữ dữ liệu đã nhập.'],
  W07: ['DH06 · Điều hành', 'Danh sách sau khi thêm nhân sự', 'Nhân sự mới hiện đúng vị trí theo tên, tô sáng, có nhãn Mới; số trên chip cập nhật.'],
  W08: ['DH06 · Bảng trượt nhân sự · Thông tin', 'Sửa thông tin nhân sự', 'Sửa thông tin trong một form, một nút Lưu; thấy ngay nhân sự Điều hành chưa liên kết tài khoản thì chưa được giao phụ trách hồ sơ.'],
  W09: ['DH06 · Bảng trượt nhân sự · Thông tin', 'Bỏ nhóm công việc đang được giao', 'Trước khi lưu, thấy các phân công đang dùng nhóm công việc bị bỏ; phân công giữ nguyên.'],
  W10: ['DH06 · Bảng trượt nhân sự · Lịch phân công', 'Lịch phân công của nhân sự', 'Xem hồ sơ đang phụ trách, công việc chưa hoàn tất và lịch phục vụ Tour từ hôm nay; bấm Tour Code mở hồ sơ.'],
  W11: ['DH06 · Bảng trượt nhân sự · Thông tin', 'Xung đột khi lưu', 'Nhân sự vừa được sửa ở phiên khác: không ghi đè, giữ dữ liệu trên form, cho xem bản mới.'],
  W12: ['DH06 · Hộp thoại tắt nhận phân công', 'Xác nhận tắt nhận phân công khi đang được giao việc', 'Thấy hồ sơ, công việc và lịch phục vụ đang giao cho người này và điều gì xảy ra sau khi tắt, trước khi xác nhận.'],
  W13: ['DH06 · Điều hành', 'Sau khi tắt nhận phân công', 'Dòng mờ đi, giữ tại chỗ, có chỉ báo việc cần giao lại; số đếm cập nhật; thông báo có Hoàn tác.'],
  W14: ['DH06 · Điều hành', 'Bật lại nhận phân công', 'Ở chip Không nhận phân công, bật công tắc là lưu ngay; dòng tô sáng; thông báo có Hoàn tác.'],
  W15: ['DH06 · Bảng trượt nhân sự · Hộp thoại xóa', 'Xóa nhân sự chưa từng được phân công', 'Xóa nhân sự tạo nhầm khi chưa được phân công ở đâu; nhắc tắt nhận phân công nếu chỉ tạm ngừng.'],
  W15a: ['DH06 · Bảng trượt nhân sự · Thông tin', 'Không xóa được nhân sự đã phân công', 'Nút Xóa khóa kèm lý do; gợi ý tắt nhận phân công.'],
};
