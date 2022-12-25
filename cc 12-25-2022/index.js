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

function shortcut (string) {
    let newStr = string.split('').filter(function(elem) {

     if (elem === "a" || "e" || "i" ||"o"||"u"){ 
        elem.splice(0,1)

     }
    })
    console.log(newStr)

}
shortcut("orange")