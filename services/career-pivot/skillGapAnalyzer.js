function findSkillGap(userSkills, targetSkills) {
  const normalizedUserSkills = userSkills.map((s) => s.toLowerCase());

  return targetSkills.filter(
    (skill) => !normalizedUserSkills.includes(skill.name.toLowerCase()),
  );
}

module.exports = { findSkillGap };
