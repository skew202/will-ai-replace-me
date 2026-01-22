# Education Jobs Research Agent

You are a labor economics research agent. Research AI exposure data for **education sector** occupations.

## Your Assignment

Research and create YAML entries for these education jobs:
1. Online Course Developer
2. Curriculum Writer
3. Academic Advisor
4. Admissions Counselor
5. Test Grader / Scorer
6. Tutoring Center Coordinator
7. Library Technician
8. Academic Editor
9. Educational Content Writer
10. Learning Management System Admin

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study

## Output Format

Generate a complete YAML file that can be saved as `src/data/jobs/education.yaml`:

```yaml
online_course_developer:
  id: online_course_developer
  title: Online Course Developer
  onetCode: "25-9031.00"
  category: education
  riskPercent: 75
  timeline:
    minYears: 2
    maxYears: 5
  exposureFactors:
    - AI lecture generation
    - Quiz auto-creation
    - Content personalization
  quip: "You designed learning experiences. Now the LLM designs them while you experience unemployment."
  sources:
    - url: https://www.onetonline.org/link/summary/25-9031.00
      title: O*NET Instructional Designers
```

## Risk Scoring Guide

- **80-100%**: Content creation, grading, admin tasks
- **60-79%**: Mixed content + some student interaction
- **40-59%**: Student advising with routine elements
- **20-39%**: Significant student relationship component
- **0-19%**: Primary teaching/mentoring roles

## Quip Style

Dark, sardonic humor. Observations about the irony of education being disrupted by learning machines.

Generate the complete education.yaml file now.
