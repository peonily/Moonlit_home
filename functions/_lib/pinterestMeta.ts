import { inspirations } from "../../src/data/inspirations";
import { PIN_PRICE_MAP } from "./pinPriceMap";

const SITE_URL = "https://moonlit-home-decor.com";
const SITE_NAME = "Moonlit Home Decor";

type ProductLike = {
    id: string;
    name: string;
    description: string;
    link: string;
    image: string;
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

function cleanPrice(price?: string): string {
    if (!price) return "";
    return price.replace(/[^0-9.]/g, "");
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
    const mappedPrice = PIN_PRICE_MAP[product.id]?.amount;
    const mappedCurrency = PIN_PRICE_MAP[product.id]?.currency;
    const numericPrice = cleanPrice(mappedPrice || product.pinPrice || product.price);
    const priceCurrency = mappedCurrency || product.pinCurrency || "USD";
    const availability = product.pinAvailability || "instock";
    const schemaAvailability = availability === "out-of-stock"
        ? "https://schema.org/OutOfStock"
        : "https://schema.org/InStock";
    const hasNumericPrice = numericPrice.length > 0;

    const productJsonLd: {
        "@context": string;
        "@type": string;
        name: string;
        image: string[];
        sku: string;
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
        "image": [imageUrl],
        "sku": product.id,
        "description": product.description,
        "brand": { "@type": "Brand", "name": SITE_NAME },
    };

    if (hasNumericPrice) {
        productJsonLd.offers = {
            "@type": "Offer",
            "url": offerUrl,
            "priceCurrency": priceCurrency,
            "price": numericPrice,
            "availability": schemaAvailability,
            "itemCondition": "https://schema.org/NewCondition",
        };
    }

    const priceMetaTags = hasNumericPrice
        ? `
    <meta property="og:price:amount" content="${numericPrice}" />
    <meta property="og:price:currency" content="${priceCurrency}" />
    <meta property="product:price:amount" content="${numericPrice}" />
    <meta property="product:price:currency" content="${priceCurrency}" />`
        : "";

    return `
    <title>${encodeHtml(fullTitle)}</title>
    <meta name="description" content="${encodeHtml(product.description)}" />
    <link rel="canonical" href="${pageUrl}" />
    <meta property="og:site_name" content="${SITE_NAME}" />
    <meta property="og:title" content="${encodeHtml(fullTitle)}" />
    <meta property="og:description" content="${encodeHtml(product.description)}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${encodeHtml(product.name)}" />
    <meta property="og:url" content="${pageUrl}" />
    <meta property="og:type" content="product" />
    ${priceMetaTags}
    <meta property="product:availability" content="${availability}" />
    <meta property="og:availability" content="${availability}" />
    <meta property="product:brand" content="${SITE_NAME}" />
    <meta property="product:condition" content="new" />
    <meta property="product:retailer_item_id" content="${product.id}" />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${encodeHtml(fullTitle)}" />
    <meta name="twitter:description" content="${encodeHtml(product.description)}" />
    <meta name="twitter:image" content="${imageUrl}" />
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
