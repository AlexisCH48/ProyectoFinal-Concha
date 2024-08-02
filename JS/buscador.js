// const products = [
//     { id: 1, name: 'Producto 1', price: 100 },
//     { id: 2, name: 'Producto 2', price: 200 },
//     { id: 3, name: 'Producto 3', price: 300 },
//     // Añade más productos según sea necesario
// ];

// script.js
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const filteredProducts = productos.filter(product => product.title.toLowerCase().includes(searchInput));

    if (filteredProducts.length > 0) {
        let productList = '<div class="list-group">';
        filteredProducts.forEach(product => {
            productList += `
                <div class="list-group-item">
                    <img src="${product.image}" alt="${product.title}" style="width: 50px; height: 50px; margin-right: 10px;">
                    <span>${product.title} - $${product.price} CLP</span>
                </div>`;
        });
        productList += '</div>';

        Swal.fire({
            title: 'Productos Encontrados',
            html: productList,
            icon: 'success'
        });
    } else {
        Swal.fire({
            title: 'No se encontraron productos',
            text: 'Intenta con otro término de búsqueda.',
            icon: 'error'
        });
    }
});

