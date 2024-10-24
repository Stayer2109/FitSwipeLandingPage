import React from "react";
import "./TermsOfUsePageCommonLayout.scss";
import Footer from "../../organisms/Footer/Footer";
import { Outlet } from "react-router-dom";
import Header from "../../organisms/Header/Header";
import LogoImage from "../../../assets/images/app_icon.png";
import Weight from "../../../assets/images/weight.png";

const TermsOfUsePageCommonLayout = () => {
	return (
		<>
			<header className="terms-of-use-page-header">
				<Header isTermOfUse={true} />
			</header>
			<div className="logo-image-container">
				<img
					src={LogoImage}
					alt=""
					className="logo-image"
				/>
				<h1>FitSwipe</h1>
			</div>
			<main className="terms-of-use-page-body">
				<Outlet />
			</main>
			<div className="weight-image-container">
				<img
					src={Weight}
					alt=""
					className="weigth-image"
				/>
			</div>
			<footer className="terms-of-use-page-footer">
				<Footer />
			</footer>
		</>
	);
};

export default TermsOfUsePageCommonLayout;
