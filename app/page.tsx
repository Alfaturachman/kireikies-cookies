import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import SmoothScroll from '@/components/SmoothScroll';
import AOSWrapper from '@/components/AOSWrapper';

export default function Home() {
    return (
        <AOSWrapper>
            <SmoothScroll>
                <main className="min-h-screen">
                    <Navbar />
                    <Hero />

                    <div data-aos="fade-up">
                        <About />
                    </div>

                    <div data-aos="fade-up">
                        <ProductShowcase />
                    </div>

                    {/* Brand Story / Values Section */}
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
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="100"
                                    >
                                        <h4 className="text-xl font-serif mb-4">
                                            Slow Baked
                                        </h4>
                                        <p className="text-foreground/60 text-sm leading-relaxed">
                                            We believe in the art of patience.
                                            Our cookies are baked at lower
                                            temperatures for longer to ensure
                                            that perfect crispy-on-the-outside,
                                            chewy-on-the-inside texture.
                                        </p>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="200"
                                    >
                                        <h4 className="text-xl font-serif mb-4">
                                            Ethical Sourcing
                                        </h4>
                                        <p className="text-foreground/60 text-sm leading-relaxed">
                                            From single-origin chocolate to
                                            local farm-fresh butter, every
                                            ingredient is chosen for its quality
                                            and the integrity of its producers.
                                        </p>
                                    </div>
                                    <div
                                        data-aos="fade-up"
                                        data-aos-delay="300"
                                    >
                                        <h4 className="text-xl font-serif mb-4">
                                            Small Batches
                                        </h4>
                                        <p className="text-foreground/60 text-sm leading-relaxed">
                                            Mass production is not our style. We
                                            bake in small batches daily to
                                            ensure that every single cookie
                                            meets our high standards of quality.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <div data-aos="fade-up">
                        <Testimonials />
                    </div>

                    {/* Footer Section */}
                    <footer
                        id="contact"
                        className="py-20 bg-[#2D241E] text-[#FCFAFA]/90"
                    >
                        <div className="max-w-7xl mx-auto px-6 md:px-12">
                            <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                                <div className="md:col-span-2">
                                    <a
                                        href="#"
                                        className="text-2xl font-serif font-bold mb-6 block text-[#FCFAFA]"
                                    >
                                        Kireikies
                                    </a>
                                    <p className="text-[#FCFAFA]/60 max-w-sm leading-relaxed">
                                        Crafting premium artisan cookies for
                                        moments of joy and comfort. Available
                                        for nationwide shipping and local
                                        pickup.
                                    </p>
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-[#FCFAFA]">
                                        Explore
                                    </h5>
                                    <ul className="space-y-4 text-[#FCFAFA]/60 text-sm font-medium">
                                        <li>
                                            <a
                                                href="#about"
                                                className="hover:text-accent transition-colors"
                                            >
                                                Our Story
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#products"
                                                className="hover:text-accent transition-colors"
                                            >
                                                Menu
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#testimonials"
                                                className="hover:text-accent transition-colors"
                                            >
                                                Testimonials
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="#contact"
                                                className="hover:text-accent transition-colors"
                                            >
                                                Contact
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 className="font-bold text-sm uppercase tracking-widest mb-6 text-[#FCFAFA]">
                                        Stay Sweet
                                    </h5>
                                    <p className="text-sm text-[#FCFAFA]/60 mb-4">
                                        Subscribe to our newsletter for secret
                                        recipes and new arrivals.
                                    </p>
                                    <div className="flex gap-2">
                                        <input
                                            type="email"
                                            placeholder="Email address"
                                            className="bg-[#FCFAFA]/10 border border-[#FCFAFA]/20 px-4 py-2 rounded-full text-sm flex-1 outline-none text-[#FCFAFA]"
                                        />
                                        <button className="bg-[#FCFAFA] text-[#2D241E] w-10 h-10 rounded-full flex items-center justify-center font-bold hover:bg-accent transition-colors">
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-8 border-t border-[#FCFAFA]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-[#FCFAFA]/40 uppercase tracking-widest">
                                <p>
                                    © 2026 Kireikies Cookies. All Rights
                                    Reserved.
                                </p>
                                <div className="flex gap-8">
                                    <a
                                        href="#"
                                        className="hover:text-accent transition-colors"
                                    >
                                        Instagram
                                    </a>
                                    <a
                                        href="https://www.instagram.com/kireikies/"
                                        className="hover:text-accent transition-colors"
                                    >
                                        TikTok
                                    </a>
                                    <a
                                        href="#"
                                        className="hover:text-accent transition-colors"
                                    >
                                        Facebook
                                    </a>
                                </div>
                            </div>
                        </div>
                    </footer>
                </main>
            </SmoothScroll>
        </AOSWrapper>
    );
}
