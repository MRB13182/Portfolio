import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import { usePortfolioData } from '../context/DataContext';
import { portfolioConfig } from '../config/portfolio';
import { useToast } from '../context/ToastContext';
import {
  Mail, Phone, MapPin, Send, MessageSquare, CheckCircle2,
  Github, Linkedin, Twitter, ArrowUpRight
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const { isNeon } = useTheme();
  const { profile } = usePortfolioData();
  const { addToast } = useToast();

  const fullName = profile?.name || portfolioConfig.personal.name || (isNeon ? 'Abdullah Tariq' : 'Aarav Singh');
  const email = profile?.email || portfolioConfig.personal.email || 'borshonsweb@gmail.com';
  const phone = profile?.phone || portfolioConfig.personal.phone || '+880 1700-000000';
  const location = profile?.location || portfolioConfig.personal.location || 'Dhaka, Bangladesh (Available Worldwide)';

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      addToast('Please fill in all required fields.', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
      addToast('Your message has been sent successfully! I will get back to you shortly.', 'success');
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 800);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 sm:pt-36 pb-20">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
        <div className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold mb-3 border ${
          isNeon
            ? 'bg-white text-[#10110F] border-[#E6E8E1]'
            : 'bg-white/80 text-[#8B5CF6] border-slate-200/80 shadow-xs'
        }`}>
          {isNeon ? (
            <span className="w-2 h-2 rounded-full bg-[#B7F32B]" />
          ) : (
            <MessageSquare className="w-3.5 h-3.5" />
          )}
          <span className="font-mono uppercase tracking-wider text-[11px]">
            LET'S CONNECT
          </span>
        </div>

        <h1 className={`font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight mb-4 ${
          isNeon ? 'text-[#10110F]' : 'text-[#171725]'
        }`}>
          Have a Project in Mind?<br />
          <span className={
            isNeon 
              ? 'italic font-normal underline decoration-[#B7F32B] decoration-4 underline-offset-4' 
              : 'text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700'
          }>
            Let's Talk.
          </span>
        </h1>

        <p className={`text-sm sm:text-base leading-relaxed ${
          isNeon ? 'text-[#686B65]' : 'text-slate-600'
        }`}>
          Whether you're looking to build an AI product, redesign an application, or discuss technical opportunities, I'm just a message away.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start max-w-6xl mx-auto">
        
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          
          <div className={`p-6 sm:p-7 rounded-3xl border ${
            isNeon
              ? 'bg-white border-[#E6E8E1] shadow-xs'
              : 'bg-white/80 border-white/90 shadow-[0_12px_32px_-12px_rgba(165,138,242,0.12)] backdrop-blur-xl'
          }`}>
            <h2 className={`font-display font-bold text-lg mb-4 ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
              Contact Information
            </h2>

            <div className="space-y-4">
              <a 
                href={`mailto:${email}`}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isNeon ? 'bg-[#F7F8F5] text-[#10110F] group-hover:bg-[#B7F32B]' : 'bg-violet-100 text-violet-700 group-hover:bg-violet-200'
                }`}>
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#686B65]">Email Address</div>
                  <div className={`text-xs sm:text-sm font-semibold truncate ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
                    {email}
                  </div>
                </div>
              </a>

              <a 
                href={`tel:${phone.replace(/\s+/g, '')}`}
                className="flex items-center gap-3.5 group cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-colors ${
                  isNeon ? 'bg-[#F7F8F5] text-[#10110F] group-hover:bg-[#B7F32B]' : 'bg-violet-100 text-violet-700 group-hover:bg-violet-200'
                }`}>
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#686B65]">Phone / WhatsApp</div>
                  <div className={`text-xs sm:text-sm font-semibold truncate ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
                    {phone}
                  </div>
                </div>
              </a>

              <div className="flex items-center gap-3.5">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${
                  isNeon ? 'bg-[#F7F8F5] text-[#10110F]' : 'bg-violet-100 text-violet-700'
                }`}>
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[11px] font-mono text-[#686B65]">Location</div>
                  <div className={`text-xs sm:text-sm font-semibold ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
                    {location}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Availability Card */}
          <div className={`p-6 rounded-3xl border ${
            isNeon
              ? 'bg-[#11130F] text-white border-white/10 shadow-lg'
              : 'bg-[#171725] text-white border-[#171725] shadow-lg'
          }`}>
            <div className="flex items-center gap-2 mb-2">
              <span className={`w-2.5 h-2.5 rounded-full animate-pulse ${isNeon ? 'bg-[#B7F32B]' : 'bg-emerald-400'}`} />
              <span className={`text-xs font-bold uppercase tracking-wider ${isNeon ? 'text-[#B7F32B]' : 'text-emerald-400'}`}>
                Current Availability
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              Open to full-time engineering roles, high-impact freelance products, and AI technical consulting.
            </p>
          </div>

        </div>

        {/* Right Column: Interactive Form */}
        <div className="lg:col-span-7">
          <div className={`p-6 sm:p-10 rounded-3xl border ${
            isNeon
              ? 'bg-white border-[#E6E8E1] shadow-lg'
              : 'bg-white/85 border-white/90 shadow-[0_16px_40px_-15px_rgba(165,138,242,0.14)] backdrop-blur-xl'
          }`}>
            {submitted ? (
              <div className="text-center py-10 space-y-4">
                <div className={`w-14 h-14 rounded-full flex items-center justify-center mx-auto ${
                  isNeon ? 'bg-[#B7F32B]/20 text-[#10110F]' : 'bg-violet-100 text-violet-700'
                }`}>
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className={`font-display font-bold text-2xl ${isNeon ? 'text-[#10110F]' : 'text-[#171725]'}`}>
                  Message Received!
                </h3>
                <p className="text-xs sm:text-sm text-[#686B65] max-w-sm mx-auto">
                  Thank you for reaching out. I usually reply within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className={`px-5 py-2.5 rounded-full text-xs font-bold transition active:scale-95 ${
                    isNeon ? 'bg-[#10110F] text-white hover:bg-black' : 'bg-[#171725] text-white hover:bg-black'
                  }`}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-[#10110F]">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none transition ${
                        isNeon
                          ? 'bg-[#F7F8F5] border-[#E6E8E1] focus:border-[#10110F]'
                          : 'bg-slate-50 border-slate-200 focus:border-violet-500'
                      }`}
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold mb-1.5 text-[#10110F]">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none transition ${
                        isNeon
                          ? 'bg-[#F7F8F5] border-[#E6E8E1] focus:border-[#10110F]'
                          : 'bg-slate-50 border-slate-200 focus:border-violet-500'
                      }`}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5 text-[#10110F]">
                    Subject / Project Type
                  </label>
                  <input
                    type="text"
                    placeholder="Web App, AI Feature, Full-Stack Product..."
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none transition ${
                      isNeon
                        ? 'bg-[#F7F8F5] border-[#E6E8E1] focus:border-[#10110F]'
                        : 'bg-slate-50 border-slate-200 focus:border-violet-500'
                    }`}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold mb-1.5 text-[#10110F]">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Tell me about your project, timeline, and goals..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-4 py-2.5 rounded-xl text-xs sm:text-sm border outline-none transition resize-none ${
                      isNeon
                        ? 'bg-[#F7F8F5] border-[#E6E8E1] focus:border-[#10110F]'
                        : 'bg-slate-50 border-slate-200 focus:border-violet-500'
                    }`}
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className={`w-full py-3.5 px-6 rounded-full text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition duration-200 active:scale-95 shadow-md ${
                    isNeon
                      ? 'bg-[#B7F32B] text-[#10110F] hover:bg-[#C4FF32]'
                      : 'bg-[#171725] text-white hover:bg-black'
                  }`}
                >
                  <span>{submitting ? 'Sending Message...' : 'Send Message'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

    </div>
  );
};
