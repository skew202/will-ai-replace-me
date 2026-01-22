| Prompt | Objective | Est. Data |
|--------|-----------|-----------|
| `subagent_admin_jobs.md` | Discover next 10 **Admin/HR** jobs | 10 jobs |
| `subagent_creative_jobs.md` | Discover next 10 **Creative** jobs | 10 jobs |
| `subagent_education_jobs.md` | Discover next 10 **Education** jobs | 10 jobs |
| `subagent_engineering_jobs.md` | Discover next 10 **Engineering** jobs | 10 jobs |
| `subagent_finance_jobs.md` | Discover next 10 **Finance** jobs | 10 jobs |
| `subagent_government_jobs.md` | Discover next 10 **Government** jobs | 10 jobs |
| `subagent_healthcare_jobs.md` | Discover next 10 **Healthcare** jobs | 10 jobs |
| `subagent_legal_jobs.md` | Discover next 10 **Legal** jobs | 10 jobs |
| `subagent_logistics_jobs.md` | Discover next 10 **Logistics** jobs | 10 jobs |
| `subagent_marketing_jobs.md` | Discover next 10 **Marketing** jobs | 10 jobs |
| `subagent_realestate_jobs.md` | Discover next 10 **Real Estate** jobs | 10 jobs |
| `subagent_research_jobs.md` | Discover next 10 **Research** jobs | 10 jobs |
| `subagent_sales_jobs.md` | Discover next 10 **Sales** jobs | 10 jobs |
| `subagent_tech_jobs.md` | Discover next 10 **Technology** jobs | 10 jobs |
| `master_discovery_agent.md` | Discover next 10 jobs for **any** industry | 10 jobs |
| `subagent_countries.md` | Discover next 50 **Countries** | 50 countries |
| `subagent_quips.md` | Generate next 50 **Quips** | 50 quips |
| `subagent_quotes.md` | Discover next 15-20 **Quotes** | 15-20 quotes |

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
