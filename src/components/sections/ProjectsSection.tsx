import React, { useState } from 'react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { Project } from '../../types';
import { SafeImage } from '../common/SafeImage';
import { ProjectModal } from '../modals/ProjectModal';
import { ArrowUpRight } from 'lucide-react';
import { motion, useReducedMotion } from 'motion/react';
import { Link } from 'react-router-dom';

export const ProjectsSection: React.FC = () => {
  const { isDark } = useTheme();
  const shouldReduceMotion = useReducedMotion();
  const { projects: dbProjects } = usePortfolioData();
  const [activeProjectModal, setActiveProjectModal] = useState<Project | null>(null);

  const allProjects: Project[] = (dbProjects && dbProjects.length > 0)
    ? dbProjects.map((p: any, idx: number) => ({
        id: p.id || `proj-${idx}`,
        title: p.title,
        tagline: p.tagline || p.category || 'Modern Web Application',
        category: p.category || 'Web Application',
        description: p.description,
        fullDescription: p.full_description || p.fullDescription || p.description,
        techStack: p.tech_stack || p.techStack || ['React', 'TypeScript', 'Tailwind CSS'],
        image: p.image || `/projects/project-${(idx % 6) + 1}.webp`,
        gallery: p.gallery || [],
        metrics: p.metrics || [],
        liveUrl: p.live_url || p.liveUrl || 'https://github.com/MRB13182',
        githubUrl: p.github_url || p.githubUrl || 'https://github.com/MRB13182',
        featured: p.featured ?? true,
        order: p.order ?? idx,
      }))
    : portfolioConfig.projects;

  // Selected 3 featured projects for the reference 3-column showcase
  const featuredProjects = allProjects.slice(0, 3);

  return (
    <section 
      id="work" 
      aria-labelledby="work-heading"
      className="relative scroll-mt-24 px-4 sm:px-6 lg:px-8 py-12 sm:py-16"
    >
      <div className="max-w-6xl mx-auto">
        
        {/* Section Header (Heading on Left, "View All Projects ↗" on Right) */}
        <div className="mb-8 sm:mb-10 flex items-end justify-between gap-4">
          <div className="text-left">
            <div className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#A58AF2] mb-1.5">
              FEATURED PROJECTS
            </div>
            <h2 
              id="work-heading"
              className={`text-2xl sm:text-3xl lg:text-[34px] font-bold tracking-tight ${
                isDark ? 'text-white' : 'text-[#171725]'
              }`}
            >
              Selected Work
            </h2>
          </div>

          <Link
            to="/projects"
            className={`inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold border transition duration-200 active:scale-95 ${
              isDark
                ? 'bg-white/10 hover:bg-white/15 border-white/15 text-white'
                : 'bg-white/90 hover:bg-white border-slate-200/80 text-[#171725] shadow-xs'
            }`}
          >
            <span>View All Projects</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* 3-Column Project Cards Grid (Exact Reference Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {featuredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: shouldReduceMotion ? 0 : 0.5, delay: shouldReduceMotion ? 0 : index * 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              onClick={() => setActiveProjectModal(project)}
              className={`group rounded-3xl border p-3.5 sm:p-4 cursor-pointer backdrop-blur-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${
                isDark
                  ? 'bg-[#161926]/80 border-white/10 shadow-[0_16px_35px_-12px_rgba(0,0,0,0.6)] hover:border-white/20'
                  : 'bg-white/80 border-white/95 shadow-[0_18px_40px_-14px_rgba(165,138,242,0.16),0_1px_3px_rgba(0,0,0,0.02)] hover:border-white'
              }`}
            >
              {/* Project Preview Image Container with Soft Gradient Backdrop */}
              <div className="w-full aspect-[16/10] rounded-2xl overflow-hidden bg-gradient-to-br from-slate-100 via-violet-50 to-blue-50 dark:from-slate-900 dark:to-slate-950 mb-3.5 relative border border-slate-200/40 dark:border-white/5">
                <SafeImage
                  src={project.image}
                  alt={project.title}
                  fallbackType="project"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                
                {/* Subtle Inner Glass Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              {/* Project Title, Category, and Bottom Right Arrow */}
              <div className="flex items-center justify-between gap-3 px-1.5 pb-1">
                <div className="min-w-0">
                  <h3 className={`text-sm sm:text-base font-bold tracking-tight truncate transition-colors group-hover:text-[#8B5CF6] ${
                    isDark ? 'text-white' : 'text-[#171725]'
                  }`}>
                    {project.title}
                  </h3>
                  <p className={`text-[11px] sm:text-xs font-medium truncate mt-0.5 ${
                    isDark ? 'text-slate-400' : 'text-[#777787]'
                  }`}>
                    {project.category}
                  </p>
                </div>

                {/* Arrow Icon in Rounded Circle */}
                <div className={`w-8 h-8 rounded-full border flex items-center justify-center shrink-0 transition-all duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 ${
                  isDark
                    ? 'border-white/15 bg-white/10 text-white group-hover:bg-white/20'
                    : 'border-slate-200/80 bg-white text-[#171725] group-hover:shadow-sm'
                }`}>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>

            </motion.article>
          ))}
        </div>

      </div>

      {/* Interactive Detail Modal */}
      {activeProjectModal && (
        <ProjectModal
          project={activeProjectModal}
          isOpen={!!activeProjectModal}
          onClose={() => setActiveProjectModal(null)}
        />
      )}
    </section>
  );
};
