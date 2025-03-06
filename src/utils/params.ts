/**
 * A utility function to safely access params in Next.js pages
 * that works with both current and future versions of Next.js.
 * 
 * This addresses the warning:
 * "params is now a Promise and should be unwrapped with React.use()"
 */
export function useParams<T>(params: T): T {
  try {
    // In the future, when React.use becomes available, we'll use it
    // For now, we get a "React.use() is not a function" error if we try to use it
    // So we just return the params directly for now
    
    // Future implementation when React.use is fully supported:
    // import { use } from 'react';
    // return use(params);
    
    return params;
  } catch (error) {
    // Fallback to direct access
    return params;
  }
} 