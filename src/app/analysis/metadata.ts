import { Metadata } from 'next';

// Metadata for the analysis page
export const generateMetadata = (): Metadata => {
  return {
    title: "Liberal Failures Analysis | PPC Policy Recommendations",
    description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
    openGraph: {
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      url: "https://www.backtest.ca/analysis",
      images: [
        {
          url: "https://www.backtest.ca/images/ppc-logo-purple-bg.jpg",
          width: 1200,
          height: 630,
          alt: "PPC Analysis of Liberal Failures",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      images: ["https://www.backtest.ca/images/ppc-logo-purple-bg.jpg"],
    },
  };
}; 