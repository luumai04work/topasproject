# RSD HD01 · Tour của tôi

**TOPAS · Module HDV · Phiên bản 1.0 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

> **Wireframe chưa dựng; mã W giữ chỗ.** Mã W trong bước luồng là chỗ để dựng sau; chưa có ảnh, chưa có thư mục `wireframes/`. Khi dựng: khung điện thoại 390 × 844 px (kiểm thêm ở 360 px và 430 px), một hình máy tính 1280 × 800 px cho W01 và W10 để kiểm bố cục cột giữa (mục 2.5).

- **Nguồn nghiệp vụ.** `docs/rsd/BOI-CANH-DU-AN.md` (bảng Tổ chức và vai trò; Phân quyền, ngoại lệ phòng HDV; thuật ngữ HDV (vai trò), Vai trò phục vụ, Tour của tôi, Do HDV ghi, Nội bộ và Cộng tác viên; Nền tảng: màn của phòng HDV thiết kế cho điện thoại; Tệp đính kèm Q19; mục “Vai trò HDV (người dùng chốt 12/11/2026)” và các mặc định đi kèm), ADR 0007 (HDV chỉ thấy Tour được phân công), ADR 0001 (quyền theo màn và thao tác), ADR 0002 (tác động chéo trong một giao dịch). Dữ liệu và quy tắc ghi lấy từ RSD DH08 v2.9 (DH08.1 lịch trình; DH08.3 hạng mục, lần đặt, mã xác nhận; DH08.4 khách đoàn, đợt lưu trú; DH08.5 phân công, R12; DH08.6 L6.1–L6.3; DH08.7 L7.1, E7.1–E7.3; DH08.8 L8.1, R16; R13; mục 1.4 che hộ chiếu; mục 2.4 cập nhật đồng thời; R20 mục do HDV ghi), RSD DH06 v1.4 (R01 tài khoản của Cộng tác viên), RSD DH03 v1.5 (đầu mối NCC), RSD CH01 v1.0 (R18 trang mặc định sau đăng nhập), RSD CH02 v1.0 (R01 người nhận, R04 làm mới, R07 mở đích), RSD QT02 v1.0 (vai trò thuộc phòng). Người dùng chốt thêm vai trò HDV ngày 12/11/2026.
- **Nguồn bổ sung (12/11/2026, sau khi viết bản đầu).** BOI-CANH mục “Vai trò HDV”, đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)” và các mặc định theo Q3 ngay sau đó; RSD QT03 v1.2 (R01, R07: ngoại lệ ghi lượt hiện số hộ chiếu); RSD KD08 v1.6 mục 5.1 (người liên hệ của Booking); RSD KD03-KD04 v1.5 (điện thoại của khách, của người liên hệ); RSD DH06 v1.4 mục 5.1 (điện thoại nhân sự); RSD CH02 v1.0 (TB-DH08-13); quyết định phase coding Q5, Q21 (PDF dựng qua hàng đợi, từ trang HTML).
- **Thay đổi ở v1.0 (12/11/2026).** Bản đầu tiên.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026).** Theo quyết định của người dùng sau khi viết bản đầu (BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm”). (1) Số hộ chiếu hiện dạng che, nút **Hiện số** trên từng khách hiện số đầy đủ; mỗi lần hiện ghi một mục QT03 (L2.3, R03, R11, E2.9, E2.10). (2) Hiện và gọi được điện thoại của Điều hành phụ trách, của khách trong đoàn (nếu DH08.4 có số) và của người liên hệ chính phía khách hàng trên Booking (2.1, L2.3, thêm L2.5, R03, R12, E2.11). (3) Không xem ngoại tuyến; thêm luồng **Tải PDF chương trình** không giá, dựng qua hàng đợi, để xem khi mất mạng (2.5, thêm L2.6, R13, E2.12–E2.15). (4) Thông báo TB-DH08-13 khi Điều hành áp dụng thay đổi chương trình (1.2, 1.3, L1.2, E2.6, R06). (5) HDV cập nhật kết quả sự cố thì Điều hành phụ trách nhận TB-HD01-01; HDV không nhận thông báo khi Đóng Tour (L3.2, L3.3, R06, 2.3). (6) Nội dung TB-HD01-01, TB-HD01-02 không chứa số tiền, theo RSD CH02 mục 1.4 (R06, AC16). (7) Điều hành sửa và xóa được mục Do HDV ghi; mục bị xóa thì HDV không còn thấy (R04, E3.6, E4.9). (8) Vai trò thuộc phòng HDV chỉ có mã HD01, QT02 khóa mọi mã khác (1.4). Sửa 1.1–1.5, 2.1, 2.3, 2.5, L1.2, L2.3, L3.2, L3.3, E2.6, E3.6, E5.7, R03, R04, R06, R10, 5.1, 5.3, AC09, AC16; thêm L2.5, L2.6, E2.9–E2.15, E3.8, E4.9, R11–R13, AC41–AC52. Mã W mới (W15–W18) giữ chỗ như các mã khác.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · sau rà soát).** Theo hai quyết định mới của người dùng (BOI-CANH “Vai trò HDV”, hai dòng cuối) và phát hiện của người rà soát; giữ số hiệu L, E, R, AC. (A) HDV chỉ thấy nhật ký và sự cố do chính mình ghi; số sự cố đang xử lý trên tab và thẻ chỉ đếm sự cố của mình (1.4, 1.5, 2.1, L1.1, L3.1, L3.3, E3.8, R02, R03, AC21). (B) PDF chương trình có Rooming list, chỉ tên khách và số phòng (1.4, 1.5, L2.6, R13, 5.3, AC46). Theo rà soát: TB-HD01-02 làm mới theo hồ sơ Tour (R06, AC28; RSD CH02 R04, Phụ lục A); hồ sơ ngoài phạm vi báo “Không tìm thấy <Tour Code>” theo CGD K0.09 (E1.3, AC04, AC42); không trả chứng từ của khoản do người khác ghi, mọi đường tải tệp kiểm quyền, phạm vi, người ghi (R03); ảnh HEIC do trình duyệt đổi sang JPG, nút Chụp ảnh, Chọn tệp theo CGD K7.09 (L4.1, E4.1, R07, AC26); Gửi lại kiểm phiên, quyền, phạm vi trước khi tra mã yêu cầu (R08, E5.1, E5.3); câu chữ TB-DH08-11, TB-DH08-12 theo mẫu RSD CH02 (L1.2); “vai trò phục vụ” (L1.1, L1.2); nhãn “Người liên hệ của Booking” thay “người liên hệ chính” (2.1, L2.5, R03, R12); trang mặc định dẫn RSD CH01 R18 (nguồn, 1.2, R02); danh sách Tour của tôi không có Xem thêm, ngoại lệ ghi ở CGD K7.06 (R02); Xóa số chi phí thực tế báo Kế toán khi đã có quyết toán Hiện hành (L4.3); R05 dẫn RSD DH08 R20 về nguồn của dòng chi phí thực tế; viết lại AC10, AC17, AC25, AC32, AC43 cho kiểm được; AC49 thêm giờ và trạng thái hồ sơ khi Đóng Tour.
- **Thay đổi ở v1.0 (bổ sung 12/11/2026 · dịch vụ đi kèm).** Theo quyết định của người dùng ngày 12/11/2026 (BOI-CANH-DU-AN, thuật ngữ Dịch vụ đi kèm, Giường phụ; RSD DH08 v2.9 R21). Dòng dịch vụ đã đặt hiện các dịch vụ đi kèm của hạng mục (tên, số lượng và đơn vị, ngày), không có giá (L2.2, R03); PDF chương trình cũng có vì dịch vụ của ngày lấy như L2.2 (R13). Rooming list trên màn hiện ghi chú phòng “Giường phụ” cho phòng có giường phụ (L2.4, R03); Rooming list trong PDF giữ đúng phạm vi đã chốt (chỉ số phòng và tên khách). Sửa L2.2, L2.4, R03, R13; thêm AC53. Không đổi luồng, quyền.
- **Cách đọc.** Mục 3 là luồng theo tab; mỗi bước có mã W, chỗ bấm, thao tác và phản hồi. Mục 4 là quy tắc (mã R). HD01 không sở hữu dữ liệu nghiệp vụ: mọi dữ liệu đọc và ghi thuộc DH08; khi quy tắc đã có ở DH08, tài liệu này dẫn mã R hoặc L của DH08, không viết lại. Mục 6 là tiêu chí nghiệm thu, mỗi AC gắn một mã test, chạy qua API và trình duyệt cỡ điện thoại.
- **Quy ước ví dụ.** Hồ sơ TP-2611-0042 (BK-2610-0137, Müller Reisen GmbH, 18 khách, 18/11–25/11/2026, tiếng Đức), Điều hành phụ trách Trần Minh Anh. HDV ví dụ là Vũ Đức Long (NS-019, Cộng tác viên, tài khoản chỉ có vai trò HDV), được phân công HDV suốt tuyến. Giờ hiện tại trong ví dụ là 20/11/2026 09:00 (Asia/Ho_Chi_Minh), trừ khi AC ghi khác. Tên, mã, số liệu chỉ để minh họa.

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

HD01 là màn duy nhất của người dẫn đoàn, gồm cả Cộng tác viên ngoài công ty, dùng trên điện thoại trong lúc dẫn đoàn. Mục tiêu thiết kế:

- **Mở ra là thấy đoàn hôm nay.** Đăng nhập xong vào thẳng danh sách Tour của tôi; đoàn đang diễn ra đứng đầu; chạm một lần là ra chương trình của ngày hôm nay.
- **Ghi ngay tại chỗ, ít gõ.** Ghi nhật ký, sự cố, chi phí từ một nút; thời điểm, ngày Tour và ngày chi điền sẵn; chụp chứng từ bằng máy ảnh của điện thoại; lưu là vào hồ sơ ngay, không chờ duyệt.
- **Chỉ thấy đúng đoàn của mình, không thấy tiền của công ty.** Máy chủ chặn mọi hồ sơ không được phân công (ADR 0007); không có giá bán, giá vốn, Markup, công nợ, quyết toán, thông tin thanh toán NCC (R03).
- **Mạng yếu không làm mất chữ.** Mất mạng khi đang ghi thì nội dung được giữ trên máy và người dùng tự bấm Gửi lại khi có mạng (R08). HD01 cần mạng để xem; muốn xem chương trình ở nơi không có sóng thì tải trước PDF chương trình (L2.6).
- **Gọi được ngay người cần gọi.** Đầu mối NCC, Điều hành phụ trách, người liên hệ phía khách hàng và khách trong đoàn đều là số chạm để gọi (L2.5).

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| Đăng nhập (CH01) → HD01.1 | Tài khoản chỉ có vai trò thuộc phòng HDV đăng nhập thành công mà không có `next` hợp lệ thì mở HD01.1 thay cho Việc của tôi (R02). Tài khoản có thêm vai trò thuộc phòng khác vẫn vào Việc của tôi (RSD CH01 R18, CH03); mở HD01 từ menu. |
| Menu → HD01.1 | Mục **Tour của tôi** ở menu, hiện với người có `HD01.xem`. |
| Thông báo TB-DH08-11 → HD01.2 | Mở chi tiết Tour vừa được phân công, tab Chương trình (L1.2). |
| Thông báo TB-DH08-12 → HD01.1 | Mở danh sách Tour của tôi; hồ sơ đã gỡ không còn trong danh sách (L1.2). |
| Thông báo TB-DH08-13 → HD01.2 | Mở chi tiết Tour, tab Chương trình, theo phiên bản chương trình vừa áp dụng (L1.2; RSD CH02 Phụ lục A). |
| HD01.3, HD01.4 → DH08.6, DH08.7, DH08.8 | Mục HDV ghi được lưu thẳng vào dữ liệu của DH08 trong cùng giao dịch (ADR 0002); Điều hành thấy ở DH08 với nhãn Do HDV ghi (RSD DH08 R20). |
| HD01 → thông báo cho Điều hành | TB-HD01-01, TB-HD01-02 mở DH08 ở tab của mục (R06). |
| HD01.2 → ứng dụng gọi điện | Chạm số điện thoại của đầu mối NCC, Điều hành phụ trách, người liên hệ phía khách hàng hoặc khách trong đoàn mở trình gọi của điện thoại (liên kết `tel:`, L2.2, L2.5); TOPAS không ghi gì. |
| HD01.2 → tệp PDF chương trình | Nút Tải PDF chương trình ở tab Chương trình; tệp tải về máy để xem khi mất mạng (L2.6, R13). |
| HD01 → DH08 | Không có. HDV không mở DH08; liên kết Tour Code trong HD01 luôn mở HD01.2 (ADR 0007). |

### 1.3. Ranh giới

- HD01 **không sở hữu** dữ liệu nghiệp vụ nào. Đọc từ: hồ sơ Tour, lịch trình theo phiên bản chương trình đang áp dụng, hạng mục dịch vụ và lần đặt, khách đoàn, đợt lưu trú và phòng, phân công nhân sự (DH08); đầu mối NCC (DH03); liên kết nhân sự – tài khoản (QT01, DH06); điện thoại của Điều hành phụ trách (DH06); người liên hệ của Booking (KD08) và điện thoại của người đó (KD03-KD04). Ghi vào: nhật ký và sự cố (DH08.6), chi phí phát sinh (DH08.7), chi phí thực tế bước 1 (DH08.8), theo đúng quy tắc của DH08 và RSD DH08 R20.
- HD01 **sở hữu**: bố cục điện thoại, danh sách Tour của tôi (cách nhóm, thứ tự), phạm vi hiển thị cho HDV (R01, R03), thao tác Hiện số hộ chiếu (R11), PDF chương trình cho HDV (R13), bản chưa gửi lưu trên máy (R08), hai loại thông báo TB-HD01-01, TB-HD01-02 (danh mục ở RSD CH02).
- Phân công và gỡ phân công làm ở DH08.5; thông báo TB-DH08-11, TB-DH08-12 do DH08 tạo (RSD DH08 R12). Thay đổi chương trình được Điều hành áp dụng ở DH08 (RSD DH08 L1.5, R19) thì DH08 tạo TB-DH08-13 cho tài khoản của mọi nhân sự được phân công; HD01 hiện phiên bản mới ở lần tải sau; bản còn Chờ áp dụng không hiện ở HD01.
- HD01 không gửi gì ra ngoài hệ thống; PDF chương trình chỉ tải về máy của chính HDV (mục 5.3).

### 1.4. Quyền mặc định theo vai trò

Quyền là cặp (phần của màn, thao tác), gán cho vai trò ở QT02 (ADR 0001). Mã quyền dưới đây dùng cố định ở Phụ lục A của RSD QT02. “HDV” trong bảng là vai trò thuộc phòng HDV (vai trò hệ thống HDV hoặc vai trò tự tạo thuộc phòng HDV).

| Phần × thao tác | Mã quyền | HDV | Điều hành | Kinh doanh | Kế toán | Quản trị |
|---|---|---|---|---|---|---|
| Xem Tour của tôi, chương trình, dịch vụ đã đặt, khách đoàn, Rooming list, nhật ký và sự cố do chính mình ghi (HD01.1, HD01.2, HD01.3); Hiện số hộ chiếu từng khách (R11); gọi Điều hành phụ trách, người liên hệ của Booking, khách trong đoàn (R12); tải PDF chương trình (R13) | `HD01.xem` | Có | Không | Không | Không | Có (cố định, Q25) |
| Ghi nhật ký và sự cố; sửa, xóa mục do chính mình ghi (HD01.3) | `HD01.ghi-nhat-ky` | Có | Không | Không | Không | Không |
| Ghi chi phí phát sinh và chi phí thực tế; sửa, xóa mục do chính mình ghi (HD01.4) | `HD01.ghi-chi-phi` | Có | Không | Không | Không | Không |

