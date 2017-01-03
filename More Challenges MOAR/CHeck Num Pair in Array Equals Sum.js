//Write a function that takes in an array of numbers and sum and checks if there is a pair of numbers within the array that adds up to the sum
//Assume the array passed is sorted in ascending order

function checkPairSum(arr, num){
	for (var i= 0; i < arr.length; i++){
		for (var j= i+1; j<arr.length; j++)
		if (arr[i]+arr[j] == num){
			return true;
		}
	}
	return false;
} 

function efficientCheckPairSum(arr, num){
	var high = arr.length -1;
	var low = 0;
	var sum; 

	while (low<high){
		sum = arr[low] + arr[high];
		if ( sum === num){
			return true;
		}else if(sum < num){
			low++;
		}else {
			high--;
		}
	}
	return false;
}

//Inefficient way
/*console.log(checkPairSum([1,2,3,9], 8));
console.log(checkPairSum([1,2,4,4], 8));*/

//slightly more efficient way
console.log(efficientCheckPairSum([1,2,3,9], 8));
console.log(efficientCheckPairSum([1,2,4,4], 8));