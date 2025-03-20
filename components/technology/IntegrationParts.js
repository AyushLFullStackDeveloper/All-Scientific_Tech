import React from "react";
import "../../styles/IntegrationParts.css";

const IntegrationParts = () => {
  return (
    <div className="xyz-wrapper-abc123">
      {/* Header Section */}
      <header className="xyz-header-abc123">
        <img src={ "/assets/images/our-technology/equip_image.png"} alt="Equip ID Logo" className="xyz-logo-abc123" />
        <span className="xyz-tagline-abc123">Giving Your Equipment a Voice</span>
      </header>

      {/* Title & Subtitle */}
      <h1 className="xyz-title-abc123">Integration with Parts Suppliers</h1>
      <p className="xyz-subtitle-abc123">
        PREVIEW MODE SUGGESTS PARTS REQUIRED AND NEAREST SUPPLIERS
      </p>

      {/* Content Section */}
      <div className="xyz-content-abc123">
        {/* Mobile Screens */}
        <div className="xyz-mobile-container-abc123">
          <img
            src={ "/assets/images/our-technology/last-mobile.avif"}
            alt="Mobile Screen 1"
            className="xyz-mobile-image-abc123"
          />
        </div>
      </div>
    </div>
  );
};

export default IntegrationParts;