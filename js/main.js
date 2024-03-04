//Constante
const numeroRandom = Math.floor(Math.random() * 50) + 1;

// Funciones
function checkUsuario() {
    const textoUsuario = document.getElementById('textoUsuario');
    const invitado = parseInt(textoUsuario.value);

    if (isNaN(invitado)) {
        setMessage('ERROR! INGRESA UN NÚMERO VÁLIDO, POR FAVOR.');
        return;
    }

    if (invitado === numeroRandom) {
        setMessage('¡WoW! ¡Has adivinado el número correcto!');
    } else if (invitado < numeroRandom) {
        setMessage('Muuuuy cerca, pero es mayor. Intenta de nuevo.');
    } else {
        setMessage('Casiii, pero es menor. Intenta de nuevo.');
    }
}

// Mensaje
function setMessage(mensaje) {
    const messageElement = document.getElementById('mensaje');
    messageElement.textContent = mensaje;
}

// Event
document.getElementById('boton').addEventListener('click', checkUsuario);
