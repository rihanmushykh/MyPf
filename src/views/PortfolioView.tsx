import React, { useState } from 'react';
import {
  Search,
  ExternalLink,
  SlidersHorizontal,
  ArrowUpRight,
  MapPin,
  TrendingUp,
  Sparkles,
} from 'lucide-react';
import { PageId } from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';

interface PortfolioViewProps {
  onNavigate: (page: PageId) => void;
  onSelectProject: (projectId: string) => void;
  onOpenRfp: () => void;
}

export const PortfolioView: React.FC<PortfolioViewProps> = ({
  onNavigate,
  onSelectProject,
  onOpenRfp,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filterCategories = [
    { id: 'all', label: 'All Projects (240+)' },
    { id: 'seo', label: 'SEO & Search' },
    { id: 'wordpress', label: 'WordPress Websites' },
    { id: 'marketing', label: 'Marketing Funnels' },
    { id: 'branding', label: 'Branding & Systems' },
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((proj) => {
    const matchesCategory =
      selectedCategory === 'all' || proj.category === selectedCategory;
    const matchesSearch =
      proj.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.client.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.shortDesc.toLowerCase().includes(searchQuery.toLowerCase()) ||
      proj.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Proven Track Record
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Crafted for Speed, Conversion & Market Authority
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Explore selected case studies spanning tourism, retail, education, healthcare, and export enterprises across Kerala and global markets.
        </p>
      </section>

      {/* 2. Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Category Tabs */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar">
          {filterCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
                selectedCategory === c.id
                  ? 'bg-[#0F172A] text-white dark:bg-teal-500 dark:text-slate-950 shadow-sm'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Search input */}
        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search by client, tech, or niche..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* 3. Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            onClick={() => onSelectProject(project.id)}
            className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-200 cursor-pointer group flex flex-col justify-between"
          >
            {/* Visual Cover */}
            <div className="aspect-[16/10] overflow-hidden relative bg-slate-950">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 flex gap-2">
                <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                  {project.category}
                </span>
                <span className="px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-slate-300 text-[10px] flex items-center gap-1">
                  <MapPin className="w-3 h-3 text-teal-400" />
                  {project.location}
                </span>
              </div>

              {project.beforeAfter && (
                <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-emerald-500/90 backdrop-blur-md text-slate-950 text-[10px] font-bold flex items-center gap-1 shadow-sm">
                  <TrendingUp className="w-3 h-3" />
                  <span>{project.beforeAfter.afterMetric}</span>
                </div>
              )}
            </div>

            {/* Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="text-[11px] text-slate-400 font-medium">{project.client}</div>
                <h3 className="font-heading font-bold text-base text-slate-900 dark:text-white mt-1 group-hover:text-teal-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-2">
                  {project.shortDesc}
                </p>
              </div>

              {/* Primary Metric Strip */}
              <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400">{project.results[0]?.label}</div>
                  <div className="font-heading font-extrabold text-sm text-teal-600 dark:text-teal-400">
                    {project.results[0]?.value}
                  </div>
                </div>
                <div>
                  <div className="text-[10px] text-slate-400 text-right">{project.results[1]?.label}</div>
                  <div className="font-heading font-bold text-xs text-slate-800 dark:text-slate-200 text-right">
                    {project.results[1]?.value}
                  </div>
                </div>
              </div>

              {/* Footer Tools & Details link */}
              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-1 overflow-hidden text-ellipsis whitespace-nowrap max-w-[70%]">
                  {project.tools.slice(0, 3).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-1.5 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  View Case <ArrowUpRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="py-16 text-center text-slate-400 text-sm">
          No projects found matching "{searchQuery}". Try selecting "All Projects".
        </div>
      )}

      {/* 4. Bottom RFP Callout */}
      <section className="rounded-3xl p-8 sm:p-12 bg-gradient-to-br from-slate-900 to-[#0F172A] text-white border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-2xl text-white">
            Have a project in mind for your brand?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Let's evaluate your existing benchmarks and build an architecture that outranks competitors.
          </p>
        </div>
        <button
          onClick={onOpenRfp}
          className="px-6 py-3.5 rounded-2xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-95 shrink-0 shadow-md"
        >
          Submit Project RFP
        </button>
      </section>
    </div>
  );
};
