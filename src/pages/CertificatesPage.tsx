import React from 'react';
import { CertificatesShowcase } from '../components/sections/CertificatesShowcase';

interface CertificatesPageProps {
}

export const CertificatesPage: React.FC = () => {
  return (
    <div className="w-full pb-16">
      {/* 1. Verified Certificates Showcase */}
      <CertificatesShowcase />
    </div>
  );
};
