
function smallestCommons(arr) {
	arr.sort();
	var range = arr[1] - arr[0];

  return range;
}


console.log(smallestCommons([1,5]));