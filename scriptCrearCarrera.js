// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-crear").click(leerInputs)
//    $("#horaIndicada").val($("#labelHora").val())
//    $("#lugarIndicado").val($("#labelLugar").val())
});

function leerInputs() {
    var valorLugar = $("#labelLugar").val()
    var valorFecha= $("#labelFecha").val()
    var valorHora= $("#labelHora").val()
    var url = "recibirCarrera.html"
    var urlConDatos = url+"?fecha="+valorFecha+"&hora="+valorHora + "&lugar=" + valorLugar
    window.location = urlConDatos;
}