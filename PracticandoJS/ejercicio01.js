// titulo
let titulo = document.createElement("h1");
titulo.textContent = "Titulo desde JavaScript";
document.body.append(titulo);
//subtitulo
let subtitulo = document.createElement("h2");
subtitulo.textContent= "Subtitulo desde JavaScript";
document.body.append(subtitulo);
//Parrafo num1
let parrafo1 = document.createElement("p");
parrafo1.textContent = "Parrafo 1 JavaScript";
document.body.append(parrafo1);
//Parrafo num2
let parrafo2 = document.createElement("p");
parrafo2.textContent = "Parrafo 2 JavaScript";
document.body.append(parrafo2);
//lista
let lista = document.createElement("ul");
lista.textContent = "Lista ul"
//5 elementos de la lista
let elemento1 = document.createElement("li");
elemento1.textContent = "li 1";
lista.append(elemento1);

let elemento2 = document.createElement("li");
elemento2.textContent = "li 2";
lista.append(elemento2);

let elemento3 = document.createElement("li");
elemento3.textContent = "li 3";
lista.append(elemento3);

let elemento4 = document.createElement("li");
elemento4.textContent = "li 4";
lista.append(elemento4);

let elemento5 = document.createElement("li");
elemento5.textContent = "li 5";
lista.append(elemento5);
//agregar la lista al documento
document.body.append(lista);