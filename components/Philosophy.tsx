'use client';

import React from 'react';

const Philosophy = () => {
    return (
        <section
            id="story"
            className="py-24 md:py-32 bg-[#F9F7F5]"
            data-aos="fade-up"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
                <div className="max-w-3xl mx-auto">
                    <span className="text-terracotta font-bold uppercase tracking-[0.2em] text-xs mb-6 block">
                        Our Philosophy
                    </span>
                    <h2 className="text-4xl md:text-5xl font-serif mb-12">
                        Handpicked Ingredients, <br />
                        Handcrafted{' '}
                        <span className="text-terracotta italic">
                            Excellence.
                        </span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
                        <div data-aos="fade-up" data-aos-delay="100">
                            <h4 className="text-xl font-serif mb-4">
                                Slow Baked
                            </h4>
                            <p className="text-foreground/60 text-sm leading-relaxed">
                                We believe in the art of patience. Our cookies
                                are baked at lower temperatures for longer to
                                ensure that perfect crispy-on-the-outside,
                                chewy-on-the-inside texture.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="200">
                            <h4 className="text-xl font-serif mb-4">
                                Ethical Sourcing
                            </h4>
                            <p className="text-foreground/60 text-sm leading-relaxed">
                                From single-origin chocolate to local farm-fresh
                                butter, every ingredient is chosen for its
                                quality and the integrity of its producers.
                            </p>
                        </div>
                        <div data-aos="fade-up" data-aos-delay="300">
                            <h4 className="text-xl font-serif mb-4">
                                Small Batches
                            </h4>
                            <p className="text-foreground/60 text-sm leading-relaxed">
                                Mass production is not our style. We bake in
                                small batches daily to ensure that every single
                                cookie meets our high standards of quality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Philosophy;
