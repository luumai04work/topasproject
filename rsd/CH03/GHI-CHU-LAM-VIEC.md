# Ghi chú làm việc · RSD CH03 Việc của tôi (v1.0, 12/11/2026)

Tài liệu đi kèm, không thuộc bản phát hành.

## 1. Quyết định đã chốt (nguồn)

| Nguồn | Nội dung | Tác động ở RSD |
|---|---|---|
| U4 | Trang Việc của tôi theo vai trò: thẻ đếm mở bộ lọc có sẵn | Toàn tài liệu |
| BOI-CANH · Việc của tôi, Người phụ trách, Của tôi | Người phụ trách là nguồn của Việc của tôi; chip Của tôi bật sẵn theo vai trò | R01, Phụ lục A |
| K3 | Chip của RSD là dạng xem có sẵn | R03 |
| Q6 | Trạng thái theo thời gian tính lúc đọc; không tác vụ định kỳ tính sẵn | R02, R07; AC07, AC08, AC15, AC18, AC20, AC24 |
| Q1, Q25 | Quyền theo màn và thao tác, hợp các vai trò; Quản trị xem mọi màn | 1.4, R01 |
| U3 | Nhớ bộ lọc theo người dùng | R03 |
| RSD CH01 R09, R17 | Sau đăng nhập mở Việc của tôi khi không có `next` | 1.2, L1.1 |
| BOI-CANH · Lối vào từ thông báo mở Bảng (RSD DH07 R13) | Lối vào có bộ lọc mở dạng Bảng | R03 (áp cho thẻ) |

## 2. Thiết kế tự quyết (U6, Q3; người dùng đổi được bất cứ lúc nào)

1. **Thẻ số 0 không chiếm ô thẻ**; tên gom vào một dòng “✓ Không có: …” cuối nhóm, như khối Việc cần làm của RSD DH08 R01 và `quy-tac-trien-khai.md` mục 3. Mọi thẻ 0 thì nhóm chỉ còn “✓ Không có việc cần làm”. Thẻ lỗi hoặc thiếu dữ liệu nguồn không coi là 0.
2. **Số trên thẻ dùng chính truy vấn danh sách của màn đích** với bộ lọc của thẻ, chỉ lấy tổng (R02). Định nghĩa ở Phụ lục A chỉ là diễn giải để viết test; đổi định nghĩa ở RSD nguồn thì thẻ đổi theo, không lệch.
3. **Bấm thẻ mở dạng Bảng, đặt bộ lọc của thẻ, đưa bộ lọc khác về trung tính**, trang 1, sắp xếp mặc định; giá trị trở thành bộ lọc nhớ (U3). Lý do: số trên thẻ phải bằng số dòng thấy được.
4. **Nhóm thẻ gắn ba vai trò** Kinh doanh, Điều hành, Kế toán; Quản trị hệ thống và vai trò khác không có nhóm (xem câu hỏi). Thứ tự nhóm theo bảng vai trò của BOI-CANH.
5. **Thẻ ẩn khi thiếu quyền xem màn, tab đích** (QT02), không hiện ở dòng ✓.
6. **Không tự kéo định kỳ:** tải khi mở trang, Làm mới, quay lại trang, thẻ trình duyệt hiện lại sau hơn 60 giây. Khối thông báo theo nhịp 60 giây của chuông (CH02).
7. **Dòng phụ** chỉ cho thẻ có tập con đáng chú ý (quá hạn, sắp khởi hành, hết hạn, số hạng mục, số lần đặt); không bấm riêng, để giữ một chỗ bấm mỗi thẻ.
8. **Màu đỏ** chỉ cho quá hạn hoặc gấp (K6): dòng phụ của VT-KD-04, VT-KD-06, VT-DH-01, VT-DH-03; số của VT-KT-01, VT-KT-06.
9. **Khối Thông báo chưa đọc** (tối đa 5) ở cột phải: trang đầu nên cho thấy việc mới đến mà không phải mở chuông. Không lặp bảng thông báo: không có Xem thêm, không có Đánh dấu tất cả; liên kết Mở bảng thông báo mở chuông.
10. **Chọn thẻ theo việc cần hành động**, không đếm mọi thứ người dùng phụ trách. Bỏ các thẻ chỉ để biết (ví dụ “Booking của tôi”, “Hồ sơ đang mở của tôi”). VT-KD-03 (đã Chốt, chưa tạo Booking) là việc kế tiếp hiển nhiên của luồng KD06 → KD08, dùng bộ lọc có sẵn của KD05.
11. **VT-DH-01 không theo người dùng** (hồ sơ chưa giao là việc của cả nhóm Điều hành, như thông báo DH07 R09). Dòng phụ dùng cùng điều kiện nhắc của CH02 R09, gồm cả hồ sơ đã qua ngày khởi hành mà chưa giao.
12. **VT-DH-02 dùng nghĩa Của tôi của DH07 với Điều hành** (gồm hồ sơ Chưa có người phụ trách, RSD DH07 2.3), nên một hồ sơ Đã kết thúc chưa giao cũng tính cho mọi Điều hành. Giữ đúng bộ lọc nguồn để số khớp danh sách.
13. **VT-KT-10 đếm đúng chip Chưa quyết toán của KT01.3**, nên Tour còn chi phí phát sinh chờ ghi nằm ở VT-KT-09 chứ không ở VT-KT-10 (thứ tự ưu tiên RSD KT01 R03). Chấp nhận để số khớp danh sách (xem mục 3, TĐ-06).
14. **Thẻ cần bộ lọc mới** vẫn ở danh mục nhưng chỉ bật khi màn đích có bộ lọc (R08): 4 thẻ (VT-KD-06, VT-DH-04, 05, 06). Lý do giữ: đây là việc chính của Điều hành và Kinh doanh trong DH08, U4 đòi thẻ mở danh sách nên cần danh sách xuyên hồ sơ.
15. **Số ≥ 1.000 có dấu chấm**, không rút gọn. Lưới 4 thẻ một hàng ở 1280 px; màn hẹp khối thông báo xuống dưới.
16. **CH03 không lưu gì**, không ghi QT03; định nghĩa thẻ nằm trong mã nguồn dùng chung, không có màn cấu hình (C2).
17. **Không dựng wireframe;** mã W01 đến W06 giữ chỗ.

