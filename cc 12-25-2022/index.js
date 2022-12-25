// Create a function called shortcut to remove the lowercase vowels (a, e, i, o, u ) in a given string.

// Examples
// "hello"     -->  "hll"
// "codewars"  -->  "cdwrs"
// "goodbye"   -->  "gdby"
// "HELLO"     -->  "HELLO"

//will receive a string value
//will return a string value
//"cable" --> "cbl"
//function -- "cable" split method then map over the new array then join them followed by the return;


function shortcut(string) {
    
    let str = string.split('')
    for (let i = 0; i < string.length; i++) {
        if (string[i] === "a" ||
            string[i] === "e" ||
            string[i] === "i" ||
            string[i] === "o" ||
            string[i] === "u") {
            str += ""
        } else {
            str += string[i]
        }
        console.log(str)

    }

}
shortcut("orange")