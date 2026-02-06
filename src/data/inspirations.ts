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
    },
    {
        id: "bohemian-living-room-2",
        slug: "organic-bohemian-living-room",
        categories: ["living-room", "bohemian"],
        image: "/assets/products/IMG_20260204_151258.jpg",
        name: "Eclectic Organic Bohemian Living Room Inspiration",
        description: "Transform your home with this eclectic organic bohemian living room design. Featuring a curated mix of natural rattan textures, Earthy neutral tones, and artisanal decor, this free-spirited aesthetic brings warmth and serenity to any modern living space. Discover the perfect blend of botanical elements and cozy textiles for your next room makeover.",
        products: [
            {
                id: "boho-mirror-starburst",
                name: "Natural Rattan Starburst Wall Mirror - Artisanal Boho Decor",
                description: "This handcrafted natural rattan starburst mirror is the quintessential bohemian wall decor. Made from sustainable materials, its intricate woven design adds organic texture and a sunny focal point to your living room or bedroom. A must-have piece for any boho-chic home aesthetic.",
                link: "https://amzn.to/4bKsTvP",
                image: "/assets/products/11.png",
                price: "$45"
            },
            {
                id: "boho-lamp-woven",
                name: "Woven Grass Ambient Table Lamp - Natural Fiber Lighting",
                description: "Illuminate your space with this stunning woven grass table lamp. Featuring an organic base crafted from natural fibers and a soft linen shade, this lamp provides warm, ambient lighting that complements bohemian and coastal interiors. Perfect for bedside tables or living room accents.",
                link: "https://amzn.to/4rA2VzJ",
                image: "/assets/products/22.png",
                price: "$120"
            },
            {
                id: "boho-vase-ceramic",
                name: "Hand-Painted Ceramic Botanical Bud Vase - Boho Chic Pottery",
                description: "Add a touch of artisanal charm with this hand-painted ceramic botanical bud vase. Featuring a delicate floral motif and organic silhouette, this decorative pottery piece is ideal for displaying dried wildflowers on your mantel, shelf, or coffee table.",
                link: "https://amzn.to/4qjSEq8",
                image: "/assets/products/33.png",
                price: "$32"
            },
            {
                id: "boho-pampas-bundle",
                name: "Premium Dried Pampas Grass Bundle - Tall Fluffy Plumes",
                description: "Elevate your interior design with our premium dried pampas grass arrangement. These tall, fluffy natural plumes add height and soft, ethereal texture to any room. Perfect for floor vases, corner decor, or creating a dreamy bohemian atmosphere in your home.",
                link: "https://amzn.to/4ag5Rul",
                image: "/assets/products/44.png",
                price: "$38"
            },
            {
                id: "boho-basket-seagrass",
                name: "Seagrass Storage Basket with Tassels - Woven Boho Organizer",
                description: "Stay organized in style with this seagrass storage basket featuring playful tassel details. This hand-woven organizer is perfect for storing throw blankets, pillows, or even as a decorative indoor plant cover. A versatile and eco-friendly addition to your bohemian home furniture.",
                link: "https://amzn.to/4cbgEIC",
                image: "/assets/products/55.png",
                price: "$55"
            },
            {
                id: "boho-pillow-macrame",
                name: "Textured Macramé Fringed Throw Pillow - Scandi-Boho Accent",
                description: "Complete your sofa styling with this textured macramé throw pillow. Featuring hand-knotted patterns and delicate fringe, this scandi-boho inspired cushion adds cozy depth and artisanal flair to your seating area. Crafted from soft cotton for ultimate comfort and style.",
                link: "https://amzn.to/4aciV3K",
                image: "/assets/products/66.png",
                price: "$28"
            }
        ]
    }

];
