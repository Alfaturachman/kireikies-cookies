'use client';

import React from 'react';

const testimonials = [
    {
        id: 1,
        name: 'Nita Safitri',
        role: 'Local Customer',
        content:
            'The texture is absolutely perfect. The Sea Salt Dark Choco is a revelation—I’ve never had a cookie this balanced.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Andra Suryana',
        role: 'Local Customer',
        content:
            'Kireikies has mastered the art of the chewy center. It feels like a warm hug in every bite. Highly recommended!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Panji Priyadi',
        role: 'Local Customer',
        content:
            'I buy a batch every week for my family. They are fresh, artisan, and you can really taste the quality of the butter.',
        rating: 5,
    },
];

const Testimonials = () => {
    return (
        <section
            id="testimonials"
            className="py-24 md:py-32 bg-white overflow-hidden"
        >
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-serif mb-6">
                        Words from our{' '}
                        <span className="text-terracotta">Sweet</span> Friends.
                    </h2>
                    <p className="text-lg text-foreground/60 max-w-2xl mx-auto leading-relaxed">
                        Nothing makes us happier than hearing how our cookies
                        bring a little extra joy to your day.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item) => (
                        <div
                            key={item.id}
                            className="flex flex-col h-full p-8 rounded-3xl bg-[#FCFAFA] border border-foreground/5 hover:border-terracotta/20 transition-colors duration-300"
                        >
                            <div className="flex gap-1 mb-6 text-terracotta">
                                {[...Array(item.rating)].map((_, i) => (
                                    <svg
                                        key={i}
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        viewBox="0 0 24 24"
                                        fill="#c69271"
                                        stroke="#c69271"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                                    </svg>
                                ))}
                            </div>
                            <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                                "{item.content}"
                            </p>
                            <div className="mt-auto pt-6 border-t border-foreground/5">
                                <h4 className="font-serif text-xl mb-1">
                                    {item.name}
                                </h4>
                                <p className="text-sm font-medium text-foreground/40 uppercase tracking-widest">
                                    {item.role}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
