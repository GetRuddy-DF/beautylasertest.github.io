<?php
    $name = $_POST['name'];
    $phone = $_POST['phone'];

    $subject = "=?utf-8?B?".base64_encode("Запись с сайта")."?=";

    $succes = mail("sarsekeeva.verra@gmail.com",$subject, $phone, $name);
    echo $succes;
?>