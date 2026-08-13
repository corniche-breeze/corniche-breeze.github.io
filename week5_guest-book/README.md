# Guest List Webpage

## Description

This project is a simple guest list webpage built with HTML, CSS, and JavaScript. Users can enter guest names into an input field and click the **Add** button to add each name to a guest list.

The page dynamically updates the total number of guests and displays the guest names as HTML list items.

## Features

* Accepts guest names through an input field.
* Prevents blank or whitespace-only entries from being added.
* Stores guest names in a JavaScript array.
* Uses `.push()` to add names to the array.
* Uses the array's `.length` property to track the total number of guests.
* Dynamically generates `<li>` elements using the `generateListHTML` function.
* Updates the guest list using `.innerHTML`.
* Clears the input field after a guest is successfully added.

## How It Works

The JavaScript maintains an array called `guestArray`:

```javascript
let guestArray = [];
```

When the **Add** button is clicked:

1. The value from the `#guestName` input is captured.
2. An `if` statement checks that the input is not blank or only whitespace.
3. The guest name is added to `guestArray` using `.push()`.
4. The total guest count is updated using `guestArray.length`.
5. The `generateListHTML()` function loops through the array and creates `<li>` elements.
6. The generated HTML is inserted into `#guestListDisplay`.
7. The input field is cleared for the next guest.

## JavaScript Functions

### `generateListHTML(listData)`

This function accepts an array of strings and uses a `.forEach()` loop to create a single HTML string containing `<li>` elements.

### Add Button Event Listener

The `#addBtn` click event listener handles adding new guests, updating the counter, displaying the guest list, and clearing the input field.

## How to Run

1. Download or clone the project files.
2. Open the HTML file in a web browser.
3. Enter a guest name in the input field.
4. Click **Add**.
5. The guest will appear in the list and the total guest count will increase.

## Technologies Used

* HTML
* CSS
* JavaScript

## AI Assistance

AI was used to assist with the JavaScript portion of this project.

The AI was prompted to:

* Create a `generateListHTML` function that loops through an array and generates `<li>` elements.
* Create a click event listener for the `#addBtn` button that validates input, adds the guest to the array, updates the guest counter, renders the list, and clears the input field.
