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
    },
    {
        id: "sunlit-minimalist",
        slug: "sunlit-minimalist-living-room",
        categories: ["living-room", "minimalist"],
        image: "/assets/products/Sunlit Minimalist Living Space.jpg",
        name: "Sunlit Minimalist Living Space",
        description: "Experience the essence of tranquility with this sun-drenched minimalist living room. This space harmonizes modern functional furniture with soft, natural textures to create a serene sanctuary focused on clean lines and airy aesthetics.",
        products: [
            {
                id: "sectional-sofa-01",
                name: "Oversized Modular Sectional Sofa, FSC Certified L Shaped",
                description: "This premium oversized modular sectional sofa offers ultimate lounging comfort with its deep seating and soft upholstery. FSC certified for sustainable luxury, its L-shaped design perfectly defines a minimalist living space while providing ample room for relaxation.",
                link: "https://amzn.to/4kiqHO8",
                image: "/assets/products/Oversized Modular Sectional Sofa, FSC Certified L Shaped.png",
                price: "$999.99"
            },
            {
                id: "floating-shelves-01",
                name: "Long Floating Shelves for Wall Set of 4",
                description: "A set of four long floating shelves that provide elegant storage and display space without the visual bulk of traditional shelving. Perfect for showcasing minimal decor while maintaining clean wall lines in your modern home.",
                link: "https://amzn.to/4kla5Fz",
                image: "/assets/products/Long Floating Shelves for Wall Set of 4.png",
                price: "$41.99"
            },
            {
                id: "full-body-mirror-01",
                name: "Oversized Full Body Mirrors with Aluminum Frame",
                description: "Make your living space feel twice as large with this oversized full-body mirror. The sleek aluminum frame offers a modern minimalist touch, while the high-quality glass provides crystal-clear reflection to brighten any room.",
                link: "https://amzn.to/3Os4z80",
                image: "/assets/products/Oversized Full Body Mirrors with Aluminum Frame.png",
                price: "$119.99"
            },
            {
                id: "corner-night-stand-01",
                name: "3 Color Lights Corner Night Stand",
                description: "Enhance your mood lighting with this versatile corner stand featuring 3-color light settings. Its compact design fits perfectly in any corner, providing both functional storage and an ambient glow to your minimalist interior.",
                link: "https://amzn.to/4a1bQUP",
                image: "/assets/products/3 Color Lights Corner Night Stand.png",
                price: "$68.99"
            },
            {
                id: "boho-rug-01",
                name: "Boho Floral Washable Girls Bedroom Rug",
                description: "Add a touch of soft pattern and warmth with this washable boho floral rug. Its durable, easy-to-clean design makes it as practical as it is beautiful, bringing a gentle natural aesthetic to your living room floor.",
                link: "https://amzn.to/45UW8s2",
                image: "/assets/products/Boho Floral Washable Girls Bedroom Rug.png",
                price: "$64.99"
            }
        ]
    },
    {
        id: "gold-ornate-mirror-inspiration",
        slug: "gold-ornate-mirror-decor-inspiration",
        categories: ["living-room", "country"],
        image: "/assets/products/Gold Ornate Mirror Decor Inspiration.jpg",
        name: "Vintage Gold Ornate Mirror Living Room Inspiration",
        description: "Embrace the timeless elegance of country-style living with this curated collection. Featuring a stunning gold ornate mirror as the focal point, complemented by soft rose velvet textures and rustic wooden accents, this design captures the perfect balance of vintage charm and modern comfort.",
        products: [
            {
                id: "velvet-sofa-rose",
                name: "Valour Performance Velvet Sofa, Dusty Rose",
                description: "This elegant dusty rose velvet sofa combines mid-century modern design with luxurious comfort. Featuring high-density foam padding and stain-resistant performance velvet, it's the perfect centerpiece for a sophisticated living room. Its gold-finished legs add a touch of glamour to the rustic country aesthetic.",
                link: "https://amzn.to/4rurRsg",
                image: "/assets/products/Valour Performance Velvet Sofa, Dusty Rose.png",
                price: "$451.78"
            },
            {
                id: "ornate-gold-mirror",
                name: "Ornate Baroque Vintage Gold Mirror",
                description: "Add a touch of historic grandeur to your home with this Ornate Baroque Vintage Gold Mirror. Crafted with intricate floral details and a classic gold finish, this mirror serves as a breathtaking focal point in any room. Perfect for reflecting light and creating an airy, luxurious feel in your country-style decor.",
                link: "https://amzn.to/4kovpKm",
                image: "/assets/products/Ornate Baroque Vintage Gold Mirror.png",
                price: "$118.73"
            },
            {
                id: "wooden-center-table",
                name: "Wooden Center Table with Storage, Rectangle Living Room Table",
                description: "This functional yet stylish wooden center table brings natural warmth to your living space. Featuring a spacious tabletop and convenient storage compartment, it's ideal for keeping your living room organized. Its sturdy construction and timeless wooden finish make it a perfect fit for country and bohemian-inspired interiors.",
                link: "https://amzn.to/3ZSnhYX",
                image: "/assets/products/Wooden Center Table with Storage, Rectangle Living Room Table.png",
                price: "$129.99"
            },
            {
                id: "bohemian-shag-rug",
                name: "Flash Furniture Roxy Geometric Style Bohemian Shag Area Rug",
                description: "Transform your floor with the Roxy Geometric Bohemian Shag Rug. Featuring a plush pile height and a stylish geometric pattern, this rug adds texture and warmth to your living space. Its neutral tones and bohemian flair make it a versatile addition to any country or modern home decor.",
                link: "https://amzn.to/4qjV3B8",
                image: "/assets/products/Flash Furniture Roxy Geometric Style Bohemian Shag Area Rug.png",
                price: "$63.06"
            }
        ]
    },
    {
        id: "cozy-white-sectional-inspiration",
        slug: "cozy-white-sectional-living-room",
        categories: ["living-room", "bohemian"],
        image: "/assets/products/Cozy White Sectional Living Room Decor.jpg",
        name: "Cozy White Sectional Living Room Decor",
        description: "A serene and cozy living room featuring a plush white sectional sofa, layered textures, and natural wood accents. This Bohemian-inspired space balances modern comfort with organic elements, creating a peaceful sanctuary for relaxation and gathering.",
        products: [
            {
                id: "modular-memory-foam-couch-01",
                name: "Modular Memory Foam Couches for Living Room",
                description: "Experience cloud-like comfort with this modular memory foam sectional. Designed for ultimate versatility and style, it features high-density foam and durable upholstery that withstands daily life while maintaining a chic, bohemian aesthetic.",
                link: "https://amzn.to/3ZVdHEI",
                image: "/assets/products/Modular Memory Foam Couches for Living Room.png",
                price: "$563.03"
            },
            {
                id: "jute-pouf-ottoman-01",
                name: "Jute Circular Jute Pouf Ottoman - Braided Pouffe Accent Sitting",
                description: "Hand-braided from natural fiber, this circular jute pouf adds organic texture and rustic charm to your space. Perfect as a casual seat, footrest, or side table, it's a versatile piece that complements any bohemian or coastal interior.",
                link: "https://amzn.to/4aiRcP5",
                image: "/assets/products/Jute Circular Jute Pouf Ottoman - Braided Pouffe Accent Sitting.png",
                price: "$72.99"
            },
            {
                id: "triple-wide-bookshelf-01",
                name: "Bookshelf Triple Wide Wood Bookcase Storage with Adjustable Shelves",
                description: "An elegant and spacious storage solution, this triple-wide wood bookcase features adjustable shelves to accommodate your favorite books and decor. Its natural wood finish and sturdy design make it a focal point in any living room or home office.",
                link: "https://amzn.to/4cd79IU",
                image: "/assets/products/Bookshelf Triple Wide Wood Bookcase Storage with Adjustable Shelves.png",
                price: "$649.99"
            },
            {
                id: "round-end-table-01",
                name: "Round End Table with 3 Storage Shelves for Living Room",
                description: "Keep your essentials within reach with this stylish round end table. Featuring three tiers of open storage, it's perfect for displaying plants, lamps, or books. Its slim profile and warm finish enhance the cozy vibes of your bohemian living space.",
                link: "https://amzn.to/3O0zUib",
                image: "/assets/products/Round End Table with 3 Storage Shelves for Living Room.png",
                price: "$59.99"
            }
        ]
    },
    {
        id: "neutral-monochromatic-living-room-inspiration",
        slug: "neutral-monochromatic-living-room",
        categories: ["living-room", "bohemian"],
        image: "/assets/products/Neutral monochromatic living room.jpg",
        name: "Neutral Monochromatic Bohemian Living Room",
        description: "Achieve a serene and sophisticated aesthetic with this neutral monochromatic living room. This Bohemian-inspired space focuses on a harmonious palette of creams and sands, featuring textured furniture and architectural details that create a calm, inviting atmosphere.",
        products: [
            {
                id: "modern-loveseat-sofa-01",
                name: "Modern Loveseat Sofa for Living Room",
                description: "This stylish modern loveseat sofa is the perfect centerpiece for a contemporary living room. Featuring clean lines and plush upholstery, it offers both comfort and a sleek aesthetic. Its compact size makes it ideal for smaller spaces without compromising on style.",
                link: "https://amzn.to/3M9uSPS",
                image: "/assets/products/Modern Loveseat Sofa for Living Room.png",
                price: "$331.49"
            },
            {
                id: "rattan-buffet-cabinet-01",
                name: "Rattan Buffet Cabinet with Storage",
                description: "Enhance your storage with this elegant Rattan Buffet Cabinet. Combining natural rattan textures with modern design, this piece provides ample storage for your essentials while adding a touch of bohemian charm to your dining or living area.",
                link: "https://amzn.to/4r9yFfm",
                image: "/assets/products/Rattan Buffet Cabinet with Storage.png",
                price: "$185.99"
            },
            {
                id: "circle-wood-coffee-table-01",
                name: "Circle Wood Coffee Table with Storage Shelf",
                description: "This versatile circle wood coffee table features a practical storage shelf, making it as functional as it is beautiful. Its round design promotes a natural flow in your living space, while the wooden finish adds warmth and organic texture.",
                link: "https://amzn.to/4abYuE8",
                image: "/assets/products/Circle Wood Coffee Table with Storage Shelf.png",
                price: "$109.99"
            },
            {
                id: "potted-silk-indoor-plant-01",
                name: "Realistic Potted Silk Artificial Indoor with Green Leaves",
                description: "Bring the beauty of nature indoors without the maintenance. This realistic potted silk artificial plant features lush green leaves that add a vibrant touch to any room. Perfect for brightening up corners and adding a breath of fresh air to your bohemian decor.",
                link: "https://amzn.to/4acxILO",
                image: "/assets/products/Realistic Potted Silk Artificial Indoor with Green Leaves.png",
                price: "$103.99"
            }
        ]
    }
];
