import SocialCard from '@/components/SocialCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Social Card',
  description: 'Social media card for PPC Policy Recommendations',
};

export default function SocialCardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <SocialCard />
    </div>
  );
} 