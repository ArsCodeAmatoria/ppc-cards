'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import * as React from 'react';
import { useReactParams } from '@/utils/useReactParams';

// TypeScript doesn't recognize Suspense yet but it's available in React
// @ts-ignore
const Suspense = React.Suspense;

interface CategoryPageProps {
  params: Promise<{
    id: string;
  }>;
}

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Main component with Suspense boundary
export default function CategoryPage({ params }: CategoryPageProps) {
  return (
    <Suspense fallback={<div className="py-8 text-center">Loading category details...</div>}>
      <CategoryContent params={params} />
    </Suspense>
  );
}

// Content component that handles params unwrapping
function CategoryContent({ params }: CategoryPageProps) {
  // Use our centralized utility for handling Next.js params
  const unwrappedParams = useReactParams(params);
  const { id } = unwrappedParams;
  
  const category = categories.find((c) => c.id === id);
  
  if (!category) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <Link 
        href="/"
        className="inline-flex items-center mb-8 text-ppc-purple hover:text-ppc-purple/70"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Home
      </Link>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show" 
        className="space-y-6"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-ppc-purple">
          {category.title}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8">
          {category.description}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {category.subcategories.map((subcategory) => (
            <PolicyCard
              key={subcategory.id}
              title={subcategory.title}
              description={subcategory.description}
              href={`/category/${id}/${subcategory.id}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 