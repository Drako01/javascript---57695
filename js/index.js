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

const boton = document.createElement('button');
boton.type = 'button';
boton.innerText = 'Click';
boton.style.width = '6rem';
// cuerpo.appendChild(boton);

// Sweet Alert
// boton.addEventListener('click', () => {
//     Swal.fire({
//         position: "top-end",
//         icon: "success",
//         title: "Producto agregado al Carrito con éxito.!",
//         showConfirmButton: false,
//         timer: 5500 ,// 
//         timerProgressBar: true,
//     });
//     // alert("Alerta Feo");
// })

//Toastify 
// boton.addEventListener('click', () => {
//     // Toastify({
//     //     text: "Producto agregado al Carrito.!",
//     //     className: "info",
//     //     style: {
//     //         background: "linear-gradient(to right, #00b09b, #96c93d)",
//     //         color: "white"
//     //     }
//     // }).showToast();
// //     Toastify(
// //         {
// //         text: "Producto agregado al Carrito.!",
// //         offset: {
// //           x: 150, // horizontal axis - can be a number or a string indicating unity. eg: '2em'
// //           y: 50 // vertical axis - can be a number or a string indicating unity. eg: '2em'
// //         },
// //     }
// // ).showToast();
// Toastify({
//     text: "This is a toast",
//     duration: 3000,
//     destination: "https://github.com/Drako01",
//     newWindow: true,
//     close: true,
//     gravity: "top", // `top` or `bottom`
//     position: "right", // `left`, `center` or `right`
//     stopOnFocus: true, // Prevents dismissing of toast on hover
//     style: {
//         background: "linear-gradient(to right, #56009b, #00c900)",
//     },
//     onClick: function(){
//         cuerpo.style.backgroundColor = 'black';
//     } // Callback after click
//     }).showToast();
// })

// Luxor
const dt = DateTime.now();
const footerDiv = document.querySelector('#footer');
const h4DateTime = document.createElement('h4');
h4DateTime.innerHTML = dt.toLocaleString(DateTime.DATE_FULL);
footerDiv.appendChild(h4DateTime);


//https://michalsnik.github.io/aos/