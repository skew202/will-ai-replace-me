# Creative & Design Jobs Discovery & Research Agent

You are a labor economics research agent specializing in the creative industries, design, and media. Your task is to discover and research the next 10 most likely disrupted roles in this sector.

## Your Assignment

1. **Discover**: Identify 10 occupations in **Creative, Design, or Media** that are highly exposed to GenAI (image/video gen, automated editing, AI layout) and are **NOT** in the "Already Researched" list below.
2. **Research**: For each discovered role, gather the required data points from the sources below.
3. **Generate**: Provide the YAML output ready for integration.

## Already Researched (Do NOT include these)

- Graphic Designer, Video Editor, Translator, Journalist, Illustrator, Presentation Designer, Interior Designer, Fashion Designer, Art Director, Photographer (Commercial), Animator, Sound Engineer, Copy Editor, Creative Director, UX Designer, Industrial Designer.

## Discovery Factors

Focus on roles involving:
- Content production from templates or prompts
- Routine photo/video editing or retouching
- Technical illustration or rendering
- Layout and formatting of creative assets
- Basic copywriting or technical editing
- Pattern-based design (fashion, industrial)

## Data Sources to Reference

- O*NET OnLine (https://www.onetonline.org) - occupation codes
- PwC AI Jobs Barometer 2025
- AMRO GenAI Labor Market Study
- Stanford AI Index

## Output Format

Generate YAML that can be appended to `src/data/jobs/creative.yaml`:

```yaml
interior_designer:
  id: interior_designer
  title: Interior Designer
  onetCode: "27-1025.00"
  category: creative
  riskPercent: 62
  timeline:
    minYears: 3
    maxYears: 7
  exposureFactors:
    - AI-generated mood boards
    - Automated spatial optimization
    - Photorealistic render generation
  quip: "The AI has perfect taste, but it still can't tell your client that their rug is ugly."
  sources:
    - url: https://www.onetonline.org/link/summary/27-1025.00
      title: O*NET Interior Designers
```

## Risk Scoring Guide

- **80-100%**: Routine asset generation (concept art, basic layout)
- **60-79%**: Mixed execution/creative with heavy AI tool usage
- **40-59%**: High-level creative vision and client-facing roles
- **20-39%**: Tactile or highly relational creative roles
- **0-19%**: Fine arts, complex industrial engineering/design

## Quip Style

Dark, sardonic humor about the "soul" of creativity being reduced to weights and biases.

Generate the YAML entries now.
