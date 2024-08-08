//Funcion para agregar los productos al carrito y guardar los datos en el localstorage
function agregarAlCarrito (id){
    const producto = productos.find(item => item.id == id);
    const carrito = guardarCarritoStorage();
    const productoEnCarrito = carrito.find(item => item.id == id);

    //Validacion de la cantidad de productos en el carrito (por producto)
    if (productoEnCarrito){
        productoEnCarrito.cantidad += 1;
    }else{
        producto.cantidad = 1;
        carrito.push(producto);
    };
    localStorage.setItem("carrito", JSON.stringify(carrito));
    botonCarrito()
    Swal.fire({
        title: 'Producto agregado',
        text: `${producto.title} ha sido agregado al carrito.`,
        icon: 'success',
        timer: 3000,
        showConfirmButton: false
    });
}

//Funcion para eliminar un producto de la lista en el carrito
function borrarProducto(id){
    const carrito = guardarCarritoStorage();
    const nuevoCarrito = carrito.filter(item => item.id != id);
    localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
    productosEnCarrito();
    botonCarrito();
}

//Funcion papra actualiza la cantidad de productos en el carrito
function botonCarrito(){
    const carrito = guardarCarritoStorage();
    const totalProductos = carrito.reduce((total, producto) => total + producto.cantidad, 0);
    document.getElementById("carritoNumero").innerHTML = totalProductos;
}

//Funcion para contar el numero de productos a comprar en el carrito
function numeroTotalCarrito(){
    const carrito = guardarCarritoStorage();
    return carrito.length;
}

//Funcion para reutilizar los datos guardados en el localstorage
function guardarCarritoStorage(){
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

//Funcion para vaciar el carrito borrando el localstorage
function eliminarCarrito(){
    localStorage.removeItem("carrito");
    productosEnCarrito();
    botonCarrito()
}

//Llamado de las funciones 
cargarProductos(API_URL);
botonCarrito()