<?php
$datos = json_decode(file_get_contents("php://input"));

$nombre = $datos->nombre;
$correo = $datos->correo;

file_put_contents("datos.txt", "Nombre: $nombre, Correo: $correo\n", FILE_APPEND);
echo json_encode("Formulario enviado");