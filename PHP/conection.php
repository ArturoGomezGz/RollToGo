<?php

class mysqlconex
{
        public function conex(){
        $enlace=mysqli_connect("localhost", "root", "1234", "rolltogo");
        return $enlace;
    }
}

?>