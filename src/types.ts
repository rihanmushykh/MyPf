export type PageId =
  | 'home'
  | 'about'
  | 'services'
  | 'portfolio'
  | 'case-studies'
  | 'resume'
  | 'training'
  | 'blog'
  | 'resources'
  | 'testimonials'
  | 'community'
  | 'media'
  | 'contact';

export interface ServiceItem {
  id: string;
  category: 'seo' | 'wordpress' | 'marketing' | 'training';
  title: string;
  tagline: string;
  description: string;
  icon: string;
  startingPrice: string;
  benefits: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { q: string; a: string }[];
  caseStudyRef?: string;
  deliverables: string[];
  tools?: string[];
  targetAudience?: string;
}

export interface PortfolioProject {
  id: string;
  title: string;
  client: string;
  location: string;
  category: 'Websites' | 'SEO Projects' | 'Branding' | 'Posters' | 'Social Media Designs' | 'Marketing Campaigns' | 'Training Programs';
  shortDesc: string;
  fullDesc: string;
  challenge: string;
  solution: string;
  results: { metric: string; value: string; label: string }[];
  tools: string[];
  image: string;
  galleryImages: string[];
  beforeAfter?: {
    beforeLabel: string;
    afterLabel: string;
    beforeMetric: string;
    afterMetric: string;
    aspect: string;
  };
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
  liveUrl?: string;
  completionYear: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  timeline: string;
  heroMetric: { value: string; label: string };
  problem: string;
  strategy: string[];
  execution: string[];
  metrics: {
    trafficGrowth: string;
    keywordGrowth: string;
    conversionImprovement: string;
    leadsGenerated: string;
    roi: string;
  };
  keyTakeaways: string[];
}

export interface TimelineEvent {
  year: string;
  title: string;
  role: string;
  organization: string;
  location: string;
  description: string;
  tag: 'career' | 'community' | 'education' | 'milestone';
  highlights: string[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string[];
  category: 'SEO' | 'WordPress' | 'Digital Marketing' | 'Business Growth' | 'Technology' | 'AI Tools' | 'Career Guidance' | 'Community Leadership';
  tags: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  views: number;
  featured?: boolean;
}

export interface Testimonial {
  id: string;
  clientName: string;
  role: string;
  companyOrOrg: string;
  location: string;
  category: 'Client' | 'Student' | 'Organization';
  rating: number;
  quote: string;
  projectType: string;
  verified: boolean;
  avatar: string;
  videoUrl?: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  category: 'SEO' | 'WordPress' | 'Marketing' | 'Templates' | 'Checklist';
  description: string;
  format: string;
  fileSize: string;
  downloadsCount: number;
  featured?: boolean;
  contentSummary: string[];
}

export interface WorkshopCourse {
  id: string;
  title: string;
  audience: 'Students' | 'Corporate Teams' | 'Entrepreneurs' | 'All Levels';
  duration: string;
  mode: 'Online & In-Person (Wayanad/Calicut)' | 'Live Online' | 'Corporate Onsite';
  modules: string[];
  level: 'Beginner to Advanced' | 'Intermediate' | 'Masterclass';
  nextBatchDate: string;
  seatsRemaining: number;
  fee: string;
  keyOutcomes: string[];
}

export interface CommunityActivity {
  id: string;
  title: string;
  role: string;
  organization: string;
  period: string;
  description: string;
  impactNumbers: string;
  initiatives: string[];
  image: string;
}
