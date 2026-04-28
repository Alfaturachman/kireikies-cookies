import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="contact" className="py-20 bg-[#2D241E] text-[#FCFAFA]/90">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 text-center md:text-left">
                    <div className="md:col-span-2">
                        <a
                            href="/"
                            className="text-2xl font-serif font-bold mb-6 block text-[#FCFAFA]"
                        >
                            Kireikies
                        </a>
                        <p className="text-[#FCFAFA]/60 max-w-sm mx-auto md:mx-0 leading-relaxed">
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
                            Social Media
                        </h5>
                        <div className="flex gap-4 justify-center md:justify-start">
                            <a
                                href="https://instagram.com/kireikies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-12 h-12 rounded-full bg-[#FCFAFA]/10 flex items-center justify-center hover:bg-accent hover:text-[#2D241E] transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    height="20"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                >
                                    <rect
                                        x="2"
                                        y="2"
                                        width="20"
                                        height="20"
                                        rx="5"
                                        ry="5"
                                    ></rect>
                                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                                    <line
                                        x1="17.5"
                                        y1="6.5"
                                        x2="17.51"
                                        y2="6.5"
                                    ></line>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pt-8 border-t border-[#FCFAFA]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#FCFAFA]/40 uppercase tracking-widest text-center md:text-left">
                    <div>
                        <p>© 2026 Kireikies Cookies. All Rights Reserved.</p>
                    </div>
                    <div className="flex gap-8">
                        <p className="mt-2 normal-case tracking-normal opacity-70">
                            Designed and developed by{' '}
                            <a
                                href="https://github.com/Alfaturachman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FCFAFA] hover:text-accent transition-colors font-medium"
                            >
                                Alfaturachman Maulana Pahlevi
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
