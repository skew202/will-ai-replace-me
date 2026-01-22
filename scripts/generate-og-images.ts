import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';

const fontUrl = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff';

function loadAllJobs() {
    const jobsDir = path.join(process.cwd(), 'src', 'data', 'jobs');
    const files = fs.readdirSync(jobsDir).filter(f => f.endsWith('.yaml'));

    const allJobs: any[] = [];
    for (const file of files) {
        const filePath = path.join(jobsDir, file);
        const content = fs.readFileSync(filePath, 'utf-8');
        const jobs = YAML.parse(content);
        if (Array.isArray(jobs)) {
            allJobs.push(...jobs);
        }
    }
    return allJobs;
}

async function generateOGImages() {
    console.log('🎨 Generating OpenGraph images...');

    const outputDir = path.join(process.cwd(), 'public', 'og');
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());
    const jobs = loadAllJobs();
    console.log(`📊 Generating images for ${jobs.length} jobs...`);

    let success = 0;
    let failed = 0;

    for (const job of jobs) {
        try {
            const riskColor = job.riskPercent > 70 ? '#EF4444' : job.riskPercent > 40 ? '#EAB308' : '#22C55E';

            const markup = html`
                <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-color: #09090b; color: #fff; padding: 60px; justify-content: space-between; font-family: 'Inter';">
                  <div style="display: flex; justify-content: space-between; align-items: center; width: 100%;">
                    <div style="font-size: 32px; font-weight: 700; color: #71717a; text-transform: uppercase; letter-spacing: 2px;">
                      WILL AI REPLACE ME?
                    </div>
                    <div style="font-size: 24px; color: #52525b;">will-ai-replace.me</div>
                  </div>
                  <div style="display: flex; flex-direction: column; gap: 20px;">
                    <div style="font-size: 80px; font-weight: 900; line-height: 1.1; background: linear-gradient(to bottom right, #ffffff, #a1a1aa); background-clip: text; -webkit-background-clip: text; color: transparent;">
                      ${job.title}
                    </div>
                    <div style="display: flex; align-items: center; gap: 24px;">
                       <span style="font-size: 48px; color: #a1a1aa;">Risk Level:</span>
                       <span style="font-size: 64px; font-weight: 900; color: ${riskColor};">${job.riskPercent}%</span>
                    </div>
                  </div>
                  <div style="font-size: 32px; font-style: italic; color: #d4d4d8; opacity: 0.8; max-width: 900px; line-height: 1.4;">
                    "${job.quip}"
                  </div>
                </div>
            `;

            const svg = await satori(markup, {
                width: 1200,
                height: 630,
                fonts: [{ name: 'Inter', data: fontData, weight: 400, style: 'normal' }],
            });

            const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
            const pngData = resvg.render();
            const pngBuffer = pngData.asPng();

            const outputPath = path.join(outputDir, `${job.id}.png`);
            fs.writeFileSync(outputPath, pngBuffer);

            success++;
            if (success % 50 === 0) {
                console.log(`  ✓ Generated ${success}/${jobs.length} images...`);
            }
        } catch (error) {
            console.error(`  ✗ Failed to generate image for ${job.id}:`, error);
            failed++;
        }
    }

    console.log(`\n✅ Generated ${success} OpenGraph images`);
    if (failed > 0) {
        console.log(`❌ Failed: ${failed}`);
    }
}

generateOGImages().catch(console.error);
