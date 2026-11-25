# RSD KD06 · Hồ sơ yêu cầu Tour

**TOPAS · Module Kinh doanh · Phiên bản 1.6 · 12/11/2026**
Phần mềm cho doanh nghiệp lữ hành chuyên Tour Inbound và Tour Customized.

- **Nguồn nghiệp vụ.** `docs/flows/danh-sach-man-hinh-level1.md` (KD06, KD06.1, KD06.2, KD06.3; vòng đời Yêu cầu Tour, Phiên bản báo giá, Booking), `docs/flows/danh-sach-tinh-nang-level1.md` (TN02.01–TN02.05, TN03.01–TN03.08, TN04.01), `docs/flows/danh-sach-tinh-nang-ho-tro-level1.md` (HT05.05 mẫu báo giá; dịch vụ bao gồm và không bao gồm), `docs/flows/level 1/sys02.md` (SYS02.03–SYS02.11), `docs/flows/level 1/sys03.md` (SYS03.01–SYS03.14). Dùng lại quy tắc đã chốt của RSD KD01-KD02 v1.2 (Tour mẫu), KD03-KD04 v1.4 (khách hàng), KD05 v1.4 (danh sách yêu cầu), DH03 v1.4 và DH04 v1.3 (hợp đồng, mùa giá, bảng giá NCC, thứ tự dòng giá), KD08 v1.5 (Booking, chế độ điều chỉnh, phiên bản điều chỉnh của Booking, Chuyển sang Điều hành), DH08 v2.8 (thay đổi chương trình sau Booking), QT05 v1.2 (R13: tỷ giá có hiệu lực; bảng tỷ giá do Kế toán nhập; mục 1.5: quyền sửa danh mục theo phòng), QT04 v1.3 (proposal không cấu hình ở QT04).
- **Thay đổi (25/11/2026 · AI: nhiều phương án, Sửa bằng AI).** Người dùng yêu cầu và chốt 25/11/2026. (1) **Số phương án** khi tạo hành trình bằng AI: chọn 1–3 ở W19, mặc định 1. Một phương án đi thẳng lên lưới như cũ (W20); 2–3 phương án thì có màn **Đang tạo** (W52, tiến độ từng phương án, Dừng tạo) rồi màn **So sánh phương án** (W53), người dùng chọn một phương án đưa lên lưới, các phương án khác bị bỏ. Màn Đang tạo cũng dùng khi tạo 1 phương án. (2) **Sửa bằng AI**: khung chat ở cuối tab Hành trình (W54) khi đã có hành trình trên lưới (AI vừa tạo, hoặc đã lưu, hoặc người dùng đang sửa); mỗi lượt AI áp ngay lên lưới, chưa lưu, ngày và dòng đổi có nhãn, tin trả lời tóm tắt thay đổi kèm **Hoàn tác lượt này**; lịch sử trò chuyện chỉ giữ trong phiên (mất khi lưu, Hủy thay đổi, rời hồ sơ), không lưu vào dữ liệu. Không có ở chế độ điều chỉnh và khi chỉ xem. Sửa 1.5, 2.5, 2.6, L3.5, E3.1, E3.10, R09, R25, 5.2, 5.3; thêm L3.10, E3.15–E3.20, AC123–AC132; thêm W52, W53, W54; dựng lại W19 (ô Số phương án), W21. Hình khác của tab Hành trình (W15, W17, W20, W23, W24, W48) chưa vẽ thanh Sửa bằng AI thu gọn ở cuối tab.
- **Thay đổi (18/11/2026 · giường phụ cho trẻ em).** Người dùng chốt 18/11/2026, thay quyết định 12/11/2026 về giường phụ (BOI-CANH-DU-AN thuật ngữ Giường phụ, Nền tảng “Phòng (Q13', Q14)”; `docs/QUYET-DINH-PHASE-CODING.md` Q13'). (1) Giường phụ là giường cho **trẻ em**, độc lập với số giường tiêu chuẩn của phòng, **không đổi số phòng**: số phòng đôi = làm tròn lên ((người lớn − phòng đơn) ÷ 2), sau phòng đơn tự xếp cho người lớn lẻ; bỏ phòng ba người lớn và các câu “phòng 3 người là phòng đôi cộng một giường phụ”, “muốn ghép phòng ba thì giảm phòng đơn, tăng giường phụ”, “phòng đơn tự xếp tính lại khi giường phụ đổi” (R04). (2) Giường phụ không quá số trẻ em: lỗi cạnh ô “Giường phụ không quá số trẻ em”, chặn lưu yêu cầu và chặn tính giá; nhiều hơn số phòng đôi vẫn chỉ cảnh báo (E1.1, E4.12, 5.2). (3) Tính giá cộng cả hai: trẻ em theo chính sách trẻ em như cũ, và khoản đi kèm Giường phụ; tiền khoản giường phụ chia đều cho mọi trẻ em; khoản phòng đôi chia đều cho người lớn ở phòng đôi; phụ thu phòng đơn không còn trừ khoản giường phụ (R13). (4) Viết lại AC92, AC93 (ví dụ C mới của `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`: 4 người lớn, 1 trẻ 8 tuổi, 1 giường phụ; tổng 5.610.000 ₫), AC95, AC100; AC94 giữ số, sửa lý do. Sửa W05, W27, bảng truy vết 1.5. Ví dụ Müller không đổi (0 giường phụ). Không đổi hình.
- **Quyết định 12/11/2026 (rà soát mâu thuẫn giữa các RSD).** (7) Hủy Booking thì yêu cầu tự chuyển Đã hủy (lý do “Booking đã hủy”); khách muốn đặt lại thì Mở lại yêu cầu kèm lý do, yêu cầu về Đang xử lý, rồi báo giá và tạo Booking mới. Đã có Booking chỉ khi có Booking Hiệu lực. (8) Khi có Booking Hiệu lực, người phụ trách yêu cầu luôn là người phụ trách Booking; chuyển Booking ở KD08 thì yêu cầu chuyển theo. (9) KD08 mở KD06 ở **chế độ điều chỉnh**: sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới (Chưa có kết quả); không ghi kết quả ở chế độ này. Kinh doanh tự trao đổi với khách; bấm Chuyển sang Điều hành ở KD08 nghĩa là khách đã chốt: hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking (sửa ở rà soát lần hai), Booking lên phiên bản đó, phiên bản cũ của Booking thành **Đã thay thế**. Không bao giờ có hai phiên bản cùng Chốt. (10) Quản trị hệ thống được mở lại yêu cầu Đã hủy kèm đổi người phụ trách.
- **Quyết định 12/11/2026 (rà soát lần hai).** (11) Ở chế độ điều chỉnh **được publish proposal** của phiên bản điều chỉnh (người dùng chốt); vẫn không ghi kết quả, không tạo Booking. (12) Phiên bản Chuyển sang Điều hành là phiên bản điều chỉnh mới nhất của chính Booking, không phải phiên bản số lớn nhất của yêu cầu (suy từ R19, E6.7: Booking có thể tạo từ phiên bản Chốt cũ hơn). (13) Tỷ giá dùng **tỷ giá có hiệu lực** (RSD QT05 R13): ngày chưa nhập thì lấy ngày gần nhất trước đó và ghi ngày lấy tỷ giá; chỉ “chưa có tỷ giá” khi không có ngày nào trước đó.
- **Quyết định rà soát 13/11/2026 (Q-RS17, Q-RS18; `docs/rsd/QUYET-DINH-RA-SOAT-2026-11-13.md`).** (14) **Ghi Chốt là tạo Booking ngay** (Q-RS17): chọn Chốt cho một phiên bản mở hộp thoại xác nhận; xác nhận thì trong một giao dịch hệ thống ghi Chốt, tạo Booking Hiệu lực theo phiên bản đó (RSD KD08 L1.1), tạo hồ sơ Tour. Không còn trạng thái “Chốt mà chưa có Booking”, không còn nút Tạo Booking riêng, không còn chế độ tạo mới của KD08, không còn đổi phiên bản Chốt (L6.3, W39 bỏ). Phiên bản Chốt luôn là phiên bản của một Booking; hủy Booking thì phiên bản đó giữ Chốt (bổ sung bên dưới), khách đặt lại thì Mở lại yêu cầu rồi ghi Chốt. Quyền: Ghi kết quả (bỏ quyền Tạo Booking riêng, RSD QT02). (15) Sửa thông tin yêu cầu ở chế độ điều chỉnh không đổi Booking; Booking chỉ cập nhật khi Chuyển sang Điều hành, trước đó KD05 hiện số của Booking (Q-RS18; RSD KD05 R03, R15). Sửa 1.1–1.5, 2.4–2.6, L6.1, L6.2, L6.4, L6.5, E6.4–E6.7, L7.2, R17, R19–R22, R27, 5.1, 5.2; thêm E6.13; bỏ L6.3, AC52 (mã không dùng lại); viết lại AC53–AC56, AC76, AC78; thêm AC111–AC113 (AC101–AC110 để trống cho các quyết định rà soát về tính giá sửa song song). Hình W39, W41 không còn dùng; W40, W47 chưa vẽ lại.
- **Bổ sung 13/11/2026 (người dùng trả lời Q-RS17, Q-RS24).** (1) Hủy Booking thì phiên bản của Booking **giữ Chốt** (không chuyển Không chốt), hiện kèm “Booking … · Đã hủy”; phiên bản Chốt của Booking (Hiệu lực hoặc đã hủy) không đổi được sang kết quả khác bằng tay; đặt lại sau khi Mở lại thì phiên bản của Booking mới cũng Chốt, phiên bản của Booking đã hủy giữ Chốt. Sửa 2.4, 2.6, L6.4, R17, R19, R20, R21, 5.1, AC56, AC76, AC111; hình W47 khớp lại. (2) Chuyển người phụ trách một yêu cầu qua hộp thoại W46 có Hoàn tác (L7.3, R23); thêm AC114.
- **Quyết định 11/11/2026.** (1) Chỉ hủy yêu cầu khi không có Booking Hiệu lực; yêu cầu đã hủy được mở lại kèm lý do. (2) Markup mặc định theo loại Tour, tỷ giá lấy từ bảng tỷ giá hệ thống; cả hai sửa được cho từng phiên bản. (3) Báo giá ra ngoài bằng **proposal** do hệ thống tự tạo, publish thành link, có tiếng Anh và tiếng Việt; khách tải PDF ngay trên proposal. (4) Mỗi yêu cầu tối đa một Booking Hiệu lực và một phiên bản Chốt. (5) Mỗi phiên bản publish có link riêng, có hạn, thu hồi được. (6) Khách chỉ xem và tải PDF; hệ thống ghi số lần mở; kết quả do Kinh doanh ghi.
- **Thay đổi ở v1.6 (12/11/2026).** Cập nhật theo quyết định phase coding (`docs/QUYET-DINH-PHASE-CODING.md`). Quyền chỉ theo màn và thao tác, bỏ chế độ chỉ đọc cho người không phụ trách (Q1: 1.4, 2.1, L2.3, E2.5, E5.9, R01, R18, R19, R22, R23, R27, AC16, AC61, thêm AC88). Bỏ lối vào từ ghi nhận chăm sóc (C3: 1.2, L1.3, 5.2). Thông báo in-app (Q2). Bỏ nhãn chờ xác nhận (Q3). Xung đột khi lưu chỉ có Tải lại (Q8: E2.1, E3.8, AC15). Mã yêu cầu cho phép thủng số (Q7: R03). Tiền làm tròn half-up, bội số chỉ cho giá bán mỗi khách (Q9: 2.6, R14). Tỷ giá theo ngày bấm Tính giá, chụp vào phiên bản (Q10). Bộ tính giá dùng chung, trẻ em, người lớn lẻ, phòng đơn, phụ thu (Q11–Q15: R04, R13). Proposal theo W33, W36, W37, PDF dựng từ trang HTML qua hàng đợi (Q21, Q22: L5.1, R18, R25, 5.1, 5.3, AC72). AI qua gateway cấu hình ở tệp, đi qua hàng đợi (A1, Q5: L3.5, R09, R25, 5.3). Tạo lại hành trình không còn hộp thoại xác nhận (U2: L3.6, AC31). Công tắc Tour mẫu Đang dùng, Ngừng dùng (K6).
- **Thay đổi ở v1.6 (bổ sung 12/11/2026 · dịch vụ đi kèm).** (Phần về phòng 3 người, công thức số phòng đôi trừ giường phụ, chia tiền giường phụ cho người lớn và giới hạn giường phụ theo số phòng đôi đã thay bằng thay đổi 18/11/2026 ở trên.) Theo quyết định của người dùng ngày 12/11/2026 (BOI-CANH-DU-AN, thuật ngữ Dịch vụ đi kèm, Giường phụ; Nền tảng “Phòng (Q13', Q14)”; `docs/QUYET-DINH-PHASE-CODING.md` Q13' đổi 12/11/2026; RSD DH03 R23). (1) Yêu cầu và điều kiện tính có ô **Giường phụ** cạnh phòng đơn; số phòng đôi = làm tròn lên ((người lớn − phòng đơn − giường phụ) ÷ 2); người lớn lẻ vẫn tự xếp phòng đơn; muốn ghép phòng ba thì giảm phòng đơn, tăng giường phụ; phòng 3 người là phòng đôi cộng một giường phụ; giường phụ không quá số phòng đôi (R04). (2) Hành trình: thêm dịch vụ đi kèm vào dòng của dịch vụ chính kèm số lượng; giường phụ lấy số theo số giường phụ (R07); đi kèm Ngừng dùng là việc cần xử lý (R10); Đổi dịch vụ bỏ đi kèm cũ (L3.8). (3) Bộ tính giá: giá đi kèm theo hợp đồng áp dụng của dịch vụ chính và mùa của ngày dùng; thiếu giá là khoản thiếu như mọi khoản; giường phụ chưa thêm vào đêm lưu trú khi điều kiện có giường phụ cũng là khoản thiếu; tiền phòng đôi và giường phụ chia đều cho người lớn ở phòng đôi và phòng ba; trẻ em cần thêm giường theo chính sách trẻ em (R13). (4) Markup của khoản đi kèm theo hạng mục của loại dịch vụ của chính dịch vụ đi kèm (R14). (5) Proposal không có dòng giá riêng cho đi kèm; lưu trú theo đêm ghi số giường phụ (R18). (6) Bỏ câu “phòng 3 người và giường phụ dùng Nhập tay” ở R04, R13, R15; Nhập tay vẫn dùng cho khoản thiếu và ghi đè. Ví dụ Müller không tính lại ở đợt này (đã ghi chờ tính lại, R14). Sửa 1.3, 1.5, 2.2, L1.1, L3.4, L3.8, L4.1, E1.1, R04, R07, R08, R09, R10, R11, R13, R14, R15, R18, 5.1, 5.2; thêm E3.13, E3.14, E4.12, AC92–AC100. Không dựng hình mới.
- **Thay đổi ở v1.6 (bổ sung 13/11/2026 · tính lại ví dụ giá).** Ví dụ Müller v3 cũ (50.750 EUR) tính trước Q13', Q14 và không còn dữ liệu từng dòng, nên dựng bộ dữ liệu ví dụ đầy đủ, tính bằng script, ở `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md` (ví dụ A; cũng là dữ liệu mẫu cho scenario test của bộ tính giá). Kết quả: nhập 2 phòng đơn → 3 phòng đơn (1 tự xếp), 10 phòng đôi, 13 phòng; giá vốn 45.222,82 EUR; người lớn 1.990, trẻ em 6–11 tuổi 780, phụ thu phòng đơn 1.460 × 3; tổng 51.710 EUR; lãi gộp 6.487,18 EUR; Markup bình quân 14,3 %; bình quân 2.068,40 EUR/khách, vẫn trong ngân sách 2.100. Sửa số ở L3.7 bước 1 (62 dịch vụ), L4.1 bước 3, 4 và ghi chú dưới W28, R14 (viết lại ví dụ, bỏ câu “cần tính lại khi viết test”, thêm dòng dẫn tới tài liệu ví dụ), AC35, AC36, AC65, AC69, AC73; ghi chú Hình chưa cập nhật. AC93, AC94 đã đối chiếu với ví dụ C của tài liệu ví dụ, khớp, không đổi. Cùng ngày 13/11/2026, người dùng chốt hai quy tắc, ghi rõ ở R13: (a) trẻ em cùng nhóm tuổi gộp một dòng giá bán, giá là bình quân giá vốn các trẻ trong dòng (kể cả khi một trẻ được suất miễn phí) rồi Markup và làm tròn lên theo bội số; (b) phụ thu lễ theo phòng áp cho mọi phòng kể cả phòng đơn, phòng đơn kiểu phụ thu thêm = giá phòng của đêm sau phụ thu lễ + phụ thu phòng đơn, phụ thu phòng đơn dạng tỷ lệ tính trên giá mùa chưa gồm phụ thu lễ. Số của ví dụ A không đổi. Không đổi hình.
- **Thay đổi sau quyết định rà soát 13/11/2026 · bộ tính giá** (`docs/rsd/QUYET-DINH-RA-SOAT-2026-11-13.md`). Q-RS27: dòng giá căn cứ khách, phòng chọn theo số người lớn; căn cứ đoàn, đơn vị dịch vụ chọn theo tổng khách gồm trẻ em. Q-RS03: không có Thứ tự của dòng giá. Q-RS05: giá trẻ em là đơn giá, bỏ kiểu %. Q-RS06, Q-RS07: trẻ dưới nhóm tuổi thấp nhất miễn phí, trên nhóm cao nhất tính như người lớn, bỏ số trẻ miễn phí. Q-RS02: dòng căn cứ đoàn, đơn vị dịch vụ không có giá trẻ em (ô khóa ở DH03, người dùng trả lời 13/11/2026), không phải khoản thiếu. Q-RS04: phụ thu Thay thế cùng căn cứ với dòng giá. Sửa E4.1, R13, R15, AC39, AC82, AC91, AC94; thêm AC101, AC102 (ví dụ D của `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`). Số của ví dụ A, C không đổi.
- **Thay đổi ở v1.5 (12/11/2026).** Bổ sung sau kiểm tra chéo cuối đợt: E1.7: câu báo danh mục trống hướng thêm ở QT05 theo phòng sở hữu (R25), bỏ “liên hệ Quản trị”. Sửa theo rà soát mâu thuẫn lần ba, không đổi luồng. (a) R13: trong cùng hạng phòng nhiều dòng giá chính khớp thì lấy dòng Thứ tự nhỏ nhất; không so Thứ tự giữa các hạng phòng (quyết định 12/11/2026, rà soát lần ba; RSD DH03 R14); điều kiện tính chưa có hạng phòng thì lấy hạng phòng có giá thấp nhất, kèm cảnh báo (người dùng chốt 12/11/2026). (b) L3.4 bước W18: giá tham chiếu theo loại tiền gốc của dòng giá (RSD DH03 R14, DH04 R07); sửa dòng chữ tương ứng trên W18. (c) Truy vết nguồn (1.5): Hủy yêu cầu khi không có Booking Hiệu lực (R21). (d) R25: cột Chủ sở hữu ghi đúng phòng sửa từng danh mục theo RSD QT05 mục 1.5 (Kinh doanh: loại Tour, lý do hủy yêu cầu Tour; Điều hành: hạng phòng, thẻ bao gồm và không bao gồm, gán loại dịch vụ vào hạng mục; Quản trị: hạng mục dịch vụ và Markup, Markup mặc định của loại Tour, bội số làm tròn, tham số chung). (e) R10, R25: RSD DH03 v1.4 chỉ có Ngôn ngữ giao dịch của NCC, chưa có ngôn ngữ của dịch vụ HDV; câu dẫn sửa theo. (f) Chú thích W42 sửa cho khớp hình và E7.1: Hủy yêu cầu vẫn hiện, khóa kèm lý do “đang có Booking hiệu lực”, nút chính Mở Booking. Cập nhật phiên bản các RSD nguồn ở đầu tài liệu. Dựng lại W18, W42.
- **Thay đổi ở v1.4 (12/11/2026).** Sửa theo kết quả rà soát lần hai, quyết định (11)–(13). (a) Ở chế độ điều chỉnh được publish proposal của phiên bản điều chỉnh của Booking (người dùng chốt): link riêng, có hạn, thu hồi được như R18; proposal ghi “Phương án điều chỉnh cho Booking BK-…” (suy ra, chờ xác nhận cách ghi); link của phiên bản của Booking giữ nguyên; vẫn không ghi kết quả, không tạo Booking. (b) Định nghĩa **phiên bản điều chỉnh của Booking** (lưu ở chế độ điều chỉnh mở từ chính Booking, sau lần tạo hoặc lần Chuyển sang Điều hành gần nhất, Chưa có kết quả); Chuyển sang Điều hành ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking, không phải phiên bản số lớn nhất của yêu cầu, nên không thể ghi Chốt cho phiên bản khách đã từ chối khi Booking tạo từ phiên bản Chốt cũ hơn. (c) Hành trình khi vào chế độ điều chỉnh: chưa có phiên bản điều chỉnh thì nạp từ bản chụp phiên bản của Booking, đã có thì tiếp tục từ hành trình đang lưu, không hỏi; điều kiện tính điền sẵn từ phiên bản điều chỉnh mới nhất, chưa có thì từ phiên bản của Booking (suy ra, chờ xác nhận). (d) Tỷ giá dùng tỷ giá có hiệu lực của QT05 (RSD QT05 R13), ghi ngày lấy tỷ giá; chỉ “chưa có tỷ giá” khi không có ngày nào trước đó; chủ sở hữu bảng tỷ giá là QT05 (Kế toán nhập). (e) Liên kết từ KD08 sang KD06 chỉ hiện với Kinh doanh và Quản trị hệ thống. Sửa đầu tài liệu, 1.2, 1.3, 1.4, 2.3, 2.4, 2.5, L4.1 (bước 2), L5.1, L6.5 (bước 1–4), E2.6, E4.2, E5.8, E6.7, E6.11, E6.12, R01, R14, R15, R17, R18, R25, R27, 5.1, 5.2, 5.3, AC78. Thêm AC83–AC87. Dựng lại W51 (bảng trượt v4 có Publish proposal) và W50 (dải tím nhắc publish được proposal).
- **Thay đổi ở v1.3 (12/11/2026).** Theo quyết định của người dùng khi viết RSD QT04: công ty có mẫu proposal riêng, hệ thống dựng sẵn, không cấu hình ở QT04 hay nơi nào khác. Bỏ “mẫu proposal (QT04.1)” khỏi ranh giới (1.3); hộp thoại Publish không cho chọn mẫu, mẫu theo ngôn ngữ đã chọn (L5.1 bước 2, W32 dựng lại); mục mặc định bao gồm, không bao gồm cố định trong mẫu (R18); bảng cấu hình phụ thuộc bỏ hành vi “thiếu mẫu”. Không đổi nghiệp vụ khác.
- **Thay đổi ở v1.2 (12/11/2026).** Sửa theo quyết định (7)–(10) sau rà soát mâu thuẫn giữa các RSD. Hủy Booking làm yêu cầu tự Đã hủy, mở lại để đặt lại (R02, R19, R20, R21, R22; 2.3, 2.4; L6.4; W47). Người phụ trách yêu cầu theo Booking (1.4, R01, R23, E7.4, E7.6). Thay chỗ “sau Booking KD06 chỉ xem, sửa ở KD08 rồi Gửi Điều hành” bằng chế độ điều chỉnh: thêm L6.5, R27, E6.9–E6.12, W50, W51; sửa 1.2, 1.3, 2.1, 2.3, 2.5, L6.1, L6.2, E5.8, E6.2, R18, R20; W42. Kết quả Đã thay thế do Chuyển sang Điều hành gán, Chuyển sang Điều hành tự ghi Chốt cho phiên bản mới nhất (2.5, R17, 5.1). Quản trị mở lại kèm người phụ trách mới (1.4, L7.2, R22, AC60). Sửa không đổi nghiệp vụ: R13 tuổi trẻ em tính tại ngày sử dụng đầu tiên của dịch vụ, chọn dòng giá theo số khách người lớn; Tiêu đề ngày không bắt buộc (5.2, E5.1); bỏ Tạo yêu cầu ở KD04.3 (1.2); L1.3 dẫn RSD KD03-KD04 L8.2; L4.2 dẫn bước 3–5; proposal ghi tên hành trình, thêm trường Tên hành trình (L5.1, R18, 5.1, 5.2, 5.3); bỏ dựa vào ngôn ngữ của dịch vụ HDV ở DH03, chờ xác nhận (2.5, L3.1, R10, R25, AC27); yêu cầu Tour thêm Thời điểm tạo (5.1); thông báo giao yêu cầu mở KD06 ở tab đích (1.2, R23). Thêm AC76–AC82; sửa AC54, AC56. Thêm W50, W51; dựng lại W39, W42, W47.
- **Thay đổi ở v1.1.** Sắp xếp lại theo khung 6 mục, không đổi nghiệp vụ: wireframe chỉ nhúng một lần, ngay dưới bước luồng (bỏ mục Wireframe riêng, mục 6 cũ); vị trí, kiểu thao tác và phản hồi của bảng Đặc tả thao tác (mục 8 cũ) gộp vào câu của từng bước; bảng Nút ở phần đầu theo trạng thái gộp thành một đoạn dưới phần đầu; quy tắc giao diện dùng chung (8.1 cũ) gộp với xử lý chung (4.3 cũ) thành mục 2.6; bảng Sự kiện tự động bỏ, nội dung đã có trong quy tắc R và bước luồng; Dữ liệu gửi ra ngoài chuyển vào mục 5.3. Quy tắc R thành mục 4, Dữ liệu mục 5, Tiêu chí nghiệm thu mục 6. Mã L, E, R, W, AC giữ nguyên. Bổ sung 12/11/2026: ngân sách của khách (R26); Markup theo hạng mục dịch vụ (R14); proposal theo mẫu riêng của công ty (R18).
- **Cách đọc.** Mục 3 mô tả luồng theo tab. Mỗi bước ghi mã W, chỗ bấm, thao tác của người dùng và phản hồi của hệ thống; hình wireframe nằm ngay dưới bước đầu tiên hiện màn đó, bước khác chỉ dẫn mã W. Mục 4 ghi quy tắc (mã R) mà các bước dẫn tới.
- **Dữ liệu trên hình.** Tên, mã và số liệu chỉ dùng để minh họa. Hôm nay trên hình là 11/11/2026. Người dùng minh họa: Nguyễn Hoàng Nam, Lê Thu Hà (Kinh doanh). Dữ liệu của Müller Reisen GmbH (YC-2611-0019), Hanami Tours (YC-2610-0031), Ahmed Rahman (YC-2611-0028) khớp RSD KD05; Tour mẫu TM-005, TM-008, TM-010 khớp RSD KD01-KD02.
- **Wireframe.** Ảnh chụp từ khung HTML desktop, 1280 × 800 px. Chụp lại bằng `node build.js` trong `wireframes-src`. Khi hình khác chuẩn component K1–K6, chuẩn K1–K6 thắng.
- **Hình chưa cập nhật (mọi hình):** thanh bên còn mục Chăm sóc khách hàng (bỏ theo C3); ví dụ Müller còn ghi 2 phòng đơn, 11 phòng đôi, chưa có phòng đơn tự xếp cho người lớn lẻ (Q13', R04); số liệu giá của Müller v3 trên hình (giá vốn 44.317,40 EUR, 2.030/1.620/410, tổng 50.750 EUR, 45 dịch vụ; cả v4 51.250 EUR suy từ v3) là số cũ, số đúng ở R14 và `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md` (bổ sung 13/11/2026). Chưa có ô Giường phụ (W05, W27), dịch vụ đi kèm trên dòng hành trình (W15, W17, W18), khoản đi kèm trong bảng tính giá (W28, W29, W49), số giường phụ trong lưu trú của proposal (W33) (bổ sung 12/11/2026).

## Mục lục

1. Phạm vi và quyền
2. Khung màn, trạng thái và quy ước giao diện
3. Luồng thao tác kèm wireframe
4. Quy tắc triển khai chi tiết
5. Dữ liệu
6. Tiêu chí nghiệm thu

---

## 1. Phạm vi và quyền

### 1.1. Mục tiêu

KD06 là nơi người Kinh doanh xử lý trọn một yêu cầu Tour: ghi nhu cầu của khách, thiết kế hành trình, tính giá thành các phiên bản báo giá, gửi proposal cho khách, ghi kết quả; ghi Chốt cho một phiên bản là tạo Booking từ phiên bản đó (quyết định rà soát 13/11/2026, Q-RS17). Mục tiêu thiết kế:

- **Không nhập lại.** Khách tìm một lần và tạo nhanh ngay trong hộp thoại; nhu cầu của yêu cầu nạp sẵn vào hành trình và tính giá; phiên bản mới điền sẵn điều kiện của phiên bản trước; Markup, tỷ giá lấy từ cấu hình.
- **Ba cách tạo hành trình** (Bằng AI là cách được làm nổi bật, cùng với Từ Tour mẫu, Thủ công) đi vào cùng một lưới ngày và dịch vụ, giống KD02 để người dùng không phải học hai giao diện.
- **Giá đúng hợp đồng.** Giá vốn lấy từ hợp đồng NCC áp dụng cho ngày sử dụng, theo mùa, loại ngày, nhóm tuổi trẻ em và phụ thu. Khoản thiếu được chỉ rõ để nhập tay; không có giá 0 ngầm.
- **Bám ngân sách của khách.** Ngân sách là trường riêng của yêu cầu, hiện ở phần đầu mọi tab, là tiêu chí cho AI, và được so với giá bán bình quân ở mỗi lần tính giá và mỗi phiên bản (R26). Vượt ngân sách chỉ cảnh báo, không chặn.
- **Phiên bản không bị sửa.** Báo giá đã lưu giữ nguyên dù hành trình, bảng giá hay tỷ giá đổi sau đó; muốn khác thì tạo phiên bản mới.
- **Gửi khách bằng link.** Proposal tự tạo từ phiên bản, bằng tiếng Anh hoặc tiếng Việt; người dùng sao chép link và tự gửi. Hệ thống không tự gửi email.
- **Biết bước tiếp theo.** Mỗi trạng thái chỉ có một nút chính: Lập báo giá, Tính giá, Publish proposal, Sửa hành trình, Mở Booking, Về Booking (chế độ điều chỉnh), Mở lại yêu cầu. Không có bước trung gian giữa khách chốt và Booking: ghi Chốt là tạo Booking (Q-RS17).

### 1.2. Lối vào và lối ra

| Từ / đến | Hành vi |
|---|---|
| KD05 → KD06 (tạo mới) | Tạo yêu cầu mở KD06 ở chế độ tạo mới, trống (W01). |
| KD05 → KD06 (yêu cầu có sẵn) | Bấm dòng mở KD06 ở tab đích theo tiến độ (R06; RSD KD05 R07). |
| KD04 → KD06 | Tạo yêu cầu Tour ở phần đầu KD04 mở KD06 tạo mới với khách, liên hệ chính, ngôn ngữ phục vụ điền sẵn (W05; RSD KD03-KD04 W27). Bấm mã yêu cầu ở KD04.3 mở KD06 của yêu cầu. |
| KD06 → KD04 | Bấm tên khách ở phần đầu mở KD04.1 của khách (RSD KD03-KD04). |
| KD06.3 → KD08 (Booking mới) | Chọn Chốt ở bảng trượt phiên bản, xác nhận trong hộp thoại (W40): Booking được tạo ngay từ đúng phiên bản đó, KD08 của Booking mới mở ở tab Điều khoản và lịch thanh toán (RSD KD08 L1.1, W02). Không có chế độ tạo mới của KD08 (Q-RS17). |
| KD06 → KD08 | Mở Booking ở phần đầu khi yêu cầu có Booking Hiệu lực (W42). |
| KD08.1 → KD06.3 | Liên kết phiên bản nguồn của Booking (và nút Xem vN của phiên bản điều chỉnh) mở KD06.3 với bảng trượt của phiên bản đó; liên kết chỉ hiện với người có quyền xem KD06 (mặc định Kinh doanh, Quản trị hệ thống); người không có quyền (mặc định Điều hành, Kế toán) thấy mã dạng chữ (R01; RSD KD08 1.4, R01). |
| KD08 → KD06 (chế độ điều chỉnh) | Điều chỉnh chương trình ở KD08 mở KD06 ở chế độ điều chỉnh cho Booking, tab Hành trình (W50; R27; RSD KD08 R09). Về Booking ở phần đầu trả về KD08 để bấm Chuyển sang Điều hành. |
| QT08 → KD06 | Bấm dòng báo cáo chuyển đổi mở KD06 ở tab đích (R06). |
| Thông báo (in-app) | “Bạn được giao yêu cầu YC-…” mở KD06 của yêu cầu ở tab đích (R06, R23). |
| KD06 → KD05 | Breadcrumb Yêu cầu Tour trả về KD05 với bộ lọc và vị trí giữ nguyên (RSD KD05 L3.2). |
| KD06.3 → Proposal | Mở proposal mở trang công khai của link trong tab mới (W33). |

### 1.3. Ranh giới

- KD06 **sở hữu**: yêu cầu Tour (khách được gắn, người liên hệ, ngôn ngữ phục vụ, loại Tour, nhu cầu, thời gian, số khách, phòng: phòng đơn, giường phụ), người phụ trách yêu cầu và lịch sử chuyển, hành trình hiện hành (ngày, nội dung tiếng Việt và tiếng Anh, dòng dịch vụ và dịch vụ đi kèm của dòng), phiên bản báo giá (bản chụp hành trình, điều kiện, giá vốn, Markup, tỷ giá, giá bán), kết quả báo giá, proposal và link, lý do hủy và mở lại.
- KD06 **không sở hữu** và chỉ đọc:
  - khách hàng và người liên hệ (KD04; KD06.1 chỉ tạo nhanh theo quy tắc của KD04);
  - Tour mẫu (KD02; KD06.2 sao chép, không liên kết sau khi sao chép);
  - NCC, hợp đồng, mùa giá, bảng giá, chính sách trẻ em, phụ thu, dịch vụ bao gồm và không bao gồm (DH03);
  - Booking, lịch thanh toán (KD08; KD06 chỉ khởi tạo Booking khi ghi Chốt, R19); bảng tỷ giá (QT05, Kế toán nhập; RSD QT05 R13); danh mục loại Tour, hạng phòng, lý do hủy, Markup mặc định, quy tắc làm tròn (QT05).
- **Bộ tính giá** (R13, R14) là một module dùng chung cho KD02 (giá vốn tham khảo), DH04 (tra cứu) và KD06 (báo giá); cả ba tính phụ thu (Q11). KD06 dùng bộ tính giá, không có quy tắc tính riêng.
- **Sau khi có Booking Hiệu lực**, KD06 mở bình thường thì chỉ xem. Thay đổi chương trình làm ở **chế độ điều chỉnh**: KD08 mở KD06 (R27); sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; được publish proposal của phiên bản điều chỉnh để gửi khách; không ghi kết quả, không tạo Booking ở chế độ này. KD06 không đổi Booking: sửa thông tin yêu cầu (thời gian, số khách) hay lưu phiên bản điều chỉnh không đổi thời gian, số khách, giá trị của Booking; Booking chỉ lên phiên bản mới khi Kinh doanh bấm Chuyển sang Điều hành ở KD08 (RSD KD08 R09; hồ sơ Tour nhận thay đổi theo RSD DH08 L1.5; Q-RS18).
- **Không có trạng thái hay giai đoạn ngoài nguồn** (RSD KD05): Đang xử lý, Đã có Booking, Đã hủy và kết quả của phiên bản. Không nhắc theo dõi, không có bước duyệt báo giá.
- **Không tự gửi ra ngoài.** Publish chỉ tạo link; người dùng tự gửi link cho khách. Khách không thao tác gì trên proposal ngoài xem và tải PDF.

### 1.4. Quyền mặc định theo vai trò

Quyền là cặp (màn hoặc phần của màn, thao tác), gán cho vai trò ở QT02; bảng dưới là giá trị mặc định, Quản trị đổi được ở QT02 (Q1). Không có phạm vi bản ghi: ai có quyền một thao tác thì làm được trên mọi yêu cầu, không phụ thuộc người phụ trách. Cột “Điều kiện” là điều kiện trạng thái, áp cho mọi người có quyền.

| Thao tác | Kinh doanh | Quản trị hệ thống | Điều hành, Kế toán | Điều kiện |
|---|---|---|---|---|
| Xem KD06.1, KD06.2, KD06.3, lịch sử; mở proposal, sao chép link đang mở | Có | Có (Q25) | Không (E2.6) | — |
| Tạo yêu cầu | Có (người tạo là người phụ trách) | Không | Không | — |
| Sửa thông tin, hành trình, nội dung tiếng Anh | Có | Không | Không | Đang xử lý hoặc ở chế độ điều chỉnh (R27) |
| Tính giá, lưu phiên bản | Có | Không | Không | Đang xử lý hoặc ở chế độ điều chỉnh (R27) |
| Ghi kết quả (ghi Chốt là tạo Booking) | Có | Không | Không | Đang xử lý, không ở chế độ điều chỉnh (R17); Chốt: không có Booking Hiệu lực (R19) |
| Publish, gia hạn, thu hồi link | Có | Không | Không | R18; ở chế độ điều chỉnh chỉ publish phiên bản điều chỉnh của Booking (R27) |
| Hủy yêu cầu | Có | Không | Không | R21 |
| Mở lại yêu cầu | Có | Có | Không | Đã hủy (R22) |
| Chuyển người phụ trách | Có | Có | Không | Đang xử lý (R23) |

- **Người phụ trách** chỉ là thông tin: hiện ở phần đầu, nhận thông báo, là nguồn của Việc của tôi và chip Của tôi ở KD05; không quyết định ai được sửa (Q1).
- **Người phụ trách yêu cầu khi có Booking Hiệu lực** luôn là người phụ trách Booking: chuyển người phụ trách Booking ở KD08 thì yêu cầu chuyển theo (RSD KD08 R11). KD05, KD06 không chuyển riêng người phụ trách của yêu cầu Đã có Booking (R23).
- **Không có quyền** (W11): nút của thao tác không có quyền bị ẩn; trường chỉ đọc hiện dạng chữ, không có ô nhập (U5). Ví dụ Quản trị hệ thống theo mặc định: không có ô nhập, nút lưu, Tính giá, Hủy yêu cầu; menu ⋯ có Chuyển người phụ trách, Lịch sử thay đổi. Người dùng vẫn bấm được tên khách, mở proposal, sao chép link.
- **Kiểm tra lúc ghi.** Máy chủ kiểm tra quyền của thao tác và trạng thái yêu cầu ở mọi thao tác ghi (E2.5).
- **Dữ liệu cá nhân.** KD06 hiện tên khách và người liên hệ; email, điện thoại chỉ hiện trong hộp thoại tìm và tạo khách. Proposal không có email, điện thoại của khách. Dữ liệu gửi cho dịch vụ AI không có tên, email, điện thoại của khách (R09).

### 1.5. Truy vết nguồn

| Mã nguồn | Nội dung | Luồng |
|---|---|---|
| KD06 · phần đầu | Mã yêu cầu, khách, trạng thái, báo giá mới nhất, liên kết Booking; Hủy yêu cầu khi không có Booking Hiệu lực | 2.1, L7.1, R02 |
| TN02.01 · SYS03.01 | Mở để thiết kế: nạp khách, nhu cầu, thời gian, số khách, hạng phòng | L2.1, L3.1, R06 |
| TN02.02 · SYS02.03, SYS02.04 | Tìm hồ sơ khách; có thì chọn, không tạo trùng | L1.1, R05 |
| TN02.03 · SYS02.05 | Tạo hồ sơ khách với thông tin cá nhân và liên hệ | L1.2, R05 |
| TN02.04 · SYS02.06, SYS02.09, SYS10.09, SYS10.10 | Tạo yêu cầu gắn khách (kể cả từ hồ sơ khách); nhập, lưu nhu cầu; chọn lập báo giá | L1.1, L1.3, L1.4, L2.2, R04 |
| TN02.05 · SYS02.10, SYS03.14 | Hủy yêu cầu, lưu lý do; từ yêu cầu hoặc sau khi ghi kết quả; không có trạng thái dừng riêng | L7.1, R21 |
| Vòng đời Yêu cầu Tour | Mở lại yêu cầu đã hủy (nguồn ghi chờ đặc tả; chốt 11/11/2026) | L7.2, R22 |
| TN03.01 · SYS03.02, SYS03.03, SYS01.07 | Chọn cách tạo; sao chép Tour mẫu Đang dùng | L3.1, R08 |
| TN03.02 · SYS03.04, SYS03.05 | Khởi tạo thủ công: nhập mới hoặc ghép ngày | L3.3, R07 |
| TN03.03 · SYS03.06 | Ghép ngày từ một hoặc nhiều Tour mẫu, gán ngày đích; thêm hoặc thay ngày lúc sửa | L3.2, R08 |
| TN03.04 · SYS03.07 | Tạo hành trình bằng AI; đề xuất không xác nhận giá, chỗ | L3.5, R09 |
| TN03.05 · SYS03.08 | Thêm, sửa, xóa, sắp xếp ngày và dịch vụ; lưu vào yêu cầu | L3.4, L3.6, L3.7, R07, R10, R11 |
| KD06.2 · đề xuất | Thay hành trình đã có bằng cách tạo khác cần xác nhận ghi đè (thay bằng Hoàn tác theo U2, vì chỉ thay khi lưu) | L3.6, R07 |
| TN03.06 · SYS03.09 | Tính giá theo hợp đồng, mùa, trẻ em, phụ thu, tỷ giá, Markup; thiếu giá thì nhập, không dùng giá 0 | L4.1, R13–R15 |
| TN03.07 · SYS03.10 | Lưu phiên bản; tạo PDF hoặc Link; tổng hợp bao gồm và không bao gồm | L4.1, L5.1–L5.3, R16, R18 |
| TN03.08 · SYS03.11, SYS03.12 | Ghi kết quả, có thể ghi sau; chọn sửa hành trình, sửa giá, hủy; ghi Chốt là tạo Booking | L6.1, L4.2, R17 |
| TN04.01 · SYS03.13 | Ghi Chốt tạo Booking từ đúng phiên bản đó; kế thừa khách, hành trình, giá trị (quyết định rà soát 13/11/2026, Q-RS17) | L6.2, R19 |
| Vòng đời Booking · KD08 | Booking Đã hủy | L6.4, R20 |
| Quyết định 11/11/2026 | Hủy, mở lại; Markup, tỷ giá; proposal và link; một Booking Hiệu lực, một phiên bản Chốt | R17–R22 |
| Quyết định 12/11/2026 · RSD KD08 R09–R11 | Hủy Booking thì yêu cầu Đã hủy; người phụ trách yêu cầu theo Booking; chế độ điều chỉnh, Chuyển sang Điều hành tự ghi Chốt, Đã thay thế; Quản trị mở lại kèm người phụ trách mới | L6.4, L6.5, R02, R17, R20–R23, R27 |
| RSD KD05 (chuyển giao) | Quyền theo vai trò (Q1); tab đích; chuyển phụ trách | R01, R06, L7.3, R23 |
| Quyết định rà soát 13/11/2026 (Q-RS17, Q-RS18) | Ghi Chốt là tạo Booking, không có trạng thái trung gian, không có nút Tạo Booking riêng; hủy Booking thì phiên bản của Booking giữ Chốt (người dùng trả lời 13/11/2026); sửa ở chế độ điều chỉnh không đổi Booking tới khi Chuyển sang Điều hành | L6.2, L6.4, R17, R19, R20, R27 |
| Quyết định 12/11/2026 · dịch vụ đi kèm, giường phụ (BOI-CANH, Q13') | Đi kèm thêm vào dòng dịch vụ chính kèm số lượng; nhập số giường phụ | L1.1, L3.4, L4.1, R04, R07, R13, R14, R18 |
| Quyết định 18/11/2026 · giường phụ cho trẻ em (BOI-CANH, Q13') | Giường phụ là giường cho trẻ em, không quá số trẻ em, không đổi số phòng; không có phòng ba người lớn; trẻ em tính theo chính sách trẻ em cộng khoản giường phụ chia đều cho trẻ em | E1.1, E4.12, R04, R13, 5.2, AC92–AC95, AC100 |
| Yêu cầu người dùng 25/11/2026 · AI | Chọn số phương án AI (1–3, mặc định 1), màn đang tạo, so sánh và chọn phương án; khung chat Sửa bằng AI ở cuối tab Hành trình, áp ngay kèm Hoàn tác, lịch sử chỉ trong phiên | L3.5, L3.10, E3.15–E3.20, R09, AC123–AC132 |

---

## 2. Khung màn, trạng thái và quy ước giao diện

### 2.1. Phần đầu (W07, W26)

| Vùng | Nội dung | Nguồn |
|---|---|---|
| Dòng 1 | Mã yêu cầu (R03); nhãn trạng thái (R02). Bên phải: nút theo trạng thái (đoạn Nút theo trạng thái bên dưới) và menu ⋯ | KD06 |
| Dòng 2 | Khách (tên, bấm mở KD04) · người liên hệ; Thời gian đi và số ngày đêm (hoặc “Tháng mm/yyyy · chưa chốt ngày”); số khách (người lớn, trẻ em); Ngân sách (“đến 2.100 EUR/khách”, “1.800–2.000 EUR/khách”, “đến 15.000 USD cả đoàn”, hoặc “—”); Ngôn ngữ phục vụ; Phụ trách; Báo giá mới nhất “vN · kết quả” hoặc “—”; Booking (mã, khi có) | KD06.1, KD06.3, KD08 |
| Tab | Thông tin yêu cầu · Hành trình · Báo giá | — |

- Thông tin ở phần đầu (khách, thời gian, số khách, ngôn ngữ, người phụ trách, báo giá mới nhất, Booking) không lặp lại trong tab. Vì vậy KD06.1 của yêu cầu đã lưu không có ô Người phụ trách; KD06.2 chỉ nhắc mong muốn, hạng phòng, loại Tour khi chưa có hành trình (W13).
- Yêu cầu chưa lưu: dòng 1 là “Yêu cầu mới · Chưa lưu”, không có dòng 2; Hành trình và Báo giá khóa kèm câu “Lưu thông tin yêu cầu để mở Hành trình và Báo giá” (W01).

**Nút theo trạng thái.** Nút của thao tác người dùng không có quyền thì ẩn (1.4, U5). Chưa lưu: không có nút ở phần đầu (Hủy, Lưu ở chân trang). Đang xử lý: Hủy yêu cầu · ⋯ (Chuyển người phụ trách, Lịch sử thay đổi). Đã có Booking: Mở Booking (nút chính, hiện với người có quyền xem KD08), Hủy yêu cầu bị khóa ghi lý do “đang có Booking hiệu lực”, ⋯ (Lịch sử). Chế độ điều chỉnh (R27): Về Booking BK-… (nút chính) · ⋯ (Lịch sử); không có Hủy yêu cầu. Đã hủy: Mở lại yêu cầu · ⋯ (Lịch sử).

### 2.2. Số trên tab

| Tab | Số | Màu |
|---|---|---|
| Thông tin yêu cầu | Không có | — |
| Hành trình | Số việc cần xử lý trước khi tính giá: ngày chưa có nội dung + dịch vụ của NCC hoặc dịch vụ Ngừng dùng + dịch vụ chưa gán NCC + dịch vụ đi kèm Ngừng dùng (R10). Không có thì không hiện | Vàng |
| Báo giá | Số phiên bản đã lưu | Xám |

### 2.3. Dải thông báo cấp hồ sơ

| Dải | Khi nào | Nội dung | Nút |
|---|---|---|---|
| Đã hủy (xám, W44) | Yêu cầu Đã hủy do người dùng bấm Hủy yêu cầu (R21) | Ngày, người hủy, lý do, ghi chú; “Hồ sơ chỉ còn xem” | Không (nút Mở lại ở phần đầu) |
| Đã hủy do hủy Booking (xám, W47) | Yêu cầu tự Đã hủy khi Booking bị hủy (R21) | Mã Booking, ngày hủy, người hủy, lý do hủy Booking; “Khách muốn đặt lại: Mở lại yêu cầu, báo giá và ghi Chốt để tạo Booking mới” | Không (nút Mở lại ở phần đầu) |
| Đã có Booking (xanh lá, W42) | Có Booking Hiệu lực, KD06 mở bình thường | Mã Booking, phiên bản của Booking, thời điểm; “Hồ sơ chỉ xem; thay đổi chương trình: bấm Điều chỉnh chương trình ở Booking” | Không (nút Mở Booking ở phần đầu) |
| Chế độ điều chỉnh (tím, W50, W51) | KD06 mở từ Điều chỉnh chương trình ở KD08 (R27) | Mã Booking, phiên bản của Booking; “Sửa hành trình thì giá tự tính lại, lưu thành phiên bản mới; publish proposal của phiên bản mới để gửi khách nếu cần. Không ghi kết quả ở đây; khách đồng ý thì về Booking bấm Chuyển sang Điều hành” | Không (nút Về Booking ở phần đầu) |
| Hành trình khác báo giá (xanh dương, W23, W26) | Hành trình lưu sau phiên bản mới nhất | Phiên bản, thời điểm sửa, số dịch vụ đổi và ngày bị đổi (R11) | Không (Tính giá là nút chính của tab) |

Dải chỉ hiện ở tab liên quan: Hành trình khác báo giá hiện ở Hành trình và Báo giá; các dải còn lại hiện ở mọi tab.

### 2.4. Vòng đời yêu cầu Tour

| Từ → đến | Sự kiện và tác nhân | Điều kiện | Tác động | Ngoại lệ |
|---|---|---|---|---|
| (chưa có) → Đang xử lý | Kinh doanh bấm Lưu hoặc Lưu và lập báo giá ở KD06.1 | Hợp lệ theo R04; có khách | Cấp mã (R03); người tạo là người phụ trách; mở các tab | E1.1, E1.5 |
| Đang xử lý → Đã có Booking | Kinh doanh ghi Chốt cho một phiên bản ở KD06.3, xác nhận trong hộp thoại (L6.2) | Chưa có Booking Hiệu lực; phiên bản không Đã thay thế (R19) | Trong một giao dịch: phiên bản thành Chốt, Booking Hiệu lực tạo từ phiên bản đó, hồ sơ Tour được tạo (RSD KD08 L1.1); hồ sơ chỉ xem; nút Mở Booking; người phụ trách Booking là người phụ trách yêu cầu | E6.4, E6.5 |
| Đã có Booking → Đã có Booking | Kinh doanh bấm Chuyển sang Điều hành ở KD08 sau khi điều chỉnh (R27) | Booking có phiên bản điều chỉnh chưa chuyển (R27; RSD KD08 R09) | Phiên bản điều chỉnh mới nhất của Booking thành Chốt, gắn Booking; phiên bản cũ của Booking thành Đã thay thế (R17) | E6.12 |
| Đã có Booking → Đã hủy | Kinh doanh hủy Booking ở KD08 | Booking là Booking Hiệu lực duy nhất | Tự hủy, lý do “Booking đã hủy”; phiên bản của Booking giữ Chốt, kèm “Booking … · Đã hủy”; thu hồi link đang mở; dải W47 (R20, R21) | — |
| Đang xử lý → Đã hủy | Kinh doanh bấm Hủy yêu cầu, chọn lý do | Không có Booking Hiệu lực (R21) | Chỉ xem; thu hồi mọi link đang mở; ghi lý do | E7.1, E7.2 |
| Đã hủy → Đang xử lý | Kinh doanh hoặc Quản trị bấm Mở lại yêu cầu, nhập lý do, có thể chọn người phụ trách mới (R22) | Yêu cầu Đã hủy | Giữ hành trình, phiên bản, kết quả; link đã thu hồi không mở lại; ghi Chốt lại để tạo Booking mới (R19) | E7.4 |

Thứ tự tính trạng thái ở R02. Lưu hành trình, tính giá, lưu phiên bản, ghi kết quả Chưa có kết quả, Cần điều chỉnh, Không chốt, publish, Chuyển sang Điều hành không đổi trạng thái (nguồn: “Giữ nguyên khi sửa hành trình, sửa giá hoặc lưu phiên bản mới”); ghi Chốt tạo Booking nên yêu cầu thành Đã có Booking (Q-RS17).

### 2.5. Trạng thái của đối tượng con

| Đối tượng | Giá trị | Cách có giá trị |
|---|---|---|
| Hành trình | Chưa có · Có (chưa lưu thay đổi) · Đã lưu | Chưa lưu chỉ là trạng thái trên màn hình; chân trang ghi “● Chưa lưu” |
| Chỉ báo hành trình | Khác báo giá mới nhất | Lưu hành trình sau phiên bản mới nhất (R11) |
| Dòng dịch vụ | Bình thường · Ngừng dùng · Chưa gán NCC · Khác ngôn ngữ phục vụ (cảnh báo; chỉ có khi DH03 có trường ngôn ngữ của dịch vụ HDV, hiện chưa có nên không hiện, R10) | R10 |
| Phiên bản báo giá | Đã lưu (không sửa); nhãn “Điều chỉnh cho BK-…” khi lưu ở chế độ điều chỉnh; là **phiên bản điều chỉnh của Booking** khi mang nhãn của Booking đang Hiệu lực, lưu sau lần tạo hoặc lần Chuyển sang Điều hành gần nhất của Booking và Chưa có kết quả | R16, R27; RSD KD08 R09 |
| Kết quả phiên bản | Chưa có kết quả · Chốt · Cần điều chỉnh · Không chốt · Đã thay thế | Người dùng ghi bốn giá trị đầu (R17); ghi Chốt là tạo Booking từ phiên bản đó (R19). Chuyển sang Điều hành ở KD08 tự ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking và gán Đã thay thế cho phiên bản Chốt cũ của Booking; người dùng không chọn được Đã thay thế. Hủy Booking không đổi kết quả: phiên bản của Booking giữ Chốt (R20). Phiên bản Chốt luôn là phiên bản của một Booking (Hiệu lực hoặc đã hủy), nên không có phiên bản Chốt khi chưa từng có Booking và mỗi yêu cầu tối đa một phiên bản Chốt của Booking Hiệu lực (Q-RS17) |
| Proposal link | Đang mở · Hết hạn · Đã thu hồi; chỉ báo “có bản mới hơn” | R18; Hết hạn tính lúc đọc từ hạn (Q6) |
| Booking (chỉ đọc) | Hiệu lực · Đã hủy | Theo KD08 |

| Nhãn | Màu |
|---|---|
| Đang xử lý | Xanh dương |
| Đã có Booking | Xanh lá |
| Đã hủy | Xám |
| Chốt · Cần điều chỉnh · Không chốt · Chưa có kết quả · Đã thay thế | Xanh lá · Vàng · Xám · Xanh dương · Xám |
| Chế độ điều chỉnh, Điều chỉnh cho BK-… | Tím |
| Link Đang mở · Hết hạn · Đã thu hồi | Xanh lá · Xám · Xám |
| Nhập tay (khoản giá) · Đề xuất AI · Dịch nháp · Sửa bằng AI (ngày, dòng vừa được AI đổi, chưa lưu; L3.10) | Tím |

### 2.6. Quy ước giao diện và xử lý dùng chung

- **Kiểu thao tác.** *Form tại tab:* Thông tin yêu cầu (một form, một nút Lưu ở chân trang) và lưới ngày của Hành trình. *Ô chọn tại chỗ:* Số lượng của dòng dịch vụ (chưa lưu đến khi Lưu hành trình); kết quả báo giá và hạn link khi Gia hạn (lưu ngay; riêng Chốt qua hộp thoại xác nhận vì tạo Booking). *Bảng trượt:* Chọn Tour mẫu, Thêm và Đổi dịch vụ, Tạo bằng AI (tiêu chí, đang tạo, so sánh phương án), Tính giá, Phiên bản báo giá, Lịch sử thay đổi. *Khung chat:* Sửa bằng AI ở cuối tab Hành trình, trên chân trang (W54; L3.10), thu gọn thành một dòng nhập khi không dùng. *Hộp thoại:* Tìm khách hàng, trùng khách, rời khi chưa lưu, Ghép ngày, Publish, Chốt và tạo Booking (xác nhận theo CGD U2.01: tạo Booking cấp mã, không hoàn tác), Thu hồi link, Hủy, Mở lại, Chuyển người phụ trách.
- **Một thao tác, một chỗ bấm.** Mỗi trạng thái màn hình chỉ có một điểm bấm cho một việc: Hủy yêu cầu, Mở lại, Mở Booking, Về Booking chỉ ở phần đầu; Tính giá chỉ ở đầu tab Báo giá (hoặc Tính giá → ở chân Hành trình khi vừa lưu, là bước tiếp theo của tab đó); Publish, Gia hạn, Thu hồi chỉ trong bảng trượt phiên bản; ghi Chốt (tạo Booking) chỉ ở nút chọn kết quả trong bảng trượt phiên bản; không có nút Tạo Booking riêng (Q-RS17).
- **Nút bị khóa có lý do** ngay cạnh (Lưu và tính giá, Tính giá →, Hủy yêu cầu, Publish, Lưu phiên bản).
- **Nhãn nguồn** cho dữ liệu điền sẵn: Từ khách hàng, Liên hệ chính, Từ yêu cầu, Từ vN, Mặc định …, Bảng tỷ giá, Nhập tay, Dịch nháp, Đề xuất AI.
- **Chưa lưu** luôn hiện ở chân trang (● Chưa lưu); rời đi thì hỏi (W09).
- **Không tự gửi ra ngoài.** Publish tạo link; người dùng tự gửi. Không có sự kiện nào tự gửi email hay tin nhắn cho khách hoặc NCC.
- **Tải.** Mở hồ sơ tải yêu cầu, hành trình, danh sách phiên bản; bảng trượt phiên bản tải chi tiết khi mở. Đang tải: khung xám ở phần đầu và tab.
- **Lưu.** Mỗi form một nút Lưu; lưu theo phần (thông tin yêu cầu; hành trình; nội dung tiếng Anh); mỗi phần khóa lạc quan theo phiên bản riêng để phát hiện xung đột, lệch thì chỉ có Tải lại (Q8; E2.1, E3.8). Kết quả báo giá và gia hạn link lưu ngay khi chọn.
- **Tiền và ngày.** Hiển thị theo quy ước dự án: dd/mm/yyyy, dấu chấm phân cách nghìn, dấu phẩy thập phân trong giao diện; proposal tiếng Anh dùng định dạng tiếng Anh (2,030; 15 Mar 2027). Mọi số tiền làm tròn half-up theo đơn vị nhỏ nhất của loại tiền (Q9); bội số làm tròn chỉ áp cho giá bán mỗi khách (R14).
- **Lịch sử.** Mọi thao tác ghi ở 5.1 ghi lịch sử yêu cầu và QT03.
- **Giữ ngữ cảnh.** Sau khi lưu ở lại đúng tab và ngày đang mở; đóng bảng trượt trở về danh sách đang cuộn.

---

## 3. Luồng thao tác kèm wireframe

Mỗi luồng có mã L, ngoại lệ có mã E. Mỗi bước ghi theo dạng **mã W · chỗ bấm**, sau đó là thao tác của người dùng và phản hồi của hệ thống. Hình wireframe nằm ngay dưới bước.

### 3.1. Tạo yêu cầu (KD06.1 · TN02.02–TN02.04)

**L1.1 Tạo yêu cầu cho khách đã có.** *Điều kiện:* Kinh doanh; mở từ Tạo yêu cầu ở KD05.

1. **W01 · Nút Tạo yêu cầu ở KD05 → form tại tab.** KD06 mở ở chế độ tạo mới, tab Thông tin yêu cầu, form trống. Thẻ Khách hàng chỉ có nút Tìm khách hàng; Người liên hệ, Ngôn ngữ phục vụ khóa đến khi có khách. Người phụ trách điền sẵn là người tạo. Lưu và Lưu và lập báo giá khóa đến khi có khách.

   ![W01 · Hồ sơ yêu cầu mới, trống](wireframes/W01.png)

2. **W02 · Nút Tìm khách hàng ở thẻ Khách hàng → hộp thoại.** Người dùng gõ “müller”. Hệ thống tìm sau 300 ms theo tên, mã khách, email và điện thoại, kể cả của người liên hệ (R05). Mỗi dòng ghi loại, quốc gia, liên hệ chính và yêu cầu đang xử lý kèm người phụ trách, để người dùng thấy Müller Reisen GmbH đã có YC-2611-0019 trước khi tạo thêm.

   ![W02 · Tìm khách hàng có kết quả](wireframes/W02.png)

3. **W05 · Nút Chọn trên dòng khách.** Hộp thoại đóng; thẻ Khách hàng hiện khách (ô chỉ đọc, có Đổi khách), Người liên hệ là liên hệ chính (nhãn Liên hệ chính), Ngôn ngữ phục vụ lấy từ ngôn ngữ giao tiếp của khách (nhãn Từ khách hàng), ghi chú của khách hiện làm gợi ý. Người dùng nhập loại Tour, mong muốn, ngày đi – ngày về (hệ thống ghi số ngày đêm dưới ô), số người lớn, số trẻ em và tuổi từng trẻ, hạng phòng, số phòng đơn, số giường phụ (bổ sung 12/11/2026; giường phụ cho trẻ em, không quá số trẻ em, không đổi số phòng, sửa 18/11/2026; hệ thống ghi số phòng đôi, số phòng dưới ô, R04), ngân sách của khách (từ – đến, loại tiền, Mỗi khách hoặc Cả đoàn; hệ thống ghi giá trị quy đổi sang cách tính còn lại).

   ![W05 · Nhập nhu cầu sau khi có khách](wireframes/W05.png)

4. **W07 · Nút Lưu ở chân trang.** Hệ thống kiểm tra theo R04, cấp mã YC-2611-0031, trạng thái Đang xử lý. Phần đầu đầy đủ; Hành trình và Báo giá mở; ô Người phụ trách rời khỏi form vì đã có ở phần đầu; chân trang có nút chính Lập báo giá.

   ![W07 · Sau khi lưu yêu cầu lần đầu](wireframes/W07.png)

*Kết quả:* yêu cầu Đang xử lý gắn với khách đã có, người tạo là người phụ trách; KD05 hiện yêu cầu ở chip Đang xử lý.

**L1.2 Tạo khách nhanh khi không tìm thấy.** *Điều kiện:* như L1.1; tìm không có kết quả.

1. **W03 · Ô tìm của hộp thoại Tìm khách hàng.** Người dùng gõ “bianchi”, không có kết quả. Hộp thoại hiện ngay form tạo khách: loại (Cá nhân, Doanh nghiệp), tên (điền sẵn từ ô tìm), quốc gia, ngôn ngữ giao tiếp (gợi ý theo quốc gia), người liên hệ chính với họ tên, email, điện thoại. Các trường bắt buộc theo RSD KD03-KD04 R01.

   ![W03 · Không tìm thấy, tạo nhanh khách hàng](wireframes/W03.png)

2. **W05 · Nút Tạo và gắn vào yêu cầu.** Hệ thống kiểm tra theo R05; có thể trùng thì hiện W04 (E1.2). Không trùng thì hệ thống tạo khách KH-00142 theo quy tắc KD04 (người tạo là người phụ trách khách), đóng hộp thoại và gắn khách vào yêu cầu; nhãn Vừa tạo cạnh ô Khách hàng; thông báo ngắn xác nhận. Yêu cầu vẫn chưa lưu.
3. **W07 · Nút Lưu ở chân trang.** Người dùng nhập nhu cầu và bấm Lưu như L1.1 bước 4.

*Kết quả:* khách mới có trong KD03 ngay cả khi người dùng bỏ yêu cầu sau đó (E1.4).

**L1.3 Tạo yêu cầu từ hồ sơ khách hàng.** *Điều kiện:* Kinh doanh bấm Tạo yêu cầu Tour ở KD04 (SYS10.09, SYS10.10).

1. **W05 · Nút Tạo yêu cầu Tour ở KD04 → form tại tab.** KD06 mở tạo mới với khách, liên hệ chính, ngôn ngữ phục vụ điền sẵn (nhãn Từ khách hàng). Người dùng nhập phần còn lại và lưu như L1.1 bước 4 (W07).

*Kết quả:* không phải tìm lại khách.

**L1.4 Lưu và lập báo giá.** *Điều kiện:* form hợp lệ.

1. **W13 · Nút Lưu và lập báo giá ở chân trang.** Người dùng bấm Lưu và lập báo giá thay cho Lưu. Hệ thống lưu như L1.1 bước 4 rồi mở thẳng tab Hành trình (SYS02.09 → SYS02.11 → SYS03.01). Với yêu cầu đã lưu và không có thay đổi, nút này mang nhãn Lập báo giá (W07).

*Kết quả:* một lần bấm thay cho Lưu rồi chọn tab.

**Ngoại lệ**

- **E1.1 Dữ liệu nhập sai (W06).** Bấm Lưu khi thiếu hoặc sai: banner đỏ “Chưa lưu được: còn n lỗi”, lỗi ghi dưới từng trường; dữ liệu đã nhập được giữ; con trỏ đặt vào trường lỗi đầu tiên. Các lỗi theo R04: thiếu loại Tour, mong muốn, thời gian, số người lớn; ngày về trước ngày đi; ngày đi trước hôm nay (chỉ khi tạo mới); số tuổi nhập khác số trẻ em; tuổi ngoài 0–17; phòng đơn lớn hơn số người lớn; giường phụ nhiều hơn số trẻ em, lỗi cạnh ô “Giường phụ không quá số trẻ em” (R04; sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em). Giường phụ nhiều hơn số phòng đôi không phải lỗi, chỉ cảnh báo (R04, người dùng chốt 12/11/2026).

  ![W06 · Lỗi khi lưu yêu cầu](wireframes/W06.png)

- **E1.2 Khách mới có thể trùng (W04).** Khi bấm Tạo và gắn vào yêu cầu, nếu thông tin trùng theo RSD KD03-KD04 R02 thì hiện hộp thoại liệt kê hồ sơ có thể trùng và trường trùng. Người dùng chọn Dùng hồ sơ này (gắn khách đã có, bỏ form tạo) hoặc nhập lý do rồi Vẫn tạo và gắn vào yêu cầu (hệ thống ghi cặp hồ sơ là không trùng).

  ![W04 · Cảnh báo có thể trùng khách hàng](wireframes/W04.png)

- **E1.3 Rời khi chưa lưu (W09).** Bấm Hủy, breadcrumb, menu hoặc đóng trình duyệt khi đã nhập: hộp thoại Lưu và rời, Bỏ thay đổi, Ở lại. Chưa nhập gì thì rời ngay. Trình duyệt chỉ hiện hộp thoại mặc định của trình duyệt khi đóng tab.

  ![W09 · Rời khi chưa lưu](wireframes/W09.png)

- **E1.4 Bỏ yêu cầu sau khi đã tạo khách nhanh.** Khách KH-00142 vẫn được giữ ở KD03 (không xóa ngầm); thông báo ngắn khi rời: “Khách Bianchi Viaggi S.r.l. đã được tạo ở Khách hàng”.
- **E1.5 Lỗi lưu.** Mất kết nối hoặc lỗi máy chủ: banner đỏ “Chưa lưu được yêu cầu. Thử lại”, dữ liệu giữ nguyên; nút Lưu bật lại. Bấm Lưu lặp trong lúc đang lưu bị bỏ qua (nút hiện Đang lưu…), máy chủ chống tạo hai yêu cầu bằng mã phiên tạo mới.
- **E1.6 Đổi khách sau khi chọn.** Trước khi có phiên bản báo giá: Đổi khách mở lại hộp thoại tìm; người liên hệ và ngôn ngữ phục vụ được điền lại theo khách mới nếu người dùng chưa tự đổi. Đã có phiên bản báo giá: ô khóa với lý do “Không đổi khách khi yêu cầu đã có phiên bản báo giá” (W08).
- **E1.7 Danh mục trống.** Loại Tour hoặc hạng phòng chưa khai ở QT05: ô thả xuống ghi “Chưa có danh mục · thêm ở QT05” (loại Tour do Kinh doanh, hạng phòng do Điều hành thêm, R25; RSD QT05 mục 1.5); loại Tour bắt buộc nên chưa lưu được; hạng phòng không bắt buộc.
- **E1.8 Khách doanh nghiệp không còn liên hệ chính** (bị sửa ở KD04 trong lúc tạo): ô Người liên hệ trống, chọn được người liên hệ khác của khách; không bắt buộc.
- **E1.9 Chưa chốt ngày.** Chọn Tháng dự kiến: nhập tháng và số ngày thay cho ngày đi – ngày về; phần đầu ghi “Tháng mm/yyyy · chưa chốt ngày”; hành trình ghi Ngày n không kèm ngày (R04, R07).
- **E1.10 Không có quyền tạo.** Người không có quyền Tạo yêu cầu (mặc định Quản trị hệ thống) không thấy nút Tạo yêu cầu (U5); mở đường dẫn tạo mới thì thấy trang “Bạn không có quyền tạo yêu cầu Tour”. Người không có quyền xem: E2.6.

### 3.2. Mở và cập nhật yêu cầu (KD06.1 · SYS02.07–SYS02.09)

**L2.1 Mở đúng chỗ cần xử lý.** *Điều kiện:* mở từ KD05, KD04.3, QT08 hoặc thông báo.

1. **W13, W26 · Dòng yêu cầu ở KD05, mã yêu cầu ở KD04.3, dòng báo cáo ở QT08 hoặc thông báo.** KD06 mở ở tab đích theo R06: chưa có hành trình → Thông tin yêu cầu; có hành trình nhưng chưa có phiên bản → Hành trình; có phiên bản → Báo giá. Hệ thống luôn tải bản mới nhất của yêu cầu.

*Kết quả:* người dùng vào thẳng bước cần làm.

**L2.2 Sửa thông tin yêu cầu.** *Điều kiện:* có quyền sửa (1.4); Đang xử lý.

1. **W08 · Form tại tab Thông tin yêu cầu.** Người dùng sửa trực tiếp trên form (ví dụ thêm vào Mong muốn “Khách muốn đổi khách sạn ở Huế từ 5 sao xuống 4 sao”). Chân trang đổi thành “● Có thay đổi chưa lưu” kèm Hủy thay đổi và Lưu. Khi đã có phiên bản báo giá, dải xanh nhắc báo giá đã lưu không tự đổi; ô Khách hàng khóa.

   ![W08 · Sửa yêu cầu đã có báo giá](wireframes/W08.png)

2. **W08 · Nút Lưu ở chân trang.** Hệ thống lưu theo phần (chỉ thông tin yêu cầu), chân trang ghi “Đã lưu … bởi …”, phần đầu cập nhật (thời gian, số khách). Tác động sang tab khác theo R07: đổi ngày đi thì ngày của hành trình dời theo; đổi số khách, số phòng thì số lượng “Theo số khách”, “Theo số phòng” tính lại; số ngày lệch thì KD06.2 cảnh báo.

*Kết quả:* thông tin yêu cầu mới dùng ngay cho hành trình và lần tính giá sau; phiên bản báo giá đã lưu giữ nguyên (R16).

**L2.3 Xem yêu cầu khi không có quyền sửa.** *Điều kiện:* người có quyền xem nhưng không có quyền sửa (mặc định Quản trị hệ thống, 1.4). Kinh doanh không phụ trách yêu cầu vẫn sửa được như người phụ trách (Q1).

1. **W11 · Mọi tab của yêu cầu.** Mọi tab ở chế độ chỉ đọc: trường hiện dạng chữ (U5), không có nút Hủy yêu cầu; lưới ngày không có ô nhập, nút thêm, kéo thả; tab Báo giá không có Tính giá; bảng trượt phiên bản chỉ hiện kết quả và link. Phần đầu vẫn ghi người phụ trách ở dòng 2.

   ![W11 · Xem yêu cầu do người khác phụ trách](wireframes/W11.png)

   > Hình chưa cập nhật: phần đầu còn dòng “Chỉ xem · do Nguyễn Hoàng Nam phụ trách” và người xem là Kinh doanh (Lê Thu Hà); nay Kinh doanh sửa được, chỉ người không có quyền sửa mới thấy chế độ chỉ đọc, không có dòng đó.

*Kết quả:* người không có quyền sửa biết yêu cầu đang ở đâu mà không sửa được.

**Ngoại lệ**

- **E2.1 Xung đột khi lưu (W10).** Yêu cầu vừa được lưu ở phiên khác (người khác, hoặc cùng người ở cửa sổ khác): lưu bị từ chối; banner đỏ liệt kê trường lệch (bản vừa lưu, bản của bạn), thay đổi của bạn còn trên màn hình để sao chép; chỉ có nút Tải lại (tải bản mới, bỏ thay đổi của tôi); không có nút ghi đè (Q8).

  ![W10 · Xung đột khi lưu](wireframes/W10.png)

  > Hình chưa cập nhật: còn nút “Lưu bản của tôi đè lên”; nay chỉ có Tải lại (Q8).

- **E2.2 Lỗi tải hồ sơ (W12).** Không tải được: không hiện dữ liệu cũ; Thử lại hoặc Về danh sách yêu cầu.

  ![W12 · Lỗi tải hồ sơ yêu cầu](wireframes/W12.png)

- **E2.3 Rời khi chưa lưu (W09).** Áp dụng cho mọi tab có thay đổi chưa lưu, kể cả khi chuyển tab.

- **E2.4 Đổi số ngày khi đã có hành trình.** Lưu được; tab Hành trình hiện dải vàng “Hành trình có n ngày, yêu cầu đi m ngày” (như W15). Hệ thống không tự thêm hoặc xóa ngày.
- **E2.5 Trạng thái hoặc quyền đổi giữa chừng.** Yêu cầu vừa có Booking, vừa bị hủy ở phiên khác hoặc tự hủy do Booking bị hủy, hoặc vai trò của người dùng vừa bị bỏ quyền ở QT02: lưu bị từ chối, banner đỏ nêu lý do (“Yêu cầu vừa được hủy lúc …”), dữ liệu đang nhập giữ trên màn hình để sao chép; Tải lại mở hồ sơ ở trạng thái hiện tại. Chuyển người phụ trách không làm mất quyền sửa (Q1).
- **E2.6 Không có quyền xem.** Người không có quyền xem KD06 (mặc định Điều hành, Kế toán) mở đường dẫn KD06: trang “Bạn không có quyền xem yêu cầu Tour”. Từ KD08, liên kết sang KD06 (yêu cầu, phiên bản nguồn, Xem vN) chỉ hiện với người có quyền xem KD06; người khác thấy mã yêu cầu và số phiên bản dạng chữ (RSD KD08 1.4, R01).
- **E2.7 Yêu cầu không còn tồn tại.** Mã không có (gõ sai hoặc bị xóa bằng công cụ quản trị): trang “Không tìm thấy yêu cầu YC-…” và nút về danh sách.

### 3.3. Thiết kế hành trình (KD06.2 · TN03.01–TN03.05)

**L3.1 Tạo hành trình từ Tour mẫu.** *Điều kiện:* có quyền sửa (1.4); Đang xử lý; chưa có hành trình.

1. **W13 · Tab Hành trình, chưa có hành trình.** Dải đầu nhắc loại Tour, hạng phòng và số phòng, tuổi trẻ em, mong muốn (phần còn lại đã ở phần đầu). Ba thẻ theo thứ tự: **Bằng AI** (bên trái, viền xanh, nhãn Nhanh nhất, nút Tạo bằng AI màu xanh là nút chính của màn), Từ Tour mẫu, Thủ công (nút viền trắng); mỗi thẻ ghi gợi ý dựa trên yêu cầu (ví dụ “gần nhất với 10 ngày là TM-008”). Nút của thẻ mở: Tạo bằng AI → W19 (L3.5); Chọn Tour mẫu → W14; Tạo 10 ngày trống → W48 (L3.3); Ghép ngày từ Tour mẫu → W16 (L3.2).

   ![W13 · Chọn cách tạo hành trình](wireframes/W13.png)

2. **W14 · Nút Chọn Tour mẫu → bảng trượt.** Bảng trượt chỉ liệt kê Tour mẫu Đang dùng (RSD KD01-KD02 R10), lọc sẵn theo loại Tour của yêu cầu, sắp theo số ngày gần với yêu cầu nhất. Người dùng lọc và chọn một mẫu thì bên phải xem trước các ngày, số dịch vụ, dịch vụ Ngừng dùng, và cảnh báo khi số ngày khác yêu cầu.

   ![W14 · Chọn Tour mẫu](wireframes/W14.png)

   > Hình chưa cập nhật: còn chữ “cho phép sử dụng”, “ngừng sử dụng”; nay là Đang dùng, Ngừng dùng (K6).

3. **W15 · Nút Sao chép TM-008 vào hành trình.** Hệ thống sao chép bản đã lưu mới nhất của mẫu (ngày, tiêu đề, nội dung, dòng dịch vụ, cách tính số lượng, ghi chú; không sao chép giá, ghi chú nội bộ) theo R08. Ngày 1 gán vào ngày đi 10/03/2027; số lượng tính theo 16 khách và 7 phòng của yêu cầu. Dòng ghi “Từ Tour mẫu TM-008 · chưa lưu”; thông báo có Hoàn tác. Dải vàng báo hành trình 8 ngày, yêu cầu 10 ngày. Cảnh báo Khác ngôn ngữ phục vụ không hiện vì DH03 chưa có trường ngôn ngữ của dịch vụ HDV (R10). Số trên tab là 1 vì Ngày 8 có dịch vụ của NCC Ngừng dùng.

   ![W15 · Hành trình sau khi sao chép Tour mẫu](wireframes/W15.png)

   > Hình chưa cập nhật: dòng HDV tiếng Đức còn nhãn Khác ngôn ngữ phục vụ; nay không hiện (R10).

4. **W15 · Lưới ngày.** Người dùng bổ sung ngày (L3.2), dịch vụ (L3.4) rồi lưu (L3.7).

*Kết quả:* hành trình có lịch trình và dịch vụ của mẫu, theo đúng ngày và số khách của yêu cầu; Tour mẫu không đổi.

**L3.2 Ghép ngày từ Tour mẫu.** *Điều kiện:* như L3.1; có hoặc chưa có hành trình (SYS03.05, SYS03.06).

1. **W16 · Nút Ghép ngày trên lưới, hoặc Ghép ngày từ Tour mẫu ở thẻ Thủ công (W13) → hộp thoại.** Hộp thoại có hai cột: (1) chọn Tour mẫu và tích các ngày nguồn; đổi sang Tour mẫu khác vẫn giữ ngày đã chọn; (2) chọn cách ghép Chèn hoặc Thay ngày và vị trí đích. Bảng xem trước cập nhật trực tiếp theo lựa chọn, cho thấy ngày đích, nội dung nguồn và ngày bị dời hoặc bị thay.

   ![W16 · Ghép ngày từ Tour mẫu](wireframes/W16.png)

2. **W17 · Nút Ghép 2 ngày.** Hệ thống sao chép nội dung và dịch vụ của các ngày nguồn vào vị trí đích, đánh lại số ngày và ngày theo R07; ngày ghép có nhãn nguồn (TM-010 · N1) và nền xanh; Ngày 8 cũ thành Ngày 10. Thông báo có Hoàn tác. Hành trình chưa lưu.

   ![W17 · Sau khi ghép ngày](wireframes/W17.png)

*Kết quả:* hành trình 10 ngày, khớp thời gian đi; Tour mẫu nguồn không đổi.

**L3.3 Khởi tạo thủ công.** *Điều kiện:* như L3.1.

1. **W48 · Nút Tạo 10 ngày trống ở thẻ Thủ công.** Hệ thống tạo đủ số ngày theo thời gian đi, mỗi ngày đã có ngày tháng; con trỏ ở tiêu đề Ngày 1. Số trên tab là 10 (ngày chưa có nội dung). Người dùng nhập tiêu đề, nội dung, thêm dịch vụ (L3.4) hoặc ghép ngày vào ngày trống (L3.2 cách Thay ngày).

   ![W48 · Hành trình thủ công, ngày trống](wireframes/W48.png)

*Kết quả:* hành trình nhập mới, có thể kết hợp với ngày ghép từ Tour mẫu.

**L3.4 Sửa ngày và dịch vụ.** *Điều kiện:* có hành trình; có quyền sửa (1.4); Đang xử lý.

1. **W15 · Ô ngày, ô chọn Số lượng, nút kéo ⠿ và menu ⋯ trên lưới.** Người dùng chọn ngày ở cột trái; sửa tiêu đề, nội dung tại chỗ; kéo ⠿ để sắp xếp ngày hoặc dòng dịch vụ; menu ⋯ của ngày có Thêm ngày phía sau, Nhân bản, Chuyển lên, Chuyển xuống, Xóa ngày; ô Số lượng là ô chọn tại chỗ (Cố định, Theo số khách, Theo số phòng); ⋯ của dòng có Đổi dịch vụ, Xóa. Mọi sửa đổi ở trạng thái chưa lưu; sắp xếp ngày thì ngày tháng tính lại (R07).
2. **W18 · Nút + Thêm dịch vụ trong ô Ngày 5 → bảng trượt.** Bảng trượt danh mục NCC (chỉ NCC và dịch vụ đang dùng) lọc sẵn theo nơi của ngày; giá tham chiếu theo ngày sử dụng và loại tiền gốc của dòng giá (RSD DH03 R14, DH04 R07). Dịch vụ HDV khớp ngôn ngữ phục vụ có nhãn (chỉ khi DH03 có trường ngôn ngữ của dịch vụ HDV; hiện chưa có, R10). Người dùng chọn một hoặc nhiều dịch vụ và chọn thêm các ngày khác cần thêm cùng dịch vụ (mặc định chỉ ngày đang mở). Dịch vụ đi kèm không có dòng riêng trong bảng trượt; dịch vụ chính có đi kèm ghi “+ n dịch vụ đi kèm” (bổ sung 12/11/2026; RSD DH03 R23).

   ![W18 · Thêm dịch vụ từ danh mục NCC](wireframes/W18.png)

3. **W17 · Nút Thêm trong bảng trượt.** Dòng mới vào cuối mỗi ngày đã chọn, có nhãn Mới; số lượng tự tính theo đơn vị tính (RSD KD01-KD02 R05). Hành trình chưa lưu.
4. **W17 · Menu ⋯ của dòng dịch vụ chính → Thêm dịch vụ đi kèm → khung chọn tại chỗ (bổ sung 12/11/2026).** Mục chỉ có khi dịch vụ của dòng có đi kèm Đang dùng ở DH03. Khung liệt kê các đi kèm Đang dùng chưa có trên dòng (tên, nhãn Giường phụ, đơn vị tính, giá tham chiếu theo ngày của dòng) và các ngày khác có cùng dịch vụ chính (mặc định chỉ dòng đang mở; ví dụ chọn cả 3 đêm của cùng khách sạn). Người dùng tích đi kèm, bấm Thêm. Đi kèm hiện thụt lề ngay dưới dòng dịch vụ chính, nhãn Đi kèm, có ô Số lượng tại chỗ: giường phụ mặc định Theo số giường phụ (lưới hiện số giường phụ của yêu cầu; khi tính giá lấy số giường phụ của điều kiện tính); đi kèm khác mặc định theo đơn vị tính như dòng thường (Theo số khách hoặc Cố định · 1), đổi được (R07). Menu ⋯ của đi kèm có Bỏ đi kèm. Kéo, chuyển, xóa dòng dịch vụ chính thì đi kèm đi theo. Hành trình chưa lưu.

   > Hình chưa cập nhật (12/11/2026): W17, W18 chưa có mục Thêm dịch vụ đi kèm, khung chọn đi kèm và dòng đi kèm thụt lề.

*Kết quả:* hành trình có đủ dịch vụ; không phải mở từng ngày để thêm dịch vụ lặp. Dịch vụ đi kèm (giường phụ, đồ uống trọn gói, đưa đón của khách sạn…) chỉ thêm qua dòng của dịch vụ chính.

**L3.5 Tạo hành trình bằng AI.** *Điều kiện:* như L3.1.

1. **W19 · Nút Tạo bằng AI ở thẻ Bằng AI → bảng trượt.** Bảng trượt điền sẵn phần “Từ yêu cầu” (mong muốn, thời gian, khách, hạng phòng, ngôn ngữ, ngân sách) và cho nhập thêm: điểm đến phải có, nhịp độ, điểm vào – ra, ưu tiên, ghi chú. Ô **Số phương án** là ba thẻ chọn một (1, 2, 3 phương án), mặc định 1; mỗi thẻ ghi cách đi tiếp (1: đưa thẳng lên lưới; 2–3: so sánh rồi chọn) và hướng được thêm (Bám sát tiêu chí, + Khác tuyến, + Tiết kiệm hơn; R09) (bổ sung 25/11/2026). Nút chính đổi nhãn theo số đã chọn: “Tạo đề xuất” khi 1, “Tạo n phương án” khi 2–3. Dải xanh ghi rõ đề xuất không xác nhận giá, chỗ.

   ![W19 · Tiêu chí tạo hành trình bằng AI](wireframes/W19.png)

2. **W52 · Nút Tạo đề xuất hoặc Tạo n phương án → bảng trượt chuyển sang màn Đang tạo (bổ sung 25/11/2026).** Hệ thống đưa mỗi phương án thành một lời gọi gateway AI qua hàng đợi theo R09 (A1, Q5). Màn hiện: tiêu đề “Đang tạo n phương án” kèm đồng hồ thời gian đã chờ; một dòng cho mỗi phương án với hướng của phương án (R09), thanh tiến độ và trạng thái **Đang chờ** (chưa tới lượt ở hàng đợi), **Đang tạo**, **Xong** (ghi số ngày, số dịch vụ, thời gian tạo) hoặc **Lỗi** (ghi lý do ngắn); phần “Tiêu chí đã gửi” tóm tắt tiêu chí. Hành trình trên lưới không đổi trong lúc tạo. Bảng trượt không đóng khi bấm ra ngoài; nút ✕ và nút **Dừng tạo** ở chân cùng một tác dụng (E3.16). Chân trang ghi số phương án còn đang tạo.

   ![W52 · Đang tạo phương án AI](wireframes/W52.png)

   - **1 phương án:** xong thì bảng trượt đóng và đề xuất hiện trên lưới (bước 4); lỗi hoặc quá thời gian thì hiện W21 (E3.1).
   - **2–3 phương án:** khi mọi phương án đã Xong hoặc Lỗi, bảng trượt tự chuyển sang W53 (bước 3). Mọi phương án đều lỗi thì hiện W21 (E3.1).

3. **W53 · Bảng trượt So sánh phương án (2–3 phương án; bổ sung 25/11/2026).** Bảng trượt rộng, mỗi phương án một thẻ đặt cạnh nhau: tên AI đặt, nhãn hướng (Bám sát tiêu chí, Khác tuyến, Tiết kiệm hơn; R09), số ngày và số dịch vụ, số dịch vụ khớp danh mục NCC và số chưa gán NCC (hệ thống đếm, như dải W20), nhịp độ và chặng đi xe dài nhất, điểm vào – ra, tối đa 3 điểm nhấn (AI tóm tắt) và tiêu đề từng ngày. Thẻ phương án 1 được chọn sẵn; bấm thẻ khác để chọn. Phương án lỗi là thẻ xám “Không tạo được · <lý do>” kèm nút Thử lại phương án này (E3.15). Chân bảng trượt: Tạo lại với tiêu chí khác (về W19, giữ tiêu chí và số phương án), Hủy, và nút chính **Đưa phương án n lên lưới**. Bấm nút chính thì bảng trượt đóng, phương án đã chọn hiện trên lưới như bước 4; các phương án còn lại bị bỏ, không giữ để quay lại so sánh. Hủy đóng bảng trượt, hành trình không đổi; thông báo ngắn “Đã bỏ n phương án AI” có Hoàn tác (mở lại W53 với đúng các phương án đó) trong lúc thông báo còn hiện.

   ![W53 · So sánh phương án AI](wireframes/W53.png)

4. **W20 · Đề xuất trên lưới.** Hệ thống hiện đề xuất ngay trên lưới, chưa lưu: dải tím “Đề xuất AI · 10 ngày, 24 dịch vụ: 22 khớp danh mục NCC, 2 chưa gán NCC”; đề xuất chọn từ W53 thì dải ghi thêm “Phương án 2/3 · Khác tuyến”. Dịch vụ khớp được gán sẵn NCC và cách tính số lượng; dịch vụ chưa khớp có nhãn Chưa gán NCC và ô Chọn dịch vụ. Người dùng sửa trực tiếp, sửa bằng khung chat (L3.10), hoặc Bỏ đề xuất (về hành trình trước đó), hoặc Tạo lại với tiêu chí khác (mở lại W19, giữ tiêu chí và số phương án).

   ![W20 · Đề xuất AI chờ xem](wireframes/W20.png)

5. **W24 · Nút Lưu hành trình ở chân trang.** Hành trình được lưu kể cả khi còn dịch vụ chưa gán NCC; tab Hành trình đếm các dòng đó; Tính giá khóa đến khi xử lý xong (R10).

*Kết quả:* hành trình đề xuất thành hành trình của yêu cầu; nguồn ghi “Bằng AI”. Giá chỉ tính ở KD06.3 từ bảng giá NCC.

**L3.6 Tạo lại hành trình.** *Điều kiện:* đã có hành trình đã lưu.

1. **W22 · Menu Tạo lại hành trình ▾ → Từ Tour mẫu, Thủ công hoặc Bằng AI.** Không có hộp thoại xác nhận vì hành trình chưa đổi cho tới khi lưu (U2). Hệ thống mở ngay cách tạo đã chọn; thông báo ngắn nêu số ngày, số dịch vụ sẽ bị thay khi lưu, gợi ý dùng Ghép ngày với Thay ngày nếu chỉ đổi vài ngày, kèm Hoàn tác.

   ![W22 · Thay hành trình đã có](wireframes/W22.png)

   > Hình chưa cập nhật: còn hộp thoại xác nhận “Thay hành trình hiện tại?”; nay làm ngay kèm Hoàn tác (U2).

2. **W14, W48, W19 · Bảng trượt hoặc lưới của cách tạo đã chọn.** Luồng tiếp tục như L3.1, L3.3, L3.5. Hành trình mới chỉ thay hành trình cũ khi người dùng bấm Lưu; Hoàn tác hoặc Hủy thay đổi trả lại hành trình cũ. Khi lưu, hành trình cũ được giữ trong lịch sử (R07); phiên bản báo giá đã lưu không đổi.

*Kết quả:* hành trình mới; R11 đánh dấu khác báo giá mới nhất nếu đã có phiên bản.

**L3.7 Lưu hành trình.** *Điều kiện:* có thay đổi chưa lưu.

1. **W23 · Nút Lưu hành trình ở chân trang.** Hệ thống lưu toàn bộ ngày và dịch vụ trong một lần (R11). Thông báo “Đã lưu hành trình 14 ngày, 62 dịch vụ”. Nếu yêu cầu đã có phiên bản báo giá, dải xanh “Hành trình đã sửa sau báo giá v2: đổi 2 dịch vụ ở Ngày 5, 6” hiện ở Hành trình và Báo giá; dòng đổi có nhãn Đã đổi. Chân trang chỉ còn nút chính Tính giá →.

   ![W23 · Sau khi lưu hành trình](wireframes/W23.png)

2. **W27 · Nút Tính giá → ở chân trang (hoặc Lưu và tính giá trước khi lưu).** Hệ thống lưu rồi mở tab Báo giá với bảng trượt Tính giá (L4.1).

*Kết quả:* hành trình hiện hành đã lưu; phiên bản báo giá cũ giữ nguyên.

**L3.8 Xử lý dịch vụ cần xử lý.** *Điều kiện:* số trên tab Hành trình lớn hơn 0.

1. **W24 · Dải vàng đầu lưới và dòng đỏ.** Dải vàng nêu số việc cần xử lý; ngày có việc tô đỏ ở cột trái; dòng Ngừng dùng hoặc chưa gán NCC tô đỏ, ghi lý do (ví dụ “Ánh Dương Transport Ngừng dùng từ 05/11/2026”) và nút Đổi dịch vụ. Tính giá → khóa, ghi “Còn 1 dịch vụ cần xử lý”.

   ![W24 · Dịch vụ cần xử lý trước khi tính giá](wireframes/W24.png)

   > Hình chưa cập nhật: còn chữ “ngừng sử dụng”; nay là Ngừng dùng (K6).

2. **W18 · Nút Đổi dịch vụ trên dòng đỏ → bảng trượt.** Bảng trượt danh mục NCC lọc sẵn theo loại và nơi của dịch vụ cũ; người dùng chọn dịch vụ thay thế và bấm Đổi; hệ thống thay tại chỗ, giữ số lượng và ghi chú. Dòng có dịch vụ đi kèm (bổ sung 12/11/2026): đi kèm của dịch vụ cũ bị bỏ cùng lúc vì thuộc dịch vụ cũ; thông báo ngắn ghi “Đã bỏ n dịch vụ đi kèm của <dịch vụ cũ>”, có Hoàn tác; người dùng thêm đi kèm của dịch vụ mới (nếu có) bằng bước 4 của L3.4. Ngày chưa có nội dung thì nhập nội dung. Lưu; số trên tab về 0 và Tính giá mở.

*Kết quả:* mọi dịch vụ của hành trình đều tính giá được.

**L3.9 Nội dung tiếng Anh cho proposal.** *Điều kiện:* có hành trình; có quyền sửa (1.4).

1. **W25 · Nút chọn Tiếng Việt | English trong ô ngày.** Người dùng chuyển sang English. Cột trái ghi tình trạng EN của từng ngày (EN, EN nháp, chưa EN). Người dùng nhập tiêu đề và nội dung tiếng Anh, hoặc bấm Dịch nháp từ tiếng Việt: hệ thống điền bản dịch có nhãn “Dịch nháp · cần kiểm tra” (R12). Đánh dấu đã kiểm tra bỏ nhãn. Lưu. Dòng công cụ ở English (“Nội dung tiếng Anh: 4/10 ngày đã có…”) có nút **Dịch các ngày còn thiếu** khi có ngày chưa có tiếng Anh (bổ sung 23/11/2026, ticket 106): một lần bấm dịch nháp mọi ngày đó cùng lúc, như Dịch nháp từng ngày (chưa lưu). Ngày chưa có tiếng Anh mà người dùng không dịch thì hệ thống tự dịch nháp sau (R12 “Dịch tự động”).

   ![W25 · Nội dung tiếng Anh của ngày](wireframes/W25.png)

*Kết quả:* proposal tiếng Anh dùng được nội dung này; hành trình không bị coi là khác báo giá.

**L3.10 Sửa hành trình bằng AI qua khung chat (bổ sung 25/11/2026).** *Điều kiện:* có quyền sửa (1.4); Đang xử lý, không ở chế độ điều chỉnh (R27); gateway AI có cấu hình (R25); lưới đang có hành trình: đề xuất AI chưa lưu (W20), hành trình đã lưu, hoặc hành trình đang sửa chưa lưu.

1. **W54 · Thanh Sửa bằng AI ở cuối tab Hành trình, ngay trên chân trang.** Khi thu gọn, thanh là một dòng “✨ Sửa bằng AI · nhập yêu cầu sửa hành trình”. Bấm vào thì khung mở rộng lên trên (khoảng một phần ba chiều cao vùng làm việc), lưới ngày và dịch vụ thu lại phía trên và vẫn cuộn, sửa được; Thu gọn ▾ đưa khung về một dòng, lịch sử vẫn giữ. Khung có: dòng tiêu đề nhắc “Áp ngay lên lưới, chưa lưu · lịch sử trò chuyện chỉ giữ tới khi lưu hoặc rời hồ sơ · không xác nhận giá, chỗ”; vùng tin nhắn; một hàng gợi ý nhanh (bấm thì điền vào ô nhập, không gửi ngay); ô nhập và nút Gửi (Enter gửi, Shift+Enter xuống dòng; 5.2). Khung có ở cả Tiếng Việt và English của lưới, nhưng AI chỉ sửa phần tiếng Việt, hoạt động trong ngày và dòng dịch vụ (R09).

   ![W54 · Sửa hành trình bằng AI qua khung chat](wireframes/W54.png)

2. **W54 · Nút Gửi.** Tin của người dùng hiện bên phải; bên trái hiện “AI đang sửa…” kèm nút Dừng. Trong lúc chờ (tối đa 60 giây, R25), ô nhập khóa và lưới chỉ xem để thay đổi của AI áp đúng hành trình đã gửi. Hệ thống gửi theo R09: hành trình đang trên lưới (kể cả phần chưa lưu), tin nhắn và các lượt trước trong phiên. Có kết quả thì hệ thống kiểm tra và áp ngay lên lưới, chưa lưu (R09). Ngày, dòng thêm mới có nhãn Mới; ngày, dòng được sửa có nhãn tím Sửa bằng AI; cột trái đánh dấu các ngày đổi; dòng bị bỏ biến mất khỏi lưới và được liệt kê trong tin trả lời. Tin trả lời ghi “AI · đã áp n thay đổi” và tóm tắt theo ngày (sửa tiêu đề, nội dung; thêm, bỏ, đổi dịch vụ; thêm, xóa, chuyển ngày; dòng chưa gán NCC cần chọn), kèm nút **Hoàn tác lượt này** và **Xem Ngày n** (mở ngày đổi đầu tiên). Chân trang thành “● Chưa lưu · sửa bằng AI: n ngày, m dịch vụ”; số trên tab Hành trình tính lại (R10). AI chỉ trả lời (hỏi lại cho rõ, giải thích, từ chối vì yêu cầu ngoài hành trình như hỏi giá) mà không đổi gì thì tin ghi “Không đổi hành trình” và không có Hoàn tác.
3. **W54 · Nút Hoàn tác lượt này.** Lưới trở về đúng trạng thái ngay trước lượt đó; lượt ghi “Đã hoàn tác”. Chỉ lượt AI gần nhất còn hiệu lực có nút này, và chỉ khi sau lượt đó chưa có sửa tay trên lưới. Hoàn tác xong thì lượt AI trước đó (nếu có) lại có nút Hoàn tác theo cùng điều kiện. Đã sửa tay sau lượt đó thì nút ẩn, thay bằng dòng “Đã sửa tay sau lượt này · dùng Hủy thay đổi để về bản đã lưu”.
4. **W23 · Lưu hành trình hoặc Lưu và tính giá ở chân trang.** Lưu như L3.7: kiểm tra R10, R11 như mọi lần lưu. Lưu xong, lịch sử trò chuyện bị xóa và khung thu gọn. Hủy thay đổi, Bỏ đề xuất (W20) hay rời hồ sơ cũng xóa lịch sử (E3.10). Nguồn hành trình giữ nguyên (Tour mẫu, Thủ công, Bằng AI); lịch sử yêu cầu ghi lần lưu như mọi lần lưu, kèm “có sửa bằng AI”.

*Kết quả:* người dùng sửa hành trình bằng lời, thấy ngay thay đổi trên lưới, hoàn tác được từng lượt; chỉ hành trình đã lưu được ghi, không lưu nội dung trò chuyện.

**Ngoại lệ**

- **E3.1 AI không trả được đề xuất (W21).** Lỗi, quá 60 giây, gateway AI tạm không dùng được (ví dụ hết hạn mức, ADR 0003) hoặc kết quả không hợp lệ, khi tạo 1 phương án hoặc khi mọi phương án đều lỗi (bổ sung 25/11/2026): hành trình không đổi; tiêu chí và số phương án giữ nguyên; Thử lại (gửi lại lời gọi với cùng tiêu chí, cùng số phương án) hoặc Chọn cách khác (về W13). Không có gì được ghi ngoài nhật ký lần gọi. Chỉ một phần phương án lỗi thì xem E3.15.

  ![W21 · AI không trả được đề xuất](wireframes/W21.png)

- **E3.2 Tour mẫu vừa tắt hoặc vừa sửa.** Khi sao chép hoặc ghép, hệ thống kiểm tra lại: mẫu đã Ngừng dùng thì báo “Tour mẫu vừa chuyển Ngừng dùng” và không sao chép (RSD KD01-KD02 E6.6); mẫu vừa sửa thì sao chép bản đã lưu mới nhất.
- **E3.3 Không có Tour mẫu phù hợp.** Bảng trượt W14 rỗng theo loại Tour: “Không có Tour mẫu Inbound đoàn Đang dùng · Bỏ lọc loại Tour”. Chưa có Tour mẫu nào: thẻ Từ Tour mẫu ghi “Chưa có Tour mẫu Đang dùng” và nút khóa.
- **E3.4 Dịch vụ, NCC Ngừng dùng** (trong mẫu, trong hành trình đã lưu, hoặc vừa bị tắt ở DH03): dòng có nhãn, được đếm trên tab; không tính giá được cho tới khi đổi (W24, R10).
- **E3.5 Số ngày khác thời gian đi.** Dải vàng (W15); không chặn lưu; Tính giá vẫn được nhưng bảng trượt nhắc lệch.
- **E3.6 Ghép vượt hoặc chồng.** Ghép Thay ngày với số ngày nguồn nhiều hơn số ngày còn lại phía sau: phần thừa được chèn sau ngày cuối, xem trước ghi rõ. Không chọn ngày nguồn nào: nút Ghép khóa.
- **E3.7 Xóa ngày.** Các ngày sau dồn lên, ngày tháng tính lại; có Hoàn tác; chưa lưu. Không xóa được ngày cuối cùng còn lại (hành trình phải có ít nhất 1 ngày).
- **E3.8 Lỗi lưu, xung đột.** Lỗi mạng: banner đỏ, giữ nguyên lưới. Hành trình vừa được lưu ở phiên khác: báo như W10 nhưng ở cấp hành trình, chỉ có Tải lại, không ghi đè (Q8).
- **E3.9 Tính giá khi còn việc cần xử lý.** Nút Lưu và tính giá, Tính giá → khóa kèm “Còn n … cần xử lý trước khi tính giá” (W15, W20, W24, W48).
- **E3.10 Rời khi chưa lưu hoặc đang có đề xuất AI, sửa bằng AI chưa lưu.** Hộp thoại W09. Bỏ thay đổi trả hành trình đã lưu gần nhất. Rời tab Hành trình hay rời hồ sơ thì lịch sử trò chuyện của khung Sửa bằng AI bị xóa, kể cả khi chọn Lưu và rời (L3.10; bổ sung 25/11/2026).
- **E3.11 Yêu cầu chưa chốt ngày.** Ngày ghi “Ngày n” không kèm ngày tháng; giá tham chiếu ở W18 tính theo ngày đầu tháng dự kiến và ghi “giá tham chiếu theo 01/04/2027 (tháng dự kiến)”.
- **E3.12 Dịch nháp lỗi.** Không dịch được: ô giữ nguyên, thông báo “Chưa dịch được, thử lại hoặc nhập tay”.
- **E3.13 Dịch vụ đi kèm Ngừng dùng hoặc không còn đi kèm (bổ sung 12/11/2026).** Đi kèm trên dòng vừa Ngừng dùng ở DH03 (dịch vụ chính vẫn Đang dùng): dòng đi kèm tô đỏ, ghi lý do, được đếm trên tab (R10); menu ⋯ có Bỏ đi kèm; Tính giá khóa tới khi bỏ hoặc Điều hành bật lại. Dịch vụ chính Ngừng dùng: xử lý như E3.4 cho dòng chính; Đổi dịch vụ bỏ cả đi kèm (L3.8). Thêm đi kèm trùng một đi kèm đã có trên dòng: đi kèm đó không có trong khung chọn.
- **E3.14 Giường phụ khi yêu cầu chưa có giường phụ (bổ sung 12/11/2026).** Thêm đi kèm Giường phụ khi số giường phụ của yêu cầu là 0: được; ô Số lượng ghi “0 · theo số giường phụ”, dòng có gợi ý “Nhập số giường phụ ở Thông tin yêu cầu hoặc điều kiện tính”; khi tính giá với 0 giường phụ thì không tạo khoản (R13). Người dùng có thể đổi sang Cố định nếu chỉ một đêm cần giường phụ.
- **E3.15 Một phần phương án lỗi (W53; bổ sung 25/11/2026).** Tạo 2–3 phương án mà có phương án lỗi hoặc quá 60 giây, còn ít nhất một phương án Xong: W53 vẫn mở với các phương án đã xong; phương án lỗi là thẻ xám ghi lý do (quá thời gian, AI tạm không dùng được, kết quả không hợp lệ) và nút Thử lại phương án này. Thử lại gửi lại đúng lời gọi đó (cùng tiêu chí, cùng hướng); thẻ hiện Đang tạo, các thẻ khác vẫn chọn và đưa lên lưới được. Đưa một phương án lên lưới trong lúc thử lại thì lời gọi đang thử bị hủy.
- **E3.16 Dừng tạo (W52; bổ sung 25/11/2026).** Bấm Dừng tạo hoặc ✕: các lời gọi chưa xong bị hủy, kết quả trả về sau đó bị bỏ. Đã có phương án Xong và đang tạo 2–3 phương án thì mở W53 với các phương án đó (kể cả chỉ còn một). Chưa có phương án nào Xong, hoặc đang tạo 1 phương án, thì về W19 với tiêu chí và số phương án giữ nguyên. Hành trình không đổi. Nhật ký lần gọi ghi lần gọi bị dừng.
- **E3.17 Rời trong lúc AI đang làm (bổ sung 25/11/2026).** Rời tab Hành trình hoặc rời hồ sơ khi đang tạo phương án (W52) hoặc khi khung Sửa bằng AI đang chờ AI: lời gọi bị hủy, không có gì được ghi vào yêu cầu; có thay đổi chưa lưu thì hỏi như E3.10.
- **E3.18 AI không sửa được (khung chat; bổ sung 25/11/2026).** Lỗi, quá 60 giây, gateway AI tạm không dùng được hoặc kết quả không đọc được: lưới không đổi; tin bên trái màu đỏ “Chưa sửa được: <lý do>” kèm Thử lại (gửi lại đúng tin đó với hành trình hiện tại trên lưới); tin của người dùng giữ trong lịch sử. Bấm Dừng khi đang chờ: lời gọi bị hủy, tin ghi “Đã dừng”, lưới không đổi. Hết hạn mức của gateway thì tin ghi thêm thời điểm dùng lại được nếu gateway báo.
- **E3.19 Thay đổi của AI không áp được một phần (bổ sung 25/11/2026).** Hệ thống kiểm tra từng thay đổi trước khi áp (R09). Thay đổi không hợp lệ bị bỏ, phần còn lại vẫn áp; tin trả lời ghi thêm “Bỏ qua n thay đổi không áp được” kèm lý do ngắn. Các trường hợp: trỏ tới ngày, dòng không còn trên lưới; các lệnh xóa ngày của lượt làm hành trình không còn ngày nào (bỏ cả nhóm lệnh xóa ngày của lượt đó, vì hành trình phải còn ít nhất 1 ngày, E3.7); quá 60 ngày; tiêu đề, nội dung, hoạt động quá giới hạn ở 5.2; số lượng Cố định nhỏ hơn 1 (5.2); đổi phần tiếng Anh, giá, dịch vụ đi kèm. Dịch vụ AI nêu mà không có trong danh mục thì không bị bỏ mà thành dòng Chưa gán NCC như L3.5. Không còn thay đổi nào áp được thì tin ghi “Không đổi hành trình”.
- **E3.20 AI đổi số ngày, đổi dịch vụ có đi kèm (bổ sung 25/11/2026).** AI được thêm, xóa, chuyển ngày theo yêu cầu: ngày tháng tính lại theo R07; lệch thời gian đi thì dải vàng như E3.5. Dòng bị AI đổi sang dịch vụ khác thì đi kèm của dịch vụ cũ bị bỏ như Đổi dịch vụ (L3.8), tin trả lời ghi “Đã bỏ n dịch vụ đi kèm của <dịch vụ cũ>”; dòng AI không đổi giữ nguyên đi kèm và số lượng. Dòng bị AI xóa thì đi kèm của nó đi theo.

### 3.4. Tính giá và phiên bản báo giá (KD06.3 · TN03.06, TN03.07)

**L4.1 Tính giá và lưu phiên bản.** *Điều kiện:* có quyền Tính giá (1.4); Đang xử lý; hành trình đã lưu, không còn việc cần xử lý.

1. **W26 · Tab Báo giá.** Tab liệt kê phiên bản mới nhất trước: điều kiện tính, giá bán kèm bình quân mỗi khách và nhãn trong hoặc vượt ngân sách (v2 vượt 0,5 %, v1 vượt 3,0 %), proposal (ngôn ngữ, hạn, số lần mở) và kết quả. Dải xanh báo hành trình đã sửa sau v2. Tính giá là nút chính.

   ![W26 · Danh sách phiên bản báo giá](wireframes/W26.png)

2. **W27 · Nút Tính giá ở đầu tab → bảng trượt.** Bảng trượt điền sẵn điều kiện từ phiên bản mới nhất (nhãn Từ v2), hoặc từ yêu cầu khi chưa có phiên bản: người lớn, trẻ em và tuổi, hạng phòng, phòng đơn, giường phụ (bổ sung 12/11/2026; ô cạnh phòng đơn, dưới hai ô ghi số phòng đôi và số phòng tự tính theo R04; giường phụ cho trẻ em, không quá số trẻ em, không đổi số phòng, sửa 18/11/2026, E4.12), ngày khởi hành (Từ yêu cầu), loại tiền báo giá, Markup chung (Mặc định theo loại Tour), Markup theo hạng mục dịch vụ: Lưu trú, Di chuyển, Vé máy bay, Hướng dẫn viên, Tham quan, Ăn uống… (để trống thì dùng Markup chung; ví dụ Vé máy bay 5 % mặc định của hạng mục, Hướng dẫn viên người dùng đặt 20 %) và tỷ giá của từng loại tiền có trong hành trình (tỷ giá có hiệu lực của ngày bấm Tính giá ở QT05; ngày chưa nhập thì lấy ngày gần nhất trước đó, ô ghi ngày lấy tỷ giá; tỷ giá chụp vào phiên bản, R14, Q10). Người dùng sửa nếu cần.

   ![W27 · Điều kiện tính giá](wireframes/W27.png)

3. **W28 · Nút Tính giá trong bảng trượt.** Hệ thống tính bằng bộ tính giá dùng chung theo R13, R14 (Q11): chọn hợp đồng áp dụng cho ngày sử dụng của từng dịch vụ, mùa và loại ngày, dòng giá theo số khách, giá trẻ em theo nhóm tuổi của hợp đồng của từng dòng, phụ thu; quy đổi từng khoản qua VND; cộng giá vốn theo người lớn, trẻ em, phụ thu phòng đơn; áp Markup theo hạng mục của từng khoản, hạng mục để trống dùng Markup chung (R14), rồi làm tròn giá bán mỗi khách theo bội số của loại tiền. Bảng trượt hiện bốn ô (giá vốn 45.222,82 EUR, Markup chung 15 %, bình quân thực tế 14,3 %, giá bán 51.710 EUR, lãi gộp 6.487,18 EUR), dải so với ngân sách (bình quân 2.068,40 EUR/khách, thấp hơn ngân sách 2.100 EUR/khách 31,60 EUR, trong ngân sách; R26), bảng giá bán theo đối tượng, và bảng giá vốn từng khoản lọc được theo ngày hoặc Nhập tay; mỗi khoản ghi hợp đồng, mùa, loại ngày, số lượng, đơn giá gốc, quy đổi và Markup đang áp kèm hạng mục (ví dụ “5 % · Vé máy bay”, “15 % · Di chuyển (chung)”). Khoản của dịch vụ đi kèm (bổ sung 12/11/2026) nằm ngay dưới khoản của dịch vụ chính cùng ngày, thụt lề, nhãn Đi kèm, có hợp đồng, mùa, số lượng, đơn giá, Markup của riêng nó (R13, R14). Muốn đổi Markup thì bấm Sửa điều kiện về W27; không đặt Markup cho riêng một khoản. Người dùng có thể bấm Sửa điều kiện để đổi điều kiện tính trước khi lưu.

   ![W28 · Kết quả giá vốn, Markup, giá bán](wireframes/W28.png)

   > Hình chưa cập nhật: số liệu trên hình là số cũ, tính trước Q13', Q14 (2 phụ thu phòng đơn, phụ thu phòng đơn là phần vượt nửa giá phòng đôi, tổng 50.750 EUR); số đúng ở ví dụ R14 và `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md` (sửa 13/11/2026).

4. **W49 · Nút chọn Theo dịch vụ trên tiêu đề Bảng tính giá.** Cùng kết quả tính, bảng đổi sang xem theo dịch vụ: dịch vụ gom theo hạng mục (Lưu trú, Vé máy bay, Hướng dẫn viên, Di chuyển, Ăn uống, Tham quan, Khác); dòng hạng mục ghi số dịch vụ, tổng giá vốn, Markup, tổng giá bán; bấm ▸ mở các dịch vụ của hạng mục, Mở tất cả mở mọi hạng mục. Mỗi dịch vụ là một dòng gộp cả hành trình (ví dụ HDV tiếng Đức Ngày 1–14, 14 đoàn/ngày; Phòng Deluxe Mường Thanh Ngày 5–6, 13 phòng × 2 đêm) với NCC, ngày dùng, số lượng, giá vốn quy đổi, Markup, giá bán trước làm tròn; nhãn Nhập tay giữ nguyên. Dịch vụ đi kèm là dòng riêng trong hạng mục của loại dịch vụ của nó, ghi “kèm <dịch vụ chính>” (ví dụ Giường phụ kèm Phòng Deluxe, trong Lưu trú) (R14). Dòng tổng: 36 dịch vụ, giá vốn 45.222,82, giá bán 51.702,67 trước làm tròn, sau làm tròn theo đối tượng là 51.710 (R14). Bấm Theo ngày để về cách xem từng khoản theo ngày (W28). Cách xem được nhớ cho lần mở sau.

   ![W49 · Bảng tính giá theo dịch vụ](wireframes/W49.png)

5. **W30 · Nút Lưu phiên bản v3 trong bảng trượt.** Hệ thống lưu phiên bản theo R16 (bản chụp hành trình, điều kiện, từng khoản, tỷ giá, Markup, giá bán). Bảng trượt đóng; v3 lên đầu danh sách với nhãn Mới nhất, Chưa có kết quả, Chưa publish; phần đầu ghi “Báo giá mới nhất v3 · Chưa có kết quả”; số trên tab Báo giá thành 3; dải “hành trình đã sửa” biến mất.

   ![W30 · Sau khi lưu phiên bản mới](wireframes/W30.png)

*Kết quả:* phiên bản v3 sẵn sàng publish và ghi kết quả.

**L4.2 Sửa giá từ một phiên bản.** *Điều kiện:* phiên bản có kết quả bất kỳ; yêu cầu Đang xử lý.

1. **W38 → W27 · Nút Sửa giá ở chân bảng trượt phiên bản.** Bảng trượt Tính giá (W27) mở với điều kiện điền sẵn từ đúng phiên bản đó (nhãn Từ vN), dùng hành trình hiện hành. Các bước tiếp như L4.1 bước 3–5 (tính, xem bảng tính giá, lưu phiên bản); phiên bản mới mang số tiếp theo.

*Kết quả:* phiên bản cũ giữ nguyên; giá mới thành phiên bản mới (nguồn: sửa giá tạo phiên bản mới).

**Ngoại lệ**

- **E4.1 Thiếu giá, thiếu hợp đồng (W29).** Khoản không có hợp đồng cho ngày sử dụng, hoặc ô giá mùa trống, ô giá trẻ em trống ở dòng căn cứ khách, phòng (R15): banner đỏ liệt kê từng khoản và lý do; dòng tô đỏ có ô nhập đơn giá, loại tiền và ghi chú nguồn giá; có lựa chọn áp cùng giá cho các đêm hoặc ngày khác của cùng dịch vụ. Giá vốn, giá bán hiện “—”; Lưu phiên bản khóa với lý do “Còn n khoản thiếu giá”. Nhập xong, khoản có nhãn Nhập tay (W28). Không dùng giá 0 hay hợp đồng, mùa khác (R15).

  ![W29 · Thiếu giá, tỷ giá hoặc hợp đồng](wireframes/W29.png)

- **E4.2 Tỷ giá ngày tính chưa nhập, hoặc chưa có tỷ giá.** Ngày tính chưa có dòng tỷ giá nhưng có ngày trước đó: dùng **tỷ giá có hiệu lực** (số của ngày gần nhất ≤ ngày tính có ô loại tiền đó, RSD QT05 R13), không chặn; nguồn ghi ngày lấy tỷ giá, ví dụ “Bảng tỷ giá ngày 10/11/2026” khi tính ngày 11/11/2026. Chỉ khi loại tiền không có ngày nào ≤ ngày tính có tỷ giá thì là **chưa có tỷ giá**: ô tỷ giá trống, viền đỏ “Chưa có tỷ giá USD · nhập tỷ giá”, bắt buộc nhập tay (nguồn ghi Sửa tay); không dùng tỷ giá mặc định.
- **E4.3 Thiếu Markup mặc định.** Loại Tour chưa khai Markup ở QT05: ô Markup trống, bắt buộc nhập.
- **E4.4 Hành trình còn việc cần xử lý.** Tính giá khóa, ghi lý do, kèm liên kết Mở Hành trình (E3.9).
- **E4.5 Hành trình bị sửa ở phiên khác trong lúc đang tính.** Khi Lưu phiên bản, nếu hành trình đã lưu khác bản dùng để tính: “Hành trình vừa thay đổi lúc …, tính lại để lưu”; nút Tính lại giữ điều kiện.
- **E4.6 Lưu lặp.** Bấm Lưu phiên bản hai lần hoặc hai cửa sổ cùng lưu: mỗi lần tính có mã; máy chủ chỉ tạo một phiên bản cho một mã; số phiên bản cấp tuần tự trên máy chủ.
- **E4.7 Bảng giá, hợp đồng, tỷ giá đổi sau khi lưu.** Phiên bản giữ nguyên (R16); lần tính sau dùng dữ liệu mới.
- **E4.8 Yêu cầu chưa chốt ngày.** Ngày khởi hành trong bảng trượt trống, bắt buộc nhập; phiên bản ghi “giá theo khởi hành giả định dd/mm/yyyy”; yêu cầu vẫn ghi tháng dự kiến.
- **E4.9 Số ngày lệch.** Bảng trượt nhắc “Hành trình 8 ngày, yêu cầu 10 ngày”; vẫn tính được.
- **E4.10 Lỗi tính.** Máy chủ lỗi: bảng trượt giữ điều kiện, banner đỏ và Thử lại.
- **E4.11 Không có phiên bản.** Tab Báo giá chưa có phiên bản: “Chưa có báo giá. Tính giá từ hành trình đã lưu.” và nút Tính giá; chưa có hành trình thì nút khóa kèm “Lưu hành trình trước”.
- **E4.12 Giường phụ và dịch vụ đi kèm khi tính giá (bổ sung 12/11/2026; sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em).** (1) Điều kiện tính có giường phụ lớn hơn số trẻ em: lỗi cạnh ô “Giường phụ không quá số trẻ em”, chặn tính giá và lưu phiên bản tới khi sửa (R04, 5.2). Giường phụ không quá số trẻ em nhưng lớn hơn số phòng đôi: cảnh báo vàng cạnh ô “Số giường phụ nhiều hơn số phòng đôi, cần NCC xác nhận kê được”, vẫn tính giá và lưu được (R04, người dùng chốt 12/11/2026). Đổi số giường phụ không đổi số phòng đôi, số phòng (R04). (2) Điều kiện có n giường phụ mà một đêm lưu trú (dòng dịch vụ lưu trú tính theo số phòng) chưa có đi kèm Giường phụ: khoản thiếu “Giường phụ · chưa thêm vào <dịch vụ>, <ngày>” trong banner W29; người dùng về Hành trình thêm đi kèm Giường phụ (L3.4 bước 4), hoặc nhập tay đơn giá kèm ghi chú nguồn khi NCC chưa khai giường phụ ở DH03 (R15). (3) Ô giá mùa của đi kèm trống, đi kèm không có dòng giá trong hợp đồng áp dụng: khoản thiếu như mọi khoản (W29, R15). Còn khoản thiếu thì Lưu phiên bản khóa.

### 3.5. Proposal cho khách (KD06.3 · TN03.07)

**L5.1 Publish proposal.** *Điều kiện:* có quyền Publish (1.4); yêu cầu Đang xử lý, hoặc ở chế độ điều chỉnh với phiên bản điều chỉnh của Booking (R27, L6.5); phiên bản chưa có link đang mở cùng ngôn ngữ.

1. **W31 · Bấm dòng v3 trên tab Báo giá → bảng trượt phiên bản.** Bảng trượt hiện giá bán theo đối tượng, tóm tắt giá vốn, Markup, tỷ giá; mục Proposal cho khách ghi Chưa publish và nút chính Publish proposal; mục Kết quả báo giá với bốn lựa chọn. Chân bảng trượt: Sửa hành trình, Sửa giá. Nút chính của bảng trượt đổi theo kết quả (L6.1).

   ![W31 · Chi tiết phiên bản báo giá](wireframes/W31.png)

2. **W32 · Nút Publish proposal trong bảng trượt → hộp thoại.** Hộp thoại điền sẵn: ngôn ngữ (English khi ngôn ngữ phục vụ khác Tiếng Việt), hạn hiệu lực (hôm nay + 30 ngày), dịch vụ bao gồm và không bao gồm tổng hợp từ dịch vụ của phiên bản và mục mặc định của proposal (R18). Không có ô chọn mẫu: proposal luôn theo bố cục W33 và ngôn ngữ đã chọn (Q22). Người dùng thêm, bỏ mục; bấm Xem trước để mở proposal ở chế độ xem trước (không tạo link).

   ![W32 · Publish proposal](wireframes/W32.png)

   > Hình chưa cập nhật: còn ô chỉ đọc “Mẫu proposal · Mẫu proposal công ty · English”; nay bỏ ô này (Q22).

3. **W34 · Nút Publish và sao chép link.** Thiếu nội dung tiếng Anh thì hộp thoại chuyển sang W35 (E5.1). Đủ thì hệ thống tạo proposal và link riêng của phiên bản theo R18, sao chép link vào bộ nhớ tạm. Bảng trượt hiện link, nút Sao chép link, Mở proposal, ngôn ngữ, thời điểm publish, hạn, số lần mở, Gia hạn, Thu hồi link và liên kết Publish bản tiếng Việt. Người dùng tự gửi link cho khách qua kênh mình dùng.

   ![W34 · Sau khi publish](wireframes/W34.png)

4. **W33 · Link proposal, khách mở trên trình duyệt.** Khách mở link, không cần đăng nhập. Trang proposal theo ngôn ngữ đã chọn: khách, tên hành trình, thời gian, số khách, lịch trình theo ngày, giá theo đối tượng và tổng, bao gồm, không bao gồm, hạn hiệu lực, người phụ trách; nút Download PDF tải tệp PDF dựng từ chính trang này (Q21). Bố cục proposal là bố cục của W33 (Q22). Mỗi lần mở được ghi (R18); W34 cập nhật số lần mở và lần mở gần nhất.

   ![W33 · Trang proposal của khách](wireframes/W33.png)

*Kết quả:* khách có báo giá; người dùng thấy khách đã mở mấy lần để chủ động liên hệ.

**L5.2 Gia hạn hoặc thu hồi link.** *Điều kiện:* có quyền Publish (1.4); link Đang mở hoặc Hết hạn.

1. **W34 · Ô ngày Gia hạn tại chỗ, nút Thu hồi link → hộp thoại xác nhận.** Gia hạn: người dùng chọn hạn mới (từ hôm nay), lưu ngay; cùng link. Thu hồi link: hộp thoại xác nhận “Khách mở link sẽ thấy báo giá không còn hiệu lực”; xác nhận thì link Đã thu hồi.
2. **W36 · Link đã thu hồi hoặc hết hạn, khách mở.** Trang không hiện giá và lịch trình, chỉ ghi cách liên hệ người phụ trách.

   ![W36 · Proposal đã thu hồi hoặc hết hạn](wireframes/W36.png)

*Kết quả:* người dùng kiểm soát được báo giá đang lưu hành.

**L5.3 Publish phiên bản mới khi khách đang giữ link cũ.** *Điều kiện:* phiên bản cũ có link Đang mở cùng ngôn ngữ.

1. **W37 · Link English của v2, khách mở sau khi v3 được publish.** Sau khi publish v3 bằng English, link English của v2 vẫn mở được nhưng có dải “A newer version of this proposal is available (v3) · View the latest proposal”. Ở KD06.3, cột Proposal của v1, v2 ghi “có bản mới hơn” (W30).

   ![W37 · Proposal đã có bản mới hơn](wireframes/W37.png)

*Kết quả:* khách không dùng nhầm giá cũ mà không biết.

**Ngoại lệ**

- **E5.1 Thiếu nội dung tiếng Anh (W35).** Publish English khi có ngày chưa có nội dung tiếng Anh, hoặc có tiêu đề tiếng Việt mà chưa có tiêu đề tiếng Anh: hộp thoại liệt kê các ngày đó với ô nhập và Dịch nháp tại chỗ, cùng nút **Dịch tất cả** ở dải báo thiếu (bổ sung 23/11/2026, ticket 106: dịch nháp một lần mọi ngày còn ô trống, ngày đã gõ giữ nguyên); Publish khóa đến khi đủ; Đổi sang Tiếng Việt để publish bản tiếng Việt. Nội dung nhập ở đây được lưu vào hành trình (R12). Bản dịch nháp chưa đánh dấu kiểm tra không chặn, chỉ ghi số lượng (W32).

  ![W35 · Chưa publish được tiếng Anh](wireframes/W35.png)

- **E5.2 Mục bao gồm, không bao gồm chưa có bản tiếng Anh.** Thẻ từ DH03 không có tên tiếng Anh ở QT05: thẻ viền đỏ trong W32, sửa tên tiếng Anh ngay trên thẻ (chỉ cho proposal này) hoặc bỏ thẻ.
- **E5.3 Hạn không hợp lệ.** Hạn trước hôm nay: lỗi cạnh ô, Publish khóa.
- **E5.4 Lỗi tạo proposal.** Không tạo được: hộp thoại giữ dữ liệu, banner đỏ, Thử lại; không có link nào được tạo. Bấm lặp chỉ tạo một link (mã publish).
- **E5.5 Sao chép link không được** (trình duyệt chặn bộ nhớ tạm): link hiện chọn sẵn để người dùng tự sao chép; thông báo “Chưa sao chép được, chọn link và nhấn Ctrl+C”.
- **E5.6 Publish lại cùng ngôn ngữ.** Phiên bản đã có link Đang mở cùng ngôn ngữ: chỉ có Sao chép link (không tạo link thứ hai). Link Đã thu hồi: Publish tạo link mới.
- **E5.7 Yêu cầu bị hủy.** Mọi link Đang mở chuyển Đã thu hồi (R21); khách thấy W36. Mở lại yêu cầu không tự mở lại link.
- **E5.8 Đã có Booking.** KD06 mở bình thường (chỉ xem): không publish mới. Ở chế độ điều chỉnh (R27): publish được proposal của phiên bản điều chỉnh của Booking (W51), không publish phiên bản khác (phiên bản của Booking, phiên bản ngoài chế độ điều chỉnh, phiên bản điều chỉnh lưu trước lần Chuyển sang Điều hành gần nhất). Link đã có của phiên bản của Booking giữ nguyên; người có quyền Gia hạn, Thu hồi, Sao chép link được như R18 (ở cả hai cách mở); khi phiên bản điều chỉnh có link Đang mở cùng ngôn ngữ thì link cũ hiện dải bản mới hơn (W37).
- **E5.9 Người không có quyền Publish** (mặc định Quản trị hệ thống). Chỉ thấy link, Sao chép link, Mở proposal; không thấy Gia hạn, Thu hồi, Publish.
- **E5.10 Mở proposal từ KD06.** Lượt mở của người dùng đã đăng nhập không được tính vào số lần mở của khách.

### 3.6. Kết quả báo giá và Booking (KD06.3 · TN03.08, TN04.01)

**L6.1 Ghi kết quả báo giá.** *Điều kiện:* có quyền Ghi kết quả (1.4); yêu cầu Đang xử lý (không ở chế độ điều chỉnh); phiên bản không gắn Booking Hiệu lực.

1. **W38 · Nút chọn kết quả tại chỗ trong bảng trượt phiên bản.** Khi khách phản hồi (có thể vài ngày sau khi gửi), người dùng mở KD06 (thẳng tab Báo giá), bấm phiên bản và chọn kết quả ở nút chọn Chưa có kết quả, Chốt, Cần điều chỉnh, Không chốt. Chưa có kết quả, Cần điều chỉnh, Không chốt lưu ngay (ô chọn tại chỗ); thông báo ngắn xác nhận. Chốt không lưu ngay mà mở hộp thoại tạo Booking (L6.2). Ghi chú phản hồi lưu cùng (nút Lưu ghi chú hiện khi đã sửa ghi chú). Theo kết quả, chân bảng trượt đổi nút chính: Cần điều chỉnh → Sửa hành trình (chính), Sửa giá; Không chốt → Sửa hành trình, Sửa giá (không có nút chính). Hủy yêu cầu luôn ở phần đầu (SYS03.12 → SYS03.14).

   ![W38 · Ghi kết quả Cần điều chỉnh](wireframes/W38.png)

2. **W23 · Nút Sửa hành trình hoặc Sửa giá ở chân bảng trượt.** Sửa hành trình mở tab Hành trình (L3.4, L3.7). Sửa giá mở W27 điền sẵn từ phiên bản này (L4.2).

*Kết quả:* kết quả của phiên bản cập nhật ở phần đầu (nếu là phiên bản mới nhất), KD05 và KD04.3.

**L6.2 Chốt là tạo Booking (quyết định rà soát 13/11/2026, Q-RS17).** *Điều kiện:* có quyền Ghi kết quả (1.4); yêu cầu Đang xử lý; không có Booking Hiệu lực; phiên bản không Đã thay thế.

1. **W40 · Nút chọn Chốt trong bảng trượt v3 → hộp thoại.** Khách đồng ý đặt Tour theo v3. Người dùng chọn Chốt ở nút chọn kết quả của v3. Hộp thoại xác nhận (CGD U2.01, U2.04: tạo Booking cấp mã, không hoàn tác) tiêu đề “Chốt v3 và tạo Booking?”, nêu những gì Booking sẽ kế thừa (khách, thời gian, số khách, giá trị của v3), hồ sơ Tour sẽ được tạo và Điều hành nhận thông báo, chính sách hoàn hủy sẽ chụp; ô Ghi chú xác nhận của khách. Hai nút: Chốt và tạo Booking, Quay lại (con trỏ ở Quay lại). Quay lại thì không ghi gì, nút chọn trở về kết quả cũ.

   ![W40 · Phiên bản Chốt sẵn sàng tạo Booking](wireframes/W40.png)

   > Hình chưa cập nhật (Q-RS17): hình còn nút chính Tạo Booking ở chân bảng trượt sau khi chọn Chốt; nay chọn Chốt mở hộp thoại xác nhận, không có nút Tạo Booking.

2. **KD08 W02 · Nút Chốt và tạo Booking trong hộp thoại → KD08.** Trong một giao dịch, hệ thống ghi Chốt cho v3 (người ghi, ghi chú), tạo Booking BK-2611-0158 Hiệu lực theo v3, chụp chính sách hoàn hủy, tạo hồ sơ Tour và thông báo Điều hành (R19; RSD KD08 L1.1, R03, R08); yêu cầu thành Đã có Booking, người phụ trách Booking là người phụ trách yêu cầu. KD08 của Booking mới mở ở tab Điều khoản và lịch thanh toán với lịch điền sẵn chưa lưu (RSD KD08 L2.1). Lỗi một bước thì không ghi gì (E6.13). Không có chế độ tạo mới của KD08, không có nút Tạo Booking (W41 bỏ).

3. **W42 · KD06 sau khi tạo Booking.** Mở lại KD06: phần đầu có Booking BK-2611-0158 và nút chính Mở Booking (bấm mở KD08 của Booking); Hủy yêu cầu khóa kèm lý do; dải xanh lá nói thay đổi chương trình bấm Điều chỉnh chương trình ở Booking; mọi tab chỉ xem; v3 ghi “Chốt · Booking BK-2611-0158”; không có Tính giá.

   ![W42 · Yêu cầu đã có Booking](wireframes/W42.png)

*Kết quả:* Booking Hiệu lực tạo từ đúng phiên bản ngay khi ghi Chốt (SYS03.13); không có lúc phiên bản Chốt mà chưa có Booking; thay đổi chương trình sau đó làm ở chế độ điều chỉnh mở từ KD08 (L6.5).

**L6.3 Đổi phiên bản Chốt.** (Bỏ theo Q-RS17, mã không dùng lại.) Phiên bản Chốt luôn gắn Booking Hiệu lực và không đổi kết quả được (E6.1); khi chưa có Booking thì không có phiên bản Chốt nào để đổi. Hình W39 không còn dùng.

**L6.4 Booking bị hủy, khách đặt lại.** *Điều kiện:* Kinh doanh hủy Booking Hiệu lực duy nhất ở KD08.

1. **W47 · KD06 sau khi Booking bị hủy ở KD08.** Yêu cầu tự chuyển Đã hủy, lý do “Booking đã hủy” (R02, R20, R21); link proposal đang mở bị thu hồi. Phần đầu: nhãn Đã hủy, nút Mở lại yêu cầu. Dải xám nêu Booking đã hủy, ngày, người hủy, lý do hủy Booking và cách đặt lại. Phiên bản của Booking (v3) giữ Chốt, kèm “Booking BK-2611-0149 · Đã hủy” (R20). Mọi tab chỉ xem.

   ![W47 · Yêu cầu tự hủy khi Booking bị hủy](wireframes/W47.png)

2. **W45 · Nút Mở lại yêu cầu ở phần đầu → hộp thoại.** Khách muốn đặt lại: người dùng mở lại kèm lý do (L7.2). Yêu cầu về Đang xử lý; mọi thao tác ghi mở lại cho người có quyền.
3. **W27, W40 · Tính giá ở đầu tab Báo giá, nút chọn Chốt.** Người dùng tính giá phiên bản mới theo nhu cầu mới (L4.1), rồi ghi Chốt cho phiên bản đó: Booking mới được tạo ngay (L6.2). Nếu khách đặt lại đúng phương án cũ, người dùng ghi Chốt lại cho chính v3 (vẫn Chốt, kèm Booking đã hủy): cùng hộp thoại L6.2, Booking mới theo v3. Ghi Chốt cho phiên bản khác không đổi kết quả của v3.

*Kết quả:* khách đặt lại mà không phải tạo yêu cầu mới; Booking đã hủy giữ nguyên ở KD08 để tra cứu.

**L6.5 Điều chỉnh chương trình sau Booking (chế độ điều chỉnh).** *Điều kiện:* yêu cầu Đã có Booking; người có quyền Điều chỉnh chương trình ở KD08 và quyền sửa KD06 (mặc định Kinh doanh) bấm Điều chỉnh chương trình ở KD08 (RSD KD08 R09).

1. **W50 · Nút Điều chỉnh chương trình ở KD08 → KD06 tab Hành trình.** KD06 mở ở chế độ điều chỉnh (R27). Phần đầu giữ nhãn Đã có Booking, có nút chính Về Booking BK-2611-0158; không có Hủy yêu cầu. Dải tím ghi Booking, phiên bản của Booking (v3) và cách làm. Lần đầu vào (Booking chưa có phiên bản điều chỉnh chưa chuyển), hành trình nạp từ bản chụp của phiên bản của Booking; đã có thì tiếp tục từ hành trình đang lưu, không hỏi (R27); người dùng sửa ngày, dịch vụ như L3.4 (ví dụ thêm Ca Huế trên sông Hương ở Ngày 5). Chân trang có một nút chính Lưu và tính giá.

   ![W50 · Chế độ điều chỉnh, sửa hành trình](wireframes/W50.png)

2. **W28 · Nút Lưu và tính giá ở chân trang.** Hệ thống lưu hành trình rồi tự tính giá (R13, R14) với điều kiện của phiên bản điều chỉnh mới nhất của Booking, chưa có thì của phiên bản của Booking (R27); loại tiền khóa theo loại tiền của Booking. Bảng trượt kết quả mở như W28; còn khoản thiếu giá thì như W29 (E4.1). Người dùng xem, có thể Sửa điều kiện (số khách, Markup, tỷ giá), rồi bấm Lưu phiên bản v4.
3. **W51 · Nút Lưu phiên bản trong bảng trượt.** v4 lên đầu danh sách: Mới nhất, Chưa có kết quả, nhãn “Điều chỉnh cho BK-2611-0158”, Chưa publish. Bảng trượt phiên bản không có nút chọn kết quả; ghi “Kết quả ghi khi Chuyển sang Điều hành ở Booking”. Mục Proposal cho khách có nút Publish proposal và ghi proposal sẽ ghi “Phương án điều chỉnh cho Booking BK-2611-0158” (R18). v3 vẫn Chốt, gắn Booking, giữ link English đang mở. Muốn gửi phương án cho khách: bấm Publish proposal, các bước như L5.1 bước 2–3 (hộp thoại W32, link riêng của v4, có hạn, thu hồi được); link English của v3 hiện dải bản mới hơn (W37). Kinh doanh tự gửi link và trao đổi với khách.

   ![W51 · Chế độ điều chỉnh, sau khi lưu phiên bản mới](wireframes/W51.png)

4. **W51 · Nút Về Booking BK-2611-0158 ở phần đầu → KD08.** Khách đồng ý thì người dùng bấm Chuyển sang Điều hành ở KD08 (RSD KD08 R09): hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking (v4), Booking lên v4, v3 thành Đã thay thế (R17). Mở lại KD06 thì v4 ghi “Booking BK-2611-0158”, v3 ghi Đã thay thế. Chỉ lúc này Booking mới nhận thời gian, số khách, giá trị của v4; trước đó, kể cả khi đã sửa số khách, ngày đi ở Thông tin yêu cầu trong chế độ điều chỉnh, Booking vẫn theo v3 và KD05, KD07, KD08 hiện số của Booking (R27; Q-RS18).

*Kết quả:* thay đổi chương trình đi qua đúng một phiên bản báo giá mới; yêu cầu luôn chỉ có một phiên bản Chốt; KD06 không tự đổi Booking.

**Ngoại lệ**

- **E6.1 Đổi kết quả của phiên bản đã gắn Booking Hiệu lực.** Nút chọn kết quả khóa, ghi “Phiên bản đã có Booking BK-…”.
- **E6.2 Ghi kết quả khi yêu cầu Đã hủy hoặc Đã có Booking, kể cả ở chế độ điều chỉnh.** Nút chọn không hiện; kết quả chỉ đọc (W42, W51). Đã thay thế không bao giờ có trên nút chọn.
- **E6.3 Lỗi lưu kết quả.** Nút chọn trả về giá trị cũ, thông báo đỏ “Chưa lưu được kết quả · Thử lại”.
- **E6.4 Ghi Chốt khi vừa có Booking Hiệu lực ở phiên khác.** Máy chủ kiểm tra lại trong giao dịch ghi Chốt (R19): từ chối, không ghi gì, báo “Yêu cầu đã có Booking BK-…”, có liên kết mở Booking đó; KD06 tải lại ở W42.
- **E6.5 Phiên bản vừa đổi ở phiên khác.** Bấm Chốt và tạo Booking khi phiên bản đã đổi kết quả ở phiên khác sau lúc mở bảng trượt: máy chủ từ chối theo phiên bản bản ghi (Q8), không có Booking; hộp thoại đóng, bảng trượt chỉ có Tải lại.
- **E6.6 Quay lại ở hộp thoại Chốt.** Không ghi gì; không có Booking; yêu cầu vẫn Đang xử lý, v3 giữ kết quả cũ.
- **E6.7 Chốt một phiên bản cũ.** Được phép (khách chọn lại phương án cũ): ghi Chốt cho phiên bản đó tạo Booking từ phiên bản đó; proposal cũ vẫn dùng được nếu chưa hết hạn. Booking tạo từ phiên bản cũ thì các phiên bản số lớn hơn đã có (ví dụ v3 Cần điều chỉnh khi Booking theo v2) không phải phiên bản điều chỉnh của Booking: Chuyển sang Điều hành ở KD08 không bao giờ ghi Chốt cho chúng (RSD KD08 R09, E1.14).
- **E6.8 Kết quả Không chốt.** Không tự hủy yêu cầu (không coi một lần không chốt là hủy, TN02.05); người dùng tự quyết hủy ở phần đầu.
- **E6.9 Mở KD06 bình thường khi có Booking Hiệu lực.** Hồ sơ chỉ xem (W42); không có lối vào chế độ điều chỉnh ở KD06, chỉ có Mở Booking.
- **E6.10 Booking không còn điều chỉnh được** (vừa bị hủy hoặc hồ sơ Tour vừa Đã kết thúc ở phiên khác): lưu ở chế độ điều chỉnh bị từ chối, banner đỏ nêu lý do; Tải lại mở hồ sơ ở trạng thái hiện tại (E2.5).
- **E6.11 Lưu nhiều phiên bản ở chế độ điều chỉnh.** Mỗi lần lưu là một phiên bản mới, Chưa có kết quả; Chuyển sang Điều hành chỉ dùng phiên bản điều chỉnh mới nhất của Booking, các phiên bản điều chỉnh khác giữ Chưa có kết quả (link proposal của chúng, nếu có, giữ nguyên theo R18).
- **E6.12 Rời chế độ điều chỉnh không chuyển.** Phiên bản đã lưu và link proposal đã publish giữ nguyên, Booking không đổi; lần sau mở Điều chỉnh chương trình, hành trình tiếp tục từ bản đang lưu, không hỏi (R27). Nút Chuyển sang Điều hành ở KD08 bấm được khi Booking có phiên bản điều chỉnh chưa chuyển; không có thì khóa kèm lý do (RSD KD08 R09).
- **E6.13 Lỗi khi ghi Chốt** (ví dụ tạo hồ sơ Tour lỗi, Q5). Ghi Chốt, Booking, hồ sơ Tour, thông báo ghi trong một giao dịch: lỗi một bước thì không ghi gì; phiên bản giữ kết quả cũ, yêu cầu vẫn Đang xử lý; hộp thoại giữ ghi chú, banner đỏ, bấm Chốt và tạo Booking lại được; mã chống lặp nên bấm lặp chỉ tạo một Booking (R19, R24; RSD KD08 E1.2, AC15) (Q-RS17).

### 3.7. Hủy, mở lại, chuyển người phụ trách (KD06 · TN02.05)

**L7.1 Hủy yêu cầu.** *Điều kiện:* có quyền Hủy yêu cầu (1.4); yêu cầu Đang xử lý; không có Booking Hiệu lực.

1. **W43 · Nút Hủy yêu cầu ở phần đầu → hộp thoại.** Người dùng bấm Hủy yêu cầu từ tab nào cũng được, kể cả sau khi ghi kết quả. Hộp thoại: lý do hủy (danh mục QT05, bắt buộc), ghi chú (bắt buộc khi lý do là Khác); câu nói rõ dữ liệu được giữ và mở lại được; số link proposal đang mở sẽ bị thu hồi.

   ![W43 · Hủy yêu cầu](wireframes/W43.png)

2. **W44 · Nút Hủy yêu cầu trong hộp thoại.** Hệ thống ghi Đã hủy, lý do, người, thời điểm; thu hồi mọi link đang mở (R21). Phần đầu: nhãn Đã hủy, nút duy nhất Mở lại yêu cầu; dải xám; mọi tab chỉ xem.

   ![W44 · Yêu cầu đã hủy](wireframes/W44.png)

*Kết quả:* yêu cầu ở chip Đã hủy của KD05 kèm lý do; QT08 đếm lý do hủy.

**L7.2 Mở lại yêu cầu.** *Điều kiện:* yêu cầu Đã hủy (do người dùng hủy hoặc tự hủy khi Booking bị hủy); có quyền Mở lại yêu cầu (1.4; mặc định Kinh doanh, Quản trị).

1. **W45 · Nút Mở lại yêu cầu ở phần đầu → hộp thoại.** Người dùng nhập lý do (bắt buộc, ví dụ “Khách đặt lại”). Hộp thoại nói rõ dữ liệu giữ nguyên, link đã thu hồi không tự mở lại, và sau khi mở lại thì báo giá, ghi Chốt để tạo Booking mới được. Hộp thoại có ô Người phụ trách (bắt buộc; điền sẵn người hiện tại nếu còn hoạt động, đổi được; R22).

   ![W45 · Mở lại yêu cầu](wireframes/W45.png)

   > Hình chưa cập nhật: hộp thoại chưa có ô Người phụ trách (trước đây chỉ Quản trị có ô này; nay mọi người có quyền Mở lại, R22).

2. **W07 · Nút Mở lại yêu cầu trong hộp thoại.** Yêu cầu về Đang xử lý (R22); phần đầu có lại Hủy yêu cầu; thông báo “Đã mở lại YC-…”. Lịch sử giữ cả lần hủy và lần mở lại.

*Kết quả:* tiếp tục xử lý với hành trình và phiên bản cũ; publish lại khi cần; ghi Chốt cho một phiên bản để tạo Booking mới (L6.4, R19).

**L7.3 Chuyển người phụ trách một yêu cầu.** *Điều kiện:* yêu cầu Đang xử lý; có quyền Chuyển người phụ trách (1.4; mặc định Kinh doanh, Quản trị).

1. **W46 · Menu ⋯ ở phần đầu → Chuyển người phụ trách → hộp thoại.** Hộp thoại: người nhận (người dùng Kinh doanh đang hoạt động, khác người hiện tại, kèm số yêu cầu đang xử lý), ghi chú bàn giao. Nói rõ người phụ trách khách hàng không đổi.

   ![W46 · Chuyển người phụ trách yêu cầu](wireframes/W46.png)

   > Hình chưa cập nhật: câu “Người nhận sẽ được sửa, lập báo giá và hủy yêu cầu này. Bạn vẫn xem được” không còn đúng; quyền sửa không đổi theo người phụ trách (Q1).

2. **W46 · Nút Chuyển phụ trách trong hộp thoại.** Yêu cầu đổi người phụ trách (R23); phần đầu cập nhật Phụ trách; người nhận nhận thông báo. Quyền của người chuyển và người nhận không đổi. Thông báo ngắn xác nhận kèm Hoàn tác 10 giây (CGD U2.02, U2.06; người dùng trả lời 13/11/2026, Q-RS24): Hoàn tác trả yêu cầu về người phụ trách trước đó và gỡ thông báo vừa tạo (RSD CH02 R05), nếu yêu cầu chưa bị đổi tiếp (R23).

*Kết quả:* như chuyển một dòng ở KD05 (RSD KD05 L4.1).

**Ngoại lệ**

- **E7.1 Có Booking Hiệu lực.** Hủy yêu cầu khóa kèm lý do “đang có Booking hiệu lực” (W42); muốn hủy thì hủy Booking ở KD08 trước.
- **E7.2 Thiếu lý do.** Nút Hủy yêu cầu, Mở lại yêu cầu trong hộp thoại khóa đến khi có lý do (và ghi chú khi lý do Khác).
- **E7.3 Bấm lặp, hai phiên cùng hủy.** Lần thứ hai nhận “Yêu cầu đã được hủy lúc …”, hồ sơ tải lại ở W44.
- **E7.4 Người phụ trách đã ngừng hoạt động.** Yêu cầu Đã hủy: người mở lại chọn người phụ trách mới (người cũ không còn trong danh sách chọn, ô không điền sẵn). Yêu cầu Đang xử lý: người có quyền Chuyển người phụ trách chuyển ở KD05 hoặc ⋯ của KD06. Yêu cầu Đã có Booking: người có quyền chuyển người phụ trách Booking ở KD08, yêu cầu chuyển theo.
- **E7.5 Có thay đổi chưa lưu khi bấm Hủy yêu cầu.** Hộp thoại W09 trước; sau đó mới đến W43.
- **E7.6 Chuyển yêu cầu Đã có Booking hoặc Đã hủy.** Không có mục Chuyển người phụ trách (RSD KD05 R08). Đã có Booking: người phụ trách yêu cầu theo người phụ trách Booking, chuyển ở KD08 (R23). Đã hủy: đổi người phụ trách khi mở lại (R22).

**Số bước của luồng chính so với cách làm thông thường.**

| Luồng | Cách làm thông thường | Ở KD06 |
|---|---|---|
| Tạo yêu cầu cho khách mới | Tạo khách ở KD04, quay lại tạo yêu cầu, tìm khách: khoảng 9 bước, 2 màn | Tìm, tạo nhanh trong hộp thoại, nhập nhu cầu, Lưu và lập báo giá: 5 bước, 1 màn |
| Hành trình 10 ngày từ mẫu 8 ngày | Sao chép rồi nhập tay 2 ngày | Sao chép, Ghép 2 ngày trong một hộp thoại |
| Thêm HDV cho 6 ngày | Mở 6 ngày, thêm 6 lần | Một lần thêm, chọn 6 ngày |
| Báo giá lần 2 | Nhập lại số khách, trẻ em, phòng, tỷ giá, Markup | Điền sẵn từ phiên bản trước, bấm Tính giá |
| Gửi báo giá | Xuất PDF, soạn email, đính kèm | Publish và sao chép link: 2 bấm, tự gửi |

---

## 4. Quy tắc triển khai chi tiết

### R01. Quyền và chế độ chỉ đọc (quyết định 11/11/2026, 12/11/2026; Q1, Q25, U5; RSD KD05, KD08)

- Quyền theo màn và thao tác, cấu hình ở QT02; giá trị mặc định ở mục 1.4. Không có phạm vi bản ghi: ai có quyền một thao tác thì làm được trên mọi yêu cầu, không phụ thuộc người phụ trách (Q1). Theo mặc định Kinh doanh làm mọi thao tác; Quản trị hệ thống xem, chuyển phụ trách, mở lại (R22), không sửa nội dung.
- Không có quyền thì nút ẩn; trường chỉ đọc hiện dạng chữ (U5).
- Khi yêu cầu có Booking Hiệu lực, người phụ trách yêu cầu luôn là người phụ trách Booking (RSD KD08 R11); chuyển ở KD08, không chuyển riêng ở KD05, KD06 (R23).
- Ghi chỉ được khi yêu cầu Đang xử lý, trừ: Mở lại (Đã hủy); Gia hạn và Thu hồi link (Đang xử lý hoặc Đã có Booking); sửa thông tin, hành trình, tính giá, lưu phiên bản, publish proposal của phiên bản điều chỉnh ở chế độ điều chỉnh (Đã có Booking, R18, R27).
- Theo mặc định Điều hành, Kế toán không có quyền xem KD06. Mở Booking từ KD06 theo quyền xem KD08. KD08 chỉ hiện liên kết sang KD06 với người có quyền xem KD06; người khác thấy mã yêu cầu và số phiên bản dạng chữ (E2.6; RSD KD08 1.4, R01).

### R02. Trạng thái yêu cầu (tính từ dữ liệu)

Tính theo thứ tự, dừng ở điều kiện đầu tiên đúng:

1. **Đã hủy**: yêu cầu có dấu hủy chưa được mở lại. Dấu hủy do người phụ trách ghi (R21) hoặc hệ thống tự ghi khi Booking Hiệu lực của yêu cầu bị hủy ở KD08, lý do “Booking đã hủy” (R20).
2. **Đã có Booking**: có Booking Hiệu lực tạo từ một phiên bản của yêu cầu.
3. **Đang xử lý**: còn lại.

Booking đã hủy không giữ nhóm Đã có Booking: hủy Booking làm yêu cầu Đã hủy; khách đặt lại thì Mở lại yêu cầu (R22), yêu cầu về Đang xử lý rồi ghi Chốt để tạo Booking mới (quyết định 12/11/2026; R19; RSD KD05 R02).

### R03. Mã yêu cầu

- Dạng `YC-YYMM-NNNN`: YYMM là năm, tháng tạo theo giờ Asia/Ho_Chi_Minh; NNNN tăng dần trong tháng, bắt đầu 0001. Cấp khi lưu lần đầu, không đổi, không dùng lại; cho phép thủng số (Q7).

### R04. Dữ liệu yêu cầu (TN02.04)

- Trường và kiểm tra ở 5.2. Thời gian có hai kiểu: **Đã chốt ngày** (ngày đi, ngày về; số ngày = ngày về − ngày đi + 1) và **Tháng dự kiến** (tháng, số ngày). Đổi kiểu được khi Đang xử lý.
- **Phòng (Q13', sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em).** Người lớn chỉ ở phòng đôi hoặc phòng đơn; không có phòng ba người lớn. Số phòng đôi = làm tròn lên ((người lớn − phòng đơn) ÷ 2), phòng đơn gồm cả phòng đơn tự xếp ở bullet dưới; số phòng = phòng đơn + số phòng đôi. **Giường phụ là giường cho trẻ em**, độc lập với số giường tiêu chuẩn của phòng; số giường phụ không đổi số phòng (ví dụ 6 người lớn, 2 trẻ em, 2 giường phụ → 3 phòng đôi, 3 phòng; AC92). Giường phụ là số nguyên ≥ 0 và **không quá số trẻ em**; vượt thì lỗi cạnh ô “Giường phụ không quá số trẻ em”, chặn lưu và chặn tính (5.2, E1.1, E4.12). Giường phụ nhiều hơn số phòng đôi thì chỉ cảnh báo, vẫn tính và lưu (E4.12; người dùng chốt 12/11/2026). Trẻ em không tính vào số phòng. Khi tính giá, trẻ em tính theo chính sách trẻ em của hợp đồng, **cộng** khoản giường phụ chia đều cho mọi trẻ em (R13).
- **Phòng đơn tự xếp (Q13').** Khi (người lớn − phòng đơn) lẻ, hệ thống tự cộng 1 vào phòng đơn cho người lớn lẻ, ghi chú “Người lớn lẻ · tự xếp phòng đơn” dưới ô; người dùng sửa được số phòng đơn; **người dùng tự nhập số phòng đơn (kể cả 0) thì giữ đúng số đó và tắt tự xếp cho lần tính này: 15 người lớn, nhập 0 phòng đơn thì 8 phòng đôi, không còn ghi chú tự xếp (AC89; người dùng chốt 13/11/2026)**. Phòng đơn tự xếp tính lại mỗi khi số người lớn hoặc phòng đơn người dùng nhập đổi: bỏ phòng đơn tự xếp cũ rồi xét lại; đổi số giường phụ không làm đổi phòng đơn (sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em). Số phòng tính theo công thức trên. Giường phụ là dịch vụ đi kèm của dịch vụ lưu trú, tính giá theo R13 (thay câu “phòng 3 người và giường phụ dùng Nhập tay”, bỏ theo quyết định 12/11/2026).
- Đổi khách chỉ khi chưa có phiên bản báo giá. Người liên hệ và ngôn ngữ phục vụ sửa được khi Đang xử lý.
- Ngân sách: theo R26. Sửa ngân sách không đổi phiên bản đã lưu; nhãn trong hoặc vượt ngân sách của mọi phiên bản tính lại theo ngân sách mới.
- Tác động khi sửa: R07.

### R05. Tìm và tạo nhanh khách (TN02.02, TN02.03)

- Tìm theo tên, mã khách, tên và email, điện thoại của khách và người liên hệ; không phân biệt hoa thường, bỏ dấu; tối thiểu 2 ký tự; tối đa 20 kết quả, sắp theo mức khớp.
- Mỗi kết quả ghi số yêu cầu Đang xử lý của khách và người phụ trách từng yêu cầu (tối đa 2 mã, còn lại “+n”).
- Tạo nhanh dùng RSD KD03-KD04 R01 (trường bắt buộc), R02 (chuẩn hóa, trùng, lý do), R12 (mã). Khách được lưu ngay khi bấm Tạo, độc lập với việc lưu yêu cầu.

### R06. Tab đích (RSD KD05 R07)

- Có phiên bản → Báo giá; có hành trình đã lưu → Hành trình; còn lại → Thông tin yêu cầu. Lối vào truyền tab cụ thể (ví dụ KD08.1 → phiên bản nguồn) thì dùng tab đó.

### R07. Hành trình và ngày

- Mỗi yêu cầu một hành trình hiện hành, có ít nhất 1 ngày khi lưu. Hành trình cũ khi tạo lại (L3.6) được lưu vào lịch sử, không khôi phục tự động.
- Ngày n = ngày đi + (n − 1). Đổi ngày đi, sắp xếp, chèn, xóa ngày thì ngày tháng tính lại; với Tháng dự kiến chỉ ghi Ngày n.
- Số ngày khác thời gian đi: cảnh báo ở đầu lưới (W15), không tự thêm hoặc xóa ngày.
- Số lượng dòng: Cố định giữ số đã nhập; Theo số khách = người lớn + trẻ em; Theo số phòng = số phòng (R04). Tính lại ngay khi số khách, phòng đổi. KD06.3 tính lại theo điều kiện tính giá.
- **Dịch vụ đi kèm của dòng (bổ sung 12/11/2026; RSD DH03 R23).** Mỗi dòng dịch vụ chính có 0 hoặc nhiều đi kèm, mỗi đi kèm tối đa một lần trên dòng; đi kèm chỉ chọn trong các đi kèm Đang dùng của chính dịch vụ của dòng (L3.4 bước 4). Ngày dùng của đi kèm là ngày của dòng chính. Số lượng của đi kèm: Cố định (số đã nhập), Theo số khách (người lớn + trẻ em), hoặc **Theo số giường phụ** (= số giường phụ của yêu cầu, ở KD06.3 là của điều kiện tính; chỉ có với đi kèm Giường phụ và là mặc định của nó). Đi kèm theo đêm tính một đêm trên mỗi dòng, như dòng phòng. Di chuyển, xóa, nhân bản ngày hoặc dòng chính thì đi kèm đi theo; Đổi dịch vụ của dòng chính bỏ đi kèm cũ (L3.8).

### R08. Sao chép Tour mẫu và ghép ngày (TN03.01, TN03.03; RSD KD01-KD02 R10)

- Chỉ liệt kê Tour mẫu Đang dùng; kiểm tra lại khi sao chép. Sao chép bản đã lưu mới nhất: ngày, tiêu đề, nội dung, dòng dịch vụ, cách tính số lượng, ghi chú. Không sao chép giá tham khảo, ghi chú nội bộ. Dòng dịch vụ Ngừng dùng được sao chép kèm nhãn. Tour mẫu không có dịch vụ đi kèm (RSD KD01-KD02 R05), nên sao chép và ghép ngày không tạo đi kèm; người dùng thêm đi kèm sau khi sao chép (L3.4 bước 4; bổ sung 12/11/2026).
- Không có liên kết sau khi sao chép: sửa, tắt Tour mẫu không đổi hành trình; sửa hành trình không đổi Tour mẫu.
- Ghép ngày: Chèn (trước một ngày, hoặc sau ngày cuối) hoặc Thay ngày (từ một ngày, thay liên tiếp). Ngày ghép ghi nguồn (mã Tour mẫu, số ngày nguồn).
- Sắp xếp gợi ý ở W14: cùng loại Tour trước, rồi chênh lệch số ngày với yêu cầu tăng dần, rồi cập nhật mới nhất.

### R09. Tạo hành trình bằng AI (TN03.04)

- Dữ liệu gửi cho dịch vụ AI: mong muốn, thời gian và số ngày, ngân sách (dùng để chọn hạng dịch vụ), số người lớn, tuổi trẻ em, hạng phòng, ngôn ngữ phục vụ, loại Tour, tiêu chí thêm; danh sách Tour mẫu Đang dùng và danh mục dịch vụ đang dùng (tên, loại, nơi). **Không gửi** tên, email, điện thoại của khách, người liên hệ, hay giá NCC.
- Kết quả: ngày (tiêu đề, nội dung) và dòng dịch vụ. Dòng chỉ được gán NCC khi trỏ tới một dịch vụ đang dùng trong danh mục; còn lại là Chưa gán NCC kèm tên AI đề xuất. AI không đặt giá, số lượng lấy theo đơn vị tính. AI không đề xuất dịch vụ đi kèm (danh mục gửi AI không có đi kèm); người dùng thêm sau (L3.4 bước 4; bổ sung 12/11/2026).
- Đề xuất hiện trên lưới, chưa lưu; nguồn hành trình ghi Bằng AI khi lưu. Thời gian chờ tối đa 60 giây (tệp cấu hình). Mỗi lần gọi ghi nhật ký (người, thời điểm, tiêu chí, kết quả thành công hay lỗi).
- **Số phương án (bổ sung 25/11/2026).** Người dùng chọn 1–3, mặc định 1 (W19). Mỗi phương án là một lời gọi riêng qua hàng đợi, cùng dữ liệu ở bullet đầu, cộng **hướng** của phương án để các phương án khác nhau rõ: phương án 1 “Bám sát tiêu chí”; phương án 2 “Khác tuyến hoặc điểm nhấn” (khác tuyến, điểm đến phụ hoặc phương tiện chặng dài, vẫn giữ điểm đến phải có); phương án 3 “Tiết kiệm hơn trong ngân sách” (hạng dịch vụ, số dịch vụ thấp hơn, vẫn đủ số ngày). Tạo 1 phương án dùng hướng 1. Ngoài ngày và dòng dịch vụ, mỗi phương án trả thêm tên, nhịp độ, chặng đi xe dài nhất, điểm vào – ra và tối đa 3 điểm nhấn để hiện ở W53; số ngày, số dịch vụ, số khớp danh mục, số chưa gán NCC do hệ thống đếm. Mỗi lời gọi có thời gian chờ riêng (R25); số lời gọi chạy cùng lúc theo hàng đợi và gateway, phương án chưa tới lượt hiện Đang chờ (W52). Phương án không được chọn không lưu ở đâu; nhật ký lần gọi chỉ ghi mỗi lời gọi (thêm số thứ tự và hướng của phương án), không ghi nội dung phương án.
- **Sửa bằng AI (khung chat, L3.10; bổ sung 25/11/2026).** Dữ liệu gửi: dữ liệu của yêu cầu và danh mục như bullet đầu (không có dữ liệu cá nhân, không có giá NCC); hành trình đang trên lưới kể cả phần chưa lưu (tên hành trình, ngày theo thứ tự với tiêu đề, nội dung tiếng Việt, hoạt động trong ngày; dòng dịch vụ với mã dịch vụ hoặc tên đề xuất khi Chưa gán NCC, cách tính số lượng, số lượng Cố định, ghi chú; đi kèm của dòng chỉ để AI biết, không sửa); tin nhắn mới và các lượt trước trong phiên (tin của người dùng, tóm tắt thay đổi đã áp). Tin nhắn gửi nguyên văn, hệ thống không lọc; chữ gợi ý của ô nhập nhắc không nhập tên, email, điện thoại của khách. Kết quả theo JSON schema: câu trả lời ngắn và danh sách thay đổi, mỗi thay đổi một loại: sửa tên hành trình; thêm, xóa, chuyển ngày; sửa tiêu đề, nội dung tiếng Việt của ngày; thêm, sửa, xóa hoạt động trong ngày; thêm, xóa, đổi dịch vụ, chuyển dòng sang ngày khác, sửa cách tính số lượng, số lượng Cố định, ghi chú của dòng. Dòng mới hoặc dòng đổi dịch vụ chỉ gán NCC khi mã nằm trong danh mục đã gửi, còn lại là Chưa gán NCC (như tạo đề xuất). AI không đặt giá, không sửa phần tiếng Anh, không thêm hay sửa dịch vụ đi kèm. Hệ thống kiểm tra từng thay đổi theo 5.2 và E3.19, áp phần hợp lệ lên lưới theo thứ tự trả về, chưa lưu. Lịch sử trò chuyện chỉ nằm ở trình duyệt trong phiên của tab Hành trình, không lưu ở máy chủ; mỗi lượt gửi kèm lại lịch sử, tối đa 20 lượt gần nhất (cũ hơn bị bỏ khỏi lời gọi, vẫn hiện trên khung). Mỗi lượt là một lần gọi, ghi nhật ký lần gọi như tạo đề xuất (người, thời điểm, mục đích Sửa bằng AI, mã yêu cầu, số thay đổi đã áp và bị bỏ qua, kết quả); không ghi nội dung tin nhắn hay câu trả lời.
- **Cách gọi (A1, Q5).** Dịch vụ AI là gateway AI riêng, cấu hình ở tệp cấu hình, không có màn cấu hình; output theo JSON schema. Lời gọi (tạo hành trình, Sửa bằng AI, dịch nháp ở R12) đi qua hàng đợi, không ghi gì vào yêu cầu cho tới khi người dùng lưu; riêng Dịch tự động của R12 (tác vụ nền, ticket 106) ghi bản dịch nháp thẳng vào hành trình đã lưu. Gateway tạm không dùng được thì báo lỗi như E3.1, E3.12, E3.18; các phần khác của KD06 vẫn dùng được.

### R10. Việc cần xử lý của hành trình

- Đếm trên tab Hành trình: ngày chưa có nội dung; dòng của NCC hoặc dịch vụ Ngừng dùng (DH03 R05); dòng Chưa gán NCC; dịch vụ đi kèm Ngừng dùng trên dòng (bổ sung 12/11/2026, E3.13; DH03 R05).
- Có ít nhất một việc thì Tính giá, Lưu và tính giá khóa kèm lý do. Lưu hành trình vẫn được.
- Cảnh báo, không đếm: dòng Hướng dẫn viên có ngôn ngữ khác ngôn ngữ phục vụ của yêu cầu. RSD DH03 v1.4 chỉ có Ngôn ngữ giao dịch của NCC (dùng cho email đặt dịch vụ), không có trường ngôn ngữ của dịch vụ HDV và không thêm trường này (chấp nhận mặc định, Q3). Vì vậy cảnh báo không hiện (R25).

### R11. Lưu hành trình và chỉ báo khác báo giá

- Lưu toàn bộ hành trình trong một giao dịch, kiểm tra phiên bản bản ghi.
- Hành trình **khác báo giá mới nhất** khi lần lưu hành trình gần nhất sau thời điểm lưu phiên bản mới nhất và nội dung khác bản chụp của phiên bản đó (ngày, tiêu đề, nội dung tiếng Việt, dòng dịch vụ, số lượng, dịch vụ đi kèm của dòng và số lượng của đi kèm). Nội dung tiếng Anh không tính. Dải nêu số dòng dịch vụ đổi và các ngày bị đổi.
- Chỉ báo mất khi lưu phiên bản mới, hoặc khi hành trình được sửa trở lại giống bản chụp.

### R12. Nội dung tiếng Anh

- Mỗi ngày có tiêu đề và nội dung tiếng Anh, không bắt buộc khi lưu; cần cho proposal English (E5.1). Tình trạng: chưa có, dịch nháp, đã kiểm tra.
- Dịch nháp dùng dịch vụ AI với dữ liệu là tiêu đề và nội dung tiếng Việt của ngày (không có dữ liệu khách). Bản dịch có nhãn đến khi người dùng sửa hoặc đánh dấu đã kiểm tra.
- Sửa nội dung tiếng Anh không đổi chỉ báo R11 và không tạo phiên bản. Proposal lấy nội dung tiếng Anh tại lúc publish.
- **Dịch tự động (bổ sung 23/11/2026, ticket 106).** Khi tệp cấu hình có gateway AI, cứ **10 phút** (tệp cấu hình `autoTranslation.intervalMinutes`) hệ thống quét các hành trình đã lưu của yêu cầu **Đang xử lý**: ngày có tiêu đề hoặc nội dung tiếng Việt mà thiếu phần tiếng Anh tương ứng, và tên hành trình có tiếng Việt mà thiếu tiếng Anh, được dịch bằng dịch vụ AI (dữ liệu như Dịch nháp: chỉ văn bản tiếng Việt đó) và ghi thẳng vào hành trình với tình trạng **Dịch nháp** (nhãn “Dịch nháp · cần kiểm tra”). Chỉ điền phần còn trống: phần tiếng Anh đã có (nháp hay đã kiểm tra) không bị thay; ngày mà người dùng đã lưu lại với nội dung tiếng Việt khác trong lúc dịch thì không ghi (lần quét sau dịch lại). Ghi này không đổi phiên bản bản ghi của hành trình, người lưu, thời điểm lưu, không tạo mục QT03 (việc chạy nền, QT03 1.3); kết quả mỗi lần quét nằm ở nhật ký hệ thống `AUTO_TRANSLATION`. Gateway lỗi thì không ghi gì: gateway tạm không dùng được hoặc hết lượt dùng thì lần quét dừng và lần quét sau thử lại; câu trả lời không dùng được (hoặc quá thời gian chờ) thì bản ghi đó được thử lại sau 60 phút; yêu cầu Đã có Booking, Đã hủy không được dịch tự động (như R27 không có AI).
- **Lưu không xóa bản dịch tự động (ticket 106).** Lưu hành trình gửi một ngày không có tiếng Anh mà tiêu đề, nội dung tiếng Việt giống một ngày đang lưu có tiếng Anh (cùng cách ghép ngày của R18) thì ngày đó giữ phần tiếng Anh đang lưu và tình trạng của nó; tên hành trình cũng vậy. Nhờ vậy người đang sửa lưới mở từ trước lần dịch tự động không xóa mất bản dịch, và không bị báo xung đột (E3.8).

### R13. Tính giá vốn (TN03.06; RSD DH03 R02, R07, R09, R14, R15; Q11–Q15)

- **Bộ tính giá dùng chung (Q11).** Các quy tắc ở R13, R14 là quy tắc của bộ tính giá dùng chung cho KD02, DH04, KD06; cả ba tính phụ thu.
- **Ngày sử dụng** của dòng = ngày của Ngày chứa dòng, tính từ ngày khởi hành của điều kiện tính.
- **Hợp đồng áp dụng** là hợp đồng của NCC có kỳ chứa ngày sử dụng (DH03 R02). Không có thì khoản thiếu (R15); không dùng hợp đồng khác.
- **Mùa và loại ngày** theo hợp đồng áp dụng (DH03 R07). Dịch vụ theo đêm tính từng đêm theo mùa, loại ngày của đêm đó.
- **Số lượng** theo cách tính của dòng: Theo số khách → người lớn và từng trẻ em; Theo số phòng → số phòng; Cố định → số đã nhập. Dòng giá chọn theo hạng phòng (nếu có) và khoảng số khách: dòng căn cứ khách hoặc phòng so với **số người lớn** của điều kiện tính; dòng căn cứ đoàn hoặc đơn vị dịch vụ (xe, thuyền, HDV, giường…) so với **tổng khách gồm trẻ em** (DH03 R14; quyết định rà soát 13/11/2026, Q-RS27; cùng cách chọn với RSD DH04 R04, KD01-KD02 R07). Trong cùng hạng phòng tối đa một dòng giá chính khớp, vì DH03 chặn chồng lấn khoảng số khách; dòng giá không có Thứ tự (Q-RS03). Điều kiện tính chưa có hạng phòng mà dịch vụ có dòng giá chính ở nhiều hạng phòng: lấy dòng của hạng phòng có giá thấp nhất (cùng cách hiện mức thấp nhất của RSD DH04 R04), khoản ghi cảnh báo “Chưa chọn hạng phòng · tính theo hạng giá thấp nhất” (người dùng chốt 12/11/2026, rà soát lần ba).
- **Trẻ em (Q12)**: nhập tuổi từng trẻ; tuổi tính tại ngày sử dụng đầu tiên của dịch vụ (DH03 R09). KD06 không có ngày sinh của khách: tuổi nhập ở điều kiện tính được dùng làm tuổi tại ngày sử dụng đầu tiên của từng dịch vụ. Mỗi dòng áp nhóm tuổi của hợp đồng của chính dòng đó. Giá trẻ em là **đơn giá của nhóm tuổi trên dòng giá** theo điều kiện ngủ chung giường, thêm giường của hợp đồng (DH03 R09; không có kiểu %, quyết định rà soát 13/11/2026, Q-RS05). **Trẻ dưới nhóm tuổi thấp nhất** của hợp đồng của dòng: miễn phí (0). **Trẻ trên nhóm cao nhất** (hoặc rơi vào khoảng trống giữa hai nhóm), hoặc hợp đồng không có nhóm tuổi: tính như người lớn, ở dòng căn cứ khách là giá người lớn của dòng; ở dòng căn cứ phòng là khoản thiếu “Trẻ n tuổi trên nhóm tuổi của hợp đồng”, Kinh doanh nhập tay (Q-RS06; người dùng trả lời 13/11/2026). Không có số trẻ miễn phí (Q-RS07). Ô giá trẻ em trống ở dòng căn cứ khách hoặc phòng là khoản thiếu. Dòng căn cứ đoàn hoặc đơn vị dịch vụ không có giá trẻ em: ô bị khóa ở DH03 (DH03 E6.15), bộ tính giá không bao giờ nhận giá trẻ em ở dòng như vậy; giá của dòng không phân biệt người lớn, trẻ em (Q-RS02; người dùng trả lời 13/11/2026; chia khoản theo bullet phân bổ dưới đây).
- **Phụ thu** lễ Tết, phòng đơn theo DH03 R15 (Cộng dồn hoặc Thay thế; theo khách, phòng, đêm, đơn vị). Phụ thu Thay thế dùng thay giá mùa của ngày đó, Cộng dồn cộng vào giá mùa; nhiều phụ thu cùng áp cho một khoản thì lấy mức cao nhất trong các phụ thu Thay thế (luôn cùng căn cứ với dòng giá, DH03 R15, Q-RS04), rồi cộng mọi phụ thu Cộng dồn (Q15).
- **Phụ thu lễ theo phòng và phòng đơn (người dùng chốt 13/11/2026; DH03 R15).** Phụ thu lễ tính theo phòng (Cộng dồn hoặc Thay thế) áp cho **mọi phòng của đêm đó, kể cả phòng đơn** (nhập và tự xếp). Phòng đơn khai kiểu Phụ thu thêm: giá phòng đơn của đêm = giá phòng của đêm sau phụ thu lễ + phụ thu phòng đơn. Phụ thu phòng đơn dạng tỷ lệ tính trên **giá mùa của dòng, chưa gồm phụ thu lễ** (DH03 R15), làm tròn half-up theo loại tiền. Phòng đơn khai Giá phòng đơn trọn gói: đêm có phụ thu lễ Cộng dồn thì cộng phụ thu đó vào giá trọn gói; đêm có phụ thu lễ Thay thế thì phòng đơn trọn gói của đêm đó là khoản thiếu “Phòng đơn trọn gói · đêm có giá lễ thay thế”, người dùng nhập tay theo giá NCC báo (R15; người dùng chốt 13/11/2026).
- **Dịch vụ đi kèm (người dùng chốt 12/11/2026; RSD DH03 R23).** Mỗi đi kèm trên dòng là một khoản riêng, ngày sử dụng là ngày của dòng chính. Giá lấy theo **hợp đồng áp dụng của dịch vụ chính** cho ngày đó (cùng NCC nên là cùng hợp đồng), mùa và loại ngày của ngày dùng (đi kèm theo đêm lấy loại ngày theo đêm), dòng giá chính của đi kèm theo số khách theo căn cứ của dòng như bullet Số lượng (giường phụ căn cứ đơn vị dịch vụ: tổng khách; Q-RS27), phụ thu lễ Tết của đi kèm theo DH03 R15. Số lượng theo R07. Thiếu hợp đồng, thiếu dòng giá, ô giá trống của đi kèm là khoản thiếu như mọi khoản (R15); không lấy giá của dịch vụ chính hay hợp đồng khác. Số lượng 0 (ví dụ 0 giường phụ) thì không tạo khoản.
- **Giường phụ cho trẻ em (Q13', sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em; thay quy tắc 12/11/2026 “phòng 3 người là phòng đôi cộng giường phụ”).** Khoản giường phụ = số giường phụ × giá giường phụ của đêm đó. Khi điều kiện tính có giường phụ > 0, mỗi đêm lưu trú (dòng dịch vụ lưu trú có cách tính Theo số phòng) phải có đi kèm Giường phụ; đêm chưa có thì có một khoản thiếu “Giường phụ · chưa thêm vào <dịch vụ>, <ngày>” với số lượng bằng số giường phụ, người dùng thêm đi kèm hoặc nhập tay (E4.12, R15). Tính **cộng cả hai**: trẻ em vẫn tính theo chính sách trẻ em của hợp đồng trên dòng giá của dịch vụ phòng (bullet Trẻ em ở trên), và khoản giường phụ tính thêm; tiền khoản giường phụ chia đều cho mọi trẻ em của điều kiện tính, không chia cho người lớn (bullet phân bổ dưới).
- **Phân bổ giá vốn vào đối tượng**:
  - khoản theo khách: vào người lớn theo giá người lớn, vào từng trẻ theo giá nhóm tuổi;
  - khoản theo phòng: khoản phòng đôi của một đêm chia đều cho số người lớn ở phòng đôi (người lớn − phòng đơn); mỗi phòng đôi có 2 người lớn nên mỗi người chịu nửa giá phòng đôi; **khoản giường phụ** của đêm chia đều cho mọi trẻ em của điều kiện tính, không chia cho người lớn (sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em); phòng đơn (kể cả phòng đơn tự xếp, R04) tính cho 1 người lớn với giá vốn theo cách khai ở hợp đồng (DH03 R15): giá phòng đơn trọn gói, hoặc giá phòng + phụ thu phòng đơn đã khai (Q14); **phụ thu phòng đơn** trên bảng giá bán = giá phòng đơn − khoản phòng đôi cùng đêm ÷ số người lớn ở phòng đôi (không trừ khoản giường phụ, sửa 18/11/2026), chỉ để hiển thị; trẻ em theo chính sách trẻ em, cộng phần khoản giường phụ;
  - khoản theo đoàn, xe, đơn vị (trừ khoản giường phụ ở trên): chia đều cho số khách tính phí: người lớn và trẻ em, trừ trẻ dưới nhóm tuổi thấp nhất của hợp đồng của chính dịch vụ đó (DH03 R09, Q-RS06). Dòng này không có giá trẻ em (ô khóa, Q-RS02), nên trẻ trong nhóm tuổi, trẻ trên nhóm cao nhất và trẻ của hợp đồng không có nhóm tuổi chia như người lớn.
- **Trẻ em cùng nhóm tuổi gộp một dòng giá bán (người dùng chốt 13/11/2026).** Trẻ em cùng nhóm tuổi theo mọi hợp đồng gộp một dòng giá bán; khác nhóm thì tách dòng. Giá của dòng gộp = bình quân giá vốn các trẻ trong dòng, kể cả khi một trẻ được miễn phí ở một dịch vụ (dưới nhóm tuổi thấp nhất của hợp đồng đó) nên giá vốn của các trẻ khác nhau; sau đó nhân (1 + Markup theo hạng mục của từng khoản) và làm tròn lên theo bội số (R14). Không tính và làm tròn riêng từng trẻ rồi mới gộp.

### R14. Tiền, tỷ giá, Markup, làm tròn (quyết định 11/11/2026, 12/11/2026; Q9, Q10)

- **Tỷ giá** là **tỷ giá có hiệu lực** ở bảng tỷ giá QT05 (Kế toán nhập theo ngày), theo VND, của ngày tính giá; ngày tính giá là ngày bấm Tính giá (kể cả Lưu và tính giá ở chế độ điều chỉnh) và tỷ giá dùng được chụp vào phiên bản (Q10). Tỷ giá có hiệu lực là số của ngày gần nhất ≤ ngày tính có ô loại tiền đó (RSD QT05 R13). Ngày tính chưa có dòng thì dùng ngày gần nhất trước đó, không chặn; W27 và phiên bản ghi ngày lấy tỷ giá (nguồn “Bảng tỷ giá ngày dd/mm/yyyy”). Chỉ khi không có ngày nào ≤ ngày tính có tỷ giá của loại tiền thì là chưa có tỷ giá: bắt buộc nhập tay (E4.2, R15). Quy đổi khoản = thành tiền gốc × tỷ giá loại tiền gốc ÷ tỷ giá loại tiền báo giá. Báo giá bằng VND thì tỷ giá VND là 1. Không cộng trực tiếp các khoản khác loại tiền.
- **Markup** là % trên giá vốn, có hai cấp; mỗi khoản dùng Markup của hạng mục chứa dịch vụ, hạng mục để trống thì dùng Markup chung:
  1. **Theo hạng mục dịch vụ** (Lưu trú, Di chuyển, Vé máy bay, Hướng dẫn viên, Tham quan, Ăn uống, Khác): điền sẵn từ Markup mặc định của hạng mục (QT05, nếu có), sửa được ở W27. Mỗi loại dịch vụ thuộc đúng một hạng mục (QT05); W27 chỉ hiện hạng mục có dịch vụ trong hành trình;
  2. **Chung**: mặc định theo loại Tour (QT05); dùng cho hạng mục để trống.
- **Markup của khoản dịch vụ đi kèm** (bổ sung 12/11/2026): theo hạng mục chứa **loại dịch vụ của chính dịch vụ đi kèm** (QT05), như mọi khoản; không theo hạng mục của dịch vụ chính. Ví dụ giường phụ (loại Khách sạn) theo Lưu trú; đi kèm Đưa đón sân bay loại Vận chuyển của khách sạn theo Di chuyển. W27 hiện hạng mục có dịch vụ trong hành trình, kể cả hạng mục chỉ có đi kèm.
- Sửa tỷ giá, Markup chung hoặc Markup theo hạng mục chỉ áp cho phiên bản đang tính; nguồn ghi Bảng tỷ giá / Mặc định hoặc Sửa tay. Phiên bản mới điền sẵn Markup chung và Markup theo hạng mục từ phiên bản nguồn.
- **Markup bình quân** = tổng giá bán trước làm tròn ÷ tổng giá vốn − 1; hiện ở ô Markup của W28 để người dùng thấy tác động của Markup theo hạng mục.
- **Bảng tính giá có hai cách xem** (W28, W49), cùng một kết quả tính: **Theo ngày** (từng khoản của từng ngày, lọc theo ngày, Nhập tay, Thiếu giá; ghi hợp đồng, mùa, loại ngày, đơn giá gốc) và **Theo dịch vụ** (gom các khoản của cùng một dịch vụ và cùng NCC trên cả hành trình thành một dòng, nhóm theo hạng mục; mỗi dòng có ngày dùng, tổng số lượng, giá vốn quy đổi, Markup, giá bán trước làm tròn). Khoản của dịch vụ đi kèm: Theo ngày nằm ngay dưới khoản dịch vụ chính, nhãn Đi kèm; Theo dịch vụ là dòng riêng trong hạng mục của nó, ghi “kèm <dịch vụ chính>” (bổ sung 12/11/2026). Tổng của hạng mục và tổng bảng ở hai cách xem phải bằng nhau và bằng giá vốn, giá bán trước làm tròn của phiên bản. Phiên bản đã lưu (W31, liên kết Xem giá vốn từng khoản) mở cùng bảng ở chế độ chỉ đọc, có cả hai cách xem.
- **Làm tròn (Q9).** Mỗi số tiền tính ra (khoản quy đổi, giá vốn, tổng giá bán, lãi gộp) làm tròn half-up theo đơn vị nhỏ nhất của loại tiền. Bội số làm tròn chỉ áp cho giá bán mỗi khách (giá bán mỗi đối tượng dưới đây), không áp cho tổng hay số tiền khác.
- **Giá bán mỗi đối tượng** = làm tròn lên (Σ phần giá vốn của từng khoản phân bổ cho đối tượng × (1 + Markup theo hạng mục của khoản)) theo bội số của loại tiền (cấu hình: EUR, USD 10; JPY 1.000; VND 10.000). **Tổng giá bán** = Σ giá bán × số người. **Lãi gộp** = tổng giá bán − tổng giá vốn.
- **Ví dụ tính giá (bổ sung 13/11/2026).** Bộ dữ liệu ví dụ đầy đủ (NCC, hợp đồng, mùa, dòng giá, phụ thu, chính sách trẻ em, tỷ giá, Markup, bội số, hành trình) và kết quả tính bằng script của bộ tính giá ở `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`. Số ví dụ của RSD này (R14, L4.1, AC35, AC36, AC65, AC69, AC73, AC93, AC94) lấy từ đó; khi khác nhau thì tài liệu ví dụ đúng. Tài liệu cũng là dữ liệu mẫu cho scenario test của bộ tính giá; các chỗ RSD chưa đủ rõ mà script phải chọn cách hiểu ghi ở mục 2 của tài liệu.
- Ví dụ v3 của Müller (ví dụ A của tài liệu ví dụ, tính lại 13/11/2026 theo R04, R13 hiện hành): 23 người lớn, 2 trẻ em 8 và 10 tuổi, hạng Deluxe, nhập 2 phòng đơn → 3 phòng đơn (1 tự xếp, R04), 10 phòng đôi, 13 phòng, 0 giường phụ; 14 ngày, 88 khoản của 36 dịch vụ. Giá vốn 935.515.000 ₫ + 12.051 USD gốc, quy đổi từng khoản theo EUR 27.450 ₫, USD 25.380 ₫ rồi cộng = 45.222,82 EUR. Markup chung 15 %; hạng mục Vé máy bay 5 %, Hướng dẫn viên 20 %. Người lớn: giá vốn 1.741,19, giá bán trước làm tròn 1.989,94 → 1.990. Trẻ em 6–11 tuổi: 685,03 → 778,84 → 780. Phụ thu phòng đơn (mỗi đêm: giá phòng đơn theo cách khai ở hợp đồng, trọn gói hoặc giá phòng + phụ thu phòng đơn, trừ phần tiền phòng của mỗi người lớn ở phòng đôi; cộng 13 đêm): 1.268,49 → 1.458,76 → 1.460. Tổng 1.990 × 23 + 780 × 2 + 1.460 × 3 = 51.710 EUR; người ở phòng đơn trả 1.990 + 1.460 = 3.450 EUR; lãi gộp 6.487,18 EUR (12,5 %); Markup bình quân 51.702,67 ÷ 45.222,82 − 1 = 14,3 %. Ví dụ Müller không có giường phụ; ví dụ có giường phụ ở AC92–AC94 (ví dụ C của tài liệu ví dụ).
- Ở KD06, “hạng mục dịch vụ” (Lưu trú, Di chuyển…) là nhóm loại dịch vụ để đặt Markup; khác “Hạng mục dịch vụ” của hồ sơ Tour ở DH08 (một dịch vụ cần đặt với NCC).
- Proposal hiện giá bán theo đối tượng và tổng, không hiện giá vốn, Markup, tỷ giá, ngân sách hay so sánh với ngân sách.

### R15. Khoản thiếu và giá nhập tay

- Khoản thiếu: không có hợp đồng áp dụng; không có dòng giá phù hợp; ô giá mùa trống; ô giá trẻ em trống ở dòng căn cứ khách hoặc phòng (dòng căn cứ đoàn, đơn vị dịch vụ không có giá trẻ em, Q-RS02); trẻ trên nhóm tuổi cao nhất ở dòng căn cứ phòng (R13, Q-RS06; người dùng trả lời 13/11/2026); chưa có tỷ giá (không có ngày nào ≤ ngày tính, E4.2). Các trường hợp này áp như nhau cho khoản của dịch vụ đi kèm (bổ sung 12/11/2026). Thêm một loại: điều kiện có giường phụ mà đêm lưu trú chưa có đi kèm Giường phụ (R13, E4.12). Thêm một loại nữa: phòng đơn khai giá trọn gói vào đêm có phụ thu lễ Thay thế (R13; người dùng chốt 13/11/2026). Giá 0 có trong bảng giá là hợp lệ (miễn phí), khác ô trống.
- Người dùng nhập đơn giá, loại tiền và ghi chú nguồn giá; có thể áp cho các đêm, ngày khác của cùng dịch vụ trong lần tính. Khoản có nhãn Nhập tay trong phiên bản. Giá nhập tay không ghi ngược về DH03.
- Nhập tay ghi đè được khoản đã có giá, kèm ghi chú nguồn (BOI-CANH-DU-AN, thuật ngữ Nhập tay). Câu cũ “Nhập tay cũng dùng cho phòng 3 người và giường phụ cho tới khi có quy tắc riêng” bỏ theo quyết định 12/11/2026: giường phụ tính theo R04, R13; không còn phòng 3 người lớn (sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em).
- Còn khoản thiếu thì không lưu phiên bản.

### R16. Phiên bản báo giá

- Số phiên bản tăng dần trong yêu cầu (v1, v2…), cấp trên máy chủ khi lưu; chống lưu lặp bằng mã lần tính.
- Phiên bản lưu bản chụp đầy đủ (5.1) và không bao giờ bị sửa. Sửa hành trình, bảng giá, hợp đồng, tỷ giá sau đó không đổi phiên bản đã lưu.
- **Phiên bản mới nhất** là phiên bản có số lớn nhất; dùng cho phần đầu KD06 và chỉ báo hành trình (R11). KD05 hiện phiên bản của Booking khi yêu cầu có Booking Hiệu lực, còn lại phiên bản mới nhất (RSD KD05 R03; Q-RS17).

### R17. Kết quả báo giá (quyết định 11/11/2026, 12/11/2026)

- Giá trị: Chưa có kết quả (mặc định), Chốt, Cần điều chỉnh, Không chốt, **Đã thay thế**. Người có quyền Ghi kết quả ghi bốn giá trị đầu bất kỳ lúc nào khi yêu cầu Đang xử lý và phiên bản chưa là phiên bản Chốt của một Booking; ghi lịch sử. Phiên bản Chốt của Booking (Hiệu lực hoặc đã hủy) không đổi được sang Chưa có kết quả, Cần điều chỉnh, Không chốt; chỉ ghi Chốt lại được để đặt lại (R19). Chưa có kết quả, Cần điều chỉnh, Không chốt lưu ngay. **Ghi Chốt là tạo Booking** (quyết định rà soát 13/11/2026, Q-RS17): qua hộp thoại xác nhận, ghi Chốt và tạo Booking trong một giao dịch (R19); không có trạng thái phiên bản Chốt mà chưa có Booking. Không ghi kết quả ở chế độ điều chỉnh (R27).
- **Đã thay thế** chỉ do hệ thống gán: khi Kinh doanh bấm Chuyển sang Điều hành ở KD08, trong một giao dịch hệ thống tự ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking (2.5, R27; không phải phiên bản số lớn nhất của yêu cầu), gắn phiên bản đó vào Booking, và chuyển phiên bản Chốt cũ của Booking thành Đã thay thế (RSD KD08 R09). Lịch sử ghi người bấm và thời điểm. Phiên bản Đã thay thế không đổi kết quả được nữa.
- Phiên bản Chốt luôn là phiên bản của một Booking: ghi Chốt là tạo Booking, nên không có phiên bản Chốt khi chưa từng có Booking (Q-RS17). Mỗi yêu cầu có tối đa một Booking Hiệu lực, nên tối đa **một** phiên bản Chốt của Booking Hiệu lực (phiên bản hiện hành của Booking). Hủy Booking thì phiên bản của Booking **giữ Chốt** (người dùng trả lời 13/11/2026), hiện kèm “Booking … · Đã hủy” (R20); đặt lại sau khi Mở lại thì phiên bản của Booking mới cũng Chốt. Ghi Chốt không bao giờ đổi kết quả của phiên bản khác (bỏ hộp thoại đổi phiên bản Chốt W39, L6.3). Phiên bản lưu ở chế độ điều chỉnh giữ Chưa có kết quả cho tới khi Chuyển sang Điều hành.
- Không chốt không làm đổi trạng thái yêu cầu.

### R18. Proposal và link (quyết định 11/11/2026, 12/11/2026; Q21, Q22)

- **Bố cục proposal (Q22):** dùng chính W33 (trang proposal), W36 (link hết hạn hoặc đã thu hồi), W37 (có bản mới hơn); mỗi ngôn ngữ (English, Tiếng Việt) một bản. Không cấu hình trên hệ thống; Kinh doanh không chọn, không sửa bố cục. PDF dựng từ chính trang HTML của proposal (Q21).
- **Trường dữ liệu trộn vào proposal:** tên khách, người liên hệ; tên hành trình theo ngôn ngữ (5.1), ngày đi, ngày về, số ngày đêm; số người lớn, trẻ em và tuổi; lịch trình theo ngày (số ngày, ngày, tiêu đề, nội dung theo ngôn ngữ); lưu trú theo đêm (tên khách sạn, hạng phòng, số giường phụ khi có: “+ n giường phụ”, English “+ n extra bed(s)”); bảng giá bán theo đối tượng, số người, tổng, loại tiền; bao gồm; không bao gồm; số phiên bản; ngày publish; hạn hiệu lực; người phụ trách và email công việc; mã Booking được điều chỉnh (chỉ khi phiên bản là phiên bản điều chỉnh của Booking, dùng cho dòng “Phương án điều chỉnh cho Booking BK-…”). Cần trường khác thì bổ sung ở RSD này.
- **Hoạt động trong ngày (bổ sung 23/11/2026, ticket 107).** Mỗi ngày của hành trình có bảng hoạt động trên proposal ở phần “Trên proposal” của ngày (KD06.2): giờ bắt đầu, giờ kết thúc (không bắt buộc; có giờ kết thúc thì phải có giờ bắt đầu và sau giờ bắt đầu), tên (bắt buộc), mô tả, kèm tên và mô tả tiếng Anh; tối đa 15 hoạt động mỗi ngày, theo thứ tự. Hoạt động là tham quan, vé, lớp học, show diễn, trải nghiệm…; **không** gồm lưu trú, khách sạn, di chuyển, HDV (đó là dòng dịch vụ). Đề xuất AI (L3.5) điền sẵn bảng này cả tiếng Việt và tiếng Anh; dịch tự động (R12) điền tên, mô tả tiếng Anh còn thiếu. Proposal hiện mục “Trong ngày” (English “During the day”) của từng ngày theo ngôn ngữ (English: tên, mô tả tiếng Anh; chưa có thì tiếng Việt); hoạt động không có giờ thì không hiện giờ, ngày không hoạt động nào có giờ thì không có cột giờ. Lấy từ ngày tương ứng của hành trình đang lưu lúc publish (như bữa ăn, điểm đến, ảnh); không tính là thay đổi sau báo giá (R11).
- **Tạo:** hệ thống trộn các trường trên của bản chụp phiên bản vào trang proposal theo ngôn ngữ, nội dung tiếng Anh tại lúc publish (với English), bao gồm, không bao gồm và hạn. Nội dung proposal là bản chụp lúc publish, không đổi khi hành trình đổi.
- **Dịch vụ đi kèm trên proposal (bổ sung 12/11/2026).** Proposal không có dòng hay giá riêng cho đi kèm: giá đi kèm đã nằm trong giá bán theo đối tượng (R13, R14); không hiện giá vốn, đơn giá NCC hay tên NCC của đi kèm. Giường phụ chỉ hiện là số giường phụ trong phần lưu trú theo đêm (chữ cố định theo ngôn ngữ, không cần tên tiếng Anh của dịch vụ). Đi kèm khác không có dòng riêng; muốn khách thấy thì Kinh doanh viết vào nội dung ngày, hoặc để thẻ bao gồm của đi kèm vào mục Bao gồm (bullet dưới).
- **Bao gồm, không bao gồm** tổng hợp từ thẻ của các dịch vụ trong phiên bản, kể cả dịch vụ đi kèm (DH03, gộp trùng theo tên) và mục mặc định cố định của proposal (tệp cấu hình hoặc dữ liệu khởi tạo, C2); tên tiếng Anh lấy từ danh mục thẻ QT05; người dùng thêm, bỏ trong hộp thoại.
- **Link:** mỗi phiên bản, mỗi ngôn ngữ có tối đa một link Đang mở. Mã link ngẫu nhiên, đủ dài để không đoán được; trang không cho công cụ tìm kiếm lập chỉ mục; không cần đăng nhập.
- **Hạn:** mặc định publish + 30 ngày (tham số chung QT05). Quá hạn thì link là Hết hạn ở KD06.3 (tính lúc đọc từ hạn, Q6) và trang hiện không còn hiệu lực (W36). Gia hạn giữ cùng link.
- **Thu hồi:** vĩnh viễn; publish lại tạo link mới. Hủy yêu cầu thu hồi mọi link Đang mở; mở lại yêu cầu không mở lại link.
- **Bản mới hơn:** khi một phiên bản lớn hơn có link Đang mở cùng ngôn ngữ, link của phiên bản cũ hiện dải và liên kết tới link đó (W37).
- **Khách chỉ xem và tải PDF.** PDF dựng từ trang HTML của proposal, cùng nội dung, cùng ngôn ngữ; việc dựng PDF đi qua hàng đợi (Q5, Q21). Mỗi lần mở trang hoặc tải PDF ghi một lần mở; lượt của người dùng đã đăng nhập TOPAS không tính.
- Publish, gia hạn, thu hồi theo quyền Publish (1.4). Đã có Booking, KD06 mở bình thường: không publish mới; gia hạn, thu hồi được.
- **Ở chế độ điều chỉnh** (quyết định 12/11/2026, rà soát lần hai): publish được proposal của **phiên bản điều chỉnh của Booking** (2.5, R27), theo đúng các quy tắc trên (link riêng mỗi phiên bản, mỗi ngôn ngữ; có hạn; gia hạn; thu hồi vĩnh viễn; số lần mở). Proposal ghi rõ đây là phương án điều chỉnh cho Booking: dòng “Phương án điều chỉnh cho Booking BK-…” (English: “Revised proposal for booking BK-…”) ở đầu trang và PDF, cạnh số phiên bản. Link đã có của phiên bản của Booking giữ nguyên (gia hạn, thu hồi theo các quy tắc trên); dải bản mới hơn áp dụng như thường. Link của phiên bản điều chỉnh không được chuyển (Kinh doanh chuyển phiên bản điều chỉnh mới hơn) giữ nguyên tới khi hết hạn hoặc bị thu hồi. Hủy Booking làm yêu cầu Đã hủy nên mọi link Đang mở bị thu hồi (R20, R21).

### R19. Ghi Chốt và tạo Booking (TN04.01; quyết định 11/11/2026; quyết định rà soát 13/11/2026, Q-RS17)

- **Ghi Chốt là tạo Booking.** Không có nút Tạo Booking riêng, không có chế độ tạo mới của KD08, không có trạng thái phiên bản Chốt chờ tạo Booking.
- Điều kiện: yêu cầu Đang xử lý; không có Booking Hiệu lực của yêu cầu; phiên bản không Đã thay thế (mọi kết quả khác ghi Chốt được, kể cả Chốt của Booking đã hủy khi khách đặt lại đúng phương án đó). Người ghi cần quyền Ghi kết quả (1.4; bỏ quyền Tạo Booking riêng, RSD QT02 Phụ lục A).
- Hộp thoại xác nhận (L6.2, CGD U2.04): nêu những gì Booking kế thừa từ phiên bản (khách, người liên hệ, ngôn ngữ phục vụ, loại Tour, thời gian, số khách, hành trình là bản chụp của phiên bản, giá trị và loại tiền), hồ sơ Tour sẽ được tạo, chính sách hoàn hủy sẽ chụp; ô ghi chú xác nhận của khách. Thông tin này đọc từ phiên bản, không ghi gì cho tới khi xác nhận.
- Xác nhận: **một giao dịch** (Q5) gồm ghi Chốt cho phiên bản (người ghi, ghi chú), tạo Booking Hiệu lực theo phiên bản (RSD KD08 R02, R03: cấp mã, kế thừa, chụp chính sách hoàn hủy), yêu cầu thành Đã có Booking, tạo hồ sơ Tour và thông báo Điều hành (RSD KD08 R08; RSD DH07 R01). Máy chủ kiểm tra lại các điều kiện trên và phiên bản bản ghi trong giao dịch đó; mỗi yêu cầu tối đa một Booking Hiệu lực (E6.4, E6.5). Lỗi một bước thì không ghi gì (E6.13). Mã chống lặp: bấm lặp chỉ tạo một Booking.
- Người phụ trách Booking theo RSD KD08 R11 (là người đang phụ trách yêu cầu, bất kể ai ghi Chốt); khi Booking Hiệu lực, người phụ trách yêu cầu là người phụ trách Booking (R23). Ghi xong, KD08 của Booking mở ở tab Điều khoản và lịch thanh toán với lịch điền sẵn chưa lưu (RSD KD08 L2.1).
- Yêu cầu đã mở lại sau khi Booking bị hủy (R22) tạo Booking mới theo cùng điều kiện, bằng cách ghi Chốt cho một phiên bản: thường là phiên bản mới tính lại (L6.4); khách đặt lại đúng phương án cũ thì ghi Chốt lại cho phiên bản của Booking đã hủy (vẫn Chốt, R20): phiên bản giữ Chốt và là phiên bản của Booking mới. Ghi Chốt cho phiên bản khác không đổi kết quả của phiên bản của Booking đã hủy. Phiên bản Đã thay thế không ghi Chốt được.

### R20. Sau khi có Booking và khi Booking bị hủy (quyết định 12/11/2026)

- Có Booking Hiệu lực, KD06 mở bình thường: KD06.1, KD06.2, KD06.3 chỉ đọc; không tính giá, không ghi kết quả; không hủy yêu cầu; không chuyển phụ trách ở KD06 (người phụ trách theo Booking, R23). Thay đổi chương trình làm ở chế độ điều chỉnh do KD08 mở (R27); Booking chỉ đổi khi bấm Chuyển sang Điều hành ở KD08 (RSD KD08 R09); hồ sơ Tour nhận thay đổi theo RSD DH08 L1.5.
- Booking Hiệu lực duy nhất bị hủy ở KD08: trong cùng giao dịch hủy Booking, yêu cầu tự chuyển **Đã hủy** (R02, R21), lý do “Booking đã hủy”, người hủy là người hủy Booking; thu hồi link Đang mở; phiên bản của Booking **giữ Chốt** (không ghi kết quả mới; người dùng trả lời 13/11/2026), bảng phiên bản ghi kèm “Booking … · Đã hủy”; phiên bản lưu ở chế độ điều chỉnh chưa chuyển giữ Chưa có kết quả. Khách đặt lại thì Mở lại yêu cầu (R22) rồi ghi Chốt (R19).

### R21. Hủy yêu cầu (TN02.05; quyết định 11/11/2026, 12/11/2026)

- **Người dùng hủy:** điều kiện Đang xử lý; không có Booking Hiệu lực; có quyền Hủy yêu cầu (1.4). Lý do từ danh mục QT05 “Lý do hủy yêu cầu Tour” (ví dụ: Khách hoãn hoặc hủy chuyến, Khách chọn đơn vị khác, Giá không phù hợp, Không liên lạc được khách, Khác); ghi chú bắt buộc khi Khác.
- **Tự hủy khi hủy Booking:** khi Booking Hiệu lực của yêu cầu bị hủy ở KD08 (RSD KD08 R10), hệ thống ghi Đã hủy với lý do hệ thống “Booking đã hủy”, ghi chú là mã Booking và lý do hủy Booking, người và thời điểm là người, thời điểm hủy Booking. Không có hộp thoại ở KD06. “Booking đã hủy” là giá trị hệ thống của danh mục, không chọn được ở W43.
- Tác động (cả hai nhánh): Đã hủy; thu hồi link Đang mở; giữ hành trình, phiên bản, kết quả. Hủy không đổi kết quả phiên bản (phiên bản của Booking đã hủy giữ Chốt, R20). Không có trạng thái dừng riêng.

### R22. Mở lại yêu cầu (quyết định 11/11/2026, 12/11/2026)

- Điều kiện: Đã hủy (người dùng hủy hoặc tự hủy khi Booking bị hủy). Người mở lại: người có quyền Mở lại yêu cầu (1.4; mặc định Kinh doanh, Quản trị hệ thống). Hộp thoại có ô Người phụ trách (bắt buộc; Kinh doanh đang hoạt động; điền sẵn người hiện tại nếu còn hoạt động, đổi được).
- Lý do bắt buộc. Yêu cầu về Đang xử lý với dữ liệu như lúc hủy; lịch sử giữ lần hủy và lần mở lại. Không giới hạn số lần mở lại.
- Sau khi mở lại, người dùng báo giá và ghi Chốt để tạo Booking mới như yêu cầu Đang xử lý khác (R19). Booking đã hủy không mở lại được.
- Đổi người phụ trách khi mở lại: thông báo cho người nhận và người cũ; ghi lịch sử và QT03 như R23.

### R23. Chuyển người phụ trách (RSD KD05 R08, KD08 R11; quyết định 12/11/2026)

- Ở KD05, KD06 chỉ chuyển yêu cầu Đang xử lý, theo quyền Chuyển người phụ trách (1.4). Người nhận: Kinh doanh đang hoạt động, khác người hiện tại. Không đổi người phụ trách khách. Chuyển người phụ trách không đổi quyền của ai (Q1).
- **Hoàn tác** (người dùng trả lời 13/11/2026, Q-RS24; CGD U2.02, U2.06): chuyển một yêu cầu qua hộp thoại W46 cũng có Hoàn tác 10 giây trên thông báo ngắn, như chuyển hàng loạt ở KD05 (RSD KD05 R08). Hoàn tác là một lần ghi mới: yêu cầu chưa bị đổi tiếp (chuyển tiếp, hủy, đã có Booking) thì về người phụ trách trước đó, gỡ thông báo của lần chuyển kể cả khi người nhận đã đọc (RSD CH02 R05); đã bị đổi tiếp thì không hoàn tác, thông báo ngắn nêu lý do. Lịch sử yêu cầu và QT03 ghi thêm mục Hoàn tác.
- Yêu cầu Đã có Booking: người phụ trách yêu cầu luôn là người phụ trách Booking. Chuyển người phụ trách Booking ở KD08 thì hệ thống đổi người phụ trách yêu cầu theo trong cùng giao dịch, ghi lịch sử yêu cầu với nguồn “theo Booking BK-…”. KD06 không có mục Chuyển người phụ trách cho yêu cầu này.
- Yêu cầu Đã hủy: không chuyển; đổi người phụ trách khi mở lại (R22).
- Thông báo in-app (Q2) “Bạn được giao yêu cầu YC-…” cho người nhận, bấm mở KD06 ở tab đích (R06); khi người chuyển không phải người phụ trách cũ thì người cũ cũng nhận thông báo. Thông báo ghi trong cùng giao dịch với lần chuyển (Q5). Chuyển theo Booking dùng thông báo của KD08, không gửi thêm. Ghi lịch sử và QT03.

### R24. Đồng thời và lịch sử

- Mọi lưu kiểm tra phiên bản bản ghi của phần đang lưu (khóa lạc quan theo từng bản ghi con); lệch thì xử lý như E2.1, E3.8: chỉ Tải lại, không ghi đè (Q8).
- Thao tác tạo bản ghi (yêu cầu, phiên bản, proposal) có mã chống lặp.
- Lịch sử theo 5.1, xem ở ⋯ → Lịch sử thay đổi (bảng trượt, mới nhất trước, lọc theo loại sự kiện).

### R25. Cấu hình phụ thuộc

| Cấu hình | Chủ sở hữu | Dùng ở đâu | Hành vi khi thiếu |
|---|---|---|---|
| Danh mục hạng mục dịch vụ, gán loại dịch vụ vào hạng mục, Markup mặc định theo hạng mục | Quản trị hệ thống (QT05; gán loại dịch vụ vào hạng mục: Điều hành) | R14 | Ô để trống, dùng Markup chung |
| Danh mục loại Tour và Markup mặc định | Kinh doanh (QT05; Markup mặc định: Quản trị hệ thống) | KD06.1, R14 | Loại Tour: không lưu được yêu cầu; Markup: ô trống, bắt buộc nhập |
| Danh mục hạng phòng | Điều hành (QT05) | KD06.1, KD06.3 | Ô trống, không bắt buộc |
| Danh mục lý do hủy yêu cầu Tour | Kinh doanh (QT05) | R21 | Luôn có giá trị hệ thống Khác và Booking đã hủy (chỉ hệ thống ghi) |
| Bảng tỷ giá theo ngày | QT05 (Kế toán nhập; RSD QT05 R13) | R14 | Ngày tính chưa nhập: dùng tỷ giá có hiệu lực của ngày gần nhất trước đó, ghi ngày lấy tỷ giá; không có ngày nào trước đó: ô tỷ giá trống, bắt buộc nhập (E4.2) |
| Bội số làm tròn giá bán theo loại tiền | Quản trị hệ thống (QT05) | R14 | Làm tròn tới đơn vị nhỏ nhất của loại tiền |
| Loại tiền báo giá mặc định | Quản trị hệ thống (QT05, tham số chung) | 5.2 | USD |
| Bố cục proposal (W33, W36, W37; English, Tiếng Việt; PDF dựng từ trang HTML) và mục mặc định bao gồm, không bao gồm | Dựng sẵn trong hệ thống, không cấu hình trên màn; mục mặc định ở tệp cấu hình hoặc dữ liệu khởi tạo (Q22, C2) | R18 | Luôn có cho English và Tiếng Việt |
| Tên tiếng Anh của thẻ bao gồm, không bao gồm | Điều hành (QT05) | R18 | E5.2 |
| Hạn mặc định của proposal | Quản trị hệ thống (QT05, tham số chung) | R18 | 30 ngày |
| Gateway AI, thời gian chờ | Tệp cấu hình (A1); không có màn cấu hình | R09, R12 | Ẩn thẻ Bằng AI, mục Bằng AI của Tạo lại hành trình, nút Dịch nháp và thanh Sửa bằng AI; thời gian chờ mặc định 60 giây cho mỗi lời gọi (mỗi phương án, mỗi lượt Sửa bằng AI). Số phương án tối đa (3) và số lượt trò chuyện gửi kèm (20) cố định, không cấu hình (bổ sung 25/11/2026) |
| Dịch tự động: bật, chu kỳ, số lần gọi AI tối đa mỗi lần quét | Tệp cấu hình `autoTranslation` (ticket 106) | R12 | Bật, 10 phút, 20 lần gọi; không có gateway AI thì không chạy |
| Ngôn ngữ của dịch vụ Hướng dẫn viên (RSD DH03 v1.4 chỉ có Ngôn ngữ giao dịch của NCC, không có trường này và không thêm; chấp nhận mặc định, Q3) | Điều hành (DH03) | R10 | Không cảnh báo lệch ngôn ngữ |

### R26. Ngân sách của khách

- Trường không bắt buộc của yêu cầu: **từ**, **đến** (nhập một hoặc cả hai đầu), **loại tiền**, **cách tính** Mỗi khách hoặc Cả đoàn. Form ghi giá trị tương đương theo cách tính còn lại (tổng = mỗi khách × số khách, gồm cả trẻ em).
- Hiện ở phần đầu mọi tab. Không lặp trong tab, trừ dải so sánh ở KD06.3.
- **So sánh** ở mỗi lần tính giá (W28), mỗi dòng phiên bản (W26) và bảng trượt phiên bản (W31, W38): bình quân mỗi khách = tổng giá bán ÷ (người lớn + trẻ em) khi ngân sách tính Mỗi khách; tổng giá bán khi Cả đoàn. Ngân sách khác loại tiền báo giá thì quy đổi qua VND theo tỷ giá của chính phiên bản.
- Kết quả: **trong ngân sách** (giữa từ và đến, hoặc ≤ đến khi chỉ có đến), **vượt ngân sách x %** (so với đến), **dưới ngân sách x %** (so với từ, khi có từ). Chỉ là chỉ báo màu, không chặn lưu, publish hay tạo Booking.
- Khi còn khoản thiếu giá: “chưa so được” (W29). Không có ngân sách: không hiện so sánh.
- Ngân sách là dữ liệu nội bộ: không hiện trên proposal, PDF; gửi cho AI làm tiêu chí (R09).

### R27. Chế độ điều chỉnh (quyết định 12/11/2026; RSD KD08 R09)

- **Mở:** chỉ từ Điều chỉnh chương trình ở KD08, khi Booking Hiệu lực và hồ sơ Tour chưa có, Mới tạo hoặc Đang diễn ra (điều kiện của KD08). Người dùng cần quyền Điều chỉnh chương trình ở KD08 và quyền sửa KD06 (1.4), không cần là người phụ trách (Q1). Yêu cầu giữ trạng thái Đã có Booking. Mở KD06 bằng lối vào khác thì chỉ xem (R20).
- **Phiên bản điều chỉnh của Booking** (định nghĩa dùng chung với RSD KD08 R09): phiên bản lưu ở chế độ điều chỉnh mở từ chính Booking này (nhãn “Điều chỉnh cho BK-…” với mã của Booking), lưu sau lần tạo Booking hoặc lần Chuyển sang Điều hành gần nhất của Booking, Chưa có kết quả. Phiên bản khác của yêu cầu, kể cả số lớn hơn phiên bản của Booking (E6.7) hay mang nhãn của Booking đã hủy trước đó, không phải phiên bản điều chỉnh của Booking.
- **Hành trình bắt đầu:** Booking chưa có phiên bản điều chỉnh (lần đầu vào, hoặc lần đầu sau một lần Chuyển sang Điều hành) thì hành trình hiện hành được nạp từ bản chụp của phiên bản của Booking (bản đang lưu, nếu khác, giữ trong lịch sử như L3.6); đã có thì tiếp tục từ hành trình đang lưu (thường là của phiên bản điều chỉnh mới nhất), không hỏi.
- **Được làm:** sửa thông tin yêu cầu (trừ khách), hành trình, nội dung tiếng Anh; tính giá, Sửa giá, lưu phiên bản; publish proposal của phiên bản điều chỉnh của Booking, gia hạn, thu hồi link (R18; quyết định 12/11/2026, rà soát lần hai). Lưu hành trình ở chế độ này là **Lưu và tính giá**: hệ thống lưu rồi tự tính giá theo R13, R14 với điều kiện điền sẵn từ phiên bản điều chỉnh mới nhất của Booking, chưa có thì từ phiên bản của Booking (số khách, tuổi trẻ em, phòng, ngày khởi hành lấy theo thông tin yêu cầu nếu đã sửa sau phiên bản đó) và mở kết quả; người dùng bấm Lưu phiên bản. Loại tiền báo giá khóa theo loại tiền của Booking (RSD KD08 R09: đổi loại tiền thì hủy Booking và tạo Booking mới).
- **Phiên bản mới:** Chưa có kết quả, nhãn “Điều chỉnh cho BK-…”; không đổi Booking, không đổi phiên bản Chốt.
- **Booking chỉ đổi khi Chuyển sang Điều hành** (quyết định rà soát 13/11/2026, Q-RS18). Sửa thông tin yêu cầu (thời gian, số khách, phòng) và lưu phiên bản điều chỉnh ở chế độ này chỉ đổi yêu cầu và phiên bản; thời gian, số khách và cơ cấu, giá trị, hành trình của Booking giữ theo phiên bản của Booking cho tới khi Kinh doanh bấm Chuyển sang Điều hành (RSD KD08 R09). Trong lúc đó yêu cầu và Booking có thể khác nhau: KD05, KD07, KD08 hiện số của Booking (RSD KD05 R03, R15); KD06 hiện số của yêu cầu, dải tím ghi thêm “Booking vẫn theo vN: <thời gian> · <số khách>” khi khác. Rời chế độ điều chỉnh mà không chuyển thì yêu cầu giữ số đã sửa (E6.12).
- **Không làm:** ghi kết quả, tạo Booking, publish proposal của phiên bản không phải phiên bản điều chỉnh của Booking, hủy yêu cầu, chuyển người phụ trách. Gia hạn, thu hồi link cũ vẫn được (R18).
- **Kết thúc:** Về Booking ở phần đầu trả về KD08. Chuyển sang Điều hành ở KD08 tự ghi Chốt cho phiên bản điều chỉnh mới nhất của Booking, gắn vào Booking, phiên bản cũ thành Đã thay thế (R17). Không có lúc hai phiên bản cùng Chốt.
- Máy chủ kiểm tra lại điều kiện mở ở mọi thao tác ghi; không còn đủ thì từ chối (E6.10).

---

## 5. Dữ liệu

### 5.1. Đối tượng dữ liệu

| Đối tượng | Khóa | Dữ liệu chính | Nguồn hoặc tác động |
|---|---|---|---|
| Yêu cầu Tour | Mã yêu cầu (R03) | Khách, người liên hệ, ngôn ngữ phục vụ, loại Tour, mong muốn, kiểu thời gian (đã chốt ngày, tháng dự kiến), ngày đi, ngày về hoặc tháng, số ngày; số người lớn, số trẻ em, tuổi từng trẻ; hạng phòng, số phòng đơn (kể cả phòng đơn tự xếp, R04), số giường phụ (bổ sung 12/11/2026); ngân sách (từ, đến, loại tiền, Mỗi khách hoặc Cả đoàn); người phụ trách; người tạo; thời điểm tạo; trạng thái hủy (lý do, ghi chú, người, thời điểm, nguồn: người dùng hủy hoặc hủy Booking kèm mã Booking); phiên bản bản ghi | KD06.1 ghi; KD08 ghi dấu hủy khi hủy Booking và người phụ trách khi chuyển Booking (R21, R23); KD05, KD04.3, QT08 đọc |
| Hành trình | ID yêu cầu (một hành trình hiện hành) | Tên hành trình (tiếng Việt, tiếng Anh; điền sẵn tên Tour mẫu khi sao chép hoặc tên AI đề xuất; trống thì proposal ghi loại Tour và số ngày); nguồn tạo (Tour mẫu mã nào, Thủ công, Bằng AI), danh sách ngày, thời điểm lưu, người lưu, phiên bản bản ghi | KD06.2 |
| Ngày | ID ngày | Thứ tự, tiêu đề, nội dung (tiếng Việt), tiêu đề và nội dung tiếng Anh, tình trạng tiếng Anh (chưa có, nháp, đã kiểm tra), nguồn (Tour mẫu và số ngày nguồn, AI) | KD06.2 |
| Dòng dịch vụ | ID dòng | ID dịch vụ DH03 (trống nếu chưa gán NCC), tên đề xuất của AI, cách tính số lượng, số lượng cố định, ghi chú, thứ tự | KD06.2; giá đọc DH03 |
| Đi kèm của dòng (bổ sung 12/11/2026) | ID dòng + ID dịch vụ đi kèm | ID dịch vụ đi kèm DH03 (thuộc dịch vụ của dòng, RSD DH03 R23), cách tính số lượng (Cố định, Theo số khách, Theo số giường phụ), số lượng cố định, thứ tự | KD06.2 (R07); giá đọc DH03 |
| Phiên bản báo giá | ID yêu cầu + số phiên bản | Bản chụp hành trình (ngày, dòng dịch vụ, đi kèm của dòng), điều kiện (người lớn, tuổi trẻ em, hạng phòng, phòng đơn, giường phụ, số phòng đôi, số phòng, ngày khởi hành), loại tiền, tỷ giá chụp lúc tính kèm ngày lấy tỷ giá và nguồn (Q10), Markup chung, Markup theo hạng mục dịch vụ và nguồn, quy tắc làm tròn, từng khoản (hợp đồng, mùa, loại ngày, dòng giá, số lượng, đơn giá gốc, loại tiền gốc, nhập tay và ghi chú, quy đổi, hạng mục và Markup áp dụng; với khoản đi kèm: ID dịch vụ đi kèm và ID dòng dịch vụ chính), giá vốn và giá bán theo đối tượng, tổng giá bán, tổng giá vốn; người lưu, thời điểm; Booking được điều chỉnh (khi lưu ở chế độ điều chỉnh, R27) | KD06.3 ghi một lần; KD05, KD04.3, KD08, QT08, QT09 đọc |
| Kết quả phiên bản | ID phiên bản | Giá trị (R17), ghi chú, người ghi, thời điểm, nguồn (người dùng ghi, ghi Chốt kèm tạo Booking, Chuyển sang Điều hành); Booking của phiên bản Chốt (kể cả Booking đã hủy); lịch sử thay đổi | KD06.3 ghi (Chốt cùng giao dịch tạo Booking, R19); KD08 ghi Chốt, Đã thay thế khi Chuyển sang Điều hành (R17); hủy Booking không đổi kết quả (R20) |
| Proposal | ID phiên bản + ngôn ngữ + số lần publish | Mã link (ngẫu nhiên, không đoán được), ngôn ngữ, hạn, bao gồm, không bao gồm, mã Booking được điều chỉnh (khi publish phiên bản điều chỉnh của Booking ở chế độ điều chỉnh, R18), bản chụp nội dung hiển thị, tệp PDF đã dựng (kho tệp, Q21), trạng thái lưu (Đang mở, Đã thu hồi; Hết hạn tính lúc đọc, Q6), người publish, thời điểm, người thu hồi, số lần mở, lần mở gần nhất | KD06.3 ghi; trang proposal đọc |
| Lần mở proposal | ID proposal + thời điểm | Thời điểm, loại (xem, tải PDF); không lưu địa chỉ IP đầy đủ | Trang proposal ghi |
| Lịch sử yêu cầu | ID yêu cầu + thời điểm | Sự kiện (tạo, sửa trường, lưu hành trình (kèm dấu “có sửa bằng AI” khi lần lưu có thay đổi từ khung chat, L3.10), tạo lại hành trình kèm bản cũ, lưu phiên bản, kết quả, Chuyển sang Điều hành, publish, gia hạn, thu hồi, hủy, tự hủy do hủy Booking, mở lại, chuyển phụ trách, chuyển phụ trách theo Booking), người, giá trị cũ và mới | KD06 ghi; ⋯ Lịch sử thay đổi |
| Khách hàng (đọc, tạo nhanh) | Mã khách hàng | Theo RSD KD03-KD04 | KD04 sở hữu |
| Booking (đọc) | Mã Booking | Trạng thái, ID phiên bản hiện hành, người phụ trách, loại tiền | KD08 sở hữu |

### 5.2. Trường nhập

| Form | Trường | Bắt buộc | Mặc định hoặc điền sẵn | Kiểm tra |
|---|---|---|---|---|
| KD06.1 | Khách hàng | Có | Từ KD04 khi mở từ KD04 | Chọn từ hộp thoại tìm; không đổi khi đã có phiên bản |
| KD06.1 | Người liên hệ | Không | Liên hệ chính (doanh nghiệp) | Thuộc khách đã chọn |
| KD06.1 | Ngôn ngữ phục vụ | Có | Ngôn ngữ giao tiếp của khách | Danh mục ngôn ngữ (QT05) |
| KD06.1 | Loại Tour | Có | Trống | Danh mục QT05 đang dùng |
| KD06.1 | Mong muốn | Có | Trống | 1–2.000 ký tự |
| KD06.1 | Thời gian | Có | Đã chốt ngày | Ngày về ≥ ngày đi; ngày đi ≥ hôm nay khi tạo mới; số ngày 1–60. Tháng dự kiến: tháng ≥ tháng hiện tại, số ngày 1–60 |
| KD06.1 | Người lớn | Có | Trống | 1–500 |
| KD06.1 | Trẻ em, tuổi | Không | 0 | 0–100; số tuổi = số trẻ; tuổi 0–17 (tuổi khi đi Tour; dùng làm tuổi tại ngày sử dụng dịch vụ, R13) |
| KD06.1 | Hạng phòng | Không | Trống | Danh mục QT05 |
| KD06.1 | Phòng đơn | Không | 0; tự cộng 1 khi còn người lớn lẻ, có ghi chú (R04, Q13') | 0 ≤ phòng đơn ≤ người lớn |
| KD06.1 | Giường phụ (bổ sung 12/11/2026; giường cho trẻ em, sửa 18/11/2026) | Không | 0 | Số nguyên ≥ 0; không quá số trẻ em (lỗi “Giường phụ không quá số trẻ em”, chặn lưu, chặn tính); nhiều hơn số phòng đôi thì cảnh báo, vẫn lưu và tính (R04, E4.12) |
| KD06.1 | Ngân sách của khách | Không | Trống; loại tiền theo loại tiền báo giá mặc định; Mỗi khách | Số ≥ 0; có ít nhất một đầu khi nhập; từ ≤ đến; loại tiền trong danh mục |
| KD06.2 | Tên hành trình (tiếng Việt, tiếng Anh) | Không | Tên Tour mẫu khi sao chép; tên AI đề xuất | ≤ 150 ký tự |
| KD06.2 | Tiêu đề ngày | Không (để trống được, như Tour mẫu) | Từ nguồn | ≤ 150 ký tự |
| KD06.2 | Nội dung ngày | Không khi lưu; cần trước khi tính giá | Từ nguồn | ≤ 4.000 ký tự |
| KD06.2 | Số lượng dòng | Có | Theo đơn vị tính (RSD KD01-KD02 R05) | Cố định: số nguyên ≥ 1 |
| KD06.2 | Số lượng đi kèm (bổ sung 12/11/2026) | Có | Giường phụ: Theo số giường phụ; đi kèm khác: theo đơn vị tính (R07) | Cố định: số nguyên ≥ 1 |
| Tạo bằng AI (W19) | Số phương án (bổ sung 25/11/2026) | Có | 1; Tạo lại với tiêu chí khác giữ số của lần trước | 1, 2 hoặc 3 |
| Sửa bằng AI (W54) | Tin nhắn (bổ sung 25/11/2026) | Có khi gửi | Trống; gợi ý nhanh điền vào ô | 1–1.000 ký tự sau khi bỏ khoảng trắng đầu cuối; Gửi khóa khi trống hoặc đang chờ AI |
| KD06.3 | Người lớn, trẻ em, tuổi, hạng phòng, phòng đơn, giường phụ | Như KD06.1 | Từ phiên bản trước hoặc yêu cầu | Như KD06.1; không ghi ngược về yêu cầu |
| KD06.3 | Ngày khởi hành | Có | Ngày đi của yêu cầu | Ngày hợp lệ |
| KD06.3 | Loại tiền báo giá | Có | Phiên bản trước; nếu chưa có: loại tiền mặc định của cấu hình | Danh mục loại tiền; ở chế độ điều chỉnh khóa theo loại tiền của Booking (R27) |
| KD06.3 | Markup chung | Có | Mặc định theo loại Tour (QT05) | 0–300 %, tối đa 2 chữ số thập phân |
| KD06.3 | Markup theo hạng mục dịch vụ | Không | Mặc định của hạng mục (QT05); trống thì dùng Markup chung | Như Markup chung |
| KD06.3 | Tỷ giá từng loại tiền | Có | Tỷ giá có hiệu lực của ngày bấm Tính giá (QT05; ghi ngày lấy tỷ giá, R14, Q10) | > 0 |
| KD06.3 | Giá nhập tay | Có với khoản thiếu | Trống | ≥ 0; loại tiền; ghi chú nguồn giá bắt buộc |
| Publish | Ngôn ngữ | Có | English nếu ngôn ngữ phục vụ khác Tiếng Việt | English, Tiếng Việt |
| Publish | Hạn hiệu lực | Có | Hôm nay + 30 ngày | ≥ hôm nay |
| Publish | Bao gồm, không bao gồm | Không | Tổng hợp (R18) | Mỗi mục ≤ 200 ký tự |
| Chốt và tạo Booking (hộp thoại, R19) | Ghi chú xác nhận của khách | Không | Ghi chú phản hồi đang có của phiên bản | ≤ 1.000 ký tự |
| Hủy yêu cầu | Lý do, ghi chú | Lý do có; ghi chú khi Khác | Trống | Danh mục QT05 |
| Mở lại | Lý do; người phụ trách | Có | Lý do trống; người phụ trách là người hiện tại nếu còn hoạt động | Người phụ trách: Kinh doanh đang hoạt động (R22) |
| Chuyển phụ trách | Người nhận; ghi chú | Người nhận có | Trống | Kinh doanh đang hoạt động, khác người hiện tại |

### 5.3. Dữ liệu gửi ra ngoài

| Tài liệu | Người nhận | Nội dung | Lúc gửi thật | Dữ liệu lưu lại |
|---|---|---|---|---|
| Proposal (trang web theo W33 và PDF dựng từ trang đó) English hoặc Tiếng Việt | Người có link (Kinh doanh tự gửi cho khách) | Phần cố định của proposal và các trường dữ liệu ở R18: tên khách và người liên hệ, tên hành trình, thời gian, số khách, lịch trình theo ngày, giá bán theo đối tượng và tổng, bao gồm, không bao gồm, hạn, người phụ trách và email công việc; dòng “Phương án điều chỉnh cho Booking BK-…” khi publish ở chế độ điều chỉnh (R18). Không có giá vốn, Markup, tỷ giá, NCC (trừ tên khách sạn trong nội dung ngày nếu có), email, điện thoại của khách | Khi bấm Publish; link chỉ ra ngoài khi người dùng tự gửi | Bản chụp nội dung, ngôn ngữ, hạn, mã link, người, thời điểm, trạng thái, lần mở |
| PDF của proposal | Người mở link | Như proposal | Khi khách bấm Download PDF | Lần tải |
| Yêu cầu tới dịch vụ AI (tạo hành trình một hoặc nhiều phương án, Sửa bằng AI, dịch nháp) | Gateway AI riêng, cấu hình ở tệp, gọi qua hàng đợi (A1, Q5) | Theo R09, R12 (gồm ngân sách); Sửa bằng AI gửi thêm hành trình đang trên lưới và tin nhắn nguyên văn của người dùng cùng các lượt trước trong phiên; không có dữ liệu cá nhân của khách do hệ thống thêm, không có giá NCC | Khi bấm Tạo đề xuất hoặc Tạo n phương án (mỗi phương án một lời gọi), Gửi ở khung Sửa bằng AI, Dịch nháp; Dịch tự động mỗi 10 phút (ticket 106) | Nhật ký lần gọi; không lưu phương án không được chọn, không lưu lịch sử trò chuyện; Dịch tự động: nhật ký hệ thống `AUTO_TRANSLATION` |

---

## 6. Tiêu chí nghiệm thu


| Mã | Điều kiện và thao tác | Kết quả kiểm chứng |
|---|---|---|
| AC01 | Bấm Tạo yêu cầu ở KD05 | KD06 tạo mới, tab Thông tin yêu cầu; Hành trình, Báo giá khóa; Lưu khóa đến khi có khách; người phụ trách là người tạo (W01) |
| AC02 | Tìm “müller” | Hiện Müller Reisen GmbH và Thomas Müller; dòng doanh nghiệp ghi 1 yêu cầu đang xử lý do Nguyễn Hoàng Nam phụ trách (W02) |
| AC03 | Tìm theo email người liên hệ | Khách doanh nghiệp của người liên hệ đó hiện trong kết quả |
| AC04 | Chọn khách doanh nghiệp | Người liên hệ là liên hệ chính, ngôn ngữ phục vụ là ngôn ngữ giao tiếp, có nhãn nguồn; ghi chú khách hiện làm gợi ý (W05) |
| AC05 | Tìm “bianchi” không có kết quả, nhập form, bấm Tạo và gắn | Khách KH-00142 tạo ở KD03 với người phụ trách là người tạo; gắn vào yêu cầu; yêu cầu chưa lưu (W03, W05) |
| AC06 | Tạo nhanh khách có điện thoại trùng KH-00097 | Hộp thoại trùng; Dùng hồ sơ này gắn KH-00097; Vẫn tạo bắt buộc lý do (W04) |
| AC07 | Lưu thiếu mong muốn, ngày về trước ngày đi, thiếu 1 tuổi trẻ em | Không lưu; banner “còn 3 lỗi”; lỗi cạnh trường; dữ liệu giữ (W06) |
| AC08 | Lưu hợp lệ | Mã YC-YYMM-NNNN tăng dần; Đang xử lý; tab mở; KD05 hiện ở chip Đang xử lý (W07) |
| AC09 | Bấm Lưu và lập báo giá | Lưu rồi mở tab Hành trình W13 |
| AC10 | Mở KD06 từ KD04 Tạo yêu cầu Tour | Khách, liên hệ chính, ngôn ngữ điền sẵn; bấm Hủy không tạo yêu cầu |
| AC11 | Mở yêu cầu có phiên bản từ KD05 | Mở tab Báo giá; chưa có hành trình mở Thông tin; có hành trình chưa có phiên bản mở Hành trình |
| AC12 | Đổi ngày đi từ 10/03 sang 12/03/2027 khi đã có hành trình | Ngày 1 thành 12/03, mọi ngày dời 2 ngày; phiên bản đã lưu không đổi |
| AC13 | Đổi người lớn 14 → 16 | Dòng Theo số khách thành 18, Theo số phòng thành 8 |
| AC14 | Ô Khách hàng khi đã có phiên bản | Khóa, ghi lý do (W08) |
| AC15 | Lưu khi bản ghi vừa được lưu ở cửa sổ khác | Không ghi đè; hiện trường lệch; chỉ có nút Tải lại (W10, Q8) |
| AC16 | Lê Thu Hà (Kinh doanh) mở yêu cầu do Nguyễn Hoàng Nam phụ trách | Sửa, Tính giá, Hủy yêu cầu được như người phụ trách; không có dòng “Chỉ xem”; phần đầu vẫn ghi Phụ trách Nguyễn Hoàng Nam (Q1) |
| AC17 | Điều hành mở đường dẫn KD06 | Trang không có quyền |
| AC18 | Rời tab có thay đổi chưa lưu | Hộp thoại ba lựa chọn (W09) |
| AC19 | Chọn Tour mẫu | Chỉ mẫu Đang dùng; lọc sẵn loại Tour; TM-008 có nhãn gần số ngày nhất; cảnh báo 8/10 ngày (W14) |
| AC20 | Sao chép TM-008 | 8 ngày từ 10/03/2027; 21 dịch vụ; số lượng theo 16 khách, 7 phòng; không có giá; dải lệch ngày; Hoàn tác; chưa lưu (W15) |
| AC21 | Sửa TM-008 ở KD02 sau khi sao chép | Hành trình của yêu cầu không đổi |
| AC22 | Ghép Ngày 1, 2 của TM-010, chèn trước Ngày 8 | Ngày 8, 9 mới có nhãn nguồn; Ngày 8 cũ thành Ngày 10; 27 dịch vụ (W16, W17) |
| AC23 | Ghép với cách Thay ngày cho Ngày 3 | Ngày 3 được thay; số ngày không đổi |
| AC24 | Tour mẫu bị tắt khi đang mở hộp thoại | Sao chép bị từ chối với thông báo (E3.2) |
| AC25 | Tạo 10 ngày trống | 10 ngày có ngày tháng; số trên tab 10; Lưu và tính giá khóa (W48) |
| AC26 | Thêm HDV tiếng Ý vào Ngày 4–9 | 6 dòng mới, mỗi ngày một dòng, Cố định · 1 (W18) |
| AC27 | Dòng HDV tiếng Đức trong yêu cầu Tiếng Ý (DH03 không có trường ngôn ngữ của dịch vụ HDV, R10) | Không có nhãn Khác ngôn ngữ phục vụ; không chặn |
| AC28 | Tạo bằng AI | Bảng trượt điền sẵn từ yêu cầu; đề xuất hiện trên lưới chưa lưu; dịch vụ chưa khớp có nhãn; Bỏ đề xuất trả hành trình trước (W19, W20) |
| AC29 | Dữ liệu gửi AI | Không chứa tên, email, điện thoại khách; nhật ký ghi lần gọi |
| AC30 | AI quá 60 giây | Hành trình không đổi; Thử lại, Chọn cách khác (W21) |
| AC31 | Tạo lại hành trình khi đã có | Không có hộp thoại xác nhận; thông báo nêu số ngày, dịch vụ sẽ bị thay khi lưu, có Hoàn tác; Hoàn tác hoặc Hủy thay đổi trả hành trình cũ (W22, U2) |
| AC32 | Lưu hành trình sau v2 | Dải “đã sửa sau v2” ở Hành trình và Báo giá; dòng Đã đổi; nút Tính giá → (W23) |
| AC33 | Hành trình có dịch vụ NCC Ngừng dùng | Số trên tab 1; dòng đỏ; Tính giá khóa có lý do; đổi dịch vụ xong mở (W24) |
| AC34 | Dịch nháp tiếng Anh Ngày 5 | Ô tiếng Anh có nhãn Dịch nháp; không đổi chỉ báo khác báo giá (W25) |
| AC35 | Tính giá lần 3 của Müller (dữ liệu ví dụ A, `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`) | Điền sẵn từ v2; phòng đơn 2 cộng 1 tự xếp thành 3, 10 phòng đôi, 13 phòng (R04); Markup 15 % mặc định Inbound đoàn, Vé máy bay 5 %; tỷ giá EUR 27.450 ₫, USD 25.380 ₫ từ bảng ngày 11/11/2026 (W27) |
| AC36 | Kết quả tính | Giá vốn 45.222,82 EUR; NL 1.990, TE 780, phụ thu phòng đơn 1.460 × 3; tổng 51.710 EUR; lãi gộp 6.487,18 EUR (W28; ví dụ A) |
| AC37 | Khoản thiếu hợp đồng cho 19/03/2027 | Đánh dấu, nhập tay có ghi chú; giá bán “—”; Lưu khóa đến khi đủ; không dùng hợp đồng khác (W29) |
| AC38 | Khách sạn qua nhiều mùa | Từng đêm tính theo mùa và loại ngày của đêm đó (R13) |
| AC39 | Trẻ em 8 và 10 tuổi | Giá theo nhóm tuổi 6–11 của hợp đồng từng dịch vụ (đơn giá trẻ em của dòng, Q-RS05); dòng căn cứ khách, phòng không có giá trẻ em là khoản thiếu; dòng căn cứ đoàn, đơn vị không có giá trẻ em (ô khóa) nên không thiếu (Q-RS02) |
| AC40 | Lưu v3 | v3 Mới nhất, Chưa có kết quả, Chưa publish; phần đầu “v3 · Chưa có kết quả”; số tab 3; dải đã sửa biến mất (W30) |
| AC41 | Sửa bảng giá DH03 sau khi lưu v3 | v3 không đổi |
| AC42 | Bấm Lưu phiên bản hai lần | Chỉ một phiên bản |
| AC43 | Publish English v3 | Hộp thoại điền sẵn English, hạn 11/12/2026, bao gồm và không bao gồm tổng hợp; link tạo và sao chép; bảng trượt hiện link, hạn, Gia hạn, Thu hồi (W32, W34) |
| AC44 | Khách mở link | Không cần đăng nhập; nội dung tiếng Anh; giá theo đối tượng; Download PDF cùng nội dung; số lần mở tăng (W33) |
| AC45 | Người dùng KD06 bấm Mở proposal | Số lần mở không tăng |
| AC46 | Publish English khi Ngày 11, 12 chưa có tiếng Anh | Chặn; nhập hoặc dịch nháp tại chỗ; nội dung lưu vào hành trình (W35) |
| AC47 | Thu hồi link, hoặc quá hạn | Trang không hiện giá, chỉ cách liên hệ (W36) |
| AC48 | Gia hạn link hết hạn | Cùng link mở lại tới hạn mới |
| AC49 | Mở link v2 sau khi publish v3 cùng ngôn ngữ | Dải bản mới hơn, liên kết tới v3 (W37) |
| AC50 | Ghi Cần điều chỉnh cho v2 | Lưu ngay; nút chính Sửa hành trình; phần đầu, KD05 cập nhật (W38) |
| AC51 | Sửa giá từ v1 | Tính giá điền sẵn từ v1; phiên bản mới là v4 |
| AC53 | Chọn Chốt cho v3 (yêu cầu Đang xử lý, chưa có Booking) | Hộp thoại “Chốt v3 và tạo Booking?” nêu khách, thời gian, số khách, giá trị của v3 mà Booking sẽ kế thừa; bấm Quay lại thì không ghi gì, v3 giữ kết quả cũ, không có Booking. Bấm Chốt và tạo Booking thì trong một lần ghi: v3 Chốt, Booking BK-… Hiệu lực theo v3, hồ sơ Tour được tạo, yêu cầu Đã có Booking; KD08 của Booking mở ở tab lịch thanh toán. Không có nút Tạo Booking ở đâu trên KD06 (W40; R17, R19; Q-RS17) |
| AC54 | Sau AC53, mở lại KD06 | KD06 Đã có Booking; Mở Booking; Hủy yêu cầu khóa có lý do; chỉ đọc; không có Tính giá; dải nói thay đổi chương trình bấm Điều chỉnh chương trình ở Booking (W42) |
| AC55 | Hai người cùng mở bảng trượt v3 của một yêu cầu Đang xử lý; người thứ nhất ghi Chốt, người thứ hai ghi Chốt sau | Người thứ hai bị từ chối, báo Booking đã có kèm liên kết mở Booking đó; yêu cầu chỉ có một Booking; không ghi gì thêm (E6.4) |
| AC56 | Hủy Booking duy nhất ở KD08 | Yêu cầu tự Đã hủy, lý do “Booking đã hủy” kèm mã và lý do hủy Booking; phiên bản của Booking giữ Chốt, kèm “Booking … · Đã hủy”; link đang mở bị thu hồi; nút Mở lại yêu cầu; KD05 ở chip Đã hủy (W47, R20) |
| AC57 | Hủy yêu cầu chưa có Booking, lý do Khách hoãn | Đã hủy; dải xám; link đang mở bị thu hồi; KD05 chip Đã hủy có lý do (W43, W44) |
| AC58 | Hủy khi có Booking Hiệu lực | Nút khóa có lý do; API từ chối (E7.1) |
| AC59 | Mở lại YC-2611-0028 với lý do | Đang xử lý; dữ liệu giữ; link không tự mở lại; lịch sử có hai sự kiện (W45) |
| AC60 | Mở lại yêu cầu Đã hủy và đổi người phụ trách (người cũ còn hoặc đã ngừng hoạt động) | Ô Người phụ trách bắt buộc, điền sẵn người hiện tại nếu còn hoạt động; người đã ngừng hoạt động không có trong danh sách chọn; khi đổi, người nhận và người cũ nhận thông báo (R22) |
| AC61 | Chuyển YC-2611-0031 cho Lê Thu Hà | Phần đầu ghi Phụ trách Lê Thu Hà; người nhận nhận thông báo; quyền của người chuyển không đổi; người phụ trách khách không đổi (W46) |
| AC62 | Lỗi tải hồ sơ | Không hiện dữ liệu cũ; Thử lại (W12) |
| AC63 | Nhập ngân sách đến 2.000 EUR Mỗi khách cho 16 khách | Gợi ý “Tương đương 32.000 EUR cả đoàn”; phần đầu ghi “Ngân sách đến 2.000 EUR/khách” (W05, W07) |
| AC64 | Nhập từ 2.200 đến 2.000 | Lỗi “Từ phải nhỏ hơn hoặc bằng Đến”, không lưu |
| AC65 | Tính giá v3 với ngân sách đến 2.100 EUR/khách | Dải ghi bình quân 2.068,40 EUR/khách (51.710 ÷ 25), thấp hơn 31,60 EUR, trong ngân sách; v2 2.110 vượt 0,5 %, v1 2.164 vượt 3,0 % (W26, W28, W38) |
| AC66 | Ngân sách bằng USD, báo giá bằng EUR | So sánh sau khi quy đổi theo tỷ giá của lần tính; dải ghi tỷ giá đã dùng |
| AC67 | Yêu cầu không có ngân sách | Phần đầu “Ngân sách —”; không có dải và nhãn so sánh |
| AC68 | Proposal của phiên bản vượt ngân sách | Không hiện ngân sách hay so sánh |
| AC69 | Markup chung 15 %, hạng mục Vé máy bay 5 % (mặc định), Hướng dẫn viên đặt 20 % ở W27 | Khoản vé máy bay ghi “5 % · Vé máy bay”, HDV “20 % · Hướng dẫn viên”, xe “15 % · Di chuyển (chung)”; NL 1.990, TE 780, phòng đơn 1.460, tổng 51.710 EUR; Markup bình quân 14,3 % (W27, W28; ví dụ A) |
| AC70 | Xóa Markup của hạng mục Hướng dẫn viên | Các khoản HDV về 15 % · chung; giá bán tính lại khi bấm Tính giá |
| AC71 | Bảng giá vốn ở W28 | Không có ô sửa Markup trên từng khoản; muốn đổi thì Sửa điều kiện |
| AC72 | Publish v3 | Proposal theo bố cục W33 và ngôn ngữ đã chọn; các trường dữ liệu ở R18 được điền đúng; PDF dựng từ trang HTML, cùng nội dung (Q21, Q22) |
| AC73 | Ở bảng trượt Tính giá, chọn Theo dịch vụ | Dịch vụ gom theo hạng mục; Lưu trú 31.608,11 → 36.349,33, Vé máy bay 3.418,26 → 3.589,17 (5 %), Hướng dẫn viên 764,96 → 917,95 (20 %); tổng 36 dịch vụ, 45.222,82 → 51.702,67, sau làm tròn 51.710 (W49; ví dụ A) |

| AC74 | Dịch vụ dùng nhiều ngày (HDV tiếng Đức 14 ngày) | Một dòng: Ngày 1–14, 14 đoàn/ngày, tổng giá vốn và giá bán của cả 14 ngày |
| AC75 | Mở phiên bản v3 đã lưu, bấm Xem giá vốn từng khoản | Bảng chỉ đọc, chọn được Theo ngày và Theo dịch vụ; số liệu bằng lúc lưu |
| AC76 | Mở lại YC-2610-0031 sau khi Booking BK-2611-0149 bị hủy, tính v4, ghi Chốt v4 | Yêu cầu Đang xử lý sau khi mở lại; v3 vẫn Chốt kèm “Booking BK-2611-0149 · Đã hủy”, không đổi được sang Cần điều chỉnh, Không chốt; ghi Chốt v4 tạo ngay Booking mới từ v4, không hỏi và không đổi kết quả của v3; v3 và v4 cùng Chốt, mỗi phiên bản của một Booking; yêu cầu Đã có Booking (R17, R19, R20) |
| AC77 | Bấm Điều chỉnh chương trình ở KD08 của BK-2611-0158 | KD06 mở tab Hành trình ở chế độ điều chỉnh; dải tím; nút Về Booking; không có Hủy yêu cầu; hành trình là bản của v3; chân trang Lưu và tính giá (W50) |
| AC78 | Thêm Ca Huế ở Ngày 5, bấm Lưu và tính giá, Lưu phiên bản | Bảng trượt kết quả tự mở, loại tiền EUR khóa; v4 Mới nhất, Chưa có kết quả, nhãn “Điều chỉnh cho BK-2611-0158”, Chưa publish; v3 vẫn Chốt, gắn Booking, giữ link English; không có nút chọn kết quả; có nút Publish proposal (W51) |
| AC79 | Bấm Chuyển sang Điều hành ở KD08 sau AC78 | v4 Chốt, gắn BK-2611-0158; v3 Đã thay thế; chỉ một phiên bản Chốt; yêu cầu vẫn Đã có Booking |
| AC80 | Mở KD06 từ KD05 khi có Booking Hiệu lực | Chỉ xem; không có lối vào chế độ điều chỉnh ở KD06 (E6.9) |
| AC81 | Quản trị chuyển người phụ trách BK-2611-0158 cho Lê Thu Hà ở KD08 | Người phụ trách yêu cầu YC-2611-0019 thành Lê Thu Hà; lịch sử ghi “theo Booking BK-2611-0158”; KD06 không có mục Chuyển người phụ trách cho yêu cầu này |
| AC82 | Dịch vụ có dòng giá 20–24 khách và 25–29 khách; điều kiện 23 người lớn, 2 trẻ em (8, 10 tuổi) | Dòng căn cứ khách: dòng giá 20–24 khách (theo 23 người lớn, không theo 25 khách; Q-RS27); trẻ em tính theo nhóm tuổi của hợp đồng, tuổi nhập coi là tuổi tại ngày sử dụng đầu tiên của dịch vụ (R13) |
| AC83 | Sau AC78, ở chế độ điều chỉnh bấm Publish proposal của v4 (English) | Hộp thoại như W32; tạo link riêng của v4, hạn mặc định 30 ngày, Gia hạn, Thu hồi được; proposal ghi “Revised proposal for booking BK-2611-0158”; v4 vẫn Chưa có kết quả, v3 vẫn Chốt, Booking không đổi; link English của v3 hiện dải bản mới hơn v4 (L6.5, R18, R27) |
| AC84 | Ở chế độ điều chỉnh mở bảng trượt v3 (phiên bản của Booking) hoặc v2 | Không có nút Publish proposal; Gia hạn, Thu hồi, Sao chép link đang mở của v3 vẫn có (E5.8) |
| AC85 | Yêu cầu có v2 Chốt, v3 Cần điều chỉnh; Booking tạo từ v2; bấm Điều chỉnh chương trình | Hành trình nạp từ bản chụp v2; điều kiện tính điền sẵn từ v2; v3 không phải phiên bản điều chỉnh của Booking, Chuyển sang Điều hành ở KD08 không ghi Chốt cho v3 (E6.7, R17, R27) |
| AC86 | Lưu v4 ở chế độ điều chỉnh, về Booking không chuyển, rồi bấm Điều chỉnh chương trình lần nữa | Không có câu hỏi; hành trình là hành trình đang lưu (của v4), không nạp lại bản chụp v3 (E6.12, R27) |
| AC87 | Tính giá ngày 12/11/2026 khi bảng tỷ giá QT05 chỉ có dòng đến 11/11/2026 | Tỷ giá EUR 27.450 ₫, USD 25.380 ₫ điền sẵn, nguồn “Bảng tỷ giá ngày 11/11/2026”; tính và lưu phiên bản được. Loại tiền chưa từng có tỷ giá: ô trống viền đỏ “Chưa có tỷ giá … · nhập tỷ giá”, bắt buộc nhập (E4.2, R14) |

| AC88 | Quản trị hệ thống (quyền mặc định) mở yêu cầu Đang xử lý | Không có ô nhập, nút Lưu, Tính giá, Hủy yêu cầu; trường hiện dạng chữ; menu ⋯ có Chuyển người phụ trách, Lịch sử thay đổi (1.4, L2.3, U5) |
| AC89 | Yêu cầu 15 người lớn, 0 phòng đơn | Phòng đơn tự thành 1, ghi chú “Người lớn lẻ · tự xếp phòng đơn”; số phòng 8 (7 đôi, 1 đơn); sửa phòng đơn về 0 được (R04, Q13') |
| AC90 | Phòng có giá mùa 1.200.000 ₫/đêm; ngày đó có hai phụ thu Thay thế (1.500.000 ₫, 1.800.000 ₫) và một phụ thu Cộng dồn (100.000 ₫) | Đơn giá đêm đó = 1.800.000 + 100.000 = 1.900.000 ₫ (R13, Q15) |
| AC91 | Ví dụ D (`docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`): ngày 20/03/2027, 14 người lớn, trẻ 1 và 13 tuổi; Set menu Huế · bữa trưa của Nhà hàng Hoàng Cung Huế (người lớn 450.000 ₫; nhóm 2–5 giá 0 ₫, 6–11 giá 270.000 ₫); Vé Đại Nội Huế (người lớn 200.000 ₫; nhóm 0–5 giá 0 ₫, 6–11 giá 20.000 ₫) | Set menu: trẻ 1 tuổi 0 ₫ (dưới nhóm thấp nhất, miễn phí), trẻ 13 tuổi 450.000 ₫ (trên nhóm cao nhất, như người lớn), khoản 6.750.000 ₫. Vé Đại Nội: trẻ 1 tuổi 0 ₫ (nhóm 0–5), trẻ 13 tuổi 200.000 ₫, khoản 3.000.000 ₫. Không có khoản thiếu; hợp đồng không có trường số trẻ miễn phí (R13; DH03 R09; Q-RS06, Q-RS07) |
| AC92 | Yêu cầu 6 người lớn, 2 trẻ em, phòng đơn để 0; nhập Giường phụ 2; rồi 3. Trường hợp khác: 3 người lớn, 3 trẻ em, Giường phụ 2 (sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em) | Lúc đầu 3 phòng đôi, số phòng 3. Giường phụ 2: vẫn 3 phòng đôi, số phòng 3, không cảnh báo. Giường phụ 3: lỗi cạnh ô “Giường phụ không quá số trẻ em”, không lưu được. Trường hợp khác: 1 phòng đơn tự xếp, 1 phòng đôi, cảnh báo “Số giường phụ nhiều hơn số phòng đôi, cần NCC xác nhận kê được”, vẫn lưu và tính giá được (R04, E4.12) |
| AC93 | Hành trình 1 đêm 15/03/2027 (thứ Hai) ở Phòng nghỉ tiêu chuẩn, Khách sạn Lotus Hanoi; hợp đồng áp dụng: phòng 2.000.000 ₫/phòng/đêm, đi kèm Giường phụ 600.000 ₫/giường/đêm (cùng mùa Cao điểm, ngày thường), chính sách trẻ em nhóm 6–12 thêm giường 500.000 ₫; dòng có đi kèm Giường phụ Theo số giường phụ. Điều kiện: 4 người lớn, 1 trẻ 8 tuổi, 0 phòng đơn, 1 giường phụ; báo giá VND; Markup chung 15 %, Lưu trú 10 %; bội số 10.000 ₫ (sửa 18/11/2026, người dùng chốt: giường phụ cho trẻ em; ví dụ C của `docs/rsd/BO-TINH-GIA/VI-DU-TINH-GIA-v1.0.md`) | 2 phòng đôi. Khoản phòng 2 × 2.000.000 = 4.000.000 ₫; ngay dưới là khoản Đi kèm Giường phụ 1 × 600.000 = 600.000 ₫, cùng hợp đồng và mùa với phòng, Markup “10 % · Lưu trú”; khoản trẻ em 1 trẻ 8 tuổi × 500.000 ₫. Giá vốn 5.100.000 ₫. Người lớn: 4.000.000 ÷ 4 = 1.000.000 → 1.100.000 → 1.100.000 ₫. Trẻ em 6–12 (8): 500.000 + 600.000 = 1.100.000 → 1.210.000 → 1.210.000 ₫. Tổng giá bán 4 × 1.100.000 + 1.210.000 = 5.610.000 ₫; tổng trước làm tròn 5.610.000; lãi gộp 510.000 ₫ (9,1 %); Markup bình quân 10,0 %. Theo dịch vụ: Lưu trú gồm Phòng nghỉ tiêu chuẩn (phòng đôi + trẻ em) 4.500.000 → 4.950.000 và “Giường phụ kèm Phòng nghỉ tiêu chuẩn” 600.000 → 660.000 (R04, R13, R14) |
| AC94 | Như AC93 nhưng 2 người lớn, 0 giường phụ, 1 trẻ 8 tuổi cần thêm giường; chính sách trẻ em của hợp đồng: nhóm 6–12 thêm giường, đơn giá trẻ em của dòng phòng 500.000 ₫ (Q-RS05) | Trẻ em 8 tuổi: 500.000 ₫ giá vốn theo chính sách trẻ em; không có khoản Giường phụ, không dùng 600.000 ₫, vì điều kiện không có giường phụ nên chỉ tính chính sách trẻ em (R13; BOI-CANH thuật ngữ Giường phụ; sửa lý do 18/11/2026) |
| AC95 | Như AC93 (4 người lớn, 1 trẻ 8 tuổi, 1 giường phụ), hành trình thêm đêm 16/03 ở KS Huế (NCC không khai giường phụ ở DH03; hợp đồng KS Huế có chính sách trẻ em nhóm 6–12, giá trẻ em 400.000 ₫) (sửa 18/11/2026) | Banner W29 có đúng một khoản thiếu “Giường phụ · chưa thêm vào KS Huế, 16/03/2027”, số lượng 1; Lưu phiên bản khóa. Nhập tay 550.000 ₫, ghi chú “Email KS Huế 10/11”: khoản có nhãn Nhập tay, Lưu phiên bản mở; giá không ghi về DH03 (E4.12, R15) |
| AC96 | Đêm lưu trú thuộc mùa Tết; Giường phụ của hợp đồng có ô giá Tết trống | Khoản Đi kèm Giường phụ là khoản thiếu “Thiếu giá mùa Tết”; không lấy giá mùa khác, không lấy giá phòng, không dùng 0; nhập tay được (R13, R15) |
| AC97 | Khách sạn có đi kèm Đưa đón sân bay (loại Vận chuyển, hạng mục Di chuyển); thêm vào dòng đêm đầu, Cố định 1; Markup chung 15 %, Lưu trú 10 %, Di chuyển để trống | Khoản đưa đón ghi “15 % · Di chuyển (chung)”, khoản giường phụ ghi “10 % · Lưu trú”; W27 hiện hạng mục Di chuyển dù hành trình chỉ có đi kèm thuộc hạng mục này (R14) |
| AC98 | Ở Ngày 3, menu ⋯ của dòng Phòng nghỉ tiêu chuẩn → Thêm dịch vụ đi kèm, chọn Giường phụ, tích thêm Ngày 4, Ngày 5 (cùng dịch vụ); yêu cầu có 1 giường phụ | Ba dòng đi kèm Giường phụ thụt lề dưới dòng phòng của Ngày 3, 4, 5, Theo số giường phụ = 1; bảng trượt + Thêm dịch vụ không có dòng Giường phụ, dòng phòng ghi “+ 1 dịch vụ đi kèm”; yêu cầu đã có phiên bản thì sau khi lưu có dải hành trình khác báo giá (L3.4, R07, R11) |
| AC99 | (1) Đổi dịch vụ dòng Phòng nghỉ tiêu chuẩn (có Giường phụ) sang Phòng Superior; (2) Điều hành chuyển Giường phụ của một dòng khác sang Ngừng dùng ở DH03 | (1) Dòng đổi tại chỗ, Giường phụ cũ bị bỏ, thông báo “Đã bỏ 1 dịch vụ đi kèm của Phòng nghỉ tiêu chuẩn” có Hoàn tác; menu ⋯ của dòng mới có Thêm dịch vụ đi kèm nếu Phòng Superior có đi kèm (L3.8). (2) Dòng đi kèm tô đỏ, số trên tab Hành trình tăng 1, Tính giá khóa tới khi Bỏ đi kèm (E3.13, R10) |
| AC100 | Publish English phiên bản ở AC93 (4 người lớn, 1 trẻ 8 tuổi, 1 giường phụ; sửa 18/11/2026) | Phần lưu trú ghi “Lotus Hanoi · Standard room … + 1 extra bed” (bản Tiếng Việt “+ 1 giường phụ”); bảng giá có Người lớn 1.100.000 ₫ × 4, Trẻ em 1.210.000 ₫ × 1 và tổng 5.610.000 ₫; không có dòng, đơn giá hay giá vốn của Giường phụ (R18) |
| AC101 | Ví dụ D: 14 người lớn, trẻ 1 và 13 tuổi (16 khách), 20/03/2027; Xe 29 chỗ city tour Huế có dòng 16–29 khách, Thuyền rồng sông Hương 16–30, HDV tiếng Đức 1–15 (1.300.000 ₫) và 16–30 (1.500.000 ₫), cả ba căn cứ đoàn | Xe 2.800.000 ₫, thuyền 1.800.000 ₫, HDV 1.500.000 ₫ (dòng 16–30): dòng căn cứ đoàn chọn theo 16 khách gồm trẻ em; không có khoản thiếu “Không có mức giá cho 14 khách”; dòng căn cứ khách vẫn chọn theo người lớn (AC82) (R13; DH03 R14; Q-RS27) |
| AC102 | Như AC101; Thuyền rồng có nhóm tuổi 12–15, dòng thuyền (căn cứ đoàn) không có giá trẻ em (ô khóa); Xe, HDV thuộc hợp đồng không có nhóm tuổi; Markup chung 15 %, Hướng dẫn viên 20 %; báo giá VND, bội số 10.000 ₫ | Thuyền chia cho 15 khách tính phí (14 người lớn và trẻ 13 tuổi, 120.000 ₫ mỗi người; trẻ 1 tuổi dưới nhóm thấp nhất, miễn phí); xe, HDV chia cho 16 khách (175.000 ₫, 93.750 ₫); không có khoản thiếu giá trẻ em. Giá vốn 15.850.000 ₫; giá bán người lớn 1.200.000 ₫ × 14, trẻ 1 tuổi 320.000 ₫, trẻ 13 tuổi 1.200.000 ₫; tổng 18.320.000 ₫; lãi gộp 2.470.000 ₫ (R13, R14; DH03 R09, R14; Q-RS02, Q-RS06) |
| AC111 | BK-2611-0149 (theo v3) của YC-2610-0031 bị hủy; Mở lại YC-2610-0031 rồi ghi Chốt lại cho v3 (khách đặt lại đúng phương án cũ) | v3 giữ Chốt, nay là phiên bản của Booking mới (mã khác BK-2611-0149) Hiệu lực theo v3, có hồ sơ Tour mới; yêu cầu Đã có Booking; BK-2611-0149 vẫn Đã hủy (R19, R20, E6.7; Q-RS17) |
| AC112 | YC-2610-0008 có BK-2610-0137 theo v3 (18 khách, 18/11 – 25/11/2026, 38.420 EUR). Ở chế độ điều chỉnh, Kinh doanh sửa Thông tin yêu cầu thành 20 khách, ngày đi 19/11/2026, lưu v4 (42.680 EUR), về Booking không Chuyển sang Điều hành | Booking vẫn 18 khách, 18/11 – 25/11/2026, 38.420 EUR theo v3; KD05 hiện số của Booking; yêu cầu ở KD06.1 ghi 20 khách, 19/11/2026. Bấm Chuyển sang Điều hành thì Booking và KD05 thành 20 khách, 19/11 – 26/11/2026, 42.680 EUR theo v4 (R27; RSD KD05 R03, R15; Q-RS18) |
| AC113 | Tạo hồ sơ Tour lỗi (lỗi dựng sẵn) khi bấm Chốt và tạo Booking cho v3 | Không ghi gì: v3 giữ kết quả cũ, không có Booking, không có hồ sơ Tour, không có thông báo; yêu cầu Đang xử lý; bấm lại sau khi hết lỗi thì tạo đúng một Booking (E6.13, R19; Q5) |
| AC114 | Nam chuyển YC-2611-0031 cho Lê Thu Hà ở W46 (như AC61), Hà đã đọc thông báo; Nam bấm Hoàn tác trên thông báo ngắn trong 10 giây | Phần đầu về Phụ trách Nguyễn Hoàng Nam; thông báo của Hà bị gỡ dù đã đọc; lịch sử yêu cầu và QT03 có thêm mục Hoàn tác. Nếu Hà đã chuyển tiếp yêu cầu ở phiên khác trước khi Nam bấm: không hoàn tác, thông báo ngắn nêu yêu cầu đã đổi người phụ trách (L7.3, R23; RSD CH02 R05; Q-RS24) |
| AC115 | Gateway AI có cấu hình. YC Đang xử lý có hành trình đã lưu tên “Hành trình miền Bắc 5 ngày” chưa có tên tiếng Anh, 3 ngày: ngày 1 đã có tiếng Anh Đã kiểm tra, ngày 2 chưa có tiếng Anh, ngày 3 có tiêu đề tiếng Anh nhưng chưa có nội dung tiếng Anh. Đến lần quét 10 phút kế tiếp | Ngày 2 có tiêu đề và nội dung tiếng Anh, ngày 3 có nội dung tiếng Anh (tiêu đề tiếng Anh giữ nguyên), cả hai ở tình trạng Dịch nháp; tên hành trình có tiếng Anh; ngày 1 không đổi; phiên bản bản ghi, người lưu, thời điểm lưu của hành trình không đổi, không có mục QT03 mới; AI chỉ nhận văn bản tiếng Việt còn thiếu bản dịch, không có tên khách; nhật ký hệ thống `AUTO_TRANSLATION` ghi lần quét (R12 Dịch tự động; ticket 106) |
| AC116 | Như AC115 nhưng yêu cầu Đã hủy, hoặc gateway AI báo lỗi | Không ghi gì vào hành trình; gateway lỗi thì nhật ký hệ thống ghi lỗi và lần quét kế tiếp dịch được khi AI trả lời (R12; ticket 106) |
| AC117 | Ngày 2 đã được dịch tự động (AC115); Nam mở lưới từ trước lần quét, sửa ngày 1 rồi Lưu với bản lưới cũ (ngày 2 chưa có tiếng Anh) | Lưu được, không báo xung đột; ngày 2 giữ tiếng Anh Dịch nháp đã dịch tự động; ngày nào Nam đổi nội dung tiếng Việt thì không giữ tiếng Anh cũ (R12; ticket 106) |
| AC118 | Ở English của W25 có 2 ngày chưa có tiếng Anh, Nam bấm Dịch các ngày còn thiếu; ở W35 có 2 ngày thiếu tiếng Anh, Nam bấm Dịch tất cả | W25: cả hai ngày có bản dịch nhãn “Dịch nháp · cần kiểm tra” trên lưới, chưa lưu. W35: các ô trống của cả hai ngày được điền bản dịch có nhãn đó, Publish mở khóa (L3.9, E5.1; ticket 106) |
| AC119 | Ngày 1 của hành trình có 2 hoạt động: “Vé tham quan phố cổ Hội An” 08:00–10:00 kèm mô tả, “Lớp học nấu ăn Hội An” không giờ; Nam lưu rồi lưu lại hành trình như đã đọc | Hai hoạt động giữ đúng thứ tự, giờ, mô tả; hành trình không bị đánh dấu thay đổi sau báo giá. Một hoạt động có giờ kết thúc mà không có giờ bắt đầu, hoặc giờ kết thúc không sau giờ bắt đầu, hoặc không tên: không lưu, báo lỗi đúng ô (R18; ticket 107) |
| AC120 | Nam tạo đề xuất AI; AI trả mỗi ngày các hoạt động có tên tiếng Việt, tiếng Anh, có giờ hoặc không | Bảng hoạt động của đề xuất điền sẵn cả tiếng Việt, tiếng Anh; giờ sai dạng bị bỏ, hoạt động không tên bị bỏ; chưa lưu cho tới khi Nam lưu (L3.5, R09, R18; ticket 107) |
| AC121 | Publish v1 bằng English và Tiếng Việt với ngày 1 như AC119 (hoạt động thứ hai chưa có tiếng Anh) | Mỗi proposal ghi “Trong ngày” / “During the day” với hai hoạt động theo ngôn ngữ (English: tên tiếng Anh, hoạt động chưa có tiếng Anh giữ tiếng Việt); hoạt động có giờ hiện 08:00 và 10:00, hoạt động không giờ không hiện giờ; ngày chỉ có hoạt động không giờ thì không có cột giờ; PDF cũng có mục này (R18; ticket 107) |
| AC122 | Gateway AI có cấu hình; hoạt động của ngày 1 chưa có tên, mô tả tiếng Anh; đến lần quét 10 phút kế tiếp | Hoạt động có tên, mô tả tiếng Anh; tình trạng tiếng Anh của ngày không đổi; phiên bản bản ghi của hành trình không đổi, không có mục QT03 mới (R12, R18; ticket 107) |
| AC123 | Mở Tạo bằng AI ở YC-2611-0031 lần đầu | Ô Số phương án chọn sẵn 1, nút chính “Tạo đề xuất”; chọn 3 thì nút thành “Tạo 3 phương án”; không chọn được số ngoài 1–3 (W19, 5.2) |
| AC124 | Chọn 1 phương án, bấm Tạo đề xuất | Bảng trượt hiện màn Đang tạo với một dòng phương án và đồng hồ; hành trình trên lưới không đổi; xong thì bảng trượt đóng, đề xuất hiện trên lưới như AC28, không qua màn so sánh (W52, W20) |
| AC125 | Chọn 3 phương án, bấm Tạo 3 phương án | Ba lời gọi có hướng Bám sát tiêu chí, Khác tuyến, Tiết kiệm hơn; W52 hiện tiến độ từng phương án, phương án xong ghi số ngày, số dịch vụ, thời gian; khi cả ba xong bảng trượt tự sang W53; dữ liệu gửi không có tên, email, điện thoại khách; nhật ký có ba lần gọi (W52, W53, R09) |
| AC126 | Ở W53 chọn phương án 2, bấm Đưa phương án 2 lên lưới | Lưới hiện đúng ngày, dịch vụ của phương án 2, chưa lưu; dải tím ghi “Phương án 2/3 · Khác tuyến” và số khớp, số chưa gán đúng như thẻ; không còn đường quay lại W53; Lưu hành trình thì nguồn là Bằng AI (L3.5) |
| AC127 | Tạo 3 phương án, phương án 3 quá 60 giây; ở W53 bấm Thử lại phương án này rồi bấm Hủy, sau đó Hoàn tác trên thông báo | W53 có hai thẻ chọn được, thẻ 3 xám ghi quá thời gian; Thử lại làm thẻ 3 hiện Đang tạo, vẫn chọn được thẻ 1, 2. Hủy: hành trình không đổi, thông báo “Đã bỏ 3 phương án AI”; Hoàn tác mở lại W53 với đúng các phương án đó (E3.15) |
| AC128 | Tạo 3 phương án, phương án 1 xong, bấm Dừng tạo; lần khác bấm Dừng tạo khi chưa phương án nào xong | Lần đầu: hai lời gọi còn lại bị hủy, W53 mở chỉ với phương án 1. Lần sau: về W19, tiêu chí và số phương án giữ nguyên; hành trình không đổi cả hai lần (E3.16) |
| AC129 | YC-2611-0031 có hành trình đã lưu 10 ngày; ở khung Sửa bằng AI gửi “Bỏ Bà Nà Hills ở Ngày 9, thay bằng lớp nấu ăn ở Hội An và một điểm làng nghề; giữ HDV” | Trong lúc chờ ô nhập khóa, lưới chỉ xem; sau đó Ngày 9 đổi tiêu đề, nội dung, nhãn Sửa bằng AI; hai dòng Bà Nà bị bỏ; Lớp nấu ăn Hội An là dòng Mới, Chưa gán NCC; Vé làng gốm Thanh Hà gán NCC từ danh mục; HDV giữ nguyên; tin trả lời liệt kê đúng các thay đổi; chân trang ● Chưa lưu; số trên tab tăng 1; chưa có gì ghi vào yêu cầu (W54, L3.10) |
| AC130 | Sau AC129 bấm Hoàn tác lượt này; lần khác sửa tay số lượng một dòng ở Ngày 3 trước khi bấm | Lần đầu: lưới về đúng hành trình trước lượt (Ngày 9 Bà Nà Hills), lượt ghi “Đã hoàn tác”. Lần sau: nút Hoàn tác ẩn, ghi “Đã sửa tay sau lượt này · dùng Hủy thay đổi để về bản đã lưu” (L3.10 bước 3) |
| AC131 | Sau AC129 bấm Lưu hành trình; mở lại tab Hành trình | Lưu như mọi lần lưu (R10, R11; có phiên bản thì dải khác báo giá); lịch sử yêu cầu ghi lần lưu kèm “có sửa bằng AI”; nguồn hành trình vẫn “Từ Tour mẫu TM-008, ghép TM-010”; khung thu gọn, không còn tin nhắn cũ; nhật ký lần gọi không chứa nội dung tin nhắn (L3.10, R09) |
| AC132 | (1) Gửi “Đổi khách sạn Đà Nẵng sang 5 sao” khi dòng phòng Ngày 8 có đi kèm Giường phụ; (2) gửi “Xóa hết các ngày”; (3) gateway quá 60 giây; (4) mở KD06 ở chế độ điều chỉnh, hoặc Quản trị hệ thống mở yêu cầu Đang xử lý | (1) Dòng phòng đổi dịch vụ, Giường phụ cũ bị bỏ, tin ghi “Đã bỏ 1 dịch vụ đi kèm của Phòng Deluxe Ocean View” (E3.20). (2) Không xóa ngày nào, tin ghi “Bỏ qua … hành trình phải còn ít nhất 1 ngày” và “Không đổi hành trình” (E3.19). (3) Lưới không đổi, tin đỏ “Chưa sửa được” kèm Thử lại (E3.18). (4) Không có thanh Sửa bằng AI (L3.10, R27, 1.4) |
