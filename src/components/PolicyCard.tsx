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
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-lg border-2 border-ppc-purple/20 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="flex items-center p-4 border-b border-slate-100 bg-ppc-purple/5">
          <div className="p-2 bg-ppc-purple/10 rounded-lg mr-4">
            <IconComponent className="w-6 h-6 text-ppc-purple" />
          </div>
          <h3 className="text-lg font-semibold text-ppc-purple">{title}</h3>
        </div>
        <div className="p-4">
          <p className="text-sm text-slate-600">{description}</p>
        </div>
      </motion.div>
    </Link>
  );
};

export default PolicyCard; 