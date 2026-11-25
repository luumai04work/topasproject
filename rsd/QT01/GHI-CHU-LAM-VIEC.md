# Ghi chú làm việc · RSD QT01 · Người dùng

Không thuộc bản phát hành. Tạo 12/11/2026 khi viết RSD QT01 v1.0.

## 1. Quyết định đã chốt

| Mã | Câu hỏi | Trả lời (người dùng, 12/11/2026) | Tác động |
|---|---|---|---|
| Q1 | Tài khoản mới và đặt lại mật khẩu xử lý thế nào (hành vi gửi ra ngoài) | Quản trị đặt mật khẩu tạm; hệ thống không gửi email; người dùng phải đổi ở lần đăng nhập đầu | R04, R07; L2.1, L4.1, L5.3; W08, W17, W22; mục 5.3; AC08, AC12, AC14, AC15, AC25, AC33, AC34, AC37 |
| Q2 | Một tài khoản mấy vai trò | Nhiều vai trò; quyền là hợp | R02; W02, W06, W10, W11, W13; AC03, AC16–AC18, AC20 |
| Q3 | Khóa tài khoản của người đang phụ trách bản ghi | Cảnh báo (liệt kê theo màn, có liên kết) rồi cho khóa; bản ghi giữ nguyên, Quản trị chuyển sau | R06; L5.1; W18, W19; AC27–AC29, AC31 |
| Q4 | Mật khẩu tạm có hết hạn không (thay đề xuất 72 giờ) | Không hết hạn; dùng được tới khi người dùng đổi, Quản trị đặt lại hoặc khóa | R03, R04, R07; mục 2.4, 2.5; L2.1, L4.1 (ví dụ đổi thành làm mất mật khẩu tạm), L5.3; bỏ chỉ báo Mật khẩu tạm hết hạn và dòng Hết hạn ở W08; dựng lại W01–W23; AC08, AC14, AC15, AC25 |

## 2. Thiết kế tự quyết cần xác nhận

1. Mật khẩu tự sinh 12 ký tự (bỏ ký tự dễ nhầm); mật khẩu tự nhập tối thiểu 10 ký tự, có chữ và số (R04). Hạn mật khẩu tạm: đã chốt Q4, không hết hạn.
2. **Không xóa tài khoản**, chỉ khóa (R01).
3. **Quyền QT01 gắn cố định với vai trò Quản trị hệ thống**; QT02 không cấp cho vai trò khác (mục 1.4).
4. **Lý do khóa bắt buộc** (R06).
5. **Mở khóa mặc định kèm đặt mật khẩu tạm mới**, bỏ tích được (R07).
6. **Bỏ vai trò khi đang phụ trách: cảnh báo rồi cho lưu**, cùng tinh thần Q3; người mất vai trò được các màn khác coi là “ngừng hoạt động” với bản ghi của vai trò đó (R03, R08, W12).
7. **Họ tên, điện thoại tài khoản độc lập với DH06:** điền sẵn khi tạo; khi liên kết sau thì có gợi ý “DH06: … · Dùng” nếu khác (R01, L3.2).
8. **Gợi ý vai trò theo nhóm công việc** của nhân sự (Kinh doanh, Điều hành, Kế toán) (R05).
9. **Chỉ dạng Bảng; không hàng loạt; không xuất tệp** (R10).
10. **Quản trị không tự đặt lại mật khẩu, không tự khóa mình**; luôn còn ít nhất một Quản trị hệ thống đang hoạt động (R02, R06, W13).
11. **Gỡ liên kết ghi ngay khi xác nhận** ở hộp thoại, không chờ nút Lưu (R05).
12. **Ô Đang phụ trách** trên bảng trượt và phép đếm R06 gồm cả hồ sơ Tour, công việc qua nhân sự liên kết.
13. Hệ quả của Q1: **màn Đăng nhập không có “Quên mật khẩu” tự phục vụ**; người dùng báo Quản trị để đặt lại (L4.1).
14. Đóng hộp thoại mật khẩu khi chưa sao chép thì cảnh báo một lần (E2.5).

## 3. Thay đổi cần làm ở màn khác

