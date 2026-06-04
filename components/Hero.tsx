'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import OrderRedirectModal from './OrderRedirectModal';

interface DetailItem {
    label: string;
    value: string;
}

interface ParticleItem {
    type: string;
    size: number;
    top: string;
    left: string;
    depth: number;
    rotate: number;
    color?: string;
}

interface CookieShowcaseItem {
    name: string;
    tagline: string;
    headline: string;
    desc: string;
    image: string;
    price: string;
    color: string;
    bgColor: string;
    glowColor: string;
    details: DetailItem[];
    particles: ParticleItem[];
}

const COOKIE_SHOWCASE: CookieShowcaseItem[] = [
    {
        name: 'Chocolate Chunks Cookie',
        tagline: 'The Signature Classic',
        headline: 'MELTING DARK CHOCOLATE',
        desc: 'Experience the radical simplicity of premium 70% dark chocolate chunks, slow-baked into a chewy, buttery masterpiece that melts in your mouth.',
        image: '/images/products/Chocolate Chunks Cookie.webp',
        price: 'Rp18.000',
        color: '#EDE4DC',
        bgColor: 'from-[#1a1411] via-[#130d0b] to-[#0a0605]',
        glowColor: 'rgba(212, 163, 115, 0.25)',
        details: [
            { label: 'Weight', value: '100g' },
            { label: 'Chocolate', value: '70% Dark' },
            { label: 'Texture', value: 'Fudgy & Chewy' },
        ],
        particles: [
            {
                type: 'chocolate',
                size: 36,
                top: '12%',
                left: '15%',
                depth: 0.08,
                rotate: 15,
            },
            {
                type: 'chocolate',
                size: 24,
                top: '75%',
                left: '18%',
                depth: -0.06,
                rotate: -25,
            },
            {
                type: 'sparkle',
                size: 18,
                top: '20%',
                left: '80%',
                depth: 0.12,
                rotate: 0,
                color: '#e8d5c4',
            },
            {
                type: 'leaf',
                size: 24,
                top: '65%',
                left: '82%',
                depth: -0.08,
                rotate: 45,
            },
            {
                type: 'sparkle',
                size: 16,
                top: '82%',
                left: '60%',
                depth: 0.05,
                rotate: 20,
                color: '#b47b5e',
            },
        ],
    },
    {
        name: 'Brownie Cookie',
        tagline: 'Double Cocoa Indulgence',
        headline: 'FUDGY BROWNIE DECADENCE',
        desc: 'The ultimate hybrid between a rich, fudgy brownie and a perfectly chewy cookie. Dusted with sea salt flakes to create an intense, bittersweet cocoa journey.',
        image: '/images/products/Brownie Cookie.webp',
        price: 'Rp18.000',
        color: '#F2EBE5',
        bgColor: 'from-[#140e0c] via-[#0f0907] to-[#060302]',
        glowColor: 'rgba(180, 123, 94, 0.3)',
        details: [
            { label: 'Weight', value: '110g' },
            { label: 'Cocoa', value: 'Premium Dark' },
            { label: 'Texture', value: 'Ultra Fudgy' },
        ],
        particles: [
            {
                type: 'chocolate',
                size: 30,
                top: '18%',
                left: '12%',
                depth: -0.05,
                rotate: -20,
            },
            {
                type: 'sparkle',
                size: 20,
                top: '15%',
                left: '75%',
                depth: 0.1,
                rotate: 10,
                color: '#b47b5e',
            },
            {
                type: 'sparkle',
                size: 24,
                top: '70%',
                left: '10%',
                depth: 0.07,
                rotate: 35,
                color: '#e8d5c4',
            },
            {
                type: 'leaf',
                size: 28,
                top: '78%',
                left: '78%',
                depth: -0.09,
                rotate: -15,
            },
            {
                type: 'chocolate',
                size: 32,
                top: '45%',
                left: '85%',
                depth: 0.12,
                rotate: 55,
            },
        ],
    },
    {
        name: 'Almond Cheese Cookie',
        tagline: 'Savory & Sweet Harmony',
        headline: 'SAVORY ALMOND & CHEESE',
        desc: 'A bold pairing of aged cheddar and parmesan cheese, balanced beautifully with the crunch of golden roasted almonds. Perfect for those who crave a savory note.',
        image: '/images/products/Almond Cheese Cookie.webp',
        price: 'Rp18.000',
        color: '#F5F1EE',
        bgColor: 'from-[#161310] via-[#100c0a] to-[#070504]',
        glowColor: 'rgba(232, 213, 196, 0.22)',
        details: [
            { label: 'Weight', value: '95g' },
            { label: 'Cheese', value: 'Cheddar & Parm' },
            { label: 'Texture', value: 'Crispy & Rich' },
        ],
        particles: [
            {
                type: 'almond',
                size: 32,
                top: '15%',
                left: '22%',
                depth: 0.09,
                rotate: 25,
            },
            {
                type: 'cheese',
                size: 28,
                top: '68%',
                left: '15%',
                depth: -0.07,
                rotate: -15,
            },
            {
                type: 'almond',
                size: 26,
                top: '78%',
                left: '72%',
                depth: 0.06,
                rotate: 45,
            },
            {
                type: 'sparkle',
                size: 16,
                top: '22%',
                left: '82%',
                depth: -0.12,
                rotate: 10,
                color: '#e8d5c4',
            },
            {
                type: 'cheese',
                size: 22,
                top: '38%',
                left: '88%',
                depth: 0.08,
                rotate: -30,
            },
        ],
    },
    {
        name: 'Regal Cheese Cookie',
        tagline: 'Nostalgic Childhood Blend',
        headline: 'NOSTALGIC REGAL CHEESE',
        desc: 'A warm, comforting recipe blending crunchy crushed Regal biscuits with rich, velvety cream cheese. Slow-baked to create a soft, melt-in-the-mouth texture.',
        image: '/images/products/Regal Cheese Cookie.webp',
        price: 'Rp18.000',
        color: '#EAE1D8',
        bgColor: 'from-[#181310] via-[#110d0a] to-[#080504]',
        glowColor: 'rgba(201, 169, 142, 0.25)',
        details: [
            { label: 'Weight', value: '105g' },
            { label: 'Biscuits', value: 'Marie Regal' },
            { label: 'Texture', value: 'Soft & Creamy' },
        ],
        particles: [
            {
                type: 'biscuit',
                size: 34,
                top: '22%',
                left: '18%',
                depth: -0.08,
                rotate: 12,
            },
            {
                type: 'cheese',
                size: 26,
                top: '72%',
                left: '22%',
                depth: 0.06,
                rotate: 28,
            },
            {
                type: 'biscuit',
                size: 28,
                top: '68%',
                left: '82%',
                depth: -0.05,
                rotate: -20,
            },
            {
                type: 'sparkle',
                size: 18,
                top: '18%',
                left: '78%',
                depth: 0.12,
                rotate: 0,
                color: '#e8d5c4',
            },
            {
                type: 'leaf',
                size: 22,
                top: '48%',
                left: '88%',
                depth: 0.07,
                rotate: 18,
            },
        ],
    },
];

