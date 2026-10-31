import React from 'react';
import { useTheme } from '../../context/ThemeContext';
import { portfolioConfig } from '../../config/portfolio';
import { usePortfolioData } from '../../context/DataContext';
import { SafeImage } from '../common/SafeImage';
import { motion } from 'motion/react';
import { Sparkles, Code2, Palette, Gauge, MapPin, UserRound, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const About: React.FC = () => {
  const { isDark } = useTheme();
  const { profile, skills } = usePortfolioData();
  const displayName = 'Moshiur Rahman';
  const primaryTitle = (profile?.titles && profile.titles[0]) || 'Creative Web Developer & UI/UX Designer';
  const profileImg = (typeof profile?.profile_image === 'string' && profile.profile_image.trim())
    ? profile.profile_image.trim()
    : portfolioConfig.assets.profileImage || '/profile/profile.png';
  const location = profile?.location || portfolioConfig.personal.location || 'Available remotely';
  const bio = profile?.bio || 'I enjoy turning ideas into clear, useful digital experiences through thoughtful design and dependable code.';
  const skillItems = (skills || []).slice(0, 8);
  const glass = isDark
    ? 'border-white/10 bg-[#0d1427]/70 shadow-[0_16px_44px_-24px_rgba(0,0,0,.75)]'
    : 'border-white/80 bg-white/75 shadow-[0_18px_42px_-24px_rgba(49,46,129,.18)]';
  const heading = isDark ? 'text-white' : 'text-slate-950';
  const muted = isDark ? 'text-slate-400' : 'text-slate-600';

  const cards = [
    { icon: Code2, title: 'Web Development', desc: 'Modern, responsive websites built with clean structure and a focus on performance.' },
    { icon: Palette, title: 'UI/UX Design', desc: 'Clear layouts and thoughtful interactions that help people get things done.' },
    { icon: Gauge, title: 'Performance & Detail', desc: 'Accessible interfaces, careful polish and smooth behavior across screen sizes.' },
  ];

  return (
    <section id="about" className="relative scroll-mt-8 px-4 py-12 sm:px-6 sm:py-16 lg:px-8">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-20 h-56 w-56 rounded-full bg-violet-600/10 blur-[90px]" />
        <div className="absolute right-0 bottom-10 h-56 w-56 rounded-full bg-cyan-500/10 blur-[90px]" />
      </div>
      <div className="mx-auto max-w-6xl">
        <div className="mb-8 flex items-end justify-between gap-4 sm:mb-10">
          <div>
            <div className={`mb-2 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[.18em] ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}><Sparkles className="h-4 w-4" /> A little about me</div>
            <h2 className={`text-3xl font-black tracking-tight sm:text-4xl ${heading}`}>About <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-violet-500 bg-clip-text text-transparent">Me</span></h2>
          </div>
          <Link to="/skills" className={`hidden items-center gap-1 text-sm font-semibold sm:inline-flex ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>My skills <ArrowUpRight className="h-4 w-4" /></Link>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.85fr_1.15fr]">
          <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className={`overflow-hidden rounded-3xl border p-5 backdrop-blur-2xl sm:p-6 ${glass}`}>
            <div className="flex items-center gap-4">
              <div className="h-20 w-20 shrink-0 rounded-2xl bg-gradient-to-br from-cyan-400 via-blue-600 to-violet-600 p-[2px]">
                <div className={`h-full w-full overflow-hidden rounded-[14px] ${isDark ? 'bg-slate-900' : 'bg-white'}`}><SafeImage src={profileImg} alt={displayName} fallbackType="profile" className="h-full w-full object-cover" /></div>
              </div>
              <div className="min-w-0">
                <h3 className={`text-xl font-black sm:text-2xl ${heading}`}>{displayName}</h3>
                <p className={`mt-1 text-sm font-semibold leading-snug ${isDark ? 'text-cyan-300' : 'text-cyan-700'}`}>{primaryTitle}</p>
                <p className={`mt-2 flex items-center gap-1.5 text-xs ${muted}`}><MapPin className="h-3.5 w-3.5" />{location}</p>
              </div>
            </div>
            <p className={`mt-5 text-sm leading-7 ${muted}`}>{bio}</p>
            <div className={`mt-5 flex items-center gap-2 rounded-2xl border p-3 text-xs ${isDark ? 'border-emerald-400/15 bg-emerald-400/[0.06] text-emerald-300' : 'border-emerald-600/15 bg-emerald-50 text-emerald-700'}`}>
              <span className="h-2 w-2 rounded-full bg-emerald-400" /> Focused on thoughtful design and reliable implementation
            </div>
          </motion.article>

          <div className="grid gap-4 sm:grid-cols-2">
            {cards.map(({ icon: Icon, title, desc }, i) => (
              <motion.article key={title} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * .06 }} className={`rounded-3xl border p-5 backdrop-blur-2xl transition duration-200 hover:-translate-y-1 ${glass}`}>
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl border border-violet-400/20 bg-gradient-to-br from-cyan-400/15 to-violet-500/20 text-cyan-300"><Icon className="h-5 w-5" /></div>
                <h3 className={`font-bold ${heading}`}>{title}</h3>
                <p className={`mt-2 text-sm leading-6 ${muted}`}>{desc}</p>
              </motion.article>
            ))}
            <motion.article initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: .18 }} className={`rounded-3xl border p-5 backdrop-blur-2xl sm:col-span-2 ${glass}`}>
              <div className="mb-3 flex items-center gap-2"><UserRound className={`h-4 w-4 ${isDark ? 'text-violet-300' : 'text-violet-700'}`} /><h3 className={`font-bold ${heading}`}>Tools & skills</h3></div>
              <div className="flex flex-wrap gap-2">
                {(skillItems.length ? skillItems.map((s: any) => s.name) : ['HTML', 'CSS', 'JavaScript', 'React', 'Responsive Design', 'UI/UX', 'Figma', 'Git']).map((skill: string) => <span key={skill} className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${isDark ? 'border-white/10 bg-white/[0.04] text-slate-300' : 'border-slate-200 bg-white/80 text-slate-700'}`}>{skill}</span>)}
              </div>
            </motion.article>
          </div>
        </div>
      </div>
    </section>
  );
};
