# Ghi chú làm việc · Chuẩn giao diện dùng chung

Không thuộc bản phát hành. Viết ngày 12/11/2026 cùng `CHUAN-GIAO-DIEN-v1.0.md`.

## Nguồn đã đọc

- `docs/QUYET-DINH-PHASE-CODING.md`: Vòng 3 (U1–U6), Vòng 6 (K1–K6), Q8, Q19, Q24, mục Kỹ thuật (trạng thái lọc trên URL).
- `docs/rsd/BOI-CANH-DU-AN.md`: Thuật ngữ (Của tôi, Dạng xem, Dạng xem đã lưu, Đang dùng/Ngừng dùng, Thao tác nhạy cảm), Nền tảng và định dạng, Quy ước tài liệu và giao diện, Mức ủy quyền, Nguyên tắc giao diện dùng chung, Danh sách và dạng xem, Mặc định áp sau khi sửa RSD.
- `.claude/skills/sme-erp-rsd-skill/references/quy-tac-trien-khai.md` (mục 1, 2, 7, 8, 9, 12) và `tieu-chuan-dau-ra.md`.
- Mục 2 “Quy ước giao diện và xử lý dùng chung” của KD05, DH07, DH08, KD06, QT05; đối chiếu thêm KD03-KD04, KD07, KT01, DH02, DH03, DH04, DH06, DH01, QT01, QT03, QT04, QT07-QT12 để lập mục 13.
- `.scratch/topas/spec.md` (user story 16–31, cách chạy scenario qua trình duyệt).

## Bao phủ yêu cầu

| Yêu cầu | Ở đâu |
|---|---|
| Khung ứng dụng | K0.01–K0.11 |
| U1 Ctrl+K | U1.01–U1.08 |
| U2 Xác nhận, Hoàn tác | U2.01–U2.09 |
| U3 Nhớ lựa chọn, URL | U3.01–U3.07 |
| U4, U5, U6 | U4.01, U5.01–U5.05, U6.01–U6.02 |
| K1 (đủ 15 ý của quyết định và tải, lỗi tải, dòng ra khỏi bộ lọc) | K1.01–K1.24; Phụ lục B liệt kê từng ý |
| K2 | K2.01–K2.08 |
| K3 và dạng xem Bảng, Kanban, Lịch | K3.01–K3.09 |
| K4 (gồm Q8, lỗi tại trường) | K4.01–K4.13 |
| K5 (gồm Q19) | K5.01–K5.08 |
| K6 | K6.01–K6.07 |
| Phụ lục AC | 146 AC, `CGD-AC01`–`CGD-AC146` |
| Điểm RSD cũ khác chuẩn | Mục 13, 23 dòng |

Số quy tắc: 112 (K0 11, U1 8, U2 9, U3 7, U4 1, U5 5, U6 2, K1 24, K2 8, K3 9, K4 13, K5 8, K6 7).

## Điểm tự quyết

Chi tiết quyết định không ghi; lấy theo quy ước đã có ở RSD khi có, còn lại người viết đặt.

**Khung ứng dụng (K0)**
1. Mã màn chưa có RSD: CH01 Đăng nhập và Đổi mật khẩu, CH02 Thông báo, CH03 Việc của tôi, theo giao việc.
2. Thứ tự nhóm và mục ở menu trái, tên mục theo chữ “Menu … → …” đã có trong RSD. Menu thu gọn được, nhớ theo người dùng.
3. Định dạng tiền: VND dùng ₫, loại tiền khác dùng mã ISO đặt sau số (theo ví dụ trong KT01, KD06); phần lẻ bằng 0 không hiện; số âm dùng “−”. Tỷ giá tối đa 6 chữ số thập phân theo `NUMERIC(18,6)` (Q9).
4. Ô ngày nhận `d/m/yyyy`; tuần bắt đầu Thứ 2 (theo quy tắc Lịch).
5. Chuông: ẩn số khi 0, “99+” khi trên 99. Tiêu đề tab trình duyệt có mã đối tượng và số thông báo chưa đọc.
6. URL hồ sơ dùng mã đối tượng (mã không đổi, Q7); mẫu đường dẫn chỉ là ví dụ, không bắt buộc tên tham số.
7. Trang 403 không lộ dữ liệu bản ghi; 404 nêu mã.
8. Ở 1280 × 800 thấy ít nhất 10 dòng ở mật độ Gọn: con số kiểm chứng cho “thiết kế cho 1280 × 800”.

**U1 Ctrl+K**
9. Danh sách 13 loại bản ghi, thứ tự nhóm, trường khớp và đích mở; thêm Dịch vụ NCC, Mẫu tài liệu, Mẫu checklist, Tài khoản, Mục nhật ký vào “mọi mã và tên”. Không tìm theo email, điện thoại, hộ chiếu, số tài khoản (U1 chỉ nói mã và tên; tránh lộ dữ liệu cá nhân qua tìm nhanh). Không tìm giá trị QT05.
10. Tối đa 5 kết quả mỗi nhóm, dòng “Xem tất cả n” mở danh sách với ô tìm điền sẵn.
11. So mã bỏ qua “-” và khoảng trắng; xếp khớp đúng mã → bắt đầu bằng → chứa.
12. Ctrl+Enter mở tab mới; không mở tìm nhanh khi đang có hộp thoại; thời gian chờ tối đa 30 giây (như báo cáo QT07-QT12).

**U2 Xác nhận, Hoàn tác**
13. Thông báo ngắn 5 giây, có Hoàn tác 10 giây, góc phải dưới: lấy theo QT05, DH02, DH06, KD01-KD02, QT04, DH03, DH01 (đều đã ghi như vậy). Tối đa 3 thông báo; thông báo lỗi không tự đóng.
14. Định nghĩa “không hoàn tác được” (xóa vĩnh viễn, chuyển vòng đời không có đường lùi đơn giản, cấp mã); form nhập liệu là bước xác nhận, không thêm hộp thoại thứ hai.
15. Lưu form không có Hoàn tác (đã thấy thay đổi trên thanh lưu; RSD không có Hoàn tác cho lưu form). Xuất Excel không hỏi (tải về máy người dùng, không phải gửi ra ngoài; vẫn ghi QT03).
16. Hủy thay đổi làm ngay kèm Hoàn tác 10 giây thay vì hỏi xác nhận, theo đúng U2 (bỏ dữ liệu chưa lưu là hoàn tác được ở phía trình duyệt).
17. Hoàn tác mất khi rời màn (theo DH01 E4.7); không dừng đếm khi rê chuột.
18. Nút xác nhận Xóa, Hủy không tô đỏ, vì K6 dành đỏ cho việc phải xử lý (QT03 v1.2 đã đổi nhãn Xóa, Hủy từ đỏ sang xám theo K6). Con trỏ mặc định ở Quay lại cho thao tác không hoàn tác được.
19. Hộp thoại cảnh báo tác động chỉ có khi RSD đặt (DH01 ngừng dùng mẫu không có hộp thoại, giữ theo RSD).

