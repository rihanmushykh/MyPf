import React, { useState } from 'react';
import {
  BookOpen,
  Calendar,
  Clock,
  ArrowRight,
  Search,
  Tag,
  Share2,
  X,
  CheckCircle2,
} from 'lucide-react';
import { PageId, BlogPost } from '../types';
import { BLOG_POSTS } from '../data/portfolioData';

interface BlogViewProps {
  onNavigate: (page: PageId) => void;
  onOpenBooking: () => void;
}

const getCoverImage = (category: string) => {
  switch (category) {
    case 'SEO':
      return 'https://images.unsplash.com/photo-1571786256017-aee7a0c009b6?auto=format&fit=crop&w=800&q=80';
    case 'WordPress':
      return 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80';
    case 'Business Growth':
      return 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80';
    case 'Community Leadership':
      return 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80';
    default:
      return 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80';
  }
};

export const BlogView: React.FC<BlogViewProps> = ({ onNavigate, onOpenBooking }) => {
  const [selectedTag, setSelectedTag] = useState<string>('all');
  const [search, setSearch] = useState<string>('');
  const [readingPost, setReadingPost] = useState<BlogPost | null>(null);

  const tags = ['all', 'SEO', 'WordPress', 'Google Ads', 'Local SEO', 'Conversion'];

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const matchesTag = selectedTag === 'all' || post.category.toLowerCase() === selectedTag.toLowerCase() || post.tags.some(t => t.toLowerCase() === selectedTag.toLowerCase());
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesTag && matchesSearch;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      {/* 1. Header */}
      <section className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-[11px] font-mono uppercase tracking-widest text-teal-600 dark:text-teal-400 font-semibold">
          Knowledge Base & Thought Leadership
        </span>
        <h1 className="font-heading font-extrabold text-3xl sm:text-5xl text-slate-900 dark:text-white tracking-tight">
          SEO Blueprints, Code Insights & Conversion Architecture
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
          Deep-dive guides written by Rihan Ali based on real client campaigns, Core Web Vitals audits, and algorithmic updates.
        </p>
      </section>

      {/* 2. Filter & Search Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-1.5 overflow-x-auto w-full sm:w-auto pb-1 no-scrollbar">
          {tags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold capitalize transition-all ${
                selectedTag === tag
                  ? 'bg-[#0F172A] text-white dark:bg-teal-500 dark:text-slate-950'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-200'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        <div className="relative w-full sm:w-72">
          <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            type="text"
            placeholder="Search guides & blueprints..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs focus:outline-none focus:border-teal-500"
          />
        </div>
      </div>

      {/* 3. Articles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <article
            key={post.id}
            onClick={() => setReadingPost(post)}
            className="rounded-3xl overflow-hidden bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-200 cursor-pointer flex flex-col justify-between group"
          >
            <div className="aspect-[16/9] overflow-hidden relative bg-slate-950">
              <img
                src={getCoverImage(post.category)}
                alt={post.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-slate-900/80 backdrop-blur-md text-white text-[10px] font-semibold uppercase tracking-wider">
                {post.category}
              </div>
            </div>

            <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-[11px] text-slate-400 font-mono mb-1.5">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" />
                    {post.date}
                  </span>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="w-3 h-3" />
                    {post.readTime}
                  </span>
                </div>
                <h2 className="font-heading font-bold text-base text-slate-900 dark:text-white group-hover:text-teal-500 transition-colors">
                  {post.title}
                </h2>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 line-clamp-3 leading-relaxed">
                  {post.excerpt}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
                <div className="flex gap-1">
                  {post.tags.slice(0, 2).map((t, idx) => (
                    <span
                      key={idx}
                      className="px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-800 text-[10px] font-mono text-slate-600 dark:text-slate-300"
                    >
                      #{t}
                    </span>
                  ))}
                </div>
                <span className="text-xs font-semibold text-teal-600 dark:text-teal-400 flex items-center gap-1">
                  Read Guide <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* 4. Article Full Reading Modal */}
      {readingPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/70 backdrop-blur-md animate-in fade-in duration-150">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-3xl max-w-3xl w-full shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 flex flex-col max-h-[90vh]">
            <div className="p-5 sm:p-6 bg-gradient-to-r from-[#0F172A] via-slate-900 to-[#0F172A] text-white flex items-center justify-between border-b border-slate-800">
              <div>
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-teal-500/20 text-teal-300 border border-teal-500/30">
                  {readingPost.category}
                </span>
                <h3 className="font-heading font-bold text-lg sm:text-2xl text-white mt-1">
                  {readingPost.title}
                </h3>
                <div className="text-xs text-slate-400 mt-1 flex items-center gap-3">
                  <span>Author: Rihan Ali</span>
                  <span>·</span>
                  <span>{readingPost.publishedAt}</span>
                  <span>·</span>
                  <span>{readingPost.readTime}</span>
                </div>
              </div>
              <button
                onClick={() => setReadingPost(null)}
                className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="p-6 overflow-y-auto space-y-6 text-xs sm:text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
              <div className="rounded-2xl overflow-hidden aspect-video border border-slate-200 dark:border-slate-800">
                <img
                  src={getCoverImage(readingPost.category)}
                  alt={readingPost.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-4 rounded-2xl bg-teal-50/60 dark:bg-teal-950/30 border border-teal-500/20 font-medium text-slate-800 dark:text-slate-200">
                {readingPost.excerpt}
              </div>

              <div className="space-y-4">
                <h4 className="font-heading font-bold text-base text-slate-900 dark:text-white">
                  Executive Breakdown & Implementation Blueprint
                </h4>
                <p>
                  When scaling web properties in competitive markets like Kerala or the GCC, standard generic advice fails. Modern search algorithms demand mathematically sound technical signals, precise semantic keyword clustering, and sub-second rendering.
                </p>
                <p>
                  In this framework, Rihan Ali outlines the exact checklist used across 240+ completed client deployments, guaranteeing that both Core Web Vitals and user purchase intent are systematically captured.
                </p>

                <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-700 space-y-2">
                  <div className="font-bold text-xs text-slate-900 dark:text-white">Key Takeaways:</div>
                  <ul className="space-y-1 text-xs">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Always isolate server TTFB under 250ms with Redis object caching and edge CDN.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Inject clean, nested JSON-LD schema (LocalBusiness, Organization, Product).</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-teal-500 shrink-0 mt-0.5" />
                      <span>Target high-intent transactional queries before expanding into informational traffic.</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className="p-5 rounded-2xl bg-slate-100 dark:bg-slate-850 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="font-bold text-slate-900 dark:text-white text-xs">Need this implemented for your business?</div>
                  <div className="text-[11px] text-slate-500">Book a direct technical consultation with Rihan Ali.</div>
                </div>
                <button
                  onClick={() => {
                    setReadingPost(null);
                    onOpenBooking();
                  }}
                  className="px-4 py-2 rounded-xl bg-[#0F172A] dark:bg-teal-500 text-white dark:text-slate-950 font-bold text-xs shrink-0"
                >
                  Schedule Strategy Audit
                </button>
              </div>
            </div>

            <div className="p-4 bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setReadingPost(null)}
                className="px-5 py-2 rounded-xl bg-slate-200 dark:bg-slate-800 font-semibold text-xs text-slate-800 dark:text-slate-200"
              >
                Close Article
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
