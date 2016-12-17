var testString ="If you want something said, ask a man ; if you want something done, ask a woman.";
console.log(testString);

function removeRegex(string){
	var modifiedString = string.split('');

		for (let char of modifiedString){
			if (char === "'"){
				char = "\'";
				console.log("hi!");
			}
			if (char === ";"){
      			char = ',';
      			console.log("hi!");
    		}
		}
		return modifiedString.join('');
}


console.log(removeRegex(testString));