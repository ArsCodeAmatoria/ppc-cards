import { Metadata } from 'next';

// Metadata for the analysis page
export const generateMetadata = (): Metadata => {
  return {
    title: "Liberal Failures Analysis | PPC Policy Recommendations",
    description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
    openGraph: {
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      images: [
        {
          url: "/images/analysis-social-card.jpg",
          width: 1200,
          height: 630,
          alt: "PPC Analysis of Liberal Failures",
        },
      ],
    },
    twitter: {
      title: "Liberal Failures Analysis | PPC Policy Recommendations",
      description: "Explore data-driven analysis of Liberal government failures across multiple sectors including economy, immigration, housing, and more.",
      images: ["/images/analysis-social-card.jpg"],
    },
  };
}; 