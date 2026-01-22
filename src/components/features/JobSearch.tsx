import { useState, useMemo, useCallback } from 'preact/hooks';
import type { Job, Location } from '@/types';

interface Props {
    detectedCountry: string;
    detectedCountryName: string;
}

// Jobs data will be injected at build time
declare const __JOBS_DATA__: Job[];
declare const __LOCATIONS_DATA__: Array<{ value: string; label: string; tier: number }>;

export default function JobSearch({ detectedCountry, detectedCountryName }: Props) {
    const [query, setQuery] = useState('');
    const [selectedCountry, setSelectedCountry] = useState(detectedCountry);
    const [showDropdown, setShowDropdown] = useState(false);

    // Filter jobs based on query
    const filteredJobs = useMemo(() => {
        if (!query || query.length < 2) return [];

        const lowerQuery = query.toLowerCase();
        // This would be populated from build-time data
        const allJobs: Job[] = [
            { id: 'software_developer', title: 'Software Developer', category: 'technology', riskPercent: 72, timeline: { minYears: 3, maxYears: 7 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'copywriter', title: 'Copywriter', category: 'marketing', riskPercent: 85, timeline: { minYears: 0, maxYears: 3 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'financial_analyst', title: 'Financial Analyst', category: 'finance', riskPercent: 75, timeline: { minYears: 2, maxYears: 5 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'graphic_designer', title: 'Graphic Designer', category: 'creative', riskPercent: 75, timeline: { minYears: 1, maxYears: 4 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'paralegal', title: 'Paralegal', category: 'legal', riskPercent: 80, timeline: { minYears: 2, maxYears: 5 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'data_analyst', title: 'Data Analyst', category: 'technology', riskPercent: 68, timeline: { minYears: 2, maxYears: 5 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'customer_service_rep', title: 'Customer Service Representative', category: 'admin', riskPercent: 88, timeline: { minYears: 0, maxYears: 3 }, exposureFactors: [], quip: '', sources: [] },
            { id: 'translator', title: 'Translator', category: 'creative', riskPercent: 85, timeline: { minYears: 0, maxYears: 3 }, exposureFactors: [], quip: '', sources: [] },
        ];

        return allJobs
            .filter((job) => job.title.toLowerCase().includes(lowerQuery))
            .slice(0, 6);
    }, [query]);

    const handleSelect = useCallback((job: Job) => {
        // Navigate to result page
        window.location.href = `/result?job=${job.id}&country=${selectedCountry}`;
    }, [selectedCountry]);

    const handleSubmit = useCallback((e: Event) => {
        e.preventDefault();
        if (filteredJobs.length > 0) {
            handleSelect(filteredJobs[0]);
        }
    }, [filteredJobs, handleSelect]);

    return (
        <form onSubmit={handleSubmit} class="space-y-6">
            {/* Job Title Input */}
            <div class="relative">
                <label for="job-search" class="sr-only">
                    Job Title
                </label>
                <input
                    id="job-search"
                    type="text"
                    value={query}
                    onInput={(e) => {
                        setQuery((e.target as HTMLInputElement).value);
                        setShowDropdown(true);
                    }}
                    onFocus={() => setShowDropdown(true)}
                    placeholder="e.g., Software Developer, Copywriter, Accountant..."
                    class="w-full rounded-xl border border-surface-700 bg-surface-900 px-6 py-4 text-lg text-surface-100 placeholder-surface-500 transition-all focus:border-danger-500 focus:outline-none focus:ring-2 focus:ring-danger-500/20"
                    autocomplete="off"
                />

                {/* Dropdown results */}
                {showDropdown && filteredJobs.length > 0 && (
                    <ul class="absolute z-20 mt-2 w-full rounded-xl border border-surface-700 bg-surface-900 py-2 shadow-2xl">
                        {filteredJobs.map((job) => (
                            <li key={job.id}>
                                <button
                                    type="button"
                                    onClick={() => handleSelect(job)}
                                    class="w-full px-6 py-3 text-left transition-colors hover:bg-surface-800"
                                >
                                    <span class="font-medium text-surface-100">{job.title}</span>
                                    <span class="ml-2 text-sm text-danger-400">
                                        {job.riskPercent}% risk
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>

            {/* Location */}
            <div class="flex items-center gap-4">
                <span class="text-surface-400">Your location:</span>
                <div class="flex items-center gap-2 rounded-lg bg-surface-800 px-4 py-2">
                    <span class="text-surface-100">{detectedCountryName}</span>
                    <span class="text-xs text-surface-500">(auto-detected)</span>
                </div>
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={filteredJobs.length === 0}
                class="w-full rounded-xl bg-gradient-to-r from-danger-600 to-danger-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-danger-500 hover:to-danger-400 focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 focus:ring-offset-surface-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                See My Fate
            </button>
        </form>
    );
}
