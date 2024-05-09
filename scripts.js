const form = document.querySelector("[data-form]");
const result = document.querySelector("[data-result]");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const entries = new FormData(event.target);
  const { dividend, divider } = Object.fromEntries(entries);

  // Error handling: check if inputs are empty
  if (!dividend || !divider) {
    result.classList.add("error-message");
    result.innerText =
      "Division not performed. Both values are required in inputs. Try again.";
    return;
  }

  // Error handling: check if inputs contain invalid characters
  const validInputRegex = /^[0-9]+$/;
  if (!validInputRegex.test(dividend) || !validInputRegex.test(divider)) {
    result.classList.add("critical-error");
    result.innerText = "Something critical went wrong. Please reload the page.";
    console.error("An error occurred: Non-numeric value provided.");
    return;
  }

  try {
    // Force Number conversion
    const dividendNumber = Number(dividend);
    const divisorNumber = Number(divider);

    // Check for other numeric errors
    if (isNaN(dividendNumber) || isNaN(divisorNumber) || divisorNumber === 0) {
      result.innerText =
        "Invalid input: Division by zero or non-numeric value provided.";
      console.error("An error occurred: Division by zero or non-numeric value provided.");
      return;
    }

    const resultValue = dividendNumber / divisorNumber;
    result.innerText = Math.floor(resultValue).toString(); // Display only the integer part
  } catch (error) {
    console.error("An error occurred:", error);
    result.innerText = "Something critical went wrong. Please reload the page.";
  }
});