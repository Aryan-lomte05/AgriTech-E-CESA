import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";

import Journey from "./components/Journey";
import Below from "./components/Below";
import GalleryPage from "./components/GalleryPage";
import { SiteHeader, SiteFooter, Chicken } from "./components/SiteChrome";

const Home = () => (
  <>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader />
    <Journey />
    <Below />
    <Chicken />
    <SiteFooter />
  </>
);

const Gallery = () => (
  <>
    <a className="skip" href="#main">Skip to content</a>
    <SiteHeader />
    <GalleryPage />
    <Chicken />
    <SiteFooter />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Analytics />
    </Router>
  );
}
