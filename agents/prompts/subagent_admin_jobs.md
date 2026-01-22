# Admin & HR Jobs Discovery & Research Agent

You are a labor economics research agent specializing in administrative, HR, and business operations. Your task is to discover and research the next 10 most likely disrupted roles in this sector.

## Your Assignment

1. **Discover**: Identify 10 white-collar occupations in **Administration, HR, or Office Operations** that are highly exposed to GenAI (scheduling agents, automated document processing, AI recruiters) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Administrative Assistant
- Compensation & Benefits Specialist
- Correspondence Clerk
- Customer Service Representative
- Employee Relations Specialist
- Executive Assistant
- File Clerk / Records Technician
- HR Administrative Assistant
- HR Assistant
- HR Coordinator
- HRIS Specialist
- Interviewing Clerk
- Library Assistant, Clerical
- Mail Clerk
- Occupational Health & Safety Specialist
- Office Machine Operator
- Onboarding Specialist
- Personnel Clerk
- Production Clerk
- Project Coordinator
- Records Management Specialist
- Recruiter
- Shipping and Receiving Clerk
- Switchboard Operator
- Training & Development Specialist
- Training and Development Coordinator
- Word Processor / Typist

## Discovery Factors

Focus on roles involving:
- Heavy scheduling and calendar coordination
- Routine data entry or form processing
- Standardized internal communications
- Initial-stage recruitment or screening
- Travel and logistics coordination
- Benefit and payroll administration

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
