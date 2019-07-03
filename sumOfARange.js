"use strict" //strict mode
// Write a range function that takes two arguments, start and end, and returns an array containing all the numbers from start up to (and including) end.
// Next, write a sum function that takes an array of numbers and returns the sum of these numbers.
// Modify your range function to take an optional third argument that indicates the “step” value used when building the array. If no step is given, the elements go up by increments of one. Make sure it also works with negative step values.

var theArray = []; // empty array to be used by rangeArray and sumArray

function rangeArray(start, end, step = start < end ? 1 : -1){ // step argument changes how many numbers to skip each iteration. defaults to 1 if no argument is given. (see next line)
// in this updated version, step will default to -1 if start > end. this is to ensure descending ranges are iterated correctly. 
    if(start < end){ //this if-else discerns between ascending (start < end) and descending (start > end) ranges
        for (let i = start; i <= end; i+=step) { // this for-loop is for ranges where start < end
        theArray.push(i); // add resulting number to theArray
        //console.log(...theArray); // this prints all values currently in theArray
    }}else
        if(start > end){
            for (let i = start; i >= end; i+=step) { // this for-loop is for ranges where start > end
                theArray.push(i); // add resulting number to theArray
                //console.log(...theArray); // this prints all values currently in theArray
            };
        };
    return theArray;  
};  

function sumArray(inputArray){
    let result = 0; // storage value for sum of array
    for (let i = 0; i < inputArray.length; i++) {
        result += inputArray[i]; 
        //console.log(result)
    };
};


//these two commands are to test the functions
console.log(rangeArray(5, 2, -1));
sumArray(theArray);
