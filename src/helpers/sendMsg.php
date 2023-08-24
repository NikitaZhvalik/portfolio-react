<?php
    $to = "nik.zhvalik@mail.ru";
    $from = trim($_POST['Email']);

    $msg = htmlspecialchars($_POST['Msg']);
    $msg = urldecode($msg);
    $msg = trim($msg);

    if (mail($to, $msg)) {
        echo 'Письмо отправлено'
    } else {
        echo 'Письмо не отправлено'
    }
?>