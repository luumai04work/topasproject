# Bối cảnh dự án · TOPAS

Dùng chung cho mọi RSD của dự án. Mỗi dòng ghi nguồn: tài liệu, người dùng chốt ngày nào, hoặc “suy ra, chờ xác nhận”. Tạo ngày 11/11/2026 khi viết RSD DH07; bổ sung cùng ngày khi viết RSD DH01, DH02, DH03, DH04, DH06, KD01-KD02, KD03-KD04, KD05, và khi thêm dạng xem cho KD05, DH07; bổ sung 12/11/2026 khi viết RSD KD07, KD08, KT01; sửa 12/11/2026 sau rà soát mâu thuẫn giữa các RSD (6 quyết định của người dùng: trạng thái yêu cầu khi hủy Booking, người phụ trách yêu cầu theo Booking và Chuyển sang Điều hành tự ghi Chốt, chuyển phụ trách chiến dịch, Quản trị mở lại yêu cầu, loại tiền phải trả NCC, ngưỡng Đến hạn); sửa 12/11/2026 theo hai yêu cầu riêng của doanh nghiệp (không có luồng duyệt; Kế toán không làm chốt chặn cho Kinh doanh và Điều hành): bỏ điều kiện thanh toán khi tạo hồ sơ Tour và bỏ Tạo sớm; Đóng Tour không còn chờ quyết toán; bổ sung 12/11/2026 khi viết RSD QT03 (nhật ký thao tác); bổ sung 12/11/2026 khi viết RSD QT01 (mật khẩu tạm, nhiều vai trò, khóa tài khoản); bổ sung 12/11/2026 khi viết RSD QT04 (quyền theo bộ phận, proposal không cấu hình ở QT04, lưu là áp dụng có phiên bản); bổ sung 12/11/2026 khi viết RSD QT05 (tỷ giá và tham số chung ở QT05, quyền sửa danh mục theo phòng, bỏ nhóm tuổi trẻ em khỏi QT05); bổ sung 12/11/2026 khi viết RSD QT06–QT12 (báo cáo: mốc kỳ, quyền xem, quy đổi tham khảo); sửa 12/11/2026 sau rà soát lần hai (3 quyết định: publish proposal ở chế độ điều chỉnh, một email cho mỗi NCC và loại việc, Quản trị mở lại hồ sơ Tour đã đóng); sửa 12/11/2026 sau rà soát lần ba (6 quyết định: thời điểm hồ sơ Tour nhận thời gian và số khách, bỏ nhãn yêu cầu riêng và sức chứa theo hạng phòng ở DH08, loại tiền phải trả NCC chỉ sửa ở DH08, thời điểm chụp mẫu email chiến dịch, thứ tự dòng giá theo hạng phòng, đợt trả NCC khác loại tiền).

## Lĩnh vực và mô hình

- Ngành, mô hình kinh doanh: doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized (nguồn: `luồng/danh-sach-man-hinh-level1.md`).
- Khách hàng của hệ thống, quy mô: doanh nghiệp vừa và nhỏ; khách là đoàn hoặc đại lý nước ngoài, phục vụ theo ngôn ngữ (suy ra, chờ xác nhận).
- Mẫu nghiệp vụ áp dụng: `references/mau-nghiep-vu-lu-hanh.md`.

## Tổ chức và vai trò

| Vai trò | Phòng ban | Việc chính | Phạm vi bản ghi mặc định |
|---|---|---|---|
| Kinh doanh | Kinh doanh | Tour mẫu, khách hàng, yêu cầu Tour, báo giá, Booking, chăm sóc | Booking mình phụ trách và hồ sơ Tour của Booking đó (RSD DH07, DH08; người phụ trách hồ sơ Tour là Điều hành); mọi Tour mẫu (RSD KD01-KD02); xem mọi khách hàng, chỉ sửa khách mình phụ trách (chốt 11/11/2026, RSD KD03-KD04); xem mọi yêu cầu Tour, chỉ xử lý yêu cầu mình phụ trách (chốt 11/11/2026, RSD KD05) |
| Điều hành | Điều hành | Hồ sơ Tour, đặt dịch vụ, khách đoàn, nhân sự, quyết toán phần chi phí | Mọi hồ sơ Tour |
| Kế toán | Kế toán | Công nợ, thu chi, quyết toán | Mọi hồ sơ Tour |
| Quản trị hệ thống | — | Người dùng, phân quyền, cấu hình; chuyển người phụ trách khách hàng và yêu cầu Tour, kể cả hàng loạt (RSD KD03-KD04, KD05); chuyển người phụ trách Booking (RSD KD08) và chiến dịch chăm sóc (RSD KD09, KD10); mở lại yêu cầu Tour Đã hủy kèm đổi người phụ trách (RSD KD06 R22) | Toàn hệ thống |

## Thuật ngữ

