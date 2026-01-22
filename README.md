# will-ai-replace.me

> AI is coming for your job. Not you—just the bit where you get paid.

A provocative AI job displacement predictor built with Astro, Preact, and Tailwind CSS.

## Quick Start

```bash
# Install dependencies
pnpm install

# Start dev server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview
```

## Tech Stack

- **Framework**: [Astro](https://astro.build) with [Preact](https://preactjs.com) islands
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com)
- **Hosting**: [Cloudflare Pages](https://pages.cloudflare.com)
- **Data**: YAML files with TypeScript types

## Project Structure

```
src/
├── components/           # UI components
│   ├── features/        # Feature components (Timeline, JobSearch)
│   ├── layouts/         # Page layouts
│   └── ui/              # Primitives
├── data/                # YAML data files
│   ├── jobs/            # Job exposure data by category
│   ├── locations/       # Country adoption tiers
│   ├── quotes/          # Expert quotes
│   └── quips/           # Dark humor one-liners
├── lib/                 # Core business logic
│   ├── data/            # Data loading utilities
│   ├── geo/             # GeoIP utilities
│   └── prediction/      # Prediction engine
├── pages/               # Astro pages
├── styles/              # Global CSS
└── types/               # TypeScript types
```

## Data Sources

- **Job Exposure**: O*NET, PwC AI Jobs Barometer 2025, Wharton Budget Model
- **Country Tiers**: Microsoft AI Economy Institute, Stanford AI Index
- **Expert Quotes**: Davos 2026 verified sources

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for data contribution guidelines.

## License

MIT
