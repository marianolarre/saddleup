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
    $("#display-dinero").html(decodeURIComponent(Cookies.get('dinero')))

    
    for(var i = 0; i < colores.length; i++) {
           $("#container-botones").append("<button class='boton-color' data-color='"+i+"' style='background-color: "+colores[i]+"'>:)</button>");
    }

	$(".boton-color").click(seleccionarColor);

	pintarCaballo(Cookies.get("color"));
});

function seleccionarColor() {

var c = $(this).data("color");
pintarCaballo(c);
Cookies.set("color", c);
}

function pintarCaballo(indiceColor) {
	$("#caballo").css("background-color", colores[indiceColor]);

}
