<?php
function conectar(){
    $user= "root";
    $pass= "";
    $server= "localhost";
    $db= "rolltogo";
    $enlace =mysqli_connect($server, $user, $pass, $db);
    
    if(!$enlace){
        die("error al conectar" .mysqli_error() );
    }
    echo"conecion exitosa";
}

?>

