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
</head>
<body>
	<main class="container text-center">
        <h1>Ingresar</h1>
        <form class="inline-block" action="includes/login.inc.php" method="POST">
        <div class="form-group">
		    <label for="username">Usuario</label>
		    <input class="form-control" type="text" name="username" required>
		</div>
		<div class="form-group">
		    <label for="pwd">Contraseña</label>
		    <input class="form-control" type="password" name="pwd" required>
		</div>
		<button class="nline-block button1 graybox" type="submit" name="submit" value="login">Log in</button>
		</form>
        <br>
        <br>
        <h1>Registrarse</h1>
        <form action="includes/signup.inc.php" method="POST">
          <div class="form-group">
            <label for="username">Usuario</label>
            <input type="text" class="form-control" name="username" placeholder="Usuario" required>
          </div>
          <div class="form-group">
            <label for="pwd">Contraseña</label>
            <input type="password" class="form-control" name="pwd" placeholder="*****" required>
          </div>
          <div class="form-group">
            <label for="repeatedpwd">Repetir Contraseña</label>
            <input type="password" class="form-control" name="repeatedpwd" placeholder="*****" required>
          </div>
          <button type="submit" class="btn btn-primary" name="submit" value="signin">Registrar</button>
        </form>
	</main>

	<!-- Div de seguridad para poder esconder el watermark sin riesgo a esconder un div importante-->
	<div style="display: hide"></div>

	<script src="https://code.jquery.com/jquery-1.10.2.js"></script>
	<script>
		$(document).ready(function() {
			$("div").last().hide(); //Hide water mark
		});
	</script>
	
</body>
</html>