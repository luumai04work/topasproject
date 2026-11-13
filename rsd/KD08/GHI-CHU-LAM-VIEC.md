# Ghi chú làm việc · RSD KD08 v1.6

## Cập nhật 12/11/2026 theo quyết định phase coding

Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `docs/rsd/BOI-CANH-DU-AN.md` (bản sửa 12/11/2026). Tệp đổi tên `RSD-KD08-Ho-so-Booking-v1.6.md` bằng `git mv`. Không đổi luồng, trạng thái Booking, tiền ngoài các quyết định dưới đây.

**Đã sửa:**
- **Q1 phân quyền.** 1.4 thành “Quyền mặc định theo vai trò” (phần × thao tác; cột Kinh doanh, Kế toán, Điều hành, Quản trị), cấu hình ở QT02. Bỏ cột “Kinh doanh · người khác”, trang “Bạn không phụ trách Booking này”, mọi điều kiện “người phụ trách” ở L1.1, L1.3–L1.5, L1.8, L2.1, L2.3, R01, R09, R10, R11, E1.1, E1.4, AC31. Chuyển phụ trách theo quyền (mặc định Kinh doanh và Quản trị); người cũ chỉ ra khỏi chip Của tôi (L1.4, AC28). Liên kết sang KD06 theo quyền xem KD06.
- **Q5.** Bỏ trạng thái Tạo lỗi của hồ sơ Tour: hồ sơ Tour, nghĩa vụ KT01, thông báo ghi trong cùng giao dịch với Booking (1.1, 1.3, 2.2, 2.3, L1.1, R08, R09, R10, 5.1). Bỏ bước W06 (giữ PNG, bỏ nhúng); AC15 viết lại thành kiểm thử “giao dịch lỗi thì không ghi gì”. Điều kiện hủy, điều chỉnh bỏ “hồ sơ Tour chưa tạo được”.
- **Q2.** “Báo Kế toán” khi lưu lịch thanh toán = thông báo in-app (L2.1, L2.3, R05–R07); bỏ email nội bộ (1.2, R13, 5.3).
- **Q3.** Bỏ nhãn “suy ra, chờ xác nhận” ở E1.6, E2.6, R13. Các mục “Tự quyết, cần xác nhận” trong tệp này coi là đã chấp nhận mặc định (Q3).
- **Q7.** R02: giao dịch lỗi thì bỏ số, cho phép thủng số; YYMM theo giờ Asia/Ho_Chi_Minh.
- **Q9.** 2.4, R05, R12: số tiền đợt làm tròn half-up theo đơn vị nhỏ nhất của loại tiền, không áp bội số làm tròn giá bán.
- **C2.** Mẫu lịch thanh toán mặc định ở tệp cấu hình hoặc dữ liệu khởi tạo (trước ghi “Quản trị cấu hình”) (R05, R12). Ngưỡng Đến hạn ghi chủ sở hữu QT05.
- **Q6.** 2.3: tình trạng đợt tính lúc đọc.

**Tự đơn giản hóa giao diện (U6):**
- Trường kế thừa ở W01 hiện dạng chữ thay vì ô viền nét đứt có 🔒 (U5).
- Người chỉ có quyền xem không thấy nhãn “… · chỉ xem”; chỉ ẩn nút ghi (U5).
- Giữ nút Thử lại trên banner “Chưa lấy được số liệu công nợ” và banner lỗi tải yêu cầu đổi lịch trình: đây là tải lại dữ liệu đọc, không phải Thử lại tạo hồ sơ đã bỏ theo Q5.

**Hình chưa cập nhật (không dựng lại, có dòng ghi chú dưới hình):** W01 (ô viền nét đứt), W09 (chip “Đã hủy theo Booking” màu đỏ), W16 (câu “Bạn không còn thấy Booking ở danh sách”), W17 (nhãn “Kế toán · chỉ xem”, ô viền nét đứt), W21 (dòng “Cách tạo · Tự động khi thu đủ đến đợt 1” còn từ trước v1.3). Thanh bên mọi hình còn mục “Chăm sóc khách hàng” (C3) — ghi một lần ở “Dữ liệu trên hình”. W06 không còn nhúng.

**Còn mở:** R01 — người tạo Booking thành người phụ trách Booking và người phụ trách yêu cầu luôn là người phụ trách Booking; khi người tạo khác người phụ trách yêu cầu (nay được phép theo Q1), suy ra người phụ trách yêu cầu đổi sang người tạo trong cùng giao dịch. Chưa ghi rõ vào RSD, chờ người dùng.

## Cập nhật v1.3 (12/11/2026) · Không có luồng duyệt, Kế toán không làm chốt chặn

