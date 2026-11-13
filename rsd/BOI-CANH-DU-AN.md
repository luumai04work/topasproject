# Bối cảnh dự án · TOPAS

Dùng chung cho mọi RSD của dự án. Mỗi dòng ghi nguồn: tài liệu, người dùng chốt ngày nào, hoặc mã quyết định phase coding (Q, U, G, A, C, K) trong `docs/QUYET-DINH-PHASE-CODING.md`.

**Lịch sử.** Tạo 11/11/2026 khi viết RSD DH07; bổ sung 11–12/11/2026 khi viết các RSD DH01–DH08, KD01–KD10, KT01, QT01, QT03–QT12 và qua ba lần rà soát mâu thuẫn giữa các RSD. Sửa 12/11/2026 sau phiên chất vấn chuẩn bị phase coding (`docs/QUYET-DINH-PHASE-CODING.md`): phân quyền chỉ theo màn và thao tác, bỏ phạm vi bản ghi (Q1); bỏ phần chăm sóc và khảo sát (C3); bỏ QT13 và email nội bộ, thêm Đăng nhập và thông báo in-app (Q2); mọi mục trước đây ghi “suy ra” hoặc “chờ xác nhận” coi là đã chốt (Q3); bổ sung quy tắc tiền, tính giá, mã, tích hợp, giao diện.

## Thứ tự nguồn sự thật

BOI-CANH > RSD bản mới nhất > `docs/flows/` (coi như lịch sử, không sửa) (Q6). RSD là tài liệu sống: khi code phát hiện chỗ thiếu hoặc mâu thuẫn, sửa RSD và BOI-CANH trước rồi mới code. `docs/QUYET-DINH-PHASE-CODING.md` là biên bản phiên chất vấn; nội dung đã được đưa vào tài liệu này.

## Lĩnh vực và mô hình

- Ngành, mô hình kinh doanh: doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized (nguồn: `docs/flows/danh-sach-man-hinh-level1.md`).
- Khách hàng của hệ thống: doanh nghiệp vừa và nhỏ, 10–50 người dùng, vài nghìn yêu cầu Tour mỗi năm (Q9); khách là đoàn hoặc đại lý nước ngoài, phục vụ theo ngôn ngữ.
- Mẫu nghiệp vụ áp dụng: `references/mau-nghiep-vu-lu-hanh.md`.
- Ngoài phạm vi: chăm sóc khách và khảo sát (KD09, KD10, QT06, KD04.4, QT04.1, trang Survey và Hủy nhận) (C3); cấu hình hệ thống QT13 (C2); hạng khách hàng DX06.

## Tổ chức và vai trò

| Vai trò | Phòng ban | Việc chính |
|---|---|---|
| Kinh doanh | Kinh doanh | Tour mẫu, khách hàng, yêu cầu Tour, báo giá, Booking |
| Điều hành | Điều hành | Hồ sơ Tour, đặt dịch vụ, khách đoàn, nhân sự, NCC và bảng giá |
| Kế toán | Kế toán | Công nợ, thu chi, quyết toán, tỷ giá |
| HDV | HDV | Người dẫn đoàn (Nội bộ hoặc Cộng tác viên): xem Tour mình được phân công, chương trình, khách đoàn; ghi nhật ký, sự cố, chi phí phát sinh và chi phí thực tế; dùng trên điện thoại (người dùng chốt 12/11/2026) |
| Quản trị hệ thống (Admin) | — | Người dùng, vai trò và quyền, danh mục, tham số chung; xem được mọi màn (Q25) |

**Năm vai trò hệ thống:** Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống (Admin); Quản trị tạo thêm được vai trò tự tạo (người dùng chốt 12/11/2026).

**Phân quyền (Q1, C1).** Quyền là một cặp (màn hoặc phần của màn, thao tác), gán cho vai trò ở QT02; tài khoản có nhiều vai trò thì quyền là hợp. Không có phạm vi bản ghi: ai có quyền thao tác trên một màn thì làm được trên mọi bản ghi của màn đó. Phần nhạy cảm trong một tab (ví dụ thông tin thanh toán của NCC) là một thao tác riêng. Ma trận quyền mặc định theo vai trò đặc tả ở RSD QT02; các câu “vai trò X xem, sửa…” trong RSD là giá trị mặc định của ma trận đó. Không có quyền thì ẩn nút; trường chỉ đọc hiện dạng chữ (U5). **Ngoại lệ duy nhất về phạm vi bản ghi:** phòng HDV chỉ thấy và chỉ ghi trên hồ sơ Tour mình được phân công, từ lúc được phân công đến khi hồ sơ Đã đóng (ADR 0007). Trong mọi RSD, câu “vai trò Kinh doanh/Điều hành/Kế toán” dùng để chọn người phụ trách, người nhận thông báo, chip Của tôi hay thẻ Việc của tôi đọc là “vai trò thuộc phòng Kinh doanh/Điều hành/Kế toán”, gồm cả vai trò tự tạo thuộc phòng đó (RSD QT02 R13).

## Thuật ngữ