| Thuật ngữ | Nghĩa | Không dùng thay bằng |
|---|---|---|
| Booking | Đơn đặt Tour tạo từ phiên bản báo giá đã chốt; trạng thái Hiệu lực hoặc Đã hủy | Đơn hàng, hợp đồng |
| Hồ sơ Tour | Hồ sơ điều hành của một Booking, gắn một Tour Code | Hồ sơ điều hành (chỉ dùng khi trích nguồn), Tour file |
| Tour Code | Mã hồ sơ Tour, dạng `TP-YYMM-NNNN` (RSD DH07 R02, chốt 11/11/2026) | Mã Tour |
| Hạng mục dịch vụ | Một dịch vụ trong hồ sơ Tour cần đặt với NCC | Dịch vụ con |
| NCC | Nhà cung cấp | Đối tác |
| Loại Tour | Phân loại Tour của yêu cầu và Booking (ví dụ Inbound đoàn, Customized riêng tư, MICE); danh mục ở QT05 (RSD DH01, giá trị là minh họa) | Dòng Tour |
| Mẫu checklist | Danh sách công việc khai báo ở DH01 cho một loại Tour; mỗi loại Tour một mẫu (chốt 11/11/2026) | Checklist mẫu, template |
| Mẫu mặc định | Mẫu checklist dùng khi Booking chưa có loại Tour hoặc loại Tour chưa có mẫu đang dùng (RSD DH01, suy ra, chờ xác nhận) | — |
| Việc cả hồ sơ / việc theo dịch vụ | Công việc mẫu sinh một lần cho hồ sơ / sinh cho từng hạng mục dịch vụ cùng loại (RSD DH01) | — |
| Đang dùng, Ngừng sử dụng | Hai giá trị của cho phép sử dụng NCC (RSD DH02 R04) | Hoạt động, Khóa, Vô hiệu |
| Hợp đồng hiện hành | Hợp đồng NCC có kỳ hiệu lực chứa hôm nay; tình trạng Còn hiệu lực, Sắp hết hạn, Hết hạn, Chưa có hợp đồng (RSD DH02 R01) | — |
| Hợp đồng áp dụng | Hợp đồng NCC có kỳ hiệu lực chứa ngày sử dụng dịch vụ; dùng khi tính giá, gợi ý phí hủy, lập lịch trả (RSD DH03 R02) | Hợp đồng hiện hành (khi nói về ngày sử dụng) |
| Sắp áp dụng | Tình trạng của một hợp đồng NCC có kỳ bắt đầu sau hôm nay; chỉ dùng ở từng dòng hợp đồng (RSD DH03 R01) | Chưa hiệu lực |
| Mùa giá | Khoảng ngày khai một lần cho mỗi hợp đồng NCC, dùng chung cho mọi dịch vụ của hợp đồng; mỗi mùa một cột giá (RSD DH03 R07) | Thời điểm giá |
| Gia hạn hợp đồng | Tạo hợp đồng kỳ sau từ hợp đồng cũ, sao chép mùa, chính sách, điều khoản và bảng giá, có điều chỉnh tỷ lệ (RSD DH03 R12) | Tái ký |
| Nhân sự | Người trong danh mục DH06 có thể được phân công phụ trách hồ sơ, thực hiện công việc hoặc phục vụ Tour; gồm Nội bộ và Cộng tác viên (chốt 11/11/2026, RSD DH06) | Người dùng, tài khoản (là khái niệm của QT01) |
| Nội bộ, Cộng tác viên | Hai loại nhân sự; chỉ Nội bộ được liên kết tài khoản đăng nhập ở QT01 (RSD DH06 R01) | Nhân viên chính thức, freelancer |
| Nhận phân công | Trạng thái bật/tắt của nhân sự; tắt thì không hiện khi chọn người mới, phân công đã có giữ nguyên (RSD DH06 R05) | Hoạt động, Khóa |
| Tour mẫu | Lịch trình mẫu theo ngày, mỗi ngày có nội dung và dịch vụ chọn từ danh mục NCC; mã `TM-NNN`; Cho phép sử dụng hoặc Không cho phép (RSD KD01-KD02) | Template, sản phẩm mẫu |
| Giá vốn tham khảo | Giá NCC tính theo một ngày khởi hành và số khách tham chiếu ở Tour mẫu; không lưu, không phải báo giá (RSD KD01-KD02 R07) | Giá Tour mẫu |
| Nhóm công việc | Danh mục QT05 phân loại nhân sự (Điều hành, Hướng dẫn viên, Trưởng đoàn…); mỗi nhóm khai các vai trò phục vụ Tour được nhận (RSD DH06 R02, chờ xác nhận) | Phòng ban |
| Khách hàng · Cá nhân, Doanh nghiệp | Hai loại khách hàng; doanh nghiệp (đại lý, công ty, tổ chức) có một hoặc nhiều người liên hệ; loại chỉ chọn khi tạo (chốt 11/11/2026, RSD KD03-KD04 R01) | Đối tác (khi nói về khách) |
| Người liên hệ, Liên hệ chính | Người của khách doanh nghiệp; đúng một liên hệ chính, là người nhận mặc định khi tạo yêu cầu Tour và email chăm sóc (RSD KD03-KD04 R01) | Đầu mối (dùng cho NCC) |
| Người phụ trách khách hàng | Người dùng Kinh doanh duy nhất được sửa hồ sơ khách và ghi chăm sóc; mặc định người tạo (chốt 11/11/2026, RSD KD03-KD04 R03) | Chủ khách hàng |
| Mã khách hàng | Dạng `KH-NNNNN`, không dùng lại (RSD KD03-KD04 R12) | — |
| Lịch sử Tour | Mục ghi tự động cho khách khi đóng Tour, theo Tour Code; không ghi cho hồ sơ kết thúc vì Booking đã hủy (RSD KD03-KD04 R06, RSD DH08) | Lịch sử sử dụng dịch vụ (chỉ dùng khi trích nguồn) |
| Ngày đóng Tour | Hồ sơ Tour giữ hai mốc: ngày đóng lần đầu và ngày đóng gần nhất (khi mở lại rồi đóng lại). Survey, Cần chăm sóc sau Tour, Tour gần nhất dùng ngày đóng lần đầu (RSD DH08 R16; suy ra, chờ xác nhận) | — |
| Cần chăm sóc sau Tour | Khách có Tour đóng trong 30 ngày chưa có ghi nhận chăm sóc từ ngày đóng (RSD KD03-KD04 R07, chờ xác nhận) | — |
| Ghi nhận chăm sóc | Lần chăm sóc do người phụ trách nhập: kênh, phản hồi, nội dung, kết quả (RSD KD03-KD04 R09) | Phản hồi (chỉ là một trường) |
| Yêu cầu Tour · Đang xử lý, Đã có Booking, Đã hủy | Ba nhóm trạng thái của yêu cầu, tính theo thứ tự Đã hủy → Đã có Booking → Đang xử lý; không có giai đoạn khác (chốt 11/11/2026, RSD KD05 R02). Đã có Booking chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu tự chuyển Đã hủy, khách đặt lại thì Mở lại yêu cầu (người dùng chốt 12/11/2026, RSD KD06 R02) | Đang báo giá, Chờ khách |
| Báo giá mới nhất | Phiên bản báo giá có số lớn nhất của yêu cầu, kèm kết quả Chốt, Cần điều chỉnh, Không chốt hoặc Chưa có kết quả (RSD KD05 R03) | Báo giá hiện hành |
| Người phụ trách yêu cầu | Người dùng Kinh doanh duy nhất được sửa, báo giá, hủy yêu cầu; mặc định người tạo; độc lập với người phụ trách khách hàng (chốt 11/11/2026, RSD KD05 R01). Khi yêu cầu có Booking Hiệu lực, luôn là người phụ trách Booking; chuyển phụ trách Booking thì yêu cầu chuyển theo (người dùng chốt 12/11/2026, RSD KD08 R11) | — |
| Mã yêu cầu | Dạng `YC-YYMM-NNNN`, NNNN tăng trong tháng, không dùng lại (RSD KD06 R03) | — |
| Hành trình | Lịch trình theo ngày và dịch vụ của một yêu cầu Tour; mỗi yêu cầu một hành trình hiện hành (RSD KD06 R07) | Chương trình (chỉ dùng sau Booking, RSD DH08) |
| Phiên bản báo giá, Phiên bản Chốt | Bản chụp không sửa của hành trình, điều kiện và giá tại lúc lưu; mỗi yêu cầu tối đa một phiên bản Chốt (chốt 11/11/2026, RSD KD06 R16, R17); phiên bản Chốt cũ bị thay khi Chuyển sang Điều hành thì thành Đã thay thế (RSD KD08 R09) | Báo giá hiện hành |
| Ngân sách của khách | Mức khách chấp nhận chi cho yêu cầu Tour: từ – đến, loại tiền, mỗi khách hoặc cả đoàn; so với giá bán bình quân, chỉ cảnh báo; không hiện trên proposal (RSD KD06 R26, 12/11/2026) | Budget (chỉ dùng khi trích lời người dùng) |
| Markup | % cộng trên giá vốn; hai cấp: theo hạng mục dịch vụ (Lưu trú, Di chuyển, Vé máy bay, HDV, Tham quan, Ăn uống, Khác) → chung (mặc định theo loại Tour); không đặt cho từng khoản; sửa được cho từng phiên bản (chốt 11/11/2026, bổ sung 12/11/2026, RSD KD06 R14) | Lãi, chiết khấu |
| Proposal | Trang báo giá do hệ thống tự tạo từ một phiên bản, publish thành link công khai English hoặc Tiếng Việt; khách xem và tải PDF trên đó (chốt 11/11/2026, RSD KD06 R18) | Báo giá PDF, file báo giá |
| Nhập tay (khoản giá) | Đơn giá người dùng nhập cho khoản thiếu hợp đồng hoặc ô giá, kèm ghi chú nguồn (RSD KD06 R15) | Giá tạm |
| Mã Booking | Dạng `BK-YYMM-NNNN` do KD08 cấp (dữ liệu RSD KD05, KD06, DH07; RSD KD07 R10) | — |
| Tình trạng đợt thanh toán · Còn hạn, Đến hạn, Quá hạn, Đã thu đủ | Tính cho từng đợt của Booking Hiệu lực từ hạn (KD08.2) và số đã thu (KT01); Đến hạn là hạn trong số ngày của ngưỡng Đến hạn; không phải trạng thái Booking (RSD KD07 R04) | Trạng thái thanh toán |
| Ngưỡng Đến hạn | Tham số chung Quản trị cấu hình, mặc định 7 ngày; KD07 và KT01 cùng đọc (người dùng chốt 12/11/2026) | — |
| Chưa có dữ liệu công nợ | Ghi thay cho số còn phải thu khi KT01 không trả số liệu cho Booking; không coi là 0 (chốt 12/11/2026, RSD KD07 R04) | 0, Chưa thu |
| Chiến dịch chăm sóc · Survey, Remarketing | Chiến dịch tự gửi email cho khách: Survey gửi khảo sát n ngày sau khi đóng Tour; Remarketing gửi chuỗi email theo lịch cho một nhóm khách; mã `CD-YYMM-NNN`; KD10 sở hữu, KD09 là danh sách (RSD KD09, 12/11/2026) | Campaign |
| Chiến dịch · Nháp, Đang chạy, Tạm dừng | Ba trạng thái của chiến dịch chăm sóc, không có trạng thái kết thúc; Remarketing đã gửi hết các bước vẫn Đang chạy, kèm chỉ báo Đã gửi hết các bước (chốt 12/11/2026, RSD KD09 R02) | Đã kết thúc, Hoàn tất |
| Người phụ trách chiến dịch | Người dùng Kinh doanh duy nhất được sửa, bật, tạm dừng chiến dịch; mặc định người tạo (chốt 12/11/2026, RSD KD09 R01); người phụ trách và Quản trị hệ thống chuyển được (người dùng chốt 12/11/2026, RSD KD09 R11) | — |
| Lần gửi (chiến dịch) | Một email Survey hoặc một email của một bước Remarketing gửi tới một khách; kết quả Đang gửi, Đã gửi hoặc Gửi lỗi; ghi theo mã khách (RSD KD09 R03, KD10) | — |
| Trang Survey, link Survey | Trang công khai của hệ thống; mỗi lần gửi Survey một link riêng, hạn 30 ngày, trả lời một lần; phản hồi tự ghi vào lần gửi (chốt 12/11/2026, RSD KD10 R12) | Form khảo sát bên ngoài |
| Nhóm khách mục tiêu | Tiêu chí chọn khách của Remarketing, tính lại ở mỗi bước gửi; có danh sách loại trừ (chốt 12/11/2026, RSD KD10 R08) | Phân khúc, segment |
| Dừng luồng | Khách không nhận các bước Remarketing sau khi đã có yêu cầu Tour mới kể từ lần gửi đầu tiên khách nhận của chiến dịch, hoặc tắt nhận email, hoặc bị bỏ khỏi chiến dịch (chốt 12/11/2026, RSD KD10 R09) | — |
| Chế độ điều chỉnh (KD06) | KD06 mở từ KD08 để sửa hành trình cho Booking Hiệu lực; giá tự tính lại, lưu thành phiên bản mới; không ghi kết quả ở chế độ này (chốt 12/11/2026, sửa cùng ngày, RSD KD08 R09) | Sửa Booking |
| Chuyển sang Điều hành, Đã thay thế | Nút ở KD08, bấm khi Kinh doanh đã trao đổi và khách đồng ý: hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking (không phải phiên bản số lớn nhất của yêu cầu), Booking cập nhật lên phiên bản đó, giữ mã, hồ sơ Tour nhận thay đổi; không hộp thoại; phiên bản cũ của Booking thành Đã thay thế (chốt 12/11/2026, sửa cùng ngày và rà soát lần hai, RSD KD08 v1.5 R09) | Cập nhật Booking, Gửi Điều hành (cách gọi cũ) |
| Khoản công nợ | Một khoản phải thu (khách) hoặc phải trả (NCC) trong sổ KT01, có các đợt (hạn, số tiền); nguồn: lịch thanh toán, phí hủy Booking, dịch vụ đã xác nhận, phí hủy NCC, phát sinh (RSD KT01 R02) | Công nợ (khi nói một khoản) |
| Giao dịch · Hiệu lực, Đã hủy | Thu từ khách, Hoàn cho khách, Chi trả NCC, Nhận hoàn từ NCC ghi ở KT01; mã `GD-YYMM-NNNN`; không sửa số tiền, không xóa, chỉ hủy kèm lý do (chốt 12/11/2026, RSD KT01 R12) | Phiếu thu, phiếu chi |
| Tình trạng khoản · Còn hạn, Đến hạn, Quá hạn, Đã tất toán | Tính từ hạn và số còn; Đến hạn theo ngưỡng Đến hạn; đợt tất toán hiện Đã thu đủ hoặc Đã trả đủ (RSD KT01 R03) | Trạng thái thanh toán |
| Tiền thừa | Phần khoản thu vượt tổng còn của mọi đợt của Booking; hoàn cho khách hoặc dùng cho đợt mới (chốt 12/11/2026, RSD KT01 R06) | Trả trước, số dư âm |
| Chờ điều chỉnh, Cần hoàn, Phí giữ lại | Booking đã hủy chưa ghi điều chỉnh; số đã thu vượt phí giữ lại sau điều chỉnh; số tiền khách chịu khi hủy theo chính sách hoàn hủy (RSD KT01 R07) | Phí hủy (dùng cho NCC) |
| Chính sách hoàn hủy Booking | Nhóm trong QT05: bậc “hủy trước ngày khởi hành từ N ngày → giữ lại X%”, có mặc định và theo loại Tour; chụp vào Booking lúc tạo (chốt 12/11/2026) | Điều khoản hủy (chỉ dùng khi trích nguồn) |
| Chờ ghi phải trả, Phải nhận hoàn | Dịch vụ đã xác nhận hoặc phí hủy từ DH08.3 chưa thành khoản phải trả; số đã trả NCC vượt giá trị phải trả (RSD KT01 R08, R09) | — |
| Nhật ký thao tác (QT03), mục nhật ký | Bản ghi mỗi thao tác ghi dữ liệu của người dùng: ai, khi nào, màn nào, đối tượng, trường trước và sau, lý do, tác động kèm theo; mã `TT-YYMM-NNNNNNN`; thao tác hàng loạt là một mục (RSD QT03 R02, R04) | Lịch sử hồ sơ (là của màn nguồn), nhật ký điều hành (DH08.6) |
| Thao tác nhạy cảm | Xóa, Hủy, Mở lại, Chuyển phụ trách, Xuất tệp, Publish/Thu hồi link, thao tác trên Người dùng, Vai trò, Cấu hình; có cờ ⚑ ở QT03 (RSD QT03 R13, chờ xác nhận) | — |
| Tài khoản · Đang hoạt động, Bị khóa | Tài khoản đăng nhập TOPAS do QT01 sở hữu; có một hoặc nhiều vai trò, quyền là hợp các vai trò; không xóa, chỉ khóa (người dùng chốt 12/11/2026, RSD QT01 R01–R03) | Nhân sự (khái niệm của DH06), user |
| Mật khẩu tạm · Chờ đổi mật khẩu | Mật khẩu Quản trị sinh khi tạo tài khoản, đặt lại, mở khóa; hiện một lần, không hết hạn, bắt đổi ở lần đăng nhập đầu; Chờ đổi mật khẩu là chỉ báo phụ của tài khoản (người dùng chốt 12/11/2026, RSD QT01 R04) | Mật khẩu mặc định |
| Ngừng hoạt động (người phụ trách) | Tài khoản Bị khóa, hoặc không còn vai trò mà bản ghi cần; các màn hiện tên kèm “(ngừng hoạt động)”, chỉ Quản trị chuyển được; riêng hồ sơ Tour: chưa đóng thì Điều hành giao lại ở DH07, Đã đóng thì Quản trị Mở lại Tour kèm chọn người phụ trách mới ở DH08 (RSD QT01 R03, R06, R08; RSD DH08 R16) | Nghỉ việc, vô hiệu |
| Mẫu (QT04) · Survey, Email chăm sóc, Email đặt dịch vụ, Pax list, Rooming list | Mẫu nội dung hệ thống dùng để soạn sẵn email, tài liệu; mã do người dùng nhập (ví dụ GR-01, RM-03, DV-01); Đang dùng hoặc Ngừng dùng; mỗi lần lưu một phiên bản (RSD QT04 R02, R11) | Template (khi nói mẫu nội dung) |
| Tự khớp mẫu, mẫu dự phòng | DH08 không cho chọn mẫu: hệ thống tự khớp mẫu email đặt dịch vụ Đang dùng theo (mục đích, loại dịch vụ), không có thì dùng mẫu dự phòng Mọi loại dịch vụ; một email gộp nhiều loại dịch vụ của cùng NCC thì dùng mẫu Mọi loại dịch vụ để giữ một email; Pax list, Rooming list mỗi loại một mẫu Đang dùng. Mỗi phạm vi khớp chỉ có một mẫu Đang dùng (người dùng chốt 12/11/2026, RSD QT04 R07) | Mẫu mặc định (là thuật ngữ của DH01), mẫu chọn sẵn |
| Trường tự điền, cụm tùy chọn | Trường `{…}` hệ thống trộn dữ liệu khi soạn; cụm tùy chọn là đoạn bị bỏ cả khi một trường trong đó không có dữ liệu (RSD QT04 R04, R05) | Biến, placeholder |
| Danh mục dùng chung · nhóm, giá trị | 21 nhóm ở QT05 (loại dịch vụ, đơn vị tính, loại Tour, quốc gia, lý do hủy, loại tiền, tỷ giá, chính sách hoàn hủy, tham số chung…); mỗi giá trị Đang dùng hoặc Ngừng dùng (RSD QT05 mục 1.2, R05) | Master data |
| Giá trị hệ thống (danh mục) | Giá trị QT05 mà logic màn khác dựa vào (Toàn quốc, nhóm Điều hành, Có nhu cầu Tour mới, Khác, Booking đã hủy, VND, hạng mục Khác, Chính sách mặc định); không đổi tên, không tắt, không xóa (RSD QT05 R06) | — |
| Tỷ giá có hiệu lực | Số VND cho 1 đơn vị ngoại tệ lấy từ ngày gần nhất ≤ ngày cần quy đổi có tỷ giá của loại tiền đó ở QT05; không có ngày nào thì là “chưa có tỷ giá”; màn dùng ghi ngày lấy tỷ giá (người dùng chốt 12/11/2026, RSD QT05 R13) | Tỷ giá mặc định |
| Tham số chung | Ngưỡng và giá trị mặc định dùng chung do Quản trị sửa ở QT05: ngưỡng Đến hạn, ngưỡng hợp đồng NCC sắp hết hạn, Cần chăm sóc sau Tour, hạn link Survey, hạn proposal, loại tiền báo giá mặc định, tiền tố Tour Code (RSD QT05 R17) | Cấu hình chung (cách gọi cũ) |
| Mốc ghi nhận doanh thu | QT07 lọc kỳ theo ngày kết thúc Tour (ngày về của Booking); doanh thu chính thức là doanh thu VND của phiên bản quyết toán Hiện hành; chưa quyết toán thì ghi Chưa quyết toán, không coi là 0 (người dùng chốt 12/11/2026, RSD QT06-QT12 R06) | Doanh thu dự kiến |
| Chốt Booking (báo cáo) | Yêu cầu Tour đã từng tạo Booking, kể cả Booking sau đó hủy; khác trạng thái Đã có Booking (RSD QT06-QT12 R07, chờ xác nhận) | Tỷ lệ thắng |
| Khách có yêu cầu Tour mới (Remarketing) | Khách nhận email của chiến dịch rồi có yêu cầu Tour tạo sau lần gửi đầu tiên khách nhận (cùng mốc dừng luồng); là tương quan, không quy kết nguồn (RSD QT06-QT12 R05, chờ xác nhận) | Chuyển đổi từ email |
| Nhóm tuổi nợ | Còn hạn, Đến hạn (ngưỡng Đến hạn), Quá hạn 1–30, 31–60, 61–90, trên 90 ngày; tính theo đợt chưa tất toán tại hôm nay (RSD QT06-QT12 R09, chờ xác nhận) | Aging |
| Dạng xem · Bảng, Kanban, Lịch | Cách trình bày cùng một danh sách; chọn ở bộ chuyển cuối hàng chip. Kanban: cột là trạng thái của đối tượng. Lịch: thanh theo khoảng ngày (tháng, tuần) hoặc dòng thời gian theo người phụ trách (RSD KD05 v1.4, DH07 v1.7) | Chế độ xem, view |

