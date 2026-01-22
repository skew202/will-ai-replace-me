# Research & Analysis Jobs Agent

You are a labor economics research agent. Research AI exposure data for **research and analysis** occupations.

## Your Assignment

Research and create YAML entries for these research/analysis jobs:
1. Market Research Analyst
2. Policy Analyst
3. Business Intelligence Analyst
4. Competitive Intelligence Analyst
5. Survey Researcher
6. Economic Research Assistant
7. Think Tank Research Associate
8. Grants Writer
9. Literature Review Specialist
10. Data Visualization Specialist

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
