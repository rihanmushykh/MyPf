import {
  ServiceItem,
  PortfolioProject,
  CaseStudy,
  TimelineEvent,
  BlogPost,
  Testimonial,
  ResourceItem,
  WorkshopCourse,
  CommunityActivity,
} from '../types';

export const RIHAN_PROFILE = {
  name: 'Rihan Ali',
  tagline: 'Helping Businesses Grow Through Digital Marketing, SEO & WordPress',
  subheadline:
    'I build websites, improve search rankings, generate qualified leads, and engineer digital systems that empower businesses, institutions, and leaders to scale globally.',
  location: 'Wayanad, Kerala, India',
  email: 'rihanmushykh@gmail.com',
  phone: '+91 94960 12345',
  whatsappUrl: 'https://wa.me/919496012345?text=Hi%20Rihan,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
  linkedinUrl: 'https://linkedin.com/in/rihanali',
  githubUrl: 'https://github.com/rihanali',
  stats: [
    { label: 'Projects Completed', value: '240+', icon: 'Briefcase' },
    { label: 'Websites Built', value: '180+', icon: 'Globe' },
    { label: 'Students Trained', value: '1,450+', icon: 'GraduationCap' },
    { label: 'Campaigns Managed', value: '380+', icon: 'TrendingUp' },
    { label: 'Years of Experience', value: '6+', icon: 'Award' },
  ],
  roles: [
    'Digital Marketing Specialist',
    'SEO Expert',
    'WordPress Website Developer',
    'Website Consultant',
    'Digital Marketing Trainer',
    'Community Leader',
    'Creative Designer',
    'Entrepreneur',
  ],
  bioMission:
    'Empowering visionary businesses, educational institutions, and grassroots organizations through data-driven digital marketing, bespoke web engineering, ethical SEO, and transformative community leadership.',
};

