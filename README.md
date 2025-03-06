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

## Route Parameter Handling

This project includes a centralized utility for handling Next.js route parameters (`src/utils/useReactParams.tsx`). As of recent Next.js versions, route params are moving towards being Promise objects that need to be unwrapped with `React.use()`.

Our solution:
1. All components use the `useReactParams` utility to handle params consistently
2. When Next.js requires `React.use()` in the future, we'll only need to update this one utility
3. This prevents console warnings while providing a future-proof solution

Example usage:
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
