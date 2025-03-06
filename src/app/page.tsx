import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, BarChart2, TrendingUp, AlertTriangle, Trophy, Pill, Brain, Lock, Globe, Church, Star, Flag } from 'lucide-react';
import { categories } from '@/data/policies';
import { PolicyCard } from '@/components/PolicyCard';

// Metadata for this page
export const generateMetadata = (): Metadata => {
  return {
    title: "PPC Policy Recommendations | Home",
    description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
    openGraph: {
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
      images: [
        {
          url: "/images/ppc-social-card.jpg",
          width: 1200,
          height: 630,
          alt: "PPC Policy Recommendations",
        },
      ],
    },
    twitter: {
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
      images: ["/images/ppc-social-card.jpg"],
    },
  };
};

'use client';

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

      {/* Transgender Policy Analysis Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-pink-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className="h-6 w-6 text-pink-400" />
                  <h3 className="text-xl font-bold text-white">Women's Sports Under Threat</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Biological Males in Women's Sports
                </h2>
                <p className="text-white/80 mb-6">
                  Liberal policies allowing biological males to compete in women's sports have resulted in 
                  138 medals being taken from female athletes since 2015. These policies ignore biological 
                  reality and the inherent physical advantages that come with male puberty.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-500/20 p-1 rounded-full mt-1">
                      <span className="text-pink-400 font-bold">153</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Males in Women's Sports</h4>
                      <p className="text-white/70 text-sm">Cumulative since 2015, with numbers accelerating each year</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-pink-500/20 p-1 rounded-full mt-1">
                      <span className="text-pink-400 font-bold">66</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Women's Records Broken</h4>
                      <p className="text-white/70 text-sm">By biological males, many by significant margins</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-pink-600 hover:bg-pink-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-pink-900/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Medals Won by Biological Males in Women's Events</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[2%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[6%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[10%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[18%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[28%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[12%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[42%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[64%] bg-pink-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[94%] bg-pink-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Compiled from sports federation records and competition results
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Drug Crisis Analysis Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-blue-900">
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
                  <Pill className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Canada's Deadly Drug Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Liberal "Harm Reduction" Has Failed
                </h2>
                <p className="text-white/80 mb-6">
                  Liberal policies have led to a catastrophic increase in drug overdose deaths, with over 40,000 
                  Canadians lost since 2015. Despite a 21-fold increase in "safe injection sites," deaths continue 
                  to rise as the government enables addiction rather than focusing on recovery.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                      <span className="text-blue-400 font-bold">+190%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Overdose Death Increase</h4>
                      <p className="text-white/70 text-sm">Deaths have nearly tripled since 2015</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                      <span className="text-blue-400 font-bold">+104%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Drug-Related Crime</h4>
                      <p className="text-white/70 text-sm">Crime has more than doubled since 2015</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-blue-900/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Opioid Overdose Deaths</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[35%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[37%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[50%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[54%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[47%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[76%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[93%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[96%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[100%] bg-blue-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Public Health Agency of Canada, Special Advisory Committee on the Epidemic of Opioid Overdoses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mental Health Crisis Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-green-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm"
          >
            <div className="flex flex-col md:flex-row-reverse items-center gap-8">
              <div className="md:w-1/2">
                <div className="flex items-center gap-2 mb-4">
                  <Brain className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Mental Health Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Broken Promises on Mental Health
                </h2>
                <p className="text-white/80 mb-6">
                  Despite campaign promises to prioritize mental health, the Liberal government has allowed wait times to 
                  more than double since 2015. Canadians in crisis now wait over 41 weeks on average for mental health 
                  services, while youth mental health emergencies have skyrocketed by 180%.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded-full mt-1">
                      <span className="text-green-400 font-bold">41.2</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Weeks Average Wait Time</h4>
                      <p className="text-white/70 text-sm">More than doubled since 2015</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded-full mt-1">
                      <span className="text-green-400 font-bold">+23%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Suicide Increase</h4>
                      <p className="text-white/70 text-sm">Over 5,400 Canadians lost in 2023</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-green-900/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Youth Mental Health ER Visits (Thousands)</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[36%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[39%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[45%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[52%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[58%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[62%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[75%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[87%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[100%] bg-green-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Canadian Institute for Health Information, National Ambulatory Care Reporting System
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Censorship Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-orange-900">
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
                  <Lock className="h-6 w-6 text-orange-400" />
                  <h3 className="text-xl font-bold text-white">Freedom of Speech Under Attack</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Liberal Censorship Agenda
                </h2>
                <p className="text-white/80 mb-6">
                  The Liberal government has introduced 5 separate bills aimed at controlling online speech since 2018. 
                  These censorship efforts threaten Canadians' fundamental right to free expression and undermine 
                  the open exchange of ideas essential to democracy.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500/20 p-1 rounded-full mt-1">
                      <span className="text-orange-400 font-bold">90K</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Content Creators Affected</h4>
                      <p className="text-white/70 text-sm">By Bill C-11's CRTC regulations</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-orange-500/20 p-1 rounded-full mt-1">
                      <span className="text-orange-400 font-bold">$4B+</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Media Bailout Funding</h4>
                      <p className="text-white/70 text-sm">Creating a dependent press</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-orange-600 hover:bg-orange-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-orange-900/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Social Media Posts Flagged by Government (Thousands)</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[1%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[2%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[3%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[8%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[20%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[37%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[52%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[75%] bg-orange-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[100%] bg-orange-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Access to Information Requests, Heritage Canada and Public Safety Canada
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Illegal Immigration Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-red-800">
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
                  <Globe className="h-6 w-6 text-red-400" />
                  <h3 className="text-xl font-bold text-white">Border Security Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Illegal Immigration Failure
                </h2>
                <p className="text-white/80 mb-6">
                  The Liberal government's failure to secure Canada's borders has resulted in over 138,000 illegal 
                  crossings at Roxham Road alone since 2017, overwhelming our immigration system and costing 
                  taxpayers billions of dollars.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/20 p-1 rounded-full mt-1">
                      <span className="text-red-400 font-bold">960%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Asylum Backlog Increase</h4>
                      <p className="text-white/70 text-sm">Since 2015 under Liberal governance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-500/20 p-1 rounded-full mt-1">
                      <span className="text-red-400 font-bold">$2.7B</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Annual Cost</h4>
                      <p className="text-white/70 text-sm">To Canadian taxpayers in 2023</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-red-800/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Roxham Road Illegal Crossings (Thousands)</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[5%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[14%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[47%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[49%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[40%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[9%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[21%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[100%] bg-red-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[61%] bg-red-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Immigration, Refugees and Citizenship Canada, Canada Border Services Agency
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Church Burnings Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-amber-800">
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
                  <Church className="h-6 w-6 text-amber-400" />
                  <h3 className="text-xl font-bold text-white">Anti-Christian Hate Crime Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Church Burnings Ignored
                </h2>
                <p className="text-white/80 mb-6">
                  Since 2015, over 230 churches have been burned or vandalized across Canada, with a dramatic 
                  spike in 2021. Despite this surge in anti-Christian hate crimes, the Liberal government's 
                  response has been minimal, with zero official condemnations in 2023.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500/20 p-1 rounded-full mt-1">
                      <span className="text-amber-400 font-bold">194%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Increase in Anti-Christian Hate Crimes</h4>
                      <p className="text-white/70 text-sm">Since 2015 under Liberal governance</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-amber-500/20 p-1 rounded-full mt-1">
                      <span className="text-amber-400 font-bold">18%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Arrest Rate for Church Attacks</h4>
                      <p className="text-white/70 text-sm">Down from 42% in 2015</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-amber-800/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Churches Burned or Vandalized</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[9%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[13%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[18%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[22%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[31%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[41%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[100%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[62%] bg-amber-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[54%] bg-amber-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Compiled from police reports, news sources, and religious organization records
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Anti-Semitism Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-blue-800">
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
                  <Star className="h-6 w-6 text-blue-400" />
                  <h3 className="text-xl font-bold text-white">Rising Anti-Semitism Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Jewish Canadians Under Threat
                </h2>
                <p className="text-white/80 mb-6">
                  Anti-Semitic incidents have increased by 379% since 2015, with a dramatic surge in 2023 
                  following the October 7 Hamas attacks. Despite Jewish Canadians now being the most targeted 
                  religious group, the Liberal government's response has been inadequate.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                      <span className="text-blue-400 font-bold">853</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Anti-Semitic Incidents</h4>
                      <p className="text-white/70 text-sm">Reported in 2023 alone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-blue-500/20 p-1 rounded-full mt-1">
                      <span className="text-blue-400 font-bold">408%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Increase in Violent Attacks</h4>
                      <p className="text-white/70 text-sm">Since 2015 under Liberal governance</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-blue-800/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Anti-Semitic Incidents in Canada</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[21%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[26%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[29%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[40%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[36%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[39%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[47%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[58%] bg-blue-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[100%] bg-blue-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: B'nai Brith Canada Annual Audit of Antisemitic Incidents
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Islamism Section */}
      <section className="w-full py-16 bg-gradient-to-r from-purple-800 to-green-800">
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
                  <Flag className="h-6 w-6 text-green-400" />
                  <h3 className="text-xl font-bold text-white">Rising Islamism Crisis</h3>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Extremism Unchecked
                </h2>
                <p className="text-white/80 mb-6">
                  Pro-Hamas rallies in Canada have increased by over 6,100% since 2015, with 187 rallies in 2023 
                  alone following the October 7 attacks. Meanwhile, government funding to organizations with 
                  documented ties to Islamist groups has increased by over 1,400%.
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded-full mt-1">
                      <span className="text-green-400 font-bold">$27.8M</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Funding to Islamist-Linked Groups</h4>
                      <p className="text-white/70 text-sm">In 2023 alone</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-green-500/20 p-1 rounded-full mt-1">
                      <span className="text-green-400 font-bold">1,600%</span>
                    </div>
                    <div>
                      <h4 className="font-bold text-white">Increase in Islamist-Linked Advisors</h4>
                      <p className="text-white/70 text-sm">Since 2015 under Liberal governance</p>
                    </div>
                  </div>
                </div>
                
                <Link 
                  href="/analysis" 
                  className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg transition-colors"
                >
                  View Full Analysis
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              
              <div className="md:w-1/2 flex justify-center">
                <div className="relative w-full max-w-md aspect-[4/3] bg-gradient-to-br from-purple-700/50 to-green-800/50 rounded-xl overflow-hidden p-4">
                  <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
                  <div className="h-full flex flex-col">
                    <div className="bg-white/10 rounded-lg p-3 mb-3">
                      <h4 className="text-white font-medium text-sm mb-1">Pro-Hamas Rallies in Canada</h4>
                      <div className="h-40 relative">
                        <div className="absolute bottom-0 left-0 w-[10%] h-[2%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[12%] w-[10%] h-[3%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[24%] w-[10%] h-[4%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[36%] w-[10%] h-[6%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[48%] w-[10%] h-[9%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[60%] w-[10%] h-[7%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[72%] w-[10%] h-[14%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[84%] w-[10%] h-[17%] bg-green-400 rounded-t"></div>
                        <div className="absolute bottom-0 left-[96%] w-[10%] h-[100%] bg-green-400 rounded-t"></div>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span className="text-white/60 text-xs">2015</span>
                        <span className="text-white/60 text-xs">2023</span>
                      </div>
                    </div>
                    <div className="text-white/80 text-xs">
                      Source: Compiled from police reports, news sources, and community organizations
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