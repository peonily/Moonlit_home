const SITE_URL = "https://moonlit-home-decor.com";
const SITE_NAME = "Moonlit Home Decor";

// All products and inspirations data for server-side meta tag injection
const products: Record<string, { name: string; description: string; image: string; price?: string }> = {
    "mirror-01": { name: "Gold Arched Full-Length Mirror", description: "Elevate your space with this stunning 71\" x 32\" gold arched mirror.", image: "/assets/products/1.png" },
    "sofa-01": { name: "Floating Picture Ledge Shelves for Wall Set of 4, 24 Inch Wall", description: "Experience ultimate comfort with this modular L-shaped sectional.", image: "/assets/products/2.png" },
    "table-01": { name: "Plank+Beam Solid Oak Coffee Table", description: "A solid oak coffee table with a rustic blonde wirebrush finish.", image: "/assets/products/3.png" },
    "shelves-01": { name: "Vintage Living Room Area Rug 5x8", description: "Set of 4 floating shelves designed with a safety lip.", image: "/assets/products/Screenshot_30.png" },
    "boho-sectional-01": { name: "Cream Comfort L-Shaped Sectional", description: "This plush cream sectional sofa offers the perfect balance of modern design and cozy comfort.", image: "/assets/products/A1.png", price: "Check the Price on Amazon" },
    "boho-pouf-01": { name: "Natural Jute Hand-Woven Pouf", description: "Add organic texture and extra seating with this hand-woven jute pouf.", image: "/assets/products/A2.png", price: "Check the Price on Amazon" },
    "boho-coffee-table-01": { name: "Round Oak Finish Coffee Table", description: "A minimalist round coffee table with an oak finish that adds warmth.", image: "/assets/products/A3.png", price: "Check the Price on Amazon" },
    "boho-sideboard-01": { name: "Natural Wood Grain Sideboard", description: "This elegant sideboard features a beautiful natural wood grain and ample storage.", image: "/assets/products/A4.png", price: "Check the Price on Amazon" },
    "boho-wall-art-01": { name: "Tranquil Botanical Wall Art Set", description: "A set of three abstract botanical art pieces that capture the essence of nature.", image: "/assets/products/A5.png", price: "Check the Price on Amazon" },
    "boho-mirror-starburst": { name: "Natural Rattan Starburst Wall Mirror - Artisanal Boho Decor", description: "This handcrafted natural rattan starburst mirror is the quintessential bohemian wall decor.", image: "/assets/products/11.png", price: "Check the Price on Amazon" },
    "boho-lamp-woven": { name: "Woven Grass Ambient Table Lamp - Natural Fiber Lighting", description: "Illuminate your space with this stunning woven grass table lamp.", image: "/assets/products/22.png", price: "Check the Price on Amazon" },
    "boho-vase-ceramic": { name: "Hand-Painted Ceramic Botanical Bud Vase - Boho Chic Pottery", description: "Add a touch of artisanal charm with this hand-painted ceramic botanical bud vase.", image: "/assets/products/33.png", price: "Check the Price on Amazon" },
    "boho-pampas-bundle": { name: "Premium Dried Pampas Grass Bundle - Tall Fluffy Plumes", description: "Elevate your interior design with our premium dried pampas grass arrangement.", image: "/assets/products/44.png", price: "Check the Price on Amazon" },
    "boho-basket-seagrass": { name: "Seagrass Storage Basket with Tassels - Woven Boho Organizer", description: "Stay organized in style with this seagrass storage basket.", image: "/assets/products/55.png", price: "Check the Price on Amazon" },
    "boho-pillow-macrame": { name: "Textured Macramé Fringed Throw Pillow - Scandi-Boho Accent", description: "Complete your sofa styling with this textured macramé throw pillow.", image: "/assets/products/66.png", price: "Check the Price on Amazon" },
    "sectional-sofa-01": { name: "Oversized Modular Sectional Sofa, FSC Certified L Shaped", description: "This premium oversized modular sectional sofa offers ultimate lounging comfort.", image: "/assets/products/Oversized Modular Sectional Sofa, FSC Certified L Shaped.png", price: "Check the Price on Amazon" },
    "floating-shelves-01": { name: "Long Floating Shelves for Wall Set of 4", description: "A set of four long floating shelves that provide elegant storage and display space.", image: "/assets/products/Long Floating Shelves for Wall Set of 4.png", price: "Check the Price on Amazon" },
    "full-body-mirror-01": { name: "Oversized Full Body Mirrors with Aluminum Frame", description: "Make your living space feel twice as large with this oversized full-body mirror.", image: "/assets/products/Oversized Full Body Mirrors with Aluminum Frame.png", price: "Check the Price on Amazon" },
    "corner-night-stand-01": { name: "3 Color Lights Corner Night Stand", description: "Enhance your mood lighting with this versatile corner stand.", image: "/assets/products/3 Color Lights Corner Night Stand.png", price: "Check the Price on Amazon" },
    "boho-rug-01": { name: "Boho Floral Washable Girls Bedroom Rug", description: "Add a touch of soft pattern and warmth with this washable boho floral rug.", image: "/assets/products/Boho Floral Washable Girls Bedroom Rug.png", price: "Check the Price on Amazon" },
    "velvet-sofa-rose": { name: "Valour Performance Velvet Sofa, Dusty Rose", description: "This elegant dusty rose velvet sofa combines mid-century modern design with luxurious comfort.", image: "/assets/products/Valour Performance Velvet Sofa, Dusty Rose.png", price: "Check the Price on Amazon" },
    "ornate-gold-mirror": { name: "Ornate Baroque Vintage Gold Mirror", description: "Add a touch of historic grandeur to your home with this Ornate Baroque Vintage Gold Mirror.", image: "/assets/products/Ornate Baroque Vintage Gold Mirror.png", price: "Check the Price on Amazon" },
    "wooden-center-table": { name: "Wooden Center Table with Storage, Rectangle Living Room Table", description: "This functional yet stylish wooden center table brings natural warmth to your living space.", image: "/assets/products/Wooden Center Table with Storage, Rectangle Living Room Table.png", price: "Check the Price on Amazon" },
    "bohemian-shag-rug": { name: "Flash Furniture Roxy Geometric Style Bohemian Shag Area Rug", description: "Transform your floor with the Roxy Geometric Bohemian Shag Rug.", image: "/assets/products/Flash Furniture Roxy Geometric Style Bohemian Shag Area Rug.png", price: "Check the Price on Amazon" },
    "modular-memory-foam-couch-01": { name: "Modular Memory Foam Couches for Living Room", description: "Experience cloud-like comfort with this modular memory foam sectional.", image: "/assets/products/Modular Memory Foam Couches for Living Room.png", price: "Check the Price on Amazon" },
    "jute-pouf-ottoman-01": { name: "Jute Circular Jute Pouf Ottoman - Braided Pouffe Accent Sitting", description: "Hand-braided from natural fiber, this circular jute pouf adds organic texture.", image: "/assets/products/Jute Circular Jute Pouf Ottoman - Braided Pouffe Accent Sitting.png", price: "Check the Price on Amazon" },
    "triple-wide-bookshelf-01": { name: "Bookshelf Triple Wide Wood Bookcase Storage with Adjustable Shelves", description: "An elegant and spacious storage solution, this triple-wide wood bookcase.", image: "/assets/products/Bookshelf Triple Wide Wood Bookcase Storage with Adjustable Shelves.png", price: "Check the Price on Amazon" },
    "round-end-table-01": { name: "Round End Table with 3 Storage Shelves for Living Room", description: "Keep your essentials within reach with this stylish round end table.", image: "/assets/products/Round End Table with 3 Storage Shelves for Living Room.png", price: "Check the Price on Amazon" },
    "modern-loveseat-sofa-01": { name: "Modern Loveseat Sofa for Living Room", description: "This stylish modern loveseat sofa is the perfect centerpiece for a contemporary living room.", image: "/assets/products/Modern Loveseat Sofa for Living Room.png", price: "Check the Price on Amazon" },
    "rattan-buffet-cabinet-01": { name: "Rattan Buffet Cabinet with Storage", description: "Enhance your storage with this elegant Rattan Buffet Cabinet.", image: "/assets/products/Rattan Buffet Cabinet with Storage.png", price: "Check the Price on Amazon" },
    "circle-wood-coffee-table-01": { name: "Circle Wood Coffee Table with Storage Shelf", description: "This versatile circle wood coffee table features a practical storage shelf.", image: "/assets/products/Circle Wood Coffee Table with Storage Shelf.png", price: "Check the Price on Amazon" },
    "potted-silk-indoor-plant-01": { name: "Realistic Potted Silk Artificial Indoor with Green Leaves", description: "Bring the beauty of nature indoors without the maintenance.", image: "/assets/products/Realistic Potted Silk Artificial Indoor with Green Leaves.png", price: "Check the Price on Amazon" },
    "modern-pedestal-coffee-table-01": { name: "Modern Circle Coffee Table Pedestal Center Table for Apartment", description: "This stunning pedestal coffee table features a sleek circular design.", image: "/assets/products/Modern Circle Coffee Table Pedestal Center Table for Apartment.png", price: "Check the Price on Amazon" },
    "wall-lamp-plug-in-cord-01": { name: "Modern Wall Lamp with Plug in Cord and Dimmable Switch", description: "Elevate your ambient lighting with this modern wall lamp.", image: "/assets/products/Wall Lamp with Plug in Cord and Dimmable Switch.png", price: "Check the Price on Amazon" },
    "modern-couch-sofa-comfy-01": { name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests", description: "Experience ultimate comfort and style with this modern sofa.", image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png", price: "Check the Price on Amazon" },
    "vintage-sofa-accent-pillows": { name: "Vintage Sofa with Accent Pillows", description: "This stunning vintage-inspired sofa serves as the perfect centerpiece.", image: "/assets/products/Vintage Sofa with Accent Pillows.png", price: "Check the Price on Amazon" },
    "havalance-farmhouse-coffee-table": { name: "Havalance Farmhouse Rectangular Coffee Table", description: "The Havalance rectangular coffee table is a masterclass in rustic sophistication.", image: "/assets/products/Havalance Farmhouse Rectangular Coffee Table.png", price: "Check the Price on Amazon" },
    "farmhouse-pier-shelves": { name: "Farmhouse Pier with 3 Adjustable Shelves", description: "Maximize your display space with the Farmhouse Pier.", image: "/assets/products/Farmhouse Pier with 3 Adjustable Shelves.png", price: "Check the Price on Amazon" },
    "french-country-distressed-server": { name: "French Country Distressed Dining Room Server", description: "Elegant and versatile, this French Country Distressed Server.", image: "/assets/products/French Country Distressed Dining Room Server.png", price: "Check the Price on Amazon" },
    "vintage-rose-wall-decor": { name: "Vintage Rose Wall Decor - 12x16 Coquette Wall Decor", description: "Complete your cottagecore aesthetic with this Vintage Rose Wall Decor.", image: "/assets/products/Vintage Rose Wall Decor - 12x16 Coquette Wall Decor.png", price: "Check the Price on Amazon" },
    "industrial-entertainment-center-01": { name: "Modern Entertainment Center with Large Storage Cabinet", description: "This sleek and spacious entertainment center offers a perfect blend of modern design.", image: "/assets/products/Entertainment Center with Large Storage Cabinet for Living Room.png", price: "Check the Price on Amazon" },
    "industrial-display-cabinet-01": { name: "Display Cabinet with 4 Glass Doors and Internal Lighting", description: "Showcase your favorite decor with this elegant display cabinet.", image: "/assets/products/Display Cabinet with 4 Glass Doors and Lights.png", price: "Check the Price on Amazon" },
    "industrial-floor-lamp-01": { name: "Modern Minimalist Floor Lamp with Beige Fabric Shade", description: "Add soft, ambient warmth to your room with this sophisticated floor lamp.", image: "/assets/products/Modern Floor Lamp Simple Design with Beige Shade, Floor Lamps for Living Room.png", price: "Check the Price on Amazon" },
    "mid-century-sideboard-01": { name: "Mid Century Modern Sideboard Buffet Cabinet", description: "Elevate your home storage with this Mid Century Modern Sideboard Buffet Cabinet.", image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png", price: "Check the Price on Amazon" },
    "valleys-landscape-art-01": { name: "Valleys Landscape Wilderness Impressionism Traditional Wall Art", description: "Bring the serene beauty of the wilderness into your living room.", image: "/assets/products/Valleys Landscape Wilderness Impressionism Traditional for Living Room.png", price: "Check the Price on Amazon" },
    "modern-wooden-coffee-table-01": { name: "Modern Wooden Coffee Table with Solid Wood Veneer", description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer.", image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png", price: "Check the Price on Amazon" },
    "mid-century-accent-chair-01": { name: "Mid-Century Accent Chair Modern Retro Leisure Chair", description: "Add a touch of retro charm to your living space.", image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png", price: "Check the Price on Amazon" },
    "dark-academia-coffee-table": { name: "Modern Wooden Coffee Table with Solid Wood Veneer", description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer.", image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png", price: "Check the Price on Amazon" },
    "dark-academia-wall-art": { name: "Valleys Landscape Wilderness Impressionism Traditional Wall Art", description: "Bring the serene beauty of the wilderness into your living room.", image: "/assets/products/Valleys Landscape Wilderness Impressionism Traditional for Living Room.png", price: "Check the Price on Amazon" },
    "dark-academia-sofa": { name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests", description: "Experience ultimate comfort and style with this modern sofa.", image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png", price: "Check the Price on Amazon" },
    "dark-academia-chair": { name: "Mid-Century Accent Chair Modern Retro Leisure Chair", description: "Add a touch of retro charm to your living space.", image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png", price: "Check the Price on Amazon" },
    "dark-academia-floor-lamp": { name: "Modern Floor Lamp Simple Design with Beige Shade", description: "Add soft, ambient warmth to your room with this sophisticated floor lamp.", image: "/assets/products/Modern Floor Lamp Simple Design with Beige Shade, Floor Lamps for Living Room.png", price: "Check the Price on Amazon" },
    "modern-wooden-coffee-table-library": { name: "Modern Wooden Coffee Table with Solid Wood Veneer", description: "This Modern Wooden Coffee Table features a high-quality solid wood veneer.", image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png", price: "Check the Price on Amazon" },
    "modern-couch-sofa-library": { name: "Modern Couch and Sofa, Comfy Armrests and Seats and Backrests", description: "Experience ultimate comfort and style with this modern sofa.", image: "/assets/products/Modern Couch and Sofa, Comfy Armrests and Seats and Backrests.png", price: "Check the Price on Amazon" },
    "mid-century-sideboard-library": { name: "Mid Century Modern Sideboard Buffet Cabinet", description: "Elevate your home storage with this Mid Century Modern Sideboard Buffet Cabinet.", image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png", price: "Check the Price on Amazon" },
    "mid-century-accent-chair-library": { name: "Mid-Century Accent Chair Modern Retro Leisure Chair", description: "Add a touch of retro charm to your living space.", image: "/assets/products/Mid-Century Accent Chair Modern Retro Leisure Chair.png", price: "Check the Price on Amazon" },
    "arched-pantry-cabinet-library": { name: "Arched Pantry Cabinet", description: "Add architectural interest and functional storage with this Arched Pantry Cabinet.", image: "/assets/products/Arched Pantry Cabinet.png", price: "Check the Price on Amazon" },
    "modern-wooden-coffee-table-da-2": { name: "Modern Wooden Coffee Table with Solid Wood Veneer", description: "Elevate your living space with this sophisticated modern wooden coffee table.", image: "/assets/products/Modern Wooden Coffee Table with Solid Wood Veneered.png", price: "Check the Price on Amazon" },
    "mid-century-sideboard-da-2": { name: "Mid Century Modern Sideboard Buffet Cabinet", description: "This Mid Century Modern Sideboard Buffet Cabinet blends timeless design with practical storage.", image: "/assets/products/Mid Century Modern Sideboard Buffet Cabinet.png", price: "Check the Price on Amazon" },
    "display-cabinet-da-2": { name: "Display Cabinet with 4 Glass Doors and Lights", description: "Showcase your most treasured curiosities with this stunning display cabinet.", image: "/assets/products/Display Cabinet with 4 Glass Doors and Lights.png", price: "Check the Price on Amazon" },
    "vintage-sofa-fcc": { name: "Vintage Sofa with Accent Pillows", description: "Experience the ultimate in traditional luxury with this vintage-inspired cottage sofa.", image: "/assets/products/Vintage Sofa with Accent Pillows.png", price: "Check the Price on Amazon" },
    "farmhouse-coffee-table-fcc": { name: "Havalance Farmhouse Rectangular Coffee Table", description: "The Havalance rectangular coffee table brings architectural interest to your living space.", image: "/assets/products/Havalance Farmhouse Rectangular Coffee Table.png", price: "Check the Price on Amazon" },
    "distressed-server-fcc": { name: "French Country Distressed Dining Room Server", description: "Elevate your storage solutions with this exquisite French Country Distressed Server.", image: "/assets/products/French Country Distressed Dining Room Server.png", price: "Check the Price on Amazon" },
    "farmhouse-pier-fcc": { name: "Farmhouse Pier with 3 Adjustable Shelves", description: "Maximize your vertical display with the Farmhouse Pier.", image: "/assets/products/Farmhouse Pier with 3 Adjustable Shelves.png", price: "Check the Price on Amazon" },
    "vintage-rose-decor-fcc": { name: "Vintage Rose Wall Decor - 12x16 Coquette Wall Decor", description: "Add a romantic final touch to your walls with this charming Vintage Rose Wall Decor.", image: "/assets/products/Vintage Rose Wall Decor - 12x16 Coquette Wall Decor.png", price: "Check the Price on Amazon" },
    "vanity-desk-01": { name: "Makeup Vanity Desk with Lighted Mirror & Power Strip", description: "This premium makeup vanity desk combines vintage charm with contemporary utility.", image: "/assets/products/Makeup Vanity Desk with Lighted Mirror & Power Strip.jpg", price: "Check the Price on Amazon" },
    "nolita-leather-sofa-01": { name: "POLY & BARK Nolita 85\" Leather Sofa", description: "This premium 85-inch sofa is crafted from top-tier Italian leather and features feather-down comfort toppers.", image: "https://www.polyandbark.com/cdn/shop/products/LR-681-TAN_2_ae214d9f-0b3a-496d-beda-ddc3ac0c7a3d_1500x.jpg", price: "Check the Price on Amazon" },
    "livelyglow-vanity-01": { name: "LIVELYGLOW Makeup Vanity Desk with Lighted Mirror & Power Outlet", description: "This comprehensive vanity set combines modern aesthetics with practical utility.", image: "https://m.media-amazon.com/images/P/B0GG9C164R.01._SCLZZZZZZZ_SX1500_.jpg", price: "Check the Price on Amazon" },
};

const inspirations: Record<string, { name: string; description: string; image: string }> = {
    "serene-arched-mirror-living-room": { name: "Luxe Minimalist Arched Mirror Living Room", description: "A bright and airy space featuring a statement gold mirror, modular comfort, and oak floating shelving.", image: "/assets/inspirations/living-room-main.jpg" },
    "bohemian-serenity-living-room": { name: "Bohemian Serenity Living Room", description: "A harmonious blend of earthy tones and organic textures.", image: "/assets/products/IMG_20260204_170437.jpg" },
    "organic-bohemian-living-room": { name: "Eclectic Organic Bohemian Living Room Inspiration", description: "Transform your home with this eclectic organic bohemian living room design.", image: "/assets/products/IMG_20260204_151258.jpg" },
    "sunlit-minimalist-living-room": { name: "Sunlit Minimalist Living Space", description: "Experience the essence of tranquility with this sun-drenched minimalist living room.", image: "/assets/products/Sunlit Minimalist Living Space.jpg" },
    "gold-ornate-mirror-decor-inspiration": { name: "Vintage Gold Ornate Mirror Living Room Inspiration", description: "Embrace the timeless elegance of country-style living.", image: "/assets/products/Gold Ornate Mirror Decor Inspiration.jpg" },
    "cozy-white-sectional-living-room": { name: "Cozy White Sectional Living Room Decor", description: "A serene and cozy living room featuring a plush white sectional sofa.", image: "/assets/products/Cozy White Sectional Living Room Decor.jpg" },
    "neutral-monochromatic-living-room": { name: "Neutral Monochromatic Bohemian Living Room", description: "Achieve a serene and sophisticated aesthetic with this neutral monochromatic living room.", image: "/assets/products/Neutral monochromatic living room.jpg" },
    "moody-organic-modern-living-room": { name: "Moody Organic Modern Living Room Inspiration", description: "Transform your space with this sophisticated moody organic modern living room.", image: "/assets/products/Moody organic modern living room.jpg" },
    "french-country-cottage-decor": { name: "French Country Cottagecore Living Room", description: "Transport yourself to the rolling hills of Provence with this enchanting French Country Cottagecore living room.", image: "/assets/products/French Country cottage decor.jpg" },
    "moody-industrial-living-room-inspiration": { name: "Moody Industrial Living Room Inspiration", description: "Elevate your home with this sophisticated moody industrial living room design.", image: "/assets/products/Moody Industrial Living Room Inspo.jpg" },
    "minimalist-neutral-living-room-inspiration": { name: "Minimalist Neutral Living Room Inspiration", description: "Embrace the beauty of simplicity with this minimalist neutral living room.", image: "/assets/products/Minimalist neutral interior design.jpg" },
    "dark-academia-living-room-idea": { name: "Dark Academia Living Room Inspiration", description: "Step into a world of intellectual mystery with this Dark Academia living room.", image: "/assets/products/Dark Academia living room idea.jpg" },
    "moody-library-room-inspiration": { name: "Moody Dark Academia Library Inspiration", description: "Immerse yourself in the ultimate dark academia aesthetic with this moody library room.", image: "/assets/products/Moody library room inspiration.jpg" },
    "dark-academia-room-decor": { name: "Dark Academia Room Decor Inspiration", description: "Immerse yourself in the intellectual and mysterious charm of Dark Academia.", image: "/assets/products/Dark Academia room decor.jpg" },
    "french-country-cottagecore-decor": { name: "French Country Cottagecore Decor", description: "Discover the perfect blend of provincial elegance and rustic comfort.", image: "/assets/products/French country cottagecore decor.jpg" },
    "vintage-makeup-vanity-desk": { name: "Vintage Makeup Vanity Desk with Lighted Mirror", description: "Elegant and functional, this vintage-inspired makeup vanity desk features a large lighted mirror.", image: "/assets/products/Makeup Vanity Desk with Lighted Mirror & Power Strip.jpg" },
    "nolita-leather-sofa": { name: "POLY & BARK Nolita Leather Sofa", description: "Experience the perfect blend of modern sophistication and timeless comfort with the Nolita Leather Sofa.", image: "https://www.polyandbark.com/cdn/shop/files/LR-681-TAN-NolitaSofainCognacTan-Lifestyle1-2890x1500px_1500x.jpg" },
    "livelyglow-makeup-vanity-desk": { name: "LIVELYGLOW Makeup Vanity Desk Set with Lighted Mirror", description: "Elevate your beauty routine with this sleek and functional makeup vanity desk.", image: "https://m.media-amazon.com/images/P/B0GG9C164R.01._SCLZZZZZZZ_SX1500_.jpg" },
};

function cleanPrice(price?: string): string {
    if (!price) return "";
    return price.replace(/[^0-9.]/g, "");
}

function encodeHtml(str: string): string {
    return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

function buildProductMetaTags(productId: string): string | null {
    const product = products[productId];
    if (!product) return null;

    const fullTitle = `${product.name} | ${SITE_NAME}`;
    const imageUrl = product.image.startsWith('http') ? product.image : `${SITE_URL}${product.image}`;
    const pageUrl = `${SITE_URL}/product/${productId}`;
    const numericPrice = cleanPrice(product.price);
    const hasNumericPrice = numericPrice.length > 0;

    const productJsonLd: {
        "@context": string;
        "@type": string;
        name: string;
        image: string;
        description: string;
        brand: { "@type": string; name: string };
        offers?: {
            "@type": string;
            url: string;
            priceCurrency: string;
            price: string;
            availability: string;
            itemCondition: string;
        };
    } = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": imageUrl,
        "description": product.description,
        "brand": { "@type": "Brand", "name": SITE_NAME },
    };

    if (hasNumericPrice) {
        productJsonLd.offers = {
            "@type": "Offer",
            "url": pageUrl,
            "priceCurrency": "USD",
            "price": numericPrice,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition"
        };
    }

    const jsonLd = JSON.stringify(productJsonLd);
    const priceMetaTags = hasNumericPrice ? `
    <meta property="og:price:amount" content="${numericPrice}" />
    <meta property="og:price:currency" content="USD" />
    <meta property="product:price:amount" content="${numericPrice}" />
    <meta property="product:price:currency" content="USD" />` : "";

    return `
    <title>${encodeHtml(fullTitle)}</title>
    <meta name="description" content="${encodeHtml(product.description)}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${encodeHtml(fullTitle)}" />
    <meta property="og:description" content="${encodeHtml(product.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:type" content="og:product" />
    ${priceMetaTags}
    <meta property="product:availability" content="instock" />
    <meta property="product:brand" content="${SITE_NAME}" />
    <meta property="product:condition" content="new" />
    <meta property="product:retailer_item_id" content="${productId}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${encodeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${encodeHtml(product.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <script type="application/ld+json">${jsonLd}</script>`;
}

function buildInspirationMetaTags(slug: string): string | null {
    const inspiration = inspirations[slug];
    if (!inspiration) return null;

    const fullTitle = `${inspiration.name} | ${SITE_NAME}`;
    const imageUrl = inspiration.image.startsWith('http') ? inspiration.image : `${SITE_URL}${inspiration.image}`;
    const pageUrl = `${SITE_URL}/inspiration/${slug}`;

    const jsonLd = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": inspiration.name,
        "image": [imageUrl],
        "description": inspiration.description,
        "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
        "publisher": { "@type": "Organization", "name": SITE_NAME },
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl }
    });

    return `
    <title>${encodeHtml(fullTitle)}</title>
    <meta name="description" content="${encodeHtml(inspiration.description)}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${encodeHtml(fullTitle)}" />
    <meta property="og:description" content="${encodeHtml(inspiration.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:type" content="article" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${encodeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${encodeHtml(inspiration.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
    <script type="application/ld+json">${jsonLd}</script>`;
}

export const onRequest: PagesFunction = async (context) => {
    const url = new URL(context.request.url);
    const path = url.pathname;

    // Only intercept product and inspiration routes
    const productMatch = path.match(/^\/product\/([^/]+)\/?$/);
    const inspirationMatch = path.match(/^\/inspiration\/([^/]+)\/?$/);

    if (!productMatch && !inspirationMatch) {
        // Pass through to the static asset / SPA
        return await context.next();
    }

    // Get the original response (the SPA index.html)
    const response = await context.next();
    const html = await response.text();

    let metaTags: string | null = null;

    if (productMatch) {
        metaTags = buildProductMetaTags(productMatch[1]);
    } else if (inspirationMatch) {
        metaTags = buildInspirationMetaTags(inspirationMatch[1]);
    }

    if (!metaTags) {
        // Product/Inspiration not found, return original response
        return new Response(html, {
            status: response.status,
            headers: response.headers,
        });
    }

    // Inject meta tags into the <head> section, replacing the existing <title> tag
    const modifiedHtml = html.replace(
        /<title>[^<]*<\/title>/,
        metaTags
    );

    return new Response(modifiedHtml, {
        status: response.status,
        headers: {
            ...Object.fromEntries(response.headers.entries()),
            "content-type": "text/html;charset=UTF-8",
        },
    });
};