**Lý do:** người dùng chốt hai yêu cầu riêng của doanh nghiệp (ghi ở `BOI-CANH-DU-AN.md`, mục Nguyên tắc đã chốt): không có luồng duyệt; Kế toán (KT01) không làm chốt chặn cho Kinh doanh và Điều hành. Ở KD08, điều kiện thanh toán để tạo hồ sơ Tour là chốt chặn của Kế toán nên bỏ; E2.6 khóa cả lịch khi KT01 lỗi cũng là chốt chặn nên nới.

**Quyết định và đã sửa:**
- **Hồ sơ Tour tự tạo khi lưu Booking** (Booking Hiệu lực), không chờ thanh toán; Điều hành nhận thông báo (RSD DH07 R01). L1.1 bước 2, 2.2, R08, 5.1, AC02, AC38.
- **Bỏ hẳn** trường Điều kiện tạo hồ sơ Tour (KD08.2, 5.2), dòng điều kiện dưới lịch thanh toán (W02–W04, W07, W17, W18), cấu hình điều kiện mặc định (R05, R12), E2.2, AC13, AC14 (mã không dùng lại), gạch “Thu đủ đến đợt n…” ở R07, phần “Chưa có (điều kiện, số còn thiếu)” ở R08, dòng 2.3, sở hữu 1.3, quyền 1.4, truy vết 1.5, việc lưu hoặc sửa lịch “kiểm tra lại điều kiện tạo hồ sơ”. Bỏ Tạo sớm, chỉ báo Tạo sớm, dòng Cách tạo (W05, W08, W09).
- **Khối Hồ sơ Tour** còn hai dạng: Đã có hồ sơ (Tour Code, trạng thái, Điều hành phụ trách, khách đoàn) hoặc “Hệ thống chưa tạo được hồ sơ · Điều hành đang xử lý” (Tạo lỗi). W06 đổi thành “Hồ sơ Tour chưa tạo được”, AC15 viết lại.
- **Nới E2.6:** KT01 không trả số liệu thì Sửa lịch thanh toán vẫn bấm được. Booking lần tải trước đã biết chưa có thu: sửa bình thường, máy chủ kiểm tra lại R07 lúc lưu (có thu thì từ chối như E2.5). Booking đã biết có thu hoặc chưa tải được lần nào: đợt chưa biết số đã thu không giảm, không xóa; thêm đợt, sửa hạn, điều khoản, tăng số tiền được. Sửa R07, R12, 5.2, AC12, thêm AC39, W18.
- **Giữ nguyên:** ràng buộc toàn vẹn R07 (đợt đã thu không xóa, không nhỏ hơn số đã thu, số đợt cố định); thông báo Kế toán khi lưu lịch (chỉ là thông báo).
- 1.3 thêm gạch “Kế toán không làm chốt chặn”; R10 ghi rõ số đã thu không là điều kiện hủy. KD08 không nhắc quyết toán là điều kiện đóng Tour nên không sửa phần đó (E1.6 chỉ nói chênh lệch sau Tour xử lý ở KT01 và quyết toán DH08.8).
- Nguồn nghiệp vụ: DH07 v1.5, DH08 v2.5, KD07 v1.2, KT01 v1.3. Tệp đổi tên `RSD-KD08-Ho-so-Booking-v1.3.md`, đã xóa tệp v1.2.

**Tự quyết, cần xác nhận (suy ra, chờ xác nhận):**
- E2.6, Booking đã biết có thu hoặc chưa tải lần nào: khi KT01 không trả số liệu, mọi đợt đang có coi là đợt chưa biết số đã thu (không giảm, không xóa); đợt thêm mới trong lần sửa đó sửa tự do. Tăng số tiền được coi là an toàn với R07.
- E2.6, Booking đã biết chưa có thu: nếu lúc lưu máy chủ vẫn không lấy được số đã thu từ KT01 thì chưa rõ xử lý (đề xuất: từ chối lưu các thay đổi giảm hoặc xóa đợt, giữ dữ liệu đang nhập); chưa ghi vào RSD.
- Ô số tiền khi bị chặn giảm ghi “Không giảm khi chưa có số liệu công nợ” (cách hiện trên giao diện).
- ~~Tạo lỗi: Kinh doanh không có nút tạo hay thử lại; Điều hành xử lý ở DH07 (theo DH07 L2.3 hiện có). Hủy Booking khi hồ sơ Tạo lỗi vẫn được; Booking đã hủy không được tạo hồ sơ nữa.~~ (bỏ từ v1.6, Q5)
- ~~Chuyển sang Điều hành khi hồ sơ Tạo lỗi: vẫn cập nhật Booking, hồ sơ tạo sau theo phiên bản hiện hành (giữ cách cũ của trường hợp “chưa có hồ sơ”).~~ (bỏ từ v1.6, Q5)

