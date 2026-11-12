# Tiêu chuẩn đầu ra mặc định

Bốn tiêu chuẩn dưới đây áp dụng cho **mọi** RSD do skill tạo ra, kể cả khi người dùng không nhắc lại. Người dùng có thể nới hoặc siết từng tiêu chuẩn cho dự án; ghi điều chỉnh đó vào `BOI-CANH-DU-AN.md`.

1. Tài liệu có đầy đủ luồng thao tác và luồng ngoại lệ.
2. Mỗi bước có wireframe giao diện đi kèm.
3. Giao diện dễ sử dụng.
4. Người dùng ít phải thao tác.

Trước khi bàn giao, rà theo bảng tự kiểm ở mục 5 và nêu kết quả cho người dùng.

## 1. Đầy đủ luồng thao tác và luồng ngoại lệ

**Luồng chính (mã L).** Mỗi luồng gồm:

- điều kiện đầu;
- các bước đánh số. Mỗi bước ghi: ai làm, ở đâu, kiểu thao tác, dữ liệu nhập và dữ liệu điền sẵn, hệ thống xử lý gì, ghi gì, màn hình hiện gì;
- kết quả: trạng thái và dữ liệu sau luồng.

Luồng phải bao phủ đủ vòng đời của đối tượng (tạo → xử lý → hoàn tất → hủy, đóng, mở lại nếu có) và mọi thao tác trong danh sách màn của nguồn. Lập bảng truy vết “mã yêu cầu nguồn → luồng L”, không để mã nguồn nào không có luồng.

**Ngoại lệ (mã E).** Với **mỗi luồng**, rà danh mục dưới đây. Mục nào áp dụng thì phải có ngoại lệ ghi rõ ba điều: điều kiện xảy ra, hệ thống phản hồi gì, người dùng phục hồi thế nào.

| Nhóm | Ví dụ cần nêu |
|---|---|
| Quyền và phạm vi | Không có quyền xem hoặc ghi; bản ghi ngoài phạm vi; quyền bị thu hồi giữa chừng |
| Trạng thái không cho phép | Thao tác khi hồ sơ đã khóa, đóng, hủy; điều kiện chuyển trạng thái chưa đủ |
| Dữ liệu nhập | Thiếu trường bắt buộc; sai định dạng; vượt giới hạn; trùng; ngày hoặc số không hợp lệ |
| Dữ liệu tham chiếu | Danh mục bị tắt; đối tượng liên kết đã xóa; thiếu cấu hình (mẫu, địa chỉ, sức chứa…) |
| Lưu, tải, gửi | Lỗi lưu; lỗi tải; gửi thất bại; **kết quả chưa xác định** (chống gửi trùng) |
| Đồng thời | Bản ghi bị sửa ở phiên khác; hai người cùng thao tác; bấm lặp |
| Hàng loạt | Thành công một phần; dòng đổi trạng thái sau khi đã chọn; thử lại phần lỗi |
| Tệp | Sai định dạng; quá dung lượng; tải lỗi; dòng lỗi khi nhập |
| Thay đổi từ nguồn | Dữ liệu nguồn đổi sau khi đã dùng hoặc đã gửi ra ngoài; phiên bản mới thay thế |
| Hủy, đóng, mở lại | Hủy giữa chừng; mở lại sau khi đóng; dữ liệu liên kết (tài chính, đã gửi) |
| Thời gian | Quá hạn; ngày đã qua; múi giờ |
| Rỗng | Chưa có dữ liệu, phân biệt với không khớp bộ lọc |
| Dạng xem | Cột Kanban lỗi tải hoặc rỗng; tháng, khoảng ngày rỗng; bản ghi không có ngày; quá nhiều bản ghi trong ngày; đổi dạng khi đang chọn dòng; bản ghi đổi trạng thái khi đang xem |
| Bên ngoài | Bên ngoài từ chối, không phản hồi, phản hồi một phần |

Ngoại lệ có giao diện riêng (bị chặn, banner lỗi, kết quả một phần) phải có mã W. Mỗi ngoại lệ quan trọng có ít nhất một AC.

## 2. Wireframe đi kèm từng bước

- **Mỗi bước làm giao diện thay đổi đều có mã W:** mở form, bảng trượt hoặc hộp thoại; chọn hàng loạt; xem trước; trạng thái sau khi lưu, gửi, áp dụng; ngoại lệ có giao diện riêng. Bước không đổi giao diện (ví dụ “bấm Lưu” ngay trong form đã có hình) dẫn chiếu W của bước trước.
- **Mỗi chuỗi trạng thái người dùng nhìn thấy có ảnh cho từng trạng thái**, ví dụ Cần đặt → Chờ kết quả → Đã xác nhận.
- **Ở mục 3, chèn ảnh ngay dưới bước** (thụt lề trong danh sách đánh số), để đọc luồng là thấy giao diện. Mỗi ảnh chỉ nhúng một lần; không có mục wireframe riêng. Luồng xuyên nhiều tab đặt ở tab nơi luồng bắt đầu, theo thứ tự bước.
- **Mỗi ảnh có tên** trong alt (`![Wxx · tên màn](…)`); mục đích, chỗ bấm và phản hồi viết trong câu của bước ngay trên ảnh. Ảnh thể hiện vị trí thao tác và dữ liệu cần để ra quyết định.
- **Kiểm tra tự động:** `check-rsd` báo bước đánh số ở mục 3 chưa có mã W và mục con của mục 3 chưa có ngoại lệ (mã E). Mỗi cảnh báo phải được sửa, hoặc giải thích vì sao không cần.

