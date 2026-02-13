import React, { useEffect, useState, useRef } from 'react';
import { PROFILE } from '../../data';
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const ContactSection: React.FC = () => {
  const [formStatus, setFormStatus] = useState<'idle' | 'sending' | 'sent'>('idle');
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormStatus('sending');

    if (!form.current) return;
    // const OWNER_EMAIL = "your-new-email@example.com";

    emailjs
      .sendForm("service_ld934jh", "template_5q344nk", form.current, {
        publicKey: "V5MNJUUa3XaoH3AYt",
        
      })
      .then(
        () => {
          Swal.fire({
            title: "Message Sent!",
            text: "Thank you for reaching out. I'll get back to you soon!",
            icon: "success",
            draggable: true,
          });
          setFormStatus('sent');
          form.current?.reset();
          // Reset form status after 3 seconds
          setTimeout(() => setFormStatus('idle'), 3000);
        },
        (error) => {
          console.log("FAILED...", error.text);
          Swal.fire({
            title: "Error!",
            text: "Failed to send message. Please try again or email directly.",
            icon: "error",
            draggable: true,
          });
          setFormStatus('idle');
        }
      );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          } else {
            entry.target.classList.remove('active');
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the section element
    const section = document.querySelector('.contact-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  return (
    <section className="contact-section py-24 border-t border-slate-100 animate-fade-up">
      <div className="grid lg:grid-cols-2 gap-24 items-start">
        {/* left */}
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
                <a href={`mailto:${PROFILE.email}`} className="text-md md:text-xl font-medium text-academic-primary hover:text-academic-highlight transition-colors">
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
                <p className="text-md md:text-xl font-medium text-academic-primary">{PROFILE.office}</p>
                <p className="text-academic-muted mt-1">{PROFILE.address}</p>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div>
              <label htmlFor="user_name" className="block text-xs font-bold text-academic-muted uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                id="user_name"
                name="user_name"
                required
                disabled={formStatus === 'sending'}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-academic-highlight/50 focus:border-academic-highlight text-academic-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="user_email" className="block text-xs font-bold text-academic-muted uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                id="user_email"
                name="user_email"
                required
                disabled={formStatus === 'sending'}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-academic-highlight/50 focus:border-academic-highlight text-academic-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold text-academic-muted uppercase mb-2">
                Message
              </label>
              <textarea
                rows={4}
                id="message"
                name="message"
                required
                disabled={formStatus === 'sending'}
                className="w-full bg-white border border-slate-200 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-academic-highlight/50 focus:border-academic-highlight resize-none text-academic-primary transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={formStatus === 'sending'}
              className="w-full py-4 rounded-xl bg-academic-primary hover:bg-academic-highlight text-white font-bold transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
            >
              {formStatus === 'sending' ? (
                <>
                  <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sending...
                </>
              ) : formStatus === 'sent' ? (
                <>
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Sent!
                </>
              ) : (
                'Send Message'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;