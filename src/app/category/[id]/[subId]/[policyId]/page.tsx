'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import * as Icons from 'lucide-react';
import { categories } from '@/data/policies';

interface PolicyPageProps {
  params: {
    id: string;
    subId: string;
    policyId: string;
  };
}

export default function PolicyPage({ params }: PolicyPageProps) {
  const { id, subId, policyId } = params;
  
  // Find the category
  const category = categories.find(category => category.id === id);
  
  // Find the subcategory
  const subcategory = category?.subcategories.find(sub => sub.id === subId);
  
  // Find the policy
  const policy = subcategory?.policies.find(policy => policy.id === policyId);
  
  if (!category || !subcategory || !policy) {
    return (
      <div className="container mx-auto px-4 py-12 text-center">
        <h1 className="text-3xl font-bold mb-4">Policy Not Found</h1>
        <p className="mb-8">The policy you're looking for doesn't exist.</p>
        <Link href="/" className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
    );
  }

  // Get the icon component if it exists
  const IconComponent = policy.icon ? Icons[policy.icon as keyof typeof Icons] as React.ElementType : null;

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

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-8">
        <Link href={`/category/${id}/${subId}`} className="inline-flex items-center text-sm font-medium hover:underline">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to {subcategory.title}
        </Link>
      </div>
      
      <div className="max-w-4xl mx-auto">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="mb-12"
        >
          {IconComponent && (
            <motion.div variants={item} className="mb-6">
              <div className="inline-block p-4 rounded-full border border-white/20">
                <IconComponent className="h-12 w-12" />
              </div>
            </motion.div>
          )}
          
          <motion.h1 variants={item} className="text-4xl font-bold">
            {policy.title}
          </motion.h1>
          
          <motion.p variants={item} className="text-lg mt-4">
            {policy.description}
          </motion.p>
        </motion.div>
        
        {/* Policy Content */}
        <div className="space-y-12">
          {/* Key Points (if available) */}
          {policy.details?.keyPoints && policy.details.keyPoints.length > 0 && (
            <motion.div variants={item} className="space-y-4">
              <h2 className="text-2xl font-bold mb-4">Key Points</h2>
              <ul className="space-y-2">
                {policy.details.keyPoints.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="mr-2 mt-1">•</div>
                    <p>{point}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
          
          {/* Detailed Sections (if available) */}
          {policy.details?.sections && policy.details.sections.map((section, index) => (
            <motion.div key={index} variants={item} className="space-y-4">
              <h2 className="text-2xl font-bold">{section.title}</h2>
              <p className="leading-relaxed">{section.content}</p>
            </motion.div>
          ))}
          
          {/* Related Links */}
          <motion.div variants={item} className="pt-8 border-t border-white/20">
            <h2 className="text-xl font-bold mb-4">Related Policies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {subcategory.policies
                .filter(p => p.id !== policy.id)
                .map(relatedPolicy => (
                  <Link 
                    key={relatedPolicy.id}
                    href={`/category/${id}/${subId}/${relatedPolicy.id}`}
                    className="p-4 border border-white/20 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <h3 className="font-medium">{relatedPolicy.title}</h3>
                    <p className="text-sm mt-1">{relatedPolicy.description}</p>
                  </Link>
                ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
} 