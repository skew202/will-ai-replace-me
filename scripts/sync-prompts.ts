
import fs from 'fs';
import path from 'path';
import yaml from 'yaml';

const JOBS_DIR = path.join(process.cwd(), 'src/data/jobs');
const PROMPTS_DIR = path.join(process.cwd(), 'agents/prompts');

// Mapping from YAML filename (without extension) to Prompt filename (without extension)
const FILE_MAPPING: Record<string, string> = {
    'admin': 'subagent_admin_jobs',
    'creative': 'subagent_creative_jobs',
    'education': 'subagent_education_jobs',
    'engineering': 'subagent_engineering_jobs',
    'finance': 'subagent_finance_jobs',
    'government': 'subagent_government_jobs',
    'healthcare': 'subagent_healthcare_jobs',
    'legal': 'subagent_legal_jobs',
    'logistics': 'subagent_logistics_jobs',
    'marketing': 'subagent_marketing_jobs',
    'media': 'subagent_media_jobs',
    'realestate': 'subagent_realestate_jobs',
    'research': 'subagent_research_jobs',
    'sales': 'subagent_sales_jobs',
    'technology': 'subagent_tech_jobs',
};

async function main() {
    const jobFiles = fs.readdirSync(JOBS_DIR).filter(f => f.endsWith('.yaml'));

    for (const jobFile of jobFiles) {
        const basename = path.basename(jobFile, '.yaml');
        const promptFilename = FILE_MAPPING[basename];

        if (!promptFilename) {
            console.log(`Skipping ${jobFile} (no mapping found)`);
            continue;
        }

        const yamlPath = path.join(JOBS_DIR, jobFile);
        const promptPath = path.join(PROMPTS_DIR, `${promptFilename}.md`);

        if (!fs.existsSync(promptPath)) {
            console.log(`Skipping ${jobFile} (prompt file not found: ${promptPath})`);
            continue;
        }

        console.log(`Processing ${basename}...`);

        try {
            const yamlContent = fs.readFileSync(yamlPath, 'utf-8');
            const jobs = yaml.parse(yamlContent);
            const titles: string[] = [];

            if (jobs && typeof jobs === 'object') {
                for (const key in jobs) {
                    const job = jobs[key];
                    if (job && job.title) {
                        titles.push(job.title);
                    }
                }
            }

            if (titles.length === 0) {
                console.log(`  No jobs found in ${jobFile}`);
                continue;
            }

            // Sort titles alphabetically
            titles.sort();

            // Read prompt file
            const promptContent = fs.readFileSync(promptPath, 'utf-8');

            // Regex to find the section
            // We look for "## Already Researched (Do NOT include these)"
            // and capture everything until the next "## " header or end of file.
            const regex = /(## Already Researched \(Do NOT include these\))([\s\S]*?)(?=\n## |$)/;

            if (!regex.test(promptContent)) {
                console.log(`  Section '## Already Researched (Do NOT include these)' not found in ${promptFilename}.md`);
                continue;
            }

            const newContent = promptContent.replace(regex, (match, header, currentBody) => {
                const list = titles.map(t => `- ${t}`).join('\n');
                return `${header}\n\n${list}\n`;
            });

            if (newContent !== promptContent) {
                fs.writeFileSync(promptPath, newContent, 'utf-8');
                console.log(`  Updated ${promptFilename}.md with ${titles.length} jobs.`);
            } else {
                console.log(`  No changes needed for ${promptFilename}.md`);
            }

        } catch (e) {
            console.error(`Error processing ${basename}:`, e);
        }
    }
}

main();
