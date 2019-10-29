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
   else{
    var dummy = document.createElement("textarea");
    // to avoid breaking orgain page when copying more words
    // cant copy when adding below this code
    // dummy.style.display = 'none'
    document.body.appendChild(dummy);
    //Be careful if you use texarea. setAttribute('value', value), which works with "input" does not work with "textarea". – Eduard
    dummy.value = url;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
    alert("URL de carrera copiada al portapapeles.");
   }
}