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
    bio: 'I build modern, responsive, and user-friendly digital experiences that combine thoughtful design with reliable functionality.',
    extendedBio: 'I am a web developer and UI/UX designer who enjoys turning ideas into clean, accessible, and visually engaging digital products. My focus is on responsive interfaces, thoughtful user experiences, maintainable code, and reliable performance.',
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
