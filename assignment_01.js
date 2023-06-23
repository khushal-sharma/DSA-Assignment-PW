//Q.1 2Sum
let array = [2,3,7,6]
const target =9
for(let i=0; i<array.length; i++){
    for(let j=0; j<array.length; j++){
        if(array[i]+array[j] == target && i<j){
            console.log([i,j])
            }
        }
    }



// Q.2 . Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

let array = [1,2,3,2,4,2,5,2,8,2]
let num = 2
let removeElement = function(nums,val){
    let index = 0;
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==val){
            nums[index]=nums[i]
            index++
        }
    }return index
}

console.log(removeElement(array,num))
// THIS SOLUTION IS NOT RIGHT.




// Q3. Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.


let array = [1,3,5,6]
const target = 5
for(let i=0; i<array.length; i++){
    if(array[i]==target){
        console.log(i)
    }

}


// Q4. You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

let array = [1,2,3,9]
let res = 0
for(let i=0; i<array.length; i++){
   res +=array[i]*10**(array.length - (i+1))
}
let finalResult = res + 1
console.log(finalResult)


// Q5. You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

let num1 =[1,2,3,0,0,0]
let num2 = [2,5,6]
let num3 = []
for(let i=0; i<num1.length; i++){
    if(num1[i]>0){
        num3[i]=num1[i]
    }
}
let mergedArray = [...num2,...num3]
for(let i=0; i<mergedArray.length; i++){
    for(let j=0; j<mergedArray.length; j++){
        if(mergedArray[j]>mergedArray[j+1]){
            let temp = mergedArray[j]
            mergedArray[j]= mergedArray[j+1]
            mergedArray[j+1]= temp
        }
    }
}

console.log(mergedArray)



// Q6. Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

let duplicateContain = function(nums){
    let set = new Set(nums)
    return set.size !== nums.length

}
const nums = [1,2,3,1]
console.log(duplicateContain(nums))




// Q7. Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the nonzero elements.
let moveZero = function(nums){
    let prevIdx = 0
    for(let i=0; i<nums.length; i++){
        if(nums[i]!==0){
            let hold =nums[prevIdx]
            nums[prevIdx]=nums[i]
            nums[i]=hold
            prevIdx++
        }
    }
    return nums
}
let nums = [0,1,0,3,12]
console.log(moveZero(nums))


// Q8. You have a set of integers s, which originally contains all the numbers from 1 to n. Unfortunately, due to some error, one of the numbers in s got duplicated to another number in the set, which results in repetition of one number and loss of another number.

let findErrorNums = function(nums) {
    let result = [];
    
    nums = nums.sort()
    for(let i=1; i <= nums.length; i++){
       if(nums[i - 1] == nums[i])
        result[0] = nums[i]
       if(nums.indexOf(i) == -1)
        result[1] = i;
    }
    return result
};
let nums = [1,2,2,4]
console.log(findErrorNums(nums))

