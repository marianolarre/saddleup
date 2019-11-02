let canvas
let ctx
let img
let dinero = 0;

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    //pintarCaballo(Cookies.get("color"));
    //document.getElementById('display-dinero').textContent = Cookies.get('dinero');
    $.ajax({
        type: "POST",
        url: '../ajax/ajax.php',
        data:{action:'get_money'},
        success:function(data) {
            dinero = data;
        	$('#display-dinero').html(data);
        },
        error:function() {
        	alert("Error al cargar el dinero de la base de datos");
        }
    });

    canvas = document.getElementById('caballo')
    ctx = canvas.getContext('2d')
    img = document.getElementById('img-caballo')
    img.crossOrigin="anonymous";
    for(var i = 0; i < colores.length; i++) {
         $("#container-botones").append("<button class='boton-color' data-color='"+i+"' style='background-color: "+colores[i].hex+"'>$"+colores[i].precio+"</button>");
    }

    $(".boton-color").click(seleccionarColor);
    $("#boton-comprar").click(comprarColor);

    var color = Cookies.get('color')
    if (color != null) {
        pintarCaballo(color);
    } else {
        pintarCaballo(0);
    }
});

function seleccionarColor() {
    var c = $(this).data("color");
    Cookies.set('colorSeleccionado', c);
    pintarCaballo(c);
    if(colores[c].precio<=dinero){
        console.log("Enabling")
        $('#boton-comprar').removeClass("disabled")
    }
    else{
        console.log("Disabling")
        $('#boton-comprar').addClass("disabled")
    }
}
//falta guardar una lista de los colores comprados para volver a usarlos sin comprarlos
function comprarColor() {
    var c = Cookies.get('colorSeleccionado');
    var dineroActual = Cookies.get('dinero');
    dineroActual -= colores[c].precio;
    Cookies.set('color', c);
    Cookies.set('dinero', dineroActual);
    alert("Compraste el color " + colores[c].nombre);
    document.getElementById('display-dinero').textContent = Cookies.get('dinero');
    
   // agregarColoraComprados(c);
}
//        var coloresComprados[];
//function agregarColoraComprados(c){

//       coloresComprados.push(c);
//}
