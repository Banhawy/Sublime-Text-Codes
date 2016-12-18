function isPrime(num, num2){
	if (num2 === undefined)
	{
		if (num <= 1 || num%1 !== 0){ //Checks if num is 1 and is a decimal
			return false;
		}
		else{ 
			for (var i = 2; i < num; i++) {
				if (num%i === 0 ){ //Checks if any numbers from 2 to num are divisible by num
					return false
				}
			}
		}
		return true;
	} else{
		primeArray = [];
		for (var i = num; i <= num2 ; i++) 
		{
			if (isPrime(i)) {
				primeArray.push(i);
			}
		}
		return primeArray;
	}
}

function numberOfPrimes(arr)
{
	return arr.length;
}

function efficientPrime(num, num2){  //This function is much more efficient
	if (num <= 1)
	{
		return false;
	}
	for (var i = 2; i <= Math.sqrt(num); i++) {
		if (num%i == 0)
		{
			return false;
		}
	}
	return true;
}

console.log(isPrime(1));
console.log(efficientPrime(1));

//console.log(Math.pow(2,4));