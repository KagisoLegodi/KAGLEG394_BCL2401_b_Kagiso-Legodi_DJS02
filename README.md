Sure, here's a README file based on the provided project brief:

---

# Whole Number Divider Project

## Project Overview

This project focuses on enhancing a web-based Whole Number Divider application by implementing error handling and additional functionalities to meet specific user stories. The provided codebase meets certain user stories but falls short on others, requiring modifications and extensions.

### Resolved Stories

1. **Initial State**: On page load, the message "No calculation performed" is displayed.
2. **Whole Number Division**: Upon submitting two numbers that divide evenly, the application displays the whole number result.

### Unresolved Stories

1. **Dividing numbers result in a decimal number**: Show the integer part of the division result.
2. **Validation when values are missing**: Display error message if either or both inputs are empty.
3. **An invalid division should log an error**: Log an error message if division by zero or non-numeric values are provided.
4. **Providing non-numeric input should crash the program**: Replace the screen with an error message and log a critical error.

## Task Instructions

1. **Review the Starter Code**: Understand the current implementation and its limitations.
2. **Implement User Stories**: Modify the code to fulfill all unresolved user stories. Pay attention to error handling and user input validation.
3. **Error Handling**: Ensure the application handles errors gracefully, providing clear feedback to the user without crashing.
4. **Testing**: Test your application thoroughly with various inputs to ensure it meets all the user stories.

## Solutions Implemented

1. **Handled Decimal Division**: Modified the code to display only the integer part of the division result using `Math.floor()`.
2. **Validation for Missing Values**: Added checks to ensure both inputs are filled before performing the division.
3. **Error Handling for Invalid Division**: Implemented checks for division by zero and non-numeric values, displaying appropriate error messages and logging errors to the console.
4. **Handling Non-Numeric Inputs**: Updated regex pattern to validate inputs and display a critical error if non-numeric values are provided.

## Lessons Learned

1. **Importance of Error Handling**: Proper error handling is crucial for providing a seamless user experience and preventing crashes.
2. **Regex for Input Validation**: Regex patterns are handy for validating user input, ensuring it meets specified criteria.
3. **Graceful Error Display**: Clear and concise error messages help users understand issues and take appropriate actions.

## Problems Encountered

1. **Handling Decimal Division**: Initially struggled with displaying only the integer part of the division result but resolved it by using `Math.floor()`.
2. **Regex Pattern**: Ensuring the regex pattern correctly validates inputs without causing false positives or negatives required careful testing.