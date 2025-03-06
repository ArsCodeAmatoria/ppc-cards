import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { CompareFloatingButton } from '@/components/CompareFloatingButton';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "PPC Policy Recommendations",
  description: "Learn about PPC policies and recommendations for Canada.",
  icons: {
    icon: "/favicon-flame.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="border-b border-white/20 py-4">
          <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
            <Link href="/" className="flex items-center">
              <Image 
                src="/images/ppc-banner.png" 
                alt="PPC Logo" 
                width={250} 
                height={60} 
                priority
                className="h-10 w-auto"
              />
            </Link>
            <div className="w-full md:w-auto md:max-w-md">
              <SearchBar />
            </div>
          </div>
        </header>

        <main>
          {children}
        </main>

        <CompareFloatingButton />

        <footer className="py-8 border-t border-white/20 mt-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-sm mb-4 md:mb-0">
                © {new Date().getFullYear()} People's Party of Canada. All rights reserved.
              </p>
              <div className="flex gap-4">
                <Link href="#" className="text-sm">Privacy Policy</Link>
                <Link href="#" className="text-sm">Terms of Use</Link>
                <Link href="#" className="text-sm">Contact</Link>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
} 