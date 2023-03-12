<?php
/* datos formulario */

include("conection.php");
/* $getmysql = new mysqlconex(); */
/* $getconex = $getmysql->conex(); */

/*
if(isset($_POST["pedir"])){
    $nombre=$_POST["nombre"];
    $fecha=$_POST["fecha"];
    $hora=$_POST["hora"];
    $especificaciones=$_POST["especificaciones"];
    $bolsaMR=$_POST["bolsaMR"];

    $query= "INSERT INTO pedidos (nombre, fecha, hora) VALUES (?,?,?)";
    $sentecia=mysqli_prepare($getconex,$query);
    mysqli_stmt_bind_param($sentecia, "sss", $nombre,$fecha,$hora);
    mysqli_execute($sentecia);
    $afectado=mysqli_affected_rows($sentecia);

    if($afectado==1){
        echo "<script>alert('pedido de [$nombre] se agrego correctamente'); location.herf'../index.html';</script>";
    }else {
        echo "<script>alert('pedido de [$nombre] no se agrego correctamente'); location.herf'../index.html';</script>";
    }
    mysqli_stmt_close($sentecia);
    mysqli_close($getconex);
} */


$nombre = $_POST["nombre"];
$fecha = $_POST["fecha"];
$hora = $_POST["hora"];

$insertar = "INSERT INTO pedidos (IdPedido, nombre, fecha, hora, IdProducto, cantidad, IdTamaño)
VALUES (null , '$nombre', '$fecha', '$hora','','','')";

$query = mysqli_query($enlace,$insertar);

if($query){
    echo 
    "<script> 
        alert('Supedido fue realizado con exito a nombre de $nombre');
    </script>";
} else {
    echo "error";
};



?>