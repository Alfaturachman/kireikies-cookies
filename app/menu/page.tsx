'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import SmoothScroll from '@/components/SmoothScroll';
import AOSWrapper from '@/components/AOSWrapper';
import Link from 'next/link';
import { MENU_DATA, MenuItem } from '@/lib/menuData';
import Footer from '@/components/Footer';
import ProductModal from '@/components/ProductModal';
import OrderRedirectModal from '@/components/OrderRedirectModal';

export default function MenuPage() {
    const [selectedProduct, setSelectedProduct] = useState<MenuItem | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isRedirectModalOpen, setIsRedirectModalOpen] = useState(false);

    const GOFOOD_URL = "https://gofood.co.id/sukabumi/restaurant/kireikies-39034643-c018-4fc6-8722-dcb8b9bbc975";

    const openModal = (product: MenuItem) => {
        setSelectedProduct(product);
        setIsModalOpen(true);
    };

    const handleQuickOrder = (e: React.MouseEvent) => {
        e.stopPropagation();
        setIsRedirectModalOpen(true);
    };

    const confirmOrder = () => {
        window.open(GOFOOD_URL, '_blank');
        setIsRedirectModalOpen(false);
    };

    return (
        <AOSWrapper>
            <SmoothScroll>
                <main className="min-h-screen bg-[#FCFAFA]">
                    <Navbar />

                    <div className="pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto">
                        {/* ... (rest of the menu content) */}
                        <Link
                            href="/"
                            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-terracotta mb-12 hover:gap-3 transition-all"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <line x1="19" y1="12" x2="5" y2="12"></line>
                                <polyline points="12 19 5 12 12 5"></polyline>
                            </svg>{' '}
                            Back to Home
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
                                                className="group cursor-pointer"
                                                onClick={() => openModal(item)}
                                            >
                                                <div className="aspect-[4/3] bg-[#F5F1EE] rounded-2xl mb-6 relative overflow-hidden flex items-center justify-center text-foreground/20 font-serif italic text-lg border border-foreground/5 shadow-sm group">
                                                    {item.image ? (
                                                        <img
                                                            src={item.image}
                                                            alt={item.name}
                                                            className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                                        />
                                                    ) : (
                                                        <span className="opacity-20 italic">
                                                            {item.name} Image
                                                        </span>
                                                    )}
                                                    <button 
                                                        className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-terracotta hover:text-white"
                                                        onClick={handleQuickOrder}
                                                    >
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
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

                    {/* Footer Section */}
                    <Footer />
                </main>
            </SmoothScroll>

            <ProductModal 
                product={selectedProduct} 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />

            <OrderRedirectModal 
                isOpen={isRedirectModalOpen} 
                onClose={() => setIsRedirectModalOpen(false)} 
                onConfirm={confirmOrder} 
            />
        </AOSWrapper>
    );
}
