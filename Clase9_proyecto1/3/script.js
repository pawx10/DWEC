//Variableh
const tiempoInput =document.getElementById("tiempo");
const estadoTexto=document.getElementById("estado");
const activarBoton=document.getElementById("activar");
const apagarBoton=document.getElementById("apagar");
const alarmaActiva=document.getElementById("alarmaAudio");
//Funciones
function activar(){
    setTimeout(()=>{
        estadoTexto.textContent="Encendida";
        estadoTexto.style.color="green";
        alarmaActiva.play();
    },tiempoInput.value *1000);

}

function apagar(){
    estadoTexto.textContent="Apagao";
        estadoTexto.style.color="red";

}

function actualizarHora() {
    const horaActualElement = document.getElementById("horaActual");
    const horaActual = new Date();
    const hora = horaActual.getHours().toString().padStart(2, "0");
    const minutos = horaActual.getMinutes().toString().padStart(2, "0");
    const segundos = horaActual.getSeconds().toString().padStart(2, "0");
    const tiempoActual = `${hora}:${minutos}:${segundos}`;
    horaActualElement.textContent = `hora actual: ${tiempoActual}`;
  }

  actualizarHora();

  setInterval(actualizarHora, 1000);

//Eventos
activarBoton.addEventListener("click",()=>{
    activar();
})

apagarBoton.addEventListener("click",()=>{
    apagar();
})