| Thuật ngữ | Nghĩa | Không dùng thay bằng |
|---|---|---|
| Vai trò | Tập quyền đặt tên, khai ở QT02, gán cho tài khoản ở QT01 (Q1). Năm vai trò hệ thống: Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống (Admin). Vai trò tự tạo phải khai thuộc phòng Kinh doanh, Điều hành, Kế toán hoặc HDV và nhận mọi hành vi gắn với phòng đó (người phụ trách, Ngừng hoạt động, chip Của tôi, người nhận thông báo, thẻ Việc của tôi); quyền vẫn chỉnh riêng (người dùng chốt 12/11/2026, RSD QT02) | Nhóm quyền, phòng ban (khi nói về quyền) |
| Quyền | Được làm một thao tác trên một màn hoặc một phần của màn; không giới hạn theo bản ghi (Q1) | Phạm vi, quyền dữ liệu |
| HDV (vai trò) | Vai trò đăng nhập của người dẫn đoàn; chỉ thấy và chỉ ghi trên hồ sơ Tour mà nhân sự liên kết với tài khoản đang được phân công phục vụ, từ lúc phân công đến khi hồ sơ Đã đóng (ADR 0007) | Hướng dẫn viên (là nhóm công việc ở QT05), HDV điểm hay HDV suốt tuyến (là vai trò phục vụ) |
| Vai trò phục vụ | Việc một nhân sự đảm nhận trong một Tour khi được phân công ở DH08.5 (HDV điểm, HDV suốt tuyến, Trưởng đoàn…); khai theo nhóm công việc ở QT05 (RSD DH06 R02) | Vai trò (là khái niệm quyền) |
| Tour của tôi | Màn của phòng HDV trên điện thoại: các hồ sơ Tour mình được phân công, chương trình, khách đoàn, nhật ký, sự cố, chi phí (RSD HD01) | — |
| Do HDV ghi | Nhãn nguồn trên mục nhật ký, sự cố, chi phí do tài khoản phòng HDV ghi; mục ghi thẳng vào hồ sơ, không chờ duyệt, Điều hành sửa được (người dùng chốt 12/11/2026) | Chờ duyệt |
| Người phụ trách | Người dùng được ghi là phụ trách một bản ghi (khách hàng, yêu cầu Tour, Booking, hồ sơ Tour). Chỉ là thông tin: chip “Của tôi” bật sẵn, người nhận thông báo, nguồn của Việc của tôi; không quyết định ai được sửa (Q1) | Chủ sở hữu, owner |
| Của tôi | Chip lọc bản ghi mình phụ trách; bật sẵn với vai trò phụ trách loại bản ghi đó (Kinh doanh ở KD03, KD05, KD07, KT01.1; Điều hành ở DH07, gồm cả hồ sơ Chưa có người phụ trách), tắt sẵn với vai trò khác; tắt bật được, hệ thống nhớ (Q1, U3; người dùng chốt 12/11/2026) | — |
| Việc của tôi | Trang mặc định sau đăng nhập, theo vai trò: các thẻ đếm việc cần làm, bấm mở danh sách với bộ lọc có sẵn (U4, RSD CH03) | Dashboard |
| Thông báo | Tin trong ứng dụng gửi cho người dùng khi có việc liên quan; không có email nội bộ; danh mục loại thông báo ở RSD CH02 (Q2) | Email nội bộ |
| Booking | Đơn đặt Tour tạo từ phiên bản báo giá đã chốt; trạng thái Hiệu lực hoặc Đã hủy | Đơn hàng, hợp đồng |
| Hồ sơ Tour | Hồ sơ điều hành của một Booking, gắn một Tour Code | Hồ sơ điều hành (chỉ dùng khi trích nguồn), Tour file |
| Tour Code | Mã hồ sơ Tour, dạng `<tiền tố>-YYMM-NNNN`; tiền tố là tham số chung, mặc định `TP` (RSD DH07 R02, Q7) | Mã Tour |
| Mã đối tượng | Mã hệ thống cấp (KH, YC, BK, Tour Code, GD, TT…): YYMM theo giờ Asia/Ho_Chi_Minh; số không dùng lại nhưng được phép thủng (Q7) | Số thứ tự liên tục |
| Hạng mục dịch vụ | Một dịch vụ trong hồ sơ Tour cần đặt với NCC | Dịch vụ con |
| Đổi NCC/dịch vụ | Thao tác trên hạng mục dịch vụ: tạo dòng mới ở Cần đặt, dòng cũ chuyển Cần hủy (Q16') | Sửa NCC tại chỗ |
| NCC | Nhà cung cấp | Đối tác |
| Loại Tour | Phân loại Tour của yêu cầu và Booking (ví dụ Inbound đoàn, Customized riêng tư, MICE); danh mục ở QT05 (RSD DH01) | Dòng Tour |
| Mẫu checklist | Danh sách công việc khai báo ở DH01 cho một loại Tour; mỗi loại Tour một mẫu (chốt 11/11/2026) | Checklist mẫu, template |
| Mẫu mặc định | Mẫu checklist dùng khi Booking chưa có loại Tour hoặc loại Tour chưa có mẫu đang dùng (RSD DH01) | — |
| Việc cả hồ sơ / việc theo dịch vụ | Công việc mẫu sinh một lần cho hồ sơ / sinh cho từng hạng mục dịch vụ cùng loại (RSD DH01) | — |
| Đang dùng, Ngừng dùng | Hai giá trị của mọi công tắc bật/tắt (NCC, danh mục, mẫu, Tour mẫu, nhận phân công…) (K6) | Hoạt động, Khóa, Vô hiệu, Ngừng sử dụng, Cho phép sử dụng |
| Hợp đồng hiện hành | Hợp đồng NCC có kỳ hiệu lực chứa hôm nay; tình trạng Còn hiệu lực, Sắp hết hạn, Hết hạn, Chưa có hợp đồng (RSD DH02 R01) | — |
| Hợp đồng áp dụng | Hợp đồng NCC có kỳ hiệu lực chứa ngày sử dụng dịch vụ; dùng khi tính giá, gợi ý phí hủy, lập lịch trả (RSD DH03 R02) | Hợp đồng hiện hành (khi nói về ngày sử dụng) |
| Sắp áp dụng | Tình trạng của một hợp đồng NCC có kỳ bắt đầu sau hôm nay; chỉ dùng ở từng dòng hợp đồng (RSD DH03 R01) | Chưa hiệu lực |
| Mùa giá | Khoảng ngày khai một lần cho mỗi hợp đồng NCC, dùng chung cho mọi dịch vụ của hợp đồng; mỗi mùa một cột giá (RSD DH03 R07) | Thời điểm giá |
| Phụ thu · Thay thế, Cộng dồn | Mức giá NCC khai riêng cho ngày hoặc trường hợp đặc biệt (lễ Tết, phòng đơn…). Thay thế: dùng thay giá mùa của ngày đó; Cộng dồn: cộng vào giá. Nhiều phụ thu cùng áp: lấy mức Thay thế cao nhất thay giá mùa, rồi cộng mọi phụ thu Cộng dồn; không có trường quy tắc ưu tiên (RSD DH03 R15, Q15) | — |
| Nhóm tuổi trẻ em | Khai theo từng hợp đồng NCC (RSD DH03); mỗi dòng giá áp nhóm tuổi của hợp đồng của chính dòng đó (Q12) | Danh mục tuổi chung |
| Gia hạn hợp đồng | Tạo hợp đồng kỳ sau từ hợp đồng cũ, sao chép mùa, chính sách, điều khoản và bảng giá, có điều chỉnh tỷ lệ (RSD DH03 R12) | Tái ký |
| Nhân sự | Người trong danh mục DH06 có thể được phân công phụ trách hồ sơ, thực hiện công việc hoặc phục vụ Tour; gồm Nội bộ và Cộng tác viên (RSD DH06) | Người dùng, tài khoản (là khái niệm của QT01) |
| Nội bộ, Cộng tác viên | Hai loại nhân sự; Nội bộ được liên kết tài khoản với mọi vai trò; Cộng tác viên chỉ được liên kết với tài khoản mà mọi vai trò đều thuộc phòng HDV (RSD DH06 R01; người dùng chốt 12/11/2026) | Nhân viên chính thức, freelancer |
| Nhận phân công | Công tắc Đang dùng/Ngừng dùng của nhân sự; tắt thì không hiện khi chọn người mới, phân công đã có giữ nguyên (RSD DH06 R05) | Hoạt động, Khóa |
| Tour mẫu | Lịch trình mẫu theo ngày, mỗi ngày có nội dung và dịch vụ chọn từ danh mục NCC; mã `TM-NNN`; Đang dùng hoặc Ngừng dùng (RSD KD01-KD02, K6) | Template, sản phẩm mẫu |
| Giá vốn tham khảo | Giá NCC tính theo một ngày khởi hành và số khách tham chiếu ở Tour mẫu; không lưu, không phải báo giá (RSD KD01-KD02 R07) | Giá Tour mẫu |
| Bộ tính giá | Một bộ quy tắc tính giá dùng chung cho KD02 (giá vốn tham khảo), DH04 (tra cứu) và KD06 (báo giá); cả ba tính phụ thu (Q11) | — |
| Nhóm công việc | Danh mục QT05 phân loại nhân sự (Điều hành, Hướng dẫn viên, Trưởng đoàn…); mỗi nhóm khai các vai trò phục vụ Tour được nhận (RSD DH06 R02) | Phòng ban |
| Khách hàng · Cá nhân, Doanh nghiệp | Hai loại khách hàng; doanh nghiệp (đại lý, công ty, tổ chức) có một hoặc nhiều người liên hệ; loại chỉ chọn khi tạo (RSD KD03-KD04 R01) | Đối tác (khi nói về khách) |
| Người liên hệ, Liên hệ chính | Người của khách doanh nghiệp; đúng một liên hệ chính, là người nhận mặc định khi tạo yêu cầu Tour (RSD KD03-KD04 R01) | Đầu mối (dùng cho NCC) |
| Người phụ trách khách hàng | Người phụ trách (nghĩa ở trên) của khách; mặc định người tạo (RSD KD03-KD04 R03, Q1) | Chủ khách hàng |
| Mã khách hàng | Dạng `KH-NNNNN`, không dùng lại (RSD KD03-KD04 R12) | — |
| Lịch sử Tour | Mục ghi tự động cho khách khi đóng Tour, theo Tour Code; không ghi cho hồ sơ kết thúc vì Booking đã hủy (RSD KD03-KD04 R06, RSD DH08) | Lịch sử sử dụng dịch vụ (chỉ dùng khi trích nguồn) |
| Ngày đóng Tour | Hồ sơ Tour giữ hai mốc: ngày đóng lần đầu và ngày đóng gần nhất (khi mở lại rồi đóng lại); Tour gần nhất của khách dùng ngày đóng lần đầu (RSD DH08 R16) | — |
| Yêu cầu Tour · Đang xử lý, Đã có Booking, Đã hủy | Ba nhóm trạng thái của yêu cầu, tính theo thứ tự Đã hủy → Đã có Booking → Đang xử lý; không có giai đoạn khác (RSD KD05 R02). Đã có Booking chỉ khi có Booking Hiệu lực; hủy Booking thì yêu cầu tự chuyển Đã hủy, khách đặt lại thì Mở lại yêu cầu (RSD KD06 R02) | Đang báo giá, Chờ khách |
| Báo giá mới nhất | Phiên bản báo giá có số lớn nhất của yêu cầu, kèm kết quả Chốt, Cần điều chỉnh, Không chốt hoặc Chưa có kết quả (RSD KD05 R03) | Báo giá hiện hành |
| Người phụ trách yêu cầu | Người phụ trách (nghĩa ở trên) của yêu cầu Tour; mặc định người tạo; độc lập với người phụ trách khách hàng. Khi yêu cầu có Booking Hiệu lực, luôn là người phụ trách Booking; chuyển phụ trách Booking thì yêu cầu chuyển theo (RSD KD05 R01, KD08 R11) | — |
| Mã yêu cầu | Dạng `YC-YYMM-NNNN` (RSD KD06 R03, Q7) | — |
| Hành trình | Lịch trình theo ngày và dịch vụ của một yêu cầu Tour; mỗi yêu cầu một hành trình hiện hành (RSD KD06 R07) | Chương trình (chỉ dùng sau Booking, RSD DH08) |
| Phiên bản báo giá, Phiên bản Chốt | Bản chụp không sửa của hành trình, điều kiện, tỷ giá và giá tại lúc lưu; mỗi yêu cầu tối đa một phiên bản Chốt (RSD KD06 R16, R17); phiên bản Chốt cũ bị thay khi Chuyển sang Điều hành thì thành Đã thay thế (RSD KD08 R09) | Báo giá hiện hành |
| Ngân sách của khách | Mức khách chấp nhận chi cho yêu cầu Tour: từ – đến, loại tiền, mỗi khách hoặc cả đoàn; so với giá bán bình quân, chỉ cảnh báo; không hiện trên proposal (RSD KD06 R26) | Budget (chỉ dùng khi trích lời người dùng) |
| Markup | % cộng trên giá vốn; hai cấp: theo hạng mục dịch vụ (Lưu trú, Di chuyển, Vé máy bay, HDV, Tham quan, Ăn uống, Khác) → chung (mặc định theo loại Tour); không đặt cho từng khoản; sửa được cho từng phiên bản (RSD KD06 R14) | Lãi, chiết khấu |
| Bội số làm tròn giá bán | Tham số QT05 theo loại tiền; giá bán mỗi khách làm tròn lên theo bội số (người dùng chốt 12/11/2026); chỉ áp cho giá bán mỗi khách, không áp cho đợt thanh toán và phí giữ lại (Q9) | — |
| Proposal | Trang báo giá hệ thống tự tạo từ một phiên bản theo wireframe W33 của KD06 (W36, W37 cho link hết hạn hoặc thu hồi), publish thành link công khai English hoặc Tiếng Việt; khách xem và tải PDF trên đó (RSD KD06 R18, Q22) | Báo giá PDF, file báo giá |
| Nhập tay (khoản giá) | Đơn giá người dùng nhập cho khoản thiếu hợp đồng hoặc ô giá, kèm ghi chú nguồn (RSD KD06 R15); ghi đè được khoản đã có giá | Giá tạm |
| Phòng đơn tự xếp | Người lớn lẻ khi xếp phòng đôi được tự xếp vào phòng đơn, có ghi chú, người dùng sửa được (Q13') | — |
| Dịch vụ đi kèm | Dịch vụ NCC khai ở DH03, gắn với một dịch vụ chính cùng hợp đồng, chỉ bán kèm dịch vụ chính, không chọn riêng trong hành trình; luôn tùy chọn: người dùng thêm kèm số lượng (người dùng chốt 12/11/2026). Khoản bắt buộc theo ngày vẫn khai là phụ thu Cộng dồn | Dịch vụ phụ, phụ thu (khi nói khoản tùy chọn) |
| Giường phụ | Dịch vụ đi kèm của dịch vụ lưu trú (phòng), có giá theo mùa của hợp đồng; báo giá nhập số giường phụ; phòng 3 người là phòng đôi cộng một giường phụ. Trẻ em cần thêm giường tính theo chính sách trẻ em của hợp đồng, không theo giá giường phụ (người dùng chốt 12/11/2026) | Thêm giường (khi nói giường cho người lớn), extra bed |
| Mã Booking | Dạng `BK-YYMM-NNNN` do KD08 cấp (RSD KD07 R10, Q7) | — |
| Tình trạng đợt thanh toán · Còn hạn, Đến hạn, Quá hạn, Đã thu đủ | Tính lúc đọc cho từng đợt của Booking Hiệu lực từ hạn (KD08.2) và số đã thu (KT01); Đến hạn là hạn trong số ngày của ngưỡng Đến hạn; không phải trạng thái Booking (RSD KD07 R04, Q6) | Trạng thái thanh toán |
| Ngưỡng Đến hạn | Tham số chung, mặc định 7 ngày; KD07 và KT01 cùng đọc | — |
| Chưa có dữ liệu công nợ | Ghi thay cho số còn phải thu khi KT01 không trả số liệu cho Booking; không coi là 0 (RSD KD07 R04) | 0, Chưa thu |
| Chế độ điều chỉnh (KD06) | KD06 mở từ KD08 để sửa hành trình cho Booking Hiệu lực; giá tự tính lại, lưu thành phiên bản mới; không ghi kết quả ở chế độ này (RSD KD08 R09) | Sửa Booking |
| Chuyển sang Điều hành, Đã thay thế | Nút ở KD08, bấm khi khách đồng ý: hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking (không phải phiên bản số lớn nhất của yêu cầu), Booking cập nhật lên phiên bản đó, giữ mã, hồ sơ Tour nhận thay đổi; không hộp thoại; phiên bản cũ của Booking thành Đã thay thế (RSD KD08 R09) | Cập nhật Booking, Gửi Điều hành (cách gọi cũ) |
| Khoản công nợ | Một khoản phải thu (khách) hoặc phải trả (NCC) trong sổ KT01, có loại tiền và các đợt (hạn, số tiền); nguồn: lịch thanh toán, phí hủy Booking, dịch vụ đã xác nhận, phí hủy NCC, phát sinh (RSD KT01 R02) | Công nợ (khi nói một khoản) |
| Khoản phải thu phát sinh | Khoản phải thu riêng ngoài lịch thanh toán Booking, có loại tiền riêng (Q18) | Đợt phát sinh |
| Giao dịch · Hiệu lực, Đã hủy | Thu từ khách, Hoàn cho khách, Chi trả NCC, Nhận hoàn từ NCC ghi ở KT01; mã `GD-YYMM-NNNN`; không sửa số tiền, không xóa, chỉ hủy kèm lý do (RSD KT01 R12) | Phiếu thu, phiếu chi |
| Tình trạng khoản · Còn hạn, Đến hạn, Quá hạn, Đã tất toán | Tính lúc đọc từ hạn và số còn; Đến hạn theo ngưỡng Đến hạn; đợt tất toán hiện Đã thu đủ hoặc Đã trả đủ (RSD KT01 R03, Q6) | Trạng thái thanh toán |
| Tiền thừa | Phần đã thu vượt tổng còn phải thu của Booking trong cùng một loại tiền; hoàn cho khách hoặc dùng cho đợt mới cùng loại tiền; không bù trừ khác loại tiền (RSD KT01 R06, Q18) | Trả trước, số dư âm |
| Chờ điều chỉnh, Cần hoàn, Phí giữ lại | Booking đã hủy chưa ghi điều chỉnh; số đã thu vượt phí giữ lại sau điều chỉnh; số tiền khách chịu khi hủy theo chính sách hoàn hủy (RSD KT01 R07) | Phí hủy (dùng cho NCC) |
| Chính sách hoàn hủy Booking | Nhóm trong QT05: bậc “hủy trước ngày khởi hành từ N ngày → giữ lại X%”, có mặc định và theo loại Tour; chụp vào Booking lúc tạo | Điều khoản hủy (chỉ dùng khi trích nguồn) |
| Chờ ghi phải trả, Phải nhận hoàn | Dịch vụ đã xác nhận hoặc phí hủy từ DH08.3 chưa thành khoản phải trả; số đã trả NCC vượt giá trị phải trả (RSD KT01 R08, R09) | — |
| Nhật ký thao tác (QT03), mục nhật ký | Bản ghi mỗi thao tác ghi dữ liệu của người dùng (ngoại lệ duy nhất là lượt xem: Hiện số hộ chiếu ở HD01): ai, khi nào, màn nào, đối tượng, trường trước và sau, lý do, tác động kèm theo; mã `TT-YYMM-NNNNNNN`; thao tác hàng loạt là một mục (RSD QT03 R02, R04) | Lịch sử hồ sơ (là của màn nguồn), nhật ký điều hành (DH08.6) |
| Thao tác nhạy cảm | Xóa, Hủy, Mở lại, Chuyển phụ trách, Xuất tệp, Publish/Thu hồi link, Hiện số hộ chiếu (HD01), thao tác trên Người dùng, Vai trò, Cấu hình; có cờ ⚑ ở QT03 (RSD QT03 R13) | — |
| Tài khoản · Đang hoạt động, Bị khóa | Tài khoản đăng nhập TOPAS do QT01 sở hữu; có một hoặc nhiều vai trò, quyền là hợp các vai trò; không xóa, chỉ khóa (RSD QT01 R01–R03) | Nhân sự (khái niệm của DH06), user |
| Mật khẩu tạm · Chờ đổi mật khẩu | Mật khẩu Quản trị sinh khi tạo tài khoản, đặt lại, mở khóa; hiện một lần, không hết hạn, mất hiệu lực khi tài khoản bị khóa, bắt đổi ở lần đăng nhập đầu; Chờ đổi mật khẩu là chỉ báo phụ của tài khoản (RSD QT01 R04) | Mật khẩu mặc định |
| Tạm khóa đăng nhập | Khóa 15 phút sau 5 lần nhập sai mật khẩu liên tiếp; khác Bị khóa của tài khoản (Q24, RSD CH01) | Bị khóa |
| Ngừng hoạt động (người phụ trách) | Tài khoản Bị khóa, hoặc không còn vai trò thuộc phòng mà bản ghi cần; các màn hiện tên kèm “(ngừng hoạt động)”; người có quyền Chuyển phụ trách của màn đó chuyển được (RSD QT01 R03, R06, R08; Q1) | Nghỉ việc, vô hiệu |
| Mẫu (QT04) · Email đặt dịch vụ, Pax list, Rooming list | Mẫu nội dung hệ thống dùng để soạn sẵn email gửi NCC và tài liệu; mã do người dùng nhập (ví dụ DV-01); Đang dùng hoặc Ngừng dùng; mỗi lần lưu một phiên bản (RSD QT04 R02, R11; C3 bỏ nhóm QT04.1) | Template (khi nói mẫu nội dung) |
| Tự khớp mẫu, mẫu dự phòng | DH08 không cho chọn mẫu: hệ thống tự khớp mẫu email đặt dịch vụ Đang dùng theo (mục đích, loại dịch vụ), không có thì dùng mẫu dự phòng Mọi loại dịch vụ; một email gộp nhiều loại dịch vụ của cùng NCC thì dùng mẫu Mọi loại dịch vụ; Pax list, Rooming list mỗi loại một mẫu Đang dùng. Mỗi phạm vi khớp chỉ có một mẫu Đang dùng (RSD QT04 R07) | Mẫu mặc định (là thuật ngữ của DH01), mẫu chọn sẵn |
| Trường tự điền, cụm tùy chọn | Trường `{…}` hệ thống trộn dữ liệu khi soạn; cụm tùy chọn là đoạn bị bỏ cả khi một trường trong đó không có dữ liệu (RSD QT04 R04, R05) | Biến, placeholder |
| Pax list (cột) | Tập cột của Pax list gửi NCC là hợp các cột của mọi loại dịch vụ có trong email hoặc tài liệu đó (Q17) | — |
| Danh mục dùng chung · nhóm, giá trị | Các nhóm ở QT05 (loại dịch vụ, đơn vị tính, loại Tour, quốc gia, lý do hủy, loại tiền, tỷ giá, chính sách hoàn hủy, ngày nghỉ lễ, tham số chung…); mỗi giá trị Đang dùng hoặc Ngừng dùng (RSD QT05 mục 1.2, R05; Q23) | Master data |
| Giá trị hệ thống (danh mục) | Giá trị QT05 mà logic màn khác dựa vào (Toàn quốc, nhóm Điều hành, Khác, Booking đã hủy, VND, hạng mục Khác, Chính sách mặc định); không đổi tên, không tắt, không xóa (RSD QT05 R06) | — |
| Tỷ giá có hiệu lực | Số VND cho 1 đơn vị ngoại tệ lấy từ ngày gần nhất ≤ ngày cần quy đổi có tỷ giá của loại tiền đó ở QT05; không có ngày nào thì là “chưa có tỷ giá”; màn dùng ghi ngày lấy tỷ giá (RSD QT05 R13). Khi báo giá, ngày cần quy đổi là ngày bấm Tính giá và tỷ giá chụp vào phiên bản (Q10) | Tỷ giá mặc định |
| Ngày làm việc | Thứ 2 đến thứ 6, trừ các ngày trong nhóm QT05 “Ngày nghỉ lễ” (Q23) | — |
| Tham số chung | Ngưỡng và giá trị mặc định dùng chung do Quản trị sửa ở QT05: ngưỡng Đến hạn, ngưỡng hợp đồng NCC sắp hết hạn, ngưỡng chờ phản hồi NCC (48 giờ), giờ chạy nhắc hằng ngày (08:00), hạn proposal, loại tiền báo giá mặc định, tiền tố Tour Code… (RSD QT05 R17); cấu hình kỹ thuật không có màn nằm ở tệp cấu hình hoặc dữ liệu khởi tạo (C2) | Cấu hình chung (cách gọi cũ) |
| Mốc ghi nhận doanh thu | QT07 lọc kỳ theo ngày kết thúc Tour (ngày về của Booking); doanh thu chính thức là doanh thu VND của phiên bản quyết toán Hiện hành; chưa quyết toán thì ghi Chưa quyết toán, không coi là 0 (RSD QT07-QT12 R06) | Doanh thu dự kiến |
| Chốt Booking (báo cáo) | Yêu cầu Tour đã từng tạo Booking, kể cả Booking sau đó hủy; khác trạng thái Đã có Booking (RSD QT07-QT12 R07) | Tỷ lệ thắng |
| Nhóm tuổi nợ | Còn hạn, Đến hạn (ngưỡng Đến hạn), Quá hạn 1–30, 31–60, 61–90, trên 90 ngày; tính theo đợt chưa tất toán tại hôm nay (RSD QT07-QT12 R09) | Aging |
| Dạng xem · Bảng, Kanban, Lịch | Cách trình bày cùng một danh sách; chọn ở bộ chuyển cuối hàng chip. Kanban: cột là trạng thái của đối tượng. Lịch: thanh theo khoảng ngày (tháng, tuần) hoặc dòng thời gian theo người phụ trách (RSD KD05 v1.4, DH07 v1.7) | Chế độ xem, view |
| Dạng xem đã lưu | Bộ lọc, sắp xếp và cột một người dùng lưu lại để mở nhanh, riêng từng người; chip của RSD là dạng xem có sẵn (K3) | Bộ lọc chung |

## Nền tảng và định dạng

- Web desktop; wireframe 1280 × 800 (theo RSD DH08). Ngoại lệ: các màn của phòng HDV (RSD HD01) thiết kế cho điện thoại (người dùng chốt 12/11/2026). Giao diện tiếng Việt; ngôn ngữ phục vụ đoàn là dữ liệu, không phải ngôn ngữ giao diện.
- Múi giờ Asia/Ho_Chi_Minh; ngày dd/mm/yyyy.
- **Tiền (Q9).** Đa tiền tệ: công nợ và thu chi theo loại tiền gốc (RSD KT01 R04), quyết toán bằng VND (RSD DH08 R15). Làm tròn half-up theo đơn vị nhỏ nhất của loại tiền. Riêng giá bán mỗi khách làm tròn lên theo bội số của loại tiền (người dùng chốt 12/11/2026); bội số không áp cho đợt thanh toán và phí giữ lại.
- **Trẻ em (Q12).** Nhập tuổi từng trẻ; mỗi dòng giá áp nhóm tuổi của hợp đồng của chính dòng đó; khi có suất miễn, trẻ nhỏ nhất được miễn trước; giá trẻ dạng % tính trên giá mỗi người lớn của cùng dòng.
- **Phòng (Q13', Q14).** Người lớn lẻ tự xếp phòng đơn (sửa được). Giường phụ là dịch vụ đi kèm của phòng, người dùng nhập số giường phụ; phòng 3 người là phòng đôi cộng một giường phụ (người dùng chốt 12/11/2026, thay câu “phòng 3 người và giường phụ dùng Nhập tay đến sau MVP”). Phòng đơn = giá phòng đơn trọn gói nếu dòng giá khai trọn gói, ngược lại giá phòng + phụ thu phòng đơn đã khai (RSD DH03 R15; người dùng chốt 12/11/2026 giữ cả hai cách khai); “phần vượt nửa giá phòng đôi” chỉ để hiển thị.
- **Thời hạn (Q23).** Hạn tính theo ngày làm việc khi RSD ghi “ngày làm việc”; 48 giờ chờ NCC tính theo giờ lịch.
- **Tệp đính kèm (Q19).** Tối đa 20 MB mỗi tệp, 10 tệp mỗi chỗ đính kèm; PDF, JPG, PNG, XLSX, DOCX.
- **Đăng nhập (Q24).** Phiên 7 ngày, gia hạn theo hoạt động; tạm khóa 15 phút sau 5 lần sai; mật khẩu ít nhất 10 ký tự, có chữ và số; bắt đổi mật khẩu tạm ở lần đầu; có màn Đổi mật khẩu.

## Hệ thống và nguồn dữ liệu

| Loại dữ liệu | Hệ thống hoặc màn sở hữu | Ghi chú tích hợp |
|---|---|---|
| Khách hàng, người liên hệ, người phụ trách khách, lịch sử Tour của khách | KD04 (KD03 là danh sách) | KD06.1 tạo nhanh khách theo cùng quy tắc; DH08 ghi lịch sử Tour khi đóng (RSD KD03-KD04) |
| Yêu cầu Tour, hành trình, phiên bản báo giá, kết quả, proposal và link, người phụ trách yêu cầu | KD06 (KD05 là danh sách) | KD05 chỉ ghi chuyển người phụ trách (RSD KD05 R08); KD08 tạo Booking từ phiên bản Chốt (RSD KD06 R19) |
| Bảng tỷ giá theo ngày | QT05 nhóm Tỷ giá; Kế toán nhập tay hoặc dán Excel, không lấy tự động (RSD QT05 R13) | KD06.3 đọc khi bấm Tính giá, chụp vào phiên bản, sửa được cho từng phiên bản (RSD KD06 R14, Q10); DH08.8 khi quyết toán; KT01 tính ≈ VND |
| Danh mục dùng chung, tham số chung, ngày nghỉ lễ | QT05 | Màn dùng lưu ID giá trị; bản chụp (báo giá, Booking, lần đặt, quyết toán) giữ tên và số lúc lưu (RSD QT05 R04) |
| Dịch vụ AI | Gateway AI riêng, cấu hình ở tệp (A1) | KD06.2 tạo hành trình, dịch nháp; không gửi dữ liệu cá nhân của khách, không gửi giá NCC (RSD KD06 R09); đi qua hàng đợi (Q5) |
| Booking, lịch thanh toán | KD08 | — |
| Công nợ, thu chi | KT01 | Sổ công nợ dùng chung; KD07, KD08, DH07, DH08, QT07, QT10 chỉ đọc; nghĩa vụ phải thu nhận từ lịch thanh toán KD08.2 (RSD KT01 R05, R13) |
| Chính sách hoàn hủy Booking | QT05 (mỗi lần lưu một phiên bản; RSD QT05 R15) | KD08 chụp vào Booking khi tạo; KT01.1 đọc khi điều chỉnh sau hủy (RSD KT01 R07) |
| Hồ sơ Tour | DH07 tạo, DH08 sở hữu | — |
| Mẫu email đặt dịch vụ, Pax list, Rooming list | QT04 (chỉ còn QT04.2) | DH08 đọc; email đã gửi, tài liệu đã tạo ghi ID mẫu và phiên bản; sửa mẫu không đổi các bản này (RSD QT04 R11) |
| Mẫu checklist và phiên bản | DH01 | DH07, DH08 đọc khi sinh checklist |
| Loại Tour (danh mục) | QT05 | Booking lấy từ yêu cầu Tour KD06.1 |
| Email gửi NCC | Một hộp thư Gmail chung của công ty (G1–G3) | Gửi qua Gmail API, chỉ quyền gửi; tự CC người thao tác; “Đã gửi” nghĩa là Gmail đã nhận thư; không đọc hộp thư đến, không theo dõi thư bị trả lại (RSD DH08); đi qua hàng đợi (Q5) |
| NCC, hợp đồng, thanh toán, dịch vụ, bảng giá, phụ thu, nhóm tuổi trẻ em | DH03 (DH05 là bảng trượt của DH03) | DH02 chỉ ghi công tắc Đang dùng và nhập NCC mới từ Excel (RSD DH02) |
| Tour mẫu, ngày, dòng dịch vụ | KD02 | KD06.2 đọc mẫu Đang dùng để sao chép; không liên kết sau khi sao chép (RSD KD01-KD02 R10) |
| Nhật ký thao tác người dùng | QT03 (kho dùng chung) | Mọi màn ghi trong cùng giao dịch với dữ liệu; che giá trị nhạy cảm khi ghi; KD04 xóa khách thì bỏ giá trị cá nhân trong mục cũ (RSD QT03 R05, R07, R08) |
| Báo cáo QT07–QT12 | Không sở hữu dữ liệu nghiệp vụ; đọc trực tiếp lúc tải từ KD06, KD08, DH08, KT01, QT05; số VND chính thức chỉ lấy từ quyết toán DH08.8 | QT08 đọc nguồn tạo hành trình đã có ở KD06; DH08.8 lưu P&L dự tính VND trong phiên bản quyết toán (RSD DH08 v2.8 R15) |
| Tài khoản, vai trò của tài khoản, liên kết nhân sự, mật khẩu tạm, khóa | QT01 | Quyền theo vai trò ở QT02; lịch sử tài khoản đọc từ kho QT03; DH06 đọc liên kết và trạng thái tài khoản (RSD QT01) |
| Vai trò, ma trận quyền, danh mục mã quyền | QT02 (Phụ lục A mã quyền, Phụ lục B ma trận mặc định) | Mọi màn đọc để ẩn nút và chặn thao tác (Q1) |
| Đăng nhập, phiên, mật khẩu của người dùng | CH01 | Tài khoản, mật khẩu tạm, khóa thuộc QT01 |
| Việc của tôi | CH03 | Thẻ đếm dùng đúng truy vấn và bộ lọc của màn đích |
| Thông báo | CH02 | Màn nguồn tạo thông báo trong cùng giao dịch với dữ liệu (Q2, Q5) |
| Tệp đính kèm, PDF đã dựng | Kho tệp dạng S3 | PDF proposal và tài liệu dựng từ trang HTML, đi qua hàng đợi (Q21, Q5) |
| Nhân sự, nhóm công việc, ngôn ngữ, nhận phân công | DH06 (danh mục nhóm công việc, ngôn ngữ ở QT05; tài khoản ở QT01) | DH07, DH08 đọc để chọn người (RSD DH06 R03) |

## Pháp lý và dữ liệu cá nhân

- Danh sách che số hộ chiếu (giữ 4 ký tự đầu và 2 ký tự cuối) (RSD DH08).
- Tài liệu gửi NCC chỉ gồm tập cột theo loại dịch vụ có trong tài liệu (RSD DH08, Q17).

## Quy ước tài liệu và giao diện

- Định dạng bàn giao: Markdown và ảnh PNG trong thư mục `wireframes/` cạnh tệp `.md`. Tên tệp `RSD-<mã màn>-<tên>-v<x.y>.md`, đặt trong `docs/rsd/<mã màn>/`.
- Nâng phiên bản RSD: đổi tên tệp sang số phiên bản mới, không giữ bản cũ trong thư mục; lịch sử nằm trong git.
- Wireframe dựng bằng HTML và chụp PNG bằng bộ công cụ của skill; dùng chung `lib.js` với RSD DH08 để giao diện đồng bộ. Khi wireframe khác chuẩn component K1–K6, chuẩn K1–K6 thắng; wireframe chỉ minh họa vùng dữ liệu.
- Chuẩn K1–K6 và U1–U5 cũng thắng chữ trong RSD ở các điểm dùng chung: RSD viết trước phase coding ghi 20 dòng mỗi trang, nhớ bộ lọc trong phiên, “Của tôi” là ô lọc; khi code dùng 50 dòng mỗi trang, nhớ bộ lọc theo người dùng cả sau khi đăng xuất, chip Của tôi. AC lấy số 20 dòng làm ví dụ thì tính lại theo 50 khi viết test.
- Hình đã đổi chú thích trong RSD thì đừng chạy `sync-md.js` khi chưa sửa `captions.js` tương ứng, vì script sẽ ghi đè chú thích cũ.
- RSD viết sau phase coding (QT02, CH01, CH02, CH03) và chuẩn giao diện chưa dựng wireframe; mã W chỉ giữ chỗ.
- Mỗi tiêu chí nghiệm thu (AC) trong RSD gắn một mã test.

## Mức ủy quyền

- Agent được tự quyết: bố cục, nhãn, vị trí nút, kiểu thao tác, thông báo lỗi, cách giảm thao tác, và đơn giản hóa giao diện miễn không đổi luồng, trạng thái, quyền, tiền, hành vi gửi ra ngoài; ghi vào `GHI-CHU-LAM-VIEC.md` của từng màn (U6).
- Bắt buộc hỏi người dùng: luồng, trạng thái, quyền, tiền, hành vi gửi ra ngoài.
- Người chốt nghiệp vụ: người dùng. Người nghiệm thu: doanh nghiệp, ở mốc MVP (Q4).

## Nguyên tắc giao diện dùng chung

Chi tiết ở `docs/rsd/CHUAN-GIAO-DIEN/` (khung ứng dụng K0, U1–U6, K1–K6, có AC); tóm tắt:

- Ctrl+K tìm nhanh mọi mã và tên (U1).
- Chỉ hỏi xác nhận khi thao tác không hoàn tác được, gửi ra ngoài hoặc chạm tiền; còn lại làm ngay, kèm toast Hoàn tác (U2).
- Nhớ bộ lọc và dạng xem theo người dùng, cả sau khi đăng xuất (U3); dạng xem đã lưu riêng từng người (K3).
- Một chuẩn bảng cho mọi danh sách (K1); bộ lọc dạng nút theo kiểu dữ liệu (K2).
- Màn hồ sơ: “← Danh sách”, mã và trạng thái, một nút chính, Lịch sử trong menu ⋯; form luôn sửa được với người có quyền; thanh lưu dính đáy chỉ hiện khi có thay đổi (K4).
- Trang cho đối tượng nhiều tab; bảng trượt ba cỡ; hộp thoại cho tối đa 3 trường (K5).
- Màu trạng thái theo ý nghĩa: Đã hủy màu xám, đỏ chỉ cho việc phải xử lý; mọi công tắc dùng “Đang dùng / Ngừng dùng” (K6).

## Nguyên tắc đã chốt cho cả dự án

### Chung

- Một thao tác, một chỗ bấm; không lặp thông tin header trong tab (RSD DH08).
- Tên và mục đích wireframe viết dưới hình, không in lên ảnh.
- Không tự gửi ra ngoài; email luôn soạn sẵn để người dùng kiểm tra rồi gửi.
- **Không có luồng duyệt.** Không màn nào có bước gửi duyệt, phê duyệt hay chờ cấp trên xác nhận; trạng thái do người dùng hoặc hệ thống chuyển (yêu cầu riêng của doanh nghiệp, chốt 12/11/2026).
- **Kế toán không làm chốt chặn cho Kinh doanh và Điều hành.** Số liệu và thao tác ở KT01 chỉ hiện để tham khảo ở KD và DH, không là điều kiện để tạo, chuyển trạng thái, bắt đầu, kết thúc hay đóng bất kỳ đối tượng nào của hai module này. Ràng buộc toàn vẹn dữ liệu vẫn giữ (ví dụ đợt đã có thu không xóa, khoản đã ghi phải trả điều chỉnh ở KT01) (chốt 12/11/2026).
- **Tác động chéo module (Q5).** Thay đổi ở màn này kéo theo dữ liệu ở màn khác (tạo hồ sơ Tour khi lưu Booking, ghi khoản công nợ, ghi lịch sử Tour, sinh checklist, thông báo…) ghi đồng bộ trong cùng một giao dịch với thao tác gốc: thành công cả hoặc không gì cả. Không có trạng thái “Tạo lỗi” và nút Thử lại. Chỉ gửi email, gọi AI và dựng PDF đi qua hàng đợi.
- **Thay đổi chương trình từ module khác:** module nguồn sửa ở màn của mình rồi gửi; màn nhận hiện banner, Xem thay đổi, Áp dụng cả phiên bản.
- **Trạng thái theo thời gian (Q6)** (Đến hạn, Quá hạn, Sắp hết hạn, Đang diễn ra, Đã kết thúc…) tính lúc đọc từ ngày và giờ hiện tại; tác vụ định kỳ chỉ dùng cho việc gây ra hành động (ví dụ tạo thông báo).
- **Sửa đồng thời (Q8).** Mỗi bản ghi con khóa lạc quan theo phiên bản riêng; lưu bị từ chối vì bản ghi đã đổi thì chỉ có nút Tải lại, không có nút ghi đè.
- **Phân quyền (Q1).** Quyền theo màn và thao tác; mọi câu “chỉ người phụ trách được…” trong RSD cũ đã bỏ. Chuyển phụ trách (kể cả hàng loạt), Mở lại, Hủy, Xóa là các thao tác cấp theo vai trò ở QT02.
- Danh mục và mẫu dùng cho dữ liệu đã phát sinh thì không xóa, chỉ tắt; sửa danh mục hoặc mẫu không đổi bản ghi đã tạo (suy từ QT05, DH03, DH01).
- Mã đối tượng: số không dùng lại, cho phép thủng số (Q7).

### Danh sách và dạng xem

- Màn danh sách có nhiều dạng xem theo đối tượng (chốt 11/11/2026): KD05 Bảng, Kanban theo ba trạng thái yêu cầu, Lịch theo thời gian đi; DH07 Bảng, Kanban theo trạng thái hồ sơ, Lịch theo người phụ trách hoặc tháng; KD07 Bảng, Lịch theo ngày khởi hành hoặc hạn thanh toán, không có Kanban.
- Kanban chỉ để xem, không kéo thả đổi trạng thái ở bất kỳ màn nào; trạng thái đổi ở hồ sơ (chốt 11/11/2026).
- Dạng xem dùng chung bộ lọc, quyền và đích khi bấm; thao tác hàng loạt chỉ ở Bảng; hệ thống nhớ dạng xem cuối theo người dùng, lần đầu là Bảng; thông báo giao yêu cầu Tour mở thẳng KD06 của từng yêu cầu (RSD KD05 R12); lối vào DH07 từ thông báo mở Bảng (RSD DH07 R13).
- Danh sách có người phụ trách có chip “Của tôi”, bật sẵn theo vai trò như mục Thuật ngữ (Q1; người dùng chốt 12/11/2026).

### NCC, bảng giá, nhân sự (DH)

- Mỗi loại Tour một mẫu checklist; sửa mẫu không đổi checklist của hồ sơ đã tạo; mẫu chỉ ngừng dùng, chỉ xóa được mẫu chưa dùng (chốt 11/11/2026, RSD DH01).
- Ngừng dùng NCC đang được dùng: cảnh báo nơi đang dùng rồi cho ngừng; dữ liệu đã có giữ nguyên, NCC chỉ ẩn khi chọn mới (chốt 11/11/2026, RSD DH02).
- Ngưỡng hợp đồng NCC sắp hết hạn: 30 ngày, tham số chung (chốt 11/11/2026, RSD DH02).
- Giá tham chiếu NCC hiển thị theo loại tiền gốc của dòng giá, không quy đổi ngoài báo giá (chốt 11/11/2026, RSD DH03 R14, DH04 R07).
- Thiếu giá thì hiện rõ phần thiếu; không dùng giá 0, không lấy giá của mùa hoặc hợp đồng khác (luồng HT01, RSD DH04 R08).
- Hồ sơ NCC (DH03, gồm bảng trượt DH05) là nơi nhập liệu duy nhất cho NCC, hợp đồng, chính sách, dịch vụ, bảng giá, phụ thu; các màn khác chỉ đọc (chốt 11/11/2026, RSD DH03).
- Kỳ hiệu lực hai hợp đồng của cùng NCC không được chồng lấn: chặn lưu (chốt 11/11/2026, RSD DH03 R06).
- Thông tin nhận thanh toán và điều khoản thanh toán của NCC là thao tác riêng “Xem thông tin thanh toán NCC”; mặc định không cấp cho Kinh doanh (RSD DH03 R04, Q1).
- Điều khoản thanh toán thuộc từng hợp đồng NCC; mặc định Điều hành nhập khi tạo hợp đồng, Kế toán sửa được (chốt 11/11/2026, RSD DH03).
- Chỉ xóa được hợp đồng NCC và dịch vụ chưa được dùng ở Tour mẫu, hành trình yêu cầu Tour, báo giá, Booking, hồ sơ Tour, công nợ; đã dùng thì chỉ tắt hoặc giữ (chốt 11/11/2026, RSD DH03 R13).
- Dòng giá NCC: Thứ tự chỉ so trong cùng hạng phòng; nhiều dòng khớp khác hạng phòng thì DH04 hiện mức thấp nhất kèm “+ n hạng khác”; bộ tính giá tính theo hạng phòng của điều kiện tính, trong cùng hạng phòng lấy Thứ tự nhỏ nhất; điều kiện tính chưa có hạng phòng thì lấy hạng phòng có giá thấp nhất, kèm cảnh báo (rà soát lần ba; RSD DH03 R14, DH04 R04, KD06 R13).
- Phụ thu: Thay thế lấy mức cao nhất, rồi cộng mọi Cộng dồn; bỏ trường “quy tắc ưu tiên” ở DH03 (Q15).
- Danh mục nhân sự gồm nhân viên nội bộ và cộng tác viên; nội bộ có tài khoản với mọi vai trò, cộng tác viên chỉ có tài khoản thuộc phòng HDV (chốt 11/11/2026, sửa 12/11/2026, RSD DH06).
- Tắt nhận phân công của người đang được giao việc: cảnh báo nơi đang giao rồi cho tắt; phân công đã có giữ nguyên, gắn chỉ báo để giao lại (chốt 11/11/2026, RSD DH06 R05).

### Bán hàng (KD)

- Tour mẫu: mặc định Kinh doanh xem, tạo, sửa, bật/tắt; Điều hành chỉ xem; Kế toán không có (chốt 11/11/2026, RSD KD01-KD02).
- Tour mẫu mới tạo là Ngừng dùng; chỉ bật khi có ít nhất một ngày và mọi ngày có nội dung lịch trình; dịch vụ, NCC ngừng dùng trong mẫu chỉ cảnh báo (chốt 11/11/2026, RSD KD01-KD02 R02).
- Không xóa, không nhân bản Tour mẫu; mẫu không dùng thì để Ngừng dùng (chốt 11/11/2026).
- Khách hàng có hai loại Cá nhân và Doanh nghiệp; doanh nghiệp có người liên hệ (chốt 11/11/2026, RSD KD03-KD04).
- Xem, sửa khách và chuyển người phụ trách khách (kể cả hàng loạt) theo quyền ở QT02; mặc định cấp cho Kinh doanh, chuyển hàng loạt cấp cho Quản trị (RSD KD03-KD04, Q1).
- Chỉ xóa được khách chưa có yêu cầu Tour; không có trạng thái ngừng giao dịch khách (chốt 11/11/2026, RSD KD03-KD04 R05; C3).
- Trùng khách hàng (email, điện thoại kể cả của người liên hệ; mã số thuế hoặc tên doanh nghiệp cùng quốc gia) thì cảnh báo, cho lưu kèm lý do (RSD KD03-KD04 R02).
- Sửa yêu cầu Tour, lập báo giá, hủy, mở lại theo quyền ở QT02; mặc định cấp cho Kinh doanh (RSD KD05, KD06; Q1). Khi có Booking Hiệu lực, người phụ trách yêu cầu là người phụ trách Booking.
- Yêu cầu Tour chỉ dùng trạng thái của nguồn (Đang xử lý, Đã có Booking, Đã hủy) và kết quả báo giá mới nhất; không thêm giai đoạn hay nhắc theo dõi (chốt 11/11/2026, RSD KD05).
- Chuyển người phụ trách yêu cầu được cả hàng loạt; chỉ chuyển yêu cầu Đang xử lý; yêu cầu Đã có Booking đổi người phụ trách theo Booking ở KD08. Danh sách yêu cầu xuất Excel theo bộ lọc, tệp không có email, điện thoại (RSD KD05 R08, R09).
- Hủy yêu cầu Tour chỉ khi không có Booking Hiệu lực; yêu cầu đã hủy được mở lại kèm lý do, có thể chọn người phụ trách mới (RSD KD06 R22). Hủy Booking thì yêu cầu tự chuyển Đã hủy (chốt 12/11/2026).
- Markup mặc định theo loại Tour, tỷ giá có hiệu lực tại ngày bấm Tính giá, chụp vào phiên bản; sửa được cho từng phiên bản báo giá (RSD KD06, Q10).
- KD02, DH04, KD06 dùng chung một bộ tính giá; cả ba tính phụ thu (Q11).
- Báo giá gửi khách bằng proposal hệ thống tự tạo theo W33, publish thành link (English, Tiếng Việt), tải PDF trên proposal; mỗi phiên bản một link, có hạn, thu hồi được; khách chỉ xem và tải PDF, hệ thống ghi lần mở (RSD KD06, Q22). RSD chỉ quy định trường dữ liệu trộn vào proposal; Kinh doanh không cấu hình mẫu proposal.
- Mỗi yêu cầu Tour tối đa một Booking Hiệu lực và một phiên bản Chốt (chốt 11/11/2026, RSD KD06). Booking bị hủy thì yêu cầu thành Đã hủy; muốn đặt lại thì Mở lại yêu cầu kèm lý do, yêu cầu về Đang xử lý, rồi báo giá và tạo Booking mới (chốt 12/11/2026; RSD KD05 R02, KD06 R02).
- KD07: Lịch hạn thanh toán ẩn đợt của Booking Đã hủy; vẫn tra cứu Booking hủy ở Bảng. Số còn phải thu đọc từ KT01; thiếu thì ghi Chưa có dữ liệu công nợ, không coi là 0 (chốt 12/11/2026).
- KD07 chỉ đọc: không tạo Booking, không thao tác ghi, không hàng loạt, không xuất tệp; mặc định Kinh doanh, Kế toán, Quản trị xem; chip Của tôi bật sẵn (RSD KD07 R01, Q1).
- Thay đổi chương trình sau Booking làm bằng tính giá lại ở KD06: KD08 mở KD06 ở chế độ điều chỉnh, sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; khách đồng ý thì bấm Chuyển sang Điều hành ở KD08 → hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của chính Booking, Booking lên phiên bản đó (không hộp thoại), giữ mã, đổi hành trình và giá trị; phiên bản cũ thành Đã thay thế; không có lúc hai phiên bản cùng Chốt; hồ sơ Tour nhận thay đổi chương trình (DH08 L1.5) (RSD KD08 v1.5 R09). Ở chế độ điều chỉnh Kinh doanh được publish proposal của phiên bản điều chỉnh để gửi khách trước khi chuyển (RSD KD06 R18, R27).
- Thời gian và số khách sau Chuyển sang Điều hành: Booking (KD08) nhận giá trị mới ngay khi chuyển; hồ sơ Tour (DH08) giữ giá trị của phiên bản chương trình đang áp dụng, chỉ đổi khi Điều hành bấm Áp dụng (rà soát lần ba; RSD KD08 R09, DH08 R19).
- Lịch thanh toán Booking: tổng các đợt khác giá trị Booking thì cảnh báo kèm số chênh, cho lưu kèm lý do; sau khi có khoản thu, đợt đã có thu không xóa, không giảm dưới số đã thu; đợt chưa thu sửa tự do; mỗi lần lưu ghi lịch sử, gửi thông báo cho Kế toán (chốt 12/11/2026, RSD KD08; Q2).
- Hủy Booking được đến khi hồ sơ Tour Đã kết thúc (kể cả khi Tour đang diễn ra, có xác nhận); chặn khi hồ sơ Đã kết thúc hoặc Đã đóng (chốt 12/11/2026, RSD KD08).
- Khi tạo Booking, người phụ trách Booking là người đang phụ trách yêu cầu Tour, bất kể ai bấm tạo; không có chuyển phụ trách ngầm (người dùng chốt 12/11/2026). Chuyển được từng Booking ở KD08 theo quyền; chuyển Booking thì người phụ trách yêu cầu Tour chuyển theo; Điều hành phụ trách hồ sơ Tour không đổi theo (RSD KD08 R11).

### Điều hành (DH)

- Hồ sơ Tour tự tạo trong cùng giao dịch khi Booking được lưu, không chờ thanh toán; không có điều kiện tạo hồ sơ và Tạo sớm (chốt 12/11/2026; RSD DH07 R01; Q5).
- Đóng Tour chỉ cần hồ sơ Đã kết thúc, không cần quyết toán. Quyết toán (DH08.8) là việc của Kế toán, lưu được khi hồ sơ Đã kết thúc hoặc Đã đóng, không cần Mở lại Tour; hồ sơ chưa quyết toán chỉ có chỉ báo Chưa quyết toán (chốt 12/11/2026; RSD DH08 R16).
- Mở lại hồ sơ Tour Đã đóng theo quyền ở QT02 (mặc định Điều hành và Quản trị), kèm lý do, có thể chọn Điều hành phụ trách mới (RSD DH08 R16, Q1).
- Đổi NCC hoặc dịch vụ của hạng mục đã đặt: một nút “Đổi NCC/dịch vụ”, tạo dòng mới ở Cần đặt, dòng cũ sang Cần hủy (Q16').
- Email gửi NCC gộp theo NCC và loại việc (đặt, điều chỉnh, hủy): cùng NCC, cùng loại việc thì chung một email; khác loại việc thì tách email, kể cả khi trước đó đã đặt chung. NCC có nhiều loại dịch vụ trong cùng loại việc vẫn một email, dùng mẫu Mọi loại dịch vụ. Mỗi dịch vụ vẫn có lần đặt riêng, tham chiếu mã gửi của email chứa nó. DH08.3 xem được theo NCC, xem mọi email đã gửi cho một NCC và ghi kết quả cho cả email (rà soát lần hai; RSD DH08 v2.8 R04). Email gửi từ hộp thư chung, tự CC người thao tác (G2).
- DH08 không có danh mục nhãn yêu cầu riêng (yêu cầu riêng nhập tự do) và không có sức chứa theo hạng phòng (rà soát lần ba; RSD DH08).
- Loại tiền của khoản phải trả NCC theo lần đặt: điền sẵn theo loại tiền của dòng giá DH03, Điều hành sửa được khi ghi giá xác nhận hoặc phí hủy ở DH08.3; chỉ sửa ở DH08.3, KT01 không đổi loại tiền của khoản (chốt 12/11/2026; RSD DH08, KT01).
- Mẫu tài liệu và email QT04 chỉ còn nhóm của Điều hành (QT04.2); quyền sửa theo QT02, mặc định Điều hành sửa, Kinh doanh xem (C3, Q1).
- Mẫu QT04 không có nháp, không có bước duyệt: lưu là áp dụng cho lần soạn sau, mỗi lần lưu một phiên bản, khôi phục được nội dung cũ; email đã gửi, tài liệu đã tạo giữ bản đã dùng (RSD QT04 R11).

### Kế toán (KT)

- Giao dịch thu chi đã ghi không sửa số tiền, không xóa; ghi nhầm thì Hủy giao dịch kèm lý do (giữ trong lịch sử) rồi ghi lại; chỉ sửa ngày chứng từ, tệp, ghi chú (RSD KT01).
- Công nợ theo loại tiền gốc của khoản; giao dịch bắt buộc cùng loại tiền, KT01 không nhập tỷ giá; tổng tách theo loại tiền; KT01 hiện thêm ≈ VND chỉ để tham khảo (còn lại theo tỷ giá hôm nay, giao dịch theo tỷ giá ngày giao dịch; không lưu vào sổ). Quy đổi VND chính thức chỉ ở quyết toán DH08.8: phần đã thu, đã trả theo tỷ giá ngày giao dịch; phần còn lại và khoản chưa có giao dịch theo tỷ giá ngày lưu quyết toán; tỷ giá từ bảng tỷ giá, sửa được (RSD KT01 R04, DH08 R15).
- Khoản thu tự phân bổ vào đợt chưa thu đủ sớm nhất cùng loại tiền, sửa được; phần vượt thành Tiền thừa của Booking theo loại tiền đó (RSD KT01 R06, Q18).
- Khoản phải thu phát sinh là khoản riêng, có loại tiền riêng (Q18).
- Chính sách hoàn hủy Booking là nhóm trong QT05, bậc theo số ngày hủy trước khởi hành → % giữ lại; chụp vào Booking lúc tạo; khi điều chỉnh sau hủy, phí giữ lại điền sẵn theo chính sách, Kế toán sửa được kèm lý do; phí giữ lại không áp bội số làm tròn (RSD KT01 R07, Q9).
- Đợt trả NCC ghi theo “Số tiền” mà khác loại tiền của khoản phải trả: KT01 không điền sẵn số tiền, Kế toán nhập, có cảnh báo (rà soát lần ba; RSD KT01).
- KT01: mặc định chỉ Kế toán ghi; Kinh doanh, Điều hành xem mọi tab, chỉ xem; không giới hạn theo người phụ trách; chỉ dạng Bảng (RSD KT01, Q1).

### Quản trị (QT)

- Nhật ký thao tác QT03: chỉ ghi thao tác ghi dữ liệu (không ghi đăng nhập, lượt xem, trừ lượt Hiện số hộ chiếu ở HD01); mặc định chỉ Quản trị xem; giữ 24 tháng rồi tự xóa; không ai sửa, xóa; giá trị nhạy cảm (hộ chiếu, email, điện thoại, ngày sinh, địa chỉ, số tài khoản) che khi ghi; xuất Excel theo bộ lọc, lần xuất cũng ghi nhật ký; xóa khách thì nhật ký cũ của khách bỏ giá trị cá nhân (RSD QT03). Màn không có lịch sử riêng trong hồ sơ (DH06 nhân sự, KD01-KD02 Tour mẫu) thì xem lịch sử qua QT03.
- Tài khoản: Quản trị đặt mật khẩu tạm (tự sinh hoặc tự nhập), hiện một lần để chuyển qua kênh nội bộ, không hết hạn; hệ thống không gửi email mật khẩu hay link đặt lại; người dùng phải đổi ở lần đăng nhập đầu (RSD QT01 R04).
- Một tài khoản có nhiều vai trò, quyền là hợp; luôn còn ít nhất một Quản trị hệ thống đang hoạt động (RSD QT01 R02).
- Khóa tài khoản của người đang phụ trách bản ghi: cảnh báo liệt kê theo màn kèm liên kết chuyển, rồi cho khóa; bản ghi giữ nguyên, không tự chuyển (RSD QT01 R06). Bỏ vai trò khi đang phụ trách cũng cảnh báo rồi cho lưu (RSD QT01 R08).
- Danh mục dùng chung QT05, quyền sửa mặc định theo nhóm: Điều hành sửa nhóm dịch vụ và nhân sự; Kinh doanh sửa loại Tour, quốc gia, nhóm quốc gia, nguồn khách, lý do hủy; Kế toán sửa loại tiền, tỷ giá, phương thức thanh toán, ngân hàng; chỉ Quản trị sửa Markup mặc định, bội số làm tròn giá bán, chính sách hoàn hủy Booking, ngày nghỉ lễ, tham số chung; Quản trị sửa mọi nhóm; mọi vai trò xem mọi nhóm (RSD QT05 mục 1.5; mỗi nhóm là một thao tác riêng ở QT02).
- Tỷ giá: Kế toán nhập tay theo ngày ở QT05 (dán được từ Excel), không lấy tự động; ngày chưa nhập dùng tỷ giá ngày gần nhất trước đó, màn dùng ghi ngày lấy tỷ giá; chỉ “chưa có tỷ giá” khi không có ngày nào trước đó (RSD QT05 R13).
- Báo cáo QT07–QT12: chỉ đọc, chỉ dạng Bảng kèm thẻ chỉ số; mỗi báo cáo lọc kỳ theo một mốc ghi trên nhãn ô Kỳ; thiếu số thì ghi lý do, không thay bằng 0; không cộng lẫn loại tiền, ≈ VND chỉ ở thẻ để tham khảo. Mặc định mọi vai trò xem cả sáu báo cáo với đủ dữ liệu; khoan sâu theo quyền ở màn đích. Mọi báo cáo xuất Excel theo bộ lọc và phạm vi, lần xuất ghi QT03 (RSD QT07-QT12; C3 bỏ QT06).

### Mặc định áp sau khi sửa RSD (12/11/2026)

Các câu agent gặp khi sửa RSD theo quyết định phase coding, áp mặc định theo Q3; người dùng đổi được bất cứ lúc nào.

- Quản trị hệ thống có quyền Xem thông tin thanh toán NCC và Xem tài khoản nhận hoàn của khách (Q25).
- Quyền ở QT01 và QT02 gắn cố định với vai trò Quản trị hệ thống, không cấp qua QT02 cho vai trò khác, để không ai tự nâng quyền (RSD QT01 mục 1.4).
- Tạm khóa đăng nhập: QT01 hiện chỉ báo, tự hết sau 15 phút; không có nút mở sớm.
- Đổi NCC/dịch vụ trên hạng mục chưa có lần đặt còn hiệu lực: dòng cũ sang Đã hủy ngay, không qua Cần hủy (RSD DH08 L3.16).
- DH04 không thêm ô nhập tuổi trẻ hay phòng đơn; phụ thu cùng căn cứ với giá thì cộng vào ô giá, khác căn cứ thì hiện dòng riêng trong bảng trượt.
- Giá vốn tham khảo ở KD02 áp phòng đơn tự xếp như KD06, vì dùng chung bộ tính giá (Q11, Q13').
- Nhập tay ghi đè được khoản đã có giá, kèm ghi chú nguồn. Giá trẻ em thêm giường theo chính sách trẻ em của hợp đồng vẫn tính theo hợp đồng (giường phụ của người lớn là dịch vụ đi kèm, sửa 12/11/2026).
- PDF proposal dựng qua hàng đợi ngay khi publish; khách bấm Download khi PDF chưa xong thì trang báo “Đang chuẩn bị PDF” và tải khi xong.
- Hộp thoại cảnh báo nơi đang dùng khi tắt NCC, giá trị danh mục, mẫu đang được dùng vẫn giữ: hộp thoại cho biết tác động, không phải hỏi xác nhận thừa theo U2.
- Nhóm quốc gia ở QT05 giữ lại dù sau C3 chưa màn nào dùng.
- KT01: Booking còn phải thu bằng nhiều loại tiền thì chọn loại tiền trước khi ghi thu; phân bổ và Tiền thừa trong loại tiền đó (Q18).
- DH06: Hoàn tác tắt nhận phân công thì gỡ thông báo vừa tạo.
- Số liệu ví dụ Müller v3 (KD06) và TM-008 (KD01-KD02) đã tính lại ngày 13/11/2026 theo quy tắc hiện hành, nguồn ở `docs/rsd/BO-TINH-GIA/`.

### Chốt và mặc định khi viết QT02, CH01–CH03, chuẩn giao diện (12/11/2026)

Người dùng chốt:

- Vai trò tự tạo ở QT02 phải khai thuộc phòng Kinh doanh, Điều hành, Kế toán hoặc HDV (xem thuật ngữ Vai trò; phòng HDV thêm sau cùng ngày).
- KD07 thêm bộ lọc “Yêu cầu đổi lịch trình”; DH07 thêm bộ lọc “Việc cần xử lý”, để Việc của tôi có đủ thẻ.
- Không gửi thông báo cho Kế toán khi có dịch vụ chờ ghi phải trả; Kế toán theo dõi bằng thẻ ở Việc của tôi.
- Ctrl+K tìm được khách theo email và điện thoại, chỉ với người có quyền xem KD03.

Mặc định áp theo Q3 (người dùng đổi được):

- Sai mật khẩu hiện tại ở màn Đổi mật khẩu tính vào cùng bộ đếm Tạm khóa đăng nhập. Đổi mật khẩu thành công thì thu hồi mọi phiên khác của tài khoản.
- Màn Đăng nhập hiện thông tin liên hệ Quản trị lấy từ tệp cấu hình nếu có.
- Bị thu hồi quyền giữa phiên: báo “Quyền của bạn vừa thay đổi”, nút Tải lại trang, giữ dữ liệu trên form để chép.
- Vai trò Ngừng dùng không gán mới được; tài khoản đang có vai trò đó vẫn giữ quyền của nó. Vai trò hệ thống không đổi tên, không ngừng dùng, không xóa; vai trò tự tạo chỉ xóa được khi chưa gán cho tài khoản nào.
- Bật tắt quyền ở QT02 lưu ngay từng ô, có Hoàn tác; quyền mới có hiệu lực từ yêu cầu kế tiếp của người đang đăng nhập.
- Quản trị hệ thống có cố định mọi quyền xem, kể cả hai phần nhạy cảm (Q25); Kinh doanh được ghi danh sách khách đoàn ở DH08 như RSD DH08 mục 1.4.
- Số thông báo chưa đọc cập nhật mỗi 60 giây khi trang đang mở; thông báo giữ 180 ngày; người thao tác không tự nhận thông báo về thao tác của mình; Hoàn tác thì gỡ thông báo vừa tạo. Các loại nhắc định kỳ chạy chung một giờ, là tham số chung ở QT05 (mặc định 08:00).
- Mở danh sách từ thẻ Việc của tôi hoặc từ thông báo không ghi đè bộ lọc đã nhớ; bộ lọc của đích nằm trên URL.

### Vai trò HDV (người dùng chốt 12/11/2026)

- Năm vai trò hệ thống: Kinh doanh, Điều hành, Kế toán, HDV, Quản trị hệ thống (Admin). Vẫn giữ chức năng tạo vai trò tự tạo; vai trò tự tạo được khai thuộc phòng HDV.
- HDV làm được: xem Tour mình được phân công (chương trình theo ngày, dịch vụ đã đặt, liên hệ NCC, Rooming list); xem danh sách khách đoàn (số hộ chiếu che như danh sách DH08; bấm Hiện số để xem đầy đủ); ghi nhật ký và sự cố; ghi chi phí phát sinh và chi phí thực tế kèm ảnh chứng từ.
- Phạm vi: chỉ hồ sơ Tour mình được phân công, từ lúc được phân công đến khi hồ sơ Đã đóng; gỡ phân công thì mất quyền xem (ADR 0007).
- Cộng tác viên được có tài khoản, nhưng chỉ với vai trò thuộc phòng HDV.
- Các màn của HDV thiết kế cho điện thoại (RSD HD01); mọi màn khác vẫn cho máy tính.
- Không có luồng duyệt: mục HDV ghi vào hồ sơ ngay, có nhãn Do HDV ghi; Điều hành phụ trách hồ sơ nhận thông báo và sửa được; Kế toán ghi công nợ như với mục Điều hành ghi.

Mặc định áp theo Q3:

- “Được phân công” là nhân sự liên kết với tài khoản có ít nhất một phân công phục vụ ở DH08.5 của hồ sơ đó, bất kể vai trò phục vụ nào.
- HDV không thấy giá bán, giá vốn, Markup, công nợ, quyết toán, thông tin thanh toán NCC, và không thấy Tour của đoàn khác ở lịch phân công.
- HDV chỉ sửa hoặc xóa mục do chính mình ghi, khi hồ sơ chưa Đã đóng; mục do Điều hành ghi thì HDV chỉ xem.

Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01):

- HDV xem được số hộ chiếu đầy đủ của khách đoàn trên HD01, chỉ với Tour được phân công. Số hiện dạng che, bấm “Hiện số” mới hiện đầy đủ. Mỗi lần hiện được ghi vào QT03; đây là ngoại lệ của quy tắc “QT03 không ghi lượt xem”.
- HDV thấy và gọi được điện thoại của Điều hành phụ trách hồ sơ, của khách trong đoàn (nếu danh sách khách đoàn có số) và của người liên hệ chính phía khách hàng trên Booking.
- Không xem ngoại tuyến. HD01 cần mạng để xem; nội dung đang ghi dở được giữ trên máy để HDV bấm gửi lại. HDV tải được PDF chương trình theo ngày (không giá) để xem khi mất mạng.
- Khi Điều hành áp dụng thay đổi chương trình, mọi HDV được phân công trên hồ sơ nhận thông báo.

Mặc định áp theo Q3:

- Vai trò thuộc phòng HDV chỉ được cấp mã quyền HD01 và các màn chung (CH01–CH03). QT02 không cho bật quyền màn khác cho vai trò thuộc phòng HDV, để phạm vi của ADR 0007 không bị lách qua DH08.
- HDV không có nút Lưu và chuyển Kế toán; Điều hành chuyển ở DH08.
- Điều hành sửa và xóa được mục do HDV ghi; mỗi lần ghi QT03.
- HDV cập nhật kết quả sự cố thì Điều hành phụ trách nhận thông báo, cùng loại với HDV ghi sự cố. HDV không nhận thông báo khi Đóng Tour.
- HDV chỉ thấy nhật ký và sự cố do chính mình ghi; không thấy mục do Điều hành hay HDV khác ghi (người dùng chốt 12/11/2026).
- PDF chương trình của HD01 có Rooming list, chỉ tên khách và số phòng (người dùng chốt 12/11/2026).
- Ma trận quyền mặc định của QT02 (Phụ lục B, 5 vai trò) người dùng đã duyệt 12/11/2026.

### Dịch vụ đi kèm và giường phụ (12/11/2026)

Người dùng chốt:

- Tiền phòng đôi và giường phụ chia đều cho mọi người lớn ở phòng đôi; không có giá bán riêng cho người ngủ giường phụ.
- Số giường phụ nhiều hơn số phòng đôi thì chỉ cảnh báo, vẫn tính giá và lưu được (ví dụ phòng gia đình cần 2 giường phụ).

Mặc định áp theo Q3:

- Dịch vụ đi kèm phải cùng NCC với dịch vụ chính, chỉ một tầng (không đi kèm một dịch vụ đi kèm khác); mỗi dịch vụ lưu trú có tối đa một dịch vụ đi kèm đánh dấu Giường phụ (RSD DH03 R23).
- Markup của dịch vụ đi kèm theo hạng mục của loại dịch vụ của chính nó; giường phụ cùng loại với phòng nên rơi vào Lưu trú.
- Ở DH08, mỗi dịch vụ đi kèm có số lượng và đơn giá xác nhận riêng, cùng loại tiền với lần đặt; cả hạng mục vẫn là một khoản phải trả ở KT01. Đi kèm thiếu thì hạng mục Xác nhận một phần; đặt lại phần thiếu với cùng NCC, sang NCC khác thì dùng Đổi NCC/dịch vụ (không mang theo đi kèm cũ).
- DH04 không hiện dịch vụ đi kèm thành dòng riêng; xem trong bảng trượt của dịch vụ chính.
- Tour mẫu không có dịch vụ đi kèm; giá vốn tham khảo không tính giường phụ.
- Dịch vụ đi kèm không có tên tiếng Anh riêng, giống dịch vụ thường.

### Tính lại ví dụ giá (13/11/2026)

- Bộ dữ liệu ví dụ và script tính của bộ tính giá ở `docs/rsd/BO-TINH-GIA/` (Müller v3, TM-008, giường phụ); là nguồn số cho các AC tính giá và dữ liệu mẫu cho scenario TDD.
- Người dùng chốt:
  - Trẻ em cùng nhóm tuổi gộp một dòng giá bán, giá là bình quân giá vốn của các trẻ trong dòng rồi làm tròn lên theo bội số, kể cả khi một trẻ được suất miễn phí.
  - Phụ thu lễ theo phòng áp cho mọi phòng, kể cả phòng đơn: phòng đơn kiểu phụ thu thêm = giá phòng của đêm sau phụ thu lễ + phụ thu phòng đơn; phụ thu phòng đơn dạng tỷ lệ tính trên giá mùa (chưa gồm phụ thu lễ).
  - Giá vốn tham khảo ở KD02 áp phòng đơn tự xếp như KD06 khi số khách tham chiếu lẻ (ví dụ 11 khách = 5 phòng đôi + 1 phòng đơn).
  - Phòng đơn khai giá trọn gói: đêm có phụ thu lễ Cộng dồn thì cộng vào giá trọn gói; đêm có phụ thu lễ Thay thế thì là khoản thiếu, người dùng nhập tay theo giá NCC báo.
