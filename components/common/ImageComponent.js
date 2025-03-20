import React from "react";

const ImageComponent = ({ src, alt = "Image", className = "" }) => {
  return <img src={src} alt={alt} className={className} loading="lazy" />;
};

export default ImageComponent;
