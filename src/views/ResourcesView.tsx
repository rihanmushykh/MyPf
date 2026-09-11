import React, { useState } from 'react';
import {
  Download,
  FileText,
  FileSpreadsheet,
  CheckSquare,
  Sparkles,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
  Lock,
} from 'lucide-react';
import confetti from 'canvas-confetti';
import { PageId, ResourceItem } from '../types';
import { FREE_RESOURCES } from '../data/portfolioData';

interface ResourcesViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const ResourcesView: React.FC<ResourcesViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [downloadingId, setDownloadingId] = useState<string | null>(null);
  const [downloadedList, setDownloadedList] = useState<string[]>([]);

  const handleDownload = (res: ResourceItem) => {
    setDownloadingId(res.id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadedList((prev) => [...prev, res.id]);
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
      });
    }, 600);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Free Growth Toolkits
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Battle-Tested SEO Checklists, Speed Audits & Ad Calculators
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Open-source resources created by Rihan Ali to help founders, developers, and students optimize their websites without paying expensive agency audit fees.
        </p>
      </section>

      {/* 2. Resources Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {FREE_RESOURCES.map((item) => {
          const isDownloaded = downloadedList.includes(item.id);
          const isDownloading = downloadingId === item.id;
          return (
            <div
              key={item.id}
              className="rounded-3xl p-6 sm:p-8 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between space-y-6"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-500/20">
                    {item.format} · {item.category}
                  </span>
                  <span className="text-[11px] font-mono text-slate-400 font-medium">
                    {item.downloadsCount.toLocaleString()} downloads
                  </span>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-teal-500/10 text-teal-600 dark:text-teal-400 flex items-center justify-center shrink-0">
                    {item.format === 'PDF' && <FileText className="w-6 h-6" />}
                    {item.format === 'Excel' && <FileSpreadsheet className="w-6 h-6" />}
                    {item.format === 'Interactive Checklist' && <CheckSquare className="w-6 h-6" />}
                    {item.format === 'Calculator' && <Sparkles className="w-6 h-6" />}
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-lg text-slate-900 dark:text-white">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400">
                  100% Free · No Gate Required
                </span>
                <button
                  onClick={() => handleDownload(item)}
                  disabled={isDownloading}
                  className={`px-5 py-2.5 rounded-xl font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm active:scale-95 ${
                    isDownloaded
                      ? 'bg-emerald-500 text-slate-950 hover:bg-emerald-400'
                      : 'bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 hover:opacity-90'
                  }`}
                >
                  {isDownloading ? (
                    'Preparing Download...'
                  ) : isDownloaded ? (
                    <>
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Downloaded</span>
                    </>
                  ) : (
                    <>
                      <Download className="w-3.5 h-3.5" />
                      <span>Download Toolkit</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Custom Audit Banner */}
      <section className="rounded-3xl p-8 sm:p-10 bg-slate-900 text-white border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div>
          <h3 className="font-heading font-bold text-xl sm:text-2xl text-white">
            Want Rihan to audit your website personally?
          </h3>
          <p className="text-xs text-slate-400 mt-1">
            Receive a 15-minute tailored screen recording reviewing your SEO errors, speed bottlenecks, and conversion leaks.
          </p>
        </div>
        <button
          onClick={onOpenBooking}
          className="px-6 py-3 rounded-xl bg-[#14B8A6] hover:bg-teal-400 text-slate-950 font-bold text-xs transition-all active:scale-95 shrink-0 shadow-md"
        >
          Book Personal Video Audit
        </button>
      </section>
    </div>
  );
};
