# Quy tắc tương tác và dữ liệu

Chọn các quy tắc phù hợp với màn. Các ngưỡng và chính sách nghiệp vụ phải được xác nhận từ nguồn hoặc người dùng.

## 1. Kiểu thao tác

- **Trên bảng** dùng cho lọc, chọn dòng, điều hướng và thao tác nhanh khi đã đủ ngữ cảnh. Nút trên dòng truyền đúng ID của dòng.
- **Ô chọn tại chỗ** dùng khi đổi một trường hay dùng của một dòng (người thực hiện, tiến độ). Chọn xong thì lưu ngay; lỗi thì trả về giá trị cũ.
- **Bảng trượt** dùng để xem hoặc sửa đầy đủ một hạng mục, duyệt nội dung, hoặc xem trước rồi gửi.
- **Form tại tab** dùng cho thay đổi cấp hồ sơ, hoặc sửa nhiều dòng có một nút lưu chung (phân phòng, quyết toán).
- **Hộp thoại** chỉ dùng khi cần xác nhận hệ quả đáng kể: bắt đầu, kết thúc, đóng, mở lại, bỏ, nhập tệp.
- Ghi rõ từng thao tác thuộc kiểu nào.

## 2. Một thao tác, một chỗ bấm

- Ở mỗi trạng thái màn hình, mỗi thao tác chỉ có **một** điểm bấm. Không đặt cùng lúc nút trên dòng, liên kết trong ô và nút trên đầu bảng cho cùng một việc.
- Chip lọc không được dùng nhãn trông như hành động (ví dụ “Chưa phân công” đặt cạnh nút “Phân công”). Nếu dòng tự thể hiện được trạng thái (như ô “Chọn người” viền nét đứt), không cần thêm chip lọc riêng.
- Khi người dùng chọn nhiều dòng, nút và ô chọn trên dòng tạm ẩn. Thanh hàng loạt là nơi thao tác duy nhất, và chứa sẵn ô nhập ngay trên thanh (không thêm nút “Phân công…” rồi lại mở một khung riêng).
- Thông tin đã có ở header (mã hồ sơ, khách, ngôn ngữ, người phụ trách, liên kết nguồn) không lặp lại trong nội dung tab.
- Banner không liệt kê lại những gì chip lọc và dòng tô màu đã thể hiện.
- Nút “Xem chi tiết” hoặc “Xem phiên bản” bị bỏ nếu nội dung đó đã hiện ngay bên dưới.
- Kết quả hàng loạt có lỗi: chỉ một nút “Gửi lại phần lỗi” ở banner; dòng lỗi chỉ ghi lý do.
- Trước khi bàn giao, rà từng wireframe theo các điểm trên và ghi nguyên tắc này vào phần quy ước giao diện dùng chung ở mục 2 của RSD.

## 3. Màn tổng quan

- Mỗi khối trả lời một câu hỏi. Mặc định chỉ dùng hai khối: **Việc cần làm** và **Lịch trình**. Khi đang vận hành, khối Việc cần làm đổi thành **Hôm nay** (có nút ghi nhanh trên tiêu đề khối).
- Khối Việc cần làm chỉ liệt kê mục **chưa đạt**. Mỗi mục một dòng, gồm tên, mô tả ngắn có số liệu và **một** nút mở đúng tab và bộ lọc. Mục đã đạt gộp thành một dòng “✓ Đã xong: …”. Khi mọi mục đều đạt, khối chỉ hiện “✓ Sẵn sàng …”.
- Không dùng thanh tiến độ hoặc khối thông tin chung lặp lại header hay các tab khác.

## 4. Dữ liệu để ra quyết định

- Trước khi bấm, người dùng phải thấy đối tượng, trạng thái, giá trị cần đối chiếu và hành động tiếp theo.
- Trong form phải thấy ngữ cảnh, nguồn điền sẵn (nhãn nhỏ: Tự điền, Từ Booking, Gợi ý), trường bắt buộc và trường chỉ đọc.
- Chỉ báo phụ (chờ phản hồi, có thay đổi, quá hạn) được tách khỏi trạng thái chính.

## 5. Trạng thái và tự động

