# Hỏi và chốt quyết định nghiệp vụ

Skill dùng cho nhiều dự án và nhiều lĩnh vực. Làm rõ theo ba tầng:

1. **Bối cảnh dự án:** hỏi một lần cho mỗi dự án và lưu lại.
2. **Nghiệp vụ của màn:** hỏi theo từng màn.
3. **Câu hỏi riêng theo loại màn.**

Không đem quy tắc của dự án hoặc lĩnh vực khác làm mặc định.

## 0. Trình tự

1. Tìm tệp bối cảnh của dự án (`BOI-CANH-DU-AN.md` cạnh tài liệu nguồn hoặc thư mục RSD) và các `GHI-CHU-LAM-VIEC.md` đã có. Đọc trước, chỉ hỏi phần còn thiếu.
2. Đọc nguồn của màn, lập danh sách điểm cần làm rõ theo mục 4. Mỗi điểm phải trả lời được: suy ra từ nguồn, thuộc phạm vi tự thiết kế, hay buộc phải hỏi.
3. Xếp ưu tiên theo mục 5 rồi hỏi, tối đa 3 câu mỗi lượt. Phần nào không phụ thuộc câu hỏi thì làm song song.
4. Ghi câu trả lời vào nhật ký (mục 8). Câu trả lời ở cấp dự án được cập nhật vào `BOI-CANH-DU-AN.md`.

## 1. Bối cảnh dự án (hỏi một lần, lưu vào `BOI-CANH-DU-AN.md`)

| Chủ đề | Cần biết | Vì sao |
|---|---|---|
| Lĩnh vực và mô hình | Ngành, mô hình kinh doanh, khách hàng của hệ thống, quy mô | Chọn mẫu nghiệp vụ và mức chi tiết phù hợp |
| Tổ chức và vai trò | Danh sách vai trò, phòng ban, chi nhánh; ai quản lý ai; có vai trò quản trị hoặc duyệt không | Quyết định bảng quyền và phạm vi bản ghi |
| Thuật ngữ | Tên gọi chuẩn của đối tượng, trạng thái, mã (ví dụ Booking, Tour Code) | Viết nhất quán, không tự đặt tên khác |
| Nền tảng | Web, mobile hay cả hai; kích thước màn chính; ngôn ngữ giao diện; đa ngôn ngữ, đa tiền tệ, múi giờ | Kích thước wireframe, định dạng tiền và ngày |
| Hệ thống liên quan | Hệ thống nào đã có, hệ thống nào là nguồn của từng loại dữ liệu; email, SMS, thanh toán, kế toán | Ranh giới và tích hợp |
| Pháp lý và dữ liệu cá nhân | Dữ liệu nhạy cảm, quy định lưu trữ, che dữ liệu, xuất dữ liệu ra ngoài | Quy tắc che, quyền xem, nhật ký |
| Quy ước tài liệu | Định dạng (MD, DOCX), mẫu RSD có sẵn, cách đặt mã màn và phiên bản, ngôn ngữ viết | Đúng chuẩn của dự án |
| Giao diện | Design system hoặc bộ nhận diện có sẵn, Figma hay HTML | Cách dựng wireframe |
| Mức ủy quyền | Người viết được tự quyết những gì (bố cục, nhãn, quy tắc hiển thị) và những gì bắt buộc phải hỏi | Giảm số câu hỏi |
| Người duyệt | Ai chốt nghiệp vụ, ai nghiệm thu | Biết hỏi ai khi mâu thuẫn |

Có thể hỏi bối cảnh dự án gộp vào lượt hỏi đầu của màn đầu tiên. Những gì suy được từ nguồn thì ghi lại và chỉ nhờ người dùng xác nhận.

## 2. Nghiệp vụ của màn (hỏi theo từng màn)

