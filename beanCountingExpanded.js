//find how many instances of a character (char) are in a given string (string)
//note that this will only match with single characters at a time, because the for-loop iterates through one character at a time

//loop through if statement, use variable to count matches
function charCount(string, char){
    let currentCharCounter = 0; //this will hold and return the total chars in string
    for (let i = 0; i < string.length; i++) { //this for-loop iterates through each character in the string and the nested if statement adds 1 to the counter if a match for char is found
        if (string[i] == char){
            currentCharCounter += 1;
        }
        
    } console.log("Total amount of " + char + " in " + string + " = " + currentCharCounter)
};

charCount("AdadBdbdCdcd1Dddd", "Ad");
