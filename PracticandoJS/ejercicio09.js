//subtitulo
let subtitulo_9 = document.createElement("h2");
subtitulo_9.textContent = "Ejercicio 9 Guardar datos y borrarlos";
document.body.append(subtitulo_9);

//cantidad de tecnologias 
let cantidadInicial = tecnologias.length;

// tarjeta igual (mismo formato) a las de la lista
function crearTarjeta_9(tecnologia_9) {
    let tarjeta_9 = document.createElement("div");

    let titulo_9 = document.createElement("h2");
    titulo_9.textContent = tecnologia_9.nombre;
    tarjeta_9.append(titulo_9);

    let texto_9 = document.createElement("p");
    texto_9.textContent = tecnologia_9.descripcion;
    tarjeta_9.append(texto_9);

    let categoria_9 = document.createElement("p");
    categoria_9.textContent = tecnologia_9.tipo;
    tarjeta_9.append(categoria_9);

    tarjeta_9.style.border = "2px solid black";
    tarjeta_9.style.margin = "10px";
    tarjeta_9.style.padding = "10px";

    contenedor.append(tarjeta_9);
}

// recuperar lo guardado
let guardadas_9 = JSON.parse(localStorage.getItem("tecnologias_9")) || [];

guardadas_9.forEach(function (tecnologia_9) {
    tecnologias.push(tecnologia_9);
    crearTarjeta_9(tecnologia_9);
});

// al agregar una tec con el formulario del ejercicio 7: guardar tec del usuario
botonAgregar.addEventListener("click", (e) => {
    let agregadas_9 = [];

    for (let i = cantidadInicial; i < tecnologias.length; i++) {
        agregadas_9[agregadas_9.length] = tecnologias[i];
    }    
    localStorage.setItem("tecnologias_9", JSON.stringify(agregadas_9));
});

// botón para borrar datos guardados
let borrar_9 = document.createElement("button");
borrar_9.textContent = "Borrar datos guardados";
document.body.append(borrar_9);

borrar_9.addEventListener("click", (e) => {
    localStorage.removeItem("tecnologias_9");

    // volver al estado inicial: quitar del arreglo y de la pantalla las agregadas
    while (tecnologias.length > cantidadInicial) {
        tecnologias.pop();
    }
    while (contenedor.children.length > cantidadInicial) {
        contenedor.lastElementChild.remove();
    }
});