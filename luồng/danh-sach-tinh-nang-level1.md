# Danh sách tính năng — Phần mềm cho doanh nghiệp lữ hành Inbound & Tour Customized (V2)

## Nguồn và quy ước

- Nguồn: 10 file luồng Level 1 tại `luồng/level 1/sys01.md` → `sys10.md` (sơ đồ Mermaid trong các file `.md` trùng khớp với `luồng/level 1/mermaid/*.mmd`).
- V2 so với V1: cập nhật mô tả TN03.06 và TN06.03 theo mục "Liên kết với SYS03 và SYS06" của HT02 (`luồng/level 1/luonghotro.md`); không đổi số lượng, mã hay bước luồng của tính năng.
- Cập nhật hồ sơ NCC: HT02 đã gộp vào HT01 — Quản lý Hồ sơ Nhà cung cấp (hợp đồng, chính sách đổi hủy, chính sách trẻ em theo hợp đồng, điều khoản thanh toán, dịch vụ bao gồm/không bao gồm, bảng giá). Mô tả TN03.06, TN03.07, TN06.04, TN06.05 được bổ sung tham chiếu CNHT01.03–CNHT01.05; không đổi số lượng, mã hay bước luồng.
- Vai trò lấy từ sơ đồ: **Kinh doanh**, **Điều hành**, **Kế toán**. Xử lý AI/tự động nằm trong tính năng của vai trò phụ trách, không tạo vai trò riêng.
- Không có bước phê duyệt và thao tác ngoài hệ thống (theo phạm vi ghi trong từng luồng).
- Mã tính năng `TNxx.yy` là **mã mới bổ sung** trong tài liệu này (xx = số luồng SYS nơi tính năng được định nghĩa). Mã bước giữ nguyên theo nguồn.
- **Nút điều kiện** không tạo tính năng và không ghi vào cột Bước luồng, trừ ngoại lệ ghi rõ (SYS02.03).
- **Nút liên kết luồng** (nút có nhãn "SYSnn. …") được gắn vào *tính năng tiếp nhận* = tính năng chứa bước đầu tiên được mở ở luồng đích, xác định theo mô tả của nút.
- **Quản lý danh sách + đối tượng** = xem danh sách, tìm kiếm, lọc, mở đối tượng và truy cập chức năng tạo mới/thao tác; không gồm tạo, sửa, hủy (là tính năng riêng). Áp cho mọi màn hình danh sách đối tượng, kể cả khi nguồn chỉ ghi "hiển thị danh sách" — phần tìm kiếm, lọc khi đó là chuẩn hóa của tài liệu này. Màn hình tổng hợp số liệu (đã thu, còn phải thu, đến hạn, quá hạn) giữ tên *Theo dõi …*.
- Loại: *Thao tác người dùng* / *Xử lý tự động* / *Kết hợp* (người dùng thao tác, hệ thống xử lý tự động trong cùng tính năng). Mọi tính năng ghi nhận nghĩa vụ/giao dịch tài chính mà hệ thống cập nhật số dư công nợ đều xếp loại Kết hợp (ghi chú SYS06: dữ liệu công nợ dùng chung, không tạo lại sổ công nợ).

**Tổng số: 53 tính năng chính** (10 phân hệ) + 7 đề xuất bổ sung (tách riêng, chưa tính vào tổng).

---

## SYS01 — Quản lý Sản phẩm (Tour mẫu)

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN01.01 | Quản lý danh sách Tour mẫu | Kinh doanh | Thao tác người dùng | SYS01.01 | Hiển thị danh sách template Tour; tìm kiếm, lọc; từ danh sách chọn tạo mới hoặc chọn template để cập nhật. |
| TN01.02 | Tạo và cập nhật thông tin Tour mẫu | Kinh doanh | Thao tác người dùng | SYS01.03, SYS01.04 | Tạo template mới với tên, mô tả, thông tin cơ bản của Tour; hoặc nạp template đã chọn để sửa thông tin cơ bản. |
| TN01.03 | Thiết lập lịch trình và dịch vụ theo ngày của Tour mẫu | Kinh doanh | Thao tác người dùng | SYS01.05 | Thiết lập các ngày Tour và danh sách dịch vụ, số lượng hoặc cấu hình tương ứng từng ngày trong cùng một thao tác. |
| TN01.04 | Thiết lập cho phép sử dụng Tour mẫu | Kinh doanh | Thao tác người dùng | SYS01.06 | Lưu cấu hình template và xác định template có được chọn khi thiết kế Tour (SYS03) hay không. |

