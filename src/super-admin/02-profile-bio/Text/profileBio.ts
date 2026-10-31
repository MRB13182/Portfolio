/**
 * 02 - PROFILE & BIO (SUPER ADMIN)
 * 
 * Edit this file to update biographical copy, personal branding titles,
 * contact details, and statistical metrics displayed across the portfolio.
 */

export interface StatItem {
  label: string;
  value: string;
  numericValue: number;
  suffix: string;
  description: string;
}

export interface ProfileBioConfig {
  personal: {
    fullName: string;
    firstName: string;
    lastName: string;
    titles: string[];
    headline: string;
    bio: string;
    extendedBio: string;
    location: string;
    email: string;
    phone: string;
    whatsappNumber: string;
    telegramUsername: string;
    availabilityStatus: string;
    yearsOfExperience: number;
    resumeUrl: string;
  };
  stats: StatItem[];
  profileImage: string;
}

export const profileBio: ProfileBioConfig = {
  personal: {
    fullName: 'MD. Moshiur Rahman',
    firstName: 'Moshiur',
    lastName: 'Rahman',
    titles: [
      'Full Stack Developer',
      'UI/UX Designer',
      'Next.js & React Specialist',
      'Cloud & System Architect',
    ],
    headline: 'Web Developer & UI/UX Designer',
    bio: 'I am a student and aspiring full-stack developer who enjoys building modern, responsive, and user-friendly digital experiences. I am continuously learning web technologies, UI/UX design, and software engineering through hands-on projects.',
    extendedBio: 'I am MD. Moshiur Rahman, a student with a strong interest in full-stack development and UI/UX design. I enjoy exploring new technologies, solving practical problems, and creating accessible digital products with clean interfaces and reliable functionality. My current learning interests include React, Next.js, modern frontend development, backend fundamentals, and AI-powered tools.',
    location: 'Dhaka, Bangladesh (Available Worldwide & Remote)',
    email: 'borshonsweb@gmail.com',
    phone: '+880 1700-000000',
    whatsappNumber: '+8801700000000',
    telegramUsername: 'moshiur_dev',
    availabilityStatus: 'Available for Full-time & High-Impact Projects',
    yearsOfExperience: 5,
    resumeUrl: '#resume-download',
  },
  stats: [
    {
      label: 'Years Experience',
      value: '5+',
      numericValue: 5,
      suffix: '+',
      description: 'Building modern web applications',
    },
    {
      label: 'Projects Completed',
      value: '50+',
      numericValue: 50,
      suffix: '+',
      description: 'Delivered for global clients',
    },
    {
      label: 'Happy Clients',
      value: '35+',
      numericValue: 35,
      suffix: '+',
      description: 'Worldwide satisfaction rate',
    },
    {
      label: 'Client Satisfaction',
      value: '99%',
      numericValue: 99,
      suffix: '%',
      description: 'Based on post-launch metrics',
    },
  ],
  profileImage: '/profile/profile.png',
};

export default profileBio;
