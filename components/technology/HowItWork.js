import React from "react";
import "../../styles/HowItWork.css";

const HowItWork = () => {
  return (
    <div className="xyz-container-abcd">
      {/* Header Section */}
      <header className="xyz-header-abcd">
        <img src={ "/assets/images/our-technology/equip_image.png"} alt="Equip ID Logo" className="xyz-logo-img-abcd" />
        <span className="xyz-subtitle-abcd">Giving Your Equipment a Voice</span>
      </header>

      {/* Title */}
      <h1 className="xyz-title-abcd">How it Works</h1>
      <p className="xyz-description-abcd">INTELLIGENCE DASHBOARD / REPORTS</p>

      {/* Content Section */}
      <div className="xyz-section-container-abcd">
        <div className="xyz-section-abcd">
          <h2 className="xyz-section-title-abcd">Dashboard</h2>
          <p className="xyz-text-abcd">
            Provide laboratory personnel access to repair, maintenance, and
            calibration work orders.
          </p>

          <h2 className="xyz-section-title-abcd">Reports</h2>
          <ul className="xyz-list-abcd">
            <li className="xyz-list-item-abcd">Compliance</li>
            <li className="xyz-list-item-abcd">Exception</li>
            <li className="xyz-list-item-abcd">Analytics</li>
            <li className="xyz-list-item-abcd">Spend</li>
            <li className="xyz-list-item-abcd">Warranties</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="xyz-image-container-abcd">
          <img
            src={ "/assets/images/our-technology/Dashboard.avif"}
            alt="Dashboard"
            className="xyz-main-image-abcd"
          />
        </div>
      </div>

      {/* Footer Text */}
      <p className="xyz-footer-text-abcd">
        Tapping a T.A.G. delivers critical Equipment intelligence directly to a
        customer or service technician
      </p>

      {/* Mobile Screens */}
      <div className="xyz-images-abcd">
        <img src={ "/assets/images/our-technology/mobiles.avif"} alt="Mobile Screen 1" className="xyz-image-abcd" />
      </div>
    </div>
  );
};

export default HowItWork;
