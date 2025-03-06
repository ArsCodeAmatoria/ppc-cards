# PPC Policy Platform

A modern, responsive web application showcasing the People's Party of Canada policy platform. Built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## Overview

This project is a demonstration website that presents policy information in an organized, user-friendly manner. It features:

- Dynamic routing for categories, subcategories, and individual policies
- Responsive design that works on all device sizes
- Smooth animations and transitions
- Centralized data management
- Modern UI with consistent styling

## Tech Stack

- **Next.js 14**: React framework with server-side rendering
- **TypeScript**: Type-safe JavaScript
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **Lucide Icons**: Simple, consistent icon set

## Project Structure

```
ppc-cards/
├── public/
│   └── images/
│       └── ppc-banner.png
├── src/
│   ├── app/
│   │   ├── category/
│   │   │   ├── [id]/
│   │   │   │   ├── [subId]/
│   │   │   │   │   ├── [policyId]/
│   │   │   │   │   │   └── page.tsx  # Individual policy page
│   │   │   │   │   └── page.tsx      # Subcategory page
│   │   │   │   └── page.tsx          # Category page
│   │   ├── globals.css               # Global styles
│   │   ├── layout.tsx                # Root layout
│   │   └── page.tsx                  # Home page
│   ├── components/
│   │   └── PolicyCard.tsx            # Reusable policy card component
│   └── data/
│       └── policies.ts               # Centralized data store
├── next.config.js                    # Next.js configuration
├── package.json                      # Dependencies and scripts
├── tailwind.config.js                # Tailwind configuration
└── tsconfig.json                     # TypeScript configuration
```

## Data Structure

The application uses a centralized data structure in `src/data/policies.ts`:

```typescript
// Data interfaces
export interface Policy {
  id: string;
  title: string;
  description: string;
  icon?: string;
  content?: string[];
  details?: {
    keyPoints?: string[];
    sections?: {
      title: string;
      content: string;
    }[];
  };
}

export interface Subcategory {
  id: string;
  title: string;
  description: string;
  policies: Policy[];
}

export interface Category {
  id: string;
  title: string;
  description: string;
  subcategories: Subcategory[];
}

// Example data structure
export const categories: Category[] = [
  {
    id: 'governance',
    title: 'Governance',
    description: 'Policies related to government reform',
    subcategories: [
      {
        id: 'media-reform',
        title: 'Media Reform',
        description: 'Ending government interference in news media',
        policies: [
          {
            id: 'defund-cbc',
            title: 'Defund CBC',
            description: 'End taxpayer funding of the CBC',
            icon: 'Radio',
            // Additional policy details...
          }
        ]
      }
    ]
  }
];
```

## Key Components

### PolicyCard Component

The `PolicyCard` component is used throughout the application to display policy information:

```tsx
// src/components/PolicyCard.tsx
export function PolicyCard({ title, description, icon, href }: PolicyCardProps) {
  // Get the icon component if it exists
  const IconComponent = icon ? Icons[icon as keyof typeof Icons] as React.ElementType : null;

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl overflow-hidden shadow-xl"
    >
      <Link href={href} className="block p-6">
        <div className="flex flex-col md:flex-row items-start gap-6">
          {IconComponent && (
            <div className="bg-white/10 p-4 rounded-full">
              <IconComponent className="h-8 w-8 text-white" />
            </div>
          )}
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80 mb-4">{description}</p>
            <div className="flex items-center text-white font-medium">
              View Details
              <ArrowRight className="ml-2 h-4 w-4" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
```

### Dynamic Routing

The application uses Next.js dynamic routing to create pages for categories, subcategories, and policies:

```tsx
// src/app/category/[id]/page.tsx
export default function CategoryPage({ params }: CategoryPageProps) {
  const { id } = params;
  
  // Find the category
  const category = categories.find(category => category.id === id);
  
  if (!category) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Category Not Found</h1>
        <p className="mb-8">The category you're looking for doesn't exist.</p>
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Category content */}
    </div>
  );
}
```

## Animation

The application uses Framer Motion for smooth animations:

```tsx
// Animation variants
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Usage in JSX
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
  className="max-w-4xl mx-auto"
>
  <motion.h1 variants={item} className="text-4xl font-bold">
    {title}
  </motion.h1>
  
  <motion.p variants={item} className="text-lg mt-4">
    {description}
  </motion.p>
</motion.div>
```

## Styling

The application uses Tailwind CSS for styling, with a consistent purple color scheme:

```tsx
// Example of styling with Tailwind
<div className="w-full bg-gradient-to-b from-purple-900 to-purple-800 py-16 md:py-24">
  <div className="container mx-auto px-4 text-center">
    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
      People's Party of Canada
    </h1>
    <p className="text-lg md:text-xl text-white/80 mb-8">
      Common sense policies for a stronger, freer Canada
    </p>
  </div>
</div>
```

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/ArsCodeAmatoria/ppc-cards.git
   cd ppc-cards
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

```bash
npm run build
# or
yarn build
```

Then start the production server:

```bash
npm run start
# or
yarn start
```

## License

This project is for demonstration purposes only and is not affiliated with the actual People's Party of Canada.

## Disclaimer

This is a demonstration website showcasing web development skills. The content does not necessarily reflect the views of the developer or any associated organizations. 