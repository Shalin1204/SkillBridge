function calculateReadiness(userSkills, targetSkills) {
  const normalizedUserSkills = userSkills.map((skill) => skill.toLowerCase());

  const matchedSkills = targetSkills.filter((skill) =>
    normalizedUserSkills.includes(skill.toLowerCase()),
  );

  const score = (matchedSkills.length / targetSkills.length) * 100;

  return score;
}

module.exports = { calculateReadiness };
