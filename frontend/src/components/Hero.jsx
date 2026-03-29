import { useState } from "react";
import { FaFire, FaChartLine, FaUpload } from "react-icons/fa";
import { trending } from "../data/trending";
import Chatbot from "./Chatbot";

export default function Hero({ activeSection }) {
  const [score, setScore] = useState(0);
  const [uploadedFile, setUploadedFile] = useState(null);

  // 📄 Resume Analyzer Logic
  const handleUpload = (e) => {
    const file = e.target.files[0];
    setUploadedFile(file);

    // dummy AI score (replace later with real AI)
    const randomScore = Math.floor(Math.random() * 100);
    setScore(randomScore);
  };

  return (
    <div className="flex-1 p-6 overflow-y-auto space-y-6">

      {/* 🔥 TOP CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* 📊 PROGRESS CARD */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaChartLine className="text-purple-600 text-xl" />
            <h2 className="font-semibold text-lg">Your Progress</h2>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-purple-500 to-blue-500 h-3 rounded-full"
              style={{ width: "70%" }}
            ></div>
          </div>

          <p className="mt-3 text-sm text-gray-600">
            70% of courses completed
          </p>
        </div>

        {/* 📄 RESUME ANALYZER */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaUpload className="text-blue-600 text-xl" />
            <h2 className="font-semibold text-lg">Resume Analyzer</h2>
          </div>

          <input
            type="file"
            className="mb-3"
            onChange={handleUpload}
          />

          {uploadedFile && (
            <p className="text-sm text-gray-600 mb-2">
              Uploaded: {uploadedFile.name}
            </p>
          )}

          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-3 rounded-full"
              style={{ width: `${score}%` }}
            ></div>
          </div>

          <p className="mt-2 text-sm text-gray-600">
            Resume Strength: {score}%
          </p>
        </div>

        {/* ⚡ QUICK STATS */}
        <div className="bg-white p-6 rounded-2xl shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <FaFire className="text-orange-500 text-xl" />
            <h2 className="font-semibold text-lg">Quick Stats</h2>
          </div>

          <ul className="text-sm text-gray-600 space-y-2">
            <li>🔥 5 Jobs Applied</li>
            <li>📚 3 Courses Ongoing</li>
            <li>🏆 2 Certificates Earned</li>
          </ul>
        </div>

      </div>

      {/* 🔥 TRENDING SECTION */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaFire className="text-red-500" />
          Trending Today
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          {trending.map((item, index) => (
            <div
              key={index}
              className="p-4 border rounded-xl hover:shadow-md transition hover:scale-[1.02] cursor-pointer"
            >
              <h3 className="font-semibold text-purple-600">
                {item.title}
              </h3>
              <p className="text-sm text-gray-600">
                {item.company}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* 📊 COURSE PROGRESS SECTION */}
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <h2 className="text-xl font-semibold mb-4">
          Your Learning Progress
        </h2>

        <div className="space-y-4">

          <div>
            <p className="text-sm mb-1">React Development</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-purple-500 h-2 rounded-full w-[80%]"></div>
            </div>
          </div>

          <div>
            <p className="text-sm mb-1">Data Structures</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full w-[60%]"></div>
            </div>
          </div>

          <div>
            <p className="text-sm mb-1">System Design</p>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-pink-500 h-2 rounded-full w-[40%]"></div>
            </div>
          </div>

        </div>
      </div>

      {/* 🤖 CHATBOT FLOATING */}
      <div className="fixed bottom-6 right-6">
        <Chatbot />
      </div>

    </div>
  );
}