**Dữ liệu hình:** BK-2611-0158 có hồ sơ TP-2703-0001 ngay khi lưu (khớp KD07 v1.2 đang sửa: khởi hành 03/2027). W06 dùng BK-2611-0150 Hoffmann Reisen (11 khách, khởi hành 09/12/2026, khớp dòng Tạo lỗi ở DH07 W08); giá trị 18.700 EUR, yêu cầu YC-2610-0044 (mã chưa dùng), người liên hệ Petra Hoffmann là minh họa. W19: hồ sơ TP-2611-0042 tạo 14/10/2026 16:18 khi lưu Booking (thay “Đạt điều kiện … 21/10/2026”); sửa luôn thứ tự hai dòng ngày 12/11 cho đúng “mới nhất trước”. W18: Sửa lịch thanh toán bấm được.

**Kiểm tra v1.3:** `node build.js W02 W03 W04 W05 W06 W07 W08 W09 W17 W18 W19` (11 hình); sync-md, indent-images đã chạy; check-rsd.js --final: 20 ảnh, 20 mã W, exit 0. Đã xem W02, W06, W18, W19. Grep tệp mới: không còn “Tạo sớm”, “Thu đủ đến”, “Không chờ thanh toán”, “điều kiện tạo hồ sơ” ngoài mục Thay đổi ở v1.3.

**Ngoài phạm vi (chưa sửa):** DH07 v1.4 hiện có R01 (Điều kiện tự tạo hồ sơ, Tạo sớm, W08 nhóm Chờ đủ điều kiện) và dữ liệu Hoffmann BK-2611-0150 vừa ở nhóm Tạo lỗi vừa là Booking của TP-2612-0006 Park Family; agent DH07 đang sửa. KT01 v1.3 dòng 500 còn ghi “RSD KD08 v1.2 R03”; BOI-CANH, KD03-KD04, KD05, KD06 còn nhắc KD08 v1.2 ở nguồn nghiệp vụ.

## Cập nhật v1.2 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn giữa các RSD

**Lý do:** rà soát 16 RSD phát hiện KD08 v1.1 mâu thuẫn với KD05, KD06, KT01, DH08. Người dùng chốt 6 quyết định (ghi ở `BOI-CANH-DU-AN.md`); KD08 chịu tác động của Q1, Q2, Q6 và các việc kéo theo.

**Đã sửa:**
- **Q2 · Chuyển sang Điều hành tự ghi Chốt.** Ở chế độ điều chỉnh KD06 không ghi kết quả; phiên bản mới giữ Chưa có kết quả. Bấm Chuyển sang Điều hành nghĩa là khách đã chốt: một giao dịch ghi Chốt cho phiên bản mới nhất, phiên bản cũ của Booking thành Đã thay thế, Booking và hồ sơ Tour nhận thay đổi. Không bao giờ có hai phiên bản Chốt. Bỏ W13a (mã không dùng lại), bỏ nhãn “Chốt · chưa chuyển Điều hành”, thay bằng “Phiên bản mới · chưa chuyển Điều hành”. Sửa R09, L1.5, L1.6, 2.1, 2.2, E1.7–E1.11, AC22–AC27.
- **Q2 · Người phụ trách yêu cầu theo Booking.** R11, L1.4, W16, AC28, AC29: chuyển Booking thì yêu cầu chuyển theo; Điều hành phụ trách hồ sơ Tour không đổi.
- **Q1 · Hủy Booking.** R10, 2.2, L1.3, W08, W09, AC17, E1.7: yêu cầu tự chuyển Đã hủy; đặt lại bằng Mở lại yêu cầu ở KD06 (RSD KD06 R22).
- **Chính sách hoàn hủy** (KT01 R07, BOI-CANH): chụp vào Booking lúc tạo (R03, 1.3, 5.1, R12), hiện chỉ đọc ở khối Nguồn Booking KD08.1 và ở W01; AC35.
- **Số đợt cố định** (KT01 R05 phân bổ theo mã Booking + số đợt): R07, R08, 5.1, 5.2, L2.3, AC37.
- **2.3:** thêm Đã thay thế cho thay đổi chương trình (DH08) và phân biệt với Đã thay thế của phiên bản báo giá; sửa tham chiếu sai “RSD DH07 R01, R08” thành “RSD DH07 R01; KD08 R08”.
- **Yêu cầu đổi lịch trình (DH08 R18):** lối vào từ thông báo, banner trên KD08 (W21 mới), L1.8, E1.13, R13, AC36. Kinh doanh xử lý bằng Điều chỉnh chương trình rồi Chuyển sang Điều hành; KD08 không có nút phản hồi.
- **Q6:** R12 thêm Ngưỡng Đến hạn (tham số chung, mặc định 7 ngày).
- **Quản trị:** giữ quyền chuyển người phụ trách; bảng 1.4 khớp R01, R11.
- Nguồn nghiệp vụ theo bảng phiên bản đích (KD05 v1.3, KD06 v1.2, DH07 v1.4, DH08 v2.4, KD07 v1.1, KT01 v1.2).

