# Ghi chú làm việc · RSD KD10 v1.2

## Cập nhật v1.2 (12/11/2026) · Rà soát mâu thuẫn lần ba

**Theo quyết định người dùng D (mẫu email chiến dịch theo KD10):** Remarketing điền và chụp nội dung mẫu vào bước lúc soạn hoặc lưu bước, sửa được, không chặn bật vì mẫu của bước đã ngừng dùng. Survey chụp phiên bản mẫu hiện hành khi bật lần đầu, chặn bật nếu mẫu Survey đã ngừng dùng; bật lại sau Tạm dừng không tự lấy bản mới, muốn dùng mẫu mới thì tạm dừng và chọn lại.

- [x] R10: tách hai gạch con Survey, Remarketing theo quyết định D. R04 (Survey cần mẫu đang dùng; Remarketing không xét mẫu) và E1.3 (thuộc mục Survey) đã khớp, không sửa. R16 dòng mẫu: Survey chặn bật, Remarketing không chặn. E3.3: “mẫu Survey”, thêm câu mẫu của bước Remarketing ngừng dùng không phải lỗi. Tự quyết: chọn lại mẫu Survey trong lúc Tạm dừng thì bản chụp mới lấy lúc bật lại (hiểu từ “tạm dừng và chọn lại”).
- [x] L2.2 bước 2, R16, 5.2: “mẫu email chăm sóc hoặc remarketing” thành “mẫu email chăm sóc”, vì QT04 R02 và BOI-CANH chỉ có loại Email chăm sóc.
- [x] L5.3: điều kiện Survey hoặc Remarketing (khớp L5.1, R13); hệ quả “không nhận các bước sau” ghi rõ là của Remarketing.
- [x] Mục “Thay đổi cần làm ở màn khác · DH08”: câu “tính lại khi đóng lại” đánh dấu lỗi thời (trái R05, E4.4). Câu “mẫu email remarketing” ở mục QT04.1 cũng là cách gọi cũ, nay là mẫu email chăm sóc.
- [x] Nguồn nghiệp vụ: KD09 v1.3, KD03-KD04 v1.4, KD05 v1.4, KD06 v1.5, DH08 v2.8; thêm QT04 v1.3.
- Không dựng lại wireframe: W08, W21 không đổi giao diện hay chú thích.

## Cập nhật v1.1 (12/11/2026) · Đồng bộ sau rà soát mâu thuẫn

**Theo quyết định người dùng (BOI-CANH):** Q3 người phụ trách hiện tại và Quản trị hệ thống chuyển người phụ trách chiến dịch (ở KD09). Q1 hủy Booking thì yêu cầu Tour Đã hủy; “Đang xử lý” là yêu cầu không Đã hủy và không có Booking Hiệu lực. Thuật ngữ Ngày đóng Tour (Survey dùng ngày đóng lần đầu), Lần gửi có kết quả Đang gửi, Đã gửi, Gửi lỗi, điều kiện xóa khách “chưa có lần gửi nào, kể cả Gửi lỗi”.

**Việc “cần sửa” đã làm:**
- [x] R01, 1.3: chuyển người phụ trách là người phụ trách hiện tại và Quản trị (KD09 R11). KD10 không có hộp thoại chuyển nên không có hình đổi.
- [x] E5.4, L5.2, 1.4: không cho Gửi lại khi Tạm dừng, khớp L3.1 (“không có email nào … cho tới khi bật lại”) và AC22. AC50 mới. Không có hình riêng cho E5.4 (W18, W19 là chiến dịch Đang chạy) nên không dựng hình.
- [x] R09: mốc dừng luồng là lần gửi đầu tiên khách nhận của chiến dịch (kể cả khách vào nhóm từ bước sau), so với thời điểm tạo yêu cầu (KD06 v1.2); lần Gửi lỗi không làm mốc; bỏ “trừ khách dừng luồng” lặp với R08. 5.1 Yêu cầu Tour: thời điểm tạo. Đầu tài liệu sửa “sau khi nhận bước 1”. AC49 mới.
- [x] R05, R08, E4.4, R16, 5.1: Survey chỉ xét Tour đóng không phải kết thúc vì Booking đã hủy; mốc n ngày theo ngày đóng lần đầu; mở lại thì Survey chưa gửi bị bỏ, đóng lại không tính lại hạn (khớp RSD DH08 v2.4 R16, AC55); Tour gần nhất theo ngày đóng lần đầu; “Đang xử lý” theo KD05/KD06 mới. AC51 mới.
- [x] E5.6: điều kiện xóa khách “chưa có lần gửi nào, kể cả Gửi lỗi”.
- [x] L5.1, R13: chip Hủy nhận có cả ở Survey. AC52 mới. Hình W17, W20 thêm chip “Hủy nhận 0” và dựng lại.
- [x] 2.3: “mở khóa tab Lịch sử gửi”.
- [x] Lối KD10.2 → DH08 và tên tab KD04 “Chăm sóc và phản hồi” giữ nguyên.
- `check-rsd.js RSD-KD10-Ho-so-chien-dich-cham-soc-v1.1.md --final`: sạch (26 ảnh, 26 mã W). Đã xóa tệp v1.0.

