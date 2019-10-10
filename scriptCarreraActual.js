// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){

	//decodeURIComponent sirve para decodificar los datos del url. Por ejemplo:
	//cuando se guarda un dato con espacios ("por ejemplo") se convierten en %20 ("por%20ejemplo").
	//esta funcion se deshace de eso.

    $("#display-fecha").html(decodeURIComponent(Cookies.get('fecha')))
    $("#display-hora").html(decodeURIComponent(Cookies.get('hora')))
    $("#display-lugar").html(decodeURIComponent(Cookies.get('lugar')))
    $("#boton-llegada").click(function(){

        //este código esta hecho con un límite de anticipación y demora de 24 horas
        //Consigo la hora del evento y mi hora de llegada
        
        //hora del evento
        var x=moment(Cookies.get('hora'), "hh:mm");

        //la próxima linea es para testeo local
        //var x=moment("20:30", "hh:mm");

        //hora de llegada
        var y=moment();

        //consigo los valores en horas, minutos, segundos y milisegundos, los paso a valores
        //absolutos (positivos) y a formato adecuado. Ejemplo: si tengo -75 minutos en
        //realidad tengo 1 hora y 15 minutos de anticipación
        var diffHours=Math.abs(y.diff(x,"hours"));
        var diffMinutes=Math.abs(y.diff(x,"minutes"));
        //var diffSeconds=Math.abs(y.diff(x,"seconds"));
        //var diffMilliseconds=Math.abs(y.diff(x,"milliseconds"));
        while(diffMinutes>60){
            diffMinutes-=60;
        }
        /*
        while(diffSeconds>60){
            diffSeconds-=60;
        }
        while(diffMilliseconds>1000){
            diffMilliseconds-=1000;
        }*/
        if(diffHours == 0 && diffMinutes == 0 && diffSeconds ==0){
            alert("Llegaste perfectamente a tiempo");
        }
        else {
            var tiempo="demora";
            if(y.diff(x,"milliseconds")<0){
                tiempo="anticipación";
            }
            alert("Llegaste con una " + tiempo + " de " + diffHours + " h " + diffMinutes + " min");
        }
    })
});