## Nền tảng và định dạng

- Web desktop; wireframe 1280 × 800 (theo RSD DH08).
- Giao diện tiếng Việt; phục vụ đoàn nhiều ngôn ngữ (ngôn ngữ phục vụ là dữ liệu, không phải ngôn ngữ giao diện).
- Đa tiền tệ: công nợ và thu chi theo loại tiền gốc (RSD KT01 R04), quyết toán bằng VND (RSD DH08 R15); múi giờ Asia/Ho_Chi_Minh; ngày dd/mm/yyyy (suy ra, chờ xác nhận).

## Hệ thống và nguồn dữ liệu

| Loại dữ liệu | Hệ thống hoặc màn sở hữu | Ghi chú tích hợp |
|---|---|---|
| Khách hàng, người liên hệ, người phụ trách khách, ghi nhận chăm sóc, lịch sử Tour của khách | KD04 (KD03 là danh sách) | KD06.1 tạo nhanh khách theo cùng quy tắc; KD10 đọc trường Nhận email chăm sóc và chuyển trường này sang Không khi khách tự hủy nhận (RSD KD10 R13); DH08 ghi lịch sử Tour khi đóng (RSD KD03-KD04) |
| Yêu cầu Tour, hành trình, phiên bản báo giá, kết quả, proposal và link, người phụ trách yêu cầu | KD06 (KD05 là danh sách) | KD05 chỉ ghi chuyển người phụ trách (RSD KD05 R08); KD08 tạo Booking từ phiên bản Chốt (RSD KD06 R19) |
| Chiến dịch chăm sóc, thiết lập, lịch gửi, lần gửi, phản hồi Survey, hủy nhận | KD10 (KD09 là danh sách) | KD09 chỉ ghi chuyển người phụ trách (RSD KD09 R11); KD04.4 đọc lần gửi theo khách; QT06 thống kê cùng nguồn lần gửi |
| Bảng tỷ giá theo ngày | QT05 nhóm Tỷ giá; Kế toán nhập tay hoặc dán Excel, không lấy tự động (người dùng chốt 12/11/2026, RSD QT05 R13) | KD06.3 đọc khi tính giá, sửa được cho từng phiên bản (RSD KD06 R14); DH08.8 khi quyết toán; KT01 tính ≈ VND |
| Danh mục dùng chung, tham số chung | QT05; quyền sửa theo phòng (RSD QT05 mục 1.5) | Màn dùng lưu ID giá trị; bản chụp (báo giá, Booking, lần đặt, quyết toán) giữ tên và số lúc lưu (RSD QT05 R04) |
| Dịch vụ AI | Quản trị hệ thống cấu hình | KD06.2 tạo hành trình, dịch nháp; không gửi dữ liệu cá nhân của khách, không gửi giá NCC (RSD KD06 R09) |
| Booking, lịch thanh toán | KD08 | — |
| Công nợ, thu chi | KT01 | Sổ công nợ dùng chung; KD07, KD08, DH07, DH08, QT07, QT10 chỉ đọc; nghĩa vụ phải thu nhận từ lịch thanh toán KD08.2 (RSD KT01 R05, R13) |
| Chính sách hoàn hủy Booking | QT05 (nhóm Chính sách hoàn hủy Booking, mỗi lần lưu một phiên bản; RSD QT05 R15) | KD08 chụp vào Booking khi tạo; KT01.1 đọc khi điều chỉnh sau hủy (RSD KT01 R07) |
| Hồ sơ Tour | DH07 tạo, DH08 sở hữu | — |
| Mẫu Survey, email chăm sóc (QT04.1); mẫu email đặt dịch vụ, Pax list, Rooming list (QT04.2) | QT04 | DH08, KD10 đọc; email đã gửi, tài liệu đã tạo ghi ID mẫu và phiên bản; chiến dịch chụp nội dung mẫu: Remarketing lúc soạn hoặc lưu bước, Survey khi bật lần đầu (người dùng chốt 12/11/2026, rà soát lần ba; RSD KD10); sửa mẫu không đổi các bản này (RSD QT04 R11) |
| Mẫu checklist và phiên bản | DH01 | DH07, DH08 đọc khi sinh checklist |
| Loại Tour (danh mục) | QT05 | Booking lấy từ yêu cầu Tour KD06.1 (suy ra, chờ xác nhận) |
| Email gửi NCC | Hộp thư chung | Không đọc hộp thư đến (RSD DH08) |
| NCC, hợp đồng, thanh toán, dịch vụ, bảng giá | DH03 (DH05 là bảng trượt của DH03) | DH02 chỉ ghi cho phép sử dụng và nhập NCC mới từ Excel (RSD DH02) |
| Tour mẫu, ngày, dòng dịch vụ | KD02 | KD06.2 đọc mẫu Cho phép sử dụng để sao chép; không liên kết sau khi sao chép (RSD KD01-KD02 R10) |
| Nhật ký thao tác người dùng | QT03 (kho dùng chung) | Mọi màn ghi trong cùng giao dịch với dữ liệu; che giá trị nhạy cảm khi ghi; KD04 xóa khách thì bỏ giá trị cá nhân trong mục cũ (RSD QT03 R05, R07, R08) |
| Báo cáo QT06–QT12 | Không sở hữu dữ liệu nghiệp vụ; đọc trực tiếp lúc tải từ KD06, KD08, KD10, DH08, KT01, QT05; số VND chính thức chỉ lấy từ quyết toán DH08.8 | QT08 đọc nguồn tạo hành trình đã có ở KD06; DH08.8 lưu P&L dự tính VND trong phiên bản quyết toán (RSD DH08 v2.8 R15) |
| Tài khoản, vai trò của tài khoản, liên kết nhân sự, mật khẩu tạm, khóa | QT01 | Quyền theo vai trò ở QT02; lịch sử tài khoản đọc từ kho QT03; DH06 đọc liên kết và trạng thái tài khoản; các màn có người phụ trách đọc trạng thái và vai trò (RSD QT01) |
| Nhân sự, nhóm công việc, ngôn ngữ, nhận phân công | DH06 (danh mục nhóm công việc, ngôn ngữ ở QT05; tài khoản ở QT01) | DH07, DH08 đọc để chọn người (RSD DH06 R03) |

