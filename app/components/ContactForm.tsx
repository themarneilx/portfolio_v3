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
        <section id="contact" className="py-20 px-6 max-w-6xl mx-auto border-t border-border relative">
            
            <div className="grid lg:grid-cols-2 gap-16">
                {/* Info Left */}
                <div className="gs-reveal opacity-0">
                    <h2 className="text-white font-display font-bold text-3xl mb-8">Contact Information</h2>
                    
                    <div className="space-y-6 mb-12">
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-zinc-400">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="text-zinc-400 text-sm">
                                <a href="mailto:joncabs200@gmail.com" className="hover:underline">joncabs200@gmail.com</a>
                            </div>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-zinc-400">
                                <i className="fa-solid fa-envelope"></i>
                            </div>
                            <div className="text-zinc-400 text-sm">
                                <a href="mailto:marneilx@proton.me" className="hover:underline">marneilx@proton.me</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-zinc-400">
                                <i className="fa-solid fa-location-dot"></i>
                            </div>
                            <div className="text-zinc-400 text-sm">Mandaue City, Cebu, Philippines</div>
                        </div>

                        <div className="flex items-center gap-4">
                            <div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center text-zinc-400">
                                <i className="fa-brands fa-github"></i>
                            </div>
                            <div className="text-zinc-400 text-sm">
                                <a href="https://github.com/themarneilx" target="_blank" rel="noopener noreferrer" className="hover:underline">github.com/themarneilx</a>
                            </div>
                        </div>
                    </div>

                    <h3 className="text-white font-bold text-xl mb-6">Connect with me</h3>
                    <div className="flex gap-4">
                        <a href="https://www.facebook.com/jon.cabs.3/" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-brands fa-facebook-f text-lg"></i></a>
                        <a href="https://www.instagram.com/joncabahug/" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-brands fa-instagram text-lg"></i></a>
                        <a href="https://www.facebook.com/TokatechPC" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-solid fa-screwdriver-wrench text-lg"></i></a>
                        <a href="https://github.com/themarneilx" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-brands fa-github text-lg"></i></a>
                        <a href="/cv.pdf" target="_blank" rel="noopener noreferrer" className="social-btn"><i className="fa-solid fa-file-pdf text-lg"></i></a>
                    </div>
                </div>

                {/* Form Right */}
                <div className="bg-surface border border-border rounded-xl p-8 gs-reveal opacity-0">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        
                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Your Name</label>
                            <input type="text" name="name" placeholder="John Doe" className="dark-input" required />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Your Email</label>
                            <input type="email" name="email" placeholder="john@example.com" className="dark-input" required />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Subject</label>
                            <input type="text" name="subject" placeholder="Project Inquiry" className="dark-input" required />
                        </div>

                        <div>
                            <label className="block text-[10px] uppercase tracking-wider text-zinc-500 mb-1">Your Message</label>
                            <textarea name="message" rows={4} placeholder="Tell me about your project..." className="dark-input resize-none" required></textarea>
                        </div>

                        <button type="submit" disabled={isPending} className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors text-sm disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center">
                            {isPending ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2"></span>
                                    Sending...
                                </>
                            ) : 'Send Message'}
                        </button>
                    </form>
                </div>
            </div>

             {showToast && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 z-[100]">
                    <div className={`px-6 py-3 rounded-full shadow-lg flex items-center gap-3 ${toastType === 'success' ? 'bg-zinc-800 text-white border border-green-500/50' : 'bg-red-900/80 text-white border border-red-500/50'}`}>
                         {toastType === 'success' && <i className="fa-solid fa-check-circle text-green-500"></i>}
                         {toastType === 'error' && <i className="fa-solid fa-circle-exclamation text-red-500"></i>}
                        <span className="text-sm font-medium">{toastMessage}</span>
                    </div>
                </div>
            )}
            
            <div className="mt-20 border-t border-border pt-8 text-center text-[10px] text-zinc-600">
                © 2025 Jon Marneil Cabahug
            </div>
        </section>
    );
}