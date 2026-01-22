import type { APIRoute } from 'astro';
import { getJobById } from '@/lib/data';
import satori from 'satori';
import { html } from 'satori-html';
import { Resvg, initWasm } from '@resvg/resvg-wasm';

const fontUrl = 'https://fonts.gstatic.com/s/inter/v13/UcCO3FwrK3iLTeHuS_fvQtMwCp50KnMw2boKoduKmMEVuLyfAZ9hjp-Ek-_EeA.woff';

// Function to load WASM dynamically
async function loadWasm() {
  try {
    // @ts-ignore
    const wasm = await import('@resvg/resvg-wasm/index_bg.wasm');
    if (wasm.default) {
      await initWasm(wasm.default);
      return true;
    }
  } catch (e) {
    console.error('Failed to initialize Resvg WASM:', e);
  }
  return false;
}

// Initialize once
const wasmReady = loadWasm();

export const GET: APIRoute = async ({ params }) => {
  const { id } = params;

  if (!id) {
    return new Response('Missing ID', { status: 400 });
  }

  const job = getJobById(id);

  if (!job) {
    return new Response('Job not found', { status: 404 });
  }

  // Ensure WASM is loaded (or at least tried)
  await wasmReady;

  // Load font
  const fontData = await fetch(fontUrl).then((res) => res.arrayBuffer());

  // Determine colors based on risk
  const riskColor = job.riskPercent > 70 ? '#EF4444' : job.riskPercent > 40 ? '#EAB308' : '#22C55E';

  // Template
  const markup = html`
    <div
      style="display: flex; flex-direction: column; width: 1200px; height: 630px; background-color: #09090b; color: #fff; padding: 60px; justify-content: space-between; font-family: 'Inter';"
    >
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

  // Generate SVG
  const svg = await satori(markup, {
    width: 1200,
    height: 630,
    fonts: [
      {
        name: 'Inter',
        data: fontData,
        weight: 400,
        style: 'normal',
      },
    ],
  });

  try {
    // Convert to PNG
    const resvg = new Resvg(svg, {
      fitTo: {
        mode: 'width',
        value: 1200,
      },
    });

    const image = resvg.render();
    const png = image.asPng();

    return new Response(png as unknown as BodyInit, {
      headers: {
        'Content-Type': 'image/png',
        // Cache for 1 day at edge, 1 year if immutable
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000',
      },
    });
  } catch (e) {
    console.error('PNG conversion failed, falling back to SVG:', e);
    return new Response(svg, {
      headers: {
        'Content-Type': 'image/svg+xml',
        // Cache for 1 day at edge, 1 year if immutable
        'Cache-Control': 'public, max-age=86400, s-maxage=31536000',
      },
    });
  }
};
