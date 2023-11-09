
function comprobarEdad(){
    const edadInput=document.getElementById("numero");
    const respuesta=document.getElementById("respuesta");
    const respuesta2=document.getElementById("respuesta2");
    const respuesta3=document.getElementById("respuesta3");

    const edad =parseInt(edadInput.value);


if(isNaN (edad) || edad<=0){
    alert("Ingresa una edad mayor a 0");
    edadInput.value="";
    respuesta.textContent="---";
    respuesta2.textContent="---";
    respuesta3.textContent="---";
    return;
}




if(edad>=18){
   respuesta.textContent="Si";

 }else{
  respuesta.textContent="No puede ";
    
}
if(edad>=25){
  respuesta2.textContent="Si";

}else{
 respuesta2.textContent="No puede ";
   
}

if(edad>=28 && edad<=36){
  respuesta3.textContent="Si";

}else{
 respuesta3.textContent="No puede ";
   
}
}


