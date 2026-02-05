
import React from 'react';
import { EDUCATION } from '../../data';

const EducationSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-100 animate-fade-up">
      <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-12">Academic Pedigree</h2>
      <div className="grid md:grid-cols-3 gap-12">
        {EDUCATION.map((edu, idx) => (
          <div key={idx} className="group relative">
            <div className="text-6xl font-serif font-black text-slate-50 absolute -top-8 -left-4 z-0 group-hover:text-slate-100 transition-colors">
              0{idx + 1}
            </div>
            <div className="relative z-10">
              <span className="text-academic-highlight font-bold mb-2 block">{edu.year}</span>
              <h4 className="text-xl font-serif font-bold text-academic-primary mb-2">{edu.degree}</h4>
              <p className="text-academic-secondary font-medium">{edu.institution}</p>
              <p className="text-sm text-academic-muted italic mt-1">{edu.field}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
