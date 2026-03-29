# Career Pivot & Job Matching Module

## 📌 Overview

The Career Pivot & Job Matching module is a core component of SkillBridge that enables users to analyze their current skills, evaluate readiness for a target role, and match their profile against real job opportunities.

The system not only identifies skill gaps but also provides **job recommendations and resume-job matching with actionable learning paths**, making it a complete career guidance solution.

---

## 🚀 Key Features

### 1. Skill Gap Detection

Identifies missing skills required for a selected role by comparing user skills with a structured, industry-relevant dataset.

---

### 2. Weighted Readiness Score

The system uses a **weighted skill evaluation approach**, where each skill contributes differently based on importance.

#### 📊 Formula:

```
Readiness (%) = (Matched Skill Weight / Total Skill Weight) × 100
```

This ensures critical skills (e.g., React, JavaScript) have a higher impact than foundational skills.

---

### 3. Difficulty Classification

Based on readiness score:

- **Easy** → ≥ 60%
- **Medium** → 30% – 59%
- **Hard** → < 30%

---

### 4. Job Match Score

Provides a match percentage indicating how closely a user’s profile aligns with a role or job.

---

### 5. Matched & Missing Skills Insight

Returns:

- ✅ Matched skills
- ❌ Missing skills

This gives a clear comparison between user capabilities and job/role requirements.

---

### 6. Personalized Learning Roadmap

Generates a structured roadmap for missing skills including:

- 📚 Resource suggestions
- 🔴 Priority (High / Medium)
- 📈 Level (Beginner / Intermediate / Advanced)
- ⏱ Estimated learning time

---

### 7. Job Recommendation System

Suggests jobs based on user skills and target role.

Each job includes:

- Title
- Company
- Location
- Salary
- Match score (%)

Jobs are ranked based on skill compatibility.

---

### 8. Resume-to-Job Matching (“Match My Resume”)

Allows users to match their profile with a specific job.

#### Output Includes:

- Match score (%)
- Matched skills
- Missing skills
- Personalized message
- Learning roadmap for improvement

---

## 🧠 Architecture

```
Frontend → Backend API → Services Layer → Response → Frontend UI
```

### Services Layer Components:

- `skillGapAnalyzer.js` → Identifies missing skills
- `readinessCalculator.js` → Computes weighted readiness
- `pivotService.js` → Main career analysis logic
- `roadmapGenerator.js` → Generates learning roadmap
- `jobRecommender.js` → Suggests relevant jobs
- `resumeMatcher.js` → Matches resume with specific jobs

---

## 📥 Input Formats

### Career Analysis

```json
{
  "userSkills": ["HTML", "CSS"],
  "targetRole": "frontend developer"
}
```

### Resume-Job Matching

```json
{
  "userSkills": ["HTML", "CSS"],
  "job": {
    "title": "React Developer",
    "company": "InnovateX",
    "requiredSkills": ["React", "JavaScript", "Git"]
  }
}
```

---

## 📤 Output Format

```json
{
  "targetRole": "frontend developer",
  "missingSkills": ["JavaScript", "React"],
  "matchedSkillsList": ["HTML", "CSS"],
  "readiness": "16.67",
  "difficulty": "Hard",
  "jobMatchScore": "16.67",
  "roadmap": [
    {
      "skill": "React",
      "resource": "Learn React...",
      "priority": "High",
      "level": "Intermediate",
      "estimatedTime": "4-6 weeks"
    }
  ],
  "jobs": [
    {
      "title": "Frontend Developer Intern",
      "company": "TechCorp",
      "matchScore": "66.67"
    }
  ]
}
```

---

## ⚙️ Technologies Used

- JavaScript (Node.js)
- Modular service-based architecture
- JSON-based datasets for roles and jobs

---

## 🎯 Impact

This module transforms career guidance into a **data-driven and actionable system** by:

- Evaluating user readiness using weighted analysis
- Identifying critical skill gaps
- Recommending relevant job opportunities
- Providing structured and prioritized learning paths
- Enabling resume-to-job matching for targeted applications

---

## 🏆 Highlights

- Weighted skill-based evaluation
- End-to-end career analysis pipeline
- Job recommendation and matching system
- Actionable learning roadmap
- Scalable and modular architecture

---
