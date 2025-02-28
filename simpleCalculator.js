var num1 = prompt("Enter number 1: ");
var num2 = prompt("Enter number 2: ");
var choice = prompt(
  "Enter method to calculate i.e divide/multiply/add/subtract: "
);

if (choice === "divide") {
  alert("Result: " + num1 / num2); // Division will convert to numbers
} else if (choice === "multiply") {
  alert("Result: " + num1 * num2); // Multiplication will convert to numbers
} else if (choice === "add") {
  alert("Result: " + (+num1 + +num2)); // Use +num1 and +num2 to ensure numeric addition
} else if (choice === "subtract") {
  alert("Result: " + (num1 - num2)); // Subtraction will convert to numbers
} else {
  alert("Invalid choice, please try again.");
}
