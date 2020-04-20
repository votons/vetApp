//esto es solamente temporal
const fakeDatabase = {
  owners: [
    {
      id: 1,
      pets: ["Simón", "Hugo", "Felipe", "Maggi"],
      name: "Chefuss",
      phone: 3515932456
    },
    {
      id: 2,
      pets: ["Rocco"],
      name: "Vir",
      phone: 3515932457
    }
  ],
  pets: [
    {
      id: 1,
      name: "Simón",
      owner_id: 1,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.",
      picture: "/img/simon.jpg"
    },
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
};

module.exports = fakeDatabase;
