<?php

// prelevare contenuto di dischi.json
$string = file_get_contents('dischi.json');

// decodificare JSON in un PHP array
$disks = json_decode($string, true);

// lista dischi
header('Content-Type: application/json');
echo json_encode($disks);

?>