- **DH06.** Banner “chưa liên kết tài khoản” (RSD DH06 W08): với người có quyền QT01, câu “liên kết ở QT01” là liên kết mở QT01 Tạo tài khoản đã chọn sẵn nhân sự.
- **KD03-KD04, KD05, KD07, KD08, KD09, KD10, DH07.** Nhãn “(ngừng hoạt động)” áp dụng cả khi tài khoản **mất vai trò** cần cho bản ghi, không chỉ khi bị khóa (QT01 R03, R08). Bộ lọc Phụ trách nhận tham số trên đường dẫn để QT01 mở lọc sẵn; KD05 mở kèm chip Đang xử lý.
- **QT02.** Bốn vai trò mặc định Kinh doanh, Điều hành, Kế toán, Quản trị hệ thống; quyền QT01 không nằm trong ma trận cấp cho vai trò khác; mỗi tài khoản nhiều vai trò, quyền là hợp, phạm vi bản ghi lấy rộng nhất.
- **QT03.** Đã khớp RSD QT03 v1.0 (viết song song cùng ngày): thao tác QT01 ghi kho nhật ký với cờ nhạy cảm; mật khẩu chỉ ghi “đã đổi”; email, điện thoại che; không ghi đăng nhập. QT01 đã đổi theo: tab Lịch sử đọc kho QT03 (giá trị đã che), liên kết “Xem thao tác của người này” mở QT03 theo Người dùng, 30 ngày qua; bỏ mọi chỗ nói “nhật ký đăng nhập ở QT03”. QT03 cần thêm: cho tab Lịch sử của QT01 đọc theo đối tượng là tài khoản.
- **Màn Đăng nhập, Đổi mật khẩu, Tài khoản của tôi** (chưa có trong danh sách màn): theo QT01 R04 (bắt đổi mật khẩu tạm, quy tắc mật khẩu, thông báo tài khoản bị khóa; mật khẩu tạm không hết hạn, không có quên mật khẩu qua email). Đề xuất bổ sung vào danh sách màn.
- **Danh sách màn (`docs/flows/danh-sach-man-hinh-level1.md`).** Dòng QT01 còn ghi “Đề xuất, ngoài Level 1”; cập nhật theo Q1–Q3 nếu người dùng muốn.

## 4. Kiểm tra đã chạy

- `node wireframes-src/check-rsd.js RSD-QT01-Nguoi-dung-v1.0.md --final`: 23 ảnh nhúng, 23 mã W, không cảnh báo. `check-rsd.py` chưa chạy được vì máy không có Python.
- Đã mở xem từng ảnh W01–W23: tiếng Việt hiển thị đúng; sửa thứ tự lịch sử ở W16, ngày cập nhật ở W21, nền danh sách của W08 (sau khi tạo), vị trí thông báo ở W11, đặt các hộp thoại W15, W17, W18, W20, W22 lên trên bảng trượt.
- Đối chiếu số liệu: W01 10 + 2 = 12; W02 4 + 1 = 5; W09 11 + 2 = 13; W19 9 + 3 = 12; W23 11 + 1 = 12. Sau Q4: không còn ngày hết hạn trên ảnh nào; Nguyễn Thị Hằng hiện Chờ đổi mật khẩu ở W01, W17, W20. Số đang phụ trách của Lê Thu Hà giống nhau ở W12 và W18. Nhân sự Nội bộ chưa có tài khoản ở W05 (NS-026, NS-011, NS-006) khớp RSD DH06.
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích của người dùng; số liệu của Nguyễn Hoàng Nam (64 khách, 12 yêu cầu) khớp KD03, KD05, còn 7 Booking và 2 chiến dịch là số minh họa mới.

## 12/11/2026 · rà soát lần hai (v1.1)

Tệp mới `RSD-QT01-Nguoi-dung-v1.1.md`, đã xóa bản v1.0.