## Pháp lý và dữ liệu cá nhân

- Danh sách che số hộ chiếu (giữ 4 ký tự đầu và 2 ký tự cuối) (RSD DH08).
- Tài liệu gửi NCC chỉ gồm tập cột theo loại NCC (RSD DH08).

## Quy ước tài liệu và giao diện

- Định dạng bàn giao: Markdown và ảnh PNG trong thư mục `wireframes/` cạnh tệp `.md`; không đóng ZIP (đổi 12/11/2026, thay cho quy ước đóng ZIP chốt 10/11/2026). Tên tệp `RSD-<mã màn>-<tên>-v<x.y>.md`, đặt trong `rsd/<mã màn>/`.
- Nâng phiên bản RSD: xóa tệp md phiên bản cũ, không giữ bản cũ ở đâu (chốt 12/11/2026); mỗi thư mục màn chỉ còn một tệp RSD mới nhất.
- Wireframe dựng bằng HTML và chụp PNG bằng bộ công cụ của skill; dùng chung `lib.js` với RSD DH08 để giao diện đồng bộ.

## Mức ủy quyền

- Được tự quyết: bố cục, nhãn, vị trí nút, kiểu thao tác, thông báo lỗi, cách giảm thao tác; ghi vào `GHI-CHU-LAM-VIEC.md` của từng màn.
- Bắt buộc hỏi: luồng, trạng thái, quyền, tiền, hành vi gửi ra ngoài, các mục nguồn ghi “chờ đặc tả”.
- Người chốt nghiệp vụ; người nghiệm thu: chưa xác định (chờ xác nhận).

