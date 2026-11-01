/// <reference types="vite/client" />
import { Certificate } from '../types';

/**
 * Canonical certificate asset registry.
 *
 * The portfolio uses `/public/certificate/` as the single runtime asset directory.
 * 1. cer1.png -> Google AI Professional Certificate (Google)
 * 2. cer2.png -> Google UX Design Professional Certificate (Google)
 * 3. cer3.png -> IBM Full Stack Software Developer Professional Certificate (IBM)
 * 4. cer4.png -> Meta Front-End Developer Professional Certificate (Meta)
 * 5. cer5.png -> HubSpot SEO Certification (HubSpot)
 * 6. cer6.png -> Semrush SEO Certification (Semrush)
 */

export const authenticCertificateRegistry: Record<string, {
  title: string;
  issuer: 'Google' | 'IBM' | 'Meta' | 'HubSpot' | 'Semrush' | string;
  category: string;
  issueDate?: string;
  credentialId?: string;
  theme?: string;
  accent?: string;
  skills?: string[];
  description?: string;
}> = {
  // cer1 / Cer1
  'cer1.png': {
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    category: 'AI & Machine Learning',
    accent: '#4285F4',
    skills: ['Generative AI', 'Machine Learning', 'Prompt Engineering', 'AI Architecture'],
    description: 'Professional credential validating foundational and applied artificial intelligence principles, generative AI models, prompt engineering, and intelligent application design.'
  },
  'Cer1.png': {
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    category: 'AI & Machine Learning',
    accent: '#4285F4',
    skills: ['Generative AI', 'Machine Learning', 'Prompt Engineering', 'AI Architecture'],
    description: 'Professional credential validating foundational and applied artificial intelligence principles, generative AI models, prompt engineering, and intelligent application design.'
  },

  // cer2 / Cer2
  'cer2.png': {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    category: 'UI/UX Design',
    accent: '#34A853',
    skills: ['User Research', 'Wireframing', 'Figma Prototyping', 'Design Systems', 'Accessibility (WCAG)'],
    description: 'Comprehensive design certification covering the UX design lifecycle, empathetic user research, wireframing, high-fidelity prototyping in Figma, and accessible interface systems.'
  },
  'Cer2.png': {
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    category: 'UI/UX Design',
    accent: '#34A853',
    skills: ['User Research', 'Wireframing', 'Figma Prototyping', 'Design Systems', 'Accessibility (WCAG)'],
    description: 'Comprehensive design certification covering the UX design lifecycle, empathetic user research, wireframing, high-fidelity prototyping in Figma, and accessible interface systems.'
  },

  // cer3 / Cer3
  'cer3.png': {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM',
    category: 'Full Stack Development',
    accent: '#0F62FE',
    skills: ['React', 'Node.js', 'Express', 'Cloud-Native Architecture', 'Docker & Containers', 'RESTful APIs'],
    description: 'Full stack engineering credential certifying competencies in building modern frontends, scalable server-side microservices, containerized deployment, and RESTful cloud services.'
  },
  'Cer3.png': {
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM',
    category: 'Full Stack Development',
    accent: '#0F62FE',
    skills: ['React', 'Node.js', 'Express', 'Cloud-Native Architecture', 'Docker & Containers', 'RESTful APIs'],
    description: 'Full stack engineering credential certifying competencies in building modern frontends, scalable server-side microservices, containerized deployment, and RESTful cloud services.'
  },

  // cer4 / Cer4
  'cer4.png': {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    category: 'Frontend Engineering',
    accent: '#0081FB',
    skills: ['React', 'Advanced JavaScript (ES6+)', 'State Management', 'UI/UX Engineering', 'Responsive Design'],
    description: 'Professional accreditation from Meta validating mastery of frontend web engineering, React component architecture, modern ES6+ JavaScript, and responsive design systems.'
  },
  'Cer4.png': {
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    category: 'Frontend Engineering',
    accent: '#0081FB',
    skills: ['React', 'Advanced JavaScript (ES6+)', 'State Management', 'UI/UX Engineering', 'Responsive Design'],
    description: 'Professional accreditation from Meta validating mastery of frontend web engineering, React component architecture, modern ES6+ JavaScript, and responsive design systems.'
  },

  // cer5 / Cer5
  'cer5.png': {
    title: 'HubSpot SEO Certification',
    issuer: 'HubSpot',
    category: 'SEO & Search Strategy',
    accent: '#FF7A59',
    skills: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'On-Page Optimization', 'Search Analytics'],
    description: 'Accreditation from HubSpot Academy evaluating knowledge of search engine optimization fundamentals, organic content planning, technical crawling efficiency, and performance metrics.'
  },
  'Cer5.png': {
    title: 'HubSpot SEO Certification',
    issuer: 'HubSpot',
    category: 'SEO & Search Strategy',
    accent: '#FF7A59',
    skills: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'On-Page Optimization', 'Search Analytics'],
    description: 'Accreditation from HubSpot Academy evaluating knowledge of search engine optimization fundamentals, organic content planning, technical crawling efficiency, and performance metrics.'
  },

  // cer6 / Cer6
  'cer6.png': {
    title: 'Semrush SEO Certification',
    issuer: 'Semrush',
    category: 'Search Analytics & Audit',
    accent: '#FF642D',
    skills: ['Technical Site Audit', 'Competitive Intelligence', 'SERP Tracking', 'Backlink Audit', 'Search Telemetry'],
    description: 'Certification in advanced search analytics, technical site auditing, competitive keyword research, backlink analysis, and search engine ranking factors.'
  },
  'Cer6.png': {
    title: 'Semrush SEO Certification',
    issuer: 'Semrush',
    category: 'Search Analytics & Audit',
    accent: '#FF642D',
    skills: ['Technical Site Audit', 'Competitive Intelligence', 'SERP Tracking', 'Backlink Audit', 'Search Telemetry'],
    description: 'Certification in advanced search analytics, technical site auditing, competitive keyword research, backlink analysis, and search engine ranking factors.'
  }
};

