Ejericio 1:
1. ¿Qué hace este ejercicio?
    Crea partes para añadir a un .html, en este caso titulos, subtitulos, parrafos y listas. document.createElement("h1"); 
        Crea un titulo
    titulo.textContent
        le añade lo que llevara esa variable
    document.body.append(titulo);
        lo agrega al body del html

2. ¿Qué conceptos de JavaScript utilizaste?
    utilice variables, funciones para crear, agregar, utilice manipulacion en el dom desde JavaScript
3. ¿Ya conocías estos conceptos? 
    Si, ya conocia como crear variables, agregarles informacion y añadirlas desde JavaScript
4. ¿Tuviste dificultades?
    Especialmente en este ejercicio no
5. ¿Utilizaste Inteligencia Artificial?
    No


Ejercicio 2: 
1. ¿Qué hace este ejercicio?
    Cambiar el contendio de un elemento ya existente y modificar elementos visuales
2. ¿Qué conceptos de JavaScript utilizaste?
    variables, ciclso
3. ¿Ya conocías estos conceptos?
    Si, fueron vistos en clases
4. ¿Tuviste dificultades?   
    No
5. ¿Utilizaste Inteligencia Artificial?
    No

Ejercicio 3: 
1. ¿Qué hace este ejercicio?
    Crea un arreglo de objetos y los añade al body, a estos sse les da formato de border, amrgin, etc
2. ¿Qué conceptos de JavaScript utilizaste?
    arreglos, variables, styles, ciclos, contenedores
3. ¿Ya conocías estos conceptos?
    Si
4. ¿Tuviste dificultades?
    Solo en la creacion de estilos apr alograrlo como pedia exactamente el ejercicio
5. ¿Utilizaste Inteligencia Artificial?
    Si, queria tener dos tecnologias por renglon para darle mejor visual, entonces se utilizo ia generativa para saber como hacerlo
    contenedor.style.display = "grid"; // se crea una cuadrilla 
    contenedor.style.gridTemplateColumns = "1fr 1fr"; // 2 columnas

    explicaicon: 
    contenedor.style.display = "grid";
        contenedor es donde están las tecnologias.
        display = "grid" hace que se acomoden en forma de cuadricula.

    contenedor.style.gridTemplateColumns = "1fr 1fr";
        gridTemplateColumns indica cuantas columnas habra
        "1fr 1fr" hace 2 columnas del mismo tamaño

Ejercicio 4: 
1. ¿Qué hace este ejercicio?
    Se crean dos botones, uno para reorganizar la pagina, este ocupa especificamente una nueva zona en el html, debido a que se tuvo problemas con el boton de restaurar ya que no tomaba en cuenta los ejercicios suiguientes sy los debaja hasta arriba
2. ¿Qué conceptos de JavaScript utilizaste?
    arreglos, variables, styles, botones, eventos, funciones
3. ¿Ya conocías estos conceptos?
    Si
4. ¿Tuviste dificultades?
    se tuvo problemas con el boton de restaurar ya que no tomaba en cuenta los ejercicios suiguientes sy los debaja hasta arriba
5. ¿Utilizaste Inteligencia Artificial?
    No

Ejercicio 5: 
1. ¿Qué hace este ejercicio?
    Se crean dos botones, uno para agregar un nuevo elemento a las tecnologia y otro para eliminarlos.
2. ¿Qué conceptos de JavaScript utilizaste?
    variables, styles, botones, eventos, funciones, ciclos y condicionales
3. ¿Ya conocías estos conceptos?
    Si
4. ¿Tuviste dificultades?
    No
5. ¿Utilizaste Inteligencia Artificial?
     Sí, listas.lastElementChild.remove(); // investigada funcion para eliminar
     esta funcion remueve los elementos de la variable que se le da

    explicaicon:
        listas.lastElementChild.remove();
        lastElementChild selecciona el ultimo elemento y remove() lo elimina

Ejercicio 6:
1. ¿Qué hace este ejercicio?
    Se crea un panel interactivo con botones para cambiar el texto, cambiar el fondo y cambiar el aspecto del texto. Tambien se cambia el tamaño del título al pasar el mouse sobre el
2. ¿Qué conceptos de JavaScript utilizaste?
    Variables, styles, botones, eventos, funciones, condicionales, mouseover y mouseout.
3. ¿Ya conocías estos conceptos?
    Sí. fueron vistos en clase
4. ¿Tuviste dificultades?
    No.
5. ¿Utilizaste Inteligencia Artificial?
    No


Ejercicio 7:
1. ¿Qué hace este ejercicio?
    Se crea un formulario para agregar nuevas tecnologías con su nombre, descripción y categoria. La información se agrega al contenedor y también al arreglo de tecnologias.
2. ¿Qué conceptos de JavaScript utilizaste?
    Variables, formularios, inputs, botones, eventos, condicionales, objetos, arreglos y funciones.
