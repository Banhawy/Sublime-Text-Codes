//Perform a search and replace on the sentence using the arguments provided and return the new sentence.
//First argument is the sentence to perform the search and replace on.
//Second argument is the word that you will be replacing (before).
//Third argument is what you will be replacing the second argument with (after).
function myReplace(str, before, after) {
	var arrString = str.split(" ");

	for (var i = 0; i < arrString.length; i++) {
		if (arrString[i] === before){
			var charUpper = arrString[i].charAt(0);
				if (charUpper === charUpper.toUpperCase()) {
					var afterUpper = after.split('');
					afterUpper[0] = afterUpper[0].toUpperCase();
					after = afterUpper.join('');
				}
			arrString[i] = after;
		}
	}
  return console.log(arrString.join(' '));
}

myReplace("A quick brown fox Jumped over the lazy dog", "Jumped", "leaped");
