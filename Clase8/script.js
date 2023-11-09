//Funciones

function saludar(){
    let nombreUsuario=document.getElementById("nombreUsuario").value;

    let salida = document.getElementById("salida");

    if(isEmpty(nombreUsuario)){
        alert("Tienes que introducir algo");
    }
    else{
        saludando(nombreUsuario,salida);
    }
}

    function isEmpty(user){
        if (user==""){
            return true;
        }
        else return false;
    }

    function saludando(user,salida){
        let mensaje= `hola ${user}`
   
        salida.textContent=mensaje;
    }

    