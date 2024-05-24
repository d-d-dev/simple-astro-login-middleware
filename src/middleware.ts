import type { APIContext, MiddlewareNext } from "astro";
import { validarToken, type AuthPayload } from "./lib/utils";


export const onRequest = async({locals, url, cookies, redirect}:APIContext, next:MiddlewareNext) => {
    //cookies?
    const token = cookies.get(import.meta.env.COOKIE_KEY)?.value;
    const payload = validarToken(token);
    console.log('[middleware]: =>', url.href, '=> payload:', payload);

    //algo de login? /ignorar
    if(url.pathname.includes('login')){
        if(payload) return redirect('/');
        else return next();
    }
    //todas las rutas son protegidas
    if(!payload) return redirect('/login');

    //payload válido!
    locals.usuario = payload.usuario;
    locals.nombre = payload.nombre;
    locals.momento = payload.momento;

    //proceder
    return next();
}