import React, { useState } from 'react';
import {
  Star,
  Quote,
  CheckCircle2,
  Building,
  GraduationCap,
  Users,
  Briefcase,
} from 'lucide-react';
import { PageId } from '../types';
import { TESTIMONIALS_LIST } from '../data/portfolioData';

interface TestimonialsViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const TestimonialsView: React.FC<TestimonialsViewProps> = ({
  onNavigate,
  onOpenBooking,
}) => {
  const [selectedCat, setSelectedCat] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Reviews (50+)' },
    { id: 'business', label: 'Business Owners' },
    { id: 'education', label: 'Educational Institutes' },
    { id: 'student', label: 'Students & Trainees' },
    { id: 'community', label: 'Community Leaders' },
  ];

  const filteredTestimonials =
    selectedCat === 'all'
      ? TESTIMONIALS_LIST
      : TESTIMONIALS_LIST.filter((t) => t.category === selectedCat);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Social Proof & Impact
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Trusted by Entrepreneurs, Deans, Founders & Students
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Real feedback from organizations whose search visibility, admissions, or online sales were directly transformed through Rihan Ali's execution.
        </p>

        {/* Global Rating Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-amber-500/10 border border-amber-500/30 text-amber-600 dark:text-amber-400 text-xs font-semibold">
          <div className="flex items-center gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 fill-amber-400" />
            ))}
          </div>
          <span className="font-heading font-bold text-slate-900 dark:text-white">
            4.98 / 5.0 Average Rating Across 180+ Client Deployments
          </span>
        </div>
      </section>

      {/* 2. Category Filter */}
      <div className="flex justify-center items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCat(c.id)}
            className={`px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              selectedCat === c.id
                ? 'bg-[#0F172A] text-white dark:bg-teal-500 dark:text-slate-950 shadow-md'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* 3. Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTestimonials.map((t) => (
          <div
            key={t.id}
            className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all duration-200 flex flex-col justify-between space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-amber-400">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                  ))}
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-800 text-slate-500">
                  {t.category}
                </span>
              </div>

              <p className="text-xs text-slate-700 dark:text-slate-300 italic leading-relaxed">
                "{t.quote}"
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center gap-3">
              <img
                src={t.avatar}
                alt={t.clientName}
                className="w-10 h-10 rounded-full object-cover border border-slate-200 dark:border-slate-700"
              />
              <div>
                <div className="font-heading font-bold text-xs text-slate-900 dark:text-white">
                  {t.clientName}
                </div>
                <div className="text-[10px] text-slate-500 dark:text-slate-400">
                  {t.role}, <strong className="text-slate-700 dark:text-slate-300">{t.companyOrOrg}</strong>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Bottom CTA */}
      <section className="text-center py-8">
        <p className="text-xs text-slate-500 dark:text-slate-400 mb-3">
          Ready to achieve compounding organic growth for your brand?
        </p>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-2xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-bold text-xs transition-all shadow-md active:scale-95"
        >
          Book 1-on-1 Consultation
        </button>
      </section>
    </div>
  );
};
