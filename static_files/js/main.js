const resultados = document.querySelector("#resultados"),
  resultadosBusquedaMascotas = document.querySelector("#resultados_mascotas"),
  resultadosBusquedaDuenos = document.querySelector("#resultados_dueno"),
  verMascotas = document.querySelector("#verMascotas"),
  verDuenos = document.querySelector("#verDuenos"),
  verCrearMascota = document.querySelector("#verCrearMascota"),
  verCrearDueno = document.querySelector("#verCrearDueno"),
  verBuscarMascotas = document.querySelector("#verBuscarMascotas"),
  verBuscarDuenos = document.querySelector("#verBuscarDuenos"),
  botonBuscarMascotas = document.querySelector("#botonBuscarMascotas"),
  botonBuscarDuenos = document.querySelector("#botonBuscarDuenos"),
  botonCrearMascota = document.querySelector("#botonCrearMascota"),
  botonCrearDueno = document.querySelector("#botonCrearDueno"),
  inputBuscarMascotas = document.querySelector("#input_buscar_mascotas"),
  inputBuscarDuenos = document.querySelector("#input_buscar_duenos");


// Ocultar y mostrar seccionoes
verBuscarMascotas.addEventListener("click", () => {
  ocultarTodosMenos("buscador_mascotas");
});
verCrearDueno.addEventListener("click", () => {
  ocultarTodosMenos("crear_dueno");
});
verCrearMascota.addEventListener("click", () => {
  ocultarTodosMenos("crear_mascota");
});
verBuscarDuenos.addEventListener("click", () => {
  ocultarTodosMenos("buscador_duenos");
});
verMascotas.addEventListener("click", () => {
  getData("/pets", mostrarMascotas);
  ocultarTodosMenos("resultados");
});
verDuenos.addEventListener("click", () => {
  getData("/owners", mostrarDuenos);
  ocultarTodosMenos("resultados");
});

// Buscar mascota
botonBuscarMascotas.addEventListener("click", () => {
  const buscado = inputBuscarMascotas.value;
  getData("/pet/" + buscado, mostrarMascotasBusqueda);
});

// Buscar dueños
botonBuscarDuenos.addEventListener("click", () => {
  const buscado = inputBuscarDuenos.value;
  getData("/owner/" + buscado, mostrarDuenosBusqueda);
});

// Crear dueño
botonCrearDueno.addEventListener("click", () => {
  // Campos
  const name = document.querySelector("#dueno_name").value,
    last_name = document.querySelector("#last_name").value,
    age = document.querySelector("#dueno_age").value,
    date = document.querySelector("#date").value,
    phone = document.querySelector("#phone").value;
  const data = {
    name,
    last_name,
    age,
    date,
    phone
  };

  registrarDueno(data);
});

// Crear mascota
botonCrearMascota.addEventListener("click", () => {
  // Campos
  const name = document.querySelector("#mascota_name").value,
    last_name = document.querySelector("#breed").value,
    age = document.querySelector("#mascota_age").value,
    date = document.querySelector("#mascota_date").value,
    description = document.querySelector("#description").value,
    picture = document.querySelector("#picture").value;
  const data = {
    name,
    last_name,
    age,
    date,
    description,
    picture
  };

  registrarMascota(data);
  alert('MASCOTA REGISTRADA CORRECTAMENTE!!!!!! FELIZ NAVIDAD!!');
});

resultados.addEventListener("click", () => {
  event.preventDefault();
  if (event.target.nodeName == "A") {
    getData("/owner/" + event.target.id, mostrarDuenos);
  }
});