export const TRUSTED_BRANDS = [
  { name: 'Apex Kerala Resorts', category: 'Hospitality' },
  { name: 'Malabar Agro Exports', category: 'Export & Trade' },
  { name: 'Wayanad Heritage Academy', category: 'Education' },
  { name: 'Zenith Global Healthcare', category: 'Medical Clinics' },
  { name: 'SKSSF Wayanad Youth Wing', category: 'Community Org' },
  { name: 'Calicut Tech Hub', category: 'Startup Incubator' },
  { name: 'Arabian Gulf Logistics', category: 'GCC Logistics' },
  { name: 'Greenleaf Naturals', category: 'Ecommerce D2C' },
];

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'technical-seo',
    category: 'seo',
    title: 'Comprehensive SEO & Search Dominance',
    tagline: 'Dominate page 1 on Google for high-intent business searches',
    description:
      'End-to-end search engine optimization combining technical health, crawl architecture, Core Web Vitals, entity-based keyword mapping, and white-hat authority building.',
    icon: 'Search',
    startingPrice: '₹22,000 / $300 mo',
    deliverables: [
      'Full Technical & Schema Audit',
      'Google Business Profile (Local SEO) Optimization',
      'Keyword Intent Mapping & Competitor Gap Analysis',
      'High-authority backlink building',
      'Monthly Ranking & Organic Revenue Reporting',
    ],
    benefits: [
      'Consistent inbound organic traffic without endless ad spend',
      'Higher ranking for transactional and local search terms in Kerala & GCC',
      'Flawless Core Web Vitals (sub-1.2s LCP, zero CLS)',
      'Enhanced click-through rates via Rich Snippets & Schema JSON-LD',
    ],
    process: [
      { step: '01', title: 'Audit & Crawl Diagnostic', desc: 'Identify 404s, indexation leaks, speed bottlenecks, and semantic hierarchy issues.' },
      { step: '02', title: 'Keyword & Content Architecture', desc: 'Identify high-value search terms your ideal buyers use every day.' },
      { step: '03', title: 'On-Page & Technical Surgery', desc: 'Code schema markup, optimize meta tags, refine heading tags, and accelerate assets.' },
      { step: '04', title: 'Off-Page Authority & Tracking', desc: 'Build reputable citations, acquire relevant links, and deliver transparent rank dashboards.' },
    ],
    faqs: [
      { q: 'How long until we see tangible ranking improvements?', a: 'Typically, technical and low-hanging keyword wins emerge in 4–8 weeks; major competitive keywords mature within 3–6 months.' },
      { q: 'Do you guarantee Google #1 ranking?', a: 'No ethical SEO guarantees #1 because Google algorithmically updates daily, but Rihan’s proven white-hat framework consistently propels 85%+ of target keywords to Google Page 1.' },
    ],
    caseStudyRef: 'cs-wayanad-agro',
  },
  {
    id: 'wordpress-development',
    category: 'wordpress',
    title: 'High-Converting WordPress & Web Systems',
    tagline: 'Custom, blazing-fast WordPress platforms engineered for conversions',
    description:
      'Custom bespoke WordPress development, WooCommerce portals, educational platforms, and sleek landing pages crafted with clean modern code, zero bloat, and top-tier security.',
    icon: 'Layout',
    startingPrice: '₹35,000 / $450',
    deliverables: [
      'Bespoke Mobile-First Responsive UI',
      'Advanced Custom Post Types & Gutenberg / Elementor Pro Setup',
      'WooCommerce / Payment Gateway (Stripe, Razorpay, UPI) Integration',
      'Speed Optimization (Score 90+ on Google PageSpeed)',
      'Hardened Security, Automated Backups, and SSL Setup',
    ],
    benefits: [
      'Sub-second page load times that prevent bounce rates',
      'Effortless admin editing for non-technical team members',
      'Native conversion funnels: lead forms, WhatsApp triggers, booking widgets',
      'Enterprise-grade security against malware and brute force attacks',
    ],
    process: [
      { step: '01', title: 'Discovery & Wireframing', desc: 'Analyze user personas, content structure, and core conversion paths.' },
      { step: '02', title: 'Design & Visual Prototyping', desc: 'Craft clean, luxury layouts influenced by Apple, Linear, and modern SaaS aesthetics.' },
      { step: '03', title: 'WordPress Architecture & Code', desc: 'Build lightweight templates, configure database optimizations, and connect APIs.' },
      { step: '04', title: 'Speed Hardening & Launch', desc: 'CDN caching setup, database indexing, QA testing across all devices, and live rollout.' },
    ],
    faqs: [
      { q: 'Will I be able to update content myself after launch?', a: 'Absolutely. Every client receives a guided video walkthrough and an intuitive admin panel with custom fields tailored for easy updates.' },
      { q: 'Can you migrate my existing slow site to your new setup?', a: 'Yes. We seamlessly migrate databases, maintain existing SEO permalinks, and eliminate downtime.' },
    ],
    caseStudyRef: 'cs-resort-portal',
  },
  {
    id: 'performance-marketing',
    category: 'marketing',
    title: 'ROI-Driven Performance Marketing & Ads',
    tagline: 'Targeted Meta & Google Ads campaigns engineered for direct customer acquisition',
    description:
      'Laser-targeted advertising across Meta (Instagram & Facebook), Google Search, YouTube, and Performance Max with rigorous pixel tracking, conversion funnel architecture, and retargeting.',
    icon: 'Target',
    startingPrice: '₹20,000 / $270 mo',
    deliverables: [
      'Campaign Strategy & High-Converting Copywriting',
      'Ad Creative Direction (Static, Carousels & Video Hooks)',
      'Meta Pixel, Conversions API & GA4 Event Architecture',
      'A/B Audience Testing & Lookalike Modeling',
      'Weekly Ad Spend Optimization & ROAS Tracking',
    ],
    benefits: [
      'Generate predictable qualified leads directly to your sales team or WhatsApp',
      'Eliminate wasted ad spend with negative keyword scrubbing and tight geo-fencing',
      'Capture ready-to-buy searchers exactly when they need your service',
      'Clear, transparent return on ad spend (ROAS) analytics',
    ],
    process: [
      { step: '01', title: 'Market & Funnel Audit', desc: 'Identify unit economics, target audience demographics, and competitor hooks.' },
      { step: '02', title: 'Tracking & Creative Production', desc: 'Install Server-Side GTM, verify domain ownership, and produce persuasive ad variations.' },
      { step: '03', title: 'Phase 1 Launch & Testing', desc: 'Deploy controlled budget testing ad angles, headlines, and audience segments.' },
      { step: '04', title: 'Scale & Retarget', desc: 'Double down on high-ROAS ad sets, deploy automated remarketing, and maximize profitability.' },
    ],
    faqs: [
      { q: 'What is the recommended minimum ad spend?', a: 'We typically suggest starting with a minimum monthly ad budget of ₹15,000 to ₹30,000 for local campaigns, and ₹50,000+ for national/GCC campaigns.' },
      { q: 'Do you manage both Google and Meta Ads?', a: 'Yes. Combining Google intent search with Meta retargeting yields the highest blended conversion rates.' },
    ],
    caseStudyRef: 'cs-academy-leads',
  },
  {
    id: 'training-workshops',
    category: 'training',
    title: 'Masterclass Workshops & Corporate Training',
    tagline: 'Practical, project-based training that turns novices into skilled digital practitioners',
    description:
      'High-impact workshops and cohort programs in WordPress Web Development, Search Engine Optimization, and Digital Marketing for college students, marketing teams, and entrepreneurs.',
    icon: 'GraduationCap',
    startingPrice: '₹4,999 / $70 per seat',
    deliverables: [
      'Comprehensive Curriculum & Hands-on Lab Assignments',
      'Live Site Building & Live Google Campaign Deployments',
      'Verifiable Digital Certificate with Credential ID',
      'Lifetime Access to Resource Toolkits & Templates',
      '1-on-1 Project Mentorship & Career Guidance',
    ],
    benefits: [
      'Learn actual agency-grade workflows rather than stale textbook theory',
      'Build a portfolio project live during the training sessions',
      'Direct industry mentorship from Rihan Ali',
      'Verifiable credentials that enhance LinkedIn profiles and resumes',
    ],
    process: [
      { step: '01', title: 'Foundational Theory', desc: 'Deconstruct algorithms, market psychology, and modern web architectures.' },
      { step: '02', title: 'Hands-on Building', desc: 'Students build live websites and set up real advertising campaigns step-by-step.' },
      { step: '03', title: 'Case Study Reviews', desc: 'Analyze real-world campaigns, diagnosing failures and engineering wins.' },
      { step: '04', title: 'Certification & Showcase', desc: 'Final project evaluation, credential issuance, and job/freelance guidance.' },
    ],
    faqs: [
      { q: 'Can organizations book private corporate workshops?', a: 'Yes. Rihan conducts tailored 2-day to 5-day corporate workshops for marketing teams across Kerala, Karnataka, and the UAE.' },
      { q: 'Do students need prior coding knowledge?', a: 'No. The WordPress and digital marketing modules are designed to empower participants from all academic backgrounds.' },
    ],
    caseStudyRef: 'cs-student-cohort',
  },
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: 'proj-wayanad-agro',
    title: 'Malabar Heritage Spices & Agro Export',
    client: 'Malabar Agro Exports',
    location: 'Wayanad, Kerala / Dubai, UAE',
    category: 'Websites',
    shortDesc: 'B2B export portal & organic SEO strategy targeting GCC and European spice importers.',
    fullDesc:
      'Engineered a multilingual B2B export website with dynamic catalog inquiry forms, integrated technical SEO schema for agricultural commodities, and executed a global content strategy.',
    challenge:
      'The company was relying purely on physical trade expos. Their outdated static website had zero search visibility, and inbound inquiries from overseas bulk buyers were non-existent.',
    solution:
      'Built a headless-style, high-speed WordPress platform with product schema, multilingual catalog downloads, and localized search landing pages for cardamom, pepper, and coffee wholesale terms.',
    results: [
      { metric: '+340%', value: '340%', label: 'Organic Inquiries' },
      { metric: '#1', value: '#1', label: 'Rank for 28 Keywords' },
      { metric: '0.8s', value: '0.8s', label: 'Average Page Load' },
      { metric: '4.8x', value: '4.8x', label: 'Export Pipeline Value' },
    ],
    tools: ['WordPress', 'Technical SEO', 'Schema Markup', 'Cloudflare CDN', 'RankMath Pro', 'Figma'],
    image: 'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1509356843151-3e7d96241e11?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    ],
    beforeAfter: {
      beforeLabel: 'Old Static Site (2022)',
      afterLabel: 'Redesigned Platform (2024)',
      beforeMetric: '140 monthly visits | 0 B2B leads',
      afterMetric: '8,400+ monthly visits | 38 monthly export RFPs',
      aspect: 'Organic Global Visibility',
    },
    testimonial: {
      quote:
        'Rihan revolutionized our international presence. Within 5 months of launching our new website and SEO strategy, we secured multi-ton container contracts with distributors in Qatar and Germany.',
      author: 'K. M. Basheer',
      role: 'Managing Director',
      company: 'Malabar Agro Exports',
    },
    completionYear: '2024',
    liveUrl: 'https://malabaragroexports.com',
  },
  {
    id: 'proj-kerala-resort',
    title: 'Vythiri Mist Eco-Resort Booking Platform',
    client: 'Vythiri Mist Resorts',
    location: 'Vythiri, Wayanad',
    category: 'SEO Projects',
    shortDesc: 'Complete local SEO & direct booking engine overhaul reducing OTA commission fees by 62%.',
    fullDesc:
      'Executed a comprehensive local SEO takeover across Google Business Profile, local citation clusters, and a custom WordPress direct-booking experience designed to bypass high OTA commissions.',
    challenge:
      'Paying 18–25% commission fees to MakeMyTrip, Agoda, and Booking.com for every guest booking, while their direct site had high bounce rates.',
    solution:
      'Revamped the site with immersive Wayanad misty rainforest visuals, instant WhatsApp concierge booking integration, local SEO citations, and targeted Google Search Ads during peak monsoon holiday searches.',
    results: [
      { metric: '-62%', value: '62%', label: 'OTA Commission Saved' },
      { metric: '+410%', value: '410%', label: 'Direct Site Bookings' },
      { metric: '4.9★', value: '4.9★', label: 'Google Review Score' },
      { metric: '₹18.4L', value: '₹18.4L', label: 'Added Direct Revenue' },
    ],
    tools: ['Local SEO', 'Google Business Profile', 'WordPress', 'Razorpay', 'Meta Ads', 'Hotjar'],
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80',
    ],
    beforeAfter: {
      beforeLabel: 'Pre-SEO Campaign',
      afterLabel: 'Post-Optimization',
      beforeMetric: 'Direct Bookings: 8%',
      afterMetric: 'Direct Bookings: 47%',
      aspect: 'Direct Guest Revenue Proportion',
    },
    testimonial: {
      quote:
        'Rihan’s understanding of hospitality SEO and tourist search behavior is unmatched in Kerala. Direct bookings skyrocketed, putting profits back into our resort.',
      author: 'Shamsudheen V.',
      role: 'General Manager',
      company: 'Vythiri Mist Eco-Resort',
    },
    completionYear: '2024',
  },
  {
    id: 'proj-zenith-health',
    title: 'Zenith Specialty Clinics Patient Funnel',
    client: 'Zenith Healthcare Group',
    location: 'Calicut & Wayanad, Kerala',
    category: 'Marketing Campaigns',
    shortDesc: 'Meta & Google Ads funnel generating 1,200+ monthly verified patient consultations.',
    fullDesc:
      'Engineered a HIPAA-conscious, high-trust healthcare lead generation system with dedicated landing pages for cardiology, orthopedics, and pediatric care.',
    challenge:
      'High cost-per-lead on generic advertising channels and difficulty tracking offline walk-ins back to digital ad campaigns.',
    solution:
      'Created friction-free appointment scheduling forms, conversational WhatsApp booking bots, localized Google Search campaigns for urgent healthcare queries, and re-targeting campaigns for preventive health checkups.',
    results: [
      { metric: '₹78', value: '₹78', label: 'Average Cost Per Lead' },
      { metric: '1,240+', value: '1,240+', label: 'Monthly Inquiries' },
      { metric: '+88%', value: '88%', label: 'Show-Up Rate' },
      { metric: '5.2x', value: '5.2x', label: 'Overall Campaign ROAS' },
    ],
    tools: ['Google Ads', 'Meta Ads', 'WhatsApp Business API', 'Landingi', 'Google Analytics 4'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=800&q=80',
    ],
    testimonial: {
      quote:
        'Rihan is by far the most meticulous digital marketer we have partnered with. His campaigns fill our appointment schedules every single week.',
      author: 'Dr. A. Rasheed',
      role: 'Chief Medical Officer',
      company: 'Zenith Healthcare',
    },
    completionYear: '2023',
  },
  {
    id: 'proj-heritage-academy',
    title: 'Wayanad Heritage Academy Brand & Admissions',
    client: 'Wayanad Heritage Academy',
    location: 'Sulthan Bathery, Wayanad',
    category: 'Branding',
    shortDesc: 'Complete institutional rebrand, website overhaul, and 300+ student enrollment campaign.',
    fullDesc:
      'Created a refined brand identity honoring Malabar heritage and modern international pedagogy, coupled with an interactive student portal and admissions campaign.',
    challenge:
      'Competition from regional CBSE schools and an outdated visual identity that failed to communicate the institution’s high academic caliber.',
    solution:
      'Designed an inspiring visual system, professional video testimonials from alumni, an intuitive course catalog, and multi-channel student admissions marketing.',
    results: [
      { metric: '100%', value: '100%', label: 'Admissions Target Met' },
      { metric: '3.4x', value: '3.4x', label: 'Prospect Inquiries' },
      { metric: '48k+', value: '48k+', label: 'Video Campaign Views' },
      { metric: '#1', value: '#1', label: 'Top School in Wayanad Search' },
    ],
    tools: ['Brand Identity', 'Adobe Illustrator', 'WordPress', 'Meta Ads', 'Google Ads', 'Figma'],
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=800&q=80',
    ],
    completionYear: '2024',
  },
  {
    id: 'proj-skssf-summit',
    title: 'SKSSF Wayanad Youth Leadership Summit Tech',
    client: 'SKSSF District Committee',
    location: 'Kalpetta, Wayanad',
    category: 'Posters',
    shortDesc: 'Event branding, official campaign posters, registration portal, and media coordination for 5,000+ delegates.',
    fullDesc:
      'Led the entire digital & design strategy for the annual district youth leadership summit, including social media branding, keynote stage backdrops, posters, and instant QR-pass check-ins.',
    challenge:
      'Managing massive volunteer coordination and ensuring seamless pre-registration for thousands of attendees across Wayanad’s panchayats.',
    solution:
      'Crafted a dignified, modern typographic poster system, launched an automated digital delegate registration portal, and managed daily live social media coverage.',
    results: [
      { metric: '5,200+', value: '5,200+', label: 'Registered Delegates' },
      { metric: '100%', value: '100%', label: 'Digital Check-in Rate' },
      { metric: '120k+', value: '120k+', label: 'Social Reach in Malabar' },
      { metric: '18', value: '18', label: 'Campaign Posters Produced' },
    ],
    tools: ['Photoshop', 'Illustrator', 'React & Vite', 'QR Pass System', 'Social Strategy'],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
    ],
    completionYear: '2024',
  },
  {
    id: 'proj-digital-bootcamp',
    title: 'Kerala Youth Digital Marketing Bootcamp',
    client: 'Regional Youth Development Council',
    location: 'Wayanad & Calicut',
    category: 'Training Programs',
    shortDesc: '6-week intensive cohort training 250+ aspiring freelancers and entrepreneurs in modern SEO & WordPress.',
    fullDesc:
      'Curated and delivered an immersive hands-on curriculum covering keyword research, WordPress site building, Google Search Console, and client acquisition techniques.',
    challenge:
      'High rates of youth unemployment in hilly rural areas due to lack of practical, income-generating digital skill training.',
    solution:
      'Constructed a 100% project-based syllabus with live domain hosting for each student, peer review sessions, and freelance bidding practice.',
    results: [
      { metric: '250+', value: '250+', label: 'Students Graduated' },
      { metric: '72%', value: '72%', label: 'Earned Within 60 Days' },
      { metric: '4.95★', value: '4.95★', label: 'Course Feedback Rating' },
      { metric: '45+', value: '45+', label: 'Live Sites Built' },
    ],
    tools: ['WordPress', 'Ahrefs', 'Elementor', 'Canva Pro', 'Google Analytics', 'Freelance Platforms'],
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
    ],
    completionYear: '2023',
  },
  {
    id: 'proj-social-designs',
    title: 'D2C Brand Social Campaign Suite',
    client: 'Greenleaf Naturals',
    location: 'Kerala, India',
    category: 'Social Media Designs',
    shortDesc: '30+ high-engagement social media creatives, reel storyboards, and packaging designs.',
    fullDesc:
      'Engineered an earthy, luxury aesthetic for an organic wellness brand, creating consistent Instagram grids, promotional festival carousels, and conversion ad creatives.',
    challenge:
      'Brand look was fragmented across different freelancers, hurting perceived trust and brand recall.',
    solution:
      'Developed an uncompromising design system with signature emerald and cream tones, bespoke typography rules, and product-focused 3D mockups.',
    results: [
      { metric: '+215%', value: '215%', label: 'Instagram Engagement' },
      { metric: '3.8x', value: '3.8x', label: 'Ad Click-Through Rate' },
      { metric: '35+', value: '35+', label: 'Brand Assets Created' },
      { metric: '14k+', value: '14k+', label: 'Follower Growth' },
    ],
    tools: ['Photoshop', 'Figma', 'Lightroom', 'Illustrator'],
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80',
    ],
    completionYear: '2024',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'cs-wayanad-agro',
    title: 'Scaling an Agricultural Exporter from Zero Online Leads to $240K in International B2B Inquiries',
    client: 'Malabar Agro Exports',
    industry: 'Agri-Commodity & Global Export',
    timeline: '6 Months (Jan 2024 - Jun 2024)',
    heroMetric: { value: '340%', label: 'Increase in Qualified Overseas Export Inquiries' },
    problem:
      'Malabar Agro Exports has supplied high-grade Wayanad cardamom, black pepper, and robusta coffee beans for over 15 years through local broker channels. However, margins were getting squeezed by middlemen, and their outdated web presence generated zero direct export inquiries from overseas buyers in Dubai, Doha, and Hamburg.',
    strategy: [
      'Targeted International SEO: Conducted intent-focused research on commercial search queries used by procurement officers (e.g., "bulk green cardamom supplier India", "organic tellicherry pepper exporter UAE").',
      'Entity & Schema Optimization: Implemented Product, Organization, and ExportCommodity structured data schemas so search engines understood precise specifications, certifications (FSSAI, Spices Board), and bulk MOQ availability.',
      'Conversion Architecture: Designed a clean, frictionless B2B quote-request engine with WhatsApp instant messaging and direct RFQ form routing.',
    ],
    execution: [
      'Re-engineered the website from a slow 6.4s generic theme to an ultra-lean custom WordPress build scoring 98/100 on PageSpeed.',
      'Created 16 deep-dive commodity specification guides with technical harvest schedules, moisture levels, and grade certificates.',
      'Established contextual backlinks from recognized agriculture associations and trade directories.',
    ],
    metrics: {
      trafficGrowth: '+420% Organic Search Traffic',
      keywordGrowth: '28 Keywords in Google Top 3 Rankings',
      conversionImprovement: 'From 0.4% to 4.8% Inquiry Conversion Rate',
      leadsGenerated: '64 Verified Wholesale RFPs in 6 Months',
      roi: '8.4x Direct Return on Investment',
    },
    keyTakeaways: [
      'Technical SEO and schema markup are vital for B2B procurement queries.',
      'Transparent specification pages build instant trust with international corporate buyers.',
      'Speed and mobile responsiveness are critical even for traditional enterprise clients.',
    ],
  },
  {
    id: 'cs-resort-portal',
    title: 'Slashing OTA Commissions by 62% for a Luxury Wayanad Rainforest Eco-Resort',
    client: 'Vythiri Mist Eco-Resort',
    industry: 'Hospitality & Eco-Tourism',
    timeline: '4 Months (Aug 2023 - Nov 2023)',
    heroMetric: { value: '62%', label: 'Reduction in Third-Party Booking Commissions' },
    problem:
      'The resort was paying an unsustainable 22% average commission on every guest reservation through Booking.com and MakeMyTrip. Their existing website was clunky, did not show live room availability, and was virtually invisible in Google Local 3-Pack searches.',
    strategy: [
      'Dominating Google Local SEO: Overhauled the Google Business Profile with high-resolution imagery, room walkthrough videos, weekly amenity posts, and a systematic guest review collection framework.',
      'Direct Booking Engine: Deployed an instant reservation workflow connected to Razorpay UPI / Card payments, offering exclusive direct-booking perks (complimentary plantation tours).',
      'Micro-Targeted Google Search & Meta Retargeting: Ran high-intent Google Ads for queries like "private pool villa Wayanad" and "luxury honeymoon resort Wayanad".',
    ],
    execution: [
      'Built a visually stunning, Apple-inspired responsive website featuring full-screen atmospheric photography and subtle scroll animations.',
      'Integrated real-time WhatsApp reservation support allowing guests to ask questions in seconds.',
      'Optimized Core Web Vitals to achieve a 0.9s First Contentful Paint.',
    ],
    metrics: {
      trafficGrowth: '+310% Website Visitors',
      keywordGrowth: '#1 in Google Maps Local Pack for 12 Regional Keywords',
      conversionImprovement: '+410% Increase in Direct Booking Conversions',
      leadsGenerated: '480+ Direct Bookings Processed',
      roi: '₹18.4 Lakhs Saved in OTA Fees in Year 1',
    },
    keyTakeaways: [
      'Local SEO paired with Google Business Profile is the highest-ROI channel for regional tourism.',
      'Providing an immediate direct-booking incentive drastically curbs commission bleed.',
    ],
  },
  {
    id: 'cs-academy-leads',
    title: 'Filling 300+ Annual Student Admissions via Integrated Performance Marketing Funnels',
    client: 'Wayanad Heritage Academy',
    industry: 'Higher Education & Academy',
    timeline: '3 Months (March 2024 - May 2024)',
    heroMetric: { value: '3.4x', label: 'Increase in Qualified Prospect Applications' },
    problem:
      'Admissions were plateauing due to reliance on traditional newspaper advertisements and roadside hoardings, which had no tracking and failed to engage tech-savvy parents and students.',
    strategy: [
      'Video-First Storytelling: Produced short, authentic video testimonials with current students, laboratory tours, and faculty highlights.',
      'High-Intent Meta & Google Campaigns: Geo-targeted parents across North Kerala with customized messaging addressing curriculum, transport facilities, and future career pathways.',
      'Instant Lead Capture & CRM Routing: Automated SMS and WhatsApp confirmation messages to parents upon form submission, alerting the admissions counselors within 5 minutes.',
    ],
    execution: [
      'Constructed a rapid-loading admission landing page with downloadable brochures and campus video embeds.',
      'Conducted A/B tests across 18 ad creative sets to find the lowest cost-per-qualified lead.',
      'Trained the admissions desk on speed-to-lead follow-ups to maximize consultation show-up rates.',
    ],
    metrics: {
      trafficGrowth: '+520% Landing Page Visitors',
      keywordGrowth: 'Top 3 for "Best Higher Secondary Academy Wayanad"',
      conversionImprovement: '14.2% Lead Conversion Rate',
      leadsGenerated: '940+ Verified Parent Inquiries',
      roi: '100% Seats Filled 3 Weeks Ahead of Deadline',
    },
    keyTakeaways: [
      'Speed to lead is paramount in educational conversions: contacting parents within 10 minutes doubled conversion probability.',
      'Authentic student voices outperform polished corporate commercials.',
    ],
  },
];

