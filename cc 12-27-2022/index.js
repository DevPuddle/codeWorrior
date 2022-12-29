// The Collatz conjecture (also known as 3n+1 conjecture) is a conjecture that applying the following algorithm to any number we will always eventually reach one:

//Input will only be positive number
//will return a number
//if 6 then 6 /2 if 5 then 3*n+1
// [This is writen in pseudocode]
// if(number is even) number = number / 2
// if(number is odd) number = 3*number + 1
// #Task

// Your task is to make a function hotpo that takes a positive n as input and returns the number of times you need to perform this algorithm to get n = 1.

// #Examples

// hotpo(1) returns 0
// (1 is already 1)

// hotpo(5) returns 5
// 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(6) returns 8
// 6 -> 3 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

// hotpo(23) returns 15
// 23 -> 70 -> 35 -> 106 -> 53 -> 160 -> 80 -> 40 -> 20 -> 10 -> 5 -> 16 -> 8 -> 4 -> 2 -> 1

function hotpo(n) {
    let counter = 0;

    while (n !== 1) {
        counter++
        if (n % 2 === 0 && n !== 1) {
            n / 2
            

        } else if (n % 2 !== 0 && n !== 1) {
            3 * n + 1
        
        }
        break;

    }
    
    console.log(counter);
}

hotpo(5)