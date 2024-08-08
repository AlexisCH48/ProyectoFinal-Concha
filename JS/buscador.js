
document.getElementById('searchButton').addEventListener('click', function() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

     // Verificar si el campo de búsqueda está vacío
    if (searchInput.trim() === '') {
        Swal.fire({
            title: 'Campo de búsqueda vacío',
            text: 'Por favor, ingresa un término de búsqueda.',
            icon: 'warning'
        });
        return;
    }

    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const filteredProducts = productos.filter(product => product.title.toLowerCase().includes(searchInput));

    if (filteredProducts.length > 0) {
        let productList = '<div class="list-group">';
        filteredProducts.forEach(product => {
            productList += `
            <div class="container text-center list-group-item">
                <div class="row">
                    <div class="col">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="col">
                        <h2 class="fs-5 fw-medium">Nombre</h2>
                        <span>${product.title}</span>
                    </div>
                    <div class="col">
                    <h2 class="fs-5 fw-medium">Precio</h2>
                        <span>$${product.price} CLP</span>
                    </div>
                    <div class="col d-flex align-items-center">
                        <button class="agregarProducto" onclick="agregarAlCarrito(${product.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        });
        productList += '</div>';
        Swal.fire({
            title: 'Productos Encontrados',
            html: productList,
            width :'70%',
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

