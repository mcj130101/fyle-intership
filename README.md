# Fyle Web Development Internship Challenge

## Tax Calculator

This project implements a simple tax calculator that takes a user's  income, deductions,  extra income and age as input and calculates their income tax based on a predefined tax structure.


# Functionality:

 - Users enter their age, income, deductions, and extra income through a web form.
 - Users enter their age, income, deductions, and extra income through a web form.

 - JavaScript retrieves the user input and calculates the taxable income.

 - The program applies a tax rate based on age:

   -  30% for people under 40 years old.
   - 40% for people between 40 and 60 years old (exclusive).
   - 10% for people 60 years old and above.
- Income below 8 Lakhs is not taxed.

The calculated tax amount is displayed on the web page as a **Popup**.

## Files

- **index.html**: This file contains the HTML structure of the web page, including the form elements for user input and a paragraph to display the calculated tax.

- **index.js**: This JavaScript file handles user interaction with the form and performs the tax calculation logic.
- **style.css**: basic styling. Most of the style applied in the project is sourced from **Bootstrap** . Same for modal and tooltip functionality as well.

## Running the Project:

- Clone or download the repository.

- Open index.html in your web browser.

- Enter your age, income, deductions, and extra income in the provided fields.

- Click the "Calculate Tax" button.

The calculated tax amount will be displayed over a Modal.

## Technologies Used:

**HTML**: Defines the structure and content of the web page.

**JavaScript**: Provides interactivity and performs the tax calculations.

**Bootstrap**:Bootstrap comes with a wide range of pre-designed and styled components that you can easily integrate into your web pages.
	Some of the used components: 
	 - Modal
	 - Tooltip 

## Note
This is a simplified example for demonstration purposes. Real-world tax calculations might involve different slabs, deductions, and other factors.

## Test Passes: 

![alt text](<Screenshot from 2024-04-14 16-56-39-1.png>)