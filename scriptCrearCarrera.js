// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-crear").click(leerInputs)
//    $("#horaIndicada").val($("#labelHora").val())
//    $("#lugarIndicado").val($("#labelLugar").val())
	var today = new Date();
	var dd = today.getDate();
	var mm = today.getMonth()+1; //January is 0!
	var yyyy = today.getFullYear();
	if(dd<10){
    	    dd='0'+dd
   		} 
  		if(mm<10){
        mm='0'+mm
    	} 

	today = yyyy+'-'+mm+'-'+dd;
	document.getElementById('labelFecha').setAttribute("min", today);
	
	//COMPLETAR TIEMPO MINIMO
	//agregar atributo "min" en el HTML
	var time = new Date();
	var hh = time.getHours();
	var mm = time.getMinutes();
	time = hh + ':' + mm;
	document.getElementById('labelHora').setAttribute("min", time);
});

function leerInputs() {
    var valorLugar = $("#labelLugar").val()
    var valorFecha= $("#labelFecha").val()
    var valorHora= $("#labelHora").val()
    var url = "recibirCarrera.html"
    var urlConDatos = url+"?fecha="+valorFecha+"&hora="+valorHora + "&lugar=" + valorLugar
    window.location = urlConDatos;
}