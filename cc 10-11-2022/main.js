// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input --> Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5" 

//P: Am array will be passed into the function
//R: Function should return a string including the index at which it was found
//E: Will receive array ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] --> "found the needle at position 5"
//P:pass array into function if function equals "needle" return it within string templat literal

function findNeedle(haystack) {
       return `found the needle at position ${haystack.indexOf("needle")}`
  }

  haystack = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]

  findNeedle(haystack)

  // My solution to the coding problem