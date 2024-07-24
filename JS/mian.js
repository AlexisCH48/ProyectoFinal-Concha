// Datos productos
const productos = [
    // poleras
    {
        id:1,
        titulo: "polera 01",
        imagen: "../../Pre-entrega3/img/polera_1.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1500"
    },
    {
        id:2,
        titulo: "polera 02",
        imagen: "../../Pre-entrega3/img/polera_2.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1300"
    },
    {
        id:3,
        titulo: "polera 03",
        imagen: "../../Pre-entrega3/img/polera_3.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1600"
    },
    {
        id:4,
        titulo: "polera 04",
        imagen: "../../Pre-entrega3/img/polera_4.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1700"
    },
];

// const contenedorProductos = document.querySelector("#contenedorProductos");
// let agregarProducto = document.querySelectorAll(".agregarProducto");
// const numero = document.querySelector("#numero");


function cargarProductos(productos){
    let productosHTML = "";

    for (const producto of productos){
        productosHTML += `
        <div class="card text-center">
            <img src="${producto.imagen}" class="imagenProducto card-img-top" alt="${producto.titulo}">
            <div class="card-body detallesProducto">
                <h5 class="card-title nombreProducto">${producto.titulo}</h5>
                <p class="card-text precioProducto">$${producto.precio} CLP</p>
                <p class="card-text"><button class="agregarProducto" onclick="agregarAlCarrito(${producto.id});">Agregar (+)</button></p>
                
            </div>
        </div>`;
    }
    document.getElementById("contenedorProductos").innerHTML = productosHTML
}

function agregarAlCarrito (id){
    const producto = productos.find(item => item.id == id);
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    carrito.push(producto);

    localStorage.setItem("carrito", JSON.stringify(carrito));
    numeroTotalCarrito()
}

function numeroTotalCarrito(){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    document.getElementById("carritoNumero").innerHTML = carrito.length;

    return carrito.length;
}

cargarProductos(productos);
numeroTotalCarrito()



// function actualizarAgregarProducto(){
//     agregarProducto = document.querySelectorAll(".agregarProducto");
//     agregarProducto.forEach(boton =>{
//         boton.addEventListener("click", agregarAlCarrito)
//     })
    
// };

// const productosEnCarrito = [];

// function agregarAlCarrito(e){
//     const idBoton = e.currentTarget.id;
//     const productoAgregado = productos.find(producto => producto.id === idBoton);

//     if (productosEnCarrito.some(producto => producto.id === idBoton)){
//         const index = productosEnCarrito.findIndex(producto => producto.id === idBoton);
//         productosEnCarrito[index].cantidad++;
//     }else {
//         productoAgregado.cantidad = 1;
//         productosEnCarrito.push(productoAgregado);
//     }
//     actualizarNumeroCarrito();
// };

// function actualizarNumeroCarrito(){
//     let nuevoNumero = productosEnCarrito.reduce((acc, producto) => acc + producto.cantidad, 0);
//     numero.innertext = nuevoNumero;
//     console.log(numero);
// }