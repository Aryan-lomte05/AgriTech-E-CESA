import React, { useState, useEffect } from "react";

const ProblemStatements = () => {
  const problemData = [
    // === Next-Gen Agri-Tech ===
    {
      id: 1,
      title: "Smart Multi-Sensor Crop Health Monitoring Device",
      description:
        " Develop a rugged IoT device equipped with pH, moisture, NPK, chlorophyll, humidity, and temperature sensors to collect real-time crop and soil data, transmitting it to the cloud for recommendations. ",
      category: "Hardware",
      psNumber: "AGT25001",
      theme: "Next-Gen Agri-Tech",

      tags: ["IoT", "Embedded", "Sensors", "Cloud", "Firmware", "OTA"],
    },
    {
      id: 2,
      title: "Autonomous Farm Rover for Precision Tasks",
      description:
        " Build an autonomous rover capable of precision spraying, micro fertigation, and automated weeding using GPS and computer vision.",
      category: "Hardware",
      psNumber: "AGT25002",
      theme: "Next-Gen Agri-Tech",

      tags: ["Robotics", "Computer Vision", "AI", "GPS", "Autonomous"],
    },
    {
      id: 3,
      title: "Solar-Powered Field Surveillance Drone",
      description:
        "Design a solar-charging drone with multispectral cameras to monitor crop stress, irrigation, and pest activity. ",
      category: "Hardware",
      psNumber: "AGT25003",
      theme: "Next-Gen Agri-Tech",

      tags: ["Drone", "Computer Vision", "AI", "Solar", "Image Processing"],
    },
    {
      id: 4,
      title: "Precision Spray Drone With Smart Nozzle Control",
      description:
        " Develop a drone-based precision spraying system capable of variable-rate pesticide or fertilizer application. Integrate wind sensors, droplet size control, and AI-based target detection for safe and efficient spraying.",
      category: "Hardware",
      psNumber: "AGT25004",
      theme: "Next-Gen Agri-Tech",

      tags: ["Drone", "AI", "Control Systems", "IoT", "Precision Ag"],
    },
    {
      id: 5,
      title: "Drone-Based Seed Sowing & Reforestation System",
      description:
        "Create a drone capable of deploying seed balls accurately across large or inaccessible terrains. The system should optimize seed density, map sowed locations, and support reforestation or cover cropping. ",
      category: "Hardware",
      psNumber: "AGT25005",
      theme: "Next-Gen Agri-Tech",

      tags: ["Drone", "Robotics", "GPS", "Automation"],
    },
    {
      id: 6,
      title: "AI Crop-Stress Identification System",
      description:
        " Create an AI model that processes drone/mobile images to identify diseases, nutrient deficiencies, and pest infestation with high accuracy. ",
      category: "Software",
      psNumber: "AGT25006",
      theme: "Next-Gen Agri-Tech",

      tags: ["AI", "Machine Learning", "Computer Vision", "Deep Learning", "Mobile"],
    },
    {
      id: 7,
      title: "Farm Digital Twin Simulation Engine",
      description:
        "Build a simulation platform that models farm conditions using soil patterns, weather data, and crop growth models to simulate outcomes of different decisions.",
      category: "Software",
      psNumber: "AGT25007",
      theme: "Next-Gen Agri-Tech",

      tags: ["Digital Twin", "Simulation", "Data Visualization", "ML"],
    },
    {
      id: 8,
      title: "Predictive Yield Optimization Platform",
      description:
        " Create a machine-learning model that uses historic yield patterns, weather trends, and soil conditions to recommend sowing, irrigation, and nutrient schedules.",
      category: "Software",
      psNumber: "AGT25008",
      theme: "Next-Gen Agri-Tech",

      tags: ["Machine Learning", "Predictive Analytics", "Data Science", "Dashboard"],
    },


    // === Agri-Market Access ===
    {
      id: 9,
      title: "Smart Storage Module With Spoilage Sensors",
      description:
        " Build a sensor-embedded cold storage system that tracks temperature, humidity, and gas levels to predict spoilage and reduce post-harvest losses. ",
      category: "Hardware",
      psNumber: "AGT35001",
      theme: "Agri-Market Access",

      tags: ["IoT", "Sensors", "Cold Chain", "Automation"],
    },
    {
      id: 10,
      title: "Automated Quality Grading Machine",
      description:
        " Develop an electronic grading system that analyzes produce using cameras and sensors, classifying items by size, color, and visible defects. ",
      category: "Hardware",
      psNumber: "AGT35002",
      theme: "Agri-Market Access",

      tags: ["Computer Vision", "AI", "Image Processing", "Hardware"],
    },
    {
      id: 11,
      title: "Smart Packaging With Shelf-Life Indicators",
      description:
        " Design packaging containing freshness sensors that indicate spoilage levels using color-change labels or NFC data. ",
      category: "Hardware",
      psNumber: "AGT35003",
      theme: "Agri-Market Access",

      tags: ["IoT", "NFC", "Sensors", "Packaging"],
    },
    {
      id: 12,
      title: "Blockchain-Based Farm-to-Fork Traceability System",
      description:
        "Create a blockchain solution that logs harvesting, handling, and logistics data to ensure transparent and tamper-proof traceability.",
      category: "Software",
      psNumber: "AGT35004",
      theme: "Agri-Market Access",

      tags: ["Blockchain", "Web3", "Traceability", "Smart Contracts"],
    },
    {
      id: 13,
      title: "AI Demand Forecasting for Local Markets",
      description:
        " Develop a predictive model that analyzes demand trends, festival cycles, and weather patterns to help farmers plan crops and reduce waste. ",
      category: "Software",
      psNumber: "AGT35005",
      theme: "Agri-Market Access",

      tags: ["AI", "Time Series", "Forecasting", "ML"],
    },
    {
      id: 14,
      title: "Farmer-to-Consumer Marketplace With Logistics Optimization",
      description:
        " Build a digital marketplace for direct sales, integrating real-time inventory, pricing, and optimized delivery routing.",
      category: "Software",
      psNumber: "AGT35006",
      theme: "Agri-Market Access",

      tags: ["Full Stack", "E-commerce", "Logistics", "Optimization"],
    },


    // === Farmer Empowerment ===
    {
      id: 15,
      title: "Handheld Crop Diagnosis Device",
      description:
        "Design a portable device using sensors and LEDs to detect early plant health issues without requiring internet connectivity.",
      category: "Hardware",
      psNumber: "AGT45001",
      theme: "Farmer Empowerment",

      tags: ["Embedded", "Sensors", "Offline AI", "Mobile"],
    },
    {
      id: 16,
      title: "Affordable Smart Weather Station for Rural Areas",
      description:
        " Create a compact weather monitoring station measuring wind, humidity, rainfall, and temperature, delivering hyperlocal updates. ",
      category: "Hardware",
      psNumber: "AGT45002",
      theme: "Farmer Empowerment",

      tags: ["IoT", "Weather", "Solar", "Low-cost"],
    },
    {
      id: 17,
      title: "Solar-Powered Community Information Kiosk",
      description:
        " Develop a standalone solar-powered kiosk offering advisories, government scheme updates, and farming best practices in rural areas. ",
      category: "Hardware",
      psNumber: "AGT45003",
      theme: "Farmer Empowerment",

      tags: ["IoT", "Offline", "Solar", "Kiosk"],
    },
    {
      id: 18,
      title: "Multilingual Farmer Advisory & Chat Assistant",
      description:
        "Build an AI chatbot offering guidance on crop health, schemes, and best practices in multiple regional languages. ",
      category: "Software",
      psNumber: "AGT45004",
      theme: "Farmer Empowerment",

      tags: ["AI", "NLP", "Multilingual", "Chatbot", "Mobile"],
    },
    {
      id: 19,
      title: "Digital Farmer Learning Platform With AR/VR Simulations",
      description:
        "Create interactive modules teaching irrigation planning, pest identification, and safety through AR/VR-based demonstrations. ",
      category: "Software",
      psNumber: "AGT45005",
      theme: "Farmer Empowerment",

      tags: ["AR/VR", "EdTech", "Mobile", "Training"],
    },
    {
      id: 20,
      title: "Community Knowledge-Sharing App",
      description:
        " Develop a platform where farmers share images, solve problems collaboratively, and engage with experts. ",
      category: "Software",
      psNumber: "AGT45006",
      theme: "Farmer Empowerment",

      tags: ["Social App", "Offline", "Community", "Mobile"],
    },


    // === Green Growth ===
    {
      id: 21,
      title: "IoT Water Efficiency Controller for Irrigation Systems",
      description:
        "Design a controller that adjusts irrigation based on soil moisture and weather predictions to reduce wastage. ",
      category: "Hardware",
      psNumber: "AGT55001",
      theme: "Green Growth",

      tags: ["IoT", "Water Conservation", "Automation", "Sensors"],
    },
    {
      id: 22,
      title: "Portable Soil Health Scanner",
      description:
        "Build a handheld scanner using spectroscopy or sensors to instantly measure soil carbon, moisture, and nutrients. ",
      category: "Hardware",
      psNumber: "AGT55002",
      theme: "Green Growth",

      tags: ["Sensors", "Soil", "Spectroscopy", "Hardware"],
    },
    {
      id: 23,
      title: "Smart Carbon Capture & Monitoring Device",
      description:
        " Create a device to track soil carbon levels, biomass, and CO2 absorption for regenerative farming verification. ",
      category: "Hardware",
      psNumber: "AGT55003",
      theme: "Green Growth",

      tags: ["IoT", "Carbon", "Sustainability", "Sensors"],
    },
    {
      id: 24,
      title: "Soil Health Digital Dashboard With Regeneration Insights",
      description:
        "Develop a platform visualizing soil changes over time, highlighting regeneration opportunities. ",
      category: "Software",
      psNumber: "AGT55004",
      theme: "Green Growth",

      tags: ["Dashboard", "Data Visualization", "Sustainability", "Web"],
    },
    {
      id: 25,
      title: "Carbon-Credit Verification & Trading Platform",
      description:
        " Build a system estimating carbon sequestration from sustainable farming practices and enabling carbon-credit trading. ",
      category: "Software",
      psNumber: "AGT55005",
      theme: "Green Growth",

      tags: ["Blockchain", "Carbon Credits", "Sustainability", "Web3"],
    },
    {
      id: 26,
      title: "Water Usage Prediction & Sustainability Analyzer",
      description:
        " Create an AI model predicting seasonal water requirements and sustainability risks. ",
      category: "Software",
      psNumber: "AGT55006",
      theme: "Green Growth",

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

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getTagColor = (tag) => {
    // Extended mapping to cover all tags used in the dataset so nothing remains uncoloured.
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
      GPS: "bg-lime-600 text-black",
      Cloud: "bg-sky-600",
      Firmware: "bg-stone-600",
      OTA: "bg-rose-600",
      "Image Processing": "bg-fuchsia-600",
      "Control Systems": "bg-violet-600",
      "Precision Ag": "bg-amber-400 text-black",
      Automation: "bg-emerald-500 text-black",
      "Digital Twin": "bg-sky-500",
      Simulation: "bg-indigo-400",
      "Data Visualization": "bg-sky-700",
      "Predictive Analytics": "bg-indigo-500",
      "Data Science": "bg-emerald-700",
      Dashboard: "bg-sky-400 text-black",
      "Cold Chain": "bg-cyan-700",
      NFC: "bg-rose-400 text-black",
      Traceability: "bg-amber-400 text-black",
      "Time Series": "bg-purple-500",
      Forecasting: "bg-indigo-300 text-black",
      "Full Stack": "bg-slate-600",
      "E-commerce": "bg-lime-400 text-black",
      Logistics: "bg-amber-500",
      Optimization: "bg-emerald-600",
      "Offline AI": "bg-stone-500",
      Mobile: "bg-sky-600",
      Weather: "bg-cyan-500",
      Solar: "bg-yellow-400 text-black",
      "Low-cost": "bg-stone-400 text-black",
      Offline: "bg-stone-300 text-black",
      Kiosk: "bg-rose-500",
      NLP: "bg-pink-500",
      Multilingual: "bg-green-600",
      Chatbot: "bg-emerald-600",
      "AR/VR": "bg-purple-600",
      EdTech: "bg-indigo-600",
      Training: "bg-teal-500",
      "Social App": "bg-violet-500",
      Community: "bg-emerald-400 text-black",
      "Water Conservation": "bg-cyan-600",
      Soil: "bg-amber-300 text-black",
      Spectroscopy: "bg-rose-600",
      Carbon: "bg-neutral-600",
      Sustainability: "bg-green-700",
      Web: "bg-sky-500",
      "Carbon Credits": "bg-slate-500",
      Predictive: "bg-indigo-500",
      Water: "bg-cyan-400",
      Packaging: "bg-amber-300",
      Hardware: "bg-neutral-700",
    };

    return map[tag] || map.default || "bg-neutral-700";
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
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item, index) => {
                const isExpanded = expandedRow === item.id;

                return (
                  <React.Fragment key={item.id}>
                    <tr className="hover:bg-neutral-800 transition">
                      <td className="p-4 border border-neutral-700 align-top">{item.id}</td>

                      <td
                        className="p-4 border border-neutral-700 cursor-pointer"
                        onClick={() => toggleRow(item.id)}
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
                    </tr>

                    {isExpanded && (
                      <tr>
                        <td colSpan={6} className="p-0 border border-neutral-700">
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
                  <td colSpan={6} className="p-12 text-center text-neutral-500 border border-neutral-700">
                    No problems found. Try "AI" "Drone" "Blockchain" "IoT"...
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        <div className="flex justify-center items-center gap-8 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-lg border ${currentPage === 1 ? "opacity-50" : "hover:bg-neutral-800"}`}
          >
            Previous
          </button>

          <span className="text-lg font-bold text-lime-400">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() => setCurrentPage((p) => Math.min(p + 1, totalPages))}
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
