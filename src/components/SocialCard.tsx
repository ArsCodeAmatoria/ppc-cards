import Image from 'next/image';
import React from 'react';

export const SocialCard: React.FC = () => {
  return (
    <div className="relative w-[1200px] h-[630px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-purple-800">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('/images/pattern.svg')] bg-repeat opacity-20"></div>
      </div>
      
      {/* Content container */}
      <div className="z-10 flex flex-col items-center justify-center px-16 text-center">
        {/* Logo */}
        <div className="mb-8">
          <Image 
            src="/images/ppc-banner.png" 
            alt="PPC Logo" 
            width={400} 
            height={96} 
            priority
            className="h-24 w-auto"
          />
        </div>
        
        {/* Title */}
        <h1 className="text-6xl font-bold text-white mb-6">
          Policy Recommendations
        </h1>
        
        {/* Subtitle */}
        <p className="text-3xl text-white/90 mb-10 max-w-4xl">
          Data-driven analysis of Liberal failures and solutions for a stronger Canada
        </p>
        
        {/* Stats */}
        <div className="flex gap-12 mt-4">
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <span className="text-5xl font-bold text-white">8+</span>
            <span className="text-xl text-white/80 mt-2">Crisis Areas</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <span className="text-5xl font-bold text-white">100+</span>
            <span className="text-xl text-white/80 mt-2">Data Points</span>
          </div>
          <div className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl">
            <span className="text-5xl font-bold text-white">50+</span>
            <span className="text-xl text-white/80 mt-2">Policy Solutions</span>
          </div>
        </div>
        
        {/* URL */}
        <div className="absolute bottom-8 text-white/70 text-xl">
          backtest.ca
        </div>
      </div>
    </div>
  );
};

export default SocialCard; 