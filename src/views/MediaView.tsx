import React, { useState } from 'react';
import {
  Image as ImageIcon,
  Download,
  Calendar,
  ExternalLink,
  Award,
  Video,
  Mic,
  Camera,
  CheckCircle2,
} from 'lucide-react';
import { PageId } from '../types';
import { RIHAN_PROFILE } from '../data/portfolioData';

interface MediaItem {
  id: string;
  title: string;
  category: string;
  date: string;
  description: string;
  image: string;
}

const MEDIA_GALLERY: MediaItem[] = [
  {
    id: 'med-1',
    title: 'Wayanad Tech Summit: Digital Marketing for Rural Entrepreneurs',
    category: 'speaking',
    date: 'January 2025',
    description: 'Keynote presentation delivered to 400+ local business owners on leveraging Google Search to bypass aggregators.',
    image: 'https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'med-2',
    title: 'Live WordPress Speed Optimization & Core Web Vitals Lab',
    category: 'workshop',
    date: 'November 2024',
    description: 'Hands-on weekend training session in Calicut where 35 developers optimized real commercial sites.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'med-3',
    title: 'SKSSF District Youth Leadership Convention',
    category: 'community',
    date: 'August 2024',
    description: 'Organized and coordinated digital communication for regional youth delegates in Wayanad.',
    image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'med-4',
    title: 'HubSpot & Google Partner Recognition Meet',
    category: 'certificate',
    date: 'May 2024',
    description: 'Honored for exceptional campaign performance and client retention benchmarks in South India.',
    image: 'https://images.unsplash.com/photo-1567427017947-545c5f8d16ad?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'med-5',
    title: 'Campus Masterclass at Calicut University Affiliated College',
    category: 'workshop',
    date: 'March 2024',
    description: 'Guest lecture introducing BCA and BBA graduates to technical SEO entity modeling and international freelancing.',
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
  },
  {
    id: 'med-6',
    title: 'Monsoon Flood Relief Coordination Helpdesk',
    category: 'community',
    date: 'July 2024',
    description: 'Operating real-time information systems and emergency dispatch during the Wayanad monsoon landslides.',
    image: 'https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?auto=format&fit=crop&w=800&q=80',
  },
];

interface MediaViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

export const MediaView: React.FC<MediaViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [previewImage, setPreviewImage] = useState<string | null>(null);

  const filters = [
    { id: 'all', label: 'All Media' },
    { id: 'workshop', label: 'Workshops & Bootcamps' },
    { id: 'speaking', label: 'Keynotes & Talks' },
    { id: 'community', label: 'Community Drives' },
    { id: 'certificate', label: 'Certificates & Honors' },
  ];

  const filteredMedia =
    activeFilter === 'all'
      ? MEDIA_GALLERY
      : MEDIA_GALLERY.filter((m) => m.category === activeFilter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Stage Keynotes & Press
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          Workshops, Media & Speaking Archive
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Glimpses of academic keynotes, digital marketing bootcamps across Kerala, and verified industry recognitions.
        </p>

        {/* Press Kit Download banner */}
        <div className="pt-2 flex justify-center">
          <div className="p-3 rounded-2xl bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-center gap-4 text-xs">
            <span className="font-semibold text-slate-800 dark:text-slate-200">
              Official Media & Press Kit:
            </span>
            <button
              onClick={() => alert('Press Kit downloaded: Includes high-res headshots, official speaker bios, and SVG logos.')}
              className="px-4 py-2 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-bold text-xs flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Speaker Kit (ZIP)</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Category Filter */}
      <div className="flex justify-center items-center gap-1.5 overflow-x-auto pb-2 no-scrollbar">
        {filters.map((f) => (
          <button
            key={f.id}
            onClick={() => setActiveFilter(f.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${
              activeFilter === f.id
                ? 'bg-[#0F172A] text-white dark:bg-teal-500 dark:text-slate-950 shadow-sm'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* 3. Media Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredMedia.map((item) => (
          <div
            key={item.id}
            onClick={() => setPreviewImage(item.image)}
            className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
          >
            <div className="aspect-[4/3] overflow-hidden relative bg-slate-950">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                {item.category}
              </div>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between space-y-2">
              <div>
                <div className="text-[11px] font-mono text-slate-400">{item.date}</div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-slate-900 dark:text-white mt-1 group-hover:text-teal-500 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-1 line-clamp-2">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 4. Lightbox Preview Modal */}
      {previewImage && (
        <div
          onClick={() => setPreviewImage(null)}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in"
        >
          <div className="max-w-4xl w-full max-h-[90vh] rounded-2xl overflow-hidden relative">
            <img src={previewImage} alt="Preview" className="w-full h-full object-contain max-h-[85vh] mx-auto rounded-2xl" />
            <div className="text-center text-xs text-slate-400 mt-2">Click anywhere to close</div>
          </div>
        </div>
      )}
    </div>
  );
};
