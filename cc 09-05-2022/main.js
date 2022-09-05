// Implement a function which convert the given boolean value into its string representation.

// Note: Only valid inputs will be given.

//P: input will be a true or false conditional
//R: This function will return a string value
//E: function trueorfalse(x){
//   
// P: 

//Over thinking below this is the correct answer.
function booleanToString(b) {
    if (b) {
        return b.toString();
    } else {
        return b.toString();
    }
}

// Correct Answer
function booleanToString(b) {
    return b.toString()
}

//New coding challenge

// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

//P: A string will be passed into the function
//R: This function will return a shortend string
//E: function abname(n) name need to be put into an array, return the first initials capitalized sep by period
//P: return name.split(' ')

function abbrevName(name){
    let arr = name.split(' ')
    arr.forEach(element => {
        return element.charAt(0).toUpperCase() + '.'
    });
}  
console.log(abbrevName('Isaiah Henson'))
console.log(arr)

//Correct answer is: 
//
function abbrevName(name){
    return name[0].toUpperCase() + "." + name[name.indexOf(' ')+1].toUpperCase();

}  