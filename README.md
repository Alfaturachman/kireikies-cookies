# Kireikies — Artisan Cookie Portfolio

Kireikies is a premium, modern minimalist landing page for an artisan bakery brand. Built with a focus on high-end aesthetics, smooth interactions, and a "warm luxury" feel.

![Kireikies Preview](https://via.placeholder.com/1200x600?text=Kireikies+Artisan+Cookies)

## Features

- **Premium Hero Section**: GSAP-powered typography animations and an interactive product slider.
- **Dynamic Product Showcase**: High-quality product grid with smooth hover effects and a centered minimalist "View Detail" button.
- **Artisan Detail Modal**: A silky-smooth modal (using Framer Motion) that reveals ingredients, allergens, and product stories without leaving the page.
- **Full Menu Page**: A dedicated page for the entire product collection, categorized for easy browsing.
- **Smooth Interaction**: Integrated **Lenis** for smooth inertia scrolling and **AOS** for elegant entrance animations.
- **Centralized Data**: Single source of truth in `lib/menuData.ts` for easy maintenance of prices, images, and descriptions.
- **Responsive Design**: Meticulously crafted for seamless browsing on mobile, tablet, and desktop.

## Technology Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/), [Framer Motion](https://www.framer.com/motion/), [AOS](https://michalsnik.github.io/aos/)
- **Scrolling**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: Optimized Inline SVGs (No external dependencies)
- **Typography**: Playfair Display (Serif) & Manrope (Sans)

## Getting Started

### Installation

1. **Clone the repository**

    ```bash
    git clone https://github.com/Alfaturachman/kireikies-cookies.git
    cd kireikies-cookies
    ```

2. **Install dependencies**

    ```bash
    npm install
    ```

3. **Run the development server**

    ```bash
    npm run dev
    ```

4. **Open the site**
   Visit [http://localhost:3000](http://localhost:3000) to see the result.

## Project Structure

```text
├── app/               # Next.js App Router (Layouts & Pages)
│   ├── menu/          # Full Menu Page
│   └── globals.css    # Design System & Tailwind Utilities
├── components/        # Modular UI Components (Navbar, Hero, Footer, etc.)
├── lib/               # Shared logic & Product Data (menuData.ts)
├── public/            # Static assets (Artisan cookie images)
└── README.md          # Project documentation
```

## Design System

- **Colors**:
    - `Foreground`: #2D241E (Deep Brown)
    - `Background`: #FCFAFA (Off-White)
    - `Accent`: #B47B5E (Terracotta)
- **Aesthetics**: Glassmorphism, Large Serif Typography, Soft Organic Shapes.

## Developer

Designed and developed by **Alfaturachman Maulana Pahlevi**  
[GitHub Profile](https://github.com/Alfaturachman)

---

_Stay Sweet. Stay Kireikies._
