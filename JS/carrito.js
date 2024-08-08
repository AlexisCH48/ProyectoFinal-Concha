// funcion que agrega las etiquetas HTML de los productos selecionados en el carrito
function productosEnCarrito(){
    const carrito = guardarCarritoStorage();
    let productosHTML = "";

    if (numeroTotalCarrito() > 0){ //validacion de productos en el carrito
        for (const producto of carrito){
            productosHTML +=`
            <div class="container text-center ">
                <div class="row carritoProducto">
                    <div class="col">
                        <img class="carritoProductoImagen" src="${producto.image}" alt="${producto.title}">
                    </div>
                    <div class="col carritoProductoNombre">
                        <h2 class="titulosCarrito">Producto</h2>
                        <p>${producto.title}</p>
                    </div>
                    <div class="col carritoProductoCantidad">
                        <h2 class="titulosCarrito">Cantidad</h2>
                        <div class="d-flex justify-content-center align-items-center text-center">
                            <button class="btn" onclick="cambiarCantidad(${producto.id}, -1);"><i class="bi bi-dash-circle"></i></button>
                            <p class="mx-2">${producto.cantidad}</p>
                            <button class="btn" onclick="cambiarCantidad(${producto.id}, 1);"><i class="bi bi-plus-circle"></i></button>
                        </div>
                    </div>
                    <div class="col carritoProductoPrecio">
                        <h2 class="titulosCarrito">Precio</h2>
                        <p>$${producto.price} CLP</p>
                    </div>
                    <div class="col carritoProductoSubtotal">
                        <h2 class="titulosCarrito">Subtotal</h2>
                        <p>$${producto.price * producto.cantidad} CLP</p>
                    </div>
                    <div class="col">
                        <button class="carritoProductoEliminar" onclick="borrarProducto(${producto.id});"><i class="bi bi-trash ps-2"></i></button>
                    </div>
                </div>
            </div>`;
        }
        //mostar el total y el boton de compra
        productosHTML += `
        <div class="container carritoAcciones">
            <div class="carritoAccionesIzquierda">
                <button class="carritoAccionesVaciar" onclick="eliminarCarrito();">Vaciar Carrito</button>
            </div>
            <div class="carritoAccionesDerecha">
                <div class="carritoAccionesTotal">
                    <p class="fw-bold">Total:</p>
                    <p>$${calcularTotalCarrito()}</p>
                </div>
                <button class="carritoAccionesComprar" onclick="comprarAhora();">Comprar Ahora</button>
            </div>
        </div>`;
    }else{ 
        //mostrar en caso de que el carrito este vacio
        productosHTML += `<h2 class="carritoVacio">El carrito esta vacio<i class="bi bi-cart-x"></i></h2>`
    };
    document.getElementById("contenedorCarrito").innerHTML = productosHTML;
};

// Funcion para calcular el precio a pagar en base a las cantidades de productos en el carrito
function calcularTotalCarrito(){
    const totalCarrito = guardarCarritoStorage();
    return totalCarrito.reduce((total, producto) => total + (producto.price * producto.cantidad), 0);
};

// Función para cambiar la cantidad de un producto en el carrito
function cambiarCantidad(id, cantidad) {
    let carrito = guardarCarritoStorage();
    const producto = carrito.find(item => item.id === id);
    if (producto) {
        producto.cantidad += cantidad;
        if (producto.cantidad <= 0) {
            carrito = carrito.filter(item => item.id !== id);
        }
        localStorage.setItem('carrito', JSON.stringify(carrito));
        productosEnCarrito();
    }
};

// Función ficticia para simular la compra
function comprarAhora() {
    Swal.fire({
        title: 'Compra realizada',
        text: 'Tu compra se ha realizado con éxito.',
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
    });

    // Vaciar el carrito después de la compra
    eliminarCarrito();
}

// Función para vaciar el carrito
function eliminarCarrito() {
    localStorage.removeItem('carrito');
    productosEnCarrito();
}


productosEnCarrito();

