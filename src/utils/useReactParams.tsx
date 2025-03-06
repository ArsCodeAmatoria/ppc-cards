/**
 * This is a centralized utility for handling Next.js route params.
 * 
 * In Next.js 15+, params is a Promise object that needs to be
 * unwrapped with `React.use()` before accessing properties.
 * 
 * CURRENT BEHAVIOR (Next.js 15):
 * - Direct access to params works but shows warnings
 * - This utility provides a centralized place for future updates
 * 
 * FUTURE SOLUTION:
 * When Next.js requires React.use(), you'll need to:
 * 1. Wrap your component in a Suspense boundary
 * 2. Update this utility to use React.use()
 * 
 * Example with Suspense (for future implementation):
 * ```tsx
 * // In your page.tsx:
 * import { Suspense } from 'react';
 * 
 * export default function Page({ params }) {
 *   return (
 *     <Suspense fallback={<div>Loading...</div>}>
 *       <PageContent params={params} />
 *     </Suspense>
 *   );
 * }
 * 
 * function PageContent({ params }) {
 *   const unwrappedParams = useReactParams(params);
 *   // ...rest of your component
 * }
 * ```
 */

// Current implementation - still shows warnings but works
export function useReactParams<T>(params: T): T {
  // Direct access still works but with warnings
  return params;
}

// Future implementation - uncomment when Next.js requires React.use()
// Add proper import when updating:
// import { use } from 'react'; 
/*
export function useReactParams<T>(params: T): T {
  return use(params as any);
}
*/

/**
 * HOC that properly handles Next.js params with Suspense
 * This is the recommended approach for Next.js 15+
 */
export function withRouteParams<Props extends { params: any }>(
  Component: React.ComponentType<Props>
): React.FC<Props> {
  // Create a wrapper component
  const WithRouteParams: React.FC<Props> = (props) => {
    return (
      <Suspense fallback={<div className="py-8 text-center">Loading...</div>}>
        <Component {...props} />
      </Suspense>
    );
  };

  // Add display name for debugging
  WithRouteParams.displayName = `WithRouteParams(${Component.displayName || Component.name || 'Component'})`;

  return WithRouteParams;
} 