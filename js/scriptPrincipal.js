var dinero = 0

let canvas
let ctx
let img

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    canvas = document.getElementById('caballo')
    ctx = canvas.getContext('2d')
    img = document.getElementById('img-caballo')
    img.crossOrigin="anonymous";
   
    var color = Cookies.get('color')
    if (color != null) {
        pintarCaballo(color);
    } else {
        pintarCaballo(0);
    }
    if(Cookies.get('fecha') == null){
        document.getElementById('boton-carrera-actual').setAttribute("class","btn btn-primary disabled");
    }
});

// Importante! los cookies solo funcionan online, no local. Si probas esto directamente del archivo en tu computadora, los cookies no se guardan correctamente.

// Si no tengo dinero, lo inicializo en 100
if (Cookies.get('dinero') == null) {
	Cookies.set('dinero', 100)
}

if (Cookies.get('recompensaTemprano') == null) {
	Cookies.set('recompensaTemprano', 0)
}