## 3. Thay đổi cần làm ở màn khác

| Mã | Màn | Thay đổi | Thẻ cần |
|---|---|---|---|
| TĐ-01 | KD07 mục 2.3, R07 | Thêm bộ lọc **Yêu cầu đổi lịch trình** với giá trị Tất cả, Đang chờ (Booking có yêu cầu Chờ Kinh doanh, RSD DH08 R18), Quá hạn phản hồi (trong số đó, có yêu cầu quá hạn phản hồi). Có thể thêm chỉ báo trên dòng Booking | VT-KD-06 |
| TĐ-02 | DH07 mục 2.3, R07 | Thêm bộ lọc **Việc cần xử lý** (chọn nhiều) với các giá trị: Thay đổi chương trình (có thay đổi Chờ áp dụng); Đặt dịch vụ (có hạng mục Cần đặt, Cần đặt lại, Xác nhận một phần, Cần điều chỉnh hoặc Cần hủy, tức số trên tab Đặt dịch vụ của DH08 > 0); Chờ NCC phản hồi quá hạn (có lần đặt Đã gửi quá ngưỡng chờ phản hồi NCC). Bộ lọc tính lúc đọc từ DH08 như cột Cần xử lý | VT-DH-04, 05, 06 |
| TĐ-03 | DH07 mục 2.3 | Nêu nghĩa chip Của tôi với tài khoản vừa Kinh doanh vừa Điều hành (đề nghị: hợp hai nghĩa). CH03 dùng đúng bộ lọc của DH07 nên số theo định nghĩa DH07 | VT-DH-02, 04, 05, 06 |
| TĐ-04 | DH06 mục 2.2 | Đề nghị thêm chip **Cần giao lại** (nhân sự Ngừng dùng còn việc đang được giao, R05) để sau này có thẻ Điều hành “Nhân sự cần giao lại”. Chưa có thẻ ở v1.0 | (đề nghị) |
| TĐ-05 | DH08, DH07 | Công việc checklist quá hạn của tôi (người thực hiện) chỉ lọc được trong từng hồ sơ (DH08.2 chip Của tôi, Quá hạn); không có danh sách xuyên hồ sơ nên chưa có thẻ. Nếu cần thẻ này, thêm giá trị “Có công việc quá hạn của tôi” vào bộ lọc Việc cần xử lý của DH07 (TĐ-02) | (đề nghị) |
| TĐ-06 | KT01 L3.4 và R03 | L3.4 mô tả chip Chưa quyết toán là “mọi Tour Đã kết thúc hoặc Đã đóng chưa quyết toán”, còn R03 xếp mỗi Tour vào một chip theo ưu tiên (Chờ ghi phát sinh trước). Thống nhất câu chữ; CH03 theo R03 | VT-KT-09, 10 |
| TĐ-07 | KD07 E1.4 | Ghi rõ bộ lọc Thanh toán = Chưa có lịch thanh toán cũng khóa khi KT01 không trả số (lịch đọc từ KD08 nhưng bộ lọc Thanh toán khóa cả nhóm) | VT-KD-05 |
| TĐ-08 | Khung ứng dụng (chuẩn K) | Mục Việc của tôi đứng đầu menu bên; logo mở Việc của tôi | — |

