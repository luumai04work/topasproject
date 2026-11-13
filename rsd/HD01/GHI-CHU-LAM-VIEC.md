# Ghi chú làm việc · RSD HD01 v1.0

Tài liệu này không thuộc bản RSD. Nó ghi các quyết định đã chốt, các thiết kế người viết tự quyết, các thay đổi cần làm ở màn khác, câu hỏi cho người dùng và các kiểm tra đã chạy.

## Quyết định đã chốt với người dùng (12/11/2026)

| Mã | Nội dung | Tác động trong RSD |
|---|---|---|
| H1 | Thêm vai trò hệ thống HDV (phòng HDV) cho người dẫn đoàn, gồm Cộng tác viên; vẫn có vai trò tự tạo thuộc phòng HDV | 1.4; RSD DH06 R01 |
| H2 | HDV chỉ thấy và chỉ ghi trên hồ sơ mình được phân công, từ lúc phân công đến khi hồ sơ Đã đóng; gỡ phân công thì mất quyền (ADR 0007) | R01, mục 2.3, E1.3, E2.8, E3.4 |
| H3 | HDV xem chương trình theo ngày, dịch vụ đã đặt, liên hệ NCC, Rooming list, khách đoàn (hộ chiếu che) | L2.1–L2.4, R03 |
| H4 | HDV ghi nhật ký, sự cố, chi phí phát sinh, chi phí thực tế kèm ảnh chứng từ; ghi thẳng, nhãn Do HDV ghi, không duyệt; Điều hành phụ trách nhận thông báo và sửa được; Kế toán ghi công nợ như mục Điều hành ghi | L3.x, L4.x, R04, R06; RSD DH08 R20 |
| H5 | Màn của HDV thiết kế cho điện thoại; màn khác vẫn cho máy tính | Mục 2.5 |
| H6 (mặc định Q3) | “Được phân công” là có ít nhất một phân công ở DH08.5, bất kể vai trò phục vụ | R01 |
| H7 (mặc định Q3) | HDV không thấy giá bán, giá vốn, Markup, công nợ, quyết toán, thông tin thanh toán NCC, Tour của đoàn khác | R03 |
| H8 (mặc định Q3) | HDV chỉ sửa, xóa mục của chính mình khi hồ sơ chưa Đã đóng | R05 |
| H9 (giao việc) | Mã quyền `HD01.xem`, `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi`; mã thông báo TB-HD01-01, TB-HD01-02, TB-DH08-11, TB-DH08-12 dùng cố định | 1.4, R06; RSD DH08 R12 |

## Quyết định chốt thêm (12/11/2026, sau khi viết bản đầu; BOI-CANH “Vai trò HDV”, đoạn “Người dùng chốt thêm”)

| Mã | Nội dung | Tác động trong RSD |
|---|---|---|
| H10 | HDV xem số hộ chiếu đầy đủ, chỉ Tour được phân công; hiện che, bấm Hiện số mới hiện; mỗi lần hiện ghi QT03 (ngoại lệ “không ghi lượt xem”) | L2.3, R03, R11, E2.9, E2.10, AC41–AC43; RSD QT03 R01, R15 |
| H11 | HDV thấy và gọi được điện thoại của Điều hành phụ trách, khách trong đoàn (nếu có số), người liên hệ chính phía khách hàng trên Booking | 2.1, L2.5, R03, R12, E2.11, AC09, AC44, AC45 |
| H12 | Không xem ngoại tuyến; giữ nội dung đang ghi để gửi lại; tải được PDF chương trình theo ngày không giá | 2.5, L2.6, R13, E2.12–E2.15, AC46–AC48 |
| H13 | Điều hành áp dụng thay đổi chương trình thì mọi HDV được phân công nhận thông báo (TB-DH08-13, mã người giao việc đặt) | L1.2, E2.6, R06, AC49; RSD DH08 L1.5, R19; RSD CH02 A.3 |
| H14 (mặc định Q3) | Vai trò thuộc phòng HDV chỉ có mã HD01 và màn chung; QT02 khóa mọi mã khác | 1.4; RSD QT02 R04 |
| H15 (mặc định Q3) | HDV không có Lưu và chuyển Kế toán | L4.3, R20 của DH08 |
| H16 (mặc định Q3) | Điều hành sửa và xóa được mục Do HDV ghi; mỗi lần ghi QT03 | R04, E3.6, E3.8, E4.9, AC51, AC52; RSD DH08 L6.4, L7.3, L8.1, R20 |
| H17 (mặc định Q3) | HDV cập nhật kết quả sự cố thì Điều hành phụ trách nhận TB-HD01-01; HDV không nhận thông báo khi Đóng Tour | L3.3, R06, 2.3, AC49, AC50; RSD CH02 A.3 |

