<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $number = $_POST['number'];
    $city = $_POST['city'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    // Set up email recipient and subject
    $to = "prai47465@gmail.com"; // Change this to your email address
    $subject = "New form submission from $name";

    // Compose the email message
    $body = "Name: $name\n";
    $body .= "Mobile: $number\n";
    $body .= "City: $city\n";
    $body .= "Email: $email\n";
    $body .= "Message:\n$message";

    // Send email
    if (mail($to, $subject, $body)) {
        echo "Your message has been sent successfully.";
    } else {
        echo "Sorry, something went wrong. Please try again later.";
    }
}
?>
