import type { Metadata } from 'next';
import { Playfair_Display, Manrope } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
    variable: '--font-playfair',
    subsets: ['latin'],
});

const manrope = Manrope({
    variable: '--font-manrope',
    subsets: ['latin'],
});

export const metadata: Metadata = {
    title: 'Kireikies Cookies | Artisan Homemade Bakery',
    description:
        'Modern minimalist cookies brand portfolio with premium visual storytelling.',
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html
            lang="en"
            className={`${playfair.variable} ${manrope.variable} h-full antialiased scroll-smooth`}
        >
            <body className="min-h-full flex flex-col font-sans bg-[#FCFAFA] text-[#2D241E]">
                {children}
            </body>
        </html>
    );
}
