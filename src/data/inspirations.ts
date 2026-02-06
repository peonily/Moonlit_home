export interface Product {
    id: string;
    name: string;
    description: string;
    link: string;
    image: string;
    price?: string;
}

export interface Inspiration {
    id: string;
    slug: string;
    categories: string[];
    image: string;
    name: string;
    description: string;
    products: Product[];
}

export const inspirations: Inspiration[] = [
    {
        id: "living-minimalist-1",
        slug: "serene-arched-mirror-living-room",
        categories: ["living-room", "minimalist"],
        image: "/assets/inspirations/living-room-main.jpg",
        name: "Luxe Minimalist Arched Mirror Living Room",
        description: "A bright and airy space featuring a statement gold mirror, modular comfort, and oak floating shelving. This curated room combines the warmth of natural wood with the elegance of gold accents.",
        products: [
            {
                id: "mirror-01",
                name: "Gold Arched Full-Length Mirror",
                description: "Elevate your space with this stunning 71\" x 32\" gold arched mirror. The thin aluminum alloy frame offers a sleek, modern look that complements any decor while making your room feel larger and brighter.",
                link: "https://amzn.to/4ry3uKl",
                image: "/assets/products/1.png",
            },
            {
                id: "sofa-01",
                name: "Floating Picture Ledge Shelves for Wall Set of 4, 24 Inch Wall",
                description: "Experience ultimate comfort with this modular L-shaped sectional. Featuring FSC certified wood and high-density foam, it offers a perfect blend of sustainability and relaxation for your living room.",
                link: "https://amzn.to/4abnKKG",
                image: "/assets/products/2.png",
            },
            {
                id: "table-01",
                name: "Plank+Beam Solid Oak Coffee Table",
                description: "A solid oak coffee table with a rustic blonde wirebrush finish. Its round 36-inch design makes it ideal for gathering around in cozy, minimalist spaces.",
                link: "https://amzn.to/3M5YRbq",
                image: "/assets/products/3.png",
            },
            {
                id: "shelves-01",
                name: "Vintage Living Room Area Rug 5x8",
                description: "Set of 4 floating shelves designed with a safety lip. Perfect for displaying your favorite art, photos, and small plants without taking up floor space.",
                link: "https://amzn.to/46qbEft",
                image: "/assets/products/Screenshot_30.png",
            }
        ]
    },
    {
        id: "bohemian-living-room-1",
        slug: "bohemian-serenity-living-room",
        categories: ["living-room", "bohemian"],
        image: "/assets/products/IMG_20260204_170437.jpg",
        name: "Bohemian Serenity Living Room",
        description: "A harmonious blend of earthy tones and organic textures. This space features a comfortable cream sectional, natural wood accents, and botanical wall art to create a serene, lived-in atmosphere.",
        products: [
            {
                id: "boho-sectional-01",
                name: "Cream Comfort L-Shaped Sectional",
                description: "This plush cream sectional sofa offers the perfect balance of modern design and cozy comfort, making it the centerpiece of any boho-inspired living room.",
                link: "https://amzn.to/4kiNcCB",
                image: "/assets/products/A1.png",
                price: "$1,299"
            },
            {
                id: "boho-pouf-01",
                name: "Natural Jute Hand-Woven Pouf",
                description: "Add organic texture and extra seating with this hand-woven jute pouf. Perfect as a footrest or a casual side table.",
                link: "https://amzn.to/4caRhXl",
                image: "/assets/products/A2.png",
                price: "$85"
            },
            {
                id: "boho-coffee-table-01",
                name: "Round Oak Finish Coffee Table",
                description: "A minimalist round coffee table with an oak finish that adds warmth and a natural feel to your seating area.",
                link: "https://amzn.to/4tldZ5s",
                image: "/assets/products/A3.png",
                price: "$245"
            },
            {
                id: "boho-sideboard-01",
                name: "Natural Wood Grain Sideboard",
                description: "This elegant sideboard features a beautiful natural wood grain and ample storage, blending functionality with a clean aesthetic.",
                link: "https://amzn.to/46yDeY1",
                image: "/assets/products/A4.png",
                price: "$420"
            },
            {
                id: "boho-wall-art-01",
                name: "Tranquil Botanical Wall Art Set",
                description: "A set of three abstract botanical art pieces that capture the essence of nature with a bohemian flair.",
                link: "https://amzn.to/4bEspXV",
                image: "/assets/products/A5.png",
                price: "$65"
            }
        ]
    }

];