- **Phạm vi bản ghi (ADR 0007).** Mọi truy vấn và thao tác của HD01 chỉ trả hoặc nhận hồ sơ mà nhân sự liên kết với tài khoản đang được phân công phục vụ, từ lúc phân công đến khi hồ sơ Đã đóng (R01). Lọc ở máy chủ, không chỉ ẩn trên giao diện. HD01 lọc như vậy với mọi tài khoản, vì màn là “Tour của tôi”; Quản trị và Điều hành xem toàn bộ hồ sơ ở DH08 theo quyền của DH08.
- **Không có DH08 và màn khác (đã chốt, mặc định Q3).** Vai trò thuộc phòng HDV chỉ được cấp mã quyền HD01 và các màn chung CH01–CH03; QT02 khóa ở Không mọi mã khác, kể cả mã của DH08, để phạm vi của ADR 0007 không bị lách qua DH08 (BOI-CANH “Vai trò HDV”, mặc định sau đoạn “Người dùng chốt thêm”; RSD QT02 R04; RSD DH08 mục 1.4). HDV làm mọi việc qua HD01.
- **Chỉ mục của mình.** Ghi mới thì được trên mọi hồ sơ trong phạm vi; sửa, xóa chỉ mục do chính tài khoản ghi qua HD01, khi hồ sơ chưa Đã đóng (R05). Nhật ký, sự cố, chi phí phát sinh do Điều hành hoặc HDV khác ghi không hiện ở HD01 (người dùng chốt 12/11/2026, R03); dòng chi phí thực tế do người khác lưu số chỉ hiện trạng thái, không có số, không sửa được.
- **Ẩn và chặn.** Không có quyền thì ẩn nút; máy chủ kiểm tra quyền, phạm vi, người ghi, trạng thái hồ sơ và phiên bản bản ghi ở mỗi lần ghi (R09).
- **Dữ liệu cá nhân.** Số hộ chiếu hiện dạng che trong danh sách và trong mọi phản hồi danh sách của máy chủ; số đầy đủ chỉ trả cho từng khách khi HDV bấm Hiện số, và mỗi lần hiện ghi một mục QT03 (R11; ngoại lệ duy nhất của quy tắc “QT03 không ghi lượt xem”, RSD QT03 R01). Điện thoại của khách hiện khi DH08.4 có số (R12). Không có ngày sinh, ngày hết hạn hộ chiếu, visa, ghi chú cho Điều hành của khách (R03). PDF chương trình chỉ mang tên khách và số phòng trong Rooming list (R13). Liên hệ của nhân sự khác không hiện, trừ điện thoại của Điều hành phụ trách hồ sơ (R12).

### 1.5. Truy vết nguồn

| Yêu cầu nguồn (BOI-CANH “Vai trò HDV”, ADR 0007) | Luồng, quy tắc |
|---|---|
| Xem Tour mình được phân công; trang mặc định của tài khoản chỉ có vai trò thuộc phòng HDV; Cộng tác viên đăng nhập | L1.1, L1.2, R01, R02 |
| Chương trình theo ngày, dịch vụ đã đặt, liên hệ NCC, phân công của mình | L2.1, L2.2 |
| Khách đoàn (che hộ chiếu), Rooming list | L2.3, L2.4, R03 |
| Ghi nhật ký và sự cố; Do HDV ghi, không chờ duyệt | L3.1, L3.2, R04 |
| Chỉ sửa, xóa mục của mình khi hồ sơ chưa Đã đóng | L3.3, L4.2, R05 |
| Chi phí phát sinh, chi phí thực tế kèm ảnh chứng từ | L4.1, L4.3, R07 |
| Điều hành phụ trách nhận thông báo; Kế toán ghi công nợ như với mục Điều hành ghi | R06; RSD DH08 L7.2, R20 |
| Gỡ phân công hoặc hồ sơ Đã đóng thì mất quyền ở yêu cầu kế tiếp | R01, R09, E1.3, E3.4 |
| Dùng trên điện thoại; mất mạng khi đang ghi | Mục 2.5, L5.1, R08 |
| Chốt thêm: số hộ chiếu đầy đủ khi bấm Hiện số, chỉ Tour được phân công, mỗi lần hiện ghi QT03 | L2.3, R11; RSD QT03 R01 |
| Chốt thêm: gọi Điều hành phụ trách, khách trong đoàn (nếu có số), người liên hệ phía khách hàng trên Booking | L2.5, R12 |
| Chốt thêm: không xem ngoại tuyến; giữ nội dung đang ghi để gửi lại; tải PDF chương trình theo ngày không giá | Mục 2.5, L2.6, L5.1, R08, R13 |
| Chốt thêm: Điều hành áp dụng thay đổi chương trình thì mọi HDV được phân công nhận thông báo | L1.2, R06 (TB-DH08-13; RSD DH08 L1.5) |
| Mặc định Q3 sau chốt thêm: phòng HDV chỉ có mã HD01; không có Lưu và chuyển Kế toán; Điều hành sửa, xóa mục Do HDV ghi; cập nhật kết quả sự cố báo Điều hành; không báo HDV khi Đóng Tour | 1.4, L4.3, R04, R06; RSD DH08 L6.4, R20 |
| Chốt 12/11/2026 (sau rà soát): HDV chỉ thấy nhật ký và sự cố do chính mình ghi | 1.4, L3.1, L3.3, R02, R03 |
| Chốt 12/11/2026 (sau rà soát): PDF chương trình có Rooming list, chỉ tên khách và số phòng | L2.6, R13 |

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. Khung màn trên điện thoại

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Thanh trên (cả HD01) | Ở HD01.1: chữ “Tour của tôi”, chuông thông báo có số chưa đọc (RSD CH02), nút menu (Tour của tôi, Đổi mật khẩu, Đăng xuất). Ở HD01.2: nút ← Tour của tôi, Tour Code, chuông | CH01, CH02 |
| Phần đầu HD01.2 | Dòng 1: Tour Code, nhãn trạng thái hồ sơ theo DH08 (Mới tạo, Đang diễn ra, Đã kết thúc), chỉ báo Booking đã hủy nếu có. Dòng 2: khách, số khách, thời gian và số ngày đêm, ngôn ngữ phục vụ. Dòng 3: phân công của tôi (vai trò phục vụ, Toàn Tour hoặc các ngày), Điều hành phụ trách (họ tên kèm nút gọi điện, L2.5, R12) | Hồ sơ Tour, phân công (DH08); điện thoại nhân sự (DH06) |
| Thanh tab dưới (HD01.2) | Chương trình · Khách đoàn · Nhật ký · Chi phí. Tab Nhật ký có số sự cố Đang xử lý (đỏ) do chính tài khoản ghi (R03), cùng cách hiện như số trên tab của DH08 | DH08 mục 2.1 |
| Banner trên nội dung | Mục chưa gửi (W41, R08); không còn quyền (W03) | R08, R01 |
| Nút ghi | Nút nổi “+ Ghi” ở tab Nhật ký và Chi phí; khối Hôm nay của tab Chương trình có ba nút + Nhật ký, + Sự cố, + Chi phí | L3.1, L3.2, L4.1 |
| Đầu tab Chương trình | Nút phụ **Tải PDF chương trình** (W16) | L2.6, R13 |
| Đầu tab Khách đoàn | Khối **Liên hệ phía khách hàng**: nhãn “Người liên hệ của Booking”, họ tên, nút gọi điện | L2.5, R12 |

**Nút theo trạng thái.** Mới tạo, Đang diễn ra: ghi nhật ký, sự cố, chi phí phát sinh; chi phí thực tế khóa kèm lý do “Mở khi Tour đã kết thúc” (E4.5). Đã kết thúc: thêm ghi chi phí thực tế. Đã đóng: hồ sơ ra khỏi HD01 (R01). Không có nút chuyển trạng thái hồ sơ; bắt đầu, kết thúc, đóng Tour là việc của Điều hành ở DH08.

### 2.2. Dạng xem

| Dạng | Dùng khi | Cách trình bày | Khác với Bảng |
|---|---|---|---|
| Danh sách nhóm (duy nhất) | Mọi lúc | Thẻ theo ba nhóm Đang diễn ra, Sắp khởi hành, Đã kết thúc chưa đóng (R02) | Không có cột, không chọn nhiều, không chip lọc, không xuất tệp |

Không có Kanban hay Lịch: một HDV thường chỉ có vài hồ sơ mở, và nhóm đã theo trạng thái; Lịch không hợp màn điện thoại.

### 2.3. Vòng đời quyền xem của HDV trên một hồ sơ

| Từ | Đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|---|
| Không thấy | Thấy | Điều hành lưu phân công ở DH08.5 cho nhân sự liên kết với tài khoản | Hồ sơ chưa Đã đóng | Hồ sơ vào HD01.1; tài khoản nhận TB-DH08-11 (RSD DH08 R12) | Nhân sự chưa có tài khoản: không ai nhận |
| Thấy | Không thấy | Điều hành bỏ phân công cuối cùng của nhân sự trong hồ sơ, hoặc đổi sang nhân sự khác | — | Mất quyền ở yêu cầu kế tiếp (R01); nhận TB-DH08-12 | Đang soạn dở: E3.4 |
| Thấy | Không thấy | Điều hành Đóng Tour ở DH08 | — | Như trên; không có thông báo cho HDV (đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV”) | Như trên |
| Không thấy | Thấy | Người có quyền Mở lại Tour ở DH08 | Phân công vẫn còn | Hồ sơ trở lại nhóm Đã kết thúc chưa đóng | — |
| Thấy | Không thấy | Quản trị khóa tài khoản hoặc bỏ vai trò thuộc phòng HDV ở QT01, hoặc gỡ liên kết nhân sự | — | Theo RSD QT01; phiên bị thu hồi hoặc mất quyền ở yêu cầu kế tiếp | — |

### 2.4. Trạng thái của mục đang soạn

| Trạng thái | Cách có | Hiển thị |
|---|---|---|
| Đang soạn | Mở form ghi hoặc sửa | Form toàn màn, nút chính dính đáy |
| Đang gửi | Bấm Lưu hoặc Gửi lại | Nút đổi thành “Đang lưu…”, khóa |
| Đã lưu | Máy chủ ghi xong | Form đóng, thông báo ngắn, mục hiện ở đầu dòng thời gian hoặc danh sách |
| Chưa gửi | Gửi mà không có mạng, hoặc không nhận được phản hồi (R08) | Banner vàng W40 trong form; sau khi đóng form, banner W41 trên hồ sơ và chấm vàng trên thẻ ở HD01.1 |
| Không lưu được | Máy chủ từ chối vì mất quyền, hồ sơ Đã đóng, bản ghi đã đổi hoặc dữ liệu sai (R09, E5.3) | Banner đỏ W42 hoặc W43; nội dung giữ để xem và sao chép |

### 2.5. Quy ước giao diện và xử lý dùng chung

- **Điện thoại trước.** Thiết kế cho chiều rộng 360–430 px, một cột, không cuộn ngang. Vùng chạm tối thiểu 44 × 44 px. Chữ thân tối thiểu 16 px để trình duyệt không tự phóng to khi nhập. Khi phần điện thoại của chuẩn giao diện (CHUAN-GIAO-DIEN) có hiệu lực, chuẩn thắng các điểm dùng chung ở mục này.
- **Trên máy tính.** Vẫn dùng được: nội dung đặt ở cột giữa rộng tối đa 600 px, thanh tab dưới giữ nguyên vị trí của cột; không có bố cục riêng cho máy tính.
- **Xoay màn hình.** Bố cục chảy lại theo chiều rộng mới; không tải lại trang; nội dung form, ảnh đã chọn, vị trí cuộn và tab đang mở được giữ (AC24).
- **Kiểu thao tác.** Thay bảng trượt bằng **form toàn màn** (có nút ← và nút chính dính đáy, phía trên bàn phím). Hộp thoại chỉ dùng cho xóa (không hoàn tác được, U2). Không có thao tác hàng loạt.
- **Một thao tác, một chỗ bấm.** Mỗi việc ghi có một lối ở mỗi tab; ba nút ở khối Hôm nay và nút nổi “+ Ghi” không cùng hiện trên một tab. Thông tin của phần đầu HD01.2 không lặp lại trong tab.
- **Trường điền sẵn** có nhãn nhỏ (Hiện tại, Hôm nay, Tự suy ra). Trường chỉ đọc hiện dạng chữ (U5).
- **Tải.** Đang tải hiện khung chờ. Lỗi tải hoặc không có mạng khi xem: vùng nội dung hiện “Không tải được · kiểm tra mạng” và nút Tải lại; không có chế độ xem khi mất mạng (đã chốt: không xem ngoại tuyến, BOI-CANH “Vai trò HDV”). HD01 không lưu sẵn chương trình, khách đoàn hay Rooming list trên máy; để xem chương trình khi mất mạng, HDV tải trước PDF chương trình (L2.6).
- **Rỗng.** Phân biệt “Chưa có …” (không có dữ liệu) với trạng thái chưa đủ điều kiện (ví dụ chi phí thực tế chưa mở, E4.5).
- **Lưu.** Nút chính đổi thành “Đang lưu…” và khóa để chống bấm lặp; mỗi form có một mã yêu cầu sinh khi mở form, máy chủ chỉ ghi một lần cho mỗi mã (R08). Thành công thì đóng form, hiện thông báo ngắn 5 giây ở trên thanh tab dưới, mục mới tô nền 3 giây. Lỗi dữ liệu thì báo cạnh trường, giữ dữ liệu. Rời form có thay đổi chưa lưu bằng nút ← hoặc nút quay lại của điện thoại: hỏi Tiếp tục soạn hoặc Bỏ thay đổi.
- **Thông báo ngắn kèm Hoàn tác** không dùng ở HD01: mục ghi sinh thông báo cho Điều hành và có thể chạm tiền; xóa dùng hộp thoại xác nhận (U2).
- **Tiền và ngày.** Như RSD DH08 mục 2.4: tiền kèm loại tiền, phân cách hàng nghìn bằng dấu chấm; ngày dd/mm/yyyy, giờ hh:mm, Asia/Ho_Chi_Minh. Ô số tiền mở bàn phím số.
- **Lịch sử.** Mọi lần ghi, sửa, xóa lưu người, thời điểm, giá trị trước và sau ở nhật ký thao tác QT03 và lịch sử của DH08 (RSD DH08 mục 2.4); HD01 không có màn lịch sử. Ngoài ra QT03 ghi mỗi lần Hiện số hộ chiếu (R11; ngoại lệ duy nhất của “QT03 không ghi lượt xem”) và mỗi lần tải PDF chương trình (thao tác Xuất tệp như mọi lần xuất tệp, RSD QT03 R01; R13). Xem danh sách, mở tab, gọi điện không ghi QT03.

---

## 3. Luồng thao tác

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác của người dùng và phản hồi của hệ thống. Mã W giữ chỗ, chưa có hình.

### 3.1. HD01.1 · Tour của tôi

**L1.1 Đăng nhập và xem danh sách.** *Điều kiện:* tài khoản Đang hoạt động có `HD01.xem`; nhân sự liên kết với tài khoản (Nội bộ hoặc Cộng tác viên, RSD DH06 R01).

1. **CH01 → W01 · Đăng nhập trên điện thoại.** Người dùng đăng nhập ở màn Đăng nhập của CH01 (lần đầu đổi mật khẩu tạm theo CH01). Tài khoản chỉ có vai trò thuộc phòng HDV và không có `next` hợp lệ thì hệ thống mở HD01.1 (R02).
2. **W01 · Danh sách Tour của tôi.** Màn hiện thẻ theo ba nhóm, nhóm rỗng thì ẩn (R02): **Đang diễn ra**, **Sắp khởi hành**, **Đã kết thúc chưa đóng**. Mỗi thẻ gồm Tour Code, khách, số khách, thời gian, ngôn ngữ phục vụ, phân công của tôi (vai trò phục vụ, các ngày), và chỉ báo: Hôm nay tôi phục vụ; n sự cố đang xử lý do tôi ghi (R02); Booking đã hủy; chấm vàng khi có mục chưa gửi (R08). Thẻ nhóm Đã kết thúc ghi thêm “Ghi chi phí thực tế trước khi đóng Tour” nếu tài khoản có `HD01.ghi-chi-phi`.
3. **W01 → W10 · Chạm thẻ.** Hệ thống mở HD01.2 của hồ sơ, tab Chương trình, cuộn tới ngày hôm nay nếu Tour đang diễn ra (L2.1).

