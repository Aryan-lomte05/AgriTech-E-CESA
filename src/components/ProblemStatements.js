import React, { useState } from "react";

const ProblemStatements = () => {
  const problemData = [
    // ----------------------- Next-Gen Agri-Tech -----------------------
    {
      title: "Smart Multi-Sensor Crop Health Monitoring Device",
      description:
        "Develop an IoT device equipped with pH, moisture, NPK, chlorophyll, humidity, and temperature sensors to collect real-time crop and soil data and send recommendations to the cloud.",
      organization: "Agri-Tech Innovation Council",
      category: "Hardware",
      psNumber: "AGT25001",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Autonomous Farm Rover for Precision Tasks",
      description:
        "Autonomous rover capable of precision spraying, micro-fertigation, and automated weeding using GPS and computer vision.",
      organization: "Agri-Tech Innovation Council",
      category: "Hardware",
      psNumber: "AGT25002",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Solar-Powered Field Surveillance Drone",
      description:
        "Solar-charging drone with multispectral cameras to monitor crop stress, irrigation, and pest activity.",
      organization: "Agri-Tech Innovation Council",
      category: "Hardware",
      psNumber: "AGT25003",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Precision Spray Drone With Smart Nozzle Control",
      description:
        "Drone-based precision spraying system capable of variable-rate spraying with AI target detection and droplet control.",
      organization: "Agri-Tech Innovation Council",
      category: "Hardware",
      psNumber: "AGT25004",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Drone-Based Seed Sowing & Reforestation System",
      description:
        "Drone capable of deploying seed balls accurately across large terrains with optimized sowing density and mapping.",
      organization: "Agri-Tech Innovation Council",
      category: "Hardware",
      psNumber: "AGT25005",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "AI Crop-Stress Identification System",
      description:
        "AI model that detects diseases, pest infestation, and nutrient deficiencies using drone or mobile imagery.",
      organization: "Agri-Tech Innovation Council",
      category: "Software",
      psNumber: "AGT25006",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Farm Digital Twin Simulation Engine",
      description:
        "Simulation platform modeling farms using soil patterns, weather data, and crop models to evaluate decision outcomes.",
      organization: "Agri-Tech Innovation Council",
      category: "Software",
      psNumber: "AGT25007",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Predictive Yield Optimization Platform",
      description:
        "ML model using historic yield data and weather trends to optimise irrigation, sowing, and nutrient scheduling.",
      organization: "Agri-Tech Innovation Council",
      category: "Software",
      psNumber: "AGT25008",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // ----------------------- Agri-Market Access -----------------------
    {
      title: "Smart Storage Module With Spoilage Sensors",
      description:
        "Cold-storage module that monitors humidity, temperature and gas levels to prevent spoilage.",
      organization: "Agri Trade Board",
      category: "Hardware",
      psNumber: "AGT35001",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Automated Quality Grading Machine",
      description:
        "Camera-based grading of produce based on size, colour and visible defects.",
      organization: "Agri Trade Board",
      category: "Hardware",
      psNumber: "AGT35002",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Smart Packaging With Shelf-Life Indicators",
      description:
        "Freshness-tracking packaging using colour-change or NFC sensor-based labels.",
      organization: "Agri Trade Board",
      category: "Hardware",
      psNumber: "AGT35003",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Blockchain-Based Farm-to-Fork Traceability System",
      description:
        "Blockchain-driven traceability of harvesting, packaging and logistics data.",
      organization: "Agri Trade Board",
      category: "Software",
      psNumber: "AGT35004",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "AI Demand Forecasting for Local Markets",
      description:
        "Predictive analytics based on demand cycles, festivals and climate to reduce food wastage.",
      organization: "Agri Trade Board",
      category: "Software",
      psNumber: "AGT35005",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Farmer-to-Consumer Marketplace With Logistics Optimization",
      description:
        "Direct selling marketplace with live inventory and route-optimized deliveries.",
      organization: "Agri Trade Board",
      category: "Software",
      psNumber: "AGT35006",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // ----------------------- Farmer Empowerment -----------------------
    {
      title: "Handheld Crop Diagnosis Device",
      description:
        "Portable plant-health analyser detecting deficiencies without internet.",
      organization: "Farm Empowerment Council",
      category: "Hardware",
      psNumber: "AGT45001",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Affordable Smart Weather Station for Rural Areas",
      description:
        "Rural weather monitoring system measuring rainfall, humidity and temperature.",
      organization: "Farm Empowerment Council",
      category: "Hardware",
      psNumber: "AGT45002",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Solar-Powered Community Information Kiosk",
      description:
        "Solar-driven information hub for government schemes and farming advisories.",
      organization: "Farm Empowerment Council",
      category: "Hardware",
      psNumber: "AGT45003",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Multilingual Farmer Advisory & Chat Assistant",
      description:
        "AI chatbot guiding farmers on crop disease, schemes and best practices.",
      organization: "Farm Empowerment Council",
      category: "Software",
      psNumber: "AGT45004",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Digital Farmer Learning Platform With AR/VR Simulations",
      description:
        "Training using AR-VR modules for crop management, irrigation and pest handling.",
      organization: "Farm Empowerment Council",
      category: "Software",
      psNumber: "AGT45005",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Community Knowledge-Sharing App",
      description:
        "Social platform enabling farmers to share photos, insights and collaborate.",
      organization: "Farm Empowerment Council",
      category: "Software",
      psNumber: "AGT45006",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // ----------------------- Green Growth -----------------------
    {
      title: "IoT Water Efficiency Controller for Irrigation Systems",
      description:
        "Smart irrigation controller adjusting water flow using soil moisture and weather data.",
      organization: "Green Growth Agency",
      category: "Hardware",
      psNumber: "AGT55001",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Portable Soil Health Scanner",
      description:
        "Scanner using spectroscopy to measure soil carbon, moisture and nutrient composition.",
      organization: "Green Growth Agency",
      category: "Hardware",
      psNumber: "AGT55002",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Smart Carbon Capture & Monitoring Device",
      description:
        "Device for monitoring carbon storage, biomass and CO₂ absorption.",
      organization: "Green Growth Agency",
      category: "Hardware",
      psNumber: "AGT55003",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Soil Health Digital Dashboard With Regeneration Insights",
      description:
        "Dashboard visualising changes in soil properties and regeneration opportunities.",
      organization: "Green Growth Agency",
      category: "Software",
      psNumber: "AGT55004",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Carbon-Credit Verification & Trading Platform",
      description:
        "Software calculating carbon sequestration and issuing tradeable credits.",
      organization: "Green Growth Agency",
      category: "Software",
      psNumber: "AGT55005",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
    {
      title: "Water Usage Prediction & Sustainability Analyzer",
      description:
        "AI model predicting sustainability risk and water consumption over time.",
      organization: "Green Growth Agency",
      category: "Software",
      psNumber: "AGT55006",
      theme: "Green Growth",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const itemsPerPage = 10;
  const filteredData = problemData.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase())
  );

  const totalPages = Math.ceil(filteredData.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(start, start + itemsPerPage);

  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-950 flex flex-col items-center text-white px-6">
      <h1 className="text-4xl font-bold text-lime-400 mb-10">
        Hackathon Problem Statements
      </h1>

      <div className="w-full max-w-7xl">
        <div className="flex justify-between items-center mb-5">
          <span className="text-lg font-semibold">
            Total Problem Statements: {problemData.length}
          </span>

          <input
            type="text"
            placeholder="Search Problem Statement"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-neutral-800">
          <table className="w-full text-sm bg-neutral-900">
            <thead className="bg-neutral-800 text-lime-400">
              <tr>
                <th className="p-3 border border-neutral-700">S.No</th>
                <th className="p-3 border border-neutral-700">Organization</th>
                <th className="p-3 border border-neutral-700">
                  Problem Statement Title
                </th>
                <th className="p-3 border border-neutral-700">Category</th>
                <th className="p-3 border border-neutral-700">PS Number</th>
                <th className="p-3 border border-neutral-700">Theme</th>
                <th className="p-3 border border-neutral-700">
                  Submitted Idea(s) Count
                </th>
                <th className="p-3 border border-neutral-700">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((p, index) => (
                <tr key={index} className="hover:bg-neutral-800">
                  <td className="p-3 border border-neutral-700">
                    {start + index + 1}
                  </td>
                  <td className="p-3 border border-neutral-700">
                    {p.organization}
                  </td>
                  <td className="p-3 border border-neutral-700">{p.title}</td>
                  <td className="p-3 border border-neutral-700">
                    {p.category}
                  </td>
                  <td className="p-3 border border-neutral-700">
                    {p.psNumber}
                  </td>
                  <td className="p-3 border border-neutral-700">{p.theme}</td>
                  <td className="p-3 border border-neutral-700">
                    {p.submittedIdeas}
                  </td>
                  <td className="p-3 border border-neutral-700">{p.deadline}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-neutral-800"
            }`}
          >
            Previous
          </button>

          <span className="font-semibold">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md border ${
              currentPage === totalPages
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-neutral-800"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;
