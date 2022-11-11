// Introduction
// The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.

// Task
// Given a year, return the century it is in.

// Examples
// 1705 --> 18
// 1900 --> 19
// 1601 --> 17
// 2000 --> 20

// this function will tke in numbers
// this function with return number relting to the century
// 1705 --> 18
// if lst number is one or high round up else if 00 less

//nswer to november th chllenge 

// function century(year) {
//     return Math.ceil(year/100)
//   }

//   Write a function that accepts two integers and returns the remainder of dividing the larger value by the smaller value.

//   Division by zero should return NaN.
  
//   Examples:
//   n = 17
//   m = 5
//   result = 2 (remainder of `17 / 5`)
  
//   n = 13
//   m = 72
//   result = 7 (remainder of `72 / 13`)
  
//   n = 0
//   m = -1
//   result = 0 (remainder of `0 / -1`)
  
//   n = 0
//   m = 1
//   result - division by zero (refer to the specifications on how to handle this in your language)

// two integers 
// return the vlue of the big num being devided
//if num is 20 second num 2 devide the lrger byt the other
// if num to is greter devide it by other vice vera


// function remainder(n, m){
//     if (n > m ){
//         return n/m
//     } else {
//         return m/n
//     }
//   }

//   //correct problem forgot the modulus sybol
//   function remainder(a, b){

//     if(b>a)
//       return b%a;
//     else
//       return a%b;
//   }

//   remainder(900,1200)

//ATM machines allow 4 or 6 digit PIN codes and PIN codes cannot contain anything but exactly 4 digits or exactly 6 digits.

// If the function is passed a valid PIN string, return true, else return false.

// this function will receive number 
// this function will return a boolean value
// if four dor six digits -> true else false
// IF(value.length === 4 or 6) return true else false

//temped answer for coding problem
function validatePIN (pin) {
    if (pin.length === 4 || 6) {
        console.log(true) 
        if(pin.length !== 6 || 4) {
            return false
        }
    } else {
        console.log(false) 
    }
}

validatePIN(12346)
  
//   Examples (Input --> Output)
//   "1234"   -->  true
//   "12345"  -->  false
//   "a234"   -->  false

//correct 
function validatePIN (pin) {
    if (pin.length === 4 || pin.length ===6) {
      return pin.split('').every((num) => !isNaN(parseInt(num)));
    }
    return false;
  }



