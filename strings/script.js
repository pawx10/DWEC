'use strict'
let numero=11;
let string1="hola mundo que tal por alli";
let string2="oli mundo kk movida";

//Conversiones y consultas de tipos
console.log(numero.toString());
console.log(typeof(numero));
console.log(typeof(numero.toString()));

//Conversion mayus minus
console.log(string1.toUpperCase());
console.log(strin2.toLowerCase());

//Calcular longitud

console.log(string1.length);

//Concatenar
console.log(string1.concat("aqui estoy"));

//Metodos de busqueda
console.log(string1.indexOf("mundo"));
console.log(string1.indexOf("kk"));
console.log(string1.search("hola"));

//Metodo de busqueda lastindexof
console.log(string1.lastIndexOf("mundo"));
console.log(string1.match(/mundo/));

//Metodo de busqueda substring
console.log(string1.substring(4,6));
let string3="hola que tal va por alli";

//Metodo include
console.log(string3.includes("tal"));
console.log(string3.startsWith("ho"));
console.log(string3.endsWith("la"));

//Metodos de reemplazo

console.log(string3.replace("hola" , "adios"));

//Metodo

let correo=" cosascosas";
console.log(correo.length);
console.log(correo.trim().length );

//Metodo de conversion a array
let var1= "hola que tal por alli";
let var2= "18-45-56-67-78-89";
console.log(var1.split(" "));
console.log(var2.split("-"));
let array_numeros = var2.split("-");
console.log(array_numeros[2]);