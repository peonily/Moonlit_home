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
    },
    {
        id: "moody-organic-modern-living-room-inspiration",
        slug: "moody-organic-modern-living-room",
        categories: ["living-room", "modern"],
        image: "/assets/products/Moody organic modern living room.jpg",
        name: "Moody Organic Modern Living Room Inspiration",
        description: "Transform your space with this sophisticated moody organic modern living room. This design aesthetic blends deep, dramatic tones with natural textures and architectural forms. Discover how to create a luxurious and intimate atmosphere using modern curves, ambient lighting, and high-quality textiles that define contemporary organic comfort.",
        products: [
            {
                id: "modern-pedestal-coffee-table-01",
                name: "Modern Circle Coffee Table Pedestal Center Table for Apartment",
                description: "This stunning pedestal coffee table features a sleek circular design that serves as a perfect focal point for modern apartments. Its clean lines and architectural base blend organic form with contemporary style. The solid construction and elegant finish make it a durable and stylish addition to any modern living room decor.",
                link: "https://amzn.to/4r3rwNB",
                image: "/assets/products/Modern Circle Coffee Table Pedestal Center Table for Apartment.png",
                price: "$269.99"
            },
            {
                id: "wall-lamp-plug-in-cord-01",
                name: "Modern Wall Lamp with Plug in Cord and Dimmable Switch",
                description: "Elevate your ambient lighting with this modern wall lamp. Featuring a convenient plug-in cord and dimmable switch, it offers adjustable warmth and sophisticated design for any moody living space. Its minimalist profile and high-quality materials ensure it provides both functional lighting and a touch of modern elegance to your walls.",
                link: "https://amzn.to/4kr6bv2",
                image: "/assets/products/Wall Lamp with Plug in Cord and Dimmable Switch.png",
                price: "$36.99"
            },
            {
                id: "modern-couch-sofa-comfy-01",
                name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests",
                description: "Experience ultimate comfort and style with this modern sofa. Featuring plush seats, comfy backrests, and sleek armrests, it provides a luxurious seating experience that anchors your organic modern living room. The premium upholstery and ergonomic design make it the perfect choice for both relaxation and entertaining in a contemporary setting.",
                link: "https://amzn.to/3NYptM0",
                image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png",
                price: "$439.99"
            }
        ]
    },
    {
        id: "french-country-cottage-decor",
        slug: "french-country-cottage-decor",
        categories: ["living-room", "cottagecore"],
        image: "/assets/products/French Country cottage decor.jpg",
        name: "French Country Cottagecore Living Room",
        description: "Transport yourself to the rolling hills of Provence with this enchanting French Country Cottagecore living room. This curated space blends rustic elegance with cozy, lived-in charm, featuring distressed wood finishes, soft floral accents, and timeless vintage-inspired furniture that creates a warm and inviting sanctuary.",
        products: [
            {
                id: "vintage-sofa-accent-pillows",
                name: "Vintage Sofa with Accent Pillows",
                description: "This stunning vintage-inspired sofa serves as the perfect centerpiece for any cottagecore or French country living room. Upholstered in premium fabric and featuring elegant rolled arms and turned wooden legs, it offers both exceptional comfort and timeless style. The included accent pillows add a layer of cozy texture and traditional charm to your seating area.",
                link: "https://amzn.to/3OroRhZ",
                image: "/assets/products/Vintage Sofa with Accent Pillows.png",
                price: "$967.99"
            },
            {
                id: "havalance-farmhouse-coffee-table",
                name: "Havalance Farmhouse Rectangular Coffee Table",
                description: "The Havalance rectangular coffee table is a masterclass in rustic sophistication. Featuring a weathered white finish and a contrasting dark wood top, this farmhouse piece brings architectural interest and functional surface area to your living space. Its sturdy construction and distressed detailing make it an ideal anchor for cottage-inspired interiors.",
                link: "https://amzn.to/4qjwrZe",
                image: "/assets/products/Havalance Farmhouse Rectangular Coffee Table.png",
                price: "$442.54"
            },
            {
                id: "farmhouse-pier-shelves",
                name: "Farmhouse Pier with 3 Adjustable Shelves",
                description: "Maximize your display space with the Farmhouse Pier. This tall, elegant storage unit features three adjustable shelves, perfect for showcasing your favorite vintage finds, books, or botanical accents. The distressed white finish and classic molding details evoke the serene feel of a French countryside home.",
                link: "https://amzn.to/3ZlCnpL",
                image: "/assets/products/Farmhouse Pier with 3 Adjustable Shelves.png",
                price: "$130.48"
            },
            {
                id: "french-country-distressed-server",
                name: "French Country Distressed Dining Room Server",
                description: "Elegant and versatile, this French Country Distressed Server adds a touch of traditional luxury to your home. Whether used in the dining room or as a statement side piece in the living area, its intricate carved details and antique finish provide ample storage and a beautiful surface for decor. A true investment piece for lovers of provincial style.",
                link: "https://amzn.to/4ac4Hjq",
                image: "/assets/products/French Country Distressed Dining Room Server.png",
                price: "$1,030.73"
            },
            {
                id: "vintage-rose-wall-decor",
                name: "Vintage Rose Wall Decor - 12x16 Coquette Wall Decor",
                description: "Complete your cottagecore aesthetic with this Vintage Rose Wall Decor. This 12x16 art piece features delicate botanical illustrations that bring a romantic, coquette-inspired flair to your walls. Its soft palette and vintage design make it a charming accent for bedrooms, living rooms, or any space needing a touch of floral beauty.",
                link: "https://amzn.to/4bFNqBx",
                image: "/assets/products/Vintage Rose Wall Decor - 12x16 Coquette Wall Decor.png",
                price: "$15.99"
            }
        ]
    },
    {
        id: "moody-industrial-living-room",
        slug: "moody-industrial-living-room-inspiration",
        categories: ["living-room", "modern"],
        image: "/assets/products/Moody Industrial Living Room Inspo.jpg",
        name: "Moody Industrial Living Room Inspiration",
        description: "Elevate your home with this sophisticated moody industrial living room design. This space masterfully blends raw industrial elements like glass-door cabinets with modern comfort and warm, mood-setting lighting. Discover the perfect balance of dark, dramatic tones and functional, stylish furniture for a contemporary urban sanctuary.",
        products: [
            {
                id: "industrial-entertainment-center-01",
                name: "Modern Entertainment Center with Large Storage Cabinet",
                description: "This sleek and spacious entertainment center offers a perfect blend of modern design and practical storage. Featuring large cabinets to keep your living room organized, its clean lines and dark finish make it a standout piece in any contemporary or industrial-inspired home.",
                link: "https://amzn.to/45Q6Rnu",
                image: "/assets/products/Entertainment Center with Large Storage Cabinet for Living Room.png",
                price: "$126.99"
            },
            {
                id: "industrial-display-cabinet-01",
                name: "Display Cabinet with 4 Glass Doors and Internal Lighting",
                description: "Showcase your favorite decor, books, or collectibles with this elegant display cabinet. Featuring four tempered glass doors and built-in lighting, this cabinet adds a touch of luxury and architectural interest to your living space while providing ample storage and visibility.",
                link: "https://amzn.to/3ZlGjqx",
                image: "/assets/products/Display Cabinet with 4 Glass Doors and Lights.png",
                price: "$299.99"
            },
            {
                id: "industrial-floor-lamp-01",
                name: "Modern Minimalist Floor Lamp with Beige Fabric Shade",
                description: "Add soft, ambient warmth to your room with this simple yet sophisticated floor lamp. Its minimalist design and neutral beige shade complement both modern and industrial decors, providing a cozy glow that enhances any moody living room atmosphere.",
                link: "https://amzn.to/4r2qph7",
                image: "/assets/products/Modern Floor Lamp Simple Design with Beige Shade, Floor Lamps for Living Room.png",
                price: "$49.99"
            }
        ]
    },
    {
        id: "minimalist-neutral-living-room-inspiration",
        slug: "minimalist-neutral-living-room-inspiration",
        categories: ["living-room", "minimalist"],
        image: "/assets/products/Minimalist neutral interior design.jpg",
        name: "Minimalist Neutral Living Room Inspiration",
        description: "Embrace the beauty of simplicity with this minimalist neutral living room. Featuring clean lines, organic textures, and a harmonious color palette, this space creates a calming sanctuary for modern living. Discover the perfect balance of functional design and serene aesthetics to transform your home into a peaceful retreat.",
        products: [
            {
                id: "mid-century-sideboard-01",
                name: "Mid Century Modern Sideboard Buffet Cabinet",
                description: "Elevate your home storage with this Mid Century Modern Sideboard Buffet Cabinet. Its sleek design and spacious compartments make it a perfect addition to your living room or dining area, blending mid-century style with modern functionality. Crafted with high-quality materials to ensure durability and timeless appeal.",
                link: "https://amzn.to/3MfEhp1",
                image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png",
                price: "$229.90"
            },
            {
                id: "valleys-landscape-art-01",
                name: "Valleys Landscape Wilderness Impressionism Traditional Wall Art",
                description: "Bring the serene beauty of the wilderness into your living room with this Valleys Landscape Wilderness Impressionism traditional wall art. Its rich colors and expressive brushstrokes add a touch of timeless elegance and natural calm to any wall. Ideal for creating a focal point in a minimalist or traditional home.",
                link: "https://amzn.to/4klZ6vD",
                image: "/assets/products/Valleys Landscape Wilderness Impressionism Traditional for Living Room.png",
                price: "$72.59"
            },
            {
                id: "modern-wooden-coffee-table-01",
                name: "Modern Wooden Coffee Table with Solid Wood Veneer",
                description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer, offering both durability and a natural aesthetic. Its minimalist design and sturdy construction make it a perfect centerpiece for your modern living room, providing a warm and inviting surface for your daily essentials.",
                link: "https://amzn.to/4qoL51w",
                image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png",
                price: "$249.99"
            },
            {
                id: "mid-century-accent-chair-01",
                name: "Mid-Century Accent Chair Modern Retro Leisure Chair",
                description: "Add a touch of retro charm to your living space with this Mid-Century Accent Chair. Its ergonomic design and plush upholstery provide exceptional comfort, while its sleek lines and tapered wooden legs enhance the modern aesthetic of your room. A perfect leisure chair for reading or relaxing in style.",
                link: "https://amzn.to/4ah123E",
                image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png",
                price: "$125.98"
            }
        ]
    },
    {
        id: "dark-academia-living-room-idea",
        slug: "dark-academia-living-room-idea",
        categories: ["dark-academia", "pieces"],
        image: "/assets/products/Dark Academia living room idea.jpg",
        name: "Dark Academia Living Room Inspiration",
        description: "Step into a world of intellectual mystery with this Dark Academia living room. Featuring a curated selection of moody, classic pieces, this space blends the warmth of natural wood with the sophistication of traditional art and modern comfort. Every element is chosen to create an atmosphere of timeless elegance and academic charm, perfect for deep thought and creative pursuits.",
        products: [
            {
                id: "dark-academia-coffee-table",
                name: "Modern Wooden Coffee Table with Solid Wood Veneer",
                description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer, offering both durability and a natural aesthetic. Its minimalist design and sturdy construction make it a perfect centerpiece for your modern living room, providing a warm and inviting surface for your daily essentials.",
                link: "https://amzn.to/4aiyIOz",
                image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png",
                price: "$249.99"
            },
            {
                id: "dark-academia-wall-art",
                name: "Valleys Landscape Wilderness Impressionism Traditional Wall Art",
                description: "Bring the serene beauty of the wilderness into your living room with this Valleys Landscape Wilderness Impressionism traditional wall art. Its rich colors and expressive brushstrokes add a touch of timeless elegance and natural calm to any wall. Ideal for creating a focal point in a minimalist or traditional home.",
                link: "https://amzn.to/4qpTdyW",
                image: "/assets/products/Valleys Landscape Wilderness Impressionism Traditional for Living Room.png",
                price: "$169.99"
            },
            {
                id: "dark-academia-sofa",
                name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests",
                description: "Experience ultimate comfort and style with this modern sofa. Featuring plush seats, comfy backrests, and sleek armrests, it provides a luxurious seating experience that anchors your organic modern living room. The premium upholstery and ergonomic design make it the perfect choice for both relaxation and entertaining in a contemporary setting.",
                link: "https://amzn.to/4bFXoTt",
                image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png",
                price: "$439.99"
            },
            {
                id: "dark-academia-chair",
                name: "Mid-Century Accent Chair Modern Retro Leisure Chair",
                description: "Add a touch of retro charm to your living space with this Mid-Century Accent Chair. Its ergonomic design and plush upholstery provide exceptional comfort, while its sleek lines and tapered wooden legs enhance the modern aesthetic of your room. A perfect leisure chair for reading or relaxing in style.",
                link: "https://amzn.to/3M9MHhK",
                image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png",
                price: "$135.99"
            },
            {
                id: "dark-academia-floor-lamp",
                name: "Modern Floor Lamp Simple Design with Beige Shade",
                description: "Add soft, ambient warmth to your room with this simple yet sophisticated floor lamp. Its minimalist design and neutral beige shade complement both modern and industrial decors, providing a cozy glow that enhances any moody living room atmosphere.",
                link: "https://amzn.to/3Odagqp",
                image: "/assets/products/Modern Floor Lamp Simple Design with Beige Shade, Floor Lamps for Living Room.png",
                price: "$64.99"
            }
        ]
    },
    {
        id: "moody-library-room-inspiration",
        slug: "moody-library-room-inspiration",
        categories: ["dark-academia", "pieces"],
        image: "/assets/products/Moody library room inspiration.jpg",
        name: "Moody Dark Academia Library Inspiration",
        description: "Immerse yourself in the ultimate dark academia aesthetic with this moody library room. A perfect blend of vintage charm and modern comfort, featuring rich textures, deep tones, and curated furniture pieces that evoke a sense of intellectual mystery and timeless elegance.",
        products: [
            {
                id: "modern-wooden-coffee-table-library",
                name: "Modern Wooden Coffee Table with Solid Wood Veneer",
                description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer, offering both durability and a natural aesthetic. Its minimalist design and sturdy construction make it a perfect centerpiece for your modern living room, providing a warm and inviting surface for your daily essentials.",
                link: "https://amzn.to/4qhoAvn",
                image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png",
                price: "$249.99"
            },
            {
                id: "modern-couch-sofa-library",
                name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests",
                description: "Experience ultimate comfort and style with this modern sofa. Featuring plush seats, comfy backrests, and sleek armrests, it provides a luxurious seating experience that anchors your organic modern living room. The premium upholstery and ergonomic design make it the perfect choice for both relaxation and entertaining in a contemporary setting.",
                link: "https://amzn.to/4r2psoM",
                image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png",
                price: "$439.99"
            },
            {
                id: "mid-century-sideboard-library",
                name: "Mid Century Modern Sideboard Buffet Cabinet",
                description: "Elevate your home storage with this Mid Century Modern Sideboard Buffet Cabinet. Its sleek design and spacious compartments make it a perfect addition to your living room or dining area, blending mid-century style with modern functionality. Crafted with high-quality materials to ensure durability and timeless appeal.",
                link: "https://amzn.to/3OrDh1B",
                image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png",
                price: "$229.90"
            },
            {
                id: "mid-century-accent-chair-library",
                name: "Mid-Century Accent Chair Modern Retro Leisure Chair",
                description: "Add a touch of retro charm to your living space with this Mid-Century Accent Chair. Its ergonomic design and plush upholstery provide exceptional comfort, while its sleek lines and tapered wooden legs enhance the modern aesthetic of your room. A perfect leisure chair for reading or relaxing in style.",
                link: "https://amzn.to/4rV0w2T",
                image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png",
                price: "$116.99"
            },
            {
                id: "arched-pantry-cabinet-library",
                name: "Arched Pantry Cabinet",
                description: "Add architectural interest and functional storage with this Arched Pantry Cabinet. Featuring a unique arched top and ample shelf space, it's perfect for organizing your kitchen, dining room, or living area. Its elegant design and sturdy construction make it a versatile piece that complements a variety of interior styles.",
                link: "https://amzn.to/4c9aLM8",
                image: "/assets/products/Arched Pantry Cabinet.png",
                price: "$259.99"
            }
        ]
    },
    {
        id: "dark-academia-room-decor-inspo",
        slug: "dark-academia-room-decor",
        categories: ["dark-academia", "pieces"],
        image: "/assets/products/Dark Academia room decor.jpg",
        name: "Dark Academia Room Decor Inspiration",
        description: "Immerse yourself in the intellectual and mysterious charm of Dark Academia. This curated room features moody wooden textures, classic mid-century silhouettes, and sophisticated display solutions, creating an atmosphere perfect for deep study and vintage-inspired living.",
        products: [
            {
                id: "modern-wooden-coffee-table-da-2",
                name: "Modern Wooden Coffee Table with Solid Wood Veneer",
                description: "Elevate your living space with this sophisticated modern wooden coffee table. Featuring a high-quality solid wood veneer and a minimalist silhouette, it perfectly captures the organic warmth and intellectual aesthetic of Dark Academia. Its sturdy construction ensures a durable and inviting centerpiece for your home library or study.",
                link: "https://amzn.to/4qWqDpO",
                image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png",
                price: "$249.99"
            },
            {
                id: "mid-century-sideboard-da-2",
                name: "Mid Century Modern Sideboard Buffet Cabinet",
                description: "This Mid Century Modern Sideboard Buffet Cabinet blends timeless design with practical storage. Its elegant dark wood finish and spacious compartments provide the perfect home for your vintage book collection or academic archives. A versatile piece that adds a touch of mid-century sophistication to any dark academia-inspired interior.",
                link: "https://amzn.to/4r4q25D",
                image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png",
                price: "$229.90"
            },
            {
                id: "display-cabinet-da-2",
                name: "Display Cabinet with 4 Glass Doors and Lights",
                description: "Showcase your most treasured curiosities and scholarly finds with this stunning four-door display cabinet. Integrated lighting highlights your collection through tempered glass doors, while the moody industrial-inspired frame provides a dramatic backdrop. An essential piece for creating a curated and scholarly atmosphere in your space.",
                link: "https://amzn.to/4afvDyK",
                image: "/assets/products/Display Cabinet with 4 Glass Doors and Lights.png",
                price: "$309.99"
            }
        ]
    },
    {
        id: "french-country-cottagecore-pieces",
        slug: "french-country-cottagecore-decor",
        categories: ["cottagecore", "pieces"],
        image: "/assets/products/French country cottagecore decor.jpg",
        name: "French Country Cottagecore Decor",
        description: "Discover the perfect blend of provincial elegance and rustic comfort with this French Country Cottagecore decor. This curated collection features timeless vintage pieces, distressed textures, and romantic floral accents that bring the serene beauty of the French countryside into your home. Each element is carefully selected to create a warm, inviting sanctuary that celebrates traditional craftsmanship and cozy, lived-in charm.",
        products: [
            {
                id: "vintage-sofa-fcc",
                name: "Vintage Sofa with Accent Pillows",
                description: "Experience the ultimate in traditional luxury with this vintage-inspired cottage sofa. Featuring elegant rolled arms, turned wooden feet, and premium upholstery, this sofa anchors your French country living room with timeless grace. The included accent pillows offer soft texture and layered comfort, perfect for a cozy afternoon reading nook in your provincial retreat.",
                link: "https://amzn.to/3O1WPJR",
                image: "/assets/products/Vintage Sofa with Accent Pillows.png",
                price: "$967.99"
            },
            {
                id: "farmhouse-coffee-table-fcc",
                name: "Havalance Farmhouse Rectangular Coffee Table",
                description: "The Havalance rectangular coffee table brings architectural interest to your living space with its masterfully distressed finish and classic farmhouse silhouette. Its spacious tabletop provides ample room for displaying curated cottage decor, while the sturdy construction handles daily life with effortless provincial elegance. A perfect blend of functional utility and rustic sophistication.",
                link: "https://amzn.to/4cc5Qdg",
                image: "/assets/products/Havalance Farmhouse Rectangular Coffee Table.png",
                price: "$429.76"
            },
            {
                id: "distressed-server-fcc",
                name: "French Country Distressed Dining Room Server",
                description: "Elevate your storage solutions with this exquisite French Country Distressed Server. Its intricate carved detailing and weathered finish evoke the timeless charm of a Provence estate. Ideal for use in a dining room, entryway, or as a statement piece in your living area, this server provides both generous storage and a beautiful surface for showcasing your favorite heirloom treasures.",
                link: "https://amzn.to/4qjZfRu",
                image: "/assets/products/French Country Distressed Dining Room Server.png",
                price: "$999.99"
            },
            {
                id: "farmhouse-pier-fcc",
                name: "Farmhouse Pier with 3 Adjustable Shelves",
                description: "Maximize your vertical display with the Farmhouse Pier. This elegant storage unit features three adjustable shelves, allowing you to showcase books, botanical collections, or vintage porcelain with ease. The classic molding and distressed white finish perfectly complement the cottagecore aesthetic, providing a serene and practical storage solution for any room in your home.",
                link: "https://amzn.to/4qmv5NA",
                image: "/assets/products/Farmhouse Pier with 3 Adjustable Shelves.png",
                price: "$130.48"
            },
            {
                id: "vintage-rose-decor-fcc",
                name: "Vintage Rose Wall Decor - 12x16 Coquette Wall Decor",
                description: "Add a romantic final touch to your walls with this charming Vintage Rose Wall Decor. This 12x16 coquette-inspired art piece features soft botanical illustrations that capture the essence of a blossoming French garden. Its vintage-inspired design and delicate palette bring a breath of fresh air and a touch of floral beauty to your cottagecore or provincial interior design.",
                link: "https://amzn.to/46CjMcW",
                image: "/assets/products/Vintage Rose Wall Decor - 12x16 Coquette Wall Decor.png",
                price: "$15.99"
            }
        ]
    }
];
