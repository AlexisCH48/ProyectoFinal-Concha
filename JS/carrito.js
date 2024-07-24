// funcion que agrega las etiquetas HTML de los productos selecionados en el carrito
function productosEnCarrito(){
    const carrito = guardarCarritoStorage();
    let productosHTML = "";

    if (numeroTotalCarrito() > 0){ //validacion de productos en el carrito
        for (const producto of carrito){
            productosHTML +=`<div class="carritoProducto d-flex justify-content-evenly text-center">
                    <img class="carritoProductoImagen" src="${producto.imagen}" alt="${producto.titulo}">
                    <div class="carritoProductoNombre">
                        <small>Título</small>
                        <h2>${producto.titulo}</h2>
                    </div>
                    <div class="carritoProductoCantidad">
                        <small>Cantidad</small>
                        <p>${producto.cantidad}</p>
                    </div>
                    <div class="carritoProductoPrecio">
                        <small>Precio</small>
                        <p>$${producto.precio} CLP</p>
                    </div>
                    <div class="carritoProductoSubtotal">
                        <small>Subtotal</small>
                        <p>$${producto.precio * producto.cantidad} CLP</p>
                    </div>
                    <button class="carritoProductoEliminar" onclick="borrarProducto(${producto.id});"><i class="bi bi-trash ps-2"></i></button>
                </div>`;
        }
        //mostar el total y el boton de compra
        productosHTML += `
        <div class="carritoAcciones">
            <div class="carritoAccionesIzquierda">
                <button class="carritoAccionesVaciar" onclick="eliminarCarrito();">Vaciar Carrito</button>
            </div>
            <div class="carritoAccionesDerecha">
                <div class="carritoAccionesTotal">
                    <p>Total:</p>
                    <p>$${calcularTotalCarrito()}</p>
                </div>
                <button class="carritoAccionesComprar">Comprar Ahora</button>
            </div>
        </div>`;
    }else { 
        //mostrar en caso de que el carrito este vacio
        productosHTML += `<p class="carritoVacio">El carrito esta vacio <i class="bi bi-cart-x"></i></p>`
    };
    document.getElementById("contenedorCarrito").innerHTML = productosHTML;
};

// Funcion para calcular el precio a pagar en base a las cantidades de productos en el carrito
function calcularTotalCarrito(){
    const totalCarrito = guardarCarritoStorage();
    return totalCarrito.reduce((total, producto) => total + (producto.precio * producto.cantidad), 0);
}

productosEnCarrito();
