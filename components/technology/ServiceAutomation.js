import React from "react";
import "../../styles/ServiceAutomation.css";

const AutomationServices = () => {
  return (
    <div className="xyz-container-456">
      <div className="xyz-image-456">
        <img
          src={"/assets/images/our-technology/connecting-technology.avif"}
          alt="Automation Service"
          className="xyz-logo-456"
        />
      </div>
      <div className="xyz-content-456">
        <h2 className="xyz-title-456">Connecting Technology</h2>
        <ul className="xyz-list-456">
          <li className="xyz-item-456">
            <span className="xyz-highlight-456">➤ UtilizeCore:</span> Service
            Automation, Field force work order management
          </li>
          <li className="xyz-item-789">
            <span className="xyz-highlight-789">➤ Equip ID:</span> Equipment
            Intelligence (Asset Management)
          </li>
          <li className="xyz-item-321">
            <span className="xyz-highlight-321">➤ RepairPro-LogBook:</span>
            Technician Logbook
          </li>
          <li className="xyz-item-654">
            <span className="xyz-highlight-654">➤ Supplier Gauge:</span>
            Business Reviews Corrective Action Plans
          </li>
          <li className="xyz-item-987">
            <span className="xyz-highlight-987">➤ Remmcom:</span> Remote
            Monitoring (Runtime Meters Early Warning)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default AutomationServices;