## Thiết kế do người viết tự quyết (U6)

1. **Mã tab HD01.3, HD01.4.** Nhật ký và sự cố là HD01.3, Chi phí là HD01.4, nằm trong chi tiết Tour (thanh tab dưới), để mục 3 tách luồng theo tab.
2. **Thứ tự nhóm trên HD01.1:** Đang diễn ra, Sắp khởi hành, Đã kết thúc chưa đóng (đoàn đang dẫn lên đầu). Không phân trang, không chip lọc, không Kanban, Lịch.
3. **Sắp khởi hành = hồ sơ Mới tạo**, kể cả khi đã qua ngày khởi hành mà Điều hành chưa bấm Bắt đầu Tour (ghi “Chờ bắt đầu”).
4. **HD01 luôn lọc theo phân công của chính tài khoản, với mọi tài khoản** (kể cả Quản trị có `HD01.xem` cố định theo Q25, hoặc tài khoản có thêm vai trò Điều hành). Lý do: màn là “Tour của tôi”; HD01 không cấp thêm dữ liệu nào ngoài DH08; người có quyền rộng dùng DH08. Không mở rộng phạm vi bản ghi sang vai trò khác (ADR 0007 Consequences).
5. **Hồ sơ ngoài phạm vi trả như không tồn tại**, không phân biệt “bị gỡ”, “Đã đóng”, “không có”, để không lộ sự tồn tại của hồ sơ.
6. **Che hộ chiếu theo quy tắc danh sách của DH08 (giữ 4 ký tự đầu, 2 ký tự cuối), làm ở máy chủ; số đầy đủ qua Hiện số (đã chốt, H10).** Không hiện ngày sinh, ngày hết hạn, visa, ghi chú cho Điều hành của khách; điện thoại khách hiện nếu có (H11); không hiện liên hệ nhân sự khác, trừ điện thoại Điều hành phụ trách (H11).
   - **Hiện số chỉ từng khách, không có “Hiện tất cả”** (tự quyết, bổ sung 12/11/2026). Lý do: mỗi lần chỉ lộ một số, mục QT03 nêu đúng khách; thủ tục cả đoàn (khách sạn, du thuyền) đã có Pax list Điều hành gửi NCC. Số tự che sau 60 giây, khi bấm Che, rời tab hoặc tải lại; không lưu trên máy, không vào PDF.
   - **Mục QT03 của Hiện số:** nhóm thao tác mới “Xem dữ liệu cá nhân”, nhãn Hiện số hộ chiếu, có cờ nhạy cảm; số trong mục che theo QT03 R07; ghi trong cùng giao dịch, ghi lỗi thì không trả số.
   - **Lối liên hệ:** Điều hành phụ trách ở phần đầu (dòng 3, nút gọi); người liên hệ phía khách hàng ở khối đầu tab Khách đoàn; điện thoại khách trên dòng khách. Điện thoại người liên hệ lấy ở KD04 (Cá nhân: điện thoại của khách; Doanh nghiệp: điện thoại người liên hệ). DH08 mục 5.1 có trường điện thoại của khách đoàn (không bắt buộc ở 5.2), nên không thêm trường.
