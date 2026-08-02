<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Plants and Animals Quiz</title>
    <style>
        /* General Styling */
        body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
        }

        .container {
            background-color: #ffffff;
            border-radius: 10px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
            padding: 20px 30px;
            max-width: 500px;
            width: 100%;
        }

        h1 {
            text-align: center;
            color: #333333;
        }

        /* Question Styling */
        .question {
            margin-bottom: 20px;
        }

        .question p {
            margin: 0 0 10px;
            font-size: 16px;
            color: #444444;
        }

        input[type="radio"] {
            margin-right: 10px;
        }

        label {
            font-size: 14px;
            color: #333333;
            cursor: pointer;
        }

        /* Button Styling */
        .btn {
            display: block;
            width: 100%;
            text-align: center;
            padding: 12px;
            background-color: #4CAF50;
            color: white;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            font-weight: bold;
            cursor: pointer;
            transition: background-color 0.3s ease;
        }

        .btn:hover {
            background-color: #45a049;
        }

        /* Feedback Styling */
        h2 {
            text-align: center;
            color: #4CAF50;
        }

        p {
            text-align: center;
            font-size: 14px;
            color: #555555;
        }

        a {
            text-decoration: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Plants and Animals Quiz</h1>
        <ul class="nav flex-column">
        <li class="nav-item">
            <a class="nav-link" href="index.php">Home</a>
        </li>
        <li class="nav-item">
            <a class="nav-link" href="logout.php">Logout</a>
    </ul>
        <?php
        session_start();

        // Pre-defined question pool
        $questionPool = [
            [
                "question" => "Which of the following is a plant?",
                "options" => ["Tree", "Tiger", "Shark"],
                "answer" => "Tree"
            ],
            [
                "question" => "What process do plants use to make food?",
                "options" => ["Photosynthesis", "Digestion", "Respiration"],
                "answer" => "Photosynthesis"
            ],
            [
                "question" => "Which animal is known as the king of the jungle?",
                "options" => ["Lion", "Elephant", "Deer"],
                "answer" => "Lion"
            ],
            [
                "question" => "What do you call animals that eat only plants?",
                "options" => ["Herbivore", "Carnivore", "Omnivore"],
                "answer" => "Herbivore"
            ],
            [
                "question" => "Which of these is a desert plant?",
                "options" => ["Cactus", "Rose", "Oak"],
                "answer" => "Cactus"
            ],
            [
                "question" => "What is the largest land animal?",
                "options" => ["Elephant", "Giraffe", "Lion"],
                "answer" => "Elephant"
            ],
            [
                "question" => "Which bird is known for its vibrant tail feathers?",
                "options" => ["Peacock", "Sparrow", "Penguin"],
                "answer" => "Peacock"
            ],
            [
                "question" => "What type of trees lose their leaves in the fall?",
                "options" => ["Deciduous", "Evergreen", "Palm"],
                "answer" => "Deciduous"
            ],
            [
                "question" => "What is the fastest land animal?",
                "options" => ["Cheetah", "Lion", "Horse"],
                "answer" => "Cheetah"
            ],
            [
                "question" => "Which aquatic animal is known for its tentacles?",
                "options" => ["Octopus", "Shark", "Dolphin"],
                "answer" => "Octopus"
            ]
        ];

        // Number of questions to display in each quiz
        $numQuestions = 5;

        if ($_SERVER['REQUEST_METHOD'] == 'POST') {
            // Evaluate the quiz
            $score = 0;
            $questions = $_SESSION['questions']; // Retrieve the random questions

            foreach ($questions as $index => $question) {
                $submittedAnswer = $_POST["q" . $index] ?? null;
                if ($submittedAnswer === $question['answer']) {
                    $score++;
                }
            }

            echo "<h2>Your Score: $score / $numQuestions</h2>";

            if ($score === $numQuestions) {
                echo "<p>Excellent! You got all answers right!</p>";
            } elseif ($score >= $numQuestions / 2) {
                echo "<p>Good job! Keep learning.</p>";
            } else {
                echo "<p>Don't worry! Practice makes perfect.</p>";
            }

            echo "<a href='quiz.php'><button class='btn'>Try Again</button></a>";
        } else {
            // Shuffle and select random questions
            shuffle($questionPool);
            $questions = array_slice($questionPool, 0, $numQuestions);
            $_SESSION['questions'] = $questions; // Save for answer checking

            echo '<form method="POST" action="">';

            // Display the questions
            foreach ($questions as $index => $question) {
                echo "<div class='question'>";
                echo "<p>" . ($index + 1) . ". " . $question['question'] . "</p>";
                foreach ($question['options'] as $option) {
                    echo "<label><input type='radio' name='q$index' value='$option' required> $option</label><br>";
                }
                echo "</div>";
            }

            echo '<button type="submit" class="btn">Submit</button>';
            echo '</form>';
        }
        ?>
    </div>
</body>
</html>