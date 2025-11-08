import React from "react";
import Navbar from "./components/Navbar";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import About from './components/About'
import Landing from "./components/Landing";
import Timeline from "./components/Timeline";
import PrizeCards from "./components/PrizeCards";
import "./App.css";
import Chicken from "./components/Chicken";
import Domain from "./components/Domain";

const App = () => {
  const timelineEvents = [
    { date: "29 Jan 2025", description: "Round 1 Submission Starts" },
    { date: "01 Mar 2025", description: "Round 1 Submission Ends" },
    { date: "10 Mar 2025", description: "Round 1 Result Declaration" },
    { date: "27 Mar 2025", description: "Hackathon Starts" },
    { date: "28 Mar 2025", description: "Hackathon Ends" },
  ];

  return (
    <>
      <Landing />
      <Navbar />
      <section id="domain">
        <About />
      </section>
      <div className="landing">
        <main className="min-h-screen bg-gray-100">
          <section id="domain">
            <Domain />
          </section>
        </main>
        <section id="timeline">
          <Timeline events={timelineEvents} />
        </section>
        <section id="prizes">
          <PrizeCards />
        </section>
        <section id="rules">
          <Rules />
        </section>
        <section id="sponsors">
          <Sponsors />
        </section>
        <section id="footer">
          <Footer />
        </section>
      </div>
      <Chicken />
    </>
  );
};

export default App;
