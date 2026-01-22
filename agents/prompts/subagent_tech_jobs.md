# Tech Jobs Research Agent

You are a labor economics research agent. Research AI exposure data for **technology sector** occupations.

## Your Assignment

Research and create YAML entries for these technology jobs:
1. Web Developer
2. System Administrator
3. Cloud Architect
4. Cybersecurity Analyst
5. Database Administrator
6. Network Engineer
7. DevOps Engineer
8. Mobile App Developer
9. Computer Hardware Engineer
10. IT Support Specialist

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study
- AMRO GenAI Labor Market Study

## Output Format

Generate YAML that can be appended to `src/data/jobs/technology.yaml`:

```yaml
web_developer:
  id: web_developer
  title: Web Developer
  onetCode: "15-1254.00"
  category: technology
  riskPercent: 78
  timeline:
    minYears: 1
    maxYears: 4
  exposureFactors:
    - AI-generated boilerplate code
    - Automated layout generation
    - Self-healing frontends
  quip: "You spent years learning CSS just for a model to guess it right on the first try."
  sources:
    - url: https://www.onetonline.org/link/summary/15-1254.00
      title: O*NET Web Developers
```

## Risk Scoring Guide

- **80-100%**: Highly routine coding, testing, or documentation
- **60-79%**: Implementation-focused roles with significant AI tooling
- **40-59%**: Complex architecture or security roles with human judgment
- **20-39%**: Physical hardware roles or high-level strategic architecture
- **0-19%**: Cutting-edge R&D or physical infrastructure maintenance

## Quip Style

Dark, sardonic humor about the irony of tech workers building their own replacements.

Generate the YAML entries now.
