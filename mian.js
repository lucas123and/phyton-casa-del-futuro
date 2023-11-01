// querySelects

const btnScissors = document.querySelector('#btnSelectTijera');
const btnRock = document.querySelector('#btnSelectPiedra');
const btnPaper = document.querySelector('#btnSelectPapel');
const btnReload = document.querySelector('#reinicio');
const spanVidasEnemy = document.querySelector('#vidaPC')
const spanVidasPlayer = document.querySelector('#vidaPlayer')
const sectionMSJ = document.getElementById("resultadodos")
const ataquesPlayer = document.getElementById("ataques-player")
const ataquesEnemigo = document.getElementById("ataques-enemigo")
const sectionReinicio = document.querySelector('#sectionReinicio')
const divVS = document.querySelector('.p_vs')



// Events

btnPaper.addEventListener('click', paperSelected)
btnScissors.addEventListener('click', scissorsSelected)
btnRock.addEventListener('click', rockSelected)
btnReload.addEventListener('click', reloadgame)

// Variables

// Importante a tener en cuenta!!!
let ataquePCRandom;  // Se le asigna un valor en la funcion AtaquePC();
let ataquePlayer;   // Se le asigna el valor tipo 'string' en las funciones ScissorsSelected, rockSelected y paperSelected.
var pointsPlayer = 3; // Puntos de vida del jugador
var pointsEnemy = 3; // Puntos de vida de la PC

// Las funciones ScissorsSelected, rockSelected y paperSelected se llaman cuando el jugador selecciona un ataque.
// Estas tendran que asignarle el valor correspondiente a la funcion. ejemplo: Player selecciona tijera.
// entonces en la funcion scissorsSelected. tendra que asigar el valor 'tijera' a la variable *ataquePlayer* y juego llamar a la funcion ataquePC();

function scissorsSelected(){
// Tu código:
    ataquePlayer = "tijera";
    ataquePC();
}

function rockSelected() {
// Tu código:
    ataquePlayer = "piedra";
    ataquePC();
}

function paperSelected(){
// Tu código:
    ataquePlayer = "papel";
    ataquePC();
}


// ataquePC se encarga de asignarle un ataque random a la PC. debajo de la variable randomAttack tendras que asignar el valor correspondiente a la variable *ataquePCRandom*
// segun la siguiente lógica: 
//Si randomAttack = 1 ->  AtaquePCRandom deberia guardar el valor 'piedra'
//Si randomAttack = 2 ->  AtaquePCRandom deberia guardar el valor 'papel'
//Si randomAttack = 3 ->  AtaquePCRandom deberia guardar el valor 'tijera'
// luego de tener el valor llamar a la funcion combat();

function ataquePC() {
    let randomAttack = random(1,3) // NO MODIFICAR
// Tu código:
    if (randomAttack == 1) {
        ataquePCRandom = "tijera";
        console.log("tijera");
    } else if (randomAttack == 2) {
        ataquePCRandom = "piedra";
        console.log("piedra");
    } else if (randomAttack == 3) {
        ataquePCRandom = "papel";
        console.log("papel");
    }
    combat();
}

// En esta funcion se realiza la lógica del juego. Es decir: 
// Si el player eligio 'papel' y la pc tambíen. es un empate, se llama a la funcion 'msjResult()' pasando por argumento 'Empate'
// Si player eligio 'papel' y pc 'piedra'. gana player, se llama a la funcion 'msjResult()' pasando por argumento 'Ganaste' y se le resta una vida a la PC
// Asi para todos los posibles casos de elecciones. Y al final de esta funcion se llama a la funcion 'revisarvida()'   

function combat(){
// Tu código:
    if (ataquePlayer == ataquePCRandom) {
        msjResult("Empate");
    } else if (ataquePlayer == "papel" && ataquePCRandom == "tijera" || ataquePlayer == "tijera" && ataquePCRandom == "piedra" || ataquePlayer == "piedra" && ataquePCRandom == "papel") {
        msjResult("Perdiste");
        pointsPlayer--;
        spanVidasPlayer.innerHTML = pointsPlayer;
    } else {
        msjResult("Ganaste");
        pointsEnemy--;
        spanVidasEnemy.innerHTML = pointsEnemy;
    }
    revisarvida();
}

// En esta funcion tendras que hacer la lógica de las vidas de los jugadores. Es decir: 
// si player se queda sin vidas debe enviar un alert 'perdiste la partida :('
// si enemigo se queda sin vidas debe enviar un alert 'ganaste la partida :D'

function revisarvida(){
// Tu código:
    if (pointsPlayer == 0) {
        alert("perdiste la partida :(");
    } else if (pointsEnemy == 0) {
        alert("ganaste la partida :D");
    }
}

  ///////////////////////////////////////////////////////////////////////////////////
 // NO MODIFICAR NADA A PARTIR DE ACÁ.                                           //
/////////////////////////////////////////////////////////////////////////////////

function msjResult(msj) {
    let nuevoAtaquePlayer = document.createElement('p')
    let nuevoAtaqueEnemigo = document.createElement('p')
    let msjVS = document.createElement('p')

    sectionMSJ.innerHTML = msj
    nuevoAtaquePlayer.innerHTML = ataquePlayer
    nuevoAtaqueEnemigo.innerHTML = ataquePCRandom
    msjVS.innerHTML= '⚔️'

    ataquesPlayer.appendChild(nuevoAtaquePlayer)
    ataquesEnemigo.appendChild(nuevoAtaqueEnemigo)
    divVS.appendChild(msjVS)
}

function reloadgame(){
    location.reload();
}

function random(min, max){
    return Math.floor(Math.random()*(max - min + 1 ) + min)
}

// window.addEventListener('load')

