<?php
session_start();
if (!isset($_SESSION['email'])) {
    header("Location: login.php");
    exit();
}

$account_type = $_SESSION['account_type'];

if ($account_type == 1) {
    header("Location: admin.php");
    exit();
}
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>ZooPlant - Explore Nature</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="icon" href="zooplant.jpeg" type="image/jpeg">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <link rel="stylesheet" href="style.css">
    <style>
        :root {
            --primary-green: #2d6a4f;
            --secondary-green: #40916c;
            --light-green: #95d5b2;
            --accent: #ffb703;
        }

        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            background: linear-gradient(135deg, #1a3a2a 0%, #2d6a4f 50%, #1a3a2a 100%);
            min-height: 100vh;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Navbar Styling */
        .navbar-custom {
            background: rgba(26, 58, 42, 0.95) !important;
            backdrop-filter: blur(10px);
            border-bottom: 2px solid var(--secondary-green);
            box-shadow: 0 4px 20px rgba(0,0,0,0.3);
        }

        .navbar-brand img {
            transition: transform 0.3s ease;
        }

        .navbar-brand img:hover {
            transform: scale(1.05);
        }

        .search-wrapper {
            position: relative;
            flex: 1;
            max-width: 600px;
        }

        .search-wrapper input {
            border-radius: 25px 0 0 25px;
            padding: 10px 20px;
            border: 2px solid var(--secondary-green);
            background: rgba(255,255,255,0.1);
            color: white;
            transition: all 0.3s ease;
        }

        .search-wrapper input:focus {
            background: rgba(255,255,255,0.2);
            border-color: var(--accent);
            box-shadow: 0 0 20px rgba(255, 183, 3, 0.2);
        }

        .search-wrapper input::placeholder {
            color: rgba(255,255,255,0.6);
        }

        .btn-search {
            border-radius: 0 25px 25px 0;
            background: var(--secondary-green);
            color: white;
            border: 2px solid var(--secondary-green);
            padding: 10px 25px;
            transition: all 0.3s ease;
        }

        .btn-search:hover {
            background: var(--accent);
            border-color: var(--accent);
            color: #1a3a2a;
            transform: scale(1.05);
        }

        /* Sidebar */
        #sidebar {
            position: fixed;
            top: 0;
            left: -300px;
            width: 300px;
            height: 100%;
            background: rgba(26, 58, 42, 0.98);
            backdrop-filter: blur(10px);
            color: white;
            transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
            z-index: 1000;
            padding: 20px;
            box-shadow: 4px 0 30px rgba(0,0,0,0.5);
            border-right: 2px solid var(--secondary-green);
            overflow-y: auto;
        }

        #sidebar.open {
            left: 0;
        }

        #sidebar .sidebar-logo {
            text-align: center;
            padding: 20px 0;
            border-bottom: 2px solid var(--secondary-green);
            margin-bottom: 20px;
        }

        #sidebar .sidebar-logo img {
            width: 120px;
            height: 120px;
            border-radius: 50%;
            border: 3px solid var(--accent);
            padding: 5px;
            transition: transform 0.3s ease;
        }

        #sidebar .sidebar-logo img:hover {
            transform: rotate(360deg);
        }

        #sidebar .nav-link {
            color: rgba(255,255,255,0.8);
            padding: 12px 20px;
            border-radius: 10px;
            margin: 5px 0;
            transition: all 0.3s ease;
            font-weight: 500;
        }

        #sidebar .nav-link:hover {
            background: var(--secondary-green);
            color: white;
            transform: translateX(5px);
        }

        #sidebar .nav-link i {
            margin-right: 12px;
            width: 20px;
        }

        .sidebar-toggle {
            background: transparent;
            border: none;
            color: white;
            font-size: 24px;
            padding: 8px 12px;
            border-radius: 8px;
            transition: all 0.3s ease;
        }

        .sidebar-toggle:hover {
            background: rgba(255,255,255,0.1);
            transform: rotate(90deg);
        }

        /* Category Buttons */
        .category-buttons {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin: 20px 0;
            flex-wrap: wrap;
        }

        .btn-category {
            padding: 12px 30px;
            border-radius: 50px;
            font-weight: 600;
            font-size: 1.1rem;
            transition: all 0.3s ease;
            text-transform: uppercase;
            letter-spacing: 1px;
            position: relative;
            overflow: hidden;
        }

        .btn-category::before {
            content: '';
            position: absolute;
            top: 0;
            left: -100%;
            width: 100%;
            height: 100%;
            background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
            transition: left 0.5s ease;
        }

        .btn-category:hover::before {
            left: 100%;
        }

        .btn-plants {
            background: linear-gradient(135deg, #2d6a4f, #40916c);
            border: none;
            color: white;
        }

        .btn-plants:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 30px rgba(45, 106, 79, 0.4);
        }

        .btn-animals {
            background: linear-gradient(135deg, #e76f51, #f4a261);
            border: none;
            color: white;
        }

        .btn-animals:hover {
            transform: translateY(-3px) scale(1.05);
            box-shadow: 0 10px 30px rgba(231, 111, 81, 0.4);
        }

        .btn-category.active {
            transform: scale(1.05);
            box-shadow: 0 0 30px rgba(255, 183, 3, 0.3);
        }

        /* Content Cards */
        #content {
            padding: 20px;
            margin-top: 20px;
        }

        .content-card {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            margin-bottom: 25px;
            border: 1px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
            animation: fadeInUp 0.6s ease;
        }

        .content-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 15px 40px rgba(0,0,0,0.3);
            border-color: var(--accent);
        }

        .content-card .card-title {
            color: var(--accent);
            font-weight: 700;
            font-size: 1.8rem;
            margin-bottom: 20px;
            text-shadow: 0 2px 10px rgba(0,0,0,0.3);
        }

        .content-card .media-container {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin-bottom: 20px;
        }

        .content-card .media-container iframe {
            width: 100%;
            height: 300px;
            border-radius: 15px;
            border: 2px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
        }

        .content-card .media-container iframe:hover {
            transform: scale(1.02);
            border-color: var(--accent);
        }

        .content-card .media-container img {
            width: 100%;
            height: 300px;
            object-fit: cover;
            border-radius: 15px;
            border: 2px solid rgba(255,255,255,0.1);
            transition: all 0.3s ease;
        }

        .content-card .media-container img:hover {
            transform: scale(1.02);
            border-color: var(--accent);
        }

        .content-card .info-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
            margin-top: 15px;
            background: rgba(0,0,0,0.2);
            padding: 20px;
            border-radius: 15px;
        }

        .content-card .info-grid p {
            color: rgba(255,255,255,0.9);
            margin: 0;
            padding: 5px 0;
        }

        .content-card .info-grid strong {
            color: var(--accent);
        }

        @keyframes fadeInUp {
            from {
                opacity: 0;
                transform: translateY(30px);
            }
            to {
                opacity: 1;
                transform: translateY(0);
            }
        }

        /* Pagination */
        .pagination-container {
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
            margin: 30px 0;
            flex-wrap: wrap;
        }

        .pagination-container button {
            padding: 10px 20px;
            border-radius: 8px;
            border: none;
            background: var(--secondary-green);
            color: white;
            font-weight: 600;
            transition: all 0.3s ease;
            cursor: pointer;
        }

        .pagination-container button:hover {
            background: var(--accent);
            color: #1a3a2a;
            transform: scale(1.05);
        }

        .pagination-container button:disabled {
            opacity: 0.5;
            cursor: not-allowed;
            transform: none;
        }

        .pagination-container .page-info {
            color: white;
            font-weight: 600;
            padding: 5px 15px;
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
        }

        /* Recommendations */
        #recommendations {
            background: rgba(255,255,255,0.05);
            backdrop-filter: blur(10px);
            border-radius: 20px;
            padding: 25px;
            margin: 20px 0;
            border: 1px solid rgba(255,255,255,0.1);
        }

        #recommendations h5 {
            color: var(--accent);
            font-weight: 700;
            margin-bottom: 15px;
            text-align: center;
        }

        .recommendation-item {
            display: inline-block;
            padding: 8px 20px;
            margin: 5px;
            background: rgba(255,255,255,0.1);
            border-radius: 25px;
            color: white;
            cursor: pointer;
            transition: all 0.3s ease;
            border: 1px solid transparent;
        }

        .recommendation-item:hover {
            background: var(--accent);
            color: #1a3a2a;
            transform: scale(1.05);
            border-color: var(--accent);
        }

        /* Welcome Text */
        .welcome-text {
            text-align: center;
            color: rgba(255,255,255,0.8);
            font-size: 1.2rem;
            padding: 40px 20px;
        }

        .welcome-text h2 {
            color: var(--accent);
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 10px;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .content-card .media-container {
                grid-template-columns: 1fr;
            }

            .content-card .media-container iframe,
            .content-card .media-container img {
                height: 200px;
            }

            .search-wrapper {
                max-width: 100%;
                margin: 10px 0;
            }

            .category-buttons {
                flex-direction: column;
                align-items: center;
            }

            .btn-category {
                width: 100%;
                max-width: 300px;
            }

            #sidebar {
                width: 280px;
                left: -280px;
            }
        }
    </style>
