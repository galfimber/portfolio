<?php

$mail_to = "info@mail.ru";
$email_from = "info@mail.ru";
$name_from = "Growtask";
$subject = "Сообщение с сайта";

$message = "Вам пришло новое сообщение с сайта: <br><br>\n" .
"<strong>Вопрос:<strong> " . trim($_POST['contact__quest']) . "<br>\n" .
"<strong>Телефон или почта:<strong> " . trim($_POST['contact__phone']) . "<br>\n" .
"<strong>Имя:<strong> " . trim($_POST['contact__name']) . "<br>\n" .
"<strong>Соц.сеть или мессенджер:<strong> " . trim($_POST['contact__social']) . "<br>\n";

$subject = "=utf-8?B?" . base64_encode($subject) . "?=";

$headers = "MIME-Version: 1.0" . PHP_EOL .
    "Content-Type: text/html; charset=utf-8" . PHP_EOL .
    "From: " . "=?utf-8?B?" . base64_encode($name_from) . "?=" . "<" . $email_from . ">" . PHP_EOL .
    "Reply-to: " . $email_from . PHP_EOL;

//mail($mail_to, $subject, $message, $headers);

echo $message;