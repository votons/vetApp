//Fetch API. proporciona una interfaz parra recuperar recursos
//https://developer.mozilla.org/es/docs/Web/API/Fetch_API
//tiene por argumento obligatorio la ruta del recurso.
//devuelve una promesa que resuelve en response esa petición, sea o no correcta
function getData(path, cb) {
  fetch(path)
    .then(function (response) {
      // console.log(response);
      return response.json();
    })
    .then(function (results) {
      resultados.innerHTML = '';
      // console.log(results);
      if (typeof results.length !== 'undefined') {
        results.forEach((result) => {
          cb(result);
        });
      } else {
        cb(results);
      }
    })
    .catch(function (err) {
      console.log('Ha ocurrido un error: ', err);
      alert('Ha ocurrido un error, intenta nuevamente.');
    });
}

function mostrarMascotas(pet) {
  const container = document.createElement('div');
    container.id = pet.id;
    container.classList.add('pet');
  const heading = document.createElement('h3');
    heading.textContent = pet.name;
  const imageContainer = document.createElement('div');
    imageContainer.classList.add('image-container');
  const image = document.createElement('img');
    image.src = pet.picture;
  const owner = document.createElement('a');
    owner.id = pet.owner_id;
    owner.textContent = 'ver dueño';
  imageContainer.append(image);
  container.append(imageContainer, heading, owner);
  resultados.append(container);
}

function mostrarDuenos(dueno) {
  console.log(dueno);
  const container = document.createElement('div');
    container.id = dueno.id;
    container.classList.add('pet');
  const heading = document.createElement('h3');
    heading.textContent = dueno.name;
  const pets = document.createElement('ul');
  dueno.pets.forEach((pet) => {
    const li = document.createElement('li');
    li.textContent = pet;
    pets.append(li);
  });
  container.append(heading, pets);
  resultados.append(container);
}