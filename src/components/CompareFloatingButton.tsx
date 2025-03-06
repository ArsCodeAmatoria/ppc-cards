'use client';

import React, { useEffect, useState } from 'react';
import { SplitSquareVertical, X } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

export function CompareFloatingButton() {
  const [comparisonCount, setComparisonCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check localStorage for comparison items
    const updateCount = () => {
      const comparisonList = JSON.parse(localStorage.getItem('policyComparison') || '[]');
      setComparisonCount(comparisonList.length);
    };

    // Initial count
    updateCount();

    // Set up event listener for storage changes
    const handleStorageChange = () => {
      updateCount();
    };

    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for when we update localStorage programmatically
    window.addEventListener('policyComparisonUpdated', updateCount);

    // Check periodically (for when the button is added to comparison on the same page)
    const interval = setInterval(updateCount, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('policyComparisonUpdated', updateCount);
      clearInterval(interval);
    };
  }, []);

  const handleCompareClick = () => {
    if (comparisonCount > 0) {
      router.push('/compare');
    } else {
      setIsOpen(true);
    }
  };

  if (comparisonCount === 0 && !isOpen) {
    return null;
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.8 }}
            className="bg-white text-purple-900 p-4 rounded-lg shadow-lg mb-4 max-w-xs"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="font-bold">Policy Comparison</h3>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-full hover:bg-gray-100"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            <p className="text-sm">
              Add policies to compare by clicking "Add to comparison" on any policy page.
            </p>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleCompareClick}
        className="bg-white text-purple-900 h-14 w-14 rounded-full shadow-lg flex items-center justify-center relative"
      >
        <SplitSquareVertical className="h-6 w-6" />
        {comparisonCount > 0 && (
          <span className="absolute -top-2 -right-2 bg-purple-600 text-white text-xs font-bold rounded-full h-6 w-6 flex items-center justify-center">
            {comparisonCount}
          </span>
        )}
      </motion.button>
    </div>
  );
} 