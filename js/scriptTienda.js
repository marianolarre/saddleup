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
    
    for(var i = 0; i < colores.length; i++) {
           $("#container-botones").append("<button class='boton-color' data-color='"+i+"' style='background-color: "+colores[i].hex+"'>+colores[i].precio+</button>");
    }

	$(".boton-color").click(seleccionarColor);

    var color = Cookies.get('color')
    if (color != null) {
        pintarCaballo(color);
    } else {
        pintarCaballo(0);
    }
});

function seleccionarColor() {
    var c = $(this).data("color");
    pintarCaballo(c);
    Cookies.set("color", c);
}
