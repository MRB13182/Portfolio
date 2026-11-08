import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import { portfolioConfig } from '../../config/portfolio';
import { ProjectModal } from '../modals/ProjectModal';
import { Project } from '../../types';

export const NeonFeaturedProjects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // We take the top 3 projects from portfolioConfig or custom tailored ones matching the reference
  const projects = portfolioConfig.projects.slice(0, 3);

  // Mockup configurations to visually mirror reference:
  // Card 1: • 01 / AI PRODUCT (AURA — AI Studio)
  // Card 2: • 02 / WEB APPLICATION (Atlas — Project Dashboard)
  // Card 3: • 03 / MOBILE APP (Morrow — Habit Tracker)
  const referenceCards = [
    {
      num: '01',
      categoryTag: 'AI PRODUCT',
      title: projects[0]?.title || 'AURA — AI Studio',
      desc: projects[0]?.tagline || 'AI-powered content generation platform with modern interface and powerful tools.',
      tags: projects[0]?.techStack.slice(0, 3) || ['Next.js', 'OpenAI', 'Tailwind CSS'],
      project: projects[0],
      accentGradient: 'from-blue-600 via-indigo-700 to-purple-800',
      mockupType: 'ai-studio',
    },
    {
      num: '02',
      categoryTag: 'WEB APPLICATION',
      title: projects[1]?.title || 'Atlas — Project Dashboard',
      desc: projects[1]?.tagline || 'A modern dashboard for teams to track growth, projects and performance.',
      tags: projects[1]?.techStack.slice(0, 3) || ['React', 'Node.js', 'MongoDB'],
      project: projects[1],
      accentGradient: 'from-emerald-700 via-slate-800 to-zinc-900',
      mockupType: 'dashboard',
    },
    {
      num: '03',
      categoryTag: 'MOBILE APP',
      title: projects[2]?.title || 'Morrow — Habit Tracker',
      desc: projects[2]?.tagline || 'A thoughtful mobile app for building better habits and a healthier lifestyle.',
      tags: projects[2]?.techStack.slice(0, 3) || ['React Native', 'Firebase', 'Node.js'],
      project: projects[2],
      accentGradient: 'from-lime-800 via-zinc-900 to-black',
      mockupType: 'mobile',
    },
  ];

  return (
    <section 
      id="neon-projects" 
      aria-labelledby="neon-projects-heading"
      className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
            <span className="text-[11px] sm:text-xs font-mono font-bold uppercase tracking-[0.2em] text-[#10110F]">
              FEATURED PROJECTS
            </span>
          </div>

          <h2 
            id="neon-projects-heading"
            className="font-display font-bold text-3xl sm:text-5xl text-[#10110F] tracking-tight"
          >
            Ideas, built <span className="italic font-normal">for real life.</span>
          </h2>

          <p className="text-sm sm:text-base text-[#686B65] max-w-xl mt-3">
            A showcase of my recent work, highlighting innovative solutions and clean, modern design across web, mobile and AI.
          </p>
        </div>

        <Link
          to="/projects"
          id="neon-view-all-projects-btn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold bg-white text-[#10110F] border border-[#E6E8E1] hover:border-[#10110F] hover:bg-[#F7F8F5] transition duration-200 active:scale-95 shadow-xs shrink-0 self-start md:self-auto"
        >
          <span>View All Projects</span>
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      {/* 3 Dark Preview Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {referenceCards.map((card, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: idx * 0.1 }}
            onClick={() => card.project && setSelectedProject(card.project)}
            className="group cursor-pointer rounded-[32px] bg-[#11130F] text-white p-5 sm:p-6 border border-white/10 hover:border-[#B7F32B]/50 transition-all duration-300 flex flex-col justify-between shadow-[0_12px_36px_-12px_rgba(0,0,0,0.4)] hover:shadow-[0_20px_50px_-12px_rgba(183,243,43,0.18)]"
          >
            <div>
              {/* Category & Number Tag */}
              <div className="flex items-center justify-between text-[11px] font-mono font-bold tracking-wider text-[#B7F32B] mb-4">
                <span className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B7F32B]" />
                  <span>{card.num} / {card.categoryTag}</span>
                </span>
              </div>

              {/* Mockup Preview Area */}
              <div className={`w-full aspect-[16/10] rounded-2xl overflow-hidden mb-6 relative bg-gradient-to-br ${card.accentGradient} p-3 flex flex-col justify-between border border-white/10 group-hover:scale-[1.02] transition-transform duration-300`}>
                
                {/* Simulated UI Window Bar */}
                <div className="flex items-center justify-between text-[10px] text-white/70 px-2 py-1 bg-black/40 rounded-lg backdrop-blur-md">
                  <span className="font-mono font-semibold truncate">{card.title}</span>
                  <div className="flex gap-1">
                    <span className="w-2 h-2 rounded-full bg-red-500/80" />
                    <span className="w-2 h-2 rounded-full bg-yellow-500/80" />
                    <span className="w-2 h-2 rounded-full bg-green-500/80" />
                  </div>
                </div>

                {/* Simulated Content Graphic */}
                <div className="flex-1 flex items-center justify-center p-2">
                  {card.mockupType === 'ai-studio' && (
                    <div className="text-center">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-500 blur-[2px] opacity-90 mx-auto mb-2 shadow-[0_0_20px_rgba(34,211,238,0.5)]" />
                      <span className="text-xs font-bold text-white tracking-wide block">Create Amazing Content with AI</span>
                    </div>
                  )}

                  {card.mockupType === 'dashboard' && (
                    <div className="w-full bg-black/50 backdrop-blur-md rounded-xl p-3 border border-white/10">
                      <div className="text-[10px] text-slate-400">Project Overview</div>
                      <div className="text-sm font-bold text-white flex items-center gap-2 mt-0.5">
                        <span>$48.2K</span>
                        <span className="text-[9px] text-[#B7F32B] bg-[#B7F32B]/20 px-1 rounded">+24%</span>
                      </div>
                      <div className="flex items-end gap-1.5 h-10 mt-2">
                        <div className="w-1/6 bg-[#B7F32B]/40 h-4 rounded-t-sm" />
                        <div className="w-1/6 bg-[#B7F32B]/60 h-7 rounded-t-sm" />
                        <div className="w-1/6 bg-[#B7F32B] h-10 rounded-t-sm" />
                        <div className="w-1/6 bg-[#B7F32B]/80 h-8 rounded-t-sm" />
                        <div className="w-1/6 bg-[#B7F32B]/50 h-5 rounded-t-sm" />
                        <div className="w-1/6 bg-[#B7F32B] h-9 rounded-t-sm" />
                      </div>
                    </div>
                  )}

                  {card.mockupType === 'mobile' && (
                    <div className="flex items-center justify-center gap-2">
                      <div className="w-24 h-32 rounded-xl bg-black border border-white/20 p-2 text-center flex flex-col justify-between shadow-lg">
                        <span className="text-[9px] font-bold text-white">Better Habits</span>
                        <div className="w-8 h-8 rounded-full bg-[#B7F32B] mx-auto flex items-center justify-center text-black font-black text-xs">✓</div>
                        <span className="text-[8px] text-[#B7F32B]">Brighter You</span>
                      </div>
                      <div className="w-20 h-28 rounded-xl bg-zinc-900 border border-white/10 p-2 hidden sm:flex flex-col justify-between">
                        <span className="text-[8px] text-slate-400">Track Progress</span>
                        <div className="h-6 w-full bg-[#B7F32B]/20 rounded" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Bottom Mockup Tag */}
                <div className="text-right">
                  <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-black/60 text-slate-300">
                    Live Preview
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <h3 className="font-display font-bold text-xl text-white group-hover:text-[#B7F32B] transition-colors mb-2">
                {card.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed mb-6 line-clamp-2">
                {card.desc}
              </p>
            </div>

            {/* Bottom Row: Tags & Circular Arrow Button */}
            <div className="flex items-center justify-between pt-4 border-t border-white/10 gap-3">
              <div className="flex flex-wrap gap-1.5">
                {card.tags.map((t, i) => (
                  <span
                    key={i}
                    className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="w-9 h-9 rounded-full bg-white text-[#10110F] flex items-center justify-center group-hover:bg-[#B7F32B] group-hover:scale-105 transition-all duration-200 shrink-0 shadow-sm">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
};
