export interface MenuItem {
    id: number;
    name: string;
    price: string;
    desc: string;
    color?: string;
    featured?: boolean;
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
                name: 'Sea Salt Dark Choco',
                price: 'Rp18k',
                desc: '70% dark cocoa with Maldon sea salt.',
                color: 'bg-[#EDE4DC]',
                featured: true,
            },
            {
                id: 102,
                name: 'Golden Butter',
                price: 'Rp18k',
                desc: 'Traditional French-style butter cookies.',
                color: 'bg-[#F2EBE5]',
                featured: true,
            },
            {
                id: 103,
                name: 'Vanilla Bean',
                price: 'Rp18k',
                desc: 'Madagascar vanilla with brown sugar.',
                color: 'bg-[#F5F1EE]',
                featured: false,
            },
        ],
    },
    {
        id: 2,
        category: 'Nutty & Chewy',
        items: [
            {
                id: 201,
                name: 'Roasted Hazelnut',
                price: 'Rp18k',
                desc: 'Crunchy roasted hazelnuts in chewy dough.',
                color: 'bg-[#EAE1D8]',
                featured: true,
            },
            {
                id: 202,
                name: 'Almond Praline',
                price: 'Rp18k',
                desc: 'Caramelized almonds with white chocolate.',
                color: 'bg-[#F2EBE5]',
                featured: false,
            },
            {
                id: 203,
                name: 'Walnut Dark Choco',
                price: 'Rp18k',
                desc: 'California walnuts with bitter chocolate.',
                color: 'bg-[#EDE4DC]',
                featured: false,
            },
        ],
    },
    {
        id: 3,
        category: 'Specialty Flavors',
        items: [
            {
                id: 301,
                name: 'Matcha White Choco',
                price: 'Rp18k',
                desc: 'Ceremonial grade matcha from Uji.',
                color: 'bg-[#E5E9E2]',
                featured: true,
            },
            {
                id: 302,
                name: 'Red Velvet Cream',
                price: 'Rp18k',
                desc: 'Cocoa-infused dough with cream cheese.',
                color: 'bg-[#FDECEC]',
                featured: false,
            },
            {
                id: 303,
                name: 'Espresso Crunch',
                price: 'Rp18k',
                desc: 'Cold brew coffee dough with cacao nibs.',
                color: 'bg-[#EAE1D8]',
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
