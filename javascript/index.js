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

// CLASE 10 //

/* let list = document.querySelector(".index-ul");
let button = document.querySelector("#button_list");


let hambMenu = document.querySelector("#hamb-menu");

let inicio = "Inicio";
let sobreMi = "Sobre mí";
let contacto = "Contacto";

button.addEventListener('click', (e) => {
  let ul = document.createElement("ul");
  if(e.target) {
    list.classList.toggle("d-block")
    ul.style.position = "absolute"; 
    ul.style.backgroundColor = "grey";

    ul.innerHTML = `
    <li>${inicio}</li>
    <li>${sobreMi}</li>
    <li>${contacto}</li>
    `
    

    ul.style.display = "flex";
    ul.style.flexDirection = "column"
    hambMenu.appendChild(ul);
    hambMenu.classList.toggle("d-none")
  }
})
 */

//let i = 0; // Inicialización de la variable contador
// Condición: Mientras la variable contador sea menor de 5
/* while (i < 10) {
console.log("Valor de i: ", i);
i = i + 1; // Incrementamos el valor de i
} */

/* let i = 100;

while (i > 0) {
  console.log("Sólo quedan " + i + " pasos por caminar");
  i = i - 1; 
  if(i == 0) {
    console.log("Llegaste!");
  }
} */

/* for (let i = 0; i < 10; i++) {
  console.log("Número " + i);
  } */

/* for (let i = 0; i <= 10; i++) {
    alert(i);
    }  */

/* let ingresarNumero = parseInt(prompt("Ingresar Numero"));

    for (let i = 1; i <= 10; i++) {
      let resultado = ingresarNumero * i ;
      alert(ingresarNumero +" X "+ i +" = "+ resultado);
    } */

/* let numeros = [
      [2, 4],
      [5, 10]
    ];  

    let resultadoMultli;
    

    let multiplicarYsumarArrays = function() {
      let resultadoArrayUno = numeros[0][0]*numeros[0][1];
      let resultadoArrayDos = numeros[1][0]*numeros[1][1];
      resultadoMultli = resultadoArrayUno + resultadoArrayDos;
      return resultadoMultli;
    }
    
    console.log(multiplicarYsumarArrays()) */

/* let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.forEach(function (objeto) {
  console.log(objeto);
});
 */

/* let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];


objetos.map(objeto => {
  let nuevaLista = [];
  nuevaLista.push("Objeto: " + objeto)
  console.log(nuevaLista);
}); */


/* const numeros = [1, 2, 3, 4, 5];
//La función parámetro generalmente es una función flecha sin cuerpo.

const encontrado = numeros.find(elemento => elemento > 3);

console.log(encontrado) */


let numeros = [2, 5, 6, 18, 201];


let resultado = numeros.filter(n => {
  return n > 5;
});

console.log(resultado);