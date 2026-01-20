<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/Exception.php';
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    // Sanitize
    $fname   = htmlspecialchars(trim($_POST['fname']));
    $lname   = htmlspecialchars(trim($_POST['lname']));
    $email   = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $mobile  = htmlspecialchars(trim($_POST['mobile']));
    $dob     = htmlspecialchars(trim($_POST['dob']));
    $course  = htmlspecialchars(trim($_POST['course']));
    $gender  = htmlspecialchars(trim($_POST['gender']));
    $address = htmlspecialchars(trim($_POST['address']));

    $mail = new PHPMailer(true);

    try {
        // 🔐 SMTP SETTINGS
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com';
        $mail->SMTPAuth   = true;

        // 🔴 CHANGE THESE
        $mail->Username   = 'yourgmail@gmail.com';       // sender gmail
        $mail->Password   = 'YOUR_GMAIL_APP_PASSWORD';   // app password

        $mail->SMTPSecure = 'tls';
        $mail->Port       = 587;

        // 📧 Email Settings
        $mail->setFrom('yourgmail@gmail.com', 'Admission Form');
        $mail->addAddress('collegeemail@college.edu.in'); // 🔴 COLLEGE EMAIL
        $mail->addReplyTo($email);

        // 📄 Email Content
        $mail->isHTML(false);
        $mail->Subject = 'New Admission Registration';

        $mail->Body = "
NEW ADMISSION REGISTRATION

Name    : $fname $lname
Email   : $email
Mobile  : $mobile
DOB     : $dob
Course  : $course
Gender  : $gender
Address : $address
";

        $mail->send();
        header("Location: thank-you.html");
        exit();

    } catch (Exception $e) {
        echo "Mail Error: " . $mail->ErrorInfo;
    }
}

