export type PolicyCategory = 
  | "Government & Politics"
  | "Economy & Taxation"
  | "Healthcare & Social Issues"
  | "Immigration & Foreign Policy"
  | "History & Culture"
  | "Controversial Issues";

export interface Policy {
  id: string;
  title: string;
  category: PolicyCategory;
  description: string;
  content: string[];
  icon: string;
  sources: string[];
  subcategory?: string;
}

export interface CategoryData {
  id: string;
  title: PolicyCategory;
  description: string;
  icon: string;
  subcategories: SubCategory[];
}

export interface SubCategory {
  id: string;
  title: string;
  description: string;
  icon: string;
  policies: Policy[];
} 