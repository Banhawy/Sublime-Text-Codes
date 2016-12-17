
function mutation(arr) {
	//Turn strings to lower case  
	arr[0] = arr[0].toLowerCase();
	arr[1] = arr[1].toLowerCase();

	//Split second string into an array of letters
	secondElement = arr[1].split('');

	//
	for (var i = 0; i < secondElement.length; i++) {
		if (arr[0].indexOf(secondElement[i])<0){
			return false;		}
	}
  return true;
}

console.log(mutation(["hEllo", "HEll"]));
