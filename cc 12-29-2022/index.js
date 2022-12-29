// Can you find the needle in the haystack?

// Write a function findNeedle() that takes an array full of junk but containing one "needle"

// After your function finds the needle it should return a message (as a string) that says:

// "found the needle at position " plus the index it found the needle, so:

// Example(Input  Output)

// ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"] "found the needle at position 5" 
// Note: In COBOL, it should return "found the needle at position 6" 

//This function will take in array
//Will return a string value
//[orange, apple, pear] --> "found the needle at position" + indexOf said value
//function findNeedle(){loop with array method, store index in a variable then return string + variable}



function findNeedle(haystack) {
    let str = "found the needle at position ";
    let ans;
    for(let i = 0; i < haystack.length; i++){
        if (haystack[i] === "needle"){
             ans = str + haystack.indexOf("needle");
        }
    }
    return ans
}

findNeedle(arr)