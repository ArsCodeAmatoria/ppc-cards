'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Icons } from '@/components/icons';
import { useReactParams } from '@/utils/useReactParams';

// Add Eye icon which wasn't defined earlier
const DynamicIcon = ({ iconName, className }: { iconName?: string; className?: string }) => {
  if (!iconName || !Icons[iconName as keyof typeof Icons]) {
    return <Icons.FileText className={className} />;
  }
  
  const Icon = Icons[iconName as keyof typeof Icons];
  return <Icon className={className} />;
};

const mediaReformCards = [
  {
    id: 'cbc-funding',
    title: 'End CBC Funding',
    description: 'Eliminate all taxpayer funding to the Canadian Broadcasting Corporation',
    content: 'The PPC will defund the CBC/Radio-Canada, saving taxpayers approximately $1.2 billion annually. This broadcaster has increasingly strayed from its mandate to represent all Canadians, and instead serves as a platform for government narratives.',
    icon: 'DollarSign'
  },
  {
    id: 'privatization',
    title: 'Privatize Broadcasting',
    description: 'Convert public broadcasting to fully private entities',
    content: 'We will initiate the process to privatize CBC/Radio-Canada, allowing it to compete fairly in the media marketplace rather than receiving special treatment through government subsidies.',
    icon: 'Building'
  },
  {
    id: 'media-neutrality',
    title: 'Media Neutrality',
    description: 'Support truly independent journalism without government influence',
    content: 'By ending all media subsidies, we will foster a truly independent press where journalism is accountable to readers and viewers rather than government paymasters. This promotes genuine diversity of opinion and balanced reporting.',
    icon: 'Scale'
  },
  {
    id: 'media-bailouts',
    title: 'End Media Bailouts',
    description: 'Stop government subsidies to private media companies',
    content: 'The PPC will terminate all media bailouts and subsidies to private media organizations. These payments create conflicts of interest and compromise journalistic independence.',
    icon: 'FileText'
  },
  {
    id: 'foreign-ownership',
    title: 'Review Foreign Ownership',
    description: 'Reconsider foreign ownership restrictions in Canadian media',
    content: 'We will review foreign ownership rules in the telecommunications and media industries to increase competition and provide Canadians with more diverse content options.',
    icon: 'Globe'
  },
  {
    id: 'transparency',
    title: 'Media Transparency',
    description: 'Require disclosure of government funding in journalism',
    content: 'Until all media subsidies are eliminated, we will require transparent disclosure of all government funding received by media organizations to help Canadians identify potential conflicts of interest.',
    icon: 'FileText'
  }
];

// This function accepts params properly
function MediaReformContent() {
  // Create a mock params object for this page
  const mockParams = { id: 'key-issues', subId: 'hot-topics', policyId: 'cbc' };
  const params = useReactParams(mockParams);
  
  return (
    <div className="py-12">
      <div className="container mx-auto px-4 max-w-6xl">
        <Link 
          href="/category/key-issues/hot-topics" 
          className="inline-flex items-center text-white/70 hover:text-white mb-8"
        >
          <Icons.ChevronLeft className="mr-2 h-4 w-4" />
          <span>Back to Hot Topics</span>
        </Link>
        
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">Media Reform</h1>
          <p className="text-xl text-white/80">Ending government interference in news media</p>
          
          <div className="mt-8 p-6 bg-white/5 border border-white/10 rounded-xl backdrop-blur-sm">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-white mb-4">Our Position</h2>
              <p className="text-white/90 mb-4">
                The People's Party of Canada believes in a truly free and independent media landscape. 
                Government funding of media, whether through the CBC or subsidies to private outlets, 
                creates conflicts of interest and compromises journalistic integrity.
              </p>
              <p className="text-white/90">
                We advocate for the complete privatization of the CBC and elimination of all media subsidies, 
                allowing a genuinely free press to emerge that serves the interests of Canadians rather than the government.
              </p>
            </div>
            
            <div className="p-4 bg-purple-900/30 rounded-lg border border-white/10 mb-6">
              <p className="italic text-white font-medium">
                "Taxpayers should not fund media that promotes government narratives."
              </p>
            </div>
          </div>
        </div>
        
        <h2 className="text-2xl font-bold text-white mb-6">Key Policy Points</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {mediaReformCards.map((card) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex items-start mb-4">
                <div className="p-3 rounded-lg bg-purple-900/50 mr-4">
                  <DynamicIcon iconName={card.icon} className="w-5 h-5 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">{card.title}</h3>
              </div>
              <p className="text-white/80 mb-4">{card.description}</p>
              <p className="text-white/90 text-sm border-t border-white/10 pt-4">{card.content}</p>
            </motion.div>
          ))}
        </div>
        
        <div className="text-center">
          <Link 
            href="/" 
            className="inline-flex items-center px-6 py-3 rounded-lg bg-purple-600 text-white font-medium hover:bg-purple-700 transition-colors"
          >
            <span>Return to Home</span>
            <Icons.Home className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

// Export the content directly without suspense since we're using a mock param
export default function MediaReformPage() {
  return <MediaReformContent />;
} 