- Mỗi chuyển trạng thái phải quy định đủ năm điều: sự kiện kích hoạt, điều kiện, tác nhân, dữ liệu ghi và phản hồi giao diện.
- Trạng thái của hạng mục được **tính** từ dữ liệu con (lần đặt, yêu cầu, thay đổi), theo một danh sách ưu tiên có đánh số. Người dùng không chọn trực tiếp.
- Khi đã đủ dữ liệu để tính, điền hoặc soạn nháp, hệ thống tự làm và hiện kết quả: email soạn sẵn, câu yêu cầu riêng tổng hợp, giá gợi ý.
- Gửi thật, tạo giao dịch hoặc khóa hồ sơ phải có điểm kích hoạt và hậu quả riêng. **Không tự gửi ra ngoài.**
- Khi dữ liệu đổi sau khi đã gửi cho bên ngoài, dùng **trạng thái việc cần làm** thay cho chỉ báo mờ:
  - **Cần điều chỉnh:** dữ liệu đã gửi bị đổi. Email điều chỉnh soạn sẵn, kèm bảng dữ liệu cũ và mới.
  - **Cần hủy:** dịch vụ đã gửi bị bỏ, hoặc bị đổi sang NCC khác. Email hủy soạn sẵn, lý do điền từ nguồn thay đổi.
  - Gửi xong, hạng mục trở về nhãn tính từ dữ liệu (ví dụ Đã xác nhận), kèm chỉ báo “đang chờ” cho tới khi ghi kết quả.
  - Có lựa chọn “Không cần gửi”, bắt buộc ghi lý do.
- Mỗi trạng thái việc cần làm có một nút chính trên dòng. Lập bảng “Trạng thái → nút chính → menu ⋯”.

## 6. Thay đổi từ module khác (mẫu luồng)

Dùng khi một bộ phận khác sửa dữ liệu nguồn, ví dụ Kinh doanh sửa lịch trình sau khi Điều hành đã tạo hồ sơ:

1. **Bộ phận nguồn sửa ở màn của mình** rồi bấm “Gửi …”. Màn đang đặc tả không thêm màn hoặc nút cho bộ phận nguồn phản hồi, trừ khi người dùng yêu cầu.
2. **Hồ sơ nhận** hiện banner “… có thay đổi” trên mọi tab, kèm **một** nút **Xem thay đổi**. Dữ liệu hồ sơ chưa đổi.
3. **Xem thay đổi** so sánh **bản cũ** (phiên bản đang áp dụng) với **bản mới**. Mỗi thay đổi một dòng: ngày hoặc vị trí, loại (Thêm, Bỏ, Đổi…), bản cũ, bản mới, và “Khi áp dụng vào hồ sơ”, nói rõ trạng thái từng mục sẽ đổi ra sao.
4. **Áp dụng thay đổi** áp dụng cả phiên bản trong một giao dịch: thành công hết hoặc không đổi gì. Hệ thống cập nhật các mục và soạn sẵn email Cần hủy hoặc Cần điều chỉnh, nhưng không tự gửi.
5. Sau khi áp dụng, chuyển tới nơi xử lý tiếp. Banner kết quả nêu số mục theo từng trạng thái; dòng bị ảnh hưởng có nhãn “Theo thay đổi vN”.

Quy tắc kèm theo:

- Trong lúc chờ áp dụng, khóa các thao tác gửi ra ngoài trên những mục bị thay đổi chạm tới.
- Phiên bản mới gửi trước khi áp dụng sẽ thay thế phiên bản đang chờ.
- Bấm lặp hoặc hai người cùng áp dụng chỉ tạo một lần áp dụng.
- Thay đổi chạm tới ngày đã qua thì không áp dụng được.
- Hồ sơ đã đóng không nhận thay đổi.
- Lập bảng xử lý theo hai cột: “Mục chưa gửi ra ngoài” và “Mục đã gửi / đã xác nhận”, với các hàng Thêm, Bỏ, Đổi đối tượng, Đổi ngày / số lượng / yêu cầu.
- Yêu cầu gửi ngược sang bộ phận nguồn (ví dụ báo Kinh doanh đổi lịch trình) chỉ là thông báo có ngữ cảnh điền sẵn. Yêu cầu tự đóng khi thay đổi có chạm tới mục đó được áp dụng.

## 7. Hàng loạt

- Nêu điều kiện được chọn, phạm vi “chọn tất cả” (chỉ trong trang đang xem), số dòng đã chọn và loại dòng không được chọn.
- Nêu hành động áp dụng, cách gom nhóm (ví dụ gộp email theo NCC), kết quả theo từng dòng hoặc nhóm, và cách thử lại phần lỗi.
- Không suy diễn thao tác lên mọi kết quả lọc từ một thao tác chọn trang. Quy định hành vi khi một dòng đổi trạng thái sau khi đã được chọn.

## 8. Xử lý và giữ ngữ cảnh

- Mô tả đủ các trạng thái: đang tải, rỗng (phân biệt “chưa có dữ liệu” với “không khớp bộ lọc”), lỗi, đang lưu, thành công, không có quyền.
- Sau khi lưu, giữ bộ lọc, vị trí và dòng đang chọn. Nếu dòng ra khỏi bộ lọc, đưa liên kết xem lại.
- Khi lỗi, giữ dữ liệu đã nhập và hiện lỗi cạnh trường.
- Khi rời form còn sửa chưa lưu, hỏi xác nhận.

