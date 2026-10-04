
//
let titulo_1 = document.querySelector("h1");
let subtitulo_1 = document.querySelector("h2");
let parrafos_1 = document.querySelectorAll("p");
let desc = parrafos_1[0];
let parrafo_n2 = parrafos_1[1];
let lista_1 = document.querySelector("ul");
let contene = document.querySelector("body > div");

// guardar el orden original
let elementosIniciales_4 = [titulo_1, subtitulo_1, desc, parrafo_n2, lista_1, contene];

// contenedor
let zona = document.createElement("div");
titulo_1.before(zona);   // pone la zona antes del titulo para amrcar exactamente donde ira
// zona queda antes de titulo_1
zona.append(titulo_1, subtitulo_1, desc, parrafo_n2, lista_1, contene);


// crea boton reorganizar 
let reorganizar = document.createElement("button");
reorganizar.textContent = "Reorganizar pagina";
document.body.append(reorganizar);

// mueve o reorganzia elem
reorganizar.addEventListener("click", () => {
    zona.append(contene, titulo_1, subtitulo_1, lista_1, desc, parrafo_n2);
});

// crea boton restaurar 
let restaurar = document.createElement("button");
restaurar.textContent = "Restaurar orden";
document.body.append(restaurar);
//restaura el orden original
restaurar.addEventListener("click", () => {
    zona.append(titulo_1, subtitulo_1, desc, parrafo_n2, lista_1, contene);
});

function estiloPildora(boton) {
    boton.style.borderRadius = "999px";
    boton.style.padding = "8px 18px";
    boton.style.marginRight = "10px";
}

estiloPildora(reorganizar);
estiloPildora(restaurar);