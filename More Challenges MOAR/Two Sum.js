var twoSum = function(nums, target) {
    var sorted = nums.map(function(a, b) {
        return (a.value > b.valu);
    })
    console.log(sorted);
    var low = 0;
    var high = sorted.length-1;
    var sum;
    var indicies = [];
    
    while(low<high){
        sum = sorted[low]+sorted[high];

        if(sum === target){
            //indicies.push(low, high);
            var lowVal = sorted[low];
            var highVal = sorted[high];
            indicies.push(nums.indexOf(lowVal), nums.indexOf(highVal));
            return indicies;
        }else if(sum<target){
            low++;
        }else{
            high--;
        }
    }

    return "No valid pair found";
};

console.log(twoSum([3,2,4], 6));