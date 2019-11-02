<!DOCTYPE HTML>
<html>

<head>
	<!-- Titulo de la pagina -->
	<title>Saddle Up</title>
	<!-- Importar el estilo visual de Bootstrap, una libreria con estilos prearmados -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/css/bootstrap.min.css">
	<!-- Importar JQuery, una libreria que facilita el manejo de la página y es necesario para la funcionalidad de bootstrap -->
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.4.0/jquery.min.js"></script>
	<!-- Importar la funcionalidad de Bootstrap, que incluye popups, menus, etc. -->
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.0/js/bootstrap.min.js"></script>
	<!-- Importar js.cookie, una libreria para facilitar el manejo de cookies -->
	<script src="https://cdn.jsdelivr.net/npm/js-cookie@2/src/js.cookie.min.js"></script>

	<style>
		#img-caballo {
			display: none;
		}
	</style>
</head>

<body>
	<?php
	require_once('classes/DataBaseHandler.php');
	require_once('classes/DataBaseTest.php')
	?>
	
	<!-- En el body va el contenido de la página -->
	<div class="container">
		<div class="text-center">
			<h1>Saddle Up</h1>

			<img id="img-caballo" src="img/Caballo_Rojo.png"> <!-- Esta imagen esta invisible. La necesito solo para tener la imagen disponible para dibujarla en el canvas -->
			<canvas id="caballo" width="300" height="300"></canvas>
			<br><br>

			<a id="boton-carrera-actual" class="btn btn-primary" href="carreraActual.html">Carrera Actual</a>
			<br><br>

			<a class="btn btn-primary" href="crearCarrera.html">Crear Carrera</a>
			<br><br>

			<a class="btn btn-primary" href="tienda.html">Tienda</a>
		</div>
	</div>

	<!-- Una vez que se carga todo el contenido, importar nuestro archivo de javascript para agregar nuestra funcionalidad -->
	<script src="js/scriptPintarCaballo.js"></script>
	<script src="js/scriptPrincipal.js"></script>
</body>

</html>







	
 
