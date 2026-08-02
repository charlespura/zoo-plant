<?php
session_start();

if (!isset($_SESSION['account_type']) || $_SESSION['account_type'] != 1) {
    header("Location: login.php");
    exit();
}

$servername = "localhost";
$username = "root";
$password = "";
$database = "zoo";

$connections = mysqli_connect($servername, $username, $password, $database);

if (!$connections) {
    die("Connection failed: " . mysqli_connect_error());
}

$threshold = 10 * 60;
$query = "SELECT email, account_type, last_activity FROM login WHERE account_type = 0 ORDER BY last_activity DESC";
$result = mysqli_query($connections, $query);

$online_count = 0;
$users = [];

while ($row = mysqli_fetch_assoc($result)) {
    $last_activity = strtotime($row['last_activity']);
    $time_diff = time() - $last_activity;
    $status = ($time_diff <= $threshold) ? 'online' : 'offline';
    if ($status === 'online') $online_count++;
    $users[] = [
        'email' => htmlspecialchars($row['email']),
        'last_activity' => $row['last_activity'],
        'status' => $status
    ];
}

mysqli_close($connections);
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Admin Dashboard - ZooPlant</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        .status-badge {
            padding: 4px 12px;
            border-radius