//Variableh
const tiempoInput =document.getElementById("tiempo");
const estadoTexto=document.getElementById("estado");
const activarBoton=document.getElementById("activar");
const apagarBoton=document.getElementById("apagar");
//Funciones
function activar(){
    setTimeout(()=>{
        estadoTexto.textContent="Encendida";
        estadoTexto.style.color="green";

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