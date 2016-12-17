
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