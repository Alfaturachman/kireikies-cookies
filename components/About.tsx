'use client';

import React from 'react';
import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="py-24 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <div className="relative order-2 lg:order-1">
                        <div className="aspect-[4/5] bg-[#F5F1EE] rounded-3xl overflow-hidden relative shadow-lg">
                            <Image
                                src="/images/products/cookies-background-black.avif"
                                alt="background cookies"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                            />
                        </div>
                        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-accent/30 organic-shape -z-10 blur-xl" />
                    </div>

                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-serif mb-8 leading-tight">
                            The Secret Ingredient is Always{' '}
                            <span className="text-terracotta">Love.</span>
                        </h2>
                        <p className="text-lg text-foreground/70 mb-6 leading-relaxed">
                            Founded in a small home kitchen, Kireikies started
                            with a simple mission: to bring back the authentic
                            taste of homemade cookies that remind you of warm
                            childhood memories.
                        </p>
                        <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                            We use only the finest locally-sourced ingredients,
                            organic flour, and hand-selected cocoa beans. No
                            preservatives, no artificial flavors—just pure,
                            honest goodness in every bite.
                        </p>

                        <div className="grid grid-cols-2 gap-8 pt-6 border-t border-foreground/5">
                            <div>
                                <h4 className="text-3xl font-serif text-terracotta mb-1">
                                    100%
                                </h4>
                                <p className="text-sm font-medium opacity-60 uppercase tracking-wider">
                                    Natural Ingredients
                                </p>
                            </div>
                            <div>
                                <h4 className="text-3xl font-serif text-terracotta mb-1">
                                    Fresh
                                </h4>
                                <p className="text-sm font-medium opacity-60 uppercase tracking-wider">
                                    Baked Daily
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