**U3 Nhớ lựa chọn**
20. Ô tìm, trang, vị trí cuộn không nhớ qua lần mở từ menu (chỉ nằm trên URL), để mở màn không bị rỗng vì chuỗi tìm cũ.
21. Mở bằng URL có tham số không ghi đè lựa chọn đã nhớ; tham số vắng mặt lấy mặc định của màn. Lý do: liên kết từ thẻ Việc của tôi, thông báo, đồng nghiệp không làm mất bộ lọc người dùng đã đặt.
22. Lưu lựa chọn lên máy chủ, gộp các lần đổi trong 1 giây; lỗi lưu lựa chọn không báo.
23. Lọc, sắp, đổi dạng xem thay mục lịch sử trình duyệt; mở hồ sơ, bảng trượt thêm mục mới.
24. Tham số URL không hợp lệ: bỏ riêng tham số đó và báo số bộ lọc bị bỏ.

**K1 Chuẩn bảng**
25. Sắp tối đa 3 cột; bấm lần 3 bỏ sắp; ô trống luôn cuối.
26. Độ rộng cột 60–600 px; nhấp đúp mép để vừa nội dung. Chỉ cột mã ghim, không ẩn được; cột khác không ghim.
27. Cột RSD tự ẩn theo ngữ cảnh (cột Phụ trách khi Của tôi bật) vẫn tự ẩn, hiện mờ trong nút Cột kèm lý do: giữ nguyên tắc “không lặp thông tin” của RSD.
28. Mật độ: Gọn 36/52 px, Thoáng 44/60 px.
29. Phân trang: không cho đổi cỡ trang; chân bảng hiển thị trang đầu, cuối và hai trang quanh trang hiện tại.
30. Menu ⋯ chỉ hiện khi dòng có thao tác phụ; thứ tự mục: thao tác thường, Lịch sử, Xóa/Hủy. KD05 không có thao tác phụ nên vẫn không có ⋯ (không mâu thuẫn KD05 2.7).
31. Shift+bấm chọn khoảng dòng; Esc bỏ chọn. “Chọn tất cả n khớp bộ lọc” chạy trên bộ lọc lấy lại lúc chạy; banner ghi số thực tế. Thao tác hàng loạt mỗi bản ghi một giao dịch trừ khi RSD ghi khác (theo KD05 R08, KD03-KD04).
32. Thanh hàng loạt thay chỗ hàng chip.
33. Tìm 1 ký tự hiện gợi ý “Gõ thêm 1 ký tự”; Enter áp ngay.
34. Tải lần đầu 10 dòng khung xám; tải lại giữ dòng cũ mờ và thanh tiến trình; lỗi tải sau 30 giây (theo QT07-QT12 E8.2); chip ghi “–” khi lỗi.
35. Rỗng không khớp: nút Xóa bộ lọc trong vùng rỗng và ẩn liên kết ở thanh công cụ (để một việc một chỗ bấm). Gợi ý “Có m … khớp khi tắt Của tôi” theo ý KD07 E1.1.
36. Dòng ra khỏi bộ lọc mờ tại chỗ đến lần tải kế tiếp; tô 5 giây (theo DH02, DH06, QT05).
37. Xuất Excel: cột đang hiện của Bảng kể cả khi xuất từ Kanban, Lịch; dòng phụ trong ô thành cột riêng; cột cấm xuất của RSD giữ cấm; cột có trong danh sách xuất của RSD mà bảng không hiện thành cột ẩn sẵn (để vừa giữ dữ liệu RSD muốn có trong tệp, vừa theo K1). Tên tệp, dòng 1 ghi bộ lọc theo KD05 R09. Giới hạn mặc định 5.000 dòng khi RSD không ghi (theo KD05 R09).
38. Phím: Esc đóng theo thứ tự lớp; `/` không chạy khi đang gõ; ↑↓ dừng ở đầu, cuối trang; Ctrl+S luôn chặn hộp thoại lưu trang của trình duyệt.

**K2 Bộ lọc**
39. Bảng tám kiểu dữ liệu; bộ lọc tiền bắt buộc chọn loại tiền (không cộng lẫn, không quy đổi). Chọn nhiều hiện tên khi 1–2 giá trị, “n giá trị” khi từ 3.
40. Áp ngay với chọn một, có/không, chọn nhanh ngày, mỗi lần tích; số, tiền, khoảng ngày cần Áp dụng (theo KD05 2.3).
41. “+ Bộ lọc” liệt kê cả cột đang ẩn; bộ lọc thêm được nhớ, có trong dạng xem đã lưu.
42. Chip Của tôi hiện với mọi người dùng xem được màn (KD03 cũ ẩn với Quản trị); tài khoản nhiều vai trò bật sẵn nếu có một vai trò bật sẵn; chip không có số.
43. Xóa bộ lọc giữ chip trạng thái, sắp xếp, cột, dạng xem.

**K3 Dạng xem đã lưu**
44. Dạng xem đã lưu đặt trong nút “Dạng xem đã lưu” ở thanh công cụ (hai phần Có sẵn, Của tôi), không thêm chip vào hàng chip, để hàng chip vẫn là chip RSD có số đếm.
45. Nội dung: chip Của tôi, chip RSD, bộ lọc, sắp xếp, cột (theo BOI-CANH: bộ lọc, sắp xếp và cột); không gồm ô tìm, mật độ, dạng Bảng/Kanban/Lịch.
46. Tên 1–40 ký tự, không trùng kể cả với tên chip RSD; tối đa 20 dạng xem mỗi màn; xóa làm ngay kèm Hoàn tác.
47. Dạng xem mặc định dùng khi chưa có lựa chọn nhớ, khi Xóa bộ lọc, khi giá trị nhớ không hợp lệ; mở từ menu vẫn theo lựa chọn nhớ cuối (U3 thắng).
48. Kanban “chỉ xem” hiểu theo BOI-CANH: không kéo thả, không đổi trạng thái, không hàng loạt; ô Phụ trách trên thẻ Kanban DH07 (không đổi trạng thái) giữ theo RSD DH07 và mục 12 của `quy-tac-trien-khai.md`.

