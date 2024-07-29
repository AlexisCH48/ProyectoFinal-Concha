// Array datos productos
const productos = [
    // poleras o remera
    {
        id:1,
        titulo: "polera 01",
        imagen: "../img/polera_1.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1500"
    },
    {
        id:2,
        titulo: "polera 02",
        imagen: "../img/polera_2.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1300"
    },
    {
        id:3,
        titulo: "polera 03",
        imagen: "../img/polera_3.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1600"
    },
    {
        id:4,
        titulo: "polera 04",
        imagen: "../img/polera_4.jpg",
        categoria: {
            nombre: "poleras",
            id:"poleras"
        },
        precio: "1700"
    },
];

// funcion para insertar las etiquetas HTML con los datos de los productos del array
function cargarProductos(productos){
    let productosHTML = "";

    for (const producto of productos){ //mostrar contenidos productos
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

// funcion para agregar los productos al carrito y guardar los datos en el localstorage
function agregarAlCarrito (id){
    const producto = productos.find(item => item.id == id);
    const carrito = guardarCarritoStorage();
    const productoEnCarrito = carrito.find(item => item.id == id);

    // validacion de la cantidad de productos en el carrito (por producto)
    if (productoEnCarrito){
        productoEnCarrito.cantidad += 1;
    }else{
        producto.cantidad = 1;
        carrito.push(producto);
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
    botonCarrito()
}

// funcion para eliminar un producto de la lista en el carrito
function borrarProducto(id){
    const carrito = guardarCarritoStorage();
    const nuevoCarrito = carrito.filter(item => item.id != id);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    productosEnCarrito();
    botonCarrito();
}

// funcion papra actualiza la cantidad de productos en el carrito
function botonCarrito(){
    const carrito = guardarCarritoStorage();
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById("carritoNumero").innerHTML = totalProductos;
}

// funcion para contar el numero de productos a comprar en el carrito
function numeroTotalCarrito(){
    const carrito = guardarCarritoStorage();
    return carrito.length;
}

// funcion para reutilizar los datos guardados en el localstorage
function guardarCarritoStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

// funcion para vaciar el carrito borrando el localstorage
function eliminarCarrito(){
    localStorage.removeItem("carrito");
    productosEnCarrito();
    botonCarrito()
}

cargarProductos(productos);
botonCarrito()
