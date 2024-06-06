// Inicializo la pagina
const cabeza = document.head;
const cuerpo = document.body;
const main = document.getElementsByTagName('main')[0];
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
cuerpo.prepend(cabecera);
main.appendChild(h1Titulo);
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

document.addEventListener('DOMContentLoaded' , function() {
    const button = document.getElementById('toggle-button');

    button.addEventListener('click', function() {
        agregarClasedark();
        updateTextButton();
        removerClaseDark();
    })

    function agregarClasedark(){
        cuerpo.classList.toggle('dark');
    }
    function updateTextButton() {
        if(cuerpo.classList.contains('dark')) {
            button.textContent = "Cambiar a modo claro";
        } else {
            button.textContent = "Cambiar a modo oscuro";
        }
    }
    function removerClaseDark(){
        setTimeout(() => {
            cuerpo.classList.remove('dark');
        }, 3000);
    }
    updateTextButton();
});

