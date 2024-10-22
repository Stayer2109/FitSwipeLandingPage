import React from "react";
import "./Header.scss";
import AppIcon from "../../../assets/images/app_icon.png";

const Header = () => {
	return (
		<div className="page-header-container">
			<div className="icon-container">
				<img
					src={AppIcon}
					className="image-item"
				/>
				<h1 className="icon-title">FitSwipe</h1>
			</div>

			<div className="header-items-container">
				<ul className="item-list">
					<li className="header-item">
						<a href="/">Trang Chủ</a>
					</li>
					<li className="header-item">
						<a href="/about-us">Về chúng tôi</a>
					</li>
					<li className="header-item">
						<a href="/trailer">Trailer</a>
					</li>
					<li className="header-item">
						<a href="/sponsor">Tài trợ</a>
					</li>
					<li className="header-item">
						<a href="/faq">FAQ</a>
					</li>
				</ul>
			</div>
		</div>
	);
};

export default Header;
