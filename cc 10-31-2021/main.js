// You will be given an array a and a value x. All you need to do is check whether the provided array contains the value.

// Array can contain numbers or strings. X can be either.

// Return true if the array contains the value, false if not.

//function will take an array and an orbitrary value
//return a boolean if value is in the array
//if x --> arry --> return true
//assert.strictEqual(check([66, 101], 66), true);

//attemp at solving todays coding challenge.

function check(a, x) {
    return a.includes(x)
  }