**K4 Màn hồ sơ**
49. Tối đa một nút chính và hai nút phụ ở phần đầu; còn lại vào ⋯. Mỗi tab tối đa một nút chính.
50. “← Danh sách” mở danh sách đã nhớ khi hồ sơ không mở từ danh sách; dòng vừa mở là dòng đang trỏ thay cho tô màu có hẹn giờ.
51. Lịch sử là bảng trượt 640 px; màn không có lịch sử riêng mở QT03 lọc theo đối tượng.
52. Thanh lưu ẩn lại khi người dùng sửa về đúng giá trị đã lưu; nút bước tiếp theo (Lập báo giá, Tính giá →) không nằm trên thanh lưu.
53. Hộp thoại chặn rời trang có ba nút Ở lại · Hủy thay đổi · Lưu (gộp ba mẫu đang có ở DH08, QT05, KD06); Ở lại là mặc định.
54. Sau Tải lại (Q8), chú thích “Bạn đã nhập: …” dưới ô người dùng đã sửa, để chép lại mà không cần nút ghi đè (gần với KT01 2.4 “giữ dữ liệu đang nhập để so”). Trước khi Tải lại, Lưu khóa.
55. Lỗi định dạng kiểm tra khi rời ô; tab có lỗi có chấm đỏ; trường bắt buộc có dấu *.
56. Trang tạo mới: thanh lưu luôn hiện; URL đổi sang mã sau khi lưu.

**K5**
57. Cỡ bảng trượt dùng khi nào: Nhỏ 640 (một cột trường, Lịch sử, chi tiết một mục), Vừa 880 (hai cột, có bảng con hoặc tab), Lớn 1100 (soạn hoặc xem trước tài liệu, bảng nhiều cột). Đổi cỡ cũ: 600 → 640, 760 → 880, 1010 và 1.060 → 1100; DH05 ở DH04 dùng cùng cỡ với DH05 ở DH03 (một đối tượng một cỡ). QT05 (880) và QT04 (1100) đã theo K5.
58. Bảng trượt không có nền che; danh sách phía sau bấm được, bấm dòng khác thì chuyển bảng trượt (hợp với DH04 chuyển dịch vụ). Một bảng trượt mỗi lúc, mở đối tượng khác thì thay nội dung, có “←”.
59. Hộp thoại 480 px, 640 px khi có bảng liệt kê; không chồng hộp thoại.
60. Tệp: kiểm tra cả nội dung tệp, từ chối tệp 0 byte, tệp trùng tên thêm “ (2)”; trong form thì tệp ghi khi Lưu, ngoài form thì lưu ngay và xóa có Hoàn tác.

**K6**
61. Sáu nhóm màu; thêm nhóm Trung tính (xám xanh) để tách khỏi xám của Đã hủy; giữ vàng “Cần chú ý” vì mọi RSD đang dùng. Ranh giới đỏ/vàng: đỏ chỉ khi đã trễ, lỗi, bị chặn, sự cố đang xảy ra; việc cần làm chưa trễ là vàng (khớp số trên tab Đặt dịch vụ của DH08 đang là vàng).
62. Bảng ánh xạ trạng thái của 20 đối tượng. Đổi màu so với RSD: hồ sơ Mới tạo (xám → xám xanh), Đã kết thúc (tím → xanh lá), Đã đóng (xám nhạt gạch ngang → xám không gạch); chữ cam của DH02 → vàng; Chưa có hợp đồng (xám → xám xanh). Tím chỉ còn cho nhãn chế độ và nguồn.
63. Chữ trên nút: “+ Thêm …” thay “Tạo …” cho nút tạo bản ghi từ danh sách (theo giao việc); thao tác nghiệp vụ sinh đối tượng (Tạo Booking, Lập báo giá, Tạo bằng AI) giữ tên. “Quay lại” cho nút đóng hộp thoại xác nhận; “Đóng” cho bảng trượt chỉ xem; “Thử lại” cho lỗi tải, lưu; “Tải lại” chỉ cho xung đột.

## Hòa giải khi nguồn vênh nhau

- `quy-tac-trien-khai.md` mục 7 ghi phạm vi “chọn tất cả” chỉ trong trang; K1 chốt “Chọn tất cả n dòng khớp”. Chuẩn theo K1: ô tiêu đề chọn trang, liên kết riêng chọn theo bộ lọc (đã có ở KD05 R08, KD03-KD04).
- KD05 2.7 “Liên kết Xóa bộ lọc chỉ ở thanh lọc” và K1 “trạng thái rỗng có Xóa bộ lọc”: chuẩn đặt nút trong vùng rỗng và ẩn liên kết ở thanh công cụ trong trạng thái đó, giữ một chỗ bấm.
- K1 “xuất đúng các cột đang hiện” và KD05 R09 (danh sách cột cố định, cấm email, điện thoại): chuẩn theo K1 cho cách chọn cột, giữ điều cấm của RSD (điều cấm là quy tắc dữ liệu cá nhân, không phải quy ước giao diện).
- Chuyển sang Điều hành (KD08) chạm giá trị Booking nhưng BOI-CANH chốt không hộp thoại: U2.01 ghi rõ chốt riêng của BOI-CANH được giữ.
- KD03-KD04 2.7 Lưu khóa khi chưa có thay đổi, QT01 tương tự: chuẩn theo K4 (thanh lưu ẩn).
- Khóa tài khoản (QT01) xếp vào “không hoàn tác được” vì mở khóa phải cấp mật khẩu tạm; hộp thoại khóa của QT01 vừa là xác nhận vừa liệt kê bản ghi đang phụ trách.

## Việc cần làm ở tài liệu khác (không sửa trong lượt này)

