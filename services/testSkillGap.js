const { findSkillGap } = require("./career-pivot/skillGapAnalyzer");
const roles = require("./data/roleSkills.json");

const userSkills = ["HTML", "CSS"];
const targetRole = "frontend developer";

const targetSkills = roles[targetRole];

const result = findSkillGap(userSkills, targetSkills);

console.log("Missing Skills:", result);
