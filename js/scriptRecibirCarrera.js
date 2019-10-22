// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
	$.urlParam = function(name){
		var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
		return results[1] || 0;
	}

	var lugar = $.urlParam('lugar');
	var hora = $.urlParam('hora');
	var fecha = $.urlParam('fecha');

	Cookies.set('lugar', lugar);
	Cookies.set('hora', hora);
	Cookies.set('fecha', fecha);

	window.location = "carreraActual.html";
});