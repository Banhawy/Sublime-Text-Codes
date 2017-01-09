
function whatIsInAName(collection, source) {
  // Use filter to compare values in source object and collection array onjects
  var arr = collection.filter(function(val) {
  	//Return the array items that contain the source object
  		for (var i in source){
  			if (source[i] != val[i] ){
  				return false;
  			}
  		}
  		return true;
  });
  return arr;
}

console.log(whatIsInAName([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 }));
