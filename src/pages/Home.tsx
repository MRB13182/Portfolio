import React from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext';
import { portfolioConfig } from '../config/portfolio';
import { Hero } from '../components/sections/Hero';
import { About } from '../components/sections/About';
import { SafeImage } from '../components/common/SafeImage';
import { Code2, Palette, Fingerprint, ArrowUpRight, ArrowRight, Award } from 'lucide-react';
import { motion } from 'motion/react';

const serviceItems = [
  { icon: Code2, title: 'Web Development', description: 'Modern & responsive websites', accent: 'from-cyan-400/20 to-blue-500/20' },
  { icon: Palette, title: 'UI/UX Design', description: 'Clean & modern experiences', accent: 'from-blue-500/20 to-violet-500/20' },
  { icon: Fingerprint, title: 'Branding', description: 'Distinctive digital identities', accent: 'from-violet-500/20 to-fuchsia-500/20' },
];

export const Home: React.FC = () => {
  const { isDark } = useTheme();
  const projects = portfolioConfig.projects.slice(0, 2);
  const heading = isDark ? 'text-white' : 'text-slate-950';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';
  const glass = isDark
    ? 'border-white/10 bg-[#0d1427]/70 shadow-[0_16px_44px_-24px_rgba(0,0,0,.75)]'
    : 'border-white/80 bg-white/75 shadow-[0_18px_42px_-24px_rgba(49,46,129,.18)]';

  return (
    <div className="w-full">
      <Hero />

      <section aria-labelledby="services-heading" className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className={`mb-1.5 text-xs font-bold uppercase tracking-[.18em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>What I do</p>
              <h2 id="services-heading" className={`text-2xl font-black tracking-tight sm:text-3xl ${heading}`}>Services <span className="bg-gradient-to-r from-cyan-400 to-violet-500 bg-clip-text text-transparent">I Offer</span></h2>
            </div>
            <Link to="/skills" className={`mb-1 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>View all <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
            {serviceItems.map(({ icon: Icon, title, description, accent }, index) => (
              <motion.article key={title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`group rounded-3xl border p-4 backdrop-blur-2xl transition duration-200 hover:-translate-y-1 sm:p-5 ${glass}`}>
                <div className={`mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border bg-gradient-to-br ${accent} ${isDark ? 'border-white/10 text-cyan-200' : 'border-white text-violet-700'}`}><Icon className="h-5 w-5" /></div>
                <div className="flex items-center justify-between gap-3">
                  <h3 className={`font-bold ${heading}`}>{title}</h3>
                  <ArrowUpRight className={`h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 ${muted}`} />
                </div>
                <p className={`mt-1.5 text-sm ${muted}`}>{description}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="featured-heading" className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className={`mb-1.5 text-xs font-bold uppercase tracking-[.18em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Selected projects</p>
              <h2 id="featured-heading" className={`text-2xl font-black tracking-tight sm:text-3xl ${heading}`}>Featured <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Works</span></h2>
            </div>
            <Link to="/projects" className={`mb-1 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>View all <ArrowUpRight className="h-4 w-4" /></Link>
          </div>

          {projects.length ? (
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
              {projects.map((project, index) => (
                <motion.article key={project.id} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .08 }} className={`group overflow-hidden rounded-3xl border backdrop-blur-2xl transition duration-200 hover:-translate-y-1 ${glass}`}>
                  <Link to="/projects" aria-label={`Explore project: ${project.title}`} className="block">
                    <div className="relative aspect-[16/10] overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-violet-950">
                      <SafeImage src={project.image} alt={project.title} fallbackType="project" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent" />
                      <span className="absolute left-3 top-3 rounded-full border border-white/15 bg-slate-950/55 px-3 py-1 text-[10px] font-semibold text-cyan-200 backdrop-blur-md">{project.category}</span>
                      <span className="absolute bottom-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-slate-950/50 text-white backdrop-blur-md transition group-hover:bg-blue-600"><ArrowUpRight className="h-4 w-4" /></span>
                    </div>
                    <div className="p-4 sm:p-5">
                      <h3 className={`text-lg font-bold ${heading}`}>{project.title}</h3>
                      <p className={`mt-1 line-clamp-2 text-sm leading-6 ${muted}`}>{project.tagline || project.description}</p>
                      <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-bold text-cyan-400">View project <ArrowRight className="h-3.5 w-3.5" /></div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </div>
          ) : (
            <div className={`rounded-3xl border p-6 text-sm ${glass} ${muted}`}>Projects will appear here once they are added in portfolio settings.</div>
          )}
        </div>
      </section>


      <section aria-labelledby="certificates-heading" className="relative px-4 py-10 sm:px-6 sm:py-14 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-5 flex items-end justify-between gap-3">
            <div>
              <p className={`mb-1.5 text-xs font-bold uppercase tracking-[.18em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>Credentials</p>
              <h2 id="certificates-heading" className={`text-2xl font-black tracking-tight sm:text-3xl ${heading}`}>Certificates <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent"> &amp; Learning</span></h2>
            </div>
            <Link to="/certificates" className={`mb-1 inline-flex items-center gap-1 text-xs font-semibold sm:text-sm ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>View all <ArrowUpRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4">
            {portfolioConfig.certificates.slice(0, 3).map((certificate, index) => (
              <motion.article key={certificate.id} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} className={`overflow-hidden rounded-3xl border backdrop-blur-2xl ${glass}`}>
                <div className="flex aspect-[4/3] items-center justify-center overflow-hidden bg-gradient-to-br from-blue-500/10 via-cyan-400/5 to-violet-500/10 p-2.5 sm:p-4">
                  <SafeImage src={certificate.image} alt={certificate.title} fallbackType="project" className="h-full w-full rounded-xl object-contain" />
                </div>
                <div className="p-3 sm:p-4">
                  <div className="mb-2 flex h-8 w-8 items-center justify-center rounded-xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-400"><Award className="h-4 w-4" /></div>
                  <h3 className={`line-clamp-2 text-xs font-bold leading-5 sm:text-sm ${heading}`}>{certificate.title}</h3>
                  <p className={`mt-1 line-clamp-1 text-[10px] sm:text-xs ${muted}`}>{certificate.issuer}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <About />
    </div>
  );
};
