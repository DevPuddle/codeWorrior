// DESCRIPTION:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//P: the input for this function will be a string.
//R: will return a number count of the vowels
//E: input apple --> return num 2
//P: "apple" loop over the string and store the count of vowles

function getCount(str) {
    let count = 0;
    let newStr = str.split('')
    for (let i = 0; i < newStr.length; i++) {
        if (newStr[i] === "a"||"e"||"i"||"o"||"u") {
            count++
            console.log(count)

        }
    }
    console.log(newStr)
    console.log(count)

}

getCount("apple")

//correct answer to the coding challenge

function getCount(str) {
    let count = 0;
    let vowels = ["a", "e", "i", "o", "u"]
    for(let i=0; i<str.length; i++){
      for(let j=0; j<vowels.length; j++){
        if(vowels[j] === str[i]) {
          count++
        }
      }
    }
      
    return count;
  }
  
