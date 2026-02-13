
import React from 'react';
import { PROFILE } from '../data';

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-academic-accent bg-slate-50 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-academic-muted">
        <div className="mb-4 md:mb-0 text-center md:text-left">
          <p className="font-semibold text-academic-text">{PROFILE.name}</p>
          <p>{PROFILE.title}</p>
          <p>{PROFILE.department}</p>
          <p>{PROFILE.university}</p>
        </div>
        <div className="flex flex-col items-center md:items-end space-y-2">
          <div className="flex space-x-6">
            <a href={`mailto:${PROFILE.email}`} className="hover:text-academic-primary transition-colors">Email</a>
            <a href={PROFILE.scholarUrl} target="_blank" rel="noopener noreferrer" className="hover:text-academic-primary transition-colors">Google Scholar</a>
            <a href={PROFILE.fbUrl} target='_blank' className="hover:text-academic-primary transition-colors">Facebook</a>
          </div>
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