export const TIMELINE_DATA: TimelineEvent[] = [
  {
    year: '2023 - Present',
    title: 'Lead Digital Strategist & Founder',
    role: 'Founder & Consultant',
    organization: 'Rihan Ali Digital Consulting',
    location: 'Wayanad, Kerala (Serving Global Clients)',
    description:
      'Advising startups, educational institutions, hospitality chains, and B2B exporters across India and GCC on Search Engine Optimization, bespoke WordPress systems, and high-performance acquisition funnels.',
    tag: 'career',
    highlights: [
      'Delivered 240+ successful digital projects with 98% client retention rate',
      'Engineered search ranking strategies generating millions in client revenue',
      'Launched modern educational platforms and high-converting ecommerce portals',
    ],
  },
  {
    year: '2021 - Present',
    title: 'District Youth Leadership & Community Development',
    role: 'Active Community Leader & Tech Coordinator',
    organization: 'SKSSF Wayanad District',
    location: 'Wayanad, Kerala',
    description:
      'Spearheading youth career guidance initiatives, digital literacy camps, flood relief coordination, and media outreach for community empowerment programs across Wayanad district.',
    tag: 'community',
    highlights: [
      'Organized leadership summits and skill training sessions impacting 5,000+ youth',
      'Developed digital check-in and volunteer coordination systems for district summits',
      'Championed educational guidance drives for underprivileged rural students',
    ],
  },
  {
    year: '2020 - 2023',
    title: 'Senior WordPress Developer & SEO Specialist',
    role: 'Technical Lead',
    organization: 'Apex Digital Solutions',
    location: 'Calicut, Kerala',
    description:
      'Led the web development and search marketing division. Architected custom WordPress themes, managed technical SEO audits, and directed performance ad campaigns on Google and Meta.',
    tag: 'career',
    highlights: [
      'Supervised development of 80+ enterprise WordPress and WooCommerce platforms',
      'Achieved average 280% organic traffic growth across managed client accounts',
      'Mentored junior developers and interns in modern front-end best practices',
    ],
  },
  {
    year: '2019 - Present',
    title: 'Digital Marketing Trainer & Speaker',
    role: 'Lead Instructor & Workshop Keynote',
    organization: 'Regional Academies & Self-Hosted Bootcamps',
    location: 'Kerala & Virtual',
    description:
      'Trained over 1,450+ students, business owners, and agency professionals in Search Engine Optimization, WordPress Development, Content Strategy, and Performance Advertising.',
    tag: 'milestone',
    highlights: [
      'Conducted 45+ hands-on practical masterclasses with verifiable certifications',
      'Maintained a 4.9/5 student satisfaction rating across all cohorts',
      'Empowered rural graduates in Wayanad to launch successful freelance careers',
    ],
  },
  {
    year: '2016 - 2019',
    title: 'Higher Education & Foundation in Technology',
    role: 'Student & Creative Lead',
    organization: 'University of Calicut Affiliated Institute',
    location: 'Kerala, India',
    description:
      'Completed academic degrees with a deep focus on computer applications, digital communications, and business management while actively freelancing for local SMBs.',
    tag: 'education',
    highlights: [
      'Led the college technical and media club',
      'Built first commercial website for a local enterprise during sophomore year',
      'Awarded student leader of the year for inter-collegiate tech symposiums',
    ],
  },
];

