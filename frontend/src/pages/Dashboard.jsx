import { useState } from "react";
import ResumeAnalyzer from "../components/ResumeAnalyzer";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";

export default function Dashboard() {
  const [activeSection, setActiveSection] = useState("profile");

  return (
    <div className="flex h-screen bg-gradient-to-br from-white via-purple-50 to-blue-50">

      {/* 🔹 SIDEBAR */}
      <Sidebar active={activeSection} setActive={setActiveSection} />

      {/* 🔹 MAIN AREA */}
      <div className="flex-1 flex flex-col overflow-hidden">

        {/* 🔹 NAVBAR */}
        <Navbar />

        {/* 🔹 MAIN CONTENT */}
        <div className="flex-1 overflow-auto p-6">
          {activeSection === "resume" && <ResumeAnalyzer />}
          {activeSection !== "resume" && <Hero activeSection={activeSection} />}
        </div>

      </div>
    </div>
  );
}