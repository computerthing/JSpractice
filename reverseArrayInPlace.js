// reverseArrayInPlace , does what the reverse method does: it modifies the array given as argument by reversing its elements. Do not use the standard reverse method.
// note: array values are immediately overwritten, so in order to switch values within an array, one must use another variable to store at least one of them


let exampleArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]; // for testing reverseArrayInPlace

function reverseArrayInPlace(inputArray){
    for (let i = 0; i < inputArray.length/2; i++) {
        let storage = inputArray[i];
        inputArray[i]=inputArray[inputArray.length-1-i]; 
        inputArray[inputArray.length-1-i] = storage; 
    };
    return inputArray
};

console.log(reverseArrayInPlace(exampleArray))