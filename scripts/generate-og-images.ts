import satori from 'satori';
import { html } from 'satori-html';
import { Resvg } from '@resvg/resvg-js';
import fs from 'fs';
import path from 'path';
import YAML from 'yaml';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const fontUrl = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff';

function loadAllJobs() {
  const jobsDir = path.join(__dirname, '..', 'src', 'data', 'jobs');
  console.log('🔍 Looking in:', jobsDir);
  const files = fs.readdirSync(jobsDir).filter(f => f.endsWith('.yaml'));
  console.log(`📁 Found ${files.length} YAML files`);

  const allJobs: any[] = [];
  for (const file of files) {
    const filePath = path.join(jobsDir, file);
    const content = fs.readFileSync(filePath, 'utf-8');
    const data = YAML.parse(content);

    // Jobs are stored as objects with job IDs as keys
    if (data && typeof data === 'object') {
      const jobs = Object.values(data);
      allJobs.push(...jobs);
    }
  }
  return allJobs;
}

async function generateOGImages() {
  console.log('🎨 Generating OpenGraph images...');

  const outputDir = path.join(__dirname, '..', 'public', 'og');
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
      const timelineMean = Math.ceil(((job.timeline?.minYears || 2) + (job.timeline?.maxYears || 5)) / 2);

      const markup = html`
                <div style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-color: #000000; background-image: radial-gradient(circle at 50% 0%, #18181b 0%, #000000 80%); color: #fff; padding: 60px; justify-content: space-between; align-items: center; font-family: 'Inter'; text-align: center; border: 1px solid #27272a;">
                  
                  <!-- Top Bar -->
                  <div style="display: flex; justify-content: flex-end; width: 100%; align-items: center;">
                     <div style="display: flex; font-size: 24px; color: #52525b; font-weight: 500;">will-ai-replace.me</div>
                  </div>

                  <!-- Center Content -->
                  <div style="display: flex; flex-direction: column; align-items: center; gap: 30px; width: 100%; flex-grow: 1; justify-content: center;">
                    
                    <div style="display: flex; flex-direction: column; align-items: center; gap: 10px;">
                        <div style="display: flex; font-size: 32px; color: #a1a1aa; font-weight: 500; letter-spacing: -0.5px;">Your career as a</div>
                        
                        <!-- Job Title - Fixed clipping with padding and line-height -->
                        <div style="display: flex; justify-content: center; align-items: center; text-align: center;">
                            <div style="display: flex; font-size: ${job.title.length > 20 ? '72px' : '96px'}; font-weight: 900; line-height: 1.2; background: linear-gradient(to bottom, #ffffff, #d4d4d8); background-clip: text; -webkit-background-clip: text; color: transparent; padding: 10px 40px;">
                              ${job.title}
                            </div>
                        </div>
                    </div>

                    <div style="display: flex; flex-direction: column; align-items: center; gap: 0;">
                        <div style="display: flex; font-size: 32px; color: #71717a; font-weight: 400; margin-bottom: 20px;">ends in approximately</div>
                        
                        <!-- Centered Years Container -->
                        <div style="display: flex; align-items: center; gap: 16px; justify-content: center;">
                            <div style="display: flex; font-size: 160px; font-weight: 900; line-height: 1; color: #ef4444; letter-spacing: -8px; text-shadow: 0 0 50px rgba(239, 68, 68, 0.4); margin-bottom: -10px;">
                              ${timelineMean}
                            </div>
                            <div style="display: flex; font-size: 48px; font-weight: 800; color: #ef4444; letter-spacing: 1px;">YEARS</div>
                        </div>
                    </div>

                  </div>

                  <!-- Empty Footer for balance -->
                  <div style="display: flex; width: 100%; height: 24px;"></div>

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
