(function () {

  //Variables principales
  var lista = document.getElementById("lista"),
  tareaInput = document.getElementById("tareaInput"),
  btnNuevaTarea = document.getElementById("btn-agregar");

  //Funciones
  var agregarTarea = function () {
    //alert("Agregando una tarea");
    var tarea = tareaInput.value,
    nuevaTarea = document.createElement("li"),
    enlace = document.createElement("a");
    contenido = document.createTextNode(tarea);

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "No haz agregado una tarea");
      tareaInput.className = "error";
      return false;
    }

    //--Agregamos el contenido al elemento anchor
    enlace.appendChild(contenido);

    //--Establecemos el atributo href al elemento anchor
    enlace.setAttribute("href", "#");

    //-- Agregamos el elemento anchor a la lista
    nuevaTarea.appendChild(enlace);

    //--Agregando finalmente al elemento
    lista.appendChild(nuevaTarea);

    tareaInput.value = "";

    for (var i = 0; i < lista.children.length; i++) {
      lista.children[i].addEventListener("click", function () {
        this.parentNode.removeChild(this);
      });
    }

  };

  var comprobarInput = function () {
    //alert("Comprobando el input vacio");
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");

  };

  var eliminarTarea = function () {
    //alert("Eliminando una tarea");
    this.parentNode.removeChild(this);    
  };
  //Eventos

  //--Agregar una nueva tarea
  btnNuevaTarea.addEventListener("click",agregarTarea);

  //--Comprobar que el Input no esté vacío
  tareaInput.addEventListener("click",comprobarInput);

  //--Borrando elemento de la lista
  for (var i = 0; i <  lista.children.length; i++) {
    lista.children[i].addEventListener("click", eliminarTarea);
  }



}());
