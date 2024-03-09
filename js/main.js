//Constante
const numeroRandom = 23;

// Funciones
function checkUsuario() {
    const textoUsuario = document.getElementById('textoUsuario');
    const invitado = parseInt(textoUsuario.value);

    console.log('Número correcto' , numeroRandom);

    if (isNaN(invitado) || invitado < 1 || invitado >50) {
        alert('ERROR! INGRESA UN NÚMERO VÁLIDO, POR FAVOR.');
        return;
    }

    console.log('Número ingresado:' , invitado);

    //Ciclo
    let intentos = 0;
    while (invitado !== numeroRandom){
        if (invitado < numeroRandom){
            alert('Muy cerca! Pero es mayor. Intenta de nuevo');
        } else{
            alert('Casi! Pero es menor. Intenta de nuevo');
        }
        return;
    }

    //Mensaje
    alert('WoW! Has adivinado el número correcto!')
}

// Event
document.getElementById('boton').addEventListener('click', checkUsuario);


    //Ciclo
//     let intentos = 0;
//     do{
//         if(invitado < numeroRandom){
//             alert('Muy cerca! Pero es mayor. Intenta de nuevo');
//         } else if (invitado > numeroRandom){
//             alert('Casi! Pero es menor. Intenta de nuevo');
//         }
//         intentos++;
//         // invitado = parseInt(prompt('Intenta de nuevo'));
//     } while (invitado !== numeroRandom)

//     //Mensaje
//     alert('WoW! Has adivinado el número correcto!')

//     let contador;
//     for (contador =0; invitado !== numeroRandom; contador++) {
//         if (invitado < numeroRandom) {
//             alert('Muy cerca! Pero es mayor. Intenta de nuevo');
//         } else if (invitado > numeroRandom){
//             alert('Casi! Pero es menor. Intenta de nuevo');
//         }
//         return;
//     }
//     alert('WoW! Has adivinado el número correcto!')
// }