- **Lý do.** R06 ghi “người mở là Quản trị nên thấy và chuyển được mọi bản ghi”, mâu thuẫn RSD DH07 (Quản trị chỉ xem, không giao người cho hồ sơ Tour) và quyết định “Mở lại hồ sơ Tour Đã đóng” ở `BOI-CANH-DU-AN.md`. Sửa theo dòng “Ngừng hoạt động”: hồ sơ Tour chưa đóng do Điều hành giao lại ở DH07 (liên kết trong hộp thoại mở DH07 lọc theo người đó, Quản trị chỉ xem); hồ sơ Đã đóng do Quản trị hệ thống Mở lại Tour ở DH08 kèm lý do và chọn người phụ trách mới (RSD DH08 R16). Khách hàng, yêu cầu Tour, Booking, chiến dịch giữ nguyên (Quản trị chuyển).
- **Đã sửa.** 1.2 (dòng QT01 → DH07), 1.3, L5.1 bước 2 và Kết quả, E3.1, R03, R06 (bảng đếm, ghi chú hồ sơ Đã đóng không đếm, câu liên kết), R08; thêm AC38, AC39.
- **Suy ra, chờ xác nhận.** Công việc chưa hoàn tất của người ngừng hoạt động do Điều hành giao lại ở DH08 (R06).
- **Hình.** Không đổi giao diện; W12, W18 minh họa Lê Thu Hà (Kinh doanh, không có hồ sơ Tour) nên không dựng lại.
- **Kiểm tra.** `node wireframes-src/check-rsd.js RSD-QT01-Nguoi-dung-v1.1.md --final`: 23 tham chiếu ảnh, 23 mã W, không lỗi.

## 12/11/2026 · v1.2 · rà soát mâu thuẫn lần ba

Tệp mới `RSD-QT01-Nguoi-dung-v1.2.md` (đã xóa v1.1).
- **R06 (liên kết trong hộp thoại khóa).** Câu “Ở KD03, KD05, KD07, KD09 người mở là Quản trị nên thấy và chuyển được mọi bản ghi” sai với KD07: KD07 chỉ đọc, không thao tác ghi (RSD KD07 R01); chuyển người phụ trách Booking làm từng Booking ở KD08 (RSD KD08 R11). Tách KD07 ra: Quản trị xem mọi Booking của người đó, bấm dòng mở KD08 để chuyển. Ghi thêm KD05 chỉ chuyển yêu cầu Đang xử lý (RSD KD05 R08). Sửa cùng ý ở 1.2 (dòng QT01 → KD03…). Nhãn liên kết “Mở Booking → KD07” ở W18 giữ nguyên (vẫn đúng: mở KD07 lọc theo người), không dựng lại hình.
- Dẫn phiên bản dòng nguồn và R06 theo bảng phiên bản mới (DH06 v1.3, KD03-KD04 v1.4, KD07 v1.3, KD09 v1.3, KD10 v1.2, QT03 v1.1, DH07 v1.7, DH08 v2.8).
- `check-rsd.js --final`: 23 ảnh, 23 mã W, đạt.

- **Kiểm tra chéo cuối đợt rà soát lần ba (12/11/2026).** 1.5, R05: điều kiện chọn theo RSD DH06 v1.3 R03 (vai trò Điều hành; người thực hiện checklist không có tài khoản Bị khóa).

## Cập nhật 12/11/2026 theo quyết định phase coding

Tệp mới `RSD-QT01-Nguoi-dung-v1.3.md` (`git mv` từ v1.2). Nguồn: `docs/QUYET-DINH-PHASE-CODING.md`, `BOI-CANH-DU-AN.md` bản sửa 12/11/2026.

**Thay đổi**

