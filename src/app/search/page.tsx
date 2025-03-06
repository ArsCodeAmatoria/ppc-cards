'use client';

import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowLeft, Search } from 'lucide-react';
import { categories } from '@/data/policies';
import { PolicyCard } from '@/components/PolicyCard';
import { SearchBar } from '@/components/search/SearchBar';

interface SearchResult {
  id: string;
  title: string;
  description: string;
  icon?: string;
  categoryId: string;
  categoryTitle: string;
  subcategoryId: string;
  subcategoryTitle: string;
  href: string;
}

export default function SearchPage() {
  const searchParams = useSearchParams();
  const query = searchParams.get('q') || '';
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query) return;

    setIsSearching(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const searchResults: SearchResult[] = [];
      
      // Search through all categories, subcategories, and policies
      categories.forEach(category => {
        category.subcategories.forEach(subcategory => {
          subcategory.policies.forEach(policy => {
            const matchesTitle = policy.title.toLowerCase().includes(query.toLowerCase());
            const matchesDescription = policy.description.toLowerCase().includes(query.toLowerCase());
            const matchesContent = policy.content?.some(item => 
              item.toLowerCase().includes(query.toLowerCase())
            );
            const matchesKeyPoints = policy.details?.keyPoints?.some(point => 
              point.toLowerCase().includes(query.toLowerCase())
            );
            const matchesSections = policy.details?.sections?.some(section => 
              section.title.toLowerCase().includes(query.toLowerCase()) || 
              section.content.toLowerCase().includes(query.toLowerCase())
            );
            
            if (matchesTitle || matchesDescription || matchesContent || matchesKeyPoints || matchesSections) {
              searchResults.push({
                id: policy.id,
                title: policy.title,
                description: policy.description,
                icon: policy.icon,
                categoryId: category.id,
                categoryTitle: category.title,
                subcategoryId: subcategory.id,
                subcategoryTitle: subcategory.title,
                href: `/category/${category.id}/${subcategory.id}/${policy.id}`
              });
            }
          });
        });
      });
      
      setResults(searchResults);
      setIsSearching(false);
    }, 500);
    
    return () => clearTimeout(timer);
  }, [query]);

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
        className="max-w-4xl mx-auto mb-12"
      >
        <motion.h1 variants={item} className="text-3xl font-bold text-white mb-6">
          Search Results
        </motion.h1>
        
        <motion.div variants={item} className="mb-8">
          <SearchBar placeholder="Refine your search..." className="max-w-2xl mx-auto" />
        </motion.div>
        
        {query && (
          <motion.p variants={item} className="text-white/80 mb-8 text-center">
            {isSearching ? (
              'Searching...'
            ) : results.length > 0 ? (
              `Found ${results.length} result${results.length === 1 ? '' : 's'} for "${query}"`
            ) : (
              `No results found for "${query}"`
            )}
          </motion.p>
        )}
      </motion.div>
      
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((result) => (
            <PolicyCard
              key={`${result.categoryId}-${result.subcategoryId}-${result.id}`}
              title={result.title}
              description={result.description}
              icon={result.icon}
              href={result.href}
            />
          ))}
        </div>
      ) : !isSearching && query && (
        <div className="text-center py-12">
          <div className="inline-flex items-center justify-center p-6 bg-white/5 rounded-full mb-6">
            <Search className="h-12 w-12 text-white/50" />
          </div>
          <h2 className="text-xl font-medium text-white mb-2">No matching policies found</h2>
          <p className="text-white/80 max-w-md mx-auto">
            Try using different keywords or browse our policy categories from the home page.
          </p>
        </div>
      )}
    </div>
  );
} 