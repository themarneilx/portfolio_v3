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
        setTimeout(() => setShowToast(false), 3000);
    };

    return (
        <section id="contact" className="py-28 px-6 lg:px-10 max-w-7xl mx-auto relative pb-16">
            {/* Section Header */}
            <div className="relative mb-20 gs-reveal opacity-0">
                <span className="section-number">03</span>
                <div className="relative z-10">
                    <div className="section-label mb-3">// Get in Touch</div>
                    <h2 className="gs-scramble text-text-primary font-display font-extrabold text-3xl md:text-4xl tracking-tight">Contact</h2>
                </div>
                <div className="accent-line w-32 mt-4" />
            </div>

            <div className="grid lg:grid-cols-2 gap-16">
                {/* Left: Info */}
                <div className="gs-reveal opacity-0 flex flex-col justify-center">
                    <h3 className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl tracking-[-0.04em] leading-[0.88] mb-8">
                        <span className="text-text-primary block">Let&apos;s</span>
                        <span className="text-accent block">Talk<span className="text-accent/40">.</span></span>
                    </h3>
                    <p className="text-body text-[0.9375rem] leading-relaxed mb-10 max-w-md">
                        Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>

                    <div className="space-y-3 mb-10">
                        <a href="mailto:jmcabahug4@gmail.com" className="flex items-center gap-4 glass-card p-4 group hover:border-accent/20 transition-all">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent group-hover:bg-accent group-hover:text-background transition-all duration-300">
                                <i className="fa-solid fa-envelope text-sm"></i>
                            </div>
                            <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors font-medium">joncabs100@gmail.com</span>
                        </a>

                        <div className="flex items-center gap-4 glass-card p-4 group">
                            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center text-accent">
                                <i className="fa-solid fa-location-dot text-sm"></i>
                            </div>
                            <span className="text-text-secondary text-sm group-hover:text-text-primary transition-colors font-medium">Mandaue City, Cebu, Philippines</span>
                        </div>
                    </div>

                    <div className="flex gap-3">
                        {[
                            { href: "https://github.com/themarneilx", icon: "fa-brands fa-github", label: "GitHub" },
                            { href: "https://www.linkedin.com/in/jonmarneil/", icon: "fa-brands fa-linkedin-in", label: "LinkedIn" },
                            { href: "#", icon: "fa-brands fa-twitter", label: "Twitter" },
                            { href: "#", icon: "fa-brands fa-instagram", label: "Instagram" },
                        ].map((social, i) => (
                            <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="social-btn" aria-label={social.label}>
                                <i className={`${social.icon} text-lg`}></i>
                            </a>
                        ))}
                    </div>
                </div>

                {/* Right: Form */}
                <div className="gs-reveal opacity-0 glass-card p-8 lg:p-10 relative overflow-hidden">
                    <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />

                    <form id="contact-form" onSubmit={handleSubmit} className="relative z-10 flex flex-col justify-between h-full space-y-5">
                        <div className="space-y-4">
                            {[
                                { id: 'name', label: 'Name', type: 'text', placeholder: 'John Doe' },
                                { id: 'email', label: 'Email', type: 'email', placeholder: 'john@example.com' },
                                { id: 'subject', label: 'Subject', type: 'text', placeholder: 'Project Inquiry' },
                            ].map((field) => (
                                <div key={field.id} className="space-y-1.5">
                                    <label htmlFor={field.id} className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">{field.label}</label>
                                    <input
                                        type={field.type}
                                        id={field.id}
                                        name={field.id}
                                        placeholder={field.placeholder}
                                        required
                                        disabled={isPending}
                                        className="form-input"
                                    />
                                </div>
                            ))}
                            <div className="space-y-1.5">
                                <label htmlFor="message" className="text-[10px] font-mono uppercase tracking-[0.2em] text-text-muted font-semibold">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    rows={4}
                                    placeholder="Tell me about your project..."
                                    required
                                    disabled={isPending}
                                    className="form-input resize-none"
                                ></textarea>
                            </div>
                        </div>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full py-3.5 bg-accent text-background font-bold tracking-wide rounded-lg transition-all duration-300 hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/15 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center group"
                        >
                            {isPending ? (
                                <>
                                    <span className="w-4 h-4 border-2 border-background/40 border-t-background rounded-full animate-spin mr-2"></span>
                                    Sending...
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" /></svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>

            {/* Toast */}
            {showToast && (
                <div className="fixed bottom-8 right-8 z-[100]">
                    <div className={`glass-card px-6 py-4 flex items-center gap-4 ${
                        toastType === 'success' ? 'border-accent/50 text-accent' : 'border-red-500/50 text-red-400'
                    }`}>
                        <i className={`fa-solid text-xl ${toastType === 'success' ? 'fa-circle-check' : 'fa-circle-exclamation'}`}></i>
                        <div>
                            <p className="font-bold text-sm">{toastType === 'success' ? 'Success' : 'Error'}</p>
                            <p className="text-sm opacity-80">{toastMessage}</p>
                        </div>
                    </div>
                </div>
            )}

            {/* Footer */}
            <div className="mt-24 border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
                <span className="text-[11px] text-text-muted font-mono">&copy; 2025 Jon Marneil Cabahug</span>
                <span className="text-[11px] text-text-muted font-mono">Built with Next.js &middot; Tailwind &middot; GSAP</span>
            </div>
        </section>
    );
}
