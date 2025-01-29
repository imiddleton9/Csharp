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

class UserDAO {
    private $pdo;

    public function __construct($pdo) {
        $this->pdo = $pdo;
    }
    // Other methods...
    public function deleteUserById($id) {
        $query = "DELETE FROM users WHERE user_id = :id";
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount(); // Returns the number of affected rows
    }
    public function getUserById($id) {
        $query = "SELECT * FROM users WHERE user_id = :id";
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->fetch(PDO::FETCH_ASSOC); // Fetch data as an associative array
    }
    public function isEmailTaken($email, $id) {
        $query = "SELECT user_id FROM users WHERE email = :email AND user_id != :id";
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        $stmt->execute();
        return $stmt->rowCount() > 0;
    }
    public function updateUser($id, $firstName, $lastName, $email) {
        $query = "UPDATE users SET first_name = :first_name, last_name = :last_name, email = :email WHERE user_id = :id";
        $stmt = $this->pdo->prepare($query);
        $stmt->bindParam(':first_name', $firstName, PDO::PARAM_STR);
        $stmt->bindParam(':last_name', $lastName, PDO::PARAM_STR);
        $stmt->bindParam(':email', $email, PDO::PARAM_STR);
        $stmt->bindParam(':id', $id, PDO::PARAM_INT);
        return $stmt->execute();
    }
    
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
