'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import OrderRedirectModal from './OrderRedirectModal';

interface NavbarProps {
    transparentOnTop?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ transparentOnTop = true }) => {
    const [isScrolled, setIsScrolled] = useState(!transparentOnTop);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);

    const GOFOOD_URL =
        'https://gofood.co.id/sukabumi/restaurant/kireikies-39034643-c018-4fc6-8722-dcb8b9bbc975';

    const handleOrderClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsRedirectModalOpen(true);
    };

    const confirmOrder = () => {
        window.open(GOFOOD_URL, '_blank');
        setIsRedirectModalOpen(false);
    };

    useEffect(() => {
        if (!transparentOnTop) return;
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [transparentOnTop]);

    const navLinks = [
        { name: 'Home', href: '/#home' },
        { name: 'About', href: '/#about' },
        { name: 'Products', href: '/#products' },
        { name: 'Story', href: '/#story' },
        { name: 'Testimonials', href: '/#testimonials' },
        { name: 'Contact', href: '/#contact' },
    ];

    return (
        <nav
            className={cn(
                'fixed z-50 transition-all duration-500 ease-in-out left-1/2 -translate-x-1/2 max-w-7xl',
                isScrolled
                    ? 'top-4 w-[calc(100%-2rem)] glass py-3 px-6 md:px-8 rounded-2xl md:rounded-full shadow-lg shadow-black/5'
                    : 'top-0 w-full bg-transparent text-white py-5 px-6 md:px-12 rounded-none',
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a
                    href="/"
                    className={cn(
                        'text-2xl font-serif font-bold tracking-tight',
                        !isScrolled && 'text-white',
                    )}
                >
                    Kireikies
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className={cn(
                                'text-sm font-medium hover:text-terracotta transition-colors',
                                !isScrolled && 'text-white/80 hover:text-white',
                            )}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleOrderClick}
                        className={cn(
                            'px-6 py-2 rounded-full text-sm font-medium transition-all',
                            isScrolled
                                ? 'bg-foreground text-background hover:opacity-90'
                                : 'bg-white text-foreground hover:bg-accent hover:text-foreground',
                        )}
                    >
                        Order Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className={cn(
                        'md:hidden transition-colors',
                        !isScrolled ? 'text-white' : 'text-foreground',
                    )}
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="18" y1="6" x2="6" y2="18"></line>
                            <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <line x1="3" y1="12" x2="21" y2="12"></line>
                            <line x1="3" y1="6" x2="21" y2="6"></line>
                            <line x1="3" y1="18" x2="21" y2="18"></line>
                        </svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div
                    className={cn(
                        'md:hidden absolute left-0 w-full bg-background/95 backdrop-blur-lg py-6 px-6 flex flex-col space-y-4 text-foreground transition-all duration-300 shadow-xl',
                        isScrolled
                            ? 'top-[calc(100%+0.5rem)] rounded-2xl border border-foreground/10'
                            : 'top-full rounded-b-2xl border-t border-foreground/5',
                    )}
                >
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-lg font-medium hover:text-terracotta transition-colors"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <button
                        onClick={handleOrderClick}
                        className="bg-foreground text-background px-6 py-3 rounded-full text-center font-medium"
                    >
                        Order Now
                    </button>
                </div>
            )}

            <OrderRedirectModal
                isOpen={isRedirectModalOpen}
                onClose={() => setIsRedirectModalOpen(false)}
                onConfirm={confirmOrder}
            />
        </nav>
    );
};

export default Navbar;