- **Q1.** Mục 1.4 đổi thành “Quyền mặc định theo vai trò” (màn · thao tác), cấu hình ở QT02. R02 bỏ câu “phạm vi bản ghi lấy rộng nhất”. Người phụ trách ngừng hoạt động do người có quyền Chuyển phụ trách của màn sở hữu chuyển, không chỉ Quản trị (1.2, 1.3, 1.5, L5.1, E3.1, R03, R06, R08, AC28). Hồ sơ Tour: giao lại ở DH07 theo quyền (mặc định Điều hành); Đã đóng thì Mở lại Tour theo quyền (mặc định Điều hành và Quản trị hệ thống) (AC38, AC39). R08: bỏ vai trò thì mất quyền của vai trò đó, không còn “không sửa được bản ghi”.
- **C3.** Bỏ chiến dịch chăm sóc (KD09, KD10) khỏi nguồn, 1.1, 1.3, phép đếm R06, hộp thoại khóa, cảnh báo bỏ vai trò, 5.1, cấu hình phụ thuộc; AC19 còn 3 liên kết, AC27 còn 3 loại, AC28 bỏ “chiến dịch vẫn gửi”.
- **Q24, Q2.** Màn Đăng nhập và Đổi mật khẩu có đặc tả riêng; 1.3 và R04 chỉ tham chiếu (phiên 7 ngày, tạm khóa 15 phút sau 5 lần sai, mật khẩu ≥ 10 ký tự có chữ và số, bắt đổi mật khẩu tạm). R03 thêm Tạm khóa đăng nhập, khác Bị khóa. Bỏ “Tài khoản của tôi”, thay bằng màn Đổi mật khẩu (E3.2, R04).
- **Q3.** R06: bỏ nhãn “(suy ra, chờ xác nhận)” ở câu công việc chưa hoàn tất; chấp nhận mặc định (Q3). Mục 2 “Thiết kế tự quyết cần xác nhận” và mục “Suy ra, chờ xác nhận” ở v1.1 coi như đã chốt.
- **Q5.** Nhật ký QT03 ghi trong cùng giao dịch (2.6, R09).
- **Q8.** E3.3, R11, AC21: chỉ có nút Tải lại, không ghi đè.
- **U3.** Bộ lọc nhớ theo người dùng, cả sau khi đăng xuất (1.2, 2.2).
- Bỏ câu “Hạn mật khẩu tạm tính theo giờ máy chủ” ở 2.6 (mật khẩu tạm không hết hạn từ v1.0).

**Tự đơn giản hóa giao diện (U6)**

- **Gỡ liên kết nhân sự** (L3.2, R05, E3.8, AC22): bỏ hộp thoại W15, gỡ ngay kèm thông báo ngắn có Hoàn tác, thông báo ghi số hồ sơ Tour và công việc giữ nguyên (U2: thao tác hoàn tác được). Không đổi dữ liệu, quyền hay luồng.
- **Bị khóa** màu xám thay đỏ (K6).
- **Trường chỉ đọc** hiện dạng chữ thay viền nét đứt (U5).
- Giữ hộp thoại cho đặt lại mật khẩu, khóa, mở khóa (không hoàn tác được) và cảnh báo bỏ vai trò (BOI-CANH giữ “cảnh báo rồi cho lưu”).

**Hình chưa cập nhật** (đã ghi dòng ngay dưới hình)

- Mọi hình: mục menu Chăm sóc khách hàng, chữ “chăm sóc” trong mô tả vai trò Kinh doanh, “KD10” trong dòng nguồn ô Đang phụ trách (ghi chung một lần ở phần Wireframe đầu tài liệu, không lặp dưới 23 hình).
- W10, W11, W14: ô Đang phụ trách còn “2 chiến dịch chăm sóc”; W14 nút “Tải bản mới và nhập lại”.
- W12, W18: dòng và liên kết chiến dịch; W18 câu “chỉ Quản trị hệ thống chuyển được”.
- W13: “Tự đổi ở Tài khoản của tôi”.
- W15: hộp thoại gỡ liên kết đã bỏ.
- W02, W19, W21, W23: thẻ Bị khóa màu đỏ.

**Để ngỏ**

- Mục 1.4 giữ câu “Quyền QT01 gắn cố định với vai trò Quản trị hệ thống; QT02 không cấp cho vai trò khác” từ v1.0. Câu này hạn chế việc cấu hình ở QT02 (Q1); chờ người dùng chọn khi duyệt ma trận QT02.
- Trang dùng 20 dòng (2.2, 2.6), chuẩn bảng K1 là 50 dòng; không sửa, K1 thắng khi code.