| Thiếu gì | Hỏi để chốt |
|---|---|
| Phạm vi và nguồn | Màn, tab nào? Tài liệu nào có hiệu lực? Đã có RSD cũ của màn này chưa: nâng phiên bản hay viết mới? |
| Mục tiêu và người dùng chính | Ai dùng màn nhiều nhất, để làm việc gì? Việc nào cần ít thao tác nhất? |
| Đối tượng và nguồn dữ liệu | Màn sở hữu đối tượng nào; đối tượng nào chỉ đọc từ màn khác? Khóa liên kết là gì? |
| Vòng đời và trạng thái | Danh sách trạng thái, điều kiện chuyển, ai chuyển, có quay lại hay mở lại không? |
| Quyền | Ai xem, tạo, sửa, gửi, duyệt, hủy, mở lại? Phạm vi bản ghi (của mình, của nhóm, tất cả)? |
| Chặn hay cảnh báo | Mỗi điều kiện vi phạm thì chặn lưu, cảnh báo nhưng cho lưu, hay cảnh báo kèm lý do? |
| Phê duyệt | Có bước duyệt không? Ngưỡng nào thì cần duyệt? Ai duyệt? |
| Thay đổi dữ liệu nguồn | Khi màn nguồn đổi dữ liệu: tự đồng bộ, hay xem chênh lệch rồi áp dụng (cả phiên bản hay từng dòng), hay giữ bản cũ? Bản ghi đã gửi ra ngoài xử lý thế nào? |
| Tự động và thông báo | Sự kiện nào tạo bản nháp, gửi thông báo, nhắc hạn? Gửi cho ai, qua kênh nào? |
| Gửi ra ngoài | Người nhận, nội dung, tập cột, lúc gửi thật, lưu bản đã gửi; xử lý khi thất bại hoặc chưa rõ kết quả |
| Tiền, chứng từ, tích hợp | Hệ thống sở hữu số tiền; tỷ giá theo ngày nào; chống tính hai lần; khi thiếu, trùng, sai thì làm gì |
| Trường dữ liệu | Trường bắt buộc, giá trị mặc định, kiểm tra hợp lệ, định dạng |
| Khối lượng | Số dòng thường gặp, phân trang, tìm kiếm, sắp xếp mặc định |
| Ngoại lệ | Hồ sơ bị hủy, khóa, đóng; dữ liệu bị sửa ở phiên khác |
| Nghiệp vụ đặc thù | Cần bổ sung nghiệp vụ nào mà danh sách màn chưa có? |
| Nghiệm thu | Kịch bản nào bắt buộc phải đúng? Có dữ liệu mẫu (đã ẩn thông tin cá nhân) không? |

## 3. Câu hỏi riêng theo loại màn

| Loại màn | Câu hỏi riêng |
|---|---|
| Danh sách | Cột mặc định, bộ lọc nhanh, sắp xếp, thao tác trên dòng, có hàng loạt không, có xuất tệp không. **Dạng xem:** đề xuất sẵn các dạng theo `quy-tac-trien-khai.md` mục 12 (Kanban chia cột theo gì, Lịch theo mốc ngày nào, Dòng thời gian nhóm theo ai) rồi hỏi xác nhận; hỏi riêng có cho kéo thả đổi trạng thái trên Kanban hay Lịch không (mặc định không) |
| Hồ sơ nhiều tab | Header gồm những gì; tab nào ai được sửa; Tổng quan cần trả lời câu hỏi gì; banner cấp hồ sơ |
| Form tạo, sửa | Dữ liệu điền sẵn từ đâu; lưu nháp; trường phụ thuộc nhau; xử lý trùng |
| Phê duyệt | Các cấp duyệt, ngưỡng, ủy quyền, trả lại, thời hạn, nhắc |
| Báo cáo, dashboard | Chỉ số, công thức, kỳ, nguồn số liệu, quyền xem, khoan sâu tới đâu |
| Danh mục, cấu hình | Ai quản lý; bật hoặc tắt sử dụng; ảnh hưởng tới dữ liệu đã dùng |
| Nhập, xuất tệp | Mẫu tệp, khóa ghép, xử lý dòng lỗi, giới hạn kích thước |
| Gửi email, thông báo | Mẫu nội dung, người nhận, CC, đính kèm, lịch sử, gửi lại |

## 4. Dấu hiệu bắt buộc phải hỏi

- Nguồn ghi “chờ đặc tả”, “đề xuất”, “TBD”, hoặc để trống ở cột quy tắc, mà điểm đó ảnh hưởng tới luồng.
- Hai nguồn mâu thuẫn nhau, hoặc yêu cầu mới mâu thuẫn với quyết định đã chốt.
- Thuật ngữ mơ hồ hoặc một từ dùng cho hai nghĩa.
- Vai trò thực hiện không rõ, hoặc thao tác chạm tới dữ liệu của bộ phận khác.
- Con số, ngưỡng, hạn, tỷ lệ, công thức tiền chưa có giá trị.
- Hành vi tác động ra ngoài hệ thống: gửi email, thanh toán, khóa hồ sơ, xóa dữ liệu.
- Dữ liệu cá nhân hoặc dữ liệu nhạy cảm.

## 5. Ưu tiên và phạm vi tự quyết

