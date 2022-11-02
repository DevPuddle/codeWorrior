// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//function will take an array and an orbitrary value
//return a boolean if value is in the array
//if x --> arry --> return true
//assert.strictEqual(check([66, 101], 66), true);

//attemp at solving todays coding challenge.

function check(a, x) {
    return a.includes(x)
  }

//correct answer

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

//This function accepts a number 
//this func will return a number multiplied
//num times another num if even else another if odd
//if 5 multiply by 9 if even by 8 return the result

function simpleMultiplication(number) {
    if(number % 2 === 0){
        return number * 8
    } else {
        return number * 9
    }
}