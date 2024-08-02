const frutas = ['manzana', 'banana', 'pera', 'naranja', 'uva'];

const inputBuscador = document.getElementById('buscador');
const listaFrutas = document.getElementById('listaFrutas');

inputBuscador.addEventListener('keyup', function (e) {
    const valorBusqueda = e.target.value.toLowerCase();
    const frutasFiltradas = frutas.filter(fruta => fruta.toLowerCase().includes(valorBusqueda));

    listaFrutas.innerHTML = '';

    if (frutasFiltradas.length > 0) {
        frutasFiltradas.forEach(fruta => {
            const li = document.createElement('li');
            li.textContent = fruta;
            listaFrutas.appendChild(li);
        });
    } else {
        const li = document.createElement('li');
        li.textContent = 'No se encontraron resultados';
        listaFrutas.appendChild(li);
    }
});
