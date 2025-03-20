import React from "react";
import ContentSection from "./ContentSection";
import Button from "./Button";

const AgreementDetails = ({ agreement, onBack }) => {
    return (
        <div className="detailed-agreement-content">
            <div className={`${agreement.id}-content`}>
                <div className="content-wrapper">
                    <h2>{agreement.details.subtitle}</h2>
                    <h3>{agreement.title}</h3>

                    <div className="description-text">
                        <p>{agreement.details.description}</p>
                    </div>

                    {agreement.details.contentSections.map((section, index) => (
                        <ContentSection key={index} section={section} />
                    ))}
                </div>
            </div>

            {/* BACK BUTTON */}
            <div className="button-container">
                <Button className="back-btn" onClick={onBack}>
                    Back to Agreements
                </Button>
            </div>
        </div>
    );
};

export default AgreementDetails;