*Kết quả:* HDV thấy đúng các hồ sơ mình được phân công còn chưa đóng, đoàn đang dẫn ở trên cùng.

**L1.2 Được phân công, bị gỡ phân công, chương trình đổi.** *Điều kiện:* Điều hành lưu, sửa hoặc bỏ phân công ở DH08.5 (RSD DH08 L5.2, R12), hoặc áp dụng thay đổi chương trình (RSD DH08 L1.5).

1. **W01 · Chuông thông báo.** Khi được phân công, hoặc phân công được đổi sang nhân sự của tài khoản, tài khoản nhận TB-DH08-11 “Bạn được phân công <vai trò phục vụ> · <Tour Code> · <tên đoàn> · <dd/mm–dd/mm>”. Chạm thông báo mở W10 của hồ sơ đó. Khi phân công bị sửa (đổi vai trò phục vụ, phạm vi, khoảng ngày giờ), thông báo cùng mã ghi “Phân công của bạn ở <Tour Code> đã đổi · <vai trò phục vụ> · <dd/mm–dd/mm>” (RSD DH08 R12; câu chữ theo RSD CH02 Phụ lục A).
2. **W01 · Chuông thông báo.** Khi bị bỏ phân công, hoặc phân công được đổi sang nhân sự khác, tài khoản nhận TB-DH08-12 “Bạn không còn được phân công <vai trò phục vụ> ở <Tour Code> · <dd/mm–dd/mm>”; nếu không còn phân công nào khác trong hồ sơ, thông báo ghi thêm “· không còn xem được hồ sơ này” (RSD CH02 Phụ lục A). Chạm thông báo mở W01; hồ sơ không còn trong danh sách nếu đã mất quyền (R01).
3. **W01 · Chuông thông báo.** Khi Điều hành áp dụng thay đổi chương trình ở DH08 (RSD DH08 L1.5), tài khoản nhận TB-DH08-13 “Chương trình <Tour Code> đã đổi sang v<N> · <các ngày có thay đổi>” (RSD CH02 Phụ lục A). Chạm thông báo mở W10 của hồ sơ, tab Chương trình theo phiên bản mới. PDF chương trình đã tải trước đó là bản cũ; HDV tải lại theo L2.6. Đóng Tour không tạo thông báo cho HDV (R06).

*Kết quả:* danh sách HD01.1 ở lần tải kế tiếp khớp phân công hiện tại; hồ sơ mới phân công hiện ngay ở nhóm Sắp khởi hành, kể cả khi còn xa ngày khởi hành; HDV biết ngay khi chương trình đổi.

**Ngoại lệ**

- **E1.1 · W02.** Tài khoản chưa liên kết nhân sự, hoặc chưa có phân công nào ở hồ sơ chưa đóng: danh sách hiện “Chưa có Tour nào được phân công cho bạn.” Nếu chưa liên kết nhân sự thì thêm “Tài khoản chưa gắn với hồ sơ nhân sự · liên hệ Quản trị hệ thống.” Không có nút thao tác.
- **E1.2.** Tài khoản không có `HD01.xem` mở đường dẫn HD01: trang không có quyền theo chuẩn giao diện (K0), không tải dữ liệu.
- **E1.3 · W03.** Mở HD01.2 bằng đường dẫn hoặc thông báo cũ của hồ sơ ngoài phạm vi (chưa từng phân công, đã bị gỡ, hồ sơ Đã đóng, hoặc không tồn tại): máy chủ trả cùng một phản hồi không tìm thấy, không lộ dữ liệu và không phân biệt lý do để không lộ sự tồn tại của hồ sơ; màn hiện W03 là trang “Không tìm thấy <Tour Code>” (mã lấy từ đường dẫn) với nút Về Tour của tôi, theo CGD K0.09 (R01).
- **E1.4.** Lỗi tải danh sách hoặc mất mạng: theo mục 2.5 (Tải). Thẻ có mục chưa gửi vẫn hiện chấm vàng khi danh sách tải lại được (R08).
- **E1.5.** Hồ sơ bị gỡ hoặc đóng trong lúc danh sách đang mở: thẻ còn trên màn đến lần tải sau; chạm thẻ thì máy chủ trả như E1.3 và danh sách tải lại.
- **E1.6.** Phân công ở nhiều hồ sơ trùng ngày (Điều hành đã cho lưu vì không trùng giờ, RSD DH08 R12): mỗi hồ sơ một thẻ, cùng nhóm Đang diễn ra nếu cả hai đang diễn ra.

### 3.2. HD01.2 · Chi tiết Tour

**L2.1 Xem chương trình theo ngày.** *Điều kiện:* hồ sơ trong phạm vi (R01).

1. **W10 · Tab Chương trình.** Phần đầu theo mục 2.1. Tab liệt kê từng ngày của phiên bản chương trình đang áp dụng cho hồ sơ (RSD DH08 L1.1, R19): số ngày, ngày, tuyến, nội dung lịch trình của ngày, và nhãn **Tôi phục vụ** ở ngày nằm trong phân công của mình. Tour đang diễn ra: ngày hiện tại mở rộng sẵn, tô nền, có nhãn Hôm nay và khối **Hôm nay** ở đầu tab với ba nút + Nhật ký, + Sự cố, + Chi phí (L3.1, L3.2, L4.1); ngày đã qua hiện màu nhạt. Tour chưa bắt đầu: ngày đầu mở rộng sẵn, khối Hôm nay không hiện.
2. **W10 → W11 · Chạm một ngày.** Ngày mở rộng tại chỗ, hiện dịch vụ của ngày (L2.2). Chạm lần nữa thì thu gọn.

*Kết quả:* HDV xem chương trình và việc của mình theo ngày, không thấy giá (R03).

**L2.2 Xem dịch vụ đã đặt và gọi NCC.**

1. **W11 · Ngày mở rộng, danh sách dịch vụ.** Mỗi hạng mục dịch vụ có ngày dùng trong ngày đó (trừ hạng mục Đã hủy) một dòng: loại và tên dịch vụ, số lượng và đơn vị, nhãn trạng thái hạng mục theo RSD DH08 R02 (Đã xác nhận màu xanh; các nhãn khác màu xám và chữ “Điều hành đang xử lý”), mã xác nhận của lần đặt Đã xác nhận, yêu cầu gửi NCC của hạng mục. Hạng mục có dịch vụ đi kèm (bổ sung 12/11/2026; RSD DH08 R21): ngay dưới là các dòng phụ “kèm: Giường phụ × 1 giường (18/11 – 20/11)”, mỗi đi kèm một dòng gồm tên, số lượng và đơn vị, ngày; không có giá, không có số xác nhận riêng của đi kèm (hạng mục Xác nhận một phần vì đi kèm thiếu vẫn hiện nhãn xám “Điều hành đang xử lý”). Dưới mỗi dòng: tên NCC, đầu mối chính (họ tên, điện thoại) theo RSD DH03. Hạng mục lưu trú kéo dài nhiều ngày hiện ở ngày nhận phòng, kèm “đến dd/mm”.
2. **W11 · Chạm số điện thoại.** Điện thoại mở trình gọi với số đã điền (liên kết `tel:`). TOPAS không ghi lượt gọi.

*Kết quả:* HDV biết dịch vụ nào đã chốt, đưa mã xác nhận cho NCC và gọi đúng đầu mối.

**L2.3 Xem khách đoàn, hiện số hộ chiếu.**

1. **W12 · Tab Khách đoàn, phần Danh sách khách.** Đầu tab là khối Liên hệ phía khách hàng (L2.5). Danh sách theo DH08.4, mỗi khách một dòng: họ tên, giới tính, quốc tịch, số hộ chiếu đã che kèm nút **Hiện số** (R03, R11), điện thoại là liên kết gọi nếu DH08.4 có số (R12), chuyến bay đến và về, yêu cầu ăn uống, yêu cầu phòng, nhãn Trưởng đoàn, phòng đang xếp ở đợt lưu trú của hôm nay nếu có. Đầu danh sách ghi số khách trong danh sách và số khách của hồ sơ; lệch thì hiện như RSD DH08 E4.7, chỉ để biết. Ô tìm theo tên lọc ngay.
2. **W12 → W15 · Nút Hiện số trên dòng một khách.** Điện thoại gửi yêu cầu cho đúng một khách. Máy chủ kiểm tra quyền, phạm vi (R01), rồi trong một giao dịch ghi một mục QT03 và trả số hộ chiếu đầy đủ của khách đó (R11). Dòng hiện số đầy đủ chữ đậm, cỡ chữ lớn để đọc cho quầy thủ tục, kèm nút **Che** và chữ nhỏ “Lượt hiện này được ghi nhật ký”. Nút Hiện số khóa và đổi thành “Đang lấy…” tới khi có kết quả. Số đầy đủ trở về dạng che khi bấm Che, khi rời tab Khách đoàn, khi tải lại hoặc sau 60 giây; mỗi lần bấm Hiện số sau đó là một lần hiện mới, ghi mục QT03 mới. Không có nút hiện số của cả danh sách.

*Kết quả:* HDV điểm danh, xem yêu cầu riêng và đọc được số hộ chiếu của từng khách khi cần làm thủ tục; mỗi lần hiện số có dấu vết ở QT03; không thấy dữ liệu cá nhân ngoài phạm vi R03.

**L2.4 Xem Rooming list.**

1. **W13 · Tab Khách đoàn, phần Rooming list.** Chip theo đợt lưu trú (mỗi khách sạn hoặc du thuyền một đợt, như RSD DH08 L4.5), đợt của hôm nay chọn sẵn. Mỗi phòng một dòng: số phòng, hạng phòng, tên khách, ghi chú phòng (ví dụ “Tự xếp phòng đơn”; “Giường phụ” cho phòng 3 người là phòng đôi cộng một giường phụ, bổ sung 12/11/2026, RSD DH08 L4.5); đọc từ phân phòng đã lưu ở DH08.4. Không có nút tải hay gửi tệp.

*Kết quả:* HDV phát phòng đúng theo phân phòng Điều hành đã lưu.

**L2.5 Gọi Điều hành phụ trách, liên hệ phía khách hàng, khách trong đoàn.** *Điều kiện:* hồ sơ trong phạm vi (R01).

1. **W10 · Phần đầu, dòng 3.** Điều hành phụ trách hiện họ tên và nút gọi (biểu tượng điện thoại, vùng chạm 44 px). Chạm nút mở trình gọi với số của Điều hành phụ trách (liên kết `tel:`, R12).
2. **W12 · Khối Liên hệ phía khách hàng ở đầu tab Khách đoàn.** Khối ghi “Liên hệ phía khách hàng”, nhãn “Người liên hệ của Booking”, họ tên người đó và nút gọi; chạm nút mở trình gọi (R12). Không hiện email, tên hay mã Booking.
3. **W12 · Số điện thoại trên dòng khách.** Khách có điện thoại ở DH08.4 thì số hiện trên dòng dạng liên kết; chạm mở trình gọi. Khách không có số thì dòng không có mục điện thoại.

*Kết quả:* HDV gọi được Điều hành, phía khách hàng và từng khách mà không phải hỏi số; TOPAS không ghi lượt gọi.

**L2.6 Tải PDF chương trình.** *Điều kiện:* hồ sơ trong phạm vi (R01); có `HD01.xem`; điện thoại đang có mạng.

1. **W10 → W16 · Nút Tải PDF chương trình ở đầu tab Chương trình.** Dưới nút ghi “Để xem khi mất mạng · không có giá”. Chạm nút: điện thoại gửi yêu cầu kèm mã yêu cầu; máy chủ kiểm tra quyền, phạm vi, rồi xếp việc dựng PDF vào hàng đợi (Q5, Q21) với dữ liệu tại lúc dựng (R13). Nút đổi thành “Đang chuẩn bị PDF…”, khóa; bấm lặp không tạo việc thứ hai.
2. **W17 · Dựng xong.** Trình duyệt tự tải tệp `<Tour Code>_chuong-trinh_v<N>.pdf` về máy (mở trình xem PDF của điện thoại nếu trình duyệt làm vậy); thông báo ngắn “Đã tải PDF chương trình · mở trong mục Tải về khi mất mạng”. Nút trở lại Tải PDF chương trình. Máy chủ ghi một mục QT03 Xuất tệp (R13).
3. **W18 · Nội dung PDF.** Khổ A4 dọc, chữ đủ đọc trên điện thoại: phần đầu (Tour Code, khách, số khách, thời gian, ngôn ngữ phục vụ, phân công của chính HDV); liên hệ (Điều hành phụ trách, người liên hệ của Booking: họ tên, điện thoại); chương trình theo từng ngày của phiên bản đang áp dụng (ngày, tuyến, nội dung) và dưới mỗi ngày là dịch vụ của ngày như L2.2 (loại, tên, số lượng, nhãn trạng thái, mã xác nhận, yêu cầu gửi NCC, tên NCC, đầu mối và điện thoại); cuối tệp là **Rooming list** theo từng đợt lưu trú (tên cơ sở lưu trú, ngày nhận và trả phòng), mỗi phòng một dòng chỉ gồm số phòng và tên khách trong phòng, theo phân phòng đã lưu ở DH08.4 lúc dựng; đợt còn khách chưa xếp ghi “n khách chưa xếp phòng” (người dùng chốt 12/11/2026, R13). Chân mỗi trang: “Chương trình v<N> · dữ liệu lúc dd/mm/yyyy hh:mm · tài liệu nội bộ, không gửi cho bên ngoài”. Không có giá, loại tiền, danh sách khách đoàn (quốc tịch, giới tính, điện thoại, chuyến bay, yêu cầu ăn uống), số hộ chiếu (kể cả dạng che), hạng phòng, ghi chú phòng.

*Kết quả:* HDV có bản chương trình và Rooming list trên máy để xem và phát phòng ở nơi không có sóng; bản này không chứa giá, và dữ liệu cá nhân của khách trong đoàn chỉ có tên khách gắn với số phòng.

**Ngoại lệ**

