//Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. 
//For numbers which are multiples of both three and five print “FizzBuzz”
var fizzBuzz = function (num) {
	if (num%3 === 0 && num%5 === 0){
		return true;
	}
	return false;
}

var fizz = function (num) {
	if (num%3 == 0 && num%5 !== 0) {
		return true;
	}
	return false;
}

var buzz = function (num) {
	if (num%5 == 0 && num%3 != 0) {
		return true;
	}
	return false;
}

for (var i = 1; i <= 100; i++) {
	if (fizz(i)){ console.log('Fizz')}
		else if (buzz(i)) {console.log('Buzz')}
			else if (fizzBuzz(i)) {console.log('FizzBuzz')}
				else
					console.log(i);
}


//console.log(fizzBuzz(10));