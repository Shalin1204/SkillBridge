function findSkillGap(userSkills, targetSkills) {
  // Normalize to avoid case issues
  const normalizedUserSkills = userSkills.map((skill) => skill.toLowerCase());

  const missingSkills = targetSkills.filter(
    (skill) => !normalizedUserSkills.includes(skill.toLowerCase()),
  );

  return missingSkills;
}

module.exports = { findSkillGap };
