'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';
import React from 'react';

interface SubCategoryPageProps {
  params: {
    id: string;
    subId: string;
  };
}

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

function getParams(params: any) {
  // This will be implemented correctly in future Next.js versions
  // Current approach is using direct access per Next.js warnings
  return params;
}

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  // Get params safely for current and future Next.js
  const safeParams = getParams(params);
  const { id, subId } = safeParams;
  
  const category = categories.find((c) => c.id === id);
  const subcategory = category?.subcategories.find((s) => s.id === subId);

  if (!category || !subcategory) {
    return notFound();
  }

  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <Link 
        href={`/category/${id}`}
        className="inline-flex items-center mb-8 text-ppc-purple hover:text-ppc-purple/70"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {category.title}
      </Link>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show" 
        className="space-y-6"
      >
        <motion.h1 variants={itemVariants} className="text-4xl font-bold text-ppc-purple">
          {subcategory.title}
        </motion.h1>
        
        <motion.p variants={itemVariants} className="text-lg text-slate-600 mb-8">
          {subcategory.description}
        </motion.p>

        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {subcategory.policies.map((policy) => (
            <PolicyCard
              key={policy.id}
              title={policy.title}
              description={policy.description}
              href={`/category/${id}/${subId}/${policy.id}`}
            />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
} 