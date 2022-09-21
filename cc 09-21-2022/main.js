// Consider an array/list of sheep where some sheep may be missing from their place. We need a function that counts the number of sheep present in the array (true means present).

// For example,

// [true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//   false, false, true,  true]
// The correct answer would be 17.

// Hint: Don't forget to check for bad values like null/undefined

//P: the function will take in an array
//R: the return would be a number 
//E: a list will be provided and the function will count
//P: for loop and if present count if not don't count

let arrayOfSheep = [true,  true,  true,  false,
   true,  true,  true,  true ,
   true,  false, true,  false,
   true,  false, false, true ,
   true,  true,  true,  true ,
   false, false, true,  true]

function countSheeps(arrayOfSheep) {
    for(let i = 0; i < arrayOfSheep; i++) {
        let present = 0
        if (i = true) {
            present++
            console.log(present)
        }
        console.log(present)
        return present
    }
  }

  countSheeps(arrayOfSheep)

  //Correct answer to todays coding problem

  function countSheeps(arrayOfSheep) {
    // TODO May the force be with you
    var num = 0;
    
    for(var i = 0; i < arrayOfSheep.length; i++)
      if(arrayOfSheep[i] == true)
        num++;
        
    return num;
  }