## SYS02 — Quản lý Yêu cầu Khách hàng

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN02.01 | Quản lý danh sách yêu cầu Tour | Kinh doanh | Thao tác người dùng | SYS02.01, SYS02.07, SYS03.01, SYS02.11 | Hiển thị danh sách yêu cầu Tour kèm chức năng tạo yêu cầu; tìm kiếm, lọc; chọn yêu cầu hiện có để cập nhật, hủy hoặc lập báo giá. Khi mở để thiết kế, nạp khách hàng, nhu cầu, thời gian, số khách, hạng phòng của yêu cầu. |
| TN02.02 | Quản lý danh sách hồ sơ khách hàng | Kinh doanh | Thao tác người dùng | SYS02.03 (ngoại lệ), SYS02.04, SYS10.01, SYS09.04 | Hiển thị danh sách hồ sơ khách hàng; tìm kiếm, lọc (gồm lọc khách hàng có Tour đã đóng); chọn hồ sơ hiện có để gắn vào yêu cầu (không tạo trùng); mở hồ sơ khách hàng có Tour đã đóng để chăm sóc sau Tour. *Ngoại lệ:* nút điều kiện SYS02.03 được gắn vì phân nhánh dựa trên kết quả tìm kiếm hồ sơ. |
| TN02.03 | Tạo hồ sơ khách hàng | Kinh doanh | Thao tác người dùng | SYS02.05 | Nhập thông tin cá nhân và liên hệ để lưu hồ sơ khách hàng mới. |
| TN02.04 | Tạo và cập nhật yêu cầu Tour | Kinh doanh | Thao tác người dùng | SYS02.06, SYS02.09, SYS10.09, SYS10.10 | Tạo yêu cầu Tour liên kết với khách hàng đã chọn/vừa tạo hoặc từ hồ sơ khách hàng sau Tour; nhập và lưu mong muốn, thời gian, số lượng khách, hạng phòng trên cùng hồ sơ yêu cầu; từ đây chọn lập báo giá. |
| TN02.05 | Hủy yêu cầu Tour | Kinh doanh | Thao tác người dùng | SYS02.10, SYS03.14 | Hủy yêu cầu Tour và lưu lý do, từ màn hình yêu cầu hoặc sau khi ghi nhận kết quả báo giá; không tạo trạng thái dừng riêng, không coi một lần sửa báo giá là hủy. |

