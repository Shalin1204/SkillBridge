import { useState, useEffect } from "react";
import { FaSearch, FaBell, FaUserCircle } from "react-icons/fa";
import { companies } from "../data/companies";

export default function Navbar({ setActiveSection, setSelectedCompany }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);

  // 🔍 Search Logic
  useEffect(() => {
    if (query.trim() === "") {
      setResults([]);
      return;
    }

    const filtered = companies.filter((company) =>
      company.name.toLowerCase().includes(query.toLowerCase())
    );

    setResults(filtered);
  }, [query]);

  return (
    <div className="w-full bg-white shadow-md px-6 py-4 flex items-center justify-between relative">

      {/* 🔵 LOGO / TITLE */}
      <h1 className="text-2xl font-bold text-purple-600">
        SkillBridge
      </h1>

      {/* 🔍 SEARCH BAR */}
      <div className="relative w-1/2">
        <div className="flex items-center bg-gray-100 rounded-full px-4 py-2 shadow-sm">
          <FaSearch className="text-gray-500 mr-2" />
          <input
            type="text"
            placeholder="Search companies (Google, Microsoft...)"
            className="bg-transparent outline-none w-full"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>

        {/* 🔽 DROPDOWN RESULTS */}
        {results.length > 0 && (
          <div className="absolute top-12 left-0 w-full bg-white shadow-lg rounded-xl z-50 max-h-60 overflow-y-auto">
            {results.map((company, index) => (
              <div
  key={index}
  onClick={() => {
    setSelectedCompany(company);   // set the selected company
    setQuery(company.name);
    setResults([]);
    setActiveSection("company");    // switch to company details view
  }}
  className="px-4 py-2 hover:bg-purple-100 cursor-pointer transition"
>
  {company.name}
</div>
            ))}
          </div>
        )}
      </div>

      {/* 🔔 RIGHT SIDE */}
      <div className="flex items-center gap-6 text-gray-600">
        <FaBell className="text-xl cursor-pointer hover:text-purple-600" />
        <FaUserCircle className="text-2xl cursor-pointer hover:text-purple-600" />
      </div>

    </div>
  );
}