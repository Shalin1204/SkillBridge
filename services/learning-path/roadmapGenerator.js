function generateRoadmap(missingSkills) {
  return missingSkills.map((skill) => {
    let resource = "";
    let priority = "Medium";
    let level = "Beginner";
    let estimatedTime = "2-3 weeks";

    switch (skill.toLowerCase()) {
      // 🔹 FRONTEND
      case "html":
        resource = "Learn HTML fundamentals (MDN Docs)";
        break;

      case "css":
        resource = "Learn CSS (Flexbox, Grid, Animations)";
        break;

      case "javascript":
        resource = "Learn JavaScript basics (MDN / YouTube)";
        priority = "High";
        estimatedTime = "3-4 weeks";
        break;

      case "react":
        resource = "Learn React (Official Docs / Projects)";
        priority = "High";
        level = "Intermediate";
        estimatedTime = "4-6 weeks";
        break;

      case "responsive design":
        resource = "Learn Responsive Design (Media Queries, Flexbox)";
        break;

      case "git":
        resource = "Learn Git & GitHub (Version Control)";
        estimatedTime = "1-2 weeks";
        break;

      // 🔹 BACKEND
      case "node.js":
        resource = "Learn Node.js backend development";
        priority = "High";
        level = "Intermediate";
        estimatedTime = "3-5 weeks";
        break;

      case "express":
        resource = "Learn Express.js framework";
        level = "Intermediate";
        break;

      case "mongodb":
        resource = "Learn MongoDB database basics";
        break;

      case "sql":
        resource = "Learn SQL (queries, joins, indexing)";
        priority = "High";
        break;

      case "rest api":
        resource = "Learn REST API design & development";
        priority = "High";
        level = "Intermediate";
        break;

      case "jwt":
        resource = "Learn authentication using JWT";
        level = "Intermediate";
        break;

      // 🔹 FULL STACK (covered above mostly)

      // 🔹 DATA ANALYST
      case "python":
        resource = "Learn Python for data analysis";
        priority = "High";
        estimatedTime = "3-4 weeks";
        break;

      case "excel":
        resource = "Learn Excel (formulas, pivot tables)";
        break;

      case "pandas":
        resource = "Learn Pandas for data manipulation";
        level = "Intermediate";
        break;

      case "data visualization":
        resource = "Learn data visualization (Matplotlib / Power BI)";
        level = "Intermediate";
        break;

      case "statistics":
        resource = "Learn basic statistics (mean, variance, distributions)";
        break;

      // 🔹 MACHINE LEARNING
      case "machine learning":
        resource = "Learn ML concepts (supervised, unsupervised learning)";
        priority = "High";
        level = "Intermediate";
        break;

      case "scikit-learn":
        resource = "Learn Scikit-learn library";
        level = "Intermediate";
        break;

      case "tensorflow":
        resource = "Learn TensorFlow for deep learning";
        level = "Advanced";
        estimatedTime = "5-7 weeks";
        break;

      case "deep learning":
        resource = "Learn neural networks and deep learning";
        level = "Advanced";
        break;

      case "data preprocessing":
        resource = "Learn data cleaning & preprocessing techniques";
        break;

      // 🔹 ANDROID
      case "java":
        resource = "Learn Java programming";
        priority = "High";
        break;

      case "kotlin":
        resource = "Learn Kotlin for Android development";
        priority = "High";
        break;

      case "android sdk":
        resource = "Learn Android SDK and app development";
        level = "Intermediate";
        break;

      case "firebase":
        resource = "Learn Firebase (Auth, Database)";
        break;

      // 🔹 DEVOPS
      case "linux":
        resource = "Learn Linux commands and system basics";
        priority = "High";
        break;

      case "docker":
        resource = "Learn Docker containerization";
        priority = "High";
        level = "Intermediate";
        break;

      case "kubernetes":
        resource = "Learn Kubernetes orchestration";
        level = "Advanced";
        break;

      case "ci/cd":
        resource = "Learn CI/CD pipelines (GitHub Actions)";
        level = "Intermediate";
        break;

      case "aws":
        resource = "Learn AWS cloud services";
        priority = "High";
        level = "Intermediate";
        break;

      case "shell scripting":
        resource = "Learn Bash/Shell scripting";
        break;

      // 🔹 CYBERSECURITY
      case "networking":
        resource = "Learn networking fundamentals";
        priority = "High";
        break;

      case "cybersecurity fundamentals":
        resource = "Learn cybersecurity basics";
        priority = "High";
        break;

      case "ethical hacking":
        resource = "Learn ethical hacking concepts";
        level = "Intermediate";
        break;

      case "cryptography":
        resource = "Learn encryption and cryptography basics";
        break;

      case "siem tools":
        resource = "Learn SIEM tools (Splunk, etc.)";
        level = "Advanced";
        break;

      // 🔹 DEFAULT
      default:
        resource = `Learn ${skill} from online courses`;
    }

    return {
      skill,
      resource,
      priority,
      level,
      estimatedTime,
    };
  });
}

module.exports = { generateRoadmap };
