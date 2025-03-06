'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, X, AlertTriangle } from 'lucide-react';
import { categories } from '@/data/policies';

interface ComparisonItem {
  policyId: string;
  categoryId: string;
  subcategoryId: string;
  title: string;
  url: string;
}

interface PolicyDetails {
  title: string;
  description: string;
  icon?: string;
  keyPoints?: string[];
  sections?: {
    title: string;
    content: string;
  }[];
}

export default function ComparePage() {
  const [comparisonList, setComparisonList] = useState<ComparisonItem[]>([]);
  const [policyDetails, setPolicyDetails] = useState<Record<string, PolicyDetails>>({});

  useEffect(() => {
    // Get comparison list from localStorage
    const storedList = JSON.parse(localStorage.getItem('policyComparison') || '[]');
    setComparisonList(storedList);

    // Get policy details for each item in the comparison list
    const details: Record<string, PolicyDetails> = {};
    
    storedList.forEach((item: ComparisonItem) => {
      const { categoryId, subcategoryId, policyId } = item;
      
      const category = categories.find(c => c.id === categoryId);
      const subcategory = category?.subcategories.find(s => s.id === subcategoryId);
      const policy = subcategory?.policies.find(p => p.id === policyId);
      
      if (policy) {
        details[policyId] = {
          title: policy.title,
          description: policy.description,
          icon: policy.icon,
          keyPoints: policy.details?.keyPoints,
          sections: policy.details?.sections
        };
      }
    });
    
    setPolicyDetails(details);
  }, []);

  const removeFromComparison = (item: ComparisonItem) => {
    const updatedList = comparisonList.filter(
      i => !(i.policyId === item.policyId && i.categoryId === item.categoryId && i.subcategoryId === item.subcategoryId)
    );
    setComparisonList(updatedList);
    localStorage.setItem('policyComparison', JSON.stringify(updatedList));
  };

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
        <Link href="/" className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Home
        </Link>
      </div>
      
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="max-w-6xl mx-auto"
      >
        <motion.h1 variants={item} className="text-3xl font-bold text-white mb-6 text-center">
          Policy Comparison
        </motion.h1>
        
        {comparisonList.length === 0 ? (
          <motion.div variants={item} className="text-center py-12">
            <div className="inline-flex items-center justify-center p-6 bg-white/5 rounded-full mb-6">
              <AlertTriangle className="h-12 w-12 text-white/50" />
            </div>
            <h2 className="text-xl font-medium text-white mb-2">No policies to compare</h2>
            <p className="text-white/80 max-w-md mx-auto mb-6">
              Add policies to your comparison list by clicking "Add to comparison" on any policy page.
            </p>
            <Link 
              href="/" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-gray-100 transition-colors"
            >
              Browse Policies
            </Link>
          </motion.div>
        ) : (
          <>
            <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {comparisonList.map((item) => (
                <div 
                  key={`${item.categoryId}-${item.subcategoryId}-${item.policyId}`}
                  className="bg-white/5 rounded-lg p-6 relative"
                >
                  <button 
                    onClick={() => removeFromComparison(item)}
                    className="absolute top-3 right-3 p-1 rounded-full hover:bg-white/10 transition-colors"
                    aria-label="Remove from comparison"
                  >
                    <X className="h-5 w-5" />
                  </button>
                  
                  <h2 className="text-xl font-bold text-white mb-2">{item.title}</h2>
                  <p className="text-white/80 mb-4">{policyDetails[item.policyId]?.description}</p>
                  
                  <Link 
                    href={item.url}
                    className="inline-flex items-center text-sm font-medium text-white hover:underline"
                  >
                    View full policy
                  </Link>
                </div>
              ))}
            </motion.div>
            
            {/* Comparison Table */}
            <motion.div variants={item} className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="text-left p-4 border-b border-white/10 text-white font-medium">Feature</th>
                    {comparisonList.map((item) => (
                      <th 
                        key={`header-${item.policyId}`}
                        className="text-left p-4 border-b border-white/10 text-white font-medium"
                      >
                        {item.title}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {/* Key Points Comparison */}
                  <tr>
                    <td className="p-4 border-b border-white/10 text-white font-medium">Key Points</td>
                    {comparisonList.map((item) => (
                      <td 
                        key={`keypoints-${item.policyId}`}
                        className="p-4 border-b border-white/10 text-white/80"
                      >
                        {policyDetails[item.policyId]?.keyPoints ? (
                          <ul className="list-disc pl-5 space-y-1">
                            {policyDetails[item.policyId].keyPoints?.map((point, index) => (
                              <li key={index}>{point}</li>
                            ))}
                          </ul>
                        ) : (
                          <span className="text-white/50">No key points available</span>
                        )}
                      </td>
                    ))}
                  </tr>
                  
                  {/* Sections Comparison - dynamically generate rows for each section type */}
                  {['The Problem', 'The Solution', 'Implementation', 'Benefits'].map((sectionTitle) => {
                    // Check if any policy has this section
                    const hasSection = comparisonList.some(item => 
                      policyDetails[item.policyId]?.sections?.some(section => 
                        section.title === sectionTitle
                      )
                    );
                    
                    if (!hasSection) return null;
                    
                    return (
                      <tr key={`section-${sectionTitle}`}>
                        <td className="p-4 border-b border-white/10 text-white font-medium">{sectionTitle}</td>
                        {comparisonList.map((item) => {
                          const section = policyDetails[item.policyId]?.sections?.find(
                            s => s.title === sectionTitle
                          );
                          
                          return (
                            <td 
                              key={`${sectionTitle}-${item.policyId}`}
                              className="p-4 border-b border-white/10 text-white/80"
                            >
                              {section ? (
                                section.content
                              ) : (
                                <span className="text-white/50">No information available</span>
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </motion.div>
          </>
        )}
      </motion.div>
    </div>
  );
} 