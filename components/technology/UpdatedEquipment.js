import React from "react";
import "../../styles/UpdatedEquipment.css";

const EquipmentIntelligence = () => {
  return (
    <div className="rty-container-741">
      <header className="rty-header-741">
        <div className="rty-logo-741">
          <img
            src={"/assets/images/our-technology/equip_image.png"}
            alt="Equip ID Logo"
            className="rty-logo-image-741"
          />
          <p className="rty-tagline-741">Giving Your Equipment a Voice</p>
        </div>
        <h1 className="rty-title-741">Components Of Equipment Intelligence</h1>
      </header>

      <div className="rty-content-wrapper-741">
        <div className="rty-section-741 rty-core-741">
          <h2 className="rty-heading-741">CORE</h2>
          <p className="rty-paragraph-741">
            Equipment data, warranty, manuals & technical documentation from
            OEM.
          </p>
        </div>
        <div className="rty-section-852 rty-content-852">
          <h2 className="rty-heading-852">CONTENT</h2>
          <p className="rty-paragraph-852">
            Supportive content, benchmarks & alerts from web; repair history,
            performance measurements from service company CRM systems.
          </p>
        </div>

        <div className="rty-center-741">
          <img
            src={"/assets/images/our-technology/circal_image.avif"}
            alt="Equip ID"
          />
        </div>

        <div className="rty-section-963 rty-classroom-963">
          <h2 className="rty-heading-963">CLASSROOM</h2>
          <p className="rty-paragraph-963">
            On-demand technician upskilling, certification & training.
          </p>
        </div>
        <div className="rty-section-357 rty-compliance-357">
          <h2 className="rty-heading-357">COMPLIANCE</h2>
          <p className="rty-paragraph-357">
            Equipment owner task lists; insurer & regulatory compliance
            requirements.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentIntelligence;
