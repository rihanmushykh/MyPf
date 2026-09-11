import React, { useState, useEffect } from 'react';
import {
  Search,
  X,
  FileText,
  Briefcase,
  Layers,
  GraduationCap,
  Sparkles,
  Calendar,
  ShieldCheck,
  ArrowRight,
  ExternalLink,
} from 'lucide-react';
import { PageId } from '../types';
import { SERVICES_LIST, PORTFOLIO_PROJECTS, CASE_STUDIES, BLOG_POSTS } from '../data/portfolioData';

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
  onOpenAiChat: () => void;
  onOpenVerify: () => void;
}

export const CommandMenu: React.FC<CommandMenuProps> = ({
  isOpen,
  onClose,
  onNavigate,
  onOpenBooking,
  onOpenAiChat,
  onOpenVerify,
}) => {
  const [search, setSearch] = useState('');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        if (isOpen) onClose();
        else onClose(); // parent handles toggle
      }
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const allPages: { id: PageId; label: string; desc: string }[] = [
    { id: 'home', label: 'Home', desc: 'Hero, Live Counters, Growth Calculator' },
    { id: 'about', label: 'About Rihan Ali', desc: 'Journey, Skills Matrix, Wayanad Story' },
    { id: 'services', label: 'Services', desc: 'SEO, WordPress, Digital Marketing, Training' },
    { id: 'portfolio', label: 'Portfolio', desc: 'Selected projects, before & after results' },
    { id: 'case-studies', label: 'Case Studies', desc: 'Detailed metrics, ROI & strategy analysis' },
    { id: 'resume', label: 'Interactive Resume', desc: 'Career history, education, certifications' },
    { id: 'training', label: 'Training & Workshops', desc: 'Courses, curriculums, upcoming batches' },
    { id: 'blog', label: 'Blog & Articles', desc: 'SEO blueprints, WordPress speed guides' },
    { id: 'resources', label: 'Free Resources', desc: 'Checklists, templates, audits' },
    { id: 'testimonials', label: 'Testimonials', desc: 'Client, student & organization reviews' },
    { id: 'community', label: 'Community Leadership', desc: 'SKSSF activities, youth initiatives' },
    { id: 'media', label: 'Media & Gallery', desc: 'Events, stage keynotes, certificates' },
    { id: 'contact', label: 'Contact & Consultation', desc: 'Direct WhatsApp, email, discovery call' },
  ];

  const filteredPages = allPages.filter(
    (p) =>
      p.label.toLowerCase().includes(search.toLowerCase()) ||
      p.desc.toLowerCase().includes(search.toLowerCase())
  );

  const filteredServices = SERVICES_LIST.filter(
    (s) =>
      s.title.toLowerCase().includes(search.toLowerCase()) ||
      s.description.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProjects = PORTFOLIO_PROJECTS.filter(
    (p) =>
      p.title.toLowerCase().includes(search.toLowerCase()) ||
      p.shortDesc.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[80vh]">
        {/* Search Input */}
        <div className="flex items-center px-4 py-3.5 border-b border-slate-200 dark:border-slate-800 gap-3">
          <Search className="w-5 h-5 text-slate-400 shrink-0" />
          <input
            autoFocus
            type="text"
            placeholder="Search pages, services, case studies, or type an action..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-transparent text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none"
          />
          <button
            onClick={onClose}
            className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Results */}
        <div className="overflow-y-auto p-3 space-y-4 text-xs">
          {/* Quick Actions */}
          <div>
            <div className="px-2 pb-1.5 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
              Quick Actions
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-1.5">
              <button
                onClick={() => {
                  onClose();
                  onOpenBooking();
                }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-slate-700 dark:text-slate-200 text-left transition-colors border border-transparent hover:border-teal-400/30"
              >
                <Calendar className="w-4 h-4 text-teal-500" />
                <div>
                  <div className="font-semibold">Book Consultation</div>
                  <div className="text-[10px] text-slate-400">30-min strategy call</div>
                </div>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenAiChat();
                }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-slate-700 dark:text-slate-200 text-left transition-colors border border-transparent hover:border-teal-400/30"
              >
                <Sparkles className="w-4 h-4 text-teal-500" />
                <div>
                  <div className="font-semibold">Ask AI Assistant</div>
                  <div className="text-[10px] text-slate-400">Gemini 3.8 advisor</div>
                </div>
              </button>

              <button
                onClick={() => {
                  onClose();
                  onOpenVerify();
                }}
                className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 dark:bg-slate-800/60 hover:bg-teal-50 dark:hover:bg-teal-900/20 text-slate-700 dark:text-slate-200 text-left transition-colors border border-transparent hover:border-teal-400/30"
              >
                <ShieldCheck className="w-4 h-4 text-teal-500" />
                <div>
                  <div className="font-semibold">Verify Certificate</div>
                  <div className="text-[10px] text-slate-400">Validate student ID</div>
                </div>
              </button>
            </div>
          </div>

          {/* Navigation Pages */}
          {filteredPages.length > 0 && (
            <div>
              <div className="px-2 pb-1.5 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                Pages & Sections
              </div>
              <div className="space-y-1">
                {filteredPages.map((page) => (
                  <button
                    key={page.id}
                    onClick={() => {
                      onNavigate(page.id);
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Layers className="w-4 h-4 text-teal-500 shrink-0" />
                      <div>
                        <div className="font-medium text-xs text-slate-900 dark:text-white">{page.label}</div>
                        <div className="text-[11px] text-slate-400">{page.desc}</div>
                      </div>
                    </div>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Services Matches */}
          {filteredServices.length > 0 && (
            <div>
              <div className="px-2 pb-1.5 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                Services
              </div>
              <div className="space-y-1">
                {filteredServices.map((service) => (
                  <button
                    key={service.id}
                    onClick={() => {
                      onNavigate('services');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <Briefcase className="w-4 h-4 text-amber-500 shrink-0" />
                      <div>
                        <div className="font-medium text-xs text-slate-900 dark:text-white">{service.title}</div>
                        <div className="text-[11px] text-slate-400">{service.tagline}</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-teal-500 font-semibold">{service.startingPrice}</span>
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Portfolio Projects */}
          {filteredProjects.length > 0 && (
            <div>
              <div className="px-2 pb-1.5 font-semibold text-slate-400 uppercase tracking-wider text-[10px]">
                Portfolio Projects
              </div>
              <div className="space-y-1">
                {filteredProjects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => {
                      onNavigate('portfolio');
                      onClose();
                    }}
                    className="w-full flex items-center justify-between p-2 rounded-xl hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-800 dark:text-slate-200 transition-colors text-left"
                  >
                    <div className="flex items-center gap-2.5">
                      <ExternalLink className="w-4 h-4 text-emerald-500 shrink-0" />
                      <div>
                        <div className="font-medium text-xs text-slate-900 dark:text-white">{project.title}</div>
                        <div className="text-[11px] text-slate-400">{project.client} · {project.category}</div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer info */}
        <div className="px-4 py-2.5 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex items-center justify-between text-[11px] text-slate-500">
          <span>Navigate with mouse or click an action</span>
          <div className="flex items-center gap-2 font-mono">
            <span className="px-1.5 py-0.5 rounded bg-slate-200 dark:bg-slate-800">ESC</span>
            <span>to close</span>
          </div>
        </div>
      </div>
    </div>
  );
};
