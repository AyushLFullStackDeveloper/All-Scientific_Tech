import React from "react";
import "../styles/BioSafety.css";
import { useNavigate } from "react-router-dom";
import { services } from "../constants/BiosafetyData.js";
import HeroSection from "./common/HeroSection.js";
import Heading from "./common/Heading.js";
import ServiceCard from "./common/ServiceCard.js";
import Button from "./common/Button.js";

const BioSafetyComponent = () => {
    const navigate = useNavigate();

    const handleRequestService = () => {
        navigate("/contact");
    };

    return (
        <div className="biosafety-page">
            {/* Hero Section */}
            <HeroSection
                backgroundImage="/assets/images/bio-medical/biosafety-hero.avif"
                title="BioSafety Solutions"
                className="biosafety-hero"
            />


            <div className="biosafety-container">
                {/* Page Title Section */}
                <div className="page-title">
                    <Heading level={1}>Certification - Repair - Maintenance</Heading>
                    <p className="title-description">
                        Professional services for your critical laboratory equipment
                    </p>
                </div>

                {/* Services Grid Section */}
                <div className="services-grid">
                    {services.map((service) => (
                        <ServiceCard
                            key={service.id}
                            image={service.image}
                            alt={service.alt}
                            title={service.title}
                            alignment={service.alignment}
                        />
                    ))}
                </div>

                {/* Call-to-Action Section */}
                <div className="cta-section">
                    <Heading level={2}>
                        Ready to ensure your lab's safety and compliance?
                    </Heading>
                    <p>
                        Our team of certified technicians is ready to help with all your
                        biosafety needs.
                    </p>
                    <Button className="cta-button-bio" onClick={handleRequestService}>
                        Contact Us Today
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default BioSafetyComponent;
