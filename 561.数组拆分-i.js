/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    let result = 0;
    nums = nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length / 2; i++) {
        result += nums[i * 2];
    }
    return result;
};

