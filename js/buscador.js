// crear los años
const years = document.createElement('option');
const maxYear = new Date().getFullYear();
const minYear = maxYear - 10;

for (let i = maxYear; i > minYear; i--) {
  const option = document.createElement('option');
  option.value = i;
  option.innerText = i;
  document.querySelector('#year').appendChild(option);
}

// función que retorna los objetos locales
function obtenerAutos () {
  return [
    { marca: 'BMW', modelo: 'Serie 3', year: 2012, precio: 30000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Audi', modelo: 'A4', year: 2018, precio: 40000, puertas: 4, color: 'Negro', transmission: 'automatic' },
    { marca: 'Ford', modelo: 'Mustang', year: 2015, precio: 20000, puertas: 2, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Audi', modelo: 'A6', year: 2012, precio: 35000, puertas: 4, color: 'Negro', transmission: 'automatic' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2016, precio: 70000, puertas: 4, color: 'Rojo', transmission: 'automatic' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2015, precio: 25000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Chevrolet', modelo: 'Camaro', year: 2018, precio: 60000, puertas: 2, color: 'Rojo', transmission: 'manual' },
    { marca: 'Ford', modelo: 'Mustang', year: 2019, precio: 80000, puertas: 2, color: 'Rojo', transmission: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2017, precio: 40000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Audi', modelo: 'A3', year: 2017, precio: 55000, puertas: 2, color: 'Negro', transmission: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2012, precio: 25000, puertas: 2, color: 'Rojo', transmission: 'manual' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 45000, puertas: 4, color: 'Azul', transmission: 'automatic' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2019, precio: 90000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Ford', modelo: 'Mustang', year: 2017, precio: 60000, puertas: 2, color: 'Negro', transmission: 'manual' },
    { marca: 'Dodge', modelo: 'Challenger', year: 2015, precio: 35000, puertas: 2, color: 'Azul', transmission: 'automatic' },
    { marca: 'BMW', modelo: 'Serie 3', year: 2018, precio: 50000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'BMW', modelo: 'Serie 5', year: 2017, precio: 80000, puertas: 4, color: 'Negro', transmission: 'automatic' },
    { marca: 'Mercedes Benz', modelo: 'Clase C', year: 2018, precio: 40000, puertas: 4, color: 'Blanco', transmission: 'automatic' },
    { marca: 'Audi', modelo: 'A4', year: 2016, precio: 30000, puertas: 4, color: 'Azul', transmission: 'automatic' }
  ];
}

// datos para la búsqueda
const datosSearch = {
  marca: '',
  year: '',
  min: '',
  max: '',
  puertas: '',
  transmission: '',
  color: ''
};

// variable global que contiene los autos
const autos = obtenerAutos();

// event listener DOM Loaded
document.addEventListener('DOMContentLoaded', () => {
  mostrarAutos(autos);
});

// event listener para la marca
const marca = document.querySelector('#marca');
marca.addEventListener('input', event => {
  datosSearch.marca = event.target.value;
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la año
const year = document.querySelector('#year');
year.addEventListener('input', event => {
  datosSearch.year = Number(event.target.value);
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la mínimo
const min = document.querySelector('#min');
min.addEventListener('input', event => {
  datosSearch.min = Number(event.target.value);
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la máximo
const max = document.querySelector('#max');
max.addEventListener('input', event => {
  datosSearch.max = Number(event.target.value);
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la puertas
const puertas = document.querySelector('#puertas');
puertas.addEventListener('input', event => {
  datosSearch.puertas = Number(event.target.value);
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la transmisión
const transmission = document.querySelector('#transmission');
transmission.addEventListener('input', event => {
  datosSearch.transmission = event.target.value;
  // llamar la función filtrar autos
  filtrarAuto();
});

// event listener para la color
const color = document.querySelector('#color');
color.addEventListener('input', event => {
  datosSearch.color = event.target.value;
  // llamar la función filtrar autos
  filtrarAuto();
});

function limpiarHTML () {
  // leer el elemento resultado (HTML)
  const contenedor = document.querySelector('#resultado');
  // limpiar los resultados anteriores
  while (contenedor.firstChild) {
    contenedor.removeChild(contenedor.firstChild);
  }
}

function mostrarAutos (autos) {
  limpiarHTML();
  // leer el elemento resultado (HTML)
  const contenedor = document.querySelector('#resultado');
  // construir el HTML de los autos
  autos.forEach(auto => {
    const autoHTML = document.createElement('p');
    autoHTML.innerHTML = `
      <p>${auto.marca} ${auto.modelo} - Año: ${auto.year} - Puertas: ${auto.puertas} - Transmisión: ${auto.transmission} - Color: ${auto.color} - Precio: <b>${auto.precio}</b></p>
    `;
    contenedor.appendChild(autoHTML);
  });
}

function noResultado () {
  limpiarHTML();
  const noResultado = document.createElement('div');
  noResultado.classList.add('alerta', 'error');
  noResultado.appendChild(document.createTextNode('No hay resultados!!!'));
  document.querySelector('#resultado').appendChild(noResultado);
}

function filtrarAuto () {
  const resultado = obtenerAutos().filter(filtrarMarca).filter(filtrarYear).filter(filtrarMin).filter(filtrarMax).filter(filtrarPuertas).filter(filtrarTransmission).filter(filtrarColor);
  if (resultado.length) {
    mostrarAutos(resultado);
  } else {
    noResultado();
  }
}

function filtrarMarca (auto) {
  if (datosSearch.marca) {
    return auto.marca === datosSearch.marca;
  } else {
    return auto;
  }
}

function filtrarYear (auto) {
  if (datosSearch.year) {
    return auto.year === datosSearch.year;
  } else {
    return auto;
  }
}

function filtrarMin (auto) {
  if (datosSearch.min) {
    return auto.precio >= datosSearch.min;
  } else {
    return auto;
  }
}

function filtrarMax (auto) {
  if (datosSearch.max) {
    return auto.precio <= datosSearch.max;
  } else {
    return auto;
  }
}

function filtrarPuertas (auto) {
  if (datosSearch.puertas) {
    return auto.puertas === datosSearch.puertas;
  } else {
    return auto;
  }
}

function filtrarTransmission (auto) {
  if (datosSearch.transmission) {
    return auto.transmission === datosSearch.transmission;
  } else {
    return auto;
  }
}

function filtrarColor (auto) {
  if (datosSearch.color) {
    return auto.color === datosSearch.color;
  } else {
    return auto;
  }
}
