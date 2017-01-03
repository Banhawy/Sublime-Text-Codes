//Given a positive integer n, output the string representation of all the numbers from 1 to n inclusive while replacing multiples of 5 with Code, multiples of 7 with Fight and multiples of both 5 and 7 with CodeFight.
function CodeFight(n) {
    var arr = [];
    for (var i = 1; i<=n; i++){
        if ((i%7===0) && (i%5===0)){
            // console.log("CodeFight");
            arr.push("CodeFight");
        } else if (i%7===0){
            // console.log("Fight");
            arr.push("Fight");
        } else if (i%5===0){
            // console.log("Code");
            arr.push("Code");
        }else{
            // console.log(i);
            arr.push(i.toString());
        }
    }
    return arr;
}

console.log(CodeFight(15));