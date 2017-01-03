
function diffArray(arr1, arr2) {

  var firstArray = arr1;
  var secondArray = arr2;
  // Same, same; but different.

  var firstDiff = firstArray.filter(function(val){	//return all values in array 1 that are not in array 2 and store in new array
  	return secondArray.indexOf(val) === -1;
  });

  var secondDiff = secondArray.filter(function(val){ ////return all values in array 2 that are not in array 1 and store in new array 
  	return firstArray.indexOf(val) === -1;
  });

  return firstDiff.concat(secondDiff);
}

console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));