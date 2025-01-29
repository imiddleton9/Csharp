<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = sanitize_input($_POST["name"]);
    $email = sanitize_input($_POST["email"]);
    $message = sanitize_input($_POST["message"]);

    // Replace with your email address
    $to = "your_email@example.com";
    $subject = "New Contact Form Submission";
    $headers = "From: $email";

    $mailBody = "Name: $name\nEmail: $email\n\nMessage:\n$message";

    mail($to, $subject, $mailBody, $headers);

    // You can redirect the user to a thank-you page or display a thank-you message here
    echo "<p>Thank you for contacting me! I will get back to you soon.</p>";
}

function sanitize_input($data) {
    $data = trim($data);
    $data = stripslashes($data);
    $data = htmlspecialchars($data);
    return $data;
}
?>
