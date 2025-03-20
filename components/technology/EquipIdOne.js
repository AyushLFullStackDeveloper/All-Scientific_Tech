import React from "react";
import "../../styles/EquipIdOne.css";


const EquipmentSection = () => {
  return (
    <div className="florp-bizzle">
      <div className="zibble-quark">
        <img
          src={"/assets/images/our-technology/equip_image.png"}
          alt="Equip Logo"
          className="snorf-blip"
        />
        <h2 className="glorp-nib">Empowering Equipment with Intelligence</h2>
      </div>
      <div className="wizzle-frump">
        <p className="dorp-sklon">
          ALL Scientific provides equipment-specific data and support through
          Equip ID. Our certified technicians install Equip ID Tags, ensuring
          seamless tracking and maintenance.
        </p>
        <p className="krong-dizzle">
          The right information, at the right time, for optimized equipment
          maintenance and compliance.
        </p>
        <img
          src={ "/assets/images/our-technology/equipment.avif"}
          alt="Equipment"
          className="skrib-muff"
        />
      </div>
    </div>
  );
};

export default EquipmentSection;
