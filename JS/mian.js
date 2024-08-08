const API_URL = "https://fakestoreapi.com"; //Url api 
let productos = [];
//Cargar datos desde la api consumida
function cargarProductos(API_URL) {
    fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            productos = data; // Asignar los datos obtenidos a la variable productos
            localStorage.setItem('productos', JSON.stringify(productos)); // Guardar los productos en localStorage
            mostrarProductos(productos); // Mostrar todos los productos al cargar
        });
}
// Funcion para integrar las card con los datos de los productos (DOM)
function mostrarProductos(productos) {
    let productosHTML = "";

    productos.forEach(element => { //iteracion de los datos por producto
        productosHTML += `
        <div class="card text-center">
            <img src="${element.image}" class="imagenProducto card-img-top" alt="${element.title}" onclick="detalleProducto(${element.id});">
            <div class="card-body">
                <h5 class="card-title nombreProducto">${element.title}</h5>
                <p class="card-text precioProducto">$${element.price} CLP</p>
            </div>
            <div class="card-footer text-body-secondary d-flex justify-content-center">
                <button class="agregarProducto" onclick="agregarAlCarrito(${element.id});">Agregar <i class="bi bi-plus-circle"></i></button>
            </div>
        </div>`;
    });
    document.getElementById("contenedorProductos").innerHTML = productosHTML;
}
// Funcion para mostrar el detalle los datos de cada producto
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
        }).then((result) => { //Agrega la funcion de agregar el producto al carrito desde la ventana emergente
            if (result.isConfirmed) {
                agregarAlCarrito(id); // Llama a la función agregarAlCarrito con el ID del producto
            }
        });
    }
};