import React from "react";
import "../styles/TempControll.css";
import { equipmentData } from "../constants/TempControlData.js";
import Heading from "./common/Heading.js";
import Text from "./common/Text.js";
import ImageComponent from "./common/ImageComponent.js";

const TempControll = () => {
  return (
    <div className="temp-controll-container">
      {/* Hero Banner Section */}
      <div
        className="hero-banner"
        style={{
          backgroundImage: "url('/assets/images/temp-control/temp-bg.avif')",
        }}
      >
        <div className="banner-content">
          <Heading level={1} className="hero-title">
            Temperature Controlled Laboratory Equipment
          </Heading>
        </div>
      </div>

      {/* Equipment Sections */}
      {equipmentData.map((equipment, index) => (
        <section
          key={equipment.id}
          className={`equipment-section ${
            index % 2 === 0 ? "bg-light" : "bg-dark"
          }`}
        >
          <div className="equipment-container">
            {/* Image column - Order changes based on index for visual variety */}
            <div
              className={`equipment-image ${
                index % 2 === 1 ? "order-right" : "order-left"
              }`}
            >
              <ImageComponent
                src={equipment.image}
                alt={equipment.altText}
                className="rounded-image"
              />
            </div>

            {/* Content column */}
            <div className="equipment-content">
              <Heading level={2} className="equipment-title">
                {equipment.title}
              </Heading>
              <Heading level={3} className="equipment-subtitle">
                {equipment.subtitle}
              </Heading>
              <Text className="equipment-description">
                {equipment.description}
              </Text>
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default TempControll;
