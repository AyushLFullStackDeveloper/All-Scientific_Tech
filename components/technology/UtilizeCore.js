  import React from "react";
  import "../../styles/UtilizeCore.css";
  import { FaFileInvoice, FaChartBar, FaCogs, FaClipboardList, FaDollarSign, FaWrench, FaNetworkWired, FaEye } from "react-icons/fa";

  const UtilizeCoreSection = () => {
    return (
      <div className="vbn-container-147">
        {/* Left Side - Logo & Text */}
        <div className="vbn-left-147">
          <img src={ "/assets/images/our-technology/UtilizeCore-Logo-Blue.svg"} alt="UtilizeCore Logo" className="vbn-logo-147" />
          <p className="vbn-paragraph-147">
            <strong>All Scientific Tech</strong> subscribes to UtilizeCore's best-in-class
            cloud-based service management technology to assist its operations team
            in providing expedited repair and maintenance services, seamless customer
            communication, and comprehensive analytics and billing to their clientele.
          </p>
          <ul className="vbn-list-147">
            <li className="vbn-item-147"><FaClipboardList /> Work requests</li>
            <li className="vbn-item-963"><FaFileInvoice /> Proposals</li>
            <li className="vbn-item-852"><FaDollarSign /> Invoices</li>
            <li className="vbn-item-753"><FaWrench /> Warranties</li>
            <li className="vbn-item-369"><FaCogs /> Lifetime spend</li>
            <li className="vbn-item-258"><FaChartBar /> Analytics</li>
            <li className="vbn-item-159"><FaEye /> Reporting</li>
            <li className="vbn-item-456"><FaNetworkWired /> API Connectivity</li>
          </ul>
          <p className="vbn-paragraph-963">
            <strong>ALL Scientific Tech</strong> adheres to all rules and regulations
            required by the Authority Having Jurisdiction (AHJ), providing our
            customers with reliable and trustworthy service.
          </p>
        </div>
        
        {/* Right Side - Technology Flow Image */}
        <div className="vbn-right-147">
          <img src={ "/assets/images/our-technology/screen-mode.avif"} alt="UtilizeCore Flow" className="vbn-flow-147" />
          <div className="vbn-icons-147">
            <div className="vbn-icontext-147"><FaClipboardList /> Send Service Requests</div>
            <div className="vbn-icontext-963"><FaWrench /> Track Work Orders</div>
            <div className="vbn-icontext-852"><FaDollarSign /> Pay Invoices</div>
            <div className="vbn-icontext-753"><FaEye /> Streamline Inspections</div>
            <div className="vbn-icontext-369"><FaCogs /> Access Equipment Profiles</div>
            <div className="vbn-icontext-258"><FaChartBar /> Track Warranty Status</div>
          </div>
        </div>
      </div>
    );
  };

  export default UtilizeCoreSection;