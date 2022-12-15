// Given an array of integers, return a new array with each value doubled.

// For example:

// [1, 2, 3] --> [2, 4, 6]

//P: an array of integers
//R: will return an array / integers doubled
//E: [1,2,3] --> [2,4,6] results
//P: function duble(arr){reduce --> arry} return it doubled

// Use the map method
function maps(x){
    let newArr = x.map(x => x*2)
    console.log(newArr)
}

maps([1,2,3,4])