/**
 * Prediction Engine
 * Calculates adjusted risk and timeline based on job + location
 */

import type { Job, Location, PredictionResult, TimelineRange, Quote } from '@/types';
import { getAllQuotes } from '@lib/data';

/**
 * Calculate prediction result for a job in a specific location
 */
export function calculatePrediction(job: Job, location: Location): PredictionResult {
    // Adjust timeline based on location modifier
    const adjustedTimeline: TimelineRange = {
        minYears: Math.max(0, job.timeline.minYears + location.modifierYears),
        maxYears: Math.max(1, job.timeline.maxYears + location.modifierYears),
    };

    // Adjust risk based on adoption tier
    // Tier 1 = +5%, Tier 2 = +2%, Tier 3 = 0%, Tier 4 = -5%
    const tierAdjustment = {
        1: 5,
        2: 2,
        3: 0,
        4: -5,
    };

    const adjustedRisk = Math.min(
        99,
        Math.max(10, job.riskPercent + tierAdjustment[location.tier])
    );

    // Get relevant quotes
    const quotes = getRelevantQuotes(job);

    return {
        job,
        location,
        adjustedTimeline,
        adjustedRisk,
        quotes,
    };
}

/**
 * Get quotes relevant to a job category
 */
function getRelevantQuotes(job: Job): Quote[] {
    const allQuotes = getAllQuotes();

    // Always include some general displacement quotes
    const relevant = allQuotes.filter((q) =>
        q.category === 'displacement' ||
        q.category === 'economy' ||
        q.category === 'adaptation'
    );

    // Shuffle and take 3
    return [...relevant]
        .sort(() => Math.random() - 0.5)
        .slice(0, 3);
}

/**
 * Get the target year for timeline display
 */
export function getTargetYear(timeline: TimelineRange): { min: number; max: number } {
    const currentYear = new Date().getFullYear();
    return {
        min: currentYear + Math.round(timeline.minYears),
        max: currentYear + Math.round(timeline.maxYears),
    };
}

/**
 * Get risk level label
 */
export function getRiskLevel(risk: number): 'low' | 'medium' | 'high' | 'critical' {
    if (risk < 30) return 'low';
    if (risk < 55) return 'medium';
    if (risk < 75) return 'high';
    return 'critical';
}

/**
 * Get timeline urgency
 */
export function getTimelineUrgency(minYears: number): 'imminent' | 'near' | 'medium' | 'distant' {
    if (minYears <= 1) return 'imminent';
    if (minYears <= 3) return 'near';
    if (minYears <= 5) return 'medium';
    return 'distant';
}

/**
 * Format timeline for display
 */
export function formatTimeline(timeline: TimelineRange): string {
    const { min, max } = getTargetYear(timeline);

    if (min === max) {
        return `by ${min}`;
    }

    return `${min}–${max}`;
}
