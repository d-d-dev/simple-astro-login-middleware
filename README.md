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
4. **FRONTEND_HASH:** contraseña del usuario en hash SHA256 para acceder al servicio (solo 1 clave)

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
