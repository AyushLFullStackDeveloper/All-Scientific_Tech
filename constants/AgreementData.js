/**
 * Agreement Data Module
 *
 * This file contains all the structured data for service agreements offered by All Scientific Technology.
 * Each agreement contains:
 *  - Basic identification (id, logo, title)
 *  - Detailed content for rendering in the UI
 *  - Hero section configuration
 *  - Content sections with titles and descriptive text
 */

/**
 * RPM Agreement - Recurring Planned Maintenance
 * Contains detailed information about AST's proactive maintenance services
 */
const rpmAgreement = {
  id: "rpm",
  logo: "/assets/images/agreement/rpm-img.avif",
  title: "Recurring Planned Maintenance",
  details: {
    subtitle: "Revolutionizing Equipment Maintenance with AST's RPM Program",
    description:
      "At All Scientific Technology (AST), proactive maintenance is essential for maximizing equipment performance, longevity, and compliance...",
    heroSection: {
      image: "/assets/images/agreement/rpm-hero.avif",
      text: "Recurring Planned Maintenance Agreement",
    },
    // Content sections
    contentSections: [
      {
        heading: "Smart Maintenance, Powered by Data & Technology",
        text: "Our RPM program starts with the manufacturer's required maintenance procedures as a baseline, then enhances it with customized service tasks based on:",
        features: [
          "Equipment Type – Tailored maintenance for your specific assets.",
          "Historical Data – Insights from years of servicing similar equipment.",
          "Industry Best Practices – Proactive strategies to prevent failures before they happen.",
        ],
        conclusion:
          "All maintenance tasks are stored in Equip ID's web-based tool tied by equipment type and serial number, ensuring full transparency and accessibility.",
      },
      {
        heading: "Seamless Integration with Equip ID's NFC/QR Technology",
        text: "AST's RPM program is enhanced by Equip ID's NFC/QR tag technology, giving your equipment a voice in maintenance. Here's how it works:",
        features: [
          "Proof of Presence – When a technician checks in using the Equip ID application and tag, their presence is recorded.",
          "Technician Verification – Technician qualifications are maintained in the iOS Equip ID application. When a technician checks into the equipment associated with the Equip ID tag, their qualifications are verified instantly.",
          "Dynamic Task List – The system generates real-time maintenance tasks based on sensor data from Romcom's monitoring sensors, external factors, and historical performance.",
        ],
      },
      {
        heading: "On-Demand Access to Critical Maintenance Data",
        text: "Equipment owners can access real-time RPM data via:",
        features: [
          "The Equip ID Portal for comprehensive tracking and reporting.",
          "A simple tap on the Equip ID tag affixed to the unit for instant updates.",
        ],
      },
      {
        heading: "Effortless Compliance & Extended Equipment Warranties",
        features: [
          "Regulatory Compliance – Compliance reports are easily accessible on an inspector's mobile device or can be directly emailed to regulators.",
          "OEM Warranty Extensions – Many healthcare and life science manufacturers offer extended warranties when ongoing maintenance is documented through AST's RPM program.",
        ],
      },
      {
        heading: "Why Choose AST's RPM Program?",
        features: [
          "Prevent costly breakdowns with proactive maintenance.",
          "Ensure compliance with automated reporting and tracking.",
          "Increase equipment lifespan through detailed care service.",
          "Enhance operational efficiency with smart, connected maintenance.",
          "🔹 Optimize Performance. Ensure Compliance. Protect Your Investment. 🔹",
        ],
      },
    ],
  },
};

/**
 * Trinity Agreement - Extended Warranty Coverage
 * Contains information about AST's Trinity certification and extended warranty offerings
 */
