const jobsData = require("../data/jobs.json");

function recommendJobs(userSkills, targetRole) {
  const jobs = jobsData[targetRole] || [];

  const normalizedUserSkills = userSkills.map((s) => s.toLowerCase());

  return jobs
    .map((job) => {
      const matchedSkills = job.requiredSkills.filter((skill) =>
        normalizedUserSkills.includes(skill.toLowerCase()),
      );

      const matchScore =
        (matchedSkills.length / job.requiredSkills.length) * 100;

      return {
        ...job,
        matchScore: matchScore.toFixed(2),
      };
    })
    .filter((job) => job.matchScore > 30) // filter weak matches
    .sort((a, b) => b.matchScore - a.matchScore);
}

module.exports = { recommendJobs };
