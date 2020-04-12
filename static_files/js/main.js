const resultados = document.querySelector('#resultados'),
  verMascotas = document.querySelector('#verMascotas'),
  verDuenos = document.querySelector('#verDuenos'),
  buscar = document.querySelector('#botonBuscar'),
  input = document.querySelector('#buscar');

verMascotas.addEventListener('click', ()=> {
  getData('/pets', mostrarMascotas);
});
verDuenos.addEventListener('click', () => {
  getData('/owners', mostrarDuenos);
});

buscar.addEventListener('click', () => {
  const buscado = input.value;
  getData('/pets/' + buscado, mostrarMascotas);
});

resultados.addEventListener('click', () => {
  event.preventDefault();
  if (event.target.nodeName == 'A') {
    getData('/owners/' + event.target.id, mostrarDuenos);
  }
})