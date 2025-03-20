import React from "react";
import Heading from "./Heading.js";

const HeroSection = ({ backgroundImage, title, subtitle, className = "" }) => {
    return (
        <div className={`hero-section ${className}`} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="hero-overlay">
                <Heading level={1} className={`${className}-title hero-title`}>{title}</Heading>
                {subtitle && <p className={`${className}-subtitle hero-subtitle`}>{subtitle}</p>}
            </div>
        </div>
    );
};

export default HeroSection;
