## Primera parte

Nuestra aplicación funciona correctamente con los datos hardcodeados que estamos utilizando, pero necesitamos utilizar datos almacenados en un base de datos para que este completa, ademas de realizar varios cambios en la lógica de nuestros endpoints. Para poder realizar esto debemos:

- Instalar la dependencia `mysql`.
- Crear un archivo llamados `scripts.sql`con las queries para:
    - Crear una base de datos llamadas `vetapp`
    - Crear una tabla llamada `pets`
    - Crear una tabla llamada `owners`
    - Crear *5* inserts iniciales para cada tabla.
- Conectar nuestro servidor con la base de datos.
- Cambiar las siguientes rutas para que utilicen los datos almacenados en la base de datos:
    - `/pets`
    - `/pet/:pet_name`
    - `/owner/:owner_id`
    - `/owners`

## Segunda parte

Para poder seguir agregando contenido a nuestra aplicación necesitamos completar las secciones "Registrar mascota" y "Registrar dueño". También es indispensable completar la funcionalidad para "Remover mascota" y "Remover dueño". Para completar estos features tenemos que crear los siguientes endpoints:

- POST `/pet` 
- DELETE `/pet/${pet_id}`
- POST `/owner`
- DELETE `/owner/${owner_id}`