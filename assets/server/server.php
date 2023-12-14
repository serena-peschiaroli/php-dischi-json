<?php

// prelevare contenuto di dischi.json
$string = file_get_contents('dischi.json');

// decodificare JSON in un PHP array
$disks = json_decode($string, true);
$json = json_encode($disks);
// header per permettere al live server di inviare richieste al localhost

header('Access-Control-Allow-Origin: http://127.0.0.1:5500');  
header('Access-Control-Allow-Methods: GET');  
header('Access-Control-Allow-Headers: Content-Type');  

// lista dischi


header('Content-Type: application/json');

echo json_encode($disks);

?>