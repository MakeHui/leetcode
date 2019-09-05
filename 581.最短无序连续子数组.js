/*
 * @lc app=leetcode.cn id=581 lang=javascript
 *
 * [581] 最短无序连续子数组
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var findUnsortedSubarray = function(nums) {
    const sortArr = nums.slice(0).sort((a, b) => a - b);
    let left = -1, right = -1;
    for (let i = 0; i < nums.length; i++) {
        if (left === -1 && nums[i] !== sortArr[i]) {
            left = i;
        }
        const ri = nums.length - i - 1;
        if (right === -1 && nums[ri] !== sortArr[ri]) {
            right = ri + 1;
        }
        if (left !== -1 && right !== -1) {
            return nums.slice(left, right).length;
        }
    }
    return nums.slice(left, right).length;
};
// console.log(findUnsortedSubarray([1,3,2,4,5]))
