function sumRange(arr){
	var diffPlusOne = Math.max(...arr) - Math.min(...arr)+1;
	var sum = Math.max(...arr) + Math.min(...arr);
	var rangeSum = diffPlusOne * sum / 2;
	return rangeSum;
}

console.log(sumRange([1,4]))