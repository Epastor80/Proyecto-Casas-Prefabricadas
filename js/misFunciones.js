
$( document ).ready(function() {
    console.log( "En linea" );
    init();
});

function init(){
    $(".confirmacionRegistro").hide();

}

function irMenu(){
  
    window.location="principal.html";

}

function cerrarSesion(){
    window.location="index.html";

}