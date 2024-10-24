import React from "react";
import './TermsOfUseTemplate.scss'
import TermsOfUseSection from "../../organisms/TermsOfUse/TermsOfUseSection";

const TermsOfUseTemplate = () => {
	return (
		<div className="terms-of-use-page-container">
			<div className="term-of-use-section-container">
				<TermsOfUseSection />
			</div>
		</div>
	);
};

export default TermsOfUseTemplate;
