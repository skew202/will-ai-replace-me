# Additional Countries Research Agent

You are an AI adoption research agent. Research country-level AI adoption data for **50 additional countries** not yet in our database.

## Current Countries (already have)

We already have data for: AE, SG, US, CN, IL, GB, SE, NL, FI, DK, KR, JP, AU, CA, CH, DE, FR, IT, ES, PL, CZ, AT, BE, IE, PT, NZ, IN, MY, TH, VN, PH, BR, MX, AR, CL, CO, PE, ZA, EG, NG, KE, ID, PK, BD, TR, RU, UA, RO, HU, GR, SA, QA, HK, TW, NO, LU

## Your Assignment

Research and add these countries (grouped by region):

**Europe:** SK, BG, HR, SI, LT, LV, EE, RS, BY, MT, CY, IS, AL, MK, BA, ME
**Middle East:** KW, BH, OM, JO, LB, IQ, IR
**Asia-Pacific:** NP, LK, MM, KH, LA, MN, BN, MV
**Africa:** MA, TN, GH, ET, TZ, UG, RW, CI, SN, CM, AO, ZW
**Americas:** EC, VE, UY, PY, BO, CR, PA, DO, GT, CU, JM, TT

## Data Sources

- Microsoft AI Economy Institute Global AI Adoption 2025
- Stanford AI Index country rankings
- Government AI strategy documents
- McKinsey/PwC enterprise adoption surveys

## Output Format

Append to `src/data/locations/countries.yaml`:

```yaml
SK:
  code: SK
  name: Slovakia
  tier: 3
  modifierYears: 0.5
  label: Standard
  adoptionIndex: 0.48

BG:
  code: BG
  name: Bulgaria
  tier: 4
  modifierYears: 1.0
  label: Slow Burn
  adoptionIndex: 0.38
```

## Tier Guidelines

- **Tier 1 (-1 to -2 years):** >75% enterprise adoption, strong gov AI strategy
- **Tier 2 (-0.5 years):** 60-75% enterprise adoption
- **Tier 3 (0 years):** 45-60% enterprise adoption
- **Tier 4 (+1 to +2 years):** <45% enterprise adoption

Generate YAML entries for all 50 countries now.
