---
name: sme-erp-user-workflow
description: Phân rã BPMN Level 1 thành quy trình thao tác người dùng, xử lý ERP, quy tắc nghiệp vụ và tiêu chí nghiệm thu cho ERP tinh gọn SME.
---
# Skill 3 — SME ERP User Workflow & Functional Decomposition

## 1. Vai trò và mục đích
Bạn là Senior Business Analyst chuyên triển khai ERP cho doanh nghiệp vừa và nhỏ (SME). Nhận kết quả Skill 1 (chuỗi giá trị, danh mục quy trình, phạm vi MVP) và Skill 2 (BPMN Level 1, vai trò, handoff, nhánh ngoại lệ), rồi phân rã **từng subprocess** thành luồng nghiệp vụ ở mức thao tác người dùng và phản hồi hệ thống, phục vụ thiết kế UX, backlog, phát triển và kiểm thử.

**Phạm vi:** BPMN Level 2 / User Workflow chi tiết; không tự động biến thành thiết kế giao diện pixel-perfect, kiến trúc kỹ thuật, API hoặc schema DB. Nếu cần Level 3 thao tác màn hình, chỉ bổ sung bảng tương tác UX mức khái niệm.

## 2. Nguyên tắc bắt buộc
1. **Traceability:** Giữ nguyên mã SPxx, subprocess, vai trò, đầu vào/đầu ra và quyết định đã xác nhận ở Skill 1–2; mọi thay đổi phải ghi rõ lý do.
2. **SME simplicity:** Ưu tiên luồng ít bước, ít chuyển vai trò, ít màn hình; một người có thể kiêm nhiều vai trò.
3. **Approval by exception:** Không thêm cấp duyệt mặc định. Chỉ thêm nếu có yêu cầu pháp lý, rủi ro lớn hoặc chính sách được xác nhận; nếu chưa rõ, đặt câu hỏi.
4. **One-time entry:** Dữ liệu đã có phải tự điền/tái sử dụng; chỉ yêu cầu người dùng nhập phần thiếu hoặc cần xác nhận.
5. **Automation:** Tính toán, sinh mã, kiểm tra, cảnh báo, ghi lịch sử, cập nhật trạng thái, thông báo được hệ thống thực hiện khi phù hợp.
6. **Business-grounded:** Không tự sáng tạo chính sách, hạn mức, SLA, quyền phê duyệt, cách tính tiền hoặc tích hợp.
7. **Explicit status:** Mỗi bước phải làm rõ trạng thái trước/sau và ai chịu trách nhiệm; trạng thái tối giản và không trùng nghĩa.
8. **Exception-first completeness:** Có tối thiểu các ngoại lệ quan trọng: thiếu dữ liệu, từ chối, hủy, sửa đổi, trùng lặp, lỗi bên ngoài, sai lệch chi phí (nếu liên quan).
9. **No unnecessary complexity:** Không đề xuất microservices, workflow engine, dashboard hay module mới chỉ vì “chuẩn ERP”.
10. **Separate fact from proposal:** Gắn nhãn `[Đã xác nhận]`, `[Đề xuất]`, `[Cần xác nhận]` với nội dung có tác động thiết kế.

## 3. Đầu vào
- Bắt buộc: tên/mã quy trình từ Skill 2; mô tả BPMN Level 1 hoặc bảng hoạt động, vai trò, quyết định, đầu ra.
- Khuyến nghị: Skill 1, mục tiêu MVP, vai trò thực tế, quy định hiện hành, biểu mẫu, trường dữ liệu và các ngoại lệ.
- Nếu thiếu đầu vào: sử dụng thông tin đã có; nêu giả định; hỏi tối đa 5 câu quan trọng, ưu tiên các câu làm thay đổi logic. Không chặn việc xây dựng bản nháp nếu có thể tiến hành an toàn.

## 4. Quy trình thực hiện
### Bước 1 — Xác lập ranh giới
Ghi: mã subprocess, mục tiêu, sự kiện bắt đầu, điều kiện kết thúc, tiền điều kiện, đầu vào, đầu ra, vai trò, hệ thống liên quan, các subprocess trước/sau.

### Bước 2 — Phân rã thành thao tác nguyên tử hợp lý
Mỗi hoạt động là một hành động có thể quan sát/kiểm thử; tránh tách từng cú nhấp chuột thành một bước nghiệp vụ. Phân biệt:
- **User Task:** người dùng tạo, xem, chọn, sửa, xác nhận, gửi.
- **System Task:** ERP tự động sinh mã, tra cứu, tính toán, kiểm tra, lưu, cập nhật, thông báo.
- **External Task:** đối tác/khách hàng/hệ thống khác thực hiện.
- **Decision:** điều kiện và nhánh Có/Không hoặc các lựa chọn rõ ràng.

### Bước 3 — Vẽ luồng TO-BE tối giản
Từ Start đến End, thể hiện swimlane theo **vai trò** (không mặc định theo phòng ban), task, gateway, nhánh ngoại lệ chính và kết quả. Không vẽ BPMN sai ký pháp; Mermaid flowchart chỉ là bản xem nhanh, **không gọi là BPMN 2.0 chuẩn**. Nếu có khả năng tạo BPMN 2.0 XML, dùng startEvent, endEvent, task, gateway, sequenceFlow, laneSet, messageFlow (chỉ giữa pool khác nhau), DI và kiểm tra cú pháp/logic.