**Tự quyết, cần xác nhận:**
- Nút Chuyển sang Điều hành **luôn** ở phần đầu (cạnh Điều chỉnh chương trình), khóa kèm lý do khi chưa có phiên bản mới hơn; thôi cách v1.1 ẩn nút và đưa Điều chỉnh chương trình vào ⋯. Lý do hiện khi di chuột (W05).
- Có nhiều phiên bản mới (v4, v5): chuyển luôn phiên bản mới nhất; phiên bản ở giữa giữ Chưa có kết quả. Muốn dùng phương án cũ thì điều chỉnh tiếp từ phiên bản đó thành phiên bản mới nhất.
- Lần bấm mang số phiên bản đang hiện; có phiên bản mới hơn ở phiên khác thì từ chối (tránh chuyển phiên bản khách chưa xem).
- Hủy Booking khi có phiên bản mới chưa chuyển: phiên bản đó giữ Chưa có kết quả (thay quyết định cũ “giữ Chốt, phiên bản Booking thành Cần điều chỉnh”).
- Chính sách hoàn hủy: chính sách theo loại Tour, không có thì mặc định; không có chính sách nào thì vẫn lưu Booking, KT01 dùng mặc định (KT01 E1.7). Chuyển sang Điều hành không chụp lại.
- Số đợt mới lấy số tiếp theo sau số lớn nhất **đã từng cấp** (kể cả đợt đã xóa), để KT01 không gặp lại số cũ. “Thu đủ đến đợt n” tính theo các đợt còn lại có số ≤ n.
- Khối Thay đổi chương trình chuyển sang cột trái (dưới hành trình) để có chỗ cho chính sách hoàn hủy.
- Banner yêu cầu đổi lịch trình chỉ có nút Xem ở hồ sơ Tour; Điều chỉnh chương trình giữ một chỗ bấm ở phần đầu. Yêu cầu đang chờ chuyển theo người phụ trách Booking mới.

**Kiểm tra v1.2:** `node build.js` dựng lại 20 hình (W01–W13, W15–W21, đã xóa W13a.png, html/W13a.html); sync-md, indent-images đã chạy; check-rsd.js --final: 20 ảnh, 20 mã W, exit 0, không cảnh báo. Đã xem W01, W05, W08, W09, W13, W16, W21.

**Lệch số liệu với màn khác (chưa sửa, ngoài phạm vi):** KT01 ghi BK-2611-0140 hủy lúc 11:05, KD08 W09 ghi 10:24; KT01 ghi chính sách của BK-2610-0137 chụp 12/10/2026, Booking tạo 14/10/2026 (W19). Hành trình BK-2610-0137 trên KD08 (ngày 4 Hội An 21/11) khác DH08 (Huế 21–23/11); W21 lấy hạng mục theo DH08 W36.


## Cập nhật v1.1 (12/11/2026) · Chuyển sang Điều hành

**Người dùng yêu cầu:** thông tin Booking (phiên bản, hành trình áp dụng) tự cập nhật lên phiên bản mới nhất khi Kinh doanh bấm nút Chuyển sang Điều hành. **Đã chốt thêm:** phiên bản mới nhất phải là Chốt (chưa Chốt thì nút khóa kèm lý do); bấm là cập nhật ngay, không hộp thoại.

**Đã sửa:** nút Cập nhật Booking theo vN → Chuyển sang Điều hành; bỏ hộp thoại so sánh W14 (đã xóa ảnh, HTML, chú thích; mã W14 không dùng lại); thêm W13a (phiên bản mới nhất chưa Chốt); chụp lại W12, W13, W15, W19. Sửa đầu tài liệu, 1.4, 1.5, 2.1, 2.2, 2.4, L1.5, L1.6, E1.7, E1.9–E1.11, E2.9, R09, R10, 5.1, AC22–AC27. Nhãn ở KD06 đổi thành “Chốt · chưa chuyển Điều hành”. Tên tệp lên `RSD-KD08-Ho-so-Booking-v1.1.md` (v1.0 chỉ còn trong ZIP cũ, ZIP mới đã đóng lại).

**Tự quyết, cần xác nhận:** nút chỉ hiện khi phiên bản mới nhất mới hơn phiên bản của Booking; khi đó Điều chỉnh chương trình vào ⋯. Hệ thống không lấy phiên bản Chốt cũ hơn khi phiên bản mới nhất chưa Chốt. Không có hồ sơ Tour thì nút vẫn tên Chuyển sang Điều hành, chỉ cập nhật Booking.

