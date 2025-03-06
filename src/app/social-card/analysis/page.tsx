import AnalysisSocialCard from '@/components/AnalysisSocialCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Analysis Social Card',
  description: 'Social media card for PPC Liberal Failures Analysis',
};

export default function AnalysisSocialCardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <AnalysisSocialCard />
    </div>
  );
} 