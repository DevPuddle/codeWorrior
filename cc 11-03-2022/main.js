// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example

//Array will be entered
//will return a num 
//if true --> num++
//loop over the array and have a conditional which add to the result

let arrayOfSheep = [true,  true,  true,  false,
    true,  true,  true,  true ,
    true,  false, true,  false,
    true,  false, false, true ,
    true,  true,  true,  true ,
    false, false, true,  true]

function countSheeps(arrayOfSheep) {
    let results = 0
    for (let i = 0; i < arrayOfSheep.length; i++ ){
        if(arrayOfSheep[i] === true) {
            results++
        }
    }
    console.log(results)
}
countSheeps(arrayOfSheep)