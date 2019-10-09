// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){

	//decodeURIComponent sirve para decodificar los datos del url. Por ejemplo:
	//cuando se guarda un dato con espacios ("por ejemplo") se convierten en %20 ("por%20ejemplo").
	//esta funcion se deshace de eso.

    $("#display-fecha").html(decodeURIComponent(Cookies.get('fecha')))
    $("#display-hora").html(decodeURIComponent(Cookies.get('hora')))
    $("#display-lugar").html(decodeURIComponent(Cookies.get('lugar')))
    $("#boton-llegada").click(function(){
    	var horaEvento=moment(Cookies.get('hora'), "hh:mm");
    	var hora2=moment();
    	var diferencia=hora2.diff(horaEvento,"minutes");
    	console.log(diferencia/60);
    	alert("Llegaste!\nDiferencia en horas: "+ diferencia/60 + " h");
    })
});