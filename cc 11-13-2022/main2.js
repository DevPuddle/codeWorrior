// Write a function that checks if a given string (case insensitive) is a palindrome.

// input will a string value
// the function will return a boolean value
// input will be car when reversed its a palindrome
// car is .split('').reversed().join('') return true or false

function isPalindrome(x) {
    x = x.toLowerCase()
      let z = x.split('').reverse().join('').toLowerCase()
      if (z === x) {
          return true
      } else {
          return false
      }
  }