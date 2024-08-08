// efectos y animaciones
anime({ //Animacion para la barra de navegacion
    targets: '.nav',
    translateX: [100, 0],
    duration: 2000,
    opacity: [0, 1],
    delay: (el, i) => {
        return 300 + 100 * i;
    },
});

anime({ //Animacion para la barra de navegacion
    targets: '.nav .nav-link i',
    duration: 2000,
    opacity: [0, 1],
    delay: 800
});

anime({ //Animacion para la barra de navegacion
    targets: '.logo',
    translateX: [-100, 100],
    duration: 2000,
    delay: (el, i) => {
        return 300 + 100 * i;
    },
});

anime({ //Animacion para diferentes partes del sitio
    targets: '.tituloPrincipal, .banner, .input-group, .buscarSub, #contactForm, .carritoProducto, .carritoAcciones, .carritoVacio',
    translateY: [100,0],
    opacity: [0, 1],
    easing: 'easeInQuad',
});

////Animacion para los filtros de las diferentes categorias de los productos
document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filtros'); 
    // Configuración de la animación
    const animationDuration = 800; // Duración de la animación en milisegundos
    const delayBetweenButtons = 300; // Retardo entre cada botón en milisegundos
    filterButtons.forEach((button, index) => {
        anime({
            targets: button,
            opacity: [0, 1],
            translateX: [200, 0],
            duration: animationDuration,
            delay: index * delayBetweenButtons,
            easing: 'linear',
        });
    });
});

//Animacion para mostrar las tarjeta de los productos al cargar el sitio
document.addEventListener('DOMContentLoaded', function () {
    const productosCards = document.querySelectorAll('#contenedorProductos');
    productosCards.forEach((card, index) => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800, 
            delay: anime.stagger(100, {start: 500}),  //Retardo entre cada tarjeta
            easing: 'cubicBezier(.5, .05, .1, .3)', 
        });
    });
});

//Selecciona todos los botones dentro del contenedor de filtros
const filtroBtn = document.querySelectorAll('#filtros button'); 
    filtroBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        reiniciarAnimacionesTarjetas();
    });
});

//Reiniciar la animacion del producto al selecionar una categoria 
function reiniciarAnimacionesTarjetas() {
    const productoTarjetas = document.querySelectorAll('.card');
    productoTarjetas.forEach((card, index) => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 1000,
            delay: index * 200,
            easing: 'easeOutExpo',
        });
    });
};


