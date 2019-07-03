// reverseArray: takes an array as argument and produces a new array that has the same elements in the inverse order.

let outputArray = []; //storage for reversed array, used in reverseArray for-loop
let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; //for testing reverseArray

function reverseArray(inputArray){
    for (let i = inputArray.length; i > 0; i--) {
        outputArray.push(i);
        //console.log(i)
    }
    console.log("Input array: " + inputArray + "\nReversed array: " + outputArray)
};

//this is for testing reverseArray
reverseArray(exampleArray);
