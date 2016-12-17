function confirmEnding(str, target) {
var anyString = str;
var length = -1 * target.length; //Determine and store the length of the target substring, turn it to negative to pass as arguement for .substring() method

//Check to see if given string ends with the target substring and return true if correct
if (str.substr(length) == target){ 
	return true;
}
  return false;
}

console.log(confirmEnding("Open sesame", "pen"));