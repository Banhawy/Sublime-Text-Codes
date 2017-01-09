//Translate the provided string to pig latin.
function translatePigLatin(str) {
	//Stor value of first letter
	var char = str[0];
	//Tests if first letter is a vowel, returns boolean
	var isVowel = function(char){
		return /[aioeu]/.test(char);
	}
	if (isVowel(char)) {
		return str.concat("way");
	}
	var consonant;
	var index = 1;
	for (var i = 0; i < str.length; i++) {
		if (isVowel(str.charAt(i))) {
			index = i;
			consonant = str.slice(0, i);
			i = str.length;
		}
	}
	var sliced = str.slice(index, str.length);
		return sliced.concat(consonant, 'ay');
	
}

console.log(translatePigLatin("banana"));