- **BOI-CANH:** mục “Nguyên tắc giao diện dùng chung” dẫn tới `docs/rsd/CHUAN-GIAO-DIEN/CHUAN-GIAO-DIEN-v1.0.md`; thêm thuật ngữ “Thông báo ngắn” (phân biệt với Thông báo) và “Mặc định của màn”.
- **18 RSD:** khi nâng phiên bản, sửa các điểm ở mục 13 và dẫn mã CGD thay cho câu quy ước tự viết ở mục 2.x; AC dựa trên 20 dòng mỗi trang (ví dụ KD05 AC25) dựng lại dữ liệu.
- **`quy-tac-trien-khai.md` mục 7:** phạm vi chọn tất cả theo K1.13.
- **`.scratch/topas/spec.md`:** mục “Chưa có RSD” bỏ chuẩn component K1–K6; nguồn scenario giao diện chung là Phụ lục A.
- **CH01, CH02, CH03, QT02:** dẫn K0.06, K0.07, U4.01; CH03 cần bảo đảm số trên thẻ bằng số dòng danh sách đích (CGD-AC48).

## Câu hỏi cho người dùng

Không có câu hỏi chặn. Hai điểm người dùng có thể muốn đổi:
- (Đã trả lời 12/11/2026: có tìm, cho người có `KD03.xem`; xem mục cuối.) Ctrl+K không tìm theo email, điện thoại của khách (U1 chỉ nói mã và tên).
- Nút xác nhận Xóa, Hủy không tô đỏ để giữ “đỏ chỉ cho việc phải xử lý”. Nếu muốn nút nguy hiểm màu đỏ như thói quen chung thì sửa K6.01, K6.04, CGD-AC144.

## Kiểm tra đã chạy

- Đếm bằng `grep`: 112 quy tắc, 146 AC đánh số liên tục `CGD-AC01`–`CGD-AC146`, khớp dòng Tổng ở Phụ lục A.
- Mọi mã quy tắc được dẫn trong tài liệu đều có định nghĩa.
- Không còn nhãn “chờ xác nhận”, “đề xuất” (chỉ còn nhãn sản phẩm “Đề xuất AI” của KD06 trong K6.04, đặt trong ngoặc kép).
- Đã đối chiếu quyền mặc định dùng trong AC: KD04 (Quản trị chỉ đọc, Kế toán không có), KD07 (Kế toán xem), DH03 (Kinh doanh không có Xem thông tin thanh toán NCC).
- Chưa kiểm tra: hiển thị trên trình xem Markdown đích; chưa đối chiếu với CH01–CH03, QT02 vì chưa có đặc tả.

## Sửa sau rà chéo 12/11/2026

Giữ số phiên bản 1.0; không đánh lại mã quy tắc và mã AC; thêm CGD-AC147–AC150 (tổng 150 AC). Ghi tóm tắt ở dòng “Bổ sung 12/11/2026” đầu tài liệu.

**Quyết định của người dùng**

- **Ctrl+K tìm khách theo email và điện thoại** cho người có `KD03.xem` (U1.02, U1.03, U1.05; AC147, AC148). **Tự quyết:** email khớp chuỗi con không phân biệt hoa thường; điện thoại chỉ so khi chuỗi gõ có từ 6 chữ số, so theo chữ số, khớp chuỗi con; dòng kết quả ghi trường khớp. Cả nhóm Khách hàng theo `KD03.xem` (Gồm của mã này là “Tìm, lọc, mở hồ sơ”); mở dòng theo `KD04.xem`.

**Phát hiện của người rà soát**

- **N1 · U5.05, CGD-AC54, K6.06.** Bị thu hồi quyền giữa phiên theo QT01 R02 và QT02 R07: thông báo “Quyền của bạn vừa thay đổi” kèm nút Tải lại trang, giữ dữ liệu form để chép, giao diện đổi ở lần tải sau (bỏ cách cũ “màn tải lại quyền và ẩn nút ngay”). K6.06 thêm dòng “Tải lại trang” là ngoại lệ của dòng Tải lại.
- **N2 · U4.01.** Thẻ số 0 theo CH03 R04 (gom vào dòng “✓ Không có: …”), bỏ câu “thẻ 0 vẫn hiện”.
- **N3 · U3.06, CGD-AC48.** Giữ “mở bằng URL không ghi đè lựa chọn đã nhớ”; thêm “liên kết do hệ thống tạo ghi tường minh mọi bộ lọc của đích trên URL”. CGD-AC48 dùng thẻ VT-KD-01 của CH03 với số và dữ liệu cụ thể. CH03 R03 (câu “giá trị lọc vừa mở trở thành bộ lọc nhớ”) trái U3.06, người khác sửa.
- **T2 · K0.08, K0.11, K4.09.** Phiên hết hạn khi trang còn thay đổi chưa lưu: không chuyển trang, banner, đăng nhập ở thẻ mới (CH01 L3.3 bước 3, R10); khóa tài khoản thì chuyển ngay. K4.09: nút Lưu khi phiên đã hết thì ở lại trang, không rời đi. Thêm CGD-AC150.
- **T3 · U1.03.** Cột “Cần quyền xem” ghi mã quyền QT02 Phụ lục A cho đủ 13 dòng: `KD06.xem`, `KD08.xem`, `DH08.xem`, `KD03.xem`, `DH03.xem`, `DH04.xem`, `KD01.xem` (Tour mẫu), `DH06.xem`, Giao dịch theo loại (`KT01.xem-phai-thu` cho Thu từ khách, Hoàn cho khách; `KT01.xem-phai-tra` cho Chi trả NCC, Nhận hoàn từ NCC), `QT04.xem`, `DH01.xem`, `QT01.xem`, `QT03.xem`. Thêm CGD-AC149.
- **T10 · U2.06.** Ghi ngoại lệ QT02: Hoàn tác thao tác nhiều ô của một vai trò là tất cả hoặc không.
- **N-3 · K0.05, mục 1.** Tên màn QT02 “Vai trò và phân quyền”.
- **N-8 · U3.06, K1.18.** Bỏ cụm “phạm vi người dùng được xem” (Q1 không có phạm vi bản ghi).
- **N-10 · K0.06.** Ngoại lệ không có thanh trên: CH01.1 và Đổi mật khẩu chế độ bắt buộc.
- **N-12 · K0.10.** Số (n) trên tiêu đề tab cập nhật cùng nhịp với chuông theo CH02 R08 (60 giây khi thẻ hiện).
- **AC viết lại cho kiểm chứng được:** CGD-AC48, AC54 (nêu dữ liệu, thao tác, kết quả); AC82 (KD05, so chuỗi email, điện thoại trong tệp); AC83 (đặt giới hạn thử 100 dòng trong tệp cấu hình); AC131 (bốn hộp thoại đại diện, đếm ô nhập); AC146 (danh sách nút và hộp thoại cụ thể, danh sách chữ cấm). **Tự quyết:** AC82 không kiểm thông báo “Không xuất cột …” vì chưa màn nào hiện cột email, điện thoại trên bảng; khi có màn như vậy thì scenario của màn kiểm.

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **CH03 R03:** bỏ câu “giá trị lọc vừa mở trở thành bộ lọc nhớ của màn đích”; URL của thẻ ghi tường minh mọi bộ lọc (U3.06).
- **CH02:** liên kết trong thông báo ghi tường minh mọi bộ lọc của đích (U3.06).
- **QT01 2.6:** đã sửa cùng đợt theo K0.09.