7. **Dịch vụ hiện ở HD01:** mọi hạng mục chưa Đã hủy, nhãn trạng thái theo DH08 R02 nhưng nhãn chưa xác nhận hiện xám kèm “Điều hành đang xử lý”; có mã xác nhận, yêu cầu gửi NCC, tên NCC, đầu mối chính (DH03). Không hiện email, giá, loại tiền.
8. **Chi phí phát sinh: HDV chỉ thấy khoản do chính mình ghi**; khoản do Điều hành hoặc HDV khác ghi không hiện (là dữ liệu chi phí của công ty). Nhật ký và sự cố: **HDV chỉ thấy mục do chính mình ghi** (người dùng chốt 12/11/2026, A; thay câu cũ “thấy mọi mục của hồ sơ”). Số sự cố đang xử lý trên tab và thẻ chỉ đếm sự cố của mình, để không lộ số mục của người khác. Chứng từ của khoản do người khác ghi không trả; mọi đường tải tệp kiểm quyền, phạm vi, người ghi mỗi lần tải (R03).
9. **Chi phí thực tế (bước 1):** HDV chỉ thấy danh sách dịch vụ đã xác nhận và số do chính mình ghi; không thấy giá gợi ý, chênh lệch, dòng phí hủy, số người khác ghi. Vì không thấy giá xác nhận, **ghi chú luôn bắt buộc** với dòng HDV ghi (lưu vào lý do chênh lệch của DH08.8) để không lộ giá qua việc hệ thống báo “có chênh lệch”.
10. **“Mục của mình” ở chi phí thực tế** là dòng có số lưu gần nhất do chính tài khoản lưu qua HD01; dòng Chưa có số thì HDV nào trong phạm vi cũng ghi được. Điều hành lưu số khác thì dòng đổi sang nguồn Điều hành (RSD DH08 R20). Với nhật ký, sự cố, chi phí phát sinh thì người ghi là người tạo, Điều hành sửa không đổi nhãn.
11. **Nguồn = màn ghi.** Ghi qua HD01 là nguồn HDV, ghi qua DH08 là nguồn Điều hành, kể cả tài khoản có cả hai vai trò.
12. **Xóa:** HDV xóa được mục của mình (nhật ký, sự cố, khoản chi phí chưa ghi công nợ, số chi phí thực tế) qua hộp thoại xác nhận (không hoàn tác, U2). Xóa sự cố có khoản liên kết Chưa ghi công nợ thì xóa cả khoản; đã ghi công nợ thì chặn xóa sự cố. Xóa số chi phí thực tế đưa dòng về Gợi ý ở DH08.8. Câu cũ “DH08 không thêm thao tác xóa cho Điều hành” bỏ theo quyết định 12/11/2026: Điều hành xóa được mục Do HDV ghi ở DH08, mỗi lần ghi QT03 (đã chốt, mặc định Q3; H16); mục bị xóa thì HDV không còn thấy, không nhận thông báo (R04, E3.8, E4.9).
13. **Thông báo:** TB-HD01-01 khi ghi sự cố mới và khi HDV cập nhật kết quả sự cố (thay đổi 12/11/2026, H17; trước đây chỉ khi ghi mới). “Cập nhật kết quả” là lần lưu làm ô Kết quả đổi giá trị; sửa trường khác không báo. Sự cố có chi phí chỉ tạo TB-HD01-01 (nội dung ghi “· có chi phí phát sinh”, **không có số tiền** theo RSD CH02 mục 1.4; thay đổi 12/11/2026, trước đây ghi kèm số tiền), không tạo thêm TB-HD01-02. Nội dung hai loại dùng đúng mẫu ở RSD CH02 Phụ lục A. TB-HD01-02 gồm cả xóa chi phí. Bản ghi chính: TB-HD01-01 là sự cố; TB-HD01-02 là **hồ sơ Tour** (sửa sau rà soát 12/11/2026, N1; trước đây là từng khoản): mọi lần ghi, sửa, xóa chi phí phát sinh hoặc chi phí thực tế của cùng hồ sơ khi người nhận chưa đọc gộp một dòng “· n lần”, nội dung và đích theo lần ghi gần nhất (CH02 R04, Phụ lục A, AC63; HD01 AC28). Nhật ký thường không báo.
14. **TB-DH08-11 cũng gửi khi sửa vai trò, phạm vi, ngày của phân công** (“đã đổi”); TB-DH08-12 ghi rõ “không còn xem được hồ sơ này” khi hết phân công trong hồ sơ. Người nhận không có `HD01.xem` (ví dụ nhân sự Nội bộ chỉ có vai trò Điều hành được phân công làm Trưởng đoàn) thì đích là DH08.5 (RSD DH08 R12).
15. **HDV không có Lưu và chuyển Kế toán** ở chi phí thực tế: đã chốt, mặc định Q3 của BOI-CANH “Vai trò HDV” (H15).
16. **Mặc định trường:** ngày chi = hôm nay; loại tiền = VND (sửa được); thời điểm = hiện tại; ngày Tour tự suy ra.
17. **Ảnh:** theo CGD K7.09 (sửa sau rà soát 12/11/2026, N2): nút Chụp ảnh mở máy ảnh sau, Chọn tệp mở thư viện hoặc tệp; ảnh HEIC do trình duyệt đổi sang JPG trước khi tải lên, không đổi được thì báo lỗi định dạng; không tự nén. Câu cũ “HEIC báo lỗi, nút Chụp chứng từ, Chọn ảnh” bỏ theo K7.09.
18. **Mất mạng (R08), cách đơn giản:**
    - Mỗi form sinh một mã yêu cầu khi mở; máy chủ ghi đúng một lần cho mỗi mã (chống trùng khi Gửi lại).
    - Không có phản hồi trong 30 giây hoặc không có mạng thì form chuyển “Chưa lưu”, nội dung và ảnh chưa tải lên giữ trong bộ nhớ trình duyệt (gắn với tài khoản) đến khi gửi được, người dùng Bỏ, hoặc đăng xuất sau cảnh báo.
    - Không tự gửi: có mạng thì nút Gửi lại mở khóa và banner đổi chữ; người dùng phải bấm.
    - Không có chế độ xem khi mất mạng (không lưu sẵn chương trình, khách đoàn trên máy): đã chốt (H12). Thay bằng PDF chương trình tải về (L2.6, R13).
    - Xóa không có bản chờ.
