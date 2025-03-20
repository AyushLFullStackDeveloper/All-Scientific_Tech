import React from "react";
import "../../styles/OurTechnology.css";
import UtilizeCoreSection from "./UtilizeCore.js";
import EquipmentSection from "./EquipIdOne.js";
import EquipmentIntelligence from "./UpdatedEquipment.js";
import TechAccess from "./TecniciansAccess.js";
import HowItWork from "./HowItWork.js";
import IntegrationParts from "./IntegrationParts.js";
import LogBookPage from "./LogBook.js";
import SupplierGauge from "./SupplierGauge.js";
import AutomationServices from "./ServiceAutomation.js";

const OurTechnology = () => {
  return (
    <div className="qaz-container-910">
      {/* Hero Section */}
      <div className="qaz-hero-910"
      style={{
          backgroundImage: `url("/assets/images/our-technology/Connnecting-technology-home.avif")`,
        }}
      >
        <h1 className="qaz-title-910">Connecting Technology</h1>
      </div>

      {/* Content Section */}
      <div className="qaz-content-910">
        <p className="qaz-para-910">
          ALL Scientific Tech's dedication to contemporary technology
          distinguishes it from its competitors, who are unable to modernize
          their service delivery platform due to a lack of funds, knowledge, and
          ambition.
        </p>
        <p className="qaz-para-823">
          Steven Gotfried, the former CEO and founder of ServiceChannel, is the
          primary force behind the technology platform transformation at ALL
          Scientific Tech. Steven draws on his expertise and playbook to improve
          the technology platform of ALL Scientific Tech, thereby improving the
          efficacy of the workflow for the team and customers.
        </p>

        {/* Benefits Section */}
        <div className="qaz-benefits-910">
          <h2 className="qaz-heading-910">
            How this transformation benefits ALL Scientific Tech's customers:
          </h2>
          <ul className="qaz-list-910">
            <li className="qaz-item-910">
              <strong>Adherence to SLAs:</strong> Ensuring prompt and reliable
              service delivery.
            </li>
            <li className="qaz-item-711">
              <strong>Reducing Equipment Downtime:</strong> Enhancing
              productivity and minimizing disruptions.
            </li>
            <li className="qaz-item-512">
              <strong>Lowering Total Cost of Ownership:</strong> Optimizing
              maintenance costs and extending equipment life expectancy.
            </li>
            <li className="qaz-item-319">
              <strong>Increasing Equipment Longevity:</strong> Keeping valuable
              assets in optimal condition longer.
            </li>
            <li className="qaz-item-428">
              <strong>Enhancing Communication:</strong> Through direct system
              connectivity.
            </li>
            <li className="qaz-item-634">
              <strong>Developing Partnerships:</strong> Expanding ALL Scientific
              Tech’s capabilities.
            </li>
          </ul>
        </div>

        {/* Conclusion */}
        <p className="qaz-summary-910">
          By leveraging technology, ALL Scientific Tech improves its service
          offerings, operational efficiency, and profitability. Our customers
          can trust that their critical equipment is in the hands of a company
          dedicated to excellence and continuous improvement.
        </p>
      </div>


      <AutomationServices/>
      <UtilizeCoreSection />
      <EquipmentSection />
      <EquipmentIntelligence />
      <TechAccess />
      <HowItWork />
      <IntegrationParts />
      <LogBookPage />
      <SupplierGauge />
    </div>
  );
};

export default OurTechnology;