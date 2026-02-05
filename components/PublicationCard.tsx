
import React from 'react';
import { Publication } from '../types';

interface Props {
  pub: Publication;
}

const PublicationCard: React.FC<Props> = ({ pub }) => {
  return (
    <div className="py-6 border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors px-2 rounded-lg -mx-2">
      <div className="flex flex-col md:flex-row md:items-start justify-between">
        <div className="flex-1">
          <h3 className="text-lg font-serif font-bold text-academic-primary mb-1 leading-snug">
            {pub.title}
          </h3>
          <p className="text-sm text-academic-text mb-2">
            {pub.authors.map((author, idx) => (
              <span key={idx} className={(author.includes("Ahmed") || author.includes("Tanvir")) ? "font-bold underline" : ""}>
                {author}{idx < pub.authors.length - 1 ? ", " : ""}
              </span>
            ))}
          </p>
          <p className="text-sm italic text-academic-muted mb-3">
            {pub.venue}, {pub.year}
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {pub.tags.map(tag => (
              <span key={tag} className="px-2 py-0.5 bg-academic-accent/50 text-[10px] uppercase tracking-wider rounded text-academic-muted font-bold">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="flex md:flex-col space-x-3 md:space-x-0 md:space-y-2 text-xs font-semibold uppercase tracking-widest mt-2 md:mt-0 md:ml-6">
          {pub.pdfUrl && pub.pdfUrl !== "#" && (
            <a 
              href={pub.pdfUrl} 
              className="text-academic-secondary hover:text-academic-primary border border-academic-accent px-3 py-1.5 rounded transition-all flex items-center justify-center min-w-[80px]"
            >
              PDF
            </a>
          )}
          {pub.doi && pub.doi !== "#" && (
            <a 
              href={pub.doi} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-academic-secondary hover:text-academic-primary border border-academic-accent px-3 py-1.5 rounded transition-all flex items-center justify-center min-w-[80px]"
            >
              DOI
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default PublicationCard;
