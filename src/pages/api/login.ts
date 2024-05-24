import type { APIContext } from "astro";
import { auth_validarUsuario } from "../../lib/auth";
import { generarToken } from "../../lib/utils";

export const POST = async({request, cookies, redirect}:APIContext) => {
    const formulario = await request.formData();
    const user = formulario.get("login-user")?.toString() ;
    const pass = formulario.get("login-pass")?.toString();
    const esValido = auth_validarUsuario(user, pass);
    if(!esValido) {
        return redirect('/login');
    }
    //Generar un JWT
    const token = generarToken({
        usuario: user!,
        nombre: user!,
        momento: new Date().getTime(),
    });

    //Guardar el cookie
    cookies.set(import.meta.env.COOKIE_KEY, 
        token,
        {
            httpOnly: true,
            maxAge: 24 * 59 * 60,
            path: '/'
        }
    );

    //Terminando
    return redirect('/');
}