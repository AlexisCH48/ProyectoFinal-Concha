//Funcion para filtar productos por categoria
function filtrarProductos(categoria) {
    const productosFiltrados = productos.filter(producto => producto.category === categoria);
    mostrarProductos(productosFiltrados);
}
//Funcion para mostrar todos los productos
function mostrarTodosLosProductos() {
    mostrarProductos(productos);
}
//Cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
    cargarProductos(API_URL);
});