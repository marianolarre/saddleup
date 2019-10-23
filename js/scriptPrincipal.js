var dinero = 0

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    let canvas = document.getElementById('caballo')
    let ctx = canvas.getContext('2d')
    let img = document.getElementById('img-caballo')
    img.crossOrigin="anonymous";
   
    var color = Cookies.get('color')
    if (color != null) {
        pintarCaballo(color);
    } else {
        pintarCaballo(0);
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