- **Hỏi trước nhất:** điều làm thay đổi luồng, trạng thái, quyền, tiền, hoặc hành vi ra ngoài hệ thống.
- **Hỏi sau:** quy tắc dữ liệu (bắt buộc, kiểm tra, mặc định).
- **Chỉ hỏi khi ảnh hưởng tới khả năng dùng tài liệu:** chi tiết trình bày.
- **Tự quyết, có ghi lại, trong phạm vi ủy quyền:** vị trí nút, cách nhóm, nhãn, thông báo lỗi, kiểu thao tác, cách giảm thao tác. Không tự đặt quyền phê duyệt, ngưỡng tiền, cơ chế gửi thật hoặc điều kiện nghiệp vụ quan trọng chỉ để hoàn thành tài liệu.
- Nếu nguồn đã ghi “đề xuất”, có thể dùng làm phương án đề nghị trong câu hỏi, nhưng chưa phải quyết định.

## 6. Mẫu câu hỏi có đáp án

> **Q1. Khi dữ liệu nguồn thay đổi và hồ sơ đã có giao dịch, cập nhật thế nào?**
>
> A. Tự đồng bộ và đánh dấu giao dịch cần xử lý.
>
> B. Hiện bản cũ và bản mới, để người phụ trách xem rồi áp dụng. Lịch sử được giữ.
>
> C. Giữ bản đã chốt; cập nhật từng giao dịch theo quy trình riêng.
>
> Bạn có thể trả lời Q1B hoặc mô tả cách khác.

> **Q2. Màn danh sách Hồ sơ Tour nên có những dạng xem nào?**
>
> A. Bảng (mặc định), Kanban theo trạng thái hồ sơ, Lịch: dòng thời gian theo người phụ trách cho Điều hành và lịch tháng cho Kinh doanh, Kế toán. Không kéo thả. (Recommended)
>
> B. Chỉ Bảng và Lịch tháng.
>
> C. Như A, và cho kéo thẻ Kanban để đổi trạng thái khi điều kiện chuyển trạng thái đã đủ.

- Mỗi câu nêu rõ ngữ cảnh (màn, đối tượng, điều nguồn đang ghi), vì người dùng có thể chỉ thấy hộp câu hỏi.
- Phương án đề nghị đặt đầu, ghi “(Recommended)” và nêu tác động. Cho phép người dùng trả lời cách khác.
- Người dùng trả lời một phần thì xác nhận phần đã rõ và hỏi tiếp phần còn thiếu. Không coi im lặng là chấp thuận.

## 7. Khi người dùng mô tả lại luồng hoặc phản hồi

- **Người dùng mô tả luồng cụ thể:** làm đúng các bước đó, bỏ các nút, màn và trạng thái không có trong luồng, và nêu rõ những gì đã bỏ.
- **Người dùng chỉ ra chỗ trùng hoặc thừa trên một màn:** sửa màn đó, rà toàn bộ wireframe theo cùng nguyên tắc, rồi báo bảng các chỗ đã bỏ kèm lý do.
- **Người dùng hỏi “đã có màn … chưa”:**
  - chưa có thì bổ sung màn và trạng thái sau thao tác;
  - đã có nhưng khó thấy thì đưa vào vị trí dễ thấy, rồi kiểm tra ảnh cũ trong bộ nhớ đệm.
- **Phản hồi chạm tới quy tắc chung của dự án** (ví dụ “không lặp thông tin header”): ghi vào `BOI-CANH-DU-AN.md` để áp dụng cho các màn sau.
- **Khi đổi luồng, cập nhật đồng bộ:**
  - phạm vi, quyền, bảng trạng thái, thứ tự tính trạng thái;
  - luồng L, ngoại lệ E, quy tắc R, AC;
  - câu mô tả chỗ bấm và phản hồi trong bước, quy ước dùng chung ở mục 2, bảng dữ liệu gửi ra ngoài;
  - wireframe và `captions.js`.

  Sau đó tìm thuật ngữ cũ còn sót.

## 8. Nhật ký làm việc

- **`BOI-CANH-DU-AN.md`** (cấp dự án, dùng lại cho mọi màn) gồm: bối cảnh ở mục 1, thuật ngữ, quy ước, mức ủy quyền, các nguyên tắc người dùng đã chốt cho cả dự án.
- **`GHI-CHU-LAM-VIEC.md`** (theo màn, ngoài bản phát hành) gồm:
  - quyết định có mã Q (màn hoặc tab, lựa chọn, câu trả lời hoặc nguồn, tác động tới bước, W, AC, tình trạng);
  - danh sách thiết kế tự quyết cần xác nhận;
  - thay đổi cần làm ở màn khác;
  - kiểm tra đã chạy.
- Nếu chưa chốt được, báo rõ phần đã hoàn thành và câu hỏi còn chờ. Giữ phần phụ thuộc ở bản làm việc, không đánh dấu bản phát hành.
- Trước khi phát hành, tóm tắt các điểm tự quyết để người dùng duyệt.
