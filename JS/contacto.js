// Formulario de contacto.js
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el envío del formulario
    
    //Cosntantes para los datos del usuario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const mensaje = document.getElementById('textArea').value;

    // validacion de datos del usuario
    if (nombre && apellido && email && mensaje) {
        fetch('https://jsonplaceholder.typicode.com/posts', { 
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ nombre, apellido, email, mensaje }) //enviar datos con el metodo POST
        })
        .then(response => response.json()) //Ventana emergente cuando el envío de datos es correcto
        .then(data => {
            Swal.fire({
                title: "¡Buen trabajo!",
                text: "Formulario enviado con éxito",
                icon: "success"
            });
        })
        .catch(error => { //Ventana emergente cuando no se pueden enviar los datos
            console.error('Error:', error);
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Hubo un problema al enviar el formulario",
                footer: '<a href="#">¿Por qué tengo este problema?</a>'
            });
        });
    } else {
        Swal.fire({ //Ventana emergente cuando faltan datos por completar
            icon: "error",
            title: "Oops...",
            text: "Por favor, completa todos los campos",
            footer: '<a href="#">¿Por qué tengo este problema?</a>'
        });
    }
});



