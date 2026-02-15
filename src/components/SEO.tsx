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

    // Schema.org JSON-LD for Product
    const jsonLd = type === "product" ? {
        "@context": "https://schema.org/",
        "@type": "Product",
        "name": title,
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
            "price": numericPrice,
            "availability": availability === "instock" ? "https://schema.org/InStock" : "https://schema.org/OutOfStock"
        }
    } : null;

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
            <meta property="og:type" content={type} />

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
            {jsonLd && (
                <script type="application/ld+json">
                    {JSON.stringify(jsonLd)}
                </script>
            )}
        </Helmet>
    );
};
