
import React from 'react';
import { POSITIONS } from '../../data';

const TeachingCareerSection: React.FC = () => {
  return (
    <section className="py-24 border-t border-slate-100 animate-fade-up">
      <div className="max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-6">Experience</h2>
        <h3 className="text-4xl font-serif font-bold text-academic-primary mb-16">Academic Career</h3>
        
        <div className="relative border-l-2 border-slate-100 ml-4 pl-8 space-y-16">
          {POSITIONS.map((pos, idx) => (
            <div key={idx} className="relative">
              {/* Timeline dot */}
              <div className="absolute -left-[41px] top-1.5 w-4 h-4 rounded-full bg-white border-4 border-academic-highlight shadow-sm"></div>
              
              <div className="group">
                <span className="inline-block px-3 py-1 bg-slate-50 text-academic-highlight text-xs font-bold rounded-full border border-slate-200 mb-3 transition-colors group-hover:border-academic-highlight/30">
                  {pos.period}
                </span>
                <h4 className="text-2xl font-serif font-bold text-academic-primary mb-1">
                  {pos.title}
                </h4>
                <p className="text-lg text-academic-secondary font-medium">
                  {pos.institution}
                </p>
                <p className="text-academic-muted mt-2 italic">
                  Department of {pos.department}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingCareerSection;
