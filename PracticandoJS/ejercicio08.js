//crear sub
let subtitulo_8 = document.createElement("h2");
subtitulo_8.textContent = "Ejercicio 8 Buscar tecnologia (es sensible a minusculas y mayusculas)";
document.body.append(subtitulo_8);

let buscar = document.createElement("input");
buscar.placeholder = "Buscar tecnología";
document.body.append(buscar);

buscar.addEventListener("input", (e) => {
    let textoBuscar = buscar.value;

    // solo las tarjetas (los div dentro de contenedor)
    let buscar_tec = contenedor.querySelectorAll("div");

    buscar_tec.forEach(function (tecnologia) {
        let name_tec = tecnologia.querySelector("h2").textContent;

        if (name_tec.includes(textoBuscar)) {
            tecnologia.style.display = "";
        }
        else {
            tecnologia.style.display = "none";
        }
    });
});