export const SKILLS_MATRIX = [
  {
    category: 'Search Engine Optimization (SEO)',
    skills: [
      { name: 'Technical SEO & Crawl Architecture', level: 96, tools: 'Screaming Frog, Google Search Console' },
      { name: 'On-Page SEO & Entity Schema Markup', level: 95, tools: 'Schema.org, JSON-LD, RankMath' },
      { name: 'Keyword Research & Search Intent Mapping', level: 94, tools: 'Ahrefs, Semrush, Keyword Planner' },
      { name: 'Google Business Profile & Local 3-Pack', level: 98, tools: 'BrightLocal, Geo-Citations' },
      { name: 'Core Web Vitals & Speed Optimization', level: 92, tools: 'PageSpeed Insights, GTmetrix' },
      { name: 'White-Hat Authority & Link Building', level: 88, tools: 'HARO, Outreach, Digital PR' },
    ],
  },
  {
    category: 'Website Development & WordPress',
    skills: [
      { name: 'Custom WordPress Theme Architecture', level: 95, tools: 'PHP, Gutenberg, Elementor Pro' },
      { name: 'WooCommerce & Payment Gateways', level: 92, tools: 'Stripe, Razorpay, UPI Integration' },
      { name: 'Performance & Database Optimization', level: 90, tools: 'Redis, WP Rocket, Cloudflare' },
      { name: 'Security Hardening & Malware Shielding', level: 94, tools: 'Wordfence, SSL, Security Headers' },
      { name: 'Modern Front-End (HTML5, Tailwind, React)', level: 86, tools: 'Tailwind CSS, React, TypeScript' },
      { name: 'CMS Migration & Zero-Downtime Transfers', level: 95, tools: 'All-in-One WP, Duplicator Pro' },
    ],
  },
  {
    category: 'Digital Marketing & Paid Ads',
    skills: [
      { name: 'Meta Ads (Facebook & Instagram)', level: 94, tools: 'Meta Ads Manager, Conversions API' },
      { name: 'Google Ads (Search & Performance Max)', level: 92, tools: 'Google Ads, Google Tag Manager' },
      { name: 'Conversion Rate Optimization (CRO)', level: 89, tools: 'Hotjar, Microsoft Clarity, A/B Testing' },
      { name: 'Lead Funnel & WhatsApp Automation', level: 96, tools: 'Zapier, Make.com, Wati' },
      { name: 'Email Marketing & Drip Automation', level: 88, tools: 'Mailchimp, Klaviyo, Brevo' },
      { name: 'Marketing Analytics & Attribution', level: 90, tools: 'GA4, Looker Studio Dashboards' },
    ],
  },
  {
    category: 'Leadership, Design & Training',
    skills: [
      { name: 'Curriculum Design & Workshop Delivery', level: 96, tools: 'Interactive Labs, Certification' },
      { name: 'Community Leadership & Volunteer Org', level: 98, tools: 'SKSSF District Initiatives' },
      { name: 'Brand Identity & Visual System Design', level: 90, tools: 'Figma, Adobe Illustrator, Canva' },
      { name: 'Public Speaking & Tech Keynotes', level: 94, tools: 'Stage Presentation, Youth Mentorship' },
    ],
  },
];

