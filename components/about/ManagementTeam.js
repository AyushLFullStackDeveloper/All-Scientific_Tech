import React from "react";
import "../../styles/ManagementTeam.css";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { teamMembers } from "../../constants/ManagementData.js";
import Heading from "../common/Heading";
import Text from "../common/Text";
import ImageComponent from "../common/ImageComponent.js";

const ManagementTeam = () => {
  return (
    <div className="team-container">
      {/* Section Title */}
      <Heading level={2} className="team-title">
        Management Team
      </Heading>
      
      <div className="members-grid">
        {teamMembers.map((member, index) => (
          <div key={index} className="member-card">
            {/* Member Image */}
            <ImageComponent src={member.image} alt={member.name} className="member-image" />
            
            <div className="member-info">
              {/* Member Name */}
              <Heading level={3} className="member-name">
                {member.name}
              </Heading>
              
              {/* Member Role */}
              <Text className="member-role">{member.role}</Text>
              
              {/* Member Email */}
              <Text className="member-email">
                <a href={`mailto:${member.email}`} className="contact-link">
                  {member.email}
                </a>
              </Text>
              
              {/* Member Phone */}
              {member.phone && (
                <Text className="member-phone">
                  <a href={`tel:${member.phone}`} className="contact-link">
                    {member.phone}
                  </a>
                </Text>
              )}
              
              {/* Social Icons */}
              <div className="member-icons">
                {member.facebookUrl && (
                  <a href={member.facebookUrl} className="member-social-link facebook" target="_blank" rel="noopener noreferrer">
                    <FaFacebook />
                  </a>
                )}
                {member.linkedinUrl && (
                  <a href={member.linkedinUrl} className="member-social-link linkedin" target="_blank" rel="noopener noreferrer">
                    <FaLinkedin />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManagementTeam;