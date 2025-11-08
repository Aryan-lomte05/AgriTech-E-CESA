import React from "react";
import "./about.css";
import videoSrc from "../assets/bg.mp4";

const AboutSection = () => {
  return (
    <section className="AboutSection">
      <video className="VideoBackground" autoPlay loop muted src={videoSrc} />
      <div className="TextContainer">
        <h2>About Agri-Tech</h2>
        <p>
          Agri-Tech Hackathon 2025 is a national-level offline hackathon that brings together the brightest minds to innovate, collaborate, and develop technology-driven solutions for agriculture. Hosted by K. J. Somaiya School of Engineering (KJSSE), this event will be a 24-hour coding sprint where participants will work on challenges spanning precision agriculture, supply chain optimization, farmers’ empowerment, biofuel innovation, and open innovation in agriculture.
          <br /><br />
          This is your chance to code, create, and revolutionize the agri-tech landscape with cutting-edge technologies like AI, IoT, blockchain, and data analytics. The hackathon will conclude with a pitching round where teams present their solutions to an esteemed panel of judges from industry and academia.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;