## SYS03 — Thiết kế Hành trình & Báo giá

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN03.01 | Tạo hành trình từ Tour mẫu | Kinh doanh | Kết hợp | SYS03.03, SYS01.07 | Người dùng chọn template được phép sử dụng; hệ thống sao chép lịch trình và dịch vụ của template vào hành trình của yêu cầu. Template là đầu vào tùy chọn. |
| TN03.02 | Khởi tạo hành trình thủ công | Kinh doanh | Thao tác người dùng | SYS03.04 | Khởi tạo hành trình gắn với yêu cầu khách hàng để nhập mới, ghép ngày từ nhiều Tour mẫu hoặc kết hợp cả hai. |
| TN03.03 | Ghép module ngày từ các Tour mẫu | Kinh doanh | Kết hợp | SYS03.06 | Chọn từng ngày nguồn (lịch trình + dịch vụ) từ một hoặc nhiều Tour mẫu và gán vào ngày đích (vd: ngày 2 Tour A → ngày 1, ngày 3 Tour B → ngày 2); hệ thống sao chép nội dung vào hành trình hiện tại, không sửa Tour nguồn. Dùng khi khởi tạo thủ công hoặc khi ghép thêm/thay ngày lúc chỉnh sửa. |
| TN03.04 | Tạo hành trình bằng AI | Kinh doanh | Kết hợp | SYS03.07 | Người dùng chọn chức năng AI và nhập tiêu chí; hệ thống dùng thông tin yêu cầu Tour để AI đề xuất lịch trình và dịch vụ theo ngày. Đề xuất AI không xác nhận giá hoặc tình trạng còn chỗ của NCC. |
| TN03.05 | Chỉnh sửa và lưu lịch trình, dịch vụ theo ngày của hành trình | Kinh doanh | Thao tác người dùng | SYS03.08 | Bước dùng chung cho cả ba cách tạo: thêm, sửa, xóa, sắp xếp ngày Tour và dịch vụ rồi lưu vào hồ sơ yêu cầu; có thể mở ghép thêm/thay ngày bằng module (TN03.03). |
| TN03.06 | Tính giá bán theo giá vốn và Markup | Kinh doanh | Kết hợp | SYS03.09 | Kinh doanh nhập/chọn số khách, cơ cấu tuổi trẻ em, hạng phòng, số phòng đơn, ngày sử dụng, loại tiền báo giá và tỷ giá; hệ thống chọn hợp đồng NCC có kỳ hiệu lực chứa ngày sử dụng, xác định mùa giá và ngày thường/cuối tuần của hợp đồng theo từng ngày (lưu trú qua nhiều mùa tách tính theo đêm), lấy mức giá phù hợp từ bảng giá của hợp đồng đó (CNHT01.05), áp giá trẻ em theo nhóm tuổi trong chính sách trẻ em của hợp đồng (CNHT01.04), áp dụng phụ thu, quy đổi từng khoản theo tỷ giá rồi tính Markup, tổng giá vốn và giá bán. Không cộng trực tiếp các khoản khác loại tiền; khi thiếu mức giá hoặc tỷ giá phù hợp thì hiển thị phần thiếu để người dùng nhập/chọn, không tự dùng giá 0 hoặc tỷ giá mặc định. Khi không có hợp đồng còn hiệu lực cho ngày sử dụng thì cảnh báo, không tự dùng hợp đồng khác. Lưu mức giá, hợp đồng, mùa giá đã áp, điều kiện áp dụng, số lượng, loại tiền gốc và tỷ giá đã dùng cùng phiên bản báo giá; sửa bảng giá, hợp đồng hoặc chính sách NCC sau đó không tự đổi báo giá đã lưu. Không mặc định dùng giá do AI sinh. |
| TN03.07 | Lưu phiên bản và xuất báo giá PDF/Link | Kinh doanh | Kết hợp | SYS03.10 | Lưu phiên bản báo giá cùng hành trình và giá tương ứng; hệ thống tạo báo giá dạng PDF hoặc Link. Báo giá tổng hợp dịch vụ bao gồm và không bao gồm từ các dịch vụ trong hành trình theo hồ sơ NCC (CNHT01.05) (đề xuất). |
| TN03.08 | Ghi nhận kết quả báo giá | Kinh doanh | Thao tác người dùng | SYS03.11 | Nhập kết quả báo giá khi có dữ liệu (có thể mở lại hồ sơ sau); từ kết quả chọn sửa hành trình, sửa giá, tạo Booking hoặc hủy yêu cầu. |

## SYS04 — Quản lý Đơn hàng (Booking) & Thanh toán

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN04.01 | Tạo Booking từ báo giá đã chốt | Kinh doanh | Kết hợp | SYS04.01, SYS04.02, SYS03.13 | Chọn yêu cầu cùng phiên bản báo giá đã ghi nhận chốt đặt Tour; hệ thống tạo Booking kế thừa khách hàng, hành trình và giá trị của đúng phiên bản báo giá. |
| TN04.02 | Thiết lập điều khoản và lịch thanh toán Booking | Kinh doanh | Thao tác người dùng | SYS04.03 | Nhập điều khoản, các đợt thanh toán, số tiền và thời hạn thanh toán của Booking. |
| TN04.03 | Hủy Booking | Kinh doanh | Thao tác người dùng | SYS04.05, SYS04.06 | Mở Booking hiện có và ghi nhận hủy cùng lý do. Không tự động hủy các đặt dịch vụ; hủy từng đặt dịch vụ tại TN06.04. |
| TN04.04 | Theo dõi thanh toán Booking | Kế toán | Thao tác người dùng | SYS04.07 | Mở lịch thanh toán, các khoản đã thu và công nợ của Booking. |
| TN04.05 | Ghi nhận khoản thu theo Booking | Kế toán | Kết hợp | SYS04.08, SYS04.09 | Nhập khoản thu thực tế, liên kết Booking/đợt thanh toán; hệ thống tự tổng hợp giao dịch và nghĩa vụ hiện hành để cập nhật số đã thu, số còn phải thu (không tạo trạng thái thanh toán chi tiết). |
| TN04.06 | Ghi nhận điều chỉnh phải thu/hoàn tiền theo điều khoản hủy | Kế toán | Kết hợp | SYS04.10, SYS04.09 | Sau khi hủy Booking, ghi nhận điều chỉnh nghĩa vụ thanh toán và khoản cần hoàn theo điều khoản hủy; hệ thống cập nhật số dư (dùng chung xử lý tự động SYS04.09 với TN04.05). |

