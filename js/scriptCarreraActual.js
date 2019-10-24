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
    //var fechaHoraEvento = moment("2019-10-22"+"T"+"15:20");

    //paso la fecha del evento al formato de moment.js (creo un objeto moment)
    var fechaHoraEvento = formatearFechaHoraEvento();
    console.log("imprimo fechaHoraEvento:");
    console.log(fechaHoraEvento);
    //paso la fecha actual al mismo formato que la fecha del evento
    var fechaHoraActual = formatearFechaHoraActual();
    console.log("imprimo fechaHoraActual:");
    console.log(fechaHoraActual);
    //Limite de tiempo para demora o anticipación
    var limite = 30;
    calcularTiempoLlegada(fechaHoraEvento, fechaHoraActual, limite);
    recompensar(fechaHoraEvento, fechaHoraActual, limite);
    //eliminarCookies();
})
    //$("#boton-abandonar").click(eliminarCookies())

});

function eliminarCookies(){
    Cookies.remove('fecha');
    Cookies.remove('hora');
    Cookies.remove('lugar');
}

function formatearFechaHoraEvento(){
    console.log("fecha del evento: " + Cookies.get('fecha'));
    console.log("hora del evento: " + Cookies.get('hora'));
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
    console.log("diffHours: "+ diffHours);
    var diffMinutes=Math.abs(y.diff(x,"minutes"));
    while(diffMinutes>60){
        diffMinutes-=60;
    }
    console.log("diffMinutes: " + diffMinutes);
    var tiempo = "demora";
    console.log("limite: " + limite);
    console.log("diffHours es menor a 0?");
    console.log("diffMinutes es menor a limite?")
    if(diffHours == 0 && diffMinutes<limite){
        if(diffMinutes == 0)
        {
        alert("Llegaste perfectamente a tiempo");
        }
        else{
            if(y.diff(x,"minutes")<0){
                tiempo="anticipación";
            }
            alert("Llegaste con una " + tiempo + " de " + diffMinutes + " min.");
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
    var dineroActual = parseInt(Cookies.get('dinero'),10);
    var recompensaTempranoActual = parseInt(Cookies.get('recompensaTemprano'),10);
    var ganancia = 0;
    if(diffHours == 0 && diffMinutes<limite){
        if(diffMinutes == 0)
        {
        dineroActual += 100;
        Cookies.set('dinero', dineroActual);
        alert("Recompensa de $"+ 100 + " por llegar perfectamente a tiempo");
        }
        else{
            if(y.diff(x,"minutes")<0){
                ganancia = parseInt(100+((diffMinutes/limite)*100),10);
                dineroActual += ganancia;
                Cookies.set('dinero', dineroActual);
                alert("Recompensa de $"+ ganancia + " por llegar temprano");
                recompensaTempranoActual += 1;
                Cookies.set('recompensaTemprano', recompensaTempranoActual)
                premiar();
            }
            else{
                ganancia = parseInt(100-((diffMinutes/limite)*100),10);
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

// Hacer que la racha no se reinicie, de manera que, por ejemplo, gane el doble a partir de la tercera llegada temprano consecutiva
function premiar(){
    var dineroActual = parseInt(Cookies.get('dinero'),10);
    var recompensaTempranoActual = parseInt(Cookies.get('recompensaTemprano'),10);
    var cantidad = 3
    var premio = 250;
    if(recompensaTempranoActual == cantidad){
        dineroActual += premio;
        Cookies.set('recompensaTemprano', 0);
        Cookies.set('dinero',dineroActual);
        alert("Ganaste un premio de $" + premio + " por llegar " + cantidad + " veces temprano!")
    }
}