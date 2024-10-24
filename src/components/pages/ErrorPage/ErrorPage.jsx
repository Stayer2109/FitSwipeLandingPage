import React, { useEffect } from "react";
import "./ErrorPage.scss";
import Error404 from "../../../assets/images/404error.png";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		navigate("/404-not-found");
	}, []);

	const onButtonClick = () => {
		navigate("/");
	};

	return (
		<div className="error-screen-container">
			<div className="error-img-container">
				<img
					src={Error404}
					alt=""
					className="error-img"
				/>
			</div>
			<div className="error-text-container">
				<h1 className={"error-text-title"}>Không tìm thấy trang</h1>
			</div>
			<button
				onClick={onButtonClick}
				className="home-btn"
			>
				Home
			</button>
		</div>
	);
};

export default ErrorPage;