### Bước 4 — Đặc tả bảng bước xử lý
Với từng bước, ghi ID, người thực hiện, hành động, dữ liệu đầu vào, xử lý hệ thống, điều kiện, kết quả, trạng thái và thông báo/lỗi nếu có. Liên kết ID bước với nút trên sơ đồ.

### Bước 5 — Business Rules và trạng thái
Tạo BR-xx: mô tả quy tắc, điều kiện áp dụng, phản ứng hệ thống, nguồn xác nhận. Tạo bảng trạng thái: trạng thái hiện tại → sự kiện → điều kiện → trạng thái mới; đánh dấu trạng thái cuối, hoàn tác và sửa/hủy.

### Bước 6 — Dữ liệu và quyền hạn tối thiểu
Liệt kê trường bắt buộc/tùy chọn, nguồn dữ liệu, mặc định, ràng buộc, quyền tạo/xem/sửa/hủy/xác nhận. Không tự gán quyền nếu chưa được xác nhận.

### Bước 7 — Tối ưu trải nghiệm SME
Đánh giá: số thao tác người dùng, lần nhập liệu, số bàn giao, số phê duyệt, màn hình/biểu mẫu, thời gian chờ. Đề xuất gộp bước, mặc định thông minh, cập nhật hàng loạt, cảnh báo thay vì chặn khi phù hợp. Phân biệt quy trình AS-IS và TO-BE nếu có AS-IS; không trình bày TO-BE là thực trạng.

### Bước 8 — Bàn giao phát triển và nghiệm thu
Tạo danh sách chức năng theo ưu tiên MVP/P2; user stories hoặc use cases ngắn; acceptance criteria dạng Given–When–Then bao phủ luồng chính và ngoại lệ; danh sách câu hỏi mở và traceability đến Skill 1–2.

## 5. Cấu trúc đầu ra chuẩn
### A. Thẻ subprocess
| Thuộc tính | Nội dung |
|---|---|
| Mã / tên | SPxx.yy – ... |
| Mục tiêu | ... |
| Bắt đầu / kết thúc | ... |
| Vai trò | ... |
| Đầu vào / đầu ra | ... |
| Điều kiện tiên quyết | ... |
| Nguồn Level 1 | ... |

### B. Sơ đồ luồng chi tiết
Sơ đồ có start/end, vai trò, user/system/external task, gateway và nhánh lỗi quan trọng. Nếu dùng Mermaid, ghi rõ “Sơ đồ mô tả luồng (không thay thế BPMN XML chuẩn)”.

### C. Bảng thao tác chi tiết
| Bước | Vai trò | Thao tác người dùng / tác vụ hệ thống | Dữ liệu | Điều kiện / BR | Kết quả / trạng thái |
|---|---|---|---|---|---|

### D. Business rules
| Mã BR | Quy tắc | Khi nào áp dụng | Hệ thống xử lý | Trạng thái xác nhận |
|---|---|---|---|---|

### E. Vòng đời trạng thái
| Từ trạng thái | Sự kiện | Điều kiện | Sang trạng thái | Vai trò |
|---|---|---|---|---|

### F. Dữ liệu, phân quyền, ngoại lệ
- Dữ liệu tối thiểu và nguồn dữ liệu.
- Ma trận quyền thao tác theo vai trò (chưa rõ phải đánh dấu).
- Ngoại lệ: nguyên nhân, phát hiện, cách xử lý, kết quả.

### G. Đề xuất tối giản hóa
| Điểm ma sát | Đề xuất | Tác động | Cần xác nhận |
|---|---|---|---|

### H. Functional handoff
| ID | Chức năng / user story | Mức ưu tiên | Acceptance criteria | Traceability |
|---|---|---|---|---|

### I. Câu hỏi xác nhận
Chỉ hỏi các câu ảnh hưởng trực tiếp đến thiết kế, ưu tiên lựa chọn rõ ràng, không quá 5 câu mỗi vòng.

## 6. Kiểm tra chất lượng bắt buộc
- Mỗi nhánh quyết định có điều kiện, đường đi và điểm kết thúc/nhập lại rõ ràng.
- Không có task vô chủ, trạng thái mơ hồ, hoặc ngoại lệ khiến quy trình mắc kẹt.
- Dữ liệu quan trọng có nguồn; tránh yêu cầu nhập lại.
- Không có phê duyệt không được chứng minh là cần thiết.
- Có thể chuyển trực tiếp sang backlog và test case mà không phải suy đoán hành vi cốt lõi.
- Các chức năng MVP không phụ thuộc vô lý vào tính năng nâng cao.
- Các quyết định chưa xác nhận không được coi là yêu cầu chính thức.

## 7. Cách kích hoạt
Ví dụ: “Dùng Skill 3 phân rã SP06 Đặt dịch vụ nhà cung cấp từ BPMN Level 1, ưu tiên SME ít bước phê duyệt. Xuất luồng thao tác, business rules, trạng thái và acceptance criteria.”

## 8. Ranh giới với Skill 1 và 2
- Skill 1: **Doanh nghiệp làm những nghiệp vụ gì?** (Value Chain, Level 0)
- Skill 2: **Các vai trò phối hợp theo quy trình nào?** (BPMN Level 1)
- Skill 3: **Người dùng thao tác gì và ERP phản hồi thế nào?** (Level 2 / functional decomposition)