const renderParticle = (type: string, size: number, color?: string) => {
    switch (type) {
        case 'chocolate':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 40 40"
                    fill="none"
                    className="drop-shadow-lg opacity-85"
                >
                    <path
                        d="M5 15L15 5H30L35 15L25 35H10L5 15Z"
                        fill="#3D2B1F"
                        stroke="#26180F"
                        strokeWidth="2"
                    />
                    <path
                        d="M15 5L15 20L5 15"
                        stroke="#4E3626"
                        strokeWidth="1.5"
                    />
                    <path
                        d="M30 5L20 25L25 35"
                        stroke="#4E3626"
                        strokeWidth="1.5"
                    />
                </svg>
            );
        case 'almond':
            return (
                <svg
                    width={size}
                    height={size * 0.67}
                    viewBox="0 0 36 24"
                    fill="none"
                    className="drop-shadow-lg opacity-85"
                >
                    <path
                        d="M2 12C2 12 10 2 18 2C26 2 34 12 34 12C34 12 26 22 18 22C10 22 2 12 2 12Z"
                        fill="#C49A70"
                        stroke="#8E653C"
                        strokeWidth="2"
                    />
                    <path
                        d="M6 12C12 8 24 8 30 12"
                        stroke="#FAF0E6"
                        strokeWidth="1.2"
                        strokeDasharray="2 2"
                    />
                </svg>
            );
        case 'cheese':
            return (
                <svg
                    width={size}
                    height={size * 0.89}
                    viewBox="0 0 36 32"
                    fill="none"
                    className="drop-shadow-lg opacity-85"
                >
                    <path
                        d="M2 28L34 24L26 2L2 28Z"
                        fill="#FFD700"
                        stroke="#DAA520"
                        strokeWidth="2"
                    />
                    <circle cx="10" cy="18" r="2.5" fill="#DAA520" />
                    <circle cx="22" cy="14" r="2" fill="#DAA520" />
                    <circle cx="16" cy="22" r="1.5" fill="#DAA520" />
                </svg>
            );
        case 'biscuit':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 36 36"
                    fill="none"
                    className="drop-shadow-lg opacity-85"
                >
                    <circle
                        cx="18"
                        cy="18"
                        r="16"
                        fill="#D2B48C"
                        stroke="#A0522D"
                        strokeWidth="2"
                    />
                    <circle
                        cx="18"
                        cy="18"
                        r="10"
                        stroke="#A0522D"
                        strokeWidth="1.5"
                        strokeDasharray="3 3"
                    />
                    <circle cx="18" cy="10" r="1" fill="#8B4513" />
                    <circle cx="18" cy="26" r="1" fill="#8B4513" />
                    <circle cx="10" cy="18" r="1" fill="#8B4513" />
                    <circle cx="26" cy="18" r="1" fill="#8B4513" />
                </svg>
            );
        case 'leaf':
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 30 30"
                    fill="none"
                    className="drop-shadow-lg opacity-75"
                >
                    <path
                        d="M2 28C2 28 10 18 15 15C20 12 28 2 28 2C28 2 18 10 15 15C12 20 2 28 2 28Z"
                        fill="#556B2F"
                        stroke="#3F4F24"
                        strokeWidth="1.5"
                    />
                    <path d="M2 28L15 15" stroke="#3F4F24" strokeWidth="1.5" />
                </svg>
            );
        case 'sparkle':
        default:
            return (
                <svg
                    width={size}
                    height={size}
                    viewBox="0 0 24 24"
                    fill="none"
                    className="drop-shadow-sm opacity-60"
                >
                    <path
                        d="M12 0L15 9L24 12L15 15L12 24L9 15L0 12L9 9L12 0Z"
                        fill={color || '#e8d5c4'}
                    />
                </svg>
            );
    }
};

