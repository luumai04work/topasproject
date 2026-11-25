# Ghi chú làm việc · RSD KT01 v1.6

## Cập nhật 12/11/2026 theo quyết định phase coding

Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md` (bản sửa 12/11/2026). Tệp đổi tên `RSD-KT01-Cong-no-va-thu-chi-v1.6.md` bằng `git mv`. Không đổi số hiệu L, E, R, W, AC; thêm E1.14, AC62.

**Đã sửa:**
- **Q1.** Bỏ “Kinh doanh chỉ thấy dữ liệu của Booking mình phụ trách” ở quyết định đầu tài liệu, 1.4, R01, R03 (số trên tab), 5.2, L1.7, E0.11, AC27–AC29. 1.4 thành “Quyền mặc định theo vai trò”, cấu hình ở QT02. Thông tin nhận thanh toán NCC và điều khoản thanh toán của đợt trả theo thao tác riêng Xem thông tin thanh toán NCC, dùng chung với RSD DH03 v1.5 mục 1.4 (mặc định Kế toán, Điều hành, Quản trị có; Kinh doanh không). E3.8 mở lại hồ sơ theo quyền.
- **Q18.** Khoản phải thu phát sinh là khoản riêng, loại tiền riêng (R04, R11, L3.2, 5.1). Tự phân bổ, Tiền thừa, Dùng tiền thừa, hoàn chỉ trong cùng loại tiền (R06, R07, E1.6, 5.1). Thêm E1.14 (Booking còn phải thu nhiều loại tiền: chọn loại tiền rồi khóa) và AC62.
- **Q9.** Phí giữ lại làm tròn half-up theo đơn vị nhỏ nhất của loại tiền, không áp bội số (R07, R16, nguồn KD06 R14).
- **Q2, Q5.** Thông báo nội bộ → thông báo in-app (1.2, L1.6, R05, 5.3). Nghĩa vụ từ lịch thanh toán KD08 thay trong cùng giao dịch; R13 ghi rõ phần màn nhận phải ghi nằm cùng giao dịch, còn lại đọc lúc tải.
- **Q3.** Bỏ nhãn “suy ra, chờ xác nhận” ở L3.3, R03. Các mục “Thiết kế do người viết tự quyết, cần xác nhận” trong tệp này coi là chấp nhận mặc định (Q3).
- **Q6, Q7, Q19, K6.** Tình trạng tính lúc đọc (R03); mã GD cho phép thủng số, YYMM theo giờ Asia/Ho_Chi_Minh (R15); tệp chứng từ 20 MB, 10 tệp, PDF/JPG/PNG/XLSX/DOCX (R15, trước 10 MB, 5 tệp, chỉ PDF/JPG/PNG); E2.10 “Ngừng dùng”. Ngưỡng Đến hạn ghi chủ sở hữu QT05.
- Bỏ phần “DH07 W08 hiện số đã thu của Booking tạo hồ sơ lỗi” (1.1, 5.1) vì Q5 bỏ Tạo lỗi; giữ DH07 trong danh sách màn đọc theo BOI-CANH.

**Tự đơn giản hóa giao diện (U6):**
- KT01.1 có chip Của tôi (Booking mình phụ trách) bật sẵn với Kinh doanh, tắt sẵn với vai trò khác, để Kinh doanh vẫn mở thẳng Booking của mình như W15 (theo nguyên tắc danh sách có người phụ trách bật sẵn chip Của tôi). KT01.2, KT01.3 không thêm chip.
- Bỏ nhãn “… · chỉ xem” ở phần đầu; người chỉ xem chỉ không thấy nút ghi (U5). Trường chỉ đọc hiện dạng chữ thay vì viền nét đứt và 🔒.
- Giữ nút Thử lại khi lỗi tải phần đầu hoặc lịch thanh toán (tải lại dữ liệu đọc, không phải Thử lại đã bỏ theo Q5).

**Hình chưa cập nhật:** W15 (nhãn “Booking bạn phụ trách”, “Kinh doanh · chỉ xem”; chưa có chip Của tôi) có ghi chú dưới hình. Ghi chung ở “Dữ liệu trên hình”: thanh bên mọi hình còn mục Chăm sóc khách hàng (C3); trường chỉ đọc còn viền nét đứt, 🔒. Chưa có hình cho khoản phải thu phát sinh khác loại tiền (E1.14).

**Còn mở:** quyền “Xem tài khoản nhận hoàn của khách” mặc định chỉ Kế toán (giữ như bản cũ; Quản trị chưa cấp dù Q25 cho Quản trị xem mọi màn). E1.14: cách chọn loại tiền khi Booking còn phải thu nhiều loại tiền là suy từ Q18. KD07 R04 hiện một số Còn phải thu mỗi dòng; khi Booking có khoản phát sinh khác loại tiền thì KD07 cần hiện theo từng loại tiền (ngoài phạm vi KT01).

## Cập nhật v1.3 (12/11/2026) · Kế toán không làm chốt chặn cho KD, DH

**Quyết định của người dùng (yêu cầu riêng của doanh nghiệp):** (1) không có luồng duyệt; (2) KT01 không làm chốt chặn hay điều kiện cho Kinh doanh và Điều hành. Hệ quả: (A) hồ sơ Tour tự tạo khi Booking được lưu ở KD08, bỏ điều kiện tạo hồ sơ và Tạo sớm (DH07 v1.5); (B) đóng Tour chỉ cần hồ sơ Đã kết thúc, không cần quyết toán; Kế toán lưu quyết toán ở DH08.8 khi Đã kết thúc hoặc Đã đóng, không cần Mở lại Tour (DH08 v2.5 R16).

**Lý do sửa KT01:** v1.2 cho khoản thu ở KT01 kích hoạt DH07 kiểm tra điều kiện và tạo hồ sơ (L1.2 bước 4, R13, E0.9, AC06), tức thao tác Kế toán là điều kiện cho DH. Chip Chưa quyết toán chỉ gồm Tour Đã kết thúc, ngầm hiểu Tour đã đóng thì đã quyết toán. Cả hai trái quyết định mới.

**Đã sửa:** tệp mới `RSD-KT01-Cong-no-va-thu-chi-v1.3.md`, xóa v1.2. Mục đầu (khối “Yêu cầu riêng của doanh nghiệp”, nguồn: DH07 v1.5, DH08 v2.5, KD07 v1.2, KD08 v1.3), 1.1, 1.2, 1.3, L1.1, L1.2, L0.3, E0.9 (viết lại), E2.9, L3.3, L3.4, E3.8, R03, R12, R13, R14, 5.1, AC43, AC49, AC58 và AC59 mới; bỏ AC06. Mọi “RSD DH08 v2.4” thành v2.5; bỏ dẫn “DH08 E8.7”, “DH07 E1.6”.
- Wireframe: thêm Tour Code cho 4 Booking trước đây “Chưa có” hoặc “—” hồ sơ (BK-2611-0151 TP-2702-0003, BK-2611-0158 TP-2703-0001 theo KD07, BK-2611-0156 TP-2703-0002, BK-2610-0125 TP-2701-0004); W16, W09/W10 dòng phụ bảng trượt có Tour Code. KT01.3 thêm 4 Tour (Tất cả 10, Không có việc chờ 7), thẻ Phải thu còn của KT01.3 nay bằng Còn phải thu của KT01.1. W11 bỏ dòng “Hồ sơ Tour … không bị ảnh hưởng”. W29 đổi tên “Tour chưa quyết toán”, chân bảng ghi Đã kết thúc hoặc Đã đóng. W03 gợi ý ghi “phần đầu DH08” thay “hồ sơ Tour”. Dựng lại cả 30 hình; `sync-md.js`, `indent-images.js` (0 thay đổi), `check-rsd.js --final`: sạch (30 ảnh, 30 mã W).
- W28 giữ hình (Tour đã đóng có quyết toán phiên bản 1); trường hợp đóng chưa quyết toán chỉ mô tả bằng chữ ở L3.3 và AC58, chưa có hình riêng.

**Giữ nguyên (không thuộc yêu cầu):** khóa nội bộ KT01 do KD chặn KT (E1.1, E1.2 Ghi khoản thu khóa khi chưa có lịch). Ràng buộc toàn vẹn dữ liệu: DH08.3 không sửa số của dịch vụ đã vào công nợ (E2.13), DH08.7 không sửa số tiền, không xóa khoản phát sinh đã ghi công nợ (E3.6), KD08 không xóa đợt đã có thu; BOI-CANH coi đây là toàn vẹn dữ liệu, không phải chốt chặn.

**Suy ra, chờ xác nhận:**
- Tour Đã đóng chưa quyết toán xếp vào chip Chưa quyết toán (ưu tiên hơn Đã đóng · còn công nợ); chip Đã đóng · còn công nợ chỉ còn Tour đã đóng có quyết toán (R03).
- Banner Tour đã đóng (W28) ghi “Chưa quyết toán” kèm Mở quyết toán khi chưa có phiên bản quyết toán.
- DH07 không còn đọc khoản thu ở KT01 (bỏ DH07 khỏi 1.1, R13, 5.1). Nếu DH07 v1.5 vẫn hiện số đã thu để tham khảo thì thêm lại DH07 vào bên đọc (chỉ hiển thị).
- Tour Code, thời gian Tour của BK-2611-0151 (04/02 – 13/02/2027), BK-2611-0156 (12/03 – 24/03/2027), BK-2610-0125 (20/01 – 29/01/2027, hồ sơ Mới tạo kèm Booking đã hủy) là dữ liệu minh họa, chưa đối chiếu với KD07, KD08, DH07.

**Mâu thuẫn ngoài phạm vi (để agent khác/người dùng xử lý):**
- DH08 v2.5 (lúc đọc) còn ghi E8.8 “Hồ sơ Đã đóng … muốn quyết toán lại thì Mở lại Tour”, bảng chuyển trạng thái “Có quyết toán hiện hành” là điều kiện đóng, E8.2/W77; 5.1 “Tạo sớm”. Agent DH08 đang sửa.
- DH07 v1.4 (lúc đọc) còn trạng thái Chờ đủ điều kiện, sự kiện khoản thu KT01 (mục 1.2, R01, E1.6), mục “KT01.1 … phát sự kiện kiểm tra R01” ở GHI-CHU DH07. Agent DH07 đang sửa.
- KD08 wireframe (lúc đọc) còn “Chờ đủ điều kiện”, “Chưa có hồ sơ”. Agent KD08 đang sửa.

## Cập nhật v1.2 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn

**Theo quyết định người dùng (BOI-CANH):** Q5 loại tiền khoản phải trả NCC theo lần đặt (R04, L2.1, E2.3, 5.1, AC55); Q6 ngưỡng Đến hạn là tham số chung Quản trị cấu hình, mặc định 7 ngày (R03, R16, 2.1, AC56). Chuyển sang Điều hành không tự đổi lịch thanh toán (RSD KD08 R09): sửa L1.6, R05, AC57.

**Việc “cần sửa” đã làm:**
- [x] R04, R09: loại tiền khoản phải trả theo lần đặt; giao dịch cùng loại tiền với khoản.
- [x] R03, R16: ngưỡng Đến hạn đọc tham số chung; bỏ “Cố định 7 ngày (RSD KD07 R04)”.
- [x] KT01.2 (1.4, L2.2, R01, AC28): ẩn điều khoản thanh toán của đợt trả với Kinh doanh theo RSD DH03 R04; Kinh doanh chỉ thấy hạn và số tiền.
- [x] Dùng tiền thừa (L1.3, E1.5, 2.4, R06, R12, R13, 5.1, AC09): thao tác phân bổ lại tiền thừa sang đợt, ghi lịch sử, không phải giao dịch (không mã GD, không số chứng từ); bỏ “Dùng tiền thừa” khỏi loại giao dịch ở 5.1. Khớp E0.1, 5.2 (số tiền > 0), R15, R12 (bốn loại giao dịch).
- [x] L1.6, R05: lịch phải thu chỉ đổi khi Kinh doanh lưu lịch ở KD08.2.
- [x] R07: chính sách hoàn hủy chụp vào Booking lúc tạo ở KD08 (RSD KD08 v1.2 R03, KD08.1).
- [x] R14 dẫn RSD DH08 E8.7; R13, E2.9 giữ chỉ báo “KT01 có giao dịch mới” ở DH08.8 (DH08 v2.4).
- [x] R16, 5.2: mặc định làm tròn khi thiếu cấu hình = đơn vị nhỏ nhất của loại tiền (như cấu hình phụ thuộc của RSD KD06 R14); số thập phân: ngoại tệ 2, JPY 0, VND 0 (thống nhất RSD DH03 v1.2).
- [x] R03, 2.3, 5.1: tình trạng dòng Booking là tình trạng hiển thị dùng chung, KT01 xuất để KD07, KD08 đọc, không tự tính lại.
- Wireframe: sửa dòng phụ bảng trượt W18 thành “loại tiền theo lần đặt”, dựng lại W18. Các hình khác không có chữ đổi.
- `check-rsd.js RSD-KT01-Cong-no-va-thu-chi-v1.2.md --final`: sạch (30 ảnh, 30 mã W). Đã xóa tệp v1.1.

**Tự quyết, cần xác nhận:**
- Dùng tiền thừa mở hộp thoại xác nhận từ nút trên banner Tiền thừa (chưa có wireframe riêng). Hủy giao dịch nguồn sau khi tiền thừa đã được dùng: cho hủy, bỏ luôn phần dùng tiền thừa (R12); chỉ chặn khi tiền thừa đã được hoàn (E0.10).
- Đợt “Phát sinh” và khoản Phí hủy tính tình trạng như đợt của Booking (R03).

**Còn mở (tiền, cần hỏi):**
- Ví dụ phí giữ lại 15.862,50 EUR (W07, AC11) không làm tròn theo bội số EUR 10 nêu ở RSD KD06 R14, trong khi R07 dẫn “bội của loại tiền (KD06 R14)”. Cần chốt phí giữ lại làm tròn theo bội số giá bán hay theo đơn vị nhỏ nhất của loại tiền.
- RSD DH03 (bảng cấu hình phụ thuộc) ghi đơn vị làm tròn khi thiếu là “làm tròn 1.000 ₫”, khác KD06 (“đơn vị nhỏ nhất của loại tiền”). KT01 theo KD06 như được giao.
- Phí hủy NCC ghi ở DH08.3 bằng loại tiền khác loại tiền của khoản phải trả đã có: chưa quy định (giao dịch phải cùng loại tiền với khoản).

## Cập nhật v1.1 (12/11/2026) · Cột ≈ VND

**Người dùng chốt:** thêm cột ≈ VND cạnh số còn phải thu, còn phải trả ở cả ba tab và dòng ≈ tổng VND ở phần đầu; số còn lại theo tỷ giá hôm nay, số đã thu hoặc đã trả theo tỷ giá ngày giao dịch. Chỉ để tham khảo, không ghi vào sổ. Thay phần “không có dòng quy đổi” của Q2.

**Đã sửa:** đầu tài liệu, 1.1, 2.1, 2.4, L0.1, L1.1, E0.13, R04, R16, AC50, AC53, AC54. Wireframe: số ≈ VND tự tính trong `screens-kt01.js` (bảng TODAY_RATE, DATE_RATE) nên luôn khớp số theo loại tiền; chụp lại 30 ảnh. Tên tệp lên v1.1, đã xóa v1.0.

**Tự quyết, cần xác nhận:** ô ≈ VND để trống khi khoản là VND hoặc số bằng 0; trong bảng trượt chỉ thêm ≈ VND ở khối Giao dịch (theo ngày giao dịch), không thêm ở bảng đợt; hộp thoại Ghi giao dịch không có số VND; thẻ có cả Thu và Trả thì quy đổi riêng từng dòng.


Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KT01 · Công nợ và thu chi (KT01.1, KT01.2, KT01.3); chưa có RSD nên viết mới ở `docs/rsd/KT01/`; MD + PNG, không đóng ZIP | Toàn bộ |
| Q1 | Sửa giao dịch ghi nhầm | Không sửa số tiền, không xóa; Hủy giao dịch kèm lý do (giữ trong lịch sử, gạch ngang) rồi ghi lại; chỉ sửa ngày chứng từ, tệp, ghi chú | L0.3, R12, W11, W12, AC20–AC22 |
| Q2 | Loại tiền | Theo loại tiền gốc; giao dịch bắt buộc cùng loại tiền với khoản, không nhập tỷ giá; tổng tách theo loại tiền, không dòng quy đổi | R04, 2.1, E0.3, AC50 |
| Q3 | Phân bổ khoản thu, khách trả thừa | Tự phân bổ vào đợt chưa thu đủ sớm nhất, sửa được; phần vượt thành Tiền thừa (hoàn hoặc dùng cho đợt mới) | R06, L1.3, W05, W06, AC07–AC09 |
| Q4 | Phí khách chịu khi hủy Booking | Cần bảng chính sách hoàn hủy Booking ở phần Quản trị | R07, R16 |
| Q4a | Đặt chính sách ở đâu | Một nhóm trong QT05, bậc theo số ngày hủy trước khởi hành → % giữ lại | R16 |
| Q4b | Booking áp dụng chính sách nào | Chụp vào Booking lúc tạo; sửa chính sách sau đó không đổi Booking đã tạo | R07, E1.7 |
| Q4c | Kế toán có sửa phí giữ lại không | Điền sẵn theo chính sách; sửa được, bắt buộc lý do | L1.4, W07, W07a, AC11–AC13 |
| Q5 | Quyền xem của Kinh doanh, Điều hành | Xem mọi tab, chỉ xem; Kinh doanh chỉ dữ liệu Booking mình phụ trách | 1.4, R01, W15, AC27–AC29 |
| Q7 | Số quy đổi VND (12/11/2026, sau v1.0) | Cột ≈ VND + dòng ≈ tổng VND ở phần đầu; còn lại theo tỷ giá hôm nay, giao dịch theo tỷ giá ngày giao dịch; chỉ tham khảo | R04, 2.1, 2.4, E0.13, AC50, AC53, AC54 |
| Q6 | Dạng xem | Chỉ Bảng ở cả ba tab | 2.2, AC52 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Giá trị phải trả = giá NCC xác nhận × số lượng**, thiếu giá xác nhận thì giá tham chiếu (suy từ RSD DH08 AC16: Điều hành chỉ nhập giá xác nhận khi khác giá tham chiếu). Nguồn ghi “chờ đặc tả”. Kế toán sửa được kèm lý do.
2. **Phần đầu theo tab:** bốn thẻ đổi theo tab và bộ lọc (KT01.1 phải thu, KT01.2 phải trả, KT01.3 cả hai). Số trên tab là số việc cần xử lý.
3. ~~**Đến hạn = hạn trong 7 ngày tới**, dùng lại ngưỡng của RSD KD07 R04.~~ Đã thay ở v1.2: ngưỡng Đến hạn là tham số chung, người dùng chốt 12/11/2026.
4. **Hạn mặc định** cho khoản phải thu mới (sau hủy, phát sinh) và phải trả phát sinh không có hợp đồng: hôm nay + 14 ngày.
5. **Booking hủy chờ điều chỉnh:** các đợt chưa thu ngừng tính hạn và không cộng vào Còn phải thu cho tới khi Kế toán ghi điều chỉnh.
6. **Kết quả điều chỉnh sau hủy:** khoản Phí hủy thay các đợt cũ; Đã thu − Phí giữ lại → Cần hoàn hoặc Còn phải thu; hủy sau ngày khởi hành áp dụng bậc thấp nhất.
7. **Sửa điều chỉnh sau hủy** được, kèm lý do, khi chưa có giao dịch hoàn.
8. **Tiền thừa không tự phân bổ**; khi Booking có đợt mới, Kế toán bấm Dùng tiền thừa trên banner Tiền thừa (v1.2: thao tác phân bổ lại, không phải giao dịch).
9. **Mã giao dịch** `GD-YYMM-NNNN`, không dùng lại.
10. **Chứng từ:** số chứng từ bắt buộc mọi giao dịch; tệp bắt buộc khi tiền ra (Hoàn cho khách, Chi trả NCC). Trùng số chứng từ chỉ cảnh báo. Ngày giao dịch không sau hôm nay, được lùi ngày.
11. **Ghi chi trả nhiều khoản** chỉ cùng NCC, cùng loại tiền; phân bổ ưu tiên khoản quá hạn rồi hạn sớm nhất; không cho trả vượt.
12. **Phí hủy NCC** của dịch vụ đã ghi phải trả không chọn hàng loạt; mở form điều chỉnh giá trị = phí hủy; đã trả vượt → Phải nhận hoàn. Hủy không phí cũng vào Chờ ghi phải trả với giá trị mới 0.
13. **Hợp đồng thiếu điều khoản thanh toán** hoặc không có hợp đồng áp dụng: một đợt 100%, Kế toán nhập hạn.
14. **Lịch thanh toán đổi ở KD08:** KT01 thay nghĩa vụ ngay, banner trong bảng trượt 7 ngày, không cần xác nhận.
15. **Quản trị hệ thống xem mọi tab, chỉ xem** (theo KD07, KD08).
16. **KT01.3 chip Chưa quyết toán:** nút Mở quyết toán trên dòng mở DH08.8; bấm dòng vẫn mở công nợ của Tour (nguồn ghi “chọn dòng để mở DH08.8”, đổi để giữ một hành vi bấm dòng cho cả tab).
17. **Nút Ghi giao dịch ở phần đầu** điền sẵn Tour khi đang xem công nợ của một Tour.
18. **Giao dịch sau khi đóng Tour** có nhãn Sau đóng Tour.
19. **Phương thức thanh toán** là danh mục QT05 mới (Chuyển khoản, Tiền mặt, Thẻ, Bù trừ).
20. **Chi phí phát sinh không có NCC:** phải trả cho “Người chi khác” (ghi tên) hoặc tắt phải trả.
21. **Ngoài phạm vi:** xuất Excel, kỳ khóa sổ, hạch toán tài khoản, hóa đơn.

## Thay đổi cần làm ở màn khác

- **QT05 · Danh mục dùng chung.** Thêm nhóm **Chính sách hoàn hủy Booking** (tên, loại Tour áp dụng, mặc định, các bậc “từ N ngày trước khởi hành → giữ lại X%”, cho phép sử dụng; có phiên bản). Thêm nhóm **Phương thức thanh toán**. Cần RSD cho phần này (hoặc bổ sung vào RSD QT05 khi viết).
- **RSD KD08 (nâng v1.2).** Khi tạo Booking, chụp chính sách hoàn hủy (theo loại Tour, không có thì mặc định) vào Booking; hiện tên chính sách và các bậc ở KD08.2 cạnh điều khoản thanh toán; hộp thoại Hủy Booking có thể nêu phí giữ lại dự kiến theo chính sách. KD08 R10 dẫn tới RSD KT01 R07.
- **RSD KD07.** Không đổi cấu trúc; kết quả Đã điều chỉnh đọc theo KT01 R07 (Còn phải thu, Cần hoàn, Không còn phải thu). Có thể thêm Tiền thừa vào cột Còn phải thu nếu cần.
- **RSD DH08.** Đã nâng v2.3 ngày 12/11/2026: phần đầu theo loại tiền gốc; R15 quy đổi theo tỷ giá ngày giao dịch (người dùng chốt); Hủy không phí vào KT01.2; số liệu TP-2611-0042 khớp KT01. Còn khác: tên NCC minh họa ở DH08.3 (xem GHI-CHU của DH08).
- **RSD DH07.** Không đổi; hủy khoản thu không ảnh hưởng hồ sơ đã tạo (E1.6) khớp KT01 R12.
- **RSD DH03.** Không đổi; KT01 đọc thông tin nhận thanh toán, điều khoản thanh toán theo R02, R10.
- **QT02.** Quyền “ghi giao dịch” tách theo KT01.1, KT01.2, KT01.3; mặc định chỉ Kế toán.
- **QT10.** Đọc khoản, đợt, giao dịch, tình trạng theo R03, R04 (không quy đổi).
- **Danh sách màn (KT01).** Bỏ “chờ đặc tả” ở KT01.2 (giá trị phải trả theo R08); KT01.1 thêm điều chỉnh theo chính sách hoàn hủy và Tiền thừa; KT01.3 ghi rõ nút Mở quyết toán.

## Kiểm tra đã chạy

- `node wireframes-src/check-rsd.js RSD-KT01-Cong-no-va-thu-chi-v1.1.md --final`: exit 0; 30 ảnh nhúng, 30 mã W, mỗi ảnh nhúng một lần.
- `sync-md.js`: tên hình khớp `captions.js`.
- Đã xem lại ảnh W01, W02, W03, W06, W07, W07a, W08, W09, W11, W13, W14, W15, W16, W17, W18, W20, W21, W22, W23, W24, W25, W26, W27, W28 sau khi chụp; sửa tràn chữ ở W01 (cột mã), W07, W07a, W26 (bảng trượt rộng hơn), thông báo ngắn che nút chân bảng trượt.
- Số liệu đã đối chiếu: tổng chip = Tất cả ở W01 (10), W15 (5), W17 và W19 (5, 8 khoản), W24 (6); thẻ phần đầu cộng đúng theo loại tiền ở W01, W08, W17, W19, W21, W23, W24; Booking khớp KD07, KD08.
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích; ảnh W04, W05, W10, W12, W19, W29 chưa mở xem riêng (dựng từ cùng thành phần với các ảnh đã xem).

## 12/11/2026 · v1.4 · rà soát lần hai

**Đã sửa (tệp mới `RSD-KT01-Cong-no-va-thu-chi-v1.4.md`, đã xóa v1.3):**
- **Tỷ giá (mức cao).** E0.13 và AC54 cũ ghi “Chưa có tỷ giá” ngay khi ngày cần quy đổi chưa có tỷ giá, trái quyết định “Tỷ giá có hiệu lực” (BOI-CANH; RSD QT05 R13). Sửa 2.4, E0.13, R04: dùng tỷ giá của ngày gần nhất ≤ ngày cần, ghi ngày lấy tỷ giá; chỉ “Chưa có tỷ giá” khi không có ngày nào trước đó. AC54 viết lại theo dữ liệu minh họa (22/10 JPY 171): BK-2611-0144 2.016.000 JPY ≈ 344.736.000 ₫, tổng ≈ 3.278.968.120 ₫. Thêm AC60 (không có ngày nào: Chưa có tỷ giá, tổng ≈ 2.934.232.120 ₫ chưa gồm JPY). R16: bảng tỷ giá thuộc QT05, Kế toán nhập.
- **Tiền thừa.** KT01 cũ xếp Booking có Tiền thừa vào tình trạng Cần hoàn, còn RSD KD07 R04 (đọc tình trạng từ KT01) hiện Đã thu đủ kèm chỉ báo Tiền thừa. Thống nhất phía KT01, không sửa KD07: tình trạng của Booking có Tiền thừa theo các đợt (mọi đợt thu đủ thì Đã tất toán = KD07 Đã thu đủ) kèm chỉ báo Tiền thừa; tình trạng Cần hoàn chỉ cho Booking đã điều chỉnh sau hủy có Cần hoàn > 0. Chip Cần hoàn ở KT01.1 là bộ lọc việc (Cần hoàn sau điều chỉnh + Tiền thừa chưa xử lý), không phải tình trạng; Booking có Tiền thừa nằm ở cả chip tình trạng và chip Cần hoàn. Sửa 2.1 (Tab), 2.3, L1.3 bước 2, R03 (thêm đoạn Chip ở KT01.1, số trên tab), AC08; thêm AC61.
- **DH07 đọc số đã thu.** v1.3 đã bỏ DH07 khỏi màn đọc KT01, nhưng DH07 v1.5/v1.6 vẫn hiện số đã thu (tham khảo) ở W08. Thêm lại DH07 ở 1.1 và 5.1 (Số liệu công nợ của Booking); DH07 không nhận sự kiện R13.
- Nguồn nghiệp vụ: KD08 v1.4, KD06 v1.4, DH03 v1.3, DH07 v1.6, DH08 v2.6, thêm QT05 v1.1.

**Số minh họa đợt 2 BK-2610-0137:** KT01 nhất quán với 26.894 EUR (giá trị 38.420 EUR − đợt 1 11.526 EUR = 26.894; AC05 đã thu 38.420 EUR; W01–W04, W12, AC04, AC21, AC53; KD07 AC36 cũng 26.894). DH08 AC31 ghi 26.849 EUR là lỗi gõ ở DH08 (ngoài phạm vi, chưa sửa).

**Tự quyết, cần xác nhận:** tổng các chip KT01.1 không còn bằng Tất cả khi có Booking Tiền thừa (Booking đó đếm ở hai chip); số trên tab đếm Booking khác nhau. Thẻ “Cần hoàn” ở phần đầu giữ nguyên nội dung (chưa cộng Tiền thừa).

**Wireframe:** sửa `screens-kt01.js` (dòng chân danh sách W09 ghi rõ chip Cần hoàn là bộ lọc việc); dựng lại W09. Các hình khác không hiện Tiền thừa như tình trạng (W06 bảng trượt đã ghi Đã tất toán kèm Tiền thừa) nên không dựng lại. `check-rsd.js --final`: 30 ảnh, 30 mã W, đạt.

## 12/11/2026 · v1.5 · rà soát mâu thuẫn lần ba

**Đã sửa (tệp mới `RSD-KT01-Cong-no-va-thu-chi-v1.5.md`, đã xóa v1.4):**
- **Loại tiền khoản phải trả (quyết định C).** R04 bỏ “suy ra, chờ xác nhận” ở câu phí hủy theo loại tiền của khoản đã có; thêm câu KT01 không đổi loại tiền, chỉ điều chỉnh giá trị. R09 đã đúng, không sửa.
- **Đợt Số tiền khác loại tiền (quyết định F, RSD DH03 R10).** R08 (lịch trả) và R11: đợt Tỷ lệ điền sẵn; đợt Số tiền để trống số tiền, ô vàng kèm cảnh báo, Kế toán nhập; đợt Phần còn lại tính lại sau khi nhập (tự quyết: DH03 R10 ghi Phần còn lại vẫn điền sẵn, nhưng số của nó phụ thuộc đợt Số tiền nên chỉ đúng sau khi nhập). Không có hình minh họa trường hợp này (dữ liệu W18 cùng loại tiền), không thêm hình.
- **Chính sách hoàn hủy.** KD08 R03 và QT05 R06: Chính sách mặc định là giá trị hệ thống, luôn có, nên mọi Booking mới có bản chụp. Bỏ nhánh “không có chính sách mặc định thì nhập tay” ở E1.7, R16; R07, AC18 ghi rõ chỉ dữ liệu cũ hoặc bản chụp lỗi mới thiếu.
- **Giá xác nhận.** RSD DH08 5.2 bắt buộc nhập giá khi ghi kết quả (điền sẵn giá tham chiếu) nên R08 bỏ nhánh “không có giá xác nhận thì giá tham chiếu”; E2.1 và R16 chỉ còn trường hợp dữ liệu cũ hoặc lỗi. Chân danh sách Chờ ghi phải trả (W17) bỏ câu “thiếu giá xác nhận thì giá tham chiếu”; dựng lại W17, W18, W22 vì cùng dùng `pendTbl`.
- **Mở lại hồ sơ Tour (E3.8).** Theo RSD DH08 v2.8 R16 (BOI-CANH): Điều hành phụ trách, hoặc Quản trị khi hồ sơ không có người phụ trách hoặc người đó ngừng hoạt động.
- **Phương thức thanh toán.** QT05: nhóm không có giá trị hệ thống (1.2), không thuộc nhóm bắt buộc (R05), giá trị minh họa không tự tạo (R20). Chọn sửa KT01, không sửa QT05 (ít đổi nhất, không cần thêm giá trị hệ thống): R15 ghi bốn giá trị là minh họa; R16 danh mục trống thì giao dịch lưu không có phương thức, ô ghi “Chưa có phương thức thanh toán · thêm ở QT05”; 5.2 Phương thức bắt buộc khi danh mục có giá trị, mặc định giá trị đầu tiên Đang dùng. Còn lại: trường Tài khoản nhận hoàn bắt buộc “khi phương thức Chuyển khoản” vẫn dựa vào tên giá trị; giữ nguyên, cần xác nhận nếu danh mục không có Chuyển khoản.
- **Lối vào KD08 (1.2)** theo RSD KD08 1.2: KT01.1 mở KD08.1, riêng Kế toán mở KD08.2.
- **QT07** thêm vào màn đọc KT01 (1.1, 5.1 Khoản công nợ và Giao dịch); 5.1 Giao dịch ghi thêm QT10 đọc (theo RSD QT06-QT12 mục 5).
- Dẫn phiên bản theo bảng phiên bản mới (KD07 v1.3, KD08 v1.5, KD06 v1.5, DH03 v1.4, DH07 v1.7, DH08 v2.8, QT05 v1.2). Các mục “Thay đổi ở v…” cũ giữ nguyên.

**Kiểm tra:** `node sync-md.js`, `node wireframes-src/check-rsd.js RSD-KT01-Cong-no-va-thu-chi-v1.5.md --final`: 30 ảnh, 30 mã W, đạt. Đã xem lại W17.

## Sửa sau rà chéo 12/11/2026

- **Quyết định 2 (người dùng chốt 12/11/2026).** Không gửi thông báo cho Kế toán khi có dịch vụ chờ ghi phải trả; Kế toán theo dõi bằng chip Chờ ghi phải trả và thẻ VT-KT-05 của RSD CH03. Sửa mục 5.3 (bỏ “dịch vụ chờ ghi phải trả” khỏi danh sách thông báo).
- **L3.4, AC49 thống nhất với R03.** Chip Chưa quyết toán không gồm Tour còn chi phí phát sinh Chưa ghi công nợ; Tour đó ở chip Chờ ghi phát sinh vì mỗi Tour thuộc đúng một chip theo thứ tự ưu tiên của R03.
- **Mục 1.2.** Dòng Thông báo → KT01.1 dẫn RSD CH02 R07 và các mã TB; ghi rõ thông báo chi phí thực tế mở DH08.8. Không đổi nơi mở.
- **Kiểm tra.** `check-rsd.py`: 30 ảnh, 30 mã W, không lỗi.

## Quyết định rà soát 13/11/2026

- **Quyết định rà soát 13/11/2026 (Q-RS20).** Bỏ chặn Ghi khoản thu khi Booking đã tất toán (“Không còn khoản phải thu”) và khi Booking đã hủy chưa điều chỉnh (Chờ điều chỉnh): ghi được, phần vượt phải thu vào Tiền thừa. Booking Chờ điều chỉnh: các đợt đang tạm dừng không nhận phân bổ, nên cả khoản thu là Tiền thừa; điều chỉnh sau hủy tính Tiền thừa cùng loại tiền vào Đã thu (E1.6 đã có). Tự quyết: hộp thoại không điền sẵn số tiền khi không còn đợt phải thu; Booking chưa có lịch thanh toán vẫn khóa (E1.1, quyết định không nhắc). Sửa đầu tài liệu, L1.2, L1.3 bước 2, R06, R07; thêm E1.15, AC63, AC64; sửa AC08. Wireframe W06 (dòng “Ghi khoản thu khóa”) chưa vẽ lại.
- **Quyết định rà soát 13/11/2026 (Q-RS26).** R07: số ngày tính tới ngày khởi hành của Booking (phiên bản hiện hành lúc hủy), không phải của hồ sơ Tour khi thay đổi chương trình chưa áp dụng; % tính trên giá trị Booking, không trên tổng các đợt. Sửa L1.4 bước 1, R07; thêm AC65 (BK-2610-0137 sau Chuyển sang Điều hành v4: 7 ngày, 75 %, 42.680 × 75 % = 32.010,00 EUR; đã thu 11.526 EUR → Còn phải thu 20.484,00 EUR).

## Cách hiểu đã chọn khi làm phải thu từ lịch thanh toán (ticket 51, 17/11/2026)

- **Banner “lịch vừa đổi” (L1.6, W16, R05).** Hiện 7 ngày kể từ lần Kinh doanh sửa lịch đã có (đợt đổi hạn, số tiền, điều khoản, thêm, xóa); lần lưu đầu (lập lịch) không có banner vì chưa có nghĩa vụ cũ để so. Chuyển sang Điều hành không đổi lịch nên không có banner (AC57).
- **Lịch lệch giá trị (E1.3).** Bảng trượt ghi lịch thiếu hoặc thừa so với giá trị Booking, kèm lý do Kinh doanh đã lưu.
- **Đã thu của đợt (R02).** Tính lúc đọc từ phân bổ của giao dịch Hiệu lực theo mã Booking + số đợt (bảng `ledger_allocations`); ticket 52 ghi khoản thu vào đây. Đợt bị thay khi lưu lịch mới giữ phân bổ theo số đợt.
- **Thẻ phần đầu (2.1).** Tính trên các Booking khớp bộ lọc (không theo chip), bỏ Booking chưa có lịch (E1.1) và Booking đã hủy (các đợt tạm dừng, R07). Ticket này dựng ba thẻ Còn phải thu, Đến hạn trong N ngày, Quá hạn; thẻ Cần hoàn, ≈ VND, tab Phải trả và Công nợ theo Tour là của ticket 79–84.
- **Mở từ KD08.2 hoặc thông báo (L1.1).** `/ledger?tab=receivables&bookingCode=<mã>`: danh sách lọc theo Booking, bảng trượt mở sẵn; đóng bảng trượt thì về danh sách đầy đủ. Không có `mine` trên URL và không lọc theo Booking thì Của tôi theo vai trò (bật với Kinh doanh, R01) và được ghi lên URL.

## Cách hiểu đã chọn khi làm ghi khoản thu (ticket 52, 17/11/2026)

- **Trùng số chứng từ (E0.2, R15).** “Cùng đối tượng” với khoản thu là cùng khách hàng: cảnh báo khi một giao dịch Hiệu lực khác của bất kỳ Booking nào của khách đó có đúng số chứng từ (sau khi bỏ khoảng trắng hai đầu). Lần gửi đầu trả 422 `DUPLICATE_DOCUMENT_WARNING { transaction: { code } }` (giao dịch ghi sớm nhất); gửi lại với `acknowledgeDuplicateDocument: true` thì lưu.
- **Khoản đổi ở phiên khác (E0.7).** Phiên bản của khoản (`ledger_items.version`) tăng ở mỗi lần lưu lịch, ghi khoản thu, hủy giao dịch; hộp thoại gửi phiên bản đã tải, lệch thì 409 `RECEIVABLE_CHANGED { outstanding }` (còn phải thu hiện tại). Ghi khoản thu, hủy giao dịch và lưu lịch ở KD08 nối tiếp nhau trên dòng Booking, nên KD08 R07 luôn so với số đã thu lúc lưu.
- **Phân bổ do Kế toán sửa (R06, E0.1).** Mỗi dòng là một đợt còn nợ của Booking (tối đa số còn của đợt) hoặc dòng Tiền thừa; dòng Tiền thừa chỉ nhận phần số tiền vượt tổng còn phải thu (không dồn tiền vào Tiền thừa khi đợt còn nợ); tổng các dòng bằng số tiền. Booking Đã hủy (chờ điều chỉnh): các đợt tạm dừng nên toàn bộ khoản thu là Tiền thừa (E1.15).
- **Phương thức (R15, R16, 5.2).** Bắt buộc khi danh mục QT05 “Phương thức thanh toán” có giá trị Đang dùng; danh mục trống thì lưu không có phương thức.
- **Hộp thoại từ phần đầu (L0.2, W13).** Ticket này chỉ có loại Thu từ khách; ba loại còn lại hiện mờ tới ticket 79, 82. Tệp chứng từ (không bắt buộc với khoản thu) và Sửa chứng từ, ghi chú là của ticket 79.

## Cách hiểu đã chọn khi làm tiền thừa, khoản phát sinh, hủy giao dịch (ticket 79, 17/11/2026)

- **Tiền thừa (R06, Q18).** Là phần dòng Tiền thừa của các khoản thu Hiệu lực trừ phần các giao dịch Hoàn cho khách Hiệu lực đã hoàn từ khoản thu đó, tính theo từng loại tiền. Bảng trượt hiện một dòng mỗi loại tiền, “từ GD-…” là khoản thu gần nhất còn giữ tiền thừa của loại tiền đó. Dùng tiền thừa và hoàn tiền thừa lấy từ khoản thu cũ nhất trước.
- **Dùng tiền thừa (L1.3 bước 3, R06, R12).** Không tạo giao dịch: dòng Tiền thừa của khoản thu nguồn giảm, khoản thu đó có thêm dòng phân bổ vào đợt (đánh dấu “dùng tiền thừa”, người, lúc). Vì vậy hủy khoản thu nguồn thì phần đã dùng mất theo, đợt nhận trở lại số còn trước đó; hộp thoại Hủy giao dịch nêu đợt bị ảnh hưởng. Lịch sử của Booking ở KT01 (2.4) gồm ghi khoản thu, ghi hoàn, hủy giao dịch, dùng tiền thừa (kèm giao dịch nguồn). Dòng nhận khác loại tiền với tiền thừa: 422 `OVERPAYMENT_CURRENCY_MISMATCH`.
- **Hoàn tiền thừa (L1.5, E0.4, E0.10).** Số tối đa là tiền thừa của loại tiền (Cần hoàn sau điều chỉnh cộng thêm ở ticket 80). Tệp chứng từ bắt buộc. “Tài khoản nhận hoàn điền theo lần nhận tiền gần nhất”: khoản thu không ghi tài khoản của khách, nên lấy tài khoản của lần hoàn gần nhất cho cùng khách (lần khách nhận tiền gần nhất), không có thì để trống; chỉ người có KT01.xem-tai-khoan-nhan-hoan thấy.
- **Khoản phải thu phát sinh (R11, E1.14).** Ghi qua `POST /api/ledger/tour-costs` (đường của L3.2, ticket 82): mỗi chi phí phát sinh tối đa một khoản phải thu riêng, loại tiền của chi phí, một đợt hạn hôm nay + 14 ngày. Phần Phải trả của khối điền sẵn theo R11 (bật khi có NCC) nhưng chưa ghi được tới khi có phải trả NCC (ticket 81): lưu khi bật Phải trả trả 422 `PAYABLES_UNAVAILABLE`. Khoản phát sinh tính vào tình trạng dòng Booking và thẻ phần đầu như đợt, theo loại tiền của nó.
- **Ghi khoản thu nhiều loại tiền (E1.14).** Hộp thoại mặc định loại tiền Booking; khi còn phải thu nhiều loại tiền thì có ô chọn, chọn xong đọc lại hộp thoại với loại tiền đó và khóa. Loại tiền nhận được là loại tiền Booking và loại tiền của các khoản phát sinh của Booking.
- **Hủy giao dịch (L0.3).** Nút Hủy giao dịch màu đỏ theo chữ RSD (“đỏ”), khác quy ước nút xác nhận xanh của CGD U2.04. Sửa chứng từ và ghi chú (R12) chỉ trên giao dịch Hiệu lực; trường khác gửi lên bị từ chối từng trường `ledger.errors.notEditable`.
- **Chip Cần hoàn và số trên tab (R03).** Chip là bộ lọc việc: Booking có tiền thừa (ticket 80 thêm Booking có tình trạng Cần hoàn). Số trên tab đếm Booking khác nhau ở Quá hạn, Chờ điều chỉnh, Cần hoàn trên mọi Booking, như nhau với mọi người xem; đỏ khi có Quá hạn.

## Cách hiểu đã chọn khi làm điều chỉnh sau hủy và hoàn tiền (ticket 80, 18/11/2026)

- **Đợt của Booking Chờ điều chỉnh (R07, L1.4).** Bảng tình trạng 2.5 ghi Hết hiệu lực chỉ có sau điều chỉnh, nên trước khi lưu các đợt chưa thu đủ hiện “Tạm dừng” (chữ của banner W07 “tạm dừng tính hạn”), đợt đã thu đủ giữ Đã thu đủ. Hình W07 vẽ Hết hiệu lực ở bảng “Trước khi hủy”: chữ RSD thắng.
- **Phân bổ lại vào khoản Phí hủy (R07 “Ghi”).** Mọi tiền đã thu của Booking cùng loại tiền (phân bổ vào đợt, Tiền thừa chưa hoàn của các khoản thu, E1.6, Q-RS20) chuyển vào khoản Phí hủy, khoản thu cũ nhất trước, tới hết phí; phần còn lại của mỗi khoản thu là **Cần hoàn**, giữ trên chính khoản thu đó và tách khỏi Tiền thừa. Phần Tiền thừa đã hoàn trước khi hủy không chuyển. Phân bổ vào khoản phát sinh (R11) giữ nguyên. Hủy khoản thu sau đó thì phần của nó ở Phí hủy và ở Cần hoàn mất theo (R12).
- **Hoàn cho khách (L1.5, E0.4).** Lấy Cần hoàn trước, rồi Tiền thừa, cùng loại tiền, khoản thu cũ nhất trước; tối đa = Cần hoàn + Tiền thừa của loại tiền. Không tạo email, không lệnh chuyển tiền.
- **Sau điều chỉnh.** Khoản Phí hủy (một đợt, hạn đã nhập) nhận khoản thu như một đợt (Ghi khoản thu ở chân W08), phần vượt vào Tiền thừa (E1.15); khoản Phí hủy tính vào tình trạng dòng, thẻ Còn phải thu như đợt. Kết quả ở KT01.1 và KD07 (“Đã điều chỉnh · Còn phải thu …”, “Cần hoàn …”, “Không còn phải thu”) tính lúc đọc từ khoản Phí hủy và Cần hoàn còn lại, không theo số lúc lưu; ghi hoàn đủ thì Booking Đã tất toán. KD07 lọc Còn phải thu gồm Booking đã điều chỉnh còn phải thu, không gồm Cần hoàn (KD07 R04).
- **Tình trạng Cần hoàn (R03).** Đứng sau Quá hạn và Chờ điều chỉnh; dòng Booking ghi số âm ở Còn phải thu kèm nhãn Cần hoàn (W09). Booking có tình trạng Cần hoàn đếm một lần ở chip Cần hoàn dù có cả Tiền thừa.
- **Thẻ “Cần hoàn” ở phần đầu (2.1).** Chỉ cộng Cần hoàn sau điều chỉnh, không cộng Tiền thừa (đúng ghi chú v1.4 ở trên “chưa cộng Tiền thừa”); ticket 79 đã tạm cộng Tiền thừa vào thẻ này, ticket 80 sửa lại.
- **Sửa điều chỉnh (E1.9).** Mở lại form với phí, hạn, ghi chú đã lưu; “Lý do sửa” bắt buộc; lưu thì phân bổ lại toàn bộ theo phí mới (Tiền thừa cùng loại tiền phát sinh sau đó cũng tính vào Đã thu, E1.6). Lịch sử giữ mọi lần lưu, sửa (phí, kết quả, lý do, ghi chú). Có giao dịch Hoàn cho khách Hiệu lực thì 422 `REFUND_RECORDED { refund }`.
- **Hai Kế toán (E1.11).** Lưu khi đã có điều chỉnh, hoặc khi công nợ của Booking đã đổi sau khi mở form (khoản thu mới…), trả 409 `ADJUSTMENT_CHANGED { current }` (điều chỉnh đã lưu, hoặc form như đọc lại bây giờ); form hiện banner với nút Tải lại.
- **Phí giữ lại và hạn (E1.10, R07).** 0 ≤ phí ≤ giá trị Booking, không quá số chữ số thập phân của loại tiền; lý do khi khác số theo chính sách (API trả khóa dùng chung `ledger.errors.reasonRequired` như hợp đồng, màn hiện chữ riêng “Nhập lý do khác chính sách”). Hạn thu không trước hôm nay.
- **Không có bản chụp (E1.7, AC18).** Bản chụp không có bậc nào (dữ liệu cũ, lỗi) thì dùng chính sách mặc định (khóa hệ thống `DEFAULT`), phiên bản hiện hành; nhãn Theo chính sách mặc định. Kiểm bằng rà code (ADR 0010).
- **Hộp thoại xác nhận (CGD U2.01, quyết định điều phối 13/11).** Lưu điều chỉnh và Lưu giao dịch hoàn là nút cuối của form, không thêm hộp thoại. Hộp thoại Ghi giao dịch nằm cạnh bảng trượt (không lồng trong bảng trượt) để là hộp thoại riêng.

## Cách hiểu đã chọn khi làm phải trả NCC (ticket 81, 18/11/2026)

- **Chờ ghi phải trả (R08, R09, 5.3).** Tính lúc đọc từ lần đặt ở DH08.3, không có thông báo: lần đặt Đã xác nhận (kể cả một phần) chưa có khoản, giá trị = giá xác nhận × số lượng xác nhận × số đêm của hạng mục, cộng từng dịch vụ đi kèm cùng cách (R21); lần đặt NCC chấp nhận hủy có phí > 0 chưa có khoản (có ô chọn, E2.12); lần đặt đã có khoản mà NCC chấp nhận hủy (có phí: dòng Phí hủy; không phí: dòng Hủy không phí, giá trị 0) cho tới khi khoản được điều chỉnh theo lần hủy đó (không có ô chọn, mở bảng trượt khoản). Khoản tạo từ chính phí hủy không sinh dòng Phí hủy nữa. Cột “Xác nhận” của dòng hủy là lúc và người ghi kết quả hủy ở DH08.3 (cột mới `cancellation_answered_by_id`).
- **Lịch trả điền sẵn (R08).** Hợp đồng áp dụng là hợp đồng của NCC chứa ngày sử dụng và có dòng giá của dịch vụ (không có thì hợp đồng bất kỳ chứa ngày đó; không có nữa thì E2.3). Mốc “Sau khi NCC xác nhận” là ngày ghi kết quả ở DH08.3 (dòng phí hủy: ngày ghi kết quả hủy). Đợt Tỷ lệ làm tròn half-up theo đơn vị nhỏ nhất của loại tiền; Phần còn lại = giá trị − các đợt khác. Không có điều khoản: một đợt bằng cả giá trị, hạn để trống, đếm vào `errorCount`. Tên đợt lấy từ điều khoản của hợp đồng; đợt không có tên hiện “Đợt n”. Điều khoản của từng đợt lưu kèm đợt (cột `rule`), chỉ người có Xem thông tin thanh toán NCC thấy (R01).
- **Lưu nhiều khoản (E2.5, AC34, AC36).** Một lần bấm là một bản ghi QT03 (kèm danh sách khoản trong `batch` khi nhiều dịch vụ); dịch vụ đã có khoản báo `ALREADY_RECORDED` kèm người, lúc ghi; dịch vụ không còn chờ (đã hủy, E2.6) báo `NOT_AWAITING`; lỗi nhập ở bất kỳ khối nào thì không lưu khối nào (400 theo `items.<i>.…`).
- **Điều chỉnh (R09, L2.4).** Giá trị tăng cộng vào đợt có hạn muộn nhất; giá trị giảm trừ phần chưa trả của các đợt từ hạn muộn nhất, hết thì trừ tiếp phần đã trả (từ hạn muộn nhất), để tổng các đợt luôn bằng giá trị; đã trả > giá trị mới thì phần chênh là Phải nhận hoàn. Lý do tự điền khi điều chỉnh theo lần hủy ở DH08.3 là khóa ngôn ngữ kèm dữ liệu (`{ key, params }`, ADR 0008), màn hình hiện thành chữ; chỉ máy chủ ghi khóa này: máy khách giữ nguyên lý do tự điền thì không gửi lý do, Kế toán sửa lý do thì gửi và lưu chữ đã nhập (máy khách gửi `{ key, params }` bị từ chối `ledger.errors.reasonRequired`). Lần điều chỉnh có nguồn Phí hủy NCC / Hủy không phí áp lần hủy đang chờ của khoản (dòng chờ ra khỏi chip); không có lần hủy chờ thì từ chối `ledger.errors.nothingToApply`.
- **Chi trả NCC (R10, E2.7).** “Khoản quá hạn trước” hiểu ở mức khoản (sửa sau review 18/11/2026, chữ R10 “khoản quá hạn trước, rồi hạn tăng dần; trong một khoản, đợt hạn sớm trước”): khoản có đợt hạn trước hôm nay đứng trước, rồi các khoản theo hạn sớm nhất của khoản; trong một khoản, đợt hạn sớm trước (cùng hạn thì số đợt nhỏ trước). Phương thức bắt buộc khi danh mục QT05 có giá trị, như khoản thu. Kiểm theo thứ tự: tệp (400), khoản lẫn NCC hoặc loại tiền (422), phiên bản khoản (409 `PAYABLE_CHANGED` nêu số còn của mọi khoản đã chọn), loại tiền (422 `CURRENCY_MISMATCH`), số tiền vượt tổng còn (422 `AMOUNT_ABOVE_MAXIMUM`). Thông tin nhận thanh toán của NCC chép vào giao dịch lúc ghi (`paymentDetails`).
- **Nhận hoàn từ NCC (R09).** Tối đa bằng Phải nhận hoàn; tệp không bắt buộc (R15); giao dịch không phân bổ vào đợt mà trừ vào “đã trả” của khoản.
- **Phải trả từ chi phí phát sinh (R11, thay `PAYABLES_UNAVAILABLE` của ticket 79).** Khối bật Phải trả tạo khoản phải trả cho NCC của chi phí (hoặc NCC gửi lên), loại tiền của chi phí, các đợt gửi lên hoặc điền sẵn (một đợt hôm nay + 14 ngày). R11 “tối đa một khoản phải trả và một khoản phải thu” xét từng phía (sửa sau review 18/11/2026): phía đã ghi thì bị bỏ qua và báo người, lúc ghi (E3.2), phía kia vẫn ghi; bảng trượt không bật sẵn phía đã ghi. (Ticket 82 sửa sau review: khối hỏi một phía vừa được ghi ở phiên khác bị bỏ cả khối, xem mục ticket 82.) Điền lịch trả theo điều khoản hợp đồng cho chi phí phát sinh để ticket 82.
- **Màn KT01.2.** Tab Phải thu và Phải trả là thanh tab dùng chung (`ledger-route.tsx`), số trên tab như nhau với mọi người xem (R03); tab không có quyền xem thì không hiện. Nút Ghi giao dịch ở phần đầu (W13 với hai loại của NCC) chưa có ở tab Phải trả: chi trả qua thanh hàng loạt hoặc chân bảng trượt khoản (2.4). Cột và dòng ≈ VND của KT01.2 để ticket 83.
- **Hủy giao dịch NCC.** Đi qua đường hủy giao dịch chung (ticket 79); hủy thì phiên bản các khoản phải trả liên quan tăng (E2.7). Nhãn “Sau đóng Tour” của giao dịch NCC là ticket 82.

## Cách hiểu đã chọn khi sửa sau review (ticket 80, 81; 18/11/2026)

- **DH08.3 ghi lại kết quả sau khi đã có khoản phải trả (E2.13, R04; RSD DH08 R10).** Đọc để mọi câu cùng đúng: DH08 R10 “chỉ cho sửa ghi chú và mã” là không cho *sửa* kết quả đã liên kết; còn câu trả lời của NCC cho một lần điều chỉnh đã gửi (DH08 L3.11, sau thay đổi chuyến bay, chương trình…) là kết quả mới của NCC và vẫn ghi ở DH08.3. Khi đó loại tiền khóa theo khoản phải trả (máy chủ từ chối 400 `price.currency: serviceBookings.errors.priceCurrencyLocked`, như khóa loại tiền phí hủy); giá hoặc số lượng mới không tự đổi khoản mà vào Chờ ghi phải trả thành dòng “Giá xác nhận đổi” (`VALUE_CHANGED`, không ô chọn) mở bảng trượt khoản với form điều chỉnh điền sẵn giá trị xác nhận mới và lý do tự điền (nguồn `CONFIRMED_VALUE_CHANGED`), đúng E2.13 “thay đổi số lượng, giá… làm ở KT01 bằng điều chỉnh (L2.4)”. Khoản nhớ giá trị xác nhận nó đang theo (cột `confirmed_value`, đặt khi ghi khoản từ xác nhận, cập nhật khi lưu điều chỉnh nguồn này); dòng hiện khi giá trị xác nhận hiện tại khác số đó. Không có chỉ báo phụ (2.3 chỉ nêu Phí hủy chờ ghi).
- **Giá xác nhận vừa đổi khi đang ghi phải trả (E2.5).** Mỗi khối gửi kèm giá trị đã tải (`prefilledValue`); khác giá trị xác nhận lúc lưu thì khối đó bị từ chối (`PRICE_CHANGED` kèm giá trị mới), các khối khác vẫn lưu. Bảng trượt giữ lại khối bị từ chối với banner giá mới và nút Dùng giá mới (tải lại khối theo DH08.3 bây giờ).
- **Thiếu giá xác nhận (E2.1).** Lần đặt Đã xác nhận không tính được giá trị (dữ liệu cũ hoặc lỗi) vẫn vào Chờ ghi phải trả với giá trị trống (chữ đỏ “Thiếu giá xác nhận”); khối W18 để trống giá trị, bắt buộc nhập kèm lý do, đếm vào số lỗi. DH08.3 bắt buộc giá nên trường hợp này không tạo được qua hệ thống; kiểm bằng rà code (ADR 0010).
- **Phí hủy bằng giá trị khoản (L2.4).** Áp lần hủy có phí bằng đúng giá trị hiện tại vẫn lưu được (giá trị không đổi, lịch sử có lần điều chỉnh), dòng Phí hủy ra khỏi Chờ ghi phải trả. Điều chỉnh của Kế toán (nguồn Kế toán) với giá trị không đổi vẫn bị từ chối `ledger.errors.sameValue`.
- **Sửa điều chỉnh sau hạn (E1.9).** Hạn thu đã lưu được giữ nguyên dù đã qua; chỉ hạn đổi sang ngày khác mới phải không trước hôm nay. Không gửi hạn thì giữ hạn đã lưu. Bản ghi QT03 của lần sửa ghi kết quả trước (theo lần lưu, sửa gần nhất) và sau.
- **Booking hủy không có lịch thanh toán (R07, E1.1).** Sau điều chỉnh, Booking được thu theo khoản Phí hủy: không còn là Chưa có lịch, tình trạng và thẻ tính theo khoản Phí hủy, khoản thu phân bổ vào Phí hủy; KD07 đọc cùng cách.
- **QT03 của khoản phải trả.** Bản ghi ghi phải trả, điều chỉnh có đối tượng là hồ sơ Tour (mã Tour, tên NCC), dòng thay đổi và dòng `batch` gọi khoản là “Tour Code · dịch vụ”; phân bổ của chi trả NCC cũng vậy, không ghi mã định danh của khoản.

## Cách hiểu đã chọn khi làm công nợ theo Tour (ticket 82, 18/11/2026)

- **Tour ở KT01.3 (R03).** Liệt kê hồ sơ Tour có ít nhất một khoản (phải thu của Booking, phải trả của dịch vụ hoặc chi phí phát sinh) hoặc một chi phí phát sinh. Phải thu còn của Tour là số Còn phải thu của dòng Booking ở KT01.1 (cùng một cách tính), nên thẻ Phải thu còn của KT01.3 bằng thẻ của KT01.1 (AC43). Chip theo thứ tự R03; “Đã quyết toán” đọc từ trạng thái quyết toán của hồ sơ (DH08 R16, `settlementOf`): trước khi ticket 83 lưu được phiên bản quyết toán, mọi hồ sơ Đã kết thúc hoặc Đã đóng là Chưa quyết toán, banner Tour đã đóng chưa nêu phiên bản. Đã đóng · còn công nợ: còn phải thu, còn phải trả, Cần hoàn hoặc Phải nhận hoàn ≠ 0.
- **Thẻ và số trên tab.** Bốn thẻ tính theo bộ lọc (trạng thái hồ sơ, tìm), không theo chip, như KT01.1 (ticket 51); hình W29 vẽ thẻ theo chip. Thẻ Đến hạn, Quá hạn ghi dòng Thu, Trả riêng. Đang xem một Tour: thẻ của Tour đó, Phải thu còn ghi 0 theo loại tiền Booking khi không còn gì (E3.7). Số trên tab = số Tour còn chi phí phát sinh Chưa ghi công nợ.
- **Khoản của Tour (W25).** Lịch thanh toán của Booking là một dòng (“Booking … · n đợt”, như hình), khoản Phí hủy, từng khoản phải thu phát sinh, rồi từng khoản phải trả. Booking đã hủy chưa điều chỉnh: dòng lịch có tình trạng Tạm dừng (R07). Bấm khoản phải thu mở bảng trượt Booking (W02), khoản phải trả mở bảng trượt khoản (W22).
- **Sau đóng Tour (R14, E3.8).** Tính lúc đọc: giao dịch có thời điểm ghi sau lần đóng đầu của hồ sơ (DH08 R16 giữ ngày đóng lần đầu khi mở lại) mang nhãn; mở lại không bỏ nhãn. Khoản thu, hoàn theo hồ sơ của Booking; chi trả, nhận hoàn NCC theo hồ sơ của các khoản phải trả nó trả (một hồ sơ đã đóng trước đó là đủ ở KT01.1, KT01.2; ở KT01.3 xét đúng Tour đang xem). Nhãn hiện ở khối Giao dịch của KT01.3 và bảng giao dịch của hai bảng trượt.
- **Lịch trả của phải trả phát sinh (R11 “như R08”).** Hợp đồng áp dụng là hợp đồng của NCC chứa ngày phát sinh (bắt đầu muộn nhất); chi phí phát sinh không có dịch vụ nên không xét dòng giá. Mốc “Sau khi NCC xác nhận” và “Trước ngày sử dụng” tính từ ngày phát sinh, “Sau khi kết thúc Tour” từ ngày kết thúc hồ sơ; hạn đã qua lúc ghi thì là hôm nay. Không có hợp đồng hoặc hợp đồng không có điều khoản: một đợt, hạn hôm nay + 14 ngày. Kế toán đổi NCC hoặc số tiền khác chi phí: một đợt, hạn là hạn cuối điền sẵn. Hợp đồng có điều khoản được ghi vào khoản (DH03 R13) và điều khoản của từng đợt lưu kèm đợt.
- **Bảng trượt Ghi công nợ phát sinh (W26).** Mở từ banner (mọi khoản Chưa ghi) hoặc từ DH08.7 (`/ledger?tab=tours&tour=…&record=…`, các khoản đã chọn). Không ghi gì trước khi bấm Lưu (E3.1). Khối tắt cả hai phần: báo “Chọn ít nhất một”, nút Lưu khóa, có “Bỏ khỏi lần ghi” (E3.3). Khoản vừa được ghi ở phiên khác (E3.2, sửa sau review 18/11/2026): khối hỏi ghi một phía mà phía đó vừa được ghi ở phiên khác bị bỏ khỏi lần lưu **cả khối** (phía kia cũng không ghi); bảng trượt không đóng, khối đó hiện banner nêu người, lúc ghi và “bỏ khỏi lần ghi”, các khối khác lưu và rời bảng trượt. Một phía đã ghi từ trước, không hỏi lại, không chặn ghi phía còn lại về sau (R11, ticket 81). Lỗi máy chủ `blocks.<i>` đánh số theo các khối gửi đi (sau “Bỏ khỏi lần ghi”), bảng trượt gắn lỗi theo chi phí của khối đã gửi.
- **Người chi khác (E3.4, làm sau review 18/11/2026).** Ô NCC của phần Phải trả có thêm lựa chọn “Người chi khác” khi chi phí không có NCC; chọn thì nhập tên (bắt buộc, tối đa 100 ký tự; không chọn cả NCC lẫn Người chi khác: `ledger.errors.supplierOrOtherPayee`). Không điền sẵn tên, không bật sẵn Phải trả (R11 chỉ bật sẵn khi có NCC). Khoản phải trả lưu tên người nhận (`payee_name`, không NCC, một đợt hạn như điền sẵn, không hợp đồng). Ở KT01.2 (RSD không nói riêng): khoản nằm trong nhóm mang tên người chi kèm nhãn “Người chi khác”, nhóm theo tên; không có trong bộ lọc NCC (tìm theo tên thì ra); chi trả như NCC (R10: một người nhận, một loại tiền mỗi giao dịch, chọn cùng lúc các khoản cùng tên), hộp thoại ghi “Người chi khác · không có thông tin nhận thanh toán ở DH03.1” và giao dịch không có bản chụp thông tin nhận thanh toán; nhận hoàn cũng theo người đó. Giao dịch lưu tên người nhận; KT01.3 ghi tên đó ở cột Đối tượng của khoản và giao dịch. QT03: dòng “Người chi khác · <chi phí>” khi ghi khoản, dòng “Người chi khác” thay dòng NCC khi chi trả, nhận hoàn.
- **Thứ tự Tour trong một chip (R03 “hạn gần nhất tăng dần; không có hạn xếp cuối”, sửa sau review).** Hạn gần nhất của Tour là hạn sớm nhất còn mở của các khoản của Tour: đợt (hoặc khoản Phí hủy, khoản phát sinh) phải thu còn > 0 của Booking (đợt đang tạm dừng vì Booking chờ điều chỉnh không tính) và hạn gần nhất của từng khoản phải trả; Tour không còn hạn nào xếp cuối chip; cùng hạn thì theo Tour Code.
- **Số tiền chi trả ở khối Giao dịch (W25, sửa sau review).** Giao dịch chi trả hoặc nhận hoàn NCC trả cho nhiều Tour thì ở mỗi Tour hiện phần phân bổ vào các khoản của Tour đó, kèm “phần của Tour, giao dịch <tổng>”; giao dịch chỉ của một Tour hiện số tiền của nó.
- **Số trên tab theo quyền (R03, sửa sau review).** Số trên ba tab tính trên mọi bản ghi như nhau với mọi người xem; tab người xem không mở được (thiếu `KT01.xem-phai-thu` hoặc `KT01.xem-cong-no-tour`) không có số trong câu trả lời. Một chỗ tính cho cả ba danh sách (`LedgerTabCounts`).
- **Chỉ báo Chưa quyết toán.** Màu trung tính theo CGD K6.02 (“Chỉ báo hồ sơ Tour: Chưa quyết toán” ở cột Trung tính), không theo màu tím của hình W24, W29.
- **Xem công nợ Tour ở DH08 đã đóng (KT01 1.2, L3.3; DH08 1.2, W75).** Nút ở phần đầu DH08 khi hồ sơ Đã đóng, với người có `KT01.xem-cong-no-tour`; mở `/ledger?tab=tours&tour=<Tour Code>`.
- **Khoản mới tô xanh (W27).** Sau khi lưu, các khoản vừa ghi ở khối Khoản công nợ của Tour mang `tr.new` cho tới khi rời khung của Tour.
- **Nút ở phần đầu khi xem một Tour.** “Ghi giao dịch cho TP-…” mở hộp thoại khoản thu với Booking của Tour (khóa); hai loại của NCC vẫn ghi ở KT01.2 (cách hiểu của ticket 81).
- **DH08.7 (L7.1, L7.2, E7.2).** Kế toán (`KT01.ghi-cong-no-phat-sinh`) có ô chọn trên khoản Chưa ghi công nợ và thanh “Ghi công nợ (n) tại KT01.3 ↗”. Khoản đã ghi hiện “Sửa tại KT01” (chữ của L7.1; hình W63 ghi “Xem ở KT01”), là liên kết tới KT01.3 với người xem được KT01.3. Chi phí phát sinh có thêm Ghi chú (DH08 E7.2 “bổ sung chứng từ và ghi chú”, DH08 5.1 chưa có trường này): sửa được cả khi đã ghi công nợ, cùng với thêm chứng từ (nút “Bổ sung chứng từ, ghi chú” ở DH08.7, form HD01).

## Cách hiểu đã chọn khi code ≈ VND (R04, E0.13; ticket 83, 18/11/2026)

- **Ô ≈ VND của một dòng.** Quy số còn phải thu, còn phải trả theo tỷ giá có hiệu lực hôm nay; số cần hoàn cho khách (KT01.1) và số phải nhận hoàn của NCC (KT01.2) đều quy thành số âm, theo 2.4 “Số âm ở cột Còn nghĩa là cần hoàn hoặc phải nhận hoàn” (hình W01 ghi “Cần hoàn 2.400 USD” không dấu; chữ thắng hình; sửa sau review để hai tab cùng dấu); dòng Chờ điều chỉnh ghi “—”. Dòng có nhiều loại tiền (đợt và khoản phát sinh) cộng mọi phần, phần ₫ giữ nguyên; ngày tỷ giá ghi kèm là ngày cũ nhất của các loại tiền, chỉ khi khác hôm nay. Một loại tiền không có ngày nào ≤ hôm nay thì cả ô ghi Chưa có tỷ giá.
- **Dòng ≈ tổng VND của thẻ.** Cộng mọi loại tiền có tỷ giá (cả ₫), ghi “chưa gồm <loại tiền> (chưa có tỷ giá)” cho loại tiền không có; thẻ chỉ có ₫ hoặc trống thì không có dòng (như `kpiVnd()` của hình). Thẻ Thu / Trả của KT01.3 quy từng dòng, có chữ Thu, Trả khi có cả hai.
- **Đầu màn.** “≈ VND theo tỷ giá <hôm nay>, chỉ để tham khảo”, thêm “<loại tiền> theo tỷ giá <ngày>” cho loại tiền lấy tỷ giá ngày khác.
- **Giao dịch.** Số tiền giao dịch quy theo tỷ giá có hiệu lực của ngày giao dịch ở bảng trượt KT01.1, KT01.2 và khối Giao dịch của KT01.3 (phần của Tour); giao dịch VND hoặc chưa có tỷ giá ở ngày đó không có số.

## Cách hiểu đã chọn khi làm thẻ Việc của tôi và tìm nhanh giao dịch (ticket 84, 18/11/2026)

- **Đích của thẻ VT-KT-01 đến 10** (sửa sau review 18/11/2026: CH03 R03, GHI-CHU CH03 N3 “tường minh mọi bộ lọc”). URL ghi mọi bộ lọc trên thanh công cụ của tab đích: `/ledger?tab=receivables&chip=<chip>&mine=false&q=`, `/ledger?tab=payables&chip=<chip>&mine=false&supplierCode=ALL&currency=ALL&q=`, `/ledger?tab=tours&chip=<chip>&mine=false&status=ALL&q=`. Của tôi tắt ghi rõ ở cả ba tab (hợp đồng ticket 84), tab KT01.2, KT01.3 không có lọc Của tôi nên bỏ qua tham số này. Bộ lọc NCC, Loại tiền (KT01.2) và Trạng thái hồ sơ (KT01.3) nhận `ALL` như không lọc. Số của thẻ là tổng của chính danh sách đó (VT-KT-05 là danh sách W17 Chờ ghi phải trả).
- **Ô tìm KT01.1, KT01.2 nhận mã giao dịch, chỉ khi chuỗi là mã GD hoặc phần đầu của mã** (sửa sau review). L0.1 bước 2 liệt kê trường tìm của ô tìm; cách hiểu này chỉ thêm để “Xem tất cả n trong Công nợ & thu chi” của nhóm Giao dịch (CGD U1.04) mở ra danh sách có các giao dịch đó. Chuỗi gõ (bỏ dấu gạch, khoảng trắng, K1.15) phải là “GD” rồi các chữ số (“gd2611”, “GD-2611-00”, “GD-2611-0001”); khi đó KT01.1 thêm các Booking có thu từ khách, hoàn cho khách mang mã bắt đầu bằng chuỗi đó, KT01.2 thêm các khoản phải trả có chi trả NCC, nhận hoàn từ NCC như thế phân bổ vào; gồm cả giao dịch đã hủy. Một mẩu số không có “GD” (“0001”, “2611-0001”) không kéo Booking, khoản phải trả nào theo mã giao dịch; ô tìm vẫn khớp các trường của L0.1 như cũ.
- **“Xem tất cả n” của nhóm Giao dịch** (sửa sau review; CGD U1.04, mẫu CGD-AC21: n tìm thấy = n trong danh sách). Mở tab giữ các giao dịch khớp, với ô tìm điền sẵn chuỗi đã gõ và mọi bộ lọc khác Tất cả: tab Phải thu khách hàng (`chip=ALL&mine=false&q=`) khi người dùng có `KT01.xem-phai-thu` và có thu từ khách, hoàn cho khách khớp chuỗi; không thì tab Phải trả NCC (`chip=ALL&supplierCode=ALL&currency=ALL&q=`) khi có `KT01.xem-phai-tra`. n đếm giao dịch (không đếm dòng): số giao dịch của loại thuộc tab đó mà ô tìm của tab tìm ra theo chuỗi (mục trên), mỗi giao dịch nằm trong bảng trượt của dòng giữ nó; một Booking có hai khoản thu khớp là một dòng mang hai giao dịch. Khi chuỗi khớp cả hai phía, tab Phải thu mở trước, giao dịch NCC xem ở tab Phải trả với cùng chuỗi tìm. Chuỗi không có “GD” thì ô tìm KT01 không tìm theo mã giao dịch nên n = 0.
- **Mở một dòng Giao dịch** (U1.03 dòng 9 “bảng trượt chứa giao dịch, giao dịch được tô”): thu, hoàn cho khách mở bảng trượt của Booking (`bookingCode`); chi trả, nhận hoàn từ NCC mở bảng trượt của khoản phải trả đầu tiên giao dịch phân bổ vào (`tab=payables&open=<id khoản>`); dòng giao dịch trong bảng trượt tô `tr.sel` (`transaction=<mã>`).
- **Bảng trượt KT01.2 theo URL** (sửa sau review). Bảng trượt khoản phải trả đang mở nằm trên URL (`open=<id khoản>`), như bảng trượt Booking của KT01.1 (`open`, `bookingCode`): mở dòng Giao dịch từ Ctrl+K khi đang ở KT01.2 thì bảng trượt mở hoặc chuyển sang khoản chứa giao dịch và tô giao dịch; đổi chip, bộ lọc, ô tìm thì đóng bảng trượt và bỏ tô (`open`, `transaction` bỏ khỏi URL).

**19/11/2026 · ticket 92 (cách hiểu đã chọn, nhớ lựa chọn U3).**
- **Nhớ tab, chip, bộ lọc (CGD U3.01, U3.02).** CGD U3.01 nêu “tab đang mở ở KT01” là lựa chọn được nhớ và U3 thắng RSD; mục 1.2 “Mở KT01.1, chip Tất cả” (Kinh doanh: chip Của tôi bật sẵn) là lần mở đầu (U3.04). KT01 nhớ theo tài khoản, còn sau khi đăng xuất: tab mở lần cuối và, cho từng tab, chip và bộ lọc của tab đó (KT01.1: chip, Của tôi; KT01.2: chip, NCC, loại tiền; KT01.3: chip, tình trạng hồ sơ). Không nhớ ô tìm, trang, bảng trượt hay Tour đang mở, bộ lọc Booking, khách của liên kết (QT10, KD08.2).
- **Mở từ menu** (đường dẫn không tham số): tab đã nhớ với chip, bộ lọc của nó (tab không còn quyền xem thì KT01.1); bấm một tab ở thanh tab mở tab đó với chip, bộ lọc đã nhớ của tab. Mở bằng đường dẫn có tham số (thẻ Việc của tôi, KD08.2, DH03 Xem công nợ) theo đường dẫn và không ghi đè lựa chọn đã nhớ (U3.06). Về chip Tất cả sau khi Ghi phải trả là việc của màn, không phải lựa chọn của người dùng, nên không nhớ.
