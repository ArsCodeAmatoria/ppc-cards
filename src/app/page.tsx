'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, AlertTriangle } from 'lucide-react';
import { categories } from '@/data/policies';
import { PolicyCard } from '@/components/PolicyCard';

export default function Home() {
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
    <main className="flex min-h-screen flex-col items-center justify-between">
      {/* Hero Section */}
      <div className="w-full bg-gradient-to-b from-purple-900 to-purple-800 py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="max-w-4xl mx-auto"
          >
            <motion.div variants={item}>
              <Image
                src="/images/ppc-banner.png"
                alt="PPC Logo"
                width={300}
                height={100}
                priority
                className="mx-auto mb-8"
              />
            </motion.div>
            <motion.h1 
              variants={item}
              className="text-3xl md:text-5xl font-bold text-white mb-6"
            >
              People's Party of Canada
            </motion.h1>
            <motion.p 
              variants={item}
              className="text-lg md:text-xl text-white/80 mb-8"
            >
              Common sense policies for a stronger, freer Canada
            </motion.p>
            <motion.div variants={item}>
              <Link 
                href="#policies" 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-purple-900 bg-white hover:bg-gray-100 transition-colors"
              >
                Explore Our Policies
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Data Analysis Feature Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-900 to-purple-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <BarChart2 className="h-6 w-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Data-Driven Analysis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Liberal Government Failures: By the Numbers
                </h2>
                <p className="text-white/80 mb-6">
                  Explore our comprehensive data analysis of Liberal government performance since 2015. 
                  See how their policies have affected the economy, immigration, healthcare, and public safety.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <TrendingUp className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white">Economic Impact</h4>
                      <p className="text-white/70 text-sm">Federal debt nearly doubled, inflation at 40-year highs</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-purple-400 mt-1" />
                    <div>
                      <h4 className="font-bold text-white">Housing Crisis</h4>
                      <p className="text-white/70 text-sm">Housing prices up nearly 60% since 2015</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-purple-900/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Federal Debt (Billions CAD)</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[50%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[52%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[53%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[55%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[56%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[88%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[95%] bg-purple-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[97%] bg-purple-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Department of Finance Canada, Fiscal Reference Tables
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Policy */}
      <div className="w-full py-16 bg-gradient-to-b from-purple-800 to-purple-700">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Policy</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Our commitment to media reform is a cornerstone of our platform for a freer Canada
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {/* Media Reform Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl overflow-hidden shadow-xl"
            >
              <Link href="/category/governance/media-reform" className="block p-6 md:p-8">
                <div className="flex flex-col md:flex-row items-start gap-6">
                  <div className="bg-white/10 p-4 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8 text-white">
                      <path d="M4.9 19.1C1 15.2 1 8.8 4.9 4.9"></path>
                      <path d="M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"></path>
                      <circle cx="12" cy="12" r="2"></circle>
                      <path d="M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"></path>
                      <path d="M19.1 4.9C23 8.8 23 15.1 19.1 19"></path>
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Media Reform</h3>
                    <p className="text-white/80 mb-4">
                      Ending government interference in news media and ensuring Canadians have access to diverse viewpoints.
                    </p>
                    <div className="flex items-center text-white font-medium">
                      View Details
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Policy Categories */}
      <div id="policies" className="w-full py-16 bg-gradient-to-b from-purple-700 to-purple-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Policy Platform</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Explore our comprehensive policy platform designed to make Canada stronger, freer, and more prosperous
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                whileHover={{ scale: 1.03 }}
                className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-xl overflow-hidden shadow-xl"
              >
                <Link href={`/category/${category.id}`} className="block p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{category.title}</h3>
                  <p className="text-white/80 mb-4">{category.description}</p>
                  <div className="flex items-center text-white font-medium">
                    Explore Policies
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Policies */}
      <div className="w-full py-16 bg-gradient-to-b from-purple-900 to-purple-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Featured Policies</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Key policies that define our vision for Canada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Get a few featured policies from different categories */}
            {categories.flatMap(category => 
              category.subcategories.flatMap(subcategory => 
                subcategory.policies.slice(0, 1).map(policy => (
                  <PolicyCard
                    key={`${category.id}-${subcategory.id}-${policy.id}`}
                    title={policy.title}
                    description={policy.description}
                    icon={policy.icon}
                    href={`/category/${category.id}/${subcategory.id}/${policy.id}`}
                  />
                ))
              )
            ).slice(0, 6)}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-8 bg-purple-950 text-white/80">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} People's Party of Canada. All rights reserved.</p>
          <p className="mt-2 text-sm">This is a demonstration website. Not affiliated with the actual PPC.</p>
        </div>
      </footer>
    </main>
  );
} 