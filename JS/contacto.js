// Formulario de contacto.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('textArea').value;

    if (nombre && apellido && email && mensaje) {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, apellido, email, mensaje })
        })
        .then(response => response.json())
        .then(data => {
            Swal.fire({
                title: "¡Buen trabajo!",
                text: "Formulario enviado con éxito",
                icon: "success"
            });
        })
        .catch(error => {
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un problema al enviar el formulario",
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
        });
    } else {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Por favor, completa todos los campos",
            footer: '<a href="#">¿Por qué tengo este problema?</a>'
        });
    }
});



