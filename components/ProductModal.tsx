'use client';

import React, { useEffect } from 'react';
import { X, ShoppingBag, Weight, Info } from 'lucide-react';
import { MenuItem } from '@/lib/menuData';
import { motion, AnimatePresence } from 'framer-motion';

interface ProductModalProps {
    product: MenuItem | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProductModal: React.FC<ProductModalProps> = ({ product, isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    if (!product) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-4xl bg-white rounded-[2rem] overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
                    >
                        <button
                            onClick={onClose}
                            className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors"
                        >
                            <X size={20} />
                        </button>

                        {/* Image Section */}
                        <div className="w-full md:w-1/2 aspect-square md:aspect-auto bg-[#F5F1EE] relative overflow-hidden">
                            {product.image ? (
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="absolute inset-0 flex items-center justify-center text-foreground/20 font-serif italic text-2xl">
                                    {product.name}
                                </div>
                            )}
                        </div>

                        {/* Info Section */}
                        <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto">
                            <span className="text-terracotta font-bold uppercase tracking-[0.2em] text-xs mb-4 block">
                                Artisan Collection
                            </span>
                            <h2 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
                                {product.name}
                            </h2>
                            <p className="text-2xl font-serif text-terracotta mb-8">
                                {product.price}
                            </p>
                            
                            <div className="space-y-8 mb-12">
                                <div>
                                    <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-3 text-foreground/40">
                                        <Info size={14} /> Description
                                    </h4>
                                    <p className="text-foreground/70 leading-relaxed">
                                        {product.desc}
                                    </p>
                                </div>

                                {product.ingredients && (
                                    <div>
                                        <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-3 text-foreground/40">
                                            Ingredients
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {product.ingredients.map((ing) => (
                                                <span key={ing} className="bg-[#F5F1EE] px-4 py-1.5 rounded-full text-xs font-medium">
                                                    {ing}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                )}

                                <div className="grid grid-cols-2 gap-8">
                                    {product.weight && (
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-3 text-foreground/40">
                                                <Weight size={14} /> Weight
                                            </h4>
                                            <p className="text-sm font-bold">{product.weight}</p>
                                        </div>
                                    )}
                                    {product.allergens && (
                                        <div>
                                            <h4 className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-3 text-foreground/40">
                                                Allergens
                                            </h4>
                                            <p className="text-sm font-bold">{product.allergens.join(', ')}</p>
                                        </div>
                                    )}
                                </div>
                            </div>

                            <button className="w-full bg-[#2D241E] text-white py-5 rounded-2xl font-bold uppercase tracking-widest text-xs flex items-center justify-center gap-3 hover:bg-terracotta transition-colors group">
                                <ShoppingBag size={18} className="group-hover:scale-110 transition-transform" />
                                Add to Cart — {product.price}
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProductModal;
