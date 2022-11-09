let email = "cristian.casalaspro@gmail.com";
let password = "asd";


let emailEntry = prompt("Ingrese su email: ");
let passwordEntry = prompt("Ingrese su contraseña: ")


if(emailEntry != email || passwordEntry != password) {
    console.log("Credenciales invalidas");
} else {
    console.log("Credenciales validas");
    alert("Bienvenido " + email)
}





