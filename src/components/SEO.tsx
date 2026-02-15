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
    const fullTitle = title ? `${title} | ${siteName}` : siteName;
    const canonicalUrl = url || window.location.href;

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
                    "image": image,
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
                        "availability": availability === "instock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
                    }
                };
            case "article":
                return {
                    "@context": "https://schema.org",
                    "@type": "Article",
                    "headline": title || siteName,
                    "image": [image],
                    "description": description,
                    "author": {
                        "@type": "Organization",
                        "name": siteName,
                        "url": window.location.origin
                    },
                    "publisher": {
                        "@type": "Organization",
                        "name": siteName,
                        "logo": {
                            "@type": "ImageObject",
                            "url": `${window.location.origin}/logo.png` // Fallback to a logo if exists
                        }
                    },
                    "datePublished": "2024-01-01T00:00:00+00:00", // Default or you could pass this as a prop
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
                    "url": window.location.origin,
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

            {/* Open Graph Tags (Pinterest uses high quality OG tags) */}
            <meta property="og:site_name" content={siteName} />
            <meta property="og:title" content={fullTitle} />
            {description && <meta property="og:description" content={description} />}
            {image && <meta property="og:image" content={image} />}
            <meta property="og:url" content={canonicalUrl} />
            <meta property="og:type" content={type === "product" ? "og:product" : type} />

            {/* Pinterest Rich Pin Product Tags */}
            {type === "product" && (
                <>
                    {numericPrice && <meta property="product:price:amount" content={numericPrice} />}
                    <meta property="product:price:currency" content={currency} />
                    <meta property="product:availability" content={availability} />
                </>
            )}

            {/* Twitter Card Tags */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={fullTitle} />
            {description && <meta name="twitter:description" content={description} />}
            {image && <meta name="twitter:image" content={image} />}

            {/* JSON-LD */}
            <script type="application/ld+json">
                {JSON.stringify(jsonLd)}
            </script>
        </Helmet>
    );
};
