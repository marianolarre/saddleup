// En el navegador, apretar F12 para ver la Consola
console.log("Hola mundo")
var textoLugar = ""
var textoHora= ""
// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-crear").click(Prueba)
});

function Prueba() {
    textoLugar = $("#labelLugar").val()
    textoHora= $("#labelHora").val()
    alert(textoHora + " - " + textoLugar)
}