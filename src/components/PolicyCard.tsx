'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Icons } from '@/components/icons';

// Note: 'key' is a special React prop and should not be included in component props
interface PolicyCardProps {
  title: string;
  description: string;
  icon?: string; // Make icon optional
  href: string;
}

export function PolicyCard({ title, description, icon, href }: PolicyCardProps) {
  // Dynamically get the icon component
  const IconComponent = icon ? Icons[icon as keyof typeof Icons] : null;

  return (
    <Link href={href} className="block h-full">
      <motion.div
        className="h-full p-6 rounded-xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 flex flex-col"
        whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1)' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {IconComponent && (
          <div className="mb-4">
            <IconComponent className="h-8 w-8 text-purple-400" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
        <p className="text-white/80 mb-4 flex-grow">{description}</p>
        <div className="text-purple-400 font-medium flex items-center mt-auto">
          View Details
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </div>
      </motion.div>
    </Link>
  );
}

export default PolicyCard; 