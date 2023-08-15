let ataqueJugador
let ataqueEnemigo
let vidasJugador = 3
let vidasEnemigo = 3

function iniciarJuego(){
    let sectionAtaque = document.getElementById("ataque")
    sectionAtaque.style.display = "none"

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "none"

    let botonMascotaJugador = document.getElementById("boton-sele-mascota")
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador)

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.addEventListener("click", ataqueFuego)
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.addEventListener("click", ataqueAgua)
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.addEventListener("click", ataqueTierra)

    let botonReiniciar = document.getElementById("boton-reiniciar")
    botonReiniciar.addEventListener("click", reiniciarJuego)
}

function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("Hipodoge")
    let inputCapipeyo = document.getElementById("Capipeyo")
    let inputRatigueya = document.getElementById("Ratigueya")
    let inputLangostelvis = document.getElementById("Langostelvis")
    let inputTucapalma = document.getElementById("Tucapalma")
    let inputPydos = document.getElementById("Pydos")
    let spanMascotaJugador = document.getElementById("mascota-jugador")

    if(inputHipodoge.checked) {
        spanMascotaJugador.innerHTML = "Hipodoge"
    } else if(inputCapipeyo.checked) {
        spanMascotaJugador.innerHTML = "Capipeyo"
    } else if(inputRatigueya.checked) {
        spanMascotaJugador.innerHTML = "Ratigueya"
    } else if(inputLangostelvis.checked) {
        spanMascotaJugador.innerHTML = "Langostelvis"
    } else if(inputTucapalma.checked) {
        spanMascotaJugador.innerHTML = "Tucapalma"
    } else if(inputPydos.checked) {
        spanMascotaJugador.innerHTML = "Pydos"
    } else {
        alert("No seleccionaste ninguna mascota")
        return 
    }

    let sectionMascota = document.getElementById("mascota")
    sectionMascota.style.display = "none"

    let sectionAtaque = document.getElementById("ataque")
    sectionAtaque.style.display = "flex"
    
    seleccionMascotaPC()  
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

function seleccionMascotaPC() {
    let mascotaAleatoria = aleatorio(1,6)
    let spanMascotaPC = document.getElementById("mascota-enemigo")

    if(mascotaAleatoria == 1) {
        spanMascotaPC.innerHTML = "Hipodoge"
    } else if(mascotaAleatoria == 2) {
        spanMascotaPC.innerHTML = "Capipeyo"
    } else if(mascotaAleatoria == 3) {
        spanMascotaPC.innerHTML = "Ratigueya"
    } else if(mascotaAleatoria == 4) {
        spanMascotaPC.innerHTML = "Langostelvis"
    } else if(mascotaAleatoria == 5) {
        spanMascotaPC.innerHTML = "Tucapalma"
    } else {
        spanMascotaPC.innerHTML = "Pydos"
    }
}

function ataqueFuego() {
    ataqueJugador = "FUEGO"
    ataquePC()
}
function ataqueAgua() {
    ataqueJugador = "AGUA"
    ataquePC()
}
function ataqueTierra() {
    ataqueJugador = "TIERRA"
    ataquePC()
}

function ataquePC() {
    let ataqueAlePC = aleatorio(1,3)

    if (ataqueAlePC == 1){
        ataqueEnemigo = "FUEGO"
    } else if (ataqueAlePC == 2){
        ataqueEnemigo = "AGUA"
    } else {
        ataqueEnemigo = "TIERRA"
    }
    
    combate()
}

function combate(){
    let spanVidasJugador = document.getElementById("vidas-jugador")
    let spanVidasEnemigo = document.getElementById("vidas-enemigo")

    if (ataqueJugador == ataqueEnemigo){
            crearMensaje("EMPATE")
        } else if((ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") || (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") || (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA")){
            crearMensaje("GANASTE")
            vidasEnemigo--
            spanVidasEnemigo.innerHTML = vidasEnemigo
        } else{
            crearMensaje("PERDISTE")
            vidasJugador--
            spanVidasJugador.innerHTML = vidasJugador
        }
    revisarVidas()
 }

 function revisarVidas(){
    if (vidasEnemigo == 0){
        crearMensajeFinal("FELICITACIONES! Ganaste 😀")
    } else if (vidasJugador == 0) {
        crearMensajeFinal("MALA SUERTE! Perdiste 😢")
    }
 }

function crearMensaje(resultado) {
    let sectionMensajes = document.getElementById("resultado")
    let ataqueDelJugador = document.getElementById("ataqueDelJugador")
    let ataqueDelEnemigo = document.getElementById("ataqueDelEnemigo")

    let nuevoAtaqueJugador = document.createElement("p")
    let nuevoAtaqueEnemigo = document.createElement("p")

    sectionMensajes.innerHTML = resultado
    nuevoAtaqueJugador.innerHTML = ataqueJugador 
    nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo

    ataqueDelJugador.appendChild(nuevoAtaqueJugador)
    ataqueDelEnemigo.appendChild(nuevoAtaqueEnemigo)
}

function crearMensajeFinal(resultadoFinal) {
    let sectionMensajes = document.getElementById("resultado")

    sectionMensajes.innerHTML = resultadoFinal

    let botonFuego = document.getElementById("boton-fuego")
    botonFuego.disabled = true
    let botonAgua = document.getElementById("boton-agua")
    botonAgua.disabled = true
    let botonTierra = document.getElementById("boton-tierra")
    botonTierra.disabled = true

    let sectionReiniciar = document.getElementById("reiniciar")
    sectionReiniciar.style.display = "flex"
}

function reiniciarJuego() {
    location.reload()
}



window.addEventListener("load", iniciarJuego)
