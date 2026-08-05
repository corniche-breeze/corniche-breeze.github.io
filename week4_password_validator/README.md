# Password Validator Webpage

## Overview

This project is a simple password validator built with HTML, CSS, and JavaScript contained in a single HTML file. As the user types a password, the page validates it in real time and provides visual feedback for each password requirement. A password strength meter updates dynamically based on how many validation rules are satisfied.

## Features

* Real-time password validation
* Checks for a minimum password length of 8 characters
* Verifies that the password contains at least one number
* Verifies that the password contains at least one special character (`! @ # $ % ^ & *`)
* Displays checkmarks (✓) or X marks (✖) for each validation rule
* Updates a password strength indicator:

  * **Empty** – No password entered
  * **Weak** – 0–1 rules passed
  * **Medium** – 2 rules passed
  * **Strong** – 3 rules passed
* Updates validation while the user types in either the password or confirm password field

## Technologies Used

* HTML5
* CSS3
* JavaScript (embedded in the HTML file)

## How to Run

1. Clone or download this repository.
2. Open the project folder in Visual Studio Code or another code editor.
3. Open `password-validator.html`.
4. Launch the file using the Live Server extension or open it directly in a web browser.

## Project Structure

```text
project-folder/
│
├── password-validator.html
└── README.md
```

## AI Assistance

Portions of this project were developed with assistance from OpenAI's ChatGPT (GPT-5.5). AI was used to:

* Generate the `checkPasswordRules()` JavaScript function.
* Generate the JavaScript event listeners for real-time password validation.
* Explain JavaScript concepts and implementation details.
* Review and improve code for readability and correctness.
* Assist in writing this README documentation.

All AI-generated code was reviewed, tested, and integrated by the student.
