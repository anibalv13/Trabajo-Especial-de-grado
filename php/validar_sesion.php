<?php
session_start();
$usuario=$_POST['usuario'];
$contrasenia=$_POST['contrasenia'];

$conexion = mysqli_connect("localhost","root","","proyecto");

$consulta= "SELECT * FROM registro WHERE usuario='$usuario' and contrasenia='$contrasenia'";

$resultado= mysqli_query($conexion, $consulta);

$filas= mysqli_num_rows($resultado);

if ($filas > 0){
	$_SESSION['username'] = '$usuario';
	header ("location:../Pages/interfaz.php");
}
else{
	echo '<script>
        alert("El usuario y la contraseña no coinciden");
        window.history.go(-1);
        </script>';
}

mysqli_free_result($resultado);

mysqli_close($conexion);