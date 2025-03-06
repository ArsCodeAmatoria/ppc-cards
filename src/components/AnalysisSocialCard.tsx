import Image from 'next/image';
import React from 'react';
import { BarChart2, AlertTriangle } from 'lucide-react';

export const AnalysisSocialCard: React.FC = () => {
  return (
    <div className="relative w-[1200px] h-[630px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-red-900 via-red-800 to-orange-900">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      {/* Content container */}
      <div className="z-10 flex flex-col items-center justify-center px-16 text-center">
        {/* Logo */}
        <div className="mb-6">
          <Image 
            src="/images/ppc-banner.png" 
            alt="PPC Logo" 
            width={350} 
            height={84} 
            priority
            className="h-20 w-auto"
          />
        </div>
        
        {/* Title */}
        <div className="flex items-center gap-4 mb-6">
          <BarChart2 className="w-12 h-12 text-white" />
          <h1 className="text-6xl font-bold text-white">
            Liberal Failures Analysis
          </h1>
          <AlertTriangle className="w-12 h-12 text-white" />
        </div>
        
        {/* Subtitle */}
        <p className="text-3xl text-white/90 mb-10 max-w-4xl">
          Data-driven analysis of Liberal government failures across multiple sectors
        </p>
        
        {/* Categories */}
        <div className="grid grid-cols-4 gap-4 mt-4">
          {['Economy', 'Immigration', 'Housing', 'Healthcare', 'Crime', 'Freedom', 'Foreign Policy', 'Islamism'].map((category) => (
            <div key={category} className="flex flex-col items-center p-4 bg-white/10 backdrop-blur-sm rounded-xl">
              <span className="text-xl font-medium text-white">{category}</span>
            </div>
          ))}
        </div>
        
        {/* Stats */}
        <div className="flex gap-12 mt-8">
          <div className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl">
            <span className="text-4xl font-bold text-white">8 Years</span>
            <span className="text-lg text-white/80 mt-1">of Liberal Failures</span>
          </div>
          <div className="flex flex-col items-center p-5 bg-white/10 backdrop-blur-sm rounded-xl">
            <span className="text-4xl font-bold text-white">100+ Charts</span>
            <span className="text-lg text-white/80 mt-1">Data Visualizations</span>
          </div>
        </div>
        
        {/* URL */}
        <div className="absolute bottom-8 text-white/70 text-xl">
          ppc-policy.ca/analysis
        </div>
      </div>
    </div>
  );
};

export default AnalysisSocialCard; 