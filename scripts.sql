create database vetapp



create table pets (id int primary key auto_increment not null,
name varchar(50) not null,
owner_id int not null ,
description varchar(250),
picture varchar(250)) ;

insert into pets (name,owner_id,description,picture) values("simon",1,"es un perro muy amable","/img/simon.jpg");

insert into pets (name,owner_id,description,picture) values("hugo",1,"este perro se porta mal","/img/hugo.jpg");
insert into pets (name,owner_id,description,picture) values("felipe",1,"este perro ladra fuerte ","/img/felipe.jpg");
insert into pets (name,owner_id,description,picture) values("maggi",1,"este perro come rapido","/img/maggi.jpg");
insert into pets (name,owner_id,description,picture) values("rocco",2,"este perro es muy territorial, cuando se siente amenzado no le importa nada...","/img/rocco.jpg");