## Bổ sung vai trò HDV 12/11/2026 (giữ v1.0)

Giữ mã quy tắc và mã AC cũ; thêm mục 14 (K7.01–K7.13), dòng 24 ở mục 13, CGD-AC151–AC163 (A.12). Số quy tắc: 125 (thêm K7 13).

**Nguồn:** BOI-CANH Nền tảng (“các màn của phòng HDV thiết kế cho điện thoại”) và “Vai trò HDV”; yêu cầu bổ sung 12/11/2026 nêu các điểm của K7 (chiều rộng 360–430 px, một cột, thanh dưới cùng hoặc thanh trên gọn, vùng chạm ≥ 44 px, thẻ thay bảng, form một cột, bảng trượt thành trang toàn màn hình, chụp ảnh chứng từ, thông báo ngắn và Hoàn tác như U2, khung K0 thu gọn).

**Tự quyết (U6)**

1. **K7 đặt ở mục 14** sau “Điểm RSD cũ khác chuẩn”, để không đánh lại số mục 13 mà nhiều RSD đã dẫn.
2. **CH01 dùng bố cục K7 khi vùng hiển thị hẹp hơn 768 px**; HD01 luôn dùng K7, kể cả trên máy tính (rộng tối đa 600 px, căn giữa). Màn máy tính mở trên điện thoại vẫn là bố cục máy tính, cuộn ngang (K0.01 không đổi).
3. **Khung thu gọn:** thanh trên 56 px có chuông và ☰; menu mở toàn màn hình, chỉ mục có quyền; thanh dưới cùng chỉ khi RSD có 2–5 lối cấp một. Không có Ctrl+K trên khung thu gọn (không có bàn phím).
4. **Mục Tour của tôi trên menu trái** hiện theo quyền `HD01.xem` như mọi mục (K0.05). Quản trị có `HD01.xem` cố định (Q25) nên thấy mục này; danh sách thường rỗng vì Quản trị không liên kết nhân sự.
5. **Danh sách thẻ tải 20 thẻ, nút Xem thêm**, không tự tải khi cuộn (tiết kiệm dữ liệu di động, dễ kiểm thử).
6. **Nút chính của form ở thanh đáy dính luôn hiện** (khác K4.07 trên máy tính: thanh lưu chỉ hiện khi có thay đổi), vì trên điện thoại người dùng cần thấy chỗ lưu ngay; chưa có thay đổi thì khóa kèm lý do.
7. **Ảnh HEIC chuyển JPG ở trình duyệt** để giữ danh sách định dạng của Q19 (chỉ JPG, PNG).
8. **Không có chế độ ngoại tuyến** (K7.11): BOI-CANH không nêu; giữ cách lưu lỗi có Thử lại của U2.
9. **Thông báo ngắn trên điện thoại giữ tối đa 3** như U2.07, chỉ đổi vị trí, để Hoàn tác không khác máy tính.
10. **K0.09:** hồ sơ ngoài phạm vi phân công ở HD01 hiện “Không tìm thấy <mã>” (theo RSD QT02 R16, không lộ hồ sơ có thật); nút về trang mặc định theo phòng.

**Cần sửa ở tệp ngoài phạm vi lượt này**

- **RSD HD01 (đang viết):** dẫn K7 cho bố cục; chọn các lối của thanh dưới cùng (K7.04), 3 dòng thông tin của thẻ (K7.06), thao tác nào có Hoàn tác hay hỏi xác nhận (U2.01, U2.02).
- **BOI-CANH, Nguyên tắc giao diện dùng chung:** câu tóm tắt có thể thêm “K7 màn điện thoại cho HD01”.

## Sửa sau rà soát HD01 12/11/2026 (giữ v1.0)

Không đổi số quy tắc (125) và số AC (163). Ghi tóm tắt ở dòng “Bổ sung 12/11/2026 (sau rà soát HD01)” đầu tài liệu.

- **N2 · K7.06, CGD-AC156.** Thêm “danh sách nào RSD ghi tải một lần (HD01 R02) thì không có Xem thêm”; CGD-AC156 viết lại trên HD01.1 (25 hồ sơ, đủ 25 thẻ, không Xem thêm). Nhánh 20 thẻ và Xem thêm không còn AC riêng; RSD HD01 chưa ghi cách tải cho các danh sách khác (khách đoàn, dòng thời gian, chi phí), nên khi chốt cách tải các danh sách đó thì thêm AC cho nhánh này.
- **N2 · K7.09.** RSD HD01 R07, L4.1, E4.1, AC26 sửa theo K7.09 (nút Chụp ảnh, Chọn tệp; HEIC đổi sang JPG). Chuẩn không đổi.
- **N2 · CGD-AC161.** HD01 không có thao tác Hoàn tác (RSD HD01 mục 2.5): AC viết lại thành kiểm thông báo ngắn ở đáy màn không có Hoàn tác (U2.03) và xóa qua hộp thoại. Ý “Hoàn tác trong 10 giây trên điện thoại” của K7.10 chưa có màn dùng.
- **T2 · K0.11.** Ngoại lệ đăng xuất khi HD01 còn bản chưa gửi trên máy (RSD HD01 E5.5; RSD CH01 R11, E8.6, AC83).
- **Nhẹ · K7.11.** Dẫn RSD HD01 R08 làm ngoại lệ (bản chưa gửi giữ trên máy, Gửi lại do người dùng bấm).
- **Kiểm tra:** `check-rsd.py` cho CHUAN-GIAO-DIEN: mã thoát 0, không lỗi.

## Khi code ticket 03 (13/11/2026): khung K0 (U6)

Không đổi luồng, trạng thái, quyền, tiền hay hành vi gửi ra ngoài.

