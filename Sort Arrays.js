
function getIndexToIns(arr, num) {
  // Find my place in this sorted array.
  var sorted = arr.sort(function(a, b) { //Sort the arry in ascending order
  return a - b;
});

  //Compare number to each value of array
  for (var i = 0; i < arr.length; i++) {
  	if (num <= arr[i] && num > arr[i-1] || i==0){ //This checks if the number is smaller than which array value, if smaller than all or equal to the first item then it returns the value of that index
  		index = i;
  		console.log(i);
  	}
  	if (num > arr[index]){ //This checks if the number is bigger than the array values and return the postion of the next index of the value it is bigger than
  		index = i+1;
  	}
  }
  console.log(sorted);
  return index;
}

console.log(getIndexToIns([2, 5, 10], 15));