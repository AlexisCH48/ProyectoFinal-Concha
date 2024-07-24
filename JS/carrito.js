function productosEnCarrito(productos){
    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
    let productosHTML = "";

    for (const producto of carrito){
        productosHTML += `
        <div class="carritoProducto d-flex justify-content-evenly">
            <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
            <div class="carritoProductoNombre">
                <small>Título</small>
                <h2>${producto.titulo}</h2>
            </div>
            <div class="carritoProductoCantidad">
                <small>Cantidad</small>
                <p>1</p>
            </div>
            <div class="carritoProductoPrecio">
                <small>Precio</small>
                <p>$${producto.precio} CLP</p>
            </div>
            <div class="carritoProductoSubtotal">
                <small>Subtotal</small>
                <p>$${producto.precio} CLP</p>
        </div>
        <button class="carritoProductoEliminar"><i class="bi bi-trash ps-2"></i></button>
    </div>`;
    
    }
    document.getElementById("contenedorProductos").innerHTML = productosHTML
    
}

productosEnCarrito();