'use client';

import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';

interface OrderRedirectModalProps {
    isOpen: boolean;
    onClose: () => void;
    onConfirm: () => void;
}

const OrderRedirectModal: React.FC<OrderRedirectModalProps> = ({
    isOpen,
    onClose,
    onConfirm,
}) => {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    const modalContent = (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[10000] flex items-center justify-center p-6 pointer-events-none">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="absolute inset-0 bg-black/60 backdrop-blur-md pointer-events-auto"
                    />
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0, y: 20 }}
                        animate={{ scale: 1, opacity: 1, y: 0 }}
                        exit={{ scale: 0.9, opacity: 0, y: 20 }}
                        className="relative w-full max-w-md bg-white rounded-[2.5rem] p-10 shadow-2xl text-center pointer-events-auto"
                    >
                        <div className="w-20 h-20 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto mb-8">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="32"
                                height="32"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                            >
                                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path>
                                <path d="M3 6h18"></path>
                                <path d="M16 10a4 4 0 0 1-8 0"></path>
                            </svg>
                        </div>

                        <h3 className="text-2xl font-serif mb-4 text-foreground">
                            Order via GoFood?
                        </h3>
                        <p className="text-foreground/60 mb-10 leading-relaxed">
                            You will be redirected to our official{' '}
                            <span className="font-bold text-foreground">
                                GoFood Sukabumi
                            </span>{' '}
                            store to complete your purchase.
                        </p>

                        <div className="flex flex-col gap-3">
                            <button
                                onClick={onConfirm}
                                className="w-full bg-[#2D241E] text-white py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:bg-terracotta transition-colors"
                            >
                                Yes, Continue to GoFood
                            </button>
                            <button
                                onClick={onClose}
                                className="w-full bg-transparent text-foreground/40 py-4 rounded-full font-bold uppercase tracking-widest text-xs hover:text-foreground transition-colors"
                            >
                                No, Stay here
                            </button>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );

    return createPortal(modalContent, document.body);
};

export default OrderRedirectModal;
