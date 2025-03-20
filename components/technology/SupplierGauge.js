import React from "react";
import "../../styles/SupplierGauge.css";

const SupplierGauge = () => {
  return (
    <div className="mno-container-999">
      {/* Header Section */}
      <header className="mno-header-999">
        <img src={"/assets/images/our-technology/SupplierGauge_logo.avif"} alt="Supplier Gauge Logo" className="mno-logo-999" />
        <h1 className="mno-title-999">Simplifying Business Reviews, Amplifying Success</h1>
        <p className="mno-subtitle-999">
          <strong>
            ALL Scientific Partners with Supplier Gauge to enable Interactive Customer Business Reviews.
          </strong>
        </p>
      </header>

      {/* Introduction */}
      <section className="mno-intro-999">
        <p className="mno-paragraph-999">
          Welcome to Supplier Gauge Application – the ultimate tool for optimizing contractor and customer business reviews.
        </p>
        <p className="mno-paragraph-888">
          Our product provides an adaptable question-and-answer template tailored to your needs, creating a structured and
          effective review process.
        </p>
        <p className="mno-paragraph-777">
          Leverage the power of Microsoft Teams to easily conduct comprehensive reviews whether weekly, semiannual, quarterly,
          or monthly.
        </p>
      </section>

      {/* Features & Benefits Section */}
      <section className="mno-section-999">
        <h2 className="mno-heading-999">Features & Benefits</h2>
        <p className="mno-paragraph-666">
          <strong>Customizable Q&A Templates:</strong> Standardized and flexible question-and-answer templates that adapt based
          on customer service and equipment type.
        </p>
      </section>

      {/* Seamless Online Environment */}
      <section className="mno-section-888">
        <h2 className="mno-heading-888">Seamless Online Environment</h2>
        <p className="mno-paragraph-555">Utilize Microsoft Teams for real-time meetings, document sharing, and scheduling.</p>
        <ul className="mno-list-999">
          <li className="mno-item-999">Video Conferencing for efficient discussion</li>
          <li className="mno-item-888">Task & Scheduling Manager for tracking progress</li>
          <li className="mno-item-777">Secure document sharing for easy report access</li>
        </ul>
      </section>

      {/* In-Depth Reviews */}
      <section className="mno-section-777">
        <h2 className="mno-heading-777">In-Depth Reviews</h2>
        <p className="mno-paragraph-444">Consolidate feedback and data analysis to enhance contractor performance.</p>
      </section>

      {/* Contractor & Customer Section */}
      <section className="mno-section-666">
        <h2 className="mno-heading-666">Contractor</h2>
        <ul className="mno-list-888">
          <li className="mno-item-666">Service Level Agreement</li>
          <li className="mno-item-555">Detailed Statement of Work</li>
        </ul>

        <h2 className="mno-heading-555">Customer</h2>
        <ul className="mno-list-777">
          <li className="mno-item-444">Track number of service requests</li>
          <li className="mno-item-333">Analyze satisfaction scores and feedback</li>
          <li className="mno-item-222">Ensure payment alignments and approvals</li>
        </ul>
      </section>

      {/* Footer */}
      <footer className="mno-footer-999">
        <p>
          <a href="https://www.suppliergauge.com" target="_blank" rel="noopener noreferrer" className="mno-link-999">
            www.suppliergauge.com
          </a>
        </p>
      </footer>
    </div>
  );
};

export default SupplierGauge;
