/**
 * This is a utility for handling Next.js 15+ route params.
 * 
 * In Next.js 15+, params is a Promise object that needs to be
 * unwrapped before accessing properties.
 * 
 * For CLIENT components: Use React.use() (this utility)
 * For SERVER components: Use async/await pattern
 * 
 * USAGE EXAMPLES:
 * 
 * Client Component:
 * ```tsx
 * 'use client';
 * import { useReactParams } from '@/utils/useReactParams';
 * 
 * export default function Page({ params }: { params: Promise<{ id: string }> }) {
 *   const { id } = useReactParams(params);
 *   // ...rest of component
 * }
 * ```
 * 
 * Server Component:
 * ```tsx
 * export default async function Page({ params }: { params: Promise<{ id: string }> }) {
 *   const { id } = await params;
 *   // ...rest of component
 * }
 * ```
 * 
 * NOTE: To properly handle the Suspense behavior of React.use(),
 * make sure to wrap components using this function in a Suspense boundary.
 */

// Import use hook from React
// The 'use' function is part of React 19
// @ts-ignore - TypeScript doesn't recognize 'use' yet but it works in React 19
import * as React from 'react';
const use = (React as any).use;

/**
 * Unwraps params Promise in client components
 * Must be used within a component wrapped in Suspense
 */
export function useReactParams<T>(params: Promise<T> | T): T {
  // If params is already a Promise, unwrap it with use()
  if (params instanceof Promise) {
    return use(params);
  }
  // Otherwise just return it directly
  return params;
} 