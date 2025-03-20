import React from "react";
import "../../styles/About.css"; // Ensure this path is correct
import ExperienceSection from "./ExperienceSection";
import EthosPartnership from "./EthosPartnership";
import EthosBoard from "./EthosBoard";
import ManagementTeam from "./ManagementTeam";
import Advisors from "./Advisors";
import MarketMechanisms from "./MarketMechanisms"; 
import Locations from "./Locations";
import Heading from "../common/Heading";
import Text from "../common/Text";

const AboutHome = () => {
  return (
    <div className="info-container">
      <section className="info-banner">
        <div className="info-overlay fade-in">
          <Heading level={1} className="info-title">About Us</Heading>
          <Heading level={2} className="info-subtitle">
            Building Stronger, Healthier Relationships in Science
          </Heading>
          <Text className="first-text">
            At All Scientific, we are more than just equipment repair. Our
            mission is to empower the scientific community by ensuring that
            faulty equipment never hinders groundbreaking research. With a
            dedication to quality and precision, we provide innovative solutions
            that make a lasting impact.
          </Text>
        </div>
      </section>
      <ExperienceSection />
      <EthosPartnership />
      <EthosBoard />
      <ManagementTeam />
      <Advisors />
      <MarketMechanisms />
      <Locations />
      
    </div>
  );
};

export default AboutHome;
