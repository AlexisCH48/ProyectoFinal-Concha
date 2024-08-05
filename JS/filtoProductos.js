function filtrarProductos(categoria) {
    const productosFiltrados = productos.filter(producto => producto.category === categoria);
    mostrarProductos(productosFiltrados);
}

function mostrarTodosLosProductos() {
    mostrarProductos(productos);
}

document.addEventListener('DOMContentLoaded', () => {
    cargarProductos(API_URL);
});