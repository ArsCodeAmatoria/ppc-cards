import LogoPurpleBgCard from '@/components/LogoPurpleBgCard';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'PPC Logo Social Card',
  description: 'Social media card with PPC logo on purple background',
};

export default function LogoPurpleBgCardPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <LogoPurpleBgCard />
    </div>
  );
} 