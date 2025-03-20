import React from "react";
import "../../styles/EthosPartnership.css";
import Heading from "../common/Heading";
import Text from "../common/Text";
import ImageComponent from "../common/ImageComponent.js";
import { partnershipData } from "../../constants/EthosPartnershipData.js";

const EthosPartnership = () => {


  return (
    <div className="ethos-container">
      {/* Section Title */}
      <Heading level={2} className="ethos-title">
        Ethos Partnership
      </Heading>

      {/* Partnership Cards Section */}
      <div className="ethos-cards">
        {partnershipData.map((item, index) => (
          <div key={index} className="ethos-card">
            {/* Card Image */}
            <ImageComponent src={item.image} alt={item.alt} className="ethos-icon" />
            
            {/* Card Title */}
            <Heading level={3}>{item.title}</Heading>
            
            {/* Card Description */}
            <Text>{item.description}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthosPartnership;
