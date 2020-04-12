
//traer el módulo express.
//crear nuesstra app mediante el método express();

//asignamos el puerto donde vamos a trabajar.
const port = 8080;

//establecemos los middlewares
const bodyParser = require('body-parser');

//esta es solamente temporal
const fakeDatabase = {
  owners: [
    {
      id: 1,
      pets: ['Simón', 'Hugo', 'Felipe', 'Maggi'],
      name: 'Chefuss',
      phone: 3515932456,
    },
    {
      id: 2,
      pets: ['Rocco'],
      name: 'Vir',
      phone: 3515932457,
    },
  ],
  pets: [
    {
      id: 1,
      name: 'Simón',
      owner_id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.',
      picture: '/img/simon.jpg',
    },
    {
      id: 2,
      name: 'Hugo',
      owner_id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.',
      picture: '/img/hugo.jpg',
    },
    {
      id: 3,
      name: 'Felipe',
      owner_id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.',
      picture: '/img/felipe.jpg',
    },
    {
      id: 4,
      name: 'Maggi',
      owner_id: 1,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.',
      picture: '/img/maggi.jpg',
    },
    {
      id: 5,
      name: 'Rocco',
      owner_id: 2,
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos nam consequatur unde tenetur qui quisquam eaque similique commodi, officia maxime officiis accusamus totam excepturi eum temporibus dolores deserunt nemo cum.',
      picture: '/img/rocco.jpg',
    },
  ],
};

//definimos algunos usos de los middlewares.
app.use(express.static('static_files'));

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

//aquí tenemos que definir qué va a hacer el servidor con cada solicitud.
//mostrar el archivo index.html
// app.get('/', (req, res) => {
//   res.sendFile('index.html');
// });

//aquí vamos a hacer que el servidor empiece a escuchar las solicitudes que lleguen.