**Kiểm tra v1.1:** check-rsd.js --final exit 0, 20 ảnh, 20 mã W; đã xem W13, W13a.

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD08 · Hồ sơ Booking; chưa có RSD nên viết mới ở `docs/rsd/KD08/`; MD + PNG trong ZIP theo quy ước dự án | Toàn bộ |
| Q1 | Thay đổi chương trình sau Booking, chênh lệch giá | Tính giá lại ở KD06 (không sửa hành trình, giá ở KD08) | L1.5, L1.6, R09 |
| Q1b | Phiên bản mới vào Booking thế nào (mâu thuẫn KD06 R17, R20) | v1.2: Điều chỉnh (phiên bản mới, Chưa có kết quả) → trao đổi với khách → Chuyển sang Điều hành tự ghi Chốt cho phiên bản mới nhất, không hộp thoại (thay cách v1.1 “phải Chốt trước”); giữ mã Booking; phiên bản cũ Đã thay thế; hồ sơ Tour nhận thay đổi (DH08 L1.5) | R09, W12–W15, AC21–AC27 |
| Q2 | Lịch thanh toán: tổng so với giá trị; sửa sau khi có thu | Cảnh báo, cho lưu kèm lý do; đợt đã có thu không xóa, không giảm dưới số đã thu; đợt chưa thu sửa tự do | R06, R07, W03, W07 |
| Q3 | Hủy Booking đến lúc nào | Đến khi hồ sơ Tour Đã kết thúc, kể cả khi Tour đang diễn ra (có xác nhận) | R10, W08–W11 |
| Q4 | Chuyển người phụ trách Booking | Mặc định người tạo; người phụ trách và Quản trị chuyển từng Booking ở KD08; hồ sơ Tour không đổi. Sửa 12/11/2026 (v1.2): yêu cầu Tour chuyển theo Booking | R11, W16 |
| Q5 | Hủy Booking thì yêu cầu thế nào (rà soát 12/11/2026) | Yêu cầu tự chuyển Đã hủy; khách đặt lại thì Mở lại yêu cầu | R10, W08, W09 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Tạo Booking không có trường nhập**; Lưu Booking xong mở thẳng KD08.2 với lịch điền sẵn chưa lưu (giữ đúng W41 của KD06: tab lịch khóa khi chưa lưu). Booking có thể tồn tại khi chưa có lịch thanh toán.
2. **Mẫu lịch mặc định** (Quản trị cấu hình): 30% hạn ngày tạo + 14 ngày; 70% hạn khởi hành − 30 ngày; khởi hành trong 14 ngày thì một đợt 100% hạn ngày tạo + 3 ngày. Đây là giá trị điền sẵn, không phải quy tắc tiền bắt buộc.
3. **Nhập % hoặc số tiền**, bên kia tự tính; làm tròn theo bội của loại tiền; đợt cuối nhận phần dư.
4. **Lệch tổng**: KT01 ghi phải thu theo các đợt, không theo giá trị Booking; khoản chênh không thành phải thu.
5. **Hạn đợt** ≥ ngày tạo Booking; sau ngày kết thúc Tour chỉ cảnh báo (đại lý trả sau).
6. ~~KT01 lỗi thì khóa Sửa lịch~~ (thay ở v1.3: chỉ khóa giảm, xóa các đợt có thể đã có thu; E2.6).
7. ~~Điều kiện tạo hồ sơ chỉ sửa khi chưa có hồ sơ~~ (bỏ ở v1.3: hồ sơ tạo khi lưu Booking).
8. **Hủy khi Tour đang diễn ra**: ghi chú bắt buộc và ô xác nhận đã thống nhất với Điều hành. Lý do hủy từ danh mục mới QT05 “Lý do hủy Booking” (giá trị ví dụ).
9. **Không mở lại Booking Đã hủy** (nguồn không có); khách đặt lại thì Mở lại yêu cầu ở KD06 rồi tạo Booking mới (v1.2).
10. **Chế độ điều chỉnh ở KD06**: hành trình bắt đầu từ bản chụp phiên bản của Booking. v1.2: phiên bản mới giữ Chưa có kết quả, KD08 gọi là “Phiên bản mới · chưa chuyển Điều hành”; không có phiên bản Chốt song song (thay cách v1.1).
11. **Chuyển sang Điều hành không tự đổi lịch thanh toán**; banner lệch nhắc sửa.
12. **Đổi loại tiền qua điều chỉnh không được**: phải hủy và tạo Booking mới.
13. **Điều chỉnh chương trình bị chặn** khi hồ sơ Tour Đã kết thúc hoặc Đã đóng (cùng mốc với hủy).
14. **Hủy khi có phiên bản mới chưa chuyển Điều hành** (v1.2): phiên bản đó giữ Chưa có kết quả; phiên bản của Booking giữ Chốt, ghi Booking đã hủy; yêu cầu Đã hủy.
15. **Không lặp phần đầu ở KD08.1**: tab chỉ có hành trình, nguồn, chi tiết hồ sơ, lịch sử chương trình.
16. **Số trên tab KD08.2**: số đợt Quá hạn hoặc Đến hạn; “!” khi lệch tổng.
17. **Điều hành, Kế toán, Quản trị xem mọi Booking**, chỉ xem; Kinh doanh không phụ trách không mở được (theo phạm vi KD07).

