'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, LineChart, Info } from 'lucide-react';
import { liberalFailureData, analysisInsights } from '@/data/analysis/liberalFailures';
import { DataChart } from '@/components/analysis/DataChart';
import { InsightsList } from '@/components/analysis/InsightsList';

export default function AnalysisPage() {
  const [activeCategory, setActiveCategory] = useState(liberalFailureData[0].id);
  const [chartType, setChartType] = useState<'line' | 'bar'>('line');
  
  // Get the active category data
  const category = liberalFailureData.find(cat => cat.id === activeCategory);
  
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
    <div className="min-h-screen bg-gradient-to-b from-purple-900 to-purple-800">
      {/* Header */}
      <div className="w-full bg-gradient-to-r from-purple-900 to-purple-800 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-bold text-white mb-6"
          >
            Liberal Government Failure Analysis
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto"
          >
            Data-driven analysis of policy failures under Liberal governance since 2015, 
            highlighting the need for common-sense alternatives.
          </motion.p>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto px-4 py-12">
        {/* Category tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {liberalFailureData.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category.id
                  ? 'bg-white text-purple-900'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              {category.title}
            </button>
          ))}
        </div>

        {/* Chart type toggle */}
        <div className="flex justify-end mb-6">
          <div className="bg-white/10 rounded-lg p-1 inline-flex">
            <button
              onClick={() => setChartType('line')}
              className={`flex items-center px-3 py-1 rounded ${
                chartType === 'line'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <LineChart className="h-4 w-4 mr-1" />
              Line
            </button>
            <button
              onClick={() => setChartType('bar')}
              className={`flex items-center px-3 py-1 rounded ${
                chartType === 'bar'
                  ? 'bg-purple-600 text-white'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              <BarChart2 className="h-4 w-4 mr-1" />
              Bar
            </button>
          </div>
        </div>

        {category && (
          <motion.div
            key={category.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{category.title}</h2>
              <p className="text-white/80 mb-6">{category.description}</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
              {/* Charts */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-12"
              >
                {category.datasets.map((dataset) => (
                  <motion.div key={dataset.label} variants={item}>
                    <DataChart dataset={dataset} type={chartType} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Insights */}
              <div className="lg:sticky lg:top-24 h-fit">
                <InsightsList 
                  insights={analysisInsights[category.id as keyof typeof analysisInsights]} 
                />
                
                <div className="mt-8 bg-white/10 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Info className="h-5 w-5 text-purple-400" />
                    <h3 className="text-lg font-bold text-white">Methodology</h3>
                  </div>
                  <p className="text-white/80 text-sm">
                    This analysis uses official government data sources to track key metrics 
                    over time. All data points are sourced from Statistics Canada, Department of 
                    Finance, and other official government agencies. The analysis compares 
                    performance metrics from 2015 (when the Liberal government took office) 
                    to the most recent available data.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 