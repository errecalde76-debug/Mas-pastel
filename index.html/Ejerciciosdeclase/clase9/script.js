// //EJERCICIO 1
// console.log("Script recargado correctamente!"); 

// let num1_str = "10"; // Usamos valor fijo en lugar de prompt
// let num2_str = "5.5"; // Usamos valor fijo en lugar de prompt
let num1_str = "10";
let num2_str = "5.5";

let num1 = parseInt(num1_str);
let num2 = parseFloat(num2_str);

console.log("Valor 1", num1);
console.log("Valor 2", num2);
/*
*/

// //Ejercicio 2
console.log("ejercicio 2")

// let nombre = prompt("tu nombre:"); // Comentado
// let edad = prompt("tu edad:")); // Comentado
let nombre = "Sofía"; // Usamos valor fijo
let edad_str = "25"; // Usamos valor fijo
let edad = parseInt(edad_str); // Convertimos el string a número

// if(isNaN(edad)) { // La función isNaN ya no es necesaria si asignas un string válido.
// ...
// }

let edadNumber = parseInt(edad); // Esto ahora es redundante si ya lo hiciste arriba.

if(edadNumber >= 18) {
    console.log("Hola " + nombre + " " + "sos mayor de edad");
} else {
    console.log("Hola " + nombre + " " + "no sos mayor de edad");
}
// ...





















