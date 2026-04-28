'use client';

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MENU_DATA } from '@/lib/menuData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const titleRef = useRef<HTMLHeadingElement>(null);
    const subtitleRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Text Reveal Animation
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: 'power4.out',
            });

            gsap.from(subtitleRef.current, {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.5,
                ease: 'power3.out',
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    const sliderItems =
        MENU_DATA.find((cat) => cat.category === 'Signature Classics')?.items ||
        [];

    return (
        <section
            id="home"
            ref={containerRef}
            className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-20 overflow-hidden"
        >
            {/* Background Decor */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 overflow-hidden">
                <div className="absolute top-[10%] left-[10%] w-[30vw] h-[30vw] bg-accent/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-[10%] right-[10%] w-[25vw] h-[25vw] bg-terracotta/5 rounded-full blur-[100px]" />
            </div>

            <div className="max-w-7xl mx-auto px-6 text-center mb-16">
                <div className="overflow-hidden mb-4">
                    <span className="inline-block text-terracotta font-bold uppercase tracking-[0.3em] text-xs">
                        EST. 2024 — ARTISAN BAKERY
                    </span>
                </div>

                <h1
                    ref={titleRef}
                    className="text-[12vw] md:text-[10vw] font-serif leading-[0.9] tracking-tighter mb-8"
                >
                    PURELY <br />
                    <span className="italic text-terracotta">CRAFTED.</span>
                </h1>

                <div ref={subtitleRef} className="flex flex-col items-center">
                    <p className="text-lg md:text-xl text-foreground/60 max-w-2xl mx-auto leading-relaxed mb-10">
                        Experience the radical simplicity of premium organic
                        ingredients, <br className="hidden md:block" />
                        slow-baked into moments of pure indulgence.
                    </p>
                    <div className="flex gap-4">
                        <Link
                            href="/menu"
                            className="bg-foreground text-background px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:scale-105 transition-transform flex items-center justify-center"
                        >
                            Explore Menu
                        </Link>
                        <button className="border border-foreground/10 px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-foreground hover:text-background transition-all">
                            Our Story
                        </button>
                    </div>
                </div>
            </div>

            {/* Dynamic Slider Section */}
            <div
                className="w-full max-w-[1400px] px-6"
                data-aos="fade-up"
                data-aos-delay="800"
            >
                <Swiper
                    modules={[Autoplay, Pagination]}
                    spaceBetween={30}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="hero-swiper pb-16"
                >
                    {sliderItems.map((item) => (
                        <SwiperSlide key={item.id}>
                            <Link
                                href="/menu"
                                className="block aspect-[16/10] bg-[#F5F1EE] rounded-3xl overflow-hidden relative group border border-foreground/5 shadow-sm"
                            >
                                {item.image ? (
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-serif italic text-xl">
                                        {item.name}
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-500 flex items-center justify-center">
                                    <div className="transform scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500">
                                        <span className="text-white border border-white/40 bg-white/10 backdrop-blur-md px-8 py-3 rounded-full text-xs font-bold tracking-[0.2em] uppercase">
                                            View Detail
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Custom Styles for Swiper dots */}
            <style jsx global>{`
                .hero-swiper .swiper-pagination-bullet {
                    background: #2d241e;
                    opacity: 0.1;
                }
                .hero-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 30px;
                    border-radius: 10px;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
};

export default Hero;
