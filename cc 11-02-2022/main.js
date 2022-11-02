// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

//this function with tke in an array
//this function will return true if present and false if not
// [true,  true,  true,  false,
//true,  true,  true,  true ,
//true,  false, true,  false,
//true,  false, false, true ,
//true,  true,  true,  true ,
//false, false, true,  true]
//if item '' --> return false else true

let arrayOfSheep = [true,  true,  true,  false,true,  true,  true,  true ,true,  false, true,  false,true,  false, false, true ,true,  true,  true,  true ,false, false, true,  true]

function countSheeps(arrayOfSheep) {
    let present = 0
    for(let i = 0; i < arrayOfSheep.length; i++) {
        if (arrayOfSheep[i] == true) {
            present++
        }
    }
    console.log(present)
  }

  countSheeps(arrayOfSheep)