**Tự quyết, cần xác nhận:** lần gửi Gửi lỗi (chưa gửi lại thành công) không làm mốc dừng luồng; Tour đã mở lại trước khi Survey được gửi thì cặp khách–Tour bị bỏ hẳn, không xét lại khi đóng lại (theo DH08 R16).

Tài liệu này không thuộc bản RSD. Nó lưu các quyết định đã chốt và các thiết kế do người viết tự quyết, cần người dùng xác nhận.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Câu hỏi | Trả lời | Tác động |
|---|---|---|---|
| Q0 | Màn cần viết, hướng làm | KD10 · Hồ sơ chiến dịch chăm sóc (KD10.1, KD10.2); chưa có RSD nên viết mới; `rsd/KD10/`; MD + PNG trong ZIP | Toàn bộ tài liệu |
| Q1 | Khách trả lời Survey thế nào | Trang Survey của hệ thống, link riêng mỗi lần gửi, tự ghi phản hồi; hạn 30 ngày, một lần trả lời | R12, L6.1, W23–W25, AC40–AC42 |
| Q2 | Nhóm khách Remarketing | Tiêu chí, tính lại mỗi bước; bỏ được từng khách | R08, L2.1, W06, W07, AC14, AC15, AC19 |
| Q3 | Lịch bước và dừng luồng | Ngày giờ cố định; khách có yêu cầu Tour mới sau bước 1 (v1.1: sau lần gửi đầu tiên khách nhận của chiến dịch) hoặc tắt nhận email thì không nhận bước sau; sửa chỉ khi Nháp hoặc Tạm dừng | R02, R09, R14, L3.1, L3.2, W11–W13, AC20, AC27 |
| (KD09) | Trạng thái, quyền, duyệt | Ba trạng thái; xem chung, người phụ trách sửa; không duyệt; người phụ trách hiện tại và Quản trị chuyển phụ trách ở KD09 (chốt lại 12/11/2026) | R01, R02 |

## Thiết kế do người viết tự quyết, cần xác nhận

1. **Bật có hộp thoại xác nhận** nêu đợt đầu, số khách, địa chỉ gửi (W04, W09). Không có bước duyệt (Q KD09).
2. **Gửi thử tới email của chính người dùng** ở xem trước mẫu và soạn bước; không tạo lần gửi.
3. **Survey gửi theo đợt hằng ngày** ở giờ gửi (mặc định 09:00); khách đến hạn khi ngày đóng Tour + n ≤ ngày đợt và ≥ ngày bật lần đầu (R05). Phạm vi theo loại Tour và quốc gia.
4. **Mỗi khách–Tour chỉ một Survey trên toàn hệ thống**; Survey bật trước được ưu tiên; cảnh báo chồng phạm vi khi bật, không chặn (R06).
5. **Gửi bù khi bật lại Survey** là lựa chọn, mặc định không (R07).
6. **Gửi tới khách của Booking** (cá nhân hoặc liên hệ chính), không gửi từng thành viên đoàn (R05).
7. **Tiêu chí nhóm** (R08): quốc gia/nhóm quốc gia, loại khách, ngôn ngữ, nguồn khách, số Tour đã đi, Tour gần nhất, loại Tour đã đi, bỏ khách đang có yêu cầu Đang xử lý (mặc định bật). Khách mới khớp không nhận bù bước trước.
8. **Tối đa 5 bước**; bước sau gợi ý +14 ngày; bước đầu phải sau hiện tại ít nhất 15 phút; English bắt buộc.
9. **Nội dung chụp lại khi bật**; sửa hoặc tắt mẫu QT04.1 không đổi chiến dịch đang chạy (R10).
10. **Người gửi là địa chỉ chung** (care@…), trả lời về người phụ trách (R10).
11. **Ngôn ngữ email** theo ngôn ngữ giao tiếp của khách, không có thì English.
12. **Thử lại tự động 3 lần trong 1 giờ** với lỗi tạm thời; **gửi lại thủ công** chỉ khi lỗi tạm thời, bị từ chối, không xác định, hoặc email đã đổi (R11). Gửi lại ghi trên cùng lần gửi; Survey có link mới.
13. **Tạm dừng giữa lúc gửi**: lần đã giao vẫn đi; phần còn lại gửi khi bật lại nếu trễ dưới 24 giờ (E3.1). Hệ thống ngừng quá 24 giờ thì đợt bị lỡ không tự gửi (E4.2).
14. **Không theo dõi mở email** (không ảnh theo dõi); chỉ ghi lần mở trang Survey (R12).
15. **Trang hủy nhận cần bấm xác nhận** để tránh trình quét thư tự hủy; doanh nghiệp hủy nhận áp dụng cả khách (R13).
16. **Xóa nháp** chỉ với chiến dịch chưa từng bật (R15); không chuyển phụ trách ở KD10 (dùng KD09).
17. **Không cảnh báo hai chiến dịch gửi cùng ngày cho một khách** ở bản này (E2.5).
18. **Mã lần gửi** minh họa `SV-0315-0042`; định dạng mã lần gửi để nhóm phát triển quyết.