## 9. Quyền, đồng thời và chống lặp

- Kiểm tra quyền và trạng thái lúc ghi. Chặn gửi hoặc lưu lặp.
- Phân biệt thành công, thất bại và chưa xác định. Với kết quả chưa xác định, tra theo mã yêu cầu trước khi cho gửi lại.
- Nêu cách xử lý: dữ liệu bị sửa ở phiên khác, kết quả từng phần, khóa và mở lại, lịch sử.

## 10. Tích hợp và tài chính

- Xác định hệ thống sở hữu dữ liệu, khóa tương quan và thời điểm đọc, ghi.
- Xác định dữ liệu nào giữ nguyên khi nguồn đổi, cách xử lý thiếu, trùng, lỗi, và nơi người dùng tiếp tục.
- Với giao dịch tài chính, nêu rõ nguồn duy nhất, chống tính hai lần và tỷ giá. Viết công thức rõ ràng, ví dụ P&L = doanh thu − chi phí + điều chỉnh ròng.
- Màn đang đặc tả không sửa dữ liệu tài chính do màn khác sở hữu (ví dụ giá bán đã chốt của Booking). Chênh lệch được xử lý ở màn sở hữu; màn hiện tại chỉ hiển thị hoặc dẫn liên kết.

## 11. Chia sẻ dữ liệu ra ngoài

- Xác định tập cột theo từng loại người nhận, xem trước đúng phạm vi, địa chỉ nhận, mẫu, tệp và điểm gửi.
- Giữ bản đã gửi, thời điểm, người thao tác và trạng thái.
- Lập bảng “Dữ liệu gửi ra ngoài” gồm các cột: tài liệu, người nhận, nội dung, lúc gửi thật, dữ liệu được lưu lại.
- Gửi email thật hoặc thay đổi hệ thống ngoài chỉ thực hiện khi có yêu cầu và quyền riêng. Mô tả trong RSD không cấp quyền thực hiện.

## 12. Dạng xem của màn danh sách

Một danh sách có thể có nhiều cách nhìn cùng một tập dữ liệu. Chọn dạng theo **đối tượng** (có trạng thái, có ngày, có người phụ trách) và **vai trò** (ai dùng để làm gì), không thêm dạng chỉ để đủ bộ.

**Chọn dạng xem**

| Dạng | Thêm khi | Không thêm khi | Câu hỏi dạng này trả lời |
|---|---|---|---|
| Bảng | Luôn có, là mặc định | — | Rà, sắp xếp, so sánh cột, chọn nhiều dòng |
| Kanban | Đối tượng có từ 3 trạng thái người dùng theo dõi hằng ngày; số bản ghi mỗi trạng thái vừa phải | Chỉ có 2 trạng thái (Hiệu lực, Đã hủy); trạng thái chỉ là cờ bật tắt; danh mục, cấu hình | Mỗi trạng thái đang có bao nhiêu việc, việc nào kẹt |
| Lịch (tháng, tuần) | Đối tượng có ngày hoặc khoảng ngày nghiệp vụ (ngày đi, ngày khởi hành, hạn thanh toán, ngày sử dụng) | Chỉ có ngày tạo, ngày sửa | Ngày nào dồn việc, việc nào sắp đến |
| Dòng thời gian (theo người hoặc nguồn lực) | Có khoảng ngày và có người phụ trách, nhân sự, phương tiện cần chia tải | Không có người hoặc nguồn lực gắn với bản ghi | Ai đang giữ việc gì, việc nào chồng ngày, việc nào chưa có người |

- **Cột Kanban** là đúng các trạng thái đã chốt của đối tượng, theo thứ tự vòng đời. Không tạo giai đoạn mới chỉ để có cột. Trạng thái kết thúc chiếm số lượng lớn (Đã đóng, Đã hủy, Đã có Booking) thì thu gọn mặc định hoặc chỉ tải bản ghi cập nhật trong một khoảng (ví dụ 90 ngày, đổi được ở đầu cột); số đếm cột vẫn là tổng.
- **Mốc ngày của Lịch** phải ghi rõ (ví dụ thời gian đi, ngày khởi hành → ngày kết thúc, hạn từng đợt thanh toán). Có nhiều mốc thì có bộ chọn mốc, mặc định theo vai trò. Bản ghi chưa có ngày cụ thể (chỉ có tháng dự kiến) nằm ở khay riêng, không đặt vào ô ngày.
- **Mặc định theo vai trò** khi các vai trò dùng màn khác nhau (ví dụ Điều hành mở Dòng thời gian theo người phụ trách; Kinh doanh, Kế toán mở Lịch tháng).

