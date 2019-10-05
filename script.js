// En el navegador, apretar F12 para ver la Consola
console.log("Hola mundo")

// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){

	// Para asignarle una función a un botón se debe usar JQuery. $("#id").click(funcion)
	$("#boton-crear").click(Prueba)
});

function Prueba() {
	alert("Prueba")
}