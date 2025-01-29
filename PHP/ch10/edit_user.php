<?php # Script 10.3 - edit_user.php
$page_title = 'Edit a User';
include ('includes/header.html');
require ('../mysqli_connect.php');
require ('UserDAO.php'); // Include UserDAO class

echo '<h1>Edit a User</h1>';

// Initialize UserDAO with PDO connection
$userDAO = new UserDAO($pdo);

// Check for a valid user ID through GET or POST
if ((isset($_GET['id']) && is_numeric($_GET['id'])) || (isset($_POST['id']) && is_numeric($_POST['id']))) {
    $id = isset($_GET['id']) ? $_GET['id'] : $_POST['id'];
} else {
    echo '<p class="error">This page has been accessed in error.</p>';
    include ('includes/footer.html'); 
    exit();
}

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $errors = array();

    // Validate form input
    $fn = !empty($_POST['first_name']) ? trim($_POST['first_name']) : $errors[] = 'You forgot to enter your first name.';
    $ln = !empty($_POST['last_name']) ? trim($_POST['last_name']) : $errors[] = 'You forgot to enter your last name.';
    $email = !empty($_POST['email']) ? trim($_POST['email']) : $errors[] = 'You forgot to enter your email address.';

    if (empty($errors)) {
        // Check for duplicate email address
        if ($userDAO->isEmailTaken($email, $id)) {
            echo '<p class="error">The email address has already been registered.</p>';
        } else {
            // Update user details
            if ($userDAO->updateUser($id, $fn, $ln, $email)) {
                echo '<p>The user has been edited.</p>';
            } else {
                echo '<p class="error">The user could not be edited due to a system error.</p>';
            }
        }
    } else {
        // Display errors
        echo '<p class="error">The following error(s) occurred:<br />';
        foreach ($errors as $msg) {
            echo " - $msg<br />\n";
        }
        echo '</p><p>Please try again.</p>';
    }
}

// Retrieve the user's information and display the form
$user = $userDAO->getUserById($id);
if ($user) {
    echo '<form action="edit_user.php" method="post">
    <p>First Name: <input type="text" name="first_name" size="15" maxlength="15" value="' . htmlspecialchars($user['first_name']) . '" /></p>
    <p>Last Name: <input type="text" name="last_name" size="15" maxlength="30" value="' . htmlspecialchars($user['last_name']) . '" /></p>
    <p>Email Address: <input type="text" name="email" size="20" maxlength="60" value="' . htmlspecialchars($user['email']) . '"  /> </p>
    <p><input type="submit" name="submit" value="Submit" /></p>
    <input type="hidden" name="id" value="' . $id . '" />
    </form>';
} else {
    echo '<p class="error">This page has been accessed in error.</p>';
}

include ('includes/footer.html');
?>
