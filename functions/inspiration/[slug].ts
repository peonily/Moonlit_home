import { buildInspirationMetaTagsBySlug, buildProductLandingHtmlByInspirationSlug, injectMetaIntoHtml } from "../_lib/pinterestMeta";

export const onRequest: PagesFunction = async (context) => {
    const slug = context.params?.slug;

    if (typeof slug !== "string") {
        return context.next();
    }

    const productHtml = buildProductLandingHtmlByInspirationSlug(slug);
    if (productHtml) {
        return new Response(productHtml, {
            status: 200,
            headers: {
                "content-type": "text/html;charset=UTF-8",
                "cache-control": "public, max-age=600",
            },
        });
    }

    const response = await context.next();
    const metaTags = buildInspirationMetaTagsBySlug(slug);
    if (!metaTags) {
        return response;
    }

    const html = await response.text();
    const modifiedHtml = injectMetaIntoHtml(html, metaTags);

    return new Response(modifiedHtml, {
        status: response.status,
        headers: {
            ...Object.fromEntries(response.headers.entries()),
            "content-type": "text/html;charset=UTF-8",
        },
    });
};
