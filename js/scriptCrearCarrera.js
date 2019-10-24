// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
	//Seteo la fecha y hora del evento por defecto para evitar controlar que la gente llene los campos, solo tendran que corregirlos
	document.getElementById('labelHora').setAttribute("value", horarioDefaultValue());
	document.getElementById('labelFecha').setAttribute("value", todayDefaultValue());
    //seteo el campo Fecha y el campo Hora con la fecha y hora de hoy (la función horaMinima por algun motivo solo restringe la hora, setea los minutos pero no restringe los minutos de la hora actual)
    document.getElementById('labelFecha').setAttribute("min", fechaMinima());
    document.getElementById('labelHora').setAttribute("min", horaMinima());
    $("#boton-crear").click(leerInputs)
//    $("#horaIndicada").val($("#labelHora").val())
//    $("#lugarIndicado").val($("#labelLugar").val())

});

function horarioDefaultValue(){
    var hoursDefault = moment().format("HH");
    var minutesDefault = moment().format("mm");
    var horarioDefault = (hoursDefault + ":" + minutesDefault);
    return horarioDefault;
}

function todayDefaultValue(){
    var yearDefault = moment().format("YYYY");
    var monthDefault = moment().format("MM");
    var dayDefault = moment().format("DD");
    var todayDefault = yearDefault+'-'+monthDefault+'-'+dayDefault;
    return todayDefault;
}

function fechaMinima(){
    var year = moment().format("YYYY");
    var month = moment().format("MM");
    var day = moment().format("DD");
    var today = year+'-'+month+'-'+day;
    return today;
}

function horaMinima(){
    var hours = moment().format("HH");
    var minutes = moment().format("mm");
    var horario = (hours + ":" + minutes);
    return horario;
}

function leerInputs() {
    var valorLugar = $("#labelLugar").val()
    var valorFecha= $("#labelFecha").val()
    var valorHora= $("#labelHora").val()
    var url = "recibirCarrera.html"
    //falta corregir el caso de que cambie de dia o año cuando se esta creando la carrera
    if(corregirMinutos() == true && $("#labelLugar").val() != ""){
    	var urlConDatos = url+"?fecha="+valorFecha+"&hora="+valorHora + "&lugar=" + valorLugar
    	window.location = urlConDatos;
    }
    else{
        if(corregirMinutos() == false){
            alert("La hora ingresada no puede ser menor o igual a la hora actual");
        }
    	else{
            alert("Debe ingresar un lugar");
        }
    }
}

function corregirMinutos() {
	//Consigo la fecha seleccionada para el evento (necesito la fecha entera para considerar bien la hora)
	var horaEvento = moment($("#labelFecha").val() + "T" + $("#labelHora").val());
	//Consigo la fecha actual (tambien la necesito para considerar bien la hora)
	var year = moment().format("YYYY");
    var month = moment().format("MM");
    var day = moment().format("DD");
    var hours = moment().format("HH");
    var minutes = moment().format("mm");
    var horaActual = moment(year + "-" + month + "-" + day + "T" + hours + ":" + minutes);
	return horaActual.isBefore(horaEvento);
}
