
import React, { useState } from 'react';
import { PROFILE } from '../../data';

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('sending');
    setTimeout(() => setFormStatus('sent'), 1000);
  };

  return (
    <section className="py-24 border-t border-slate-100 animate-fade-up">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        <div>
          <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-academic-highlight mb-6">Inquiries</h2>
          <h3 className="text-4xl font-serif font-bold text-academic-primary mb-8">Get in Touch</h3>
          <p className="text-lg text-academic-muted mb-12 leading-relaxed">
            I am always open to discussing new research collaborations, speaking opportunities, or potential graduate student advisement.
          </p>
          
          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 text-academic-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-academic-muted mb-1">Email</p>
                <a href={`mailto:${PROFILE.email}`} className="text-xl font-medium text-academic-primary hover:text-academic-highlight transition-colors">
                  {PROFILE.email}
                </a>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center flex-shrink-0 text-academic-highlight">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-widest text-academic-muted mb-1">Office</p>
                <p className="text-xl font-medium text-academic-primary">{PROFILE.office}</p>
                <p className="text-academic-muted mt-1">{PROFILE.address}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-50 p-10 lg:p-14 rounded-[2rem] border border-slate-100">
          {formStatus === 'sent' ? (
            <div className="text-center py-10 animate-fade-in">
              <div className="w-16 h-16 bg-academic-highlight text-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-academic-highlight/30">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h4 className="text-2xl font-serif font-bold text-academic-primary mb-2">Message Transmitted</h4>
              <p className="text-academic-muted">Thank you for your inquiry. I will respond shortly.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input required type="text" placeholder="Full Name" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-academic-highlight outline-none transition-colors" />
              </div>
              <div>
                <input required type="email" placeholder="Email Address" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-academic-highlight outline-none transition-colors" />
              </div>
              <div>
                <textarea required rows={4} placeholder="Your Message" className="w-full px-0 py-4 bg-transparent border-b border-slate-200 focus:border-academic-highlight outline-none transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-5 bg-academic-primary text-white font-bold rounded-2xl hover:bg-academic-highlight hover:-translate-y-1 hover:shadow-xl transition-all">
                Send Correspondence
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
