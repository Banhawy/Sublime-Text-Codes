
function destroyer(arr) {
  // Remove all the values
  var destroyed = [];

  //iterate over the arguments after the passed array and store their value in an array
  for (var i =1 ; i < arguments.length; i++) {
  	destroyed.push(arguments[i]);
  }
  //Use a call back function with filter() to remove any argument values passed after the initital array
  return arr.filter(function(value){
  	return !destroyed.includes(value);
  });
}

console.log(destroyer(["tree", "hamburger", 53], "tree", 53));
