'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { PolicyCard } from '@/components/PolicyCard';
import { categories } from '@/data/policies';

interface SubCategoryPageProps {
  params: {
    id: string;
    subId: string;
  };
}

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  const { id, subId } = params;
  
  // Find the category
  const category = categories.find(category => category.id === id);
  
  // Find the subcategory
  const subcategory = category?.subcategories.find(sub => sub.id === subId);
  
  if (!category || !subcategory) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Subcategory Not Found</h1>
        <p className="mb-8">The subcategory you're looking for doesn't exist.</p>
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
        <Link href={`/category/${id}`} className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {category.title}
        </Link>
      </div>
      
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">{subcategory.title}</h1>
        <p className="text-lg">{subcategory.description}</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {subcategory.policies.map((policy) => (
          <PolicyCard
            key={policy.id}
            title={policy.title}
            description={policy.description}
            icon={policy.icon}
            href={`/category/${id}/${subId}/${policy.id}`}
          />
        ))}
      </div>
    </div>
  );
} 