import React, { useState } from 'react';
import {
  TrendingUp,
  SlidersHorizontal,
  CheckCircle2,
  Quote,
  Layers,
  ArrowRight,
  ArrowUpRight,
  ExternalLink,
  Target,
  BarChart3,
  Calendar,
} from 'lucide-react';
import { PageId } from '../types';
import { CASE_STUDIES } from '../data/portfolioData';

interface CaseStudiesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenRfp: () => void;
}

export const CaseStudiesView: React.FC<CaseStudiesViewProps> = ({
  onNavigate,
  onOpenBooking,
  onOpenRfp,
}) => {
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES[0].id);

  const activeCase = CASE_STUDIES.find((c) => c.id === selectedCaseId) || CASE_STUDIES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Data-Backed Case Studies
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          In-Depth Strategic Audits & Revenue Growth Transformations
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore complete architectural breakdowns: from initial technical diagnosis to algorithm dominance and compound lead velocity.
        </p>
      </section>

      {/* 2. Case Selector Nav */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {CASE_STUDIES.map((cs) => {
          const isSelected = cs.id === selectedCaseId;
          return (
            <button
              key={cs.id}
              onClick={() => setSelectedCaseId(cs.id)}
              className={`text-left p-5 rounded-3xl transition-all duration-200 border ${
                isSelected
                  ? 'bg-white dark:bg-slate-850 border-teal-500 shadow-xl ring-2 ring-teal-500/20'
                  : 'bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="flex items-center justify-between text-[11px] font-medium text-slate-400 mb-2">
                <span>{cs.client}</span>
                <span className="px-2 py-0.5 rounded-full bg-slate-200 dark:bg-slate-800 font-mono text-[10px]">
                  {cs.timeline}
                </span>
              </div>
              <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white line-clamp-2">
                {cs.title}
              </h3>
              <div className="font-heading font-extrabold text-teal-600 dark:text-teal-400 text-sm mt-3 flex items-center gap-1.5">
                <TrendingUp className="w-4 h-4" />
                <span>{cs.metrics[0].value} {cs.metrics[0].label}</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* 3. Active Case Study Deep-Dive */}
      <div className="rounded-3xl p-6 sm:p-10 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-xl space-y-10">
        {/* Top Summary Banner */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-100 dark:border-slate-800">
          <div className="lg:col-span-7 space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                {activeCase.client}
              </span>
              <span className="text-xs text-slate-400 font-mono">
                {activeCase.industry} · {activeCase.timeline}
              </span>
            </div>
            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white">
              {activeCase.title}
            </h2>
            <div className="p-3 rounded-2xl bg-teal-50 dark:bg-teal-950/40 border border-teal-500/30 text-xs sm:text-sm text-teal-900 dark:text-teal-200 font-medium flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-teal-500 shrink-0" />
              <span>
                <strong>Hero Impact: </strong>{activeCase.heroMetric.value} — {activeCase.heroMetric.label}
              </span>
            </div>
          </div>

          {/* Key Metrics Bento */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-2.5">
            {[
              { label: 'Organic Traffic', value: activeCase.metrics.trafficGrowth },
              { label: 'Keyword Rankings', value: activeCase.metrics.keywordGrowth },
              { label: 'Conversion Lift', value: activeCase.metrics.conversionImprovement },
              { label: 'Verified Leads', value: activeCase.metrics.leadsGenerated },
            ].map((m, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 text-center"
              >
                <div className="font-heading font-bold text-xs sm:text-sm text-teal-600 dark:text-teal-400 leading-tight">
                  {m.value}
                </div>
                <div className="text-[10px] text-slate-400 mt-1">{m.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Problem vs Strategy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-6 rounded-3xl bg-rose-50/50 dark:bg-rose-950/20 border border-rose-200 dark:border-rose-900/40 space-y-3">
            <h3 className="font-heading font-bold text-base text-rose-900 dark:text-rose-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
              The Root Business Problem
            </h3>
            <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
              {activeCase.problem}
            </p>
          </div>

          <div className="p-6 rounded-3xl bg-teal-50/50 dark:bg-teal-950/20 border border-teal-500/30 space-y-3">
            <h3 className="font-heading font-bold text-base text-teal-900 dark:text-teal-300 flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-teal-500" />
              Rihan's Strategic Intervention
            </h3>
            <ul className="space-y-2 text-xs text-slate-700 dark:text-slate-300">
              {activeCase.strategy.map((strat, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                  <span>{strat}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Step-by-step Execution Blueprint */}
        <div className="space-y-4">
          <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white">
            Sequential Execution Phases:
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {activeCase.execution.map((step, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2"
              >
                <span className="font-mono text-xs font-bold text-teal-500">Phase 0{idx + 1}</span>
                <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">{step}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Takeaways & Enterprise ROI */}
        <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white border border-slate-800 relative">
          <Quote className="w-10 h-10 text-teal-500/20 absolute top-6 right-6" />
          <div className="font-heading font-bold text-sm text-teal-400 uppercase tracking-wider mb-3">
            Direct ROI: {activeCase.metrics.roi}
          </div>
          <h4 className="font-heading font-bold text-base text-white mb-2">Core Strategic Takeaways:</h4>
          <ul className="space-y-2 max-w-2xl">
            {activeCase.keyTakeaways.map((takeaway, idx) => (
              <li key={idx} className="text-xs sm:text-sm text-slate-300 flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-teal-400 shrink-0 mt-0.5" />
                <span>{takeaway}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Bottom CTA bar */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 dark:text-slate-400">
            Want similar quantitative returns for your organization?
          </div>
          <div className="flex gap-3">
            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Discuss Similar Architecture</span>
            </button>
            <button
              onClick={onOpenRfp}
              className="px-5 py-2.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 font-semibold text-xs hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              Submit Project RFP
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
