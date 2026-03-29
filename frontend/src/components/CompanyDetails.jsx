export default function CompanyDetails({ selectedCompany }) {
  if (!selectedCompany) {
    return (
      <div className="flex-1 flex items-center justify-center text-gray-500">
        Please select a company from the search bar
      </div>
    );
  }

  const {
    name,
    image,
    description,
    roles,
    requirements,
    location,
    website,
    eligibility,
  } = selectedCompany;

  return (
    <div className="flex flex-col md:flex-row gap-6 w-full h-full">

      {/* ---------------- LEFT PANEL: COMPANY INFO ---------------- */}
      <div className="md:w-2/3 bg-white p-8 rounded-2xl shadow-lg flex flex-col gap-6">
        {/* Company Logo & Name */}
        <div className="flex items-center gap-6">
          {image && (
            <img
              src={image}
              alt={name}
              className="w-32 h-32 object-contain rounded-lg border"
            />
          )}
          <div>
            <h1 className="text-3xl font-bold">{name}</h1>
            {website && (
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Visit Website
              </a>
            )}
            {location && <p className="text-gray-600 mt-1">{location}</p>}
          </div>
        </div>

        {/* About Company */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Company</h2>
          <p className="text-gray-700">{description}</p>
        </div>

        {/* Available Roles */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Available Roles</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(roles || []).map((role, idx) => <li key={idx}>{role}</li>)}
          </ul>
        </div>

        {/* Eligibility & Requirements */}
        <div>
          <h2 className="text-2xl font-semibold mb-2">Eligibility Criteria</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(eligibility || []).map((el, idx) => <li key={idx}>{el}</li>)}
          </ul>

          <h2 className="text-2xl font-semibold mt-4 mb-2">Required Skills</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-1">
            {(requirements || []).map((req, idx) => <li key={idx}>{req}</li>)}
          </ul>
        </div>
      </div>

      {/* ---------------- RIGHT PANEL: RESUME MATCH & AI ---------------- */}
      <div className="md:w-1/3 bg-white p-6 rounded-2xl shadow-lg flex flex-col gap-6">
        {/* Match Resume Button */}
        <button className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition">
          Match Your Resume
        </button>

        {/* Chance of Selection */}
        <div className="bg-gray-50 p-4 rounded-lg flex flex-col items-center justify-center gap-2">
          <h3 className="font-semibold text-lg">Matching Score</h3>
          <div className="w-full bg-gray-200 h-4 rounded-full overflow-hidden">
            <div
              className="h-4 bg-gradient-to-r from-purple-500 to-blue-500"
              style={{ width: "65%" }} // example %
            ></div>
          </div>
          <p className="text-sm text-gray-600 mt-1">65% match with your resume</p>
        </div>

        {/* Skill Gaps */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">Skill Gaps</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Advanced React</li>
            <li>DSA - Medium & Hard Problems</li>
            <li>Node.js & Express Knowledge</li>
          </ul>
        </div>

        {/* AI Suggestions */}
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold text-lg mb-2">AI Suggestions</h3>
          <ul className="list-disc list-inside text-gray-700">
            <li>Complete React projects for hands-on experience (2 weeks)</li>
            <li>Practice 15 DSA medium/hard problems per week</li>
            <li>Build a Node.js REST API project (1 week)</li>
          </ul>
        </div>
      </div>

    </div>
  );
}