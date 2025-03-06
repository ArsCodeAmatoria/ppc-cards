'use client';

import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto">
      <div className="text-center mb-12">
        <div className="py-8 bg-ppc-purple/10 rounded-lg mb-8">
          <h1 className="text-4xl font-bold text-ppc-purple mb-4">
            PPC Policy Explorer
          </h1>
          <p className="text-lg text-slate-600">
            Explore the People's Party of Canada's policies through an interactive guide
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <PolicyCard
            key={category.id}
            title={category.title}
            description={category.description}
            icon={category.icon}
            href={`/category/${category.id}`}
          />
        ))}
      </div>
    </div>
  );
}
