"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { getFeaturedProducts, MenuItem } from '@/lib/menuData';
import ProductModal from './ProductModal';
import OrderRedirectModal from './OrderRedirectModal';

const products = getFeaturedProducts();

const ProductShowcase = () => {
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
        <section id="products" className="py-24 md:py-32 bg-[#FCFAFA]">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-5xl font-serif mb-6">
                            Our Signature{' '}
                            <span className="text-terracotta">Collection.</span>
                        </h2>
                        <p className="text-lg text-foreground/70 leading-relaxed">
                            Each recipe is a masterpiece, crafted over months of
                            experimentation to achieve the perfect texture and
                            flavor profile.
                        </p>
                    </div>
                    <Link
                        href="/menu"
                        className="hidden md:block text-sm font-bold uppercase tracking-widest border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors mt-8 md:mt-0"
                    >
                        View Full Menu
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <div 
                            key={product.id} 
                            className="group cursor-pointer"
                            onClick={() => openModal(product)}
                        >
                            <div
                                className={`${product.color} aspect-square rounded-3xl mb-6 relative overflow-hidden transition-transform duration-500 group-hover:scale-[1.02] shadow-sm`}
                            >
                                {product.image ? (
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center opacity-40 grayscale group-hover:grayscale-0 transition-all duration-500 font-serif italic">
                                        Product Image
                                    </div>
                                )}
                                <button 
                                    className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg transform translate-y-8 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 hover:bg-terracotta hover:text-white"
                                    onClick={handleQuickOrder}
                                >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                                </button>
                            </div>
                            <div className="flex justify-between items-start mb-2">
                                <h3 className="text-xl font-serif">
                                    {product.name}
                                </h3>
                                <span className="font-medium text-terracotta">
                                    {product.price}
                                </span>
                            </div>
                            <p className="text-sm text-foreground/60 leading-relaxed line-clamp-2">
                                {product.desc}
                            </p>
                        </div>
                    ))}
                </div>

                <Link
                    href="/menu"
                    className="md:hidden w-full mt-12 py-4 border border-foreground/10 rounded-full font-bold uppercase tracking-widest text-sm text-center block"
                >
                    View Full Menu
                </Link>
            </div>

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
        </section>
    );
};

export default ProductShowcase;
