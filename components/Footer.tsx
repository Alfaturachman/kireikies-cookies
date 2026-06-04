import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            id="contact"
            className="py-20 bg-[#1E1713] border-t border-white/[0.03] text-[#FCFAFA]/90 relative overflow-hidden"
        >
            {/* Subtle background decorative light */}
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] rounded-full bg-terracotta/5 blur-[80px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-12 mb-16">
                    {/* Brand column */}
                    <div className="sm:col-span-2 flex flex-col items-start text-left">
                        <a
                            href="/"
                            className="text-3xl font-serif font-bold tracking-tight mb-4 text-[#FCFAFA] hover:opacity-80 transition-opacity animate-pulse-glow"
                        >
                            Kireikies
                        </a>
                        <p className="text-[#FCFAFA]/60 text-sm font-light leading-relaxed max-w-sm">
                            Bringing premium artisan cookies to your special
                            moments, with delivery and pickup available in our
                            local area.
                        </p>
                    </div>

                    {/* Explore Links column */}
                    <div className="flex flex-col items-start">
                        <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#FCFAFA]">
                            Explore
                        </h5>
                        <ul className="space-y-3.5 text-[#FCFAFA]/60 text-sm font-medium">
                            <li>
                                <Link
                                    href="/#about"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    Our Story
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#products"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    Menu
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#testimonials"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    Testimonials
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/#contact"
                                    className="hover:text-terracotta transition-colors"
                                >
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media column */}
                    <div className="flex flex-col items-start">
                        <h5 className="font-bold text-xs uppercase tracking-[0.2em] mb-5 text-[#FCFAFA]">
                            Connect
                        </h5>
                        <div className="flex flex-col gap-3 w-full">
                            <a
                                href="https://instagram.com/kireikies"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 text-sm text-[#FCFAFA]/60 hover:text-terracotta transition-colors"
                                aria-label="Instagram"
                            >
                                <span className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center group-hover:bg-terracotta group-hover:border-terracotta group-hover:text-white transition-all duration-300">
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
                                </span>
                                <span className="font-medium">Instagram</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom line: Copyright & Credits */}
                <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.15em] text-[#FCFAFA]/30 text-center md:text-left">
                    <div>
                        <p>© 2026 Kireikies Cookies. All Rights Reserved.</p>
                    </div>
                    <div className="normal-case tracking-normal text-[#FCFAFA]/40 font-medium">
                        <p>
                            Designed & developed by{' '}
                            <a
                                href="https://github.com/Alfaturachman"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FCFAFA]/70 hover:text-terracotta transition-colors font-semibold"
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
