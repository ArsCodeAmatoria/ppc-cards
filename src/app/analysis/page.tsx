import React, { useState } from 'react';
import { Metadata } from 'next';
import { motion } from 'framer-motion';
import { ChevronDown, BarChart2, LineChart, Info, AlertTriangle, DollarSign, Award, Trophy, Pill, Brain, Lock, Globe, Church, Star, Flag } from 'lucide-react';
import { liberalFailureData, analysisInsights } from '@/data/analysis/liberalFailures';
import { DataChart } from '@/components/analysis/DataChart';
import { InsightsList } from '@/components/analysis/InsightsList';

// Metadata for this page
export const generateMetadata = (): Metadata => {
  return {
    title: "Liberal Failures Analysis | PPC Policy Recommendations",
    description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
    openGraph: {
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      images: [
        {
          url: "/images/analysis-social-card.jpg",
          width: 1200,
          height: 630,
          alt: "PPC Analysis of Liberal Failures",
        },
      ],
    },
    twitter: {
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      images: ["/images/analysis-social-card.jpg"],
    },
  };
};

'use client';

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
  
  // Check if we're in the mental health category
  const isMentalHealthCategory = activeCategory === 'mentalhealth';
  
  // Check if we're in the censorship category
  const isCensorshipCategory = activeCategory === 'censorship';
  
  // Check if we're in the illegal immigration category
  const isIllegalImmigrationCategory = activeCategory === 'illegalimmigration';
  
  // Check if we're in the church burnings category
  const isChurchBurningsCategory = activeCategory === 'churchburnings';
  
  // Check if we're in the anti-semitism category
  const isAntiSemitismCategory = activeCategory === 'antisemitism';
  
  // Check if we're in the islamism category
  const isIslamismCategory = activeCategory === 'islamism';

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

        {/* Mental Health Crisis Highlight (only shown for mental health category) */}
        {isMentalHealthCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-green-900/50 rounded-xl p-6 border border-green-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full mt-1">
                <Brain className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Mental Health Crisis</h3>
                <p className="text-white/80 mb-4">
                  Despite campaign promises to prioritize mental health, the Liberal government has allowed wait times to 
                  <span className="font-bold text-green-400"> more than double</span> since 2015. Canadians in crisis now wait over 41 weeks on average 
                  for mental health services, while youth mental health emergencies have skyrocketed.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">41.2</p>
                    <p className="text-white/70 text-sm">Weeks average wait time</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">+180%</p>
                    <p className="text-white/70 text-sm">Increase in youth ER visits</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">$3.6B</p>
                    <p className="text-white/70 text-sm">Mental health funding gap</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  The mental health funding gap has tripled to $3.6 billion under Liberal governance. Canada now spends only 7% 
                  of healthcare budgets on mental health, compared to 12% in comparable countries, leaving vulnerable Canadians 
                  without the support they desperately need.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Censorship Highlight (only shown for censorship category) */}
        {isCensorshipCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-orange-900/50 rounded-xl p-6 border border-orange-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-orange-500/20 p-3 rounded-full mt-1">
                <Lock className="h-8 w-8 text-orange-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Freedom of Speech Under Attack</h3>
                <p className="text-white/80 mb-4">
                  The Liberal government has introduced 
                  <span className="font-bold text-orange-400"> 5 separate bills</span> aimed at controlling online speech since 2018. 
                  These censorship efforts threaten Canadians' fundamental right to free expression and undermine the open exchange of ideas.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-orange-400 mb-1">90K</p>
                    <p className="text-white/70 text-sm">Content creators affected</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-orange-400 mb-1">$4B+</p>
                    <p className="text-white/70 text-sm">Media bailout funding</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-orange-400 mb-1">+21,150%</p>
                    <p className="text-white/70 text-sm">Increase in flagged posts</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  Bill C-11 subjects 90,000 Canadian content creators to CRTC regulation, threatening their global reach. 
                  Meanwhile, over $4 billion in media bailouts has created a dependent press, and government flagging of 
                  social media posts has increased by over 21,000% since 2015.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Illegal Immigration Highlight (only shown for illegal immigration category) */}
        {isIllegalImmigrationCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-red-800/50 rounded-xl p-6 border border-red-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-red-500/20 p-3 rounded-full mt-1">
                <Globe className="h-8 w-8 text-red-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Border Security Crisis</h3>
                <p className="text-white/80 mb-4">
                  The Liberal government's failure to secure Canada's borders has resulted in 
                  <span className="font-bold text-red-400"> over 138,000 illegal crossings</span> at Roxham Road alone since 2017. 
                  This policy failure has overwhelmed our immigration system and cost taxpayers billions.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">182.6K</p>
                    <p className="text-white/70 text-sm">Asylum claim backlog</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">96.7K</p>
                    <p className="text-white/70 text-sm">Unexecuted deportation orders</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-red-400 mb-1">$2.7B</p>
                    <p className="text-white/70 text-sm">Annual cost to taxpayers</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  The asylum claim backlog has increased by over 960% since 2015, while the number of individuals 
                  ordered deported but still in Canada has more than doubled. The annual cost to Canadian taxpayers 
                  has increased by over 1,200% to $2.7 billion per year.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Church Burnings Highlight (only shown for church burnings category) */}
        {isChurchBurningsCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-amber-900/50 rounded-xl p-6 border border-amber-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-amber-500/20 p-3 rounded-full mt-1">
                <Church className="h-8 w-8 text-amber-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Anti-Christian Hate Crime Crisis</h3>
                <p className="text-white/80 mb-4">
                  Since 2015, over 
                  <span className="font-bold text-amber-400"> 230 churches</span> have been burned or vandalized across Canada, 
                  with a dramatic spike in 2021 following inflammatory rhetoric from government officials. Despite this surge in 
                  anti-Christian hate crimes, government response has been minimal.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-amber-400 mb-1">68</p>
                    <p className="text-white/70 text-sm">Churches attacked in 2021 alone</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-amber-400 mb-1">-57%</p>
                    <p className="text-white/70 text-sm">Decline in arrest rate since 2015</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-amber-400 mb-1">0</p>
                    <p className="text-white/70 text-sm">Government condemnations in 2023</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  While the Liberal government has been quick to condemn hate crimes against other religious communities, 
                  attacks on Christian churches have received minimal official response. The arrest rate for these crimes 
                  has fallen from 42% in 2015 to just 18% in 2023, indicating a concerning lack of priority.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Anti-Semitism Highlight (only shown for anti-semitism category) */}
        {isAntiSemitismCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-blue-800/50 rounded-xl p-6 border border-blue-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-blue-500/20 p-3 rounded-full mt-1">
                <Star className="h-8 w-8 text-blue-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Rising Anti-Semitism Crisis</h3>
                <p className="text-white/80 mb-4">
                  Anti-Semitic incidents have increased by 
                  <span className="font-bold text-blue-400"> 379% since 2015</span>, with a dramatic surge in 2023 
                  following the October 7 Hamas attacks on Israel. Despite this alarming trend, the Liberal government's 
                  response has been inadequate.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">853</p>
                    <p className="text-white/70 text-sm">Anti-Semitic incidents in 2023</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">+408%</p>
                    <p className="text-white/70 text-sm">Increase in violent attacks</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-blue-400 mb-1">128</p>
                    <p className="text-white/70 text-sm">Campus anti-Israel protests in 2023</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  Jewish Canadians are now the most targeted religious group for hate crimes in the country. 
                  Despite this, security funding for Jewish institutions has not kept pace with the dramatic 
                  increase in threats, and the government has failed to adequately condemn anti-Semitism at 
                  pro-Hamas rallies across Canada.
                </p>
              </div>
            </div>
          </motion.div>
        )}

        {/* Islamism Highlight (only shown for islamism category) */}
        {isIslamismCategory && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 bg-gradient-to-r from-purple-900/50 to-green-800/50 rounded-xl p-6 border border-green-500/30"
          >
            <div className="flex items-start gap-4">
              <div className="bg-green-500/20 p-3 rounded-full mt-1">
                <Flag className="h-8 w-8 text-green-400" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white mb-2">Rising Islamism Crisis</h3>
                <p className="text-white/80 mb-4">
                  Pro-Hamas rallies in Canada have increased by 
                  <span className="font-bold text-green-400"> over 6,100% since 2015</span>, with 187 rallies in 2023 alone 
                  following the October 7 attacks on Israel. Meanwhile, government funding to organizations with 
                  documented ties to Islamist groups has increased by over 1,400%.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">$27.8M</p>
                    <p className="text-white/70 text-sm">Funding to Islamist-linked groups in 2023</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">34</p>
                    <p className="text-white/70 text-sm">Islamist-linked advisors to government</p>
                  </div>
                  <div className="bg-white/10 rounded-lg p-4">
                    <p className="text-3xl font-bold text-green-400 mb-1">214</p>
                    <p className="text-white/70 text-sm">Extremism cases under investigation</p>
                  </div>
                </div>
                <p className="text-white/80 text-sm">
                  The Liberal government has consistently downplayed the threat of Islamist extremism while 
                  amplifying other security concerns. The number of individuals with ties to Islamist organizations 
                  serving on government advisory boards has increased by 1,600% since 2015, raising concerns about 
                  ideological influence on policy decisions.
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
                            : isMentalHealthCategory
                              ? 'border border-green-500/30'
                              : isCensorshipCategory
                                ? 'border border-orange-500/30'
                                : isIllegalImmigrationCategory
                                  ? 'border border-red-500/30'
                                  : isChurchBurningsCategory
                                    ? 'border border-amber-500/30'
                                    : isAntiSemitismCategory
                                      ? 'border border-blue-500/30'
                                      : isIslamismCategory
                                        ? 'border border-green-500/30'
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