- **K0.05.** Menu trái có đủ mục của bảng K0.05, ẩn theo quyền Xem; mục của màn chưa code mở trang không tìm thấy cho tới ticket của màn. KT01 hiện khi có một trong ba quyền xem của ba tab. Tên nhóm in hoa bằng CSS. Thu gọn menu thành cột biểu tượng và nhớ trạng thái (U3) làm cùng hạ tầng nhớ lựa chọn ở ticket 12.
- **K0.06.** Thanh trên hiện có tên TOPAS (về trang mặc định) và menu tài khoản (họ tên, vai trò, chọn ngôn ngữ theo ADR 0008, Đăng xuất). Ô Tìm nhanh Ctrl+K ở ticket 32, chuông Thông báo ở ticket 26, mục Đổi mật khẩu ở ticket 07.
- **K0.09.** Trang không có quyền: tiêu đề, tên màn, nút về trang mặc định. Trang không tìm thấy với đường dẫn không có màn: “Không tìm thấy <đường dẫn>” và cùng nút; tiêu đề tab là chữ đó.
- **K0.10.** Tiêu đề tab đặt theo tên màn ở menu; tiền tố “(n) ” số thông báo chưa đọc ở ticket 26.
- **K0.03, K0.04.** Hàm định dạng dùng chung (`packages/shared/src/format.ts`) cho mọi ngôn ngữ giao diện: giao diện tiếng Anh vẫn hiện ngày `dd/mm/yyyy` và số kiểu 1.250.000.

- **13/11/2026 · người dùng chốt · CGD-AC37 với ô bật/tắt tại chỗ** (ví dụ ma trận QT02): lưu lỗi thì ô hiện lại giá trị trước khi bấm; thông báo ngắn lỗi “Chưa lưu được.” có nút Thử lại gửi lại đúng lần bấm đó (QT02 E2.4). “Dữ liệu đã nhập giữ nguyên” hiểu là thao tác vừa làm được giữ để gửi lại.

- **13/11/2026 · điều phối · lượt rà scenario (áp K6.06, U3.04, U3.06):**
  - Nút lưu của form, bảng trượt tạo mới là **Lưu** (ví dụ QT01 tạo tài khoản, DH03 tạo NCC); nút ở thanh tiêu đề vẫn “+ Thêm <đối tượng>”.
  - Nút lấy dữ liệu mới ở CH03 là **Tải lại** (K6.06 không dùng “Làm mới”).
  - Hộp thoại xác nhận giữ chữ hành động của RSD trên nút chính (ví dụ DH06 “Tắt nhận phân công”); nút còn lại luôn là **Quay lại**.
  - Mặc định “Của tôi” do màn áp và ghi tường minh trên URL; API danh sách không tự áp mặc định, nhận tham số lọc rõ ràng.
  - Mã thao tác chống gửi lặp chỉ đi qua header `x-topas-request-id`.

## Quyết định rà soát 13/11/2026

- **Quyết định rà soát 13/11/2026 (Q-RS09).** K0.04 thêm ngoại lệ “dán từ Excel vào lưới nhập”: ô dán được nhận dạng kiểu số (có cả hai dấu thì dấu sau cùng là thập phân; một loại dấu xuất hiện nhiều lần hoặc một lần trước đúng ba chữ số là ngăn cách nghìn; còn lại là thập phân; quá số lẻ thập phân của loại tiền thì lỗi tại ô). Gõ tay giữ quy tắc cũ. Thêm CGD-AC164 (A.1), dòng Phụ lục B; tổng 164 AC. Quy tắc nhận dạng cụ thể là cách hiểu của người viết cho câu “nhận dạng kiểu số” của quyết định; áp ở RSD DH03 R16.

**17/11/2026 · ticket 55 (cách hiểu đã chọn, K1.14 và K3.09).** Khi đang chọn dòng, thanh hàng loạt thay chỗ hàng chip (K1.14); bộ chuyển dạng xem “ở cuối hàng chip” (K3.09) vì thế đứng ở cuối thanh hàng loạt, để đổi dạng được ngay khi đang chọn (AC109); đổi dạng thì bỏ lựa chọn.

## Khi code ticket 84 (18/11/2026): nhóm Giao dịch của Ctrl+K

- **Dòng kết quả** (U1.03 dòng 9 “Mã, loại giao dịch, số tiền, ngày, trạng thái”; U1.04 “mã, tên, một thông tin phụ, nhãn trạng thái”; sửa sau review 18/11/2026): mã đậm; chỗ tên là loại giao dịch (Thu từ khách, Hoàn cho khách, Chi trả NCC, Nhận hoàn từ NCC); thông tin phụ “số tiền · ngày”; mọi dòng có nhãn trạng thái theo K6.02 hàng Giao dịch: “Hiệu lực” nhóm Hoàn tất, “Đã hủy” xám. (Cách hiểu trước “chỉ giao dịch đã hủy có nhãn, như bảng trượt KT01” bỏ: U1.03, U1.04 đòi trạng thái trên mỗi dòng.)
- **Thứ tự trong nhóm** (sửa sau review): khớp đúng mã, rồi bắt đầu bằng, rồi chứa (so mã bỏ dấu gạch, U1.02); cùng mức thì giao dịch cập nhật gần nhất trước. “Cập nhật” là lần ghi cuối của giao dịch: lúc ghi, lúc sửa ngày chứng từ, tệp, ghi chú (KT01 R12) hoặc lúc hủy (cột `updated_at`; giao dịch có trước cột này lấy lúc hủy, không thì lúc ghi).
- “Xem tất cả” và đích mở: xem `docs/rsd/KT01/GHI-CHU-LAM-VIEC.md` mục ticket 84.

## Khi code ticket 88 (18/11/2026): Ctrl+K đủ 13 nhóm, nút theo quyền, trang không tìm thấy

