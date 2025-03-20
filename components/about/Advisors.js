import React from "react";
import "../../styles/Advisors.css";
import { advisors } from "../../constants/AdivsorsData.js";
import Heading from "../common/Heading.js";
import Text from "../common/Text.js";
import ImageComponent from "../common/ImageComponent.js";

const Advisors = () => {
  return (
    <div className="advisors-container">
      <Heading level={2} className="ethos-title">Advisors</Heading>
      <div className="advisors-grid">
        {advisors.map((advisor, index) => (
          <div key={index} className="advisor-card">
            <ImageComponent src={advisor.image} alt={advisor.name} className="advisor-image" />
            <Text className="advisor-name">{advisor.name}</Text>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Advisors;
