/**
 * Data loading utilities
 * Loads and parses YAML data files at build time
 */

import { parse } from 'yaml';
import type { Job, Location, Quote, JobCategory } from '@/types';

// Import raw YAML files
import techJobsRaw from '@data/jobs/technology.yaml?raw';
import financeJobsRaw from '@data/jobs/finance.yaml?raw';
import legalJobsRaw from '@data/jobs/legal.yaml?raw';
import marketingJobsRaw from '@data/jobs/marketing.yaml?raw';
import adminJobsRaw from '@data/jobs/admin.yaml?raw';
import creativeJobsRaw from '@data/jobs/creative.yaml?raw';
import countriesRaw from '@data/locations/countries.yaml?raw';
import quotesRaw from '@data/quotes/davos_2026.yaml?raw';
import quipsRaw from '@data/quips/one_liners.yaml?raw';

// Parse YAML data
function parseJobsYaml(raw: string): Record<string, Job> {
    const parsed = parse(raw) as Record<string, any>;
    const jobs: Record<string, Job> = {};

    for (const [key, value] of Object.entries(parsed)) {
        jobs[key] = {
            id: value.id,
            title: value.title,
            onetCode: value.onetCode,
            category: value.category as JobCategory,
            riskPercent: value.riskPercent,
            timeline: {
                minYears: value.timeline.minYears,
                maxYears: value.timeline.maxYears,
            },
            exposureFactors: value.exposureFactors,
            quip: value.quip,
            sources: value.sources,
        };
    }

    return jobs;
}

function parseLocationsYaml(raw: string): Record<string, Location> {
    const parsed = parse(raw) as Record<string, any>;
    const locations: Record<string, Location> = {};

    for (const [key, value] of Object.entries(parsed)) {
        locations[key] = {
            code: value.code,
            name: value.name,
            tier: value.tier,
            modifierYears: value.modifierYears,
            label: value.label,
            adoptionIndex: value.adoptionIndex,
        };
    }

    return locations;
}

function parseQuotesYaml(raw: string): Quote[] {
    return parse(raw) as Quote[];
}

interface QuipsData {
    general: string[];
    sixt_style: string[];
    share_templates: string[];
}

function parseQuipsYaml(raw: string): QuipsData {
    return parse(raw) as QuipsData;
}

// Cached parsed data
let _jobs: Job[] | null = null;
let _jobsMap: Map<string, Job> | null = null;
let _locations: Location[] | null = null;
let _locationsMap: Map<string, Location> | null = null;
let _quotes: Quote[] | null = null;
let _quips: QuipsData | null = null;

/**
 * Get all jobs as an array
 */
export function getAllJobs(): Job[] {
    if (_jobs) return _jobs;

    const allJobsRaw = [
        techJobsRaw,
        financeJobsRaw,
        legalJobsRaw,
        marketingJobsRaw,
        adminJobsRaw,
        creativeJobsRaw,
    ];

    _jobs = allJobsRaw.flatMap((raw) => Object.values(parseJobsYaml(raw)));
    return _jobs;
}

/**
 * Get jobs as a map by ID
 */
export function getJobsMap(): Map<string, Job> {
    if (_jobsMap) return _jobsMap;

    _jobsMap = new Map(getAllJobs().map((job) => [job.id, job]));
    return _jobsMap;
}

/**
 * Get a job by ID
 */
export function getJobById(id: string): Job | undefined {
    return getJobsMap().get(id);
}

/**
 * Search jobs by title (case-insensitive)
 */
export function searchJobs(query: string): Job[] {
    const lowerQuery = query.toLowerCase();
    return getAllJobs().filter((job) =>
        job.title.toLowerCase().includes(lowerQuery)
    );
}

/**
 * Get all locations as an array
 */
export function getAllLocations(): Location[] {
    if (_locations) return _locations;

    _locations = Object.values(parseLocationsYaml(countriesRaw));
    return _locations;
}

/**
 * Get locations as a map by code
 */
export function getLocationsMap(): Map<string, Location> {
    if (_locationsMap) return _locationsMap;

    _locationsMap = new Map(getAllLocations().map((loc) => [loc.code, loc]));
    return _locationsMap;
}

/**
 * Get a location by country code
 */
export function getLocationByCode(code: string): Location | undefined {
    return getLocationsMap().get(code.toUpperCase());
}

/**
 * Get all quotes
 */
export function getAllQuotes(): Quote[] {
    if (_quotes) return _quotes;

    _quotes = parseQuotesYaml(quotesRaw);
    return _quotes;
}

/**
 * Get random quotes (for carousel)
 */
export function getRandomQuotes(count: number = 3): Quote[] {
    const quotes = getAllQuotes();
    const shuffled = [...quotes].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, count);
}

/**
 * Get quips data
 */
export function getQuips(): QuipsData {
    if (_quips) return _quips;

    _quips = parseQuipsYaml(quipsRaw);
    return _quips;
}

/**
 * Get a random quip
 */
export function getRandomQuip(): string {
    const quips = getQuips();
    const all = [...quips.general, ...quips.sixt_style];
    return all[Math.floor(Math.random() * all.length)];
}
