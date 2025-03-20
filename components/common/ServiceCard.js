import React from "react";
import Heading from "./Heading";

const ServiceCard = ({ image, alt, title, alignment }) => {
    return (
        <div className="service-item">
            <div className="image-container">
                <img src={image} alt={alt} className="service-image" />
                <div className={`service-overlay ${alignment}-aligned`}>
                    <Heading level={2} className="service-title">{title}</Heading>
                </div>
                <div className="service-hover-info">
                    <div className="info-content">
                        <Heading level={3}>{title}</Heading>
                        <p>Expert maintenance and certification to ensure optimal performance and safety compliance.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;
