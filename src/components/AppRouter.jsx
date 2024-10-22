import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageCommonLayout from "./layout/PageCommonLayout";

const AppRouter = () => {
	return (
		<>
			<Routes>
				{/* COMMON PAGE LAYOUT */}
				<Route element={<PageCommonLayout />}>
					<Route
						index
						element={<HomePage />}
					/>
					<Route path="about-us" />
					<Route path="trailer" />
					<Route path="sponsor" />
					<Route path="faq" />
				</Route>
			</Routes>
		</>
	);
};

export default AppRouter;
