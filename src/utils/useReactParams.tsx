/**
 * This is a centralized utility for handling Next.js route params.
 * 
 * WARNING: Next.js has announced that in future versions, params will be
 * a Promise that must be unwrapped with React.use().
 * 
 * When Next.js makes this change, we'll need to update this utility to use:
 * ```
 * import { use } from 'react';
 * export function useReactParams<T>(params: T): T {
 *   return use(params);
 * }
 * ```
 * 
 * For now, direct access works with just a warning, so we return params directly.
 */

// Current implementation for Next.js development with warning
export function useReactParams<T>(params: T): T {
  return params;
}

// Future implementation when React.use becomes required
// Uncomment this when Next.js makes the change:
/*
import { use } from 'react';
export function useReactParams<T>(params: T): T {
  return use(params);
}
*/ 