## Thay đổi cần làm ở màn khác

- **v1.2 · DH08.** Kiểm tra lại: người nhận yêu cầu đổi lịch trình theo người phụ trách Booking hiện tại khi chuyển Booking (KD08 R11, R13); trạng thái Đã thay thế của thay đổi chương trình (KD08 2.3).
- **v1.2 · Danh sách màn (KD08).** Thêm chính sách hoàn hủy chụp lúc tạo, banner yêu cầu đổi lịch trình.

- **RSD KD06 (nâng v1.2).** *Đã làm ở KD06 v1.2 (R17 Đã thay thế, R20, R21 tự hủy, R23, R27 chế độ điều chỉnh); kiểm tra 12/11/2026.* Nội dung v1.1 dưới đây đã được thay bằng cách v1.2 (không có “Chốt · chưa chuyển Điều hành”).
  - Thêm chế độ điều chỉnh cho Booking (mở từ KD08): mở thao tác KD06.1–KD06.3 cho người phụ trách Booking khi có Booking Hiệu lực; hành trình từ bản chụp phiên bản Booking; nhãn phiên bản “Điều chỉnh cho BK-…”.
  - R17: cho phép phiên bản “Chốt · chưa chuyển Điều hành” song song với phiên bản Chốt của Booking; thêm giá trị **Đã thay thế**.
  - R20: thay “KD06 chỉ đọc khi có Booking” bằng “chỉ đọc ngoài chế độ điều chỉnh”; thay câu “Thay đổi chương trình làm ở KD08 (RSD DH08 L1.5)”.
  - Dải Đã có Booking (W42) và W47 cập nhật theo.
- **RSD DH08.** *Đã làm ở DH08 v2.4 (L1.5, R18 dẫn thông báo vào KD08, R19); kiểm tra 12/11/2026.* L1.5, R19, mục 1.2: nguồn thay đổi chương trình là nút “Chuyển sang Điều hành” ở KD08, Booking tự lên phiên bản báo giá mới nhất đã Chốt (thay cho “Kinh doanh sửa lịch trình ở KD08 rồi bấm Gửi Điều hành”); payload so sánh hai phiên bản báo giá. Phần đầu DH08 ghi phải thu bằng VND, KD08 ghi theo loại tiền Booking (đã nêu ở GHI-CHU KD07).
- **RSD KD07.** Không đổi; tab đích đã khớp.
- **KT01.** *Đã có ở KT01 (R05, R07).* Nhận nghĩa vụ theo đợt khi lưu lịch; cập nhật khi sửa; trả đã thu theo đợt; đưa Booking đã hủy vào chờ điều chỉnh.
- **DH07.** Từ KD08 v1.3: nhận sự kiện lưu Booking để tạo hồ sơ Tour ngay (không còn sự kiện lưu lịch, đổi điều kiện); Booking đã hủy không tạo hồ sơ.
- **QT05.** Danh mục mới “Lý do hủy Booking”. Thêm nhóm Chính sách hoàn hủy Booking (bậc ngày → % giữ lại, mặc định và theo loại Tour) (v1.2).
- **Quản trị.** Mẫu lịch thanh toán và điều khoản mặc định.
- **QT02.** Quyền Chuyển người phụ trách Booking (Kinh doanh: của mình; Quản trị: mọi Booking).
- **Danh sách màn (KD08).** KD08.1 bỏ “Điều hành tạo tại DH07” và các nhãn đề xuất; thêm Điều chỉnh chương trình, Chuyển sang Điều hành, Chuyển người phụ trách; KD08.2 thay “chờ đặc tả” bằng R06, R07.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy không có Python): 20 tham chiếu ảnh, 20 mã W, exit 0, không cảnh báo, không còn nhãn “Đề xuất”, “Chờ đặc tả”.
- `sync-md.js` đã đồng bộ tên hình.
- Đã xem trực quan: W02, W05, W07, W11, W14, W15. Đã sửa trước khi chụp lại: banner W20 (câu thừa), thời điểm trong lịch sử W19 (không sau hôm nay). Chưa mở: W01, W03, W04, W06, W08–W10, W12, W13, W16–W20 (cùng thành phần với ảnh đã xem).
- Không có ảnh riêng: Tạo lỗi hồ sơ, lỗi dữ liệu đợt (E2.1), xung đột khi lưu (E2.5), trang không có quyền (E1.4), cập nhật thất bại (E1.11).
- Số liệu: BK-2611-0158 50.750 = 15.225 + 35.525 EUR (KD07 đợt 1 hạn 25/11 khớp; số cũ, tính lại 13/11/2026 thành 51.710 = 15.513 + 36.197 EUR, xem mục Tính lại ví dụ giá).
 BK-2610-0137 38.420 = 11.526 + 26.894 EUR; v4 42.680 EUR (+4.260; 20 khách). Dupont BK-2611-0140 hủy 12/11, đã thu 0, khớp KD07 W17. Nordic TP-2611-0038 Đang diễn ra 08–15/11, Điều hành Phạm Thu Hà (DH07). Wagner TP-2611-0031 Đã kết thúc 08/11 (DH07).

