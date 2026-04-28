'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import OrderRedirectModal from './OrderRedirectModal';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);

    const GOFOOD_URL = "https://gofood.co.id/sukabumi/restaurant/kireikies-39034643-c018-4fc6-8722-dcb8b9bbc975";

    const handleOrderClick = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsRedirectModalOpen(true);
    };

    const confirmOrder = () => {
        window.open(GOFOOD_URL, '_blank');
        setIsRedirectModalOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

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
                'fixed top-0 left-0 w-full z-50 transition-all duration-300 px-6 py-4 md:px-12',
                isScrolled ? 'glass py-3' : 'bg-transparent',
            )}
        >
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                <a
                    href="/"
                    className="text-2xl font-serif font-bold tracking-tight"
                >
                    Kireikies
                </a>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-terracotta transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button 
                        onClick={handleOrderClick}
                        className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                    >
                        Order Now
                    </button>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    ) : (
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                    )}
                </button>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden absolute top-full left-0 w-full bg-background/95 backdrop-blur-lg border-t border-foreground/5 py-6 px-6 flex flex-col space-y-4">
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
