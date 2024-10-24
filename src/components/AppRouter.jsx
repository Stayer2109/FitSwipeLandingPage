import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import PageCommonLayout from "./layout/PageCommonLayout/PageCommonLayout";
import ErrorPage from "./pages/ErrorPage/ErrorPage";
import TermsOfUsePageCommonLayout from "./layout/TermsOfUsePageCommonLayout/TermsOfUsePageCommonLayout";
import TermsOfUsePage from "./pages/TermsOfUsePage/TermsOfUsePage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage/PrivacyPolicyPage";
import LicensePage from "./pages/LicensePage/LicensePage";

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

			<Route
				path="/terms-of-use"
				element={<TermsOfUsePageCommonLayout />}
			>
				<Route
					index
					element={<TermsOfUsePage />}
				/>
			</Route>

			<Route
				path="/privacy-policy"
				element={<TermsOfUsePageCommonLayout />}
			>
				<Route
					index
					element={<PrivacyPolicyPage />}
				/>
			</Route>

			<Route
				path="/license"
				element={<TermsOfUsePageCommonLayout />}
			>
				<Route
					index
					element={<LicensePage />}
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
