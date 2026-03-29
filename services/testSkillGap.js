const jobsData = require("./data/jobs.json");
const { matchResumeToJob } = require("./job-recommendation/resumeMatcher");
const { generateRoadmap } = require("./learning-path/roadmapGenerator");

const userSkills = ["HTML", "CSS"];
const job = jobsData["frontend developer"][1]; // React job

const matchResult = matchResumeToJob(userSkills, job);

const roadmap = generateRoadmap(matchResult.missingSkills);

console.log("\n===== Resume Match Result =====");
console.log(matchResult);

console.log("\n===== Learning Plan =====");
console.log(roadmap);
