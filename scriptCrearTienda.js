var colores = [
    "red",
    "blue",
    "green",
    "cyan",
    "white",
    "yellow",
    "orange"
]

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-comprar").click(leerInputs)
    
    for(var i = 0; i < colores.length; i++) {
           $("#container-botones").append("<button class='boton-color' style='background-color: "+colores[i]+"'>:)</button>");
    }
});

function leerInputs() {

}
