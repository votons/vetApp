## Dinamica

Para trabajar en el siguiente proyecto deben conformar dos equipos que trabajaran sobre este mismoo proyecto, un equipo se encargara de la seccion "Mascotas" mientras que el otro equipo se encargara de la seccion "Dueños". Ambos equipos tendran un espacio propio para trabajar y deberan repartir las tareas de la siguiente forma:

- Deberan trabajar en forma conjunta en una misma branch.
- Todos los cambios se deben ir subiendo en commits "pequeños".
- Si surgen dudas durante el ejercio un integrante del equipo puede realizar consultas. Los integrantes tomaran turnos para realizar consultas.
- Deben analizar los puntos a trabajar y repartir las tareas entre todos los integrantes.

## Primera parte

Nuestra aplicación funciona correctamente con los datos hardcodeados que estamos utilizando, pero necesitamos utilizar informacion almacenada en un base de datos, ademas de realizar varios cambios en la lógica de nuestros endpoints. Para poder realizar esto debemos:

- Instalar la dependencia `mysql`.
- Crear un archivo llamados `scripts.sql`con las queries para:
    - Crear una base de datos llamadas `vetapp`
    - Crear una tabla llamada `pets` (analiza los campos en la seccion "Registrar mascota")
    - Crear una tabla llamada `owners` (analiza los campos en la seccion "Registrar dueno")
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

## Tercer parte

Vamos a crear una relación entre nuestras dos entidades (mascotas y dueños) y vamos a hacer los cambios necesarios todo el proyecto para que estos cambios puedan coexistir:

- Edita el archivo scripts.sql para establecer la relación de las tablas.
- Modifica los INSERT para que los registros respeten esta relación.
- Analiza los cambios a implementar en los endpoints.
- Analiza los cambios a implementar en el Front.