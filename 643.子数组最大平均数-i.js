/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let current = sum = nums.slice(0, k).reduce((a, b) => a + b);
    for (let i = k; i < nums.length; i++) {
        current = current - nums[i - k] + nums[i];
        sum = Math.max(sum, current);
    }
    return sum / k;
};
// console.log(findMaxAverage([0,4,0,3,2],1))
