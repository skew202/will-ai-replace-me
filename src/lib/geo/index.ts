/**
 * GeoIP utilities for Cloudflare
 */

import type { Location } from '@/types';
import { getLocationByCode, getAllLocations } from '@lib/data';

/**
 * Get country code from Cloudflare request
 */
export function getCountryFromRequest(request: Request): string | undefined {
    // Cloudflare sets this header automatically
    const cfCountry = request.headers.get('cf-ipcountry');

    if (cfCountry && cfCountry !== 'XX') {
        return cfCountry.toUpperCase();
    }

    return undefined;
}

/**
 * Get location from request, with fallback
 */
export function getLocationFromRequest(request: Request): Location {
    const countryCode = getCountryFromRequest(request);

    if (countryCode) {
        const location = getLocationByCode(countryCode);
        if (location) return location;
    }

    // Default to US if unknown
    return getLocationByCode('US') ?? getDefaultLocation();
}

/**
 * Get default location (US)
 */
export function getDefaultLocation(): Location {
    return {
        code: 'US',
        name: 'United States',
        tier: 1,
        modifierYears: -1,
        label: 'Fast Lane',
        adoptionIndex: 0.85,
    };
}

/**
 * Get location options for dropdown
 */
export function getLocationOptions(): Array<{ value: string; label: string; tier: number }> {
    return getAllLocations()
        .sort((a, b) => a.name.localeCompare(b.name))
        .map((loc) => ({
            value: loc.code,
            label: loc.name,
            tier: loc.tier,
        }));
}