## SYS05 — Quản lý Hồ sơ Điều hành Tour

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN05.01 | Quản lý danh sách hồ sơ điều hành (hồ sơ Tour) | Điều hành | Thao tác người dùng | SYS05.01, SYS08.01, SYS09.01, SYS07.05, SYS08.08 | Xem danh sách, tìm kiếm, lọc và mở hồ sơ điều hành theo Tour Code; có chức năng tạo hồ sơ từ Booking. Dùng để mở hồ sơ Tour khi theo dõi Tour (SYS08) và mở hồ sơ Tour đã kết thúc khi quyết toán (SYS09). |
| TN05.02 | Tạo hồ sơ điều hành từ Booking | Điều hành | Kết hợp | SYS05.03, SYS04.04 | Chọn Booking chưa có hồ sơ điều hành (không tạo trùng); hệ thống tự sinh Tour Code, bóc tách hành trình thành danh sách dịch vụ và tạo checklist công việc. Không yêu cầu Booking đã thanh toán đủ. |
| TN05.03 | Phân công nhân viên phụ trách hồ sơ điều hành | Điều hành | Thao tác người dùng | SYS05.04 | Mở hồ sơ mới tạo hoặc hồ sơ được chọn; gán/thay đổi nhân viên Điều hành phụ trách toàn hồ sơ khi cần, giữ nguyên nếu không đổi. |
| TN05.04 | Phân công công việc và cập nhật checklist, dịch vụ | Điều hành | Thao tác người dùng | SYS05.05 | Trên dịch vụ/checklist hệ thống đã tạo: phân công người thực hiện từng việc (có thể khác người phụ trách hồ sơ), cập nhật tiến độ, chỉnh sửa nội dung khi cần. |

