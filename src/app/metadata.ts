import { Metadata } from 'next';

// Metadata for the home page
export const generateMetadata = (): Metadata => {
  return {
    title: "PPC Policy Recommendations | Home",
    description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
    openGraph: {
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
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
      title: "PPC Policy Recommendations | Home",
      description: "Explore PPC's policy recommendations and analysis of Liberal failures across economy, immigration, housing, and more sectors in Canada.",
      images: ["/images/ppc-social-card.jpg"],
    },
  };
}; 