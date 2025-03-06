# PPC Policy Explorer

An interactive web application built with Next.js 14 that presents People's Party of Canada policies in a hierarchical card-based format.

## Features

- Responsive design that works on all devices
- Intuitive card-based navigation
- Smooth page transitions
- Modern UI with shadcn/ui components
- Hierarchical organization of policies
- Easy-to-browse policy categories

## Tech Stack

- Next.js 14 with App Router
- TypeScript
- Tailwind CSS
- shadcn/ui Components
- Framer Motion

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/ppc-cards.git
cd ppc-cards
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
├── components/            # Reusable React components
├── data/                  # Policy data in JSON format
├── utils/                 # Utility functions
└── types/                # TypeScript type definitions
```

## Route Parameter Handling in Next.js 15+

In Next.js 15+, route parameters (`params`) are now Promise objects that should be unwrapped with `React.use()` before accessing their properties. This project includes a centralized utility for handling this change.

### Current Behavior

Currently, you'll see console warnings like:
```
A param property was accessed directly with `params.id`. `params` is now a Promise and should be unwrapped with `React.use()` before accessing properties of the underlying params object.
```

These warnings are informational and don't affect functionality in the current version of Next.js.

### Our Solution

1. **Centralized Utility**: We use `useReactParams` in `src/utils/useReactParams.tsx` to handle params consistently across components.

2. **Current Implementation**: The utility currently returns params directly (with warnings).

3. **Future-Proofing**: When Next.js makes `React.use()` mandatory, we'll only need to update this one utility.

### Usage Example

```tsx
import { useReactParams } from '@/utils/useReactParams';

interface PageProps {
  params: {
    id: string;
  };
}

export default function Page({ params }: PageProps) {
  // Use our centralized utility to unwrap params
  const unwrappedParams = useReactParams(params);
  const { id } = unwrappedParams;
  
  // Rest of component...
}
```

### Future Implementation (When React.use() Becomes Required)

When Next.js requires `React.use()`, you'll need to:

1. Wrap your components in Suspense boundaries:
```tsx
import { Suspense } from 'react';

export default function Page({ params }) {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PageContent params={params} />
    </Suspense>
  );
}

function PageContent({ params }) {
  const unwrappedParams = useReactParams(params);
  // ...rest of your component
}
```

2. Update the `useReactParams` utility to use `React.use()`:
```tsx
import { use } from 'react';

export function useReactParams<T>(params: T): T {
  return use(params as any);
}
```

## Deployment

This project is configured for deployment on Vercel. Simply push to your GitHub repository and connect it to Vercel for automatic deployments.

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
