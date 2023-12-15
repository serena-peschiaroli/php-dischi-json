<?php

// controlla se uno specifico id è richiesto
if (isset($_GET['disk_id'])) {
    $diskId = $_GET['disk_id'];
    $string = file_get_contents('dischi.json');
    $disks = json_decode($string, true);

    // trova il disco selezionato via id 
    $selectedDisk = array_values(array_filter($disks, function ($disk) use ($diskId) {
        return $disk['id'] == $diskId;
    }));

    // headers per non incorrere in blocco cors
    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    // ritorna tutti i dettagli del disco selezionato
    echo json_encode($selectedDisk);
} else {
    // se non è rchiesto un disco specifico, ritorna tutto
    $string = file_get_contents('dischi.json');
    $disks = json_decode($string, true);

    //headers anti-cors
    header('Access-Control-Allow-Origin: http://127.0.0.1:5500');
    header('Access-Control-Allow-Methods: GET');
    header('Access-Control-Allow-Headers: Content-Type');
    header('Content-Type: application/json');

    // ritorna la lista di tutti i dischi
    echo json_encode($disks);
}
