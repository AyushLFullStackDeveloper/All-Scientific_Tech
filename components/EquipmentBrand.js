import React from "react";
import "../styles/EquipmentBrand.css";
import { categories, brands } from "../constants/EquipbrandsData.js";
import ListItem from "./common/ListItem.js";
import Heading from "./common/Heading.js";
import Text from "./common/Text.js";

const EquipmentBrand = () => {
  return (
    <div className="page-wrapper">
      <div className="content-container">
        
        {/* EQUIPMENT SECTION */}
        <section className="section-container">
          <div 
            className="section-hero equipment-hero"
            style={{ backgroundImage: "url('/assets/images/equipment-brands/equip-bg.avif')" }}
          >
            <div className="overlay">
              <Heading level={1}>Equipment Categories</Heading>
              <Text>Advanced solutions for laboratory and medical applications</Text>
            </div>
          </div>

          <div className="grid-container category-grid">
            {categories.map((item) => (
              <ListItem key={item.id} name={item.name} icon={item.icon} />
            ))}
          </div>
        </section>

        {/* BRANDS SECTION */}
        <section className="section-container">
          <div 
            className="section-hero brands-hero"
            style={{ backgroundImage: "url('/assets/images/equipment-brands/brand-bg.avif')" }}
          >
            <div className="overlay">
              <Heading level={1}>Brands Categories</Heading>
              <Text>Trusted manufacturers of high-quality laboratory equipment</Text>
            </div>
          </div>

          <div className="grid-container brands-grid">
            {brands.map((brand) => (
              <ListItem key={brand.id} name={brand.name} icon={brand.icon} />
            ))}
          </div>
        </section>

      </div>
    </div>
  );
};

export default EquipmentBrand;