## Cập nhật v1.4 (12/11/2026, rà soát lần hai)

- Đổi tên tệp thành `RSD-KD08-Ho-so-Booking-v1.4.md`, xóa v1.3 theo quy ước dự án.
- **Phiên bản được Chuyển sang Điều hành** (2.3, R09, L1.5, L1.6, E1.9, E1.11, thêm E1.14, AC40): đổi từ “phiên bản mới nhất (số lớn nhất) của yêu cầu” thành **phiên bản điều chỉnh mới nhất của chính Booking** (lưu ở chế độ điều chỉnh mở từ Booking này, nhãn “Điều chỉnh cho BK-…”, sau lần tạo hoặc lần Chuyển sang Điều hành gần nhất, Chưa có kết quả). Lý do: RSD KD06 E6.7, R19 cho tạo Booking từ phiên bản Chốt cũ hơn; quy tắc cũ làm nút bấm được ngay và tự ghi Chốt cho phiên bản khách đã từ chối. Lý do khóa nút đổi thành “Chưa có phiên bản điều chỉnh cho Booking này” (W05, AC16, AC34).
- **Publish proposal ở chế độ điều chỉnh: cho phép** (người dùng chốt, rà soát lần hai). L1.5 bước 2 và R09 giữ ý “gửi proposal cho khách nếu cần”, chỉnh tham chiếu sang RSD KD06 L6.5, R18, R27. Thêm AC42.
- **Hành trình khi vào lại chế độ điều chỉnh** (L1.5, R09, E1.8, E1.9, AC41): thống nhất theo RSD KD06 R27, E6.12 — lần đầu (chưa có phiên bản điều chỉnh chưa chuyển) nạp từ bản chụp phiên bản của Booking; đã có thì tiếp tục từ hành trình đang lưu, không hỏi. Bỏ câu “KD06 hỏi” (E1.8) và “tiếp từ v4” (E1.9; khách chọn phương án v4 thì sửa hành trình về phương án đó rồi lưu v6).
- **Liên kết sang KD06** (1.2, 1.4, 2.1, L1.2, L1.5, R01, AC43): chỉ Kinh doanh phụ trách và Quản trị hệ thống thấy liên kết và nút Xem vN; Điều hành, Kế toán thấy mã yêu cầu và số phiên bản dạng chữ, vì RSD KD06 R01, E2.6 không cho Điều hành, Kế toán truy cập KD06. Không có wireframe riêng cho góc nhìn Kế toán, Điều hành ở KD08.1 (mô tả bằng chữ).
- **Thay đổi chương trình Không áp dụng** (2.2, 2.3, L1.7, E1.6, R09, R10, 5.1, AC44): theo trạng thái mới agent DH08 thêm ở RSD DH08 R14, R19 (bản còn Chờ áp dụng khi Booking hủy hoặc hồ sơ sang Đã kết thúc thì Không áp dụng kèm lý do; DH08 chặn Áp dụng khi Booking Đã hủy). KD08 chỉ đọc, hiện trạng thái ở khối Thay đổi chương trình và lịch sử Booking. Lý do cụ thể ghi “(Booking đã hủy)” không đặt cứng câu chữ, theo DH08. R10: yêu cầu đổi lịch trình tự Đã rút khi hủy Booking dẫn RSD DH08 E3.15 (trước ghi nhầm R14); R13, E1.13 bổ sung.
- **Chính sách hoàn hủy** (R03, R12): bỏ trường hợp “QT05 chưa có chính sách nào” vì Chính sách mặc định là giá trị hệ thống, không xóa, không tắt (RSD QT05 R06, R20).
- Dựng lại W05 (lý do khóa mới) và W13 (dòng v4 ghi “Điều chỉnh cho BK-2610-0137”); captions.js cập nhật mô tả, tên hình không đổi nên không chạy `sync-md.js`. `check-rsd.js --final`: 20 tham chiếu ảnh, 20 mã W, exit 0.
- **Còn ngoài phạm vi:** RSD DH08 L1.5, R19 nếu còn ghi “phiên bản báo giá mới nhất” cần đổi thành phiên bản điều chỉnh mới nhất của Booking; RSD KD07, DH07 còn dẫn KD08 v1.2/v1.3; RSD KT01 E1.7 (Booking không có bản chụp chính sách) nay không xảy ra, nên KT01 có thể bỏ hoặc ghi chỉ áp cho dữ liệu cũ.

