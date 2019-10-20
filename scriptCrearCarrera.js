// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-crear").click(leerInputs)
//    $("#horaIndicada").val($("#labelHora").val())
//    $("#lugarIndicado").val($("#labelLugar").val())

	//seteo el campo Fecha con la fecha de hoy
	var year = moment().format("YYYY");
    var month = moment().format("MM");
	var day = moment().format("DD");
	var today = year+'-'+month+'-'+day;
	document.getElementById('labelFecha').setAttribute("min", today);

	//seteo el campo Hora con la hora de hoy (solo toma la hora, no considera los minutos)
	var hours = moment().format("HH");
    var minutes = moment().format("mm");
    var horario = (hours + ":" + minutes);
	document.getElementById('labelHora').setAttribute("min", horario);
});

function leerInputs() {
    var valorLugar = $("#labelLugar").val()
    var valorFecha= $("#labelFecha").val()
    var valorHora= $("#labelHora").val()
    var url = "recibirCarrera.html"
    var urlConDatos = url+"?fecha="+valorFecha+"&hora="+valorHora + "&lugar=" + valorLugar
    window.location = urlConDatos;
}