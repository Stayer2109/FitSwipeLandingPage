import React from "react";
import "./PageCommonLayout.scss";
import { Outlet } from "react-router-dom";
import Footer from "../../organisms/Footer/Footer";
import Header from "../../organisms/Header/Header";

const PageCommonLayout = () => {
	return (
		<>
			{/* <header className="page-header">
				<Header isTermOfUse={false} />
			</header> */}
			<main className="page-body">
				<Outlet />
			</main>
			{/* <footer className="page-footer">
				<Footer />
			</footer> */}
		</>
	);
};

export default PageCommonLayout;