- **Khớp trên mọi bản ghi, “Xem tất cả n” theo ô tìm của danh sách (sửa sau review).** Nhóm so theo trường của U1.03 trên mọi bản ghi của loại; ô tìm của mọi danh sách sau nhóm (KD05, KD07, DH07, KD01, DH06, QT04, QT01, KT01, QT03) so mã như nhóm: bỏ “-” và khoảng trắng, khớp chuỗi con (K1.15 “khi so mã bỏ qua “-” và khoảng trắng (như U1.02)”; một hàm chung `listSearch` của packages/shared): “bk26110001”, “2611 0001” khớp BK-2611-0001 ở cả nhóm và danh sách. “Xem tất cả n trong <danh sách>” mở danh sách với mọi bộ lọc ở Tất cả và chuỗi gõ trong ô tìm (U3.06); n là số dòng danh sách đó hiện cho chuỗi này (U1.04). n còn có thể khác tổng của nhóm khi danh sách tìm theo trường khác U1.03 (DH02 2.3 không tìm mã NCC; DH07 mở một chip).
- **Dòng của từng nhóm** (U1.03, U1.04): Yêu cầu Tour: mã, khách, thời gian đi (hoặc “Tháng mm/yyyy” khi chưa chốt ngày), trạng thái KD05; Booking: mã, khách, ngày khởi hành, Hiệu lực/Đã hủy; Hồ sơ Tour: Tour Code, khách, thời gian, trạng thái DH07 (hồ sơ không có tên đoàn riêng: khớp theo tên khách và mã Booking); Dịch vụ NCC: tên dịch vụ, NCC (không có mã); Tour mẫu: mã, tên, “n ngày”, Đang dùng/Ngừng dùng; Nhân sự: mã, họ tên, nhóm công việc; Mẫu tài liệu: mã, tên, loại, Đang dùng/Ngừng dùng; Mẫu checklist: tên, loại Tour, Đang dùng/Ngừng dùng (không có mã); Tài khoản: họ tên, vai trò, Đang hoạt động/Bị khóa (khớp email thì dòng phụ ghi “Email: …”); Mục nhật ký: mã TT, người, thời điểm · thao tác.
- **Đích mở:** Yêu cầu Tour mở tab đích theo KD05 R07; Dịch vụ NCC mở bảng trượt chỉ xem của DH04 (`/services?includeHidden=true&service=<id>`); Mục nhật ký mở bảng trượt của mục ở QT03 trên danh sách tìm theo mã đó, mọi thời gian.
- **Danh sách của “Xem tất cả”:** KD05, KD07 chip Tất cả, tắt Của tôi; DH07 không có chip Tất cả (DH07 2.3) nên mở chip đầu tiên trong Đang mở, Đã kết thúc, Đã đóng có dòng khớp, n là số dòng của chip đó; DH04 bật “Gồm ngừng dùng, hết hạn” (U1.04: bản ghi Ngừng dùng vẫn hiện); KD01, DH06, QT01, DH01, QT04 chip/trạng thái Tất cả; QT03 thời gian Tất cả (ô tìm của QT03 khớp thêm mã thao tác, xem `docs/rsd/QT03/GHI-CHU-LAM-VIEC.md`). Booking và Hồ sơ Tour chỉ đếm n khi nhóm có hơn 5 kết quả (chỉ khi đó mới có dòng “Xem tất cả”).
- **Mục ⋯ bị khóa (U5.02):** tên của mục là nhãn của nút, lý do là phần mô tả hiện dưới nhãn (không gộp vào tên), để mục khóa và mục dùng được có cùng tên.
- **K0.09 với KD06 E2.7:** URL tới yêu cầu không tồn tại hiện “Không tìm thấy <mã>” với nút “Về Việc của tôi” (K0.09, CGD-AC09) và giữ nút về danh sách của E2.7 bên cạnh (xem `docs/rsd/KD06/GHI-CHU-LAM-VIEC.md`).
- **K0.09 trên mọi màn hồ sơ (sửa sau review):** KD06, KD08, DH08, KD04, DH03 mở bằng mã không tồn tại cùng hiện “Không tìm thấy <mã>” với nút “Về Việc của tôi” (thành phần chung `RecordNotFound`); câu và nút riêng của màn giữ bên cạnh: KD06 E2.7 và DH08 E1.1 nút về danh sách, KD04 câu “Khách hàng này không còn tồn tại”, DH03 E2.6 câu “NCC không còn tồn tại” với Thử lại, Về danh sách NCC.
- **Tên của nút ⋯ (K4.05):** RSD không đặt tên cho nút ⋯ (CGD K4.05 chỉ vẽ ký hiệu); KD08, DH08 đặt tên đọc được “Thao tác khác” (scenario kd07 dựa vào tên này), màn hồ sơ khác để ký hiệu “⋯”. Scenario `cgd/permission-ui` nhận cả hai tên.
- **Nhãn nút theo K6.06 (mục 13 hàng 17, 18):** “+ Thêm mẫu” (DH01, QT04), “Chuyển phụ trách” trong ⋯ của KD08.

**18/11/2026 · ticket 89 (cách hiểu đã chọn khi rà K3, K5, K6).**
- **Đợt “Còn hạn” màu trung tính (K6.02) ở mọi nơi**, kể cả thẻ Lịch hạn thanh toán của KD07: RSD KD07 R14, W13 ghi “xanh dương Còn hạn”, nhưng K6.01 áp cho thanh Lịch và K6.02 xếp Còn hạn vào Trung tính; mục 13 ghi “RSD viết trước chuẩn này … theo chuẩn”. Trung tính vẽ màu xám xanh, khác màu xám (sửa sau review 18/11/2026, xem mục dưới).
- **Thanh Lịch mang nhóm màu (K6.01):** thanh của KD05, KD07, DH07 và thẻ KD07 mang `data-tone` theo trạng thái; ở dòng thời gian DH07, thanh viền đỏ nét đứt (chưa giao) hoặc hổ phách (vừa đổi người, E5.5) vẫn mang nhóm màu của trạng thái hồ sơ.
- **Công tắc nhận phân công DH06 (K6.05):** tên đọc được của công tắc là “Đang dùng · <họ tên>” như mọi công tắc khác; cột vẫn tên “Nhận phân công”.
- **Dạng xem đã lưu ở KD05 (K3):** KD05 có nút Dạng xem đã lưu (CGD-AC100 lấy KD05 làm ví dụ, AC131 mở Lưu dạng xem từ KD05). Dạng xem giữ Của tôi, chip, bộ lọc, sắp xếp, cột (K3.03; không giữ ô tìm, trang, dạng Bảng/Kanban/Lịch, tháng của Lịch); dạng xem có sẵn là bốn chip trạng thái; dạng xem mặc định áp khi mở từ menu mà chưa có lựa chọn đã nhớ và là đích của Xóa bộ lọc (K3.07). Nút có ở cả ba dạng xem; Cột, Mật độ chỉ ở Bảng.

