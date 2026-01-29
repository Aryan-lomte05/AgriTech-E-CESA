import React, { useState, useEffect } from "react";

const ProblemStatements = () => {
  const problemData = [
    // === Next-Gen Agri-Tech ===
    {
      id: 1,
      title: "Smart Multi-Sensor Crop Health Monitoring Device",
      description:
        "Develop a rugged IoT device equipped with pH, moisture, NPK, chlorophyll, humidity, and temperature sensors to collect real-time crop and soil data, transmitting it to the cloud for recommendations.",
      category: "Hardware",
      psNumber: "AGT25001",
      theme: "Next-Gen Agri-Tech",
      tags: ["IoT", "Embedded", "Sensors", "Cloud", "Firmware", "OTA"],
    },
    {
      id: 2,
      title: "Autonomous Farm Rover for Precision Tasks",
      description:
        "Build an autonomous rover capable of precision spraying, micro fertigation, and automated weeding using GPS and computer vision.",
      category: "Hardware",
      psNumber: "AGT25002",
      theme: "Next-Gen Agri-Tech",
      tags: ["Robotics", "Computer Vision", "AI", "GPS", "Autonomous"],
    },
    {
      id: 3,
      title: "Solar-Powered Field Surveillance Drone",
      description:
        "Design a solar-charging drone with multispectral cameras to monitor crop stress, irrigation, and pest activity.",
      category: "Hardware",
      psNumber: "AGT25003",
      theme: "Next-Gen Agri-Tech",
      tags: ["Drone", "Computer Vision", "AI", "Solar", "Image Processing"],
    },
    {
      id: 4,
      title: "Precision Spray Drone With Smart Nozzle Control",
      description:
        "Develop a drone-based precision spraying system capable of variable-rate application. Includes wind sensors, droplet size control, and AI-based detection.",
      category: "Hardware",
      psNumber: "AGT25004",
      theme: "Next-Gen Agri-Tech",
      tags: ["Drone", "AI", "Control Systems", "IoT", "Precision Ag"],
    },
    {
      id: 5,
      title: "Drone-Based Seed Sowing & Reforestation System",
      description:
        "Create a drone capable of deploying seed balls accurately across difficult terrain while mapping sowing density.",
      category: "Hardware",
      psNumber: "AGT25005",
      theme: "Next-Gen Agri-Tech",
      tags: ["Drone", "Robotics", "GPS", "Automation"],
    },
    {
      id: 6,
      title: "AI Crop-Stress Identification System",
      description:
        "Create an AI model that processes drone/mobile images to identify diseases and nutrient deficiencies with high accuracy.",
      category: "Software",
      psNumber: "AGT25006",
      theme: "Next-Gen Agri-Tech",
      tags: ["AI", "Machine Learning", "Computer Vision", "Deep Learning", "Mobile"],
    },
    {
      id: 7,
      title: "Farm Digital Twin Simulation Engine",
      description:
        "Build a simulation platform that models farm conditions using soil patterns, weather data, and crop growth models.",
      category: "Software",
      psNumber: "AGT25007",
      theme: "Next-Gen Agri-Tech",
      tags: ["Digital Twin", "Simulation", "Data Visualization", "ML"],
    },
    {
      id: 8,
      title: "Predictive Yield Optimization Platform",
      description:
        "Develop a machine-learning model using historic yield patterns and weather trends to optimize crop schedules.",
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
        "Build a sensor-embedded cold storage system that tracks temperature, humidity, and gas levels.",
      category: "Hardware",
      psNumber: "AGT35001",
      theme: "Agri-Market Access",
      tags: ["IoT", "Sensors", "Cold Chain", "Automation"],
    },
    {
      id: 10,
      title: "Automated Quality Grading Machine",
      description:
        "Develop an electronic grading system that analyzes produce using cameras and sensors.",
      category: "Hardware",
      psNumber: "AGT35002",
      theme: "Agri-Market Access",
      tags: ["Computer Vision", "AI", "Image Processing", "Hardware"],
    },
    {
      id: 11,
      title: "Smart Packaging With Shelf-Life Indicators",
      description:
        "Design packaging with freshness sensors indicating spoilage through color-change/NFC tags.",
      category: "Hardware",
      psNumber: "AGT35003",
      theme: "Agri-Market Access",
      tags: ["IoT", "NFC", "Sensors", "Packaging"],
    },
    {
      id: 12,
      title: "Blockchain-Based Farm-to-Fork Traceability System",
      description:
        "Create a blockchain solution ensuring transparent and tamper-proof produce traceability.",
      category: "Software",
      psNumber: "AGT35004",
      theme: "Agri-Market Access",
      tags: ["Blockchain", "Web3", "Traceability", "Smart Contracts"],
    },
    {
      id: 13,
      title: "AI Demand Forecasting for Local Markets",
      description:
        "Develop a predictive model analyzing trends, festival cycles, weather patterns, and demand.",
      category: "Software",
      psNumber: "AGT35005",
      theme: "Agri-Market Access",
      tags: ["AI", "Time Series", "Forecasting", "ML"],
    },
    {
      id: 14,
      title: "Farmer-to-Consumer Marketplace With Logistics Optimization",
      description:
        "Build an e-commerce marketplace integrating live pricing, inventory, and optimized routing.",
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
        "Portable sensor-driven device to detect plant health issues without internet.",
      category: "Hardware",
      psNumber: "AGT45001",
      theme: "Farmer Empowerment",
      tags: ["Embedded", "Sensors", "Offline AI", "Mobile"],
    },
    {
      id: 16,
      title: "Affordable Smart Weather Station",
      description:
        "Compact weather monitoring station offering hyperlocal updates.",
      category: "Hardware",
      psNumber: "AGT45002",
      theme: "Farmer Empowerment",
      tags: ["IoT", "Weather", "Solar", "Low-cost"],
    },
    {
      id: 17,
      title: "Solar-Powered Community Information Kiosk",
      description:
        "Standalone kiosk offering advisories, schemes, and farming updates.",
      category: "Hardware",
      psNumber: "AGT45003",
      theme: "Farmer Empowerment",
      tags: ["IoT", "Offline", "Solar", "Kiosk"],
    },
    {
      id: 18,
      title: "Multilingual Farmer Advisory & Chat Assistant",
      description:
        "AI chatbot offering guidance in multiple regional languages.",
      category: "Software",
      psNumber: "AGT45004",
      theme: "Farmer Empowerment",
      tags: ["AI", "NLP", "Multilingual", "Chatbot", "Mobile"],
    },
    {
      id: 19,
      title: "Digital Farmer Learning Platform",
      description:
        "Interactive AR/VR modules teaching irrigation planning and pest detection.",
      category: "Software",
      psNumber: "AGT45005",
      theme: "Farmer Empowerment",
      tags: ["AR/VR", "EdTech", "Mobile", "Training"],
    },
    {
      id: 20,
      title: "Community Knowledge-Sharing App",
      description:
        "Platform where farmers post images, solve problems together, and engage with experts.",
      category: "Software",
      psNumber: "AGT45006",
      theme: "Farmer Empowerment",
      tags: ["Social App", "Offline", "Community", "Mobile"],
    },

    // === Green Growth ===
    {
      id: 21,
      title: "IoT Water Efficiency Controller",
      description: "Controller that reduces water usage using soil moisture + weather data.",
      category: "Hardware",
      psNumber: "AGT55001",
      theme: "Green Growth",
      tags: ["IoT", "Water Conservation", "Automation", "Sensors"],
    },
    {
      id: 22,
      title: "Portable Soil Health Scanner",
      description: "Handheld scanner using spectroscopy to measure soil nutrients.",
      category: "Hardware",
      psNumber: "AGT55002",
      theme: "Green Growth",
      tags: ["Sensors", "Soil", "Spectroscopy", "Hardware"],
    },
    {
      id: 23,
      title: "Smart Carbon Capture & Monitoring Device",
      description:
        "Device to track soil carbon, CO2 absorption, and biomass.",
      category: "Hardware",
      psNumber: "AGT55003",
      theme: "Green Growth",
      tags: ["IoT", "Carbon", "Sustainability", "Sensors"],
    },
    {
      id: 24,
      title: "Soil Health Digital Dashboard",
      description:
        "Web dashboard showing soil health changes over time.",
      category: "Software",
      psNumber: "AGT55004",
      theme: "Green Growth",
      tags: ["Dashboard", "Data Visualization", "Sustainability", "Web"],
    },
    {
      id: 25,
      title: "Carbon-Credit Verification & Trading Platform",
      description:
        "Platform estimating carbon sequestration and enabling carbon credit trade.",
      category: "Software",
      psNumber: "AGT55005",
      theme: "Green Growth",
      tags: ["Blockchain", "Carbon Credits", "Sustainability", "Web3"],
    },
    {
      id: 26,
      title: "Water Usage Prediction System",
      description:
        "AI model predicting seasonal water requirements.",
      category: "Software",
      psNumber: "AGT55006",
      theme: "Green Growth",
      tags: ["AI", "Water", "Sustainability", "Predictive"],
    },

    // === NEW ADDITIONS (Shortlisted) ===
    // === Next-Gen Agri-Tech (Added from PS List) ===
    {
      id: 27,
      title: "Early Warning System for Sugarcane Diseases",
      description: "Develop an early warning system using images, sensors, or AI to detect sugarcane diseases at an early stage.",
      category: "Software",
      psNumber: "AGT26001",
      theme: "Next-Gen Agri-Tech",
      tags: ["AI", "Image Processing", "IoT", "Disease Detection"],
      isNew: true,
    },
    {
      id: 28,
      title: "Low-Cost Soil Moisture & Irrigation Monitor",
      description: "Develop a low-cost system that monitors soil moisture and crop water stress and provides clear irrigation recommendations to sugarcane farmers.",
      category: "Hardware",
      psNumber: "AGT26002",
      theme: "Next-Gen Agri-Tech",
      tags: ["IoT", "Sensors", "Water Management", "Irrigation"],
      isNew: true,
    },
    {
      id: 29,
      title: "Sugarcane Fertilizer Decision Support System",
      description: "Build a decision support tool that recommends fertilizer type, quantity, and timing based on soil condition, crop stage, and expected yield.",
      category: "Software",
      psNumber: "AGT26003",
      theme: "Next-Gen Agri-Tech",
      tags: ["AI", "Decision Support", "Soil Health"],
      isNew: true,
    },
    {
      id: 30,
      title: "Sugarcane Lodging Prediction & Prevention",
      description: "Design a monitoring or prediction system that identifies lodging risk in sugarcane fields and suggests preventive actions.",
      category: "Software",
      psNumber: "AGT26004",
      theme: "Next-Gen Agri-Tech",
      tags: ["Predictive Analytics", "AI", "Risk Management"],
      isNew: true,
    },
    {
      id: 31,
      title: "Early-Season Sugarcane Yield Estimation",
      description: "Develop a system using field data or remote sensing to estimate sugarcane yield at early and mid-crop stages.",
      category: "Software",
      psNumber: "AGT26005",
      theme: "Next-Gen Agri-Tech",
      tags: ["Remote Sensing", "AI", "Yield Estimation"],
      isNew: true,
    },
    {
      id: 32,
      title: "AI-Driven Pest Surveillance System",
      description: "Design an AI-driven pest surveillance system using traps, images, or sensors to detect early pest population rise and trigger targeted control actions.",
      category: "Hardware",
      psNumber: "AGT26006",
      theme: "Next-Gen Agri-Tech",
      tags: ["AI", "Pest Control", "IoT", "Hardware"],
      isNew: true,
    },
    {
      id: 33,
      title: "Ratoon Crop Diagnostic Tool",
      description: "Develop a diagnostic tool that analyses soil, management history, and crop data to identify causes of poor ratoon performance and suggest corrective measures.",
      category: "Software",
      psNumber: "AGT26007",
      theme: "Next-Gen Agri-Tech",
      tags: ["Data Analysis", "Soil Health", "Diagnostics"],
      isNew: true,
    },
    {
      id: 34,
      title: "Automated Drone/Mobile Field Monitoring",
      description: "Create a drone or mobile-based automated field monitoring system that captures crop health indicators and flags anomalies.",
      category: "Hardware",
      psNumber: "AGT26008",
      theme: "Next-Gen Agri-Tech",
      tags: ["Drone", "Mobile", "Monitoring", "AI"],
      isNew: true,
    },

    // === Agri-Market Access (Added from PS List) ===
    {
      id: 35,
      title: "Harvest Coordination & Tracking System",
      description: "Create a coordination or tracking system that reduces delays between harvesting, transport, and crushing to minimize sugar loss.",
      category: "Software",
      psNumber: "AGT36001",
      theme: "Agri-Market Access",
      tags: ["Logistics", "Tracking", "Supply Chain"],
      isNew: true,
    },
    {
      id: 36,
      title: "Farm Performance Benchmarking Platform",
      description: "Build a benchmarking platform that compares yield, input use, water efficiency, and soil health with anonymized regional averages.",
      category: "Software",
      psNumber: "AGT36002",
      theme: "Agri-Market Access",
      tags: ["Data Analysis", "Benchmarking", "Web"],
      isNew: true,
    },
    {
      id: 37,
      title: "Data-Driven Risk Assessment for Credit",
      description: "Create a data-driven risk assessment system using weather, soil, and crop data to support fair crop insurance and credit decisions.",
      category: "Software",
      psNumber: "AGT36003",
      theme: "Agri-Market Access",
      tags: ["FinTech", "Risk Assessment", "Data Science"],
      isNew: true,
    },

    // === Farmer Empowerment (Added from PS List) ===
    {
      id: 38,
      title: "Localized Digital Advisory Platform",
      description: "Design a simple digital advisory platform that provides location-specific, crop-stage-based guidance in local language for sugarcane farmers.",
      category: "Software",
      psNumber: "AGT46001",
      theme: "Farmer Empowerment",
      tags: ["Advisory", "Local Language", "Mobile"],
      isNew: true,
    },
    {
      id: 39,
      title: "Hyperlocal Weather Advisory System",
      description: "Develop a hyperlocal weather advisory system that provides field-level forecasts and actionable alerts for rainfall, temperature, wind, and extreme events.",
      category: "Software",
      psNumber: "AGT46002",
      theme: "Farmer Empowerment",
      tags: ["Weather", "Forecasting", "Alerts"],
      isNew: true,
    },
    {
      id: 40,
      title: "Digital Knowledge-Sharing Platform",
      description: "Design a digital knowledge-sharing platform that captures best practices, field trials, and success stories and delivers them in simple local-language formats.",
      category: "Software",
      psNumber: "AGT46003",
      theme: "Farmer Empowerment",
      tags: ["Knowledge Sharing", "Community", "Education"],
      isNew: true,
    },

    // === Green Growth (Added from PS List) ===
    {
      id: 41,
      title: "Soil Organic Carbon Tracking Platform",
      description: "Create a simple and transparent digital platform to track Soil Organic Carbon changes and generate verifiable data for carbon credit eligibility.",
      category: "Software",
      psNumber: "AGT56001",
      theme: "Green Growth",
      tags: ["Sustainability", "Carbon Credits", "Blockchain"],
      isNew: true,
    },
    {
      id: 42,
      title: "GIS-Based Residue Management Solution",
      description: "Develop a GIS-based solution to estimate the quantity and value of sugarcane residues and suggest practical options for their use instead of burning.",
      category: "Software",
      psNumber: "AGT56002",
      theme: "Green Growth",
      tags: ["GIS", "Sustainability", "Waste Management"],
      isNew: true,
    },
    {
      id: 43,
      title: "Smart Irrigation Recommendation System",
      description: "Develop a low-cost system that monitors soil moisture and crop water stress and provides clear irrigation recommendations to sugarcane farmers.",
      category: "Hardware",
      psNumber: "AGT56003",
      theme: "Green Growth",
      tags: ["IoT", "Water Conservation", "Irrigation"],
      isNew: true,
    },
    {
      id: 44,
      title: "Climate Impact Assessment Tool",
      description: "Build a climate impact assessment tool that projects future sugarcane yield and water demand under different climate scenarios.",
      category: "Software",
      psNumber: "AGT56004",
      theme: "Green Growth",
      tags: ["Climate Change", "Predictive Analytics", "Simulation"],
      isNew: true,
    },

    // === Open Innovation (New Theme) ===
    {
      id: 45,
      title: "Transparent Cane Quality Feedback System",
      description: "Design a digital system that shares clear, timely, and understandable sugarcane quality data from factories to farmers to support fair pricing and better crop planning.",
      category: "Software",
      psNumber: "AGT66001",
      theme: "Open Innovation",
      tags: ["Transparency", "Data Sharing", "Supply Chain"],
      isNew: true,
    },
    {
      id: 46,
      title: "GIS-Based Residue Solution",
      description: "Develop a GIS-based solution to estimate the quantity and value of sugarcane residues and suggest practical options for their use instead of burning.",
      category: "Software",
      psNumber: "AGT66002",
      theme: "Open Innovation",
      tags: ["GIS", "Sustainability", "Waste Management"],
      isNew: true,
    },
    {
      id: 47,
      title: "Safe Spraying Solution",
      description: "Build a solution using drones, automation, or smart alerts to reduce direct farmer exposure to pesticides during spraying operations.",
      category: "Hardware",
      psNumber: "AGT66003",
      theme: "Open Innovation",
      tags: ["Safety", "Drones", "Automation"],
      isNew: true,
    },
    {
      id: 48,
      title: "Portable SOC Estimation Tool",
      description: "Develop a low-cost, portable, and non-destructive tool that estimates Soil Organic Carbon directly in the field and shows whether levels are low, medium, or sufficient.",
      category: "Hardware",
      psNumber: "AGT66004",
      theme: "Open Innovation",
      tags: ["Sensors", "Soil Health", "Portable"],
      isNew: true,
    },
    {
      id: 49,
      title: "GIS Dashboard for SOC Spatial Variation",
      description: "Design a GIS-based dashboard that combines satellite data with field soil data to show spatial variation of Soil Organic Carbon.",
      category: "Software",
      psNumber: "AGT66005",
      theme: "Open Innovation",
      tags: ["GIS", "Data Visualization", "Soil Health"],
      isNew: true,
    },
    {
      id: 50,
      title: "SOC Prediction Simulation Tool",
      description: "Build a simulation tool that predicts Soil Organic Carbon changes over 1, 5, and 10 years based on selected farming practices.",
      category: "Software",
      psNumber: "AGT66006",
      theme: "Open Innovation",
      tags: ["Simulation", "Predictive Analytics", "Soil Health"],
      isNew: true,
    },
    {
      id: 51,
      title: "Precision Input Application Solution",
      description: "Develop an agriculture solution that applies organic inputs such as fertilizers and pesticides only where needed based on soil condition and carbon deficit.",
      category: "Software",
      psNumber: "AGT66007",
      theme: "Open Innovation",
      tags: ["Precision Ag", "Sustainability", "Efficiency"],
      isNew: true,
    },
    {
      id: 52,
      title: "Sugarcane Maturity & Harvest Planning System",
      description: "Create a satellite or drone-based monitoring system that identifies sugarcane fields with optimal maturity and sugar content for harvest planning.",
      category: "Software",
      psNumber: "AGT66008",
      theme: "Open Innovation",
      tags: ["Remote Sensing", "Harvest Planning", "Yield Optimization"],
      isNew: true,
    }
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [expandedRow, setExpandedRow] = useState(null);

  const itemsPerPage = 10;

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

  const totalPages = Math.ceil(filteredData.length / itemsPerPage) || 1;

  const currentItems = filteredData.slice(
    (currentPage - 1) * itemsPerPage,
    (currentPage - 1) * itemsPerPage + itemsPerPage
  );

  useEffect(() => {
    setCurrentPage(1);
    setExpandedRow(null);
  }, [search]);

  useEffect(() => {
    if (currentPage > totalPages) setCurrentPage(totalPages);
  }, [currentPage, totalPages]);

  const toggleRow = (id) => {
    setExpandedRow(expandedRow === id ? null : id);
  };

  const getTagColor = (tag) => {
    const map = {
      AI: "bg-blue-600 text-white",
      "Machine Learning": "bg-purple-600 text-white",
      ML: "bg-purple-600 text-white",
      "Deep Learning": "bg-indigo-600 text-white",
      "Computer Vision": "bg-pink-600 text-white",
      IoT: "bg-cyan-600 text-black",
      Drone: "bg-orange-600 text-white",
      Robotics: "bg-red-600 text-white",
      Blockchain: "bg-yellow-500 text-black",
      Web3: "bg-yellow-600 text-black",
      "Smart Contracts": "bg-amber-600 text-black",
      Embedded: "bg-emerald-600 text-white",
      Sensors: "bg-teal-600 text-white",
      GPS: "bg-lime-600 text-black",
      Cloud: "bg-sky-600 text-white",
      Firmware: "bg-stone-600 text-white",
      OTA: "bg-rose-600 text-white",
      "Image Processing": "bg-fuchsia-600 text-white",
      "Control Systems": "bg-violet-600 text-white",
      "Precision Ag": "bg-amber-400 text-black",
      Automation: "bg-emerald-500 text-black",
      "Digital Twin": "bg-sky-500 text-white",
      Simulation: "bg-indigo-400 text-black",
      "Data Visualization": "bg-sky-700 text-white",
      "Predictive Analytics": "bg-indigo-500 text-white",
      "Data Science": "bg-emerald-700 text-white",
      Dashboard: "bg-sky-400 text-black",
      "Cold Chain": "bg-cyan-700 text-white",
      NFC: "bg-rose-400 text-black",
      Traceability: "bg-amber-400 text-black",
      "Time Series": "bg-purple-500 text-white",
      Forecasting: "bg-indigo-300 text-black",
      "Full Stack": "bg-slate-600 text-white",
      "E-commerce": "bg-lime-400 text-black",
      Logistics: "bg-amber-500 text-black",
      Optimization: "bg-emerald-600 text-white",
      "Offline AI": "bg-stone-500 text-white",
      Mobile: "bg-sky-600 text-white",
      Weather: "bg-cyan-500 text-black",
      Solar: "bg-yellow-400 text-black",
      "Low-cost": "bg-stone-400 text-black",
      Offline: "bg-stone-300 text-black",
      Kiosk: "bg-rose-500 text-white",
      NLP: "bg-pink-500 text-white",
      Multilingual: "bg-green-600 text-white",
      Chatbot: "bg-emerald-600 text-white",
      "AR/VR": "bg-purple-600 text-white",
      EdTech: "bg-indigo-600 text-white",
      Training: "bg-teal-500 text-white",
      "Social App": "bg-violet-500 text-white",
      Community: "bg-emerald-400 text-black",
      "Water Conservation": "bg-cyan-600 text-white",
      Soil: "bg-amber-300 text-black",
      Spectroscopy: "bg-rose-600 text-white",
      Carbon: "bg-neutral-600 text-white",
      Sustainability: "bg-green-700 text-white",
      Web: "bg-sky-500 text-white",
      "Carbon Credits": "bg-slate-500 text-white",
      Predictive: "bg-indigo-500 text-white",
      Water: "bg-cyan-400 text-black",
      Packaging: "bg-amber-300 text-black",
      Hardware: "bg-neutral-700 text-white",
      Autonomous: "bg-indigo-700 text-white",

      // New Tags
      "Disease Detection": "bg-red-500 text-white",
      "Water Management": "bg-blue-500 text-white",
      "Irrigation": "bg-cyan-500 text-black",
      "Decision Support": "bg-violet-500 text-white",
      "Soil Health": "bg-amber-700 text-white",
      "Risk Management": "bg-orange-500 text-black",
      "Yield Estimation": "bg-lime-600 text-black",
      "Remote Sensing": "bg-sky-600 text-white",
      "Pest Control": "bg-rose-600 text-white",
      "Diagnostics": "bg-pink-600 text-white",
      "Advisory": "bg-indigo-500 text-white",
      "Local Language": "bg-emerald-600 text-white",
      "Alerts": "bg-red-600 text-white",
      "Knowledge Sharing": "bg-purple-500 text-white",
      "Education": "bg-blue-400 text-black",
      "Waste Management": "bg-stone-500 text-white",
      "Climate Change": "bg-cyan-700 text-white",
      "Transparency": "bg-sky-400 text-black",
      "Data Sharing": "bg-indigo-400 text-black",
      "Safety": "bg-red-600 text-white",
      "Portable": "bg-orange-400 text-black",
      "Yield Optimization": "bg-green-600 text-white",
      "Efficiency": "bg-emerald-500 text-black",
    };

    return map[tag] || "bg-neutral-700 text-white";
  };


  return (
    <div className="min-h-screen pt-32 pb-20 bg-neutral-950 text-white px-6">
      <h1 className="text-4xl font-bold text-lime-400 text-center mb-10">
        Hackathon Problem Statements
      </h1>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-8">
          <div className="text-lg font-semibold">
            Total Problems: {problemData.length} | Showing:{" "}
            {filteredData.length}
          </div>

          <input
            type="text"
            placeholder="Search by title PS number theme category or tags..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-96 px-5 py-3 bg-neutral-800 rounded-lg border border-neutral-700 focus:outline-none focus:border-lime-400 transition"
          />



        </div>

        <div className="overflow-x-auto rounded-lg border border-neutral-800">
          <table className="w-full text-sm bg-neutral-900 border-collapse">
            <thead className="bg-neutral-800 text-lime-400">
              <tr>
                <th className="p-4 border border-neutral-700 text-left">S.No</th>
                <th className="p-4 border border-neutral-700 text-left">
                  Problem Title
                </th>
                <th className="p-4 border border-neutral-700 text-left">Tags</th>
                <th className="p-4 border border-neutral-700 text-left">
                  Category
                </th>
                <th className="p-4 border border-neutral-700 text-left">
                  PS Number
                </th>
                <th className="p-4 border border-neutral-700 text-left">
                  Theme
                </th>
              </tr>
            </thead>

            <tbody>
              {currentItems.map((item) => {
                const isExpanded = expandedRow === item.id;

                return (
                  <React.Fragment key={item.id}>
                    <tr className="hover:bg-neutral-800 transition">
                      <td className="p-4 border border-neutral-700">
                        {item.id}
                      </td>

                      <td
                        onClick={() => toggleRow(item.id)}
                        className="p-4 border border-neutral-700 cursor-pointer"
                      >
                        <span className="text-lime-300 font-medium underline decoration-dotted">
                          {item.title}
                        </span>
                        {item.isNew && (
                          <span className="ml-2 inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-800">
                            New
                          </span>
                        )}
                      </td>

                      <td className="p-4 border border-neutral-700">
                        <div className="flex flex-wrap gap-2">
                          {item.tags.map((tag) => (
                            <span
                              key={tag}
                              className={`px-3 py-1 rounded-full text-xs font-medium ${getTagColor(
                                tag
                              )}`}
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </td>

                      <td className="p-4 border border-neutral-700">
                        {item.category}
                      </td>

                      <td className="p-4 border border-neutral-700 font-mono">
                        {item.psNumber}
                      </td>

                      <td className="p-4 border border-neutral-700">
                        {item.theme}
                      </td>
                    </tr>

                    {/* Expanded Description */}
                    {isExpanded && (
                      <tr>
                        <td
                          colSpan={6}
                          className="p-0 border border-neutral-700"
                        >
                          <div className="p-6 bg-neutral-900/80">
                            <h4 className="text-lg font-bold text-lime-400 mb-3">
                              Description
                            </h4>
                            <p className="text-neutral-300 whitespace-pre-wrap">
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
                  <td
                    colSpan={6}
                    className="p-12 border border-neutral-700 text-center text-neutral-500"
                  >
                    No problems found. Try keywords like “AI”, “Drone”, “IoT”,
                    “Blockchain”.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center gap-8 mt-10">
          <button
            onClick={() => setCurrentPage((p) => Math.max(p - 1, 1))}
            disabled={currentPage === 1}
            className={`px-6 py-3 rounded-lg border ${currentPage === 1 ? "opacity-50" : "hover:bg-neutral-800"
              }`}
          >
            Previous
          </button>

          <span className="text-lg font-bold text-lime-400">
            Page {currentPage} of {totalPages}
          </span>

          <button
            onClick={() =>
              setCurrentPage((p) => Math.min(p + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className={`px-6 py-3 rounded-lg border ${currentPage === totalPages ? "opacity-50" : "hover:bg-neutral-800"
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
