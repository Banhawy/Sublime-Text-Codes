//console.log("ABC".charCodeAt(0));

function rot13(str) { // LBH QVQ VG!
	//Split the String into an array of letters
  var cypher = str.split("");

  //Call back map function seubstracts/adds 13 to each letter and stores them in the new array 
  var decipher = letters.map(function(val){
  	if (val.charCodeAt() > 90 || val.charCodeAt() < 65){
  		return val;
  	}else if ((val.charCodeAt() + 13) > 90 ){
  	return String.fromCharCode(val.charCodeAt() - 13);
  }else{
  	return String.fromCharCode(val.charCodeAt() + 13)
  }
  });
  
  return decipher.join(""); //Return the new deciphered string after joining the letters in the array 
}

// Change the inputs below to test
console.log(rot13("GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK."));