**18/11/2026 · ticket 89, sửa sau review (Trung tính khác Xám).**
- K6.01 tách Trung tính (“Xám xanh”) và Xám. Bộ kit wireframe thêm lớp xám xanh (giá trị của `.tag.lg` DH06): nhãn `.badge.b-slate`, thanh và thẻ Lịch `.ev.slate`, ô chú thích `.dot.slate` (thêm vào `lib.js`, `views.js` của các RSD rồi sinh lại `wireframe.css`). Nhãn Trung tính dùng `b-slate`, nhãn Lưu trữ (Đã hủy, Ngừng dùng, Bị khóa) giữ `b-gray`.
- Lịch: thanh, thẻ Trung tính (hồ sơ Mới tạo ở DH07, đợt Còn hạn ở KD07) màu xám xanh; hồ sơ Đã đóng xám không gạch ngang (CGD-AC143); Booking, yêu cầu Đã hủy xám có gạch ngang (hình KD05, KD07). Thẻ KD07 không có số liệu KT01 (E4.5) xám thường, khác thẻ Còn hạn, không mang nhóm màu.

**19/11/2026 · ticket 95 (cách hiểu đã chọn: Hoàn tác 10 giây kiểm ở máy chủ, U2.02, U2.06).**
- **Mốc 10 giây là lúc thao tác thành công** (U2.06 “kể từ khi thao tác thành công”), đo bằng đồng hồ máy chủ từ lúc thao tác ghi xong (thao tác một giao dịch: lúc việc ghi xong, ngay trước khi giao dịch kết thúc; thao tác hàng loạt ghi từng bản ghi như chuyển phụ trách hàng loạt KD03, KD05, giao hàng loạt DH07: lúc lần chạy xong). Một mã thao tác không phải thao tác mà Hoàn tác đó đảo (khác loại, khác bản ghi) vẫn là “không tìm thấy”, dù cũ bao lâu. Áp cho mọi Hoàn tác máy chủ chạy (mục 2.3 của RSD DH02, DH06, QT05, KD01-KD02 “Trong 10 giây và chưa có ai đổi tiếp”), kể cả hai Hoàn tác không ghi QT03: Đánh dấu tất cả đã đọc (CH02 E1.12) và xóa dạng xem đã lưu (K3.06; trước đây máy chủ cho khôi phục trong một giờ).
- **Hoàn tác tới máy chủ sau 10 giây** (nút còn trên màn vì câu trả lời chậm hoặc đồng hồ trình duyệt chạy chậm): không ghi gì, thông báo ngắn lỗi **“Đã quá 10 giây, không hoàn tác được nữa”**, không có Thử lại (gửi lại vẫn bị từ chối; muốn đổi lại thì làm thao tác ngược, U2.06). Cùng mã lỗi `UNDO_EXPIRED` đã dùng cho chuyển phụ trách (KD03-KD04 R04).
- **Ngoại lệ giữ nguyên:** QT02 Hoàn tác tất cả hoặc không (U2.06) vẫn có hạn 10 giây, chỉ khác ở chỗ không hoàn tác một phần; Hoàn tác trên dữ liệu chưa lưu (lưới, Hủy thay đổi) chạy ở trình duyệt, không qua máy chủ.

**19/11/2026 · ticket 92 (cách hiểu đã chọn, U3 và K1.19).**
- **“Trong phiên” của RSD cũ là U3.02.** RSD DH02, DH04, DH06, KD01, KD05 mục 1.2 ghi “mở với bộ lọc lần trước trong phiên”, viết trước U3.02 (nhớ trên máy chủ theo tài khoản, còn sau khi đăng xuất). Nhớ trên máy chủ giữ cả lựa chọn trong phiên, nên mọi câu cùng đúng; mục 13 “RSD viết trước chuẩn này … theo chuẩn”. DH04 nhớ cả ngày sử dụng, số khách của thanh Tính giá (RSD DH04 1.2 nêu tên), không nhớ ô tìm, trang, bảng trượt đang mở.
- **URL không tham số là mở từ menu (U3.06).** Mỗi danh sách luôn ghi ít nhất một tham số khi người dùng đổi gì đó (chip, Của tôi, hoặc sắp xếp ở DH04), nên `/customers`, `/staff`, `/services`, `/bookings` không tham số là lối vào từ menu: áp lựa chọn đã nhớ (chưa có thì mặc định theo vai trò) rồi ghi lên URL. KD07 nhớ bộ lọc ở lựa chọn `list` (Của tôi, chip, Khởi hành, Thanh toán, Yêu cầu đổi lịch trình, Phụ trách, sắp xếp), dạng xem và mốc vẫn ở lựa chọn `calendar` (ticket 55).
- **K1.19 dòng mới tạo.** Áp cho bản ghi tạo từ nút tạo của danh sách: trang tạo riêng (KD03, KD01, KD05, DH02) khi quay lại danh sách từ hồ sơ vừa tạo, hoặc bảng trượt trên danh sách (DH06, QT04). Tạo bằng địa chỉ trang tạo không qua danh sách thì chỉ có nhãn Mới, không tô (như DH02 W17). Dòng nằm đúng chỗ theo thứ tự máy chủ trả, tô nền xanh nhạt 5 giây. Nằm ngoài trang đang xem: thông báo ngắn “<mã> nằm ngoài trang đang xem.” kèm liên kết “Mở <mã>” (U2.07); khi tạo trong bảng trượt, liên kết đi kèm chính thông báo “Đã thêm …” của màn, không thêm thông báo thứ hai. QT04 không phân trang và thông báo tạo đã có “Mở mẫu” (RSD QT04), nên chỉ thêm tô dòng.
- **Sửa sau review (ticket 92).** KT01 cũng nhớ tab, chip, bộ lọc (U3.01 nêu tên “tab đang mở ở KT01”; xem `docs/rsd/KT01/GHI-CHU-LAM-VIEC.md`). Chỉ lưu khi phần được nhớ thật sự đổi so với trạng thái đang hiện: đổi trang, đổi tháng của một danh sách mở từ liên kết không ghi gì (U3.06), màn tự đưa về trang cuối (K1.09) không phải lựa chọn. KD03 hiện chip Của tôi với mọi người dùng, tắt sẵn với Quản trị (mục 13 dòng 5). Thông báo tạo trong bảng trượt hiện ngay khi danh sách không tải được.
