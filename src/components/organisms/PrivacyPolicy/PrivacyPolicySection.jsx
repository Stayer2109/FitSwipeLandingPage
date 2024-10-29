import React, { useEffect, useState } from "react";
import "./PrivacyPolicySection.scss";
import LightWeight from "../../../assets/images/about_use_img.png";
import { PrivacyPolicyList } from "../../../data/PrivacyPolicy/PrivacyPolicyList";

const PrivacyPolicySection = () => {
	const [privacyItems, setPrivacyItems] = useState([]);

	useEffect(() => {
		setPrivacyItems(PrivacyPolicyList.data);
		console.log(PrivacyPolicyList.data);
	}, []);

	return (
		<div className="privacy-policy-container">
			<div className="title-container">
				<img
					src={LightWeight}
					alt="LightWeight"
					className="light-weight-img"
				/>
				<div className="text-content">
					<h1>Chính sách bảo mật</h1>
					<p>Cập nhật lần cuối: 29/10/2024</p>
				</div>
			</div>

			<p className="commit-content">FitSwipe cam kết bảo vệ quyền riêng tư và an toàn thông tin cá nhân của người dùng. Chính sách này sẽ giúp bạn hiểu rõ cách chúng tôi thu thập, sử dụng, bảo vệ và chia sẻ thông tin cá nhân. Khi sử dụng FitSwipe, bạn đồng ý với các điều khoản bảo mật này.</p>

			<ul className="privacy-policy-items-container">
				{
					privacyItems.length > 0 ? (
						privacyItems.map((item, index) => (
							<li className="item" key={index}>
								<h1>{item.title}</h1>
								{
									item.note && <p>{item.note}</p>
								}

								{/* RENDER IF THERE ARE CONTENTS */}
								{
									item.content != null && (
										<ul className="item-content">
											{
												item.content.map((content, index) => (
													<li key={index}>
														<p>{content}</p>
													</li>
												))
											}
										</ul>
									)
								}

								{/* RENDER IF THERE IS ANY SUB_DATA */}
								{
									item.sub_data != null && item.sub_data.length > 0 && (
										<ul className="sub-data-content">
											{
												item.sub_data.map((subItem, subIndex) => (
													<li key={`subdata-${index}-${subIndex}`}>
														<h2 className="sub-data-title">{`${index + 1}.${subIndex + 1} ${subItem.title}`}</h2>
														{
															subItem.content != null && (
																<ul className="sub-item-content">
																	{
																		subItem.content.map((content, index) => (
																			<li key={`subdata-${index}-${subIndex}`}>{content}</li>
																		))
																	}
																</ul>
															)
														}
													</li>
												))
											}
										</ul>
									)
								}

								{
									item.note2 && <p>{item.note2}</p>
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

export default PrivacyPolicySection;