## Cập nhật v1.5 (12/11/2026, rà soát lần ba)

- Đổi tên tệp thành `RSD-KD08-Ho-so-Booking-v1.5.md`, không còn md v1.4. Không đổi luồng, không dựng lại hình.
- **Quyết định A (người dùng chốt).** R09: Booking nhận thời gian, số khách của phiên bản mới ngay khi Chuyển sang Điều hành; hồ sơ Tour giữ giá trị của phiên bản chương trình đang áp dụng cho đến khi Điều hành bấm Áp dụng ở DH08 (khớp RSD DH08 v2.8). Lý do ghi rõ: trong lúc chờ áp dụng, KD08 và DH08 hiện thời gian, số khách khác nhau là đúng thiết kế, không phải lỗi đồng bộ.
- **Loại tiền khi Chuyển sang Điều hành (R09, AC27).** KD06 R27 khóa loại tiền báo giá theo Booking ở chế độ điều chỉnh, nên trên giao diện không có phiên bản điều chỉnh khác loại tiền. Bỏ “khác loại tiền” khỏi danh sách lý do khóa nút hiển thị; giữ làm kiểm tra phòng vệ ở máy chủ (lý do từ chối cũ giữ nguyên). AC27 đổi thành kiểm thử API.
- **E1.6, R13.** Thêm trường hợp yêu cầu đổi lịch trình Chờ Kinh doanh tự Đã rút khi hồ sơ sang Đã kết thúc, lý do “Hồ sơ đã kết thúc” (RSD DH08 2.3, E3.21, mục yêu cầu đổi lịch trình). DH08 ghi “suy ra, chờ xác nhận” nên KD08 ghi giống.
- **E1.7.** Booking mới tạo ở KD08 (Tạo Booking ở KD06.3 chỉ mở KD08, L1.1), không phải “tạo Booking ở KD06”.
- **R11.** “Ngừng hoạt động” theo thuật ngữ ở `BOI-CANH-DU-AN.md`: tài khoản bị khóa hoặc không còn vai trò Kinh doanh.
- Cập nhật phiên bản RSD nguồn: KD05 v1.4, KD06 v1.5, DH07 v1.7, DH08 v2.8, KD07 v1.3, KT01 v1.5, QT05 v1.2.

## Sửa sau rà chéo 12/11/2026

- **Mục 1.2 · nơi mở khi bấm thông báo**, thống nhất theo RSD CH02 R07 và Phụ lục A: thông báo về Booking gửi Kinh doanh (được giao, chuyển cho người khác, đã hủy bởi người khác, thay đổi chương trình đã áp dụng, không áp dụng, không áp dụng được vì chạm ngày đã qua, yêu cầu đổi lịch trình đã rút) mở KD08.1; thông báo hồ sơ Tour đã tạo mở DH08 (RSD DH07 R09); thông báo lịch thanh toán thay đổi gửi Kế toán, mở KT01.1 (RSD KT01 mục 1.2). Dòng cũ “hồ sơ Tour đã tạo, lịch thanh toán thay đổi → KD08” mâu thuẫn DH07 R09 và KT01 1.2 nên đã thay. Không đổi luồng.
- **Kiểm tra.** `check-rsd.py`: 19 ảnh, 19 mã W, không lỗi.

## Tính lại ví dụ giá 13/11/2026

- Sửa tại chỗ `RSD-KD08-Ho-so-Booking-v1.6.md`, dòng “Thay đổi ở v1.6 (bổ sung 13/11/2026 · tính lại ví dụ giá)”. Giá trị Booking BK-2611-0158 lấy từ ví dụ A của `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`: 51.710 EUR (trước 50.750 EUR).
- AC06 tính theo R05: Đợt 1 = 30 % × 51.710 = 15.513 EUR (half-up 0,01 EUR, không áp bội số), hạn 11/11/2026 + 14 ngày = 25/11/2026; Đợt 2 = phần còn lại 36.197 EUR, hạn 15/03/2027 − 30 ngày = 13/02/2027. Số này cũng in ở mục 3 của tài liệu ví dụ.
- AC08: tổng các đợt giữ 50.000 EUR, nên thiếu 1.710 EUR (trước 750 EUR).
- Hình W01–W04 còn số cũ (50.750; 15.225, 35.525; thiếu 750 EUR); không dựng lại.
- Ngoài phạm vi: RSD KD07 AC17 còn ghi đợt 1 15.225 EUR; wireframe KD07, KT01 còn 50.750 và 15.225 EUR.
