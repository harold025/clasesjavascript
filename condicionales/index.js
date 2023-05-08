//Ejercicio 1
//if (" ") {
//    alert( 'Hello' );
//}

//ejercicio 2
//let respuesta = prompt("¿Cuál es el nombre ❝oficial❞ de JavaScript?")

//if (respuesta == "ECMAScript"){
//    alert("Correcto");
//} else {
//    alert("No lo sabes? ¡ECMAScript")
//}

//ejercicio3
//let numero = prompt ("ingresa un número");

//if (numero == "0" ) {
//    alert("0") 
//} else if (numero > "0") {
//    alert("1")
//} else if (numero < "0") {
//    alert("-1")
//} else {
//    alert("no registro número")
//}

//ejercicio4
// let result = (a + b < 4) ? 'Debajo':
//                 'Encima';
// alert (result);

//ejercicio5
let login = prompt ("Ingresa tu información");

let message = (login == 'Empleado') ? 'Hola' :
                (login == 'Director') ? 'Felicidades' :
                (login == '') ? 'Sin sesión' :
                '';
alert(message);

