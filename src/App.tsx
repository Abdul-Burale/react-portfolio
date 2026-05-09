import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import ProjectDetail from "./components/ProjectDetail";

function Home() {
  return (
    <div className="full-background">
      <div className="relative overflow-y-auto max-h-screen">
        <Hero />
        <Projects />
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects/:id" element={<ProjectDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;