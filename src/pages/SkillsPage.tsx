import React, { useState, useMemo } from 'react';
import { skills as allSkills } from '../config/skills';
import { Skill } from '../types';
import { useTheme } from '../context/ThemeContext';
import { SkillModal } from '../components/modals/SkillModal';
import { TechLogo } from '../components/common/TechLogo';
import { ScrollReveal } from '../components/common/ScrollReveal';
import { 
  Search, 
  Cpu, 
  X
} from 'lucide-react';
import { motion } from 'motion/react';

export const SkillsPage: React.FC = () => {
  const { isNeon } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSkillModal, setActiveSkillModal] = useState<Skill | null>(null);

  const categories = [
    { id: 'All', label: 'All Skills' },
    { id: 'Frontend Development', label: 'Frontend' },
    { id: 'Backend Development', label: 'Backend' },
    { id: 'Database', label: 'Database' },
    { id: 'Cloud & DevOps', label: 'Cloud & DevOps' },
    { id: 'UI/UX & Design', label: 'UI/UX & Design' }
  ];

  const categoryOrder = [
    'Frontend Development',
    'Backend Development',
    'Database',
    'Cloud & DevOps',
    'UI/UX & Design'
  ];

  const filteredSkills = useMemo(() => {
    return allSkills.filter((skill) => {
      const matchesCategory = 
        selectedCategory === 'All' || 
        skill.category.toLowerCase() === selectedCategory.toLowerCase() ||
        (selectedCategory === 'Frontend Development' && skill.category.toLowerCase().includes('frontend')) ||
        (selectedCategory === 'Backend Development' && skill.category.toLowerCase().includes('backend')) ||
        (selectedCategory === 'Cloud & DevOps' && (skill.category.toLowerCase().includes('cloud') || skill.category.toLowerCase().includes('devops'))) ||
        (selectedCategory === 'UI/UX & Design' && (skill.category.toLowerCase().includes('design') || skill.category.toLowerCase().includes('ui')));

      if (!matchesCategory) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase().trim();
      const matchesName = skill.name.toLowerCase().includes(q);
      const matchesCat = skill.category.toLowerCase().includes(q);
      const matchesDesc = skill.description.toLowerCase().includes(q);
      const matchesKeywords = skill.keywords?.some((k) => k.toLowerCase().includes(q)) ?? false;
      const matchesProjects = skill.projects?.some((p) => p.toLowerCase().includes(q)) ?? false;

      return matchesName || matchesCat || matchesDesc || matchesKeywords || matchesProjects;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-32 pb-16">
      
      {/* Page Header */}
      <ScrollReveal direction="up" distance={16} duration={0.5}>
        <div className="flex flex-col items-center text-center mb-10 sm:mb-12">
          <div 
            className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border ${
              isNeon
                ? 'bg-white text-[#10110F] border-[#E6E8E1]'
                : 'bg-white/80 text-[#8B5CF6] border-slate-200/80 shadow-xs'
            }`}
          >
            {isNeon ? (
              <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
            ) : (
              <Cpu className="w-3.5 h-3.5" />
            )}
            <span className="font-mono uppercase tracking-wider text-[11px]">TOOLS &amp; TECHNOLOGIES INDEX</span>
          </div>

          <h1 className={`font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 text-balance ${
            isNeon ? 'text-[#10110F]' : 'text-[#171725]'
          }`}>
            Technical Skills &amp;{' '}
            <span className={
              isNeon
                ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4'
                : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700'
            }>
              Design Tools
            </span>
          </h1>
          
          <p className={`max-w-2xl text-sm sm:text-base leading-relaxed ${
            isNeon ? 'text-[#686B65]' : 'text-slate-600'
          }`}
          >
            Over 44+ production-tested technologies, frameworks, databases, DevOps pipelines, and UI/UX design tools with verified mastery metrics.
          </p>
        </div>
      </ScrollReveal>

      {/* Search & Category Filter Controls */}
      <ScrollReveal direction="up" distance={14} duration={0.45} delay={0.1}>
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 mb-10">
          
          {/* Search Input */}
          <div className="relative w-full lg:w-80">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by skill, category, or technology..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              id="skills-search-input"
              className={`w-full min-h-[44px] pl-10 pr-10 py-2.5 rounded-xl text-xs sm:text-sm border transition-all outline-none backdrop-blur-md ${
                isNeon
                  ? 'bg-white border-[#E6E8E1] text-[#10110F] placeholder-slate-400 focus:border-[#10110F]'
                  : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400 focus:border-violet-500'
              }`}
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery('')}
                aria-label="Clear skill search"
                className="absolute right-3 top-1/2 -translate-y-1/2 p-1 cursor-pointer text-slate-400 hover:text-slate-700"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Category Tabs */}
          <div className="flex items-center gap-1 p-1 rounded-xl border bg-white border-slate-200 shadow-xs overflow-x-auto max-w-full">
            {categories.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  id={`skills-category-filter-${cat.id.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  className={`min-h-[36px] px-3.5 py-1.5 rounded-lg text-xs font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer ${
                    isActive
                      ? isNeon
                        ? 'bg-[#10110F] text-[#B7F32B] font-bold shadow-xs'
                        : 'bg-[#171725] text-white font-bold shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }`}
                >
                  {cat.label}
                </button>
              );
            })}
          </div>

        </div>
      </ScrollReveal>

      {/* Skills Grid */}
      {filteredSkills.length === 0 ? (
        <div className="text-center py-16 p-8 rounded-2xl border border-dashed border-slate-300">
          <Cpu className="w-10 h-10 mx-auto mb-3 text-slate-400" />
          <h3 className="text-base font-bold mb-1 text-slate-900">No technical skills matching your search</h3>
          <p className="text-xs mb-4 text-slate-500">
            Try adjusting your search query "{searchQuery}" or choose another category filter.
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
      ) : selectedCategory === 'All' && !searchQuery ? (
        /* Categorized Layout */
        <div className="space-y-12 sm:space-y-14">
          {categoryOrder.map((group) => {
            const groupSkills = allSkills.filter(s => s.category === group);
            if (groupSkills.length === 0) return null;

            return (
              <ScrollReveal key={group} direction="up" distance={14} duration={0.45}>
                <div className="space-y-4">
                  {/* Category Section Heading */}
                  <div className="flex items-center justify-between border-b border-slate-200 pb-2.5">
                    <div className="flex items-center gap-2.5">
                      <h2 className="text-lg sm:text-xl font-black tracking-tight text-slate-900">
                        {group}
                      </h2>
                      <span className={`text-[11px] font-mono px-2 py-0.5 rounded-md border tabular-nums ${
                        isNeon
                          ? 'bg-[#ECF9D3] text-[#10110F] border-[#B7F32B]/40'
                          : 'bg-violet-50 text-violet-700 border-violet-200'
                      }`}>
                        {groupSkills.length} Skills
                      </span>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
                    {groupSkills.map((skill, index) => (
                      <SkillCard
                        key={skill.id}
                        skill={skill}
                        index={index}
                        isNeon={isNeon}
                        onClick={() => setActiveSkillModal(skill)}
                      />
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      ) : (
        /* Filtered Grid View */
        <div>
          <div className="mb-4 text-xs font-semibold text-slate-600">
            Showing {filteredSkills.length} {filteredSkills.length === 1 ? 'skill' : 'skills'}
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                isNeon={isNeon}
                onClick={() => setActiveSkillModal(skill)}
              />
            ))}
          </div>
        </div>
      )}

      {/* Floating Skill Detail Modal */}
      {activeSkillModal && (
        <SkillModal
          skill={activeSkillModal}
          isOpen={!!activeSkillModal}
          onClose={() => setActiveSkillModal(null)}
        />
      )}

    </div>
  );
};

interface SkillCardProps {
  skill: Skill;
  index: number;
  isNeon: boolean;
  onClick: () => void;
}

const SkillCard: React.FC<SkillCardProps> = ({ skill, index, isNeon, onClick }) => {
  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 14 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -25px 0px' }}
      transition={{ 
        duration: 0.35, 
        delay: Math.min(index * 0.02, 0.2),
        ease: [0.21, 0.47, 0.32, 0.98] 
      }}
      whileHover={{ y: -3 }}
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      id={`skill-card-${skill.id}`}
      aria-label={`Open details for ${skill.name}`}
      className={`group relative p-4 rounded-2xl border transition-all duration-200 cursor-pointer overflow-hidden flex flex-col items-center justify-center text-center focus-visible:outline-none ${
        isNeon
          ? 'bg-white border-[#E6E8E1] hover:border-[#10110F] shadow-xs hover:shadow-md text-[#10110F]'
          : 'bg-white/85 border-slate-200/90 hover:border-violet-400 shadow-xs hover:shadow-md text-slate-800 backdrop-blur-md'
      }`}
    >
      {/* Official Technology Logo */}
      <div className="w-11 h-11 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center justify-center mb-2.5 transition-transform duration-200 group-hover:scale-105">
        <TechLogo 
          logo={skill.logo || skill.id} 
          size={26} 
          className="w-6 h-6" 
        />
      </div>

      {/* Skill Name */}
      <h3 className={`font-bold text-xs sm:text-sm leading-tight mb-1.5 truncate max-w-full transition-colors ${
        isNeon ? 'group-hover:text-[#10110F]' : 'group-hover:text-violet-700'
      }`}>
        {skill.name}
      </h3>

      {/* Proficiency Level */}
      <div className={`inline-flex items-center px-2 py-0.5 rounded-md text-[10px] font-mono tracking-tight tabular-nums border ${
        isNeon
          ? 'bg-[#ECF9D3] text-[#10110F] border-[#B7F32B]/30'
          : 'bg-violet-50 text-violet-700 border-violet-200'
      }`}>
        <span>{skill.level}%</span>
      </div>
    </motion.button>
  );
};
