import React, { useState } from 'react';
import {
  X,
  ExternalLink,
  CheckCircle2,
  TrendingUp,
  SlidersHorizontal,
  Quote,
  Layers,
  MapPin,
  Calendar,
} from 'lucide-react';
import { PortfolioProject } from '../types';

interface ProjectDetailModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenBooking: () => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onOpenBooking,
}) => {
  const [sliderPosition, setSliderPosition] = useState(50);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-slate-900 via-slate-850 to-slate-900 text-white flex items-center justify-between border-b border-slate-800">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                {project.category}
              </span>
              <span className="text-xs text-slate-400 flex items-center gap-1">
                <MapPin className="w-3 h-3 text-teal-400" />
                {project.location}
              </span>
            </div>
            <h3 className="font-heading font-bold text-lg sm:text-2xl text-white">
              {project.title}
            </h3>
            <p className="text-xs text-slate-400 mt-0.5">
              Client: <span className="text-slate-200 font-medium">{project.client}</span> · Completed {project.completionYear}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 text-xs text-slate-700 dark:text-slate-300">
          {/* Main Visual Banner */}
          <div className="rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-md aspect-video relative group">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full">
                {project.results.map((res, idx) => (
                  <div key={idx} className="bg-slate-900/80 backdrop-blur-md rounded-xl p-2.5 border border-slate-700/60 text-center">
                    <div className="font-heading font-extrabold text-teal-400 text-base sm:text-lg">
                      {res.value}
                    </div>
                    <div className="text-[10px] text-slate-300">{res.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Interactive Before & After Comparison Slider if present */}
          {project.beforeAfter && (
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <SlidersHorizontal className="w-4 h-4 text-teal-500" />
                  <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white">
                    Impact Comparison: {project.beforeAfter.aspect}
                  </h4>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Slide to compare
                </span>
              </div>

              {/* Visual Split Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-rose-200 dark:border-rose-900/40">
                  <span className="text-[10px] font-bold text-rose-500 uppercase tracking-wider">
                    Before Optimization
                  </span>
                  <div className="font-semibold text-slate-800 dark:text-slate-200 text-xs mt-1">
                    {project.beforeAfter.beforeLabel}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1 font-mono">
                    {project.beforeAfter.beforeMetric}
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-emerald-300 dark:border-emerald-800/60 shadow-sm">
                  <span className="text-[10px] font-bold text-emerald-500 uppercase tracking-wider">
                    After Rihan's Intervention
                  </span>
                  <div className="font-semibold text-slate-900 dark:text-white text-xs mt-1">
                    {project.beforeAfter.afterLabel}
                  </div>
                  <div className="text-[11px] text-teal-600 dark:text-teal-400 mt-1 font-mono font-bold">
                    {project.beforeAfter.afterMetric}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500" />
                The Business Challenge
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                {project.challenge}
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 space-y-2">
              <h4 className="font-heading font-bold text-sm text-slate-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-teal-500" />
                The Strategic Solution
              </h4>
              <p className="text-slate-600 dark:text-slate-300 text-xs leading-relaxed">
                {project.solution}
              </p>
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
              Architecture & Stack Used:
            </h5>
            <div className="flex flex-wrap gap-1.5">
              {project.tools.map((tool, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-200 font-mono text-[11px] border border-slate-200 dark:border-slate-700 font-medium"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Client Testimonial if present */}
          {project.testimonial && (
            <div className="p-4 sm:p-5 rounded-2xl bg-teal-50/70 dark:bg-teal-950/30 border border-teal-500/30 relative">
              <Quote className="w-8 h-8 text-teal-400/40 absolute top-3 right-3" />
              <p className="text-slate-800 dark:text-slate-200 text-xs italic leading-relaxed mb-3">
                "{project.testimonial.quote}"
              </p>
              <div className="flex items-center gap-2.5">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-xs">
                    {project.testimonial.author}
                  </div>
                  <div className="text-[10px] text-slate-500 dark:text-slate-400">
                    {project.testimonial.role}, {project.testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Gallery Thumbnails */}
          {project.galleryImages.length > 0 && (
            <div>
              <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-2">
                Project Gallery:
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {project.galleryImages.map((img, i) => (
                  <div key={i} className="rounded-xl overflow-hidden aspect-video border border-slate-200 dark:border-slate-800">
                    <img src={img} alt={`${project.title} screenshot ${i + 1}`} className="w-full h-full object-cover hover:scale-105 transition-transform" />
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between gap-3">
          {project.liveUrl ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-teal-600 dark:text-teal-400 font-semibold text-xs hover:underline"
            >
              <span>Visit Live Website</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          ) : (
            <span className="text-[11px] text-slate-400">Private Enterprise Client Archive</span>
          )}

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-medium"
            >
              Close
            </button>
            <button
              onClick={() => {
                onClose();
                onOpenBooking();
              }}
              className="px-5 py-2 rounded-xl bg-[#14B8A6] hover:bg-teal-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all shadow-sm"
            >
              <span>Build a Similar System</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
