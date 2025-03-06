import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface SubCategoryPageProps {
  params: {
    id: string;
    subId: string;
  };
}

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

export default function SubCategoryPage({ params }: SubCategoryPageProps) {
  const category = categories.find((c) => c.id === params.id);
  const subcategory = category?.subcategories.find((s) => s.id === params.subId);

  if (!category || !subcategory) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link 
        href={`/category/${category.id}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {category.title}
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {subcategory.title}
        </h1>
        <p className="text-lg text-slate-600">
          {subcategory.description}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {subcategory.policies.map((policy) => (
          <motion.div key={policy.id} variants={item}>
            <PolicyCard
              title={policy.title}
              description={policy.description}
              icon={policy.icon}
              href={`/category/${category.id}/${subcategory.id}/${policy.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 