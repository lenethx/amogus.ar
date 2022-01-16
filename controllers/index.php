<?php
include_once('credentials.php');
$debug='';
$ip=$_SERVER['HTTP_CLIENT_IP'] ?? $_SERVER['HTTP_X_FORWARDED_FOR'] ?? $_SERVER['REMOTE_ADDR'];
$date=date("Y");
if ($ip=='::1'){
    $ip='45.48.4.141';
    $debug.='was ::1';
} 
if (filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_PRIV_RANGE  ) && filter_var($ip, FILTER_VALIDATE_IP, FILTER_FLAG_NO_RES_RANGE  ) ) {
    $apidata=json_decode(file_get_contents("https://api.ipdata.co/${ip}?api-key=".ipdatakey));
} else {
    $apidata='';
    $debug.="invalid $ip";
}
// echo "<pre>";
// var_dump($apidata);
// echo "</pre>";
// echo "<div style='display: none'>";
require_once('views/index.php');

?>