19. **Bố cục điện thoại:** form toàn màn thay bảng trượt; thanh tab dưới 4 tab; nút nổi “+ Ghi”; khối Hôm nay có ba nút ghi như DH08 W04; vùng chạm 44 px; chữ nhập 16 px; trên máy tính dùng cột giữa tối đa 600 px. Không có thông báo ngắn kèm Hoàn tác.
20. **Đầu mối NCC, Điều hành phụ trách, người liên hệ phía khách hàng, khách trong đoàn gọi bằng liên kết `tel:`**, TOPAS không ghi lượt gọi (R12).
21. **PDF chương trình (bổ sung 12/11/2026, H12):** nút ở đầu tab Chương trình; mỗi lần bấm dựng mới qua hàng đợi từ trang HTML (Q5, Q21), tự tải khi xong, quá 60 giây báo lỗi; nội dung: phần đầu, liên hệ (Điều hành phụ trách, người liên hệ phía khách hàng, đầu mối NCC), chương trình và dịch vụ theo ngày, mã xác nhận, và **Rooming list chỉ gồm số phòng và tên khách** theo đợt lưu trú (người dùng chốt 12/11/2026, B; trước đây không có Rooming list); không có giá, loại tiền, danh sách khách đoàn, hộ chiếu (kể cả dạng che), điện thoại khách, hạng phòng, ghi chú phòng. Mã quyền `HD01.xem`. Mỗi lần trả tệp ghi QT03 Xuất tệp (như mọi lần xuất tệp, QT03 R01). Tệp tạm xóa sau 24 giờ. Không thu hồi được tệp đã tải; chân trang ghi thời điểm dữ liệu và “tài liệu nội bộ”.
22. **TB-DH08-13 (bổ sung 12/11/2026, H13):** đích HD01.2 tab Chương trình; người nhận là tài khoản của mọi nhân sự có phân công ở hồ sơ lúc áp dụng, bỏ người thao tác; một người nhiều phân công nhận một thông báo; người không có `HD01.xem` thì đích DH08.1 (như R12 của DH08 với TB-DH08-11).

## Thay đổi cần làm ở màn khác

