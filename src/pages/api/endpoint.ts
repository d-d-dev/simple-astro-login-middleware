import type { APIContext } from "astro";

export const GET = async(ctx: APIContext) => {
    const params = Object.fromEntries(ctx.url.searchParams.entries());
    
    return new Response(
        JSON.stringify({
            status: 200,
            message: 'GET endpoint',
            params: params,
        })
    );
};


export const POST = async(ctx: APIContext) => {
    // const body = await ctx.request.json();   //para JSON
    const form = await ctx.request.formData();  //para formularios
    const object = Object.fromEntries([...form.entries()].map(x => [x[0], x[1] as string]));

    //Redirect
    const params = new URLSearchParams(object).toString();
    return ctx.redirect(`/?${params}`);
    
    //Respuesta JSON
    return new Response(
        JSON.stringify({
            status: 200,
            message: 'POST endpoint',
            body: ctx,
        })
    );
};