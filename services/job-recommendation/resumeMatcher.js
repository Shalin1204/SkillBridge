function matchResumeToJob(userSkills, job) {
  const normalizedUserSkills = userSkills.map((s) => s.toLowerCase());

  const matchedSkills = job.requiredSkills.filter((skill) =>
    normalizedUserSkills.includes(skill.toLowerCase()),
  );

  const missingSkills = job.requiredSkills.filter(
    (skill) => !normalizedUserSkills.includes(skill.toLowerCase()),
  );

  const matchScore = (matchedSkills.length / job.requiredSkills.length) * 100;

  let message = "";

  if (matchScore < 30) {
    message = "Low match. Significant skill improvement required.";
  } else if (matchScore < 70) {
    message = "Moderate match. You can improve to increase chances.";
  } else {
    message = "Strong match. You are a good fit for this role.";
  }

  return {
    jobTitle: job.title,
    company: job.company,
    matchScore: matchScore.toFixed(2),
    matchedSkills,
    missingSkills,
    message,
  };
}

module.exports = { matchResumeToJob };
