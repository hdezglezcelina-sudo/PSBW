//subtitulo del ejer
let subtitulo_10 = document.createElement("h2");
subtitulo_10.textContent = "Ejercicio 10";
document.body.append(subtitulo_10);

let formulario_10 = document.createElement("form");
//cajita para escribir
let usuario_10 = document.createElement("input");
formulario_10.append(usuario_10);

//boton de buscar
let botonBuscar_10 = document.createElement("button");
botonBuscar_10.textContent = "Buscar usuario en GitHub";
formulario_10.append(botonBuscar_10);
document.body.append(formulario_10);

//seccion para el resul
let resultado_10 = document.createElement("section");
document.body.append(resultado_10);

//buscar usuario
formulario_10.addEventListener("submit", async (e) => { //  evento submit para detectar cuando el usuario envie el formulario.
    e.preventDefault();
    if (usuario_10.value == "") { //  verificar que el campo no este vacio
        resultado_10.textContent = "El campo esta vacio, escribe un usuario de GitHub";   
       //alert("El campo esta vacio, escribe un usuario de GitHub");

    }
    else {
        //  API publica de GitHub
        const response = await fetch("https://api.github.com/users/" + usuario_10.value);
        if (response.status == 404) {
            resultado_10.textContent = "El usuario de GitHub no existe";
            //alert("El usuario de GitHub no existe");
        }
        else {
            const nota = await response.json();
            // crear tabla y encabezados
            let tabla_10 = document.createElement("table");
            tabla_10.border = "1";
            tabla_10.style.margin = "20px auto";
            tabla_10.style.textAlign = "center";
            // enc usuario
            let encabezados_10 = document.createElement("tr");
            let tituloUsuario_10 = document.createElement("td");
            tituloUsuario_10.textContent = "Usuario";
            // encabezadoNombre
            encabezados_10.append(tituloUsuario_10);
            let tituloNombre_10 = document.createElement("td");
            tituloNombre_10.textContent = "Nombre";
            encabezados_10.append(tituloNombre_10);
            //encabezado foto
            let tituloFoto_10 = document.createElement("td");
            tituloFoto_10.textContent = "Foto";
            encabezados_10.append(tituloFoto_10);
            //encabezado NumRepos
            let tituloRepositorios_10 = document.createElement("td");
            tituloRepositorios_10.textContent = "Repositorios";
            encabezados_10.append(tituloRepositorios_10);
            //encabezado numseguidores
            let tituloSeguidores_10 = document.createElement("td");
            tituloSeguidores_10.textContent = "Seguidores";
            encabezados_10.append(tituloSeguidores_10);
            //encabezado numsiguiendo
            let tituloSiguiendo_10 = document.createElement("td");
            tituloSiguiendo_10.textContent = "Siguiendo";
            encabezados_10.append(tituloSiguiendo_10);
            
            tabla_10.append(encabezados_10);
            // fila para la info de github
            let fila_10 = document.createElement("tr");

            let celdaUsuario_10 = document.createElement("td");
            celdaUsuario_10.textContent = nota.login;
            fila_10.append(celdaUsuario_10);

            let celdaNombre_10 = document.createElement("td");
            celdaNombre_10.textContent = nota.name || "No disponible";
            fila_10.append(celdaNombre_10);

            let celdaFoto_10 = document.createElement("td"); // crea una celda para la foto.
            let imagen_10 = document.createElement("img"); // crea una imagen
            imagen_10.src = nota.avatar_url; // coloca la foto buscada
            imagen_10.width = 100; // define el ancho
            celdaFoto_10.append(imagen_10); // pone la imagen en la celda
            fila_10.append(celdaFoto_10); // mete la celda con la foto dentro de la fila

            let celdaRepositorios_10 = document.createElement("td");
            celdaRepositorios_10.textContent = nota.public_repos;
            fila_10.append(celdaRepositorios_10);

            let celdaSeguidores_10 = document.createElement("td");
            celdaSeguidores_10.textContent = nota.followers;
            fila_10.append(celdaSeguidores_10);
            
            let celdaSiguiendo_10 = document.createElement("td");
            celdaSiguiendo_10.textContent = nota.following;
            fila_10.append(celdaSiguiendo_10);
            // añadimos la fila a la tabla
           
            // a nuestra sesion le añadimos la tabla
            

            let botonPerfil_10 = document.createElement("button");
            botonPerfil_10.textContent = "Ver perfil de GitHub";
            botonPerfil_10.addEventListener("click", ()=>{
                window.location.href = nota.html_url;
            });
            tabla_10.append(fila_10);
            resultado_10.append(tabla_10);
            resultado_10.append(botonPerfil_10);
        }
    }
});