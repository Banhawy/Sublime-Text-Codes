
function sumPrimes(num) {
  
  var isPrime= function (number){
    for (var i = 2; i <= Math.sqrt(number); i++) {
        if (number%i === 0 ){ //Checks if any numbers from 2 to num are divisible by num
          return false;

        }
        console.log("hi");
      }
  return true;
 };
  
  var primeSum = 0;
  
  for(var i=2; i<=num; i++){
    if (isPrime(i)==true){
      primeSum += i;
      //console.log(i);
    }
  }
  console.log(isPrime(4));
  return primeSum;
}

console.log(sumPrimes(977));
//console.log(Math.sqrt(4));

