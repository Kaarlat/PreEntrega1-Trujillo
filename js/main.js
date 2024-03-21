const Gojo = {
    nombre: "Satoru Gojo",
    poder: 100,
    defensa: 80,
    velocidad: 90,
    imagen: "gojoInicio"
};

const Kakashi = {
    nombre: "Kakashi Hatake",
    poder: 95,
    defensa: 85,
    velocidad: 85,
    imagen: "kakashiInicio"
};

const senseis = [Gojo, Kakashi];

function peleaSenseis(senseis) {
    let turnos = 0;

    while (senseis[0].poder > 0 && senseis[1].poder > 0 && turnos < 10) {
        turnos++;

        const primerAtacante = Math.floor(Math.random() * 2);
        const primerObjetivo = primerAtacante === 0 ? 1 : 0;

        const golpes = Math.floor(Math.random() * 20);

        
        senseis[primerObjetivo].poder -= golpes;

        document.getElementById("gojoInicio").src = senseis [0].imagen;
        document.getElementById("kakashiInicio").src = senseis [1].imagen;
        document.getElementById("resultado").innerText = `Turno ${turnos}: ${senseis[0].nombre}: ${senseis[0].poder} puntos de vida, ${senseis[1].nombre}: ${senseis[1].poder} puntos de vida`;

        if (senseis[0].poder <= 0 || senseis[1].poder <= 0) break;
    }

    
    let resultadoFinal = "";
    if (senseis[0].poder <= 0 && senseis[1].poder <= 0) {
        resultadoFinal = "¡La pelea terminó en empate!";
    } else if (senseis[0].poder <= 0) {
        resultadoFinal = `${senseis[1].nombre} es el ganador de la pelea.`;
        document.getElementById("gojoGana").src = "./src/GojoGana.jpg";
        document.getElementById("kakashiPierde").src = "./src/KakasheDerrota.webp";
    } else {
        resultadoFinal = `${senseis[0].nombre} es el ganador de la pelea.`;
        document.getElementById("KakashiGana").src = "./src/KakashiGana.jpg";
        document.getElementById("gojoPierde").src = "./src/GojoDerrota.jpg";
    }

    
    document.getElementById("resultado").innerText += `\n${resultadoFinal}`;
}


function comenzarPelea() {
    alert("¡La pelea entre Gojo y Kakashi ha comenzado!");
    peleaSenseis(senseis);
}
