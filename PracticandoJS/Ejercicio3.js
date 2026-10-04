
//arreglo de objetos que represente cinco tecnologías web
let tecnologias = [
    {nombre: "Css", descripcion: "El lenguaje para diseñar y dar estilo visual", tipo: "fronted" },
    {nombre: "React", descripcion: "Una biblioteca de JavaScript para crear interfaces con componentes", tipo: "fronted" },
    {nombre: "PHP", descripcion: "Un lenguaje clásico muy popular respaldado por sistemas como Laravel", tipo: "Backend" },
    {nombre: "MongoDB", descripcion: "Una base de datos no relacional (NoSQL) basada en documentos JSON", tipo: "Bases de Datos" },
    {nombre: "Node.js", descripcion: "Un entorno de ejecución para usar JavaScript en el servidor.", tipo: "Backend" }
]
//contenedor div para cada tecnología
let contenedor = document.createElement("div");
document.body.append(contenedor);

// nota: queria tener dos tecnologias por renglon para darle mejor visual,
// entonces se utilizo ia generativa para saber como hacerlo
contenedor.style.display = "grid"; // se crea una cuadrilla 
contenedor.style.gridTemplateColumns = "1fr 1fr"; // 2 columnas

tecnologias.forEach(function (tecnologia) {

    let tarjeta = document.createElement("div");

    let nombre = document.createElement("h2");
    nombre.textContent = tecnologia.nombre;
    tarjeta.append(nombre);

    let descripcion = document.createElement("p");
    descripcion.textContent = tecnologia.descripcion;
    tarjeta.append(descripcion);

    let tipo = document.createElement("p");
    tipo.textContent = tecnologia.tipo;
    tarjeta.append(tipo);

    tarjeta.style.border = "2px solid black";
    tarjeta.style.margin = "10px";
    tarjeta.style.padding = "10px";

    contenedor.append(tarjeta);
});