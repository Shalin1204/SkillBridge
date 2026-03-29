import { useState } from "react";
import { FaUpload } from "react-icons/fa";

export default function ResumeAnalyzer() {
  const [file, setFile] = useState(null);
  const [strength, setStrength] = useState(0);
  const [suggestions, setSuggestions] = useState([]);

  const handleUpload = (e) => {
    const uploadedFile = e.target.files[0];
    if (!uploadedFile) return;

    setFile(uploadedFile);

    // Dummy AI analysis (replace with actual AI integration later)
    const dummyStrength = Math.floor(Math.random() * 50 + 50); // 50-100%
    setStrength(dummyStrength);

    const dummySuggestions = [
      "Include more keywords related to your target job.",
      "Highlight relevant projects and internships.",
      "Keep your resume concise and structured.",
      "Add measurable achievements where possible.",
    ];
    setSuggestions(dummySuggestions);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      
      {/* Left Panel: Resume Upload */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4">Upload Your Resume</h2>
        <label className="flex items-center gap-3 cursor-pointer p-3 bg-gray-100 rounded-lg hover:bg-gray-200 transition">
          <FaUpload className="text-purple-500" />
          <span>{file ? file.name : "Choose a resume file"}</span>
          <input
            type="file"
            className="hidden"
            onChange={handleUpload}
            accept=".pdf,.doc,.docx"
          />
        </label>
        {file && (
          <div className="mt-4 w-full bg-gray-200 rounded-full h-4">
            <div
              className="bg-purple-500 h-4 rounded-full text-white text-xs text-center"
              style={{ width: `${strength}%` }}
            >
              {strength}%
            </div>
          </div>
        )}
      </div>

      {/* Right Panel: AI Analysis */}
      <div className="flex-1 bg-white rounded-xl shadow-md p-6 flex flex-col gap-4">
        <h2 className="text-xl font-semibold mb-4">Resume Analysis</h2>
        {file ? (
          <>
            <p className="mb-2">Resume Strength: <span className="font-bold">{strength}%</span></p>
            <h3 className="font-semibold mt-4 mb-2">Suggestions:</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {suggestions.map((s, index) => (
                <li key={index}>{s}</li>
              ))}
            </ul>
          </>
        ) : (
          <p className="text-gray-500">Upload your resume to get AI analysis and suggestions.</p>
        )}
      </div>

    </div>
  );
}