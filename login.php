<?php 
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$Email = $password = "";
$EmailErr = $passwordErr = "";

$servername = "localhost";
$username = "root";
$password = "";
$database = "zoo";

$connections = mysqli_connect($servername, $username, $password, $database);

if (!$connections) {
    die("Connection failed: " . mysqli_connect_error());
}

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

    if (empty($EmailErr) && empty($passwordErr)) {
        include("connection.php");
        $check_email = mysqli_query($connections, "SELECT * FROM login WHERE email = '$Email' AND status = 'active'");
        $check_email_row = mysqli_num_rows($check_email);

        if ($check_email_row > 0) {
            while ($row = mysqli_fetch_assoc($check_email)) {
                $db_password = $row["password"];
                $db_Account_type = $row["account_type"];

                if (password_verify($password, $db_password)) {
                    session_start();
                    $_SESSION['email'] = $Email;
                    $_SESSION['account_type'] = $db_Account_type;
                    
                    if ($db_Account_type == "1") {
                        header("Location: admin.php");
                        exit();
                    } else {
                        header("Location: index.php");
                        exit();
                    }
                } else {
                    $passwordErr = "Password is incorrect";
                }
            }
        } else {
            $EmailErr = "Email is not registered or inactive";
        }
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign In</title>
    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="zooplant.jpeg" type="image/jpeg">
   <style>
         .wrapper {
    max-width: 500px;
    margin: auto;
  margin-top: 70px;
    background-color: rgba(0, 0, 0, 0.7); /* Dark background with transparency */
    border-radius: 8px;
   
}
        .input-field input {
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
          /* Apply background image to the body */
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
        <!-- Add Zooplant Image Above the Form -->
     
        <form method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']); ?>" class="p-4 border rounded shadow-lg">
         
        <div class="text-center mb-4">
            <img src="zooplant.jpeg" alt="ZooPlant Logo" class="img-fluid rounded" style="max-width: 50%;"/>
        </div>
<h2 class="text-center mb-4">Login</h2>
            <div class="form-group">
                <input type="email" id="email" name="email" class="form-control" placeholder="Email" value="<?php echo $Email; ?>">
                <span class="error"><?php echo $EmailErr; ?></span><br>

                <input type="password" id="password" name="password" class="form-control" placeholder="Password" value="<?php echo $password; ?>">
                <span class="error"><?php echo $passwordErr; ?></span><br>

                <button type="submit" class="btn btn-primary w-100 mt-3">Login</button>
            </div>
            <div class="text-center mt-3">
                <a href="register.php" class="btn btn-secondary w-100">Register</a>
            </div>
        </form>
    </div>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"></script>
</body>
</html>
