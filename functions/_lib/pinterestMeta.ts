import { inspirations } from "../../src/data/inspirations";

const SITE_URL = "https://moonlit-home-decor.com";
const SITE_NAME = "Moonlit Home Decor";

type ProductLike = {
    id: string;
    name: string;
    description: string;
    link: string;
    image: string;
    sku?: string;
    brand?: string;
    price?: string;
    pinPrice?: string;
    pinCurrency?: string;
    pinAvailability?: "instock" | "out-of-stock";
};

type InspirationLike = {
    slug: string;
    name: string;
    description: string;
    image: string;
    products: ProductLike[];
};

const inspirationIndex = new Map<string, InspirationLike>();
const productIndex = new Map<string, ProductLike>();

for (const inspiration of inspirations as InspirationLike[]) {
    inspirationIndex.set(inspiration.slug, inspiration);
    for (const product of inspiration.products) {
        productIndex.set(product.id, product);
    }
}

function encodeHtml(str: string): string {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function toAbsoluteImageUrl(image: string): string {
    if (image.startsWith("http://") || image.startsWith("https://")) {
        return image;
    }
    return image.startsWith("/") ? `${SITE_URL}${image}` : `${SITE_URL}/${image}`;
}

function buildProductMetaTags(product: ProductLike, pageUrl: string): string {
    const fullTitle = `${product.name} | ${SITE_NAME}`;
    const imageUrl = toAbsoluteImageUrl(product.image);
    const offerUrl = product.link || pageUrl;
    const productSku = product.sku || product.id;
    const productBrand = product.brand || SITE_NAME;
    const availability = product.pinAvailability || "instock";
    const schemaAvailability = availability === "out-of-stock"
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock";

    const productJsonLd: {
        "@context": string;
        "@type": string;
        name: string;
        image: string[];
        description: string;
        sku: string;
        brand: { "@type": string; name: string };
        offers: {
            "@type": string;
            url: string;
            availability: string;
        };
    } = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [imageUrl],
        "description": product.description,
        "sku": productSku,
        "brand": { "@type": "Brand", "name": productBrand },
        "offers": {
            "@type": "Offer",
            "url": offerUrl,
            "availability": schemaAvailability,
        },
    };

    return `
    <title>${encodeHtml(fullTitle)}</title>
    <meta name="description" content="${encodeHtml(product.description)}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${encodeHtml(fullTitle)}" />
    <meta property="og:description" content="${encodeHtml(product.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${encodeHtml(product.name)}" />
    <meta property="product:availability" content="${availability}" />
    <script type="application/ld+json">${JSON.stringify(productJsonLd)}</script>`;
}

function buildArticleMetaTags(inspiration: InspirationLike, pageUrl: string): string {
    const fullTitle = `${inspiration.name} | ${SITE_NAME}`;
    const imageUrl = toAbsoluteImageUrl(inspiration.image);

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": inspiration.name,
        "image": [imageUrl],
        "description": inspiration.description,
        "author": { "@type": "Organization", "name": SITE_NAME, "url": SITE_URL },
        "publisher": { "@type": "Organization", "name": SITE_NAME },
        "mainEntityOfPage": { "@type": "WebPage", "@id": pageUrl },
    };

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
    <script type="application/ld+json">${JSON.stringify(articleJsonLd)}</script>`;
}

export function buildProductMetaTagsById(productId: string): string | null {
    const product = productIndex.get(productId);
    if (!product) return null;
    return buildProductMetaTags(product, `${SITE_URL}/product/${productId}`);
}

export function buildInspirationMetaTagsBySlug(slug: string): string | null {
    const inspiration = inspirationIndex.get(slug);
    if (!inspiration) return null;

    const primaryProduct = inspiration.products[0];
    if (primaryProduct) {
        return buildProductMetaTags(primaryProduct, `${SITE_URL}/inspiration/${slug}`);
    }

    return buildArticleMetaTags(inspiration, `${SITE_URL}/inspiration/${slug}`);
}

export function injectMetaIntoHtml(html: string, metaTags: string): string {
    const titleRegex = /<title>[^<]*<\/title>/i;
    if (titleRegex.test(html)) {
        return html.replace(titleRegex, metaTags);
    }
    return html.replace(/<head>/i, `<head>${metaTags}`);
}