## Thay đổi cần làm ở màn khác

- **Danh sách màn (KD10, KD10.1, KD10.2).** Bỏ “Tiêu chí phân nhóm và tạm dừng chiến dịch chờ đặc tả”; bỏ “hạng khách hàng” ở cột Danh mục của KD10.1 (thay bằng quốc gia, nguồn khách, loại Tour); KD10.2 thêm Gửi lại phần lỗi.
- **QT04.1.** Mẫu Survey gồm email mời và bộ câu hỏi (điểm 0–10, sao 1–5, văn bản; bắt buộc hay không), nhiều ngôn ngữ; mẫu email remarketing có tiêu đề, nội dung theo ngôn ngữ; danh sách trường trộn theo R10.
- **QT05.** Nhóm quốc gia (Châu Âu, Châu Á, Bắc Mỹ…); loại Tour, nguồn khách đã có.
- **Quản trị (cấu hình).** Địa chỉ gửi chung và tên hiển thị; hạn link Survey (30 ngày); thử lại tự động; giờ gửi mặc định; dịch vụ gửi email.
- **KD03-KD04.** KD04.4 mở KD10 tab Lịch sử gửi với ô tìm là mã khách; hiển thị Hết hạn chưa phản hồi; R11 ghi thêm chiến dịch, lần gửi nguồn khi khách tự hủy nhận; doanh nghiệp hủy nhận áp dụng cả khách.
- **KD09.** Đã sửa R04 (số khách đến hạn theo KD10 R05, R06). Số “n gửi lỗi” giảm khi gửi lại thành công (đã có ở R03).
- **QT06.** Phản hồi theo R12 (Hết hạn chưa phản hồi không tính phản hồi); không có số mở email.
- **DH08.** ~~Mở lại Tour đã đóng làm Survey chưa gửi bị bỏ, tính lại khi đóng lại (E4.4).~~ Lỗi thời từ v1.1: mở lại Tour làm Survey chưa gửi bị bỏ hẳn, không gửi và không tính lại hạn khi Tour đóng lại, vì mốc n ngày luôn theo ngày đóng lần đầu (R05, E4.4; khớp RSD DH08 R16). Đánh dấu ở v1.2.

## Kiểm tra đã thực hiện

- `wireframes-src/check-rsd.js --final` (bản Node; máy không có Python): 26 tham chiếu ảnh, 26 mã W, không cảnh báo; mỗi ảnh nhúng một lần; mọi mục con của mục 3 có ngoại lệ.
- `sync-md.js` đồng bộ tên hình với `captions.js`; `indent-images.js` không phải sửa.
- Mã W đã đánh lại liên tục W01–W26 (bản dựng đầu bỏ sót W06).
- Đã xem trực quan sau lần chụp cuối: W01, W02, W04, W06, W07, W08, W10, W11, W13, W14, W18, W19, W20, W23. Đã sửa: W08 (nội dung bị vỡ dòng), W19 (lệch cột), W11, W13 (chữ tràn), W02, W14 (nhãn điền sẵn trên bản đã lưu). Chưa mở lại: W03, W05, W09, W12, W15, W16, W17, W21, W22, W24, W25, W26 (cùng khung với ảnh đã xem).
- Số liệu đối chiếu với KD09: CD-2603-001 47 lần = 46 đã gửi + 1 lỗi, 19 phản hồi; CD-2609-001 186 = 182 + 4 lỗi, 3 hủy nhận, 185 khớp, 179 nhận được; sau gửi lại 3 lần (2 thành công) còn 184 + 2 lỗi. CD-2610-001: 64 khớp, 57 nhận được (5 tắt email, 2 thiếu email). Lần gửi Survey: Tour đóng + 7 ngày = ngày gửi; hạn link = ngày gửi + 30 ngày. Müller 08/11 chưa phản hồi, Van den Berg 06/11 gửi lỗi khớp KD04.4 và KD09.
