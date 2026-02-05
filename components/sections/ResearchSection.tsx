
import React from 'react';

const ResearchSection: React.FC = () => {
  const researchAreas = [
    {
      title: "ICT Diffusion & Environment",
      desc: "Analyzing how the spread of information and communication technologies impacts CO2 emissions and environmental sustainability in South Asian economies.",
      tags: ["Econometrics", "Environment"]
    },
    {
      title: "Sustainable Economic Growth",
      desc: "Investigating the nexus between energy consumption, trade openness, and long-term economic development in emerging markets.",
      tags: ["Development", "Trade"]
    },
    {
      title: "Applied Econometrics",
      desc: "Utilizing advanced statistical techniques to audit public policy outcomes and financial inclusion metrics in rural and urban sectors.",
      tags: ["Statistics", "Policy"]
    }
  ];

  return (
    <section className="py-24 border-t border-slate-100 animate-fade-up">
      <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-12">Research Directions</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {researchAreas.map((area, i) => (
          <div key={i} className="group p-8 rounded-3xl bg-slate-50 border border-transparent hover:border-academic-highlight/20 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <span className="text-academic-highlight font-serif font-bold text-xl">{i+1}</span>
            </div>
            <h4 className="text-2xl font-serif font-bold text-academic-primary mb-4 group-hover:text-academic-highlight transition-colors">{area.title}</h4>
            <p className="text-academic-secondary leading-relaxed mb-6">{area.desc}</p>
            <div className="flex gap-2">
              {area.tags.map(t => (
                <span key={t} className="text-[10px] font-bold uppercase tracking-wider text-academic-muted">{t}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ResearchSection;
