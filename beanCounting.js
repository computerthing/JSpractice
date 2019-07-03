//find how many uppercase "B" characters are in a given string

//loop through if statement, use variable to count matches
function upperBCount(string){
    let Bcounter = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] == "B"){
            Bcounter += 1;
        }
        console.log(Bcounter)
    }
};

upperBCount("AaBbCcDd")