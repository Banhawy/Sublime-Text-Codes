function palindrome(str) {
  var oldString = str.toLowerCase();
  function replacer(match, p1, string){
  	return '';
  }
  var pString1 = oldString.replace(/(\s)/g, replacer).replace(/(\W)/g, replacer).replace(/([_])/g, replacer);
  var pString2 = pString1.split('').reverse().join('');

  return (pString1 == pString2);
}



console.log(palindrome("_eye"));

//(\t+)(\r+)(\f+)(\d+)(\W+) p2, p3, p4, p5,

//	return p1.filter(function(val){
//  		return val == char;
//  	});