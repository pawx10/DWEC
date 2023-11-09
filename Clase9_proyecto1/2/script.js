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

//Eventos
activarBoton.addEventListener("click",()=>{
    activar();
})

apagarBoton.addEventListener("click",()=>{
    apagar();
})

