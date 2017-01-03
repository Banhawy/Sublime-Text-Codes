function binarySearch(arr, target){
	var min = 0;
	var minValue = arr[0];
	var max = arr.length - 1;
	var maxValue = arr[max];
	var mid = Math.floor((min+max)/2);

	/*while (maxValue>minValue){
		if (arr[mid]==target){
			return mid;
		}else if (arr[mid]>target){
			maxValue = arr[mid-1];
		} else if(arr[mid]<target){
			minValue = arr[mid+1];
			min = arr[]
		}else{
		return -1;
		}
	}

	return -1;*/

	return mid;



}

console.log(binarySearch([1,2,3,4,5,10,23,26,30,31], 23));