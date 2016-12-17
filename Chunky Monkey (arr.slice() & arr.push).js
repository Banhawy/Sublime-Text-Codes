
function chunkArrayInGroups(arr, size) {
  // Break it up.
  var sliced= []; //Creat an empty array
  for (var i=0; i<arr.length; i+=size){  //iterate over the array passed skipping size amount of array values in each iteration
  	sliced.push(arr.slice(i, i+size)); //slice the passed size and push it as a subarray in the variable sliced
  }
  return sliced;
}

console.log(chunkArrayInGroups(["a", "b", "c", "d", "x"], 2));
