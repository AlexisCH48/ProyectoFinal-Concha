const API_URL = "https://fakestoreapi.com"
let productos = [];

function cargarProductos(API_URL){
    fetch(`${API_URL}/products`)
        .then(res=>res.json())
        .then(data => {
            productos = data; // Asignar los datos obtenidos a la variable productos
            localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los productos en localStorage
            let productosHTML = "";

            data.forEach(element => {
                productosHTML += `
            <div class="card text-center">
                <img src="${element.image}" class="imagenProducto card-img-top" alt="${element.title}">
                <div class="card-body detallesProducto">
                    <h5 class="card-title nombreProducto">${element.title}</h5>
                    <p class="card-text precioProducto">$${element.price} CLP</p>
                    <p class="card-text"><button class="agregarProducto" onclick="agregarAlCarrito(${element.id});">Agregar (+)</button></p>
                </div>
            </div>`;
            });
            document.getElementById("contenedorProductos").innerHTML = productosHTML;
            console.log(data);
        });
};

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

cargarProductos(API_URL);
botonCarrito()