- **E2.1.** Hồ sơ chưa có ngày nào trong lịch trình hoặc chưa có hạng mục trong một ngày: ngày hiện “Chưa có dịch vụ trong ngày này”.
- **E2.2.** NCC chưa có đầu mối hoặc đầu mối không có điện thoại: dòng ghi “Chưa có số liên hệ · hỏi Điều hành phụ trách”.
- **E2.3.** Hạng mục chưa gắn NCC: dòng NCC ghi “Chưa có NCC”.
- **E2.4.** Danh sách khách rỗng: “Chưa có danh sách khách”.
- **E2.5 · W14.** Đợt lưu trú còn khách chưa xếp hoặc chưa lưu phân phòng: đợt đó ghi “n khách chưa xếp phòng · Điều hành đang xếp” và liệt kê phòng đã xếp; không có nút sửa (xếp phòng là việc của Điều hành, RSD DH08 L4.5).
- **E2.6.** Điều hành áp dụng thay đổi chương trình trong lúc HDV đang xem: màn không tự nhảy; dữ liệu mới hiện khi kéo xuống để tải lại, đổi tab hoặc mở lại. HDV nhận TB-DH08-13 (L1.2 bước 3); PDF đã tải trên máy không tự đổi.
- **E2.7.** Booking đã hủy (RSD DH08 R14): phần đầu có chỉ báo Booking đã hủy; dịch vụ hiện theo trạng thái thực tế của hạng mục.
- **E2.8.** Hồ sơ vừa ra khỏi phạm vi trong lúc đang xem (gỡ phân công, đóng Tour): yêu cầu kế tiếp (đổi tab, mở ngày chưa tải, tải lại, Hiện số, Tải PDF chương trình) trả như E1.3; màn chuyển W03. Số hộ chiếu đang hiện đầy đủ chuyển về dạng che.
- **E2.9.** Hiện số khi mất mạng hoặc máy chủ lỗi, kể cả lỗi ghi QT03: không hiện số, nút trở lại Hiện số, thông báo ngắn “Chưa hiện được số · thử lại”. Máy chủ không trả số khi chưa ghi được mục QT03 (R11). Gọi API Hiện số với khách không thuộc hồ sơ trong phạm vi: trả như E1.3, không ghi QT03.
- **E2.10.** Khách chưa có số hộ chiếu ở DH08.4: ô hộ chiếu ghi “Chưa có số”, không có nút Hiện số.
- **E2.11.** Không có số để gọi: Điều hành phụ trách chưa có hoặc không có điện thoại ở DH06 thì phần đầu chỉ hiện họ tên (chưa có người phụ trách thì “Chưa có Điều hành phụ trách”), không có nút gọi; Booking không có người liên hệ hoặc người đó không có điện thoại thì khối Liên hệ phía khách hàng ghi “Chưa có số liên hệ · hỏi Điều hành phụ trách”.
- **E2.12 · W16.** Dựng PDF lỗi hoặc quá 60 giây chưa xong: nút trở lại Tải PDF chương trình, dưới nút ghi “Chưa tạo được PDF · thử lại”; không có tệp, không có mục QT03.
- **E2.13.** Bấm Tải PDF chương trình khi không có mạng: thông báo ngắn “Không có mạng · chưa tải được PDF”; không có bản chờ, không tự tải khi có mạng lại.
- **E2.14.** Rời tab Chương trình hoặc rời hồ sơ trước khi PDF dựng xong: không tự tải; quay lại thì nút ở trạng thái ban đầu, bấm lại dựng bản mới. Tệp đã dựng mà không được tải không ghi QT03 và bị xóa theo R13.
- **E2.15.** Bị gỡ phân công hoặc hồ sơ Đã đóng sau khi đã tải PDF: TOPAS không thu hồi được tệp đã nằm trên máy; tệp ghi rõ thời điểm dữ liệu và “tài liệu nội bộ” ở chân trang (R13). Bị gỡ khi PDF đang dựng: máy chủ kiểm tra lại phạm vi trước khi trả tệp; ngoài phạm vi thì không trả tệp, màn chuyển W03.

### 3.3. HD01.3 · Nhật ký và sự cố

**L3.1 Ghi nhật ký.** *Điều kiện:* hồ sơ trong phạm vi và chưa Đã đóng; có `HD01.ghi-nhat-ky`.

1. **W20 · Tab Nhật ký.** Dòng thời gian lấy từ DH08.6 (RSD DH08 L6.1), mới nhất ở trên, **chỉ gồm mục nhật ký và sự cố do chính tài khoản ghi qua HD01** (người dùng chốt 12/11/2026, R03); mục do Điều hành hoặc HDV khác ghi không có trên màn và trong phản hồi. Mỗi mục có nhãn **Do HDV ghi** (R04); mục Điều hành đã sửa ghi thêm người sửa và thời điểm sửa. Chip Tất cả, Nhật ký, Sự cố đang xử lý.
2. **W20 → W21 · Nút nổi “+ Ghi” → chọn Nhật ký, hoặc nút + Nhật ký ở khối Hôm nay (W10).** Form toàn màn: thời điểm điền sẵn hiện tại (sửa được), ngày Tour tự suy ra từ thời điểm, ô nội dung nhiều dòng có con trỏ sẵn. HDV gõ rồi bấm **Lưu nhật ký**.
3. **W21 → W20 · Sau khi lưu.** Máy chủ kiểm tra R01, R05, rồi ghi một mục nhật ký vào DH08.6 với nguồn HDV (RSD DH08 R20). Form đóng, quay lại đúng nơi đã mở (tab Nhật ký hoặc tab Chương trình), mục mới ở đầu dòng thời gian, thông báo ngắn “Đã lưu nhật ký”. Nhật ký thường không tạo thông báo (R06).

*Kết quả:* mục nhật ký có ngay trong DH08.6 với nhãn Do HDV ghi.

**L3.2 Ghi sự cố.**

1. **W22 · Nút “+ Ghi” → chọn Sự cố, hoặc nút + Sự cố ở khối Hôm nay.** Form toàn màn theo RSD DH08 L6.2: thời điểm điền sẵn, ngày Tour tự suy ra, nội dung, cách xử lý (bắt buộc), kết quả (để trống được). Công tắc **Có chi phí phát sinh** mở thêm số tiền, loại tiền và chứng từ (R07) khi tài khoản có `HD01.ghi-chi-phi`. HDV bấm **Lưu sự cố**.
2. **W22 → W20 · Sau khi lưu.** Máy chủ ghi sự cố, và khoản chi phí phát sinh liên kết nếu có, trong một giao dịch (RSD DH08 L6.2). Sự cố chưa có kết quả là Đang xử lý; số trên tab Nhật ký tăng. Điều hành phụ trách nhận TB-HD01-01 (R06). Thông báo ngắn “Đã lưu sự cố · đã báo Điều hành phụ trách”.

*Kết quả:* sự cố có trong DH08.6, chi phí (nếu có) có trong DH08.7 ở Chưa ghi công nợ, cả hai có nhãn Do HDV ghi.

**L3.3 Cập nhật kết quả, sửa, xóa mục của mình.** *Điều kiện:* mục do chính tài khoản ghi qua HD01; hồ sơ chưa Đã đóng (R05).

1. **W20 → W23 · Chạm mục của mình.** Form như lúc ghi, điền dữ liệu hiện tại; sự cố Đang xử lý có ô Kết quả đặt con trỏ sẵn (RSD DH08 L6.3). Dòng thời gian chỉ có mục của mình (L3.1), nên không có mục chỉ xem. HDV sửa rồi bấm **Lưu thay đổi**. Sự cố có kết quả chuyển Đã xử lý; số trên tab giảm. Lần lưu làm ô Kết quả của sự cố đổi giá trị (nhập kết quả lần đầu hoặc sửa kết quả) là **cập nhật kết quả**: Điều hành phụ trách nhận TB-HD01-01 (R06); thông báo ngắn “Đã lưu · đã báo Điều hành phụ trách”.
2. **W23 → W24 · Nút Xóa ở cuối form → hộp thoại.** Hộp thoại “Xóa mục này? Không hoàn tác được.” Với sự cố có chi phí liên kết Chưa ghi công nợ, hộp thoại ghi thêm “Khoản chi phí <số tiền> cũng bị xóa”. HDV bấm **Xóa** hoặc Giữ lại. Xóa xong mục biến mất khỏi dòng thời gian và khỏi DH08.6, khoản liên kết khỏi DH08.7 (R05).

*Kết quả:* mục được cập nhật hoặc xóa trong DH08; lịch sử ghi người và thời điểm. Cập nhật kết quả sự cố tạo TB-HD01-01; sửa trường khác của sự cố, xóa sự cố, sửa và xóa nhật ký không tạo thông báo; sửa, xóa khoản chi phí liên kết tạo TB-HD01-02 (R06).

**Ngoại lệ**

- **E3.1.** Thiếu nội dung, thiếu cách xử lý của sự cố, thời điểm ở tương lai: báo lỗi cạnh trường, giữ chữ đã gõ (như RSD DH08 E6.1).
- **E3.2.** Sự cố có chi phí mà số tiền ≤ 0 hoặc thiếu loại tiền: lỗi cạnh trường (RSD DH08 mục 5.2).
- **E3.3.** Xóa sự cố có chi phí liên kết đã ghi công nợ: nút Xóa khóa, cạnh nút ghi “Chi phí đã được Kế toán ghi nhận · không xóa được”; vẫn cập nhật kết quả được (RSD DH08 E7.2).
- **E3.4 · W42.** Đang soạn thì bị gỡ phân công hoặc hồ sơ Đã đóng: bấm Lưu thì máy chủ từ chối (R01, R09); form hiện banner đỏ “Chưa lưu · bạn không còn ghi được ở hồ sơ này”, nội dung giữ dạng chữ chọn được, nút **Sao chép nội dung** và **Bỏ**. Không có Gửi lại.
- **E3.5 · W43.** Mục vừa được Điều hành sửa ở DH08 trong lúc HDV đang sửa: máy chủ từ chối vì phiên bản đã đổi (Q8); banner nêu người và thời điểm sửa, chỉ có nút Tải lại; trước khi tải lại, HDV xem và sao chép được nội dung đang soạn.
- **E3.6.** Mục vừa bị xóa ở phiên khác, kể cả do Điều hành xóa ở DH08 (RSD DH08 L6.4, R20): lưu hoặc xóa trả “Mục không còn”, form đóng, dòng thời gian tải lại; nội dung đang soạn không được ghi.
- **E3.7.** Mất mạng khi bấm Lưu: L5.1.
- **E3.8.** Điều hành xóa mục Do HDV ghi ở DH08 (đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV”): ở lần tải kế tiếp mục không còn trong dòng thời gian của HDV đã ghi; số sự cố đang xử lý trên tab và trên thẻ HD01.1 cập nhật theo. HDV không nhận thông báo về lần xóa; lần xóa có trong QT03 và lịch sử của DH08.

### 3.4. HD01.4 · Chi phí

**L4.1 Ghi chi phí phát sinh kèm ảnh chứng từ.** *Điều kiện:* hồ sơ trong phạm vi và chưa Đã đóng; có `HD01.ghi-chi-phi`.

1. **W30 · Tab Chi phí, phần Chi phí phát sinh.** Danh sách các khoản do chính tài khoản ghi ở hồ sơ (R03), mỗi khoản: ngày, nội dung, số tiền và loại tiền, số chứng từ, trạng thái Chưa ghi công nợ hoặc Đã ghi công nợ (RSD DH08 mục 2.3). Cuối danh sách có tổng theo loại tiền của các khoản này.
2. **W30 → W31 · Nút “+ Ghi” → chọn Chi phí phát sinh, hoặc nút + Chi phí ở khối Hôm nay.** Form toàn màn theo RSD DH08 L7.1: ngày (điền sẵn hôm nay), nội dung, số tiền, loại tiền (điền sẵn VND), NCC (chọn trong các NCC của hồ sơ, không bắt buộc), Gợi ý thu lại từ khách, chứng từ. Nút **Chụp ảnh** mở máy ảnh sau của điện thoại; nút **Chọn tệp** mở thư viện ảnh hoặc tệp (CGD K7.09). Ảnh HEIC chọn từ thư viện được trình duyệt đổi sang JPG trước khi tải lên. Mỗi ảnh hiện ảnh nhỏ, tên, dung lượng, tiến độ tải lên và nút Bỏ (R07). HDV bấm **Lưu chi phí**.
3. **W31 → W30 · Sau khi lưu.** Máy chủ ghi khoản vào DH08.7, Chưa ghi công nợ, nguồn HDV (RSD DH08 R20). Điều hành phụ trách nhận TB-HD01-02 (R06). Khoản mới ở đầu danh sách; thông báo ngắn “Đã lưu chi phí · đã báo Điều hành phụ trách”. Kế toán ghi công nợ ở DH08.7 như mọi khoản (RSD DH08 L7.2).

*Kết quả:* khoản chi phí phát sinh có trong DH08.7 với nhãn Do HDV ghi và chứng từ.

**L4.2 Sửa, xóa chi phí phát sinh của mình.** *Điều kiện:* khoản do chính tài khoản ghi qua HD01; hồ sơ chưa Đã đóng.

1. **W30 → W31 · Chạm khoản.** Khoản Chưa ghi công nợ: form như L4.1, sửa mọi trường, thêm hoặc bỏ chứng từ; nút Lưu thay đổi và Xóa (hộp thoại như W24). Khoản Đã ghi công nợ: số tiền, loại tiền chỉ đọc, không có Xóa; chỉ thêm chứng từ và ghi chú (RSD DH08 E7.2).
2. **W31 → W30 · Lưu hoặc xóa.** Máy chủ kiểm tra R05 rồi ghi. Điều hành phụ trách nhận TB-HD01-02 ghi rõ sửa hay xóa (R06).

*Kết quả:* khoản trong DH08.7 cập nhật hoặc bị xóa; lịch sử giữ giá trị trước và sau.

**L4.3 Ghi chi phí thực tế.** *Điều kiện:* hồ sơ **Đã kết thúc** (RSD DH08 L8.1); trong phạm vi; có `HD01.ghi-chi-phi`.

1. **W33 · Tab Chi phí, phần Chi phí thực tế.** Danh sách dịch vụ đã xác nhận của hồ sơ theo bước 1 DH08.8, mỗi dòng: ngày, dịch vụ, NCC, loại tiền của dòng. Không hiện giá NCC xác nhận, giá gợi ý, chênh lệch hay dòng phí hủy NCC (R03). Dòng ở ba dạng: **Chưa có số** (chưa ai lưu số), **Tôi đã ghi** (hiện số mình đã lưu, nhãn Do HDV ghi), **Điều hành đã ghi** hoặc **HDV khác đã ghi** (không hiện số, chỉ xem). Dòng trạng thái bước 1 (Chưa chuyển Kế toán, Đã chuyển Kế toán) đọc từ DH08.
2. **W33 → W34 · Chạm dòng Chưa có số hoặc Tôi đã ghi.** Form toàn màn: dịch vụ và loại tiền dạng chữ; ô **Chi phí thực tế** (bàn phím số), ô **Ghi chú** (bắt buộc; dùng làm lý do chênh lệch của DH08), chứng từ như L4.1 bước 2. HDV bấm **Lưu chi phí thực tế**.
3. **W34 → W33 · Sau khi lưu.** Máy chủ ghi số vào bước 1 DH08.8, nguồn HDV (RSD DH08 R20, L8.1); dòng chuyển Tôi đã ghi. Điều hành phụ trách nhận TB-HD01-02. Nếu hồ sơ đã có phiên bản quyết toán Hiện hành, Kế toán nhận thông báo như khi Điều hành sửa (RSD DH08 L8.1 bước 2). HDV không có Lưu và chuyển Kế toán (đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV”); việc chuyển do Điều hành làm ở DH08, hoặc hệ thống chuyển khi đóng Tour (RSD DH08 R16).
4. **W34 · Nút Xóa số (dòng Tôi đã ghi).** Hộp thoại như W24; xác nhận thì dòng về Chưa có số trong DH08 (ô trở lại giá gợi ý ở DH08.8, không có nguồn) và Điều hành phụ trách nhận TB-HD01-02; hồ sơ đã có phiên bản quyết toán Hiện hành thì Kế toán nhận TB-DH08-08 như bước 3.

*Kết quả:* bước 1 của DH08.8 có số do HDV ghi, Điều hành dùng khi Lưu và chuyển Kế toán.

**Ngoại lệ**

