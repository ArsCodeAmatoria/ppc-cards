import { categories } from '@/data/policies';
import PolicyCard from '@/components/PolicyCard';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { notFound } from 'next/navigation';

interface CategoryPageProps {
  params: {
    id: string;
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

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = categories.find((c) => c.id === params.id);

  if (!category) {
    notFound();
  }

  return (
    <div className="max-w-6xl mx-auto">
      <Link 
        href="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to Categories
      </Link>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12"
      >
        <h1 className="text-4xl font-bold text-slate-900 mb-4">
          {category.title}
        </h1>
        <p className="text-lg text-slate-600">
          {category.description}
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {category.subcategories.map((subcategory) => (
          <motion.div key={subcategory.id} variants={item}>
            <PolicyCard
              title={subcategory.title}
              description={subcategory.description}
              icon={subcategory.icon}
              href={`/category/${category.id}/${subcategory.id}`}
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
} 