**Kiểm tra**

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py`: 23 ảnh, 23 mã W, không lỗi.
- `grep` từ cấm: chỉ còn ở lịch sử phiên bản, ghi chú hình và “Thử lại” khi lỗi tải hoặc mất mạng (không phải tác động chéo).

## Sửa sau rà chéo 12/11/2026 (bổ sung v1.3)

Sửa tại chỗ `RSD-QT01-Nguoi-dung-v1.3.md`, không đổi tên tệp, thêm dòng “Thay đổi ở v1.3 (bổ sung 12/11/2026)”. Không dựng lại wireframe. Số hiệu L, E, R, AC giữ nguyên; thêm AC40–AC44.

- **Vai trò thuộc phòng (người dùng chốt 12/11/2026, RSD QT02 R13).** Chỗ cần vai trò Kinh doanh, Điều hành để chọn người phụ trách, tính Ngừng hoạt động, cảnh báo bỏ vai trò đọc là “vai trò thuộc phòng Kinh doanh, Điều hành”: 1.5, E3.1, R02 (thêm định nghĩa), R03, R05, R08. **Tự quyết:** đổi giữa hai vai trò cùng phòng (ví dụ Kinh doanh sang vai trò tự tạo thuộc phòng Kinh doanh) không cảnh báo W12 vì người đó không ngừng hoạt động (R08). Gợi ý vai trò theo nhóm công việc (R05) vẫn chỉ tích vai trò hệ thống. Thêm AC43.
- **T4 · Khóa và mật khẩu tạm.** Chọn cách an toàn: khóa làm mật khẩu tạm mất hiệu lực ngay (R04, R06, vòng đời 2.5, L5.2); mở khóa tài khoản có mật khẩu tạm lúc khóa thì ô Đặt mật khẩu tạm mới tích sẵn và khóa, máy chủ từ chối mở khóa không kèm mật khẩu tạm mới (R07, L5.3 bước 2 và 3, 5.2). Bỏ tích chỉ được với tài khoản có mật khẩu chính thức lúc khóa (AC34 ghi rõ). Thêm AC41. CH01 E11.3, AC69 sửa theo.
- **T5 · Quy tắc mật khẩu.** R04 dẫn RSD CH01 R05 làm nguồn duy nhất, cả mật khẩu tạm tự nhập và tự sinh (R04, E2.1, E4.3, 5.2). Thêm AC42.
- **T6 · Tạm khóa đăng nhập và đổi mật khẩu.** Thêm chỉ báo “Tạm khóa đăng nhập, tự hết lúc hh:mm” (vàng theo CGD K6.02) ở 2.4, nhắc ở 2.1 và R03 (tự hết sau 15 phút, không nút mở sớm, đặt lại và mở khóa không xóa). Thêm AC40. Sự kiện “Đổi mật khẩu” (tự đổi) dẫn CH01 R12 ở 2.6, R04, R09; thêm AC44.
- **N1.** R02: thông báo “Quyền của bạn vừa thay đổi” kèm nút Tải lại trang, giao diện đổi ở lần tải sau (CGD U5.05, QT02 R07).
- **N-2 (áp thêm ở QT01 cho nhất quán).** 2.6 Không có quyền theo CGD K0.09 (nút Về Việc của tôi). Tự quyết, chỉ đổi chữ.
- **Kiểm tra:** `check-rsd.py`: 23 ảnh, 23 mã W, mã thoát 0.

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **QT03 R15:** thêm dòng CH01 · Đổi mật khẩu, Đổi mật khẩu tạm (sự kiện tài khoản hiện ở tab Lịch sử QT01). Lượt này không sửa QT03.
- **DH06 R03, DH07, DH08, KD03-KD04, KD05, KD08:** điều kiện “có vai trò Điều hành/Kinh doanh” đọc là “có vai trò thuộc phòng …” (RSD QT02 R13).
- **BOI-CANH:** thuật ngữ Mật khẩu tạm ghi thêm “mất hiệu lực khi khóa tài khoản”; thuật ngữ Ngừng hoạt động ghi “không còn vai trò thuộc phòng mà bản ghi cần”.

## Bổ sung vai trò HDV 12/11/2026 (giữ v1.3)

Giữ số hiệu L, E, R, AC; thêm L2.2, E2.8, E2.9, E3.10–E3.12, AC45–AC52. Không dựng lại wireframe; W05 có ghi chú hình chưa cập nhật.

**Quyết định của người dùng (BOI-CANH “Vai trò HDV”, ADR 0007)**

- Năm vai trò hệ thống, thêm HDV. Cộng tác viên được có tài khoản, nhưng chỉ với vai trò thuộc phòng HDV. Nội bộ được liên kết với mọi vai trò.

**Tự quyết (U6)**

1. **Ràng buộc Cộng tác viên kiểm ở máy chủ ở mọi lần ghi** chạm vai trò hoặc liên kết: tạo, lưu tab Thông tin, liên kết, Hoàn tác gỡ liên kết, mở khóa (R05). Quản trị hệ thống không thuộc phòng nào nên cũng bị chặn với Cộng tác viên.
2. **Chặn trước trên giao diện:** tài khoản liên kết Cộng tác viên thì vai trò khác hiện mờ kèm lý do; tài khoản có vai trò khác thì dòng Cộng tác viên trong danh sách chọn hiện mờ kèm lý do. Đổi nhân sự trong form tạo từ Nội bộ sang Cộng tác viên thì tự bỏ tích vai trò khác phòng HDV và ghi rõ đã bỏ gì (E2.9).
3. **Gợi ý vai trò:** nhóm Hướng dẫn viên → HDV; Cộng tác viên luôn gợi ý HDV. Chỉ là tích sẵn, Quản trị sửa được (cách giảm thao tác).
4. **Danh sách chọn nhân sự:** Nội bộ trước, Cộng tác viên sau, nhãn Cộng tác viên.
5. **Bỏ vai trò HDV, khóa, gỡ liên kết tài khoản HDV không cảnh báo**: HDV không phụ trách bản ghi; phân công phục vụ ở DH08.5 giữ nguyên; Tour của tôi rỗng hoặc mất theo RSD QT02 R16.
6. **AC43** đổi VT-005 → VT-006 vì VT-005 nay là HDV (RSD QT02).

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **RSD DH06 R01, E3.2, cột Tài khoản, W05 (“Cộng tác viên không có tài khoản đăng nhập”):** Cộng tác viên có thể có tài khoản chỉ với vai trò thuộc phòng HDV; đổi Nội bộ sang Cộng tác viên chỉ chặn khi tài khoản liên kết có vai trò ngoài phòng HDV (khớp R05 ở đây).
- **Wireframe W05, W06:** khi dựng lại, thêm nhóm Cộng tác viên và trạng thái mờ của vai trò.

## Quyết định rà soát 13/11/2026

- **Quyết định rà soát 13/11/2026 (Q-RS23).** Bỏ gợi ý vai trò theo nhóm công việc (tên nhóm sửa, xóa được ở QT05): nhân sự Nội bộ không có vai trò tích sẵn khi tạo tài khoản; Cộng tác viên vẫn tích sẵn HDV (nhãn đổi từ “Gợi ý theo nhóm công việc” thành “Gợi ý”), vì Cộng tác viên chỉ có vai trò thuộc phòng HDV. Sửa 1.1, quy ước trường điền sẵn, L2.1 bước 2, L2.2 bước 1, R05, cấu hình phụ thuộc, 5.2, AC06, AC51. Wireframe chưa vẽ lại: W06 còn Điều hành tích sẵn và nhãn cũ.
- **Quyết định rà soát 13/11/2026 (Q-RS13).** Người phụ trách hồ sơ Tour (được chọn, Ngừng hoạt động) và nhóm Điều hành nhận thông báo chỉ tính vai trò hệ thống Điều hành; vai trò tự tạo thuộc phòng Điều hành không tính. Vì vậy bỏ Điều hành mà còn vai trò tự tạo thuộc phòng Điều hành vẫn có cảnh báo W12 khi nhân sự liên kết còn hồ sơ Tour chưa đóng. Sửa 1.5, R02, R03, R05, E3.1, R08; thêm AC53.
- **Quyết định rà soát 13/11/2026 (Q-RS14).** Người thực hiện công việc checklist không có tài khoản liên kết chỉ có vai trò thuộc phòng HDV. Sửa 1.5, R05.
- **Quyết định rà soát 13/11/2026 (Q-RS28).** Giao lại hồ sơ Tour của người ngừng hoạt động: chưa đóng ở DH07 hoặc nút Giao ở header DH08; Đã đóng thì Mở lại Tour, chọn người mới chỉ khi người mở lại có quyền giao phụ trách. Sửa R03, R08.

## Cách hiểu đã chọn khi làm người phụ trách ngừng hoạt động (ticket 70, 17/11/2026)

- **Đếm bản ghi (R06, W10, W12, W18).** API trả `customers`, `tourRequests` (Đang xử lý), `bookings` (Hiệu lực), `tourFiles` (chưa Đã đóng), `tasks` (công việc chưa Hoàn tất của hồ sơ chưa đóng) qua nhân sự liên kết, và `assignments` (Tour đang/sắp được phân công phục vụ). Hộp thoại W18 hiện các loại có trong bảng R06 kèm liên kết; hồ sơ Tour và công việc dùng chung một liên kết Mở Hồ sơ Tour (DH07 lọc theo nhân sự liên kết). Thêm một dòng số Tour nhân sự liên kết đang hoặc sắp được phân công phục vụ, ghi “phân công giữ nguyên”, không có liên kết (ticket 70 “đang có liên kết nhân sự được phân công” cũng được cảnh báo; R06 “khóa tài khoản HDV không đổi phân công phục vụ”); dòng này không tính vào “Đang phụ trách” (W10) và không làm cảnh báo bỏ vai trò W12 (AC52). Không phụ trách bản ghi nào mà có phân công: banner W20 kèm dòng phân công (sửa 17/11/2026 khi rà soát ticket 70, thay cách hiểu cũ “W18 không hiện phân công phục vụ”).
- **Cảnh báo W12 (R08, E3.1).** Chỉ đếm loại mà lần đổi vai trò làm mất người phụ trách: mất vai trò thuộc phòng Kinh doanh thì khách hàng, yêu cầu, Booking; mất vai trò hệ thống Điều hành thì hồ sơ Tour và công việc (Q-RS13); loại khác ghi 0. Bỏ HDV, Kế toán, Quản trị hệ thống không cảnh báo. Câu cảnh báo nêu tên các vai trò bị bỏ.
- **Liên kết lọc sẵn.** QT01 mở KD03, KD05 (chip Đang xử lý), KD07 bằng tham số `owner=<tài khoản>` kèm `mine=false`; ba màn đọc nó như bộ lọc Phụ trách của mình (`ownerId`) và giữ `owner` trên địa chỉ tới khi người dùng đổi bộ lọc. DH07 lọc theo nhân sự liên kết như trước.
- **Ngừng hoạt động hiện ở mọi màn.** Khách hàng, yêu cầu Tour, Booking: tài khoản Bị khóa hoặc không còn vai trò nào thuộc phòng Kinh doanh (vai trò tự tạo Ngừng dùng vẫn tính, QT02-AC56). Áp cho KD03, KD04 (cả tab Yêu cầu), KD05 (bảng, Kanban, Lịch), KD06, KD07, KD08, KT01.1. Hồ sơ Tour theo vai trò hệ thống Điều hành (đã có từ ticket 49), thêm ở khối Hồ sơ Tour của KD08.
- **Nhóm Kế toán nhận thông báo (QT02 R13, AC30).** Gồm mọi tài khoản đang hoạt động có vai trò thuộc phòng Kế toán (hệ thống hoặc tự tạo); chỉ nhóm Điều hành thu hẹp về vai trò hệ thống (Q-RS13).
- **Chip Của tôi bật sẵn ở KD03** chỉ cho tài khoản có vai trò thuộc phòng Kinh doanh (CGD K2.06, QT02 R13); vai trò thuộc phòng khác nhưng có quyền tạo khách (ví dụ sao chép từ Kinh doanh) vẫn thấy chip, mặc định Tất cả.
- **E5.3 (rà soát ticket 70, 17/11/2026).** `POST /api/accounts/:id/lock` trả thêm `stillOwned`: số bản ghi còn mang tên người này (khách hàng, yêu cầu Đang xử lý, Booking Hiệu lực, hồ sơ Tour chưa đóng, công việc chưa hoàn tất), đếm trong chính giao dịch khóa. Thông báo ngắn sau khi khóa ghi thêm “· n bản ghi còn mang tên <người>” khi n khác 0 (cả khi số không đổi so với lúc mở hộp thoại: câu vẫn đúng và người dùng biết còn việc phải chuyển).

## Cách hiểu đã chọn khi làm bộ lọc Nhân sự liên kết và số phiên khi khóa (ticket 93, 19/11/2026)

- **Số phiên đang mở ở hộp thoại khóa (L5.1 bước 2, W18).** Hộp thoại nêu “<người> bị đăng xuất ngay (n phiên) và không đăng nhập được nữa.” với n là số phiên đang mở, đếm cùng lần hộp thoại đếm lại bản ghi theo R06 (`GET /api/accounts/:id/ownership-impact` trả thêm `openSessions`). Phiên đang mở: chưa đăng xuất, chưa bị thu hồi, chưa quá 7 ngày không hoạt động (CH01 R07); đúng những phiên mà thao tác khóa thu hồi, nên số ở hộp thoại khớp số ở thông báo ngắn W19 khi không ai đăng nhập thêm giữa chừng. Hộp thoại luôn đếm lại khi mở (không dùng số mà ô Đang phụ trách của bảng trượt đã đọc trước đó).
- **W20 (L5.2) cũng nêu số phiên.** L5.2 bước 1 ghi hộp thoại nêu “hệ quả”, cùng danh sách hệ quả của L5.1 bước 2 (đăng xuất ngay, số phiên đang mở; không nhận thông báo…); hình W20 không có dòng này (hình chưa cập nhật). Nên W20 có cùng dòng “bị đăng xuất ngay (n phiên)”.
- **Không có phiên nào, hoặc chưa đếm được.** n = 0 hoặc lần đếm lỗi (E5.4 “Chưa đếm được”) thì dòng giữ câu không kèm số “<người> bị đăng xuất ngay và không đăng nhập được nữa.” (vẫn đúng: khóa xong không đăng nhập được); không ghi “(0 phiên)”.
- **Bộ lọc Nhân sự liên kết (2.2, W01).** Ô lọc chọn một giá trị trên thanh lọc sau ô Vai trò: Tất cả (mặc định, không ghi lên địa chỉ), Đã liên kết, Chưa liên kết (`staff=LINKED|UNLINKED` trên địa chỉ); chip đếm sau bộ lọc; Xóa bộ lọc đưa về Tất cả.
- **Nhớ bộ lọc (2.2 “Bộ lọc được nhớ theo người dùng”, U3.01–U3.06; rà soát ticket 93).** Nhớ trên máy chủ chip, Vai trò, Nhân sự liên kết, sắp xếp (không nhớ ô tìm, trang). Mở QT01 không tham số (menu) thì áp lựa chọn đã nhớ và ghi lên địa chỉ; địa chỉ có tham số thắng, không ghi đè lựa chọn đã nhớ. Màn không ghi chip Đang hoạt động lên địa chỉ; liên kết muốn mở đúng mặc định bất kể đã nhớ gì ghi `status=ACTIVE` (U3.06 “ghi tường minh mọi bộ lọc”).

## Cách hiểu đã chọn khi làm E2.6 (ticket 94, 19/11/2026)

- E2.6 cùng câu với DH06 E2.5 nên làm cùng cách (chi tiết ở `docs/rsd/DH06/GHI-CHU-LAM-VIEC.md`, mục ticket 94): bảng trượt Tạo tài khoản có dữ liệu đã nhập (đã chọn nhân sự liên kết, đã gõ Họ tên, Email, Điện thoại, đã tích vai trò, hoặc chọn Tự nhập mật khẩu) thì ✕, Esc, Hủy, bấm dòng của danh sách phía sau, liên kết Mở tài khoản của lỗi email đã dùng, mục menu, Đăng xuất đều hỏi “Bỏ thông tin đang nhập?” với Ở lại và Bỏ. Chưa nhập gì thì đóng ngay. K4.09 vẫn dành cho bảng trượt sửa tài khoản.
- Chân bảng trượt Tạo tài khoản có thêm nút **Hủy** như W05–W07 (bản trước thiếu nút này, E2.6 nêu “bấm Hủy”).
- **E3.9 “như E2.6” và K4.09 cùng đúng (rà soát ticket 94).** E3.9 nói rời bảng trượt sửa tài khoản khi còn thay đổi chưa lưu thì làm “như E2.6”: tức là cũng hỏi trước khi bỏ dữ liệu, với lựa chọn ở lại giữ nguyên dữ liệu và lựa chọn bỏ rồi rời đi, trên đúng các lối rời của E2.6. Hình thức hộp thoại cho bản ghi đã có theo chuẩn chung K4.09 (CGD là mẫu duy nhất cho form có thay đổi chưa lưu): tiêu đề “Còn thay đổi chưa lưu”, nêu số thay đổi, nút Ở lại (như Ở lại của E2.6), Hủy thay đổi (như Bỏ của E2.6) và thêm Lưu, vì bản ghi đã có thì lưu được ngay từ hộp thoại. Bảng trượt Tạo tài khoản (chưa có bản ghi) dùng đúng chữ E2.6, không có Lưu.
