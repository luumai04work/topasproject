# Quyết định sau rà soát RSD — 13/11/2026

Ưu tiên hơn BOI-CANH và RSD cho tới khi các tài liệu đó được sửa.

## Quyết định đã chốt

| Mã | Vấn đề | Quyết định | Sửa ở |
|---|---|---|---|
| Q-RS01 | Vai trò phục vụ có hai bộ tên: "HDV chính" (QT05, DH01, DH08) và "HDV suốt tuyến" (BOI-CANH, các AC). | **HDV chính, HDV điểm, Trưởng đoàn**; bỏ "HDV suốt tuyến". | BOI-CANH, DH08, HD01, CH02, DH06 |
| Q-RS02 | Ô giá trẻ em trống bị coi là thiếu giá, nên dòng đoàn/xe/đơn vị chặn lưu báo giá. | Giữ cột trẻ em cho mọi dòng; ô trống ở dòng đoàn/xe/đơn vị = không phân biệt người lớn, trẻ em. | DH03, DH04, KD06 |
| Q-RS03 | Đã chặn dòng giá chồng lấn số khách nhưng vẫn có quy tắc "lấy Thứ tự nhỏ nhất" (không bao giờ chạy). | Giữ chặn chồng lấn; bỏ trường Thứ tự. | DH03, DH04, KD06 |
| Q-RS04 | "Lấy phụ thu Thay thế cao nhất" chưa nói cách so khi khác căn cứ hoặc khác kiểu (%/tiền). | Chặn lưu phụ thu Thay thế khác căn cứ với dòng giá. | DH03, DH04, KD06, KD02 |
| Q-RS05 | Giá trẻ em theo % chưa định nghĩa cho dòng tính theo phòng. | Giá trẻ em là đơn giá riêng; bỏ khai theo %. | DH03, KD06, KD02, VI-DU-TINH-GIA |
| Q-RS06 | Trẻ dưới nhóm tuổi thấp nhất đang tính giá người lớn. | Trẻ dưới nhóm thấp nhất miễn phí; trên nhóm cao nhất tính người lớn. | DH03, KD06, VI-DU-TINH-GIA |
| Q-RS07 | "Số trẻ miễn phí" chỉ có một trường cho cả hợp đồng, không đủ cho ví dụ. | Bỏ trường số trẻ miễn phí. | DH03, KD06, VI-DU-TINH-GIA |
| Q-RS08 | Kỳ hợp đồng mới ghi hai kiểu; dời mùa +1 năm làm hợp đồng ngắn mất mùa; năm nhuận xử lý một chiều. | Kỳ mới dài bằng kỳ nguồn; mùa dời theo độ lệch hai kỳ; mùa kết thúc cuối tháng 2 dời tới cuối tháng 2. | DH03 |
| Q-RS09 | DH03 nhận "1,650,000" khi dán, trái K0.04 (dấu phẩy là thập phân). | Dán từ Excel là ngoại lệ của K0.04: nhận dạng kiểu số. | CHUAN-GIAO-DIEN, DH03 |
| Q-RS10 | Hủy lần đặt đã xác nhận làm hạng mục kẹt ở Đã hủy, hồ sơ vẫn báo Sẵn sàng; hủy lần đặt chưa xác nhận chưa có trạng thái. | Đã từng xác nhận → Đã hủy, nằm trong Việc cần làm tới khi thêm dịch vụ thay thế hoặc Bỏ dịch vụ. Chưa từng xác nhận → về Cần đặt. | DH08 |
| Q-RS11 | Xác nhận một phần khi Báo Kinh doanh: L3.12 ghi chuyển Chờ Kinh doanh, R02 ghi giữ nhãn. | Giữ nhãn, thêm chỉ báo Chờ Kinh doanh; chặn đặt phần thiếu khi có chỉ báo. | DH08 |
| Q-RS12 | DH07 bật sẵn "Của tôi" cho Kinh doanh và dựng như giá trị bộ lọc, trái BOI-CANH và CGD K2.06. | Chip "Của tôi" riêng, chỉ bật sẵn cho Điều hành. | DH07 |
| Q-RS13 | DH06, DH02 lọc nhóm Điều hành theo vai trò; QT02 R13 lọc theo phòng. | Chỉ vai trò hệ thống Điều hành. | QT02 R13 |
| Q-RS14 | Tài khoản chỉ có vai trò HDV được giao việc checklist nhưng không mở được DH08. | Loại khỏi danh sách giao việc checklist. | DH06, DH08 |
| Q-RS15 | HDV ghi chi phí từ khi Mới tạo nhưng ngày phải từ ngày khởi hành, nên trước khởi hành không lưu được. | Chỉ ghi chi phí khi hồ sơ Đang diễn ra. | HD01 |
| Q-RS16 | Điều hành không sửa được khách đoàn (câu hỏi V2 còn mở). | Giữ: chỉ Kinh doanh sửa. | Ghi chú QT02 |
| Q-RS17 | "Báo giá mới nhất" = phiên bản số lớn nhất, nên bộ lọc Chốt và thẻ "Đã chốt, chưa tạo Booking" bỏ sót. | Ghi Chốt = tạo Booking ngay; bỏ trạng thái trung gian, nút Tạo Booking riêng, thẻ VT-KD-03. KD05 hiện giá theo phiên bản của Booking. | KD06, KD05, KD08, CH02, CH03, QT08, BOI-CANH |
| Q-RS18 | Sửa yêu cầu khi điều chỉnh làm yêu cầu lệch khỏi Booking nếu chưa gửi Điều hành. | Booking chỉ cập nhật khi Gửi sang Điều hành; trước đó KD05 hiện số của Booking. | KD06, KD05 |
| Q-RS19 | Khởi hành cách 15–43 ngày thì đợt 70 % đến hạn trước đợt 30 %. | Hạn đợt 2 ≤ hạn đợt 1 thì gộp một đợt 100 %. | KD08 R05, script |
| Q-RS20 | KT01 không ghi được khoản thu khi Booking Chờ điều chỉnh hoặc đã tất toán. | Cho ghi; phần vượt phải thu vào Tiền thừa. | KT01 |
| Q-RS21 | QT07 tính còn phải thu khác KT01 và có thể cộng lẫn loại tiền. | QT07 đọc công nợ từ KT01, tách theo loại tiền. | QT07-QT12 |
| Q-RS22 | Lý do hủy đổi tên: QT05 hiện tên mới, báo cáo giữ tên lúc hủy. | Hiện tên hiện tại. | QT07-QT12 |
| Q-RS23 | Logic dựa trên tên nhóm công việc, trong khi tên sửa hoặc xóa được. | Bỏ mọi logic dựa trên tên nhóm công việc. | QT01, DH06 |
| Q-RS24 | KD05, KD03 không có Hoàn tác chuyển phụ trách (trái U2.02); Hoàn tác ở DH07 làm mất nhắc. | Thêm Hoàn tác; Hoàn tác gỡ cả thông báo và trạng thái Đã xử lý (áp cả DH07). | KD05, KD03-KD04, CH02 |
| Q-RS25 | Phí hủy NCC "mức × căn cứ" chưa rõ cách tính khi kết hợp tỷ lệ/số tiền với căn cứ khách, phòng, đêm đầu, tổng giá. | Chính sách đổi hủy chỉ khai **% trên tổng giá lần đặt**; trường hợp khác Điều hành sửa tay phí gợi ý. | DH03 R08, 5.2; DH08 L3.8 |
| Q-RS26 | Phí giữ lại khi hủy Booking chưa rõ lấy ngày khởi hành của Booking hay hồ sơ Tour, tính trên giá trị Booking hay tổng các đợt. | Mốc theo **ngày khởi hành của Booking**; % trên **giá trị Booking**. | KT01 R07 |
| Q-RS27 | Chọn dòng giá theo khoảng số khách: KD06, DH04 đếm người lớn, DH03 không nói; xe theo sức chứa bị đếm thiếu trẻ em. | Dòng căn cứ khách/phòng đếm **người lớn**; dòng căn cứ đoàn/xe/đơn vị đếm **tổng khách** (gồm trẻ). | DH03 R14, DH04, KD06 R13, VI-DU-TINH-GIA |
| Q-RS28 | Mở lại Tour kèm chọn người phụ trách cấp cho Quản trị (không có quyền giao); form Thông tin điều hành bắt buộc ô Phụ trách thuộc quyền khác. | Ô Phụ trách chỉ đọc trong form, đổi bằng thao tác Giao riêng (cần `DH07.giao-phu-trach`). Mở lại Tour chỉ cho chọn người mới khi có quyền giao, không thì giữ người cũ. | DH08 R16, 5.2; QT02 |
| Q-RS29 | Gia hạn hợp đồng: mùa giá có cờ Theo âm lịch, còn phụ thu theo ngày (vd Tết) dời theo dương lịch không cảnh báo. | **Luôn tính theo dương lịch**; bỏ cờ Theo âm lịch và nhãn Cần kiểm tra ngày. Điều hành tự sửa ngày lễ sau khi gia hạn. | DH03 R12, 5.x |

