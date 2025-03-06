'use client';

import { categories } from '@/data/policies';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';
import { useReactParams } from '@/utils/useReactParams';
import React from 'react';

interface PolicyPageProps {
  params: {
    id: string;
    subId: string;
    policyId: string;
  };
}

// Main page component
export default function PolicyPage({ params }: PolicyPageProps) {
  // Use our centralized utility for handling Next.js params
  const unwrappedParams = useReactParams(params);
  const { id, subId, policyId } = unwrappedParams;
  
  const category = categories.find((c) => c.id === id);
  const subcategory = category?.subcategories.find((s) => s.id === subId);
  const policy = subcategory?.policies.find((p) => p.id === policyId);

  if (!policy || !category || !subcategory) {
    return notFound();
  }

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

  return (
    <div className="container mx-auto max-w-4xl px-4 py-8">
      <Link 
        href={`/category/${id}/${subId}`}
        className="inline-flex items-center mb-8 text-ppc-purple hover:text-ppc-purple/70"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to {subcategory.title}
      </Link>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="space-y-6"
      >
        <motion.h1 variants={item} className="text-4xl font-bold text-ppc-purple">
          {policy.title}
        </motion.h1>
        
        <motion.p variants={item} className="text-lg text-slate-600">
          {policy.description}
        </motion.p>

        <motion.div variants={item} className="space-y-4 mt-8">
          {policy.content.map((point, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="p-4 bg-ppc-purple/5 rounded-lg border border-ppc-purple/10"
            >
              <p>{point}</p>
            </motion.div>
          ))}
        </motion.div>

        {policy.sources && policy.sources.length > 0 && (
          <motion.div variants={item} className="mt-12 border-t border-slate-200 pt-8">
            <h2 className="text-lg font-semibold mb-4 text-ppc-purple">Sources</h2>
            <ul className="space-y-2">
              {policy.sources.map((source, index) => (
                <li key={index}>
                  <a 
                    href={source}
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-ppc-purple hover:text-ppc-purple/70"
                  >
                    Source {index + 1} <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
} 