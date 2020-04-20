const express = require("express"); //traer el módulo express.
const { pets, owners } = require("./fakeDatabase");
const conexion = require("./conexiobd");

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
app.get("/pet/:pet_name", (req, res) => {
  const findedPet = pets.find(pet => pet.name == req.params.pet_name)
  res.send(findedPet);
});

// devolvemos todas las mascotas
app.get("/pets", (req, res) => {
  res.send(pets);
});

// devolvemos un dueño es base en su id
app.get("/owner/:owner_id", (req, res) => {
  const findedOwner = owners.find(owner => owner.id == req.params.owner_id)
  res.send(findedOwner);
});

// devolvemos todos los dueños
app.get("/owners", (req, res) => {
  res.send(owners);
});

//aquí vamos a hacer que el servidor empiece a escuchar las solicitudes que lleguen.
app.listen(port, () => {
  console.log(`Iniciamos el servidor en el puerto ${port}`);
});
