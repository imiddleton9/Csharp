<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>Calculation Result</title>
</head>
<body>
<?php
// Check if the form is submitted and the required fields are provided
if (isset($_POST['number1']) && isset($_POST['number2']) && isset($_POST['operation'])) {
    // Retrieve and cast the data
    $num1 = (int) $_POST['number1'];
    $num2 = (int) $_POST['number2'];
    $operation = $_POST['operation'];

    // Validate that inputs are numeric
    if (is_numeric($num1) && is_numeric($num2)) {
        // Perform the operation based on the user's choice
        if ($operation == "add") {
            $result = $num1 + $num2;
        } elseif ($operation == "subtract") {
            $result = $num1 - $num2;
        } elseif ($operation == "multiply") {
            $result = $num1 * $num2;
        } elseif ($operation == "divide") {
            // Check if the divisor (num2) is zero to avoid division by zero
            if ($num2 == 0) {
                $result = "Error: Division by zero is not allowed.";
            } else {
                $result = $num1 / $num2;
            }
        } elseif ($operation == "modulus") {
            if ($num2 == 0) {
                $result = "Error: Modulus by zero is not allowed.";
            } else {
                $result = $num1 % $num2;
            }
        } else {
            $result = "Invalid operation.";
        }

        // Display the result
        echo "<p>The result is: $result</p>";
    } else {
        echo "<p>Please enter valid numeric values for both numbers.</p>";
    }
} else {
    echo "<p>Invalid input. Please fill out the form correctly.</p>";
}
?>
</body>
</html>
