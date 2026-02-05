
import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import TeachingCareerSection from '../components/sections/TeachingCareerSection';
import PublicationsSection from '../components/sections/PublicationsSection';
import ContactSection from '../components/sections/ContactSection';

const Home: React.FC = () => {
  return (
    <div className="space-y-4">
      <HeroSection />
      <AboutSection />
      <EducationSection />
      <PublicationsSection limit={3} />
      <TeachingCareerSection />
      <ContactSection />
    </div>
  );
};

export default Home;
