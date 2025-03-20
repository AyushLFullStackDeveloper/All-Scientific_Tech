import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa"; // Import icons
import "../../styles/EthosBoard.css";
import { boardMembers } from "../../constants/EthosboardData.js";
import Heading from "../common/Heading";
import ImageComponent from "../common/ImageComponent.js";

const EthosBoard = () => {
  return (
    <div className="ethos-container">
      {/* Board Title */}
      <Heading level={2} className="ethos-title">
        Ethos Board
      </Heading>

      <div className="board-members">
        {boardMembers.map((member, index) => (
          <div key={index} className="board-member">
            {/* Member Image */}
            <ImageComponent
              src={member.image}
              alt={member.name}
              className="member-image"
            />

            {/* Member Name */}
            <Heading level={3} className="member-name">
              {member.name}
            </Heading>

            {/* Social Icons */}
            <div className="social-icons">
              {member.facebookUrl && (
                <a href={member.facebookUrl} className="social-link">
                  <FaFacebookF />
                </a>
              )}
              {member.linkedinUrl && (
                <a href={member.linkedinUrl} className="social-link">
                  <FaLinkedinIn />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EthosBoard;
