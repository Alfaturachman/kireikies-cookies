'use client';

import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'About', href: '#about' },
        { name: 'Products', href: '#products' },
        { name: 'Story', href: '#story' },
        { name: 'Testimonials', href: '#testimonials' },
        { name: 'Contact', href: '#contact' },
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
                    href="#"
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
                    <Link href="/menu" className="bg-foreground text-background px-6 py-2 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                        Order Now
                    </Link>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
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
                    <Link 
                        href="/menu" 
                        className="bg-foreground text-background px-6 py-3 rounded-full text-center font-medium"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        Order Now
                    </Link>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
