import { buildProductLandingHtmlById } from "../_lib/pinterestMeta";

export const onRequest: PagesFunction = async (context) => {
    const id = context.params?.id;

    if (typeof id !== "string") {
        return context.next();
    }

    const productHtml = buildProductLandingHtmlById(id);
    if (!productHtml) {
        return context.next();
    }

    return new Response(productHtml, {
        status: 200,
        headers: {
            "content-type": "text/html;charset=UTF-8",
            "cache-control": "public, max-age=600",
        },
    });
};