**Quy tắc chung**

- Bộ chuyển dạng xem (nhóm nút có biểu tượng và nhãn) đặt ở cuối hàng chip trạng thái; chỉ hiện các dạng màn đó có.
- Tìm kiếm, bộ lọc, phạm vi bản ghi và quyền **dùng chung** cho mọi dạng; đổi dạng không mất bộ lọc. Ở Kanban hàng chip trạng thái ẩn vì cột thay chip; chip đang chọn được giữ và áp dụng lại khi về Bảng hoặc Lịch.
- Số đếm cột Kanban bằng số trên chip tương ứng với cùng bộ lọc.
- Bấm thẻ hoặc thanh giống bấm dòng: mở hồ sơ ở đúng tab đích.
- **Không kéo thả mặc định.** Kanban và Lịch chỉ để xem; đổi trạng thái, đổi ngày làm ở hồ sơ, nơi có đủ kiểm tra. Chỉ thêm kéo thả khi người dùng chốt, và khi đó phải đặc tả điều kiện, hộp xác nhận, ngoại lệ như thao tác đổi trạng thái gốc.
- **Thao tác hàng loạt chỉ ở Bảng.** Thao tác tại chỗ đã có trên dòng (ví dụ ô chọn người phụ trách) được giữ trên thẻ Kanban theo đúng quy tắc của dòng; Lịch, Dòng thời gian không có thao tác ghi.
- Xuất tệp theo bộ lọc, không theo tháng hay cột đang xem; ghi rõ phạm vi khi xuất từ Kanban (các cột đang tính).
- Hệ thống nhớ dạng xem cuối cùng theo người dùng và màn (kể cả tháng hay tuần, độ rộng dòng thời gian, cột thu gọn). Lần đầu là Bảng. Lối vào từ thông báo mở Bảng với bộ lọc của thông báo.
- Giữ ngữ cảnh khi quay lại từ hồ sơ: dạng xem, bộ lọc, tháng hoặc khoảng ngày đang xem, vị trí cuộn. Bản ghi đổi trạng thái thì thẻ hoặc thanh mờ tại chỗ kèm nhãn mới, như dòng ra khỏi bộ lọc.

**Lịch và Dòng thời gian**

- Lịch tháng: tuần bắt đầu Thứ 2; mỗi bản ghi là một thanh từ ngày đầu đến ngày cuối, màu theo trạng thái, có chú giải; thanh vắt qua tuần có dấu ◂ ▸. Mỗi tuần tối đa 3 hàng thanh, còn lại gộp “+n”; bấm “+n” mở danh sách của ngày đó. Dạng Tuần hiện đủ.
- Dòng thời gian: mỗi hàng là một người hoặc nguồn lực, kèm tải hiện tại; hàng “Chưa có người phụ trách” ở trên cùng, tô nhạt; bản ghi chưa giao viền nét đứt. Hai bản ghi chồng ngày trong một hàng xếp thành hai dòng. Có độ rộng (2 tuần, 5 tuần) và nút ‹ › Hôm nay.
- Đổi tháng hoặc khoảng không đổi bộ lọc ngày; khoảng ngoài bộ lọc thì rỗng kèm liên kết xóa lọc.
- Giới hạn số bản ghi vẽ trên lịch (ví dụ 500); vượt thì báo thu hẹp bộ lọc hoặc dùng Bảng.

**Ngoại lệ cần rà cho mỗi dạng xem:** một cột hoặc khoảng không tải được (cột lỗi có Thử lại, cột khác vẫn dùng); cột hoặc tháng rỗng; bản ghi không có ngày; quá nhiều bản ghi trong một ngày hoặc khoảng; đang chọn dòng ở Bảng rồi đổi dạng (bỏ lựa chọn); bản ghi đổi ở phiên khác; người chỉ có quyền xem; màn hẹp (Kanban cuộn ngang, Lịch chuyển Tuần).

**Ghi trong RSD:** mục 2 có bảng “Dạng xem” (dạng, dùng khi, cách trình bày, khác với Bảng); mục 3 có luồng xem từng dạng kèm ngoại lệ, chỗ bấm và ảnh dưới bước; mục 4 có quy tắc R cho Dạng xem và ghi nhớ, Kanban, Lịch; mục 5 có đối tượng “Thiết lập dạng xem” và cách tải theo dạng; mục 6 có AC cho đổi dạng, số đếm cột, không kéo thả, ghi nhớ, xuất tệp.
