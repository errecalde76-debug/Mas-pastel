console.log("FUNCIONES");

function esMiembroRegistrado() {

    let edad = 25;
    let miembroRegistrado = true;

    console.log(typeof (edad));

    console.log(edad >= 18);

}

console.log("ejecricio 1")

// Usamos valores fijos en lugar de prompt():
let num1_str = "10";
let num2_str = "5.5";

let num1 = parseInt(num1_str);
let num2 = parseFloat(num2_str);


function ClasificarSegunRegistro() {
    edad = "16"

    if (edad >= 18 && miembroRegistrado) {
        console.log("Bienvenido a la plataforma!.");
    } else if (edad >= 17) {
        console.log("Cree su usuario en la plataforma");
    } else {
        console.log("Datos no válidos.");
    }
}


// Bloque donde la edad se corrige a numérico para la prueba:
function ValidarEdad() {
    edad = 10;

    if (edad <= 12) {
        console.log("Sos un niño.");
    } else if (edad > 13) {
        console.log("Sos un adolescente");
    } else {
        console.log("La edad no es válida.");
    }
}

function ValidarFormulario() {
    console.log("Ejercicio 1 - Validación de Formulario")
    let nombre = "Sofia Errecalde";
    let correo = "sofierrecalde@gmail.com";
    let mensaje = "Quisiera más información sobre las entregas";

    if (nombre == "" || correo == "" || mensaje == "") {
        console.log("faltan completar campos obligatorios.");
    }
    else {
        console.log("formulario completo.Listo para enviar.");
    }

}



//ejercicio 2

function EjercicioMostrarProductos() {
    console.log("--- EJERCICIO 2: LISTA DE PRODUCTOS ---");
    const productos = ["Tortas", "Biscochuelos", "Tartas", "Masas finas", "Facturas"];

    console.log(productos[3]);

    console.log(productos.length);

    console.log(productos);

    for (let contador = 0; contador < productos.length; contador++) {
        console.log(contador);
        console.log(productos[contador]);
    }

    for (const producto of productos) {
        console.log("producto: " + producto)
    }

    console.log("lista de productos mostrada con éxito.");


}


//*bucle while

function BucleWhile() {
    console.log("Bucle While")
    let respuesta = "SI";
    while (respuesta === "SI") {
        respuesta = prompt("Quieres continuar").toUpperCase();
        console.log(respuesta);
    }
}



//bucle for


function BucleFor() {
    console.log("Bucle for")
    for (let contador = 10; contador >= 1; contador--) {
        console.log(contador);
    }
}


/*
esMiembroRegistrado();
ClasificarSegunRegistro();
BucleWhile();
EjercicioMostrarProductos() 
ValidarEdad()
BucleFor()
ValidarFormulario()
*/

function sumar2numeros(num1, num2) {
    let suma = num1 + num2;
    console.log("la suma es " + suma);
}

sumar2numeros(5, 7);

//Ejercicio1: Caclculadora con funciones

function sumar(num1, num2) {
    let suma = num1 + num2;
    return suma;
}

function restar(num1, num2) {
    return num1 - num2;
}

function multiplicar(num1, num2) {
    return num1 * num2;
}

function dividir(num1, num2) {
    if (num2 === 0) {
        return "Error: división por cero";
    }
    else {
        let división = num1 / num2;
        return división;
    }
}


console.log("Suma = " + sumar(2.3));
console.log("Resta = " + restar(2, 3));
console.log("Multiplicación = " + multiplicar(2, 3));
console.log("División = " + dividir(2, 0));
console.log("División = " + dividir(2, 3));

let numero = 25;



function generarProductos() {
    const productos = [
        {
            id: 1,
            nombre: "Rosca de Pascuas",
            descripcion: "Torta de 1kg con frutas, crema pastelera y azúcar.",
            precio: 8500.00,
            ImgRuta: "../../Proyecto Final/Imagenes/rosca.jpg"
        },
        {
            id: 2,
            nombre: "Rosca de Pascuas",
            descripcion: "Torta de 1kg con frutas, crema pastelera y azúcar.",
            precio: 8500.00,
            ImgRuta: "../../Proyecto Final/Imagenes/rosca.jpg"
        },
        {
            id: 3,
            nombre: "Rosca de Pascuas",
            descripcion: "Torta de 1kg con frutas, crema pastelera y azúcar.",
            precio: 8500.00,
            ImgRuta: "../../Proyecto Final/Imagenes/rosca.jpg"
        },
        {
            id: 4,
            nombre: "Rosca de Pascuas",
            descripcion: "Torta de 1kg con frutas, crema pastelera y azúcar.",
            precio: 8500.00,
            ImgRuta: "../../Proyecto Final/Imagenes/rosca.jpg"
        },
        {
            id: 5,
            nombre: "Rosca de Pascuas",
            descripcion: "Torta de 1kg con frutas, crema pastelera y azúcar.",
            precio: 8500.00,
            ImgRuta: "../../Proyecto Final/Imagenes/rosca.jpg"
        }
    ];

    return productos;
}

// Recorrer utilizando FOR

function mostrarCatalogo(catalogo, titulo) {
    console.log(`*\n--- ${titulo} ---`); 
    
    for (const { id, nombre, precio } of catalogo) {
        console.log(`ID: ${id} | Producto: ${nombre} | Precio: $${precio.toFixed(2)}`);
    }
}

function crearNuevoProducto(idProd, nombreProd, descripcionProd, precioProd) {
    const productoNuevo = {

    id: idProd,
    nombre: nombreProd,
    descripcion: descripcionProd,
    precio: precioProd,
};
return productoNuevo;
}


function actualizarCatalogo(catalogoOriginal) {
    const nuevoProducto = crearNuevoProducto(
        6, 
        "Tarta de Frutilla", 
        "Tarta fresca con crema y frutillas.", 
        9200.00
    );

    const catalogoActualizado = [...catalogoOriginal, nuevoProducto];
    return catalogoActualizado; 
}



// --- EJECUCIÓN DEL CÓDIGO ---


const catalogoBase1 = generarProductos();

mostrarCatalogo(catalogoBase1, "Catalogo Base"); 

// Se llama a la función con UN SOLO argumento (catalogoBase1)
const catalogoActualizado1 = actualizarCatalogo(catalogoBase1) 

mostrarCatalogo(catalogoActualizado1,"Catalogo Actualizado")

// 1. Creamos el producto ID 7 (Torta Arcoiris), ya que el ID 6 se usó arriba
const productoArcoiris = crearNuevoProducto(7, "Torta Arcoiris", "Pasteles especiales", 30000.00); 

console.log("\n--- Producto Creado Aparte (ID 7) ---"); // <-- Corregido el mensaje para ID 7

// 2. Imprimimos el objeto de forma limpia
console.log(JSON.stringify(productoArcoiris, null, 2));
