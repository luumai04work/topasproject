# Ghi chú làm việc · RSD CH02 Thông báo (v1.0, 12/11/2026)

Tài liệu đi kèm, không thuộc bản phát hành.

## 1. Quyết định đã chốt (nguồn)

| Nguồn | Nội dung | Tác động ở RSD |
|---|---|---|
| Q2, BOI-CANH · Thông báo | Chỉ thông báo in-app; bỏ email nội bộ | 1.3, R13, 5.3, AC51 |
| Q5, ADR 0002 | Thông báo ghi cùng giao dịch với thao tác gốc; không trạng thái gửi lỗi, không thử lại | L2.1, R02, AC20 |
| Q6 | Tác vụ định kỳ chỉ để gây hành động (tạo thông báo nhắc) | L3.1, R09 |
| BOI-CANH · Mặc định áp sau khi sửa RSD | DH06: Hoàn tác tắt nhận phân công thì gỡ thông báo vừa tạo | L2.2, R05 (áp chung cho mọi thao tác có Hoàn tác) |
| U2, U3 | Không hộp thoại xác nhận thừa, dùng Hoàn tác; nhớ lựa chọn theo người dùng | L1.4, 2.3 |
| RSD DH06 R03 | Định nghĩa nhóm Điều hành nhận thông báo | R01 |
| RSD DH02 R08, E3.5 | Mỗi hợp đồng mỗi mốc một lần; trên 5 NCC thì gộp; tự đánh dấu đã xử lý; liên kết Xem nhà cung cấp cần xử lý ở cuối danh sách | R03, R04, R06, 2.1 |
| RSD DH07 R09 | Nhắc hồ sơ chưa giao lúc 08:00 mỗi ngày cho tới khi có người phụ trách; thông báo đã đọc không hiện lại; thông báo hồ sơ mới tự đã xử lý | R04, R06, R09 |
| RSD DH08 E3.11, AC41 | Quá hạn phản hồi: nhắc Kinh doanh một lần, tác vụ định kỳ | TB-DH08-03, R04 |
| RSD DH08 R05 | Hồ sơ chưa có người phụ trách thì nhóm Điều hành nhận | R01 (áp chung) |
| RSD CH01 (tự quyết 11) | Yêu cầu nền làm mới thông báo không gia hạn phiên | R08 |

## 2. Thiết kế tự quyết (U6, Q3; người dùng đổi được bất cứ lúc nào)

