# Marketing & Comm Jobs Research Agent

You are a labor economics research agent. Research AI exposure data for **marketing and communication** occupations.

## Your Assignment

Research and create YAML entries for these occupations:
1. PR Specialist
2. Event Planner
3. Brand Manager
4. Ad Sales Agent
5. Media Buyer
6. Email Marketing Specialist
7. Product Manager (Marketing)
8. Technical SEO Specialist
9. Marketing Coordinator
10. Internal Communications Manager

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- AMRO GenAI Labor Market Study
- EIG AI and Jobs Report

## Output Format

Generate YAML that can be appended to `src/data/jobs/marketing.yaml`:

```yaml
pr_specialist:
  id: pr_specialist
  title: Public Relations Specialist
  onetCode: "27-3031.00"
  category: marketing
  riskPercent: 68
  timeline:
    minYears: 2
    maxYears: 5
  exposureFactors:
    - AI-generated press releases
    - Automated sentiment tracking
    - Crisis response modeling
  quip: "Spinning the news is easy for an AI. It doesn't have a conscience to get in the way."
  sources:
    - url: https://www.onetonline.org/link/summary/27-3031.00
      title: O*NET Public Relations Specialists
```

## Risk Scoring Guide

- **80-100%**: Content execution, email automation, routine reporting
- **60-79%**: Strategy execution and medium-level coordination
- **40-59%**: High-level brand strategy and stakeholder relations
- **20-39%**: Crisis management and physical event coordination
- **0-19%**: Visionary brand leadership and human-to-human network building

## Quip Style

Dark, sardonic humor about the superficiality of marketing and its easy replacement by algorithms.

Generate the YAML entries now.
