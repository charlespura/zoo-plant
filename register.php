<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$servername = "localhost";
$username = "root";
$password = "";
$database = "zoo";

$connections = mysqli_connect($servername, $username, $password, $database);

if (!$connections) {
    die("Connection failed: " . mysqli_connect_error());
}

$Email = $password = "";
$EmailErr = $passwordErr = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (empty($_POST["email"])) {
        $EmailErr = "Email is required";
    } else {
        $Email = $_POST["email"];
    }
    if (empty($_POST["password"])) {
        $passwordErr = "Password is required";
    } else {
        $password = $_POST["password"];
    }

    $accountType = $_POST["account_type"];

    if (empty($EmailErr) && empty($passwordErr)) {
        include("connection.php");
        
        $check_email = mysqli_query($connections, "SELECT * FROM login WHERE email = '$Email'");
        if(mysqli_num_rows($check_email) > 0) {
            $EmailErr = "Email already registered";
        } else {
            $hashed_password = password_hash($password, PASSWORD_DEFAULT);
            $insert_query = "INSERT INTO login (email, password, account_type, status) VALUES ('$Email', '$hashed_password', '$accountType', 'active')";
            if(mysqli_query($connections, $insert_query)) {
                echo "Registration successful!";
            } else {
                echo "Error: " . mysqli_error($connections);
            }
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration Form</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="zooplant.jpeg" type="image/jpeg">
    <style>
     .wrapper {
    max-width: 500px;
    margin: auto;
  margin-top: 30px;
    background-color: rgba(0, 0, 0, 0.7); /* Dark background with transparency */
    border-radius: 8px;
   
}

        .input-field input, .input-field select {
            margin-bottom: 10px;
        }
        .error {
            color: red;
        }
        .btn-register {
            width: 100%;
        }
        .form-group {
            animation: fadeIn 1s ease-in-out;
        }
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        body {
            background: url('https://www.wallart.com/media/catalog/product/cache/871f459736130e239a3f5e6472128962/w/0/w03077-small.jpg') no-repeat center center fixed;
            background-size: cover; /* Ensure the image covers the entire body */
           
            background-position: center;
            background-attachment: fixed;
            color: white;
        }
    </style>
</head>
<body>
    <div class="wrapper">
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="p-4 border rounded shadow-lg">
        <div class="text-center mb-4">
            <img src="zooplant.jpeg" alt="ZooPlant Logo" class="img-fluid rounded" style="max-width: 50%;"/>
        </div>
        <h2 class="text-center mb-4">Register</h2>
            <div class="form-group">
                <label for="account_type">Account Type:</label>
                <select id="account_type" name="account_type" class="form-control">
                    <option value="0">User</option>
                    <option value="1">Admin</option>  
                </select><br>

                <input type="email" id="email" name="email" class="form-control" placeholder="Email" value="<?php echo $Email; ?>"><br>
                <span class="error"><?php echo $EmailErr; ?></span><br>

                <input type="password" id="password" name="password" class="form-control" placeholder="Password" value="<?php echo $password; ?>"><br>
                <span class="error"><?php echo $passwordErr; ?></span><br>

                <button type="submit" class="btn btn-primary w-100 mt-3">Register</button>
            </div>
            <div class="text-center mt-3">
                <a href="login.php" class="btn btn-secondary w-100">Already have an account? Login here</a>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
 