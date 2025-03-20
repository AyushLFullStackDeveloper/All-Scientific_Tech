import React from "react";
import Heading from "../common/Heading";
import Text from "../common/Text";
import Image from "../common/Image";

const ConnectingTechnology = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Section */}
      <div
        className="relative bg-cover bg-center h-64 flex items-center justify-center text-white text-3xl font-bold"
        style={{ backgroundImage: "url('https://via.placeholder.com/1500')" }}
      >
        <Heading level={1} className="text-white">Connecting Technology</Heading>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto p-8">
        <Text className="text-gray-700 mb-6">
          All Scientific Tech’s dedication to contemporary technology
          distinguishes it from its competitors...
        </Text>
        <ul className="list-disc pl-6 text-gray-700">
          <li>Enhancing Service Awareness</li>
          <li>Reducing the Cost of Ownership</li>
          <li>Ensuring Rapid Growth</li>
          <li>Developing seamless integrations</li>
        </ul>
      </div>

      {/* Technology List */}
      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto text-center">
          <Heading level={2} className="text-2xl font-bold mb-4">Connecting Technology</Heading>
          <ul className="text-blue-600 space-y-2">
            <li>UtilizeCore: Service Automation</li>
            <li>Equip ID: Equipment Intelligence</li>
            <li>RapidWorkflow: Technician Logbook</li>
            <li>Supplier Space: Business Reviews</li>
            <li>Remoten: Remote Monitoring</li>
          </ul>
        </div>
      </div>

      {/* UtilizeCore Details */}
      <div className="max-w-6xl mx-auto p-8">
        <Heading level={3} className="text-xl font-bold mb-4">UtilizeCore</Heading>
        <Text className="text-gray-700 mb-6">
          All Scientific Tech also enhances its UtilizeCore’s functionalities...
        </Text>
        <Image
          src="https://via.placeholder.com/600"
          alt="UtilizeCore"
          className="mx-auto"
        />
      </div>
    </div>
  );
};

export default ConnectingTechnology;
