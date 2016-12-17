//Function takes a string and capitalizes first letter in each word
function titleCase(str) {
  var oldString = str.split(" "); //splits sentence into array of strings
  console.log(oldString);
  var newString= [];

  //Iterate over each string in the array, capataize first letter and store it in a new array
  for (var i = 0; i < oldString.length; i++) {
  	console.log(oldString[i].toUpperCase());
  	newString.push(oldString[i]);
  }
  return newString.join(" "); //joins the new strings and returns the complete sentence
}

console.log(titleCase("i'm a little tea pot"));
//Did it on desktop