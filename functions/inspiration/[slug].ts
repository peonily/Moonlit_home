import { buildInspirationMetaTagsBySlug, injectMetaIntoHtml } from "../_lib/pinterestMeta";

export const onRequest: PagesFunction = async (context) => {
    const slug = context.params?.slug;
    const response = await context.next();

    if (typeof slug !== "string") {
        return response;
    }

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
