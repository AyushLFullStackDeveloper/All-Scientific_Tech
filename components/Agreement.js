import React, { useState } from "react";
import { agreementData } from "../constants/AgreementData";
import "../styles/Agreement.css";
import HeroSection from "./common/HeroSection.js";
import AgreementCard from "./common/AgreementCard.js";
import AgreementDetails from "./common/AgreementDetails.js";

const AnimatedAgreementsComponent = () => {
    const [selectedAgreement, setSelectedAgreement] = useState(null);

    const handleLearnMore = (agreement) => {
        setSelectedAgreement(agreement);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    const handleBack = () => {
        setSelectedAgreement(null);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <div className="agreements-section">
            {selectedAgreement ? (
                <>
                    <HeroSection
                        backgroundImage={selectedAgreement.details.heroSection.image}
                        title={selectedAgreement.details.heroSection.text}
                        className="hero-section-agreement"
                    />
                    <AgreementDetails agreement={selectedAgreement} onBack={handleBack} />
                </>
            ) : (
                <>
                    <div className="section-title">
                        <h2>Our Agreements</h2>
                        <p>Learn more about our service agreements and commitments to our clients</p>
                    </div>
                    <div className="agreement-cards">
                        {agreementData.map((agreement, index) => (
                            <AgreementCard
                                key={agreement.id}
                                agreement={agreement}
                                onLearnMore={handleLearnMore}
                                index={index}
                            />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default AnimatedAgreementsComponent;
