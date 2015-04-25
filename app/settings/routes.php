<?php
/**
 * @author Bilal Cinarli
 * @link http://bcinarli.com
 **/


$routes        = array();
$routes['404'] = array('url' => null, 'page' => '/pages/404.php', 'role' => 404);

$routes['homepage'] = array('url' => '/', 'page' => '/pages/index.php', 'role' => 'homepage');


$result = '';

// mail actions
if (isset($_POST) && count($_POST) > 0) {
    extract($_POST);
    if ($name != "" && $email != "" && $subject != "" && $message != "" && $today == date('l')) {
        include_once(ABS_PATH . 'app/classes/class.phpmailer.php');

        $email_info = '
                            ' . nl2br($message) . '
                            <br /><br />
                            ' . $name . '
							<br />
                            ' . $email;

        $mailsubject = $subject;

        $mail = new PHPMailer();

        $mail->CharSet  = "utf-8";
        $mail->From     = $email;
        $mail->FromName = $name;
        $mail->Subject  = $name . ' says hello: "' . $mailsubject . '"';
        $mail->AddAddress('reachme@bcinarli.com');
        $mail->MsgHTML($email_info);

        if (!$mail->Send()) {
            $result = "<p>There were some problems while sending your message. Please try another time.</p>";
        } else {
            $_POST   = '';
            $name    = '';
            $email   = '';
            $subject = '';
            $message = '';
            $today   = '';

            $result = '<p>Thanks for your message.</p>
                    <p>I try to respond as soon as possible.</p>';
        }
    } else {
        $result = "<p>Please fill all field</p>";
    }
}

$GLOBALS['result'] = $result;