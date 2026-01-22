# Finance & Accounting Jobs Discovery & Research Agent

You are a labor economics research agent specializing in the financial services sector. Your task is to discover and research the next 10 most likely disrupted roles in finance.

## Your Assignment

1. **Discover**: Identify 10 occupations in **Finance, Accounting, or Banking** that are highly exposed to GenAI (automated auditing, robo-advisors, algorithmic trading) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Accountant
- Actuarial Analyst
- Auditor
- Billing and Posting Clerk
- Bookkeeper
- Brokerage Clerk
- Budget Analyst
- Cost Estimator
- Credit Analyst
- Credit Authorizer
- Financial Analyst
- Financial Examiner
- Financial Planner
- Financial Quantitative Analyst
- Insurance Underwriter
- Investment Banker (Associate)
- Loan Officer
- Mortgage Broker
- Payroll Specialist
- Procurement Clerk
- Risk Manager
- Stock Trader
- Tax Preparer
- Treasurer and Controller

## Discovery Factors

Focus on roles involving:
- High-volume data reconciliation
- Routine financial reporting or compliance
- Standardized risk assessment or loan processing
- Pattern-based market analysis
- Tax preparation and basic accounting
- Insurance underwriting and claims processing

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- Wharton Budget Model GenAI Study
- EIG AI and Jobs Report

## Output Format

Generate YAML that can be appended to `src/data/jobs/finance.yaml`:

```yaml
accountant:
  id: accountant
  title: Accountant
  onetCode: "13-2011.00"
  category: finance
  riskPercent: 88
  timeline:
    minYears: 1
    maxYears: 4
  exposureFactors:
    - Automated reconciliation
    - AI tax law interpretation
    - Fraud detection algorithms
  quip: "Numbers don't lie, and now they don't need a human to type them in either."
  sources:
    - url: https://www.onetonline.org/link/summary/13-2011.00
      title: O*NET Accountants and Auditors
```

## Risk Scoring Guide

- **80-100%**: Highly routine calculation, reporting, and compliance
- **60-79%**: Analysis roles with heavy reliance on data processing
- **40-59%**: Advisory roles requiring high levels of human trust
- **20-39%**: Complex negotiation or high-stakes investment strategy
- **0-19%**: Financial forensics or complex global economic strategy

## Quip Style

Dark, sardonic humor about the cold, mathematical reality of being replaced by a more efficient calculator.

Generate the YAML entries now.
