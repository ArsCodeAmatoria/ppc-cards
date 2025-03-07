import { Metadata } from 'next';

// Metadata for the home page
export const generateMetadata = (): Metadata => {
  return {
    title: "PPC Policy Recommendations | Home",
    description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
    openGraph: {
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
      url: "https://www.backtest.ca",
      images: [
        {
          url: "https://www.backtest.ca/images/ppc-logo-purple-bg.jpg",
          width: 1200,
          height: 630,
          alt: "PPC Policy Recommendations",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
      images: ["https://www.backtest.ca/images/ppc-logo-purple-bg.jpg"],
    },
  };
}; 