1. **Cập nhật số chưa đọc bằng kéo định kỳ 60 giây**, chỉ khi thẻ trình duyệt đang hiện; lấy ngay khi thẻ hiện lại, chuyển màn, mở bảng. Không dùng WebSocket hay SSE: 10–50 người dùng, việc nội bộ chấp nhận trễ tối đa 60 giây, đơn giản cho Docker Compose và không phải giữ kết nối. Yêu cầu kéo không gia hạn phiên (khớp CH01).
2. **Không có màn thông báo riêng**; chỉ bảng nổi 420 px dưới chuông, tải 20 dòng mỗi lần, Xem thêm.
3. **Hai bộ lọc Chưa đọc · Tất cả**, nhớ theo người dùng (U3); lần đầu Chưa đọc. Không lọc theo module hay loại (ít thông báo, quy mô nhỏ).
4. **Không có nút đánh dấu từng dòng hay đánh dấu chưa đọc.** Bấm là đọc; Đánh dấu tất cả đã đọc làm ngay kèm Hoàn tác 10 giây thay hộp xác nhận (U2), chỉ áp cho thông báo có thời điểm làm mới không muộn hơn lúc tải bảng (thông báo đến sau không bị nuốt).
5. **Mở đích kiểm tra ở máy chủ trong cùng yêu cầu đánh dấu đọc.** Không có quyền hoặc bản ghi không còn thì hiện lý do ngay dưới dòng, không chuyển trang, vẫn tính là đã đọc. Người nhận không có quyền xem màn đích vẫn nhận thông báo (không lọc người nhận theo quyền) để quy tắc người nhận đơn giản và test được.
6. **Thông báo gộp:** mỗi mã là một liên kết tới đích của mã đó; bấm phần thân mở đích chính của loại, không có thì đích của mã đầu tiên. Hiện tối đa 10 mã, còn lại “và k … khác”.
7. **Làm mới tại chỗ khi còn chưa đọc (R04):** thông báo mới cùng loại, cùng bản ghi chính tới người đang có thông báo Chưa đọc chưa Đã xử lý thì thay nội dung, đưa lên đầu, ghi “· n lần”. Mục đích chống nhiễu (ví dụ sửa lịch thanh toán nhiều lần). Thông báo gộp nhiều bản ghi không làm mới.
8. **Nhắc hồ sơ chưa giao mỗi ngày trên cùng một dòng (TB-DH07-03).** DH07 R09 yêu cầu nhắc mỗi ngày tới khi có người phụ trách; để không lặp dòng, lần nhắc ngày sau làm mới dòng cũ và đưa về Chưa đọc kể cả khi đã đọc. Đây là cách hiểu câu “thông báo đã đọc không hiện lại” của DH07 (không hiện lại thành dòng thứ hai). Điều kiện nhắc gồm cả hồ sơ đã qua ngày khởi hành mà vẫn Mới tạo, chưa giao (“cho đến khi hồ sơ có người phụ trách”).
9. **Một giờ chạy cho mọi nhắc định kỳ:** DH02, DH07, DH08 E3.11 đều chạy ở giờ chạy nhắc hằng ngày (mặc định 08:00). DH08 E3.11 không nêu giờ; QT05 R17 ghi tham số chỉ dùng ở DH02 (xem mục 3).
10. **Chạy bù và không trùng:** điều kiện xét theo “chưa có khóa” chứ không theo đúng ngày; mỗi bản ghi một giao dịch; khóa chống nhắc lặp theo bảng ở R04.
11. **Đã xử lý là chỉ báo, không tính vào số chưa đọc**, vẫn ở Tất cả. Ngoài các loại nguồn đã nêu (DH02 R08, DH07 R09), áp thêm cho TB-KD08-01 (thay đổi chương trình rời Chờ áp dụng), TB-DH08-01, 02, 03 (yêu cầu đổi lịch trình rời Chờ Kinh doanh), TB-KD08-05 (Booking đã ghi điều chỉnh ở KT01). Đã xử lý không bị bỏ khi điều kiện đảo lại.
12. **Hoàn tác gỡ thông báo áp chung** cho mọi thao tác có Hoàn tác và tạo thông báo (hiện có DH06 tắt nhận phân công, DH02 và DH03 ngừng dùng NCC); gỡ cả khi đã đọc; thông báo bị làm mới thì khôi phục bản trước. Hoàn tác không tạo thông báo mới (kể cả Hoàn tác một lần bật NCC đưa NCC về Ngừng dùng).
13. **Người nhận thay:** “Điều hành phụ trách hồ sơ” mà hồ sơ chưa giao hoặc người phụ trách Ngừng hoạt động thì nhóm Điều hành nhận (mở rộng RSD DH08 R05 cho mọi loại có người nhận này: TB-DH02-01, TB-DH06-02, TB-KD08-01, TB-KD08-04). Kinh doanh phụ trách Booking Ngừng hoạt động thì không có người nhận thay; nhật ký hệ thống ghi lại.
14. **Nhóm Kế toán** = mọi tài khoản Đang hoạt động có vai trò Kế toán. Các RSD chỉ ghi “Kế toán nhận thông báo”.
15. **Bỏ người thao tác** không có ngoại lệ (không RSD nguồn nào nêu ngoại lệ). Người nhận nhiều cách cho cùng một loại nhận một thông báo.
16. **Người nhận tính lúc sự kiện;** chuyển phụ trách không chuyển thông báo đã tạo.
17. **Lưu giữ 180 ngày** từ ngày tạo, xóa cả thông báo chưa đọc, chạy sau tác vụ nhắc. Thông báo không là dữ liệu nghiệp vụ; việc cần làm vẫn ở màn nguồn và Việc của tôi.
18. **Không ghi QT03 khi đọc, đánh dấu tất cả;** tạo, gỡ thông báo đã nằm trong Tác động kèm theo của mục QT03 của thao tác gốc.
19. **Huy hiệu màu chính, không đỏ** (K6: đỏ chỉ cho việc phải xử lý); tối đa “99+”. Không âm thanh, không thông báo đẩy trình duyệt.
20. **Nội dung không có dữ liệu cá nhân hay số tiền;** lý do người dùng nhập cắt ở 120 ký tự.
21. **Đích của từng loại khi nguồn không nêu:** TB-DH06-01 mở DH07 lọc Phụ trách = người bị tắt; TB-DH06-02 mở DH08.2 (DH08.5 khi chỉ có phân công phục vụ); TB-DH07-04 mở DH08 tab theo DH07 R10; TB-DH07-05 mở DH08.1; TB-DH08-04, 05, 06 mở KD08.1; TB-DH08-07, 08, 09 mở DH08.8; TB-KD08-01 mở DH08.1 (banner W08); TB-KD08-04 mở DH08.3; TB-KD04-02, TB-KD06-02, TB-KD08-08 mở bản ghi.
22. **Mã loại thông báo** `TB-<màn nguồn>-nn` theo màn nơi thao tác gốc xảy ra (TB-KD08-01 là Chuyển sang Điều hành bấm ở KD08 dù người nhận ở DH08).
23. **Hai cách tách loại:** lịch thanh toán khớp (TB-KD08-02) và lệch (TB-KD08-03) là hai loại, một lần lưu chỉ tạo một trong hai; Booking hủy tạo ba loại cho ba nhóm người nhận (TB-KD08-04, 05, 06).
24. **Không dựng wireframe;** mã W01 đến W08 giữ chỗ.

