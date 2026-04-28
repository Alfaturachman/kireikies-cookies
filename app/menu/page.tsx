import React from 'react';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import AOSWrapper from '@/components/AOSWrapper';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { MENU_DATA } from '@/lib/menuData';

export default function MenuPage() {
    return (
        <AOSWrapper>
            <SmoothScroll>
                <main className="min-h-screen bg-[#FCFAFA]">
                    <Navbar />

                    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-terracotta mb-12 hover:gap-3 transition-all"
                        >
                            <ArrowLeft size={16} /> Back to Home
                        </Link>

                        <div className="mb-20" data-aos="fade-up">
                            <h1 className="text-6xl md:text-8xl font-serif mb-6 leading-none">
                                Full{' '}
                                <span className="text-terracotta italic">
                                    Menu.
                                </span>
                            </h1>
                            <p className="text-xl text-foreground/60 max-w-2xl leading-relaxed">
                                Our complete collection of handcrafted cookies.
                                Each batch is baked fresh daily using premium
                                organic ingredients.
                            </p>
                        </div>

                        <div className="space-y-24">
                            {MENU_DATA.map((section) => (
                                <div key={section.id} data-aos="fade-up">
                                    <h2 className="text-xs font-bold uppercase tracking-[0.4em] text-terracotta mb-10 pb-4 border-b border-foreground/5">
                                        {section.category}
                                    </h2>
                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                                        {section.items.map((item) => (
                                            <div
                                                key={item.id}
                                                className="group"
                                            >
                                                <div className="aspect-[4/3] bg-[#F5F1EE] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-foreground/20 font-serif italic text-lg border border-foreground/5 shadow-sm">
                                                    {item.name} Image
                                                    <button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-md transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-terracotta hover:text-white">
                                                        <ShoppingBag
                                                            size={18}
                                                        />
                                                    </button>
                                                </div>
                                                <div className="flex justify-between items-start mb-2">
                                                    <h3 className="text-2xl font-serif">
                                                        {item.name}
                                                    </h3>
                                                    <span className="font-bold text-terracotta">
                                                        {item.price}
                                                    </span>
                                                </div>
                                                <p className="text-sm text-foreground/60 leading-relaxed">
                                                    {item.desc}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Simple Footer for Menu Page */}
                    <footer className="py-20 bg-[#2D241E] text-[#FCFAFA]/90 text-center">
                        <div className="max-w-7xl mx-auto px-6">
                            <h2 className="text-3xl font-serif mb-8 text-[#FCFAFA]">
                                Sweet moments are meant to be shared.
                            </h2>
                            <button className="bg-[#FCFAFA] text-[#2D241E] px-10 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-accent transition-colors">
                                Start Your Order
                            </button>
                            <div className="mt-16 pt-8 border-t border-[#FCFAFA]/10 text-xs font-medium text-[#FCFAFA]/40 uppercase tracking-widest">
                                © 2026 Kireikies Cookies. All Rights Reserved.
                            </div>
                        </div>
                    </footer>
                </main>
            </SmoothScroll>
        </AOSWrapper>
    );
}
