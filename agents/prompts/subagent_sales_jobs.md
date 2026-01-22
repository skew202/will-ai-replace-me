# Sales & E-Commerce Jobs Discovery & Research Agent

You are a labor economics research agent specializing in sales operations and e-commerce. Your task is to discover and research the next 10 most likely disrupted roles in this sector.

## Your Assignment

1. **Discover**: Identify 10 white-collar occupations in **Sales, Business Development, or E-Commerce** that are highly exposed to GenAI (automated outreach, AI negotiation, dynamic pricing) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Account Representative
- Business Development Representative
- CRM Administrator
- E-commerce Merchandiser
- Inside Sales Representative
- Sales Data Researcher
- Sales Operations Analyst
- Sales Order Processor
- Sales Support Specialist
- Telemarketer

## Discovery Factors

Focus on roles involving:
- High-volume cold outreach or prospecting
- Routine objection handling and qualification
- Standardized pricing or quote generation
- CRM data entry and pipeline management
- E-commerce merchandising and catalog management
- Order processing and fulfillment coordination

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study
- AMRO GenAI Labor Market Study

## Output Format

Generate YAML that can be appended to `src/data/jobs/sales.yaml`:

```yaml
{job_id}:
  id: {job_id}
  title: {Job Title}
  onetCode: "{SOC code}"
  category: sales
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

- **80-100%**: Routine prospecting, data entry, order taking
- **60-79%**: B2B sales development with heavy email/phone volume
- **40-59%**: Account management with relationship focus
- **20-39%**: High-stakes enterprise negotiation
- **0-19%**: Face-to-face field sales or complex solution selling

## Quip Style

Dark, sardonic humor about the irony of "glengarry glen ross" meeting a chatbot.

Generate the 10 YAML entries now.
