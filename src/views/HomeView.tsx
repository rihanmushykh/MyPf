import React, { useState } from 'react';
import {
  ArrowRight,
  Sparkles,
  Search,
  Layout,
  TrendingUp,
  Award,
  Globe,
  GraduationCap,
  Briefcase,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  Download,
  ArrowUpRight,
  Star,
  Users,
  Building2,
  Zap,
  Sliders,
} from 'lucide-react';
import { PageId } from '../types';
import {
  RIHAN_PROFILE,
  TRUSTED_BRANDS,
  SERVICES_LIST,
  PORTFOLIO_PROJECTS,
  TESTIMONIALS_LIST,
} from '../data/portfolioData';

interface HomeViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenRfp: () => void;
  onOpenAiChat: () => void;
  onOpenVerify: () => void;
  onSelectProject: (projectId: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenRfp,
  onOpenAiChat,
  onOpenVerify,
  onSelectProject,
}) => {
  // Live ROI / Growth Simulator state
  const [currentTraffic, setCurrentTraffic] = useState<number>(5000);
  const [currentConversion, setCurrentConversion] = useState<number>(1.2);
  const [averageDealValue, setAverageDealValue] = useState<number>(8000);

  // Computed projections with Rihan's SEO & CRO framework
  const projectedTraffic = Math.round(currentTraffic * 3.2); // 320% average lift
  const projectedConversion = Number((currentConversion * 2.1).toFixed(1)); // 2.1x conversion rate
  const currentMonthlyLeads = Math.round((currentTraffic * currentConversion) / 100);
  const projectedMonthlyLeads = Math.round((projectedTraffic * projectedConversion) / 100);
  const additionalMonthlyRevenue = (projectedMonthlyLeads - currentMonthlyLeads) * (averageDealValue * 0.15); // conservative 15% close rate

  return (
    <div className="space-y-24 pb-20">
      {/* 1. HERO SECTION */}
      <section className="relative pt-12 lg:pt-20 overflow-hidden">
        {/* Subtle decorative background ambient glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-gradient-to-tr from-teal-400/15 via-emerald-500/10 to-amber-400/10 blur-[100px] pointer-events-none rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Col: Hero Typography & Actions */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              {/* Trust Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 dark:bg-teal-500/20 border border-teal-500/30 text-teal-700 dark:text-teal-300 text-xs font-semibold shadow-xs">
                <span className="w-2 h-2 rounded-full bg-teal-500 animate-pulse" />
                <span>Rihan Ali · Wayanad, Kerala, India</span>
                <span className="text-teal-400/60">|</span>
                <span className="text-slate-600 dark:text-slate-300 font-medium">Global Digital Consulting</span>
              </div>

              {/* Exact Prompt Headline */}
              <h1 className="font-heading font-extrabold text-3xl sm:text-5xl lg:text-6xl text-slate-900 dark:text-white tracking-tight leading-[1.12]">
                Helping Businesses Grow Through{' '}
                <span className="bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-600 bg-clip-text text-transparent">
                  Digital Marketing, SEO & WordPress
                </span>
              </h1>

              {/* Exact Prompt Subheadline */}
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
                I build websites, improve search rankings, generate leads, and create digital systems that help businesses scale.
              </p>

              {/* CTAs: Hire Me, View Portfolio, Download Resume + AI Assistant */}
              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-2">
                <button
                  id="hero-hire-me-btn"
                  onClick={onOpenRfp}
                  className="px-6 py-3.5 rounded-2xl bg-[#0F172A] dark:bg-teal-500 hover:bg-slate-800 dark:hover:bg-teal-400 text-white dark:text-slate-950 font-bold text-sm flex items-center gap-2 transition-all shadow-md active:scale-95"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  id="hero-view-portfolio-btn"
                  onClick={() => onNavigate('portfolio')}
                  className="px-6 py-3.5 rounded-2xl glass-panel hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-white font-semibold text-sm transition-all border border-slate-200 dark:border-slate-700 shadow-xs"
                >
                  View Portfolio
                </button>

                <button
                  id="hero-download-resume-btn"
                  onClick={() => onNavigate('resume')}
                  className="px-4 py-3.5 rounded-2xl text-slate-600 dark:text-slate-300 hover:text-teal-500 dark:hover:text-teal-300 text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <Download className="w-4 h-4" />
                  <span>Resume PDF</span>
                </button>

                <button
                  id="hero-ai-advisor-btn"
                  onClick={onOpenAiChat}
                  className="px-4 py-3.5 rounded-2xl bg-teal-50 dark:bg-teal-950/40 text-teal-700 dark:text-teal-300 border border-teal-500/30 hover:border-teal-500/60 text-xs font-semibold flex items-center gap-1.5 transition-all shadow-xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-teal-500" />
                  <span>Ask AI Advisor</span>
                </button>
              </div>

              {/* Verified Trust Micro-strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-4 text-xs text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-1 text-amber-500">
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
                  <span className="font-bold text-slate-800 dark:text-slate-200 ml-1">5.0 / 5.0 Rating</span>
                </div>
                <span>·</span>
                <span className="flex items-center gap-1 text-slate-600 dark:text-slate-300">
                  <ShieldCheck className="w-4 h-4 text-teal-500" />
                  Verified Google & Meta Partner Experience
                </span>
              </div>
            </div>

            {/* Right Col: Apple & Linear styled Bento Visual Card */}
            <div className="lg:col-span-5 relative">
              <div className="relative mx-auto max-w-md lg:max-w-none">
                {/* Main Hero Card */}
                <div className="rounded-3xl p-3 bg-gradient-to-b from-slate-200 to-slate-100 dark:from-slate-800 dark:to-slate-900 border border-slate-300/80 dark:border-slate-700 shadow-2xl overflow-hidden">
                  <div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-slate-900">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=1000&q=80"
                      alt="Rihan Ali - Digital Marketing Specialist and SEO Expert"
                      className="w-full h-full object-cover object-center filter grayscale-[20%] hover:grayscale-0 transition-all duration-700 hover:scale-105"
                    />

                    {/* Gradient overlay for labels */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent flex flex-col justify-end p-6 text-white">
                      <div className="space-y-2">
                        <div className="flex items-center gap-2">
                          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping" />
                          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-300 font-semibold">
                            Executive Profile
                          </span>
                        </div>
                        <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                          Rihan Ali
                        </h2>
                        <p className="text-xs text-slate-300 line-clamp-2">
                          Digital Marketing Specialist · SEO Expert · WordPress Developer · SKSSF Youth Leader · Wayanad, Kerala
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating Floating Metric Pill 1 (Top Right) */}
                <div className="absolute -top-4 -right-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3 animate-bounce duration-1000">
                  <div className="w-9 h-9 rounded-xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Avg SEO Growth</div>
                    <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">+340% Traffic</div>
                  </div>
                </div>

                {/* Floating Metric Pill 2 (Bottom Left) */}
                <div className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-3 shadow-xl flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-amber-500/10 text-amber-600 dark:text-amber-400 flex items-center justify-center">
                    <Award className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-400 font-medium">Experience</div>
                    <div className="font-heading font-bold text-sm text-slate-900 dark:text-white">6+ Years & 240+ Proj</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. LIVE COUNTERS (Exact Prompt Items) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-lg">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 sm:gap-8 divide-y sm:divide-y-0 sm:divide-x divide-slate-100 dark:divide-slate-800">
            {RIHAN_PROFILE.stats.map((stat, idx) => (
              <div key={idx} className={`text-center ${idx > 0 ? 'pt-4 sm:pt-0 sm:pl-6' : ''}`}>
                <div className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl text-[#0F172A] dark:text-teal-400 tracking-tight">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-slate-700 dark:text-slate-300 mt-1">
                  {stat.label}
                </div>
                <div className="text-[11px] text-slate-400 dark:text-slate-500 mt-0.5">
                  Verified Performance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. FEATURED LOGOS & CLIENT TRUST SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
            Credibility & Impact
          </span>
          <h2 className="font-heading font-bold text-xl sm:text-2xl text-slate-900 dark:text-white mt-1">
            Trusted by Businesses, Institutions, Organizations & Community Groups
          </h2>
          <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
            Partnering with high-growth ventures across Kerala, UAE, and global markets.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3">
          {TRUSTED_BRANDS.map((brand, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200/80 dark:border-slate-800 text-center hover:border-teal-400/50 transition-all group flex flex-col justify-center items-center h-20"
            >
              <div className="font-bold text-xs text-slate-800 dark:text-slate-200 group-hover:text-teal-500 transition-colors">
                {brand.name}
              </div>
              <div className="text-[10px] text-slate-400 mt-0.5">{brand.category}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. CORE SPECIALTIES BENTO GRID (Apple / Stripe aesthetic) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
              Comprehensive Capabilities
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mt-1">
              End-to-End Digital Transformation
            </h2>
          </div>
          <button
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
          >
            <span>Explore all services & pricing</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="rounded-3xl p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center mb-4">
                  {srv.category === 'seo' && <Search className="w-6 h-6" />}
                  {srv.category === 'wordpress' && <Layout className="w-6 h-6" />}
                  {srv.category === 'marketing' && <TrendingUp className="w-6 h-6" />}
                  {srv.category === 'training' && <GraduationCap className="w-6 h-6" />}
                </div>
                <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white mb-2">
                  {srv.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                  {srv.description}
                </p>

                <ul className="space-y-1.5 mb-6 text-xs text-slate-700 dark:text-slate-300">
                  {srv.deliverables.slice(0, 3).map((del, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>{del}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">Starting from</div>
                  <div className="font-mono font-bold text-xs text-slate-900 dark:text-white">
                    {srv.startingPrice}
                  </div>
                </div>
                <button
                  onClick={() => onNavigate('services')}
                  className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-teal-500 hover:text-slate-950 text-slate-700 dark:text-slate-200 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. INTERACTIVE LIVE ROI & GROWTH CALCULATOR */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-6 sm:p-10 bg-gradient-to-br from-[#0F172A] via-slate-900 to-[#0F172A] text-white border border-slate-800 shadow-2xl relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Col: Controls */}
            <div className="lg:col-span-6 space-y-6">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/20 text-teal-300 border border-teal-500/30 mb-2">
                  <Sliders className="w-3.5 h-3.5 text-teal-400" />
                  <span>Growth Economics Engine</span>
                </div>
                <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white">
                  Estimate Your Organic Revenue & Lead Uplift
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-1">
                  Adjust your baseline metrics to calculate what Rihan's technical SEO and conversion architecture can deliver for your business over a 6-month horizon.
                </p>
              </div>

              {/* Sliders */}
              <div className="space-y-4 text-xs">
                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Current Monthly Website Visitors:</span>
                    <span className="font-mono text-teal-400">{currentTraffic.toLocaleString()} visits</span>
                  </div>
                  <input
                    type="range"
                    min="500"
                    max="50000"
                    step="500"
                    value={currentTraffic}
                    onChange={(e) => setCurrentTraffic(Number(e.target.value))}
                    className="w-full accent-[#14B8A6] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Current Visitor-to-Lead Conversion Rate:</span>
                    <span className="font-mono text-teal-400">{currentConversion}%</span>
                  </div>
                  <input
                    type="range"
                    min="0.5"
                    max="5.0"
                    step="0.1"
                    value={currentConversion}
                    onChange={(e) => setCurrentConversion(Number(e.target.value))}
                    className="w-full accent-[#14B8A6] cursor-pointer"
                  />
                </div>

                <div>
                  <div className="flex justify-between font-semibold mb-1">
                    <span>Average Customer / Client Deal Value:</span>
                    <span className="font-mono text-teal-400">₹{averageDealValue.toLocaleString()}</span>
                  </div>
                  <input
                    type="range"
                    min="2000"
                    max="100000"
                    step="2000"
                    value={averageDealValue}
                    onChange={(e) => setAverageDealValue(Number(e.target.value))}
                    className="w-full accent-[#14B8A6] cursor-pointer"
                  />
                </div>
              </div>
            </div>

            {/* Right Col: Projected Output Cards */}
            <div className="lg:col-span-6">
              <div className="rounded-2xl p-6 bg-slate-800/80 border border-slate-700/80 backdrop-blur-sm space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Projected Traffic</div>
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl text-teal-400 mt-1">
                      {projectedTraffic.toLocaleString()}
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">+320% Organic Boost</div>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-700 text-center">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Monthly Qualified Leads</div>
                    <div className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1">
                      {projectedMonthlyLeads} leads
                    </div>
                    <div className="text-[10px] text-emerald-400 mt-0.5">vs {currentMonthlyLeads} currently</div>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-gradient-to-r from-teal-950/60 via-slate-900 to-teal-950/60 border border-teal-500/40 text-center space-y-1">
                  <div className="text-xs text-slate-300">Estimated Additional Monthly Revenue Potential</div>
                  <div className="font-heading font-extrabold text-3xl sm:text-4xl text-emerald-400">
                    ₹{Math.round(additionalMonthlyRevenue).toLocaleString()}
                  </div>
                  <div className="text-[10px] text-slate-400">
                    Based on conservative 15% inquiry close rate across B2B & regional service benchmarks.
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <button
                    onClick={onOpenBooking}
                    className="px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 transition-all active:scale-95 shadow-md"
                  >
                    <Calendar className="w-4 h-4" />
                    <span>Book Strategy Discovery Call</span>
                  </button>
                  <button
                    onClick={onOpenRfp}
                    className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-700 text-white font-semibold text-xs border border-slate-700 transition-colors"
                  >
                    Request Project Proposal
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FEATURED PROJECTS PREVIEW */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
              Selected Work
            </span>
            <h2 className="font-heading font-extrabold text-2xl sm:text-4xl text-slate-900 dark:text-white tracking-tight mt-1">
              Case Highlights & Proven Results
            </h2>
          </div>
          <button
            onClick={() => onNavigate('portfolio')}
            className="inline-flex items-center gap-1 text-xs font-bold text-teal-600 dark:text-teal-400 hover:underline"
          >
            <span>View all 240+ completed works</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTFOLIO_PROJECTS.slice(0, 3).map((proj) => (
            <div
              key={proj.id}
              onClick={() => onSelectProject(proj.id)}
              className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-200 cursor-pointer group flex flex-col justify-between"
            >
              <div className="aspect-[16/10] overflow-hidden relative">
                <img
                  src={proj.image}
                  alt={proj.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold">
                  {proj.category}
                </div>
              </div>

              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">{proj.client} · {proj.location}</div>
                  <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mt-1 group-hover:text-teal-500 transition-colors">
                    {proj.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                    {proj.shortDesc}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                  <span className="font-heading font-extrabold text-teal-500 text-sm">
                    {proj.results[0]?.value} {proj.results[0]?.label}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 group-hover:text-slate-900 dark:group-hover:text-white flex items-center gap-1">
                    Details <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 7. TESTIMONIAL PREVIEW STRIP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
              Client & Student Endorsements
            </span>
            <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mt-1">
              Words From Visionaries & Leaders
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_LIST.slice(0, 3).map((t) => (
              <div
                key={t.id}
                className="p-6 rounded-2xl bg-white dark:bg-slate-850 border border-slate-200 dark:border-slate-800 shadow-xs flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                    "{t.quote}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-3 border-t border-slate-100 dark:border-slate-800">
                  <img
                    src={t.avatar}
                    alt={t.clientName}
                    className="w-9 h-9 rounded-full object-cover"
                  />
                  <div>
                    <div className="font-bold text-xs text-slate-900 dark:text-white">{t.clientName}</div>
                    <div className="text-[10px] text-slate-400">{t.role}, {t.companyOrOrg}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 text-center">
            <button
              onClick={() => onNavigate('testimonials')}
              className="text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline"
            >
              Read all verified reviews & student stories →
            </button>
          </div>
        </div>
      </section>

      {/* 8. FINAL INVITATION / LEADERSHIP BANNER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#14B8A6] text-white shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="max-w-xl space-y-3 text-center md:text-left">
            <h3 className="font-heading font-extrabold text-2xl sm:text-4xl text-white tracking-tight">
              Ready to Monopolize Your Market?
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed">
              Whether you need to scale an enterprise brand, launch a conversion-optimized WordPress platform, or organize a high-impact workshop in Wayanad or beyond.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 shrink-0">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-2xl bg-white hover:bg-slate-100 text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
            >
              Schedule Consultation
            </button>
            <a
              href={RIHAN_PROFILE.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-md"
            >
              <span>Instant WhatsApp</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
