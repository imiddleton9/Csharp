<?php
// Database connection parameters
$hostname = "imc.kean.edu";
$username = "middleti"; // Your MySQL username
$password = "1197535"; // Your MySQL password
$dbname = "CPS3740_2024S"; // Your MySQL database name

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if code and tel parameters are provided
if (isset($_GET['code']) && isset($_GET['tel'])) {
    // Sanitize input to prevent SQL injection
    $code = $conn->real_escape_string($_GET['code']);
    $tel = $conn->real_escape_string($_GET['tel']);

    // SQL query to update telephone number
    $sql = "UPDATE Lab2program_middleti SET tel = '$tel' WHERE code = '$code'";

    // Execute query
    if ($conn->query($sql) === TRUE) {
        echo "Telephone number updated successfully.";
    } else {
        echo "Error updating telephone number: " . $conn->error;
    }
} else {
    echo "Both code and tel parameters are required.";
}

// Close connection
$conn->close();
?>