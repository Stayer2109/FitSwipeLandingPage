import React from "react";
import "./Header.scss";
import AppIcon from "../../../assets/images/app_icon.png";
import { useNavigate } from "react-router-dom";

const Header = ({ isTermOfUse, scrollToSection }) => {
	// Get the current path
	const currentPath = window.location.pathname;
	const navigate = useNavigate();

	// Function to check if a path is active
	const isActive = (path) => (currentPath === path ? "active" : "");

	const handleSectionClick = (e, section) => {
		e.preventDefault();
		scrollToSection(section); // Scroll to the section
	};

	const handleLogoClick = (e) => {
		if (isTermOfUse) {
			navigate("/");
			console.log(isTermOfUse);
		} else {
			scrollToSection("home"); // Scroll to the home section
		}
		// Scroll to the home section
	}

	return (
		<>
			{/* FOR HOME PAGE */}
			{isTermOfUse ? (
				<div className="page-header-container">
					<div className="icon-container" onClick={() => handleLogoClick()} >
						<img src={AppIcon} className="image-item" alt="App Icon" />
						<h1 className="icon-title">FitSwipe</h1>
					</div>

					<div className="header-items-container">
						<ul className="item-list">
							<li className={`header-item-1 ${isActive("/")}`}>
								<a href="/" onClick={() => scrollToSection("home")}>Trang Chủ</a>
							</li>
							<li className={`header-item-1 ${isActive("/terms-of-use")}`}>
								<a href="/terms-of-use">Điều khoản sử dụng</a>
							</li>
							<li className={`header-item-1 ${isActive("/privacy-policy")}`}>
								<a href="/privacy-policy">Chính sách bảo mật</a>
							</li>
							{/* <li className={`header-item-1 ${isActive("/license")}`}>
								<a href="/license">Giấy phép</a>
							</li> */}
						</ul>
					</div>
				</div>
			) : (
				// FOR OTHER PAGES
				<div className="page-header-container">
					<div className="icon-container" onClick={() => handleLogoClick()} >
						<img src={AppIcon} className="image-item" alt="App Icon" />
						<h1 className="icon-title">FitSwipe</h1>
					</div>

					<div className="header-items-container">
						<ul className="item-list">
							<li className={`header-item ${isActive("/")}`}>
								<a href="#" onClick={(e) => handleSectionClick(e, "home")}>Trang Chủ</a>
							</li>
							<li className={`header-item ${isActive("/about-us")}`}>
								<a href="#" onClick={(e) => handleSectionClick(e, "aboutUs")}>Về chúng tôi</a>
							</li>
							<li className={`header-item ${isActive("/trailer")}`}>
								<a href="#" onClick={(e) => handleSectionClick(e, "trailer")}>Trailer</a>
							</li>
							<li className={`header-item ${isActive("/sponsor")}`}>
								<a href="#" onClick={(e) => handleSectionClick(e, "sponsor")}>Tài trợ</a>
							</li>
							<li className={`header-item ${isActive("/faq")}`}>
								<a href="#" onClick={(e) => handleSectionClick(e, "faq")}>FAQ</a>
							</li>
						</ul>
					</div>
				</div>
			)}
		</>
	);
};

export default Header;
