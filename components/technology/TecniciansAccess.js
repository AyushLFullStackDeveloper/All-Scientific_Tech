import React from "react";
import "../../styles/TechnicianAccess.css";


const TechAccess = () => {
  return (
    <div className="zxc-container-963">
      {/* Header Section */}
      <header className="zxc-header-963">
        <img src={"/assets/images/our-technology/equip_image.png"} alt="Equip ID Logo" className="zxc-logo-963" />
        <p className="zxc-tagline-963">Giving Your Equipment a Voice</p>
      </header>
      
      {/* Title Section */}
      <h2 className="zxc-title-963">Tagnicians Install the Equip ID Tag</h2>
      
      {/* Content Section */}
      <div className="zxc-content-963">
        <img src={ "/assets/images/our-technology/Technician-working.avif"} alt="Technician Working" className="zxc-image-963" />
        <div className="zxc-certification-963">
          <img src={ "/assets/images/our-technology/certified.avif"} alt="Certified Tagnician" className="zxc-certified-963" />
          <p className="zxc-paragraph-963">
            <a href="#" className="zxc-link-963">All Scientific</a>'s technicians are trained to install Equip ID
            Tags on Laboratory Refrigeration, MRI Chillers, and research equipment.
          </p>
        </div>
      </div>
      
      {/* Access Section */}
      <h2 className="zxc-subtitle-963">TECHNICIAN ACCESS</h2>
      <div className="zxc-access-section-963">
        <div className="zxc-category-963 zxc-offsite-963">OFFSITE</div>
        <div className="zxc-category-963 zxc-onsite-963">ONSITE</div>
      </div>
      
      {/* Access Grid Section */}
      <div className="zxc-access-grid-963">
        {/* Preview Access Card */}
        <div className="zxc-access-item-963">
          <img src={"/assets/images/our-technology/Preview.avif"} alt="Preview" className="zxc-icon-963" />
          <h3 className="zxc-access-title-963">PREVIEW</h3>
          <p className="zxc-paragraph-852">Call avoidance support, suggests tools and skills required</p>
        </div>
        
        {/* Connect Access Card */}
        <div className="zxc-access-item-852">
          <img src={"/assets/images/our-technology/Connect.avif"} alt="Connect" className="zxc-icon-852" />
          <h3 className="zxc-access-title-852">CONNECT</h3>
          <p className="zxc-paragraph-753">Service technician connects to equipment intelligence</p>
        </div>
        
        {/* Verify Access Card */}
        <div className="zxc-access-item-753">
          <img src={ "/assets/images/our-technology/Verify.avif"} alt="Verify" className="zxc-icon-753" />
          <h3 className="zxc-access-title-753">VERIFY</h3>
          <p className="zxc-paragraph-159">Service technician is authorized to repair</p>
        </div>
        
        {/* Access Capability Card */}
        <div className="zxc-access-item-159">
          <img src={"/assets/images/our-technology/Access.avif"} alt="Access" className="zxc-icon-159" />
          <h3 className="zxc-access-title-159">ACCESS</h3>
          <p className="zxc-paragraph-357">Equipment intelligence delivered based on user’s role</p>
        </div>
        
        {/* Repair Capability Card */}
        <div className="zxc-access-item-357">
          <img src={ "/assets/images/our-technology/Repair.avif"} alt="Repair" className="zxc-icon-357" />
          <h3 className="zxc-access-title-357">REPAIR</h3>
          <p className="zxc-paragraph-951">Service technician proceeds with repair</p>
        </div>
      </div>
    </div>
  );
};

export default TechAccess;
