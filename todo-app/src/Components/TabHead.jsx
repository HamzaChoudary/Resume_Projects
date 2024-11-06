// TabHeader.js
import React from "react";

const TabHeader = ({ activeTab, setActiveTab, tabs }) => {
  return (
    <div className="flex space-x-8 border-b pb-2 mb-4">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActiveTab(tab)}
          className={`pb-2 ${
            activeTab === tab ? "text-blue-500 font-semibold border-b-2 border-blue-500" : "text-gray-600"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};

export default TabHeader;
