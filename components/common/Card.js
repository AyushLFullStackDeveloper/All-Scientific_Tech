import React from "react";
import PropTypes from "prop-types";

const Card = ({ className = "", style = {}, children }) => {
  return (
    <div className={`card ${className}`} style={style}>
      {children}
    </div>
  );
};

Card.propTypes = {
  className: PropTypes.string,
  style: PropTypes.object,
  children: PropTypes.node.isRequired,
};

export default Card;