3. ¿Ya conocías estos conceptos?
    Sí.
4. ¿Tuviste dificultades?
    Solamente con la creación de los labels, ya que no recordaba como eran y con la forma de añadirlo al arreglo ya existente
5. ¿Utilizaste Inteligencia Artificial?
    Sí, para saber como añadirlo al arrelgo ya existentee de tecnologias
    tecnologias.push({nombre: nombre.value, descripcion: descripcion.value, tipo: tipo.value});


Ejercicio 8:
1. ¿Qué hace este ejercicio?
    Se crea un buscador para encontrar tecnologias dentro del contenedor. La busqueda es sensible a mayusculas y minusculas
2. ¿Qué conceptos de JavaScript utilizaste?
    Variables, input, eventos, funciones, ciclos, condicionales, querySelectorAll, querySelector
3. ¿Ya conocías estos conceptos?
    Sí.
4. ¿Tuviste dificultades?
    No.
5. ¿Utilizaste Inteligencia Artificial?
    Sí, para investigar cómo realizar una busqueda dentro de las tecnologias y ocultar las que no coinciden.
    if (name_tec.includes(textoBuscar))

    explicacion: 
        if revisa una condicion
        name_tec es el nombre de la tecnologia
        includes() revisa si ese nombre contiene el texto buscado
        textoBuscar es lo que escribió el usuario en el buscador

Ejercicio 9:
1. ¿Qué hace este ejercicio?
    Se guardan las nuevas tecnologias en localStorage para que no se pierdan al recargar la pagina. Tambien se crea un botón para borrar los datos guardados y regresar al estado inicial
2. ¿Qué conceptos de JavaScript utilizaste?
    Variables, funciones, arreglos, ciclos, botones, eventos, localStorage y JSON.
3. ¿Ya conocías estos conceptos?
    Algunos, en este caso si revise los apuntes de clases y de mi profesora e investigue en internet
4. ¿Tuviste dificultades?
    Sí, porque no guardaba los datos al recargar la pagina, tuve que hacer varias modificaciones hasta que funciono
5. ¿Utilizaste Inteligencia Artificial?
    No


Ejercicio 10:
1. ¿Qué hace este ejercicio?
    Se crea un formulario para buscar un usuario de GitHub. Se muestran sus datos, como usuario, nombre, foto, repositorios, seguidores y personas que sigue. Tambien se agrega un botón para ver su perfil
2. ¿Qué conceptos de JavaScript utilizaste?
    Variables, formularios, inputs, botones, eventos, funciones, condicionales, fetch, API, JSON, tablas y window.location
3. ¿Ya conocías estos conceptos?
    Sí. fueron vistos en la ultima clase del jueves.
4. ¿Tuviste dificultades?
    Sí, mas en la parte del diseño porque queria mostrarla en tabla y no tenia conocimiento de estos
5. ¿Utilizaste Inteligencia Artificial?
    Sí. La utilice para investigar como hacer una tabla con la informacion del usuario de GitHub especificamente en filas y columnas. 
    Utilice createElement("table"), createElement("tr") y createElement("td") para crear la tabla, las filas y las celdas.

    explicacion: 
        table crea la tabla
        tr crea una fila
        td crea una celda



Preguntas adicionales para el ejercicio 10

6. ¿Qué entiendes por AJAX?
    Es una forma de obtener informacion del servidor sin tener que recargar toda la pagina, este trabaja en segundo plano
7. ¿Por qué la página no necesita recargarse para obtener nueva información?
    Porque la informacion se obtiene mediante una peticion al servidor desde JavaScript sin tneer la necesidad de recargar la pagina
8. ¿Qué hace fetch()?
    Hace una peticion a una direccion
9. ¿Qué representa la respuesta obtenida del servidor?
    Representala informacion que recibimos de GitHub despues de hacer la peticion
10. ¿Qué es JSON y para qué se utilizó?
    JSON es una forma de organizar informacion para poder enviarla y recibirla Se utilizo para poder leer los datos que nos manda GitHub

11. ¿Qué hace event.preventDefault() en el formulario?
    Evita que el formulario recargue la pagina cuando se envia

12. ¿Qué diferencia existe entre un error en la petición y buscar un usuario que no existe?
    Un usuario que no existe devuelve una respuesta 404 porque GitHub no encontro ese usuario
    Un error en la peticion significa que hubo un problema al realizar o completar la peticion

13. Describe, paso a paso, el recorrido de los datos desde que el usuario presiona “Buscar usuario” hasta que la información aparece en pantalla
    El usuario escribe su nombre de usuario
    Presiona el boton Buscar usuario
    Se detecta que envio el formulario
    Se evita que la pagina se recargue
    Se revisa que el campo no este vacio
    fetch() busca la informacion del usuario en GitHub
    GitHub devuelve la informacion
    Se convierten los datos con response.json()
    Se toman los datos que necesitamos
    Despues se muestran en la tabla