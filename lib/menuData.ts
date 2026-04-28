export interface MenuItem {
    id: number;
    name: string;
    price: string;
    desc: string;
    image?: string;
    color?: string;
    featured?: boolean;
    ingredients?: string[];
    weight?: string;
    allergens?: string[];
}

export interface MenuCategory {
    id: number;
    category: string;
    items: MenuItem[];
}

export const MENU_DATA: MenuCategory[] = [
    {
        id: 1,
        category: 'Signature Classics',
        items: [
            {
                id: 101,
                name: 'Chocolate Chunks Cookie',
                price: 'Rp18k',
                desc: 'Premium dark chocolate chunks embedded in our signature soft-baked dough.',
                image: '/images/products/Chocolate Chunks Cookie.webp',
                color: 'bg-[#EDE4DC]',
                featured: true,
                ingredients: ['70% Dark Chocolate', 'French Butter', 'Organic Flour', 'Brown Sugar'],
                weight: '100g',
                allergens: ['Gluten', 'Dairy', 'Eggs'],
            },
            {
                id: 102,
                name: 'Brownie Cookie',
                price: 'Rp18k',
                desc: 'The perfect hybrid between a fudgy brownie and a chewy cookie.',
                image: '/images/products/Brownie Cookie.webp',
                color: 'bg-[#F2EBE5]',
                featured: true,
                ingredients: ['Cocoa Powder', 'Dark Chocolate', 'Sea Salt', 'Grass-fed Butter'],
                weight: '110g',
                allergens: ['Gluten', 'Dairy'],
            },
            {
                id: 103,
                name: 'Almond Cheese Cookie',
                price: 'Rp18k',
                desc: 'Savory cheese paired with crunchy roasted almonds for a balanced flavor.',
                image: '/images/products/Almond Cheese Cookie.webp',
                color: 'bg-[#F5F1EE]',
                featured: true,
                ingredients: ['Cheddar Cheese', 'Roasted Almonds', 'Parmesan', 'Wheat Flour'],
                weight: '95g',
                allergens: ['Nuts', 'Dairy', 'Gluten'],
            },
            {
                id: 104,
                name: 'Regal Cheese Cookie',
                price: 'Rp18k',
                desc: 'A nostalgic blend of Regal biscuits and premium cheese.',
                image: '/images/products/Regal Cheese Cookie.webp',
                color: 'bg-[#EAE1D8]',
                featured: true,
                ingredients: ['Regal Biscuits', 'Cream Cheese', 'Milk', 'Vanilla Extract'],
                weight: '105g',
                allergens: ['Dairy', 'Gluten'],
            },
        ],
    },
    {
        id: 2,
        category: 'Special Bundles',
        items: [
            {
                id: 201,
                name: 'Chococheezie',
                price: 'Rp35k',
                desc: 'A delightful fusion of chocolate and cheese in every bite.',
                image: '/images/products/chococheezie.webp',
                color: 'bg-[#F2EBE5]',
                featured: false,
            },
            {
                id: 202,
                name: 'All Variants with Special Gift',
                price: 'Rp70k',
                desc: 'Experience all our signature flavors in one special gift-ready package.',
                image: '/images/products/All Variants with Special Gift.webp',
                color: 'bg-[#E5E9E2]',
                featured: false,
            },
        ],
    },
];

export const getFeaturedProducts = () => {
    return MENU_DATA.flatMap((cat) => cat.items).filter(
        (item) => item.featured,
    );
};