## 3. Thay đổi cần làm ở màn khác

| Mã | Màn | Thay đổi | Lý do |
|---|---|---|---|
| TĐ-01 | KD08 mục 1.2 | Dòng “Thông báo (hồ sơ Tour đã tạo, được giao Booking, lịch thanh toán thay đổi) → KD08”: hồ sơ Tour đã tạo mở DH08 (theo DH07 R09, TB-DH07-02); lịch thanh toán thay đổi gửi Kế toán và mở KT01.1 (theo KT01 mục 1.2, TB-KD08-02, 03); chỉ “được giao Booking” và các thông báo Booking mở KD08 | KD08 1.2 mâu thuẫn DH07 R09 và KT01 1.2 |
| TĐ-02 | DH08 L1.2 | Thêm câu: người phụ trách cũ nhận thông báo khi đổi người (như RSD DH07 R08, vì “giao ở DH07 và đổi người ở DH08 ghi cùng một lịch sử”). CH02 đã áp (TB-DH07-05) | DH08 chỉ nêu người được giao |
| TĐ-03 | QT05 R17 và DH02 R10 | Thống nhất nơi cấu hình “Giờ chạy nhắc hằng ngày”: QT05 R17 coi là tham số chung, DH02 v1.4 R10 ghi tệp cấu hình (C2). CH02 R12 theo QT05 R17. Cột “Dùng ở” của QT05 R17 thêm DH07 R09, DH08 E3.11, CH02 R09; bỏ câu “nhắc hồ sơ chưa giao của DH07 chưa gắn vào tham số này” | Một giờ chạy cho mọi nhắc (tự quyết 9) |
| TĐ-04 | DH07 R09 | Dẫn CH02 R04: nhắc mỗi ngày làm mới một dòng; nêu rõ hồ sơ đã qua ngày khởi hành mà chưa giao vẫn được nhắc | Tự quyết 8 |
| TĐ-05 | DH02 R08, DH06 R05, DH07 R08, R09, DH08 R14, R18, R19, KD03-KD04 R04, KD05 R08, KD06 R22, R23, KD08 R07–R11, KT01 R05, R07 | Thêm dẫn chiếu “mã loại TB-… ở RSD CH02 Phụ lục A” cạnh mỗi câu “nhận thông báo”, để test truy được | Truy vết |
| TĐ-06 | KT01 mục 5.3 | “dịch vụ chờ ghi phải trả” được liệt kê là thông báo nhưng không RSD nào nêu sự kiện, người nhận. CH02 không tạo loại này; việc này hiện ở thẻ VT-KT-05 của CH03 và chip Chờ ghi phải trả. Bỏ khỏi 5.3 hoặc bổ sung quy tắc (xem câu hỏi) | Sự kiện mơ hồ |
| TĐ-07 | DH08 E1.9 | “Kinh doanh nhận thông báo để điều chỉnh tiếp” khi thay đổi chạm ngày đã qua: chưa nêu lúc nào sinh. CH02 chưa đưa vào danh mục (xem câu hỏi) | Sự kiện mơ hồ |
| TĐ-08 | KD08 mục 5.3 | “yêu cầu Tour đã hủy theo Booking” không nêu người nhận; CH02 gán người phụ trách Booking (TB-KD08-06, bỏ người thao tác). Ghi người nhận vào R10 | Người nhận mơ hồ |
| TĐ-09 | DH08 L3.12 bước 2 | “nhắc lại” chưa nêu là thông báo; CH02 coi là thông báo TB-DH08-02 tới Kinh doanh phụ trách Booking | Hành vi mơ hồ |
| TĐ-10 | BOI-CANH · Thuật ngữ | Thêm “Bảng thông báo”, “Đã xử lý (thông báo)”, “Nhóm Điều hành”, “Nhóm Kế toán” (nghĩa theo CH02 R01) | Thuật ngữ mới |
| TĐ-11 | Khung ứng dụng (chuẩn K) | Chuông nằm bên trái menu người dùng ở thanh trên | Vị trí dùng chung |

