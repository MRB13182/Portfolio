import React, { useState } from 'react';
import { portfolioConfig } from '../config/portfolio';
import { Project, ProjectCategory } from '../types';
import { useTheme } from '../context/ThemeContext';
import { SafeImage } from '../components/common/SafeImage';
import { ProjectModal } from '../components/modals/ProjectModal';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  Layers, 
  ExternalLink, 
  Github, 
  Search,
  X,
  Eye,
  ArrowUpRight
} from 'lucide-react';
import { motion } from 'motion/react';

export const ProjectsPage: React.FC = () => {
  const { isNeon } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const categories: ProjectCategory[] = ['All', 'Full Stack', 'AI & SaaS', 'Mobile / Web', 'UI / UX'];

  const filteredProjects = portfolioConfig.projects.filter((project) => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="mx-auto max-w-6xl px-4 pt-24 sm:pt-32 pb-16 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <ScrollReveal direction="up" distance={16} duration={0.5}>
        <div className="mb-8 sm:mb-10 flex flex-col items-center text-center">
          <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border ${
            isNeon
              ? 'bg-white text-[#10110F] border-[#E6E8E1]'
              : 'bg-white/80 text-[#8B5CF6] border-slate-200/80 shadow-xs'
          }`}>
            {isNeon ? (
              <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
            ) : (
              <Layers className="w-3.5 h-3.5" />
            )}
            <span className="font-mono uppercase tracking-wider text-[11px]">
              SELECTED WORK & EXPERIMENTS
            </span>
          </div>

          <h1 className={`mb-3 font-display text-3xl font-extrabold tracking-tight text-balance sm:text-4xl lg:text-5xl ${
            isNeon ? 'text-[#10110F]' : 'text-[#171725]'
          }`}>
            Featured{' '}
            <span className={
              isNeon
                ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700'
            }>
              Projects
            </span>
          </h1>
          
          <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
            isNeon ? 'text-[#686B65]' : 'text-slate-600'
          }`}>
            A comprehensive showcase of production web applications, AI platforms, dashboards, and mobile experiences.
          </p>
        </div>
      </ScrollReveal>

      {/* Search & Category Filter Controls */}
      <ScrollReveal direction="up" distance={14} duration={0.45} delay={0.1}>
        <div className="mb-7 flex flex-col items-stretch justify-between gap-3 sm:flex-row sm:items-center">
          
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search projects, technologies..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="projects-search-input"
              className={`w-full min-h-[44px] pl-10 pr-10 py-2 rounded-xl text-xs sm:text-sm border transition-all outline-none backdrop-blur-md ${
                isNeon
                  ? 'bg-white border-[#E6E8E1] text-[#10110F] placeholder-slate-400 focus:border-[#10110F]'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search query"
                className="absolute right-3 top-1/2 -translate-y-1/2 cursor-pointer text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="inline-flex items-center gap-1 p-1 rounded-xl border bg-white border-slate-200 shadow-xs overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  id={`projects-category-filter-${cat.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`min-h-[36px] px-3.5 sm:px-4 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? isNeon
                        ? 'bg-[#10110F] text-[#B7F32B] font-bold shadow-xs'
                        : 'bg-[#171725] text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat}
                </button>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* Projects Grid */}
      {filteredProjects.length === 0 ? (
        <ScrollReveal direction="up" distance={15}>
          <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-slate-300">
            <Layers className="w-10 h-10 mx-auto mb-3 text-slate-400" />
            <h3 className="text-base font-bold mb-1 text-slate-900">No projects matched your criteria</h3>
            <p className="text-xs mb-4 text-slate-500">
              Try adjusting your search query "{searchQuery}" or select another category filter.
            </p>
            <button
              type="button"
              onClick={() => { setSelectedCategory('All'); setSearchQuery(''); }}
              className={`text-xs font-bold hover:underline cursor-pointer px-2 py-1 ${
                isNeon ? 'text-[#10110F]' : 'text-violet-700'
              }`}
            >
              Reset Filters
            </button>
          </div>
        </ScrollReveal>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '0px 0px -40px 0px' }}
              transition={{ 
                duration: 0.45, 
                delay: Math.min(index * 0.08, 0.3),
                ease: [0.21, 0.47, 0.32, 0.98] 
              }}
              whileHover={{ y: -4 }}
              id={`project-card-${project.id}`}
              className={`rounded-3xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group ${
                isNeon
                  ? 'bg-[#11130F] text-white border-white/10 hover:border-[#B7F32B]/50 shadow-xl'
                  : 'bg-white/85 border-white/90 hover:border-violet-300 shadow-[0_16px_40px_-15px_rgba(165,138,242,0.14)] backdrop-blur-xl'
              }`}
            >
              <div>
                {/* 1. Project Image Thumbnail */}
                <div 
                  className="relative aspect-[16/10] overflow-hidden cursor-pointer bg-slate-900"
                  onClick={() => setActiveProjectModal(project)}
                >
                  <SafeImage
                    src={project.image}
                    alt={project.title}
                    fallbackType="project"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  <div className="absolute top-3 left-3 z-10">
                    <span className={`px-2.5 py-0.5 rounded-md text-[10px] font-mono font-semibold uppercase tracking-wider backdrop-blur-md ${
                      isNeon
                        ? 'bg-[#10110F]/80 text-[#B7F32B] border border-white/10'
                        : 'bg-white/90 text-violet-700 shadow-xs'
                    }`}>
                      {project.category}
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <span className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold flex items-center gap-2 border shadow-md ${
                      isNeon
                        ? 'bg-black/90 text-white border-white/20'
                        : 'bg-white/95 text-[#171725] border-white'
                    }`}>
                      <Eye className="w-3.5 h-3.5 text-[#B7F32B]" /> Case Study
                    </span>
                  </div>
                </div>

                {/* 2. Project Title & 3. Description */}
                <div className="p-5 sm:p-6">
                  <h3 
                    onClick={() => setActiveProjectModal(project)}
                    className={`font-display font-bold text-lg sm:text-xl tracking-tight mb-2 cursor-pointer transition-colors ${
                      isNeon ? 'text-white group-hover:text-[#B7F32B]' : 'text-slate-900 group-hover:text-violet-700'
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p className={`text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 ${
                    isNeon ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {project.description}
                  </p>

                  {/* 4. Tech Stack Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.techStack.map((tech, idx) => (
                      <span
                        key={idx}
                        className={`text-[10px] font-mono px-2 py-0.5 rounded-md border ${
                          isNeon
                            ? 'bg-white/5 border-white/10 text-slate-300'
                            : 'bg-slate-100 border-slate-200 text-slate-700'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* 5. Live Demo and GitHub Action Buttons */}
              <div className={`p-5 sm:p-6 pt-0 flex items-center gap-3 border-t ${
                isNeon ? 'border-white/10 pt-4' : 'border-slate-100 pt-4'
              }`}>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`projects-page-live-btn-${project.id}`}
                    className={`flex-1 min-h-[40px] py-2 px-3.5 rounded-xl text-xs font-bold text-center flex items-center justify-center gap-1.5 transition-all shadow-xs focus-visible:outline-none ${
                      isNeon
                        ? 'bg-[#B7F32B] hover:bg-[#C4FF32] text-[#10110F]'
                        : 'bg-[#171725] hover:bg-black text-white'
                    }`}
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                )}

                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    id={`projects-page-github-btn-${project.id}`}
                    className={`min-h-[40px] py-2 px-4 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 border transition-all cursor-pointer ${
                      isNeon
                        ? 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                        : 'bg-white border-slate-200 text-slate-800 hover:bg-slate-50'
                    }`}
                  >
                    <Github className="w-4 h-4" />
                    <span>Source</span>
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Fullscreen Floating Project Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          isOpen={!!activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}

    </div>
  );
};
