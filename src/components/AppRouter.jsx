import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageCommonLayout from "./layout/PageCommonLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";

const AppRouter = () => {
	return (
		<Routes>
			{/* COMMON PAGE LAYOUT */}
			<Route element={<PageCommonLayout />}>
				<Route
					index
					element={<HomePage />}
				/>
			</Route>

			{/* Catch-all for undefined routes */}
			<Route
				path="*"
				element={<ErrorPage />}
			/>
		</Routes>
	);
};

export default AppRouter;
