# Agent Prompts

This directory contains prompts for sub-agents that research and populate data.

## Subagent Prompts (for parallel execution)

These prompts are designed to be run by multiple AI agents in parallel:

| Prompt | Output | Est. Data |
|--------|--------|-----------|
| `subagent_healthcare_jobs.md` | `src/data/jobs/healthcare.yaml` | 10 jobs |
| `subagent_education_jobs.md` | `src/data/jobs/education.yaml` | 10 jobs |
| `subagent_research_jobs.md` | `src/data/jobs/research.yaml` | 10 jobs |
| `subagent_countries.md` | Append to `countries.yaml` | 50 countries |
| `subagent_quotes.md` | `src/data/quotes/tech_leaders_2026.yaml` | 15-20 quotes |
| `subagent_quips.md` | Append to `one_liners.yaml` | 50 quips |

## Running Subagents

1. Open each prompt in a separate AI session (Claude, Gemini, etc.)
2. Each agent generates its output independently
3. Copy the generated YAML to the appropriate file
4. Run `pnpm build` to validate
5. Commit with: `feat(data): add [category] data`

## General Prompts (for manual research)

- `job_research.md` - Template for researching individual jobs
- `location_research.md` - Template for researching individual countries

## Schemas

All generated data must match the TypeScript types in `src/types/index.ts`.
