//Q. Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2),..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
var pairSum = function(nums) { 
    nums.sort((a,b)=>{
        a-b
    });
    let result = 0;
    for (let i = 0; i< nums.length; i++){
        result += nums[i];
        i++;
    }
    return result;
};
console.log(pairSum([1,4,3,2]))





// Q. Alice has n candies, where the ith candy is of type candyType[i]. Alice noticed that she started to gain weight, so she visited a doctor. 

var distributeCandies = function(candyType) {
	let set = new Set(candyType);
	let ans = set.size < candyType.length/2 ? set.size : candyType.length/2;
	return ans;
};
let candy = [1,1,2,2,3,3]
console.log(distributeCandies(candy))



// Q. We define a harmonious array as an array where the difference between its maximum value and its minimum value is exactly 1.




// Q.4 You have a long flowerbed in which some of the plots are planted, and some are not. However, flowers cannot be planted in adjacent plots.




var canPlaceFlowers = function(flowerbed, n) {
    for (let i = 0; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0 &&  (i == 0 || flowerbed[i-1] == 0) && (i == flowerbed.length- 1 ||flowerbed[i+1] == 0)) {
            flowerbed[i] = 1
            n--
            i++
        }
    }
    return n <= 0
};
let  flowerbed = [1,0,0,0,1]
let n = 1
console.log(canPlaceFlowers(flowerbed ,n))



// Q.5 Given an integer array nums, find three numbers whose product is maximum and return the maximum product.
var maximumProduct = function(nums){
    const n = nums.length;
    let sortedNums = nums.sort((a,b)=>{
        a-b
    });
    const maxProduct1 = sortedNums[0]*sortedNums[1]*sortedNums[n-1];
    const maxProduct2 = sortedNums[n-3]*sortedNums[n-2]*sortedNums[n-1];
    return Math.max(maxProduct1, maxProduct2);  
    }
 let nums = [1,2,3]
console.log(maximumProduct(nums))   




//Q.6 Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target in nums. If target exists, then return its index. Otherwise,




const search = function(nums, target) {
    for(let i=0; i<nums.length;i++){
        if(nums[i]=== target){
            return i;
        }
    }
    return -1 ;
};
let nums = [-1,0,3,5,9,12]
let n =target = 9
console.log(search(nums,n))



// Q.7



var isMonotonic = function(nums) {
    if (nums[0] < nums[nums.length - 1]) { 
        for (let i = 0; i < nums.length; i ++) {
            if (nums[i] > nums[i+1]) return false;
        }

        return true;
    }

    for (let i = 0; i < nums.length; i ++) {
        if (nums[i] < nums[i+1]) return false;
    }

    return true;
};

let nums = [1,2,2,3]
console.log(isMonotonic(nums))