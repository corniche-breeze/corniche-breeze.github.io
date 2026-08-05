# Event Registration Webpage

## Project Description

This project is a simple event registration webpage built using HTML, CSS, and JavaScript. Users can enter their name, choose a ticket type (Standard or VIP), and specify the number of tickets they want to purchase.

The application validates all user input before calculating the total registration cost. If the input is valid, a registration receipt is displayed. If any validation fails, an appropriate error message is shown.

## Features

- Register for Standard or VIP event tickets
- Input validation with user-friendly error messages
- Calculates total registration cost
- Displays a registration receipt with:
  - Registrant name
  - Ticket quantity
  - Total cost
- Hides and shows receipt/error messages based on validation results

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6)

## How to Run

1. Clone or download this repository.
2. Open the project folder.
3. Open `index.html` in a web browser.
   - Alternatively, if using Visual Studio Code, install the **Live Server** extension and launch the project using **Go Live**.

No additional software or dependencies are required.

## AI Assistance

ChatGPT (OpenAI GPT-5.5) was used to assist with this project.

The following prompts were used:

- "Act as a JavaScript developer. Write a function called calculateRegistration that accepts two parameters: quantity (a number) and ticketType (a string: 'standard' or 'vip')."
- "Write a validation function called validateInputs that accepts three parameters: name (string), quantity (number), and ticketType (string)."
- "Write a click event listener for a #registerBtn element that captures the form values, validates the input, calculates the registration total, and displays either an error message or a registration receipt."
- "Write a README.md for this project code."

The generated code was reviewed, tested, and integrated into the final project by the author.

## Author

Created as part of a JavaScript event registration assignment.