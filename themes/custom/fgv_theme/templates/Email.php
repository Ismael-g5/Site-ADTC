<?php
//Import PHPMailer classes into the global namespace
//These must be at the top of your script, not inside a function
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

//Load Composer's autoloader
require 'vendor/autoload.php';

//Create an instance; passing `true` enables exceptions
$mail = new PHPMailer(true);

if(isset($_POST['submit'])){
$nome = $POST['nome'];
$email = $POST['email'];
$telefone = $POST['telefone'];
$cidade_pais = $POST['cidade-pais'];
$mensagem = $POST['mensagem'];
try {
  //Server settings
  $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
  $mail->isSMTP();                                            //Send using SMTP
  $mail->Host       = 'smtp.mailtrap.io';                     //Set the SMTP server to send through
  $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
  $mail->Username   = 'f2c51bd6a97a16';                     //SMTP username
  $mail->Password   = 'bf97e81485d3fa';                               //SMTP password
  // $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
  $mail->Port       = 2525;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

  //Recipients
  $mail->setFrom($email, $nome);
  // $mail->addAddress('joe@example.net', 'Joe User');     //Add a recipient

  //Content
  $mail->isHTML(true);                                  //Set email format to HTML
  $mail->Subject = 'Here is the subject';
  $mail->Body    = $mensagem;
  // $mail->AltBody = 'This is the body in plain text for non-HTML mail clients';

  $mail->send();
  echo 'Message has been sent';
} catch (Exception $e) {
  echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}

}
