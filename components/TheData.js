import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion for animations
import "../styles/TheData.css"; // Import external CSS for styling
import { stats } from "../constants/ThedataItems.js";

const TheData = () => {
  return (
    <motion.div
      className="stats-container"
      initial={{ opacity: 0, y: 50 }} // Start hidden & slightly lower
      whileInView={{ opacity: 1, y: 0 }} // Animate into place on scroll
      transition={{ duration: 0.8, ease: "easeOut" }} // Smooth animation
      viewport={{ once: true }} // Triggers animation only once
    >
      {/* Section Title with Animation */}
      <motion.h2
        className="stats-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        The Data
      </motion.h2>

      {/* Grid layout for displaying stats */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            className="stats-card"
            initial={{ opacity: 0, scale: 0.8 }} // Start hidden & smaller
            whileInView={{ opacity: 1, scale: 1 }} // Animate into view
            transition={{ duration: 0.6, delay: index * 0.2 }} // Stagger animation
            viewport={{ once: true }}
          >
            <div className="stats-icon">{stat.icon}</div>
            <p className="stats-value">{stat.value}</p>
            <p className="stats-label">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TheData;
