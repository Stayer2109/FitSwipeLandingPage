import React from "react";
import "./AboutUs.scss";
import AboutUsImg from "../../../../assets/images/about_use_img.png";

const AboutUs = () => {
	return (
		<div class="about-section-container">
			<div class="content-wrapper">
				<div class="figure-container">
					<img
						src={AboutUsImg}
						alt="Weightlifter"
						class="figure-image"
					/>
				</div>

				<div class="text-container">
					<h1 className="title">Về chúng tôi</h1>
					<p className="paragraph">
						FitSwipe là một dự án của môn học EXE201 (môn học Khởi Nghiêp) của
						sinh viên trường Đại Học FPT. Dựa trên sự thịnh hành của lĩnh vực
						thể hình hiện nay, FitSwipe sẽ mang đến cho các bạn tìm kiếm đồng
						đội trong lĩnh vực thể hình. Giúp các học viên mới tìm kiếm được
						những huấn luyện viên (PT) theo mong muốn và ngược lại, giúp các PT
						tìm kiếm được thêm nhiều khách hàng hơn.
					</p>
				</div>
			</div>
		</div>
	);
};

export default AboutUs;
