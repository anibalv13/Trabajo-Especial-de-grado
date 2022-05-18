<?php
	include 'conexion.php';
	
	$nombre = $_POST["nombre"];
	$usuario = $_POST["usuario"];
	$email = $_POST["email"];
	$dominios = $_POST["dominios"];
	$area = $_POST["area"];
	$telefono = $_POST["telefono"];
	$genero = $_POST["genero"];
	$ciudad = $_POST["ciudad"];
	$direccion = $_POST["direccion"];
	$contrasenia = $_POST["contrasenia"];
	$contrasenia2 = $_POST["contrasenia2"];
	
	$insertar = "INSERT INTO registro (nombre, usuario, email, dominios, area, telefono, genero, ciudad, direccion, contrasenia, contrasenia2) VALUES ('$nombre', '$usuario', '$email', '$dominios', '$area', '$telefono', '$genero', '$ciudad', '$direccion', '$contrasenia', '$contrasenia2')";
	
	$verificar_usuario = mysqli_query($conexion, "SELECT * FROM registro WHERE usuario= '$usuario'");
	
	if (mysqli_num_rows($verificar_usuario) > 0){
		echo '<script>
		alert("El usuario ya está registrado");
		window.history.go(-1);
		</script>';
		exit;
	}
	
	$verificar_email = mysqli_query($conexion, "SELECT * FROM registro WHERE email = '$email'");
	
	if (mysqli_num_rows($verificar_email) > 0) {
		echo '<script>
		alert("El correo ya está registrado");
		window.history.go(-1);
		</script>';
		exit;
	}
	
	$resultado = mysqli_query($conexion, $insertar);
	
	if (!$resultado){
		echo 'Error al registrarse';
	} else {
		echo '<script>
			alert("Usted se ha registrado sastifactoriamente");
			window.history.go(-1);
			</script>';
	}
	
	mysqli_close($conexion);