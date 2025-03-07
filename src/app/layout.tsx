import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { SearchBar } from '@/components/search/SearchBar';
import { CompareFloatingButton } from '@/components/CompareFloatingButton';
import { BarChart2 } from 'lucide-react';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "PPC Policy Recommendations",
  description: "Learn about PPC policies and recommendations for Canada's future. Discover how Liberal failures have impacted Canadians and explore data-driven solutions.",
  metadataBase: new URL('https://www.backtest.ca'),
  keywords: ["PPC", "People's Party of Canada", "Canadian politics", "Liberal failures", "policy recommendations", "Maxime Bernier"],
  authors: [{ name: "People's Party of Canada" }],
  creator: "People's Party of Canada",
  publisher: "People's Party of Canada",
  icons: {
    icon: "/favicon-flame.svg",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "https://www.backtest.ca",
    title: "PPC Policy Recommendations",
    description: "Explore PPC's data-driven analysis of Liberal failures and policy recommendations for a stronger Canada.",
    siteName: "PPC Policy Recommendations",
    images: [
      {
        url: "/images/ppc-social-card.jpg",
        width: 1200,
        height: 630,
        alt: "PPC Policy Recommendations",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PPC Policy Recommendations",
    description: "Explore PPC's data-driven analysis of Liberal failures and policy recommendations for a stronger Canada.",
    creator: "@peoplespca",
    images: ["/images/ppc-social-card.jpg"],
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
            
            {/* Main Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/analysis" className="flex items-center text-white/80 hover:text-white transition-colors">
                <BarChart2 className="h-4 w-4 mr-1" />
                Liberal Failures Analysis
              </Link>
            </nav>
            
            <div className="w-full md:w-auto md:max-w-md">
              <SearchBar />
            </div>
          </div>
          
          {/* Mobile Navigation */}
          <div className="md:hidden container mx-auto px-4 mt-4">
            <nav className="flex items-center justify-center space-x-6">
              <Link href="/" className="text-white/80 hover:text-white transition-colors">
                Home
              </Link>
              <Link href="/analysis" className="flex items-center text-white/80 hover:text-white transition-colors">
                <BarChart2 className="h-4 w-4 mr-1" />
                Analysis
              </Link>
            </nav>
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