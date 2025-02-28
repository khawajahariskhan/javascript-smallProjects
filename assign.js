var name = prompt("Enter your name: ");
var age = prompt("Enter your age: ");
var maths = parseInt(prompt("Enter your marks for maths: "));
var english = parseInt(prompt("Enter your marks for english: "));
var urdu = parseInt(prompt("Enter your marks for urdu: "));
var total;
var percent;

// Validating and prompting for valid marks in Maths
if (maths > 100 || maths < 0) {
    maths = parseInt(prompt("Enter valid maths marks:"));
}

// Validating and prompting for valid marks in English
if (english > 100 || english < 0) {
    english = parseInt(prompt("Enter valid english marks:"));
}

// Validating and prompting for valid marks in Urdu
if (urdu > 100 || urdu < 0) {
    urdu = parseInt(prompt("Enter valid urdu marks:"));
}

// Calculating total and percentage
total = maths + english + urdu;
percent = (total / 300) * 100;

// Displaying all the information in a single alert
alert(
    "Name: " + name + "\n" +
    "Age: " + age + "\n" +
    "Maths Score: " + maths + "\n" +
    "English Score: " + english + "\n" +
    "Urdu Score: " + urdu + "\n" +
    "Total Marks: " + total + "/300\n" +
    "Percentage: " + percent.toFixed(2) + "%"
);
