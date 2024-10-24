import React from "react";
import './PrivacyPolicyTemplate.scss'
import PrivacyPolicySection from "../../organisms/PrivacyPolicy/PrivacyPolicySection";

const PrivacyPolicyTemplate = () => {
	return (
		<div className="privacy-policy-page-container">
			<div className="privacy-policy-section-container">
				<PrivacyPolicySection />
			</div>
		</div>
	);
};

export default PrivacyPolicyTemplate;
