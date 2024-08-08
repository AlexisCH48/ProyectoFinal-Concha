//Funcion para buscar productos 
document.getElementById('botonBuscar').addEventListener('click', function() {
    const searchInput = document.getElementById('buscarInput').value.toLowerCase();

    //Verificar si el campo de búsqueda está vacío
    if (searchInput.trim() === '') {
        Swal.fire({
            title: 'Campo de búsqueda vacío',
            text: 'Por favor, ingresa un término de búsqueda.',
            icon: 'warning'
        });
        return;
    }
    //Guardar el localstorage en una variable para filtar los productos
    const productos = JSON.parse(localStorage.getItem('productos')) || [];
    const productosFiltrados = productos.filter(product => product.title.toLowerCase().includes(searchInput));
    //Validacion de datos de los productos (muestra los productos en caso de que filterporducts)
    if (productosFiltrados.length > 0) {
        let productosLista = '<div class="list-group">';
        productosFiltrados.forEach(product => {
            productosLista += `
            <div class="container text-center list-group-item">
                <div class="row">
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <img src="${product.image}" alt="${product.title}">
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                        <h2 class="fs-5 fw-medium">Nombre</h2>
                        <span>${product.title}</span>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3">
                    <h2 class="fs-5 fw-medium">Precio</h2>
                        <span>$${product.price} CLP</span>
                    </div>
                    <div class="col-12 col-sm-6 col-md-4 col-lg-3 d-flex align-items-center">
                        <button class="agregarProducto" onclick="agregarAlCarrito(${product.id});">Agregar (+)</button>
                    </div>
                </div>
            </div>`;
        });
        productosLista += '</div>';
        Swal.fire({ //Muestra los productos encontrados en una ventana emergente
            title: 'Productos Encontrados',
            html: productosLista,
            width :'70%',
            icon: 'success'
        });
    } else {
        Swal.fire({ //Muestra una ventana emergente si es que no encuentra los productos
            title: 'No se encontraron productos',
            text: 'Intenta con otro término de búsqueda.',
            icon: 'error'
        });
    }
});

