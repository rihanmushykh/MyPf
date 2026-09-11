import React, { useState } from 'react';
import {
  Search,
  Layout,
  TrendingUp,
  GraduationCap,
  Sparkles,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  Calendar,
  HelpCircle,
  ChevronDown,
  Layers,
  ArrowUpRight,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_LIST } from '../data/portfolioData';

interface ServicesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenRfp: () => void;
}

export const ServicesView: React.FC<ServicesViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenRfp,
}) => {
  const [selectedService, setSelectedService] = useState<string>(SERVICES_LIST[0].id);
  const [faqOpen, setFaqOpen] = useState<number | null>(null);

  const activeServiceData = SERVICES_LIST.find((s) => s.id === selectedService) || SERVICES_LIST[0];

  const serviceFaqs = [
    {
      q: 'What is the typical turnaround time for a WordPress website?',
      a: 'For high-performance brochure and business websites, typical delivery is 2 to 3 weeks including custom UI, responsive testing, and speed optimization. Complex WooCommerce multi-vendor or membership platforms typically take 4 to 6 weeks.',
    },
    {
      q: 'How soon can we anticipate measurable SEO results?',
      a: 'Technical SEO fixes and schema implementation start indexing within 10–14 days. Substantial organic traffic jumps and top-3 keyword rankings typically mature within 60 to 90 days as search engines recrawl and validate domain authority.',
    },
    {
      q: 'Do you provide ongoing monthly retainer support after launch?',
      a: 'Yes. We offer continuous growth retainers covering technical SEO monitoring, Core Web Vitals maintenance, security patching, quarterly content cluster updates, and monthly executive analytics reporting.',
    },
    {
      q: 'Can corporate or educational training sessions be conducted on-site in Kerala or GCC?',
      a: 'Absolutely. Rihan conducts both on-campus bootcamps across Kerala as well as hybrid masterclasses for institutions and companies in UAE, Saudi Arabia, and remote international teams.',
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-20">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          High-Impact Solutions
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Strategic Services Engineered for Compounding Revenue
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          From zero-latency WordPress platforms to multi-city search domination and performance lead generation funnels. Every deliverable is backed by transparent KPI accountability.
        </p>
        <div className="pt-2 flex justify-center gap-3">
          <button
            onClick={onOpenRfp}
            className="px-6 py-3 rounded-2xl bg-[#0F172A] dark:bg-teal-500 hover:bg-slate-800 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-2 transition-all shadow-md active:scale-95"
          >
            <span>Request Custom Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-2xl border border-slate-200 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 font-semibold text-xs flex items-center gap-1.5 transition-colors"
          >
            <Calendar className="w-4 h-4 text-teal-500" />
            <span>Book 30-Min Discovery</span>
          </button>
        </div>
      </section>

      {/* 2. Interactive Service Deep-Dive & Selector */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Selector list */}
        <div className="lg:col-span-4 space-y-2.5">
          {SERVICES_LIST.map((srv) => {
            const isSelected = srv.id === selectedService;
            return (
              <button
                key={srv.id}
                onClick={() => setSelectedService(srv.id)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-150 border ${
                  isSelected
                    ? 'bg-white dark:bg-slate-850 border-teal-500 shadow-md ring-2 ring-teal-500/20'
                    : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    {srv.title}
                  </span>
                  <span className="font-mono text-[11px] text-teal-600 dark:text-teal-400 font-semibold">
                    {srv.startingPrice}
                  </span>
                </div>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1 line-clamp-1">
                  {srv.tagline}
                </p>
              </button>
            );
          })}
        </div>

        {/* Right Column: Detailed Breakdown Card */}
        <div className="lg:col-span-8">
          <div className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 dark:border-slate-800 gap-4">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
                  Service Architecture
                </span>
                <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mt-0.5">
                  {activeServiceData.title}
                </h2>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  {activeServiceData.tagline}
                </p>
              </div>

              <div className="text-left sm:text-right shrink-0">
                <div className="text-[10px] text-slate-400">Tier Pricing</div>
                <div className="font-mono font-extrabold text-lg text-slate-900 dark:text-white">
                  {activeServiceData.startingPrice}
                </div>
                <button
                  onClick={onOpenRfp}
                  className="mt-2 px-4 py-2 rounded-xl bg-[#14B8A6] hover:bg-teal-500 text-slate-950 font-bold text-xs inline-flex items-center gap-1.5 transition-all shadow-sm"
                >
                  <span>Select Service</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeServiceData.description}
            </p>

            {/* Deliverables Checklist */}
            <div>
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
                Key Scope & Deliverables:
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeServiceData.deliverables.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl bg-slate-50 dark:bg-slate-850 border border-slate-200/70 dark:border-slate-800 flex items-start gap-2.5 text-xs text-slate-800 dark:text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Tech Stack */}
            <div>
              <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Specialized Tooling & Environment:
              </h3>
              <div className="flex flex-wrap gap-2">
                {(activeServiceData.tools || ['Google Search Console', 'Ahrefs', 'Screaming Frog', 'Figma', 'WP Engine']).map((t, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-xs border border-slate-200 dark:border-slate-700 font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div className="p-4 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-500/20 text-xs text-slate-700 dark:text-slate-300">
              <strong className="text-slate-900 dark:text-white">Ideal For: </strong>
              {activeServiceData.targetAudience || 'Business Owners, Educational Institutions, Startups, and Growing Brands'}
            </div>
          </div>
        </div>
      </section>

      {/* 3. The 4-Step Strategic Execution Framework */}
      <section className="space-y-8">
        <div className="text-center max-w-xl mx-auto">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
            Execution Rigor
          </span>
          <h2 className="font-heading font-bold text-2xl sm:text-3xl text-slate-900 dark:text-white mt-1">
            How Every Project Unfolds
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              step: '01',
              title: 'Discovery & Forensic Audit',
              desc: 'Deep technical crawl, competitor gap analysis, search intent mapping, and conversion leak detection.',
            },
            {
              step: '02',
              title: 'Architecture & Prototyping',
              desc: 'Wireframing responsive user flows, schema structuring, speed benchmarks, and copy wireframes.',
            },
            {
              step: '03',
              title: 'Engineering & Deployment',
              desc: 'Custom WordPress development, pixel tracking integrations, SEO meta tagging, and staging QA.',
            },
            {
              step: '04',
              title: 'Measurement & Scaling',
              desc: 'Core Web Vitals monitoring, heatmap analysis, ad budget scaling, and weekly executive reviews.',
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xs relative space-y-3"
            >
              <div className="font-mono font-bold text-2xl text-teal-500">{item.step}</div>
              <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                {item.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Frequently Asked Questions Accordion */}
      <section className="max-w-3xl mx-auto space-y-6">
        <div className="text-center">
          <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
            Client Inquiries
          </span>
          <h2 className="font-heading font-bold text-2xl text-slate-900 dark:text-white mt-1">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {serviceFaqs.map((faq, idx) => {
            const isOpen = faqOpen === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setFaqOpen(isOpen ? null : idx)}
                  className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4"
                >
                  <span className="font-semibold text-xs sm:text-sm text-slate-900 dark:text-white">
                    {faq.q}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 transition-transform duration-200 shrink-0 ${
                      isOpen ? 'rotate-180 text-teal-500' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-4 pb-5 sm:px-5 text-xs text-slate-600 dark:text-slate-400 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Direct Project Request CTA Strip */}
      <section className="rounded-3xl p-8 sm:p-10 bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Need a tailored multi-service retainer?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            We bundle Web Development, Technical SEO, and Paid Lead Funnels with unified monthly accountability.
          </p>
        </div>
        <button
          onClick={onOpenRfp}
          className="px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-95 shrink-0 shadow-md"
        >
          Request Custom Proposal
        </button>
      </section>
    </div>
  );
};
