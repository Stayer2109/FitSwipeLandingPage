import SliderImage from "../../../../assets/images/slider-img1.png";
import BlackBackground from "../../../../assets/images/black_background.png";
import "./WelcomeSection.scss";
import {
	LeftApostropheIcon,
	RightApostropheIcon,
} from "../../../atoms/Icon/Icon";
import ImageButton from "../../../atoms/ImageButton/ImageButton";

const WelcomeSection = () => {
	// HANDLE DOWNLOAD BUTTON CLICK
	const handleDownloadButtonClick = (e) => {
		e.preventDefault();

		// Redirect to Google Play Store
		window.open(
			"https://play.google.com/store/apps/details?id=com.oldgold.fitswipe",
			"_blank"
		);
	}

	return (
		<div className="welcome-image-container">
			<div className="img-container">
				<div className="leftside-container">
					<img
						src={SliderImage}
						alt=""
						className="slider-img"
					/>
				</div>

				<div className="rightside-container">
					<img
						src={BlackBackground}
						alt=""
						className="black-img"
					/>

					<div className="information-container">
						<div className="title-container">
							<h1 className="st1">Chào mừng đến với</h1>
							<h1 className="nd2">
								<strong>FitSwipe_</strong>
							</h1>
						</div>

						<div className="quote-container">
							<div className="left-apostrophe">
								<LeftApostropheIcon />
							</div>
							<p className="quote">
								Luyện tập không chỉ là rèn cho cơ thể, mà còn là hành trình tìm
								kiếm những người bạn đồng hành, cùng nhau vượt qua thử thách và
								phát triển.
							</p>
							<div className="right-apostrophe">
								<RightApostropheIcon />
							</div>
						</div>

						<div className="button-container">
							<div className="text">
								<p>Hãy cùng nhau phát triển sức khoẻ!</p>
								<p className="supported-text">Tải ứng dụng của chúng tôi</p>

								<div className="btns">
									<ImageButton forElement={"chplay"} onClick={handleDownloadButtonClick} />
									{/* <ImageButton forElement={"appstore"} /> */}
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default WelcomeSection;
