'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/icons';
import Image from 'next/image';
import * as React from 'react';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

// Utility function to render dynamic icons
const DynamicIcon = ({ iconName, className }: { iconName?: string; className?: string }) => {
  if (!iconName || !Icons[iconName as keyof typeof Icons]) {
    return <Icons.FileText className={className} />;
  }
  
  const Icon = Icons[iconName as keyof typeof Icons];
  return <Icon className={className} />;
};

// Key issues data
const keyIssues = {
  id: 'key-issues',
  title: 'Key Issues',
  description: 'Important policy positions on significant topics',
  icon: 'AlertTriangle',
  subcategories: [
    {
      id: 'hot-topics',
      title: 'Hot Topics',
      description: 'Policy positions on key issues',
      policies: [
        {
          id: 'immigration',
          title: 'Immigration Reform',
          description: 'A principled approach to immigration that puts Canadians first',
          icon: 'Users',
          content: ['Reduce immigration numbers', 'Focus on economic immigrants', 'Strengthen border security'],
          details: 'The PPC supports significantly reduced immigration levels to ensure proper integration and economic benefit to Canadians. We prioritize merit-based selection that benefits our economy and society.',
          quote: 'Mass immigration costs Canadian taxpayers billions of dollars and applies downward pressure on wages.'
        },
        {
          id: 'unmarked-graves',
          title: 'Indigenous Policy Reform',
          description: 'Challenging mainstream narratives with evidence-based policy',
          icon: 'AlertOctagon',
          content: ['Question the validity of unmarked grave claims', 'Call for thorough investigation', 'Promote accountability in reporting'],
          details: 'We support thorough investigation of claims regarding unmarked graves and believe in evidence-based policy discussions that prioritize truth over politically-motivated narratives.',
          quote: 'Canadians deserve honest, evidence-based discussions on all indigenous issues.'
        },
        {
          id: 'foreign-policy',
          title: 'Foreign Policy Focus',
          description: 'Canada-first approach to international relations',
          icon: 'MapPin',
          content: ['End financial support for Ukraine', 'Focus on domestic needs first', 'Develop independent foreign policy'],
          details: "The PPC believes Canada should avoid foreign entanglements that do not directly benefit Canadians, putting our country's interests first rather than following other nations into conflict.",
          quote: 'Canadian taxpayer dollars should be spent on Canadian priorities.'
        },
        {
          id: 'covid',
          title: 'Health Freedom',
          description: 'Protecting individual medical autonomy',
          icon: 'Syringe',
          content: ['Oppose vaccine mandates', 'Advocate for personal health choice', 'Support medical privacy'],
          details: 'We firmly believe in bodily autonomy and oppose any government mandates for medical procedures. Health decisions should remain between patients and their doctors.',
          quote: 'No Canadian should ever be coerced into medical treatment against their will.'
        },
        {
          id: 'cbc',
          title: 'Media Reform',
          description: 'Ending government interference in news media',
          icon: 'Tv2',
          content: ['End government funding of CBC', 'Privatize public broadcasting', 'Support media neutrality'],
          details: 'The PPC supports ending all government funding to the CBC and other media outlets. A truly free press cannot exist when dependent on government subsidies.',
          quote: 'Taxpayers should not fund media that promotes government narratives.'
        },
        {
          id: 'gender',
          title: 'Education Policy',
          description: 'Restoring parental rights in education',
          icon: 'School',
          content: ['Remove gender ideology from curriculum', 'Restore parental rights in education', 'Focus on academic excellence'],
          details: "We believe parents should be the primary decision-makers in their children's education. Schools should focus on academic excellence rather than social engineering.",
          quote: 'Children should be protected from radical gender ideology in schools.'
        },
        {
          id: 'guns',
          title: 'Self-Defense Rights',
          description: 'Supporting legal gun ownership for law-abiding citizens',
          icon: 'Shield',
          content: ['Support legal gun ownership', 'Advocate for self-defense rights', 'Oppose ineffective gun control'],
          details: 'The PPC supports the rights of law-abiding Canadians to own firearms for hunting, sport shooting, and self-defense while focusing enforcement efforts on criminals.',
          quote: 'Law-abiding gun owners deserve respect, not punishment.'
        }
      ]
    }
  ],
  relatedTopics: [
    {
      title: 'Housing Affordability',
      icon: 'LandPlot',
      description: 'Making homeownership accessible again'
    },
    {
      title: 'Economic Reform',
      icon: 'DollarSign',
      description: 'Balancing budgets and reducing taxation'
    },
    {
      title: 'Banking Reform',
      icon: 'PiggyBank',
      description: 'Fighting inflation and financial mismanagement'
    },
    {
      title: 'Environmental Policy',
      icon: 'Leaf',
      description: 'Practical approaches to conservation'
    },
    {
      title: 'Healthcare Improvement',
      icon: 'HeartPulse',
      description: 'Enhancing service without increased spending'
    },
    {
      title: 'Justice Reform',
      icon: 'Gavel',
      description: 'Stronger consequences for violent crime'
    },
    {
      title: 'Education Excellence',
      icon: 'GraduationCap',
      description: 'Focusing on core academic subjects'
    }
  ]
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-indigo-900"></div>
        <div className="absolute inset-0 opacity-10 bg-[url('/mesh-pattern.svg')]"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Canadian Values. <br />Canadian Policies.
              </h1>
              <p className="text-lg md:text-xl text-white/90 mb-8">
                Explore the People's Party of Canada platform - policies that prioritize freedom, personal responsibility, fairness and respect.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <Link
                  href="#categories"
                  className="px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
                >
                  Explore Policies
                </Link>
                <Link
                  href="#key-issues"
                  className="px-6 py-3 rounded-lg bg-white/10 text-white font-medium hover:bg-white/20 transition-colors backdrop-blur-sm"
                >
                  Key Issues
                </Link>
              </div>
            </motion.div>
            <div className="flex justify-center md:justify-end">
              <div className="w-64 h-64 md:w-80 md:h-80 relative">
                <Image
                  src="/ppc-party.png"
                  alt="PPC Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <div id="categories" className="py-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-4 bg-white/10 px-4 py-2 rounded-full"
            >
              <Icons.FileText className="w-5 h-5 text-purple-400 mr-2" />
              <span className="text-white font-medium">Explore All Policies</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-white mb-4"
            >
              Policy Categories
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Explore our comprehensive platform by category
            </motion.p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {categories.map((category) => (
              <motion.div key={category.id} variants={itemVariants}>
                <PolicyCard
                  title={category.title}
                  description={category.description}
                  icon={category.icon}
                  href={`/category/${category.id}`}
                />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
      
      {/* Key Issues Section */}
      <div id="key-issues" className="py-16 bg-gradient-to-b from-purple-900/30 to-purple-900/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-4 bg-white/10 px-4 py-2 rounded-full"
            >
              <Icons.AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-white font-medium">Key Policy Positions</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-white mb-4"
            >
              Issues That Matter
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-white/80 max-w-2xl mx-auto"
            >
              Explore our positions on important and often controversial topics
            </motion.p>
          </div>
          
          {/* Key Issues Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            {keyIssues.subcategories.map((subcategory) => (
              <div key={subcategory.id} className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm">
                {subcategory.policies.map((policy) => (
                  <Link key={policy.id} href={`/category/${keyIssues.id}/${subcategory.id}/${policy.id}`} className="block mb-8 last:mb-0">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-purple-900/50 mr-4">
                        <DynamicIcon iconName={policy.icon} className="w-5 h-5 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-white">{policy.title}</h3>
                    </div>
                    <p className="text-white/80 mb-4 pl-14">{policy.description}</p>
                    <div className="pl-14">
                      <div className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white group">
                        <span>Read more</span>
                        <Icons.ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Related Topics Section */}
      <div className="container mx-auto max-w-6xl px-4 py-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-ppc-purple mb-4"
          >
            Explore More Topics
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
          >
            Discover our positions on other important issues facing Canadians
          </motion.p>
        </div>
        
        {/* Related Topics */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-6 text-center">Related Topics</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {keyIssues.relatedTopics.map((topic, index) => (
              <Link key={index} href="#" className="bg-white/5 border border-white/10 hover:bg-white/10 transition-colors rounded-lg p-4 backdrop-blur-sm">
                <div className="flex items-center mb-3">
                  <div className="p-2 rounded-md bg-purple-900/50 mr-3">
                    <DynamicIcon iconName={topic.icon} className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="text-md font-semibold text-white">{topic.title}</h3>
                </div>
                <p className="text-sm text-white/80 pl-9">{topic.description}</p>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
