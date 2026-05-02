import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedProducts from '@/components/FeaturedProducts';
import About from '@/components/About';
import ProductShowcase from '@/components/ProductShowcase';
import Testimonials from '@/components/Testimonials';
import Philosophy from '@/components/Philosophy';
import Footer from '@/components/Footer';
import SmoothScroll from '@/components/SmoothScroll';
import AOSWrapper from '@/components/AOSWrapper';

export default function Home() {
    return (
        <AOSWrapper>
            <SmoothScroll>
                <main className="min-h-screen">
                    <Navbar />
                    <Hero />
                    <FeaturedProducts />

                    {/* About */}
                    <div data-aos="fade-up">
                        <About />
                    </div>

                    {/* Products */}
                    <div data-aos="fade-up">
                        <ProductShowcase />
                    </div>

                    {/* Testimonials */}
                    <div data-aos="fade-up">
                        <Testimonials />
                    </div>

                    {/* Our Philosophy */}
                    <Philosophy />

                    {/* Footer Section */}
                    <Footer />
                </main>
            </SmoothScroll>
        </AOSWrapper>
    );
}
