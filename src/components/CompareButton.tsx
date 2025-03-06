'use client';

import React from 'react';
import { PlusCircle, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface CompareButtonProps {
  policyId: string;
  categoryId: string;
  subcategoryId: string;
  title: string;
}

export function CompareButton({ policyId, categoryId, subcategoryId, title }: CompareButtonProps) {
  const router = useRouter();
  const [isAdded, setIsAdded] = React.useState(false);

  React.useEffect(() => {
    // Check if this policy is already in the comparison list
    const comparisonList = JSON.parse(localStorage.getItem('policyComparison') || '[]');
    const isInList = comparisonList.some((item: any) => 
      item.policyId === policyId && 
      item.categoryId === categoryId && 
      item.subcategoryId === subcategoryId
    );
    setIsAdded(isInList);
  }, [policyId, categoryId, subcategoryId]);

  const handleAddToComparison = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    const comparisonList = JSON.parse(localStorage.getItem('policyComparison') || '[]');
    
    if (isAdded) {
      // Remove from comparison
      const updatedList = comparisonList.filter((item: any) => 
        !(item.policyId === policyId && 
          item.categoryId === categoryId && 
          item.subcategoryId === subcategoryId)
      );
      localStorage.setItem('policyComparison', JSON.stringify(updatedList));
      setIsAdded(false);
    } else {
      // Add to comparison (max 3)
      if (comparisonList.length >= 3) {
        alert('You can compare up to 3 policies at a time. Please remove a policy before adding another.');
        return;
      }
      
      const updatedList = [
        ...comparisonList, 
        { 
          policyId, 
          categoryId, 
          subcategoryId, 
          title,
          url: `/category/${categoryId}/${subcategoryId}/${policyId}`
        }
      ];
      localStorage.setItem('policyComparison', JSON.stringify(updatedList));
      setIsAdded(true);
    }
  };

  return (
    <button
      onClick={handleAddToComparison}
      className="inline-flex items-center text-sm font-medium text-white/80 hover:text-white transition-colors"
    >
      {isAdded ? (
        <>
          <CheckCircle className="mr-1 h-4 w-4 text-green-400" />
          Added to comparison
        </>
      ) : (
        <>
          <PlusCircle className="mr-1 h-4 w-4" />
          Add to comparison
        </>
      )}
    </button>
  );
} 