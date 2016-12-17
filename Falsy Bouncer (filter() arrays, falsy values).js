
function bouncer(arr) {
  // Don't show a false ID to this bouncer.

  function removeFalsies(value){
  	return Boolean(value)===true;
  }

  var filtered = arr.filter(removeFalsies);
  
  return filtered;
}

console.log(bouncer([7, "ate", "", false, 9]));
