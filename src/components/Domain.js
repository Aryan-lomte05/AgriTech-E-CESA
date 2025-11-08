import React, { useEffect, useState } from "react";
import "./gallery.css";

const Domain = () => {
  const [activeImage, setActiveImage] = useState(null);
  const [moreInfoContent, setMoreInfoContent] = useState("");

  const images = [
    {
      src: require("../assets/images/farm.jpg"),
      alt: "farm close up",
      className: "farm",
      problemStatement: "Precision Agriculture",
      moreInfo: `
        <h3>AI/IoT-Enabled Pest Detection and Management:</h3>
        <p>Description: Develop a system utilizing AI and IoT sensors to monitor crop fields
        in real-time, identifying pest infestations early and recommending targeted
        interventions to minimize crop damage and reduce pesticide use.</p>
        <h3>Automated Soil Nutrient Monitoring System:</h3>
        <p>Description: Create an IoT-based solution that continuously assesses soil nutrient
        levels, providing farmers with actionable data to optimize fertilizer application and
        enhance soil health.</p>
        <h3>Impact Estimator for Regenerative Farming:</h3>
        <p>Description: Design a platform that quantifies the environmental and economic
        benefits of adopting regenerative agriculture practices, such as reduced carbon
        footprint and improved yield.</p>
        <h3>Water Usage Optimization through Smart Irrigation:</h3>
        <p>Description: Design a smart irrigation system that leverages soil moisture
        sensors and weather forecasts to deliver precise water amounts, promoting water
        stewardship and preventing over-irrigation.</p>
      `,
    },
    {
      src: require("../assets/images/supply.png"),
      alt: "Soil close up",
      className: "soil",
      problemStatement: "Supply Chain and Market Access",
      moreInfo: `
        <h3>Blockchain-Based Produce Traceability System:</h3>
        <p>Description: Develop a blockchain solution to track agricultural products from
        farm to consumer, ensuring transparency, reducing waste, and enhancing food
        safety.</p>
        <h3>AI-Driven Demand Forecasting Platform:</h3>
        <p>Description: Create an AI-powered tool that analyzes market trends, weather
        patterns, and historical data to predict demand for various crops, assisting
        farmers in planning and reducing post-harvest losses.</p>
        <h3>Direct Farmer-to-Consumer E-Commerce Platform:</h3>
        <p>Description: Establish an online marketplace that connects farmers directly with
        consumers, streamlining the supply chain, ensuring fair pricing, and providing
        consumers with fresh produce.</p>
        <h3>Smart Packaging Solution for Shelf-Life Extension:</h3>
        <p>Description: Innovate packaging materials embedded with sensors to monitor
        freshness and environmental conditions, thereby reducing spoilage and
        extending the shelf life of perishable goods.</p>
      `,
    },
    {
      src: require("../assets/images/robot.jpg"),
      alt: "Robot",
      className: "robot",
      problemStatement: "Biofuel",
      moreInfo: `
        <h3>AI-Optimized Biomass Collection System:</h3>
        <p>Description: Design an AI-driven logistics platform to streamline the collection of
        agricultural residues for biofuel production, optimizing routes and reducing
        transportation costs.</p>
        <h3>Smart Biomass Management Platform:</h3>
        <p>Description: Develop a system that monitors biomass storage conditions using
        IoT sensors to prevent degradation and ensure quality for biofuel conversion.</p>
        <h3>Yield Prediction Model for Energy Crops:</h3>
        <p>Description: Create a machine learning model that predicts the yield of energy
        crops based on soil data, weather patterns, and farming practices, aiding in
        efficient resource allocation.</p>
        <h3>Community-Based Biofuel Production Initiative:</h3>
        <p>Description: Establish a cooperative model where local farmers can contribute
        biomass and share in the benefits of biofuel production, promoting sustainable
        energy and providing additional income streams.</p>
      `,
    },
    {
      src: require("../assets/images/farmer.jpg"),
      alt: "Green USB device",
      className: "usb",
      problemStatement: "Farmers' Empowerment and Education",
      moreInfo: `
        <h3>Mobile-Based Farmer Training Platform:</h3>
        <p>Description: Develop a mobile application offering interactive training modules on
        sustainable farming practices, pest management, and market access, tailored to
        local languages and contexts.</p>
        <h3>AI-Powered Farmer Support Platform:</h3>
        <p>Description: Create an AI-powered chatbot and community platform with local
        language support, enabling farmers to get instant advice on farming, crop health,
        and schemes, while connecting with peers to share experiences and solve
        problems collaboratively.</p>
        <h3>Real-Time Crop Health Diagnostic Tool:</h3>
        <p>Description: Implement a mobile app that allows farmers to upload images of
        crops, utilizing AI to diagnose diseases or nutrient deficiencies and recommend
        corrective actions.</p>
        <h3>Localized Weather Advisory Service:</h3>
        <p>Description: Establish a service providing hyper-local weather forecasts and
        farming advisories via SMS or app notifications, enabling farmers to make
        informed decisions.</p>
      `,
    },
    {
      src: require("../assets/images/soil.jpg"),
      alt: "Drone in sky",
      className: "drone",
      problemStatement: "Open Innovation",
      moreInfo: `
        <h3>Open Innovation:</h3>
        <p>Participants are welcome to propose disruptive ideas in any agri-tech-related domain.</p>
      `,
    },
  ];

  const handleMoreInfoClick = (index) => {
    setActiveImage(images[index]);
    setMoreInfoContent(images[index].moreInfo);
  };

  const handleCloseClick = () => {
    setActiveImage(null);
    setMoreInfoContent("");
  };

  // Handle click outside of info-frame
  useEffect(() => {
    const handleClickOutside = (event) => {
      const infoFrame = document.querySelector(".info-frame");
      if (activeImage && infoFrame && !infoFrame.contains(event.target)) {
        handleCloseClick();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeImage]);

  return (
    <div>
      <div className="domains-title">
      <h1 className="faq-title">
        <span className="letter">D</span>
        <span className="letter">O</span>
        <span className="letter">M</span>
        <span className="letter">A</span>
        <span className="letter">I</span>
        <span className="letter">N</span>
        <span className="letter">S</span>
      </h1>
      </div>
      <div className="gallery-container">
        {images.map((image, index) => (
          <div key={index} className={`gallery-item ${image.className}`}>
            <img src={image.src} alt={image.alt} />
            <div className="overlay">
              <div className="text">
                {image.problemStatement}
                <button
                  className="more-info-button"
                  onClick={() => handleMoreInfoClick(index)}
                >
                  More Info
                </button>
              </div>
            </div>
          </div>
        ))}

        {activeImage && (
          <>
            <div className={`info-frame ${activeImage ? "active" : ""}`}>
              <button className="close-button" onClick={handleCloseClick}>
                X
              </button>
              <div
                className="info-content"
                dangerouslySetInnerHTML={{ __html: moreInfoContent }}
              />
            </div>
            <div
              className={`info-frame-overlay ${activeImage ? "active" : ""}`}
              onClick={handleCloseClick}
            ></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Domain;