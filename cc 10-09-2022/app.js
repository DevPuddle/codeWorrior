// Your task is to create a function that does four basic mathematical operations.

// The function should take three arguments - operation(string/char), value1(number), value2(number).
// The function should return result of numbers after applying the chosen operation.

// Examples(Operator, value1, value2) --> output
// ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7

//P: this fucntion will take in two parameters two number and a string/char
//R: This function will return the sum of mathimatical opertations
//E: ('+', 4, 7) --> 11
// ('-', 15, 18) --> -3
// ('*', 5, 5) --> 25
// ('/', 49, 7) --> 7
//P: "-" "5" "5" -> 0

function basicOp(operation, value1, value2)
{
    console.log(value1 + operation + value2) 
}

basicOp('-', 5, 5)