## Bổ sung 13/11/2026 (người dùng trả lời)

| Mã | Câu hỏi | Trả lời | Sửa ở |
|---|---|---|---|
| Q-RS02 | Ô trẻ em ở dòng căn cứ đoàn, xe, đơn vị có giá thì dùng thế nào. | Chặn: cột trẻ em vẫn hiện nhưng ô của dòng căn cứ đoàn, xe, đơn vị bị khóa, không gõ được; dán, nhập Excel hay gọi API có giá ở ô này thì báo lỗi tại ô (dòng); bộ tính giá không bao giờ nhận giá trẻ em ở dòng như vậy. | DH03 L6.3, E6.5, E6.15, R14, R16, 5.2, AC77; DH04 R04; KD06 R13, R15, AC39, AC102; BOI-CANH |
| Q-RS06 | Trẻ trên nhóm tuổi cao nhất ở dòng giá căn cứ phòng: dòng theo phòng không có giá mỗi người lớn để “tính như người lớn”. | Giữ cách đã ghi: khoản thiếu “Trẻ n tuổi trên nhóm tuổi của hợp đồng”, Kinh doanh nhập tay. | KD06 R13, R15; VI-DU-TINH-GIA mục 2 |
| Q-RS13 | Vai trò tự tạo thuộc phòng Điều hành còn giữ hành vi nào của phòng. | Giữ như đã áp: giữ chip Của tôi bật sẵn ở DH07, nhóm thẻ Việc của tôi, mốc lịch; chỉ ô chọn người phụ trách, Ngừng hoạt động và nhóm Điều hành nhận thông báo cần vai trò hệ thống Điều hành. | Không sửa thêm (QT02 R13, AC67) |
| Q-RS15 | HDV có ghi chi phí phát sinh mới khi hồ sơ Đã kết thúc (chưa đóng) không. | Giữ như đã áp: chỉ khi Đang diễn ra; sau khi kết thúc Điều hành ghi ở DH08.7. | Không sửa thêm (HD01 L4.1, R05, AC54) |
| Q-RS17 | Bỏ hẳn quyền `KD08.tao-booking` hay giữ làm quyền cần thêm khi ghi Chốt. | Bỏ, giữ như đã áp: tạo Booking là một phần của ghi Chốt, theo quyền Ghi kết quả (`KD06.ghi-ket-qua`). | Không sửa thêm (QT02 Phụ lục A, B; 127 mã) |
| Q-RS17 | Hủy Booking thì phiên bản báo giá của Booking chuyển Không chốt hay giữ Chốt. | Giữ Chốt (lịch sử của Booking đã hủy), hiện kèm “Booking … · Đã hủy”; không đổi được sang kết quả khác bằng tay; đặt lại sau khi Mở lại thì phiên bản của Booking mới cũng Chốt. | KD06 2.4, 2.6, L6.4, R17, R19, R20, R21, 5.1, AC56, AC76, AC111; KD08 2.3, R10; KD05 2.4, R03; CH03 (chữ); BOI-CANH |
| Q-RS19 | Hạn của đợt gộp khi khởi hành gần (hạn Đợt 2 không sau hạn Đợt 1). | Ngày tạo + 14, giữ như đã áp. | Không sửa thêm (KD08 R05, AC45, AC46; VI-DU-TINH-GIA ví dụ E) |
| Q-RS23 | Khi nào ngôn ngữ phục vụ bắt buộc với nhân sự. | Giữ như đã áp: bắt buộc khi có nhóm công việc nhận vai trò phục vụ HDV chính hoặc HDV điểm. | Không sửa thêm (DH06 R02, E3.4) |
| Q-RS24 | Chuyển phụ trách một bản ghi qua hộp thoại có Hoàn tác không. | Có, như chuyển hàng loạt (CGD U2.02): một khách ở KD04, một yêu cầu ở KD06, Booking ở KD08; Hoàn tác gỡ thông báo và Đã xử lý của lần chuyển. | KD03-KD04 L4.1, R04, AC48; KD06 L7.3, R23, AC114; KD08 L1.4, R11, AC47; CH02 R05, AC73 |
