
import React from "react";
import { ThemeProvider } from "./hooks/useTheme";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';

// Components
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import About from "./components/About";
import Domain from "./components/Domain";
import StatsCounter from "./components/StatsCounter";
import Timeline from "./components/Timeline";
import PrizeCards from "./components/PrizeCards";
import Rules from "./components/Rules";
// import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import Chicken from "./components/Chicken";
import HarvestEasterEgg from "./components/HarvestEasterEgg";
import Gallery from "./components/Gallery";

import ProblemStatements from "./components/ProblemStatements";   // ← NEW IMPORT

// Home Page Component
const HomePage = () => (
  <>
    <LoadingScreen />
    <Navbar />

    <main className="relative">
      <section id="home">
        <Landing />
      </section>

      <section id="about">
        <About />
      </section>

      <section>
        <StatsCounter />
      </section>

      <section id="domains" className="bg-neutral-900">
        <Domain />
      </section>

      <section id="timeline" className="bg-neutral-950">
        <Timeline />
      </section>

      <section id="prizes" className="bg-neutral-900">
        <PrizeCards />
      </section>

      <section id="rules" className="bg-neutral-950">
        <Rules />
      </section>

      {/* <section id="sponsors" className="bg-neutral-900">
        <Sponsors />
      </section> */}
    </main>

    <footer id="footer">
      <Footer />
    </footer>

    <Chicken />
    <HarvestEasterEgg />
  </>
);

// Gallery Page Component
const GalleryPage = () => (
  <>

    <Navbar />
    <Gallery />
    <Footer />
  </>
);

// Main App
const App = () => {
  return (
    <ThemeProvider>
      <Router>
        <div className="relative min-h-screen bg-neutral-950 overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/gallery" element={<GalleryPage />} />

            {/*NEW ROUTE */}
            <Route path="/problem-statements" element={
              <>
                <Navbar />
                <ProblemStatements />
                <Footer />
              </>
            } />

          </Routes>
          <Analytics />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;
