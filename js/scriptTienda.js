let canvas
let ctx
let img

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    //pintarCaballo(Cookies.get("color"));
    document.getElementById('display-dinero').textContent = Cookies.get('dinero');

    canvas = document.getElementById('caballo')
    ctx = canvas.getContext('2d')
    img = document.getElementById('img-caballo')
    img.crossOrigin="anonymous";
    console.log(img)
    
    for(var i = 0; i < colores.length; i++) {
           $("#container-botones").append("<button class='boton-color' data-color='"+i+"' style='background-color: "+colores[i]+"'>:)</button>");
    }

	$(".boton-color").click(seleccionarColor);

    pintarCaballo(1);
});

function seleccionarColor() {

var c = $(this).data("color");
pintarCaballo(c);
Cookies.set("color", c);
}
