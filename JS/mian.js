const API_URL = "https://fakestoreapi.com";
let productos = [];

function cargarProductos(API_URL) {
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            productos = data; // Asignar los datos obtenidos a la variable productos
            localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los productos en localStorage
            mostrarProductos(productos); // Mostrar todos los productos al cargar
        });
}

function mostrarProductos(productos) {
    let productosHTML = "";

    productos.forEach(element => {
        productosHTML += `
        <div class="card text-center">
            <img src="${element.image}" class="imagenProducto card-img-top" alt="${element.title}" onclick="detalleProducto(${element.id});">
            <div class="card-body">
                <h5 class="card-title nombreProducto">${element.title}</h5>
                <p class="card-text precioProducto">$${element.price} CLP</p>
            </div>
            <div class="card-footer text-body-secondary">
                <p class="card-text"><button class="agregarProducto" onclick="agregarAlCarrito(${element.id});">Agregar (+)</button></p>
            </div>
        </div>`;
    });
    document.getElementById("contenedorProductos").innerHTML = productosHTML;
}

function detalleProducto(id) {
    const producto = productos.find(item => item.id == id);
    if (producto) {
        Swal.fire({
            title: producto.title,
            html: `
            <div class="container text-center">
                <div class="row">
                    <div class="col align-content-center">
                        <img class="imagen pt-4" src="${producto.image}" alt="${producto.title}" ">
                    </div>
                    <div class="col align-content-center">
                        <p>${producto.description}</p>
                        <p>Precio: $${producto.price} CLP</p>
                    </div>
                </div>`,
            showCloseButton: true,
            showConfirmButton: true,
            confirmButtonText: 'Añadir al carrito',
            width :'80%',
            customClass: {
                confirmButton: 'custom-confirm-button'
            }
        });
    }
};