// const myArray = [1, 2, 3, 4, 5, 6];

// // console.log(myArray[0], myArray[1], myArray[2], myArray[3], myArray[4], myArray[5]);

// // console.log(...myArray); // Spread Operator

// const myArrayDeNombres = ["Alejandro", "Julian", "Agustin"];
// const myArrayDeNombres2 = ["Leandro", "Narella", "Cielo"];

// // console.log(...myArrayDeNombres);
// // console.log(...myArrayDeNombres2);

// const newArray = [myArrayDeNombres + myArrayDeNombres2];
// const newArray2 = [...myArrayDeNombres, ...myArrayDeNombres2]; // Forma correcta de crear un nuevo Array con los elementos de 2 o mas Arrays
// console.log(newArray.length);
// console.log(newArray);
// console.log(newArray2.length);
// console.log(newArray2);

// const numerosVarios = [23, 56, 9, -8 , -10, 120, 5];

// console.log(Math.max(numerosVarios)); // Esperamos 120 pero nos da un NaN

// console.log(Math.max(...numerosVarios));  // Esperamos 120 y nos da 120
// console.log(Math.min(...numerosVarios)); // Esperamos -10 y nos da -10



// const myArrayDeNombres1 = ["Alejandro", "Julian", "Agustin"];
// const myArrayDeNombres2 = ["Leandro", "Narella", "Cielo"];

// const newArray3 = [...myArrayDeNombres1, ...myArrayDeNombres2];

// const myObjDeNombres = {
//     ...newArray3
// };

// console.log(myObjDeNombres);

// Spread en Objetos
// const persona = {
//     nombre: "Ivan",
//     edad: 25,
//     curso: "Javascript"
// }

// console.log(persona);

// const personaDatosPersonales = {
//     ...persona,
//     email: "miemail@mail.com",
//     telefono: 1122225555,
//     nacionalidad: "Arg"
// };

// const personaDatosDelTrabajo = {
//     ...persona,
//     sueldo: 1000000,
//     empresa: "Microsoft"
// }

// const ivanCompleto = {
//     ...personaDatosPersonales,
//     ...personaDatosDelTrabajo
// }
// console.log(personaDatosPersonales);
// console.log(personaDatosDelTrabajo);
// console.log(ivanCompleto);

// Rest parameters
// const numerosVarios = [23, 56, 9, 8 , 10, 120, 5];
// const numeros = [1, 2]

// function sumarNumeros(...numerosPorParametro){
//     return console.log(numerosPorParametro.reduce((a, n) => a + n, 0))
// }

// sumarNumeros(...numeros);

// sumarNumeros(...numerosVarios);

// sumarNumeros(...numerosVarios, ...numeros, ...numeros);