const trinityAgreement = {
  id: "trinity",
  logo: "/assets/images/agreement/trinity-img.avif",
  title: "Extended Warranty Coverage",
  details: {
    subtitle: "Comprehensive Protection for Your Laboratory Equipment",
    description:
      "All Scientific Technology (AST) offers comprehensive protection for out-of-warranty and extended service agreements for in-warranty equipment through our Trinity Warranty Company Certification.",
    heroSection: {
      image: "/assets/images/agreement/trinity-hero.avif",
      text: "FullCoverage(Parts - Labor) Agreement Powered by Trinity Warranty",
    },
    // Content sections
    contentSections: [
      {
        heading:
          "AST Awarded Prestigious Trinity Warranty Company Certification",
        text: "ALL Technology Group (AST) has been awarded the coveted Trinity Warranty Company Certification after completing a rigorous due diligence process. This certification enables AST to sell and implement Trinity's Full Coverage Agreement Equipment and ESA process to its healthcare and life science customers, further solidifying AST's commitment to service excellence.",
      },
      {
        heading: "Trinity Highlights Three Key Reasons for Selecting AST",
        listType: "ordered",
        features: [
          {
            title: "Highly Skilled Personnel",
            description:
              "AST boasts a large team of factory-trained professionals in the field and repair depots, ensuring superior service and technical expertise.",
          },
          {
            title: "Robust Financial & Inventory Management",
            description:
              "AST has the financial resources to maintain a full inventory of required parts, support first responder initiatives, and comply with the industry's Service Level Agreements (SLAs).",
          },
          {
            title: "Advanced Integrated Technology Platform",
            description:
              "AST leverages a comprehensive, state-of-the-art technology ecosystem to enhance service efficiency.",
            subFeatures: [
              "Utilize Cores CRM Platform – Used by 24-hour dispatchers, client success managers, and repair depot managers.",
              "Remcomm Remote Monitoring System – A proactive early-warning system with central station monitoring.",
              "Equip ID Asset Management System – Creates a digital twin of equipment, manages compliance requirements and more.",
            ],
          },
        ],
        conclusion:
          "By aligning the goals of equipment owners and service providers, AST's agreements are designed to reduce repair costs and prevent costly downtime—a shared priority for all stakeholders.",
      },
      {
        heading: "Challenges with Traditional Insurance Models",
        text: "Small labs and institutions face challenges such as:",
        features: [
          "Partial Coverage Needs—Many institutions have newer equipment under manufacturer warranty, making full-facility coverage unnecessary.",
          "Size & Budget Constraints—Some organizations may not meet the financial thresholds required for traditional equipment insurance programs.",
        ],
      },
      {
        heading:
          "All Scientific Technology Group's Selective Equipment Coverage Agreement",
        text: "All Scientific Technology Group (AST) provides a targeted solution for out-of-warranty and extended service agreements (ESAs) for in-warranty equipment. The program is designed for temperature-controlled laboratory equipment, biosafety cabinets, and Ultra-low-temperature refrigeration and freezers, ensuring continued protection beyond the manufacturer's warranty.",
      },
      {
        heading: "Key Benefits of AST's Coverage:",
        features: [
          "Flexible, full service Coverage—Institutions can choose which equipment to cover, optimizing costs.",
          "Extended Protection for High-Value Equipment—safeguard temperature-controlled laboratory equipment, biosafety cabinets, and Ultra low-temperature refrigeration and freezers.",
          'Backed by Leading Insurance Providers—Coverage is supported by multiple "A"-rated insurance companies, ensuring financial stability and reliability.',
          "No Pre-Approval Required for Claims—Unlike traditional insurance models, AST's program allows for immediate service without pre-approval delays.",
          "No Deductibles—Clients avoid out-of-pocket costs for covered repairs, ensuring predictable expenses.",
          "Reliable Inventory & Service Commitment—AST maintains the necessary inventory to provide timely repairs and replacements, minimizing equipment downtime.",
        ],
      },
      {
        heading:
          "Why Choose AST's Selective Coverage Model Powered by Trinity?",
        text: "AST and Trinity provide a practical alternative to traditional insurance models, ensuring that institutions of all sizes can access high-quality full service agreements (Parts & Labor) tailored to their unique needs. This approach allows organizations to maximize their investment in essential equipment while maintaining operational efficiency and financial stability. In addition to years of equipment loss history, data and program expertise provide AST with unique insight into repair costs for bio laboratory equipment of all sizes.",
      },
    ],
  },
};

