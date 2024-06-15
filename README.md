# Plantilla Astro + Middleware Login
Proyecto simple para construir apps que soporten login, operaciones en el backend, etc, etc....
Astro es divertido!.

## Incluye
* Typescript
* Font-awesome
* Transiciones
* CSS global

## Variables de entorno en .env
Crear un archivo .env incluyendo los siguientes parámetros
1. **MASTER_KEY:** número de 256bytes, expresado en un string de 128 caracteres hex
2. **COOKIE_KEY:** nombre del cookie que se almacena para autorizar a un cliente ya loggeado
3. **FRONTEND_USER:** nombre del usuario que accede al servicio (solo 1 cliente)
4. **FRONTEND_HASH:** contraseña del usuario en hash SHA256 para acceder al 
servicio (solo 1 clave)
5. **DB_HOST:** direccion IP de la base de datos (mysql), o usa localhost
6. **DB_NAME:** nombre de la base de datos a acceder (mysql)
7. **DB_USER:** usuario de la base de datos
8. **DB_PASS:** contraseña de la base de datos

## 🧞 Commands

| Comando                   | Acción                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Instala dependencias                             |
| `npm run dev`             | Inicia el servidor local en `localhost:4321`     |
| `npm run build`           | Compila el proyecto en el folder `./dist/`       |
