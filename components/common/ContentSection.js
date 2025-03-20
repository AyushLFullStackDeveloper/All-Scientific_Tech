import React from "react";
import Heading from "./Heading";

const ContentSection = ({ section }) => {
  return (
    <div className="section-container">
      {section.heading && <Heading level={4}>{section.heading}</Heading>}
      {section.text && <p>{section.text}</p>}

      {section.features &&
        (section.listType === "ordered" ? (
          <ol className="agreement-features">
            {section.features.map((feature, fIndex) => (
              <li key={fIndex}>
                {typeof feature === "string" ? (
                  feature
                ) : (
                  <>
                    {feature.title && <strong>{feature.title}</strong>}
                    {feature.description && <p>{feature.description}</p>}
                    {feature.subFeatures && (
                      <ul className="sub-features">
                        {feature.subFeatures.map((subFeature, sfIndex) => (
                          <li key={sfIndex}>{subFeature}</li>
                        ))}
                      </ul>
                    )}
                  </>
                )}
              </li>
            ))}
          </ol>
        ) : (
          <ul className="agreement-features">
            {section.features.map((feature, fIndex) => (
              <li key={fIndex}>
                {typeof feature === "string" ? (
                  feature
                ) : (
                  <>
                    {feature.title && <strong>{feature.title}</strong>}
                    {feature.description && <p>{feature.description}</p>}
                  </>
                )}
              </li>
            ))}
          </ul>
        ))}

      {section.conclusion && <p>{section.conclusion}</p>}
    </div>
  );
};

export default ContentSection;
