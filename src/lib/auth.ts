import { hashSHA } from "./utils"

export const auth_validarUsuario = (user:string|undefined|null, pass:string|undefined|null) => {
    const hashedPass = hashSHA(pass || '');
    return (user === import.meta.env.FRONTEND_USER) && (hashedPass === import.meta.env.FRONTEND_HASH);
}