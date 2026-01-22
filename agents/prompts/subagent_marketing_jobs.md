# Marketing & Comm Jobs Discovery & Research Agent

You are a labor economics research agent specializing in marketing, communications, and brand strategy. Your task is to discover and research the next 10 most likely disrupted roles in this sector.

## Your Assignment

1. **Discover**: Identify 10 occupations in **Marketing, Advertising, or PR** that are highly exposed to GenAI (automated copy, sentiment analysis, AI-driven media buying) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Account Executive (Agency)
- Advertising Sales Agent
- Affiliate Marketing Manager
- Brand Manager
- Brand Strategist
- Content Marketer
- Copywriter
- Creative Strategist
- Customer Insights Manager
- Direct Mail Specialist
- Email Marketing Specialist
- Growth Marketer
- Internal Communications Manager
- Market Research Interviewer
- Marketing Analyst
- Marketing Coordinator
- Media Buyer
- Media Relations Specialist
- Product Manager (Marketing)
- Public Relations Specialist
- SEO Specialist
- Social Media Manager
- Technical SEO Specialist

## Discovery Factors

Focus on roles involving:
- High-volume content execution or formatting
- Routine performance reporting or analytics
- Standardized campaign coordination
- Rules-based media buying or ad placement
- Automated email or CRM management
- Foundational SEO or social media management

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
