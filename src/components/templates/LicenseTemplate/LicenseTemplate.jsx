import React from "react";
import './LicenseTemplate.scss'
import LicenseSection from "../../organisms/License/LicenseSection";

const LicenseTemplate = () => {
	return (
		<div className="license-page-container">
			<div className="license-section-container">
				<LicenseSection />
			</div>
		</div>
	);
};

export default LicenseTemplate;
