
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany, arr.length);
}

console.log(slasher([1, 2, 3], 9));