var multijugador = prompt("Quiere jugar contra la maquina o contra un otro jugador? (Escribir maquina o jugador)")
var jugar = "si"
if (multijugador == "jugador") {
    var partidas = prompt("cuantas veces quieres jugar?")
    for (var i = 0; (i < partidas) && (jugar == "si"); i++) {
        var pj1 = prompt("jugador 1 escoja tijera, papel o piedra")
        var pj2 = prompt("jugador 2 escoja tijera, papel o piedra")
        if ((pj1 == "tijera" || pj1 == "papel" || pj1 == "piedra") && (pj2 == "tijera" || pj2 == "papel" || pj2 == "piedra")) {
            if ((pj1 == "tijera" && pj2 == "papel") || (pj1 == "papel" && pj2 == "piedra") || (pj1 == "piedra" && pj2 == "tijera")) {
                alert("jugador 1 gana")
                if (partidas > i+1) {
                    var jugar = prompt("Continuaras jugando las demas partidas")
                    }
            }
            if ((pj2 == "tijera" && pj1 == "papel") || (pj2 == "papel" && pj1 == "piedra") || (pj2 == "piedra" && pj1 == "tijera")) {
                alert("jugador 2 gana")
                if (partidas > i+1) {
                    var jugar = prompt("Continuaras jugando las demas partidas")
                    }
            }
            if (pj2 == pj1) {
                alert("empate")
                if (partidas > i+1) {
                    var jugar = prompt("Continuaras jugando las demas partidas")
                    }
            }
        }
//        else {
//            alert("ingresar solamente las palabras piedra, papel o tijera")
//            i = i-1
//        }
    }
}
if (multijugador == "maquina") {
    var partidas = prompt("cuantas veces quieres jugar?")
    for (var i = 0; (i < partidas) && (jugar == "si"); i++) {
        var pj1 = prompt("jugador 1 escoja tijera, papel o piedra")
        var pj2 = parseInt((Math.random() * 3))
        if (pj1 == "tijera" || pj1 == "papel" || pj1 == "piedra") {
            if ((pj1 == "tijera" && pj2 == "1") || (pj1 == "papel" && pj2 == "2") || (pj1 == "piedra" && pj2 == "3")) {
                alert("Tu ganas")
                if (partidas > i+1) {
                var jugar = prompt("Continuaras jugando las demas partidas")
                }
            }
            if ((pj2 == "3" && pj1 == "papel") || (pj2 == "1" && pj1 == "piedra") || (pj2 == "2" && pj1 == "tijera")) {
                alert("maquina gana")
                if (partidas > i+1) {
                    var jugar = prompt("Continuaras jugando las demas partidas")
                    }
            }
            if ((pj2 == "1" && pj1 == "papel") || (pj2 == "2" && pj1 == "piedra") || (pj2 == "3" && pj1 == "tijera")) {
                alert("empate")
                if (partidas > i+1) {
                    var jugar = prompt("Continuaras jugando las demas partidas")
                    }
            }
        }
//        else {
//            alert("ingresar solamente las palabras piedra, papel o tijera")
//            i = i-1
//        }
    }
}
//else {
//console.log("ingresar solamente las palabras maquina o jugador")
//}
//arreglar los else, aparece al terminar todo