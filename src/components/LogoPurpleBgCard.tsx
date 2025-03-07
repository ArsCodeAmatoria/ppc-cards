import Image from 'next/image';
import React from 'react';

export const LogoPurpleBgCard: React.FC = () => {
  return (
    <div className="relative w-[1200px] h-[630px] flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-purple-900">
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
            width={600} 
            height={144} 
            priority
            className="h-48 w-auto"
          />
        </div>
        
        {/* Tagline */}
        <p className="text-3xl text-white/90 mt-8 max-w-4xl font-medium">
          Common sense policies for a stronger, freer Canada
        </p>
        
        {/* URL */}
        <div className="absolute bottom-8 text-white/70 text-xl">
          backtest.ca
        </div>
      </div>
    </div>
  );
};

export default LogoPurpleBgCard; 