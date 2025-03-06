import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPC Policy Explorer",
  description: "Explore PPC policies in an interactive, card-based format",
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="/styles.css" />
        <meta name="theme-color" content="#442d7b" />
      </head>
      <body className={`${inter.className} min-h-screen`}>
        <header className="py-6 border-b border-white/10">
          <div className="container mx-auto px-4 flex justify-center">
            <Link href="/" className="flex items-center gap-3">
              <div className="h-12 w-12 relative">
                <Image 
                  src="/ppc-logo.svg" 
                  alt="PPC Logo" 
                  width={48} 
                  height={48}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="text-white font-bold text-2xl">PPC Policy Explorer</div>
            </Link>
          </div>
        </header>
        <main className="container mx-auto px-4 py-8">
          {/* 
            Note: Ideally, we would wrap children in a Suspense boundary to help with React.use(),
            but it's better to add Suspense boundaries in each page component instead of the root layout
            to avoid any import issues with server components.
          */}
          {children}
        </main>
        <footer className="border-t border-white/10 py-6 mt-12">
          <div className="container mx-auto px-4 text-center text-white/60 text-sm">
            <p>© {new Date().getFullYear()} PPC Policy Explorer. This is an unofficial website.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
