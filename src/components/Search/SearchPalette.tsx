import { h, Fragment } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import MiniSearch, { type SearchResult } from 'minisearch';

interface JobResult {
    id: string;
    title: string;
    category: string;
    riskPercent: number;
}

export default function SearchPalette() {
    const [isOpen, setIsOpen] = useState(false);
    const [query, setQuery] = useState('');
    const [results, setResults] = useState<SearchResult[]>([]);
    const searchRef = useRef<MiniSearch | null>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        // Load the index
        async function loadIndex() {
            try {
                const response = await fetch('/search-index.json');
                if (!response.ok) return;
                const json = await response.json();

                searchRef.current = MiniSearch.loadJSON(json, {
                    fields: ['title', 'category', 'quip', 'exposureFactors'],
                    storeFields: ['title', 'category', 'riskPercent', 'id']
                });
            } catch (e) {
                console.error("Failed to load search index", e);
            }
        }
        loadIndex();

        // Keyboard shortcut
        function handleKeydown(e: KeyboardEvent) {
            if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
                e.preventDefault();
                setIsOpen(prev => !prev);
            }
            if (e.key === 'Escape') {
                setIsOpen(false);
            }
        }
        window.addEventListener('keydown', handleKeydown);
        return () => window.removeEventListener('keydown', handleKeydown);
    }, []);

    useEffect(() => {
        if (isOpen && inputRef.current) {
            setTimeout(() => inputRef.current?.focus(), 100);
        }
    }, [isOpen]);

    useEffect(() => {
        if (!searchRef.current || !query) {
            setResults([]);
            return;
        }
        const searchResults = searchRef.current.search(query, {
            prefix: true,
            fuzzy: 0.2,
            boost: { title: 2 }
        });
        setResults(searchResults.slice(0, 10)); // Limit to 10
    }, [query]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm bg-black/40" onClick={() => setIsOpen(false)}>
            <div className="w-full max-w-2xl bg-zinc-900 border border-zinc-800 rounded-xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200" onClick={e => e.stopPropagation()}>
                <div className="flex items-center border-b border-zinc-800 px-4 py-3">
                    <svg className="w-5 h-5 text-zinc-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                    <input
                        ref={inputRef}
                        type="text"
                        className="w-full bg-transparent text-lg text-white placeholder-zinc-500 focus:outline-none"
                        placeholder="Search jobs, categories, or doom..."
                        value={query}
                        onInput={(e) => setQuery(e.currentTarget.value)}
                    />
                    <div className="text-xs text-zinc-500 border border-zinc-700 rounded px-1.5 py-0.5 ml-2">ESC</div>
                </div>

                {results.length > 0 && (
                    <div className="py-2 max-h-[60vh] overflow-y-auto">
                        <div className="px-4 py-2 text-xs font-semibold text-zinc-500 uppercase tracking-wider">Results</div>
                        {results.map((result, index) => (
                            <a
                                href={`/jobs/${result.id}`}
                                key={result.id}
                                className={`block px-4 py-3 mx-2 rounded-lg flex items-center justify-between hover:bg-zinc-800 transition-colors group ${index === 0 ? 'bg-zinc-800/50' : ''}`}
                            >
                                <div>
                                    <div className="text-zinc-200 font-medium group-hover:text-cyan-400 transition-colors">
                                        {result.title}
                                    </div>
                                    <div className="text-xs text-zinc-500 capitalize">{result.category}</div>
                                </div>
                                <div className={`text-sm font-bold ${result.riskPercent > 75 ? 'text-red-500' :
                                        result.riskPercent > 50 ? 'text-yellow-500' : 'text-green-500'
                                    }`}>
                                    {result.riskPercent}% Risk
                                </div>
                            </a>
                        ))}
                    </div>
                )}

                {query && results.length === 0 && (
                    <div className="px-4 py-8 text-center text-zinc-500">
                        No jobs found. Either you're safe, or we haven't found you yet.
                    </div>
                )}

                {!query && (
                    <div className="px-4 py-8 text-center text-zinc-600 text-sm">
                        Type to search the database of displacement.
                    </div>
                )}
            </div>
        </div>
    );
}
