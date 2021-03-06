<?
	session_start();
?>
<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Chrisbal</title>
    <link rel="stylesheet" href="../css/bootstrap.min.css">
    <link rel="stylesheet" href="../css/styles.css">
    <link rel="shortcut icon" type="image/x-icon" href="../Images/favico.ico"></link>
  </head>
  <body>
    <header>
      <nav id="header-nav" class="navbar navbar-default">
        <div class="container">
          <div class="navbar-header">
            <a href="interfaz.php" class="pull-left visible-md visible-lg">
              <img id="logo-img" src="../Images/Logot.png"></img>
            </a>
            <div class="navbar-brand">
              <a href="interfaz.php"><h1>Chrisbal</h1></a>
            </div>
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#collapsable-nav" aria-expanded="false">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
          </div>
          <div id="collapsable-nav" class="collapse navbar-collapse">
            <ul id="nav-list" class="nav navbar-nav navbar-right">
              <li>
                <a class=" hidden-sm hidden-md" href="TablaPeriodicaSimbolos2.html">Tabla peri&oacute;dica</a>
              </li>
			        <li>
                <a class=" hidden-sm hidden-md" href="teoria.html">Teor&iacute;a</a>
              </li>
              <li>
                <a class=" hidden-sm hidden-md" href="formulas.html">F&oacute;rmulas</a>
              </li>
			        <li>
                <a class=" hidden-sm hidden-md" href="ejemplos.html">Ejemplos</a>
              </li>
			  <li>
				<a href="../php/cerrar_sesion.php">Cerrar sesi&oacute;n</a>
			  </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
        <div class="container">
          <div class="col-md-4 col-sm-6 col-xs-12">
            <a href="teoria.html"><div id="teoria"><span>Teor&iacute;a</span></div></a>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-12">
            <a href="formulas.html"><div id="formulas"><span>Formulas</span></div></a>
          </div>
          <div class="col-md-4 col-sm-12 col-xs-12">
            <a href="ejemplos.html"><div id="ejemplos"><span>Ejemplos</span></div></a>
          </div> 
        </div>    
    <footer class="panel-footer">
      <div class="container">
        <div class="row">
          <section id="sugerencias" class="col-sm-4">
            <span>Buz&oacute;n de sugerencias</span><br>
            <textarea placeholder="Escribe aqu&iacute; tu sugerencia "></textarea>
            <hr class="visible-xs">
          </section>
          <section id="creadores" class="col-sm-4">
            <span>Creadores</span><br>
            Christian Wilhelm <br>
            <a>WilhelmchristianCj2@gmail.com</a><br>
            Anibal Vielma <br>
            <a>Asenciovd@gmail.com</a>
            <hr class="visible-xs">
          </section>
          <section id="testimonios" class="col-sm-4">
            <p>"Aprender desde Chrisbal es divertido"</p>
            <p>"Innovemos el sistema educativo con Chrisbal"</p>
          </section>
        </div>
        <div class="text-center">&copy; Copyright Chrisbal 2021</div>
      </div>
    </footer>
    <script src="../js/jquery-2.1.4.min.js"></script>
    <script src="../js/bootstrap.min.js"></script>
    <script src="../js/script.js"></script>
  </body>
</html>