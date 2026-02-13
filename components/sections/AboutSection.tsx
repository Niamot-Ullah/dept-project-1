
import React from 'react';
import { PROFILE } from '../../data';

const AboutSection: React.FC = () => {
  return (
    <section className="py-24 animate-fade-up">
      <div className="max-w-3xl">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-6">Introduction</h2>
        <h3 className="text-3xl md:text-4xl font-serif font-bold text-academic-primary mb-8">Academic Biography</h3>
        <div className="space-y-6 text-md md:text-lg  text-academic-secondary leading-relaxed font-light">
          <p>
            {PROFILE.longBio}
          </p>
          <p>
  His research employs applied econometric methods to study education economics, public health, environmental sustainability, and development policy, with a focus on evidence-based analysis in developing country contexts. He is also actively engaged in teaching, curriculum development, and academic mentorship.
</p>
<p>
  He has served the University of Barishal in various academic roles, progressing from Lecturer to Associate Professor, and has contributed to the faculty’s academic growth through research and teaching. His work appears in peer-reviewed national and international journals.
</p>


        </div>
      </div>
    </section>
  );
};

export default AboutSection;
