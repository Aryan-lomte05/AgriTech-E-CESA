import React, { useState, useEffect } from "react";

const ProblemStatements = () => {
  const problemData = [
    // === Next-Gen Agri-Tech ===
    {
      title: "Smart Multi-Sensor Crop Health Monitoring Device",
      description: "Develop a rugged IoT device equipped with pH, moisture NPK chlorophyll humidity and temperature sensors to collect real-time crop and soil data. The device should operate reliably in field conditions perform local preprocessing of sensor readings and transmit aggregated telemetry to a cloud platform for further analytics and actionable recommendations. Emphasize low-cost hardware battery/solar operation durability and support for remote OTA firmware updates.",
      category: "Hardware",
      psNumber: "AGT25001",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["IoT", "Embedded", "Sensors", "Cloud", "Firmware", "OTA"],
    },
    {
      title: "Autonomous Farm Rover for Precision Tasks",
      description: "Build an autonomous rover capable of precision spraying micro-fertilization and automated weeding using GPS RTK or local RTK-like positioning and computer vision. The solution must include obstacle avoidance path-planning for repeatable passes modular tool carriage for different implements and efficient energy management for multi-hour field operation. Provide logging and telemetry for task verification and a safety interlock mechanism.",
      category: "Hardware",
      psNumber: "AGT25002",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Robotics", "Computer Vision", "AI", "GPS", "Autonomous"],
    },
    {
      title: "Solar-Powered Field Surveillance Drone",
      description: "Design a solar-charging drone platform with multispectral and RGB cameras to monitor crop stress irrigation needs and pest activity. The platform should maximize flight time using solar assist support scheduled autonomous missions and provide stitched orthomosaics and change-detection insights for farm managers. Include a cloud ingestion pipeline and a lightweight field UI for farmers.",
      category: "Hardware",
      psNumber: "AGT25003",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Drone", "Computer Vision", "AI", "Solar", "Image Processing"],
    },
    {
      title: "Precision Spray Drone With Smart Nozzle Control",
      description: "Develop a drone-based precision spraying system capable of variable-rate pesticide or fertilizer application. Integrate wind sensing droplet size control and AI-based target detection for safe and efficient spraying. The system must reduce chemical usage avoid drift and document applied dose at GPS-tagged coordinates for traceability.",
      category: "Hardware",
      psNumber: "AGT25004",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Drone", "AI", "Control Systems", "IoT", "Precision Ag"],
    },
    {
      title: "Drone-Based Seed Sowing & Reforestation System",
      description: "Create a drone capable of deploying seed balls accurately across large or inaccessible terrains. The system should optimise seed density per area record geotagged sowed locations and support configurable seed-ball compositions for different ecosystems. Include mission planning success-tracking and post-deployment monitoring.",
      category: "Hardware",
      psNumber: "AGT25005",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Drone", "Robotics", "GPS", "Automation"],
    },
    {
      title: "AI Crop-Stress Identification System",
      description: "Create an AI model and pipeline that processes drone and mobile images to identify diseases nutrient deficiencies and pest infestations with high accuracy. Provide field-usable model variants for low-power devices a confidence score per detection and a recommendation engine mapping detected issues to practical corrective actions for farmers.",
      category: "Software",
      psNumber: "AGT25006",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["AI", "Machine Learning", "Computer Vision", "Deep Learning", "Mobile"],
    },
    {
      title: "Farm Digital Twin Simulation Engine",
      description: "Build a simulation platform that models farm conditions using soil patterns weather data crop growth models and management actions to simulate outcomes of different decisions. Support scenario comparisons visual timelines and integration with live farm telemetry to calibrate simulations.",
      category: "Software",
      psNumber: "AGT25007",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Digital Twin", "Simulation", "Data Visualization", "ML"],
    },
    {
      title: "Predictive Yield Optimization Platform",
      description: "Create an ML-driven platform that uses historical yield records weather trends soil and input data to recommend sowing windows irrigation schedules and nutrient plans that optimize yield and minimize resource use. Provide confidence intervals sensitivity explanations and dashboard insights for farm advisors.",
      category: "Software",
      psNumber: "AGT25008",
      theme: "Next-Gen Agri-Tech",
      deadline: "15 January 2026",
      tags: ["Machine Learning", "Predictive Analytics", "Data Science", "Dashboard"],
    },

    // === Agri-Market Access ===
    {
      title: "Smart Storage Module With Spoilage Sensors",
      description: "Build a sensor-embedded cold storage system that tracks temperature humidity and gas levels (e.g. ethylene). The system should predict spoilage notify stakeholders and provide control/automation to reduce post-harvest loss. Emphasize modularity for different crop types and low-power operation for rural electrified contexts.",
      category: "Hardware",
      psNumber: "AGT35001",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["IoT", "Sensors", "Cold Chain", "Automation"],
    },
    {
      title: "Automated Quality Grading Machine",
      description: "Develop a camera and sensor based grading system to analyse produce characteristics such as size colour surface defects and firmness. Produce accurate grades and output packaged metrics for sorting lines. System should be adaptable across produce types with retrainable models.",
      category: "Hardware",
      psNumber: "AGT35002",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["Computer Vision", "AI", "Image Processing", "Hardware"],
    },
    {
      title: "Smart Packaging With Shelf-Life Indicators",
      description: "Design packaging with integrated freshness/shelf-life indicators that change color or expose NFC metadata when spoilage thresholds are reached. Provide a low-cost sensor approach and cloud dashboard to allow suppliers and retailers to monitor remaining shelf-life.",
      category: "Hardware",
      psNumber: "AGT35003",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["IoT", "NFC", "Sensors", "Packaging"],
    },
    {
      title: "Blockchain-Based Farm-to-Fork Traceability System",
      description: "Create a blockchain solution that records harvesting handling processing and logistics data to ensure transparent and tamper-proof traceability. Include interfaces for smallholders logistics partners and retailers; design for offline-first data capture and eventual ledger synchronization.",
      category: "Software",
      psNumber: "AGT35004",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["Blockchain", "Web3", "Traceability", "Smart Contracts"],
    },
    {
      title: "AI Demand Forecasting for Local Markets",
      description: "Develop predictive models to analyse short- to medium-term demand trends for local markets using historical sales festival cycles local events and weather. Produce actionable planting and pricing recommendations to reduce waste and improve farmer incomes.",
      category: "Software",
      psNumber: "AGT35005",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["AI", "Time Series", "Forecasting", "ML"],
    },
    {
      title: "Farmer-to-Consumer Marketplace With Logistics Optimization",
      description: "Build a digital marketplace enabling farmers to sell directly to consumers integrated with real-time inventory dynamic pricing and delivery routing optimization. Provide options for cooperative listings and aggregation to improve logistics efficiency.",
      category: "Software",
      psNumber: "AGT35006",
      theme: "Agri-Market Access",
      deadline: "15 January 2026",
      tags: ["Full Stack", "E-commerce", "Logistics", "Optimization"],
    },

    // === Farmer Empowerment ===
    {
      title: "Handheld Crop Diagnosis Device",
      description: "Design a portable low-cost device using sensor arrays and simple visual indicators to detect early plant health issues without dependency on continuous internet connectivity. Provide offline inference or brief connectivity bursts to validate results remotely.",
      category: "Hardware",
      psNumber: "AGT45001",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["Embedded", "Sensors", "Offline AI", "Mobile"],
    },
    {
      title: "Affordable Smart Weather Station for Rural Areas",
      description: "Create a compact weather monitoring station measuring wind humidity rainfall and temperature that is affordable and rugged for rural deployments. Provide hyperlocal updates to farmers simple UI and battery/solar powered operation.",
      category: "Hardware",
      psNumber: "AGT45002",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["IoT", "Weather", "Solar", "Low-cost"],
    },
    {
      title: "Solar-Powered Community Information Kiosk",
      description: "Develop a solar-powered standalone kiosk that provides advisories government scheme information and farming best practices in local languages. Include offline caching simple UI and modular connectivity options (SIM/LoRa/Wi-Fi).",
      category: "Hardware",
      psNumber: "AGT45003",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["IoT", "Offline", "Solar", "Kiosk"],
    },
    {
      title: "Multilingual Farmer Advisory & Chat Assistant",
      description: "Build an AI chatbot accessible via mobile and kiosk that offers guidance on crop health government schemes and best practices in multiple regional languages. Include image-based question intake suggested actions and links to extension services.",
      category: "Software",
      psNumber: "AGT45004",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["AI", "NLP", "Multilingual", "Chatbot", "Mobile"],
    },
    {
      title: "Digital Farmer Learning Platform With AR/VR Simulations",
      description: "Create an interactive learning platform combining short lessons and AR/VR simulations demonstrating irrigation planning pest identification equipment safety and other practical skills to accelerate farmer training.",
      category: "Software",
      psNumber: "AGT45005",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["AR/VR", "EdTech", "Mobile", "Training"],
    },
    {
      title: "Community Knowledge-Sharing App",
      description: "Develop a platform where farmers share images field problems and solutions collaboratively connecting them with experts. Include image tagging geolocation threaded discussions and offline posting capability.",
      category: "Software",
      psNumber: "AGT45006",
      theme: "Farmer Empowerment",
      deadline: "15 January 2026",
      tags: ["Social App", "Offline", "Community", "Mobile"],
    },

    // === Green Growth ===
    {
      title: "IoT Water Efficiency Controller for Irrigation Systems",
      description: "Design a controller that adjusts irrigation schedules and flow rates based on soil moisture evapotranspiration and short-term weather predictions to conserve water. Provide support for common irrigation hardware and fail-safe manual override.",
      category: "Hardware",
      psNumber: "AGT55001",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["IoT", "Water Conservation", "Automation", "Sensors"],
    },
    {
      title: "Portable Soil Health Scanner",
      description: "Build a handheld scanner using spectroscopy or sensor fusion to instantly measure soil carbon moisture and nutrient content providing on-the-spot recommendations and logging results for trend analysis.",
      category: "Hardware",
      psNumber: "AGT55002",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["Sensors", "Soil", "Spectroscopy", "Hardware"],
    },
    {
      title: "Smart Carbon Capture & Monitoring Device",
      description: "Create a device and monitoring system that tracks soil carbon levels above-ground biomass and CO₂ absorption to verify regenerative farming impacts. Include secure reporting and integration for carbon-credit frameworks.",
      category: "Hardware",
      psNumber: "AGT55003",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["IoT", "Carbon", "Sustainability", "Sensors"],
    },
    {
      title: "Soil Health Digital Dashboard With Regeneration Insights",
      description: "Develop a dashboard visualizing soil property changes over time highlighting regeneration opportunities recommended interventions and long-term trend forecasts. Provide exportable reports and multi-farm aggregation features.",
      category: "Software",
      psNumber: "AGT55004",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["Dashboard", "Data Visualization", "Sustainability", "Web"],
    },
    {
      title: "Carbon-Credit Verification & Trading Platform",
      description: "Build a system to estimate carbon sequestration from verified farming practices and enable registration and trading of carbon credits. Incorporate measurement reporting verification workflows and marketplace primitives.",
      category: "Software",
      psNumber: "AGT55005",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["Blockchain", "Carbon Credits", "Sustainability", "Web3"],
    },
    {
      title: "Water Usage Prediction & Sustainability Analyzer",
      description: "Create an AI model predicting seasonal water requirements and sustainability risks enabling farm-level water budgeting. Provide scenario simulations and alerts for drought stress and overuse risk.",
      category: "Software",
      psNumber: "AGT55006",
      theme: "Green Growth",
      deadline: "15 January 2026",
      tags: ["AI", "Water", "Sustainability", "Predictive"],
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  const itemsPerPage = 10;

  // Search includes tags
  const filteredData = problemData.filter((item) => {
    const q = search.toLowerCase().trim();
    if (!q) return true;
    const tagsStr = item.tags.join(" ").toLowerCase();
    return (
      item.title.toLowerCase().includes(q) ||
      item.psNumber.toLowerCase().includes(q) ||
      item.theme.toLowerCase().includes(q) ||
      item.category.toLowerCase().includes(q) ||
      tagsStr.includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  useEffect(() => {
    setCurrentPage(1);
    setExpandedRow(null);
  }, [search]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages]);

  const toggleRow = (idx) => {
    setExpandedRow(expandedRow === idx ? null : idx);
  };

  const getTagColor = (tag) => {
    const map = {
      AI: "bg-blue-600",
      "Machine Learning": "bg-purple-600",
      ML: "bg-purple-600",
      "Deep Learning": "bg-indigo-600",
      "Computer Vision": "bg-pink-600",
      IoT: "bg-cyan-600",
      Drone: "bg-orange-600",
      Robotics: "bg-red-600",
      Blockchain: "bg-yellow-500 text-black",
      Web3: "bg-yellow-600 text-black",
      "Smart Contracts": "bg-amber-600 text-black",
      Embedded: "bg-emerald-600",
      Sensors: "bg-teal-600",
      GPS: "bg-lime-600",
      Cloud: "bg-sky-600",
      default: "bg-neutral-700",
    };
    return map[tag] || map.default;
  };

  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-950 text-white px-6">
      <h1 className="text-4xl font-bold text-lime-400 text-center mb-10">
        Hackathon Problem Statements
      </h1>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="text-lg font-semibold">
            Total Problems: {problemData.length} | Showing: {filteredData.length}
          </div>

          <input
            type="text"
            placeholder="Search by title PS number theme category or tags (e.g. AI Drone Blockchain)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-5 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-lime-400 transition"
          />
        </div>

        <div className="overflow-x-auto rounded-lg border border-neutral-800">
          <table className="w-full text-sm bg-neutral-900 border-collapse">
            <thead className="bg-neutral-800 text-lime-400">
              <tr>
                <th className="p-4 text-left border border-neutral-700">S.No</th>
                <th className="p-4 text-left border border-neutral-700">Problem Title</th>
                <th className="p-4 text-left border border-neutral-700">Tags</th>
                <th className="p-4 text-left border border-neutral-700">Category</th>
                <th className="p-4 text-left border border-neutral-700">PS Number</th>
                <th className="p-4 text-left border border-neutral-700">Theme</th>
                <th className="p-4 text-left border border-neutral-700">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, idx) => {
                const absIndex = startIndex + idx;
                const isExpanded = expandedRow === absIndex;

                return (
                  <React.Fragment key={absIndex}>
                    <tr className="hover:bg-neutral-800 transition">
                      <td className="p-4 border border-neutral-700 align-top">{absIndex + 1}</td>

                      <td
                        className="p-4 border border-neutral-700 cursor-pointer"
                        onClick={() => toggleRow(absIndex)}
                      >
                        <span className="text-lime-300 font-medium underline decoration-dotted">
                          {item.title}
                        </span>
                      </td>

                      <td className="p-4 border border-neutral-700">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 text-xs font-medium rounded-full text-white ${getTagColor(tag)}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="p-4 border border-neutral-700">{item.category}</td>
                      <td className="p-4 border border-neutral-700 font-mono">{item.psNumber}</td>
                      <td className="p-4 border border-neutral-700">{item.theme}</td>
                      <td className="p-4 border border-neutral-700">{item.deadline}</td>
                    </tr>

                    {isExpanded && (
                      <tr>
                        <td colSpan={7} className="p-0 border border-neutral-700">
                          <div className="bg-neutral-900/80 p-6">
                            <h4 className="text-lg font-bold text-lime-400 mb-3">Description</h4>
                            <p className="text-neutral-300 leading-relaxed whitespace-pre-wrap">
                              {item.description}
                            </p>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                );
              })}

              {filteredData.length === 0 && (
                <tr>
                  <td colSpan={7} className="p-12 text-center text-neutral-500 border border-neutral-700">
                    No problems found. Try "AI" "Drone" "Blockchain" "IoT"...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-8 mt-10">
          <button
            onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-lg border ${currentPage === 1 ? "opacity-50" : "hover:bg-neutral-800"}`}
          >
            Previous
          </button>

          <span className="text-lg font-bold text-lime-400">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-lg border ${currentPage === totalPages ? "opacity-50" : "hover:bg-neutral-800"}`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProblemStatements;