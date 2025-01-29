<?php
$page_title = 'Delete a User';
include ('includes/header.html');
require ('../mysqli_connect.php'); // Connect to the database
require ('UserDAO.php'); // Include the UserDAO class

echo '<h1>Delete a User</h1>';

// Get user ID from GET or POST
$id = null;
if (isset($_GET['id']) && is_numeric($_GET['id'])) {
    $id = $_GET['id'];
} elseif (isset($_POST['id']) && is_numeric($_POST['id'])) {
    $id = $_POST['id'];
} else {
    echo '<p class="error">This page has been accessed in error.</p>';
    include ('includes/footer.html');
    exit();
}

// Initialize the PDO and UserDAO objects
$pdo = new PDO('mysql:host=localhost;dbname=cps3351', 'don', 'wei');
$userDAO = new UserDAO($pdo);

// Check if the form has been submitted
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    if ($_POST['sure'] === 'Yes') {
        // Delete user record
        if ($userDAO->deleteUserById($id) > 0) {
            echo '<p>The user has been deleted.</p>';
        } else {
            echo '<p class="error">The user could not be deleted due to a system error.</p>';
        }
    } else {
        echo '<p>The user has NOT been deleted.</p>';
    }
} else {
    // Retrieve user info
    $user = $userDAO->getUserById($id);
    if ($user) {
        echo "<h3>Name: {$user['name']}</h3>";
        echo 'Are you sure you want to delete this user?';
        // Display form
        echo '<form action="delete_user.php" method="post">
            <input type="radio" name="sure" value="Yes" /> Yes 
            <input type="radio" name="sure" value="No" checked="checked" /> No
            <input type="submit" name="submit" value="Submit" />
            <input type="hidden" name="id" value="' . htmlspecialchars($id) . '" />
        </form>';
    } else {
        echo '<p class="error">This page has been accessed in error.</p>';
    }
}

include ('includes/footer.html');
?>
