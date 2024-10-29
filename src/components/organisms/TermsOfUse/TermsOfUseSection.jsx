import React, { useEffect, useState } from "react";
import "./TermsOfUseSection.scss";
import LightWeight from "../../../assets/images/about_use_img.png";
import { TermsOfService } from "../../../data/TermOfService/TermOfService";

const TermsOfUseSection = () => {
	const [termsOfUseItems, setTermsOfUseItems] = useState([]);

	useEffect(() => {
		setTermsOfUseItems(TermsOfService.data);
		console.log(TermsOfService.data);

	}, []);

	return (
		<div className="terms-of-use-container">
			<div className="title-container">
				<img
					src={LightWeight}
					alt="LightWeight"
					className="light-weight-img"
				/>
				<h1>Điều khoản sử dụng</h1>
			</div>

			<p className="commit-content">Chào mừng quý khách (“Người Dùng”) đến với Trang Điện Tử (như được định nghĩa bên dưới) của Công Ty TNHH FitSwipe (sau đây được gọi tắt là “FitSwipe”, “chúng tôi” hoặc “của chúng tôi”). Trước khi sử dụng Trang Điện Tử, vui lòng đọc kỹ các điều khoản và điều kiện dưới đây dành cho Người Dùng của FitSwipe (“Điều Khoản Dịch Vụ Và Điều Kiện”). Bằng việc truy cập và sử dụng Trang Điện Tử, Người Dùng xác nhận đã đọc, hiểu và đồng ý sẽ chịu sự ràng buộc của các Điều Khoản Và Điều Kiện và Chính Sách Bảo Mật dành cho Người Dùng.</p>

			<ul className="terms-of-use-items-container">
				{
					termsOfUseItems.length > 0 ? (
						termsOfUseItems.map((item, index) => (
							<li className="item" key={index}>
								<h1>{item.title}</h1>
								{
									item.content.map != null && item.content.length > 0 ? (
										<>
											<ul className="item-content">
												{
													item.content.map((content, index) => (
														<li>{content}</li>
													))
												}
											</ul>
										</>
									) : (
										null
									)
								}
							</li>
						))
					) : (
						null
					)
				}
			</ul>
		</div>
	);
};

export default TermsOfUseSection;
