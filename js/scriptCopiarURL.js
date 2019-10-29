// Con JQuery, todo lo que es inicializacion se hace dentro de este 'ready', que se llama cuando el documento esta listo
$(document).ready(function(){
    $("#boton-copiaurl").click(function(){
        copiarURLCarrera(Cookies.get('url'));
    })
});

function copiarURLCarrera(url){
   if(url == null){
       alert("No tienes ninguna carrera para copiar o ha ocurrido un error.");
   }
   var dummy = $('<input>').val(url).appendTo('body').select()
   document.execCommand('copy');
   alert("URL de carrera copiada al portapapeles.");
}