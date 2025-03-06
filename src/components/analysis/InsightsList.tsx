import React from 'react';
import { motion } from 'framer-motion';
import { AlertTriangle } from 'lucide-react';

interface InsightsListProps {
  insights: string[];
  className?: string;
}

export function InsightsList({ insights, className = '' }: InsightsListProps) {
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
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <div className={`bg-gradient-to-br from-purple-900/50 to-purple-800/30 rounded-xl p-6 ${className}`}>
      <div className="flex items-center gap-3 mb-4">
        <AlertTriangle className="h-6 w-6 text-purple-400" />
        <h3 className="text-xl font-bold text-white">Key Insights</h3>
      </div>
      
      <motion.ul 
        className="space-y-3"
        variants={container}
        initial="hidden"
        animate="show"
      >
        {insights.map((insight, index) => (
          <motion.li 
            key={index}
            className="flex items-start gap-3"
            variants={item}
          >
            <span className="text-purple-400 font-bold mt-1">•</span>
            <p className="text-white/80">{insight}</p>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
} 