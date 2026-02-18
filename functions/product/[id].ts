import { buildProductMetaTagsById, injectMetaIntoHtml } from "../_lib/pinterestMeta";

export const onRequest: PagesFunction = async (context) => {
    const id = context.params?.id;
    const response = await context.next();

    if (typeof id !== "string") {
        return response;
    }

    const metaTags = buildProductMetaTagsById(id);
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
