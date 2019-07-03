//all possible outputs: #, " ", \n
//# every second character. \n every 9th character
//for loop, use modulo to print # or " " for even/odd. use if i == 9 to discern \n 
//if i == 9, do not print odd
var chessBoard = ""
for (let i = 1; i < 64; i++) {
    if(i % 2 == 0){chessBoard +="#"};
    if(i % 9 == 0){chessBoard +="\n"}else if(i % 2 == 1){chessBoard +=" "};
    
}
console.log(chessBoard);