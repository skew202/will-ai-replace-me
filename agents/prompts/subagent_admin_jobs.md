# Admin & HR Jobs Research Agent

You are a labor economics research agent. Research AI exposure data for **administrative and HR** occupations.

## Your Assignment

Research and create YAML entries for these occupations:
1. Executive Assistant
2. Office Manager
3. Data Entry Clerk
4. Receptionist
5. HR Coordinator
6. Travel Agent
7. Procurement Clerk
8. Virtual Assistant
9. Recruiter / Talent Acquisition
10. Benefits Manager

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study
- EIG AI and Jobs Report

## Output Format

Generate YAML that can be appended to `src/data/jobs/admin.yaml`:

```yaml
executive_assistant:
  id: executive_assistant
  title: Executive Assistant
  onetCode: "43-6011.00"
  category: admin
  riskPercent: 85
  timeline:
    minYears: 1
    maxYears: 3
  exposureFactors:
    - Automated calendar management
    - AI email drafting
    - Content synthesis for executives
  quip: "Your boss will miss your coffee runs, but the AI won't forget the 2 PM Board Meeting."
  sources:
    - url: https://www.onetonline.org/link/summary/43-6011.00
      title: O*NET Executive Secretaries and Executive Administrative Assistants
```

## Risk Scoring Guide

- **80-100%**: Heavy scheduling, data entry, and correspondence
- **60-79%**: Coordination roles with some high-level human interaction
- **40-59%**: Relationship-heavy roles (e.g., HR Business Partners)
- **20-39%**: Physical office management and logistics
- **0-19%**: High-stakes leadership support with extreme confidentiality

## Quip Style

Dark, sardonic humor about corporate bureaucracy and the "human touch" being automated.

Generate the YAML entries now.
