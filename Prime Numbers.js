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

console.log(isPrime(0, 100));
