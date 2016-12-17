
function factorialize(num) {
	var results = num;

		while(num > 1){
			num--;
			results *= num;
		}
	console.log(results);
  return results;
}

factorialize(5);
