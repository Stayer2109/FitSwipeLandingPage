import React from "react";
import "./LicenseSection.scss";
import LightWeight from "../../../assets/images/about_use_img.png";

const LicenseSection = () => {
	return (
		<div className="license-container">
			<div className="title-container">
				<img
					src={LightWeight}
					alt="LightWeight"
					className="light-weight-img"
				/>
				<h1>Điều khoản sử dụng</h1>
			</div>

			<ul className="license-items-container">
				<li className="item">
					<h1>Website</h1>
					<div className="content-box">
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas
							scelerisque non leo at dignissim. Ullamcorper eget cras fermentum
							dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit
							vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui
							fermentum semper.
						</p>
					</div>
					<div className="green-box"></div>
				</li>
				<li className="item">
					<h1>Android</h1>
					<div className="content-box">
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas
							scelerisque non leo at dignissim. Ullamcorper eget cras fermentum
							dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit
							vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui
							fermentum semper.
						</p>
					</div>
					<div className="green-box"></div>
				</li>
				<li className="item">
					<h1>AppStore</h1>
					<div className="content-box">
						<p>
							Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas
							scelerisque non leo at dignissim. Ullamcorper eget cras fermentum
							dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit
							vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui
							fermentum semper.
						</p>
					</div>
					<div className="green-box"></div>
				</li>
			</ul>
		</div>
	);
};

export default LicenseSection;
