'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { AlertTriangle } from 'lucide-react';

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

// Controversial issues data
const controversialIssues = {
  id: 'controversial',
  title: '🚨 Controversial Issues',
  description: 'Hot-topic policies and positions on divisive issues',
  icon: 'AlertTriangle',
  subcategories: [
    {
      id: 'hot-topics',
      title: 'Hot Topics',
      description: 'Policy positions on controversial issues',
      policies: [
        {
          id: 'immigration',
          title: '🚫 No to Mass Immigration',
          description: 'Immigration policy reform',
          content: ['Reduce immigration numbers', 'Focus on economic immigrants', 'Strengthen border security']
        },
        {
          id: 'unmarked-graves',
          title: '⚠️ No Evidence of Unmarked Graves',
          description: 'Challenging mainstream narratives',
          content: ['Question the validity of unmarked grave claims', 'Call for thorough investigation']
        },
        {
          id: 'ukraine',
          title: '🇺🇦 No More Funding for Ukraine',
          description: 'Foreign policy position',
          content: ['End financial support for Ukraine', 'Focus on domestic needs first']
        },
        {
          id: 'covid',
          title: '💉 COVID-19 Mandate Opposition',
          description: 'Position on health mandates',
          content: ['Oppose vaccine mandates', 'Advocate for personal health choice']
        },
        {
          id: 'cbc',
          title: '❌ Defunding the CBC',
          description: 'Media reform proposal',
          content: ['End government funding of CBC', 'Privatize public broadcasting']
        },
        {
          id: 'gender',
          title: '🏳️‍🌈 Opposition to Radical Gender Ideology in Schools',
          description: 'Education policy position',
          content: ['Remove gender ideology from curriculum', 'Restore parental rights in education']
        },
        {
          id: 'guns',
          title: '🔫 Gun Rights & Self-Defense',
          description: 'Position on firearms ownership',
          content: ['Support legal gun ownership', 'Advocate for self-defense rights']
        }
      ]
    }
  ]
};

export default function Home() {
  return (
    <div className="container mx-auto max-w-6xl px-4 py-8">
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-ppc-purple mb-4"
        >
          PPC Policy Explorer
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Explore policies, positions, and platforms through an interactive card-based interface.
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
      
      {/* Controversial Issues Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-16 border-t border-white/20 pt-8"
      >
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center mb-4">
            <AlertTriangle className="w-8 h-8 text-red-500 mr-3" />
            <h2 className="text-3xl font-bold text-ppc-purple">Controversial Issues</h2>
          </div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our bold stances on contentious topics that other parties avoid discussing.
          </p>
        </div>
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
        >
          {controversialIssues.subcategories[0].policies.map((policy) => (
            <motion.div
              key={policy.id}
              variants={itemVariants}
              className="bg-white/5 rounded-lg border border-white/10 p-4 hover:bg-white/10 transition-all"
            >
              <h3 className="text-xl font-bold mb-2">{policy.title}</h3>
              <p className="text-white/80 mb-4">{policy.description}</p>
              <ul className="space-y-2">
                {policy.content.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-red-400 mr-2">•</span>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
