'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import { MENU_DATA } from '@/lib/menuData';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const FeaturedProducts = () => {
    const sliderItems =
        MENU_DATA.find((cat) => cat.category === 'Signature Classics')?.items ||
        [];

    if (sliderItems.length === 0) return null;

    return (
        <section className="py-24 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <div className="mb-12 text-center">
                    <span className="text-terracotta font-bold uppercase tracking-[0.3em] text-xs block mb-4">
                        Curated Selection
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif">
                        Signature Classics
                    </h2>
                </div>

                <div className="w-full max-w-[1400px] mx-auto">
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
                        className="featured-swiper pb-16"
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
            </div>

            <style jsx global>{`
                .featured-swiper .swiper-pagination-bullet {
                    background: #2d241e;
                    opacity: 0.1;
                }
                .featured-swiper .swiper-pagination-bullet-active {
                    opacity: 1;
                    width: 30px;
                    border-radius: 10px;
                    transition: all 0.3s;
                }
            `}</style>
        </section>
    );
};

export default FeaturedProducts;
