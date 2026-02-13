
import React from 'react';
import { PUBLICATIONS } from '../../data';
import PublicationCard from '../PublicationCard';
import { Link } from 'react-router-dom';

interface Props {
  limit?: number;
}

const PublicationsSection: React.FC<Props> = ({ limit }) => {
  const displayedPubs = limit ? [...PUBLICATIONS].sort((a, b) => b.year - a.year).slice(0, limit) : [...PUBLICATIONS].sort((a, b) => b.year - a.year);

  return (
    <section className="py-24 border-t border-slate-100 animate-fade-up">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-6">Scientific Output</h2>
          <h3 className="text-4xl font-serif font-bold text-academic-primary">Selected Publications</h3>
        </div>
        {limit && (
          <Link to="/publications" className="text-sm font-bold text-academic-highlight hover:underline uppercase tracking-widest pb-1 border-b-2 border-academic-highlight/20">
            View More →
          </Link>
        )}
      </div>

      <div className="divide-y divide-slate-100 space-y-4">
        {displayedPubs.map(pub => (
          <PublicationCard  key={pub.id} pub={pub} />
        ))}
      </div>
    </section>
  );
};

export default PublicationsSection;
