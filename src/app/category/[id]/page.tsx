'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PolicyCard } from '@/components/PolicyCard';
import { categories } from '@/data/policies';

interface CategoryPageProps {
  params: {
    id: string;
  };
}

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
      <div className="mb-8">
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{category.title}</h1>
        <p className="text-lg">{category.description}</p>
      </div>
      
      <div className="space-y-16">
        {category.subcategories.map((subcategory) => (
          <div key={subcategory.id} className="mb-12 last:mb-0">
            <h2 className="text-2xl font-bold mb-6">{subcategory.title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {subcategory.policies.map((policy) => (
                <PolicyCard
                  key={policy.id}
                  title={policy.title}
                  description={policy.description}
                  icon={policy.icon}
                  href={`/category/${id}/${subcategory.id}/${policy.id}`}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
} 