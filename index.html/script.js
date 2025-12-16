// ==============================
// 1. BASE DE DATOS DE PRODUCTOS
// ==============================
function generarProductos() {
    const RUTA_PASTEL = "./imagenes/pastel-chocolate.jpg"; 

    return [
        { 
            id: 1, 
            nombre: "Rosca de Pascuas", 
            descripcion: "Rosca de 1kg con frutas, crema pastelera y azúcar.", 
            precio: 8500.00, 
            ImgRuta: RUTA_PASTEL 
        }, 
        { 
            id: 2, 
            nombre: "Torta Mariposa", 
            descripcion: "Torta de 1kg rellena con DDL y crema.", 
            precio: 10500.00, 
            ImgRuta: RUTA_PASTEL 
        }, 
        { 
            id: 3, 
            nombre: "Pastel de chocolate", 
            descripcion: "Torta de 1kg rellena de frutillas y cobertura de chocolate semiamargo.", 
            precio: 25000.00, 
            ImgRuta: RUTA_PASTEL 
        }, 
        { 
            id: 4, 
            nombre: "Rosca de Pascuas vegana", 
            descripcion: "Rosca con harina de almendras, frutas y crema pastelera vegana.", 
            precio: 13500.00, 
            ImgRuta: RUTA_PASTEL 
        }, 
        { 
            id: 5, 
            nombre: "Rosca de Pascuas rellena", 
            descripcion: "Rosca de 2kg con relleno de chocolate y crema pastelera.", 
            precio: 25500.00, 
            ImgRuta: RUTA_PASTEL 
        }
    ];
}

// =========================================================
// 2. FUNCIÓN PARA INSERTAR PRODUCTOS
// =========================================================
function insertarProductos() {
    const listaProductos = generarProductos();
    const contenedorProductos = document.querySelector("#contenedorPrincipal"); 

    if (!contenedorProductos) {
        console.error("Error: El div '#contenedorPrincipal' no fue encontrado.");
        return;
    }

    contenedorProductos.innerHTML = "";

    listaProductos.forEach(productoActual => {
        const col = document.createElement("div");
      
        col.className = "col-12 col-sm-6 col-md-4 col-lg-3 mb-4";

        col.innerHTML = `
            <div class="card h-100">
                <img src="${productoActual.ImgRuta}" 
                     class="card-img-top" 
                     alt="${productoActual.nombre}"
                     style="height: 200px; object-fit: cover;">
                
                <div class="card-body d-flex flex-column">
                    
                    <h5 class="card-title">${productoActual.nombre}</h5>
                    
                    <p>
                        <a class="link-opacity-75" 
                           href="#" 
                           data-descripcion="${productoActual.descripcion}">
                            Ver descripción
                        </a>
                    </p>
                    
                    <div class="contenedorDescripcion">
                    </div>
                    
                    <h6 class="card-subtitle mb-2 text-muted" data-tipo-contenido="Precio">
                        Precio: $${Number(productoActual.precio).toFixed(2)}
                    </h6>
                    <div class="mt-auto">
                        <a href="#" class="btn btn-primary" data-tipo-contenido="Agregar al Carrito">Agregar al carrito</a>
                    </div>
                </div>
            </div>
        `; 

        contenedorProductos.appendChild(col);
    });
    console.log(`Se insertaron ${listaProductos.length} productos.`);
}

// =========================================================
// 3. FUNCIÓN DE EVENTO: Muestra la información contextual y la descripción
// =========================================================
function mostrarDescripcion(datosEvento) {
    
    const elementoClickeado = datosEvento.target;
    const tagName = elementoClickeado.tagName;
    const contenido = elementoClickeado.textContent.trim();

    // ----------------------------------------------------
    // 1.(Información Contextual)
    // ----------------------------------------------------

    console.log("--------------------------------------------------");
    console.log(`CLICK detectado en la etiqueta: ${tagName}`);

    if (tagName === 'IMG') {
        const nombreProducto = elementoClickeado.alt;
        console.log(`Función: Imagen del Producto.`);
        console.log(`Detalle: Nombre del producto: ${nombreProducto}`);
    }
    else if (tagName === 'H5') {
        console.log(`Función: Título/Nombre del Producto.`);
        console.log(`Detalle: ${contenido}`);
    }
    else if (tagName === 'H6') {
        console.log(`Función: Precio del Producto.`);
        console.log(`Detalle: ${contenido}`);
    }
    else if (tagName === 'A') {
        if (elementoClickeado.classList.contains('btn-primary')) {
             console.log(`Función: Botón de Acción.`);
             console.log(`Detalle: ${contenido} (Agregar al Carrito)`);
        } else {
             console.log(`Función: Enlace de Descripción.`);
             console.log(`Detalle: ${contenido}`);
        }
    }
    
    // ----------------------------------------------------
    // 2. LÓGICA DE MOSTRAR/OCULTAR DESCRIPCIÓN 
    // ----------------------------------------------------
    
    if (tagName === 'A' && elementoClickeado.hasAttribute('data-descripcion')) {
        datosEvento.preventDefault(); 
        
        const descripcion = elementoClickeado.dataset.descripcion;
        const contenedor = elementoClickeado
                               .closest('.card') 
                               .querySelector('.contenedorDescripcion'); 

        // Toggle:
        if (contenedor.innerHTML.trim() === '') {
            contenedor.innerHTML = `<p class="text-info mt-1">${descripcion}</p>`;
            elementoClickeado.textContent = 'Ocultar descripción';
        } else {
            contenedor.innerHTML = '';
            elementoClickeado.textContent = 'Ver descripción';
        }
    } 
}

// =========================================================
// 4. EJECUCIÓN DENTRO DEL DOMC
// =========================================================
document.addEventListener('DOMContentLoaded', function() {
    
    insertarProductos(); 
    const contenedorProductos = document.querySelector("#contenedorPrincipal"); 
    
    if (contenedorProductos) {
        contenedorProductos.addEventListener("click", mostrarDescripcion); 
        console.log("EventListener de click añadido correctamente.");
    } else {
        console.error("No se pudo añadir el EventListener. Contenedor no encontrado.");
    }
});