/**
 * Strict verified credentials in the EXACT specified order:
 * 1. Google AI Professional Certificate
 * 2. Google UX Design Professional Certificate
 * 3. IBM Full Stack Software Developer Professional Certificate
 * 4. Meta Front-End Developer Professional Certificate
 * 5. HubSpot SEO Certification
 * 6. Semrush SEO Certification
 */
export const defaultVerifiedCertificates: Certificate[] = [
  {
    id: 'cert-1',
    image: '/certificate/cer1.png',
    title: 'Google AI Professional Certificate',
    issuer: 'Google',
    category: 'AI & Machine Learning',
    accent: '#4285F4',
    skills: ['Generative AI', 'Machine Learning', 'Prompt Engineering', 'AI Architecture'],
    description: 'Professional credential validating foundational and applied artificial intelligence principles, generative AI models, prompt engineering, and intelligent application design.',
    verified: true
  },
  {
    id: 'cert-2',
    image: '/certificate/cer2.png',
    title: 'Google UX Design Professional Certificate',
    issuer: 'Google',
    category: 'UI/UX Design',
    accent: '#34A853',
    skills: ['User Research', 'Wireframing', 'Figma Prototyping', 'Design Systems', 'Accessibility (WCAG)'],
    description: 'Comprehensive design certification covering the UX design lifecycle, empathetic user research, wireframing, high-fidelity prototyping in Figma, and accessible interface systems.',
    verified: true
  },
  {
    id: 'cert-3',
    image: '/certificate/cer3.png',
    title: 'IBM Full Stack Software Developer Professional Certificate',
    issuer: 'IBM',
    category: 'Full Stack Development',
    accent: '#0F62FE',
    skills: ['React', 'Node.js', 'Express', 'Cloud-Native Architecture', 'Docker & Containers', 'RESTful APIs'],
    description: 'Full stack engineering credential certifying competencies in building modern frontends, scalable server-side microservices, containerized deployment, and RESTful cloud services.',
    verified: true
  },
  {
    id: 'cert-4',
    image: '/certificate/cer4.png',
    title: 'Meta Front-End Developer Professional Certificate',
    issuer: 'Meta',
    category: 'Frontend Engineering',
    accent: '#0081FB',
    skills: ['React', 'Advanced JavaScript (ES6+)', 'State Management', 'UI/UX Engineering', 'Responsive Design'],
    description: 'Professional accreditation from Meta validating mastery of frontend web engineering, React component architecture, modern ES6+ JavaScript, and responsive design systems.',
    verified: true
  },
  {
    id: 'cert-5',
    image: '/certificate/cer5.png',
    title: 'HubSpot SEO Certification',
    issuer: 'HubSpot',
    category: 'SEO & Search Strategy',
    accent: '#FF7A59',
    skills: ['Technical SEO', 'Keyword Research', 'Content Strategy', 'On-Page Optimization', 'Search Analytics'],
    description: 'Accreditation from HubSpot Academy evaluating knowledge of search engine optimization fundamentals, organic content planning, technical crawling efficiency, and performance metrics.',
    verified: true
  },
  {
    id: 'cert-6',
    image: '/certificate/cer6.png',
    title: 'Semrush SEO Certification',
    issuer: 'Semrush',
    category: 'Search Analytics & Audit',
    accent: '#FF642D',
    skills: ['Technical Site Audit', 'Competitive Intelligence', 'SERP Tracking', 'Backlink Audit', 'Search Telemetry'],
    description: 'Certification in advanced search analytics, technical site auditing, competitive keyword research, backlink analysis, and search engine ranking factors.',
    verified: true
  }
];

/**
 * Resolves a certificate image path safely
 */
export function resolveCertificateImage(pathOrFilename: string): string {
  if (!pathOrFilename) return '/certificate/cer1.png';
  if (pathOrFilename.startsWith('/')) return pathOrFilename;
  return `/certificate/${pathOrFilename}`;
}
