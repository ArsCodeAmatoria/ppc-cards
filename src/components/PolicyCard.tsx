import { motion } from 'framer-motion';
import { Icon } from 'lucide-react';
import Link from 'next/link';
import * as icons from 'lucide-react';

interface PolicyCardProps {
  title: string;
  description: string;
  icon: string;
  href: string;
}

const PolicyCard = ({ title, description, icon, href }: PolicyCardProps) => {
  // Dynamically get the icon component
  const IconComponent = (icons as any)[icon] || icons.FileQuestion;

  return (
    <Link href={href}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
      >
        <div className="flex items-start space-x-4">
          <div className="p-2 bg-blue-50 rounded-lg">
            <IconComponent className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{description}</p>
          </div>
        </div>
      </motion.div>
    </Link>
  );
};

export default PolicyCard; 