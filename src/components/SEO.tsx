import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article" | "product";
    // Product specific props
    productId?: string;
    sku?: string;
    brand?: string;
    productLink?: string;
    price?: string;
    pinPrice?: string;
    currency?: string;
    availability?: "instock" | "out-of-stock";
}

export const SEO = ({
    title,
    description,
    image,
    url,
    type = "website",
    productId,
    sku,
    brand,
    productLink,
    availability = "instock",
}: SEOProps) => {
    const siteName = "Moonlit Home Decor";
    const siteUrl = window.location.origin;
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const canonicalUrl = url || `${siteUrl}${window.location.pathname}`;

    // Ensure image URL is absolute for Pinterest/Google
    const fullImageUrl = image
        ? (image.startsWith('http') ? image : `${siteUrl}${image}`)
        : `${siteUrl}/og-image.png`;

    const retailerItemId = sku || productId || title?.toLowerCase().replace(/\s+/g, '-') || "product-id";
    const productBrand = brand || siteName;
    const offerUrl = productLink || canonicalUrl;

    // Schema.org JSON-LD
    const getJsonLd = () => {
        switch (type) {
            case "product": {
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
                        availability: string;
                    };
                } = {
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": title || siteName,
                    "image": [fullImageUrl],
                    "description": description || "",
                    "sku": retailerItemId,
                    "brand": {
                        "@type": "Brand",
                        "name": productBrand
                    },
                    "offers": {
                        "@type": "Offer",
                        "url": offerUrl,
                        "availability": availability === "instock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                    }
                };

                return productJsonLd;
            }
            case "article":
                return {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": title || siteName,
                    "image": [fullImageUrl],
                    "description": description,
                    "author": {
                        "@type": "Organization",
                        "name": siteName,
                        "url": siteUrl
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": siteName,
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${siteUrl}/logo.png`
                        }
                    },
                    "datePublished": "2024-01-01T00:00:00+00:00",
                    "mainEntityOfPage": {
                        "@type": "WebPage",
                        "@id": canonicalUrl
                    }
                };
            default:
                return {
                    "@context": "https://schema.org",
                    "@type": "WebSite",
                    "name": siteName,
                    "url": siteUrl,
                    "description": description
                };
        }
    };

    const jsonLd = getJsonLd();

    return (
        <Helmet>
            {/* Standard Meta Tags */}
            <title>{fullTitle}</title>
            {description && <meta name="description" content={description} />}
            <link rel="canonical" href={canonicalUrl} />

            {/* Open Graph Tags */}
            {type === "product" ? (
                <>
                    <meta property="og:type" content="product" />
                    <meta property="og:site_name" content={siteName} />
                    <meta property="og:title" content={fullTitle} />
                    {description && <meta property="og:description" content={description} />}
                    {fullImageUrl && <meta property="og:image" content={fullImageUrl} />}
                    {fullImageUrl && <meta property="og:image:alt" content={title || siteName} />}
                    <meta property="product:availability" content={availability} />
                </>
            ) : (
                <>
                    <meta property="og:site_name" content={siteName} />
                    <meta property="og:title" content={fullTitle} />
                    {description && <meta property="og:description" content={description} />}
                    {fullImageUrl && <meta property="og:image" content={fullImageUrl} />}
                    {fullImageUrl && <meta property="og:image:alt" content={title || siteName} />}
                    <meta property="og:url" content={canonicalUrl} />
                    <meta property="og:type" content={type} />
                </>
            )}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            {fullImageUrl && <meta name="twitter:image" content={fullImageUrl} />}

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};
