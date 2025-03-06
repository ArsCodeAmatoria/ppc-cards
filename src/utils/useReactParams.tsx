/**
 * This is a centralized utility for handling Next.js route params.
 * 
 * In newer versions of Next.js, params is a Promise object that should be
 * unwrapped with `React.use()` before accessing properties. This utility
 * provides a centralized place to handle this change.
 * 
 * When Next.js requires React.use() in the future, you'll simply need to
 * uncomment the future implementation below and comment out the current one.
 */

// CURRENT IMPLEMENTATION
// This works with the current version of Next.js but shows warnings
export function useReactParams<T>(params: T): T {
  // Direct access still works but with warnings
  return params;
}

// FUTURE IMPLEMENTATION
// Uncomment this when Next.js makes React.use() required:
/*
import { use } from 'react'; // You might need to change this to a proper import path

export function useReactParams<T>(params: T): T {
  // Unwrap params using React.use() to avoid warnings
  return use(params as any);
}
*/ 