// Custom type declarations for Next.js features

// Add type support for React.use() with params
declare module 'react' {
  interface ReactUse {
    <T>(params: T): T;
  }
} 