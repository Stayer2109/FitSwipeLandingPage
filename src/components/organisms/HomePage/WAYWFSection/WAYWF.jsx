import React from "react";
import "./WAYWF.scss";
import SliderImage from "../../../../assets/images/slider-img2.png";
import BlackImage from "../../../../assets/images/black_background.png";

const WAYWF = () => {
	return (
		<div className="waywf-container">
			<div className="text-container">
				<h1 className="title">Còn đợi chờ gì nữa?</h1>
				<p className="text-content">
					Lorem ipsum odor amet, consectetuer adipiscing elit. Et egestas
					scelerisque non leo at dignissim. Ullamcorper eget cras fermentum
					dignissim imperdiet aliquam. Aptent nisi malesuada odio blandit
					vulputate sed mi imperdiet! Finibus curabitur natoque euismod dui
					fermentum semper.
				</p>
				<button className="btn-download">Tải về ngay</button>
			</div>

			<div className="tilted-container">
				<img
					src={BlackImage}
					alt="black background"
					className="waywf-black-img"
				/>
				<div className="waywf-main-img-container">
					<img
						src={SliderImage}
						alt="slider image"
						className="waywf-main-img"
					/>
				</div>
			</div>
		</div>
	);
};

export default WAYWF;
