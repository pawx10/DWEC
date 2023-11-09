'use strict'

document.addEventListener("DOMContentLoaded", ()=>{

    //Declaracion de variables
    const op1=document.querySelector("#op1");
    const op2=document.querySelector("#op2");
    const btnSuma=document.querySelector("#suma");
    const btnPotencia=document.querySelector("#potencia");
    const resultado=document.querySelector("#resultado");

    //Zona de listeners events
    btnSuma.addEventListener("click",()=>{
        let resultado=sumar(op1.value,op2.value);
        imprimirDom(resultado,eltoResultado);
    });

    btnPotencia.addEventListener("click",()=>{
        let resultado=potencia(op1.value,op2.value);
        imprimirDom(resultado,eltoResultado);
    });

    //Zona de funciones
    function sumar(op1,op2){
        let res= +op1 + +op2;
        
       // let res2= Number.parseInt(op1)+Number.parseInt(op2);  otra forma
        return res;
    }

    function potencia(op1,op2){
        let res=Math.pow(+op1,+op2);
        return res;

    }
    
    function imprimirDom(mensaje,componentDom){
        componentDom.innerHTML=`<h3>${mensaje} </h3> `;
    }

});