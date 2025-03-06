import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "PPC Policy Explorer",
  description: "Explore PPC policies in an interactive, card-based format",
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
      </head>
      <body className={inter.className}>
        <main className="container mx-auto px-4 py-8">
          {/* 
            Note: Ideally, we would wrap children in a Suspense boundary to help with React.use(),
            but it's better to add Suspense boundaries in each page component instead of the root layout
            to avoid any import issues with server components.
          */}
          {children}
        </main>
      </body>
    </html>
  );
}
