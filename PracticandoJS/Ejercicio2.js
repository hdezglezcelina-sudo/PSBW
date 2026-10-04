
// Selecciona el título creado anteriormente
let titulo_mod = document.querySelector("h1");
//Cambia su contenido.
titulo_mod.textContent = "Título desde Ejercicio 2 con JavaScript";
//Agrega un id al título.
titulo_mod.id = "id_titulo_mod" 
// Agrega una clase a los párrafos.
let parrafos = document.querySelectorAll("p");
parrafos.forEach(function (p) {
    p.classList.add("parrafo-estilizado");
});

// Modifica al menos tres propiedades visuales mediante JavaScript (por ejemplo: 
// tamaño de letra, color,margen, alineación o fondo).
titulo_mod.style.color = "darkblue";
titulo_mod.style.fontSize = "48px";
document.body.style.backgroundColor = "lavender";