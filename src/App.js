import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Domain from "./components/Domain";
import StatsCounter from "./components/StatsCounter";
import Timeline from "./components/Timeline";
import PrizeCards from "./components/PrizeCards";
import Rules from "./components/Rules";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Chicken from "./components/Chicken";
import HarvestEasterEgg from "./components/HarvestEasterEgg";

const App = () => {
  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-neutral-950 overflow-x-hidden">
        {/* Loading Screen */}
        <LoadingScreen />

        {/* Fixed Navbar */}
        <Navbar />

        {/* Main Content */}
        <main className="relative">
          {/* Hero Section */}
          <section id="home">
            <Landing />
          </section>

          {/* About Section */}
          <section id="about">
            <About />
          </section>

          {/* Stats Counter */}
          <section>
            <StatsCounter />
          </section>

          {/* Domains Section */}
          <section id="domains" className="bg-neutral-900">
            <Domain />
          </section>

          {/* Timeline Section */}
          <section id="timeline" className="bg-neutral-950">
            <Timeline />
          </section>

          {/* Prizes Section */}
          <section id="prizes" className="bg-neutral-900">
            <PrizeCards />
          </section>

          {/* Rules Section */}
          <section id="rules" className="bg-neutral-950">
            <Rules />
          </section>

          {/* Sponsors Section */}
          <section id="sponsors" className="bg-neutral-900">
            <Sponsors />
          </section>
        </main>

        {/* Footer */}
        <footer id="footer">
          <Footer />
        </footer>

        {/* Easter Eggs */}
        <Chicken />
        <HarvestEasterEgg />
      </div>
    </ThemeProvider>
  );
};

export default App;
