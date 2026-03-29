import { FaFire, FaChartLine, FaUpload } from "react-icons/fa";
import { trending } from "../data/trending";
import Chatbot from "./Chatbot";
import { companies } from "../data/companies";

export default function Hero({ activeSection, setActiveSection }) { // <-- receive setter
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

                    <p className="mt-3 text-sm text-gray-600">70% of courses completed</p>
                </div>

                {/* 📄 RESUME ANALYZER CARD */}
                <div className="bg-white p-6 rounded-2xl shadow-lg">
                    <div className="flex items-center gap-3 mb-4">
                        <FaUpload className="text-blue-600 text-xl" />
                        <h2 className="font-semibold text-lg">Resume Analyzer</h2>
                    </div>

                    {/* ✅ Button to go to Resume Analyzer page */}
                    <button
                        onClick={() => setActiveSection("resume")} // <-- this switches page
                        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                    >
                        Upload Resume
                    </button>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {companies.map((company, index) => (
                    <div
                        key={index}
                        className="bg-gray-50 rounded-xl overflow-hidden shadow hover:shadow-lg transition transform hover:scale-105 cursor-pointer"
                    >
                        <img
                            src={company.src}
                            alt={company.name}
                            className="w-full h-32 object-cover"
                        />

                        <div className="p-4">
                            <h3 className="font-semibold text-purple-600 mb-1">{company.vacancy}</h3>
                            <p className="text-sm text-gray-600 mb-1">{company.name}</p>
                            <p className="text-xs text-gray-500 mb-2">{company.about}</p>
                            <div className="flex flex-wrap gap-2 mt-1">
                                {company.skills.map((skill, idx) => (
                                    <span
                                        key={idx}
                                        className="bg-purple-100 text-purple-700 px-2 py-1 rounded-full text-xs"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* 🤖 CHATBOT FLOATING */}
            <div className="fixed bottom-6 right-6">
                <Chatbot />
            </div>

        </div>
    );
}