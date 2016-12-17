
function findLongestWord(str) {
  var string = str.split(" ");
  console.log(string);
  var placeHolder = "";
  console.log(string[0].length);
    for (var i = 0; i<string.length; i++){
      if (string[i].length> placeHolder.length){
      	//console.log("something");
        placeHolder = string[i];
      }
    }
  return placeHolder.length;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
