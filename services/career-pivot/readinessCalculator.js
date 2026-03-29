function calculateReadiness(userSkills, targetSkills) {
  const normalizedUserSkills = userSkills.map((s) => s.toLowerCase());

  let matchedWeight = 0;
  let totalWeight = 0;

  targetSkills.forEach((skill) => {
    totalWeight += skill.weight;

    if (normalizedUserSkills.includes(skill.name.toLowerCase())) {
      matchedWeight += skill.weight;
    }
  });

  return (matchedWeight / totalWeight) * 100;
}

module.exports = { calculateReadiness };
