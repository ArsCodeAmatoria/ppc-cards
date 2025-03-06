'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  AlertTriangle, 
  Users, 
  AlertOctagon, 
  MapPin,
  Syringe, 
  Tv2, 
  School, 
  Shield, 
  ChevronRight,
  LandPlot,
  ArrowRight,
  Bank,
  DollarSign,
  Leaf,
  HeartPulse,
  Gavel,
  GraduationCap
} from 'lucide-react';
import Image from 'next/image';

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
          details: 'The PPC believes Canada should avoid foreign entanglements that do not directly benefit Canadians, putting our country's interests first rather than following other nations into conflict.',
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
          details: 'We believe parents should be the primary decision-makers in their children's education. Schools should focus on academic excellence rather than social engineering.',
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
      icon: 'Bank',
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
  // Function to render the appropriate icon component
  const renderIcon = (iconName: string, size = 24, className = '') => {
    const iconMap: Record<string, React.ReactNode> = {
      'Users': <Users size={size} className={className} />,
      'AlertOctagon': <AlertOctagon size={size} className={className} />,
      'MapPin': <MapPin size={size} className={className} />,
      'Syringe': <Syringe size={size} className={className} />,
      'Tv2': <Tv2 size={size} className={className} />,
      'School': <School size={size} className={className} />,
      'Shield': <Shield size={size} className={className} />,
      'LandPlot': <LandPlot size={size} className={className} />,
      'Bank': <Bank size={size} className={className} />,
      'DollarSign': <DollarSign size={size} className={className} />,
      'Leaf': <Leaf size={size} className={className} />,
      'HeartPulse': <HeartPulse size={size} className={className} />,
      'Gavel': <Gavel size={size} className={className} />,
      'GraduationCap': <GraduationCap size={size} className={className} />,
      'AlertTriangle': <AlertTriangle size={size} className={className} />
    };
    
    return iconMap[iconName] || <AlertTriangle size={size} className={className} />;
  };
  
  return (
    <>
      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-b from-[#5a3d9a] to-[#442d7b] mb-16">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-[url('/ppc.jpg')] bg-cover bg-center" />
        </div>
        <div className="container mx-auto max-w-6xl px-4 py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight"
              >
                Common Sense Policies for <span className="text-red-400">Canadian</span> Values
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-xl text-white/90 mb-8"
              >
                Explore policy positions that put Canadians first through our interactive platform.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="flex flex-wrap gap-4"
              >
                <Link 
                  href="#categories"
                  className="px-6 py-3 bg-white text-[#442d7b] rounded-lg font-semibold hover:bg-white/90 transition-colors flex items-center"
                >
                  Explore Policies
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
                <Link 
                  href="#issues"
                  className="px-6 py-3 bg-white/10 text-white rounded-lg font-semibold hover:bg-white/20 transition-colors"
                >
                  Key Issues
                </Link>
              </motion.div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.3 }}
                className="w-64 h-64 relative"
              >
                <Image 
                  src="/ppc-official.svg" 
                  alt="PPC Logo" 
                  width={256} 
                  height={256}
                  className="object-contain"
                  priority
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-[#442d7b] to-transparent"></div>
      </div>

      {/* Categories Section */}
      <div id="categories" className="container mx-auto max-w-6xl px-4 py-8 mb-16">
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-3xl font-bold text-ppc-purple mb-4"
          >
            Policy Categories
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mx-auto"
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
      
      {/* Key Issues Section */}
      <div id="issues" className="py-16 bg-gradient-to-b from-[#442d7b]/30 to-[#442d7b]/10 backdrop-blur-sm">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="inline-flex items-center justify-center mb-4 bg-white/10 px-4 py-2 rounded-full"
            >
              <AlertTriangle className="w-5 h-5 text-red-400 mr-2" />
              <span className="text-white font-medium">Key Policy Positions</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl font-bold text-ppc-purple mb-4"
            >
              Issues That Matter
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-slate-600 max-w-2xl mx-auto"
            >
              Our straightforward positions on topics that impact Canadians
            </motion.p>
          </div>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {keyIssues.subcategories[0].policies.map((policy) => (
              <motion.div
                key={policy.id}
                variants={itemVariants}
              >
                <Link href={`/issues/${policy.id}`} className="block h-full">
                  <div className="bg-white/10 backdrop-blur-sm h-full rounded-xl border border-white/20 p-6 hover:bg-white/15 hover:border-white/30 transition-all hover:shadow-lg hover:shadow-[#442d7b]/10 hover:-translate-y-1 duration-300">
                    <div className="flex items-center mb-4">
                      <div className="p-3 rounded-lg bg-[#442d7b] mr-4">
                        {renderIcon(policy.icon, 20, "text-white")}
                      </div>
                      <h3 className="text-xl font-bold text-white">{policy.title}</h3>
                    </div>
                    
                    <p className="text-white/80 mb-4">{policy.description}</p>
                    
                    <div className="mb-6 p-4 bg-white/5 rounded-lg border border-white/10">
                      <p className="text-white/90 italic text-sm">"{policy.quote}"</p>
                    </div>
                    
                    <div className="space-y-2 mb-6">
                      {policy.content.map((point, index) => (
                        <div key={index} className="flex items-start">
                          <div className="text-red-400 mr-2 mt-1">•</div>
                          <p className="text-white/80 text-sm">{point}</p>
                        </div>
                      ))}
                    </div>
                    
                    <div className="flex justify-end mt-auto pt-4 border-t border-white/10">
                      <div className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white group">
                        <span>Read more</span>
                        <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
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
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {keyIssues.relatedTopics.map((topic, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
            >
              <Link href="#" className="block h-full">
                <div className="bg-white/5 backdrop-blur-sm h-full rounded-lg border border-white/10 p-4 hover:bg-white/10 hover:border-white/20 transition-all">
                  <div className="flex items-center mb-3">
                    <div className="p-2 rounded-md bg-[#442d7b]/70 mr-3">
                      {renderIcon(topic.icon, 16, "text-white")}
                    </div>
                    <h3 className="text-md font-semibold text-white">{topic.title}</h3>
                  </div>
                  <p className="text-white/70 text-sm">{topic.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
}
