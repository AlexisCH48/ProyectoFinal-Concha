// efectos y animaciones
anime({
    targets: '.nav',
    translateX: [100, 0],
    duration: 2000,
    opacity: [0, 1],
    delay: (el, i) => {
        return 300 + 100 * i;
    },
});

anime({
    targets: '.nav .nav-link i',
    duration: 2000,
    opacity: [0, 1],
    delay: 800
});

anime({
    targets: '.logo',
    translateX: [-100, 100],
    duration: 2000,
    delay: (el, i) => {
        return 300 + 100 * i;
    },
});

anime({
    targets: '.tituloPrincipal',
    translateY: [100,0],
    opacity: [0, 1],
    easing: 'easeInQuad',
})

anime({
    targets: '.banner',
    translate: [100,0],
    opacity: [0, 1],
    easing: 'easeInQuad',
})

document.addEventListener('DOMContentLoaded', function () {
    const filterButtons = document.querySelectorAll('#filtros'); // Cambia '.filter-button' por tu selector de botones
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

document.addEventListener('DOMContentLoaded', function () {
    const productosCards = document.querySelectorAll('#contenedorProductos');
    productosCards.forEach((card, index) => {
        anime({
            targets: card,
            opacity: [0, 1],
            translateY: [20, 0],
            duration: 800, // Duración de la animación en milisegundos
            delay: anime.stagger(100, {start: 500}),  // Retardo entre cada tarjeta
            easing: 'cubicBezier(.5, .05, .1, .3)', 
        });
    });
});

const filtroBtn = document.querySelectorAll('#filtros button'); // Selecciona todos los botones dentro del contenedor de filtros
    filtroBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        reiniciarAnimacionesTarjetas();
    });
});

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
}


