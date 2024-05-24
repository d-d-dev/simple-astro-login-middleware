import type { APIContext } from "astro";

export const GET = async({cookies, redirect}:APIContext) => {
    cookies.delete(import.meta.env.COOKIE_KEY, {path: '/'});
    return redirect("/");
};