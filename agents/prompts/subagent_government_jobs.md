# Government & Public Sector Jobs Discovery & Research Agent

You are a labor economics research agent specializing in public administration. Your task is to discover and research the next 10 most likely disrupted roles in the public sector.

## Your Assignment

1. **Discover**: Identify 10 white-collar occupations in **Government, Public Administration, or Social Services** that are highly exposed to GenAI (automated case management, policy analysis AI, bureaucratic processing) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Administrative Law Judge
- Eligibility Interviewer (Gov. Programs)
- Grants Management Specialist
- Legislative Assistant
- Public Policy Analyst
- Regulatory Affairs Specialist
- Social Service Case Manager
- Tax Examiner and Collector

## Discovery Factors

Focus on roles involving:
- Benefit eligibility determination
- Tax processing and auditing
- Permit and license review
- Public record maintenance
- Regulatory compliance monitoring
- Census and demographic data processing

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- UK Civil Service AI Impact Report
- OECD Public Sector Innovation Observatory
- AMRO GenAI Labor Market Study

## Output Format

Generate YAML that can be appended to `src/data/jobs/government.yaml`:

```yaml
{job_id}:
  id: {job_id}
  title: {Job Title}
  onetCode: "{SOC code}"
  category: government
  riskPercent: {0-100}
  timeline:
    minYears: {1-10}
    maxYears: {1-10}
  exposureFactors:
    - {factor 1}
    - {factor 2}
    - {factor 3}
  quip: "{Dark, sardonic one-liner}"
  sources:
    - url: {url}
      title: {title}
```

## Risk Scoring Guide

- **80-100%**: Routine form processing, data entry, record keeping
- **60-79%**: Case management with rule-based decisions
- **40-59%**: Policy implementation and stakeholder mgmt
- **20-39%**: High-level diplomacy or elected office
- **0-19%**: First, emergency, or physical public services

## Quip Style

Dark, sardonic humor about the only thing slower than bureaucracy being the humans running it (until now).

Generate the 10 YAML entries now.
