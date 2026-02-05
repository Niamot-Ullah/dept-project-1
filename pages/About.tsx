
import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import EducationSection from '../components/sections/EducationSection';
import TeachingCareerSection from '../components/sections/TeachingCareerSection';

const About: React.FC = () => {
  return (
    <div>
      <AboutSection />
      <EducationSection />
      <TeachingCareerSection />
      <div className="py-24 border-t border-slate-100">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-12">Academic Philosophy</h2>
        <div className="prose prose-slate max-w-none text-academic-secondary">
          <p className="text-xl font-serif italic mb-8">
            "Economic science provides the tools to understand and improve human welfare through rigorous analysis and evidence-based policy."
          </p>
          <p className="mb-6">
            My approach to academia is centered on the integration of theoretical economic principles with empirical reality. I believe that the study of economics should not only happen in textbooks but through the active interrogation of real-world data and societal challenges.
          </p>
          <p>
            I am committed to fostering a learning environment where students develop critical thinking skills and the quantitative proficiency necessary to navigate the complexities of global and local economies.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