- **QT02.** Thêm vai trò hệ thống HDV, phòng HDV (thuộc phòng của vai trò tự tạo có HDV). Phụ lục A thêm `HD01.xem` (Xem; cố định với Quản trị theo Q25), `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi` (Thao tác, phụ thuộc `HD01.xem`). Phụ lục B: ba mã chỉ bật cho HDV; HDV không có mã nào của DH08. `DH08.chi-phi-thuc-te`, `DH08.nhat-ky-su-co`, `DH08.chi-phi-phat-sinh` gồm cả sửa mục Do HDV ghi (RSD DH08 R20).
- **QT01.** Liên kết được Cộng tác viên với tài khoản chỉ có vai trò thuộc phòng HDV; chặn gán vai trò ngoài phòng HDV cho tài khoản đang liên kết Cộng tác viên (RSD DH06 R01). Danh sách Nhân sự liên kết khi tạo tài khoản thêm Cộng tác viên (QT01 AC07, E2.3, E5.7 đang ghi “chỉ Nội bộ”).
- **CH01 R18** (trang mặc định; trước đây ghi nhầm R09). Tài khoản mà mọi vai trò đều thuộc phòng HDV: đích sau đăng nhập là HD01.1. Màn Đăng nhập, Đổi mật khẩu dùng được trên điện thoại 360–430 px. Đăng xuất khi còn mục chưa gửi của HD01 thì cảnh báo (RSD HD01 E5.5): đã thêm ngoại lệ ở RSD CH01 R11, E8.6 và CGD K0.11 (12/11/2026).
- **CH02.** Phụ lục A thêm TB-HD01-01, TB-HD01-02 (theo R06 của HD01), TB-DH08-11, TB-DH08-12 (theo R12 của DH08); ghi loại trừ: sự cố có chi phí không tạo TB-HD01-02. TB-DH08-08 sửa sự kiện thành “Điều hành hoặc HDV sửa chi phí thực tế …”. Chuông và bảng thông báo dùng được trên điện thoại.
- **CH03.** Không có thẻ cho phòng HDV; tài khoản chỉ có vai trò thuộc phòng HDV không vào Việc của tôi sau đăng nhập.
- **CHUAN-GIAO-DIEN.** K0.01 ghi “Không có giao diện điện thoại”: cần ngoại lệ cho màn của phòng HDV (đang có người bổ sung). Khi phần điện thoại có hiệu lực, đối chiếu mục 2.5 của HD01 và sửa theo chuẩn.
- **DH08, DH06.** Đã sửa trong đợt này (RSD DH08 1.2–1.4, L5.2, R12, L6.4, R20, AC80–AC86; RSD DH06 R01, E3.2, E3.9, AC35–AC38).
- **Bổ sung 12/11/2026 (đã sửa cùng đợt):** RSD DH08 (1.4 hộ chiếu đầy đủ và điện thoại ở HD01; L1.5, R19 TB-DH08-13; L6.4, thêm L7.3, L8.1, R20 Điều hành xóa mục Do HDV ghi); RSD CH02 (TB-DH08-13, TB-DH08-11 gồm sửa phân công, TB-HD01-01 gồm cập nhật kết quả, nội dung không số tiền); RSD QT03 (ngoại lệ ghi lượt Hiện số hộ chiếu, R01, R15, nhóm thao tác mới); RSD QT02 (R04 dẫn BOI-CANH; Phụ lục A mô tả `HD01.xem` và ba mã DH08 ghi gồm xóa mục Do HDV ghi).
- **Đã sửa sau rà soát 12/11/2026 (trước đây ghi “chưa sửa”):** RSD DH06 mục 1.4 (ngoại lệ HDV thấy điện thoại của Điều hành phụ trách qua HD01); RSD KD08 mục 5.1 và RSD KD03-KD04 mục 5.1 (HD01 có trong cột màn đọc). Còn lại: CHUAN-GIAO-DIEN chưa có chuẩn PDF chung, mẫu PDF chương trình theo R13.

## Câu hỏi cũ đã có quyết định (12/11/2026)

Tám câu hỏi của bản đầu đã được trả lời ở BOI-CANH “Vai trò HDV” (đoạn “Người dùng chốt thêm” và các mặc định theo Q3 ngay sau đó); không còn là câu hỏi mở.

