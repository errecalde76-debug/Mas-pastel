console.log("JS CARGADO");

console.log("ejecricio 1")

// Usamos valores fijos en lugar de prompt():
let num1_str = "10";
let num2_str = "5.5";

let num1 = parseInt(num1_str);
let num2 = parseFloat(num2_str);

let edad = 25;
let miembroRegistrado = true;

console.log(typeof(edad));

console.log(edad >= 18);



if (edad >= 18 && miembroRegistrado) {
    console.log("Bienvenido a la plataforma!.");
} else if (edad >=17){
    console.log("Cree su usuario en la plataforma");
} else {
    console.log("Datos no válidos.");
}

// Bloque donde la edad se corrige a numérico para la prueba:
edad = 10; 

if (edad <= 12) {
    console.log("Sos un niño.");
} else if (edad > 13){
    console.log("Sos un adolescente");
} else {
    console.log("La edad no es válida.");
}

console.log("Ejercicio 1 - Validación de Formulario")
let nombre = "Sofia Errecalde";
let correo = "sofierrecalde@gmail.com";
let mensaje = "Quisiera más información sobre las entregas";

if(nombre == "" || correo == "" || mensaje == "") {
    console.log("faltan completar campos obligatorios.");
}
else {
    console.log("formulario completo.Listo para enviar.");
}


//ejercicio 2
console.log("--- EJERCICIO 2: LISTA DE PRODUCTOS ---");
const productos = ["Tortas","Biscochuelos","Tartas","Masas finas","Facturas"];

console.log(productos[3]);

console.log(productos.length);

console.log(productos);

for(let contador = 0; contador < productos.length; contador++){
    console.log(contador);
    console.log(productos[contador]);
}

for (const producto of productos) {
    console.log("producto: " + producto)
}

console.log("lista de productos mostrada con éxito.");

//bucle while
console.log("Bucle While")
let respuesta = "SI";
while (respuesta === "SI") {
    respuesta = prompt("Quieres continuar").toUpperCase();
    console.log(respuesta);
}

//bucle for
console.log("Bucle for")
for (let contador = 10; contador ==1; contador --){
    console.log(contador);
}