const Hero = () => {
    const [activeIdx, setActiveIdx] = useState(0);
    const [progress, setProgress] = useState(0);
    const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

    const activeCookie = COOKIE_SHOWCASE[activeIdx];
    const GOFOOD_URL =
        'https://gofood.co.id/sukabumi/restaurant/kireikies-39034643-c018-4fc6-8722-dcb8b9bbc975';

    // Start progress timer for autoplay
    useEffect(() => {
        setProgress(0);
        const startTime = Date.now();
        const duration = 8000; // 8 seconds per slide

        autoplayTimerRef.current = setInterval(() => {
            const elapsed = Date.now() - startTime;
            const currentProgress = Math.min((elapsed / duration) * 100, 100);
            setProgress(currentProgress);

            if (elapsed >= duration) {
                setActiveIdx((prev) => (prev + 1) % COOKIE_SHOWCASE.length);
            }
        }, 30);

        return () => {
            if (autoplayTimerRef.current) {
                clearInterval(autoplayTimerRef.current);
            }
        };
    }, [activeIdx]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!containerRef.current) return;
        const rect = containerRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        containerRef.current.style.setProperty('--mouse-x', x.toFixed(4));
        containerRef.current.style.setProperty('--mouse-y', y.toFixed(4));
    };

    const handleMouseLeave = () => {
        if (!containerRef.current) return;
        containerRef.current.style.setProperty('--mouse-x', '0');
        containerRef.current.style.setProperty('--mouse-y', '0');
    };

    const handleTabClick = (idx: number) => {
        setActiveIdx(idx);
    };

    const handleOrderClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsRedirectModalOpen(true);
    };

    const confirmOrder = () => {
        window.open(GOFOOD_URL, '_blank');
        setIsRedirectModalOpen(false);
    };

    return (
        <section
            id="home"
            ref={containerRef}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            className="relative min-h-screen w-full flex items-start lg:items-center justify-center overflow-x-hidden overflow-y-visible bg-black text-white z-10"
            style={{
                perspective: '1200px',
            }}
        >
            {/* Dynamic CSS styles injected for custom animations */}
            <style
                dangerouslySetInnerHTML={{
                    __html: `
                @keyframes float-cookie {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-15px) rotate(3deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { transform: scale(1); opacity: 0.35; }
                    50% { transform: scale(1.05); opacity: 0.55; }
                }
                .float-cookie-element {
                    animation: float-cookie 6s ease-in-out infinite;
                }
                .pulse-glow-element {
                    animation: pulse-glow 8s ease-in-out infinite;
                }
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
            `,
                }}
            />

            {/* Dynamic Glowing Mesh Background Layers */}
            {COOKIE_SHOWCASE.map((item, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 z-0 bg-gradient-to-br ${item.bgColor}`}
                    style={{
                        opacity: activeIdx === index ? 1 : 0,
                    }}
                >
                    {/* Glowing Mesh Circle */}
                    <div
                        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[800px] max-h-[800px] rounded-full blur-[120px] pointer-events-none opacity-40 transition-all duration-1000 pulse-glow-element"
                        style={{
                            background: `radial-gradient(circle, ${item.glowColor} 0%, transparent 70%)`,
                        }}
                    />
                </div>
            ))}

            {/* Premium Textures & Overlays */}
            {/* Pollen texture */}
            <div className="absolute inset-0 z-1 pointer-events-none opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/pollen.png')]" />

            {/* Masked Grid Lines overlay */}
            <div className="absolute inset-0 z-1 bg-[linear-gradient(rgba(255,255,255,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.015)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

            {/* Ambient vignette */}
            <div className="absolute inset-0 z-2 bg-gradient-to-t from-black/50 via-transparent to-black/30 pointer-events-none" />

            {/* Main Interactive Grid Container */}
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 pt-28 pb-16 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 min-h-screen">
                {/* Mobile Header (displayed first only on mobile devices) */}
                <div className="w-full block lg:hidden order-1 text-center mb-2">
                    <span className="inline-block text-white/50 uppercase tracking-[0.4em] text-[10px] font-bold mb-3">
                        {activeCookie.tagline}
                    </span>
                    <h1 className="text-4xl font-serif leading-tight text-white tracking-tight drop-shadow-2xl">
                        The Art of <br />
                        <span
                            className="italic font-light block mt-1"
                            style={{ color: activeCookie.color }}
                        >
                            {activeCookie.name.replace(' Cookie', '')}
                        </span>
                    </h1>
                </div>

                {/* Left Column: Text Content & Dynamic Details */}
                <div className="w-full lg:w-1/2 order-3 lg:order-1 flex flex-col justify-center h-full select-none">
                    {/* Desktop Header (hidden on mobile, shown in standard left layout) */}
                    <div className="hidden lg:block overflow-hidden mb-4">
                        <span className="inline-block text-white/50 uppercase tracking-[0.4em] text-xs font-bold">
                            {activeCookie.tagline}
                        </span>
                    </div>

                    <div className="hidden lg:block min-h-[140px] mb-6">
                        <AnimatePresence mode="wait">
                            <motion.h1
                                key={activeIdx}
                                initial={{ y: 30, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                exit={{ y: -30, opacity: 0 }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1],
                                }}
                                className="text-5xl md:text-[3.8vw] font-serif leading-[1.1] text-white tracking-tight drop-shadow-2xl"
                            >
                                The Art of <br />
                                <span
                                    className="italic font-light block mt-2"
                                    style={{ color: activeCookie.color }}
                                >
                                    {activeCookie.name.replace(' Cookie', '')}
                                </span>
                            </motion.h1>
                        </AnimatePresence>
                    </div>

                    {/* Dynamic description & pricing */}
                    <div className="min-h-[110px] mb-8">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, y: 15 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -15 }}
                                transition={{ duration: 0.5, delay: 0.05 }}
                            >
                                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed max-w-lg mb-4 text-center lg:text-left">
                                    {activeCookie.desc}
                                </p>
                                <div className="flex items-center justify-center lg:justify-start gap-3">
                                    <span className="text-[10px] uppercase tracking-widest text-white/40 font-mono">
                                        Price
                                    </span>
                                    <span className="text-xl font-serif font-semibold text-terracotta">
                                        {activeCookie.price}
                                    </span>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Dynamic details grid */}
                    <div className="border-y border-white/10 py-5 mb-8 max-w-md w-full">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIdx}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                className="grid grid-cols-3 gap-4 text-center lg:text-left"
                            >
                                {activeCookie.details.map((detail, idx) => (
                                    <div
                                        key={idx}
                                        className="border-r last:border-r-0 border-white/5 pr-2"
                                    >
                                        <span className="block text-[9px] text-white/40 uppercase tracking-widest mb-1">
                                            {detail.label}
                                        </span>
                                        <span className="text-xs md:text-sm font-medium text-white/90 font-sans truncate block">
                                            {detail.value}
                                        </span>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 mb-10">
                        <button
                            onClick={handleOrderClick}
                            className="group relative px-10 py-4 bg-white text-[#2D241E] rounded-full font-bold uppercase tracking-widest text-[10px] overflow-hidden transition-all duration-500 hover:text-white shadow-xl shadow-white/5 cursor-pointer"
                        >
                            <span className="relative z-10">Order Now</span>
                            <div className="absolute inset-0 bg-terracotta translate-y-full transition-transform duration-500 group-hover:translate-y-0" />
                        </button>

                        <Link
                            href="/menu"
                            className="group px-10 py-4 border border-white/20 hover:border-white text-white rounded-full font-bold uppercase tracking-widest text-[10px] transition-all duration-300 hover:bg-white/5"
                        >
                            Explore Menu
                        </Link>
                    </div>

                    {/* Horizontal Interactive Selector Tabs */}
                    <div className="flex gap-2 md:gap-3 border-t border-white/10 pt-6 w-full max-w-xl overflow-x-auto no-scrollbar flex-nowrap">
                        {COOKIE_SHOWCASE.map((item, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleTabClick(idx)}
                                className="flex-1 min-w-[110px] md:min-w-0 shrink-0 text-left group relative py-3 px-3 rounded-xl hover:bg-white/5 transition-all duration-300 cursor-pointer"
                            >
                                {/* Progress bar active line */}
                                <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10 rounded-full overflow-hidden">
                                    {activeIdx === idx && (
                                        <motion.div
                                            className="h-full bg-terracotta"
                                            style={{ width: `${progress}%` }}
                                            transition={{ ease: 'linear' }}
                                        />
                                    )}
                                </div>

                                <span className="block text-[8px] text-white/30 font-mono tracking-widest mb-1 group-hover:text-white/50 transition-colors">
                                    0{idx + 1}
                                </span>
                                <span
                                    className={`block text-[10px] md:text-xs font-medium tracking-wider transition-colors duration-300 truncate ${activeIdx === idx ? 'text-white' : 'text-white/50 group-hover:text-white/80'}`}
                                >
                                    {item.name.replace(' Cookie', '')}
                                </span>
                            </button>
                        ))}
                    </div>
                </div>

                {/* Right Column: 3D Floating Cookie Showcase */}
                <div className="w-full lg:w-1/2 order-2 lg:order-2 flex items-center justify-center relative min-h-[320px] md:min-h-[420px] lg:min-h-[500px]">
                    {/* Background Decorative Rings */}
                    <div className="absolute w-[280px] h-[280px] md:w-[400px] md:h-[400px] rounded-full border border-white/5 bg-white/[0.005] pointer-events-none animate-[spin_180s_linear_infinite]" />
                    <div className="absolute w-[220px] h-[220px] md:w-[320px] md:h-[320px] rounded-full border border-dashed border-white/10 pointer-events-none animate-[spin_100s_linear_infinite_reverse]" />

                    {/* Outer wrapper: Parallax response & mouse coordinates */}
                    <div
                        className="relative w-[240px] h-[240px] md:w-[340px] md:h-[340px] flex items-center justify-center transform-gpu"
                        style={{
                            transform:
                                'rotateX(calc(var(--mouse-y) * -15deg)) rotateY(calc(var(--mouse-x) * 15deg))',
                            transformStyle: 'preserve-3d',
                            transition:
                                'transform 0.5s cubic-bezier(0.25, 1, 0.5, 1)',
                        }}
                    >
                        {/* Floating elements (underneath the cookie) */}
                        <AnimatePresence>
                            {activeCookie.particles
                                .filter((p) => p.depth < 0)
                                .map((particle, idx) => (
                                    <motion.div
                                        key={`${activeIdx}-particle-under-${idx}`}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 0.75 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.05,
                                        }}
                                        className="absolute pointer-events-none transform-gpu"
                                        style={{
                                            top: particle.top,
                                            left: particle.left,
                                            transform: `translate3d(calc(var(--mouse-x) * ${particle.depth * 150}px), calc(var(--mouse-y) * ${particle.depth * 150}px), -50px) rotate(${particle.rotate}deg)`,
                                            transition:
                                                'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                                            zIndex: 5,
                                        }}
                                    >
                                        {renderParticle(
                                            particle.type,
                                            particle.size,
                                            particle.color,
                                        )}
                                    </motion.div>
                                ))}
                        </AnimatePresence>

                        {/* Floating Cookie Container */}
                        <div className="relative w-full h-full float-cookie-element z-10 flex items-center justify-center">
                            {/* Ambient Shadow beneath cookie */}
                            <div
                                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-6 bg-black/50 blur-xl rounded-full scale-y-50 pointer-events-none transition-all duration-500"
                                style={{
                                    transform: `translate3d(calc(var(--mouse-x) * -20px), calc(var(--mouse-y) * -20px), -100px) scale(${1 - Math.abs(progress - 50) / 400})`,
                                    opacity: 0.6,
                                }}
                            />

                            {/* Main Cookie Image Wrapper */}
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeIdx}
                                    initial={{
                                        scale: 0.7,
                                        rotate: -35,
                                        opacity: 0,
                                    }}
                                    animate={{
                                        scale: 1,
                                        rotate: 0,
                                        opacity: 1,
                                    }}
                                    exit={{
                                        scale: 0.7,
                                        rotate: 35,
                                        opacity: 0,
                                    }}
                                    transition={{
                                        duration: 0.8,
                                        ease: [0.16, 1, 0.3, 1],
                                    }}
                                    className="w-4/5 h-4/5 md:w-full md:h-full aspect-square rounded-full overflow-hidden pointer-events-none drop-shadow-[0_20px_45px_rgba(0,0,0,0.65)] transform-gpu border-4 border-white/10 flex items-center justify-center"
                                    style={{
                                        transformStyle: 'preserve-3d',
                                        backgroundColor: activeCookie.color,
                                    }}
                                >
                                    <img
                                        src={activeCookie.image}
                                        alt={activeCookie.name}
                                        className="w-full h-full object-cover filter brightness-[1.03] select-none"
                                    />
                                </motion.div>
                            </AnimatePresence>
                        </div>

                        {/* Floating elements (above/on top of the cookie) */}
                        <AnimatePresence>
                            {activeCookie.particles
                                .filter((p) => p.depth >= 0)
                                .map((particle, idx) => (
                                    <motion.div
                                        key={`${activeIdx}-particle-above-${idx}`}
                                        initial={{ scale: 0, opacity: 0 }}
                                        animate={{ scale: 1, opacity: 0.85 }}
                                        exit={{ scale: 0, opacity: 0 }}
                                        transition={{
                                            duration: 0.6,
                                            delay: idx * 0.05,
                                        }}
                                        className="absolute pointer-events-none transform-gpu"
                                        style={{
                                            top: particle.top,
                                            left: particle.left,
                                            transform: `translate3d(calc(var(--mouse-x) * ${particle.depth * 250}px), calc(var(--mouse-y) * ${particle.depth * 250}px), 80px) rotate(${particle.rotate}deg)`,
                                            transition:
                                                'transform 0.4s cubic-bezier(0.25, 1, 0.5, 1)',
                                            zIndex: 20,
                                        }}
                                    >
                                        {renderParticle(
                                            particle.type,
                                            particle.size,
                                            particle.color,
                                        )}
                                    </motion.div>
                                ))}
                        </AnimatePresence>
                    </div>

                    {/* Slide controls / arrows on desktop */}
                    <div className="absolute bottom-4 right-1/2 translate-x-1/2 lg:right-6 lg:translate-x-0 flex gap-4 z-20">
                        <button
                            onClick={() =>
                                setActiveIdx(
                                    (prev) =>
                                        (prev - 1 + COOKIE_SHOWCASE.length) %
                                        COOKIE_SHOWCASE.length,
                                )
                            }
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:bg-white hover:border-white transition-all flex items-center justify-center cursor-pointer group"
                            aria-label="Previous Flavor"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transform group-hover:-translate-x-[2px] transition-transform"
                            >
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>
                        </button>
                        <button
                            onClick={() =>
                                setActiveIdx(
                                    (prev) =>
                                        (prev + 1) % COOKIE_SHOWCASE.length,
                                )
                            }
                            className="w-10 h-10 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-white/70 hover:text-white hover:bg-white hover:border-white transition-all flex items-center justify-center cursor-pointer group"
                            aria-label="Next Flavor"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="18"
                                height="18"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="transform group-hover:translate-x-[2px] transition-transform"
                            >
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Order Redirect Confirmation Modal */}
            <OrderRedirectModal
                isOpen={isRedirectModalOpen}
                onClose={() => setIsRedirectModalOpen(false)}
                onConfirm={confirmOrder}
            />
        </section>
    );
};

export default Hero;