## 4. Kiểm tra đã chạy

- Rà mọi RSD trong `docs/rsd/*/RSD-*.md` theo “thông báo”, “nhắc”, “chuông”, “Cần xử lý”, “định kỳ”; lập danh mục 31 loại (27 trong giao dịch, 4 định kỳ). Mỗi loại dẫn mã R hoặc L nguồn. Bỏ qua các câu “thông báo” nghĩa là thông báo ngắn (toast) hoặc thông báo lỗi.
- RSD nguồn không có thông báo: DH01, DH04, KD01-KD02 (dịch vụ, NCC ngừng dùng trong Tour mẫu chỉ có chỉ báo; “Kinh doanh không nhận thông báo riêng”), KD07, QT03, QT04, QT05 (“không gửi thông báo”, kể cả không nhắc nhập tỷ giá, ngày nghỉ lễ), QT07-QT12 (không gửi định kỳ). Không có thông báo cho NCC chưa phản hồi quá 48 giờ: DH08 R04 chỉ có chỉ báo tính lúc đọc.
- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py --final docs/rsd/CH02/RSD-CH02-Thong-bao-v1.0.md`: 0 ảnh, không lỗi bảng, không cảnh báo bước thiếu W hay mục thiếu E.
- Đối chiếu số trong AC: 12/11/2026 + 180 ngày = 11/05/2027 (AC52); hạn phản hồi 16/11 thì quá hạn ở lần chạy 17/11 (AC34); TP-2611-0201 khởi hành 16/11 thì 12/11 “sau 4 ngày” (AC37).

## Sửa sau rà chéo 12/11/2026

Theo quyết định của người dùng 12/11/2026 (BOI-CANH, mục “Chốt và mặc định khi viết QT02, CH01–CH03”) và phát hiện của người rà soát. Không đổi số hiệu L, E, R, AC; thêm AC55–AC57.

| Phát hiện | Đã sửa ở RSD |
|---|---|
| Quyết định 2 · không thông báo dịch vụ chờ ghi phải trả | Không có loại cho sự kiện này; Phụ lục A ghi lý do; KT01 mục 5.3 đã bỏ câu (TĐ-06 xong) |
| Quyết định 3 · vai trò tự tạo thuộc phòng | R01: nhóm Điều hành, nhóm Kế toán, Ngừng hoạt động dùng “vai trò thuộc phòng … (vai trò hệ thống hoặc vai trò tự tạo thuộc phòng đó, RSD QT02)”; R12 thêm phòng của vai trò (QT02) |
| N3 · không ghi đè bộ lọc đã nhớ | 1.2, L1.3, R07: bộ lọc của đích nằm tường minh trên URL, tham số vắng mặt lấy mặc định của màn (CGD U3.06); bỏ câu “trở thành bộ lọc được nhớ”; AC08 kiểm thêm lần mở từ menu |
| N-6 · câu báo bộ lọc không còn dùng | E1.13 theo CGD U3.07: bỏ riêng tham số, “Đã bỏ qua n bộ lọc không còn dùng được” |
| N-7 · tab hồ sơ Tour | R07 ghi rõ tab theo RSD DH07 R10 (gồm nhánh Kế toán); TB-DH07-05 và Tour Code của TB-DH06-01 đổi sang “DH08 (tab theo DH07 R10)” |
| N-4 · chip Của tôi | TB-KD04-01, AC48: “chip Của tôi” thay “chip Khách của tôi”; các đích DH07 ghi chip Của tôi tắt |
| T8 · giờ chạy nhắc | L3.1, R09, R12: một tham số chung QT05 R17 (mặc định 08:00) cho mọi loại Định kỳ; QT05 R17, DH02 R10, DH07 R12, DH08 R17 đã sửa khớp (TĐ-03 xong) |
| T9 · DH08 E1.9 | Thêm TB-DH08-10 (lựa chọn ở dưới); L3.1, R04, R06, R09, Phụ lục A, AC57; DH08 E1.9 sửa câu (TĐ-07 xong) |
| T10 · Hoàn tác hàng loạt | R05: chỉ gỡ hoặc dựng lại nội dung gộp cho bản ghi thực sự được hoàn tác (CGD U2.06); AC55 |
| T11 · TB-DH02-03 | R06 tách dòng TB-DH02-03, thêm nhánh tính lúc đọc; 2.2, L2.3, R08; bỏ câu “không loại nào đổi theo thời gian”; AC56 |
| AC không kiểm chứng được | AC29 bỏ kết quả có điều kiện (đặt sẵn v4 Chờ áp dụng); AC30 thêm TB-DH08-06; AC31 nêu người hủy (Lê Thu Hà) và Booking BK-2611-0159 của TP-2611-0201 (thêm vào dữ liệu mẫu chung); AC51 chọn mẫu đại diện cố định 11 AC |
| Lệch nguồn đã nêu | KD08 mục 1.2 sửa theo R07 (TĐ-01 xong); DH08 L1.2 thêm người phụ trách cũ nhận thông báo (TĐ-02 xong); DH07 R09 viết lại theo R04 (TĐ-04 xong) |

**Lựa chọn T9 (DH08 E1.9).** E1.9 không phải cảnh báo cho chính người thao tác: người thấy dòng “Không áp dụng được” là Điều hành ở W09, còn người phải làm tiếp là Kinh doanh. Thêm TB-DH08-10, sinh **Định kỳ, một lần cho mỗi thay đổi chương trình**, người nhận Kinh doanh phụ trách Booking lúc chạy, mở KD08.1; tự Đã xử lý khi thay đổi rời Chờ áp dụng (Đã thay thế, Không áp dụng). Lý do: điều kiện “chạm ngày trước hôm nay” thường thành đúng do ngày trôi qua khi chưa ai áp dụng (Q6: tác vụ định kỳ để gây hành động); sinh lúc Chuyển sang Điều hành thì người nhận chính là người thao tác và bị bỏ (R01). Hệ quả: có 5 loại Định kỳ thay vì 4, chung một giờ chạy.

**Lựa chọn T11 (TB-DH02-03).** Nhánh “hợp đồng kế tiếp đã bắt đầu” **tính lúc đọc** (Q6), không do tác vụ hằng ngày gắn. Điều kiện viết một chiều (ngày bắt đầu ≤ hôm nay) nên nhãn không tự mất khi thời gian trôi; nhánh “NCC chuyển Ngừng dùng” và khi thêm hợp đồng chứa hôm nay vẫn gắn trong giao dịch.

**Đối chiếu danh mục.** Rà lại mọi `docs/rsd/*/RSD-*.md` theo “nhận thông báo”, “gửi thông báo”, “thông báo cho”, “thông báo nhắc”, “nhắc lại”, “cảnh báo cho Quản trị”. Mọi câu ứng với một loại ở Phụ lục A, trừ: (1) dịch vụ chờ ghi phải trả (bỏ theo quyết định 2); (2) RSD DH07 E1.7 “gửi cảnh báo cho Quản trị” khi thiếu tiền tố Tour Code: không xảy ra vì QT05 R17 khởi tạo sẵn tiền tố TP và khoảng hợp lệ không cho để trống, nên không có loại (xem câu hỏi). Câu “danh mục đầy đủ” ở Phụ lục A ghi sau đối chiếu này.

**Câu hỏi còn mở.** RSD DH06 R03 (định nghĩa nhóm Điều hành), DH07 R08, R09, DH02 1.4, QT01 vẫn ghi “có vai trò Điều hành”; CH02 đã theo vai trò thuộc phòng. Cần sửa các RSD đó cùng lúc với QT02. RSD DH07 E1.7 có nên bỏ câu “gửi cảnh báo cho Quản trị”?

**Kiểm tra.** `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py docs/rsd/CH02/RSD-CH02-Thong-bao-v1.0.md`: 0 ảnh, không lỗi. Số trong AC mới: hạn HĐ-01 01/12 thì TB-DH02-03 ngày 02/12, HĐ-02 bắt đầu 05/12 (AC56); dòng thay đổi ngày 17/11 thì lần chạy 19/11 08:00 là lần đầu sau lúc chuyển 18/11 10:00 (AC57).

## Bổ sung vai trò HDV 12/11/2026 (giữ v1.0)

Giữ số hiệu; thêm Phụ lục A.3 (4 loại), E1.14, AC58–AC65. Tổng 36 loại (31 Trong giao dịch, 5 Định kỳ).

**Mã cố định theo yêu cầu bổ sung:** TB-HD01-01 (HDV ghi sự cố → Điều hành phụ trách hồ sơ), TB-HD01-02 (HDV ghi hoặc sửa chi phí → Điều hành phụ trách hồ sơ), TB-DH08-11 (được phân công phục vụ → tài khoản liên kết với nhân sự), TB-DH08-12 (bị gỡ phân công → tài khoản đó). Chuông có trên HD01; người nhận phòng HDV chỉ nhận thông báo của hồ sơ mình được phân công.

**Tự quyết (U6)**

1. **“Điều hành phụ trách hồ sơ” giữ định nghĩa R01**, gồm nhóm Điều hành nhận thay khi hồ sơ chưa giao hoặc người phụ trách Ngừng hoạt động (như mọi loại tới Điều hành phụ trách).
2. **TB-DH08-11, TB-DH08-12 tới tài khoản liên kết bất kể vai trò**, đúng câu của yêu cầu. Tài khoản Nội bộ không có `HD01.xem` (ví dụ chỉ Điều hành) vẫn nhận. Câu cũ “bấm thì E1.2 như mọi loại” bỏ theo thay đổi 12/11/2026: bấm thì mở DH08 (TB-DH08-11, TB-DH08-12: DH08.5; TB-DH08-13: DH08.1) cho khớp RSD DH08 R12 (R07, AC69).
3. **TB-DH08-11 sinh ở mỗi lần thêm phân công, TB-DH08-12 ở mỗi lần bỏ phân công**; một thao tác nhiều phân công cho cùng người gộp theo R03. TB-DH08-12 thêm câu “không còn xem được hồ sơ này” khi nhân sự không còn phân công nào ở hồ sơ (khớp câu chữ ở RSD HD01). Sửa phân công (đổi ngày, vai trò phục vụ) không có loại riêng; thay đổi 12/11/2026: sửa phân công gửi chính TB-DH08-11 với câu “đã đổi”, khớp RSD DH08 R12 (A.3, AC67).
4. **TB-HD01-02 gồm cả xóa** và không sinh cho khoản ghi cùng sự cố mới, theo RSD HD01 R06 viết song song (yêu cầu bổ sung chỉ nêu “ghi hoặc sửa”). **Làm mới tại chỗ theo hồ sơ** (R04: cùng loại, cùng bản ghi chính là hồ sơ Tour); đích theo lần ghi gần nhất (DH08.7 hoặc DH08.8). Nội dung không có số tiền, theo 1.4.
5. **TB-HD01-01 khi thêm sự cố và khi HDV cập nhật kết quả sự cố** (thay đổi 12/11/2026, mặc định Q3 của BOI-CANH; trước đây chỉ khi thêm sự cố); nhật ký thường và sửa trường khác của sự cố không thông báo. Bản ghi chính là sự cố, nên ghi rồi cập nhật kết quả khi chưa đọc thì làm mới (AC68).
6. **Đích HD01 kiểm tra phạm vi R16 của QT02**; hồ sơ ra khỏi phạm vi thì báo dưới dòng như E1.1, E1.2 (E1.14), không lộ dữ liệu.
7. **Bảng thông báo trên điện thoại mở toàn màn hình** theo CGD K7.08.

**Câu hỏi cho người dùng**

1. Điều hành sửa phân công có cần báo HDV không? Đã chốt 12/11/2026: có, bằng TB-DH08-11 (khớp RSD DH08 R12).

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **RSD HD01, DH08 (DH08.5):** dẫn đúng bốn mã ở A.3; DH08 nêu TB-DH08-11, TB-DH08-12 trong bước phân công, bỏ phân công và Hoàn tác (nếu có, R05 gỡ thông báo).

**Lệch với RSD HD01 (viết song song) · đã xử lý 12/11/2026:** RSD HD01 R06 và AC16 đã sửa cho nội dung TB-HD01-01, TB-HD01-02 không chứa số tiền, theo 1.4. Ghi chép cũ: HD01 AC16 cho TB-HD01-01 ghi số tiền (“chi phí 1.500.000 ₫”), còn CH02 1.4 không đưa số tiền của khách hay NCC vào nội dung thông báo và mẫu A.3, AC63 ở đây không có số tiền. Một trong hai cần sửa.

## Bổ sung 12/11/2026 · HDV chốt thêm (giữ v1.0)

Nguồn: BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm (12/11/2026, sau khi viết RSD HD01)” và các mặc định theo Q3 ngay sau đó.

**Đã sửa (dòng “Thay đổi ở v1.0 (bổ sung 12/11/2026 · HDV chốt thêm)”):** 1.4 (số tiền chi phí do HDV ghi không vào nội dung); 1.5 (dòng truy vết mới); E1.14 (gồm TB-DH08-13); R01 (định nghĩa “Tài khoản của nhân sự được phân công” gồm sửa phân công và TB-DH08-13; phòng HDV nhận thêm TB-DH08-13; không báo khi Đóng Tour, Mở lại Tour); R07 (đích HD01 gồm TB-DH08-13; người không có `HD01.xem` mở DH08); R12; Phụ lục A.3 (TB-HD01-01 gồm cập nhật kết quả và mẫu nội dung khớp RSD HD01 R06; TB-HD01-02 ghi rõ không số tiền; TB-DH08-11 gồm sửa phân công, khớp RSD DH08 R12; thêm TB-DH08-13); tổng 37 loại (32 Trong giao dịch, 5 Định kỳ); thêm AC66–AC69.

**Tự quyết (U6):**
- Mã TB-DH08-13 do người giao việc đặt; màn nguồn là DH08 (áp dụng thay đổi ở DH08.1), nên tiền tố DH08.
- Người nhận TB-DH08-13 là tài khoản của mọi nhân sự có phân công ở hồ sơ lúc áp dụng, bất kể vai trò tài khoản (như TB-DH08-11); bỏ người áp dụng (R01); gộp một thông báo cho mỗi người (R03). Bản ghi chính là hồ sơ Tour: hai lần áp dụng khi chưa đọc thì làm mới (R04).
- Không thêm loại thông báo cho Đóng Tour hay cho việc Điều hành sửa, xóa mục Do HDV ghi (BOI-CANH chỉ nêu không báo khi Đóng Tour; sửa, xóa mục không có yêu cầu báo).

**Lệch bản ghi chính của TB-HD01-02 · đã xử lý 12/11/2026 (sau rà soát, N1):** chọn hồ sơ Tour như mục 4 và AC63. RSD HD01 R06 và AC28 sửa theo (AC28: một TB-HD01-02 “· 2 lần” khi người nhận chưa đọc); Phụ lục A dòng TB-HD01-02 ghi rõ “Bản ghi chính là hồ sơ Tour (R04)”.

## Sửa sau rà soát HD01 12/11/2026 (giữ v1.0)

Ghi tóm tắt ở dòng “Thay đổi ở v1.0 (bổ sung 12/11/2026 · sau rà soát HD01)” đầu RSD. Không đổi số loại.

- **N1 · Phụ lục A TB-HD01-02:** bản ghi chính là hồ sơ Tour; nội dung và đích theo lần ghi gần nhất.
- **T1 · E1.14, AC60:** câu báo “Không tìm thấy <Tour Code>”, cùng câu với CGD K0.09 và RSD HD01 E1.3; không phân biệt bị gỡ, Đã đóng, không tồn tại.
- **T6 · TB-DH08-08:** sự kiện “Điều hành hoặc HDV sửa (kể cả HDV xóa số của mình ở HD01), hoặc Điều hành bỏ số HDV, chi phí thực tế khi đã có quyết toán Hiện hành”. **Tự quyết:** gồm HDV xóa số vì làm đổi số chi phí thực tế như một lần sửa (RSD HD01 L4.3 bước 4).
- **T8 · AC63, AC66:** thêm giờ 26/11/2026 09:00 và hồ sơ Đã kết thúc (chi phí thực tế chỉ ghi khi Đã kết thúc; Đóng Tour cần Đã kết thúc). AC66 áp dụng v5 lúc hồ sơ còn Mới tạo (12/11/2026), Đóng Tour lúc 26/11/2026.
- **Nhẹ · TB-DH08-12, R01:** gồm đổi phân công sang nhân sự khác (gửi nhân sự cũ), khớp RSD DH08 R12.
- **Kiểm tra:** `check-rsd.py` cho RSD CH02: mã thoát 0, 0 ảnh, không lỗi.

**Kiểm tra.** `check-rsd.py`: 0 ảnh (wireframe chưa dựng; cảnh báo thiếu ảnh bỏ qua theo giao việc), không lỗi.
