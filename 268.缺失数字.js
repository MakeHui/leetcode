/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 缺失数字
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let result = 0;
    for(let i = 1; i <= nums.length; i++) {
        result -= nums[i-1];
        result += i;
    }
    return result;
};

