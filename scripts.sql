create database vetapp

create table vetapp.pets (id int primary key auto_increment not null,
name varchar
(50) not null,
owner_id int not null ,
description varchar
(250),
picture varchar
(250));

create table vetapp.owners
(
    id int not null
    auto_increment primary key,
    nombre varchar
    (50) not null,
    apellido varchar
    (50) not null,
    edad int not null,
    fecha_ingreso date not null,
    telefono varchar
    (50) not null
);

    insert into vetapp.owners
    values(1, "Fernando", "Sargiotto", 29, "2020-04-20", "3516130396");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(2, "Marina", "Faenze", 29, "2020-04-20", "3517668129");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(3, "Tomas", "Peluffo", 28, "2020-04-20", "3583634567");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(4, "Dayana", "Centorbi", 29, "2020-04-20", "3543449987");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(5, "Anton", "Fejer", 25, "2020-04-20", "35436887766");


    insert into vetapp.owners
    values(1, "Fernando", "Sargiotto", 29, "2020-04-20", "3516130396");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(2, "Marina", "Faenze", 29, "2020-04-20", "3517668129");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(3, "Tomas", "Peluffo", 28, "2020-04-20", "3583634567");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(4, "Dayana", "Centorbi", 29, "2020-04-20", "3543449987");
    insert into vetapp.owners
        (id,nombre,apellido,edad,fecha_ingreso,telefono)
    values(5, "Anton", "Fejer", 25, "2020-04-20", "35436887766");

    insert into vetapp.pets
        (name,owner_id,description,picture)
    values("simon", 1, "es un perro muy amable", "/img/simon.jpg");
    insert into vetapp.pets
        (name,owner_id,description,picture)
    values("hugo", 1, "este perro se porta mal", "/img/hugo.jpg");
    insert into vetapp.pets
        (name,owner_id,description,picture)
    values("felipe", 1, "este perro ladra fuerte ", "/img/felipe.jpg");
    insert into vetapp.pets
        (name,owner_id,description,picture)
    values("maggi", 1, "este perro come rapido", "/img/maggi.jpg");
    insert into vetapp.pets
        (name,owner_id,description,picture)
    values("rocco", 2, "este perro es muy territorial, cuando se siente amenzado no le importa nada...", "/img/rocco.jpg");





