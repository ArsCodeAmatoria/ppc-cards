'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import * as icons from 'lucide-react';

// Note: 'key' is a special React prop and should not be included in component props
interface PolicyCardProps {
  title: string;
  description: string;
  icon?: string; // Make icon optional
  href: string;
}

const PolicyCard = ({ title, description, icon = 'FileText', href }: PolicyCardProps) => {
  // Dynamically get the icon component with a default
  const IconComponent = (icons as any)[icon] || icons.FileText;

  return (
    <Link href={href} className="block">
      <motion.div
        whileHover={{ scale: 1.03, y: -5 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white/5 rounded-lg border border-white/20 hover:border-white/30 hover:bg-white/10 transition-all p-6"
      >
        <div className="flex items-start mb-4">
          <div className="p-3 bg-white/10 rounded-lg mr-4 flex-shrink-0">
            <IconComponent className="w-6 h-6 text-white" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-white/80">{description}</p>
          </div>
        </div>
        <div className="mt-4 flex justify-end">
          <div className="inline-flex items-center text-sm font-medium text-white/70 hover:text-white">
            <span>View Details</span>
            <icons.ArrowRight className="ml-2 w-4 h-4" />
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PolicyCard; 