'use client';

import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 bg-[#2D241E] text-[#FCFAFA]/90">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2">
                        <a
                            href="#"
                            className="text-2xl font-serif font-bold mb-6 block text-[#FCFAFA]"
                        >
                            Kireikies
                        </a>
                        <p className="text-[#FCFAFA]/60 max-w-sm leading-relaxed">
                            Crafting premium artisan cookies for moments of joy
                            and comfort. Available for nationwide shipping and
                            local pickup.
                        </p>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-[#FCFAFA]">
                            Explore
                        </h5>
                        <ul className="space-y-4 text-[#FCFAFA]/60 text-sm font-medium">
                            <li>
                                <Link
                                    href="/#about"
                                    className="hover:text-accent transition-colors"
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#products"
                                    className="hover:text-accent transition-colors"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#testimonials"
                                    className="hover:text-accent transition-colors"
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:text-accent transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-[#FCFAFA]">
                            Stay Sweet
                        </h5>
                        <p className="text-sm text-[#FCFAFA]/60 mb-4">
                            Subscribe to our newsletter for secret recipes and
                            new arrivals.
                        </p>
                        <div className="flex gap-2">
                            <input
                                type="email"
                                placeholder="Email address"
                                className="bg-[#FCFAFA]/10 border border-[#FCFAFA]/20 px-4 py-2 rounded-full text-sm flex-1 outline-none text-[#FCFAFA]"
                            />
                            <button className="bg-[#FCFAFA] text-[#2D241E] w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-accent transition-colors">
                                →
                            </button>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-[#FCFAFA]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#FCFAFA]/40 uppercase tracking-widest">
                    <p>© 2026 Kireikies Cookies. All Rights Reserved.</p>
                    <div className="flex gap-8">
                        <a
                            href="#"
                            className="hover:text-accent transition-colors"
                        >
                            Instagram
                        </a>
                        <a
                            href="https://www.instagram.com/kireikies/"
                            className="hover:text-accent transition-colors"
                        >
                            TikTok
                        </a>
                        <a
                            href="#"
                            className="hover:text-accent transition-colors"
                        >
                            Facebook
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
