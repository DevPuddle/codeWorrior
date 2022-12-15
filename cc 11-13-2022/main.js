// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

//this function will receive number inputs
//this functin will return a string value
// if number is above 200 --> return sting "overweight"
// function overweight(num, height){ if num divited by height above 200 return "overweight" }

function bmi(weight, height) {
    let bmi = weight / height;
    if (bmi <= 18.5) {
        return 'Underweight'
    } else if (bmi <= 25.0) {
        return "Normal"
    } else if (bmi <= 30.0) {
        return "Overweight"
    } else if (bmi > 30) {
        return "Obese"
    }
}

function bmi(weight, height) {
    var result = weight / Math.pow(height, 2)

    if (result <= 18.5) {
        return "Underweight";
    } else if (result <= 25) {
        return "Normal";
    } else if (result <= 30) {
        return "Overweight";
    } else {
        return "Obese";
    }

}

//New attempt at problem

function bmi(weight, height) {
    let bmi = weight / height
    switch (bmi) {
        case bmi <= 18.5:
            return "Underweight";
            break;
        case bmi <= 25.0:
            return "Normal";
            break;
        case bmi <= 30.0:
            return "Overweight";
            break;
        case bmi > 30:
            return "Obese";
            break;
    }
}

// Correct choice

function bmi(weight, height) {
    var formula = (weight / Math.pow(height, 2));
    switch (true) {
        case formula <= 18.5:
            return 'Underweight';
        case formula <= 25.0:
            return 'Normal';
        case formula <= 30:
            return 'Overweight';
        default:
            return 'Obese';

    }
}