## SYS06 — Quản lý Đặt dịch vụ

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN06.01 | Quản lý danh sách đặt dịch vụ | Điều hành | Thao tác người dùng | SYS06.01, SYS05.06 | Xem danh sách dịch vụ và các lần đặt theo Tour; tìm kiếm, lọc, mở đối tượng để đặt mới/đặt lại, cập nhật kết quả hoặc hủy. |
| TN06.02 | Gửi yêu cầu đặt dịch vụ cho NCC bằng email soạn sẵn | Điều hành | Kết hợp | SYS06.03 | Chọn dịch vụ và NCC; hệ thống tự điền email từ hồ sơ (Tour Code, ngày sử dụng, số lượng, yêu cầu dịch vụ); người dùng chỉnh sửa và gửi trên hệ thống. Dùng chung cho đặt mới và đặt lại. |
| TN06.03 | Cập nhật kết quả đặt dịch vụ và mã xác nhận | Điều hành | Thao tác người dùng | SYS06.04 | Nhập kết quả nhận được, thông tin dịch vụ đã xác nhận và mã xác nhận (nếu có); ghi nhận giá dịch vụ thực tế NCC xác nhận nếu khác giá tham chiếu trong bảng giá, không tự sửa giá đã chốt với khách; có thể cập nhật sau. Dịch vụ xác nhận được dùng cho hồ sơ trước Tour và ghi nhận tài chính độc lập. |
| TN06.04 | Hủy đặt dịch vụ | Điều hành | Thao tác người dùng | SYS06.06 | Trên cùng hồ sơ đặt dịch vụ, ghi nhận yêu cầu hủy, lý do, phí hủy và cập nhật kết quả hủy khi có dữ liệu. Phí hủy được gợi ý theo chính sách đổi hủy của hợp đồng NCC áp dụng (CNHT01.04) dựa trên ngày hủy và ngày sử dụng; Điều hành sửa được theo phí NCC báo thực tế. |
| TN06.05 | Ghi nhận khoản phải trả và lịch thanh toán NCC | Kế toán | Kết hợp | SYS06.07 | Ghi nhận/điều chỉnh khoản phải trả theo NCC, dịch vụ, Tour (gồm phí hủy, khoản cần hoàn); thiết lập điều khoản, các đợt và hạn trả, điền sẵn từ điều khoản thanh toán của hợp đồng NCC áp dụng và thông tin nhận thanh toán của NCC (CNHT01.03); hệ thống cập nhật số dư khi giá trị nghĩa vụ thay đổi. |
| TN06.06 | Theo dõi thanh toán và công nợ NCC | Kế toán | Thao tác người dùng | SYS06.08 | Truy cập trực tiếp danh sách thanh toán; tìm kiếm, lọc, xem tổng phải trả, đã trả, còn phải trả/phải nhận hoàn và các khoản sắp đến hạn, quá hạn. |
| TN06.07 | Ghi nhận chi trả hoặc nhận hoàn NCC | Kế toán | Kết hợp | SYS06.09 | Ghi nhận giao dịch chi trả/nhận hoàn thực tế kèm chứng từ; hệ thống tự cập nhật số dư công nợ. Hỗ trợ nhiều lần thanh toán và giao dịch sau khi đóng Tour. |

## SYS07 — Quản lý Hồ sơ Trước Tour

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN07.01 | Nhập và cập nhật danh sách khách đoàn, yêu cầu riêng | Kinh doanh | Thao tác người dùng | SYS07.01, SYS07.02, SYS06.10 | Mở danh sách khách gắn với Booking và Tour Code; nhập/cập nhật thông tin thành viên trong đoàn và các yêu cầu riêng. |
| TN07.02 | Thiết lập phân phòng | Điều hành | Thao tác người dùng | SYS07.03 | Xếp khách theo phòng trên hồ sơ Tour (bước SYS07.03 tổng hợp, gắn cùng TN07.03). |
| TN07.03 | Phân công nhân sự phục vụ Tour | Điều hành | Thao tác người dùng | SYS07.03 | Gán nhân sự phục vụ trên hồ sơ Tour (bước SYS07.03 tổng hợp, gắn cùng TN07.02). |
| TN07.04 | Tổng hợp và xuất Pax list, Rooming list | Điều hành | Kết hợp | SYS07.04 | Hệ thống tổng hợp dữ liệu khách và phân phòng đã nhập để tạo danh sách khách và danh sách phân phòng; người dùng xuất tài liệu. |

## SYS08 — Theo dõi & Xử lý sự cố

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN08.01 | Cập nhật trạng thái Tour | Điều hành | Thao tác người dùng | SYS08.03 | Ghi nhận trạng thái thực tế của Tour (đang diễn ra, đã kết thúc); khi trạng thái là kết thúc thì Tour được chuyển sang quyết toán. |
| TN08.02 | Ghi nhật ký điều hành | Điều hành | Thao tác người dùng | SYS08.04 | Nhập nội dung nhật ký điều hành gắn với Tour Code. |
| TN08.03 | Ghi nhận sự cố và kết quả xử lý | Điều hành | Thao tác người dùng | SYS08.05 | Nhập nội dung sự cố, cách xử lý và kết quả xử lý trên hệ thống. |
| TN08.04 | Nhập chi phí phát sinh và chứng từ | Điều hành | Thao tác người dùng | SYS08.06 | Lưu khoản chi phí phát sinh trong Tour kèm chứng từ để Kế toán ghi nhận theo Tour. |
| TN08.05 | Ghi nhận công nợ và thu chi phát sinh theo Tour Code | Kế toán | Kết hợp | SYS08.09 | Từ chi phí phát sinh, nhập khoản phải thu, phải trả và giao dịch thu chi thực tế theo Tour Code; hệ thống cập nhật số dư trên dữ liệu công nợ dùng chung. |