- **E4.1 · W32.** Tệp sai định dạng (ngoài danh sách Q19, hoặc ảnh HEIC mà trình duyệt không đổi được sang JPG), vượt 20 MB, quá 10 tệp, hoặc tải lên lỗi: báo lỗi theo từng tệp như RSD DH08 E7.1 và CGD K7.09 (ví dụ “Quá 20 MB (25 MB)”), kèm gợi ý “Chụp lại hoặc chọn ảnh có độ phân giải thấp hơn”; mất mạng giữa chừng thì thẻ tệp đỏ có Thử lại (CGD K7.09); nút Lưu khóa đến khi bỏ hoặc tải lại tệp lỗi; các trường khác giữ (R07).
- **E4.2.** Số tiền ≤ 0, thiếu nội dung, thiếu loại tiền, ngày ngoài khoảng từ ngày khởi hành đến hôm nay: lỗi cạnh trường. Chi phí thực tế < 0 hoặc thiếu ghi chú: lỗi cạnh trường.
- **E4.3.** Kế toán vừa ghi công nợ cho khoản đang sửa (RSD DH08 E7.3): máy chủ từ chối sửa số tiền, loại tiền, xóa; form tải lại ở dạng Đã ghi công nợ, giữ chứng từ và ghi chú đang thêm.
- **E4.4.** Dòng chi phí thực tế vừa được Điều hành lưu số trong lúc HDV đang nhập: máy chủ từ chối (Q8; R05), banner như W43; sau Tải lại dòng thành Điều hành đã ghi.
- **E4.5 · W35.** Hồ sơ chưa Đã kết thúc: phần Chi phí thực tế hiện “Mở khi Tour đã kết thúc · Điều hành bấm Kết thúc Tour ở hồ sơ” và trạng thái hiện tại; không có dòng nào (như RSD DH08 E8.1).
- **E4.6.** Hồ sơ không có dịch vụ đã xác nhận: “Chưa có dịch vụ đã xác nhận để ghi chi phí thực tế”.
- **E4.7.** Mất quyền hoặc hồ sơ Đã đóng khi đang soạn: như E3.4.
- **E4.8.** Mất mạng khi đang tải ảnh hoặc khi bấm Lưu: L5.1.
- **E4.9.** Điều hành xóa khoản chi phí phát sinh Do HDV ghi, hoặc bỏ số chi phí thực tế Do HDV ghi ở DH08 (RSD DH08 L7.3, L8.1, R20): ở lần tải kế tiếp khoản không còn trong danh sách của HDV, tổng theo loại tiền tính lại; dòng chi phí thực tế về Chưa có số. Đang sửa khoản đó thì lưu trả “Mục không còn” như E3.6. HDV không nhận thông báo về lần xóa.

### 3.5. Ghi khi mất mạng và gửi lại

**L5.1 Giữ nội dung trên máy và gửi lại.** *Điều kiện:* đang ở form ghi hoặc sửa (W21, W22, W23, W31, W34); điện thoại mất mạng, hoặc bấm Lưu mà không nhận được phản hồi.

1. **W40 · Bấm Lưu khi không có mạng.** Hệ thống không báo đã lưu. Form giữ nguyên, hiện banner vàng “**Chưa lưu** · không có mạng. Nội dung đã giữ trên máy này; bấm Gửi lại khi có mạng.” Nội dung và ảnh chưa tải lên được ghi vào bộ nhớ của trình duyệt trên máy (R08). Nút chính đổi thành **Gửi lại**, khóa đến khi có mạng; nút phụ **Đóng, gửi sau**.
2. **W40 → W41 · Đóng, gửi sau.** Form đóng. Hồ sơ hiện banner vàng “n mục chưa gửi” trên mọi tab; thẻ ở HD01.1 có chấm vàng. Chạm banner mở danh sách mục chưa gửi, mỗi mục: loại, thời điểm soạn, đoạn đầu nội dung, nút Mở.
3. **W41 → W40 · Có mạng lại, chạm Mở rồi Gửi lại.** Hệ thống không tự gửi. Khi người dùng bấm Gửi lại, ảnh còn thiếu được tải lên rồi mục được lưu với cùng mã yêu cầu (R08). Thành công thì như bước sau lưu của luồng gốc (L3.1 bước 3, L3.2 bước 2, L4.1 bước 3, L4.3 bước 3); mục ra khỏi danh sách chưa gửi; banner mất khi hết mục.

*Kết quả:* không mất chữ và ảnh khi mạng chập chờn; không có mục nào được gửi mà người dùng không bấm.

**Ngoại lệ**

- **E5.1.** Lần gửi trước thực ra đã tới máy chủ nhưng phản hồi bị mất: Gửi lại dùng cùng mã yêu cầu; máy chủ kiểm phiên, quyền và phạm vi trước (R08), còn phạm vi thì trả mục đã có, không tạo mục thứ hai; thông báo cho Điều hành không lặp (R08). Hết phạm vi thì theo E5.3.
- **E5.2.** Đóng trình duyệt, tắt máy hoặc tải lại trang khi còn mục chưa gửi: mở lại HD01 trên cùng điện thoại, cùng tài khoản (khi trang tải được, vì không có chế độ xem khi mất mạng) thì danh sách chưa gửi còn nguyên (R08).
- **E5.3 · W42.** Gửi lại khi đã mất quyền, hồ sơ Đã đóng, mục gốc (khi sửa) đã đổi hoặc bị xóa, hay dữ liệu không còn hợp lệ: mục chuyển Không lưu được, banner đỏ nêu lý do theo R09; nội dung giữ để Sao chép nội dung; nút Bỏ xóa mục khỏi máy. Mất quyền hoặc hết phạm vi được kiểm trước khi tra mã yêu cầu (R08): kể cả khi lần gửi trước đã được ghi, máy chủ chỉ trả lỗi phạm vi, không trả dữ liệu của mục; mục đã ghi ở lần trước (nếu có) vẫn ở DH08.
- **E5.4.** Phiên đăng nhập hết hạn trong lúc mất mạng: Gửi lại đưa tới màn Đăng nhập (RSD CH01); đăng nhập lại cùng tài khoản thì quay về HD01.2 với danh sách chưa gửi còn nguyên.
- **E5.5.** Đăng xuất khi còn mục chưa gửi: hộp thoại “Còn n mục chưa gửi · đăng xuất sẽ xóa các mục này khỏi máy” với nút Ở lại và Vẫn đăng xuất (R08).
- **E5.6.** Bộ nhớ trình duyệt đầy hoặc trình duyệt chặn lưu (chế độ ẩn danh): banner đỏ “Không giữ được trên máy · đừng đóng trang này”; nội dung chỉ còn trên form đang mở, Gửi lại vẫn dùng được khi có mạng.
- **E5.7.** Xóa hoặc mở danh sách khi mất mạng: thao tác xóa không lưu bản chờ; báo “Không có mạng · chưa xóa”. Xem dữ liệu khi mất mạng: theo mục 2.5 (Tải); không có chế độ xem ngoại tuyến, HDV mở PDF chương trình đã tải trước (L2.6). Hiện số hộ chiếu cần mạng (E2.9).

**Số bước trước và sau khi tối ưu (luồng chính)**

| Việc | Cách làm thông thường | Bản này |
|---|---|---|
| Ghi một dòng nhật ký trong ngày | Mở hồ sơ, tìm tab, mở form, nhập thời điểm và ngày Tour, nhập nội dung, lưu | Chạm thẻ, + Nhật ký ở khối Hôm nay, gõ, Lưu (thời điểm, ngày Tour điền sẵn) |
| Ghi chi phí kèm hóa đơn | Chụp ảnh bằng ứng dụng máy ảnh, mở form, chọn tệp, nhập ngày, lưu | + Chi phí, Chụp ảnh chứng từ ngay trong form, nhập số tiền và nội dung, Lưu (ngày, loại tiền điền sẵn) |
| Sự cố có tốn tiền | Ghi sự cố, rồi ghi chi phí riêng | Một form, một lần Lưu (RSD DH08 L6.2) |

---

## 4. Quy tắc triển khai chi tiết

### R01. Phạm vi hồ sơ (ADR 0007)

- **Được phân công.** Một hồ sơ nằm trong phạm vi của tài khoản khi nhân sự liên kết với tài khoản (QT01, RSD DH06 R01) có ít nhất một phân công phục vụ ở DH08.5 của hồ sơ, bất kể vai trò phục vụ và ngày phục vụ, và hồ sơ chưa Đã đóng. Phạm vi bắt đầu ngay khi phân công được lưu, không chờ tới ngày phục vụ.
- **Lọc ở máy chủ.** Mọi yêu cầu đọc và ghi của HD01 kiểm tra phạm vi tại lúc xử lý yêu cầu, không dùng kết quả lưu sẵn trong phiên. Hồ sơ ngoài phạm vi được trả như không tồn tại (E1.3); danh sách chỉ gồm hồ sơ trong phạm vi.
- **Mất phạm vi.** Bỏ phân công cuối cùng, đổi phân công sang nhân sự khác, Đóng Tour, gỡ liên kết nhân sự hoặc khóa tài khoản làm tài khoản mất phạm vi ở yêu cầu kế tiếp. Mục đã ghi trước đó vẫn ở DH08 với nhãn Do HDV ghi. Mở lại Tour (RSD DH08 L8.4) trả lại phạm vi nếu phân công còn.
- **Mọi tài khoản.** HD01 áp phạm vi này với mọi tài khoản mở HD01, kể cả tài khoản có quyền DH08; quyền rộng hơn dùng ở DH08 (mục 1.4).

### R02. Danh sách Tour của tôi và trang mặc định

- **Nhóm** theo trạng thái hồ sơ của DH08, tính lúc đọc: Đang diễn ra; Sắp khởi hành (Mới tạo, kể cả đã qua ngày khởi hành mà Điều hành chưa bấm Bắt đầu Tour, ghi “Chờ bắt đầu”); Đã kết thúc chưa đóng. Thứ tự nhóm trên màn: Đang diễn ra, Sắp khởi hành, Đã kết thúc chưa đóng.
- **Thứ tự thẻ.** Đang diễn ra và Sắp khởi hành theo ngày khởi hành tăng dần; Đã kết thúc theo ngày kết thúc giảm dần. Cùng ngày thì theo Tour Code.
- **Chỉ báo trên thẻ.** Hôm nay tôi phục vụ: hôm nay nằm trong khoảng phân công của mình (RSD DH08 R12). Sự cố đang xử lý: số sự cố Đang xử lý của hồ sơ do chính tài khoản ghi qua HD01 (R03; số trên tab Nhật ký của HD01.2 đếm cùng cách). Booking đã hủy: theo RSD DH08 R14. Chấm vàng: có mục chưa gửi trên máy (R08).
- **Trang mặc định.** Tài khoản mà mọi vai trò đều thuộc phòng HDV: sau đăng nhập không có `next` hợp lệ thì mở HD01.1. Tài khoản có ít nhất một vai trò thuộc phòng khác: theo RSD CH01 R18 (Việc của tôi). Không có thẻ HD01 ở Việc của tôi.
- Không phân trang: danh sách tải một lần, hiện đủ mọi thẻ, không có nút Xem thêm (số hồ sơ chưa đóng của một người nhỏ; ngoại lệ ghi ở CGD K7.06).

### R03. Dữ liệu hiện và không hiện

| Nhóm dữ liệu | Hiện ở HD01 | Không hiện |
|---|---|---|
| Hồ sơ | Tour Code, trạng thái, chỉ báo Booking đã hủy, khách, số khách, thời gian, ngôn ngữ phục vụ, họ tên và điện thoại của Điều hành phụ trách (R12), họ tên và điện thoại của người liên hệ của Booking (R12) | Email của người liên hệ, liên kết Booking, mã Booking, giá trị Booking, phải thu còn, phải trả còn, chỉ báo quyết toán, checklist, thay đổi chương trình chờ áp dụng, yêu cầu đổi lịch trình |
| Chương trình | Lịch trình theo phiên bản đang áp dụng: ngày, tuyến, nội dung | Giá, phiên bản báo giá |
| Dịch vụ | Hạng mục chưa Đã hủy: dịch vụ, ngày, số lượng, nhãn trạng thái, mã xác nhận, yêu cầu gửi NCC; dịch vụ đi kèm của hạng mục (tên, số lượng, đơn vị, ngày; bổ sung 12/11/2026); tên NCC, đầu mối chính (họ tên, điện thoại) | Giá tham chiếu, giá xác nhận, loại tiền, phí hủy, email NCC, email đã gửi, thông tin thanh toán, hợp đồng NCC; giá tham chiếu, đơn giá xác nhận và số xác nhận của dịch vụ đi kèm |
| Khách đoàn | Họ tên, giới tính, quốc tịch, số hộ chiếu đã che (giữ 4 ký tự đầu và 2 ký tự cuối, RSD DH08 mục 1.4), điện thoại nếu có (R12), chuyến bay, yêu cầu ăn uống, yêu cầu phòng, Trưởng đoàn. Số hộ chiếu đầy đủ của một khách chỉ qua thao tác Hiện số (R11) | Số hộ chiếu đầy đủ trong danh sách, ngày hết hạn, ngày sinh, visa, ghi chú cho Điều hành |
| Phân phòng | Đợt, phòng, hạng phòng, khách, ghi chú phòng (gồm “Giường phụ”, bổ sung 12/11/2026). Rooming list trong PDF chương trình chỉ có đợt, số phòng, tên khách (R13) | Tệp Pax list, tệp Rooming list gửi NCC, lịch sử gửi |
| Phân công | Phân công của chính mình | Phân công và lịch của nhân sự khác, phân công ở hồ sơ khác, liên hệ nhân sự (trừ điện thoại Điều hành phụ trách ở dòng Hồ sơ) |
| Nhật ký và sự cố | Mục do chính tài khoản ghi qua HD01 (nguồn HDV, người ghi là mình), kể cả khi Điều hành đã sửa (người sửa, thời điểm sửa); khoản chi phí liên kết của sự cố đó (người dùng chốt 12/11/2026) | Mục do Điều hành hoặc HDV khác ghi, kể cả số lượng của chúng (số sự cố đang xử lý trên tab và thẻ chỉ đếm sự cố của mình) |
| Chi phí phát sinh | Khoản do chính mình ghi và chứng từ của khoản đó | Khoản do người khác ghi và chứng từ của khoản đó |
| Chi phí thực tế | Danh sách dịch vụ đã xác nhận; số và chứng từ do chính mình ghi; trạng thái của dòng (Chưa có số, Điều hành đã ghi, HDV khác đã ghi) | Giá gợi ý, chênh lệch, số, ghi chú và chứng từ do người khác ghi, dòng phí hủy NCC, trạng thái và số của quyết toán, P&L |

- Máy chủ chỉ trả các trường ở cột “Hiện”; trường ở cột “Không hiện” không có trong phản hồi, không chỉ ẩn trên giao diện.
- **Chứng từ.** Không trả chứng từ của khoản do người khác ghi. Mọi đường tải tệp kiểm quyền, phạm vi và người ghi ở mỗi lần tải: đường tải chứng từ (ảnh nhỏ và tệp gốc) chỉ trả tệp gắn với mục do chính tài khoản ghi, của hồ sơ trong phạm vi (R01), với phiên còn hiệu lực; không dùng đường dẫn công khai hay đường dẫn có sẵn chữ ký để bỏ qua bước kiểm này; đường tải PDF chương trình theo R13. Tệp ngoài điều kiện trả như không tồn tại.
- Che hộ chiếu làm ở máy chủ trước khi trả. Phản hồi danh sách khách và PDF chương trình không bao giờ có số hộ chiếu đầy đủ; số đầy đủ chỉ có trong phản hồi của yêu cầu Hiện số cho một khách (R11).

### R04. Nguồn ghi và nhãn Do HDV ghi

- Mọi mục ghi qua HD01 lưu nguồn **HDV** và tài khoản người ghi trên chính bản ghi của DH08 (RSD DH08 R20, mục 5.1). Mục ghi qua DH08 có nguồn Điều hành.
- Nhãn **Do HDV ghi** kèm họ tên người ghi hiện ở HD01 và DH08. Mục ghi thẳng vào hồ sơ, không chờ duyệt (BOI-CANH “Không có luồng duyệt”).
- Điều hành sửa và xóa được mục Do HDV ghi ở DH08, mỗi lần ghi QT03 (đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV”; RSD DH08 L6.4, L7.3, R20). Sửa: nhãn giữ nguyên, lịch sử ghi người sửa; với dòng chi phí thực tế, Điều hành lưu số khác thì dòng đổi sang nguồn Điều hành. Xóa: mục không còn ở DH08 nên HDV đã ghi không còn thấy ở HD01 từ lần tải kế tiếp (E3.8, E4.9); HDV không nhận thông báo về lần xóa.

### R05. Sửa, xóa mục của mình

