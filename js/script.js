//formulario de registro
function validar(){
    var formulario =document.registro;
    //validar campos vacios
    //nombre vacio
    if (formulario.name.value == "" || validarespacio(formulario.name.value) == false ) {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar Nombre del estudiante</div>';
        formulario.name.value= "";
        formulario.name.focus();
        return false
    }
    else if(validartexto(formulario.name.value) == false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener caracteres num&eacute;ricos</div>';
        formulario.name.value= "";
        formulario.name.focus();
        return false
    }
    else if(validarlongitud(formulario.name.value)== false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener menos de 6 caracteres</div>';
        formulario.name.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //usuario vacio
    if (formulario.usuario.value == "" || validarespacio(formulario.usuario.value)== false) {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar un Nombre de usuario</div>';
        formulario.usuario.value="";
        formulario.usuario.focus();
        return false
    }
    else if(validarlongitud(formulario.usuario.value)== false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener menos de 6 caracteres</div>';
        formulario.usuario.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //email vacio
    if (formulario.email.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar una direcci&oacute;n de correo</div>';
        formulario.email.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //dominio
    if (formulario.dominios.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Indique un Dominio</div>';
        formulario.dominios.focus();
        return false
    }
    //c??digo de area
    if (formulario.area.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Indique un C??digo de area</div>';
        formulario.area.focus();
        return false
    }
    //telefono vacio
    if (formulario.telefono.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar un n&uacute;mero de telefono</div>';
        formulario.telefono.focus();
        return false
    }
    else if(validarnumero(formulario.telefono.value) == false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Debe ingresar caracteres num&eacute;rico</div>';
        formulario.telefono.value="";
        formulario.telefono.focus();
        return false
    }
    else if(valiadartelefono(formulario.telefono.value) == false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Debe ingresar n&uacute;mero valido</div>';
        formulario.telefono.value="";
        formulario.telefono.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //genero
    if (formulario.genero.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Indique su g&eacute;nero</div>';
        formulario.genero.focus();
        return false
    }
    //ciudad
    if (formulario.ciudad.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Indique su Ciudad</div>';
        formulario.ciudad.focus();
        return false
    }
     //direccion vacia
     if (formulario.direccion.value == "" || validarespacio(formulario.direccion.value)== false) {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar una direcci&oacute;n</div>';
        formulario.direccion.value="";
        formulario.direccion.focus();
        return false
    }
    else if(validarlongitud(formulario.direccion.value)== false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener menos de 6 caracteres</div>';
        formulario.direccion.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //contrase??a principal
    if (formulario.contrasenia.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar una contrase??a</div>';
        formulario.contrasenia.focus();
        return false
    }
    else if(validarlongitud(formulario.contrasenia.value)== false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener menos de 6 caracteres</div>';
        formulario.contrasenia.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //contrase??a secundaria
    if (formulario.contrasenia2.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Verifique su contrase??a</div>';
        formulario.contrasenia2.focus();
        return false
    }
    else if(validarlongitud(formulario.contrasenia2.value)== false){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>El campo no puede tener menos de 6 caracteres</div>';
        formulario.contrasenia2.focus();
        return false
    }
    else{
       document.getElementById("alerta").innerHTML= "";
    }
    //validar contrase??as iguales
    if(formulario.contrasenia.value != formulario.contrasenia2.value){
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Deben coincidir ambas contrase??a</div>';
        formulario.contrasenia.value="";
        formulario.contrasenia2.value="";
        formulario.contrasenia.focus();
        return false
    }
    else{
        document.getElementById("alerta").innerHTML= "";
    }
    formulario.submit();
}
//validar texto
function validartexto(parametro){
    var patron= /^[a-zA-Z????????????????????????\s]*$/;
    if(parametro.search(patron)){
        return false;
    }else{
        return true;
    }
}
//validar n??meros
function validarnumero(parametro){
    if(!/^([0-9])*$/.test(parametro)){
        return false;
    }
    else{
        return true;
    }
}
//validar correo
/*function validarcorreo(parametro){
    var patron = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(!patron.test(parametro)){
        return false;
    }
    else{
        return true;
    }
}*/
//validar telefono
function valiadartelefono(parametro){
    var patron =/^\d{7}$/; //formato de 7 n??meros 
    if(!patron.test(parametro)){
        return false;
    }
        else {
            return true;
        }
    }
//validar espacios vacios
function validarespacio(parametro){
    var patron =/^\s+$/;
    if(patron.test(parametro)){
        return false;}
        else
        {
            return true;
        }
    }
//validar n??mero de caracteres
function validarlongitud(parametro){
    if (parametro.length <6 || parametro.length >30){
        return false;
    }
    else
    {
        return true;
    }
}