## Nguyên tắc đã chốt cho cả dự án

- Một thao tác, một chỗ bấm; không lặp thông tin header trong tab (RSD DH08).
- Tên và mục đích wireframe viết dưới hình, không in lên ảnh.
- Không tự gửi ra ngoài; email luôn soạn sẵn để người dùng kiểm tra rồi gửi. Ngoại lệ: chiến dịch chăm sóc (KD10) đã được người phụ trách bật qua hộp thoại xác nhận thì hệ thống tự gửi theo lịch (người dùng chốt 12/11/2026, RSD KD10).
- Thay đổi từ module khác: module nguồn sửa ở màn của mình rồi gửi; màn nhận hiện banner, Xem thay đổi, Áp dụng cả phiên bản.
- **Không có luồng duyệt.** Không màn nào có bước gửi duyệt, phê duyệt hay chờ cấp trên xác nhận; trạng thái do người phụ trách hoặc hệ thống chuyển (yêu cầu riêng của doanh nghiệp, người dùng chốt 12/11/2026).
- **Kế toán không làm chốt chặn cho Kinh doanh và Điều hành.** Số liệu và thao tác ở KT01 (khoản thu, công nợ, quyết toán) chỉ hiện để tham khảo ở KD và DH, không là điều kiện để tạo, chuyển trạng thái, bắt đầu, kết thúc hay đóng bất kỳ đối tượng nào của hai module này. Ràng buộc toàn vẹn dữ liệu vẫn giữ (ví dụ đợt đã có thu không xóa, khoản đã ghi phải trả điều chỉnh ở KT01) (yêu cầu riêng của doanh nghiệp, người dùng chốt 12/11/2026).
- Hồ sơ Tour tự tạo ngay khi Booking được lưu, không chờ thanh toán; không còn điều kiện tạo hồ sơ và Tạo sớm (người dùng chốt 12/11/2026, thay câu chốt 11/11/2026 “tự tạo khi Booking đạt điều kiện thanh toán, Điều hành được tạo sớm”; RSD DH07 R01).
- Đóng Tour chỉ cần hồ sơ Đã kết thúc, không cần quyết toán. Quyết toán (DH08.8) là việc của Kế toán, lưu được khi hồ sơ Đã kết thúc hoặc Đã đóng, không cần Mở lại Tour; hồ sơ chưa quyết toán chỉ có chỉ báo Chưa quyết toán (người dùng chốt 12/11/2026; RSD DH08 R16).
- Mỗi loại Tour một mẫu checklist; sửa mẫu không đổi checklist của hồ sơ đã tạo; mẫu chỉ ngừng dùng, chỉ xóa được mẫu chưa dùng (chốt 11/11/2026, RSD DH01).
- Danh mục và mẫu dùng cho dữ liệu đã phát sinh thì không xóa, chỉ tắt; sửa danh mục hoặc mẫu không đổi bản ghi đã tạo (suy từ QT05, DH03, DH01).
- Ngừng sử dụng NCC đang được dùng: cảnh báo nơi đang dùng rồi cho ngừng; dữ liệu đã có giữ nguyên, NCC chỉ ẩn khi chọn mới (chốt 11/11/2026, RSD DH02).
- Ngưỡng hợp đồng NCC sắp hết hạn: 30 ngày, Quản trị cấu hình được (chốt 11/11/2026, RSD DH02).
- Giá tham chiếu NCC hiển thị theo loại tiền gốc của dòng giá, không quy đổi ngoài báo giá (chốt 11/11/2026, RSD DH03 R14, DH04 R07).
- Thiếu giá thì hiện rõ phần thiếu; không dùng giá 0, không lấy giá của mùa hoặc hợp đồng khác (luồng HT01, RSD DH04 R08).
- Hồ sơ NCC (DH03, gồm bảng trượt DH05) là nơi nhập liệu duy nhất cho NCC, hợp đồng, chính sách, dịch vụ và bảng giá; các màn khác chỉ đọc (chốt 11/11/2026, RSD DH03).
- Kỳ hiệu lực hai hợp đồng của cùng NCC không được chồng lấn: chặn lưu (chốt 11/11/2026, RSD DH03 R06).
- Kinh doanh không thấy thông tin nhận thanh toán và điều khoản thanh toán của NCC (chốt 11/11/2026, RSD DH03 R04).
- Điều khoản thanh toán thuộc từng hợp đồng NCC: Điều hành nhập khi tạo hợp đồng; Kế toán sửa được (chốt 11/11/2026, RSD DH03).
- Chỉ xóa được hợp đồng NCC và dịch vụ chưa được dùng ở Tour mẫu, hành trình yêu cầu Tour, báo giá, Booking, hồ sơ Tour, công nợ; đã dùng thì chỉ tắt hoặc giữ (chốt 11/11/2026, RSD DH03 R13).
- Danh mục nhân sự gồm nhân viên nội bộ và cộng tác viên; chỉ nội bộ có tài khoản đăng nhập (chốt 11/11/2026, RSD DH06).
- Tắt nhận phân công của người đang được giao việc: cảnh báo nơi đang giao rồi cho tắt; phân công đã có giữ nguyên, gắn chỉ báo để giao lại (chốt 11/11/2026, RSD DH06 R05).
- Tour mẫu: Kinh doanh xem, tạo, sửa, bật/tắt mọi Tour mẫu; Điều hành chỉ xem; Kế toán không có (chốt 11/11/2026, RSD KD01-KD02).
- Tour mẫu mới tạo là Không cho phép; chỉ bật khi có ít nhất một ngày và mọi ngày có nội dung lịch trình; dịch vụ, NCC ngừng sử dụng trong mẫu chỉ cảnh báo (chốt 11/11/2026, RSD KD01-KD02 R02).
- Không xóa, không nhân bản Tour mẫu; mẫu không dùng thì để Không cho phép (chốt 11/11/2026).
- Khách hàng có hai loại Cá nhân và Doanh nghiệp; doanh nghiệp có người liên hệ (chốt 11/11/2026, RSD KD03-KD04).
- Mọi người Kinh doanh xem mọi khách; chỉ người phụ trách sửa và ghi chăm sóc; người phụ trách và Quản trị hệ thống chuyển được người phụ trách, Quản trị chuyển được hàng loạt (chốt 11/11/2026, RSD KD03-KD04).
- Chỉ xóa được khách chưa dùng (chưa có yêu cầu Tour, chưa có lần gửi chiến dịch nào, kể cả Gửi lỗi); không có trạng thái ngừng giao dịch khách (chốt 11/11/2026, RSD KD03-KD04 R05).
- Hạng khách hàng tạm bỏ khỏi phạm vi; DX06 để sau (chốt 11/11/2026).
- Survey, Remarketing thiết lập và gửi ở KD10; KD09 là danh sách; hồ sơ khách hàng chỉ xem các lần gửi (chốt 11/11/2026).
- Trùng khách hàng (email, điện thoại kể cả của người liên hệ; mã số thuế hoặc tên doanh nghiệp cùng quốc gia) thì cảnh báo, cho lưu kèm lý do (RSD KD03-KD04 R02, chờ xác nhận).
- Mọi người Kinh doanh xem mọi yêu cầu Tour; chỉ người phụ trách yêu cầu sửa, lập báo giá, hủy (chốt 11/11/2026, RSD KD05); khi có Booking Hiệu lực, người phụ trách yêu cầu là người phụ trách Booking (chốt 12/11/2026).
- Yêu cầu Tour chỉ dùng trạng thái của nguồn (Đang xử lý, Đã có Booking, Đã hủy) và kết quả báo giá mới nhất; không thêm giai đoạn hay nhắc theo dõi (chốt 11/11/2026, RSD KD05).
- Người phụ trách yêu cầu và Quản trị hệ thống chuyển được người phụ trách yêu cầu, kể cả hàng loạt; danh sách yêu cầu xuất Excel theo bộ lọc (chốt 11/11/2026, RSD KD05). Chỉ chuyển yêu cầu Đang xử lý và tệp không có email, điện thoại (RSD KD05 R08, R09, chờ xác nhận); yêu cầu Đã có Booking đổi người phụ trách theo Booking ở KD08.
- Màn danh sách có nhiều dạng xem theo đối tượng (chốt 11/11/2026): KD05 Bảng, Kanban theo ba trạng thái yêu cầu, Lịch theo thời gian đi; DH07 Bảng, Kanban theo trạng thái hồ sơ, Lịch theo người phụ trách hoặc tháng; KD07 Bảng, Lịch theo ngày khởi hành hoặc hạn thanh toán, không có Kanban.
- Kanban chỉ để xem, không kéo thả đổi trạng thái ở bất kỳ màn nào; trạng thái đổi ở hồ sơ (chốt 11/11/2026).
- Dạng xem dùng chung bộ lọc, quyền và đích khi bấm; thao tác hàng loạt chỉ ở Bảng; hệ thống nhớ dạng xem cuối theo người dùng, lần đầu là Bảng; thông báo giao yêu cầu Tour mở thẳng KD06 của từng yêu cầu, không mở danh sách (RSD KD05 R12); lối vào DH07 từ thông báo mở Bảng (RSD DH07 R13, chờ xác nhận).
- Hủy yêu cầu Tour chỉ khi không có Booking Hiệu lực; yêu cầu đã hủy được người phụ trách mở lại kèm lý do (chốt 11/11/2026, RSD KD06). Quản trị hệ thống cũng mở lại được, kèm chọn người phụ trách mới (người dùng chốt 12/11/2026, RSD KD06 R22). Hủy Booking thì yêu cầu tự chuyển Đã hủy (người dùng chốt 12/11/2026).
- Markup mặc định theo loại Tour, tỷ giá từ bảng tỷ giá hệ thống; sửa được cho từng phiên bản báo giá (chốt 11/11/2026, RSD KD06).
- Báo giá gửi khách bằng proposal hệ thống tự tạo, publish thành link (English, Tiếng Việt), tải PDF trên proposal; mỗi phiên bản một link, có hạn, thu hồi được; khách chỉ xem và tải PDF, hệ thống ghi lần mở (chốt 11/11/2026, RSD KD06).
- Mỗi yêu cầu Tour tối đa một Booking Hiệu lực và một phiên bản Chốt (chốt 11/11/2026, RSD KD06). Booking bị hủy thì yêu cầu thành Đã hủy; muốn đặt lại thì Mở lại yêu cầu kèm lý do, yêu cầu về Đang xử lý, rồi báo giá và tạo Booking mới (người dùng chốt 12/11/2026, thay câu “Booking bị hủy thì tạo được Booking mới” chốt 11/11/2026; RSD KD05 R02, KD06 R02).
- Proposal dùng mẫu proposal riêng của công ty, do hệ thống dựng sẵn; Kinh doanh không cấu hình ở QT04 (người dùng chốt 12/11/2026, RSD QT04, thay câu “mẫu proposal khai ở QT04.1”); RSD chỉ quy định trường dữ liệu trộn vào mẫu, không thiết kế bố cục proposal (RSD KD06 R18).
- Mẫu tài liệu và email (QT04): mỗi bộ phận sửa nhóm mẫu của mình (Kinh doanh QT04.1, Điều hành QT04.2), bên kia chỉ xem, Kế toán không có menu; quyền cấp theo vai trò ở QT02 (người dùng chốt 12/11/2026).
- Mẫu QT04 không có nháp, không có bước duyệt: lưu là áp dụng cho lần soạn sau, mỗi lần lưu một phiên bản, khôi phục được nội dung cũ; email đã gửi, tài liệu đã tạo, chiến dịch đang chạy giữ bản đã dùng (người dùng chốt 12/11/2026, RSD QT04 R11).
- Chiến dịch chăm sóc chỉ có ba trạng thái Nháp, Đang chạy, Tạm dừng; mọi người Kinh doanh xem mọi chiến dịch, chỉ người phụ trách sửa, bật, tạm dừng; không có bước duyệt; người phụ trách và Quản trị hệ thống chuyển người phụ trách; KD09 chỉ có dạng Bảng (người dùng chốt 12/11/2026, RSD KD09).
- Chiến dịch chăm sóc: khách trả lời Survey trên trang Survey của hệ thống qua link riêng, phản hồi tự ghi; nhóm Remarketing theo tiêu chí, tính lại mỗi bước, bỏ được từng khách; bước có ngày giờ cố định, khách có yêu cầu Tour mới sau lần gửi đầu tiên khách nhận của chiến dịch hoặc tắt nhận email thì không nhận bước sau; chỉ sửa thiết lập khi Nháp hoặc Tạm dừng; bật luôn có hộp thoại xác nhận (người dùng chốt 12/11/2026, RSD KD10).
- KD07: Lịch hạn thanh toán ẩn đợt của Booking Đã hủy; vẫn tra cứu Booking hủy ở Bảng. Số còn phải thu đọc từ KT01; thiếu thì ghi Chưa có dữ liệu công nợ, không coi là 0 (người dùng chốt 12/11/2026).
- KD07 chỉ đọc: không tạo Booking, không thao tác ghi, không hàng loạt, không xuất tệp; Kinh doanh xem Booking mình phụ trách, Kế toán và Quản trị xem mọi Booking (RSD KD07 R01; phần Quản trị chờ xác nhận).
- Thay đổi chương trình sau Booking làm bằng tính giá lại ở KD06: KD08 mở KD06 ở chế độ điều chỉnh, sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; Kinh doanh tự trao đổi với khách, khách đồng ý thì bấm Chuyển sang Điều hành ở KD08 → hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking, Booking lên phiên bản đó (không hộp thoại), giữ mã, đổi hành trình và giá trị; phiên bản cũ thành Đã thay thế; không có lúc hai phiên bản cùng Chốt; hồ sơ Tour nhận thay đổi chương trình (DH08 L1.5) (người dùng chốt 12/11/2026, sửa cùng ngày, RSD KD08 v1.5 R09). Phiên bản được chuyển là phiên bản điều chỉnh mới nhất của chính Booking đó, không phải phiên bản bất kỳ mới hơn của yêu cầu (rà soát lần hai, suy từ RSD KD06 R19). Ở chế độ điều chỉnh Kinh doanh được publish proposal của phiên bản điều chỉnh để gửi khách trước khi chuyển (người dùng chốt 12/11/2026, rà soát lần hai; RSD KD06 R18, R27).
- Lịch thanh toán Booking: tổng các đợt khác giá trị Booking thì cảnh báo kèm số chênh, cho lưu kèm lý do; sau khi có khoản thu, đợt đã có thu không xóa, không giảm dưới số đã thu; đợt chưa thu sửa tự do; mỗi lần lưu ghi lịch sử, báo Kế toán (người dùng chốt 12/11/2026, RSD KD08).
- Hủy Booking được đến khi hồ sơ Tour Đã kết thúc (kể cả khi Tour đang diễn ra, có xác nhận); chặn khi hồ sơ Đã kết thúc hoặc Đã đóng (người dùng chốt 12/11/2026, RSD KD08).
- Người phụ trách Booking mặc định là người tạo; người phụ trách và Quản trị hệ thống chuyển được từng Booking ở KD08; chuyển Booking thì người phụ trách yêu cầu Tour chuyển theo (người phụ trách yêu cầu luôn là người phụ trách Booking); Điều hành phụ trách hồ sơ Tour không đổi theo (người dùng chốt 12/11/2026, thay câu “yêu cầu Tour không đổi người phụ trách”; RSD KD08 R11).
- Giao dịch thu chi đã ghi không sửa số tiền, không xóa; ghi nhầm thì Hủy giao dịch kèm lý do (giữ trong lịch sử) rồi ghi lại; chỉ sửa ngày chứng từ, tệp, ghi chú (người dùng chốt 12/11/2026, RSD KT01).
- Loại tiền của khoản phải trả NCC theo lần đặt: điền sẵn theo loại tiền của dòng giá DH03, Điều hành sửa được khi ghi giá xác nhận hoặc phí hủy ở DH08.3 (người dùng chốt 12/11/2026).
- Email gửi NCC gộp theo NCC và loại việc (đặt, điều chỉnh, hủy): cùng NCC, cùng loại việc thì chung một email; khác loại việc thì tách email, kể cả khi trước đó đã đặt chung. NCC có nhiều loại dịch vụ trong cùng loại việc vẫn một email, dùng mẫu Mọi loại dịch vụ; không tách theo mẫu hay loại dịch vụ (người dùng chốt 12/11/2026, rà soát lần hai). Mỗi dịch vụ vẫn có lần đặt riêng, tham chiếu mã gửi của email chứa nó. DH08.3 xem được theo NCC, xem mọi email đã gửi cho một NCC và ghi kết quả cho cả email (người dùng chốt 12/11/2026, RSD DH08 v2.8 R04).
- Công nợ theo loại tiền gốc của khoản; giao dịch bắt buộc cùng loại tiền, KT01 không nhập tỷ giá; tổng tách theo loại tiền; KT01 hiện thêm ≈ VND chỉ để tham khảo (cột ≈ VND, dòng ≈ tổng VND; còn lại theo tỷ giá hôm nay, giao dịch theo tỷ giá ngày giao dịch; không lưu vào sổ). Quy đổi VND chính thức chỉ ở quyết toán DH08.8: phần đã thu, đã trả theo tỷ giá ngày giao dịch; phần còn lại và khoản chưa có giao dịch theo tỷ giá ngày lưu quyết toán; tỷ giá từ bảng tỷ giá Kế toán, sửa được (người dùng chốt 12/11/2026, RSD KT01 R04, RSD DH08 R15).
- Khoản thu tự phân bổ vào đợt chưa thu đủ sớm nhất, sửa được; phần vượt thành Tiền thừa của Booking (người dùng chốt 12/11/2026, RSD KT01 R06).
- Chính sách hoàn hủy Booking là nhóm trong QT05, bậc theo số ngày hủy trước khởi hành → % giữ lại; chụp vào Booking lúc tạo; khi điều chỉnh sau hủy, phí giữ lại điền sẵn theo chính sách, Kế toán sửa được kèm lý do (người dùng chốt 12/11/2026, RSD KT01 R07).
- Nhật ký thao tác QT03: chỉ ghi thao tác ghi dữ liệu (không ghi đăng nhập, lượt xem); chỉ Quản trị hệ thống xem; giữ 24 tháng rồi tự xóa; không ai sửa, xóa; giá trị nhạy cảm (hộ chiếu, email, điện thoại, ngày sinh, địa chỉ, số tài khoản) che khi ghi; xuất Excel theo bộ lọc, lần xuất cũng ghi nhật ký; xóa khách thì nhật ký cũ của khách bỏ giá trị cá nhân (người dùng chốt 12/11/2026, RSD QT03). Màn không có lịch sử riêng trong hồ sơ (DH06 nhân sự, KD01-KD02 Tour mẫu) thì chỉ Quản trị xem lịch sử qua QT03; không thêm lịch sử cho Điều hành, Kinh doanh (người dùng chốt 12/11/2026).
- Tài khoản: Quản trị đặt mật khẩu tạm (tự sinh hoặc tự nhập), hiện một lần để Quản trị chuyển qua kênh nội bộ, không hết hạn; hệ thống không gửi email mật khẩu hay link đặt lại; người dùng phải đổi ở lần đăng nhập đầu (người dùng chốt 12/11/2026, RSD QT01 R04).
- Một tài khoản có nhiều vai trò, quyền là hợp; luôn còn ít nhất một Quản trị hệ thống đang hoạt động (người dùng chốt 12/11/2026, RSD QT01 R02).
- Khóa tài khoản của người đang phụ trách bản ghi: cảnh báo liệt kê theo màn kèm liên kết chuyển, rồi cho khóa; bản ghi giữ nguyên, không tự chuyển (người dùng chốt 12/11/2026, RSD QT01 R06). Bỏ vai trò khi đang phụ trách cũng cảnh báo rồi cho lưu (RSD QT01 R08, chờ xác nhận).
- Mở lại hồ sơ Tour Đã đóng: Điều hành phụ trách hồ sơ; khi hồ sơ không có người phụ trách hoặc người đó ngừng hoạt động thì Quản trị hệ thống mở lại, kèm lý do và chọn Điều hành phụ trách mới (người dùng chốt 12/11/2026, rà soát lần hai; RSD DH08 R16).
- KT01: chỉ Kế toán ghi; Kinh doanh, Điều hành xem mọi tab, chỉ xem; Kinh doanh chỉ thấy dữ liệu của Booking mình phụ trách; chỉ dạng Bảng (người dùng chốt 12/11/2026, RSD KT01).
- Danh mục dùng chung QT05: Điều hành sửa nhóm dịch vụ và nhân sự; Kinh doanh sửa loại Tour, quốc gia, nhóm quốc gia, nguồn khách, kết quả chăm sóc, lý do hủy; Kế toán sửa loại tiền, tỷ giá, phương thức thanh toán, ngân hàng; chỉ Quản trị sửa Markup mặc định, bội số làm tròn giá bán, chính sách hoàn hủy Booking, tham số chung; Quản trị sửa mọi nhóm; mọi vai trò xem mọi nhóm (người dùng chốt 12/11/2026, RSD QT05 mục 1.5).
- Tỷ giá: Kế toán nhập tay theo ngày ở QT05 (dán được từ Excel), không lấy tự động; ngày chưa nhập dùng tỷ giá ngày gần nhất trước đó, màn dùng ghi ngày lấy tỷ giá; chỉ “chưa có tỷ giá” khi không có ngày nào trước đó (người dùng chốt 12/11/2026, RSD QT05 R13).
- Nhóm tuổi trẻ em khai theo từng hợp đồng NCC (RSD DH03), không có danh mục ở QT05 (người dùng chốt 12/11/2026).
- Báo cáo QT06–QT12: chỉ đọc, chỉ dạng Bảng kèm thẻ chỉ số; mỗi báo cáo lọc kỳ theo một mốc ghi trên nhãn ô Kỳ; thiếu số thì ghi lý do, không thay bằng 0; không cộng lẫn loại tiền, ≈ VND chỉ ở thẻ để tham khảo. Quyền: mọi vai trò xem được cả bảy báo cáo với đủ dữ liệu, không giới hạn theo người phụ trách (người dùng chốt 12/11/2026, thay cách phân quyền theo vai trò cùng ngày); khoan sâu theo quyền ở màn đích. KD09 không có nút Xem thống kê; QT06 mở từ menu Báo cáo. Mọi báo cáo xuất Excel theo bộ lọc và phạm vi, lần xuất ghi QT03 (người dùng chốt 12/11/2026, RSD QT06-QT12).
- Thời gian và số khách sau Chuyển sang Điều hành: Booking (KD08) nhận giá trị mới ngay khi chuyển; hồ sơ Tour (DH08) giữ giá trị của phiên bản chương trình đang áp dụng, chỉ đổi khi Điều hành bấm Áp dụng (người dùng chốt 12/11/2026, rà soát lần ba; RSD KD08 R09, DH08 R19).
- DH08 không có danh mục nhãn yêu cầu riêng (yêu cầu riêng nhập tự do) và không có sức chứa theo hạng phòng (không kiểm tra sức chứa) (người dùng chốt 12/11/2026, rà soát lần ba; RSD DH08).
- Loại tiền của khoản phải trả NCC chỉ sửa ở DH08.3; KT01 không đổi loại tiền của khoản (người dùng chốt 12/11/2026, rà soát lần ba; RSD DH08, KT01).
- Chiến dịch chụp nội dung mẫu email (QT04): Remarketing chụp lúc soạn hoặc lưu bước; Survey chụp khi bật lần đầu; sửa mẫu sau đó không đổi chiến dịch (người dùng chốt 12/11/2026, rà soát lần ba; RSD KD10).
- Dòng giá NCC: Thứ tự chỉ so trong cùng hạng phòng; nhiều dòng khớp khác hạng phòng thì DH04 hiện mức thấp nhất kèm “+ n hạng khác”; KD06.3 tính theo hạng phòng của điều kiện tính, trong cùng hạng phòng lấy Thứ tự nhỏ nhất; điều kiện tính chưa có hạng phòng thì lấy hạng phòng có giá thấp nhất, kèm cảnh báo (người dùng chốt 12/11/2026, rà soát lần ba; RSD DH03 R14, DH04 R04, KD06 R13).
- Đợt trả NCC ghi theo “Số tiền” mà khác loại tiền của khoản phải trả: KT01 không điền sẵn số tiền, Kế toán nhập, có cảnh báo (người dùng chốt 12/11/2026, rà soát lần ba; RSD KT01).
