<<<<<<< HEAD
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
=======

function titleCase(str) {
	var newString = str.toLowerCase().split(" ");
	for (var i = 0; i < newString.length; i++) {
		var placeHolder = newString[i].split(""); //Split each word in the array into and array of letters
		placeHolder[0] = placeHolder[0].toUpperCase(); //capatilize first letter in each word
		newString[i] = placeHolder.join(""); //Joins the letters in the word and replaces the old string in the original strigs array
	}
  return newString.join(" "); //
}

console.log(titleCase("sHoRt AnD sToUt"));

//oldString[i].charAt(0) = oldString[i].charAt(0).toUpperCase();
>>>>>>> origin/master
