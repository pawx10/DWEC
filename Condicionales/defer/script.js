'use strict'

//Zona de declaracion de variables
const btn1= document.querySelector("#boton1");
const btn2=document.querySelector("#boton2");
const parr1= document.querySelector("#p1");
const parr2 = document.querySelector("#p2");

console.log("boton1: " + btn1);



//Zona de eventos listener
btn1.addEventListener("click",()=>{
//escribirDom("hola que tal ",parr1);
parr1.innerHTML="<h3> hola fiera</h3>";

});

btn2.onclick=()=>{
//escribirDom("lol",parr2);
parr2.innerHTML="<h3> holo</h3>";
};

//Funciones
function escribirDom(mensaje,componentDom){
    componentDom.innerHTML=`<h3> ${mensaje} </h3>`;
};
