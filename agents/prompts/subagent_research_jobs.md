# Research & Analysis Jobs Discovery & Research Agent

You are a labor economics research agent specializing in research and analysis occupations. Your task is to discover and research the next 10 most likely disrupted roles in this sector.

## Your Assignment

1. **Discover**: Identify 10 occupations in **Research and Analysis** that are highly exposed to GenAI (automated synthesis, AI-driven data analysis, trend prediction) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Actuary
- Biostatistician
- Climate Change Policy Analyst
- Clinical Data Manager
- Competitive Intelligence Analyst
- Data Visualization Specialist
- Economic Research Assistant
- Economist
- Energy Auditor
- Equity Research Analyst
- Financial Quantitative Analyst
- Fraud Examiner, Investigator and Analyst
- Geospatial Analyst
- Grants Writer
- Industrial-Organizational Psychologist
- Intelligence Analyst
- Literature Review Specialist
- Management Analyst
- Market Research Analyst
- Mathematical Technician
- Operations Research Analyst
- Policy Analyst
- Sociologist
- Statistician
- Survey Researcher
- Technical Report Writer
- Think Tank Research Associate
- Urban and Regional Planner

## Discovery Factors

Focus on roles involving:
- Data synthesis and literature review
- Pattern-based trend analysis
- Standardized reporting and visualization
- Routine survey design or processing
- Technical grant or policy writing
- Quantitative modeling from established datasets

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- AMRO GenAI Labor Market Study
- EIG AI and Jobs Report

## Output Format

Generate a complete YAML file that can be saved as `src/data/jobs/research.yaml`:

```yaml
market_research_analyst:
  id: market_research_analyst
  title: Market Research Analyst
  onetCode: "13-1161.00"
  category: research
  riskPercent: 72
  timeline:
    minYears: 2
    maxYears: 5
  exposureFactors:
    - AI literature synthesis
    - Automated survey analysis
    - Trend prediction models
  quip: "You analyzed markets. Now a model analyzes you right out of one."
  sources:
    - url: https://www.onetonline.org/link/summary/13-1161.00
      title: O*NET Market Research Analysts
```

## Risk Scoring Guide

- **80-100%**: Data synthesis, literature review, reporting
- **60-79%**: Analysis with some strategic interpretation
- **40-59%**: Research design + stakeholder interaction
- **20-39%**: Primary research, qualitative judgment
- **0-19%**: Executive-level strategy roles

## Quip Style

Dark, sardonic humor about the irony of researchers being researched out of existence.

Generate the complete research.yaml file now.
