//formulario de registro
function validar(){
    var formulario =document.registro;
    //validar campos vacio
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
    //contraseña principal
    if (formulario.contrasenia.value == "") {
        document.getElementById("alerta").innerHTML ='<div class="alert alert-danger"><a href="" class="close" data-dismiss="alert">&times;</a>Ingresar una contraseña</div>';
        formulario.contrasenia.focus();
        return false
    }
    else
    {
       document.getElementById("alerta").innerHTML= "";
    }
    formulario.submit();
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
//validar número de caracteres
function validarlongitud(parametro){
    if (parametro.length <6 || parametro.length >20){
        return false;
    }
    else
    {
        return true;
    }
}

