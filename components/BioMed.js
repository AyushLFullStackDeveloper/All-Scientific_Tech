import React from 'react';
import '../styles/BioMed.css';
import { serviceCategories, serviceFeatures } from '../constants/BiomedData';
import HeroSection from './common/HeroSection.js';
import ServiceCategory from './common/ServiceCategory';
import RepairDepotSection from './common/RepairDepotSection.js';

const BioMedComponent = () => {
    return (
        <div className="biomed-page">
            <HeroSection 
                backgroundImage="/assets/images/bio-medical/biomed-hero.avif"
                title="Biomedical - Laboratory &ensp; Equipment Repair Refrigeration - Freezers"
                className="hero-section-bio "
            />

            <div className="service-categories-container">
                <div className="service-categories">
                    {serviceCategories.slice(0, 4).map(category => (
                        <ServiceCategory key={category.id} image={category.image} label={category.label} />
                    ))}
                </div>
                
                <div className="service-categories">
                    {serviceCategories.slice(4, 8).map(category => (
                        <ServiceCategory key={category.id} image={category.image} label={category.label} />
                    ))}
                </div>
            </div>
            
            <RepairDepotSection 
                backgroundImage="/assets/images/bio-medical/biomed-herobg.avif"
                features={serviceFeatures}
            />
        </div>
    );
};

export default BioMedComponent;
