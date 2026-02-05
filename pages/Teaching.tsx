
import React from 'react';
import TeachingCareerSection from '../components/sections/TeachingCareerSection';
import { PROFILE } from '../data';

const Teaching: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="mb-16">
        <h1 className="text-5xl font-serif font-bold text-academic-primary mb-6">Curriculum</h1>
        <p className="text-xl text-academic-muted leading-relaxed max-w-3xl">
          Building interdisciplinary bridges between core computer science and societal impact.
        </p>
      </div>
      <TeachingCareerSection />
      
      <div className="py-24 border-t border-slate-100">
        <div className="grid md:grid-cols-2 gap-24">
           <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-8">Advising Philosophy</h2>
              <div className="prose prose-slate text-academic-secondary">
                <p className="mb-6">
                  I view advising as a partnership. My goal is to support my students in becoming independent researchers who can navigate both the technical and ethical complexities of the field.
                </p>
                <ul className="space-y-4">
                  <li><strong>Weekly 1:1 Meetings</strong> - Dedicated time for project brainstorming.</li>
                  <li><strong>HCAI Lab Seminars</strong> - Collaborative group reading sessions.</li>
                  <li><strong>Conference Sponsorship</strong> - Funding for students to present at major venues.</li>
                </ul>
              </div>
           </div>
           <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-8">Office Hours</h2>
              <div className="p-8 bg-slate-50 rounded-3xl border border-slate-100">
                <p className="text-2xl font-serif font-bold text-academic-primary mb-2">{PROFILE.officeHours}</p>
                <p className="text-academic-muted mb-4">{PROFILE.office}</p>
                <div className="h-px bg-slate-200 w-full my-6"></div>
                <p className="text-sm italic text-academic-secondary">
                  Please book a slot via the department portal at least 24 hours in advance. For non-enrolled students, email me directly for an appointment.
                </p>
              </div>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Teaching;
