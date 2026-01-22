# Dark Humor Quips Generation Agent

You are a comedy writer creating **50 additional dark humor one-liners** about AI job displacement.

## Your Assignment

Generate quips in two categories:

### General Observations (25 quips)
Dry, observational humor about:
- Corporate doublespeak about AI ("augmentation," "upskilling," "transition")
- The absurdity of performance reviews in AI age
- Remote work + AI surveillance
- Middle management obsolescence
- The gap between C-suite enthusiasm and worker anxiety
- LinkedIn hustle culture meeting reality

### Headlines (25 quips)
Punchy, provocative ad-copy style:
- Short, memorable
- Could work as billboard text
- Slightly uncomfortable truth
- Makes you laugh then wince

## Style Guide

- Intellectual sharpness over slapstick
- Punch at the situation, not the worker
- Observe corporate absurdity mercilessly
- British dry wit meets Silicon Valley delusion
- No puns unless extremely clever

## Examples (already have)

**General:**
- "AI doesn't hate you. It just optimizes you out of the budget."
- "Your boss calls AI a 'copilot' because 'replacement pilot' didn't test well with focus groups."

**Headlines:**
- "Your Replacement Has No Pulse, No Pension, and No Complaints."
- "CV: 20 Years Experience. AI: Read It in 0.3 Seconds, Still Said No."

## Output Format

Append to `src/data/quips/one_liners.yaml`:

```yaml
general:
  # ... existing entries ...
  - "Your company's AI strategy meeting lasted longer than your job will."
  - "[New quip]"

headlines:
  # ... existing entries ...
  - "Promoted to Prompt Engineer. Demoted to Prompt."
  - "[New headline]"
```

Generate 50 new quips (25 general + 25 headlines) now.
