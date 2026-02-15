import { Helmet } from "react-helmet-async";

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
    type?: "website" | "article" | "product";
    // Product specific props
    price?: string;
    currency?: string;
    availability?: "instock" | "out-of-stock";
}

export const SEO = ({
    title,
    description,
    image,
    url,
    type = "website",
    price,
    currency = "USD",
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

    // Function to clean price string for meta tags (e.g., "$1,299" -> "1299")
    const cleanPrice = (p?: string) => {
        if (!p) return "";
        return p.replace(/[^0-9.]/g, "");
    };

    const numericPrice = cleanPrice(price);

    // Schema.org JSON-LD
    const getJsonLd = () => {
        switch (type) {
            case "product":
                return {
                    "@context": "https://schema.org/",
                    "@type": "Product",
                    "name": title || siteName,
                    "image": fullImageUrl,
                    "description": description,
                    "brand": {
                        "@type": "Brand",
                        "name": siteName
                    },
                    "offers": {
                        "@type": "Offer",
                        "url": canonicalUrl,
                        "priceCurrency": currency,
                        "price": numericPrice || "0",
                        "availability": availability === "instock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock",
                        "itemCondition": "https://schema.org/NewCondition"
                    }
                };
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
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            {fullImageUrl && <meta property="og:image" content={fullImageUrl} />}
            <meta property="og:url" content={canonicalUrl} />

            {/* Pinterest Product Specifics */}
            {type === "product" ? (
                <>
                    <meta property="og:type" content="og:product" />
                    <meta property="product:price:amount" content={numericPrice || "0"} />
                    <meta property="product:price:currency" content={currency} />
                    <meta property="product:availability" content={availability} />
                    <meta property="og:availability" content={availability} />

                    {/* Shoppable Pin specific tags */}
                    <meta property="og:price:amount" content={numericPrice || "0"} />
                    <meta property="og:price:currency" content={currency} />
                    <meta property="product:brand" content={siteName} />
                    <meta property="product:condition" content="new" />
                    <meta property="product:retailer_item_id" content={title?.toLowerCase().replace(/\s+/g, '-') || "product-id"} />
                </>
            ) : (
                <meta property="og:type" content={type} />
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