/**
 * Labor Agreement - Fixed-Cost Labor Coverage
 * Contains information about AST's labor coverage plans and benefits
 */
const laborAgreement = {
  id: "labor",
  logo: "/assets/images/agreement/labor-agreement.avif",
  title: "Labor Coverage Agreement",
  details: {
    subtitle: "All Scientific Technology Fixed-Cost",
    description:
      "Partnering with All Scientific Technology (AST) under a fixed-cost labor coverage agreement provides organizations with a highly efficient and cost-effective approach to equipment maintenance and repair. This agreement ensures predictable budgeting, reduces unexpected repair costs, and maximizes equipment uptime.",
    heroSection: {
      image: "/assets/images/agreement/labor-hero.avif",
      text: "Labor Coverage Agreement",
    },
    // Content sections
    contentSections: [
      {
        heading: "Key benefits include:",
        listType: "ordered",
        features: [
          {
            title: "24/7 Access to a Dedicated Dispatcher",
            description:
              "Organizations benefit from 24/7 access to AST's 24-hour dispatcher, which ensures that all service requests are addressed promptly. This continuous support enhances operational efficiency and minimizes downtime, allowing critical equipment to remain functional.",
          },
          {
            title: "Priority Queue for Depot Repairs",
            description:
              "Clients receive expedited service in AST's repair depot, minimizing wait times and ensuring faster turnaround for equipment repairs. This priority handling reduces operational disruptions and enhances overall workflow continuity.",
          },
          {
            title: "Dedicated Client Success Team Member",
            description:
              "Each client is assigned a dedicated client success team member who provides personalized support and ensures all service needs are met efficiently. This direct point of contact streamlines communication enhances service coordination and ensures client satisfaction.",
          },
          {
            title: "Access to Loaner Equipment",
            description:
              "In cases where repairs require extended service time, AST provides loaner equipment, ensuring that operations continue without significant delays, minimizing downtime, and supporting uninterrupted workflow.",
          },
          {
            title: "Romcomm Remote Monitoring & Early Warning System",
            description:
              "AST's agreement includes access to Romcomm remote monitoring, an advanced early warning system with central station monitoring. This proactive solution detects potential equipment issues before they escalate, allowing for preemptive maintenance and reducing the likelihood of unexpected failures.",
          },
          {
            title: "Equip ID Asset Management System",
            description:
              "Organizations benefit from the Equip ID asset management system, which enhances visibility and control over equipment lifecycle management. This system:",
            subFeatures: [
              "Creates a digital twin of each asset for comprehensive tracking",
              "Records and manages compliance requirements to ensure regulatory adherence",
              "Stores technical documentation and service history, providing easy access to critical information",
              "Utilizes top technology for reporting issues, streamlining service requests, and repair tracking",
              "Offers online status updates for depot repairs, keeping stakeholders informed of progress",
            ],
          },
          {
            title: "Alignment of Interests to Minimize Costs & Downtime",
            description:
              "AST's fixed-cost agreement foster a mutual commitment between the equipment owner and the servicer to reduce repair costs and prevent downtime. By aligning incentives, both parties work proactively to maintain equipment reliability, ultimately optimizing operational efficiency and long-term cost savings.",
            conclusion:
              "By contracting with All Scientific Technology, organizations secure a comprehensive, proactive service model that enhances equipment performance, ensures regulatory compliance, and provides uninterrupted operational support—all while maintaining cost predictability.",
          },
        ],
      },
    ],
  },
};

/**
 * Combined agreement data array
 * Export all agreement data for use in the application
 */
export const agreementData = [rpmAgreement, trinityAgreement, laborAgreement];

/**
 * Export individual agreement data for direct access
 * This allows components to import specific agreement data if needed
 */
export { rpmAgreement, trinityAgreement, laborAgreement };
