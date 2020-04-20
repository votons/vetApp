create database vetapp



create table pets (id int primary key auto_increment not null,
name varchar(50) not null,
owner_id int not null ,
description varchar(250),
picture varchar(250)) ;

 {
      id: 2,
      name: "Hugo",
      owner_id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.",
      picture: "/img/hugo.jpg"
    },
    {
      id: 3,
      name: "Felipe",
      owner_id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.",
      picture: "/img/felipe.jpg"
    },
    {
      id: 4,
      name: "Maggi",
      owner_id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.",
      picture: "/img/maggi.jpg"
    },
    {
      id: 5,
      name: "Rocco",
      owner_id: 2,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.",
      picture: "/img/rocco.jpg"
    }
  ]

insert into pets (name,owner_id,description,picture) values("simon",1,"es un perro muy amable","/img/simon.jpg");

insert into pets (name,owner_id,description,picture) values("hugo",1,"este perro se porta mal","/img/hugo.jpg");
insert into pets (name,owner_id,description,picture) values("felipe",1,"este perro ladra fuerte ","/img/felipe.jpg");
insert into pets (name,owner_id,description,picture) values("maggi",1,"este perro come rapido","/img/maggi.jpg");
insert into pets (name,owner_id,description,picture) values("rocco",2,"este perro es muy territorial, cuando se siente amenzado no le importa nada...","/img/rocco.jpg");