## 3. Dễ sử dụng

| Tiêu chí | Cách đạt |
|---|---|
| Biết ngay việc cần làm | Màn tổng quan chỉ liệt kê việc chưa đạt, mỗi việc một nút đi thẳng tới nơi xử lý. Số trên tab là số việc cần làm |
| Một thao tác, một chỗ bấm | Không lặp nút hoặc liên kết cho cùng một việc; không lặp thông tin của header (xem `quy-tac-trien-khai.md` mục 2) |
| Thấy đủ để quyết định | Trước khi bấm: thấy đối tượng, trạng thái, giá trị đối chiếu và hành động tiếp theo |
| Trạng thái rõ ràng | Nhãn trạng thái chính tách khỏi chỉ báo phụ. Nhãn dùng thuật ngữ của dự án, màu nhất quán |
| Nút bị khóa có lý do | Mọi nút bị khóa có chú thích lý do ngay bên cạnh, hoặc hiện lý do khi bấm |
| Phản hồi sau thao tác | Đang lưu, thành công, lỗi đều có phản hồi. Giữ ngữ cảnh (bộ lọc, vị trí); dòng ra khỏi bộ lọc thì có liên kết xem lại |
| Phòng lỗi | Kiểm tra cạnh trường; giữ dữ liệu khi lỗi; xác nhận trước thao tác có hậu quả lớn; cảnh báo khi rời form chưa lưu |
| Nhất quán | Cùng vị trí nút chính, cùng kiểu thao tác cho cùng loại việc giữa các tab |
| Chữ dễ hiểu | Nhãn nút là động từ cụ thể (Gửi email, Áp dụng thay đổi), không dùng nhãn chung chung như OK hay Xử lý |

## 4. Ít thao tác

Rà từng luồng và áp dụng các kỹ thuật dưới đây khi phù hợp với nghiệp vụ. Ở cuối mục 3 hoặc trong ghi chú bàn giao, nêu số bước của luồng chính trước và sau khi tối ưu nếu thay đổi đáng kể.

| Kỹ thuật | Ví dụ |
|---|---|
| Điền sẵn từ dữ liệu đã có | Người nhận, số lượng, giá gợi ý, chuyến bay chung, lý do lấy từ nguồn thay đổi |
| Mặc định hợp lý | Thời điểm hiện tại, người đang đăng nhập, phương án được dùng nhiều nhất |
| Mở thẳng đúng bước | Bấm Đặt là ra ngay email đã soạn sẵn; liên kết sâu tới đúng tab và bộ lọc |
| Sửa tại chỗ | Ô chọn tại chỗ cho trường hay đổi; lưu ngay, không mở form |
| Hàng loạt | Chọn nhiều rồi áp dụng một lần; gộp theo người nhận |
| Tự động theo sự kiện | Tự tính trạng thái, tự hoàn tất việc khi sự kiện xảy ra, tự soạn nháp. Không tự gửi ra ngoài |
| Gộp bước | Ghi sự cố kèm chi phí trong một lần lưu; nút “Lưu và đặt ngay” khi việc tiếp theo gần như chắc chắn |
| Tổng hợp thay người dùng | Gom yêu cầu riêng thành một câu; tóm tắt kết quả sau khi áp dụng |
| Không hộp thoại thừa | Hộp thoại xác nhận chỉ dùng cho hậu quả lớn; còn lại dùng thông báo ngắn kèm hoàn tác hoặc liên kết |
| Giữ ngữ cảnh | Sau khi lưu, ở lại đúng chỗ; không bắt người dùng tìm lại dòng |

Không đánh đổi kiểm soát lấy tốc độ: thao tác gửi thật, thao tác tài chính và thao tác khóa vẫn cần điểm bấm và xác nhận rõ ràng.

## 5. Bảng tự kiểm trước khi bàn giao

| Mục | Đạt khi |
|---|---|
| Truy vết | Mọi mã yêu cầu nguồn có luồng L; mọi luồng có AC |
| Ngoại lệ | Mỗi luồng đã rà đủ danh mục ở mục 1; ngoại lệ có giao diện riêng có W |
| Ảnh theo bước | `check-rsd` không còn cảnh báo bước thiếu W, hoặc mỗi cảnh báo đã được giải thích. Ảnh được chèn dưới bước ở mục 3 |
| Trạng thái sau thao tác | Mỗi trạng thái người dùng nhìn thấy có ảnh |
| Dễ dùng | Đã rà toàn bộ ảnh theo bảng ở mục 3. Không còn nút trùng hoặc thông tin lặp |
| Ít thao tác | Đã rà từng luồng theo bảng ở mục 4. Các tự động có ghi ở bước luồng hoặc quy tắc R gây ra nó |
| Không lặp | Mỗi ảnh nhúng một lần; không còn mục wireframe riêng, bảng thao tác theo mã W hay bảng sự kiện tự động; quy tắc R không kể lại luồng (`khung-rsd.md`, “Những chỗ hay bị lặp”) |
| Nhất quán | Số liệu trên ảnh khớp nhau; thuật ngữ đúng `BOI-CANH-DU-AN.md`; không còn nhãn hoặc mã W cũ |
| Dạng xem | Màn danh sách đã xét Kanban, Lịch, Dòng thời gian theo `quy-tac-trien-khai.md` mục 12; mỗi dạng giữ lại có ảnh; số đếm cột Kanban khớp chip; bộ chuyển dạng xem có trên mọi ảnh của danh sách |
