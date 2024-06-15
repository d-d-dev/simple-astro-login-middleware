import crypto from 'crypto';
import jwt from 'jsonwebtoken';

////1. Funciones para operar con strings
export const removerAcentos = (str: string) => str.normalize('NFD').replace(/[\u0300-\u036f]/g, '');   //Fuente: https://www.30secondsofcode.org/js/s/remove-accents/
export const camelCase = (value:string) => value.toLowerCase().replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
export const hashMD5 = (val:string) => crypto.createHash('md5').update(val).digest('hex');
export const hashSHA = (val:string) => crypto.createHash('sha256').update(val).digest('hex');

////2. JWT + Validacion
export type AuthPayload = {
    usuario: string,
    nombre: string,
    momento: number,
}
export const generarToken = (obj:AuthPayload) => jwt.sign(obj, import.meta.env.MASTER_KEY, {
    expiresIn: '24h'
});
export const validarToken = (token:string|undefined):AuthPayload|null => {
    try {
        return jwt.verify(token||'', import.meta.env.MASTER_KEY) as AuthPayload;
    }
    catch(err){
        return null;
    }
};

////3. Chunks
export const chunkify = <T>(arr:T[], chunk:number) => {
    const salida:T[][] = [];
    for (let i=0; i < arr.length; i += chunk) {
        salida.push(arr.slice(i, i + chunk))
    }
    return salida;
}