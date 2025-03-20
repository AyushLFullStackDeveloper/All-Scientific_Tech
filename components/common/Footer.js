import React, { useState } from "react";
import "../../styles/Footer.css"; // External CSS file

export default function Footer() {
  const [activeLocation, setActiveLocation] = useState(0);
  
  // Location data with coordinates
  const locations = [
    {
      name: "New York / New Hyde Park",
      address: "1804 Plaza Avenue, New Hyde Park, NY 11040",
      coords: "40.7351,-73.6876" // Approximate coordinates
    },
    {
      name: "New Jersey / Holmdel",
      address: "2139 HWY 35, Holmdel, NJ 07733",
      coords: "40.4104,-74.1887" // Approximate coordinates
    },
    {
      name: "Pennsylvania / Philadelphia",
      address: "3500 Scotts Lane, Philadelphia, PA 19129",
      coords: "40.0115,-75.1929" // Approximate coordinates
    }
  ];

  // Generate Google Maps URL for the active location
  const getMapUrl = (index) => {
    const location = locations[index];
    return `https://maps.google.com/maps?q=${location.coords}&z=15&output=embed`;
  };

  return (
    <footer className="footer">
      <div className="footer-main">
        <div className="footer-container">
          {/* Company Info Section - First column */}
          <div className="footer-section company-info">
            <img 
              src={"/assets/images/footer/all-logo.avif"} 
              alt="ALL Scientific Tech" 
              className="footer-logo" 
              loading="lazy"
            />
            <p>
              Expert services for Repair, Maintenance, Calibration, and Installation of Bio-Medical 
              & Laboratory Refrigeration, MRI & Medical Chillers, and Temperature Controlled
              Research Equipment.
            </p>
          </div>

          {/* Middle column with contact and locations */}
          <div className="footer-info-column">
            {/* Contact Info Section */}
            <div className="footer-section contact-section">
              <h4><i className="fas fa-address-book"></i> Contact Info</h4>
              <p><i className="fas fa-envelope"></i> Email: <a href="mailto:sales@alscientific.com"> sales@alscientific.com</a></p>
              <p><i className="fas fa-phone"></i> Phone: <a href="tel:(718) 756 - 8100"> (718) 756 - 8100</a></p>
            </div>

            {/* Locations Section */}
            <div className="footer-section locations-section">
              <h4><i className="fas fa-map-marker"></i> Our Locations</h4>
              <ul>
                {locations.map((location, index) => (
                  <li key={index}>
                    <i className="fas fa-map-pin"></i>
                    <a 
                      href={`https://maps.google.com/maps?q=${location.coords}`} 
                      target="_blank" 
                      rel="noopener noreferrer"
                    >
                      {location.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Map Section - Last column */}
          <div className="footer-section locations-map-section">
            <h4><i className="fas fa-map"></i> Service Area</h4>
            
            {/* Map container */}
            <div className="map-container">
              <iframe 
                src={getMapUrl(activeLocation)}
                className="location-map"
                title="Office Locations"
                allowFullScreen
                loading="lazy"
              ></iframe>
            </div>
            
            {/* Location selector tabs */}
            <div className="location-tabs">
              {locations.map((location, index) => (
                <div 
                  key={index}
                  className={`location-tab ${activeLocation === index ? 'active' : ''}`}
                  onClick={() => setActiveLocation(index)}
                >
                  {location.name.split('/')[0].trim()}
                </div>
              ))}
            </div>
            
            {/* Active location details */}
            <div className="active-location-details">
              <p>{locations[activeLocation].address}</p>
              <a 
                href={`https://maps.google.com/maps?q=${locations[activeLocation].coords}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="directions-link"
              >
                <i className="fas fa-directions"></i> Get Directions
              </a>
            </div>
          </div>
        </div>

        {/* Partner Logos */}
        <div className="footer-logos">
          <img 
            src={"/assets/images/footer/nlra-logo-footer.avif"} 
            alt="Eco Certification" 
            className="partner-logo" 
            loading="lazy"
          />
          <img 
            src={"/assets/images/footer/footer-logo.avif"} 
            alt="NLRA Logo" 
            className="partner-logo" 
            loading="lazy"
          />
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2025 ALL Scientific Tech. All rights reserved.</p>
      </div>
    </footer>
  );
}