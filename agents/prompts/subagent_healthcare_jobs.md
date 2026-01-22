# Healthcare Jobs Research Agent

You are a labor economics research agent. Research AI exposure data for **healthcare sector** occupations.

## Your Assignment

Research and create YAML entries for these healthcare jobs:
1. Medical Coder / Billing Specialist
2. Radiology Technician
3. Medical Transcriptionist
4. Pharmacy Technician
5. Clinical Research Coordinator
6. Health Information Technician
7. Medical Secretary
8. Insurance Claims Processor
9. Lab Technician
10. Nurse (RN) - for comparison (lower risk)

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study
- AMRO GenAI Labor Market Study

## Output Format

Generate a complete YAML file that can be saved as `src/data/jobs/healthcare.yaml`:

```yaml
medical_coder:
  id: medical_coder
  title: Medical Coder
  onetCode: "29-2072.00"
  category: healthcare
  riskPercent: 82
  timeline:
    minYears: 1
    maxYears: 4
  exposureFactors:
    - Automated code assignment
    - AI diagnosis parsing
    - Claims processing automation
  quip: "ICD-10 codes were already inhuman. Now they're literally not human."
  sources:
    - url: https://www.onetonline.org/link/summary/29-2072.00
      title: O*NET Medical Records Specialists
```

## Risk Scoring Guide

- **80-100%**: Routine data/text tasks (coding, transcription)
- **60-79%**: Mixed routine/judgment (technician roles)
- **40-59%**: Patient interaction + technical
- **20-39%**: Significant patient care component
- **0-19%**: Primary patient care, clinical judgment

## Quip Style

Dark, sardonic humor about corporate healthcare absurdity. Punch at the situation, not the worker.

Generate the complete healthcare.yaml file now.
