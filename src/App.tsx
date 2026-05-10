import "./index.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

import Hero from "./components/Hero";

import EnergyResearchPage from "./pages/EnergyResearchPage";
import CtrlJumpPage from "./pages/CtrlJumpPage";
import OrderFlowPage from "./pages/OrderFlowPage";

import ProjectsExperienceScroll from "./components/ProjectsExperienceScroll";

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
      <AnimatedRoutes />
    </BrowserRouter>
  );
}

export default App;