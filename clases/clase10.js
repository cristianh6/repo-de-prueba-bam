let list = document.querySelector(".index-ul");
let button = document.querySelector("#button_list");

buttonListener = function (evento, callback) {
  button.addEventListener(evento, callback);
};

buttonListener("click", (e) => {
  if (e.target) {
    console.log(contador);
  }
});

// WHILE //

/* let i = 0;

while (i < 5) {
  console.log("Valor de i: ", i);
  i = i + 1; 
  }


  // EJERCICIO WHILE
  
let i = 100;

while (i > 0) {
  console.log("Sólo quedan " + i + " pasos por caminar");
  i = i - 1; 
  if(i == 0) {
    console.log("Llegaste!");
  }
}
  

    // FOR // 

  let frutas = [
    "Manzana",
    "Pera",
    "Frutilla",
    "Pera",
    "Mora",
    "Limón",
    "Kiwi"
    ];

  for (let i = 0; i < frutas.length; i++) {
    const element = frutas[i];
    console.log(element)
  } 



for (let i = 0; i < 10; i++) {
  alert(i);
  } 

  let ingresarNumero = parseInt(prompt("Ingresar Numero"));

  for (let i = 1; i <= 10; i++) {
    let resultado = ingresarNumero * i ;
    alert(ingresarNumero +" X "+ i +" = "+ resultado);
  }


  // EJERCICIO ARRAYS

let numeros = [
  [2, 4],
  [5, 10]
];

let resultadoMultli;

let multiplicarArray = function() {
  let resultadoArrayUno = numeros[0][0]*numeros[0][1];
  let resultadoArrayDos = numeros[1][0]*numeros[1][1];
  resultadoMultli = resultadoArrayUno + resultadoArrayDos;
  return resultadoMultli;
}

console.log(multiplicarArray())



  // FOREACH() // 

  let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.forEach(function(objeto) {
console.log(objeto);
});


// MAP() // 

let objetos = ["Varita", "Libro", "Lechuza", "Caldero"];

objetos.map(objeto => {
  let nuevaLista = [];
  nuevaLista.push("Objeto: " + objeto)
  console.log(nuevaLista) ;
});


// EJERCICIO MAP

let numeros = [1,2,3,4,5];

numeros.map(n => {
  console.log(n && n%2?n+" impar":n+" par")
})


*/
