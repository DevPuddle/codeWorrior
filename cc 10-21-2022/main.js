// Write a function which converts the input string to uppercase.

// function will take a string
// function will ruturn the string uppercase
// "Isaiah Henson" --> 'ISAIAH HENSON'
// Take the string apply toUppercase() to the string

//Be sure to camal case the methoed toUpperCase~
//KATA solved
function makeUpperCase(str) {
    return str.toUpperCase()
  }

  DESCRIPTION:
// You're writing code to control your town's traffic lights. You need a function to handle each change from green, to yellow, to red, and then to green again.

// Complete the function that takes a string as an argument representing the current state of the light and returns a string representing the state the light should change to.

// For example, when the input is green, output should be yellow.


// the function should take in a string color not case sensitive
// it should return what the color should be next
// green --> yellow
// if green then yellow if yellow then red if red then green 

// Dont return variable just return the result of the logic
//KATA solved
function updateLight(current) {
    if(current === 'red') {
        return current === 'green'
    } else if (current === 'green') {
        return current === 'yellow'
    } else if (current === 'yellow') {
        return current === 'red'
    }

}