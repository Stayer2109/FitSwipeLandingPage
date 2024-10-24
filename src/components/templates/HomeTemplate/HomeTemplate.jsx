import React from "react";
import "./HomeTemplate.scss";
import WelcomeSection from "../../organisms/HomePage/WelcomeSection/WelcomeSection";
import AboutUs from "../../organisms/HomePage/AboutUsSection/AboutUs";
import OfferSection from "../../organisms/HomePage/OfferSection/OfferSection";
import FeatureSection from "../../organisms/HomePage/FeatureSection/FeatureSection";
import TrailerVideo from "../../organisms/HomePage/TrailerVideoSection/TrailerVideo";
import SponsorSection from "../../organisms/HomePage/SponsorSection/SponsorSection";
import FAQSection from "../../organisms/HomePage/FAQSection/FAQSection";
import WAYWF from "../../organisms/HomePage/WAYWFSection/WAYWF";

const HomeTemplate = () => {
	return (
		<div className="homepage-container">
			<div className="welcome-section">
				<WelcomeSection />
			</div>
			<div className="about-us-section">
				<AboutUs />
			</div>
			<div className="offer-section-container">
				<OfferSection />
			</div>
			<div className="feature-section-container">
				<FeatureSection />
			</div>
			<div className="trailer-video-section-container">
				<TrailerVideo />
			</div>
			<div className="sponsor-section-container">
				<SponsorSection />
			</div>
			<div className="waywf-section-container">
				<WAYWF />
			</div>
			<div className="faq-section-container">
				<FAQSection />
			</div>
		</div>
	);
};

export default HomeTemplate;