- HDV sửa, xóa một mục khi đủ cả bốn điều kiện: có mã quyền ghi tương ứng (`HD01.ghi-nhat-ky` cho nhật ký và sự cố, `HD01.ghi-chi-phi` cho chi phí); hồ sơ trong phạm vi (R01) và chưa Đã đóng; mục có nguồn HDV và người ghi là chính tài khoản; mục còn đúng phiên bản đang sửa (R09).
- Với dòng chi phí thực tế, “mục của mình” là dòng có số lưu gần nhất do chính tài khoản lưu qua HD01; dòng Chưa có số thì HDV nào trong phạm vi cũng ghi được. Điều hành bấm Lưu bước 1 ở DH08 chỉ gán nguồn Điều hành cho dòng mà Điều hành đổi ô; dòng HDV đã ghi mà Điều hành không đổi vẫn là của HDV, dòng giữ Gợi ý vẫn là Chưa có số (RSD DH08 R20).
- Ràng buộc của DH08 vẫn áp: khoản chi phí phát sinh Đã ghi công nợ không sửa số tiền, loại tiền, không xóa (RSD DH08 E7.2); chi phí thực tế chỉ ghi khi hồ sơ Đã kết thúc (RSD DH08 L8.1). Xóa sự cố có chi phí liên kết Chưa ghi công nợ thì xóa cả khoản trong cùng giao dịch; đã ghi công nợ thì chặn xóa sự cố (E3.3).
- Máy chủ từ chối mọi yêu cầu sửa, xóa không đủ điều kiện (kể cả gọi API trực tiếp) và không thay đổi gì.

### R06. Thông báo

| Mã | Sự kiện | Người nhận | Nội dung | Đích |
|---|---|---|---|---|
| TB-HD01-01 | HDV ghi sự cố qua HD01 (kể cả sự cố có chi phí); HDV cập nhật kết quả sự cố của mình qua HD01 (L3.3) | Điều hành phụ trách hồ sơ (RSD CH02 R01: hồ sơ chưa có người phụ trách hoặc người phụ trách Ngừng hoạt động thì nhóm Điều hành) | Ghi mới: “Sự cố ở <Tour Code> do HDV <họ tên> ghi · <nội dung, 80 ký tự đầu> · <dd/mm hh:mm>”; có chi phí thì thêm “· có chi phí phát sinh”. Cập nhật kết quả: “HDV <họ tên> cập nhật kết quả sự cố ở <Tour Code> · <kết quả, 80 ký tự đầu>” | DH08.6 của hồ sơ (ghi mới: lọc Sự cố đang xử lý; cập nhật kết quả: Tất cả) |
| TB-HD01-02 | HDV ghi, sửa hoặc xóa khoản chi phí phát sinh (trừ khoản ghi cùng sự cố mới, đã nằm trong TB-HD01-01) hoặc dòng chi phí thực tế qua HD01 | Như trên | “HDV <họ tên> <đã ghi, đã sửa, đã xóa> chi phí <phát sinh, thực tế> ở <Tour Code> · <tên khoản hoặc dịch vụ>” | DH08.7 hoặc DH08.8 của hồ sơ, theo lần ghi gần nhất |

- Nội dung hai loại khớp mẫu ở RSD CH02 Phụ lục A và **không chứa số tiền** (RSD CH02 mục 1.4); Điều hành xem số tiền khi mở đích.
- Tạo trong cùng giao dịch với mục (ADR 0002). Người ghi không nhận thông báo về thao tác của mình (RSD CH02 R01).
- Làm mới tại chỗ theo RSD CH02 R04. TB-HD01-01: bản ghi chính là sự cố. TB-HD01-02: bản ghi chính là hồ sơ Tour; mọi lần ghi, sửa, xóa chi phí phát sinh hoặc chi phí thực tế của cùng hồ sơ, khi người nhận chưa đọc, gộp vào một dòng “· n lần”; nội dung và đích (DH08.7 hoặc DH08.8) theo lần ghi gần nhất (RSD CH02 Phụ lục A, AC63).
- Nhật ký thường, sửa nhật ký, sửa trường khác ngoài Kết quả của sự cố, xóa sự cố không có chi phí liên kết không tạo thông báo.
- Thông báo cho HDV là ba loại do DH08 tạo: TB-DH08-11 khi được phân công hoặc phân công bị sửa (đổi vai trò phục vụ, phạm vi, ngày), TB-DH08-12 khi bị gỡ phân công (RSD DH08 R12), TB-DH08-13 khi Điều hành áp dụng thay đổi chương trình (RSD DH08 L1.5, R19). HDV không nhận thông báo khi Đóng Tour, Mở lại Tour, hay khi Điều hành sửa, xóa mục Do HDV ghi (đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV”).
- Sửa chi phí thực tế khi đã có phiên bản quyết toán Hiện hành: Kế toán nhận thông báo như khi Điều hành sửa (RSD DH08 L8.1).

### R07. Ảnh chứng từ

- Giới hạn theo Q19 và RSD DH08 R13: PDF, JPG, PNG, XLSX, DOCX; tối đa 20 MB mỗi tệp, 10 tệp mỗi mục. Kiểm tra định dạng và dung lượng trên điện thoại trước khi tải lên và kiểm tra lại ở máy chủ.
- Theo CGD K7.09: nút Chụp ảnh mở máy ảnh sau qua ô chọn tệp của trình duyệt (chỉ ảnh, lưu JPG); Chọn tệp mở thư viện ảnh hoặc tệp. Ảnh HEIC chọn từ thư viện được trình duyệt đổi sang JPG trước khi tải lên, để giữ danh sách định dạng của Q19; không đổi được thì báo lỗi định dạng (E4.1). Hệ thống không tự nén; tệp không đạt thì E4.1.
- Tệp tải lên ngay khi chọn, có tiến độ từng tệp; nút Lưu khóa khi còn tệp đang tải hoặc lỗi (RSD DH08 R13). Không có mạng thì tệp giữ trên máy theo R08.

### R08. Bản chưa gửi trên máy và gửi lại

- **Mã yêu cầu.** Mỗi lần mở form ghi hoặc sửa, điện thoại sinh một mã yêu cầu duy nhất. Lưu và Gửi lại đều gửi mã này; máy chủ ghi mục, khoản liên kết và thông báo đúng một lần cho mỗi mã, lần sau trả lại kết quả đã có.
- **Kiểm phạm vi trước khi tra mã.** Với mọi lần Lưu và Gửi lại, máy chủ kiểm theo thứ tự phiên, mã quyền, phạm vi (R01) **trước** khi tra mã yêu cầu đã xử lý. Sai một bước thì trả lỗi của bước đó (E5.3), kể cả khi mã đã được xử lý ở lần gửi trước, và không trả dữ liệu của mục đã có. Đủ điều kiện mà mã đã xử lý thì trả kết quả đã có (E5.1); mã chưa xử lý thì kiểm tiếp trạng thái hồ sơ, người ghi, phiên bản, dữ liệu theo R09 rồi ghi.
- **Khi nào thành bản chưa gửi.** Bấm Lưu mà trình duyệt báo không có mạng, yêu cầu hết thời gian chờ 30 giây, hoặc mất kết nối trước khi có phản hồi. Lỗi có phản hồi từ máy chủ (quyền, dữ liệu, phiên bản) không thành bản chưa gửi mà theo R09.
- **Lưu trên máy.** Nội dung các trường, ảnh chưa tải lên, mã yêu cầu, ID hồ sơ, ID và phiên bản mục gốc (khi sửa) lưu trong bộ nhớ của trình duyệt, gắn với tài khoản; tài khoản khác đăng nhập cùng máy không thấy. Bản chưa gửi chỉ mất khi gửi thành công, khi người dùng bấm Bỏ, hoặc khi đăng xuất sau cảnh báo (E5.5).
- **Không tự gửi.** Có mạng trở lại thì nút Gửi lại mở khóa và banner W41 đổi chữ “Đã có mạng · bấm để gửi”; hệ thống không gửi khi người dùng chưa bấm.
- **Quy tắc ghi khi Gửi lại** là quy tắc tại lúc gửi (phạm vi, trạng thái hồ sơ, phiên bản): thời điểm và ngày Tour là giá trị người dùng đã nhập lúc soạn.
- Xóa không có bản chưa gửi (E5.7).

### R09. Đồng thời và mất quyền giữa chừng

- Mỗi mục khóa lạc quan theo phiên bản riêng (Q8; RSD DH08 mục 2.4). Phiên bản đã đổi thì từ chối, chỉ có Tải lại (E3.5, E4.4).
- Mỗi yêu cầu ghi kiểm tra lại theo thứ tự: phiên còn hiệu lực (CH01); mã quyền; phạm vi (R01); trạng thái hồ sơ (chưa Đã đóng; Đã kết thúc với chi phí thực tế); người ghi (R05, khi sửa, xóa); phiên bản; dữ liệu. Sai ở bước nào thì trả lý do của bước đó; giao diện hiện như E3.4 (quyền, phạm vi, Đã đóng), E3.5 (phiên bản) hoặc lỗi cạnh trường (dữ liệu).
- Bị thu hồi mã quyền giữa phiên: theo mặc định của BOI-CANH (“Quyền của bạn vừa thay đổi”, nút Tải lại trang, giữ dữ liệu trên form để chép).

### R10. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở | Khi thiếu |
|---|---|---|---|
| Liên kết tài khoản – nhân sự; vai trò thuộc phòng HDV của tài khoản | Quản trị hệ thống (QT01; RSD DH06 R01) | R01, R02 | Chưa liên kết: E1.1 |
| Mã quyền `HD01.xem`, `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi` | Quản trị hệ thống (QT02) | Mục 1.4 | Mặc định theo mục 1.4 |
| Đầu mối NCC | Điều hành (DH03.1) | L2.2 | E2.2 |
| Danh mục loại tiền | Kế toán (QT05) | L4.1 | Chỉ có VND |
| Loại thông báo TB-HD01-01, TB-HD01-02, TB-DH08-11, TB-DH08-12, TB-DH08-13 | CH02 (Phụ lục A) | R06; RSD DH08 R12, L1.5 | — |
| Điện thoại nhân sự (Điều hành phụ trách); người liên hệ của Booking và điện thoại của người đó | Điều hành (DH06); Kinh doanh (KD08, KD03-KD04) | R12 | E2.11 |
| Hàng đợi dựng PDF, mẫu trang HTML của PDF chương trình | Hệ thống (Q5, Q21; tệp cấu hình C2) | R13 | E2.12 |

### R11. Hiện số hộ chiếu đầy đủ (người dùng chốt thêm 12/11/2026)

- **Ai, ở đâu.** Tài khoản có `HD01.xem`, chỉ với khách thuộc danh sách khách đoàn (DH08.4) của hồ sơ trong phạm vi (R01). Máy chủ kiểm tra quyền và phạm vi ở mỗi yêu cầu; khách của hồ sơ ngoài phạm vi trả như E1.3.
- **Một khách mỗi lần.** Yêu cầu Hiện số chứa ID của đúng một khách; không có điểm cuối trả số đầy đủ của nhiều khách. Lý do: mỗi lần hiện chỉ lộ một số và nhật ký nêu rõ số của ai được xem; thủ tục cả đoàn (nhận phòng) Điều hành đã gửi Pax list cho NCC (RSD DH08 L4.6).
- **Ghi QT03 trước khi trả số.** Trong cùng một giao dịch, máy chủ ghi một mục QT03 rồi mới trả số: người, vai trò, thời điểm, màn HD01, thao tác **Hiện số hộ chiếu** (nhóm Xem dữ liệu cá nhân, có cờ Thao tác nhạy cảm), đối tượng chính Hồ sơ Tour (Tour Code), đối tượng liên quan là khách (họ tên); số hộ chiếu trong mục đã che theo RSD QT03 R07. Ghi QT03 lỗi thì không trả số (E2.9). Đây là ngoại lệ duy nhất của quy tắc “QT03 không ghi lượt xem” (RSD QT03 R01).
- **Mỗi lần là một mục.** Bấm Hiện số lần nữa cho cùng khách, kể cả ngay sau khi Che, ghi mục mới. Không gộp, không chống trùng theo thời gian.
- **Không giữ trên máy.** Số đầy đủ chỉ nằm trong bộ nhớ của trang đang mở; không lưu vào bộ nhớ trình duyệt, không vào bản chưa gửi (R08), không vào PDF (R13). Tự che lại sau 60 giây, khi bấm Che, khi rời tab Khách đoàn hoặc tải lại trang.

### R12. Điện thoại và gọi (người dùng chốt thêm 12/11/2026)

| Số | Nguồn | Hiện ở | Khi không có |
|---|---|---|---|
| Điều hành phụ trách hồ sơ | Điện thoại của nhân sự liên kết với người phụ trách (RSD DH06 mục 5.1) | Phần đầu HD01.2, dòng 3; PDF chương trình | E2.11 |
| Người liên hệ của Booking (nhãn trên màn và PDF) | Người liên hệ ghi trên Booking (RSD KD08 mục 5.1); có thể khác người liên hệ chính của khách ở KD04, nên nhãn không dùng chữ “chính”. Điện thoại lấy từ hồ sơ khách ở KD04: khách Cá nhân là điện thoại của khách; khách Doanh nghiệp là điện thoại của người liên hệ đó (RSD KD03-KD04) | Khối Liên hệ phía khách hàng ở tab Khách đoàn; PDF chương trình | E2.11 |
| Khách trong đoàn | Trường điện thoại của khách ở DH08.4 (RSD DH08 mục 5.1), chỉ khi có số | Dòng khách ở tab Khách đoàn | Không hiện mục điện thoại |
| Đầu mối NCC | Đầu mối chính (RSD DH03) | L2.2; PDF chương trình | E2.2 |

- Mọi số là liên kết `tel:`; chạm mở trình gọi của điện thoại. TOPAS không ghi lượt gọi, không ghi QT03.
- Số đọc lúc tải, theo dữ liệu hiện tại của màn nguồn; đổi người phụ trách hoặc người liên hệ thì lần tải sau hiện số mới.
- Không hiện email của Điều hành, người liên hệ hay khách; không hiện liên hệ của nhân sự khác được phân công cùng đoàn.

### R13. PDF chương trình (người dùng chốt thêm 12/11/2026)

