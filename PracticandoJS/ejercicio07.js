// crear un sub 
//formulario
let subtitulo_7 = document.createElement("h2");
subtitulo_7.textContent = "Ejercicio 7 Agregar nuevas tecnologias";
document.body.append(subtitulo_7);

let formulario = document.createElement("div");
//nombre
let etiquetaNombre = document.createElement("label");
etiquetaNombre.textContent = "Nombre: ";
let nombre = document.createElement("input");
etiquetaNombre.append(nombre);
formulario.append(etiquetaNombre);
//descripcion
let etiquetaDescripcion = document.createElement("label");
etiquetaDescripcion.textContent = "         Descripción: ";
let descripcion = document.createElement("input");
etiquetaDescripcion.append(descripcion);
formulario.append(etiquetaDescripcion);
//categoria
let etiquetaTipo = document.createElement("label");
etiquetaTipo.textContent = "            Categoria o tipo: ";
let tipo = document.createElement("input");
etiquetaTipo.append(tipo);
formulario.append(etiquetaTipo);
//boton
let botonAgregar = document.createElement("button");
botonAgregar.textContent = "Agregar tecnología";
formulario.append(botonAgregar);

document.body.append(formulario);

//agregar tecnologia al contenedor
botonAgregar.addEventListener("click", (e) => {
    if (nombre.value == "" || descripcion.value == "" || tipo.value == "") { // esta incompleta la info
        alert("Completa todos los campos");
    }
    else {
        let nueva_tec = document.createElement("div");

        let titulo = document.createElement("h2");
        titulo.textContent = nombre.value;
        nueva_tec.append(titulo);

        let texto = document.createElement("p");
        texto.textContent = descripcion.value;
        nueva_tec.append(texto);

        let categoria = document.createElement("p");
        categoria.textContent = tipo.value;
        nueva_tec.append(categoria);

        nueva_tec.style.border = "2px solid black";
        nueva_tec.style.margin = "10px";
        nueva_tec.style.padding = "10px";

        // se agrega al mismo contenedor ya creado
        contenedor.append(nueva_tec);

        // también se guarda en el arreglo de las tecnoligas
        tecnologias.push({nombre: nombre.value, descripcion: descripcion.value, tipo: tipo.value});

        nombre.value = "";
        descripcion.value = "";
        tipo.value = "";
    }

});