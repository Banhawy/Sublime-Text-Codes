function binarySearch(arr, target){
	var min = 0;
	var getMin = arr[0];
	var max = arr.length - 1;
	var getMax = arr[max];
	var mid = (min+max)/2;

	while (getMax>getMin){
		if (arr[mid]==target){
			return mid;
		}else if (arr[mid]>target){
			max = mid-1;
		} else if(arr[mid]<target){
			min = mid+1;
		}else{
		return -1;
	}
	}
	return -1;
}

console.log(binarySearch([1,2,3,4,5], 3));