- **Mục đích.** HD01 không có chế độ xem ngoại tuyến (đã chốt); PDF là cách duy nhất để HDV xem chương trình khi mất mạng.
- **Dựng.** Mỗi lần bấm dựng một tệp mới từ dữ liệu tại lúc dựng (phiên bản chương trình đang áp dụng, dịch vụ kèm dịch vụ đi kèm như L2.2, liên hệ, phân phòng), qua hàng đợi dựng PDF từ trang HTML (Q5, Q21), không trong giao dịch của yêu cầu. Mã yêu cầu chống tạo hai việc khi bấm lặp. Quá 60 giây chưa xong thì báo lỗi (E2.12).
- **Kiểm tra lúc trả tệp.** Trước khi trả tệp, máy chủ kiểm tra lại quyền và phạm vi (R01); ngoài phạm vi thì không trả (E2.15). Đường dẫn tải chỉ dùng được với phiên của chính tài khoản đã yêu cầu.
- **Nội dung** theo L2.6 bước 3. Dữ liệu trong PDF là tập con của R03; không có giá, loại tiền, danh sách khách đoàn, số hộ chiếu, nhật ký, sự cố, chi phí.
- **Rooming list trong PDF (người dùng chốt 12/11/2026).** Theo đợt lưu trú, mỗi phòng một dòng chỉ gồm số phòng và tên khách; đầu mỗi đợt có tên cơ sở lưu trú và ngày nhận, trả phòng. Không có hộ chiếu (kể cả dạng che), điện thoại, quốc tịch, ngày sinh, hạng phòng, ghi chú phòng, yêu cầu riêng. Lấy theo phân phòng đã lưu ở DH08.4 tại lúc dựng; đợt chưa xếp đủ ghi “n khách chưa xếp phòng”; hồ sơ chưa có đợt lưu trú thì không có phần này. Đây là dữ liệu cá nhân duy nhất của khách trong đoàn có trong PDF.
- **Lưu giữ.** Tệp lưu tạm ở kho tệp, xóa sau 24 giờ hoặc ngay sau khi tải xong; TOPAS không giữ lịch sử các tệp đã dựng.
- **Nhật ký.** Mỗi lần trả tệp thành công ghi một mục QT03: thao tác Xuất tệp (nhạy cảm, RSD QT03 R13), màn HD01, đối tượng Hồ sơ Tour, tên tệp, phiên bản chương trình (RSD QT03 R01, R15).
- **Tên tệp.** `<Tour Code>_chuong-trinh_v<N>.pdf`.

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa và dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|
| Hồ sơ Tour, lịch trình, hạng mục, lần đặt, khách đoàn, đợt lưu trú và phòng, phân công | Như RSD DH08 mục 5.1 | DH08 sở hữu; HD01 đọc theo R01, R03 |
| Đầu mối NCC | ID NCC, họ tên, điện thoại, là đầu mối chính | DH03 sở hữu; HD01 đọc đầu mối chính |
| Nhật ký và sự cố; Chi phí phát sinh; Chi phí thực tế (bước 1) | Như RSD DH08 mục 5.1, gồm nguồn (Điều hành, HDV) và tài khoản người ghi (RSD DH08 R20) | DH08 sở hữu; HD01 ghi theo R04, R05 |
| Bản chưa gửi (trên điện thoại) | Mã yêu cầu, ID tài khoản, ID hồ sơ, loại mục, ID và phiên bản mục gốc (khi sửa), các trường, ảnh chưa tải lên, thời điểm soạn | Chỉ ở bộ nhớ trình duyệt của máy (R08); không có trên máy chủ |
| Mã yêu cầu đã xử lý (máy chủ) | Mã yêu cầu, ID tài khoản, ID mục đã tạo hoặc sửa, thời điểm | Chống ghi trùng khi Gửi lại (R08) |
| Điện thoại Điều hành phụ trách; người liên hệ của Booking và điện thoại | Như RSD DH06 mục 5.1; RSD KD08 mục 5.1; RSD KD03-KD04 | DH06, KD08, KD04 sở hữu; HD01 đọc theo R12 |
| Lượt hiện số hộ chiếu | Không có bảng riêng ở HD01: mỗi lượt là một mục QT03 (R11) | QT03 sở hữu; ghi trong giao dịch của yêu cầu Hiện số |
| Việc dựng PDF chương trình (máy chủ) | Mã yêu cầu, ID tài khoản, ID hồ sơ, phiên bản chương trình, trạng thái (Đang dựng, Xong, Lỗi), tệp tạm, thời điểm | Hàng đợi dựng PDF (Q5, Q21); tệp xóa sau 24 giờ (R13) |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| Nhật ký | Thời điểm | Có | Hiện tại | Không ở tương lai |
| Nhật ký | Nội dung | Có | — | Tối đa 2.000 ký tự |
| Sự cố | Thời điểm, nội dung, cách xử lý | Có | Thời điểm hiện tại | Như RSD DH08 mục 5.2 (Sự cố) |
| Sự cố | Kết quả | Không | — | Có kết quả thì Đã xử lý |
| Sự cố | Có chi phí phát sinh: số tiền, loại tiền, chứng từ | Số tiền, loại tiền khi bật | VND | Số tiền > 0; tệp theo R07 |
| Chi phí phát sinh | Ngày, nội dung, số tiền, loại tiền | Có | Ngày hôm nay; VND | Như RSD DH08 mục 5.2; ngày từ ngày khởi hành đến hôm nay |
| Chi phí phát sinh | NCC, Gợi ý thu lại từ khách, chứng từ | Không | — | NCC thuộc hồ sơ; tệp theo R07 |
| Chi phí thực tế | Chi phí thực tế | Có | — | ≥ 0, theo loại tiền của dòng |
| Chi phí thực tế | Ghi chú | Có | — | Tối đa 500 ký tự; lưu vào lý do chênh lệch của DH08.8 |
| Chi phí thực tế | Chứng từ | Không | — | R07 |

Ghi chú của chi phí thực tế luôn bắt buộc ở HD01 vì HDV không thấy giá xác nhận để biết có chênh lệch hay không (R03).

### 5.3. Dữ liệu gửi ra ngoài

HD01 không gửi email, tin nhắn hay tài liệu ra ngoài hệ thống. Thông báo là thông báo trong ứng dụng (RSD CH02). Gọi NCC, Điều hành, người liên hệ phía khách hàng, khách trong đoàn qua liên kết `tel:` do điện thoại thực hiện; TOPAS không ghi. PDF chương trình (R13) chỉ tải về điện thoại của chính HDV đã bấm, ghi QT03; tệp ghi “tài liệu nội bộ, không gửi cho bên ngoài”, không chứa giá; dữ liệu cá nhân của khách trong đoàn chỉ có tên khách và số phòng ở Rooming list (R13).

---

## 6. Tiêu chí nghiệm thu

Trình duyệt cỡ điện thoại: 390 × 844 px, trừ AC ghi cỡ khác. API là các điểm cuối HD01 gọi bằng phiên của tài khoản trong AC.

