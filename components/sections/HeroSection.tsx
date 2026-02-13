
import React from 'react';
import { PROFILE, RESEARCH_INTERESTS } from '../../data';
import { FaFacebook } from 'react-icons/fa';
import img from '../../assets/img.jpg';

const HeroSection: React.FC = () => {
  return (
    <section className="relative -mx-6 sm:-mx-12 lg:-mx-24 px-6 sm:px-12 lg:px-24 pt-16 pb-24 bg-slate-50 border-b border-slate-200 overflow-hidden rounded-2xl">
      {/* Decorative Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#0f172a 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>

      <div className="relative z-10 flex flex-col-reverse md:flex-row items-center gap-12 lg:gap-20">
        <div className="flex-1 text-center lg:text-left animate-fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 text-[10px] font-bold tracking-[0.2em] uppercase bg-white text-academic-highlight border border-academic-highlight/20 rounded-full shadow-sm">
            <span className="w-2 h-2 bg-academic-highlight rounded-full animate-pulse"></span>
            {PROFILE.university}
          </div>

          <h1 className="text-5xl lg:text-7xl font-serif font-bold text-academic-primary mb-4 tracking-tight leading-tight">
            {PROFILE.name}
          </h1>

          <div className="mb-8">
            <p className="text-xl font-serif text-academic-secondary italic mb-1">
              {PROFILE.title}
            </p>
            <p className="text-lg font-medium text-academic-muted uppercase tracking-wider">
              {PROFILE.department}
            </p>
          </div>

          <p className="text-md text-academic-secondary/80 leading-relaxed mb-10 max-w-2xl mx-auto lg:mx-0 font-light">
            {PROFILE.shortBio}
          </p>

          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-12">
            {/* cv  */}
            {/* <a 
              href={PROFILE.cvUrl} 
              className="group relative px-8 py-4 bg-academic-primary text-white rounded-xl font-bold overflow-hidden transition-all hover:shadow-2xl hover:shadow-academic-primary/20 hover:-translate-y-1"
            >
              <span className="relative z-10 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
                Curriculum Vitae
              </span>
              <div className="absolute inset-0 bg-academic-highlight opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </a> */}
            {/* scholar  */}
            <a
              href={PROFILE.scholarUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-white border border-slate-200 text-academic-primary rounded-xl font-bold shadow-sm hover:border-academic-primary hover:bg-slate-50 transition-all flex items-center gap-2 overflow-hidden transition-all hover:shadow-2xl hover:shadow-academic-primary/20 hover:-translate-y-1 "
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-academic-highlight" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 24l-8-9h6V0h4v15h6z" transform="rotate(180 12 12)" />
              </svg>
              Google Scholar
            </a>
            {/* fb  */}

            <a
              href={PROFILE.fbUrl}
              target="_blank"

              className=" text-blue-700 hover:text-black transition-all flex items-center  overflow-hidden  hover:-translate-y-1 "
            >

              <FaFacebook size={43} />
            </a>



          </div>

          <div className="flex flex-wrap justify-center lg:justify-start gap-2">
            {RESEARCH_INTERESTS.map(interest => (
              <span key={interest} className="text-[10px] font-bold text-academic-muted bg-white px-4 py-2 rounded-lg border border-slate-200 shadow-sm transition-transform hover:scale-105">
                {interest}
              </span>
            ))}
          </div>
        </div>

        <div className="relative w-72 h-72 lg:w-[420px] lg:h-[420px] flex-shrink-0 animate-fade-in group">
          {/* Decorative frames */}
          <div className="absolute -inset-4 bg-white rounded-[2.5rem] shadow-xl z-0 group-hover:rotate-2 transition-transform duration-500"></div>
          <div className="absolute -inset-4 border border-academic-highlight/10 rounded-[2.5rem] rotate-3 z-0 group-hover:-rotate-3 transition-transform duration-500"></div>

          <div className="relative z-10 w-full h-full overflow-hidden rounded-3xl shadow-2xl">
            <img
              src={img}
              alt={PROFILE.name}
              className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
            />
            {/* Subtle overlay for name on mobile if desired, or just branding */}
            <div className="absolute inset-0 bg-gradient-to-t from-academic-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
