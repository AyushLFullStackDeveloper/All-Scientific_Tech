import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/MriChillers.css";
import { mriProjects, mriServices, mriBenefits } from "../constants/MrichillersData.js";
import Heading from "../components/common/Heading";
import Text from "../components/common/Text";
import Icon from "../components/common/Icon";

// Reusable ProjectCard Component
const ProjectCard = ({ projectData }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = projectData.images;

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="project-card">
      <div className="carousel-container">
        <div className="carousel">
          <img
            src={images[currentSlide]}
            alt={`${projectData.location} slide ${currentSlide + 1}`}
            className="carousel-image"
          />
          <div className="carousel-controls">
            <button className="carousel-control prev" onClick={prevSlide}>‹</button>
            <button className="carousel-control next" onClick={nextSlide}>›</button>
          </div>
        </div>
        <div className="project-info">
          <Heading level={3} className="project-location">{projectData.location}</Heading>
        </div>
      </div>
    </div>
  );
};

// Main MRI Chillers Page Component
const MriChillerProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="projects-container">
      {/* Hero Section */}
      <div className="hero-section-mri"
        style={{ backgroundImage: "url('/assets/images/mri-chillers/mri-bg.avif')" }}>
        <Heading level={1} className="hero-title">MRI Chiller Installation Projects</Heading>
      </div>

      {/* Main Content Section */}
      <section className="content-section">
        {/* Info Section */}
        <div className="info-section">
          <Heading level={2} className="section-title">Why MRI Chillers Are Essential</Heading>
          <Text className="info-text">
            When patient care requires medical imaging, it is essential that the
            equipment is fully functional and supported by a reliable cooling
            system. Utilizing a chiller is crucial for cooling and maintaining
            the specific temperatures of MRI components.
          </Text>
          <Text className="info-text">
            One of the key functions of the chiller is to cool the coldhead, an
            important mechanical component that recondenses helium gas back into
            a liquid after it has cooled the MRI magnet. This process prevents
            helium from evaporating, keeps the magnet at the required
            temperature, and helps avoid magnet quench.
          </Text>
        </div>

        {/* Benefits Section */}
        <div className="benefits-section">
          <Heading level={2} className="section-title">Key Benefits</Heading>
          <ul className="benefits-list">
            {mriBenefits.map((benefit, index) => (
              <li key={index} className="benefit-item">
                <Icon name="check" className="benefit-icon" />
                <Text>{benefit}</Text>
              </li>
            ))}
          </ul>
        </div>

        {/* System Diagram Section */}
        <div className="system-diagram-section">
          <Heading level={2} className="section-title">Repair - Maintenance - Installation</Heading>
          <div className="diagram-container">
            <img
              src="/assets/images/mri-chillers/mri-chillers-dig.avif"
              alt="MRI Chiller System Diagram"
              className="system-diagram"
            />
          </div>
        </div>

        {/* Services Section */}
        <div className="services-section">
          <Heading level={2} className="section-title">Our Complete Chiller Services</Heading>
          <div className="services-grid-mri">
            {mriServices.map((service) => (
              <div key={service.id} className="service-card">
                <Icon name="arrow-right" className="service-icon" />
                <Heading level={3} className="service-title-mri">{service.title}</Heading>
              </div>
            ))}
          </div>
        </div>

        {/* Project Cards Section */}
        <div className="project-cards-section">
          <Heading level={2} className="section-title">MRI Chiller Installation Projects</Heading>
          <div className="project-cards-grid">
            {mriProjects.map((project) => (
              <ProjectCard key={project.id} projectData={project} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default MriChillerProjects;
  