import React from "react";
import "./Header.scss";
import AppIcon from "../../../assets/images/app_icon.png";

const Header = ({ isTermOfUse }) => {
	// Get the current path
	const currentPath = window.location.pathname;

	// Function to check if a path is active
	const isActive = (path) => currentPath === path ? 'active' : '';

	return (
		<>
			{isTermOfUse ? (
				<div className="page-header-container">
					<div className="icon-container">
						<img src={AppIcon} className="image-item" alt="App Icon" />
						<h1 className="icon-title">FitSwipe</h1>
					</div>

					<div className="header-items-container">
						<ul className="item-list">
							<li className={`header-item ${isActive('/')}`}>
								<a href="/">Trang Chủ</a>
							</li>
							<li className={`header-item ${isActive('/terms-of-use')}`}>
								<a href="/terms-of-use">Điều khoản sử dụng</a>
							</li>
							<li className={`header-item ${isActive('/privacy-policy')}`}>
								<a href="/privacy-policy">Chính sách bảo mật</a>
							</li>
							<li className={`header-item ${isActive('/license')}`}>
								<a href="/license">Giấy phép</a>
							</li>
						</ul>
					</div>
				</div>
			) : (
				<div className="page-header-container">
					<div className="icon-container">
						<img src={AppIcon} className="image-item" alt="App Icon" />
						<h1 className="icon-title">FitSwipe</h1>
					</div>

					<div className="header-items-container">
						<ul className="item-list">
							<li className={`header-item ${isActive('/')}`}>
								<a href="/">Trang Chủ</a>
							</li>
							<li className={`header-item ${isActive('/about-us')}`}>
								<a href="/about-us">Về chúng tôi</a>
							</li>
							<li className={`header-item ${isActive('/trailer')}`}>
								<a href="/trailer">Trailer</a>
							</li>
							<li className={`header-item ${isActive('/sponsor')}`}>
								<a href="/sponsor">Tài trợ</a>
							</li>
							<li className={`header-item ${isActive('/faq')}`}>
								<a href="/faq">FAQ</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