| Câu cũ | Quyết định | Loại |
|---|---|---|
| 1. Khóa quyền DH08 với phòng HDV | Phòng HDV chỉ có mã HD01 và màn chung; QT02 khóa mọi mã khác (H14; RSD QT02 R04) | Mặc định Q3, đã chốt |
| 2. Số hộ chiếu đầy đủ | Có, qua nút Hiện số, mỗi lần ghi QT03 (H10) | Người dùng chốt |
| 3. Lưu và chuyển Kế toán | HDV không có; Điều hành chuyển ở DH08 (H15) | Mặc định Q3, đã chốt |
| 4. Xem khi mất mạng | Không xem ngoại tuyến; PDF chương trình không giá (H12) | Người dùng chốt |
| 5. Điện thoại khách, Điều hành | Có, kèm người liên hệ chính phía khách hàng (H11) | Người dùng chốt |
| 6. Điều hành xóa mục Do HDV ghi | Có, mỗi lần ghi QT03 (H16) | Mặc định Q3, đã chốt |
| 7. Thông báo khi chương trình đổi, khi Đóng Tour | Có TB-DH08-13 khi áp dụng thay đổi; không báo khi Đóng Tour (H13, H17) | Người dùng chốt; Đóng Tour theo mặc định Q3 |
| 8. Cập nhật kết quả sự cố | Báo Điều hành phụ trách bằng TB-HD01-01 (H17) | Mặc định Q3, đã chốt |

## Câu hỏi cho người dùng

Không còn câu hỏi mở. Câu cũ “PDF chương trình có cần Rooming list (chỉ tên khách và số phòng) không?” đã có quyết định 12/11/2026: **có** (BOI-CANH “Vai trò HDV”, dòng cuối; L2.6, R13, AC46).

## Sửa sau rà soát 12/11/2026 (giữ v1.0)

Giữ số hiệu L, E, R, AC. Ghi tóm tắt ở dòng “Thay đổi ở v1.0 (bổ sung 12/11/2026 · sau rà soát)” đầu RSD.

**Quyết định mới của người dùng**

- **A · HDV chỉ thấy nhật ký và sự cố do chính mình ghi.** Sửa 1.4 (bảng quyền, “Chỉ mục của mình”), 1.5, 2.1 (số trên tab), L1.1 (chỉ báo thẻ), L3.1 (dòng thời gian), L3.3 (bỏ câu “mục người khác ghi mở dạng chữ”), E3.8, R02 (chỉ báo), R03 (dòng Nhật ký và sự cố), AC21 (viết lại). DH08 L6.1 không thêm câu báo “HDV đọc được” vì HDV không thấy mục Điều hành ghi (đã ghi một câu ở RSD DH08 L6.1).
- **B · PDF chương trình có Rooming list, chỉ tên khách và số phòng.** Sửa 1.4, 1.5, L2.6 bước 3 và kết quả, R03 (dòng Phân phòng), R13 (thêm ý Rooming list trong PDF), 5.3, AC46. **Tự quyết:** đầu mỗi đợt ghi tên cơ sở lưu trú và ngày nhận, trả phòng (không phải dữ liệu cá nhân, cần để biết phòng thuộc đợt nào); đợt chưa xếp đủ ghi “n khách chưa xếp phòng”; không có hạng phòng, ghi chú phòng.

**Phát hiện của người rà soát**

- **N1 · R06, AC28.** TB-HD01-02 làm mới theo hồ sơ Tour; AC28 thêm “người nhận chưa đọc”, kết quả một TB-HD01-02 “· 2 lần”. RSD CH02 Phụ lục A dòng TB-HD01-02 thêm “Bản ghi chính là hồ sơ Tour (R04)”.
- **N2 · K7.06, K7.09, K7.10.** R02 ghi rõ không có Xem thêm (CGD K7.06 thêm ngoại lệ, CGD-AC156 viết lại). R07, L4.1, E4.1, AC26, AC18 theo K7.09 (nút Chụp ảnh, Chọn tệp; HEIC đổi sang JPG). HD01 không có Hoàn tác (mục 2.5): CGD-AC161 viết lại theo U2.03.
- **T1 · E1.3, AC04, AC42.** Câu báo “Không tìm thấy <Tour Code>” theo CGD K0.09; RSD CH02 E1.14, AC60 sửa cùng.
- **T2.** Ngoại lệ đăng xuất khi còn bản chưa gửi: RSD CH01 R11, E8.6; CGD K0.11.
- **T4 · A**, **T5 · R03** (chứng từ, đường tải tệp), **T7 · R05** (dẫn RSD DH08 R20: Lưu bước 1 chỉ gán nguồn cho dòng người dùng đổi ô; HD01 AC28 và DH08 AC83 khớp, không phải sửa).
- **Nhẹ.** “Vai trò phục vụ” ở L1.1, L1.2; câu chữ TB-DH08-11, TB-DH08-12 theo mẫu CH02 (<tên đoàn>, <dd/mm–dd/mm>; “đổi sang nhân sự này” dùng câu “Bạn được phân công”, “đổi sang nhân sự khác” gửi TB-DH08-12); nhãn “Người liên hệ của Booking” (2.1, L2.5, L2.6, R03, R12); dẫn RSD CH01 R18 (nguồn, 1.2, R02); R08, E5.1, E5.3: lần Lưu và Gửi lại kiểm phiên, quyền, phạm vi trước khi tra mã yêu cầu, hết phạm vi thì không trả dữ liệu mục đã có; L4.3 bước 4: Xóa số báo Kế toán (TB-DH08-08) khi đã có quyết toán Hiện hành, khớp RSD CH02 TB-DH08-08.
- **AC khó kiểm.** AC10 (dữ liệu mẫu cố định và danh sách chuỗi cấm), AC17 (nhóm Điều hành ba người trong dữ liệu mẫu), AC25 (đo chiều rộng cuộn, hộp bao 44 px, cột 600 px), AC32 (Playwright chặn tuyến và chế độ ngoại tuyến, không proxy), AC43 (chế độ ngoại tuyến; nhánh lỗi ghi QT03 kiểm khi rà mã). Thêm: AC49 đặt giờ 26/11/2026 và hồ sơ Đã kết thúc trước khi Đóng Tour.

