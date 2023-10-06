const $nombre = document.querySelector("#nombre"), 
      $correo = document.querySelector("#correo"),
      $btnEnviar = document.querySelector("#btnEnviar"), 
      $respuesta = document.querySelector("#respuesta"); 

$btnEnviar.addEventListener("click", () => {
    $respuesta.textContent = "Cargando...";
    const datos = {
        nombre: $nombre.value,
        correo: $correo.value,
    };
    const datosCodificados = JSON.stringify(datos);
    fetch("./procesar.php", {
            method: "POST", 
            body: datosCodificados, 
        })
        .then(respuestaCodificada => respuestaCodificada.json()) 
        .then(respuestaDecodificada => {
            $respuesta.textContent = respuestaDecodificada;
        });
});
