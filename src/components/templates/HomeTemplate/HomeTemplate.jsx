import React, { useRef } from "react";
import "./HomeTemplate.scss";
import WelcomeSection from "../../organisms/HomePage/WelcomeSection/WelcomeSection";
import AboutUs from "../../organisms/HomePage/AboutUsSection/AboutUs";
import OfferSection from "../../organisms/HomePage/OfferSection/OfferSection";
import FeatureSection from "../../organisms/HomePage/FeatureSection/FeatureSection";
import TrailerVideo from "../../organisms/HomePage/TrailerVideoSection/TrailerVideo";
import SponsorSection from "../../organisms/HomePage/SponsorSection/SponsorSection";
import FAQSection from "../../organisms/HomePage/FAQSection/FAQSection";
import WAYWF from "../../organisms/HomePage/WAYWFSection/WAYWF";
import Header from "../../organisms/Header/Header";
import Footer from "../../organisms/Footer/Footer";

const HomeTemplate = () => {
	// Create refs for each section
	const homeRef = useRef(null);
	const aboutUsRef = useRef(null);
	const trailerRef = useRef(null);
	const sponsorRef = useRef(null);
	const faqRef = useRef(null);

	// Function to scroll to a specific section
	const scrollToSection = (section) => {
		switch (section) {
			case "home":
				homeRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "aboutUs":
				aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "trailer":
				trailerRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "sponsor":
				sponsorRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			case "faq":
				faqRef.current.scrollIntoView({ behavior: "smooth" });
				break;
			default:
				break;
		}
	};

	return (
		<div className="homepage-container">
			<header className="page-header">
				<Header isTermOfUse={false} scrollToSection={scrollToSection} />
			</header>
			<div className="welcome-section" ref={homeRef}>
				<WelcomeSection />
			</div>
			<div className="about-us-section" ref={aboutUsRef}>
				<AboutUs />
			</div>
			<div className="offer-section-container">
				<OfferSection />
			</div>
			<div className="feature-section-container">
				<FeatureSection />
			</div>
			<div className="trailer-video-section-container" ref={trailerRef}>
				<TrailerVideo />
			</div>
			<div className="sponsor-section-container" ref={sponsorRef}>
				<SponsorSection />
			</div>
			<div className="waywf-section-container">
				<WAYWF />
			</div>
			<div className="faq-section-container" ref={faqRef}>
				<FAQSection />
			</div>
			<footer className="page-footer">
				<Footer />
			</footer>
		</div>
	);
};

export default HomeTemplate;
