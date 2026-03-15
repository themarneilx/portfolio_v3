'use client';
import React, { useRef, useEffect } from 'react';

class Particle {
    x: number;
    y: number;
    dest: { x: number; y: number };
    r: number;
    vx: number;
    vy: number;
    accX: number;
    accY: number;
    friction: number;
    color: string;
    ww: number;
    wh: number;

    constructor(x: number, y: number, ww: number, wh: number) {
        this.ww = ww;
        this.wh = wh;
        this.x = Math.random() * ww;
        this.y = Math.random() * wh;
        this.dest = { x, y };
        this.r = Math.random() * 1.2 + 0.3;
        this.vx = (Math.random() - 0.5) * 5;
        this.vy = (Math.random() - 0.5) * 5;
        this.accX = 0;
        this.accY = 0;
        this.friction = Math.random() * 0.05 + 0.94;
        const alpha = Math.random() * 0.2 + 0.06;
        const colors = [
            `rgba(212, 175, 55, ${alpha})`,
            `rgba(240, 208, 96, ${alpha * 0.7})`,
            `rgba(250, 250, 250, ${alpha * 0.4})`,
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
    }

    render(ctx: CanvasRenderingContext2D, mouse: { x: number, y: number }) {
        this.accX = (this.dest.x - this.x) / 1000;
        this.accY = (this.dest.y - this.y) / 1000;
        this.vx += this.accX;
        this.vy += this.accY;
        this.vx *= this.friction;
        this.vy *= this.friction;
        this.x += this.vx;
        this.y += this.vy;

        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false);
        ctx.fill();

        const a = this.x - mouse.x;
        const b = this.y - mouse.y;
        const distance = Math.sqrt(a * a + b * b);
        if (distance < 80) {
            this.accX = (this.x - mouse.x) / 100;
            this.accY = (this.y - mouse.y) / 100;
            this.vx += this.accX;
            this.vy += this.accY;
        }
    }
}

const ParticleBackground = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let ww = canvas.width = window.innerWidth;
        let wh = canvas.height = window.innerHeight;
        let animId: number;
        const particles: Particle[] = [];
        const amount = 60;
        const mouse = { x: -9999, y: -9999 };

        const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
        const onTouchMove = (e: TouchEvent) => { if (e.touches.length > 0) { mouse.x = e.touches[0].clientX; mouse.y = e.touches[0].clientY; } };
        const onTouchEnd = () => { mouse.x = -9999; mouse.y = -9999; };

        const init = () => {
            ww = canvas.width = window.innerWidth;
            wh = canvas.height = window.innerHeight;
            particles.length = 0;
            for (let i = 0; i < amount; i++) {
                particles.push(new Particle(Math.random() * ww, Math.random() * wh, ww, wh));
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, ww, wh);
            particles.forEach(p => p.render(ctx, mouse));
            animId = requestAnimationFrame(animate);
        };

        window.addEventListener('resize', init);
        window.addEventListener('mousemove', onMouseMove);
        window.addEventListener('touchmove', onTouchMove);
        window.addEventListener('touchend', onTouchEnd);

        init();
        animate();

        return () => {
            cancelAnimationFrame(animId);
            window.removeEventListener('resize', init);
            window.removeEventListener('mousemove', onMouseMove);
            window.removeEventListener('touchmove', onTouchMove);
            window.removeEventListener('touchend', onTouchEnd);
        };
    }, []);

    return <canvas ref={canvasRef} className="fixed top-0 left-0 -z-10 opacity-50" />;
};

export default ParticleBackground;
