function ageCalculator() {
    // Prompt the user to enter their birth year and current year
    var birthYear = prompt("Enter your birth year: ");
    var currentYear = prompt("Enter the current year: ");
    
    // Calculate the age
    var age = currentYear - birthYear;

    // Display the result
    alert("Your age is: " + age);
}
