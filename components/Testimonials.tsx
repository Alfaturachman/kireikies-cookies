'use client';

import React from 'react';
import { Star } from 'lucide-react';

const testimonials = [
    {
        id: 1,
        name: 'Sarah Jenkins',
        role: 'Pastry Enthusiast',
        content:
            'The texture is absolutely perfect. The Sea Salt Dark Choco is a revelation—I’ve never had a cookie this balanced.',
        rating: 5,
    },
    {
        id: 2,
        name: 'Michael Chen',
        role: 'Food Blogger',
        content:
            'Kireikies has mastered the art of the chewy center. It feels like a warm hug in every bite. Highly recommended!',
        rating: 5,
    },
    {
        id: 3,
        name: 'Emma Rodriguez',
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
                            className="p-8 rounded-3xl bg-[#FCFAFA] border border-foreground/5 hover:border-terracotta/20 transition-colors duration-300"
                        >
                            <div className="flex gap-1 mb-6 text-terracotta">
                                {[...Array(item.rating)].map((_, i) => (
                                    <Star
                                        key={i}
                                        size={16}
                                        fill="currentColor"
                                    />
                                ))}
                            </div>
                            <p className="text-lg text-foreground/80 mb-8 italic leading-relaxed">
                                "{item.content}"
                            </p>
                            <div>
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
