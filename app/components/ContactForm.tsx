'use client';

import React, { useState } from 'react';
import { sendEmail } from '../actions';

export default function ContactForm() {
    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState<'success' | 'error'>('success');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsPending(true);
        
        const formData = new FormData(e.currentTarget);
        const result = await sendEmail(formData);

        if (result.success) {
            setToastMessage('Message sent successfully.');
            setToastType('success');
            (e.target as HTMLFormElement).reset();
        } else {
            setToastMessage(result.error || 'Failed to send message.');
            setToastType('error');
        }

        setShowToast(true);
        setIsPending(false);
        setTimeout(() => {
            setShowToast(false);
        }, 3000);
    };

    return (
        <section id="contact" className="py-24 px-6 max-w-6xl mx-auto border-t border-zinc-900 pb-32">
      <div className="flex items-center gap-6 mb-16 gs-reveal opacity-0">
        <h2 className="text-white font-display font-bold text-4xl uppercase tracking-tighter">Contact</h2>
        <div className="h-px bg-zinc-800 flex-1"></div>
      </div>

      <div className="grid lg:grid-cols-2 gap-16">
        
        {/* Left: Info */}
        <div className="gs-reveal opacity-0 w-full xl:w-[90%] flex flex-col justify-center">
          <h3 className="text-white font-display font-bold text-5xl sm:text-7xl uppercase tracking-tighter leading-[0.9] mb-8">
            Let&apos;s <br/><span className="text-zinc-500">Talk</span>
          </h3>
          <p className="text-zinc-400 text-sm md:text-base leading-relaxed mb-10 font-mono">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>

          <div className="space-y-4 mb-12 font-mono">
            <div className="flex items-center gap-4 bento-card p-4 group">
              <div className="w-10 h-10 rounded border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                <i className="fa-solid fa-envelope"></i>
              </div>
              <span className="text-zinc-300 text-sm group-hover:text-white transition-colors font-bold tracking-tight">jmcabahug4@gmail.com</span>
            </div>
            
            <div className="flex items-center gap-4 bento-card p-4 group">
              <div className="w-10 h-10 rounded border border-zinc-800 bg-zinc-950 flex items-center justify-center text-zinc-500 group-hover:text-white transition-colors">
                <i className="fa-solid fa-location-dot"></i>
              </div>
              <span className="text-zinc-300 text-sm group-hover:text-white transition-colors font-bold tracking-tight">Mandaue City, Cebu, Philippines</span>
            </div>
          </div>

          <div className="flex gap-4">
            <a href="https://github.com/themarneilx" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="GitHub">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href="https://www.linkedin.com/in/jonmarneil/" target="_blank" rel="noopener noreferrer" className="social-btn" aria-label="LinkedIn">
              <i className="fa-brands fa-linkedin-in text-xl"></i>
            </a>
            <a href="#" className="social-btn" aria-label="Twitter">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
            <a href="#" className="social-btn" aria-label="Instagram">
              <i className="fa-brands fa-instagram text-xl"></i>
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <div className="gs-reveal opacity-0 w-full xl:w-[90%] ml-auto bento-card p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(-45deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
          
          <form id="contact-form" onSubmit={handleSubmit} className="relative z-10 flex flex-col justify-between h-full space-y-6">
            <div className="space-y-4">
              <div className="space-y-1">
                <label htmlFor="name" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Name</label>
                <input 
                  type="text" 
                  id="name"
                  name="name" 
                  placeholder="John Doe" 
                  required
                  disabled={isPending}
                  className="minimal-input"
                />
              </div>
              <div className="space-y-1">
                <label htmlFor="email" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Email</label>
                <input 
                  type="email" 
                  id="email"
                  name="email" 
                  placeholder="john@example.com" 
                  required
                  disabled={isPending}
                  className="minimal-input"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="subject" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject" 
                  placeholder="Project Inquiry" 
                  required
                  disabled={isPending}
                  className="minimal-input"
                />
              </div>

              <div className="space-y-1">
                <label htmlFor="message" className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold ml-1">Message</label>
                <textarea 
                  id="message"
                  name="message" 
                  rows={4} 
                  placeholder="Tell me about your project..." 
                  required
                  disabled={isPending}
                  className="minimal-input resize-none"
                ></textarea>
              </div>
            </div>

            <button 
              type="submit" 
              disabled={isPending} 
              className="w-full py-3.5 bg-white text-zinc-950 font-bold tracking-wide rounded-lg transition-all hover:bg-zinc-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transform hover:-translate-y-1"
            >
              {isPending ? (
                <>
                  <span className="w-4 h-4 border-2 border-zinc-400 border-t-zinc-950 rounded-full animate-spin mr-2"></span>
                  Sending...
                </>
              ) : 'Send Message'}
            </button>
          </form>
        </div>
      </div>

      {showToast && (
          <div className="fixed bottom-8 right-8 z-[100] animate-fade-in">
            <div className={`bento-card px-6 py-4 flex items-center gap-4 ${
              toastType === 'success' 
                ? 'border-white text-white' 
                : 'border-red-500 text-red-500'
            }`}>
              <i className={`fa-solid text-xl ${
                toastType === 'success' 
                  ? 'fa-circle-check' 
                  : 'fa-circle-exclamation'
              }`}></i>
              <div>
                <p className="font-bold text-sm tracking-tight">{toastType === 'success' ? 'Success' : 'Error'}</p>
                <p className="text-sm opacity-90">{toastMessage}</p>
              </div>
            </div>
          </div>
        )}
            
            <div className="mt-20 border-t border-zinc-900 pt-8 text-center text-[10px] text-zinc-600">
                © 2025 Jon Marneil Cabahug
            </div>
        </section>
    );
}