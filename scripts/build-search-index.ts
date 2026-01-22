import fs from 'node:fs/promises';
import path from 'node:path';
import { parse } from 'yaml';
import MiniSearch from 'minisearch';
import { fileURLToPath } from 'node:url';

// Helper to get absolute path
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT_DIR = path.resolve(__dirname, '..');
const DATA_DIR = path.join(ROOT_DIR, 'src/data/jobs');
const OUTPUT_FILE = path.join(ROOT_DIR, 'public/search-index.json');

interface Job {
    id: string;
    title: string;
    category: string;
    riskPercent: number;
    exposureFactors: string[];
    quip: string;
}

async function buildSearchIndex() {
    console.log('🏗️ Building search index...');

    const files = await fs.readdir(DATA_DIR);
    const yamlFiles = files.filter(f => f.endsWith('.yaml'));

    const allJobs: Job[] = [];

    for (const file of yamlFiles) {
        const content = await fs.readFile(path.join(DATA_DIR, file), 'utf-8');
        const jobs = parse(content);

        for (const job of Object.values(jobs) as Job[]) {
            allJobs.push({
                id: job.id,
                title: job.title,
                category: job.category,
                riskPercent: job.riskPercent,
                exposureFactors: job.exposureFactors,
                quip: job.quip
            });
        }
    }

    const miniSearch = new MiniSearch({
        fields: ['title', 'category', 'quip', 'exposureFactors'], // fields to index for full-text search
        storeFields: ['title', 'category', 'riskPercent', 'id'], // fields to return with search results
        searchOptions: {
            boost: { title: 2 },
            fuzzy: 0.2
        }
    });

    miniSearch.addAll(allJobs);

    await fs.writeFile(OUTPUT_FILE, JSON.stringify(miniSearch.toJSON()));
    console.log(`✅ Search index built with ${allJobs.length} jobs. Saved to ${OUTPUT_FILE}`);
}

buildSearchIndex().catch(console.error);
