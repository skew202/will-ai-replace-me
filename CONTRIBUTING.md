# Contributing to will-ai-replace.me

Thank you for your interest in contributing! This project accepts community contributions for job data, country data, expert quotes, and dark humor quips.

## Data Contribution Process

### 1. Fork and Clone

```bash
git clone https://github.com/YOUR_USERNAME/will-ai-replace-me.git
cd will-ai-replace-me
pnpm install
```

### 2. Choose What to Contribute

| Data Type | Location | Agent Prompt |
|-----------|----------|--------------|
| Jobs | `src/data/jobs/*.yaml` | `agents/prompts/job_research.md` |
| Countries | `src/data/locations/countries.yaml` | `agents/prompts/location_research.md` |
| Quotes | `src/data/quotes/*.yaml` | `agents/prompts/quote_research.md` |
| Quips | `src/data/quips/*.yaml` | `agents/prompts/quip_generation.md` |

### 3. Use an AI Agent to Research

Copy the relevant prompt from `agents/prompts/` into your preferred AI assistant (Claude, Gemini, GPT-4, etc.) and use it to generate properly formatted data.

### 4. Add Your Data

Add the generated YAML to the appropriate file, ensuring it matches our schema.

### 5. Validate

```bash
pnpm build  # Validates YAML parsing and TypeScript types
```

### 6. Submit a PR

- Use a conventional commit message (e.g., `feat(data): add accountant job data`)
- Include sources in your YAML
- The CI will validate your data automatically

## YAML Schema Requirements

### Jobs

```yaml
job_id:
  id: job_id
  title: Job Title
  onetCode: "SOC-CODE"  # From O*NET
  category: technology  # technology|finance|legal|marketing|admin|creative|research|healthcare|education|other
  riskPercent: 50  # 0-100
  timeline:
    minYears: 2
    maxYears: 5
  exposureFactors:
    - Factor 1
    - Factor 2
  quip: "A dark, witty one-liner"
  sources:
    - url: https://source.url
      title: Source Title
```

### Countries

```yaml
ISO_CODE:
  code: ISO_CODE  # ISO 3166-1 alpha-2
  name: Country Name
  tier: 1  # 1-4 (1=fastest adoption)
  modifierYears: -1  # -2 to +2
  label: Fast Lane  # "Fast Lane"|"Early Adopter"|"Standard"|"Slow Burn"
  adoptionIndex: 0.85  # 0-1
```

## Tone Guidelines

Our dark humor style:
- Dry and observational
- Merciless about corporate absurdity
- Intellectually sharp
- Punches at the situation, not the worker

## Questions?

Open an issue if you're unsure about anything!
