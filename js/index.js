// Inicializo la pagina
const cabeza = document.head;
const cuerpo = document.body;
const DateTime = luxon.DateTime; // Luxor
const titulo = document.createElement('title');
titulo.innerHTML = 'Comisión #57695 | CoderHouse';
cabeza.appendChild(titulo); // Agrego el titulo de la Pagina

const h1Titulo = document.createElement('h1');
h1Titulo.innerHTML = titulo.innerHTML;

h1Titulo.style.color = 'blue';
h1Titulo.classList.add('titulo');

const cabecera = document.createElement('header');
const navegacion = document.createElement('navbar');
const nav = document.createElement('nav');
const ul = document.createElement('ul');
cuerpo.appendChild(cabecera);
cuerpo.appendChild(h1Titulo);
cabecera.appendChild(navegacion);
navegacion.className = 'navbar';
navegacion.appendChild(nav);
nav.appendChild(ul);

const links = ["Index", "Products", "Contact"];

for (const link of links) {
    const li = document.createElement('li');
    li.innerHTML = `<a href="${link.toLowerCase()}.html" >${link}</a>`
    ul.appendChild(li);
}
