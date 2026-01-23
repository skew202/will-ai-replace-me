import { useState, useEffect, useMemo, useCallback } from 'preact/hooks';
import type { Job } from '@/types';
import MiniSearch from 'minisearch';

interface Props {
    detectedCountry: string;
    detectedCountryName: string;
}

interface SearchResult {
    id: string;
    title: string;
    category: string;
    riskPercent: number;
}

export default function JobSearch({ detectedCountry, detectedCountryName }: Props) {
    const [query, setQuery] = useState('');
    const [selectedCountry] = useState(detectedCountry);
    const [showDropdown, setShowDropdown] = useState(false);
    const [searchEngine, setSearchEngine] = useState<MiniSearch<SearchResult> | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    // Load the search index on mount
    useEffect(() => {
        async function loadIndex() {
            try {
                const response = await fetch('/search-index.json');
                const data = await response.json();

                const miniSearch = MiniSearch.loadJSON<SearchResult>(JSON.stringify(data), {
                    fields: ['title', 'category', 'quip', 'exposureFactors'],
                    storeFields: ['title', 'category', 'riskPercent', 'id'],
                    searchOptions: {
                        boost: { title: 2 },
                        fuzzy: 0.2,
                        prefix: true
                    }
                });

                setSearchEngine(miniSearch);
                setIsLoading(false);
            } catch (error) {
                console.error('Failed to load search index:', error);
                setIsLoading(false);
            }
        }

        loadIndex();
    }, []);

    // Filter jobs based on query
    const filteredJobs = useMemo(() => {
        if (!query || query.length < 2 || !searchEngine) return [];

        const results = searchEngine.search(query, {
            boost: { title: 3 },
            fuzzy: 0.2,
            prefix: true
        });

        return results.slice(0, 8);
    }, [query, searchEngine]);

    const handleSelect = useCallback((result: SearchResult) => {
        if (result.riskPercent < 20) {
            window.location.href = `/not?as=${result.id}&in=${selectedCountry}`;
        } else {
            window.location.href = `/soon?as=${result.id}&in=${selectedCountry}`;
        }
    }, [selectedCountry]);

    const handleSubmit = useCallback((e: Event) => {
        e.preventDefault();
        if (filteredJobs.length > 0) {
            handleSelect(filteredJobs[0] as unknown as SearchResult);
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
                    onBlur={() => setTimeout(() => setShowDropdown(false), 200)}
                    placeholder="e.g., Software Developer, Copywriter, Accountant..."
                    class="w-full rounded-xl border border-surface-700 bg-surface-900 px-6 py-4 text-lg text-surface-100 placeholder-surface-500 transition-all focus:border-danger-500 focus:outline-none focus:ring-2 focus:ring-danger-500/20"
                    autocomplete="off"
                    disabled={isLoading}
                />

                {/* Loading indicator */}
                {isLoading && (
                    <div class="absolute right-4 top-1/2 -translate-y-1/2">
                        <div class="h-5 w-5 animate-spin rounded-full border-2 border-surface-600 border-t-danger-500" />
                    </div>
                )}

                {/* Dropdown results */}
                {showDropdown && filteredJobs.length > 0 && (
                    <ul class="absolute z-20 mt-2 w-full rounded-xl border border-surface-700 bg-surface-900 py-2 shadow-2xl max-h-80 overflow-y-auto">
                        {filteredJobs.map((result) => (
                            <li key={result.id}>
                                <button
                                    type="button"
                                    onMouseDown={() => handleSelect(result as unknown as SearchResult)}
                                    class="w-full px-6 py-3 text-left transition-colors hover:bg-surface-800"
                                >
                                    <span class="font-medium text-surface-100">{result.title}</span>
                                    <span class="ml-2 text-sm text-danger-400">
                                        {result.riskPercent}% risk
                                    </span>
                                </button>
                            </li>
                        ))}
                    </ul>
                )}

                {/* No results message */}
                {showDropdown && query.length >= 2 && filteredJobs.length === 0 && !isLoading && (
                    <div class="absolute z-20 mt-2 w-full rounded-xl border border-surface-700 bg-surface-900 py-4 px-6 text-surface-400">
                        No jobs found matching "{query}"
                    </div>
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
                disabled={filteredJobs.length === 0 || isLoading}
                class="w-full rounded-xl bg-gradient-to-r from-danger-600 to-danger-500 px-8 py-4 text-lg font-semibold text-white transition-all hover:from-danger-500 hover:to-danger-400 focus:outline-none focus:ring-2 focus:ring-danger-500 focus:ring-offset-2 focus:ring-offset-surface-900 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                See My Fate
            </button>
        </form>
    );
}
