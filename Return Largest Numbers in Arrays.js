
function largestOfFour(arr) {
  // You can do this!
  var biggestNum;
  for (var i=0; i<arr.length; i++){
    for (var j=0; j<arr[i].length; j++){
      if (arr[i][j]==arr[i][0]){
        biggestNum = arr[i][j]; 
      } else if (arr[i][j] > biggestNum){
        biggestNum = arr[i][j];
      }
    }
    arr[i]= biggestNum;
  }
  return arr;
}

console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));