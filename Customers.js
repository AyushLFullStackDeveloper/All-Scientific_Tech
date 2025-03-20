import React from "react";
import "../styles/Customers.css";
import Heading from "./common/Heading"; // Reusable heading component
import ImageComponent from "./common/ImageComponent.js"; // Reusable Image component

const Customers = () => {
  return (
    <div className="customers-section">
      {/* Customers Section Title */}
      <Heading level={2} className="stats-title">
        The Customers
      </Heading>

      {/* Customers Image */}
      <div className="customers-image-container">
        <ImageComponent
          src="/assets/images/customers/customers-img.avif"
          alt="Customers"
          className="customers-image"
        />
      </div>
    </div>
  );
};

export default Customers;
