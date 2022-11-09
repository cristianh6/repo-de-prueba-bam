 console.log("success");
/*
let nombre = "Cristian";
let apellido = "Casalaspro";
let edad = 28; 
let mascota = "Perro";

let nombreApellido = nombre + " " + apellido;

let entryNumber = prompt("Ingrese un número: "); 

if(entryNumber >= 10) {

} 

let datos = [
  ["dato1", "dato2", "dato3"],
  ["Perro", "Gato", "Oso"],
  ["Leche", "Lechuga", "Legumbres"],
];

console.log(datos.length); 

 let arrayStrings = ["Perro", "Gato", "Leche", "Lechuga", "Legumbres"];



console.log(arrayStrings)


console.log(arrayStrings.length)


console.log(arrayStrings[5]) 


let articleList = ["Leche", "Pomelo", "Pan"];

let articleEntry = prompt("Ingrese un articulo: ");



if (!articleEntry) {

  alert("No ha ingresado ningún articulo");

} else if (articleList.includes(articleEntry)) {

  alert("El producto ya está en la lista");

} else {
  articleList.push(articleEntry);
  alert("La lista de productos contiene: " + articleList);
  console.log(articleList)
}
console.log(nombre)
console.log(apellido)
console.log(edad)
console.log(mascota); 

let numeroUno = 5;

let numeroDos = 10;



let resultadoSuma = numeroUno + numeroDos;

let resultadoResta = numeroUno - numeroDos;

let resultadoMulti = numeroUno * numeroDos;

let resultadoDiv = numeroUno / numeroDos;

console.log(resultadoDiv) 


let entryNumber = prompt("Ingrese un número: ");



if(entryNumber > 10) {
    console.log("El valor ingresado es mayor a 10")
    document.write("<h1>El valor ingresado es mayor a 10</h1>")

} else if(entryNumber <= 10) {
    console.log("El valor ingresado es menor o igual a 10")
    document.write()

} else {
    console.log("El valor ingresado no es un número")
} 



if (!entryNumber) {
  document.write("No ha ingresado ningún valor");

} else if (entryNumber <= 10) {
  document.write("<h1>EL VALOR INGRESADO ES MENOR O IGUAL A 10</h1>");

} else if (entryNumber > 10) {
  document.write("No ha ingresado ningún valor");
    
} else {
  document.write("El valor ingresado no es un número");
}   */


/* Crear una función que reciba el parámetros nombre, apellido y
serie favorita y que devuelva un saludo:
● Un nombre
● Apellido
● Serie favorita

Hola, nombre + apellido, tu serie favorita es serieFavorita

Invocar la función con los parámetros requeridos. */


/* let saludar = function(nombre, apellido, serieFavorita) {
  alert(nombre + " " + apellido + " " + "tu serie favorita es " + serieFavorita) 
}

console.log(saludar("Cristian", "Casalaspro", "Sherlock Holmes")) */


/* let nombre = function(nombre) {
  return nombre.length;
}


let longitudNombre = nombre("Cristian");

console.log(longitudNombre) */



/* let etiqueta = document.getElementsByClassName("index-ul");

etiqueta.style.backgroundColor = "red" */


let button = document.querySelector("#button_list");



button.addEventListener("click", (event) => {
  if(event.target) {
    button.innerHTML = "<span>HOLA</span>"
  }
  
})