**Kiểm tra:** `check-rsd.py` cho RSD HD01 sau sửa: mã thoát 0, 0 ảnh (mã W giữ chỗ), không lỗi. Rà lại chuỗi “Không xem được hồ sơ này”, “liên hệ chính”, “Chụp chứng từ”, “Chọn ảnh”, “CH01 R09”: không còn trong thân RSD (chỉ còn ở dòng lịch sử thay đổi cũ).

## Kiểm tra đã thực hiện

- `python3 .claude/skills/sme-erp-rsd-skill/scripts/check-rsd.py docs/rsd/HD01/RSD-HD01-Tour-cua-toi-v1.0.md`: 0 ảnh (wireframe chưa dựng, mã W giữ chỗ), không cảnh báo bước thiếu W, mỗi mục con của mục 3 có ngoại lệ E, không lỗi bảng.
- Rà truy vết: mọi dòng của bảng 1.5 có luồng hoặc quy tắc; mọi luồng L1.1–L5.1 có ít nhất một AC (AC01–AC40).
- Đối chiếu mã quyền và mã thông báo với giao việc: `HD01.xem`, `HD01.ghi-nhat-ky`, `HD01.ghi-chi-phi`; TB-HD01-01, TB-HD01-02, TB-DH08-11, TB-DH08-12.
- Bổ sung 12/11/2026: chạy lại `check-rsd.py` (0 ảnh, cảnh báo thiếu ảnh bỏ qua theo giao việc); thêm L2.5, L2.6 có ngoại lệ E2.9–E2.15 và AC41–AC52; mọi dòng mới ở bảng 1.5 có luồng hoặc quy tắc; đối chiếu nội dung TB-HD01-01, TB-HD01-02 ở R06 với RSD CH02 Phụ lục A (không số tiền); TB-DH08-13 khớp RSD DH08 L1.5, R19 và RSD CH02 A.3.

## Dịch vụ đi kèm 12/11/2026

Sửa tại chỗ `RSD-HD01-Tour-cua-toi-v1.0.md`, dòng “Thay đổi ở v1.0 (bổ sung 12/11/2026 · dịch vụ đi kèm)”. L2.2: dòng dịch vụ đã đặt có dòng phụ “kèm: …” cho từng đi kèm (tên, số lượng, đơn vị, ngày), không giá, không số xác nhận riêng. L2.4: ghi chú phòng gồm “Giường phụ”. R03: thêm đi kèm vào cột Hiện, giá và số xác nhận của đi kèm vào cột Không hiện. R13: PDF lấy dịch vụ kèm đi kèm như L2.2; Rooming list trong PDF giữ phạm vi đã chốt (chỉ số phòng, tên khách), nên không có chữ Giường phụ. Thêm AC53 (T-HD01-53).

**Kiểm tra.** `check-rsd.py`: 0 ảnh (HD01 chưa dựng hình; bỏ qua cảnh báo thiếu ảnh theo chỉ đạo).
