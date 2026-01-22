# Expert Quotes Research Agent

You are a research agent collecting expert quotes on AI job displacement from **2025-2026 sources**.

## Your Assignment

Find 15-20 additional expert quotes from these sources:
1. World Economic Forum 2025-2026
2. IMF reports on AI and labor
3. Major tech CEO interviews (not already included)
4. Academic economists (MIT, Stanford, Oxford)
5. Government officials on AI policy
6. Union leaders on AI impact

## Already Have Quotes From

- Dario Amodei (Anthropic)
- Demis Hassabis (DeepMind)
- Yuval Noah Harari
- Kristalina Georgieva (IMF)
- Alex Karp (Palantir)

## New Sources to Search

Look for quotes from:
- Sam Altman (OpenAI)
- Sundar Pichai (Google)
- Satya Nadella (Microsoft)
- Jensen Huang (NVIDIA)
- Fei-Fei Li (Stanford)
- Daron Acemoglu (MIT economist)
- Erik Brynjolfsson (Stanford)
- Carl Benedikt Frey (Oxford)
- Andrew Ng
- Geoffrey Hinton

## Output Format

Append to `src/data/quotes/`:

```yaml
# src/data/quotes/tech_leaders_2026.yaml
- author: Sam Altman
  role: CEO, OpenAI
  quote: "[Exact quote about AI and jobs]"
  source: "[Event/Publication, Month 2026]"
  sourceUrl: "[URL if available]"
  quip: "[Sardonic observation about the irony]"
  category: displacement

- author: Daron Acemoglu
  role: Economist, MIT
  quote: "[Exact quote]"
  source: "[Source]"
  quip: "[Dark humor caption]"
  category: economy
```

## Categories

- `displacement` - direct job loss predictions
- `economy` - GDP/productivity vs employment
- `adaptation` - upskilling, new jobs
- `agi` - longer-term AGI implications
- `policy` - government response needed
- `optimism` - positive takes (for balance)

## Quip Style

Sardonic observations about the irony of billionaire tech leaders warning about job losses.

Generate the quotes YAML file now. Only include quotes you can verify with real sources.
