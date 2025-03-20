import React from "react";
import Button from "./Button";

const AgreementCard = ({ agreement, onLearnMore, index }) => {
    return (
        <div
            className="agreement-card-container"
            style={{
                animation: "fadeIn 0.5s ease-out forwards",
                animationDelay: `${index * 0.15}s`,
                opacity: 0,
            }}
        >
            <div className="agreement-card">
                <div className="card-logo">
                    <img src={agreement.logo} alt={`${agreement.title} logo`} />
                </div>
                <h3 className="card-title">{agreement.title}</h3>
                <Button className="learn-btn" onClick={() => onLearnMore(agreement)}>
                    Learn More
                </Button>
            </div>
        </div>
    );
};

export default AgreementCard;
