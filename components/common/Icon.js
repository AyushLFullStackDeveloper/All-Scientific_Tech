import React from "react";

const iconMap = {
  check: (
    <path d="M6 10.8L2.4 7.2L1 8.6L6 13.6L15 4.6L13.6 3.2L6 10.8Z" />
  ),
  arrowRight: (
    <path d="M4 8H12M8 4L12 8L8 12" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
  ),
};

const Icon = ({ name, className = "", size = 16, color = "currentColor" }) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 16 16"
      fill={color}
      role="img"
      aria-label={name}
    >
      {iconMap[name] || <circle cx="8" cy="8" r="6" />} {/* Default icon if not found */}
    </svg>
  );
};

export default Icon;
