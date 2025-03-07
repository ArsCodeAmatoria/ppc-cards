import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import * as Icons from 'lucide-react';
import { LucideIcon } from 'lucide-react';

interface PolicyCardProps {
  title: string;
  description: string;
  icon?: string; // Make icon optional
  href: string;
}

export function PolicyCard({ title, description, icon, href }: PolicyCardProps) {
  // Dynamically get the icon component if provided
  let IconComponent: LucideIcon | null = null;
  
  if (icon && icon in Icons) {
    IconComponent = Icons[icon as keyof typeof Icons] as LucideIcon;
  }

  return (
    <Link
      href={href}
      className="group flex flex-col h-full overflow-hidden rounded-lg border border-white/20 hover:border-white/40 transition-all"
    >
      <div className="p-6 flex-grow">
        {IconComponent && (
          <div className="mb-4 p-3 inline-block rounded-full border border-white/20">
            <IconComponent className="h-6 w-6" />
          </div>
        )}
        <h3 className="text-xl font-bold mb-3 group-hover:underline">{title}</h3>
        <p className="mb-4">{description}</p>
      </div>
      
      <div className="px-6 py-4 border-t border-white/20 flex items-center justify-between">
        <span className="text-sm">View Details</span>
        <div className="p-2 rounded-lg group-hover:bg-white/10 transition-colors">
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  );
} 