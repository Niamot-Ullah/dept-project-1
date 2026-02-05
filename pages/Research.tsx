
import React from 'react';
import PublicationsSection from '../components/sections/PublicationsSection';

const Research: React.FC = () => {
  return (
    <div className="pt-12">
      <div className="mb-16">
        <h1 className="text-5xl font-serif font-bold text-academic-primary mb-6">Research Program</h1>
        <p className="text-xl text-academic-muted leading-relaxed max-w-3xl">
          Advancing the understanding of South Asian economic dynamics through the lens of environmental quality and technological diffusion.
        </p>
      </div>
      
      <div className="py-24 border-t border-slate-100">
        <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-12">Key Investigation</h2>
        <div className="space-y-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h3 className="text-3xl font-serif font-bold text-academic-primary mb-4">Environmental Impact of ICT</h3>
              <p className="text-academic-secondary leading-relaxed mb-6">
                My recent research investigates how digital transformation in South Asia influences environmental standards. By using panel data and econometrics, we examine the 'Environmental Kuznets Curve' hypothesis in the context of emerging digital economies.
              </p>
              <div className="flex gap-4">
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 rounded">South Asia Focus</span>
                <span className="text-xs font-bold px-3 py-1 bg-slate-100 rounded">Panel Data</span>
              </div>
            </div>
            <div className="order-1 md:order-2 bg-slate-50 h-64 rounded-[2rem] border border-slate-100 flex items-center justify-center overflow-hidden">
               <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop" className="w-full h-full object-cover opacity-80" alt="Economics Analysis" />
            </div>
          </div>
        </div>
      </div>

      <PublicationsSection limit={5} />
    </div>
  );
};

export default Research;
