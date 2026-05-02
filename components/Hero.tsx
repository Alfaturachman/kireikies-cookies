'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const bgRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Parallax effect on background
            gsap.to(bgRef.current, {
                yPercent: 20,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top top',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Text entrance animation
            gsap.from('.hero-reveal', {
                y: 60,
                opacity: 0,
                duration: 1.5,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.5,
            });

            // Background zoom effect
            gsap.from(bgRef.current, {
                scale: 1.2,
                duration: 2.5,
                ease: 'power2.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#1a1512]"
        >
            {/* Cinematic Background Image */}
            <div
                ref={bgRef}
                className="absolute inset-0 z-0"
                style={{
                    backgroundImage:
                        'url("https://images.unsplash.com/photo-1609501886186-d4de01248beb?q=80&w=736&auto=format&fit=crop")',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                }}
            >
                {/* Subtle Overlays for Cinematic Feel */}
                <div className="absolute inset-0 bg-black/40 z-10" />
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 z-10" />
            </div>

            {/* Content */}
            <div
                ref={contentRef}
                className="relative z-20 w-full max-w-7xl mx-auto px-6 text-center"
            >
                <div className="mb-8 overflow-hidden">
                    <span className="hero-reveal inline-block text-white/80 uppercase tracking-[0.6em] text-[10px] md:text-xs font-bold">
                        Est. 2024 — Artisan Bakery
                    </span>
                </div>

                <h1 className="hero-reveal text-[10vw] md:text-[8vw] font-serif leading-[1.1] text-white mb-10 tracking-tight drop-shadow-2xl">
                    PURELY <br />
                    <span className="italic font-light text-accent">
                        CRAFTED.
                    </span>
                </h1>

                <div className="hero-reveal max-w-2xl mx-auto mb-12">
                    <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed drop-shadow-md">
                        Experience the radical simplicity of premium organic
                        ingredients, slow-baked into moments of pure cinematic
                        indulgence.
                    </p>
                </div>

                <div className="hero-reveal flex flex-col md:flex-row items-center justify-center gap-6">
                    <Link
                        href="/menu"
                        className="group relative px-12 py-5 bg-white text-[#2D241E] rounded-full font-bold uppercase tracking-[0.2em] text-[10px] overflow-hidden transition-all duration-500 hover:text-white"
                    >
                        <span className="relative z-10">Explore Menu</span>
                        <div className="absolute inset-0 bg-[#2D241E] translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                    </Link>

                    <Link
                        href="#about"
                        className="group flex items-center gap-4 text-white/80 uppercase tracking-[0.2em] text-[10px] font-bold hover:text-white transition-colors"
                    >
                        <span>Our Story</span>
                    </Link>
                </div>
            </div>

            {/* Cinematic Flour/Dust Particles Overlay (CSS Only) */}
            <div className="absolute inset-0 z-10 pointer-events-none opacity-20 bg-[url('https://www.transparenttextures.com/patterns/pollen.png')]" />
        </section>
    );
};

export default Hero;
