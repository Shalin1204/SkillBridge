const { findSkillGap } = require("./skillGapAnalyzer");
const { calculateReadiness } = require("./readinessCalculator");
const roles = require("../data/roleSkills.json");

function analyzeCareerPivot(userSkills, targetRole) {
  const targetSkills = roles[targetRole];

  if (!targetSkills) {
    return {
      error: "Target role not found",
    };
  }

  const missingSkills = findSkillGap(userSkills, targetSkills);
  const readiness = calculateReadiness(userSkills, targetSkills);

  const matchedSkillsList = targetSkills
    .filter((skill) =>
      userSkills.map((s) => s.toLowerCase()).includes(skill.name.toLowerCase()),
    )
    .map((skill) => skill.name);

  let message = "";

  if (readiness < 30) {
    message = "Significant upskilling required to transition into this role.";
  } else if (readiness < 60) {
    message = "You are on the right track but need to improve key skills.";
  } else {
    message = "You are well prepared for this role.";
  }

  return {
    targetRole,
    missingSkills: missingSkills.map((s) => s.name),
    matchedSkillsList,
    readiness: readiness.toFixed(2),
    message,
    totalSkills: targetSkills.length,
    matchedSkills: matchedSkillsList.length,
  };
}

module.exports = { analyzeCareerPivot };
