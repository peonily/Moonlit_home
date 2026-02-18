import { inspirations } from "../../src/data/inspirations";
import { PIN_PRICE_MAP } from "./pinPriceMap";

const SITE_URL = "https://moonlit-home-decor.com";
const SITE_NAME = "Moonlit Home Decor";
const SITE_WORDMARK = "MOONLIT HOME DECOR";
const PINTEREST_DOMAIN_VERIFY = "578821701055a4d83b23eb2fd7377eb7";

type ProductLike = {
    id: string;
    name: string;
    description: string;
    link: string;
    image: string;
    price?: string;
    pinPrice?: string;
    pinCurrency?: string;
};

type InspirationLike = {
    slug: string;
    name: string;
    description: string;
    image: string;
    categories: string[];
    products: ProductLike[];
};

const inspirationIndex = new Map<string, InspirationLike>();
const productIndex = new Map<string, ProductLike>();
const productParentMeta = new Map<string, { slug: string; categories: string[] }>();

for (const inspiration of inspirations as InspirationLike[]) {
    inspirationIndex.set(inspiration.slug, inspiration);
    for (const product of inspiration.products) {
        productIndex.set(product.id, product);
        productParentMeta.set(product.id, {
            slug: inspiration.slug,
            categories: inspiration.categories || [],
        });
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

function humanizeCategory(slug: string): string {
    if (!slug) return "Curated";
    return slug
        .split("-")
        .map((chunk) => chunk.charAt(0).toUpperCase() + chunk.slice(1))
        .join(" ");
}

function summarize(text: string, maxLength: number): string {
    const cleaned = text.replace(/\s+/g, " ").trim();
    if (cleaned.length <= maxLength) return cleaned;
    return `${cleaned.slice(0, maxLength - 1).trim()}...`;
}

function buildBullets(description: string): string[] {
    const fallback = [
        "Curated to match the look and feel of this room setup.",
        "Designed to be practical, stylish, and easy to pair with existing decor.",
        "Check Amazon for latest pricing, shipping, and availability before ordering.",
    ];

    const sentences = description
        .replace(/\s+/g, " ")
        .trim()
        .split(/(?<=[.!?])\s+/)
        .map((part) => part.trim())
        .filter(Boolean)
        .slice(0, 3)
        .map((part) => summarize(part, 180));

    if (sentences.length === 0) return fallback;
    if (sentences.length === 1) return [sentences[0], fallback[1], fallback[2]];
    if (sentences.length === 2) return [sentences[0], sentences[1], fallback[2]];
    return sentences;
}

function guessBrand(productName: string): string {
    const firstToken = productName.split(/\s+/)[0] || SITE_NAME;
    const sanitized = firstToken.replace(/[^A-Za-z0-9&'-]/g, "");
    return sanitized || SITE_NAME;
}

function buildProductMetaTags(product: ProductLike, pageUrl: string): string {
    const fullTitle = `${product.name} | ${SITE_NAME}`;
    const imageUrl = toAbsoluteImageUrl(product.image);
    const offerUrl = product.link || pageUrl;
    const mappedPrice = PIN_PRICE_MAP[product.id]?.amount;
    const mappedCurrency = PIN_PRICE_MAP[product.id]?.currency;
    const numericPrice = cleanPrice(mappedPrice || product.pinPrice || product.price);
    const priceCurrency = mappedCurrency || product.pinCurrency || "USD";
    const hasNumericPrice = numericPrice.length > 0;

    const productJsonLd: {
        "@context": string;
        "@type": string;
        name: string;
        image: string[];
        sku: string;
        description: string;
        brand: { "@type": string; name: string };
        offers: {
            "@type": string;
            url: string;
            priceCurrency: string;
            availability: string;
            itemCondition: string;
            price?: string;
        };
    } = {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": product.name,
        "image": [imageUrl],
        "sku": product.id,
        "description": product.description,
        "brand": { "@type": "Brand", "name": guessBrand(product.name) },
        "offers": {
            "@type": "Offer",
            "url": offerUrl,
            "priceCurrency": priceCurrency,
            "availability": "https://schema.org/InStock",
            "itemCondition": "https://schema.org/NewCondition",
        },
    };

    if (hasNumericPrice) {
        productJsonLd.offers.price = numericPrice;
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
    <meta property="product:availability" content="instock" />
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

function buildProductLandingHtml(
    product: ProductLike,
    pageUrl: string,
    backHref: string,
    backLabel: string
): string {
    const imageUrl = toAbsoluteImageUrl(product.image);
    const mappedPrice = PIN_PRICE_MAP[product.id]?.amount;
    const mappedCurrency = PIN_PRICE_MAP[product.id]?.currency;
    const numericPrice = cleanPrice(mappedPrice || product.pinPrice || product.price);
    const priceCurrency = mappedCurrency || product.pinCurrency || "USD";
    const hasNumericPrice = numericPrice.length > 0;
    const safeName = encodeHtml(product.name);
    const safeDescription = encodeHtml(summarize(product.description, 200));
    const safeLongDescription = encodeHtml(summarize(product.description, 320));
    const bullets = buildBullets(product.description).map((item) => encodeHtml(item));
    const sku = encodeHtml(product.id);
    const brand = encodeHtml(guessBrand(product.name));
    const safeBackLabel = encodeHtml(backLabel);

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
            priceCurrency: string;
            availability: string;
            price?: string;
        };
    } = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": product.name,
        "image": [imageUrl],
        "description": product.description,
        "sku": product.id,
        "brand": { "@type": "Brand", "name": guessBrand(product.name) },
        "offers": {
            "@type": "Offer",
            "url": product.link,
            "priceCurrency": priceCurrency,
            "availability": "https://schema.org/InStock",
        },
    };

    if (hasNumericPrice) {
        productJsonLd.offers.price = numericPrice;
    }

    const priceMeta = hasNumericPrice
        ? `
    <meta property="product:price:amount" content="${numericPrice}" />
    <meta property="product:price:currency" content="${priceCurrency}" />`
        : "";

    return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    <meta name="p:domain_verify" content="${PINTEREST_DOMAIN_VERIFY}" />
    <meta name="description" content="Affiliate pick: ${safeName}. ${safeDescription}" />

    <meta property="og:type" content="product" />
    <meta property="og:site_name" content="${SITE_WORDMARK}" />
    <meta property="og:title" content="${safeName} | ${SITE_NAME}" />
    <meta property="og:description" content="${safeDescription}" />
    <meta property="og:image" content="${imageUrl}" />
    <meta property="og:image:alt" content="${safeName}" />${priceMeta}

    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${safeName} | ${SITE_NAME}" />
    <meta name="twitter:description" content="${safeDescription}" />
    <meta name="twitter:image" content="${imageUrl}" />

    <link rel="canonical" href="${pageUrl}" />
    <script type="application/ld+json">${JSON.stringify(productJsonLd)}</script>

    <title>${SITE_WORDMARK} | ${safeName}</title>

    <link rel="icon" href="/static/favicon.svg?v=20260214" type="image/svg+xml" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600..900&family=Space+Grotesk:wght@400..700&display=swap"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="/static/style.css?v=20260215" />
  </head>
  <body>
    <div class="bg" aria-hidden="true"></div>

    <header class="top">
      <a class="brand" href="/" aria-label="${SITE_WORDMARK} home">
        <span class="brand__mark" aria-hidden="true">MH</span>
        <span class="brand__word">${SITE_WORDMARK}</span>
      </a>
      <nav class="nav" aria-label="Primary">
        <a class="nav__link" href="/">Home</a>
        <a class="nav__link nav__link--active" href="/collections/amazon-finds">Decor Picks</a>
        <a class="nav__link" href="/about">About</a>
      </nav>
    </header>

    <main class="shell">
      <section class="page">
        <div class="pageHead">
          <div class="pageHead__kicker">Decor Pick</div>
          <h1 class="pageHead__title">${safeName}</h1>
          <p class="pageHead__sub">${safeLongDescription}</p>
          <div class="notice">
            <span class="notice__k">Note</span>
            <span class="notice__v">
              This page contains affiliate links. If you buy through them, we may earn a commission at no extra cost
              to you.
            </span>
          </div>
        </div>

        <section class="pickDetail" aria-label="Product details">
          <div class="pickDetail__media">
            <img
              class="pickDetail__img"
              src="${imageUrl}"
              alt="${safeName}"
              loading="lazy"
              decoding="async"
            />
          </div>
          <div class="pickDetail__panel">
            <div class="pickDetail__priceRow">
              <div class="pickDetail__price">Check Latest Price of Amazon</div>
              <div class="pickDetail__meta">SKU ${sku}</div>
            </div>

            <ul class="pickDetail__bullets">
              <li>${bullets[0]}</li>
              <li>${bullets[1]}</li>
              <li>${bullets[2]}</li>
            </ul>

            <div class="actions actions--spread">
              <a class="btn" href="${backHref}">Back to ${safeBackLabel} picks</a>
              <a
                class="btn btn--primary"
                href="${product.link}"
                target="_blank"
                rel="noopener noreferrer nofollow sponsored"
              >
                Check Latest Price of Amazon
              </a>
            </div>

            <div class="finePrint">Availability and pricing can change at any time. Check Amazon for the latest details before buying.</div>
          </div>
        </section>
      </section>

      <section class="footer">
        <div class="footer__left">
          <div class="footBrand">${SITE_WORDMARK}</div>
          <div class="footNote">Curated picks and interior inspiration.</div>
        </div>
        <div class="footer__right">
          <a class="nav__link" href="/privacy">Privacy</a>
        </div>
      </section>
    </main>
  </body>
</html>`;
}

export function buildProductLandingHtmlById(productId: string): string | null {
    const product = productIndex.get(productId);
    if (!product) return null;

    const parent = productParentMeta.get(productId);
    const primaryCategory = parent?.categories?.[0] || "amazon-finds";
    const backHref = `/collections/${primaryCategory}`;
    const backLabel = humanizeCategory(primaryCategory);

    return buildProductLandingHtml(product, `${SITE_URL}/product/${productId}`, backHref, backLabel);
}

export function buildProductLandingHtmlByInspirationSlug(slug: string): string | null {
    const inspiration = inspirationIndex.get(slug);
    if (!inspiration || inspiration.products.length !== 1) {
        return null;
    }

    const product = inspiration.products[0];
    const primaryCategory = inspiration.categories?.[0] || "amazon-finds";
    const backHref = `/collections/${primaryCategory}`;
    const backLabel = humanizeCategory(primaryCategory);

    return buildProductLandingHtml(product, `${SITE_URL}/inspiration/${slug}`, backHref, backLabel);
}

export function buildProductMetaTagsById(productId: string): string | null {
    const product = productIndex.get(productId);
    if (!product) return null;
    return buildProductMetaTags(product, `${SITE_URL}/product/${productId}`);
}

export function buildInspirationMetaTagsBySlug(slug: string): string | null {
    const inspiration = inspirationIndex.get(slug);
    if (!inspiration) return null;

    if (inspiration.products.length === 1) {
        return buildProductMetaTags(inspiration.products[0], `${SITE_URL}/inspiration/${slug}`);
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
