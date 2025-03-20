import React from "react";
import "../../styles/ExperienceSection.css";
import Heading from "../common/Heading";
import Text from "../common/Text";
import ImageComponent from "../common/ImageComponent.js";

const ExperienceSection = () => {
  return (
    <div className="exp-container">
      <div className="exp-content">
        {/* Experience Image */}
        <ImageComponent src="/assets/images/about/experience-img.avif" alt="Lab Equipment" className="exp-image" />
        
        <div className="exp-text">
          {/* Experience Years */}
          <Heading level={2}>
            <span className="exp-highlight">Over</span> <span className="exp-bold-blue">75 Years</span>
          </Heading>
          
          {/* Services Title */}
          <Text className="exp-services-title">Providing services for</Text>
          
          {/* Services List */}
          <ul className="exp-services-list">
            <li>Bio-Medical / Laboratory Refrigeration</li>
            <li>MRI Chillers</li>
            <li>Research Equipment</li>
          </ul>
          
          {/* Experience Description */}
          <Text className="exp-since-text">
            <span className="exp-since-highlight">Since 1948,</span> our goal has been to keep laboratory equipment in peak
            working order, ensuring optimal performance for its entire lifespan.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSection;
