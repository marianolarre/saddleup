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
			<h1>Crear Carrera</h1>

			<!-- Selector de fecha -->
			<br>
			<label>Fecha: </label><input id="labelFecha" type="date" min="" name="date" value="">
			<br><br>
			<label>Hora: </label><input id="labelHora" type="time"  name="time" min="" max="23:59" value= "" required>
			<!-- Selector de lugar -->
			<br><br>
			<label>Lugar: </label><input id= "labelLugar" type="text" name="place">

			<br><br>
			<a id="boton-crear" class="btn btn-success">Crear</a>

			<br><br>
			<a class="btn btn-primary" href="index.html">Volver</a>
		</div>
	</div>

	<!-- Una vez que se carga todo el contenido, importar nuestro archivo de javascript para agregar nuestra funcionalidad -->
	<script src="js/scriptCrearCarrera.js">
		
	</script>
	<!-- moment.js sirve para manejar fechas en javascript-->
	<script src="lib/moment.js">

	</script>
	
</body>

</html>