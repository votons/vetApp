//Fetch API. proporciona una interfaz parra recuperar recursos
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//tiene por argumento obligatorio la ruta del recurso.
//devuelve una promesa que resuelve en response esa petición, sea o no correcta
function getData(path, cb) {
  fetch(path)
    .then(function(response) {
      return response.json();
    })
    .then(function(results) {
      resultados.innerHTML = "";
      if (results && typeof results.length !== "undefined") {
        console.log(results);
        results.forEach(result => {
          cb(result);
        });
      } else {
        cb(results);
      }
    })
    .catch(function(err) {
      console.log("Ha ocurrido un error: ", err);
      alert("Ha ocurrido un error, intenta nuevamente.");
    });
}

function postData(url, data) {
  fetch(url, {
    method: "POST",
    body: data,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(res => res.json())
    .catch(error => {
      console.log("Ha ocurrido un error: ", error);
      alert("Ha ocurrido un error, intenta nuevamente.");
    })
    .then(response => {
      console.log("Success:", response);
    });
}

function registrarMascota(data) {
  postData("/pet", JSON.stringify(data));
}

function registrarDueno(data) {
  postData("/owner", JSON.stringify(data));
}

// Formatear info de mascotas
function crearContainerMascotas(mascota) {
  const container = document.createElement("div");
  container.id = mascota.id;
  container.classList.add("pet");
  const heading = document.createElement("h3");
  heading.textContent = mascota.name;
  const imageContainer = document.createElement("div");
  imageContainer.classList.add("image-container");
  const image = document.createElement("img");
  image.src = mascota.picture;
  imageContainer.append(image);
  container.append(imageContainer, heading);
  if (mascota.owner_id) {
    const owner = document.createElement("a");
    owner.id = mascota.owner_id;
    owner.textContent = "ver dueño";
    container.append(owner);
  }
  return container;
}
function mostrarMascotas(mascota) {
  const container = crearContainerMascotas(mascota);
  resultados.append(container);
}
function mostrarMascotasBusqueda(mascota) {
  const container = crearContainerMascotas(mascota);
  resultadosBusquedaMascotas.append(container);
}

// Formatear info dueños
function crearContainerDuenos(dueno) {
  const container = document.createElement("div");
  container.id = dueno.id;
  container.classList.add("pet");
  const heading = document.createElement("h3");
  heading.textContent = dueno.name;
  const pets = document.createElement("ul");
  // dueno.pets.forEach(pet => {
  //   const li = document.createElement("li");
  //   li.textContent = pet;
  //   pets.append(li);
  // });
  container.append(heading, pets);
  return container;
}
function mostrarDuenos(dueno) {
  const container = crearContainerDuenos(dueno);
  resultados.append(container);
}
function mostrarDuenosBusqueda(dueno) {
  const container = crearContainerDuenos(dueno);
  resultadosBusquedaDuenos.append(container);
}

// Oculta todos el contenido de las secciones, excepto el elemento ccuyo id sea igual al param "id"
function ocultarTodosMenos(id) {
  const sections = [
    document.querySelector("#crear_mascota"),
    document.querySelector("#crear_dueno"),
    document.querySelector("#buscador_mascotas"),
    document.querySelector("#buscador_duenos"),
    document.querySelector("#resultados")
  ];

  sections.forEach(element => {
    if (element.id !== id && !element.classList.contains("oculto")) {
      element.classList.add("oculto");
    } else if (element.id == id && element.classList.contains("oculto")) {
      element.classList.remove("oculto");
    }
  });
}
