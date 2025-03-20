import React from 'react';
import Heading from './Heading';
import FeatureBox from './FeatureBox';

const RepairDepotSection = ({ backgroundImage, features }) => {
    return (
        <div className="repair-depot-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <Heading level={2}>Pickup / Repair Depot Service</Heading>
            <div className="feature-boxes">
                {features.map(feature => (
                    <FeatureBox key={feature.id} icon={feature.icon} title={feature.title} />
                ))}
            </div>
        </div>
    );
};

export default RepairDepotSection;