<?php

$a[] = "Zelda ocarina of time";
$a[] = "Megaman";
$a[] = "Sonic Adventure";
$a[] = "Donkey kong country";
$a[] = "Mario kart ds";

$q = $_REQUEST["q"];

$sugerencia = "";

if($q !== ""){
    $q = strtolower($q);
    $len = strlen($q);
    foreach($a as $nombreVid){
        if(stristr($q, substr($nombreVid, 0, $len))){
            if($sugerencia === ""){
                $sugerencia = $nombreVid;
            }

            else {
                $sugerencia .= ", $nombreVid";
            }
        }
    }
}

echo $sugerencia === "" ? "No se encontro sugerencia" : $sugerencia;

?>