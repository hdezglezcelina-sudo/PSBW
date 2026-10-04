
//Panel interactivo
let panel = document.createElement("section");
let tit = document.createElement("h2");
tit.textContent = "Panel interactivo Ejercicio 6";

panel.append(tit);
document.body.append(panel);


//texto para ocultar y mostrar
let texto = document.createElement("p");
texto.textContent = "Este texto se puede ocultar y mostrar";
panel.append(texto);


//boton para cambiar texto
let botonTexto = document.createElement("button");
botonTexto.textContent = "Cambiar texto";
panel.append(botonTexto);

botonTexto.addEventListener("click", (e) => {
    texto.textContent = "El texto ha cambiado";
});


//boton cambiar fondo
let botonFondo = document.createElement("button");
botonFondo.textContent = "Cambiar fondo";
panel.append(botonFondo);
botonFondo.addEventListener("click", (e) => {
    if (document.body.style.backgroundColor == "lavender") {
        document.body.style.backgroundColor = "#e5c4ea";
    }
    else {
        document.body.style.backgroundColor = "lavender";
    }
});


//boton cambiar aspecto
let cambiarAspecto = document.createElement("button");
cambiarAspecto.textContent = "Cambiar aspecto";
panel.append(cambiarAspecto);
let aspecto = false;

cambiarAspecto.addEventListener("click", (e) => {
    if (aspecto == false) {
        texto.style.fontSize = "25px";
        texto.style.textAlign = "center";
        aspecto = true;
    }
    else {
        texto.style.fontSize = "";
        texto.style.textAlign = "";
        aspecto = false;
    }
});

//  mouseover y mouseout para hacer mas grnade el titulo
tit.addEventListener("mouseover", (e) => {
    tit.style.fontSize = "30px";
});

tit.addEventListener("mouseout", (e) => {
    tit.style.fontSize = "";
});

function estiloPildora(boton) {
    boton.style.borderRadius = "999px";
    boton.style.padding = "8px 18px";
    boton.style.marginRight = "10px";
}

estiloPildora(botonTexto);
estiloPildora(botonFondo);
estiloPildora(cambiarAspecto);
