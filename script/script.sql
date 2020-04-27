-- - Crear un archivo llamados `scripts.sql`con las queries para:
--     - Crear una base de datos llamadas `vetapp`
--     - Crear una tabla llamada `pets` (analiza los campos en la seccion "Registrar mascota")
--     - Crear una tabla llamada `owners` (analiza los campos en la seccion "Registrar dueno")
--     - Crear *5* inserts iniciales para cada tabla.
-- - Conectar nuestro servidor con la base de datos.
-- - Cambiar las siguientes rutas para que utilicen los datos almacenados en la base de datos:
--     - `/pets`
--     - `/pet/:pet_name`
--     - `/owner/:owner_id`
--     - `/owners`
create database vetapp;
use vetapp;
create table owners(
    id int not null auto_increment primary key,
    nombre varchar(50) not null,
    apellido varchar(50) not null,
    edad int not null,
    fecha_ingreso date not null,
    telefono varchar(50) not null
);

insert into owners values(1,"Fernando","Sargiotto",29,"2020-04-20","3516130396");
insert into owners (id,nombre,apellido,edad,fecha_ingreso,telefono) values(2,"Marina","Faenze",29,"2020-04-20","3517668129");
insert into owners (id,nombre,apellido,edad,fecha_ingreso,telefono) values(3,"Tomas","Peluffo",28,"2020-04-20","3583634567");
insert into owners (id,nombre,apellido,edad,fecha_ingreso,telefono) values(4,"Dayana","Centorbi",29,"2020-04-20","3543449987");
insert into owners (id,nombre,apellido,edad,fecha_ingreso,telefono) values(5,"Anton","Fejer",25,"2020-04-20","35436887766");
