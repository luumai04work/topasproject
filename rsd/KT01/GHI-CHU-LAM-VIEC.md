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