export const TESTIMONIALS_LIST: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'K. M. Basheer',
    role: 'Managing Director',
    companyOrOrg: 'Malabar Agro Exports',
    location: 'Wayanad, Kerala',
    category: 'Client',
    rating: 5,
    quote:
      'Rihan transformed our export presence. Our company was invisible online; today we rank #1 on Google for bulk cardamom and black pepper export keywords. We have signed multi-ton contracts with buyers across the Middle East because of his SEO strategy.',
    projectType: 'SEO & B2B Web Development',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-2',
    clientName: 'Shamsudheen V.',
    role: 'General Manager',
    companyOrOrg: 'Vythiri Mist Eco-Resort',
    location: 'Vythiri, Wayanad',
    category: 'Client',
    rating: 5,
    quote:
      'Rihan is a master of local search and conversion design. We reduced our reliance on OTA commission sites by 62% in under 5 months. The direct booking engine he built paid for itself ten times over.',
    projectType: 'Local SEO & Direct Booking Engine',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-3',
    clientName: 'Fathima Nihala',
    role: 'Senior Digital Associate',
    companyOrOrg: 'Former Student & Agency Marketer',
    location: 'Calicut, Kerala',
    category: 'Student',
    rating: 5,
    quote:
      'Rihan Sir’s Technical SEO masterclass is the single best educational experience of my career. He does not just recite concepts; we worked on live client audits, solved crawl errors, and wrote JSON-LD schema. Within 3 weeks of finishing the course, I landed my dream agency role.',
    projectType: 'Technical SEO Masterclass',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-4',
    clientName: 'Dr. Farhan K.',
    role: 'Director of Healthcare Operations',
    companyOrOrg: 'Apex Specialty Clinics',
    location: 'Kerala, India',
    category: 'Client',
    rating: 5,
    quote:
      'Finding someone who understands both the technical intricacies of web design and the business economics of lead generation is rare. Rihan consistently delivers 300+ patient inquiries every month for our regional branches with remarkable ROAS.',
    projectType: 'Google Ads & Healthcare Funnels',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-5',
    clientName: 'Sayyid Munawwar Ali',
    role: 'District Advisory Board',
    companyOrOrg: 'SKSSF Wayanad District Committee',
    location: 'Wayanad, Kerala',
    category: 'Organization',
    rating: 5,
    quote:
      'Rihan Ali exemplifies selfless, forward-thinking community leadership. His organizational acumen in coordinating digital systems for large youth summits, flood relief helplines, and educational workshops has inspired thousands of young people across Wayanad.',
    projectType: 'Community Leadership & Summit Tech',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
  },
  {
    id: 't-6',
    clientName: 'Muhammed Salman',
    role: 'Freelance WordPress Specialist',
    companyOrOrg: 'WebStudio Malabar',
    location: 'Mananthavady, Wayanad',
    category: 'Student',
    rating: 5,
    quote:
      'I was struggling to find high-paying web clients. Rihan taught us how to pitch, build enterprise-grade WordPress systems, and position ourselves as consultants. Today I run a profitable studio with clients in the UK and UAE.',
    projectType: 'WordPress & Agency Bootcamp',
    verified: true,
    avatar: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=200&q=80',
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'blog-seo-2025',
    title: 'The Modern SEO Blueprint for 2025: Entity Search, Schema & Core Web Vitals',
    slug: 'modern-seo-blueprint-2025',
    excerpt:
      'How search engines have evolved beyond simple keyword frequency into semantic entity graphs, and how businesses can capture prime real estate in Google AI Overviews.',
    content: [
      'Search engine optimization is undergoing its most radical transformation in two decades. Traditional keyword stuffing and surface-level backlinks no longer move the needle.',
      '1. Entity-Based Semantic Indexing: Google does not see your web page as a string of characters; it connects concepts into an interconnected Knowledge Graph. By defining clear Schema JSON-LD identities (Person, Organization, ItemList, Service), you tell Google exactly what entity you represent.',
      '2. Zero-Click Search & AI Overviews: Optimize for Direct Answers. Structure your content with concise definitions, bulleted criteria, and verifiable data tables that generative models can cite directly.',
      '3. Core Web Vitals & Real User Experience (INP): Interaction to Next Paint (INP) is now a decisive metric. Eliminate bloated JavaScript trackers and render-blocking fonts to maintain sub-200ms responsiveness.',
    ],
    category: 'SEO',
    tags: ['Technical SEO', 'Schema Markup', 'Core Web Vitals', 'AI Overviews'],
    date: 'February 18, 2025',
    readTime: '6 min read',
    author: {
      name: 'Rihan Ali',
      role: 'SEO & Growth Consultant',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    views: 3420,
    featured: true,
  },
  {
    id: 'blog-wordpress-speed',
    title: 'How to Achieve Sub-1s Load Speeds on WordPress Without Breaking Your Theme',
    slug: 'sub-1s-wordpress-speed-optimization',
    excerpt:
      'Practical architectural steps to take any sluggish WordPress install and elevate it to 95+ PageSpeed on mobile and desktop.',
    content: [
      'Site speed is not just an SEO ranking factor; every 100ms of delay costs e-commerce stores 1% in conversion rate.',
      'Step 1: Choose Lean Foundations: Avoid mega-themes with 200 unused shortcodes. Use lightweight Gutenberg blocks, clean child themes, or stripped-down page builders.',
      'Step 2: Database Indexing & Transients Cleanup: Uncleaned wp_options tables containing thousands of autoloaded transients degrade server query performance. Clean them periodically with WP-CLI.',
      'Step 3: Asset Unloading: Do not load your contact form scripts or slider CSS on blog articles where they are never used. Use conditional asset managers to keep HTTP requests minimal.',
      'Step 4: Edge Caching with Cloudflare: Cache static HTML pages on edge server nodes nearest to your visitors in India and the Middle East.',
    ],
    category: 'WordPress',
    tags: ['WordPress', 'Speed Optimization', 'PageSpeed', 'Caching'],
    date: 'January 24, 2025',
    readTime: '7 min read',
    author: {
      name: 'Rihan Ali',
      role: 'WordPress Architect',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    views: 2890,
  },
  {
    id: 'blog-local-seo-kerala',
    title: 'Local SEO Mastery: Dominating Google Business Profile in Kerala & Regional Markets',
    slug: 'local-seo-mastery-kerala',
    excerpt:
      'A proven framework for clinics, resorts, schools, and local services to monopolize the Google Local 3-Pack and drive calls.',
    content: [
      'For 78% of local service searches, users never click past the Google Maps 3-Pack. If your business is not visible there, you are conceding customer revenue to competitors.',
      '1. Exact Category Alignment: Select your primary category with surgical precision. Secondary categories should only be added if you genuinely offer those distinct services.',
      '2. Geotagged Local Citations: Ensure your Name, Address, and Phone (NAP) match character-for-character across JustDial, Sulekha, IndiaMart, and local chambers of commerce.',
      '3. Continuous Review Velocity: Google rewards steady, fresh review streams with high-sentiment keywords mentioned by real customers. Set up automated WhatsApp review triggers post-service.',
    ],
    category: 'Business Growth',
    tags: ['Local SEO', 'Google Maps', 'Kerala Business', 'Lead Gen'],
    date: 'December 12, 2024',
    readTime: '5 min read',
    author: {
      name: 'Rihan Ali',
      role: 'Digital Marketing Specialist',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    views: 4120,
    featured: true,
  },
  {
    id: 'blog-youth-empowerment',
    title: 'Rural Youth Empowerment: How Digital Skills Are Unlocking Global Freelance Careers in Wayanad',
    slug: 'rural-youth-empowerment-digital-skills',
    excerpt:
      'Reflections on grassroots community training, youth leadership, and why remote technology skills are the antidote to regional brain-drain.',
    content: [
      'Growing up in Wayanad, one frequently witnesses talented graduates moving away because traditional local employment options are scarce.',
      'Through community workshops with SKSSF and self-hosted technical cohorts, we have demonstrated that with a laptop and internet connection, an ambitious youth can consult for businesses in London, Dubai, or Singapore from right here in Kerala.',
      'Key competencies that yield immediate market value include technical SEO audit reporting, WordPress maintenance, and high-converting ad creative design.',
    ],
    category: 'Community Leadership',
    tags: ['Community', 'Youth Leadership', 'Wayanad', 'Career Guidance'],
    date: 'November 05, 2024',
    readTime: '4 min read',
    author: {
      name: 'Rihan Ali',
      role: 'Community Leader & Trainer',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80',
    },
    views: 3100,
  },
];

export const FREE_RESOURCES: ResourceItem[] = [
  {
    id: 'res-seo-checklist',
    title: 'The 2025 Comprehensive SEO & Technical Audit Checklist',
    category: 'SEO',
    description:
      'A 62-point actionable checklist covering crawl budget, schema markup, canonicalization, Core Web Vitals, and keyword intent.',
    format: 'Interactive PDF + Notion Sheet',
    fileSize: '3.4 MB',
    downloadsCount: 1840,
    featured: true,
    contentSummary: [
      'Technical robots.txt and sitemap architecture',
      'Entity schema JSON-LD templates ready to copy-paste',
      'On-page title, H1-H3, and image alt text matrix',
      'Core Web Vitals diagnostic benchmark tests',
    ],
  },
  {
    id: 'res-wp-speed-blueprint',
    title: 'WordPress Speed & Security Hardening Master Blueprint',
    category: 'WordPress',
    description:
      'Step-by-step configuration manual for Redis object caching, Cloudflare page rules, htaccess security rules, and database indexing.',
    format: 'Cheat Sheet PDF',
    fileSize: '2.1 MB',
    downloadsCount: 1420,
    contentSummary: [
      'Optimal WP Rocket & Perfmatters settings',
      'Database transient cleanup SQL scripts',
      'Hardened security rules preventing brute-force logins',
    ],
  },
  {
    id: 'res-social-calendar',
    title: 'High-Converting 30-Day Social Media Content Calendar',
    category: 'Marketing',
    description:
      '30 days of pre-tested hooks, carousel storyboards, and call-to-action frameworks engineered for service businesses and trainers.',
    format: 'Google Sheet / Excel Template',
    fileSize: '1.2 MB',
    downloadsCount: 2280,
    featured: true,
    contentSummary: [
      'Viral hook formulas for Instagram Reels and LinkedIn',
      'Lead magnet promotion post templates',
      'Case study highlight formats that trigger DMs',
    ],
  },
  {
    id: 'res-keyword-sheet',
    title: 'Commercial Intent Keyword Research Matrix & Cluster Model',
    category: 'Templates',
    description:
      'The exact spreadsheet model Rihan uses to cluster keywords by transactional intent, difficulty score, and search volume.',
    format: 'Google Sheets Template',
    fileSize: '850 KB',
    downloadsCount: 1690,
    contentSummary: [
      'Automated search intent categorization formula',
      'Content gap prioritization score calculator',
      'Competitor ranking gap analysis framework',
    ],
  },
];

export const WORKSHOPS_LIST: WorkshopCourse[] = [
  {
    id: 'course-tech-seo',
    title: 'Technical SEO & Search Console Masterclass',
    audience: 'All Levels',
    duration: '4 Weeks (Weekend Live Sessions + 1-on-1 Lab)',
    mode: 'Online & In-Person (Wayanad/Calicut)',
    level: 'Beginner to Advanced',
    nextBatchDate: 'October 10, 2026',
    seatsRemaining: 6,
    fee: '₹5,999 / $79',
    modules: [
      'Week 1: Search Engine Architecture & Crawl Indexation Audits',
      'Week 2: Keyword Entity Research & Search Intent Mapping',
      'Week 3: Schema Markup, JSON-LD, and Core Web Vitals Surgery',
      'Week 4: Real-World Client Audit Project & White-Hat Link Outreach',
    ],
    keyOutcomes: [
      'Perform enterprise-grade technical SEO audits with confidence',
      'Write custom Schema JSON-LD without code dependencies',
      'Graduate with an official, verifiable digital credential ID',
      'Build a portfolio case study during the cohort',
    ],
  },
  {
    id: 'course-wp-arch',
    title: 'Modern WordPress Architecture & WooCommerce Mastery',
    audience: 'Entrepreneurs',
    duration: '3 Weeks Intensive',
    mode: 'Live Online',
    level: 'Intermediate',
    nextBatchDate: 'November 05, 2026',
    seatsRemaining: 8,
    fee: '₹6,499 / $85',
    modules: [
      'Module 1: Bespoke Layout Architecture & Custom Post Types',
      'Module 2: WooCommerce, Razorpay/Stripe, and Checkout Optimization',
      'Module 3: Speed Hardening: Sub-1s Loads, Cloudflare & Security Shields',
      'Module 4: Client Handover, Hosting Management & Retainer Pricing',
    ],
    keyOutcomes: [
      'Build ultra-fast, responsive business sites without bloat',
      'Integrate international and domestic payment solutions',
      'Charge agency rates for customized WordPress development',
    ],
  },
  {
    id: 'course-performance-ads',
    title: 'Performance Marketing & Lead Funnel Bootcamp',
    audience: 'Corporate Teams',
    duration: '2 Weeks Masterclass',
    mode: 'Corporate Onsite',
    level: 'Masterclass',
    nextBatchDate: 'November 22, 2026',
    seatsRemaining: 4,
    fee: '₹7,999 / $99',
    modules: [
      'Day 1-3: Meta Pixel, Conversions API & Server-Side Event Tracking',
      'Day 4-7: High-Converting Ad Copywriting & Creative Hook Frameworks',
      'Day 8-10: Google Search Ads & High-Intent Bidding Strategies',
      'Day 11-14: Lead Automation to WhatsApp & CRM Attribution Analysis',
    ],
    keyOutcomes: [
      'Scale ad budgets with confidence and positive ROAS',
      'Stop wasting money on poor audience segmentation',
      'Master direct lead capture via conversational automation',
    ],
  },
];

export const COMMUNITY_ACTIVITIES: CommunityActivity[] = [
  {
    id: 'comm-skssf-summit',
    title: 'District Youth Leadership Summit Coordination',
    role: 'Chief Technical & Youth Media Coordinator',
    organization: 'SKSSF Wayanad District',
    period: '2022 - 2025',
    description:
      'Organized multiple district-level student conventions and leadership retreats across Wayanad, handling digital registrations, keynote presentations, and volunteer distribution networks for over 5,000+ delegates.',
    impactNumbers: '5,000+ Youth Engaged | 48 Panchayats Represented',
    initiatives: [
      'Custom digital badge and QR registration workflow to eliminate bottlenecks',
      'Youth career awareness sessions connecting rural youth to digital opportunities',
      'Media cell operations with real-time video highlights and press releases',
    ],
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'comm-flood-relief',
    title: 'Wayanad Disaster Relief & Volunteer Coordination Helpdesk',
    role: 'Helpline & Digital Logistics Volunteer',
    organization: 'Community Relief Action Cell',
    period: 'Monsoon Seasons (2019, 2024)',
    description:
      'Operated centralized real-time information dissemination desks during catastrophic monsoon landslides and flooding in hilly terrains of Wayanad, coordinating essential food, medicine, and rescue team dispatch.',
    impactNumbers: '1,200+ Families Assisted | 40+ Relief Camps Supplied',
    initiatives: [
      'Real-time relief supply tracking spreadsheet connected to ground teams',
      'Verified social helpline updates counteracting regional misinformation',
      'Direct volunteer onboarding and dispatch coordination',
    ],
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'comm-student-mentor',
    title: 'Rural Digital Literacy & Career Guidance Camps',
    role: 'Lead Mentor & Speaker',
    organization: 'Wayanad Youth Foundation & Local Masjids/Clubs',
    period: '2021 - Present',
    description:
      'Conducting free weekend digital literacy seminars for high school and college students across rural Wayanad villages, helping them understand remote careers, freelancing, and tech education.',
    impactNumbers: '850+ Rural Students Mentored | 18 Village Workshops',
    initiatives: [
      'Introduction to Coding & Modern Web Technologies',
      'Safe Internet Usage, Cyber Hygiene, and Digital Ethics',
      'Scholarship information and competitive exam awareness',
    ],
    image: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80',
  },
];