</head>
<body>

    <!-- Navbar -->
    <nav class="navbar navbar-custom sticky-top">
        <div class="container-fluid">
            <button id="sidebarToggle" class="sidebar-toggle">
                <i class="fas fa-bars"></i>
            </button>
            
            <a class="navbar-brand" href="#">
                <img src="zooplant.jpeg" alt="ZooPlant" height="50" class="d-inline-block align-top rounded-circle">
                <span class="text-white ms-2 fw-bold" style="font-size: 1.5rem;">ZooPlant</span>
            </a>

            <div class="search-wrapper d-flex">
                <input id="search" class="form-control" type="search" placeholder="Search plants or animals..." aria-label="Search">
                <button class="btn-search" type="button">
                    <i class="fas fa-search"></i>
                </button>
                <button id="voice-search-btn" class="btn btn-search ms-2" type="button" style="border-radius: 50%; width: 50px;">
                    <i class="fas fa-microphone"></i>
                </button>
            </div>
        </div>
    </nav>

    <!-- Sidebar -->
    <div id="sidebar">
        <div class="sidebar-logo">
            <img src="zooplant.jpeg" alt="ZooPlant">
            <h4 class="mt-3 text-white">Explore Nature</h4>
        </div>
        <ul class="nav flex-column">
            <li class="nav-item">
                <a class="nav-link" href="index.php">
                    <i class="fas fa-home"></i> Home
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="quiz.php">
                    <i class="fas fa-brain"></i> Quiz
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="logout.php">
                    <i class="fas fa-sign-out-alt"></i> Logout
                </a>
            </li>
        </ul>
    </div>

    <!-- Main Content -->
    <div id="content" class="container">
        <div class="welcome-text" id="welcomeText">
            <h2>🌿 Welcome to ZooPlant</h2>
            <p>Discover the amazing world of plants and animals. Start by selecting a category below!</p>
        </div>

        <!-- Category Buttons -->
        <div class="category-buttons">
            <button id="show-plants" class="btn btn-category btn-plants">
                <i class="fas fa-leaf"></i> Plants
            </button>
            <button id="show-animals" class="btn btn-category btn-animals">
                <i class="fas fa-paw"></i> Animals
            </button>
        </div>

        <!-- Recommendations -->
        <div id="recommendations" style="display: none;">
            <h5><i class="fas fa-star" style="color: var(--accent);"></i> Personalized Recommendations</h5>
            <div id="recommendation-list"></div>
        </div>

        <!-- Content will be rendered here -->
        <div id="content-container"></div>

        <!-- Pagination -->
        <div id="pagination" class="pagination-container" style="display: none;">
            <button id="prevPage"><i class="fas fa-chevron-left"></i> Previous</button>
            <span class="page-info" id="pageInfo">Page 1 of 1</span>
            <button id="nextPage">Next <i class="fas fa-chevron-right"></i></button>
        </div>
    </div>

    <script>
        // Toggle sidebar
        document.getElementById('sidebarToggle').addEventListener('click', function() {
            document.getElementById('sidebar').classList.toggle('open');
        });

        // Close sidebar on outside click
        document.addEventListener('click', function(event) {
            const sidebar = document.getElementById('sidebar');
            const toggle = document.getElementById('sidebarToggle');
            if (!sidebar.contains(event.target) && !toggle.contains(event.target) && sidebar.classList.contains('open')) {
                sidebar.classList.remove('open');
            }
        });
    </script>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.bundle.min.js"></script>
    <script src="script.js"></script>
</body>
</html>