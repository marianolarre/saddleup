// En el navegador, apretar F12 para ver la Consola
var textoLugar = ""
var textoHora= ""
var actualURL= ""
// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-crear").click(leerInputs)
//    $("#horaIndicada").val($("#labelHora").val())
//    $("#lugarIndicado").val($("#labelLugar").val())
});

function leerInputs() {
    textoLugar = $("#labelLugar").val()
    textoHora= $("#labelHora").val()
    actualURL = window.location
    console.log("-----------------------------------------")
    alert(textoHora + " - " + textoLugar +" - "+ actualURL)
}

