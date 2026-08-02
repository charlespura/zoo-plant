
# 🌿 ZooPlant

<img width="500" height="300" alt="Screenshot 2026-08-02 at 10 37 50 PM" src="https://github.com/user-attachments/assets/ce1dbac8-b551-409e-b4fd-887d16796f7e" />
<img width="500" height="300" alt="Screenshot 2026-08-02 at 10 38 15 PM" src="https://github.com/user-attachments/assets/a883bd8e-a9ae-49d3-b571-bdb2aeeefd47" />
<img width="500" height="300" alt="Screenshot 2026-08-02 at 10 38 57 PM" src="https://github.com/user-attachments/assets/5da45597-e249-4beb-b4c7-536952faf694" />
<img width="500" height="300" alt="Screenshot 2026-08-02 at 10 42 59 PM" src="https://github.com/user-attachments/assets/a3e1c478-f915-4d21-889f-1f2bccec2dcd" />
ZooPlant is a web-based educational platform that allows users to explore information about plants and animals through an interactive and visually appealing interface. The system includes user authentication, category browsing, search functionality, personalized recommendations, quizzes, and an administrative panel for managing content.

Note: This project was originally developed approximately two years before its public release on GitHub. It is being uploaded now as part of my portfolio and project archive.

## Features

* 🔐 User Registration and Login System
* 👤 Session-Based Authentication
* 🛡️ Admin Dashboard
* 🌱 Plant Information Explorer
* 🐾 Animal Information Explorer
* 🔎 Search Functionality
* 🎤 Voice Search Support
* 🧠 Interactive Quiz Module
* ⭐ Personalized Recommendations
* 📱 Responsive Design using Bootstrap 5
* 🎨 Modern User Interface

---

## Project Structure

```text
ZooPlant/
│
├── vendor/                 # Composer dependencies
├── .env                    # Environment variables
├── env example             # Sample environment configuration
├── .gitignore
├── admin.php               # Admin dashboard
├── composer.json
├── composer.lock
├── connection.php          # Database connection
├── index.php               # Main application page
├── login.php               # User login
├── logout.php              # User logout
├── quiz.php                # Quiz module
├── register.php            # User registration
├── script.js               # Frontend JavaScript
├── style.css               # Stylesheet
├── zoo.sql                 # Database file
└── zooplant.jpeg           # Project logo
```

---

## Technologies Used

### Frontend

* HTML5
* CSS3
* JavaScript
* Bootstrap 5
* Font Awesome

### Backend

* PHP

### Database

* MySQL

### Dependency Management

* Composer

---

## Installation Guide

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/zooplant.git
cd zooplant
```

### 2. Install Dependencies

```bash
composer install
```

### 3. Create Environment File

Copy the example environment file:

```bash
cp "env example" .env
```

Update the database credentials inside `.env`.

### 4. Create Database

Open phpMyAdmin and:

1. Create a database named:

```sql
zoo
```

2. Import:

```text
zoo.sql
```

---

## Database Configuration

Update your database connection settings:

```env
DB_HOST=localhost
DB_NAME=zoo
DB_USER=root
DB_PASS=
```

---

## Running the Project

### Using XAMPP

1. Start:

   * Apache
   * MySQL

2. Move the project folder to:

```text
xampp/htdocs/ZooPlant
```

3. Open your browser:

```text
http://localhost/ZooPlant
```

---

## User Roles

### Regular User

* Register an account
* Login securely
* Browse plants and animals
* Use search functionality
* Take quizzes
* Receive recommendations

### Administrator

* Access admin dashboard
* Manage system content
* Monitor platform activity

---

## Screenshots

### Main Dashboard

The homepage provides:

* Navigation sidebar
* Plant and animal categories
* Search and voice search
* Personalized recommendations
* Interactive content cards

---

## Security Features

* Session-based authentication
* Protected routes
* Role-based access control
* Login validation

---

## Future Improvements

* User profile management
* Favorites system
* Advanced recommendation engine
* Leaderboards for quizzes
* API integration
* Multi-language support

---

## Authors

Developed as part of an educational web application project.

---

## License

This project is intended for educational and academic purposes.
