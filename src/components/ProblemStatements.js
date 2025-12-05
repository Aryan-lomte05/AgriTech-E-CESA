import React, { useState } from "react";

/**
 * ProblemStatements.js
 * - Table layout with search, pagination.
 * - Click the Problem Statement Title to expand a full-width description row below it (slide down).
 * - Dark theme preserved; component is self-contained and ready to drop into your project.
 */

const ProblemStatements = () => {
  // Full list of problem statements and their descriptions (from provided PDF)
  const problemData = [
    // Next-Gen Agri-Tech
    {
      title: "Smart Multi-Sensor Crop Health Monitoring Device",
      description:
        "Develop a rugged IoT device equipped with pH, moisture, NPK, chlorophyll, humidity, and temperature sensors to collect real-time crop and soil data. The device should operate reliably in field conditions, perform local preprocessing of sensor readings, and transmit aggregated telemetry to a cloud platform for further analytics and actionable recommendations. Emphasize low-cost hardware, battery/solar operation, durability, and support for remote OTA firmware updates.",
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
        "Build an autonomous rover capable of precision spraying, micro-fertilization, and automated weeding using GPS, RTK or local RTK-like positioning and computer vision. The solution must include obstacle avoidance, path-planning for repeatable passes, modular tool carriage for different implements, and efficient energy management for multi-hour field operation. Provide logging and telemetry for task verification and a safety interlock mechanism.",
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
        "Design a solar-charging drone platform with multispectral and RGB cameras to monitor crop stress, irrigation needs, and pest activity. The platform should maximize flight time using solar assist, support scheduled autonomous missions, and provide stitched orthomosaics and change-detection insights for farm managers. Include a cloud ingestion pipeline and a lightweight field UI for farmers.",
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
        "Develop a drone-based precision spraying system capable of variable-rate pesticide or fertilizer application. Integrate wind sensing, droplet size control, and AI-based target detection for safe and efficient spraying. The system must reduce chemical usage, avoid drift, and document applied dose at GPS-tagged coordinates for traceability.",
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
        "Create a drone capable of deploying seed balls accurately across large or inaccessible terrains. The system should optimise seed density per area, record geotagged sowed locations, and support configurable seed-ball compositions for different ecosystems. Include mission planning, success-tracking and post-deployment monitoring.",
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
        "Create an AI model and pipeline that processes drone and mobile images to identify diseases, nutrient deficiencies, and pest infestations with high accuracy. Provide field-usable model variants for low-power devices, a confidence score per detection, and a recommendation engine mapping detected issues to practical corrective actions for farmers.",
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
        "Build a simulation platform that models farm conditions using soil patterns, weather data, crop growth models, and management actions to simulate outcomes of different decisions. Support scenario comparisons, visual timelines, and integration with live farm telemetry to calibrate simulations.",
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
        "Create an ML-driven platform that uses historical yield records, weather trends, soil and input data to recommend sowing windows, irrigation schedules and nutrient plans that optimize yield and minimize resource use. Provide confidence intervals, sensitivity explanations, and dashboard insights for farm advisors.",
      organization: "Agri-Tech Innovation Council",
      category: "Software",
      psNumber: "AGT25008",
      theme: "Next-Gen Agri-Tech",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // Agri-Market Access
    {
      title: "Smart Storage Module With Spoilage Sensors",
      description:
        "Build a sensor-embedded cold storage system that tracks temperature, humidity, and gas levels (e.g., ethylene). The system should predict spoilage, notify stakeholders, and provide control/automation to reduce post-harvest loss. Emphasize modularity for different crop types and low-power operation for rural electrified contexts.",
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
        "Develop a camera and sensor based grading system to analyse produce characteristics such as size, colour, surface defects and firmness. Produce accurate grades and output packaged metrics for sorting lines. System should be adaptable across produce types with retrainable models.",
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
        "Design packaging with integrated freshness/shelf-life indicators that change color or expose NFC metadata when spoilage thresholds are reached. Provide a low-cost sensor approach and cloud dashboard to allow suppliers and retailers to monitor remaining shelf-life.",
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
        "Create a blockchain solution that records harvesting, handling, processing and logistics data to ensure transparent and tamper-proof traceability. Include interfaces for smallholders, logistics partners and retailers; design for offline-first data capture and eventual ledger synchronization.",
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
        "Develop predictive models to analyse short- to medium-term demand trends for local markets using historical sales, festival cycles, local events and weather. Produce actionable planting and pricing recommendations to reduce waste and improve farmer incomes.",
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
        "Build a digital marketplace enabling farmers to sell directly to consumers, integrated with real-time inventory, dynamic pricing, and delivery routing optimization. Provide options for cooperative listings and aggregation to improve logistics efficiency.",
      organization: "Agri Trade Board",
      category: "Software",
      psNumber: "AGT35006",
      theme: "Agri-Market Access",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // Farmer Empowerment
    {
      title: "Handheld Crop Diagnosis Device",
      description:
        "Design a portable, low-cost device using sensor arrays and simple visual indicators to detect early plant health issues without dependency on continuous internet connectivity. Provide offline inference or brief connectivity bursts to validate results remotely.",
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
        "Create a compact weather monitoring station measuring wind, humidity, rainfall and temperature that is affordable and rugged for rural deployments. Provide hyperlocal updates to farmers, simple UI, and battery/solar powered operation.",
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
        "Develop a solar-powered, standalone kiosk that provides advisories, government scheme information and farming best practices in local languages. Include offline caching, simple UI, and modular connectivity options (SIM/LoRa/Wi-Fi).",
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
        "Build an AI chatbot accessible via mobile and kiosk that offers guidance on crop health, government schemes, and best practices in multiple regional languages. Include image-based question intake, suggested actions, and links to extension services.",
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
        "Create an interactive learning platform combining short lessons and AR/VR simulations demonstrating irrigation planning, pest identification, equipment safety and other practical skills to accelerate farmer training.",
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
        "Develop a platform where farmers share images, field problems and solutions collaboratively, connecting them with experts. Include image tagging, geolocation, threaded discussions, and offline posting capability.",
      organization: "Farm Empowerment Council",
      category: "Software",
      psNumber: "AGT45006",
      theme: "Farmer Empowerment",
      submittedIdeas: "0/500",
      deadline: "15 January 2026",
    },

    // Green Growth
    {
      title: "IoT Water Efficiency Controller for Irrigation Systems",
      description:
        "Design a controller that adjusts irrigation schedules and flow rates based on soil moisture, evapotranspiration and short-term weather predictions to conserve water. Provide support for common irrigation hardware and fail-safe manual override.",
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
        "Build a handheld scanner using spectroscopy or sensor fusion to instantly measure soil carbon, moisture and nutrient content, providing on-the-spot recommendations and logging results for trend analysis.",
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
        "Create a device and monitoring system that tracks soil carbon levels, above-ground biomass and CO₂ absorption to verify regenerative farming impacts. Include secure reporting and integration for carbon-credit frameworks.",
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
        "Develop a dashboard visualizing soil property changes over time, highlighting regeneration opportunities, recommended interventions and long-term trend forecasts. Provide exportable reports and multi-farm aggregation features.",
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
        "Build a system to estimate carbon sequestration from verified farming practices and enable registration and trading of carbon credits. Incorporate measurement, reporting, verification workflows and marketplace primitives.",
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
        "Create an AI model predicting seasonal water requirements and sustainability risks, enabling farm-level water budgeting. Provide scenario simulations and alerts for drought stress and overuse risk.",
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
  const [expandedRow, setExpandedRow] = useState(null); // index of expanded row (absolute index in filtered data slice)

  const itemsPerPage = 10;

  // Filter by title, organization, theme, category — makes search more useful
  const filteredData = problemData.filter((p) => {
    const q = search.trim().toLowerCase();
    if (!q) return true;
    return (
      p.title.toLowerCase().includes(q) ||
      p.organization.toLowerCase().includes(q) ||
      p.theme.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.psNumber.toLowerCase().includes(q)
    );
  });

  const totalPages = Math.max(1, Math.ceil(filteredData.length / itemsPerPage));
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredData.slice(startIndex, startIndex + itemsPerPage);

  // Reset page when search changes
  React.useEffect(() => {
    setCurrentPage(1);
    setExpandedRow(null);
  }, [search]);

  // If current page goes out of range after filtering, correct it
  React.useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [totalPages, currentPage]);

  const toggleRow = (absoluteIndex) => {
    // absoluteIndex is the index in filteredData (not index within currentItems)
    setExpandedRow((prev) => (prev === absoluteIndex ? null : absoluteIndex));
  };

  // Styling helper for slide animation: uses maxHeight transition. We use a conservative max height (1000px).
  const descriptionStyle = (isExpanded) => ({
    maxHeight: isExpanded ? "1000px" : "0px",
    overflow: "hidden",
    transition: "max-height 280ms ease",
  });

  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-950 flex flex-col items-center text-white px-6">
      <h1 className="text-4xl font-bold text-lime-400 mb-10">
        Hackathon Problem Statements
      </h1>

      <div className="w-full max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
          <span className="text-lg font-semibold">
            Total Problem Statements: {problemData.length}
          </span>

          <div className="flex items-center gap-2 w-full md:w-auto">
            <input
              type="text"
              placeholder="Search Problem Title / Org / Theme / Category / PS Number"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full md:w-96 px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none"
            />
          </div>
        </div>

        <div className="overflow-x-auto rounded-lg border border-neutral-800">
          <table className="w-full text-sm bg-neutral-900 border-collapse">
            <thead className="bg-neutral-800 text-lime-400">
              <tr>
                <th className="p-3 border border-neutral-700 text-left">S.No</th>
                <th className="p-3 border border-neutral-700 text-left">Organization</th>
                <th className="p-3 border border-neutral-700 text-left">Problem Statement Title</th>
                <th className="p-3 border border-neutral-700 text-left">Category</th>
                <th className="p-3 border border-neutral-700 text-left">PS Number</th>
                <th className="p-3 border border-neutral-700 text-left">Theme</th>
                <th className="p-3 border border-neutral-700 text-left">Submitted Idea(s) Count</th>
                <th className="p-3 border border-neutral-700 text-left">Deadline</th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((p, idx) => {
                // compute absolute index in filteredData so expansion persists relative to filtered set
                const absoluteIndex = startIndex + idx;
                const isExpanded = expandedRow === absoluteIndex;

                return (
                  <React.Fragment key={p.psNumber + "-" + absoluteIndex}>
                    <tr className="hover:bg-neutral-800">
                      <td className="p-3 border border-neutral-700 align-top">
                        {absoluteIndex + 1}
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.organization}
                      </td>

                      <td
                        className="p-3 border border-neutral-700 align-top cursor-pointer"
                        onClick={() => toggleRow(absoluteIndex)}
                        title="Click to view description"
                      >
                        <div className="flex flex-col">
                          <span className="text-lime-300 underline decoration-dotted">
                            {p.title}
                          </span>
                          <small className="mt-1 text-xs text-neutral-400">{/* optional short preview */}</small>
                        </div>
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.category}
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.psNumber}
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.theme}
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.submittedIdeas}
                      </td>

                      <td className="p-3 border border-neutral-700 align-top">
                        {p.deadline}
                      </td>
                    </tr>

                    {/* Expanded description row (full-width) */}
                    <tr>
                      <td colSpan={8} className="p-0 border-0">
                        <div
                          style={descriptionStyle(isExpanded)}
                          className="px-4 overflow-hidden"
                          aria-hidden={!isExpanded}
                        >
                          <div className="bg-neutral-900 border-t border-neutral-800 p-4">
                            <h4 className="text-sm font-semibold text-lime-400 mb-2">
                              Description
                            </h4>
                            <p className="text-sm text-neutral-300 leading-relaxed whitespace-pre-wrap">
                              {p.description}
                            </p>
                          </div>
                        </div>
                      </td>
                    </tr>
                  </React.Fragment>
                );
              })}

              {currentItems.length === 0 && (
                <tr>
                  <td colSpan={8} className="p-6 text-center text-neutral-400">
                    No problem statements match your search.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button
            onClick={() => {
              setExpandedRow(null);
              setCurrentPage((p) => Math.max(p - 1, 1));
            }}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md border ${
              currentPage === 1
                ? "opacity-40 cursor-not-allowed"
                : "hover:bg-neutral-800"
            }`}
          >
            Previous
          </button>

          <div className="flex items-center gap-3">
            <span className="font-semibold">
              Page {currentPage} of {totalPages}
            </span>

            <div className="flex items-center gap-1">
              {/* quick page jump - optional */}
              <button
                onClick={() => {
                  setExpandedRow(null);
                  setCurrentPage(1);
                }}
                className="px-3 py-1 border rounded text-sm"
              >
                1
              </button>
              {totalPages > 1 && (
                <button
                  onClick={() => {
                    setExpandedRow(null);
                    setCurrentPage(totalPages);
                  }}
                  className="px-3 py-1 border rounded text-sm"
                >
                  {totalPages}
                </button>
              )}
            </div>
          </div>

          <button
            onClick={() => {
              setExpandedRow(null);
              setCurrentPage((p) => Math.min(p + 1, totalPages));
            }}
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
