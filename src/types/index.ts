/**
 * Job prediction data types
 * Aligned with O*NET occupation codes and AI exposure research
 */

export interface Job {
    /** URL-safe identifier */
    id: string;
    /** Display title */
    title: string;
    /** O*NET SOC code (e.g., "15-1252.00") */
    onetCode?: string;
    /** Job family/category */
    category: JobCategory;
    /** Risk percentage (0-100) */
    riskPercent: number;
    /** Timeline range in years */
    timeline: TimelineRange;
    /** AI exposure factors */
    exposureFactors: string[];
    /** Dark humor quip for this job */
    quip: string;
    /** Data sources */
    sources: Source[];
}

export type JobCategory =
    | 'technology'
    | 'finance'
    | 'legal'
    | 'marketing'
    | 'admin'
    | 'creative'
    | 'research'
    | 'healthcare'
    | 'education'
    | 'other';

export interface TimelineRange {
    /** Minimum years until significant impact */
    minYears: number;
    /** Maximum years until significant impact */
    maxYears: number;
}

export interface Source {
    /** Source URL */
    url: string;
    /** Source title/description */
    title: string;
}

/**
 * Location/country data types
 */

export interface Location {
    /** ISO 3166-1 alpha-2 code */
    code: string;
    /** Country name */
    name: string;
    /** Adoption tier (1 = fastest) */
    tier: 1 | 2 | 3 | 4;
    /** Timeline modifier in years (negative = faster) */
    modifierYears: number;
    /** Human-readable tier label */
    label: string;
    /** AI adoption index (0-1) */
    adoptionIndex?: number;
}

/**
 * Expert quote types
 */

export interface Quote {
    /** Speaker name */
    author: string;
    /** Speaker role/title */
    role: string;
    /** The quote text */
    quote: string;
    /** Event/source (e.g., "Davos 2026") */
    source: string;
    /** Source URL */
    sourceUrl?: string;
    /** Dark humor caption */
    quip?: string;
}

/**
 * Prediction result types
 */

export interface PredictionResult {
    job: Job;
    location: Location;
    /** Adjusted timeline based on location */
    adjustedTimeline: TimelineRange;
    /** Adjusted risk based on location tier */
    adjustedRisk: number;
    /** Relevant quotes for this job category */
    quotes: Quote[];
}