| Mã | Điều kiện và thao tác | Kết quả mong đợi | Mã test |
|---|---|---|---|
| AC01 | Vũ Đức Long (Cộng tác viên, tài khoản chỉ có vai trò HDV, mật khẩu tạm) đăng nhập trên trình duyệt 390 px, đổi mật khẩu | Sau đổi mật khẩu mở HD01.1, không mở Việc của tôi; menu chỉ có Tour của tôi, Đổi mật khẩu, Đăng xuất; không cuộn ngang (L1.1, R02) | T-HD01-01 |
| AC02 | Tài khoản có vai trò HDV và Điều hành đăng nhập | Mở Việc của tôi; menu có Tour của tôi; HD01.1 chỉ liệt kê hồ sơ nhân sự của tài khoản được phân công (R01, R02) | T-HD01-02 |
| AC03 | Long được phân công ở 3 hồ sơ (Mới tạo, Đang diễn ra, Đã kết thúc), 1 hồ sơ Đã đóng; có 1 hồ sơ khác Long không được phân công | W01 có đúng 3 thẻ theo thứ tự nhóm Đang diễn ra, Sắp khởi hành, Đã kết thúc chưa đóng; API danh sách trả đúng 3 Tour Code (R01, R02) | T-HD01-03 |
| AC04 | Long gọi API xem chi tiết và API ghi nhật ký với ID hồ sơ TP-2611-0099 (có thật, Long không được phân công); lần khác với ID không tồn tại; rồi mở đường dẫn HD01.2 của TP-2611-0099 trên trình duyệt | Hai trường hợp API nhận cùng mã lỗi không tìm thấy, thân phản hồi cùng cấu trúc, không có trường dữ liệu hồ sơ; không có mục nào được ghi. Trình duyệt hiện W03 “Không tìm thấy TP-2611-0099” và nút Về Tour của tôi, không có tên khách hay dữ liệu nào của hồ sơ (E1.3, R01; CGD K0.09) | T-HD01-04 |
| AC05 | Long đang mở W10 của TP-2611-0042; Điều hành bỏ phân công duy nhất của Long ở DH08.5; Long chuyển sang tab Khách đoàn | Yêu cầu kế tiếp bị từ chối, màn hiện W03; HD01.1 không còn TP-2611-0042; Long có TB-DH08-12 ghi “không còn xem được hồ sơ này” (R01, E2.8, L1.2) | T-HD01-05 |
| AC06 | Long có 2 phân công ở cùng hồ sơ (HDV suốt tuyến 18–25/11, Trưởng đoàn 18/11); Điều hành bỏ phân công Trưởng đoàn | Long vẫn xem được hồ sơ; TB-DH08-12 không có câu “không còn xem được hồ sơ này” (R01, L1.2) | T-HD01-06 |
| AC07 | Ngày 12/11 Điều hành phân công Long cho hồ sơ khởi hành 05/12 | Long có TB-DH08-11; chạm mở W10 của hồ sơ; hồ sơ có ở nhóm Sắp khởi hành ngay, không chờ tới 05/12 (L1.2, R01) | T-HD01-07 |
| AC08 | Điều hành Đóng Tour TP-2611-0042; Long tải lại HD01.1 và gọi API ghi nhật ký cho hồ sơ; sau đó Điều hành Mở lại Tour | Sau đóng: không còn thẻ, API ghi bị từ chối, không có mục mới ở DH08.6. Sau mở lại: thẻ trở lại nhóm Đã kết thúc chưa đóng (R01, mục 2.3) | T-HD01-08 |
| AC09 | Khách có số hộ chiếu C01234567, ngày sinh, điện thoại +49 151 2345 6412, visa; Long mở W12 và gọi API danh sách khách | Màn và phản hồi API danh sách chỉ có “C012•••67”, có điện thoại dạng liên kết `tel:`; phản hồi không có trường số hộ chiếu đầy đủ, ngày hết hạn, ngày sinh, visa, ghi chú cho Điều hành (R03, R12) | T-HD01-09 |
| AC10 | Dữ liệu mẫu cố định của TP-2611-0042 (Đang diễn ra): KS Huế đã xác nhận giá 2.437 USD, giá tham chiếu 2.391 USD; một hạng mục khác Đã hủy, phí hủy 1.739 USD; Booking BK-2610-0137 giá trị 48.615 USD, phải thu còn 12.947 USD; NCC KS Huế có số tài khoản 0071000123987; một khoản chi phí phát sinh 1.284 USD do HDV khác ghi; Long chưa ghi khoản nào. Long mở lần lượt bốn tab của W10 và gọi các điểm cuối đọc của HD01: danh sách Tour, chi tiết hồ sơ, chương trình và dịch vụ theo ngày, khách đoàn và Rooming list, nhật ký, chi phí phát sinh, chi phí thực tế | Văn bản trên màn và giá trị mọi trường trong các phản hồi (bỏ qua trường ID kỹ thuật) không chứa chuỗi nào trong danh sách cấm: “2.437”, “2437”, “2.391”, “2391”, “1.739”, “1739”, “48.615”, “48615”, “12.947”, “12947”, “0071000123987”, “1.284”, “1284”, “USD”, “BK-2610-0137” (R03) | T-HD01-10 |
| AC11 | Ngày 20/11 mở W10 của TP-2611-0042 (Đang diễn ra, Long phục vụ cả Tour) | Ngày 20/11 mở rộng sẵn, nhãn Hôm nay, khối Hôm nay có ba nút ghi; hạng mục Đã hủy không hiện; dòng khách sạn có mã xác nhận, đầu mối và số điện thoại dạng liên kết `tel:` (L2.1, L2.2) | T-HD01-11 |
| AC12 | NCC của một hạng mục không có đầu mối; một hạng mục chưa gắn NCC | Dòng thứ nhất ghi “Chưa có số liên hệ · hỏi Điều hành phụ trách”; dòng thứ hai ghi “Chưa có NCC” (E2.2, E2.3) | T-HD01-12 |
| AC13 | Đợt lưu trú Huế đã lưu phân phòng đủ; đợt Hội An còn 2 khách chưa xếp | Rooming list Huế hiện phòng, hạng phòng, khách; Hội An ghi “2 khách chưa xếp phòng · Điều hành đang xếp” kèm các phòng đã xếp; không có nút tải, gửi, sửa (L2.4, E2.5) | T-HD01-13 |
| AC14 | Long bấm + Nhật ký ở khối Hôm nay, gõ “Đoàn đến Huế 11:40”, Lưu | Thời điểm, ngày Tour điền sẵn; sau lưu quay về tab Chương trình; DH08.6 có mục với nhãn Do HDV ghi, người ghi Vũ Đức Long; không ai nhận thông báo (L3.1, R04, R06) | T-HD01-14 |
| AC15 | Long ghi sự cố “Khách A trật chân”, cách xử lý “Đưa đi bệnh viện”, không kết quả | DH08.6 có sự cố Đang xử lý nhãn Do HDV ghi; số trên tab Nhật ký & sự cố của DH08 tăng 1; Trần Minh Anh có một TB-HD01-01 mở DH08.6 lọc Sự cố đang xử lý (L3.2, R06) | T-HD01-15 |
| AC16 | Long ghi sự cố có chi phí 1.500.000 ₫ kèm 1 ảnh | Một giao dịch tạo sự cố và khoản DH08.7 Chưa ghi công nợ liên kết, cả hai nhãn Do HDV ghi; Minh Anh có đúng một TB-HD01-01 ghi “· có chi phí phát sinh”, nội dung không có số tiền (không có “1.500.000”, không có “₫”); không có TB-HD01-02 (L3.2, R06; RSD CH02 mục 1.4) | T-HD01-16 |
| AC17 | Dữ liệu mẫu: nhóm Điều hành gồm đúng ba người Trần Minh Anh, Lê Quang Huy, Vũ Đức Minh (Nội bộ, Nhận phân công Đang dùng, tài khoản Đang hoạt động có vai trò Điều hành; RSD CH02 R01). Hồ sơ TP-2611-0201 chưa có Điều hành phụ trách, Long được phân công; Long ghi sự cố ở hồ sơ đó | Minh Anh, Huy, Minh mỗi người có đúng một TB-HD01-01 mở DH08.6 của TP-2611-0201; Long và tài khoản khác không có (R06; RSD CH02 R01) | T-HD01-17 |
| AC18 | Long ghi chi phí phát sinh “Vé thắng cảnh bổ sung” 600.000 ₫, bấm Chụp ảnh chụp 1 ảnh JPG 4 MB | Ngày hôm nay và VND điền sẵn; ảnh tải lên có tiến độ; DH08.7 có khoản Chưa ghi công nợ, nhãn Do HDV ghi, có tệp; Minh Anh có TB-HD01-02; Kế toán chọn khoản ở DH08.7 và ghi công nợ như khoản Điều hành ghi (L4.1; RSD DH08 L7.2) | T-HD01-18 |
| AC19 | Long sửa khoản ở AC18 thành 650.000 ₫ hai lần trong khi Minh Anh chưa đọc thông báo | Minh Anh có một TB-HD01-02 làm mới “· 3 lần” với nội dung lần sửa cuối (R06; RSD CH02 R04) | T-HD01-19 |
| AC20 | Kế toán đã ghi công nợ khoản ở AC18; Long mở khoản; Long gọi API sửa số tiền và API xóa | Form: số tiền, loại tiền dạng chữ, không có Xóa, thêm được chứng từ và ghi chú. API sửa số tiền và xóa bị từ chối, khoản không đổi (L4.2, R05; RSD DH08 E7.2) | T-HD01-20 |
| AC21 | TP-2611-0042 có một nhật ký do Minh Anh ghi ở DH08, một sự cố Đang xử lý do HDV khác ghi ở HD01, một khoản chi phí kèm 1 ảnh chứng từ do HDV khác ghi, và một nhật ký của Long. Long mở tab Nhật ký và tab Chi phí; gọi API danh sách nhật ký và sự cố, API danh sách chi phí; gọi API đọc, sửa, xóa từng mục của người khác và API tải chứng từ của khoản HDV khác ghi | Dòng thời gian và phản hồi danh sách chỉ có nhật ký của Long; số sự cố đang xử lý trên tab Nhật ký và trên thẻ HD01.1 là 0; khoản của HDV khác không có trong danh sách chi phí. Mọi API đọc, sửa, xóa mục của người khác và API tải chứng từ trả như không tồn tại, không có nội dung hay tệp; không có thay đổi, không có thông báo (R03, R05) | T-HD01-21 |
| AC22 | Minh Anh sửa nội dung nhật ký Do HDV ghi của Long ở DH08 | Nhãn Do HDV ghi giữ nguyên; lịch sử ghi Minh Anh sửa; Long thấy nội dung mới ở lần tải sau (R04; RSD DH08 R20) | T-HD01-22 |
| AC23 | Long xóa sự cố của mình có chi phí 1.500.000 ₫ Chưa ghi công nợ; lần khác chi phí đã ghi công nợ | Lần 1: hộp thoại nêu khoản 1.500.000 ₫ cũng bị xóa; xác nhận thì sự cố và khoản mất khỏi DH08.6, DH08.7; Minh Anh có TB-HD01-02 ghi xóa. Lần 2: nút Xóa khóa kèm lý do (L3.3, E3.3, R05) | T-HD01-23 |
| AC24 | Long đang soạn chi phí có 2 ảnh, xoay điện thoại sang ngang rồi dọc | Không tải lại trang; nội dung, 2 ảnh và tiến độ tải giữ nguyên; không cuộn ngang ở cả hai chiều (mục 2.5) | T-HD01-24 |
| AC25 | Long có 3 hồ sơ ở HD01.1. Mở HD01.1 rồi W10 tab Chương trình của TP-2611-0042 ở 360 × 800, 430 × 932 và 1280 × 800; ở mỗi cỡ đo bằng trình duyệt | 360 và 430: chiều rộng cuộn của trang không lớn hơn chiều rộng vùng hiển thị; mọi khối nội dung có cùng mép trái (một cột); mọi nút, liên kết, thẻ, chip có hộp bao ≥ 44 × 44 px; chữ trong ô nhập ≥ 16 px. 1280: khối nội dung rộng ≤ 600 px, lề trái và lề phải chênh nhau ≤ 1 px; chạm thẻ mở W10, nút + Nhật ký mở form, thanh tab dưới chuyển được cả bốn tab (mục 2.5; CGD K7.02, K7.05) | T-HD01-25 |
| AC26 | Ở form chi phí phát sinh: Chọn tệp một ảnh HEIC 4 MB; Chọn tệp một ảnh JPG 25 MB; lần khác chọn 11 ảnh JPG 1 MB | Ảnh HEIC được đổi sang JPG, tải lên thành công, tên tệp đuôi .jpg. Tệp 25 MB lỗi “Quá 20 MB (25 MB)”; ảnh thứ 11 lỗi quá 10 tệp; mỗi tệp lỗi có lý do riêng; nút Lưu khóa đến khi bỏ tệp lỗi; các trường khác giữ (E4.1, R07; CGD K7.09) | T-HD01-26 |
| AC27 | TP-2611-0042 Đang diễn ra; Long mở phần Chi phí thực tế | W35 “Mở khi Tour đã kết thúc”; API ghi chi phí thực tế bị từ chối (E4.5) | T-HD01-27 |
| AC28 | Hồ sơ Đã kết thúc; bước 1 có 3 dịch vụ: A chưa có số, B Minh Anh đã lưu 9.000.000 ₫, C Long đã lưu 300 USD; Minh Anh không có TB-HD01-02 Chưa đọc nào của hồ sơ. Long ghi A 2.000.000 ₫ kèm ghi chú, rồi sửa C, trong khi Minh Anh chưa đọc thông báo; Long mở B | A, C: hiện số của Long, nhãn Do HDV ghi; B: “Điều hành đã ghi”, không có số, không sửa được; không thấy giá gợi ý, chênh lệch, dòng phí hủy. Ở DH08.8 bước 1, A và C có nhãn Do HDV ghi. Minh Anh có đúng một TB-HD01-02 “· 2 lần”, nội dung là lần sửa C (“HDV Vũ Đức Long đã sửa chi phí thực tế ở TP-2611-0042 · <dịch vụ C>”), đích DH08.8. Bước 1 vẫn Chưa chuyển Kế toán, Long không có nút chuyển (L4.3, R03, R05, R06; RSD CH02 R04) | T-HD01-28 |
| AC29 | Sau AC28, Minh Anh bấm Lưu và chuyển Kế toán ở DH08 | Số A, C do Long ghi được chuyển như các dòng khác; Kế toán nhận thông báo như RSD DH08 L8.1 (RSD DH08 R20) | T-HD01-29 |
| AC30 | Trình duyệt chuyển ngoại tuyến; Long ghi nhật ký và bấm Lưu; bấm Đóng, gửi sau | W40 “Chưa lưu”, không có thông báo ngắn đã lưu, nút Gửi lại khóa; sau Đóng có banner W41 “1 mục chưa gửi” (L5.1, R08) | T-HD01-30 |
| AC31 | Từ AC30, đóng thẻ trình duyệt; trình duyệt trực tuyến lại; mở lại HD01 cùng tài khoản, chờ 60 giây không bấm gì; sau đó bấm Gửi lại | Thẻ hồ sơ ở HD01.1 có chấm vàng, mục chưa gửi còn nguyên (E5.2). Trong 60 giây không có yêu cầu ghi nào gửi tới máy chủ, DH08.6 không có mục mới; banner đổi “Đã có mạng · bấm để gửi”. Sau Gửi lại: DH08.6 có đúng một mục, banner mất (R08) | T-HD01-31 |
| AC32 | Long ghi sự cố và bấm Lưu. Kịch bản Playwright, không dùng proxy: chặn tuyến của yêu cầu lưu, chuyển yêu cầu tới máy chủ (máy chủ ghi xong), bỏ phản hồi và đặt trình duyệt ở chế độ ngoại tuyến; sau đó trình duyệt trực tuyến lại, Long bấm Gửi lại hai lần | DH08.6 chỉ có một sự cố; Minh Anh chỉ có một TB-HD01-01; điện thoại hiện Đã lưu (E5.1, R08) | T-HD01-32 |
| AC33 | Long đang soạn chi phí ngoại tuyến; trong lúc đó Điều hành bỏ phân công; Long có mạng và bấm Gửi lại | Máy chủ từ chối; W42 nêu không còn ghi được ở hồ sơ này; nội dung còn để Sao chép; không có khoản nào ở DH08.7; bấm Bỏ thì mục rời khỏi máy (E3.4, E5.3) | T-HD01-33 |
| AC34 | Long đang sửa nhật ký của mình; Minh Anh lưu sửa cùng mục ở DH08; Long bấm Lưu | Bị từ chối, banner nêu Minh Anh và thời điểm, chỉ có nút Tải lại, không ghi đè (E3.5, R09) | T-HD01-34 |
| AC35 | Long đăng xuất khi còn 2 mục chưa gửi; bấm Vẫn đăng xuất; đăng nhập tài khoản HDV khác trên cùng máy | Hộp thoại nêu 2 mục sẽ bị xóa khỏi máy; sau đăng xuất, tài khoản khác không thấy mục nào chưa gửi (E5.5, R08) | T-HD01-35 |
| AC36 | Tài khoản HDV chưa liên kết nhân sự đăng nhập | HD01.1 hiện W02 với câu tài khoản chưa gắn hồ sơ nhân sự; API danh sách trả rỗng (E1.1) | T-HD01-36 |
| AC37 | Tài khoản chỉ có vai trò Kinh doanh mở đường dẫn HD01 | Trang không có quyền; không tải dữ liệu (E1.2) | T-HD01-37 |
| AC38 | Quản trị hệ thống (không có phân công) mở HD01.1 rồi mở đường dẫn HD01.2 của TP-2611-0042 | HD01.1 trống (E1.1); HD01.2 trả như E1.3; Quản trị vẫn xem hồ sơ ở DH08 (R01) | T-HD01-38 |
| AC39 | Long ghi nhật ký với thời điểm ngày mai; ghi chi phí số tiền 0 | Lỗi cạnh trường, không lưu, giữ dữ liệu (E3.1, E4.2) | T-HD01-39 |
| AC40 | Quản trị bỏ `HD01.ghi-chi-phi` của vai trò HDV ở QT02 khi Long đang mở form chi phí; Long bấm Lưu | Báo “Quyền của bạn vừa thay đổi”, nút Tải lại trang, dữ liệu còn trên form; không có khoản mới; sau tải lại không còn nút ghi chi phí (R09) | T-HD01-40 |
| AC41 | Khách Anna Müller có số hộ chiếu C01234567 ở TP-2611-0042; Long bấm Hiện số trên dòng của Anna; chờ 60 giây; bấm Hiện số lần nữa rồi bấm Che | Lần 1: dòng hiện “C01234567” và “Lượt hiện này được ghi nhật ký”; sau 60 giây trở về “C012•••67”. QT03 có đúng hai mục: người Vũ Đức Long, vai trò HDV, màn HD01, thao tác Hiện số hộ chiếu có cờ ⚑ Nhạy cảm, đối tượng Hồ sơ Tour TP-2611-0042, liên quan Anna Müller, số trong mục đã che (L2.3, R11; RSD QT03 R01, R07) | T-HD01-41 |
| AC42 | Long gọi thẳng API Hiện số với ID một khách của hồ sơ không được phân công; lần khác với ID khách không tồn tại; lần khác gọi API danh sách khách của TP-2611-0042 | Hai lần đầu nhận cùng phản hồi không tìm thấy như E1.3, không có số, không có mục QT03 nào. API danh sách không có số đầy đủ của khách nào. Không có điểm cuối nào trả số đầy đủ của nhiều khách (E2.9, R01, R11) | T-HD01-42 |
| AC43 | Long mở W12 của TP-2611-0042; trình duyệt chuyển sang chế độ ngoại tuyến của Playwright; Long bấm Hiện số trên dòng Anna Müller; trình duyệt trực tuyến lại | Lúc ngoại tuyến: không hiện số, nút trở lại Hiện số, thông báo ngắn “Chưa hiện được số · thử lại”; trang không chứa “C01234567”; QT03 không có mục Hiện số hộ chiếu mới; trực tuyến lại thì không tự hiện số khi Long chưa bấm (E2.9, R11). Nhánh “ghi QT03 lỗi thì không trả số” của R11 kiểm khi rà mã (ghi QT03 và đọc số trong một giao dịch, trả số sau khi giao dịch xong), không giả lập kho QT03 lỗi | T-HD01-43 |
| AC44 | TP-2611-0042: Điều hành phụ trách Trần Minh Anh có điện thoại ở DH06; Booking có người liên hệ Petra Schmidt (Müller Reisen GmbH) có điện thoại ở KD04; khách A có điện thoại, khách B không có. Long mở W10 rồi tab Khách đoàn | Phần đầu có nút gọi Trần Minh Anh với liên kết `tel:` đúng số; khối Liên hệ phía khách hàng có Petra Schmidt và nút gọi; dòng khách A có số dạng liên kết, dòng khách B không có mục điện thoại; không màn nào có email hay mã Booking; QT03 không có mục nào sau các lần chạm gọi (L2.5, R12) | T-HD01-44 |
| AC45 | Hồ sơ chưa có Điều hành phụ trách; Booking có người liên hệ không có điện thoại | Phần đầu ghi “Chưa có Điều hành phụ trách”, không có nút gọi; khối Liên hệ phía khách hàng ghi “Chưa có số liên hệ · hỏi Điều hành phụ trách” (E2.11) | T-HD01-45 |
| AC46 | Long bấm Tải PDF chương trình ở TP-2611-0042 (chương trình v4, có khách sạn đã xác nhận giá 2.400 USD; đợt lưu trú Huế đã xếp Anna Müller (hộ chiếu C01234567, điện thoại +49 151 2345 6412, quốc tịch Đức) vào phòng 305 hạng Deluxe; đợt Hội An còn 2 khách chưa xếp), bấm thêm hai lần khi nút đang “Đang chuẩn bị PDF…” | Hàng đợi có đúng một việc dựng; trình duyệt tải một tệp `TP-2611-0042_chuong-trinh_v4.pdf`. Tệp có các ngày, tuyến, nội dung, dịch vụ, mã xác nhận, đầu mối NCC, điện thoại Điều hành phụ trách và người liên hệ của Booking; phần Rooming list có đợt Huế với dòng “305 · Anna Müller” và đợt Hội An ghi “2 khách chưa xếp phòng”; chân trang có “v4”, thời điểm dữ liệu, “tài liệu nội bộ”. Toàn tệp không chứa “2.400”, “USD”, “C012”, “C01234567”, “2345 6412”; phần Rooming list không chứa “Deluxe”, “Đức”. QT03 có một mục Xuất tệp, màn HD01, tên tệp (L2.6, R13) | T-HD01-46 |
| AC47 | Trình duyệt chuyển ngoại tuyến; Long bấm Tải PDF chương trình; lần khác giả lập hàng đợi không xong trong 60 giây | Ngoại tuyến: “Không có mạng · chưa tải được PDF”, không có việc dựng, có mạng lại cũng không tự tải. Quá 60 giây: “Chưa tạo được PDF · thử lại”, không có tệp, không có mục QT03 (E2.12, E2.13) | T-HD01-47 |
| AC48 | Long bấm Tải PDF chương trình; trong lúc dựng, Điều hành bỏ phân công duy nhất của Long | Không có tệp được trả; màn chuyển W03; không có mục QT03 Xuất tệp (E2.15, R13) | T-HD01-48 |
| AC49 | Trần Minh Anh áp dụng thay đổi chương trình v5 cho TP-2611-0042 ở DH08; hồ sơ có Long (HDV suốt tuyến, 2 phân công) và Hồ Quang Vinh (chưa có tài khoản) | Long có đúng một TB-DH08-13, chạm mở W10 tab Chương trình hiện v5; Minh Anh (người thao tác) không có TB-DH08-13; không ai nhận thay cho Vinh. Sau đó đặt giờ 26/11/2026 09:00, hồ sơ Đã kết thúc (Điều hành đã bấm Kết thúc Tour), Minh Anh Đóng Tour: Long không có thông báo nào (L1.2, R06; RSD CH02 Phụ lục A) | T-HD01-49 |
| AC50 | Long nhập kết quả “Đã băng bó, khách đi tiếp” cho sự cố của mình ở AC15 khi Minh Anh chưa đọc TB-HD01-01 của AC15; sau khi Minh Anh đọc, Long sửa kết quả lần nữa | Lần 1: sự cố Đã xử lý; TB-HD01-01 của Minh Anh làm mới “· 2 lần” với nội dung cập nhật kết quả. Lần 2: Minh Anh có một TB-HD01-01 mới, Chưa đọc. Nội dung không có số tiền (L3.3, R06; RSD CH02 R04) | T-HD01-50 |
| AC51 | Minh Anh xóa ở DH08 một nhật ký và một khoản chi phí phát sinh Chưa ghi công nợ, cả hai Do HDV ghi của Long; Long tải lại HD01 | Hai mục không còn trong dòng thời gian và danh sách chi phí của Long; tổng chi phí tính lại; Long không có thông báo; QT03 có hai mục Xóa do Minh Anh, màn DH08.6 và DH08.7 (R04, E3.8, E4.9; RSD DH08 L6.4, L7.3) | T-HD01-51 |
| AC52 | Long đang sửa nhật ký ở AC51 khi Minh Anh xóa; Long bấm Lưu | Phản hồi “Mục không còn”; form đóng; dòng thời gian tải lại; không có mục nào được tạo lại (E3.6) | T-HD01-52 |
| AC53 | TP-2611-0042: hạng mục KS Huế 20/11 – 22/11 Đã xác nhận, 2 phòng kèm đi kèm Giường phụ × 1 (giá xác nhận đi kèm 35 USD/đêm); đợt Huế có phòng 305 ba khách, ghi chú Giường phụ. Long mở ngày 20/11 ở W11, mở Rooming list Huế ở W13, rồi tải PDF chương trình | W11: dưới dòng KS Huế có “kèm: Giường phụ × 1 giường (20/11 – 22/11)”; W13: phòng 305 có ghi chú “Giường phụ”. Phản hồi API và màn không chứa “35”, “USD” của đi kèm. PDF: dịch vụ ngày 20/11 có dòng kèm Giường phụ; phần Rooming list chỉ có “305 · …” với tên khách, không có chữ “Giường phụ” (L2.2, L2.4, R03, R13) | T-HD01-53 |
