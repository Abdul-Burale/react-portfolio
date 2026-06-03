import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "./pages/HeroPage";

import EnergyResearchPage from "./pages/EnergyResearchPage";
import CtrlJumpPage from "./pages/CtrlJumpPage";
import OrderFlowPage from "./pages/OrderFlowPage";

import ScrollToTop from "./components/ScrollToTop";
import ProjectsExperienceScroll from "./components/ProjectsExperienceScroll";
import { initGoogleAnalytics, trackPageView } from "./analytics";
import { useEffect } from "react";

function Home() {
  return (
    <div className="full-background">
      <div className="relative">
        <Hero />
        <ProjectsExperienceScroll />
      </div>
    </div>
  );
}

function AnimatedRoutes() {
  const location = useLocation();

  useEffect(() => {
    initGoogleAnalytics();
    trackPageView(`${location.pathname}${location.search}`);
  }, [location.pathname, location.search]);

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/projects/energy-research" element={<EnergyResearchPage />} />
        <Route path="/projects/orderflow" element={<OrderFlowPage />} />
        <Route path="/projects/ctrl-jump" element={<CtrlJumpPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;
