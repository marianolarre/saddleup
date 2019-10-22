// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){

	//decodeURIComponent sirve para decodificar los datos del url. Por ejemplo:
	//cuando se guarda un dato con espacios ("por ejemplo") se convierten en %20 ("por%20ejemplo").
	//esta funcion se deshace de eso.

    $("#display-fecha").html(decodeURIComponent(Cookies.get('fecha')))
    $("#display-hora").html(decodeURIComponent(Cookies.get('hora')))
    $("#display-lugar").html(decodeURIComponent(Cookies.get('lugar')))
    $("#boton-llegada").click(function(){
        //proxima línea --> testeo local sin cookies
        //var fechaHoraEvento = moment("2019-10-22"+"T"+"05:00");

        //paso la fecha del evento al formato de moment.js (creo un objeto moment)
        var fechaHoraEvento = formatearFechaHoraEvento();
        //paso la fecha actual al mismo formato que la fecha del evento
        var fechaHoraActual = formatearFechaHoraActual();
        //Limite de tiempo para demora o anticipación
        var limite = 30;
        calcularTiempoLlegada(fechaHoraEvento, fechaHoraActual, limite);
        recompensar(fechaHoraEvento, fechaHoraActual, limite);
        
        
        //Recompensas
        //Pasar las siguientes 2 lineas a la funcion de recompensa
        //var limiteRecompensa = limite;
        //var recompensa = 100;
        
    })
});

function formatearFechaHoraEvento(){
    return moment(Cookies.get('fecha')+"T"+Cookies.get('hora'));
}

function formatearFechaHoraActual(){
    var year = moment().format("YYYY");
    var month = moment().format("MM");
    var day = moment().format("DD");
    var hours = moment().format("HH");
    var minutes = moment().format("mm");
    return moment(year + "-" + month + "-" + day + "T" + hours + ":" + minutes);
}

function calcularTiempoLlegada(x, y, limite){
        //consigo los valores en horas, minutos, segundos y milisegundos, los paso a valores
        //absolutos (positivos) y a formato adecuado. Ejemplo: si tengo -75 minutos en
        //realidad tengo 1 hora y 15 minutos de anticipación
        var diffHours=Math.abs(y.diff(x,"hours"));
        var diffMinutes=Math.abs(y.diff(x,"minutes"));
        while(diffMinutes>60){
            diffMinutes-=60;
        }
        var tiempo = "demora";
        
        if(diffHours == 0 && diffMinutes<limite){
            if(diffMinutes == 0)
            {
            alert("Llegaste perfectamente a tiempo");
            }
            else{
                if(y.diff(x,"minutes")<0){
                    tiempo="anticipación";
                    //recompensa por anticipación
                }
                alert("Llegaste con una " + tiempo + " de " + diffMinutes + " min.");
                //recompensa por demora
            }
        }
        else{
            if(y.diff(x,"minutes")<0){
                alert("Es muy temprano");
            }
            else{
                alert("Es muy tarde");
            }
        }
}

function recompensar(x, y, limite){
    var diffHours=Math.abs(y.diff(x,"hours"));
    var diffMinutes=Math.abs(y.diff(x,"minutes"));
    while(diffMinutes>60){
        diffMinutes-=60;
    }
    var dineroActual = Cookies.get('dinero');
    var ganancia = 0;
    if(diffHours == 0 && diffMinutes<limite){
        if(diffMinutes == 0)
        {
        dineroActual += 100;
        Cookies.set('dinero', dineroActual);
        alert("Recompensa de $"+ ganancia + " por llegar perfectamente a tiempo");
        }
        else{
            if(y.diff(x,"minutes")<0){
                ganancia = 100+((diffMinutes/limite)*100);
                dineroActual += ganancia;
                Cookies.set('dinero', dineroActual);
                alert("Recompensa de $"+ ganancia + " por llegar temprano");
            }
            else{
                ganancia = 100-((diffMinutes/limite)*100);
                dineroActual += ganancia;
                Cookies.set('dinero', dineroActual);
                alert("Recompensa de $"+ ganancia + " por llegar tarde");
            }
        }
    }
    else{
        alert("No hay recompensa");
    }
}