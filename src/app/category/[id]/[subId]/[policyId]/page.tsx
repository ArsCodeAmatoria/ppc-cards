import { categories } from '@/data/policies';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { notFound } from 'next/navigation';

interface PolicyPageProps {
  params: {
    id: string;
    subId: string;
    policyId: string;
  };
}

export default function PolicyPage({ params }: PolicyPageProps) {
  const category = categories.find((c) => c.id === params.id);
  const subcategory = category?.subcategories.find((s) => s.id === params.subId);
  const policy = subcategory?.policies.find((p) => p.id === params.policyId);

  if (!category || !subcategory || !policy) {
    notFound();
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link 
        href={`/category/${category.id}/${subcategory.id}`}
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <ArrowLeft className="w-4 h-4 mr-2" />
        Back to {subcategory.title}
      </Link>

      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-xl p-8 shadow-sm"
      >
        <h1 className="text-3xl font-bold text-slate-900 mb-4">
          {policy.title}
        </h1>
        <p className="text-lg text-slate-600 mb-8">
          {policy.description}
        </p>

        <div className="space-y-6">
          {policy.content.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-start gap-4"
            >
              <div className="w-2 h-2 rounded-full bg-blue-600 mt-2" />
              <p className="text-slate-700">{point}</p>
            </motion.div>
          ))}
        </div>

        {policy.sources.length > 0 && (
          <div className="mt-12 pt-8 border-t border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Sources</h2>
            <ul className="space-y-2">
              {policy.sources.map((source, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <a
                    href={source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800"
                  >
                    <span className="mr-2">Source {index + 1}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        )}
      </motion.article>
    </div>
  );
} 