## SYS09 — Quyết toán & Đóng Tour

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN09.01 | Nhập chi phí dịch vụ thực tế và chứng từ | Điều hành | Thao tác người dùng | SYS09.02 | Với Tour đã kết thúc, ghi nhận giá trị dịch vụ thực tế và chứng từ theo Tour Code để Kế toán quyết toán. |
| TN09.02 | Nhập số liệu đối chiếu công nợ khách hàng và NCC | Kế toán | Thao tác người dùng | SYS09.05 | Nhập kết quả đối chiếu AR (khách hàng) và AP (NCC) theo Tour. |
| TN09.03 | Lập quyết toán và tự động tính P&L thực tế | Kế toán | Kết hợp | SYS09.06, SYS09.07 | Cập nhật doanh thu, chi phí thực tế và các khoản điều chỉnh; hệ thống tính P&L thực tế từ số liệu đã ghi nhận và lưu kết quả quyết toán theo Tour Code. |
| TN09.04 | Đóng Tour | Điều hành | Thao tác người dùng | SYS09.03 | Sau khi lưu quyết toán, đóng Tour và khóa hồ sơ điều hành; không yêu cầu công nợ bằng 0. |
| TN09.05 | Theo dõi công nợ Tour và ghi nhận thu chi | Kế toán | Kết hợp | SYS09.08, SYS09.09 | Mở các khoản công nợ của Tour (độc lập với việc đóng hồ sơ), ghi nhận giao dịch thu chi thực tế; hệ thống cập nhật số dư công nợ. |

## SYS10 — Chăm sóc khách hàng

| Mã tính năng | Tính năng | Vai trò tham gia | Loại | Bước luồng | Mô tả |
| --- | --- | --- | --- | --- | --- |
| TN10.01 | Cập nhật lịch sử sử dụng dịch vụ và hạng khách hàng | Kinh doanh | Kết hợp | SYS10.02 | Gắn lịch sử sử dụng dịch vụ của Tour đã đóng vào hồ sơ khách hàng và cập nhật hạng khách hàng theo tiêu chí cấu hình. |
| TN10.02 | Thiết lập và tự động gửi Survey | Kinh doanh | Kết hợp | SYS10.04 | Thiết lập nội dung và điều kiện gửi Survey; hệ thống gửi tự động theo cấu hình. |
| TN10.03 | Ghi nhận phản hồi và kết quả chăm sóc khách hàng | Kinh doanh | Thao tác người dùng | SYS10.05 | Lưu phản hồi nhận được và nội dung, kết quả chăm sóc vào hồ sơ khách hàng. |
| TN10.04 | Phân nhóm khách hàng và tự động gửi email remarketing | Kinh doanh | Kết hợp | SYS10.06, SYS10.07 | Chọn phân nhóm mục tiêu, nội dung email, lịch gửi và luồng email remarketing; hệ thống tự động gửi email theo cấu hình đã lưu. |
| TN10.05 | Xem thống kê Survey và chiến dịch email | Kinh doanh | Thao tác người dùng | SYS10.08 | Hiển thị số liệu phản hồi Survey và kết quả chiến dịch email hệ thống ghi nhận. |

---

## Bước không tạo tính năng (nút điều kiện / lựa chọn thao tác)

SYS01.02, SYS02.02, SYS02.08, SYS03.02, SYS03.05, SYS03.12, SYS05.02, SYS06.02, SYS06.05, SYS08.02, SYS08.07, SYS10.03.

Ngoại lệ: SYS02.03 (Đã có hồ sơ khách hàng?) gắn vào TN02.02 vì phân nhánh dựa trên kết quả tìm kiếm hồ sơ.

## Bước gắn nhiều tính năng (có chủ đích)

| Mã bước | Tính năng | Lý do |
| --- | --- | --- |
| SYS04.09 | TN04.05, TN04.06 | Xử lý tự động cập nhật số dư dùng chung cho khoản thu và điều chỉnh do hủy. |
| SYS07.03 | TN07.02, TN07.03 | Bước tổng hợp gồm hai kết quả khác nhau: phân phòng và phân công nhân sự. |