## 4. Kiểm tra đã chạy

- Rà chip, bộ lọc, chỉ báo của KD05, KD07, KD08, DH02, DH06, DH07, DH08, KT01, QT01 để chọn đích có sẵn; 18 thẻ có bộ lọc đích sẵn có, 4 thẻ cần thêm (TĐ-01, TĐ-02).
- Tính lại số mong đợi ở mục 6 bằng tay theo dữ liệu mẫu và mốc ngày: ngưỡng Đến hạn 7 (12/11 → 19/11), 13/11 thêm BK-2611-0152 (hạn 20/11), 21/11 bốn Booking quá hạn, ngưỡng 3 ngày chỉ còn BK-2611-0150; NCC B kết thúc 30/11 là Sắp hết hạn ngày 12/11 (còn 18 ngày ≤ 30) và Hết hạn ngày 01/12; lần đặt gửi 09/11 10:00 quá 48 giờ từ 11/11 10:00.
- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py --final docs/rsd/CH03/RSD-CH03-Viec-cua-toi-v1.0.md`: 0 ảnh, không lỗi bảng, không cảnh báo bước thiếu W hay mục thiếu E.

## Sửa sau rà chéo 12/11/2026

Theo quyết định của người dùng 12/11/2026 và phát hiện của người rà soát. Không đổi số hiệu L, E, R, AC; R08, E2.4 giữ mã với dòng “Bỏ theo …”; thêm AC36.

| Phát hiện | Đã sửa ở RSD |
|---|---|
| Quyết định 1 · bộ lọc mới ở KD07, DH07 | Bỏ cờ “cần thêm” ở Phụ lục A, R08, E2.4, 1.3, 5.1, tổng thẻ; VT-KD-06 dùng Yêu cầu đổi lịch trình = Đang chờ (dòng phụ = Quá hạn phản hồi); VT-DH-04 đến 06 dùng Việc cần xử lý. TĐ-01, TĐ-02 xong (RSD KD07 R07, DH07 2.3) |
| Quyết định 3 · vai trò tự tạo thuộc phòng | 1.4 (bảng theo vai trò thuộc phòng, một nhóm cho mỗi phòng), 2.1, L1.2 (tiêu đề nhóm là tên phòng), E1.5, R01, R09; AC36. Quản trị hệ thống vẫn không có thẻ |
| N3 · không ghi đè bộ lọc đã nhớ | 1.2, L2.1, E2.2, R03, 5.1: bộ lọc của đích tường minh trên URL (kể cả chip Của tôi bật/tắt và Tất cả cho bộ lọc không nêu), tham số vắng mặt lấy mặc định của màn (CGD U3.06); bỏ “trở thành bộ lọc nhớ”; AC05, AC14 kiểm thêm lần mở từ menu |
| N-4 · chip Của tôi ở DH07 | Phụ lục A, AC14, AC16, AC19: “chip Của tôi bật/tắt” thay “Phụ trách = Của tôi” |
| AC không kiểm chứng được | Dữ liệu mẫu: Booking BK-2610-0133 (TP-2611-0203), BK-2610-0134 (TP-2611-0204) với khoản phải thu Đã tất toán, nên hai Tour có mặt ở KT01.3; TP-2611-0201, TP-2612-0202 có 2 và 3 hạng mục Cần đặt; dòng “Dữ liệu còn lại” khép dữ liệu. AC22 ghi đủ 10 số; AC23 ghi “đúng 1 dòng” và Booking; AC19, AC31 viết lại sau khi có bộ lọc; AC02, AC13, AC21, AC26 thêm các thẻ vừa bật |

**Hệ quả số đếm.** Vì chip Của tôi của Điều hành ở DH07 gồm hồ sơ Chưa có người phụ trách, VT-DH-05 của Trần Minh Anh là 3 (TP-2611-0201, TP-2612-0202, TP-2611-0205; 8 hạng mục), của Vũ Đức Minh là 2 (5 hạng mục). Giữ đúng bộ lọc nguồn để số khớp danh sách (tự quyết 12).

**Câu hỏi còn mở.** CGD U4.01 ghi “Thẻ có số 0 vẫn hiện, không bấm được”, còn CH03 R04 gom thẻ số 0 vào dòng ✓ (tự quyết 1). Cần thống nhất một cách. TĐ-03 (nghĩa chip Của tôi ở DH07 với tài khoản vừa Kinh doanh vừa Điều hành) vẫn mở; số ở AC21 đúng với cả hai cách hiểu vì Vũ Đức Minh không phụ trách Booking nào.

**Kiểm tra.** `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py docs/rsd/CH03/RSD-CH03-Viec-cua-toi-v1.0.md`: 0 ảnh, không lỗi. Tính lại tay: VT-DH-05 = 2 + 3 + 3 hạng mục = 8; VT-KT-09, 10 mỗi chip đúng 1 Tour; Booking mới đều Đã tất toán nên không đổi VT-KT-01 đến 04 và AC24.

## Bổ sung vai trò HDV 12/11/2026 (giữ v1.0)

Giữ số hiệu; thêm E1.10, E1.11, R10, AC37–AC40. Số thẻ không đổi (22).

**Quyết định của người dùng:** phòng HDV không dùng Việc của tôi (trang mặc định là HD01); người vừa có vai trò HDV vừa vai trò khác có trang mặc định là CH03, có lối sang HD01.

**Tự quyết (U6)**

1. **Lối sang HD01 là liên kết “Tour của tôi” ở tiêu đề trang** (cạnh Làm mới), cộng mục Tour của tôi ở menu trái (CGD K0.05). Không có thẻ đếm cho HDV: thẻ phải dùng bộ lọc của màn đích (R02) mà HD01 chưa có RSD; ghi câu hỏi nếu muốn thêm.
2. **Tài khoản chỉ có vai trò thuộc phòng HDV mở đường dẫn CH03 thì chuyển về HD01** thay vì hiện trang trống, vì đó không phải trang của họ.
3. **Quản trị hệ thống kèm HDV** vẫn ở CH03 (“Chưa có thẻ việc…”) vì không phải “chỉ có vai trò thuộc phòng HDV”; có liên kết Tour của tôi.
4. Liên kết Tour của tôi chỉ hiện khi tài khoản có vai trò thuộc phòng HDV và có `HD01.xem`; Quản trị (có `HD01.xem` theo Q25) không có liên kết ở tiêu đề, vẫn có mục menu.

**Câu hỏi cho người dùng**

1. Người vừa Điều hành vừa HDV có cần một thẻ đếm “Tour đang phục vụ” ở Việc của tôi không? Hiện chỉ có liên kết không số.
