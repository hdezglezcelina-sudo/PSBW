
//crear boton agregar
let Agregar_E = document.createElement("button");
Agregar_E.textContent = "Agregar elemento";
document.body.append(Agregar_E);

// agregar elemento
let listas = document.querySelector("ul");
let contador = 0;

Agregar_E.addEventListener("click", (e) => {
    contador++;
    let elemento = document.createElement("li");
    elemento.textContent = "Elemento " + contador;
    listas.append(elemento);
});

//crear boton eliminar
let Eliminar_E = document.createElement("button");
Eliminar_E.textContent = "Eliminar elemento";
document.body.append(Eliminar_E);

// eliminar elemento
Eliminar_E.addEventListener("click", (e) => {
    if (listas.lastElementChild) {
        listas.lastElementChild.remove(); // investigada funcion para eliminar
        contador--;
    }
    else {
        alert("La listas esta vacia");
    }
});

function estiloPildora(boton) {
    boton.style.borderRadius = "999px";
    boton.style.padding = "8px 18px";
    boton.style.marginRight = "10px";
}
estiloPildora(Agregar_E);
estiloPildora(Eliminar_E);