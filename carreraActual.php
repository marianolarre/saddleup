<!DOCTYPE HTML>
<html>

<head>
	<!-- Titulo de la pagina -->
	<title>Saddle Up - Crear Carrera</title>
	<!-- Importar el estilo visual de Bootstrap, una libreria con estilos prearmados -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<!-- Importar JQuery, una libreria que facilita el manejo de la página y es necesario para la funcionalidad de bootstrap -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<!-- Importar la funcionalidad de Bootstrap, que incluye popups, menus, etc. -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<!-- Importar js.cookie, una libreria para facilitar el manejo de cookies -->
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>
</head>

<body>
	<!-- En el body va el contenido de la página -->
	<div class="container">
		<div class="text-center">
			<h1>Carrera Actual</h1>

			<h2>Fecha: <span id="display-fecha">...</span></h2>
			<h2>Hora: <span id="display-hora">...</span></h2>
			<h2>Lugar: <span id="display-lugar">...</span></h2>

			<br>
            <a id="boton-llegada" class="btn btn-success enabled" href="index.html">Llegué</a>

			<br><br>
			<a id="boton-copiaurl" class="btn btn-primary">Copiar URL</a>	

			<br><br>
			<a id="boton-abandonar" href="index.html" class="btn btn-danger enabled">Abandonar</a>

			<br><br>
			<a class="btn btn-primary" href="index.html">Volver</a>

		</div>
	</div>

	<!-- Una vez que se carga todo el contenido, importar nuestro archivo de javascript para agregar nuestra funcionalidad -->
	<script src="js/scriptCarreraActual.js"></script>
	<script src="js/scriptCopiarURL.js"></script>
	<!-- moment.js sirve para manejar fechas en javascript-->
	<script src="lib/moment.js">
		
	</script>
	
</body>


</html>