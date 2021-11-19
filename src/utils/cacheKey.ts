/**
 * Prepend the cache key prefix to the GUID
 *
 * @param {string} guid
 *
 * @return {string}
 */

export function cacheKey(guid: string): string {
  return CACHE_KEY_PREFIX + guid;
}
