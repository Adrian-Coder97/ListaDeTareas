(function () {
    var cajaTexto = document.getElementById("cajaTexto")
    var btnEnviar = document.getElementById("btnEnviar")
    var listaOrdenada = document.getElementById("listaOrdenada")

    eventoCaja = () => {/*cuando se de clic en la caja limpiarla y restaurar las clases originales*/
        cajaTexto.className = "fs-2 p-2 form-control text-center"
    }
    eventoBoton = (e) => {
        var tarea = cajaTexto.value;
        if (tarea == "") {/*si la caja esta vacia al presionar el boton ponerla en rojo*/
            cajaTexto.className = "fs-2 p-2 alert-danger border-danger text-danger centrar form-control text-center"
            cajaTexto.setAttribute("role", "alert")
            e.preventDefault();
        } else {/*si la caja tiene algo adentro de ella crear el elemento*/
            var elemento = document.createElement("li")
            var elemento2 = document.createElement("a")
            var contenido = document.createTextNode(tarea)
          
            elemento2.setAttribute("href", "#")
            elemento2.className = "quitar"
            elemento.className = "p-3 fs-2 border-bottom border-5"


            elemento2.appendChild(contenido)
            elemento.appendChild(elemento2)
            listaOrdenada.appendChild(elemento)

            cajaTexto.value = "";/*limpiar la caja al finalizar*/
            for (var i = 0; i <= listaOrdenada.children.length - 1; i++) {
                listaOrdenada.children[i].addEventListener("click", function () {
                    this.parentNode.removeChild(this);
                });
            }
        }
    }
    eliminarTarea = (e) => {/*eliminar un elemento de la lista al dar clic en el*/
        this.parentNode.removeChild(this);
    }



    cajaTexto.addEventListener("click", eventoCaja)/*cuando se de clic en la caja limpiarla y restaurar las clases originales*/
    btnEnviar.addEventListener("click", eventoBoton)


    for (var i = 0; i <= listaOrdenada.children.length - 1; i++) {
        listaOrdenada.children[i].addEventListener("click", function () {
            this.parentNode.removeChild(this);
        });
    }

}())

