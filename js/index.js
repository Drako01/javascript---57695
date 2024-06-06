// console.log("primer script");

// setTimeout(() =>{
//     console.log("segundo script")
// }, 1000);

// console.log("tercero script");

// for (let i of "Hola"){
//     setTimeout(() => {
//         console.log(i)
//     }, 1000)
// }
// for (let i of " Mundo"){
//     setTimeout(() => {
//         console.log(i)
//     }, 2000)
// }

// setInterval(()=>{ 
//     console.log("Intervalos")
// }, 1000)

// let counter = 0;
// const interval = setInterval(() => {
//     counter++
//     console.log("Counter: ", counter)

//     if (counter >= 5) {
//         clearInterval(interval)
//         console.log("Se removió el intervalo")
//     }
// }, 1000)

// console.log("Inicio")

// const fin = setTimeout(() => {
//     console.log("fin")
// }, 2000)

// clearTimeout(fin)


// Promesas
const eventoFuturo = (res) => {
    return new Promise( (resolve, reject) => {        
            res ? resolve('Promesa resuelta') : reject('Promesa rechazada')
        
    })
}

// eventoFuturo(false)
//     .then( (response) => {
//         console.log(response) // Promesa resuelta
//     })
//     .catch( (error) => {
//         console.log(error) // Promesa rechazada
//     })
//     .finally(() => {
//         console.log("Proceso terminado")
//     })

// eventoFuturo(false)
//     .then( (response) => {
//         console.log(response) // Promesa resuelta
//     })
//     .catch( (error) => {
//         console.log(error) // Promesa rechazada
//     })
//     .finally(() => {
//         console.log("Proceso terminado")
//     })


const BD = [
    {id: 1, nombre: "Producto 1", precio: 3900},
    {id: 2, nombre: "Producto 2", precio: 1300},
    {id: 3, nombre: "Producto 3", precio: 3200},
    {id: 4, nombre: "Producto 4", precio: 3700},
]

const pedirProductos = () => {
    return new Promise ( (resolve , reject) => {
        setTimeout(() => {
            resolve(BD)
        }, 3000)
    })
}

let productos = [];

const renderProductos = (arr) => {
    const container = document.getElementById('productos-container');
    container.innerHTML = ''; // Limpiar cualquier contenido previo
    arr.forEach(producto => {
        const productDiv = document.createElement('div');
        productDiv.className = 'producto';
        productDiv.innerHTML = `
            <h3>${producto.nombre}</h3>
            <p>Precio: $${producto.precio}</p>
        `;
        container.appendChild(productDiv);
    });
}

pedirProductos()
    .then((res) =>{
        productos = res
        renderProductos(productos)
    })
    .catch((error) =>{
        console.error("Promesa Rechazada")
    })
    .finally(() => {
        console.log("Fin de Proceso")
    })