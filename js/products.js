// const lista = document.getElementById('listado');


// fetch("https://jsonplaceholder.typicode.com/posts")
//     .then((response) => response.json())
//     .then((data) => {
//         data.forEach(element => {
//             const li = document.createElement('li');
//             li.innerHTML = `
//                 <h3>ID: ${element.id}</h3>
//                 <h4>${element.title}</h4>
//                 <p>${element.body}</p>
//             `
//             lista.appendChild(li)
//         });
//     })
    


// fetch("https://jsonplaceholder.typicode.com/posts" , 
//     {
//         method: 'POST',
//         body: JSON.stringify({
//             title: 'Nuevo Objeto',
//             body: 'Post de Prueba',
//             userId: 1
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8'
//         }
//     })
//     .then((response) => response.json())
//     .then((data) => console.log(data))
    


// const lista = document.getElementById('listado');

// fetch('/data.json')
// .then( (response) => response.json())
// .then ( (data) => {
//     data.forEach(producto => {
//         const li = document.createElement('li');
//         li.innerHTML = `
//             <h4>${producto.nombre}</h4>
//             <p>$${producto.precio}</p>
//         `
//         lista.appendChild(li)
//     });
// })

const cards = document.getElementById('cards');

// const peticion1 = async () => {
//     const respuesta = await fetch('/productos.json')
//     const datos = await respuesta.json();
//     const data = await datos
//     for( item of data) {
//         const card = document.createElement('div')
//         card.innerHTML = `
//             <div class="card" style="width: 18rem; height: 32rem;">
//             <img class="card-img-top" src=${item.imagen} alt=${item.nombre}/>
//             <div class="card-body">
//                 <h5 class="card-title">${item.nombre}</h5>
//                 <p class="card-text">Descripcion: ${item.descripcion}</p>
//                 <p class="card-text">Precio: $${item.precio}.-</p>
//                 <p class="card-text">Stock: ${item.stock}.-</p>
//                 <a href="#" class="btn btn-primary">Comprar</a>
//             </div>     
//         </div>    
//         `

//         cards.appendChild(card)
//     }
// }
// peticion1();

const peticionML = async () => {
    const respuesta = await fetch('https://api.mercadolibre.com/sites/MLA/search?q=Samsung')
        const datos = await respuesta.json();
        const data = await datos.results
        for( item of data) {
            const card = document.createElement('div')
            card.innerHTML = `
                <div class="card" style="width: 18rem; height: 32rem;">
                    <img class="card-img-top" src=${item.thumbnail} alt=${item.title}/>
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">Proveedor: ${item.official_store_name}</p>
                        <p class="card-text">Precio: $${item.price}.-</p>
                        <a href="#" class="btn btn-primary">Comprar</a>
                    </div>     
                </div>  
            `
    
            cards.appendChild(card)
        }

}

peticionML(); // Se ejecuta en Segundo Plano