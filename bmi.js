function bmiCalculator(){
    let name = prompt("Enter your Name: ");
    let weight = +prompt("Enter your weight in kilograms: ");
    let height = +prompt("Enter your height in meters: ");
    
    let bmi = weight / (height * height);
    if (weight > 0 && height > 0){
        alert("Name: " + name 
            + "\nWeight: " + weight 
            + " kg" + "\nHeight: " 
            + height + " m" 
            + "\nBMI: " + bmi);
    }
}
