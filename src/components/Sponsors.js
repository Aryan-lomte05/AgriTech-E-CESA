import React from 'react';
import './sponsors.css'; // Ensure the CSS is linked correctly

const sponsors = [
  { id: 1, name: "Sponsor 1", logo: require("../assets/sponsors/bkt.png") },
  { id: 2, name: "Sponsor 2", logo: require("../assets/sponsors/godavari.png") },
  { id: 3, name: "Sponsor 3", logo: require("../assets/sponsors/lic.png") },
  { id: 4, name: "Sponsor 4", logo: require("../assets/sponsors/bkt.png") },
  { id: 5, name: "Sponsor 5", logo: require("../assets/sponsors/unstop.png") },
  { id: 6, name: "Sponsor 6", logo: require("../assets/sponsors/innosight.png") },
  { id: 7, name: "Sponsor 7", logo: require("../assets/sponsors/vista.png"), className: "large-sponsor" },
  { id: 8, name: "Sponsor 8", logo: require("../assets/sponsors/kiaar.png"), className: "large-sponsor" }, // Updated ID to be unique
  { id: 9, name: "Sponsor 9", logo: require("../assets/sponsors/max.png")},
  { id: 10, name: "Sponsor 10", logo: require("../assets/sponsors/dominos.png")},
  { id: 11, name: "Sponsor 11", logo: require("../assets/sponsors/Neoperk.png")}
];

const SponsorScroll = () => {
  // Reverse the sponsors array for the second row
  const reversedSponsors = [...sponsors].reverse(); // Make a shallow copy and reverse it

  return (
    <>
      <div className="sponsor-heading">
        <h1 className="faq-title">
          <span className="letter">O</span>
          <span className="letter">U</span>
          <span className="letter">R</span>
          <span>&nbsp;</span> 
          <span className="letter">S</span>
          <span className="letter">P</span>
          <span className="letter">O</span>
          <span className="letter">N</span>
          <span className="letter">S</span>
          <span className="letter">O</span>
          <span className="letter">R</span>
          <span className="letter">S</span>
        </h1>
      </div>
      <div className="sponsor-scroll left-to-right">
        {sponsors.concat(sponsors).map((sponsor, index) => (
          <div key={`right-${index}`} className={`sponsor-logo ${sponsor.className || ""}`}>
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
      <div className="sponsor-scroll right-to-left">
        {reversedSponsors.concat(reversedSponsors).map((sponsor, index) => (
          <div key={`left-${index}`} className={`sponsor-logo ${sponsor.className || ""}`}>
            <div className="sponsor-card">
              <img src={sponsor.logo} alt={sponsor.name} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SponsorScroll;