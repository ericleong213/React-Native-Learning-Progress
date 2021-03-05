<?php

if(isset($_POST["submit"])){
    $name = $_POST["name"];
    $address = $_POST["address"];
    $comment = $_POST["comment"];
    $subject = $_POST["subject"];

    $mailTo = "eric-213@hotmail.com";
    $headers = "From: ".$address;
    $txt = "You have received an e-mail from ".$name.".\n\n".$comment;


    mail($mailTo, $subject, $txt, $headers);
    header("Location: index.php?mailsend");
}