
import React from 'react';
import PublicationsSection from '../components/sections/PublicationsSection';

const Publications: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="mb-16">
        <h1 className="text-5xl font-serif font-bold text-academic-primary mb-6">Publications</h1>
        <p className="text-xl text-academic-muted leading-relaxed max-w-3xl">
          A comprehensive archive of peer-reviewed journal articles and conference proceedings.
        </p>
      </div >
      <div className="grid gap-12">
      <PublicationsSection />
      </div>
    </div>
  );
};

export default Publications;
