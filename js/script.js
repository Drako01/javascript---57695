// let numero = 0;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);
// numero = numero + 1;
// console.log(numero);

// // Sugar Syntax
// numero += 1;
// console.log(numero);
// numero ++;
// console.log(numero);

// let temperatura = 28;

// if(temperatura >= 24) {
//     console.log("Es un clima Agradable")
// } else {
//     console.log("Hace frio")
// }
//Sugar Syntax (Operador Ternario)
// condicion ? caso verdadero : caso falso
// temperatura >= 24 ? console.log("Es un clima Agradable") : console.log("Hace frio")

// const persona = {
//     nombre: "Alejandro",
//     edad: 19
// }

// if(persona.edad >= 18) {
//     tienePermisoParaBeber = true;
// } else {
//     tienePermisoParaBeber = false;
// }

// if (tienePermisoParaBeber) {
//     console.log("Puede beber Alcohol")
// } else {
//     console.log("NO Puede beber Alcohol, por ser menor de edad")
// }

// const tienePermisoParaBeber = (persona.edad >= 18) ? true : false;
// tienePermisoParaBeber ? console.log("Puede beber Alcohol") : console.log("NO Puede beber Alcohol, por ser menor de edad");


// Operador Logico And
// const carrito = [];

// if(carrito.length === 0) {
//     console.log("El carrito esta vacio");
// }

// function crearBoton(){
//     let botonDiv = document.getElementById('boton');
//     let boton = document.createElement('button');
//     boton.type = 'button';
//     boton.style.backgroundColor = 'green';
//     boton.style.padding = '10px';
//     boton.innerText = 'Aceptar';
//     botonDiv.appendChild(boton);
// }

// //carrito.length === 0 && console.log("El carrito esta vacio");

// carrito.length === 0 && crearBoton();

// Operador Logico Or

// carrito.length === 0 || console.log("El carrito tiene elementos");

// console.log( 0 || "Imprimo Esto")  // Imprimo Esto
// console.log( 40 || "Imprimo Esto")  // 40
// console.log( null || "Imprimo Esto")  // Imprimo Esto
// console.log( undefined || "Imprimo Esto")  // Imprimo Esto
// console.log( "Hola Mundo" || "Imprimo Esto")  // Hola Mundo
// console.log( "" || "Imprimo Esto")  // Imprimo Esto
// console.log( NaN || "Imprimo Esto")  // Imprimo Esto
// console.log( true || "Imprimo Esto")  // true
// console.log( false || "Imprimo Esto") // Imprimo Esto

// let nombre = "Alejandro" || "Nombre Vacio";
// console.log(nombre)

// let foto = "" || "https://fotovacia.png";
// console.log(foto)

// const usuario1 = {
//     nombre: "John Doe",
//     edad: 14
// }
// const usuario2 = null

// console.log(usuario1 || "El usuario no existe")
// // { nombre: 'John Doe', edad: 14 }

// console.log(usuario2 || "El usuario no existe")

//Operador Nullish Coalescing
// console.log( 0 ?? "Nullish")  // 0
// console.log( 40 ?? "Nullish")  // 40
// console.log( null ?? "Nullish")  // Nullish
// console.log( undefined ?? "Nullish")  // Nullish
// console.log( "Hola Mundo" ?? "Nullish")  // Hola Mundo
// console.log( "" ?? "Nullish")  // ""
// console.log( NaN ?? "Nullish")  // NaN
// console.log( true ?? "Nullish")  // true
// console.log( false ?? "Nullish")  // false

// const persona = null;

// // console.log( persona.nombre || "La persona no esta definida");

// // console.log( persona?.nombre || "La persona no esta definida");

// const personaDefinida = {
//     nombre: "Nahuel",
//     edad: 22,
//     cursos : {
//         javscript: "Aprobado",
//         react: "No iniciado"
//     }
// }

// console.log(personaDefinida?.cursos?.javscript || "El atributo no existe" )
// console.log(personaDefinida?.cursos?.react || "El atributo no existe" )
// console.log(personaDefinida?.cursos?.backend || "El atributo no existe" )


// Desestructuracion

// const producto = {
//     id: 1,
//     nombre: "Azucar",
//     descripcion: "Azucar Morena",
//     stock: 200,
//     precio: 980.50,
//     categoria: {
//         tipo: "Almacen"
//     }
// }

// const persona = {
//     id: 1,
//     nombre: "Nahuel"
// }
// console.log(producto.nombre)
// let nombre = producto.nombre;
// let descripcion = producto.descripcion;
// let {atributo1 , atributo2 , atributo3 } = objeto

// const { id, nombre, descripcion, stock, precio, categoria: {tipo} } = producto
// const { id: id_pesona, nombre: peson_name} = persona;
// console.log(nombre)
// console.log(descripcion)
// console.log(stock)
// console.log(tipo) 

// Alias
// const {
//     id: item_id, // Se le asigna un Alias a cada Atributo
//     nombre: product_name,
// } = producto;

// console.log(item_id)
// console.log(product_name)


// const producto1 = {
//     id: 1,
//     nombre: "Azucar",
//     descripcion: "Azucar Morena",
//     stock: 200,
//     precio: 980.50
// }
// const producto2 = {
//     id: 2,
//     nombre: "Yerba",
//     descripcion: "Yerba Mate",
//     stock: 2500,
//     precio: 1080.55
// }

// const desestructurarObjetos = (objeto) =>{
//     const {id, nombre, descripcion, stock, precio} = objeto
//     console.log(id, nombre, descripcion, stock, precio);
// }

// desestructurarObjetos(producto1);
// desestructurarObjetos(producto2);

// const desestructurarObjetosEnParametros = ({id, nombre, descripcion, stock, precio}) =>{
//     console.log(id, nombre, descripcion, stock, precio);
// }

// desestructurarObjetosEnParametros(producto1);
// desestructurarObjetosEnParametros(producto2);

//Desestructuración de arrays

const myArray = ["Hola", { a: "como" }, false, 10, "todo", "bien"];

const [a, b, c, d] = myArray // Con []
console.log(a, b, c, d);

// const [ , , , a, b] = myArray;
// console.log(a, b);

// Ejemplo para Nahuel
let userInput;

do {
    userInput = prompt("Por favor, ingresa un string:");
    
    if (userInput === null || userInput === "") {
        alert("Por favor, ingresa un valor.");
    } else if (!isNaN(userInput)) {
        alert("No se permiten números. Por favor, ingresa un string.");
    } else if (userInput.trim() === "") {
        alert("No se permiten cadenas vacías. Por favor, ingresa un string.");
    }
} while (userInput === null  || userInput === "" || !isNaN(userInput) || userInput.trim() === "");

console.log("¡Ingresaste un string válido:", userInput);

