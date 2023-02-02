//<><><><><><><>><><><><><><><><><><><>
//Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// const nums = [1,2,3,1]

// function cD (nums){
// nums.sort()
// for (let i = 0; i < nums.length; i++) {
//  if(nums[i] === nums[i+1])  {
//     return true
//  }
// }
// return false
// }

// console.log(cD(nums));

//<><><><><><><>><><><><><><><><><><><>
//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
//You may assume that each input would have exactly one solution, and you may not use the same element twice.
//You can return the answer in any order.

// nums = [2,7,11,15]
// target = 9

// function twoSums(nums){
//   for(let i=0; i<nums.length; i++){
//     sum = nums[i] + nums[i+1]
//     if(sum == target){
//         return [i,i+1]
//     }
//   }

    
// }

// console.log(twoSums(nums))