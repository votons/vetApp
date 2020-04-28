const express = require("express"); //traer el módulo express.

var buscadorMascotas=require('./controladores/mascota');

//const { pets, owners } = require("./fakeDatabase");

const { pets, owners } = require("./fakeDatabase");
require("./conexiobd");
const controladorDuenios = require("./controladorDuenios");

//crear nuesstra app mediante el método express();
const app = express();

//asignamos el puerto donde vamos a trabajar.
const port = 3000;

//establecemos los middlewares
const bodyParser = require("body-parser");

//definimos algunos usos de los middlewares.
app.use(express.static("static_files"));
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);
app.use(bodyParser.json());

// aquí tenemos que definir qué va a hacer el servidor con cada solicitud.
// mostrar el archivo index.html
app.get("/", (req, res) => {
  res.sendFile("index.html");
});

// Devolvemos una mascota en base en su nombre
app.get("/pet/:pet_name", buscadorMascotas.buscarNombrePet);

app.get("/pets",buscadorMascotas.buscarMascotas);
app.post("/pet",buscadorMascotas.agregarMascota);
//app.delete("/pet/:pet_id",buscarMascotas.removerMascota);

// devolvemos un dueño es base en su id
app.get("/owner/:owner_id", (req, res) => {
  const findedOwner = owners.find(owner => owner.id == req.params.owner_id)
  res.send(findedOwner);
});

// devolvemos todos los dueños
app.get("/owners", controladorDuenios.buscarOwners);

//aquí vamos a hacer que el servidor empiece a escuchar las solicitudes que lleguen.
app.listen(port, () => {
  console.log(`Iniciamos el servidor en el puerto ${port}`);
});
