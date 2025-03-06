'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, LineChart, Info, AlertTriangle, DollarSign, Award, Trophy, Pill } from 'lucide-react';
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

  // Get Ukraine spending data if in economy category
  const ukraineData = activeCategory === 'economy' 
    ? category?.datasets.find(dataset => dataset.label.includes('Ukraine'))
    : null;
    
  // Check if we're in the transgender category
  const isTransgenderCategory = activeCategory === 'transgender';
  
  // Check if we're in the drugs category
  const isDrugsCategory = activeCategory === 'drugs';

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

        {/* Ukraine Spending Highlight (only shown for economy category) */}
        {ukraineData && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-red-900/50 to-purple-900/50 rounded-xl p-6 border border-red-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-3 rounded-full mt-1">
                <DollarSign className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Ukraine Spending Crisis</h3>
                <p className="text-white/80 mb-4">
                  While Canadians struggle with housing affordability, healthcare wait times, and inflation, 
                  the Liberal government has committed over <span className="font-bold text-red-400">$18 billion</span> in 
                  aid to Ukraine since 2022, with spending projected to increase to nearly $9 billion in 2024 alone.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">$8.9B</p>
                    <p className="text-white/70 text-sm">Projected Ukraine aid in 2024</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">$18.1B</p>
                    <p className="text-white/70 text-sm">Total Ukraine aid since 2022</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">$500</p>
                    <p className="text-white/70 text-sm">Cost per Canadian taxpayer</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  This spending comes at a time when 6.5 million Canadians lack a family doctor, housing prices 
                  have increased by nearly 60%, and inflation has eroded purchasing power for working families.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Transgender Sports Highlight (only shown for transgender category) */}
        {isTransgenderCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-pink-900/50 rounded-xl p-6 border border-pink-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-pink-500/20 p-3 rounded-full mt-1">
                <Trophy className="h-8 w-8 text-pink-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Women's Sports Under Threat</h3>
                <p className="text-white/80 mb-4">
                  Liberal policies allowing biological males to compete in women's sports have resulted in 
                  <span className="font-bold text-pink-400"> 138 medals</span> being taken from female athletes since 2015. 
                  These policies ignore biological reality and the inherent physical advantages that come with male puberty.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-pink-400 mb-1">153</p>
                    <p className="text-white/70 text-sm">Biological males in women's sports</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-pink-400 mb-1">138</p>
                    <p className="text-white/70 text-sm">Medals taken from female athletes</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-pink-400 mb-1">66</p>
                    <p className="text-white/70 text-sm">Women's records broken</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  Notable examples include swimming, weightlifting, cycling, and track and field, where biological males 
                  have dominated competitions, often breaking women's records by significant margins. These policies 
                  undermine decades of progress in women's sports.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Drug Crisis Highlight (only shown for drugs category) */}
        {isDrugsCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-blue-900/50 rounded-xl p-6 border border-blue-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full mt-1">
                <Pill className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Canada's Deadly Drug Crisis</h3>
                <p className="text-white/80 mb-4">
                  Liberal "harm reduction" policies have failed to reduce harm, with opioid overdose deaths 
                  <span className="font-bold text-blue-400"> nearly tripling</span> since 2015. Over 40,000 Canadians have lost their lives 
                  to the drug crisis while the government focuses on enabling addiction rather than recovery.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">40,093</p>
                    <p className="text-white/70 text-sm">Opioid deaths since 2015</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">+190%</p>
                    <p className="text-white/70 text-sm">Increase in overdose deaths</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">42</p>
                    <p className="text-white/70 text-sm">Safe injection sites (2023)</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  Despite a 21-fold increase in government-funded "safe injection sites" since 2015, overdose deaths 
                  continue to rise dramatically. The decriminalization of hard drugs in BC has led to increased public 
                  drug use, crime, and disorder in communities across the province.
                </p>
              </div>
            </div>
          </motion.div>
        )}

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

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 mb-12">
              {/* Charts */}
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="space-y-16"
              >
                {category.datasets.map((dataset) => (
                  <motion.div 
                    key={dataset.label} 
                    variants={item}
                    className={`bg-white/5 rounded-xl p-6 ${
                      dataset.label.includes('Ukraine') 
                        ? 'border border-red-500/30' 
                        : isTransgenderCategory 
                          ? 'border border-pink-500/30' 
                          : isDrugsCategory
                            ? 'border border-blue-500/30'
                            : ''
                    }`}
                  >
                    <DataChart dataset={dataset} type={chartType} />
                  </motion.div>
                ))}
              </motion.div>

              {/* Insights */}
              <div className="xl:sticky xl:top-24 h-fit">
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